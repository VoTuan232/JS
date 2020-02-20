/*
 * @(#)Bundle.h
 *
 * Copyright 2013 Roland Corporation, Japan. All rights reserved.
 */

#ifndef __BUNDLE_H__
#define __BUNDLE_H__

#include <windows.h>
#include <atlstr.h>

class Bundle
{
  public:
	Bundle(LPCTSTR appName) : m_appName(appName) { }
	CString getBundlePath() const;
	CString getLocalPath(LPCTSTR folder) const;
	bool copyResource(HINSTANCE hInstance, UINT bundleIdentifier);

	static bool unzip(LPCWSTR zipFile, LPCWSTR unzipPath);

  private:
	CString m_appName;
};

#endif /* __BUNDLE_H__ */
