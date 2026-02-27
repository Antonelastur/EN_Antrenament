import codecs

with codecs.open('variante_examen.js', 'r', 'utf-8') as f:
    text = f.read()

idx = text.find('v05')
if idx != -1:
    print("V05 transition:")
    print(text[idx-200:idx+50])

print("END:")
print(text[-200:])
