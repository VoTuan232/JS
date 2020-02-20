/*
 * @(#)CefMessage.h
 *
 * Copyright 2016 Roland Corporation, Japan. All rights reserved.
 */

#ifndef __CEF_MESSAGE_H__
#define __CEF_MESSAGE_H__

#include <windows.h>

#define WM_NATIVE_CONTROL (WM_APP + 1)
#define WM_FILE_DIALOG    (WM_APP + 2)

extern LPCSTR cef_shutdown_message;
extern LPCSTR cef_app_name_message;
extern LPCSTR cef_app_ready_message;
extern LPCSTR cef_return_value_message;
extern LPCSTR cef_post_event_message;
extern LPCSTR cef_open_panel_message;
extern LPCSTR cef_save_panel_message;
extern LPCSTR cef_control_message;
extern LPCSTR cef_exit_message;

#endif /* __CEF_MESSAGE_H__ */
