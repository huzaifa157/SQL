# ✅ Connecting to MySQL from PowerShell using full path

# Use `&` (call operator) because the path has spaces

# -u root   → username is root
# -p        → prompts for password

& "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p
