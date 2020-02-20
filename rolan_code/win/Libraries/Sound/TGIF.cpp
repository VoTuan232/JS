//
// @(#)TGIF.cpp
//
// Copyright 2019 Roland Corporation. All rights reserved.
//

#ifdef USE_TGIF

#include "TGIF.h"
#include "../../security.h"

static HMODULE dllHandle = NULL;
static LONG loadCount = 0;

TGIF* TGIF::mp_instance = 0;
bool TGIF::m_thru = false;
ULONGLONG TGIF::m_renderFrames = 0;
DWORD TGIF::m_time0 = 0;
DWORD TGIF::m_lastTimeStamp = 0;

#define	FRAMES_PER_BURST	256
#define	INIT_BUF_NUM		12

typedef bool (*DLL_ACTIVATE)(void*, UINT, UINT);
typedef int  (*DLL_GETVALUE)(UINT);
typedef void (*DLL_SETVALUE)(UINT, int);
typedef void (*DLL_MIDIFLUSH)(void);
typedef void (*DLL_MIDISEND)(const BYTE*, int, long);
typedef void (*DLL_RENDER_FLT)(float *, long);
typedef void (*DLL_RENDER_I16)(short *, long);

static DLL_ACTIVATE   libtg_activate;
static DLL_GETVALUE   libtg_getValue;
static DLL_SETVALUE   libtg_setValue;
static DLL_MIDIFLUSH  libtg_flushEvents;
static DLL_MIDISEND   libtg_processEvents;
static DLL_RENDER_FLT libtg_processReplacingFloat;
static DLL_RENDER_I16 libtg_processReplacingI16;

static void* context();

TGIF::TGIF() : SoundEngine(FRAMES_PER_BURST, INIT_BUF_NUM) {}

void TGIF::init()
{
	if (::InterlockedIncrement(&loadCount) == 1) {
		dllHandle = ::LoadLibrary(TEXT("libtg.dll"));
		if (dllHandle) {
			libtg_activate              = (DLL_ACTIVATE  )::GetProcAddress(dllHandle, "libtg_activate");
			libtg_getValue              = (DLL_GETVALUE  )::GetProcAddress(dllHandle, "libtg_getValue");
			libtg_setValue              = (DLL_SETVALUE  )::GetProcAddress(dllHandle, "libtg_setValue");
			libtg_flushEvents           = (DLL_MIDIFLUSH )::GetProcAddress(dllHandle, "libtg_flushEvents");
			libtg_processEvents         = (DLL_MIDISEND  )::GetProcAddress(dllHandle, "libtg_processEvents");
			libtg_processReplacingFloat = (DLL_RENDER_FLT)::GetProcAddress(dllHandle, "libtg_processReplacingFloat");
			libtg_processReplacingI16   = (DLL_RENDER_I16)::GetProcAddress(dllHandle, "libtg_processReplacingI16");

			if (!libtg_activate || !libtg_activate(context(), kSampleRate, FRAMES_PER_BURST)) {
				::FreeLibrary(dllHandle);
				dllHandle = NULL;
				return;
			}
			mp_instance = new TGIF();
		}
	}
}

void TGIF::exit()
{
	if (InterlockedDecrement(&loadCount) == 0) {
		if (dllHandle) {
			delete mp_instance;
			mp_instance = 0;
			m_thru = false;
			::FreeLibrary(dllHandle);
			dllHandle = NULL;
		}
	}
}

bool TGIF::available()
{
	return (dllHandle != NULL);
}

int TGIF::buffer()
{
	return dllHandle ? mp_instance->bufferNum() : -1;
}

void TGIF::buffer(int num)
{
	if (dllHandle) mp_instance->bufferNum(num);
}

int TGIF::param(UINT pid)
{
	return dllHandle ? libtg_getValue(pid) : 0;
}

void TGIF::param(UINT pid, int value)
{
	if (dllHandle) libtg_setValue(pid, value);
}

void TGIF::MIDISend(const BYTE* data, int datalen, DWORD timeStamp)
{
	if (dllHandle) {
		long deltaFrames = 0;
		if (m_lastTimeStamp && timeStamp) {
			long deltaMillis = timeStamp - m_lastTimeStamp;
			deltaFrames = kSampleRate * deltaMillis / 1000;
		}
		m_lastTimeStamp = timeStamp;
		libtg_processEvents(data, datalen, deltaFrames);
	}
}

bool TGIF::render(void* outputs, int bytes)
{
	if (((m_renderFrames * 1000 / kSampleRate) + m_time0 < ::GetTickCount())) {
		m_renderFrames = m_lastTimeStamp = 0;
		libtg_flushEvents();
	}

	long frames = (bytes / kBytesPerFrame);
#ifdef USE_WAVE_FORMAT_IEEE_FLOAT
	libtg_processReplacingFloat((float*)outputs, frames);
#else
	libtg_processReplacingI16((short*)outputs, frames);
#endif

	if (m_renderFrames == 0) m_time0 = ::GetTickCount() + 1;
	m_renderFrames += frames;

	return true;
}

static void* context()
{
	DWORD len = LIBTG_ACTIVATION_KEY_LEN;
	BYTE key[LIBTG_ACTIVATION_KEY_LEN + 4];
	DESCRUMBLE_KEY(key, LIBTG_ACTIVATION_KEY);

	DWORD pid = ::GetCurrentProcessId();
	key[len++] = (BYTE)((pid >> 24) & 0xff);
	key[len++] = (BYTE)((pid >> 16) & 0xff);
	key[len++] = (BYTE)((pid >>  8) & 0xff);
	key[len++] = (BYTE)((pid >>  0) & 0xff);

	#define MD5_LENGTH	(16)
	static BYTE digest[MD5_LENGTH];
	memset(digest, 0, sizeof(digest));

	HCRYPTPROV hProv = NULL;
	HCRYPTHASH hHash = NULL;
	HCRYPTKEY  hKey  = NULL;

	if (!::CryptAcquireContext(&hProv, NULL, MS_ENH_RSA_AES_PROV, PROV_RSA_AES, CRYPT_VERIFYCONTEXT)) goto end;
	if (!::CryptCreateHash(hProv, CALG_MD5, 0, 0, &hHash)) goto end;
	if (!::CryptHashData(hHash, key, len, 0)) goto end;
	DWORD size = MD5_LENGTH;
	if (!::CryptGetHashParam(hHash, HP_HASHVAL, digest, &size, 0)) goto end;

end:
	if (hProv) ::CryptReleaseContext(hProv, 0);
	if (hHash) ::CryptDestroyHash(hHash);
	if (hKey)  ::CryptDestroyKey(hKey);

	return digest;
}

#endif /* USE_TGIF */
