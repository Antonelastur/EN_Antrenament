import json
import subprocess
import sys

def get_notebooks():
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

    send_request("tools/call", {
        "name": "list_notebooks",
        "arguments": {}
    }, 2)
    
    resp = read_message()
    while resp and 'method' in resp:  # skip notifications
        resp = read_message()
        
    process.terminate()
    try:
        content = resp['result']['content'][0]['text']
        data = json.loads(content)
        with open("notebooks_list.json", "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print("Scris in notebooks_list.json")
    except Exception as e:
        print("Eroare parsare:", e)

get_notebooks()
