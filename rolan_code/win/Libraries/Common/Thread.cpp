/*
 * @(#)Thread.cpp
 *
 * Copyright 2013 Roland Corporation, Japan. All rights reserved.
 */

#include "Thread.h"

static DWORD WINAPI _threadWrapper(LPVOID param)
{
	Thread* _this = (Thread*)param;

	_this->run();

	if (_this->m_deleteSelf) {
		delete _this;
	}

	return 0;
}

DWORD Thread::_threadStart(bool deleteSelf)
{
	assert(m_thread == NULL);

	m_deleteSelf = deleteSelf;

	DWORD tid;
	m_thread = ::CreateThread(NULL, 0,
		_threadWrapper, (void*)this, CREATE_SUSPENDED, &tid);

	::ResumeThread(m_thread);

	return tid;
}
