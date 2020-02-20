/*
 * @(#)NativeConverters.h
 *
 * Copyright 2015 Roland Corporation, Japan. All rights reserved.
 */

#ifndef __NATIVE_CONVERTERS_H__
#define __NATIVE_CONVERTERS_H__

#include "NativeObjects.h"
#include "picojson.h"

class JSON
{
  public:
	static CStringW stringify(const std::vector<MIDI_ENDPOINT_INFO>& endpoints);
	static CStringW stringify(const MIDI_ENDPOINT_INFO* ep);
	static CStringW stringify(const RWC_DEV_INFO* dev);

	static MIDI_ENDPOINT_INFO endpoint(LPCWSTR text);
	static RWC_DEV_INFO device(LPCWSTR text);
};

class HEX
{
  public:
	static CStringW text(const BYTE* msg, int bytes);
	static std::string data(LPCWSTR hex);
};

class UTF
{
  public:
	static CStringA UTF16toUTF8(const CStringW& utf16);
	static CStringW UTF8toUTF16(const CStringA& utf8);
};

#endif /* __NATIVE_CONVERTERS_H__ */
