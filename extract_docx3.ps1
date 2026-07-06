Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead('C:\Users\Admin\Downloads\Alpen Glow Pl NW 32.docx')
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xml = $reader.ReadToEnd()
$reader.Close()
$zip.Dispose()
$xml -replace '<[^>]+>','' -replace '&amp;','&' -replace '&lt;','<' -replace '&gt;','>' -replace '&apos;',"'" -replace '&quot;','"'
