//
//  AudioPlayer.cpp
//
//  Copyright 2013 Roland Corporation. All rights reserved.
//

#include "AudioPlayer.h"

AudioPlayer::AudioPlayer()
{
	mp_delegate = 0;
	mp_output = 0;

	mp_file = 0;
	m_hmmio = NULL;

	mp_mmck = 0;
	m_offset0 = 0;
	m_totalTime = 0;
	m_locateTime = 0;
}

AudioPlayer::~AudioPlayer()
{
	mp_delegate = 0;
	close();
	if (mp_output) {
		mp_output->delegate(0);
	}
}

void AudioPlayer::close()
{
	if (mp_output) {
		mp_output->stop();
	}

	closeFile();

	delete [] mp_file;
	mp_file = 0;
}

void AudioPlayer::closeFile()
{
	if (m_hmmio) {
		::mmioClose(m_hmmio, 0);
		m_hmmio = NULL;
	}

	delete [] mp_mmck;
	mp_mmck = 0;

	m_offset0 = 0;
	m_totalTime = 0;
	m_locateTime = 0;
}

void AudioPlayer::output(AudioOutputStream* output)
{
	if (mp_output) {
		mp_output->stop();
	}

	mp_output = output;

	if (mp_output) {
		mp_output->delegate(this);
	}
}

void AudioPlayer::play()
{
	if (m_hmmio && mp_output) {
		mp_output->start();
	}
}

void AudioPlayer::pause()
{
	if (mp_output) {
		mp_output->pause();
	}
}

void AudioPlayer::stop()
{
	if (mp_output) {
		mp_output->stop();
	}

	if (m_hmmio) {
		::mmioSeek(m_hmmio, m_offset0, SEEK_SET);
		m_locateTime = 0;
	}

	if (mp_delegate) {
		delegate()->audioPlayerDidFinishPlaying(mp_file);
	}
}

void AudioPlayer::locate(float time)
{
	stop();

	if (m_hmmio && mp_mmck) {
		LPWAVEFORMATEX pwfe = (LPWAVEFORMATEX)mp_mmck;
		LONG offset = (LONG)(pwfe->nAvgBytesPerSec * time);
		if (::mmioSeek(m_hmmio, offset, SEEK_CUR) != -1) {
			m_locateTime = time;
		}
	}
}

void AudioPlayer::volume(float gain)
{
	if (gain < 0 || gain > 1.0)
		return;

	if (mp_output)
		mp_output->volume(gain);
}

float AudioPlayer::volume() const
{
	return mp_output ? mp_output->volume() : 0;
}

int AudioPlayer::numberOfChannels() const
{
	return mp_output ? mp_output->numberOfChannels() : 0;
}

float AudioPlayer::peakPowerForChannel(int channelNumber) const
{
    if (channelNumber >= numberOfChannels())
        return -120.0f;

	return mp_output ? (mp_output->peakPowerForChannel(channelNumber)) : -120.0f;
}

float AudioPlayer::currentTime() const
{
	return (mp_output ? mp_output->currentTime() : 0) + m_locateTime;
}

float AudioPlayer::totalTime() const
{
	return m_totalTime;
}

int AudioPlayer::status() const
{
	return mp_output ? mp_output->status() : kAudioOutputStatusStop;
}

bool AudioPlayer::open(LPCTSTR file)
{
	close();

	MMRESULT err;
	MMCKINFO riff;
	MMCKINFO fmt;
	MMCKINFO data;
	LPWAVEFORMATEX pwfe;

	bool success = (mp_output != 0);

	if (success) {
		m_hmmio = ::mmioOpen((LPTSTR)file, NULL, MMIO_READ | MMIO_DENYNONE);
		success = (m_hmmio != NULL);
	}

	if (success) {
		riff.fccType = ::mmioStringToFOURCC(TEXT("WAVE"),  0);
		err = ::mmioDescend(m_hmmio, &riff, NULL, MMIO_FINDRIFF);
		success = (err == MMSYSERR_NOERROR);
	}

	if (success) {
		fmt.ckid = ::mmioStringToFOURCC(TEXT("fmt "), 0);
		err = ::mmioDescend(m_hmmio, &fmt, NULL, MMIO_FINDCHUNK);
		success = (err == MMSYSERR_NOERROR);
	}

	if (success) {
		mp_mmck = new BYTE [fmt.cksize];
		pwfe = (LPWAVEFORMATEX)mp_mmck;
		LONG size = ::mmioRead(m_hmmio, (HPSTR)pwfe, fmt.cksize);
		if (size == fmt.cksize) {
			success = mp_output->format(pwfe);
		} else {
			success = false;
		}
	}

	if (success) {
		err = ::mmioAscend(m_hmmio, &fmt, 0);
		success = (err == MMSYSERR_NOERROR);
	}

	if (success) {
		data.ckid = ::mmioStringToFOURCC(TEXT("data"), 0);
		err = ::mmioDescend(m_hmmio, &data, NULL, MMIO_FINDCHUNK);
		success = (err == MMSYSERR_NOERROR);
		m_offset0 = ::mmioSeek(m_hmmio, 0, SEEK_CUR);
	}

	if (success) {
		DWORD bytePerFrame = pwfe->nChannels * (pwfe->wBitsPerSample / 8);
		DWORD totalFrames = data.cksize / bytePerFrame;
		m_totalTime = ((float)totalFrames / pwfe->nSamplesPerSec);
	}

	if (success) {
		mp_file = new TCHAR[MAX_PATH];
		_tcscpy_s(mp_file, MAX_PATH, file);
	} else {
		closeFile();
	}

	return success;
}

int AudioPlayer::outputStream(BYTE* buffer, int length)
{
	LONG n = ::mmioRead(m_hmmio, (HPSTR)buffer, length);

	if (n < 0) {
		stop();
		if (mp_delegate) {
			delegate()->audioPlayerErrorDidOccur(mp_file);
		}
		return 0;
	}
	if (n == 0) {
		stop();
		if (mp_delegate) {
			delegate()->audioPlayerDidEndSong(mp_file);
		}
		return 0;
	}

	memset(buffer + n, 0, length - n);
	return length;
}
