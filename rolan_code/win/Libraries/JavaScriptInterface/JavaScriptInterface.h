/*
 * @(#)JavaScriptInterface.h
 *
 * Copyright 2013 Roland Corporation, Japan. All rights reserved.
 */

#ifndef __JAVASCRIPT_INTERFACE_H__
#define __JAVASCRIPT_INTERFACE_H__

#include <windows.h>
#include <atlstr.h>
#include <string>
#include <queue>

#include <include/cef_client.h>
#include <include/cef_v8.h>
#include <include/base/cef_bind.h>
#include <include/wrapper/cef_closure_task.h>

#include "../Common/Thread.h"

class EventTrigger : public CefBaseRefCounted
{
  public:
	CefV8Context* context() { return m_context.get(); }
	void context(CefRefPtr<CefV8Context> context) { m_context = context; }
	void exec() {
		if (m_context.get() && m_context->Enter()) {
			CefRefPtr<CefV8Value> retval;
			CefRefPtr<CefV8Exception> exception;
			m_context->Eval(L"window.$event.trigger()", L"", 0, retval, exception);
			m_context->Exit();
		}
	}

  private:
	CefRefPtr<CefV8Context> m_context;
	IMPLEMENT_REFCOUNTING(EventTrigger);
};

class JavaScriptInterface
{
  public:
	JavaScriptInterface() : m_triggered(false) {
		m_appName = TEXT("unknown");
		m_eventTrigger = new EventTrigger();
	}

	void setAppName(LPCWSTR appName) { m_appName = appName; }
	CString getAppName() { return m_appName; }

	void ready();
	void startEvent(bool start);
	void openPanel(CString filter);
	void savePanel(CString name, CString ext);
	void control(CString req);
	void exit();

	void postEvent(LPCWSTR event);
	std::wstring getEvent();

  protected:
	CString m_appName;
	Mutex mtx_queue;
	std::queue<std::wstring> m_queue;

	CefRefPtr<EventTrigger> m_eventTrigger;
	bool m_triggered;
};

#endif /* __JAVASCRIPT_INTERFACE_H__ */
