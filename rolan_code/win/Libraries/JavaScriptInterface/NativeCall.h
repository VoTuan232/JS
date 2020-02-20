/*
 * @(#)NativeCall.h
 *
 * Copyright 2015 Roland Corporation, Japan. All rights reserved.
 */

#ifndef __NATIVE_CALL_H__
#define __NATIVE_CALL_H__

#include <windows.h>
#include <atlstr.h>
#include <string>
#include <map>
#include "NativeObjects.h"
#include "NativeConverters.h"

#include <include/cef_v8.h>

class CefRetValue
{
  public:
	CefRetValue(CefRefPtr<CefV8Value>& x) : retval(x)
		{ retval = CefV8Value::CreateUndefined(); }

	void operator=(bool v)    { retval = CefV8Value::CreateBool(v);   }
	void operator=(int v)     { retval = CefV8Value::CreateInt(v);    }
	void operator=(DWORD v)   { retval = CefV8Value::CreateUInt(v);   }
	void operator=(float v)   { retval = CefV8Value::CreateDouble(v); }
	void operator=(LPCWSTR v) { retval = CefV8Value::CreateString(v); }

  private:
	CefRefPtr<CefV8Value>& retval;
};

class NativeException
{
  public:
	CStringW message;
	NativeException() {
		LPTSTR str = NULL;
		::FormatMessage(FORMAT_MESSAGE_ALLOCATE_BUFFER | FORMAT_MESSAGE_FROM_SYSTEM, NULL,
			::GetLastError(), MAKELANGID(LANG_NEUTRAL, SUBLANG_DEFAULT), (LPTSTR)&str, 0, NULL);
		message = CStringW(str);
		::LocalFree(str);
	}
};

class NativeCall : public CefV8Handler
{
  public:
	NativeCall(NativeObjects* objs) : mp_objs(objs) {}
	virtual ~NativeCall() {}

	void OnContextCreated(CefRefPtr<CefV8Value> window) {
		CefRefPtr<CefV8Value> obj = CefV8Value::CreateObject(NULL, NULL);
		std::map<std::wstring, UINT>::iterator iter = idMap.begin();
		for ( ; iter != idMap.end(); iter++) {
			CefRefPtr<CefV8Value> function = CefV8Value::CreateFunction(iter->first, this);
			obj->SetValue(iter->first, function, V8_PROPERTY_ATTRIBUTE_NONE);
		}
		window->SetValue((LPCWSTR)(CStringW(L"$$") + InterfaceName()), obj, V8_PROPERTY_ATTRIBUTE_NONE);
	}

	virtual bool Execute(const CefString& name, CefRefPtr<CefV8Value> object, const CefV8ValueList& arguments, CefRefPtr<CefV8Value>& retval, CefString& exception) OVERRIDE {
		std::map<std::wstring, UINT>::iterator iter = idMap.find(name);
		if (iter == idMap.end()) {
			return false;
		}
		try {
			CefRetValue ret(retval);
			Dispatch(iter->second, arguments, ret);
		} catch (NativeException* e) {
			exception = e->message;
		} catch (...) {
			exception = L"system exception";
		}
		return true;
	}

	virtual LPCWSTR InterfaceName() const = 0;
	virtual void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret) = 0;

  protected:
	NativeObjects* mp_objs;
	std::map<std::wstring, UINT> idMap;
	void set(const wchar_t* name, UINT dispid) { idMap.insert(std::make_pair(name, dispid)); }
};

class NativeCall_app : public NativeCall {
  public:
	NativeCall_app(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_app);
};

class NativeCall_midi : public NativeCall {
  public:
	NativeCall_midi(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_midi);
};

class NativeCall_midix : public NativeCall {
  public:
	NativeCall_midix(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_midix);
};

class NativeCall_tgif : public NativeCall {
  public:
	NativeCall_tgif(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_tgif);
};

class NativeCall_player : public NativeCall {
  public:
	NativeCall_player(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_player);
};

class NativeCall_recorder : public NativeCall {
  public:
	NativeCall_recorder(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_recorder);
};

class NativeCall_rwc : public NativeCall {
  public:
	NativeCall_rwc(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_rwc);
};

class NativeCall_http : public NativeCall {
  public:
	NativeCall_http(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_http);
};

class NativeCall_tcpip : public NativeCall {
  public:
	NativeCall_tcpip(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_tcpip);
};

class NativeCall_netservice : public NativeCall {
  public:
	NativeCall_netservice(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_netservice);
};

class NativeCall_fs : public NativeCall {
  public:
	NativeCall_fs(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_fs);
};

class NativeCall_security : public NativeCall {
  public:
	NativeCall_security(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_security);
};

class NativeCall_notification : public NativeCall {
  public:
	NativeCall_notification(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_notification);
};

class NativeCall_recognizer : public NativeCall {
  public:
	NativeCall_recognizer(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_recognizer);
};

class NativeCall_barcode : public NativeCall {
  public:
	NativeCall_barcode(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_barcode);
};

class NativeCall_sh : public NativeCall {
  public:
	NativeCall_sh(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_sh);
};

class NativeCall_util : public NativeCall {
  public:
	NativeCall_util(NativeObjects* objs);
	LPCWSTR InterfaceName() const;
	void Dispatch(UINT dispid, const CefV8ValueList& args, CefRetValue& ret);
  private:
	IMPLEMENT_REFCOUNTING(NativeCall_util);
};

#endif /* __NATIVE_CALL_H__ */
