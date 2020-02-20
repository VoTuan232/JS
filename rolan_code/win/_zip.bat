@echo off
set TARGET=html.zip
set SOURCE=..\html

set TEMPDIR=C:\Temp\314
set TEMPZIP=C:\Temp\314.zip
if exist %TEMPZIP% del /Q %TEMPZIP%
if exist %TEMPDIR% rmdir /S /Q %TEMPDIR%
mkdir %TEMPDIR%
mkdir %TEMPDIR%\html
xcopy /S /V /Q %SOURCE% %TEMPDIR%\html

rmdir /S /Q %TEMPDIR%\html\ebuilder
del /Q %TEMPDIR%\html\ebuilder.html
del /Q %TEMPDIR%\html\export.html
del /Q %TEMPDIR%\html\elf.html
del /Q %TEMPDIR%\html\elf.css
del /Q %TEMPDIR%\html\bg745-pc.elf
del /Q %TEMPDIR%\html\doc

set BLDDIR=Win23\Release\exe
rmdir /S /Q %BLDDIR%blob_storage >NUL 2>&1
rmdir /S /Q %BLDDIR%GPUCache >NUL 2>&1
rmdir /S /Q %BLDDIR%VideoDecodeStats >NUL 2>&1
rmdir /S /Q %BLDDIR%webrtc_event_log >NUL 2>&1

CScript _zip.vbs %TEMPDIR% %TEMPZIP%

copy /Y %TEMPZIP% %TARGET%

del /Q %TEMPZIP%
rmdir /S /Q %TEMPDIR%
