import json
import subprocess
import sys

def get_tools():
    cmd = [r"C:\Users\Antonela\AppData\Roaming\Python\Python314\Scripts\notebooklm-mcp.exe"]
    process = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=sys.stderr, text=True, encoding='utf-8')

    def read_message():
        while True:
            line = process.stdout.readline()
            if not line: return None
            line = line.strip()
            if not line: continue
            try: return json.loads(line)
            except: pass

    def send_request(method, params=None, req_id=None):
        msg = {"jsonrpc": "2.0", "method": method}
        if params is not None: msg["params"] = params
        if req_id is not None: msg["id"] = req_id
        process.stdin.write(json.dumps(msg) + "\n")
        process.stdin.flush()

    send_request("initialize", {"protocolVersion": "2024-11-05", "capabilities": {}, "clientInfo": {"name": "dumper", "version": "1.0"}}, 1)
    read_message()
    send_request("notifications/initialized", {})

    send_request("tools/list", {}, 2)
    
    resp = read_message()
    while resp and 'method' in resp:  # skip notifications
        resp = read_message()
        
    process.terminate()
    print(json.dumps(resp, indent=2))

get_tools()
