//
// @(#)TGIF.h
//
// Copyright 2019 Roland Corporation. All rights reserved.
//

#ifdef USE_TGIF

#ifndef __TGIF_H__
#define __TGIF_H__

#include "SoundEngine.h"
#include "../MIDIClient/MIDIOutputEndpoint.h"
#include <atlstr.h>

#define DEVID_TGIF	0x1001

class TGIF : public SoundEngine
{
  public:
	static void init();
	static void exit();

	static bool available();
	static CString getDevName() { return TEXT("TGIF"); }

	static int  buffer();
	static void buffer(int num);

	static int  param(UINT pid);
	static void param(UINT pid, int value);
	static void MIDISend(const BYTE* data, int datalen, DWORD timeStamp);

	static bool thru() { return m_thru; }
	static void thru(bool enable) { m_thru = enable; }

  private:
	static TGIF* mp_instance;
	static bool m_thru;
	static ULONGLONG m_renderFrames;
	static DWORD m_time0;
	static DWORD m_lastTimeStamp;

	TGIF();

	virtual bool render(void* outputs, int bytes);
};

class TGIFOutputEndpoint : public MIDIOutputEndpoint
{
  public:
	TGIFOutputEndpoint() {}
	virtual ~TGIFOutputEndpoint() {}

	bool open(UINT id) { return true; }
	void close() {}
	MMRESULT send(const BYTE* data, int datalen) {
		TGIF::MIDISend(data, datalen, ::GetTickCount());
		return MMSYSERR_NOERROR;
	}
	MMRESULT sendSysex(const BYTE* data, int datalen) {
		return send(data, datalen);
	}
};

#endif /* __TGIF_H__ */

#endif /* USE_TGIF */
