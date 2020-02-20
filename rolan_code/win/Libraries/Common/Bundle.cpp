/*
 * @(#)Bundle.cpp
 *
 * Copyright 2015 Roland Corporation, Japan. All rights reserved.
 */

#include "Bundle.h"

#include <shlwapi.h>
#include <shlobj.h>
#include <assert.h>

CString Bundle::getBundlePath() const
{
	TCHAR path[MAX_PATH];

	HRESULT hr = ::SHGetFolderPath(NULL, CSIDL_LOCAL_APPDATA, NULL, 0, path);
	if (!SUCCEEDED(hr)) {
		::SHGetFolderPath(NULL, CSIDL_COMMON_APPDATA, NULL, 0, path);
	}

	::PathAppend(path, TEXT("Roland"));
	if (!::PathFileExists(path)) ::CreateDirectory(path, NULL);
	::PathAppend(path, m_appName);
	if (!::PathFileExists(path)) ::CreateDirectory(path, NULL);

	assert(::PathFileExists(path));

	return (CString(path) + TEXT("\\"));
}

CString Bundle::getLocalPath(LPCTSTR folder) const
{
	CString path = getBundlePath() + folder;
	if (!::PathFileExists(path)) ::CreateDirectory(path, NULL);
	return (path + TEXT("\\"));
}

bool Bundle::copyResource(HINSTANCE hInstance, UINT bundleIdentifier)
{
	CString path = getBundlePath();

	TCHAR identifier[64];
	if (LoadString(hInstance, bundleIdentifier, identifier, sizeof(identifier)) == 0) {
		_tcscpy_s(identifier, 64, TEXT("tmp"));
	}
	path += identifier;
	path += TEXT(".zip");

	bool success = false;
	if (_tcscmp(identifier, TEXT("tmp")) && ::PathFileExists(path)) {
		success = true;
	} else {

		HRSRC  rsrc = ::FindResource(hInstance, TEXT("BUNDLE"), TEXT("ZHTML"));
		DWORD  size = ::SizeofResource(hInstance, rsrc);
		LPVOID data = ::LockResource(LoadResource(hInstance, rsrc));
		if (data) {
			HANDLE file = ::CreateFile(path, GENERIC_WRITE, FILE_SHARE_READ, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);
			if (file != INVALID_HANDLE_VALUE) {
				DWORD bytes;
				::WriteFile(file, data, size, &bytes, NULL);
				::CloseHandle(file);
				if (unzip(CStringW(path), CStringW(getBundlePath()))) {
					success = true;
				} else {
					::DeleteFile(path);
				}
			}
		}
	}

	return success;
}

bool Bundle::unzip(LPCWSTR zipFile, LPCWSTR unzipPath)
{
	bool success = false;

	::CoInitialize(NULL);

	CComBSTR source(zipFile);
	CComBSTR dest(unzipPath);

	IShellDispatch *pISD;
	HRESULT hr = ::CoCreateInstance(CLSID_Shell, NULL, CLSCTX_INPROC_SERVER, IID_IShellDispatch, (void **)&pISD);
	if (SUCCEEDED(hr)) {

		Folder *pToFolder = NULL;

		VARIANT vdir;
		VariantInit(&vdir);
		vdir.vt = VT_BSTR;
		vdir.bstrVal = dest;
		hr = pISD->NameSpace(vdir, &pToFolder);
		if (SUCCEEDED(hr)) {

			Folder *pFromFolder = NULL;

			VARIANT vfile;
			VariantInit(&vfile);
			vfile.vt = VT_BSTR;
			vfile.bstrVal = source;
			hr = pISD->NameSpace(vfile, &pFromFolder);
			if (SUCCEEDED(hr)) {

				FolderItems *fi = NULL;
				pFromFolder->Items(&fi);

				VARIANT vopt;
				VariantInit(&vopt);
				vopt.vt = VT_I4;
				vopt.lVal = FOF_NO_UI;//4; // Do not display a progress dialog box

				VARIANT newV;
				VariantInit(&newV);
				newV.vt = VT_DISPATCH;
				newV.pdispVal = fi;
				hr = pToFolder->CopyHere(newV, vopt);
				if (hr == S_FALSE) {
					/* failed to unzip */
				} else if (SUCCEEDED(hr)) {
					success = true;
				}
			}

			pToFolder->Release();
			pFromFolder->Release();
		}

		pISD->Release();
	}

	::CoUninitialize();

	return success;
}
