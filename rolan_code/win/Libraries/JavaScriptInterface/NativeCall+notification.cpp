//
//  NativeCall+notification.cpp
//
//  Copyright 2018 Roland Corporation. All rights reserved.
//

#include "NativeCall.h"

static LPCWSTR OBJ_NAME = L"notification";

enum {
	dispid_notification_token,
	dispid_notification_badge,
};

NativeCall_notification::NativeCall_notification(NativeObjects* objs) : NativeCall(objs)
{
	set(L"token", dispid_notification_token);
	set(L"badge", dispid_notification_badge);
}

LPCWSTR NativeCall_notification::InterfaceName() const { return OBJ_NAME; }

void NativeCall_notification::Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret)
{
	switch (dispid) {
		case dispid_notification_token:
		{
			ret = L""; /* no device token */
			break;
		}
		case dispid_notification_badge:
		{
			ret = 0; /* always return 0 */
			break;
		}
	}
}
