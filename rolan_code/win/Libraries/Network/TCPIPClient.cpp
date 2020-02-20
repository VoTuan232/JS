/*
 * @(#)TCPIPClient.cpp
 *
 * Copyright 2019 Roland Corporation, Japan. All rights reserved.
 */

#include "TCPIPClient.h"

void TCPIPClient::run()
{
	BYTE* buf = new BYTE[READ_BUFSIZ];

	while (true) {
		int len = read(buf, READ_BUFSIZ);
		if (len <= 0) break;
		if (mp_delegate) {
			mp_delegate->received(buf, len);
		}
	}

	delete [] buf;

	if (mp_delegate) {
		if (mp_delegate->closed()) {
			delete mp_delegate;
		}
		mp_delegate = 0;
	}
}
