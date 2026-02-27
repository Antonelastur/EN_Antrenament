import json
import sys
import subprocess
import time
import os

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

q = """Sarcina: Creează O NOUA Variantă de examen tip Evaluare Națională (Clasa a 8-a), în format JSON.

Reguli OBLIGATORII:
1. Folosește DOAR fragmente din blocnotes NotebookLM. Alege un text literar si un text nonliterar. Asigura-te ca textul contine cel putin 3 paragrafe fiecare.
2. Formuleaza Subiectul I A (9 itemi: grila si completare), respectand exact structura (item 1-4: 2 puncte. item 5-9: 6 puncte) - total 38p.
3. Formuleaza Subiectul I B (8 itemi gramatica si vocabular: item 1-4: 2p. item 5-8: 6p) - total 32p.
4. Formuleaza Subiectul II (compunere 150 cuv - 20 puncte).
5. Asigura-te ca suma punctajelor fara oficiu este EXACT 90 puncte.

Raspunde DOAR cu obiectul JSON, nimic in plus.

```json
{
  "id": "v03",
  "titlu": "Varianta...",
  "text1": {"titlu": "", "sursa": "", "tip": "literar", "corpus": ""},
  ...
}
```
"""

print("Cer varianta...")
ans = query_notebooklm(q)
with open("test_varianta_3.txt", "w", encoding="utf-8") as f:
    f.write(ans)
print("Gata!")
