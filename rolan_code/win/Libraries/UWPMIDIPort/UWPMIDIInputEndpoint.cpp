/*
 * @(#)UWPMIDIInputEndpoint.cpp
 *
 * Copyright 2018 Roland Corporation, Japan. All rights reserved.
 */

#ifdef USE_UWP_MIDI

#include "../MIDIClient/MIDIClient.h"
#include "UWPMIDIInputPort.h"

bool UWPMIDIInputEndpoint::open(WinRTMidiPtr midi, UINT id)
{
	close();

	m_in = nullptr;
	WinRTMidiErrorType err = gWinRTMidiInPortOpen(midi, id, uwpmidi_input, &m_in, (void*)this);
	return (err == WINRT_NO_ERROR);
}

void UWPMIDIInputEndpoint::close()
{
	if (m_in != nullptr) {
		gWinRTMidiInPortFree(m_in);
	}
}

void UWPMIDIInputEndpoint::parse(const BYTE* msg, int bytes, DWORD msec)
{
	for (int idx = 0; bytes > 0; ) {

		BYTE sts;
		if ((msg[idx] & 0x80) != 0) {
			sts = msg[idx++]; bytes--;
		} else {
			sts = running;
		}

		int len = 0;
		switch (sts & 0xf0) {
			case 0x80: len = 3; running = sts; break;
			case 0x90: len = 3; running = sts; break;
			case 0xa0: len = 3; running = sts; break;
			case 0xb0: len = 3; running = sts; break;
			case 0xc0: len = 2; running = sts; break;
			case 0xd0: len = 2; running = sts; break;
			case 0xe0: len = 3; running = sts; break;
			case 0xf0:
				switch (sts) {
					case 0xf0: running = 1; break;
					case 0xf7: running = 0; break;

					case 0xf1: len = 2; break;
					case 0xf2: len = 3; break;
					case 0xf3: len = 2; break;
					case 0xf6: len = 1; break;

				//	case 0xf8:
					case 0xfa:
					case 0xfb:
					case 0xfc:
				//	case 0xfe:
					case 0xff: len = 1; break;

					default: continue;
				}
				break;
		}

		if (len > 0) {
			BYTE buf[3] = { sts, 0, 0 };
			if (len > 1) { buf[1] = msg[idx++]; bytes--; }
			if (len > 2) { buf[2] = msg[idx++]; bytes--; }
			mp_inputPort->input(buf, len, msec);
		} else if (sts == 0xf0) {
			sysex_len = 0;
			sysex_buf[sysex_len++] = sts;
		} else if (sts == 0xf7) {
			if (sysex_len > 0) {
				sysex_buf[sysex_len++] = sts;
				mp_inputPort->input(sysex_buf, sysex_len, msec);
				sysex_len = 0;
			}
	    } else {
			if (running && sysex_len < (kSysexBufSize - 1)) {
				sysex_buf[sysex_len++] = msg[idx];
			}
			idx++; bytes--;
		}
	}
}

#endif /* USE_UWP_MIDI */