/*
 * @(#)WinMain.cpp
 *
 * Copyright 2013 Roland Corporation, Japan. All rights reserved.
 */

#include "./Libraries/JavascriptInterface/CefApp.h"
#include "./Libraries/JavascriptInterface/CefWebView.h"
#include "Common/Bundle.h"
#include "Common/Registry.h"
#include "resource.h"
#include "version.h"

CString APP_NAME;
static TCHAR URL[MAX_PATH];
static float scale = 1.0f;

#define ID_MAXIMIZED	1
#define ID_OPENFILE		2

#define DPI_SCALING(x)	((LONG)ceil(x * scale))

#define MIN_CLIENT_WIDTH  1350
#define MIN_CLIENT_HEIGHT  680
#define INIT_CLIENT_WIDTH  MIN_CLIENT_WIDTH
#define INIT_CLIENT_HEIGHT MIN_CLIENT_HEIGHT


static void openFile(HWND wnd, LPTSTR lpCmdLine)
{
	static LPTSTR _lpCmdLine = NULL;

	if (_lpCmdLine == NULL) { _lpCmdLine = lpCmdLine; }

	COPYDATASTRUCT cds;
	ZeroMemory(&cds, sizeof(cds));
	cds.cbData = (DWORD)((_tcslen(_lpCmdLine) + 1) * sizeof(TCHAR));
	cds.lpData = _lpCmdLine;
	::SendMessage(wnd, WM_COPYDATA, NULL, (LPARAM)&cds);
}

static void restorWindowPlacement(HWND wnd)
{
	RECT rc;
	::GetWindowRect(wnd, &rc);
	LONG x = rc.left;
	LONG y = rc.top;
	LONG width  = rc.right - rc.left;
	LONG height = rc.bottom - rc.top;

	Registry reg(TEXT("Software\\Roland\\") + APP_NAME);
	LONG value;
	if (reg.getValue(TEXT("x"), &value)) { x = value; }
	if (reg.getValue(TEXT("y"), &value)) { y = value; }

#if defined(INIT_CLIENT_WIDTH) && defined(INIT_CLIENT_HEIGHT)
	POINT pt = { x, y };
	HMONITOR mon = ::MonitorFromPoint(pt, MONITOR_DEFAULTTONEAREST);
	MONITORINFOEX mi;
	mi.cbSize = sizeof(MONITORINFOEX);
	::GetMonitorInfo(mon, &mi);
	LONG areaX = mi.rcWork.right - mi.rcWork.left;
	LONG areaY = mi.rcWork.bottom - mi.rcWork.top;

	RECT _init = { 0, 0, DPI_SCALING(INIT_CLIENT_WIDTH), DPI_SCALING(INIT_CLIENT_HEIGHT) };
	::AdjustWindowRect(&_init, ::GetWindowLong(wnd, GWL_STYLE), 0);
	width  = min(areaX, _init.right - _init.left);
	height = min(areaY, _init.bottom - _init.top);
#endif

	if (reg.getValue(TEXT("width"),  &value)) { width  = value; }
	if (reg.getValue(TEXT("height"), &value)) { height = value; }

	::SetWindowPos(wnd, NULL, x, y, 0, 0, SWP_NOZORDER | SWP_NOSIZE);
	::SetWindowPos(wnd, NULL, 0, 0, width, height, SWP_NOZORDER | SWP_NOMOVE);

	if ((reg.getValue(TEXT("maximized"), &value) ? value : 0)) {
		::SetTimer(wnd, ID_MAXIMIZED, 100, NULL);
	}
}

static LRESULT CALLBACK wndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
	static CefRefPtr<CefWebView> client = NULL;

	switch (message) {
		case WM_CREATE:
			restorWindowPlacement(hWnd);
			::DragAcceptFiles(hWnd, TRUE);
			{
				client = (new CefWebView());
				client->createBrowser(APP_NAME, hWnd, URL, false);
			}
			return 0;

		case WM_DESTROY:
			::PostQuitMessage(0);
			client = NULL;
			return 0;

		case WM_NATIVE_CONTROL:
			if (wParam) {
				BSTR req = (BSTR)wParam;
				/* process for request. */
				::SysFreeString(req);
			}
			return 0;

		case WM_CLOSE:
			client->closeAllBrowsers();
			{
				WINDOWPLACEMENT placement;
				placement.length = sizeof(WINDOWPLACEMENT);
				::GetWindowPlacement(hWnd, &placement);

				Registry reg(TEXT("Software\\Roland\\") + APP_NAME);
				reg.setValue(TEXT("x"), placement.rcNormalPosition.left);
				reg.setValue(TEXT("y"), placement.rcNormalPosition.top);
				reg.setValue(TEXT("width"), placement.rcNormalPosition.right - placement.rcNormalPosition.left);
				reg.setValue(TEXT("height"), placement.rcNormalPosition.bottom - placement.rcNormalPosition.top);
				reg.setValue(TEXT("maximized"), (placement.showCmd == SW_SHOWMAXIMIZED) ? 1 : 0);
			}
			break;

		case WM_TIMER:
			{
				CEFWINDOWPARAMS* params = (CEFWINDOWPARAMS*)::GetProp(hWnd, CEF_WINDOW_PARAMS);
				if (params && params->browser && params->browser->GetHost()->GetWindowHandle()) {
					if (wParam == ID_MAXIMIZED) {
						::KillTimer(hWnd, ID_MAXIMIZED);
						::SendMessage(hWnd, WM_SYSCOMMAND, SC_MAXIMIZE, 0);
					} else if (wParam == ID_OPENFILE) {
						::KillTimer(hWnd, ID_OPENFILE);
						openFile(hWnd, NULL);
					}
				}
			}
			return 0;

		case WM_COPYDATA:
			COPYDATASTRUCT* pcds;
			pcds = (COPYDATASTRUCT*)lParam;
			if (pcds->cbData > 0) {
				CEFWINDOWPARAMS* params = (CEFWINDOWPARAMS*)::GetProp(hWnd, CEF_WINDOW_PARAMS);
				if (params && params->browser) {
					int nArgs = 0;
					LPWSTR* lplpszArgs = ::CommandLineToArgvW(CStringW((LPCTSTR)pcds->lpData), &nArgs);
					for (int i = 0; i < nArgs; i++) {
						CStringW ev;
						ev.Format(L"%s\f%s\f%s\f%s", L"app", L"command", L"open", lplpszArgs[i]);
						CefRefPtr<CefProcessMessage> message = CefProcessMessage::Create(cef_post_event_message);
						message->GetArgumentList()->SetString(0, (LPCWSTR)ev);
						params->browser->SendProcessMessage(PID_RENDERER, message);
					}
					::LocalFree(lplpszArgs);
				} else {
					::SetTimer(hWnd, ID_OPENFILE, 100, NULL);
				}
			}
			return 0;

		case WM_SYSCOMMAND:
#ifdef ENABLE_APP_EXIT
			if (wParam == SC_CLOSE) {
				CStringW ev;
				ev.Format(L"%s\f%s\f%s\f%s", L"app", L"command", L"exit", "");
				CEFWINDOWPARAMS* params = (CEFWINDOWPARAMS*)::GetProp(hWnd, CEF_WINDOW_PARAMS);
				if (params && params->browser) {
					CefRefPtr<CefProcessMessage> message = CefProcessMessage::Create(cef_post_event_message);
					message->GetArgumentList()->SetString(0, (LPCWSTR)ev);
					params->browser->SendProcessMessage(PID_RENDERER, message);
				}
				return 0;
			}
#endif
			break;

		case WM_GETMINMAXINFO:
			{
				HMONITOR mon = ::MonitorFromWindow(hWnd, MONITOR_DEFAULTTONEAREST);
				MONITORINFOEX mi;
				mi.cbSize = sizeof(MONITORINFOEX);
				::GetMonitorInfo(mon, &mi);
				LONG areaX = mi.rcWork.right - mi.rcWork.left;
				LONG areaY = mi.rcWork.bottom - mi.rcWork.top;

				LPMINMAXINFO lpMMI = (LPMINMAXINFO)lParam;
#if defined(MIN_CLIENT_WIDTH) && defined(MIN_CLIENT_HEIGHT)
				RECT _min = { 0, 0, DPI_SCALING(MIN_CLIENT_WIDTH), DPI_SCALING(MIN_CLIENT_HEIGHT) };
				::AdjustWindowRect(&_min, ::GetWindowLong(hWnd, GWL_STYLE), 0);
				lpMMI->ptMinTrackSize.x = min(areaX, _min.right - _min.left);
				lpMMI->ptMinTrackSize.y = min(areaY, _min.bottom - _min.top);
#endif
#if defined(MAX_CLIENT_WIDTH) && defined(MAX_CLIENT_HEIGHT)
				RECT _max = { 0, 0, DPI_SCALING(MAX_CLIENT_WIDTH), DPI_SCALING(MAX_CLIENT_HEIGHT) };
				::AdjustWindowRect(&_max, ::GetWindowLong(hWnd, GWL_STYLE), 0);
				lpMMI->ptMaxTrackSize.x = min(areaX, _max.right - _max.left);
				lpMMI->ptMaxTrackSize.y = min(areaY, _max.bottom - _max.top);
#endif
			}
			break;

		case WM_POWERBROADCAST:
			if (wParam == PBT_APMRESUMESUSPEND) {
				CStringW ev;
				ev.Format(L"%s\f%s\f%s\f%s", L"app", L"command", L"wakeup", L"PBT_APMRESUMESUSPEND");
				CEFWINDOWPARAMS* params = (CEFWINDOWPARAMS*)::GetProp(hWnd, CEF_WINDOW_PARAMS);
				if (params && params->browser) {
					CefRefPtr<CefProcessMessage> message = CefProcessMessage::Create(cef_post_event_message);
					message->GetArgumentList()->SetString(0, (LPCWSTR)ev);
					params->browser->SendProcessMessage(PID_RENDERER, message);
				}
			}
			break;

	}

	return CefFrameWndProc(hWnd, message, wParam, lParam);
}

int WINAPI _tWinMain(
	HINSTANCE hInstance,
	HINSTANCE hPrevInstance,
	LPTSTR lpCmdLine,
	int nCmdShow)
{
#ifndef USE_COMMON_CEF_DLL
	CefEnableHighDPISupport();
	CefMainArgs mainArgs(hInstance);
	CefRefPtr<_CefApp> app = (new _CefApp());
	int exit_code = CefExecuteProcess(mainArgs, app.get(), NULL);
	if (exit_code >= 0) {
		return exit_code;
	}
#endif

	TCHAR buf[MAX_PATH];
	::GetModuleFileName(hInstance, buf, MAX_PATH);
	LPTSTR filename = ::PathFindFileName(buf);
	::PathRemoveExtension(filename);
	APP_NAME = filename;

	CString className = TEXT("jp.co.roland.") + APP_NAME + TEXT(".wndclass");

	HANDLE mutex = ::CreateMutex(NULL, FALSE, className);
	if (GetLastError() == ERROR_ALREADY_EXISTS) {
#ifndef ALLOW_MULTIPLE_INSTANCES
		HWND wnd = ::FindWindow(className, NULL);
		if (wnd) {
			if (::IsIconic(wnd)) {
				::OpenIcon(wnd);
			} else {
				::SetForegroundWindow(wnd);
			}
			if (lpCmdLine != NULL && lpCmdLine[0]) {
				openFile(wnd, lpCmdLine);
			}
		}
		::CloseHandle(mutex);
		return 0;
#endif
	}

#ifndef USE_COMMON_CEF_DLL
	CefSettings settings;
	settings.no_sandbox = true;
	settings.multi_threaded_message_loop = true;
	CefString(&settings.user_agent).FromWString(CEF_USER_AGENT);
	settings.log_severity = LOGSEVERITY_DISABLE; 
  #ifdef _DEBUG
	settings.single_process = true;
  #endif
  #ifdef CEF_REMOTE_DEBUG_PORT
	settings.remote_debugging_port = CEF_REMOTE_DEBUG_PORT;
  #endif
	wchar_t localeName[LOCALE_NAME_MAX_LENGTH];
	if (::GetUserDefaultLocaleName(localeName, LOCALE_NAME_MAX_LENGTH) > 0) {
		CefString(&settings.locale).FromWString(localeName);
		CefString(&settings.accept_language_list).FromWString(localeName);
	}
	CefInitialize(mainArgs, settings, app.get(), NULL);
#else
	if (::SHGetFolderPath(NULL, CSIDL_PROGRAM_FILES_COMMON, NULL, 0, buf) != S_OK) {
		::CloseHandle(mutex);
		return FALSE;
	}
	::SetDllDirectory(CString(buf) + COMMON_FILES_DIR);
	CString cef_startup = CString(buf) + COMMON_FILES_DIR + TEXT("cef_startup.dll");
	HMODULE hCefDll = ::LoadLibrary(cef_startup);
	if (!hCefDll) {
		::CloseHandle(mutex);
		::MessageBox(NULL, cef_startup + TEXT(" is not found."), APP_NAME, MB_OK);
		return FALSE;
	}
	typedef void (*CEF_INITIALIZE)();
	CEF_INITIALIZE initialize = (CEF_INITIALIZE)GetProcAddress(hCefDll, "initialize");
	(*initialize)(); /* CefInitiazile() */
#endif

#ifdef _DEBUG
	LPTSTR lpFilePart;
	::GetFullPathName(TEXT("..\\html\\index.html"), MAX_PATH, URL, &lpFilePart);
#else
	Bundle bundle(APP_NAME);
	if (bundle.copyResource(hInstance, BUNDLE_IDENTIFIER)) {
		wsprintf(URL, TEXT("%s%s"), bundle.getBundlePath(), TEXT("html\\index.html"));
	}
	if (!URL[0]) {
		_tcscpy_s(URL, MAX_PATH, TEXT("about:blank"));
	}
#endif

	HDC screen = ::GetDC(NULL);
	scale = ::GetDeviceCaps(screen, LOGPIXELSX) / 96.0f;
	::ReleaseDC(0, screen);

	WNDCLASS wndclass;
	memset(&wndclass, 0, sizeof(wndclass));
	wndclass.lpfnWndProc   = wndProc;
	wndclass.hInstance     = hInstance;
	wndclass.hIcon         = ::LoadIcon(hInstance, MAKEINTRESOURCE(APPICON));
	wndclass.hCursor       = ::LoadCursor(NULL, IDC_ARROW);
	wndclass.hbrBackground = (HBRUSH)(COLOR_BTNFACE + 1);
	wndclass.lpszClassName = className;
	::RegisterClass(&wndclass);

	DWORD style = (WS_OVERLAPPEDWINDOW | WS_VISIBLE);
#if defined(MAX_CLIENT_WIDTH) && defined(MAX_CLIENT_HEIGHT)
	style &= (~ WS_MAXIMIZEBOX);
#endif

	HWND wnd = ::CreateWindow(className, TEXT(""), style,
						CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT,
						NULL, NULL, hInstance, NULL);

	WINDOWPLACEMENT placement;
	placement.length = sizeof(WINDOWPLACEMENT);
	::GetWindowPlacement(wnd, &placement);
	::SetWindowPlacement(wnd, &placement); /* SW_SHOWNORMAL */

	if (lpCmdLine != NULL && lpCmdLine[0]) {
		openFile(wnd, lpCmdLine);
	}

	MSG msg;
	BOOL isValidMessage;
	while ((isValidMessage = ::GetMessage(&msg, NULL, 0, 0)) != 0 && isValidMessage != -1) {
		::TranslateMessage(&msg);
		::DispatchMessage(&msg);
	}

#ifndef USE_COMMON_CEF_DLL
	CefShutdown();
#endif
	::CloseHandle(mutex);

	return 0;
}
