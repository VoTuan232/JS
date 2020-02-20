/*
 * @(#)NativeConverters.cpp
 *
 * Copyright 2015 Roland Corporation, Japan. All rights reserved.
 */

#include "NativeConverters.h"

#define KEY(S)	std::wstring(CStringW(S))

CStringW JSON::stringify(const std::vector<MIDI_ENDPOINT_INFO>& endpoints)
{
	std::vector<MIDI_ENDPOINT_INFO>::const_iterator info;

	picojson::array a;
	for (info = endpoints.begin(); info != endpoints.end(); info++) {
		const MIDI_ENDPOINT_INFO epi = *info;
		picojson::object o;
		o[KEY(MIDIDeviceNameKey)]    = (picojson::value)std::wstring(CStringW(epi.name));
		o[KEY(MIDIEntityNameKey)]    = (picojson::value)std::wstring(CStringW(epi.entity));
		o[KEY(MIDIEndpointUIDKey)]   = (picojson::value)std::wstring(CStringW(epi.uid));
		o[KEY(MIDIEndpointIndexKey)] = (picojson::value)std::wstring(CStringW(epi.index));
		a.push_back(picojson::value(o));
	}

	picojson::value v = picojson::value(a);
	return v.serialize().c_str();
}

CStringW JSON::stringify(const MIDI_ENDPOINT_INFO* ep)
{
	picojson::object o;

	o[KEY(MIDIDeviceNameKey)]    = (picojson::value)std::wstring(CStringW(ep->name));
	o[KEY(MIDIEntityNameKey)]    = (picojson::value)std::wstring(CStringW(ep->entity));
	o[KEY(MIDIEndpointUIDKey)]   = (picojson::value)std::wstring(CStringW(ep->uid));
	o[KEY(MIDIEndpointIndexKey)] = (picojson::value)std::wstring(CStringW(ep->index));

	picojson::value v = picojson::value(o);
	return v.serialize().c_str();
}

CStringW JSON::stringify(const RWC_DEV_INFO* dev)
{
	picojson::object o;

	o[KEY(RWCDeviceAddressKey)]      = (picojson::value)std::wstring(CStringW(dev->address));
	o[KEY(RWCDevicePortNoKey)]       = (picojson::value)(double)(dev->portNo);
	o[KEY(RWCDeviceUIDKey)]          = (picojson::value)std::wstring(CStringW(dev->uid));
	o[KEY(RWCDeviceCapsKey)]         = (picojson::value)(double)(dev->caps);
	o[KEY(RWCDeviceImageKey)]        = (picojson::value)(double)(dev->image);
	o[KEY(RWCDeviceStatusKey)]       = (picojson::value)(double)(dev->status);
	o[KEY(RWCDeviceManufacturerKey)] = (picojson::value)std::wstring(CStringW(dev->manufacturer));
	o[KEY(RWCDeviceVersionKey)]      = (picojson::value)std::wstring(CStringW(dev->version));
	o[KEY(RWCDeviceNameKey)]         = (picojson::value)std::wstring(CStringW(dev->name));

	picojson::value v = picojson::value(o);
	return v.serialize().c_str();
}

MIDI_ENDPOINT_INFO JSON::endpoint(LPCWSTR text)
{
	picojson::value v;
	picojson::parse(v, text);
	picojson::object& o = v.get<picojson::object>();

	MIDI_ENDPOINT_INFO ep;
	ep.name   = (o[KEY(MIDIDeviceNameKey)].get<std::wstring>()).c_str();
	ep.entity = (o[KEY(MIDIEntityNameKey)].get<std::wstring>()).c_str();
	ep.uid    = (o[KEY(MIDIEndpointUIDKey)].get<std::wstring>()).c_str();
	ep.index  = (o[KEY(MIDIEndpointIndexKey)].get<std::wstring>()).c_str();
	return ep;
}

RWC_DEV_INFO JSON::device(LPCWSTR text)
{
	picojson::value v;
	picojson::parse(v, text);
	picojson::object& o = v.get<picojson::object>();

	RWC_DEV_INFO dev;
	dev.address      = (o[KEY(RWCDeviceAddressKey)].get<std::wstring>()).c_str();
	dev.portNo       = int((o[KEY(RWCDevicePortNoKey)].get<double>()));
	dev.uid          = (o[KEY(RWCDeviceUIDKey)].get<std::wstring>()).c_str();
	dev.caps         = int((o[KEY(RWCDeviceCapsKey)].get<double>()));
	dev.image        = int((o[KEY(RWCDeviceImageKey)].get<double>()));
	dev.status       = int((o[KEY(RWCDeviceStatusKey)].get<double>()));
	dev.manufacturer = (o[KEY(RWCDeviceManufacturerKey)].get<std::wstring>()).c_str();
	dev.version      = (o[KEY(RWCDeviceVersionKey)].get<std::wstring>()).c_str();
	dev.name         = (o[KEY(RWCDeviceNameKey)].get<std::wstring>()).c_str();
	return dev;
}

CStringW HEX::text(const BYTE* msg, int bytes)
{
	CStringW hexStr;

	wchar_t ch[3]; ch[2] = L'\0';
	for (int i = 0; i < bytes; i++) {
		BYTE c0 = msg[i] >> 4;
		BYTE c1 = msg[i] & 0xf;
		ch[0] = (c0 >= 0xa) ? (L'A' + (c0 - 0xa)) : (L'0' + c0);
		ch[1] = (c1 >= 0xa) ? (L'A' + (c1 - 0xa)) : (L'0' + c1);
		hexStr += ch;
	}

	return hexStr;
}

static BYTE wchar2byte(wchar_t c)
{
	BYTE b = 0;
	if (L'0' <= c && c <= L'9')
		b = c - L'0';
	else if (L'a' <= c && c <= L'f')
		b = c - L'a' + 10;
	else if (L'A' <= c && c <= L'F')
		b = c - L'A' + 10;
	return b;
}

std::string HEX::data(LPCWSTR hexStr)
{
	std::string data;

	if (hexStr) {
		while (*hexStr != L'\0') {
			wchar_t c1 = *hexStr++; if (*hexStr == L'\0') break;
			wchar_t c2 = *hexStr++;
			BYTE b1 = wchar2byte(c1);
			BYTE b2 = wchar2byte(c2);
			data += (char)((b1 << 4) | b2);
		}
	}
	return data;
}

CStringA UTF::UTF16toUTF8(const CStringW& utf16)
{
	CStringA utf8;
	int len = WideCharToMultiByte(CP_UTF8, 0, utf16, -1, NULL, 0, 0, 0);
	if (len > 1) {
		char *ptr = utf8.GetBuffer(len - 1);
		if (ptr) WideCharToMultiByte(CP_UTF8, 0, utf16, -1, ptr, len, 0, 0);
		utf8.ReleaseBuffer();
	}
	return utf8;
}

CStringW UTF::UTF8toUTF16(const CStringA& utf8)
{
	CStringW utf16;
	int len = MultiByteToWideChar(CP_UTF8, 0, utf8, -1, NULL, 0);
	if (len > 1) {
		wchar_t *ptr = utf16.GetBuffer(len - 1);
		if (ptr) MultiByteToWideChar(CP_UTF8, 0, utf8, -1, ptr, len);
		utf16.ReleaseBuffer();
	}
	return utf16;
}
