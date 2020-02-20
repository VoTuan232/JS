//
//  NativeCall+barcode.cpp
//
//  Copyright 2018 Roland Corporation. All rights reserved.
//

#include "NativeCall.h"

static LPCWSTR OBJ_NAME = L"barcode";

enum {
	dispid_barcode_read,
};

NativeCall_barcode::NativeCall_barcode(NativeObjects* objs) : NativeCall(objs)
{
	set(L"read", dispid_barcode_read);
}

LPCWSTR NativeCall_barcode::InterfaceName() const { return OBJ_NAME; }

void NativeCall_barcode::Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret)
{
	switch (dispid) {
		case dispid_barcode_read:
		{
			/* not supported */
			break;
		}
	}
}
