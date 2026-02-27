import os
import docx2txt
import json

folder = r"c:\Users\Antonela\Desktop\Notebook Antigravity\Modele_EN"
files = os.listdir(folder)

outputs = []
for f in files:
    if f.endswith('.docx'):
        path = os.path.join(folder, f)
        text = docx2txt.process(path)
        
        # Scurt sumar ca sa vedem ce prindem
        outputs.append(f"====== {f} ======\n{text[:500]}...\n")

with open(r"c:\Users\Antonela\Desktop\Notebook Antigravity\EN_Antrenament\preview_texte.txt", "w", encoding="utf-8") as out:
    out.write("\n".join(outputs))

print("TXT Preview gata!")
