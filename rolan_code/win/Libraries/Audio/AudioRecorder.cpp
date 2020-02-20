//
//  AudioRecorder.m
//
//  Copyright 2014 Roland Corporation. All rights reserved.
//

#include "AudioRecorder.h"

AudioRecorder::AudioRecorder()
{
	mp_delegate = 0;
	mp_input = 0;

	mp_file = 0;
	m_hmmio = NULL;
}

AudioRecorder::~AudioRecorder()
{
	mp_delegate = 0;
	close();
	if (mp_input) {
		mp_input->delegate(0);
	}
}

void AudioRecorder::close()
{
	closeFile();

	if (mp_input) {
		mp_input->stop(true);
	}

	delete [] mp_file;
	mp_file = 0;
}

void AudioRecorder::closeFile()
{
	if (m_hmmio) {
		mmioAscend(m_hmmio, &m_mmckDat, 0);
		mmioAscend(m_hmmio, &m_mmckRif, 0);
		mmioClose(m_hmmio, 0);
		m_hmmio = 0;
	}
}

void AudioRecorder::input(AudioInputStream* input)
{
	if (mp_input) {
		mp_input->stop(true);
	}

	mp_input = input;

	if (mp_input) {
		mp_input->delegate(this);
	}
}

void AudioRecorder::record()
{
	if (mp_input) {
		mp_input->start();
	}
}

void AudioRecorder::pause()
{
	if (mp_input) {
		mp_input->pause();
	}
}

void AudioRecorder::stop(bool shouldStopImmediate)
{
	if (mp_input) {
		mp_input->stop(shouldStopImmediate);
	}

	if (shouldStopImmediate) {
		inputStreamDidClosed();
	}
}

void  AudioRecorder::volume(float gain)
{
	if (gain < 0 || gain > 1.0)
		return;

	if (mp_input)
		mp_input->volume(gain);
}

float AudioRecorder::volume()
{
	return mp_input ? mp_input->volume() : 0;
}

int AudioRecorder::numberOfChannels()
{
	return mp_input ? mp_input->numberOfChannels() : 0;
}

float AudioRecorder::peakPowerForChannel(int channelNumber)
{
    if (channelNumber >= numberOfChannels())
        return -120.0f;

    return mp_input ? mp_input->peakPowerForChannel(channelNumber) : -120.0f;
}

float AudioRecorder::currentTime()
{
	return (mp_input && m_hmmio) ? mp_input->currentTime() : 0;
}

int AudioRecorder::status()
{
	return mp_input ? mp_input->status() : kAudioInputStatusStop;
}

bool AudioRecorder::create(LPCTSTR file, enum RecordingFormat format)
{
	close();

	switch (format) {
		case kRecordingFormatWAV:
			break;

		case kRecordingFormatAAC_256K:
		case kRecordingFormatAAC_192K:
		case kRecordingFormatAAC_128K:
		case kRecordingFormatAAC_64K:
		default:
			goto error;
	}

	if (!mp_input) {
		goto error;
	}

	m_hmmio = mmioOpen((LPTSTR)file, NULL, MMIO_CREATE | MMIO_WRITE);
	if (m_hmmio == NULL) {
		goto error;
	}

	MMRESULT result;

	m_mmckRif.fccType = mmioStringToFOURCC(TEXT("WAVE"), 0);
	result = mmioCreateChunk(m_hmmio, &m_mmckRif, MMIO_CREATERIFF);
	if (result != MMSYSERR_NOERROR) {
		goto error;
	}

	MMCKINFO mmckFmt;
	mmckFmt.ckid = mmioStringToFOURCC(TEXT("fmt "), 0);
	result = mmioCreateChunk(m_hmmio, &mmckFmt, 0);
	if (result != MMSYSERR_NOERROR) {
		goto error;
	}

	mmioWrite(m_hmmio, (char *)mp_input->format(), sizeof(WAVEFORMATEX));
    result = mmioAscend(m_hmmio, &mmckFmt, 0);
	if (result != MMSYSERR_NOERROR) {
		goto error;
	}

	m_mmckDat.ckid = mmioStringToFOURCC(TEXT("data"), 0);
	result = mmioCreateChunk(m_hmmio, &m_mmckDat, 0);
	if (result != MMSYSERR_NOERROR) {
		goto error;
	}

	mp_file = new TCHAR[MAX_PATH];
	_tcscpy_s(mp_file, MAX_PATH, file);

	return true;

error:
	if (m_hmmio) {
		mmioClose(m_hmmio, 0);
		m_hmmio = 0;
	}
	::DeleteFile(file);

	return false;
}

void AudioRecorder::inputStream(const BYTE* buffer, int length)
{
	if (m_hmmio == NULL) return;

	LONG ret = mmioWrite(m_hmmio, (char*)buffer, length);
	if (ret < 0) {
		if (mp_file && mp_delegate) {
			delegate()->audioRecorderErrorDidOccur(mp_file);
		}
		stop(true);
	}
}

void AudioRecorder::inputStreamDidClosed()
{
	closeFile();

	if (mp_file && mp_delegate) {
		delegate()->audioRecorderDidFinishRecording(mp_file);
	}

	delete [] mp_file;
	mp_file = 0;
}
