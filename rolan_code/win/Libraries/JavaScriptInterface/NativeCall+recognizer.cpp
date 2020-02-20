//
//  NativeCall+recognizer.cpp
//
//  Copyright 2015 Roland Corporation. All rights reserved.
//

#include "NativeCall.h"

static LPCWSTR OBJ_NAME = L"recognizer";

enum {
	dispid_recognizer_start,
	dispid_recognizer_stop,
};

NativeCall_recognizer::NativeCall_recognizer(NativeObjects* objs) : NativeCall(objs)
{
	set(L"start", dispid_recognizer_start);
	set(L"stop",  dispid_recognizer_stop);
}

LPCWSTR NativeCall_recognizer::InterfaceName() const { return OBJ_NAME; }

void NativeCall_recognizer::Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret)
{
	switch (dispid) {
		case dispid_recognizer_start:
		{
			CStringW ev;
			ev.Format(L"%s\f%s\f%s", OBJ_NAME, L"error", L"Speech Recognization is not supported.");
			mp_objs->mp_intf->postEvent(ev);
			break;
		}
		case dispid_recognizer_stop:
		{
			break;
		}
	}
}
