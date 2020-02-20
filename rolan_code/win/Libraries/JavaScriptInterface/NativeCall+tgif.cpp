//
//  NativeCall+tgif.cpp
//
//  Copyright 2019 Roland Corporation. All rights reserved.
//

#include "NativeCall.h"

static LPCWSTR OBJ_NAME = L"tgif";

enum {
	dispid_tgif_buffer,
	dispid_tgif_param,
	dispid_tgif_send,
	dispid_tgif_thru,
};

NativeCall_tgif::NativeCall_tgif(NativeObjects* objs) : NativeCall(objs)
{
	set(L"buffer", dispid_tgif_buffer);
	set(L"param",  dispid_tgif_param);
	set(L"send",   dispid_tgif_send);
	set(L"thru",   dispid_tgif_thru);
}

LPCWSTR NativeCall_tgif::InterfaceName() const { return OBJ_NAME; }

void NativeCall_tgif::Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret)
{
	switch (dispid) {
#ifdef USE_TGIF
		case dispid_tgif_buffer:
		{
			#define SCALE 4

			if (args.size() > 0) {
				TGIF::buffer(args[0]->GetIntValue() * SCALE);
			} else {
				int buf = TGIF::buffer();
				ret = (buf > 0) ? (buf / SCALE) : buf;
			}
			break;
		}
		case dispid_tgif_param:
		{
			UINT pid = args[0]->GetUIntValue();
			if (args.size() > 1) {
				TGIF::param(pid, args[1]->GetIntValue());
			} else {
				ret = TGIF::param(pid);
			}
			break;
		}
		case dispid_tgif_send:
		{
			std::string data = HEX::data(args[0]->GetStringValue().c_str());
			TGIF::MIDISend((BYTE*)data.c_str(), (int)data.length(), ::GetTickCount());
			break;
		}
		case dispid_tgif_thru:
		{
			TGIF::thru(args[0]->GetBoolValue());
			break;
		}
#else
		case dispid_tgif_buffer:
		{
			if (args.size() == 0) { ret = -1; }
			break;
		}
		case dispid_tgif_param:
		{
			if (args.size() == 1) { ret = 0; }
			break;
		}
#endif
	}
}
