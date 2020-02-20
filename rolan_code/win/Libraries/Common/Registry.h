/*
 * @(#)Registry.h
 *
 * Copyright 2013 Roland Corporation, Japan. All rights reserved.
 */

#ifndef __REGISTRY_H__
#define __REGISTRY_H__

#include <windows.h>

class Registry
{
  public:
	Registry(LPCTSTR subkey);
	~Registry();
	LPTSTR loadString(LPTSTR keyname);
	void setString(LPTSTR keyname, LPCTSTR buffer);
	bool getValue(LPTSTR keyname, LPLONG value);
	void setValue(LPTSTR keyname, LONG value);
	void deleteValue(LPTSTR keyname);

  private:
	HKEY hkey;
};

#endif /* __REGISTRY_H__ */
