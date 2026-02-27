import json
import sys
import subprocess
import time

def query_notebooklm(query):
    cmd = [r"C:\Users\Antonela\AppData\Roaming\Python\Python314\Scripts\notebooklm-mcp.exe", "--query-timeout", "120"]
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
            "notebook_id": "ed5abb23-8d76-4752-8ce2-ade82b1a6a21",
            "query": query
        }
    }, 2)
    resp = read_message()
    while resp and 'id' not in resp: # Wait for response to id 2
        resp = read_message()
    
    process.terminate()
    try:
        data = resp['result']['structuredContent']['answer']
        # Extract json part
        if "```json" in data:
            data = data.split("```json")[1].split("```")[0]
        return json.loads(data)
    except Exception as e:
        print("Raw response:", resp)
        return None

q_lit = """Te rog extrage 4 fragmente DISTINCTE de text LITERAR din sursele din acest notebook.
Fragmentele trebuie să fie din opere diferite (sau capitole diferite).
Fiecare fragment să aibă 150-200 de cuvinte.
Formatează răspunsul STRICT ca un array JSON de obiecte:
[
  {"titlu": "...", "autor": "...", "sursa": "...", "tip": "literar", "corpus": "..."},
  ...
]
NU adăuga alt text în afară de JSON.
"""

q_nonlit = """Te rog extrage 4 fragmente DISTINCTE de text NONLITERAR din sursele din acest notebook.
Fragmentele să fie din surse diferite (ex. ghiduri, articole).
Fiecare fragment să aibă 150-200 de cuvinte.
Formatează răspunsul STRICT ca un array JSON de obiecte:
[
  {"titlu": "...", "autor": "...", "sursa": "...", "tip": "nonliterar", "corpus": "..."},
  ...
]
NU adăuga alt text în afară de JSON.
"""

print("Fetching literary texts...")
lit_texts = query_notebooklm(q_lit)
if lit_texts:
    print(f"Obtained {len(lit_texts)} literary texts")
else:
    print("Failed literary texts!")

print("Fetching non-literary texts...")
nonlit_texts = query_notebooklm(q_nonlit)
if nonlit_texts:
    print(f"Obtained {len(nonlit_texts)} non-literary texts")
else:
    print("Failed non-literary texts!")

out = {"literar": lit_texts, "nonliterar": nonlit_texts}
with open("fetched_texts.json", "w", encoding="utf-8") as f:
    json.dump(out, f, ensure_ascii=False, indent=2)
print("Done!")
