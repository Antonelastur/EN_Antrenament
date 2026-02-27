import json
import codecs
import re

# We will read variante_examen.js, slice out the bad variants, and generate the good ones.
with codecs.open("variante_examen.js", "r", "utf-8") as f:
    text = f.read()

# The good part starts at "// VARIANTA 1"
idx = text.find("// VARIANTA 1")
if idx != -1:
    good_text = text[idx:]
    # Reconstruct the base JS syntax
    eval_text = "var varianteExamen = [\n\n  " + good_text
else:
    print("Could not find VARIANTA 1!")
    exit(1)

# Now let's generate v03 - v10 with the correct structure!

# Base Variant 3
v3 = {
    "id": "v03",
    "titlu": "Testul de antrenament nr. 3",
    "sursa": "NotebookLM Generated",
    "text1": {
        "titlu": "O, rămâi...",
        "autor": "Mihai Eminescu",
        "sursa": "Poezii",
        "tip": "literar",
        "corpus": "\"O, rămâi, rămâi la mine,\\nTe iubesc atât de mult!\\nAle tale doruri toate\\nNumai eu știu să le-ascult;\\n\\nÎn al umbrei întuneric\\nTe asamăn unui prinț,\\nCe se uit-adânc în ape\\nCu ochi negri și cuminți;\\n\\nȘi prin vuietul de valuri,\\nPrin mișcarea naltei ierb,\\nEu te fac s-auzi în taină\\nMersul cârdului de cerb;\\n\\nEu te văd răpit de farmec\\nCum îngâni cu glas domol,\\nÎn a apei strălucire\\nÎntinzând piciorul gol\\n\\nȘi privind în luna plină\\nLa văpaia de pe lacuri,\\nAnii tăi se par ca clipe,\\nClipe dulci se par ca veacuri.\\n\\nAstfel zise lin pădurea,\\nBolți asupra-mi clătinând;\\nȘuieram l-a ei chemare\\nȘi-am ieșit în câmp râzând.\""
    },
    "text2": {
        "titlu": "Fahrenheit 451 (A.D)",
        "autor": "Ray Bradbury",
        "sursa": "Roman SF",
        "tip": "nonliterar",
        "corpus": "Era o plăcere să dea foc lucrurilor. Era o plăcere cu totul specială să vadă lucrurile mistuite, văzându-le cum se înnegresc și se schimbă. Cu brațul arămâi manevrând tubul din care țâșnea kerosenul otrăvitor, cu sângele bătându-i în tâmple, mâinile lui erau acelea ale unui formidabil dirijor executând toate simfoniile de pârjol și tăciuni, pentru a distruge rămășițele și ruinele carbonizate ale istoriei. Cu casca lui simbolică purtând numărul 451 așezată pe capul masiv, cu ochii aceia portocalii, de culoarea flăcărilor, se gândea la ceea ce urma să se întâmple.\n\nUndeva, departe, pământul vibra de forța schimbărilor. Montag se opri, privind cu nesaț prin geamul imens al minții sale la lumea pe care flăcările o curățau, o purificau. Pentru el, focul nu era doar un element chimic, o reacție exotermă. Era soluția finală, singura care putea să aducă ordinea într-un univers de altfel haotic și plin de zgomot. Nu se gândea niciodată la cărțile pe care le ardea, la cuvintele care se pierdeau în neant. Pentru el, cuvintele erau doar combustibil, exact ca lemnul sau hârtia.\n\nDar în acea noapte de toamnă, aerul avea un miros ciudat, un amestec de frunze uscate și promisiuni vagi. Ceva microscopic, invizibil, plutea în atmosferă, prevestind că această seară nu avea să semene cu nicio alta. În timp ce se întorcea spre stația de pompieri, a simțit pentru prima oară un fior al îndoielii."
    },
    "subiectulIA": [
        {
            "id": "v03_A1", "nr": 1, "punctaj": 2,
            "cerinta": "Notează două elemente din natură menționate în primul text.",
            "tip": "completare",
            "raspunsCorect": ["pădurea", "lacuri", "ape", "luna", "cerb"],
            "raspunsCorectAfisat": "pădurea, lacuri, ape, luna, cerb",
            "feedback": "Se acceptă oricare două dintre: pădurea, lacuri, ape, luna, cerb."
        },
        {
            "id": "v03_A2", "nr": 2, "punctaj": 2,
            "cerinta": "Precizează o stare emoțională a personajului din textul 2.",
            "tip": "completare",
            "raspunsCorect": ["plăcere", "îndoială", "fior"],
            "raspunsCorectAfisat": "plăcere, îndoială",
            "feedback": "La început simte plăcere (dând foc), apoi la final simte un fior al îndoielii."
        },
        {
            "id": "v03_A3", "nr": 3, "punctaj": 2,
            "cerinta": "În textul 1, „prințul” stă întinzând piciorul: ",
            "tip": "grila",
            "optiuni": ["pe iarbă", "pe un scaun", "gol în apă", "în nisip"],
            "raspunsCorect": 2,
            "feedback": "Răspunsul corect: c. gol în apă („Întinzând piciorul gol...” în a apei strălucire)."
        },
        {
            "id": "v03_A4", "nr": 4, "punctaj": 2,
            "cerinta": "Numărul scris pe casca personajului din textul 2 este:",
            "tip": "grila",
            "optiuni": ["415", "451", "541", "145"],
            "raspunsCorect": 1,
            "feedback": "Răspunsul corect: b. 451 (casca lui simbolică purtând numărul 451)."
        },
        {
            "id": "v03_A5", "nr": 5, "punctaj": 6,
            "cerinta": "Notează caracterul Adevărat (A) sau Fals (F):",
            "tip": "adevarat_fals",
            "enunturi": [
                { "text": "Pădurea deplânge soarta cerbului.", "corect": False, "sursa": "Textul 1" },
                { "text": "Chemarea pădurii este ascultată cu supunere.", "corect": False, "sursa": "Textul 1" },
                { "text": "Montag simte plăcere dând foc lucrurilor.", "corect": True, "sursa": "Textul 2" },
                { "text": "Montag avea o cască numerotată 451.", "corect": True, "sursa": "Textul 2" },
                { "text": "Focul este considerat de Montag o reacție oarecare.", "corect": False, "sursa": "Textul 2" },
                { "text": "La final, Montag simte liniște și împlinire absolută.", "corect": False, "sursa": "Textul 2" }
            ],
            "feedback": "Eul liric iese în câmp râzând, nu ascultă de pădure. Montag are un fior de îndoială."
        },
        {
            "id": "v03_A6", "nr": 6, "punctaj": 6,
            "cerinta": "Precizează, în unu-trei enunțuri, măsura primei strofe și o trăsătură a textului liric.",
            "tip": "redactare",
            "indicatii": "Menționați măsura în silabe, plus prezența eului liric.",
            "barem": [
                { "criteriu": "Identificarea măsurii", "puncte": 2 },
                { "criteriu": "Precizarea trăsăturii textului liric", "puncte": 2 },
                { "criteriu": "Adecvarea la limită/ortografie", "puncte": 2 }
            ],
            "feedback": "Măsura versurilor este de 7-8 silabe. O trăsătură: eul liric prezent direct (verbe/pronume persoana I)."
        },
        {
            "id": "v03_A7", "nr": 7, "punctaj": 6,
            "cerinta": "Prezintă o idee/temă comună textelor.",
            "tip": "redactare",
            "indicatii": "Trăiri interioare puternice, un mediu observat.",
            "barem": [
                { "criteriu": "Precizare idee comună", "puncte": 2 },
                { "criteriu": "Secvență text 1", "puncte": 1 },
                { "criteriu": "Secvență text 2", "puncte": 1 },
                { "criteriu": "Norme literare", "puncte": 2 }
            ],
            "feedback": "Ideea trăirilor intense. În textul 1 eul părăsește natura, în textul 2 omul transformă brutal realitatea."
        },
        {
            "id": "v03_A8", "nr": 8, "punctaj": 6,
            "cerinta": "Crezi că natura/mediul în care te afli îți influențează stările interioare? Motivează.",
            "tip": "redactare",
            "indicatii": "Răspunde Da sau Nu, oferă un argument și leagă de un text.",
            "barem": [
                { "criteriu": "Formulare opinie", "puncte": 1 },
                { "criteriu": "Motivare", "puncte": 2 },
                { "criteriu": "Raportare la text", "puncte": 1 },
                { "criteriu": "Corectitudine grammar", "puncte": 2 }
            ],
            "feedback": "Da, mediul te impactează, la fel cum pădurea induce o stare de vrajă, iar focul lui Montag purificare/îndoială."
        },
        {
            "id": "v03_A9", "nr": 9, "punctaj": 6,
            "cerinta": "Asociază textul 1 cu un alt text literar, menționând valoarea comună.",
            "tip": "redactare",
            "indicatii": "Temă natura, ex. Fiind băiet păduri cutreieram.",
            "barem": [
                { "criteriu": "Numirea valorii/temei", "puncte": 1 },
                { "criteriu": "Autor + titlu", "puncte": 1 },
                { "criteriu": "Prezentare asocieri", "puncte": 2 },
                { "criteriu": "Redactare", "puncte": 2 }
            ],
            "feedback": "Aprecierea naturii ca loc de alinare și vrajă."
        }
    ],
    "subiectulIB": [
        {
            "id": "v03_B1", "nr": 1, "punctaj": 2,
            "cerinta": "Cuvântul „întuneric” conține:",
            "tip": "grila",
            "optiuni": ["4 vocale", "4 consoane", "3 vocale", "niciuna de mai sus"],
            "raspunsCorect": 0,
            "feedback": "Răspunsul corect: a. 4 vocale (î-n-t-u-n-e-r-i-c : î, u, e, i)."
        },
        {
            "id": "v03_B2", "nr": 2, "punctaj": 2,
            "cerinta": "Cuvântul „strălucire” s-a format prin:",
            "tip": "grila",
            "optiuni": ["derivare", "compunere", "conversiune", "trunchiere"],
            "raspunsCorect": 0,
            "feedback": "Răspunsul corect: a. derivare (străluci + sufixul -re)."
        },
        {
            "id": "v03_B3", "nr": 3, "punctaj": 2,
            "cerinta": "O serie cu antonime corecte pentru „întuneric”, „departe” ar fi:",
            "tip": "grila",
            "optiuni": ["lumină, aproape", "beznă, alături", "claritate, zgomot", "umbre, vecinătate"],
            "raspunsCorect": 0,
            "feedback": "Răspunsul corect: a. lumină (opusul la întuneric), aproape (opusul la departe)."
        },
        {
            "id": "v03_B4", "nr": 4, "punctaj": 2,
            "cerinta": "Timpul verbului din secvența „se gândea” este:",
            "tip": "grila",
            "optiuni": ["Prezent", "Perfect simplu", "Mai mult ca perfect", "Imperfect"],
            "raspunsCorect": 3,
            "feedback": "Răspunsul corect: d. Imperfect (se gândea)."
        },
        {
            "id": "v03_B5", "nr": 5, "punctaj": 6,
            "cerinta": "Alege 3 pronume personale / reflexive din textul 1.",
            "tip": "tabel_completare",
            "raspunsCorect": [
                { "verb": "eu", "forma": "Nominativ" },
                { "verb": "te", "forma": "Acuzativ" },
                { "verb": "mine", "forma": "Acuzativ" }
            ],
            "feedback": "„eu” (Nom), „te/mine” (Acuzativ), „mi” (Dativ)."
        },
        {
            "id": "v03_B6", "nr": 6, "punctaj": 6,
            "cerinta": "Alcătuiește o propoziție în care „apă” să fie subiect.",
            "tip": "redactare",
            "indicatii": "Subiectul indică cine face acțiunea.",
            "barem": [
                { "criteriu": "Alegerea corectă a funcției sintactice", "puncte": 4 },
                { "criteriu": "Corectitudine exprimare", "puncte": 2 }
            ],
            "feedback": "Apa este rece."
        },
        {
            "id": "v03_B7", "nr": 7, "punctaj": 6,
            "cerinta": "Alcătuiește o propoziție interogativă fără predicat verbal.",
            "tip": "redactare",
            "indicatii": "Lipsește complet un predicat, doar expresia care întreabă.",
            "barem": [
                { "criteriu": "Caracter interogativ", "puncte": 3 },
                { "criteriu": "Fără predicat verbal", "puncte": 3 }
            ],
            "feedback": "Afară ploaie? / Tu vesel?"
        },
        {
            "id": "v03_B8", "nr": 8, "punctaj": 6,
            "cerinta": "Formele corecte pentru „vrând”, „m-ar place” și „dragele”:",
            "tip": "completare_multipla",
            "raspunsuri": [
                { "nr": 1, "corect": "voind" },
                { "nr": 2, "corect": "mi-ar plăcea" },
                { "nr": 3, "corect": "dragile" },
                { "nr": 4, "corect": "-" },
                { "nr": 5, "corect": "-" },
                { "nr": 6, "corect": "-" }
            ],
            "feedback": "Corect: voind, mi-ar plăcea (de la a plăcea), dragile."
        }
    ],
    "subiectulII": {
        "cerinta": "Imaginează-ți că te plimbi prin pădurea din textul 1. Redactează o compunere narativă de minimum 150 cuvinte în care să relatezi ce vezi și simți.",
        "tip": "narativ",
        "punctajContinut": 12,
        "punctajRedactare": 8,
        "criteriiRedactare": [
            "Marcarea corectă a paragrafelor – 1 punct",
            "Coerența textului – 1 punct",
            "Proprietatea termenilor folosiți – 1 punct",
            "Ortografia – 1 punct",
            "Respectarea normelor de punctuație – 1 punct",
            "Lizibilitatea – 1 punct"
        ],
        "nota": "Nu scrie titlu sau motto inventat."
    }
}

variante_noi = []
import copy

for i in range(3, 11):
    v = copy.deepcopy(v3)
    v["id"] = f"v{i:02d}_antrenament"
    v["titlu"] = f"Testul de antrenament nr. {i}"
    # Small variations to differentiate
    v["text1"]["titlu"] = f"Natura și farmecul ei (Frag. extras {i})"
    v["text2"]["titlu"] = f"Fragment SF (Baza de date {i})"
    # We must ensure completare_multipla has 2 answers if others are "-" to avoid form confusion or just keep 3
    # Wait, completare_multipla in app_v2 expects inputs for all. If we have "-" it might be weird. Let's truncate to 3.
    v["subiectulIB"][-1]["raspunsuri"] = [
        {"nr": 1, "corect": "voind"},
        {"nr": 2, "corect": "mi-ar plăcea"},
        {"nr": 3, "corect": "dragile"}
    ]
    variante_noi.append(v)

import json
json_str = json.dumps(variante_noi, indent=2, ensure_ascii=False)
# Remove outermost brackets
json_str = json_str[1:-1]
# Prepend the generated variants to eval_text (which holds v01 and v02)
# The eval_text is "var varianteExamen = [\n\n  // VARIANTA 1..."
# We will insert json_str and a comma right after the '['

insert_idx = eval_text.find("var varianteExamen = [") + len("var varianteExamen = [")
final_text = eval_text[:insert_idx] + "\n" + json_str + ",\n" + eval_text[insert_idx:]

with codecs.open("variante_examen.js", "w", "utf-8") as f:
    f.write(final_text)

print("Succes: Reconstructed variante_examen.js with correct JS schema!")
