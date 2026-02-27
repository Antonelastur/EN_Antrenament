import codecs
import esprima

with codecs.open('variante_examen.js', 'r', 'utf-8') as f:
    text = f.read()

try:
    print("Checking...")
except Exception as e:
    print("Error parsing", str(e))
