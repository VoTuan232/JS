//
//  NativeCall+netservice.cpp
//
//  Copyright 2019 Roland Corporation. All rights reserved.
//

#include "NativeCall.h"

static LPCWSTR OBJ_NAME = L"netservice";

enum {
	dispid_netservice_search,
	dispid_netservice_stop,
};

NativeCall_netservice::NativeCall_netservice(NativeObjects* objs) : NativeCall(objs)
{
	set(L"search", dispid_netservice_search);
	set(L"stop",   dispid_netservice_stop);
}

LPCWSTR NativeCall_netservice::InterfaceName() const { return OBJ_NAME; }

void NativeCall_netservice::Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret)
{
	switch (dispid) {
		case dispid_netservice_search:
		{
			/* not implemented yet */
			ret = false;
			break;
		}
		case dispid_netservice_stop:
		{
			/* not implemented yet */
			break;
		}
	}
}
