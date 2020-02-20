#ifdef _WIN64
#define VER_PRODUCTNAME_STR		"Quattro (64bit)\0"
#else
#define VER_PRODUCTNAME_STR		"Quattro (32bit)\0"
#endif

#define VER_FILENAME_STR		"quattro(win).exe\0"
#define VER_VERSION				1,0,1,0
#define VER_VERSION_STR			"1.0.1 (0)\0"

#define VER_COMPANYNAME_STR		"Roland Corporation\0"
#define VER_COPYRIGHT_STR		"Copyright (C) 2019 " VER_COMPANYNAME_STR

#ifdef _WIN64
#define __MOZILLA__ L"Mozilla/5.0 (Windows NT 6.1; Win64; x64) "
#else
#define __MOZILLA__ L"Mozilla/5.0 (Windows NT 6.1; WOW64) "
#endif
#define CEF_USER_AGENT \
	__MOZILLA__ \
	L"AppleWebKit/537.36 (KHTML, like Gecko) " \
	L"Chrome/66.0.3359.117 " \
	L"Safari/537.36 " \
	L"roland.quattro(Win)"
