/*
 * @(#)CefApp.h
 *
 * Copyright 2016 Roland Corporation, Japan. All rights reserved.
 */

#ifndef __CEF_APP_H__
#define __CEF_APP_H__

#include <windows.h>
#include <shlobj.h> 
#include <atlstr.h>

#include <include/cef_app.h>

#define COMMON_FILES_DIR L"\\Roland Shared\\CEF\\3.3359.1768\\"

class JavaScriptInterface;
class NativeObjects;

class _CefApp : public CefApp, public CefRenderProcessHandler
{
  public:
	_CefApp() : mp_intf(0), mp_objects(0), m_closing(false) {}
	virtual ~_CefApp();

	// CefApp methods
	virtual void OnBeforeCommandLineProcessing(
						const CefString& process_type,
						CefRefPtr<CefCommandLine> command_line) OVERRIDE {
		command_line->AppendSwitch("enable-system-flash");
#ifdef _DEBUG
		command_line->AppendSwitch("disable-extensions");
#endif
	}

	virtual CefRefPtr<CefRenderProcessHandler> GetRenderProcessHandler() OVERRIDE { return this; }

	// CefRenderProcessHandler methods
	virtual void OnRenderThreadCreated(CefRefPtr<CefListValue> extra_info) OVERRIDE;

	virtual void OnContextCreated(
						CefRefPtr<CefBrowser> browser,
						CefRefPtr<CefFrame> frame,
						CefRefPtr<CefV8Context> context) OVERRIDE;

	virtual void OnContextReleased(CefRefPtr<CefBrowser> browser,
						CefRefPtr<CefFrame> frame,
						CefRefPtr<CefV8Context> context) OVERRIDE;

	virtual bool OnProcessMessageReceived(
						CefRefPtr<CefBrowser> browser,
						CefProcessId source_process,
						CefRefPtr<CefProcessMessage> message) OVERRIDE;

	/* for synchronization of callJavaScriptFunction */
	class ReturnValue : public CefV8Handler {
	  public:
		virtual bool Execute(
						const CefString& name,
						CefRefPtr<CefV8Value> object,
						const CefV8ValueList& args,
						CefRefPtr<CefV8Value>& retval,
						CefString& exception) OVERRIDE;

	  private:
		IMPLEMENT_REFCOUNTING(ReturnValue);
	};


  private:
	JavaScriptInterface* mp_intf;
	NativeObjects* mp_objects;
	bool m_closing;

	IMPLEMENT_REFCOUNTING(_CefApp);
};

#endif /* __CEF_APP_H__ */
