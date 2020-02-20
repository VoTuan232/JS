; Inno Setup (http://www.jrsoftware.org/isinfo.php)
;
; 1. modify the #define part appropriately according to your App.
; 2. do not forget to create new AppId in [Setup].
; 3. uncomment 'SignTool' and 'SignedUninstaller' in [Setup] for the certificate, and
;    add [Tools] - [Configure Sign Tools...] as follows:
;      name: signtool
;      command: "C:\Program Files (x86)\Windows Kits\8.0\bin\x86\signtool.exe" sign /fd sha256 /f "C:\B0006\sign\sign\Certificate.pfx" /p RT81w093D5P4 /t http://timestamp.digicert.com $f

#define MyAppName		"BOSS TONE STUDIO for SY-1000"
#define MyAppVersion	"1.0.1 (0)"
#define MyAppPublisher	"Roland Corporation"
#define MyAppExeName	"BOSS TONE STUDIO for SY-1000.exe"
#define MyAppDirName	"BOSS"
#define MyCopyright		"Copyright (c) 2020 Roland Corporation."
;#define MyAppExtension	".qtd"

[Setup]
AppId = {{B20A4DC8-B49A-48F7-BFAA-A3D22EBAB170}}
AppName = {#MyAppName}
AppVersion = {#MyAppVersion}
AppPublisher = {#MyAppPublisher}
AppPublisherURL = {cm:MyAppURL}
AppSupportURL = {cm:MySupportURL}
AppUpdatesURL = {cm:MySupportURL}
DefaultDirName = {pf}\{#MyAppDirName}\{#MyAppName}
DefaultGroupName = {#MyAppName}
UsePreviousAppDir =  no
DisableProgramGroupPage = yes
AppCopyright = {#MyCopyright}
AllowNoIcons = yes
OutputDir = .\
OutputBaseFilename = "BOSS TONE STUDIO for SY-1000 Installer"
Compression = lzma
;SolidCompression = yes
;SignTool = signtool
SignedUninstaller = no
UninstallDisplayIcon = {app}\{#MyAppExeName}
ChangesAssociations = yes
UninstallDisplayName = {#MyAppName}
;ArchitecturesInstallIn64BitMode=x64
;ArchitecturesAllowed=x64

[Languages]
Name: "english";  MessagesFile: "compiler:Default.isl"
Name: "japanese"; MessagesFile: "compiler:Languages\Japanese.isl"

[CustomMessages]
english.MyAppURL = http://www.roland.com/
japanese.MyAppURL = http://www.roland.com/jp/
english.MySupportURL = http://www.roland.com/support/
japanese.MySupportURL = http://www.roland.com/jp/support/

[Files]
 Source: "..\..\win\Win32\Release\exe\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
;Source: "..\..\win\x64\Release\exe\*";   DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{group}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; 

[Registry]
;Root: HKCR; Subkey: "{#MyAppExtension}\"; ValueType: string; ValueData: "{#MyAppName}.Document"; Flags: uninsdeletekey
Root: HKCR; Subkey: "{#MyAppName}.Document"; ValueType: string; ValueData: "{#MyAppName} Document" ; Flags: uninsdeletekey
Root: HKCR; Subkey: "{#MyAppName}.Document\DefaultIcon"; ValueType: string; ValueData: "{app}\{#MyAppExeName},1"; Flags: uninsdeletekey
Root: HKCR; Subkey: "{#MyAppName}.Document\shell\open\command"; ValueType: string; ValueData: "{app}\{#MyAppExeName} ""%1""";Flags: uninsdeletekey
;Root: HKLM; Subkey: "SOFTWARE\Classes\{#MyAppExtension}\"; ValueType: string; ValueData: "{#MyAppName}.Document" ; Flags: uninsdeletekey

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent
