/*
 * @(#)CefWebView.cpp
 *
 * Copyright 2015 Roland Corporation, Japan. All rights reserved.
 */

#include "CefWebView.h"
#include "../../resource.h"

#define ID_TOOLBAR			1000
#define ID_TOOLBAR_BACK		1001
#define ID_TOOLBAR_FORWARD	1002

static TBBUTTON tbButtons[] = {
	{ HIST_BACK,    ID_TOOLBAR_BACK,    TBSTATE_ENABLED, TBSTYLE_BUTTON, {0}, 0, NULL },
	{ HIST_FORWARD, ID_TOOLBAR_FORWARD, TBSTATE_ENABLED, TBSTYLE_BUTTON, {0}, 0, NULL }
};

LPCTSTR CEF_WINDOW_PARAMS = TEXT("quattro_cef_window_params");

LRESULT CALLBACK
CefFrameWndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
	static TCHAR file[MAX_PATH];

	CEFWINDOWPARAMS* params = (CEFWINDOWPARAMS*)::GetProp(hWnd, CEF_WINDOW_PARAMS);

	HWND toolbar = params ? params->toolbar : NULL;
	HWND webview = params ? params->webview : NULL;
	CefBrowser* browser = params ? (params->browser ? params->browser.get() : NULL) : NULL;

	switch (message) {
		case WM_SIZE:
			if (toolbar) { ::SendMessage(toolbar, message, wParam, lParam); }
			if (webview) {
				if (wParam == SIZE_MINIMIZED) {
				/*	::SetWindowPos(webview, NULL,
						0, 0, 0, 0, SWP_NOZORDER | SWP_NOMOVE | SWP_NOACTIVATE); */
				} else {
					RECT rc = { 0 };
					if (toolbar) ::GetClientRect(toolbar, &rc);
					int toolbarHeight = rc.bottom - rc.top;
					::GetClientRect(hWnd, &rc);
					rc.top += toolbarHeight;
					HDWP dwp = ::BeginDeferWindowPos(1);
					dwp = ::DeferWindowPos(dwp, webview, NULL,
						rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top, SWP_NOZORDER);
					::EndDeferWindowPos(dwp);
				}
			}
			break;

		case WM_MOVING:
		case WM_MOVE:
			if (toolbar) { ::SendMessage(toolbar, message, wParam, lParam); }
			if (browser) { browser->GetHost()->NotifyMoveOrResizeStarted(); }
			return 0;

		case WM_COMMAND:
			if (LOWORD(wParam) == ID_TOOLBAR_BACK)
				if (browser) { browser->GoBack(); }
			if (LOWORD(wParam) == ID_TOOLBAR_FORWARD)
				if (browser) { browser->GoForward(); }
			return 0;

		case WM_SETFOCUS:
		case WM_KILLFOCUS:
			if (browser) { browser->GetHost()->SendFocusEvent(message == WM_SETFOCUS); }
			return 0;

		case WM_CLOSE:
			if (toolbar) { ::SendMessage(toolbar, message, wParam, lParam); }
			if (browser) { browser->GetHost()->CloseBrowser(params->__popup != NULL); }
			if (params->browser) { params->browser = NULL; }
			break;

		case WM_DESTROY:
			if (params->__popup) {
				::SetProp(params->__popup, CEF_WINDOW_PARAMS, (HANDLE)NULL);
				::DestroyWindow(params->__popup);
			}
			::SetProp(hWnd, CEF_WINDOW_PARAMS, (HANDLE)NULL);
			delete params;
			break;

		case WM_ERASEBKGND:
			return 0;

		case WM_SYSCOMMAND:
			if (wParam == SC_KEYMENU)
				return 0;
			break;

		case WM_FILE_DIALOG:
			if (lParam) {
				((FileDialog*)lParam)->open(hWnd);
				delete (FileDialog*)lParam;
			}
			return 0;

		case WM_DROPFILES:
			if (browser) {
				HDROP drop = (HDROP)wParam;
				UINT nFiles = ::DragQueryFile(drop, 0xFFFFFFFF, NULL, 0);
				for (UINT i = 0; i < nFiles; i++) {
					::DragQueryFile(drop, i, file, sizeof(file));
					CStringW ev;
					ev.Format(L"%s\f%s\f%s\f%s", L"app", L"command", L"open", CStringW(file));
					CefRefPtr<CefProcessMessage> message = CefProcessMessage::Create(cef_post_event_message);
					message->GetArgumentList()->SetString(0, (LPCWSTR)ev);
					browser->SendProcessMessage(PID_RENDERER, message);
				}
				::DragFinish(drop);
			}
			break;
	}

	return ::DefWindowProc(hWnd, message, wParam, lParam);
}

void CefWebView::createBrowser(CString appName, HWND parent, LPCWSTR url, bool navigation)
{
	m_appName = appName;
	m_parent = parent;

	HWND toolbar = NULL;

	if (navigation) {
		toolbar = ::CreateToolbarEx(
				parent, WS_CHILD | WS_VISIBLE, ID_TOOLBAR, sizeof(tbButtons) / sizeof(TBBUTTON),
				(HINSTANCE)HINST_COMMCTRL, IDB_HIST_SMALL_COLOR,
				tbButtons, sizeof(tbButtons) / sizeof(TBBUTTON),
				0, 0, 0, 0, sizeof(TBBUTTON));

		DWORD dwStyle = (DWORD)::SendMessage(toolbar, TB_GETSTYLE, 0, 0) | TBSTYLE_FLAT;
		SendMessage(toolbar, TB_SETSTYLE, 0, (LPARAM)dwStyle);
		SendMessage(toolbar, TB_ENABLEBUTTON, ID_TOOLBAR_BACK,    0);
		SendMessage(toolbar, TB_ENABLEBUTTON, ID_TOOLBAR_FORWARD, 0);
	}

	RECT rc = { 0 };
	if (toolbar) ::GetClientRect(toolbar, &rc);
	int toolbarHeight = rc.bottom - rc.top;
	::GetClientRect(parent, &rc);
	rc.top += toolbarHeight;
	CefWindowInfo info;
	info.SetAsChild(parent, rc);

	CEFWINDOWPARAMS* params = new CEFWINDOWPARAMS;
	memset(params, 0, sizeof(CEFWINDOWPARAMS));
	params->toolbar = toolbar;
	params->__frame = parent;
	::SetProp(parent, CEF_WINDOW_PARAMS, (HANDLE)params);

	CefBrowserSettings browserSettings;
	browserSettings.universal_access_from_file_urls = STATE_ENABLED;
	CefBrowserHost::CreateBrowser(info, this, (LPCWSTR)url, browserSettings, NULL);
}

bool CefWebView::OnBeforePopup(
	CefRefPtr<CefBrowser> browser,
	CefRefPtr<CefFrame> frame,
	const CefString& target_url,
	const CefString& target_frame_name,
	WindowOpenDisposition target_disposition,
	bool user_gesture,
	const CefPopupFeatures& popupFeatures,
	CefWindowInfo& windowInfo,
	CefRefPtr<CefClient>& client,
	CefBrowserSettings& settings,
	bool* no_javascript_access)
{
#ifdef SUPPORT_POPUP_WINDOW
	return false;
#else
	CString url(target_url.c_str());
	::ShellExecute(NULL, TEXT("open"), url, NULL, NULL, SW_SHOWNORMAL);
	return true;
#endif
}

void CefWebView::OnAfterCreated(CefRefPtr<CefBrowser> browser)
{
	if (m_browser == NULL) {
		m_browser = browser;

		CefRefPtr<CefProcessMessage> message = CefProcessMessage::Create(cef_app_name_message);
		message->GetArgumentList()->SetString(0, (LPCWSTR)CStringW(m_appName));
		browser->SendProcessMessage(PID_RENDERER, message);

		CEFWINDOWPARAMS* params = (CEFWINDOWPARAMS*)::GetProp(m_parent, CEF_WINDOW_PARAMS);
		HWND webview = browser->GetHost()->GetWindowHandle();
		params->webview = webview;
		params->browser = browser;

		::RevokeDragDrop(::GetWindow(webview, GW_CHILD));

	} else {

		RECT rc;
		HWND _popup = browser->GetHost()->GetWindowHandle();
		::GetWindowRect(_popup, &rc);
		::ShowWindow(_popup, SW_HIDE);
		HWND webview = ::GetWindow(_popup, GW_CHILD);

		CString className = TEXT("jp.co.roland.") + m_appName + TEXT(".cef.popup.wndclass");
		HINSTANCE instance = (HINSTANCE)GetWindowLongPtr(m_parent, GWLP_HINSTANCE);

		WNDCLASS wndclass;
		memset(&wndclass, 0, sizeof(wndclass));
		wndclass.lpfnWndProc   = CefFrameWndProc;
		wndclass.hInstance     = instance;
		wndclass.hIcon         = ::LoadIcon(instance, MAKEINTRESOURCE(APPICON));
		wndclass.hCursor       = ::LoadCursor(NULL, IDC_ARROW);
		wndclass.hbrBackground = (HBRUSH)(COLOR_BTNFACE + 1);
		wndclass.lpszClassName = className;
		::RegisterClass(&wndclass);

		HWND parent = ::CreateWindow(className, TEXT(""),
				WS_OVERLAPPEDWINDOW, 0, 0, 0, 0, NULL, NULL, instance, NULL);

		HWND toolbar = ::CreateToolbarEx(
				parent, WS_CHILD | WS_VISIBLE, ID_TOOLBAR, sizeof(tbButtons) / sizeof(TBBUTTON),
				(HINSTANCE)HINST_COMMCTRL, IDB_HIST_SMALL_COLOR,
				tbButtons, sizeof(tbButtons) / sizeof(TBBUTTON),
				0, 0, 0, 0, sizeof(TBBUTTON));

		DWORD dwStyle = (DWORD)::SendMessage(toolbar, TB_GETSTYLE, 0, 0) | TBSTYLE_FLAT;
		SendMessage(toolbar, TB_SETSTYLE, 0, (LPARAM)dwStyle);
		SendMessage(toolbar, TB_ENABLEBUTTON, ID_TOOLBAR_BACK,    0);
		SendMessage(toolbar, TB_ENABLEBUTTON, ID_TOOLBAR_FORWARD, 0);

		CEFWINDOWPARAMS* params = new CEFWINDOWPARAMS;
		params->toolbar = toolbar;
		params->webview = webview;
		params->browser = browser;
		params->__frame = parent;
		params->__popup = _popup;
		::SetProp(parent, CEF_WINDOW_PARAMS, (HANDLE)params);
		::SetProp(_popup, CEF_WINDOW_PARAMS, (HANDLE)params);

		m_browser_list.push_back(browser);

		::SetParent(webview, parent);
		::SetWindowPos(parent, HWND_TOPMOST,
				rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top, SWP_SHOWWINDOW);
	}
}

void CefWebView::OnBeforeClose(CefRefPtr<CefBrowser> browser)
{
	if (browser->IsPopup() && !m_closing) {
		std::list<CefRefPtr<CefBrowser>>::const_iterator it = m_browser_list.begin();
		for ( ; it != m_browser_list.end(); it++) {
			if ((*it)->IsSame(browser)) {
				m_browser_list.erase(it);
				break;
			}
		}
	} else {
		m_browser = NULL;
	}
}

void CefWebView::closeAllBrowsers()
{
	m_closing = true;

	std::list<CefRefPtr<CefBrowser>>::const_iterator it = m_browser_list.begin();
	for ( ; it != m_browser_list.end(); it++) {
		HWND _popup = (*it)->GetHost()->GetWindowHandle();
		CEFWINDOWPARAMS* params = (CEFWINDOWPARAMS*)::GetProp(_popup, CEF_WINDOW_PARAMS);
		if (params && params->__frame) {
			::SendMessage(params->__frame, WM_CLOSE, 0, 0);
		}
	}

	CefRefPtr<CefProcessMessage> message = CefProcessMessage::Create(cef_shutdown_message);
	m_browser->SendProcessMessage(PID_RENDERER, message);
}

bool CefWebView::OnBeforeBrowse(
	CefRefPtr<CefBrowser> browser,
	CefRefPtr<CefFrame> frame,
	CefRefPtr<CefRequest> request,
	bool is_redirect)
{
	static LPCTSTR browsable[] = {
		TEXT("http:"), TEXT("https:"), TEXT("file:"),
	};

	m_loadError = false;

	CString url(request->GetURL().c_str());
	for (int i = 0; i < sizeof(browsable)/ sizeof(LPCTSTR); i++) {
		if (url.Find(browsable[i]) == 0) {
			return false;
		}
	}

	/* custom url scheme */
	::ShellExecute(NULL, TEXT("open"), url, NULL, NULL, SW_SHOWNORMAL);
	return true;
}

void CefWebView::OnLoadError(
	CefRefPtr<CefBrowser> browser,
	CefRefPtr<CefFrame> frame,
	ErrorCode errorCode,
	const CefString& errorText,
	const CefString& failedUrl)
{
	m_ready = true;
	m_loadError = true;
}

void CefWebView::OnTitleChange(
	CefRefPtr<CefBrowser> browser,
	const CefString& title)
{
	HWND wnd = browser->GetHost()->GetWindowHandle();
	CEFWINDOWPARAMS* params = (CEFWINDOWPARAMS*)::GetProp(wnd, CEF_WINDOW_PARAMS);
	if (!params) {
		params = (CEFWINDOWPARAMS*)::GetProp(GetParent(wnd), CEF_WINDOW_PARAMS);
	}
	if (params && params->__frame) {
		::SetWindowText(params->__frame, CString(std::wstring(title).c_str()));
	}
}

void CefWebView::OnLoadingStateChange(
	CefRefPtr<CefBrowser> browser,
	bool isLoading,
	bool canGoBack,
	bool canGoForward)
{
	HWND wnd = browser->GetHost()->GetWindowHandle();
	CEFWINDOWPARAMS* params = (CEFWINDOWPARAMS*)::GetProp(wnd, CEF_WINDOW_PARAMS);
	if (!params) {
		params = (CEFWINDOWPARAMS*)::GetProp(GetParent(wnd), CEF_WINDOW_PARAMS);
	}
	if (params && params->toolbar) {
		::SendMessage(params->toolbar, TB_ENABLEBUTTON, ID_TOOLBAR_BACK,    canGoBack    ? 1 : 0);
		::SendMessage(params->toolbar, TB_ENABLEBUTTON, ID_TOOLBAR_FORWARD, canGoForward ? 1 : 0);
	}
}

void CefWebView::OnBeforeDownload(
	CefRefPtr<CefBrowser> browser,
	CefRefPtr<CefDownloadItem> download_item,
	const CefString& suggested_name,
	CefRefPtr<CefBeforeDownloadCallback> callback)
{
	TCHAR fullpath[MAX_PATH];

	if (SUCCEEDED(::SHGetFolderPath(NULL, CSIDL_PERSONAL | CSIDL_FLAG_CREATE, NULL, 0, fullpath))) {
		CStringW ev;
		ev.Format(L"%s\f%s\f%s\f%s", L"app", L"command", L"download", std::wstring(download_item->GetURL()).c_str());
		CefRefPtr<CefProcessMessage> message = CefProcessMessage::Create(cef_post_event_message);
		message->GetArgumentList()->SetString(0, (LPCWSTR)ev);
		m_browser->SendProcessMessage(PID_RENDERER, message);
	}
}

bool CefWebView::OnProcessMessageReceived(
	CefRefPtr<CefBrowser> browser,
	CefProcessId source_process,
	CefRefPtr<CefProcessMessage> message)
{
	std::string message_name = message->GetName();
	if (message_name == cef_app_ready_message) {
		m_ready = true;
	} else
	if (message_name == cef_return_value_message) {
		m_retval = message->GetArgumentList()->GetString(0).c_str();
		m_trigger.set();
	} else
	if (message_name == cef_open_panel_message) {
		openPanel(message->GetArgumentList()->GetString(0).c_str());
	} else
	if (message_name == cef_save_panel_message) {
		savePanel(message->GetArgumentList()->GetString(0).c_str(), message->GetArgumentList()->GetString(1).c_str());
	} else
	if (message_name == cef_control_message) {
		control(message->GetArgumentList()->GetString(0).c_str());
	} else
	if (message_name == cef_exit_message) {
		::PostMessage(m_parent, WM_CLOSE, 0, 0);
	}
	return false;
}

void CefWebView::openPanel(CString filter) const
{
	OpenPanel* dlg = new OpenPanel(m_browser, filter);
	/* call OpenPanel::open() on main thread */
	::PostMessage(m_parent, WM_FILE_DIALOG, 0, (LPARAM)dlg);
}

void OpenPanel::open(HWND wnd)
{
	m_filter.Replace(TEXT('\f'), TEXT('\0'));

	TCHAR file[MAX_PATH];
	file[0] = TEXT('\0');

	OPENFILENAME ofn;
	memset(&ofn, 0, sizeof(ofn));
	ofn.lStructSize = sizeof(ofn);
	ofn.hwndOwner   = wnd;
	ofn.lpstrFile   = file;
	ofn.nMaxFile    = MAX_PATH;
	ofn.Flags       = OFN_FILEMUSTEXIST | OFN_HIDEREADONLY | OFN_NOCHANGEDIR;
	ofn.lpstrFilter = m_filter;
	BOOL ok = ::GetOpenFileName(&ofn);

	CStringW ev;
	ev.Format(L"%s\f%s\f%s", L"fs", L"openfilename", ok ? CStringW(file) : L"");
	CefRefPtr<CefProcessMessage> message = CefProcessMessage::Create(cef_post_event_message);
	message->GetArgumentList()->SetString(0, (LPCWSTR)ev);
	m_browser->SendProcessMessage(PID_RENDERER, message);
}

void CefWebView::savePanel(const CString name, const CString ext) const
{
	SavePanel* dlg = new SavePanel(m_browser, name, ext);
	/* call SavePanel::open() on main thread */
	::PostMessage(m_parent, WM_FILE_DIALOG, 0, (LPARAM)dlg);
}

void SavePanel::open(HWND wnd)
{
	TCHAR file[MAX_PATH];
	_tcscpy_s(file, MAX_PATH, m_name);

	TCHAR path[MAX_PATH];
	::SHGetFolderPath(NULL, CSIDL_MYDOCUMENTS, NULL, 0, path);

	CString filter;
	if (m_ext.IsEmpty()) {
		filter = TEXT("*\f*\f\f");
	} else {
		filter.Format(TEXT("%s\f*.%s\f*\f*\f\f"), m_ext, m_ext);
	}
	filter.Replace(TEXT('\f'), TEXT('\0'));

	OPENFILENAME ofn;
	memset(&ofn, 0, sizeof(ofn));
	ofn.lStructSize     = sizeof(ofn);
	ofn.hwndOwner       = wnd;
	ofn.lpstrInitialDir = path;
	ofn.lpstrFile       = file;
	ofn.nMaxFile        = MAX_PATH;
	ofn.lpstrDefExt     = m_ext;
	ofn.lpstrFilter     = filter;
	ofn.Flags           = OFN_OVERWRITEPROMPT | OFN_NOCHANGEDIR;
	BOOL ok = ::GetSaveFileName(&ofn);

	CStringW ev;
	ev.Format(L"%s\f%s\f%s", L"fs", L"savefilename", ok ? CStringW(file) : L"");
	CefRefPtr<CefProcessMessage> message = CefProcessMessage::Create(cef_post_event_message);
	message->GetArgumentList()->SetString(0, (LPCWSTR)ev);
	m_browser->SendProcessMessage(PID_RENDERER, message);
}

void CefWebView::control(const CString req) const
{
	::PostMessage(m_parent, WM_NATIVE_CONTROL, (WPARAM)req.AllocSysString(), 0);
}

CString CefWebView::callJavaScriptFunction(CString script, bool synchronous)
{
	if (m_browser) {
		CefRefPtr<CefFrame> frame = m_browser->GetMainFrame();
		if (synchronous && !m_loadError) {
			m_retval = TEXT("");
			m_trigger.reset();
			frame->ExecuteJavaScript(LPCWSTR(CStringW(script)), frame->GetURL(), 0);
			m_trigger.wait();
			return m_retval;
		} else {
			frame->ExecuteJavaScript(LPCWSTR(CStringW(script)), frame->GetURL(), 0);
		}
	}
	return TEXT("");
}

#ifndef TIMEOUT_READY
#define TIMEOUT_READY 30000
#endif

static BOOL CALLBACK waitDialogProc(HWND hDlg, UINT message, WPARAM wParam, LPARAM lParam)
{
	#define TIMER_ELAPSE 100
	static int timeout = TIMEOUT_READY;

	if (message == WM_INITDIALOG) {
		::SetWindowLongPtr(hDlg, GWLP_USERDATA, lParam);
		timeout = TIMEOUT_READY;
		::SetTimer(hDlg, 9999, TIMER_ELAPSE, NULL);
		return TRUE;
	}
	if (message == WM_TIMER) {
		CefWebView* _this = (CefWebView*)::GetWindowLongPtr(hDlg, GWLP_USERDATA);
		if (_this->ready() || timeout < 0) {
#ifdef _DEBUG
			if (timeout < 0) {
				::OutputDebugString(TEXT("quattro: synchronized failed (timeout)\n"));
			}
#endif
			::EndDialog(hDlg, TRUE);
		}
		timeout -= TIMER_ELAPSE;
		return TRUE;
	}
	return FALSE;
}

void CefWebView::waitForReady()
{
	if (!m_ready) {
		HINSTANCE instance = (HINSTANCE)GetWindowLongPtr(m_parent, GWLP_HINSTANCE);
		DialogBoxParam(instance, MAKEINTRESOURCE(DLGWAIT), NULL, (DLGPROC)waitDialogProc, (LPARAM)this);
	}
}
