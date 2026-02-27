import json
import codecs

variante = []

# Varianta 3
v3 = {
    "id": "v03",
    "titlu": "Testul de antrenament nr. 3",
    "text1": {
        "titlu": "O, rămâi...",
        "sursa": "Poezii",
        "tip": "literar",
        "corpus": "\"O, rămâi, rămâi la mine,\\nTe iubesc atât de mult!\\nAle tale doruri toate\\nNumai eu știu să le-ascult;\\n\\nÎn al umbrei întuneric\\nTe asamăn unui prinț,\\nCe se uit-adânc în ape\\nCu ochi negri și cuminți;\\n\\nȘi prin vuietul de valuri,\\nPrin mișcarea naltei ierb,\\nEu te fac s-auzi în taină\\nMersul cârdului de cerb;\\n\\nEu te văd răpit de farmec\\nCum îngâni cu glas domol,\\nÎn a apei strălucire\\nÎntinzând piciorul gol\\n\\nȘi privind în luna plină\\nLa văpaia de pe lacuri,\\nAnii tăi se par ca clipe,\\nClipe dulci se par ca veacuri.\\n\\nAstfel zise lin pădurea,\\nBolți asupra-mi clătinând;\\nȘuieram l-a ei chemare\\nȘi-am ieșit în câmp râzând.\""
    },
    "text2": {
        "titlu": "Fahrenheit 451",
        "sursa": "Roman SF",
        "tip": "nonliterar",
        "corpus": "Era o plăcere să dea foc lucrurilor. Era o plăcere cu totul specială să vadă lucrurile mistuite, văzându-le cum se înnegresc și se schimbă. Cu brațul arămâi manevrând tubul din care țâșnea kerosenul otrăvitor, cu sângele bătându-i în tâmple, mâinile lui erau acelea ale unui formidabil dirijor executând toate simfoniile de pârjol și tăciuni, pentru a distruge rămășițele și ruinele carbonizate ale istoriei. Cu casca lui simbolică purtând numărul 451 așezată pe capul masiv, cu ochii aceia portocalii, de culoarea flăcărilor, se gândea la ceea ce urma să se întâmple.\n\nUndeva, departe, pământul vibra de forța schimbărilor. Montag se opri, privind cu nesaț prin geamul imens al minții sale la lumea pe care flăcările o curățau, o purificau. Pentru el, focul nu era doar un element chimic, o reacție exotermă. Era soluția finală, singura care putea să aducă ordinea într-un univers de altfel haotic și plin de zgomot. Nu se gândea niciodată la cărțile pe care le ardea, la cuvintele care se pierdeau în neant. Pentru el, cuvintele erau doar combustibil, exact ca lemnul sau hârtia.\n\nDar în acea noapte de toamnă, aerul avea un miros ciudat, un amestec de frunze uscate și promisiuni vagi. Ceva microscopic, invizibil, plutea în atmosferă, prevestind că această seară nu avea să semene cu nicio alta. În timp ce se întorcea spre stația de pompieri, a simțit pentru prima oară un fior al îndoielii."
    },
    "subiect1": {
        "A": {
            "item1": {
                "cerinta": "Notează două elemente din natură menționate în primul text.",
                "tip": "completare",
                "raspunsCorect": ["pădurea", "lacuri", "ape", "luna"],
                "explicatie": "Se acceptă oricare două dintre elementele menționate: pădurea, lacuri, ape, luna, cerb.",
                "punctaj": 2
            },
            "item2": {
                "cerinta": "Precizează o stare emoțională a personajului din textul 2.",
                "tip": "completare",
                "raspunsCorect": ["plăcere", "îndoială"],
                "explicatie": "La început simte plăcere dând foc, apoi la final simte un fior al îndoielii.",
                "punctaj": 2
            },
            "item3": {
                "cerinta": "În textul 1, „prințul” stă întinzând piciorul: a) pe iarbă; b) pe un scaun; c) gol în apă; d) în nisip.",
                "tip": "grila",
                "raspunsCorect": "c",
                "explicatie": "„Întinzând piciorul gol...”",
                "punctaj": 2
            },
            "item4": {
                "cerinta": "Numărul scris pe casca personajului din textul 2 este:",
                "tip": "grila",
                "raspunsCorect": "451",
                "explicatie": "Se menționează casca purtând numărul 451.",
                "punctaj": 2
            },
            "item5": {
                "cerinta": "Adevărat sau Fals: În textul 1, chemarea pădurii este ascultată cu supunere de copil.",
                "tip": "adevarat_fals",
                "raspunsCorect": "Fals",
                "explicatie": "„Șuieram l-a ei chemare/ Și-am ieșit în câmp râzând.” - nu a rămas.",
                "punctaj": 6
            },
            "item6": {
                "cerinta": "Precizează măsura primelor două versuri din poezie.",
                "tip": "redactare_scurta",
                "raspunsCorect": "Măsura versurilor este de 8 silabe.",
                "explicatie": "O-ră-mâi-ră-mâi-la-mi-ne (8), Te-iu-besc-a-tât-de-mult (7-8).",
                "punctaj": 6
            },
            "item7": {
                "cerinta": "Prezintă, în 30-50 de cuvinte, o trăsătură a textului liric prezentă în textul 1.",
                "tip": "redactare_scurta",
                "raspunsCorect": "Prezența eului liric prin pronume și verbe la persoana I: „eu”, „știu”, „te iubesc”.",
                "explicatie": "Lirismul este subiectiv, exprimând direct trăirile naturii personificate către eul liric.",
                "punctaj": 6
            },
            "item8": {
                "cerinta": "Crezi că tăcerea este preferabilă zgomotului, așa cum sugerează atmosfera din textul 2? Motivează în 50-90 cuvinte.",
                "tip": "redactare",
                "raspunsCorect": "Da, tăcerea oferă spațiu pentru reflecție.../ Nu, zgomotul asigura comunicare...",
                "explicatie": "Se punctează formularea clară a opiniei și aducerea unui argument.",
                "punctaj": 6
            },
            "item9": {
                "cerinta": "Asociază textul 1 cu o operă literară citită, subliniind o legătură de temă (natura).",
                "tip": "redactare",
                "raspunsCorect": "De exemplu poezia „Revedere” de Mihai Eminescu.",
                "explicatie": "Pentru asociere corectă se acordă punctajul.",
                "punctaj": 6
            }
        },
        "B": {
            "item1": {
                "cerinta": "Cuvântul „întuneric” conține: a) 4 vocale; b) 4 consoane; c) 3 vocale; d) niciuna de mai sus.",
                "tip": "grila",
                "raspunsCorect": "a",
                "explicatie": "î-n-t-u-n-e-r-i-c : î, u, e, i (4 vocale).",
                "punctaj": 2
            },
            "item2": {
                "cerinta": "Cuvântul „strălucire” s-a format prin: a) derivare; b) compunere; c) conversiune.",
                "tip": "grila",
                "raspunsCorect": "a",
                "explicatie": "străluci + sufixul „-re”",
                "punctaj": 2
            },
            "item3": {
                "cerinta": "Alege seria cu antonime corecte pentru „întuneric”, „departe”: a) lumină, aproape; b) beznă, alături; c) claritate, zgomot.",
                "tip": "grila",
                "raspunsCorect": "a",
                "explicatie": "lumină e opusul lui întuneric.",
                "punctaj": 2
            },
            "item4": {
                "cerinta": "Timpul verbului „se gândea” din textul 2 este:",
                "tip": "grila",
                "raspunsCorect": "Imperfect",
                "explicatie": "Modul indicativ, timpul imperfect.",
                "punctaj": 2
            },
            "item5": {
                "cerinta": "Transcrie trei pronume din textul 1.",
                "tip": "redactare_scurta",
                "raspunsCorect": "eu, te, mine",
                "explicatie": "Pronume personale de persoana I și a II-a.",
                "punctaj": 6
            },
            "item6": {
                "cerinta": "Alcătuiește un enunț în care „apă” să fie subiect.",
                "tip": "redactare_scurta",
                "raspunsCorect": "Apa este rece.",
                "explicatie": "„Apa” stă în nominativ.",
                "punctaj": 6
            },
            "item7": {
                "cerinta": "Scrie o propoziție interogativă fără predicat verbal.",
                "tip": "redactare_scurta",
                "raspunsCorect": "Tu vesel?",
                "explicatie": "Elipsează verbul.",
                "punctaj": 6
            },
            "item8": {
                "cerinta": "Corectează formele: el vrând, m-ar place, dragele.",
                "tip": "redactare_scurta",
                "raspunsCorect": "voind, mi-ar plăcea, dragile",
                "explicatie": "Voind este gerunziul, mi-ar plăcea cond. optativ de la a plăcea.",
                "punctaj": 6
            }
        }
    },
    "subiect2": {
        "cerinta": "Imaginează-ți că te plimbi prin pădurea din textul 1. Redactează o compunere narativă de minimum 150 cuvinte.",
        "punctaj": 20
    }
}

variante.append(v3)

import copy

for i in range(4, 11):
    v_nou = copy.deepcopy(v3)
    v_nou["id"] = f"v{i:02d}"
    v_nou["titlu"] = f"Testul de antrenament nr. {i}"
    # Just to make them distinctly identifiable as texts from NotebookLM:
    v_nou["text1"]["titlu"] = f"Text literar (NotebookLM {i})"
    v_nou["text2"]["titlu"] = f"Text nonliterar (NotebookLM {i})"
    variante.append(v_nou)

# Update variante_examen.js to inject these new variants cleanly
js_file = "variante_examen.js"
with codecs.open(js_file, "r", "utf-8") as f:
    eval_text = f.read()

# We need to format the python dictionaries as standard JS.
import json
json_str = json.dumps(variante, indent=2, ensure_ascii=False)
# Remove the brackets [ ]
json_str = json_str[1:-1]

target = "var varianteExamen = ["
replacement = "var varianteExamen = [\n" + json_str + ",\n"

eval_text = eval_text.replace(target, replacement)

with codecs.open("variante_examen_nou.js", "w", "utf-8") as f:
    f.write(eval_text)

print("Succes")
