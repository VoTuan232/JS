/*
 * @(#)cef_process.cpp
 *
 * Copyright 2016 Roland Corporation, Japan. All rights reserved.
 */

#include "../../Libraries/JavascriptInterface/CefApp.h"

int WINAPI _tWinMain(
	HINSTANCE hInstance,
	HINSTANCE hPrevInstance,
	LPTSTR lpCmdLine,
	int nCmdShow)
{
	CefEnableHighDPISupport();
	CefMainArgs mainArgs(hInstance);
	CefRefPtr<_CefApp> app = (new _CefApp());
	return CefExecuteProcess(mainArgs, app.get(), NULL);
}
