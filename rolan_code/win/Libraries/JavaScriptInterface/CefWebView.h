/*
 * @(#)cef_webview.h
 *
 * Copyright 2015 Roland Corporation, Japan. All rights reserved.
 */

#ifndef __CEF_WEBVIEW_H__
#define __CEF_WEBVIEW_H__

#include <windows.h>
#include <shlobj.h> 
#include <atlstr.h>
#include <string>
#include <list>

#include <include/cef_app.h>
#include <include/cef_client.h>

#include "CefMessage.h"
#include "../Common/Thread.h"

class CefWebView : public CefClient,
	public CefLifeSpanHandler,
	public CefRequestHandler,
	public CefLoadHandler,
	public CefDisplayHandler,
	public CefDownloadHandler,
	public CefDragHandler,
	public CefContextMenuHandler
{

  public:
	CefWebView(): m_parent(NULL), m_browser(NULL), m_ready(false), m_loadError(false), m_closing(false) {}

	CefRefPtr<CefLifeSpanHandler> GetLifeSpanHandler() OVERRIDE { return this; }
	CefRefPtr<CefRequestHandler> GetRequestHandler() OVERRIDE { return this; }
	CefRefPtr<CefLoadHandler> GetLoadHandler() OVERRIDE { return this; }
	CefRefPtr<CefDisplayHandler> GetDisplayHandler() OVERRIDE { return this; }
	CefRefPtr<CefDownloadHandler> GetDownloadHandler() OVERRIDE { return this; }
	CefRefPtr<CefContextMenuHandler> GetContextMenuHandler() OVERRIDE { return this; }

	// CefLifeSpanHandler methods
	virtual void OnAfterCreated(CefRefPtr<CefBrowser> browser) OVERRIDE;
	virtual void OnBeforeClose(CefRefPtr<CefBrowser> browser) OVERRIDE;
	virtual bool DoClose(CefRefPtr<CefBrowser> browser) OVERRIDE { return false; }

	typedef cef_window_open_disposition_t WindowOpenDisposition;
	virtual bool OnBeforePopup(
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
						bool* no_javascript_access) OVERRIDE;

	// CefRequestHandler methods
	virtual bool OnBeforeBrowse(
						CefRefPtr<CefBrowser> browser,
						CefRefPtr<CefFrame> frame,
						CefRefPtr<CefRequest> request,
						bool is_redirect) OVERRIDE;

	// CefLoadHandler methods
	void OnLoadingStateChange(
						CefRefPtr<CefBrowser> browser,
						bool isLoading,
						bool canGoBack,
						bool canGoForward) OVERRIDE;
	virtual void OnLoadError(CefRefPtr<CefBrowser> browser,
						CefRefPtr<CefFrame> frame,
						ErrorCode errorCode,
						const CefString& errorText,
						const CefString& failedUrl) OVERRIDE;

	// CefDisplayHandler methods
	virtual void OnTitleChange(
						CefRefPtr<CefBrowser> browser,
						const CefString& title) OVERRIDE;

	// CefDownloadHandler methods
	virtual void OnBeforeDownload(
						CefRefPtr<CefBrowser> browser,
						CefRefPtr<CefDownloadItem> download_item,
						const CefString& suggested_name,
						CefRefPtr<CefBeforeDownloadCallback> callback) OVERRIDE;

	// CefContextMenuHandler methods
	virtual void OnBeforeContextMenu(
						CefRefPtr<CefBrowser> browser,
						CefRefPtr<CefFrame> frame,
						CefRefPtr<CefContextMenuParams> params,
						CefRefPtr<CefMenuModel> model) OVERRIDE { model->Clear(); }


	virtual bool OnProcessMessageReceived(
						CefRefPtr<CefBrowser> browser,
						CefProcessId source_process,
						CefRefPtr<CefProcessMessage> message) OVERRIDE;

	void createBrowser(CString appName, HWND parent, LPCWSTR url, bool navigation);
	void closeAllBrowsers();

	void waitForReady();
	bool ready() const { return m_ready; }
	CString callJavaScriptFunction(CString script, bool synchronous = false);

  private:
	CString m_appName;
	HWND m_parent;
	CefRefPtr<CefBrowser> m_browser;
	bool m_ready;
	bool m_loadError;
	bool m_closing;

	std::list<CefRefPtr<CefBrowser>> m_browser_list;

	Event m_trigger;
	CString m_retval;

	void openPanel(CString filter) const;
	void savePanel(const CString name, const CString ext) const;

	void control(CString req) const;

	IMPLEMENT_REFCOUNTING(CefWebView);
};

typedef struct tagCEFWINDOWPARAMS {
	CefRefPtr<CefBrowser> browser;
	HWND toolbar;
	HWND webview;
	HWND __frame;
	HWND __popup; /* cef original popup window handle */
} CEFWINDOWPARAMS;

extern LPCTSTR CEF_WINDOW_PARAMS;
extern LRESULT CALLBACK CefFrameWndProc(HWND, UINT, WPARAM, LPARAM);

/* dialog wrapper of GetOpenFileName() and GetSaveFileName() */

class FileDialog
{
  public:
	virtual ~FileDialog() {}
	virtual void open(HWND wnd) = 0;
};

class OpenPanel : FileDialog
{
  public:
	OpenPanel(CefRefPtr<CefBrowser> browser, CString filter)
		: m_browser(browser), m_filter(filter) {}
	virtual void open(HWND wnd);

  private:
	CefRefPtr<CefBrowser> m_browser;
	CString m_filter;
};

class SavePanel : FileDialog
{
  public:
	SavePanel(CefRefPtr<CefBrowser> browser, const CString name, const CString ext)
		: m_browser(browser), m_name(name), m_ext(ext) {}
	virtual void open(HWND wnd);

  private:
	CefRefPtr<CefBrowser> m_browser;
	CString m_name;
	CString m_ext;
};

#endif /* __CEF_WEBVIEW_H__ */
