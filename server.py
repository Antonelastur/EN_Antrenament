"""Server local cu charset UTF-8 corect pentru fișiere JS cu diacritice și endpoint de Asistent."""
import http.server
import os
import json
import urllib.parse
import sys
import subprocess

os.chdir(os.path.dirname(os.path.abspath(__file__)))

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

    send_request("initialize", {
        "protocolVersion": "2024-11-05",
        "capabilities": {},
        "clientInfo": {"name": "dumper", "version": "1.0"}
    }, 1)
    read_message()
    send_request("notifications/initialized", {})

    prompt = f"Răspunde ca un profesor de Limba și literatura română pentru clasa a VIII-a. Fii clar și la obiect. Întrebare: {query}"
    
    call_params = {
        "name": "notebook_query",
        "arguments": {
            "notebook_id": "ed5abb23-8d76-4752-8ce2-ade82b1a6a21",  # Programa EN
            "query": prompt
        }
    }
    
    send_request("tools/call", call_params, 2)
    resp = read_message()
    while resp and 'method' in resp:
        resp = read_message()
        
    process.terminate()
    try:
        return resp['result']['structuredContent']['answer']
    except:
        return "Îmi pare rău, am întâmpinat o eroare la conexiunea cu manualul meu."

class UTF8Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        ct = self.headers.get('Content-Type', '')
        if not ct:
            self.send_header('Content-Type', 'text/html; charset=utf-8')
        super().end_headers()

    def do_POST(self):
        if self.path == '/api/ask':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length).decode('utf-8')
            try:
                data = json.loads(post_data)
                query = data.get('query', '')
                answer = query_notebooklm(query)
                self.send_response(200)
                self.send_header('Content-type', 'application/json; charset=utf-8')
                self.end_headers()
                response = {'answer': answer}
                self.wfile.write(json.dumps(response).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

    def guess_type(self, path):
        if path.endswith('.js'):
            return 'application/javascript; charset=utf-8'
        if path.endswith('.css'):
            return 'text/css; charset=utf-8'
        if path.endswith('.html'):
            return 'text/html; charset=utf-8'
        return super().guess_type(path)

print("Server pornit pe http://localhost:8080 (cu suport complet Asistent AI)")
http.server.HTTPServer(('', 8080), UTF8Handler).serve_forever()
