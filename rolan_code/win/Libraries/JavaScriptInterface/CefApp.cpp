/*
 * @(#)CefApp.cpp
 *
 * Copyright 2015 Roland Corporation, Japan. All rights reserved.
 */

#include "CefApp.h"
#include "CefMessage.h"
#include "NativeCall.h"

_CefApp::~_CefApp()
{
	delete mp_intf;
}

void _CefApp::OnRenderThreadCreated(CefRefPtr<CefListValue> extra_info)
{
	WSADATA wsaData;
	::WSAStartup(MAKEWORD(2,0), &wsaData);

	INITCOMMONCONTROLSEX ic;
	ic.dwSize = sizeof(INITCOMMONCONTROLSEX);
	ic.dwICC = ICC_BAR_CLASSES;
	::InitCommonControlsEx(&ic);

	mp_intf = new JavaScriptInterface();
	mp_objects = new NativeObjects(mp_intf);
}

void _CefApp::OnContextCreated(
	CefRefPtr<CefBrowser> browser,
	CefRefPtr<CefFrame> frame,
	CefRefPtr<CefV8Context> context)
{
	if (m_closing) return;

	CefRefPtr<CefV8Value> window = context->GetGlobal();

	(new NativeCall_app(mp_objects))->OnContextCreated(window);
	(new NativeCall_midi(mp_objects))->OnContextCreated(window);
	(new NativeCall_midix(mp_objects))->OnContextCreated(window);
	(new NativeCall_tgif(mp_objects))->OnContextCreated(window);
	(new NativeCall_player(mp_objects))->OnContextCreated(window);
	(new NativeCall_recorder(mp_objects))->OnContextCreated(window);
	(new NativeCall_rwc(mp_objects))->OnContextCreated(window);
	(new NativeCall_http(mp_objects))->OnContextCreated(window);
	(new NativeCall_tcpip(mp_objects))->OnContextCreated(window);
	(new NativeCall_netservice(mp_objects))->OnContextCreated(window);
	(new NativeCall_fs(mp_objects))->OnContextCreated(window);
	(new NativeCall_security(mp_objects))->OnContextCreated(window);
	(new NativeCall_notification(mp_objects))->OnContextCreated(window);
	(new NativeCall_recognizer(mp_objects))->OnContextCreated(window);
	(new NativeCall_barcode(mp_objects))->OnContextCreated(window);
	(new NativeCall_sh(mp_objects))->OnContextCreated(window);
	(new NativeCall_util(mp_objects))->OnContextCreated(window);

	/* for synchronization of callJavaScriptFunction */
	CefRefPtr<CefV8Value> function = CefV8Value::CreateFunction(L"$return", new ReturnValue());
	window->SetValue(L"$return", function, V8_PROPERTY_ATTRIBUTE_NONE);
}

void _CefApp::OnContextReleased(CefRefPtr<CefBrowser> browser,
						CefRefPtr<CefFrame> frame,
						CefRefPtr<CefV8Context> context)
{
	if (m_closing && mp_objects) {
		delete mp_objects;
		mp_objects = 0;
		::WSACleanup();
	}
}

bool _CefApp::OnProcessMessageReceived(
	CefRefPtr<CefBrowser> browser,
	CefProcessId source_process,
	CefRefPtr<CefProcessMessage> message)
{
	std::string message_name = message->GetName();
	if (message_name == cef_shutdown_message) {
		m_closing = true;
	} else
	if (message_name == cef_app_name_message) {
		mp_intf->setAppName(message->GetArgumentList()->GetString(0).c_str());
		return true;
	} else
	if (message_name == cef_post_event_message) {
		mp_intf->postEvent(message->GetArgumentList()->GetString(0).c_str());
		return true;
	}
	return false;
}

bool _CefApp::ReturnValue::Execute(
	const CefString& name,
	CefRefPtr<CefV8Value> object,
	const CefV8ValueList& args,
	CefRefPtr<CefV8Value>& retval,
	CefString& exception)
{
	CefRefPtr<CefBrowser> browser = CefV8Context::GetCurrentContext()->GetBrowser();
	if (browser.get()) {
		CefRefPtr<CefProcessMessage> message = CefProcessMessage::Create(cef_return_value_message);
		CefString value = (args.size() > 0) ? args[0]->GetStringValue() : "";
		message->GetArgumentList()->SetString(0, value);
		browser->SendProcessMessage(PID_BROWSER, message);
	}
	return true;
}
