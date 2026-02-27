import json
import sys
import subprocess
import time

def query_notebooklm(query):
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
        "name": "notebook_query",
        "arguments": {
            "notebook_id": "ed5abb23-8d76-4752-8ce2-ade82b1a6a21",  # Programa EN
            "query": query
        }
    }, 2)
    resp = read_message()
    while resp and 'method' in resp:
        resp = read_message()
    process.terminate()
    try:
        return resp['result']['structuredContent']['answer']
    except Exception as e:
        return f"Error: {str(e)}\nResponse: {resp}"

q = """Extrage doar 8 fragmente de text (4 literare și 4 nonliterare) din sursele încărcate în acest notebook. NU INVENTA.
Reguli:
1. Fiecare text trebuie să aibă titlu, autor, sursa, tipul (literar/nonliterar) și corpus (minim 3-4 paragrafe, în jur de 150-200 de cuvinte). 
2. Formatează răspunsul STRICT ca un array JSON de obiecte de tipul:
[
  {"titlu": "...", "autor": "...", "sursa": "...", "tip": "literar", "corpus": "..."},
  ...
]
Nu adăuga niciun alt text, doar JSON-ul valid."""

print("Cer textele...")
ans = query_notebooklm(q)
with open("8_texte.json", "w", encoding="utf-8") as f:
    f.write(ans)
print("Gata!")
