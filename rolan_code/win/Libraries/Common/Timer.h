/*
 * @(#)Timer.h
 *
 * Copyright 2013 Roland Corporation, Japan. All rights reserved.
 */

#ifndef __TIMER_H__
#define __TIMER_H__

#include "Thread.h"

class Timer : public Thread {
  public: 
	class Proc {
	  public:
		virtual ~Proc() {};
		virtual void timerproc() = 0;
	};

	Timer(Proc* proc);
	~Timer();
	void start(DWORD msec);
	void stop();

	void run();

  private:
	Proc* mp_proc;
	HANDLE m_event;
	DWORD m_timeout;
};

/* Inline function declarations */

inline Timer::Timer(Proc* proc)
{
	assert(proc != NULL);

	mp_proc = proc;

	m_event = ::CreateEvent(NULL, TRUE, FALSE, NULL);
	m_timeout = 0;
}

inline Timer::~Timer()
{
	stop();
	::CloseHandle(m_event);
}

inline void Timer::start(DWORD msec)
{
	assert(msec != 0);

	stop();

	m_timeout = msec;
	::ResetEvent(m_event);
	_threadStart();
}

inline void Timer::run()
{
	while (::WaitForSingleObject(m_event, m_timeout) == WAIT_TIMEOUT) {
		mp_proc->timerproc();
	}
}

inline void Timer::stop()
{
	::SetEvent(m_event);
	wait();
}

#endif /* __TIMER_H__ */