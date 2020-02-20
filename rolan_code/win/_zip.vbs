set Args = WScript.Arguments
source = Args(0)
target = Args(1)

' create empty ZIP file
set fso = CreateObject("Scripting.FileSystemObject")
set zip = fso.OpenTextFile(target, 2, vbtrue)
' write ZIP header, this ensures that Windows recognizes the file as "ZIP Folder"
zip.Write "PK" & Chr(5) & Chr(6) & String(18, Chr(0))
zip.Close
set zip = nothing
set fso = nothing

' copy files to ZIP file
set app = CreateObject("Shell.Application")

set sourceFolderObj = app.NameSpace(source)
set targetFolderObj = app.NameSpace(target)

for each item in sourceFolderObj.Items
  itemPath = source & "\" & item.Name

  copyItem = false

  ' ZIP file is included in Items collection and is recognized as folder, thus skip it to avoid script errors
  if itemPath <> target then
    if item.IsFolder then
      if item.GetFolder.Items().Count = 0 then
        ' folder is empty, skip it as empty folders can't be compressed
      else
        copyItem = true
      end if
    else
      copyItem = true
    end if
  end if

  if copyItem then
    targetFolderObj.CopyHere item
    ' wait until the file appears in the ZIP file, 
    ' this is needed because CopyHere() returns immediately after starting an asynchronous copy process 
    ' (starting multiple asynchronous copy will not work as it causes error messages, an invalid ZIP file, ...)
    while (targetFolderObj.ParseName(item.Name) is nothing)
      WScript.Sleep 1
    wend
  end If
next

set targetFolderObj = nothing
set sourceFolderObj = nothing
set app = nothing
