//
//  NativeCall+app.cpp
//
//  Copyright 2015 Roland Corporation. All rights reserved.
//

#include "NativeCall.h"
#include "../Common/Bundle.h"
#include "../Common/Registry.h"

static LPCWSTR OBJ_NAME = L"app";

enum {
	dispid_app_ready,
	dispid_app_startevent,
	dispid_app_getevent,
	dispid_app_storage,
	dispid_app_storage2,
	dispid_app_clipboard,
	dispid_app_importfile,
	dispid_app_exportfile,
	dispid_app_control,
	dispid_app_exit,
};

NativeCall_app::NativeCall_app(NativeObjects* objs) : NativeCall(objs)
{
	set(L"ready",      dispid_app_ready);
	set(L"startevent", dispid_app_startevent);
	set(L"getevent",   dispid_app_getevent);
	set(L"storage",    dispid_app_storage);
	set(L"storage2",   dispid_app_storage2);
	set(L"clipboard",  dispid_app_clipboard);
	set(L"importfile", dispid_app_importfile);
	set(L"exportfile", dispid_app_exportfile);
	set(L"control",    dispid_app_control);
	set(L"exit",       dispid_app_exit);
}

LPCWSTR NativeCall_app::InterfaceName() const { return OBJ_NAME; }

void NativeCall_app::Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret)
{
	switch (dispid) {

		case dispid_app_ready:
		{
			mp_objs->mp_intf->ready();
		}
		break;
		case dispid_app_startevent:
		{
			mp_objs->mp_intf->startEvent(args[0]->GetBoolValue());
		}
		break;
		case dispid_app_getevent:
		{
			std::wstring ev = mp_objs->mp_intf->getEvent();
			ret = ev.c_str();
		}
		break;
		case dispid_app_storage:
		{
			CString appName = mp_objs->mp_intf->getAppName();
			Registry reg(TEXT("Software\\Roland\\") + appName);
			if (args.size() > 0) {
				CString pref(args[0]->GetStringValue().c_str());
				reg.setString(TEXT("pref"), pref);
			} else {
				ret = L"";
				LPTSTR p = reg.loadString(TEXT("pref"));
				if (p) {
					ret = CStringW(p);
					delete [] p;
				}
			}
		}
		break;
		case dispid_app_storage2:
		{
			ret = L""; if (args.size() == 0) break;

			Bundle bundle(mp_objs->mp_intf->getAppName());
			CString key(args[0]->GetStringValue().c_str());
			CString path = bundle.getLocalPath(TEXT("pref")) + key;
			if (args.size() > 1) {
				CStringW data(args[1]->GetStringValue().c_str());
				HANDLE hFile = ::CreateFile(path, GENERIC_WRITE, FILE_SHARE_READ, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);
				if (hFile != INVALID_HANDLE_VALUE) {
					CStringA text = UTF::UTF16toUTF8(data);
					LPCSTR buf = text;
					int buflen = (int)strlen(buf);
					DWORD bytes;
					::WriteFile(hFile, buf, buflen, &bytes, NULL);
					::CloseHandle(hFile);
				}
			} else {
				HANDLE hFile = ::CreateFile(path, GENERIC_READ, FILE_SHARE_READ, NULL, OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, NULL);
				if (hFile != INVALID_HANDLE_VALUE) {
					DWORD datalen = ::GetFileSize(hFile, NULL);
					BYTE* data = new BYTE[datalen + 1];
					DWORD bytes;
					if (data && ::ReadFile(hFile, data, datalen, &bytes, NULL)) {
						data[bytes] = '\0';
						ret = UTF::UTF8toUTF16(CStringA(data));
					}
					::CloseHandle(hFile);
					delete [] data;
				}
			}
		}
		break;
		case dispid_app_clipboard:
		{
			if (args.size() > 0) {
				mp_objs->m_clipboard = args[0]->GetStringValue().c_str();
			} else {
				ret = mp_objs->m_clipboard;
			}
		}
		break;
		case dispid_app_importfile:
		case dispid_app_exportfile:
		{
			/* not supported */
			break;
		}
		case dispid_app_control:
		{
			mp_objs->mp_intf->control(CString(args[0]->GetStringValue().c_str()));
		}
		break;
		case dispid_app_exit:
		{
			mp_objs->mp_intf->exit();
		}
		break;

	}
}
