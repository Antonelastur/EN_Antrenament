import subprocess
import json

try:
    cmd_output = subprocess.check_output(
        ['notebooklm-mcp.exe', 'list-notebooks'],
        encoding='utf-8',
        stderr=subprocess.STDOUT
    )
    print("Direct out:", cmd_output)
except Exception as e:
    print("Error doing direct call:", str(e))
