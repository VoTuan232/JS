/*
 * @(#)TCPIPClient.h
 *
 * Copyright 2019 Roland Corporation, Japan. All rights reserved.
 */

#ifndef __TCPIP_CLIENT_H__
#define __TCPIP_CLIENT_H__

#include "Socket.h"
#include "../Common/Thread.h"

class TCPIPClientDelegate
{
  public:
	virtual ~TCPIPClientDelegate() { }

	/* @required */
	virtual void received(const BYTE* buf, int len) = 0;
	virtual bool closed() = 0;
};

class TCPIPClient : public Socket, public Thread
{
  public:
	TCPIPClient();
	virtual ~TCPIPClient() { }

	void delegate(TCPIPClientDelegate* obj);
	TCPIPClientDelegate* delegate() const;

	void run();

  private:
	enum { READ_BUFSIZ = 0x20000 };

	TCPIPClientDelegate* mp_delegate;
};

inline TCPIPClient::TCPIPClient() : mp_delegate(0)
	{ create(); }

inline void TCPIPClient::delegate(TCPIPClientDelegate* obj)
	{ mp_delegate = obj; }
inline TCPIPClientDelegate* TCPIPClient::delegate() const
	{ return mp_delegate; }

#endif /* __TCPIP_CLIENT_H__ */
