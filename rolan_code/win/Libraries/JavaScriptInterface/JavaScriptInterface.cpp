/*
 * @(#)JavaScriptInterface.cpp
 *
 * Copyright 2013 Roland Corporation, Japan. All rights reserved.
 */

#include "JavaScriptInterface.h"
#include "CefMessage.h"

void JavaScriptInterface::ready()
{
	CefRefPtr<CefBrowser> browser = CefV8Context::GetCurrentContext()->GetBrowser();
	if (browser.get()) {
		CefRefPtr<CefProcessMessage> message = CefProcessMessage::Create(cef_app_ready_message);
		browser->SendProcessMessage(PID_BROWSER, message);
	}
}

void JavaScriptInterface::openPanel(CString filter)
{
	CefRefPtr<CefBrowser> browser = CefV8Context::GetCurrentContext()->GetBrowser();
	if (browser.get()) {
		CefRefPtr<CefProcessMessage> message = CefProcessMessage::Create(cef_open_panel_message);
		message->GetArgumentList()->SetString(0, (LPCWSTR)(CStringW(filter)));
		browser->SendProcessMessage(PID_BROWSER, message);
	}
}

void JavaScriptInterface::savePanel(CString name, CString ext)
{
	CefRefPtr<CefBrowser> browser = CefV8Context::GetCurrentContext()->GetBrowser();
	if (browser.get()) {
		CefRefPtr<CefProcessMessage> message = CefProcessMessage::Create(cef_save_panel_message);
		message->GetArgumentList()->SetString(0, (LPCWSTR)(CStringW(name)));
		message->GetArgumentList()->SetString(1, (LPCWSTR)(CStringW(ext)));
		browser->SendProcessMessage(PID_BROWSER, message);
	}
}

void JavaScriptInterface::control(CString req)
{
	CefRefPtr<CefBrowser> browser = CefV8Context::GetCurrentContext()->GetBrowser();
	if (browser.get()) {
		CefRefPtr<CefProcessMessage> message = CefProcessMessage::Create(cef_control_message);
		message->GetArgumentList()->SetString(0, (LPCWSTR)(CStringW(req)));
		browser->SendProcessMessage(PID_BROWSER, message);
	}
}

void JavaScriptInterface::exit()
{
	CefRefPtr<CefBrowser> browser = CefV8Context::GetCurrentContext()->GetBrowser();
	if (browser.get()) {
		CefRefPtr<CefProcessMessage> message = CefProcessMessage::Create(cef_exit_message);
		browser->SendProcessMessage(PID_BROWSER, message);
	}
}

void JavaScriptInterface::postEvent(LPCWSTR event)
{
	std::wstring ev = event;
	mutex_lock obj(mtx_queue);
	m_queue.push(ev);
	if (m_eventTrigger->context() && !m_triggered) {
		m_triggered = true;
		CefPostTask(TID_RENDERER, base::Bind(&EventTrigger::exec, m_eventTrigger));
	}
}

void JavaScriptInterface::startEvent(bool start)
{
	mutex_lock obj(mtx_queue);
	if (m_triggered = start) {
		m_eventTrigger->context(CefV8Context::GetCurrentContext());
		CefPostTask(TID_RENDERER, base::Bind(&EventTrigger::exec, m_eventTrigger));
	} else {
		m_eventTrigger->context(NULL);
	}
}

std::wstring JavaScriptInterface::getEvent()
{
	std::wstring ev = L"";
	mutex_lock obj(mtx_queue);
	if (!m_queue.empty()) {
		ev = m_queue.front();
		m_queue.pop();
	} else {
		m_triggered = false;
	}
	return ev;
}
