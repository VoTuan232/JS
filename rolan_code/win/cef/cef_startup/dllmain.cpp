/*
 * @(#)dllmain.cpp
 *
 * Copyright 2016 Roland Corporation, Japan. All rights reserved.
 */

#include "../../Libraries/JavascriptInterface/CefApp.h"

#ifdef _DEBUG
#define CEF_REMOTE_DEBUG_PORT 8080 /* chrome -> http://localhost:8080/ */
#endif

static HMODULE module = NULL;
static HHOOK msgHook = NULL;
static bool initialized = false;

extern "C" __declspec(dllexport) void initialize()
{
	if (initialized) return;
	initialized = true;

	CefSettings settings;
	settings.no_sandbox = true;
	settings.multi_threaded_message_loop = true;
	settings.log_severity = LOGSEVERITY_DISABLE; 
#ifdef CEF_REMOTE_DEBUG_PORT
	settings.remote_debugging_port = CEF_REMOTE_DEBUG_PORT;
#endif
	wchar_t localeName[LOCALE_NAME_MAX_LENGTH];
	if (::GetUserDefaultLocaleName(localeName, LOCALE_NAME_MAX_LENGTH) > 0) {
		CefString(&settings.locale).FromWString(localeName);
		CefString(&settings.accept_language_list).FromWString(localeName);
	}

	TCHAR buf[MAX_PATH];
	::GetModuleFileName(module, buf, MAX_PATH);
	::PathRemoveFileSpec(buf);

	CStringW path = CStringW(buf);
	CStringW resources = path;
	CStringW locales = path + L"\\locales";
	CStringW subprocess = path + L"\\cef_process.exe";

	CefString(&settings.resources_dir_path).FromWString((LPCWSTR)resources);
	CefString(&settings.locales_dir_path).FromWString((LPCWSTR)locales);
	CefString(&settings.browser_subprocess_path).FromWString((LPCWSTR)subprocess);

	CefEnableHighDPISupport();
	CefMainArgs mainArgs(module);
	CefRefPtr<_CefApp> app = (new _CefApp());
	CefInitialize(mainArgs, settings, app.get(), NULL);
}

LRESULT CALLBACK getMsgHookProc(int code, WPARAM wParam, LPARAM lParam)
{
	LRESULT ret = ::CallNextHookEx(msgHook, code, wParam, lParam);

	if (code == HC_ACTION || code >= 0) {
		MSG* msg = (MSG*)lParam;
		if (msg->message == WM_QUIT && initialized) {
			initialized = false;
			CefShutdown();
		}
	}

	return ret;
}

BOOL APIENTRY DllMain(
	HMODULE hModule,
    DWORD ul_reason_for_call,
    LPVOID lpReserved)
{
	switch (ul_reason_for_call) {
		case DLL_PROCESS_ATTACH:
			module = hModule;
			msgHook = ::SetWindowsHookEx(WH_GETMESSAGE, getMsgHookProc, hModule, ::GetCurrentThreadId());
			break;

		case DLL_PROCESS_DETACH:
			if (msgHook) {
				::UnhookWindowsHookEx(msgHook);
				msgHook = NULL;
			}
			break;

		case DLL_THREAD_ATTACH:
		case DLL_THREAD_DETACH:
			break;
	}
	return TRUE;
}
