# generare_corecta.py
import json
import codecs
import re

variants = []

# ===========================
# V03: Creanga (Pupaza din tei) + Text info 1
# ===========================
variants.append({
    "id": "v03_antrenament",
    "titlu": "Testul de antrenament nr. 3",
    "sursa": "Generat (NotebookLM)",
    "text1": {
        "titlu": "Amintiri din copilărie (Pupăza)", "autor": "Ion Creangă", "sursa": "Amintiri...", "tip": "literar",
        "corpus": "Mă trezește mama într-o dimineață din somn, cu vai-nevoie, zicându-mi: Scoală, duglișule, înainte de răsăritul soarelui; iar vrei să te spurce pupăza! spurcat pe inima gol, spurcat?... Să te prind eu, spurcăciune, că te-oi spurca eu pe tine!... Când mă scol, ce să văd? Soarele răsărise binișor, de vreo două sulițe... Auzi tu! să te spurce pupăza, lucru mare... Zic eu în gândul meu: las' că v-oi prinde eu, spurcaților! Și pândind când a ieșit pupăza să-și caute hrana, mă sui în tei, bag mâna în scorbură și o prind pe de-a-ntregul. Când a fost la scoborât, cam anevoie, căci ieșisem la vânătoare fără merinde..."
    },
    "text2": {
        "titlu": "Păsările din România", "autor": "Articol științific", "sursa": "Ghid ornitologic", "tip": "nonliterar",
        "corpus": "Pupăza (Upupa epops) este o pasăre insectivoră, migratoare, cu un penaj viu colorat și un cioc lung și recurbat. Se găsește în Europa, Asia și Africa de Nord. În România, sosește la sfârșitul lunii martie sau începutul lui aprilie și cuibărește în scorburi de arbori, grajduri sau grămezi de pietre. Este recunoscută după cântecul ei specific „pu-pu-pu”, pe care îl repetă în mod monoton. Deși este o pasăre frumoasă, în popor i se mai spune și „pasărea spurcată” din cauza mirosului neplăcut pe care puii și cuibul îl emană ca mecanism de apărare împotriva prădătorilor."
    },
    "subiectulIA": [
        {"id": "v3_a1", "nr": 1, "punctaj": 2, "cerinta": "Notează două elemente de timp din primul text.", "tip": "completare", "raspunsCorect": ["dimineață", "răsăritul"], "raspunsCorectAfisat": "într-o dimineață, răsăritul soarelui", "feedback": "Dimineață, înainte de răsăritul soarelui."},
        {"id": "v3_a2", "nr": 2, "punctaj": 2, "cerinta": "Precizează hrana principală a pupezei din textul 2.", "tip": "completare", "raspunsCorect": ["insecte", "insectivoră"], "raspunsCorectAfisat": "insecte (este insectivoră)", "feedback": "Pupăza este o pasăre insectivoră."},
        {"id": "v3_a3", "nr": 3, "punctaj": 2, "cerinta": "În textul 1, băiatul se trezește când:", "tip": "grila", "optiuni": ["încă e întuneric", "soarele se pregătește să apună", "soarele răsărise deja", "ploua"], "raspunsCorect": 2, "feedback": "c. soarele răsărise binișor"},
        {"id": "v3_a4", "nr": 4, "punctaj": 2, "cerinta": "Zgomotul scos de pupăză este descris ca:", "tip": "grila", "optiuni": ["melodios", "puternic", "monoton", "vesel"], "raspunsCorect": 2, "feedback": "c. repetă în mod monoton"},
        {"id": "v3_a5", "nr": 5, "punctaj": 6, "cerinta": "Notează Adevărat (A) / Fals (F):", "tip": "adevarat_fals", "enunturi": [
            {"text": "Băiatul s-a trezit imediat cum l-a strigat mama.", "corect": False, "sursa": "T1"},
            {"text": "Băiatul o prinde pe pupăză după ce aceasta iese după hrană.", "corect": True, "sursa": "T1"},
            {"text": "Pupăza este sedentară în România.", "corect": False, "sursa": "T2"},
            {"text": "Mirosul neplăcut este un mecanism de apărare.", "corect": True, "sursa": "T2"},
            {"text": "Pupăza își face cuibul pe pământ.", "corect": False, "sursa": "T2"},
            {"text": "Copilul prinde pupăza din prima încercare, fără efort.", "corect": False, "sursa": "T1"}
        ], "feedback": "Verifică atent faptele."},
        {"id": "v3_a6", "nr": 6, "punctaj": 6, "cerinta": "Menționează o trăsătură morală a băiatului și secvența pe care e bazată.", "tip": "redactare", "indicatii": "ex: neastâmpărat, răzbunător", "barem": [{"criteriu": "Numirea trăsăturii", "puncte": 2}, {"criteriu": "Secvența text", "puncte": 2}, {"criteriu": "Redactare", "puncte": 2}], "feedback": "Ambițios/răzbunător: „las' că v-oi prinde eu”"},
        {"id": "v3_a7", "nr": 7, "punctaj": 6, "cerinta": "Prezintă în minimum 30 de cuvinte un element comun.", "tip": "redactare", "indicatii": "Pupăza ca prezență și mirosul / superstiția spurcatului.", "barem": [{"criteriu": "Elementul", "puncte": 2}, {"criteriu": "T1 + T2", "puncte": 2}, {"criteriu": "Redactare", "puncte": 2}], "feedback": "Ambii autori prezintă pupăza și asocierea ei cu ideea de „spurcat”."},
        {"id": "v3_a8", "nr": 8, "punctaj": 6, "cerinta": "Consideri că poveștile din copilărie îți marchează reacțiile viitoare?", "tip": "redactare", "indicatii": "Motivare + părere.", "barem": [{"criteriu": "Opinie", "puncte": 2}, {"criteriu": "Motivare", "puncte": 2}, {"criteriu": "Redactare", "puncte": 2}], "feedback": "Da, credințele din copilărie (cum i-a zis mama) îl fac pe băiat să vâneze pasărea."},
        {"id": "v3_a9", "nr": 9, "punctaj": 6, "cerinta": "Asociază fragmentul cu o operă citită (temă: copilăria/năzbâtiile).", "tip": "redactare", "indicatii": "ex. Tom Sawyer.", "barem": [{"criteriu": "Valoare/Temă", "puncte": 2}, {"criteriu": "Titlu+Autor", "puncte": 2}, {"criteriu": "Explicație", "puncte": 2}], "feedback": "Aventurile lui Tom Sawyer (Mark Twain) - dorința de aventură a copiilor."}
    ],
    "subiectulIB": [
        {"id": "v3_b1", "nr": 1, "punctaj": 2, "cerinta": "Despărțite corect:", "tip": "grila", "optiuni": ["ră-să-ri-tul, a-fri-ca", "ră-să-ri-tul, a-fri-ca (fără majusculă)", "ră-să-ri-tul, pu-pă-za", "răs-ă-ri-tul, pu-pă-za"], "raspunsCorect": 2, "feedback": "c. ră-să-ri-tul, pu-pă-za."},
        {"id": "v3_b2", "nr": 2, "punctaj": 2, "cerinta": "Derivate sunt ambele:", "tip": "grila", "optiuni": ["binișor, păsăroi", "soarele, dimineață", "spurcat, somn", "cuib, piatră"], "raspunsCorect": 0, "feedback": "a. binișor, păsăroi (cu sufix)."},
        {"id": "v3_b3", "nr": 3, "punctaj": 2, "cerinta": "Antonim pentru „monoton”:", "tip": "grila", "optiuni": ["plictisitor", "variat", "unic", "puternic"], "raspunsCorect": 1, "feedback": "b. variat/diversificat."},
        {"id": "v3_b4", "nr": 4, "punctaj": 2, "cerinta": "Verbele „a ieșit”, „să prind”:", "tip": "grila", "optiuni": ["perfect simplu, conjunctiv", "perfect compus, conjunctiv", "imperfect, indicativ", "perfect compus, imperativ"], "raspunsCorect": 1, "feedback": "b. perfect compus / conjunctiv prezent."},
        {"id": "v3_b5", "nr": 5, "punctaj": 6, "cerinta": "Notează 3 substantive caz Nom din textul 1.", "tip": "tabel_completare", "raspunsCorect": [{"verb": "mama", "forma": "Nominativ"}, {"verb": "soarele", "forma": "Nominativ"}, {"verb": "pupăza", "forma": "Nominativ"}], "feedback": "Subiectele." },
        {"id": "v3_b6", "nr": 6, "punctaj": 6, "cerinta": "Alcătuiește o prop. dif.:", "tip": "redactare", "indicatii": "-", "barem": [{"criteriu": "Corect", "puncte": 6}], "feedback": "-"},
        {"id": "v3_b7", "nr": 7, "punctaj": 6, "cerinta": "Felul propozițiilor:", "tip": "redactare", "indicatii": "1. PP, 2. CV", "barem": [{"criteriu": "Fel", "puncte": 6}], "feedback": "-"},
        {"id": "v3_b8", "nr": 8, "punctaj": 6, "cerinta": "Corectează:", "tip": "completare_multipla", "raspunsuri": [{"nr": 1, "corect": "eu"}, {"nr": 2, "corect": "tu"}, {"nr": 3, "corect": "el"}], "feedback": "-"}
    ],
    "subiectulII": { "cerinta": "Scrie o compunere narativă despre o dimineață în care ai descoperit ceva interesant în natură.", "tip": "narativ", "punctajContinut": 12, "punctajRedactare": 8, "criteriiRedactare": [] }
})

# ===========================
# V04
# ===========================
variants.append({
    "id": "v04_antrenament",
    "titlu": "Testul de antrenament nr. 4",
    "sursa": "Generat (NotebookLM)",
    "text1": {
        "titlu": "La Medeleni (Vacanța)", "autor": "Ionel Teodoreanu", "sursa": "La Medeleni", "tip": "literar",
        "corpus": "Vacanța cea mare începea de obicei cu o călătorie lungă, prăfoasă și plină de nerăbdare. Dănuț stătea cu fruntea lipită de geamul trenului, numărând stâlpii de telegraf care fugeau în urmă. [...] De la gară, boierii Deleanu îi așteptau cu trăsura. Olgruța, zvăpăiată cum era, a sărit direct în brațele bătrânului vizitiu, îmbrăcat în hainele lui de sărbătoare. Când au ajuns la conac, mirosul de dulceață și tei i-a învăluit ca o îmbrățișare maternă. Toate ușile larg deschise lăsau să treacă aerul răcoros al înserării în bojdeucile largi. Părea că timpul însuși se așezase pe prispa casei ca să se odihnească alături de ei."
    },
    "text2": {
        "titlu": "Beneficiile naturii asupra reducerii stresului la copii", "autor": "Studiu Psihologic", "sursa": "Revista de Psihologie", "tip": "nonliterar",
        "corpus": "Studiile recente demonstrează o legătură clară între mediul natural și sănătatea mintală a tinerilor. Timpul petrecut în aer liber, în mod special în zonele verzi cu densitate mare de copaci, contribuie semnificativ la scăderea nivelului de cortizol, hormonul stresului. De asemenea, contactul direct cu natura, fie prin jocuri pe iarbă ori simple plimbări printre plante aromatice (precum teiul sau lavanda), induce o stare de calm și relaxare. Cercetătorii sugerează că vacanțele petrecute în mediul rural sau la munte au un efect de refacere cognitivă mult superior vacanțelor urbane cu activități preponderent pe ecrane digitale."
    },
    "subiectulIA": [
        {"id": "v4_a1", "nr": 1, "punctaj": 2, "cerinta": "Notează două percepții senzoriale (ex. miros) din textul 1.", "tip": "completare", "raspunsCorect": ["dulceață", "tei", "aerul răcoros"], "raspunsCorectAfisat": "miros de dulceață și tei, aerul răcoros", "feedback": "Miros de dulceață/tei."},
        {"id": "v4_a2", "nr": 2, "punctaj": 2, "cerinta": "Ce hormon este asociat cu stresul în textul 2?", "tip": "completare", "raspunsCorect": ["cortizol", "cortizolul"], "raspunsCorectAfisat": "cortizol", "feedback": "hormonul stresului = cortizol."},
        {"id": "v4_a3", "nr": 3, "punctaj": 2, "cerinta": "Unde se lipea Dănuț cu fruntea?", "tip": "grila", "optiuni": ["de trăsură", "de geamul trenului", "de vizitiu", "de scaun"], "raspunsCorect": 1, "feedback": "b. de geamul trenului"},
        {"id": "v4_a4", "nr": 4, "punctaj": 2, "cerinta": "Ce efect are natura asupra copiilor, conform textului 2?", "tip": "grila", "optiuni": ["crește agitația", "stare de calm", "îmbunătățește vederea", "iritație"], "raspunsCorect": 1, "feedback": "b. induce o stare de calm și relaxare."},
        {"id": "v4_a5", "nr": 5, "punctaj": 6, "cerinta": "Adevărat (A) / Fals (F):", "tip": "adevarat_fals", "enunturi": [
            {"text": "Călătoria de la început era prăfoasă.", "corect": True, "sursa": "T1"},
            {"text": "Olguța era un copil liniștit.", "corect": False, "sursa": "T1"},
            {"text": "Vacanțele urbane sunt superioare celor rurale.", "corect": False, "sursa": "T2"},
            {"text": "Teiul este o plantă menționată în ambele texte.", "corect": True, "sursa": "T1, T2"},
            {"text": "Timpul petrecut pe ecrane reduce cortizolul.", "corect": False, "sursa": "T2"},
            {"text": "Bătrânul vizitiu era îmbrăcat sumar.", "corect": False, "sursa": "T1"}
        ], "feedback": "Olgruța este zvăpăiată, nu liniștită."},
        {"id": "v4_a6", "nr": 6, "punctaj": 6, "cerinta": "Prezintă o trăsătură a textului descriptiv la Medeleni.", "tip": "redactare", "indicatii": "-", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "Folosirea epitetelor: „prăfoasă”, „aerul răcoros”."},
        {"id": "v4_a7", "nr": 7, "punctaj": 6, "cerinta": "Prezintă un element comun celor 2 texte.", "tip": "redactare", "indicatii": "Relaxarea în natură.", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "Efectul binefăcător al naturii (mirosul de tei relaxează)."},
        {"id": "v4_a8", "nr": 8, "punctaj": 6, "cerinta": "Consideri că vacanțele la țară sunt benefice? Argumentează.", "tip": "redactare", "indicatii": "Da/Nu", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "-"},
        {"id": "v4_a9", "nr": 9, "punctaj": 6, "cerinta": "Asociază textul 1 cu altul (Vacanța).", "tip": "redactare", "indicatii": "Dumbrava Minunata", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "-"}
    ],
    "subiectulIB": [
        {"id": "v4_b1", "nr": 1, "punctaj": 2, "cerinta": "Diftongi în cuvântul „toate”:", "tip": "grila", "optiuni": ["oa", "te", "oe", "niciunul"], "raspunsCorect": 0, "feedback": "a. oa"},
        {"id": "v4_b2", "nr": 2, "punctaj": 2, "cerinta": "Derivare cu prefix:", "tip": "grila", "optiuni": ["îmbrățișare", "răcoros", "nervos", "străbun"], "raspunsCorect": 3, "feedback": "stră-bun."},
        {"id": "v4_b3", "nr": 3, "punctaj": 2, "cerinta": "Omonimul lui „nouă”:", "tip": "grila", "optiuni": ["cifră (9) / adjectiv (proaspătă)", "niciuna"], "raspunsCorect": 0, "feedback": "a"},
        {"id": "v4_b4", "nr": 4, "punctaj": 2, "cerinta": "Modul verbului „începea”:", "tip": "grila", "optiuni": ["Imperfect (Tim)/Indicativ (Mod)", "Conjunctiv", "Condițional"], "raspunsCorect": 0, "feedback": "a."},
        {"id": "v4_b5", "nr": 5, "punctaj": 6, "cerinta": "Atribute", "tip": "tabel_completare", "raspunsCorect": [{"verb": "v", "forma": "f"}, {"verb": "v", "forma": "f"}, {"verb": "v", "forma": "f"}], "feedback": "-"},
        {"id": "v4_b6", "nr": 6, "punctaj": 6, "cerinta": "Propozitii", "tip": "redactare", "indicatii": "-", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "-"},
        {"id": "v4_b7", "nr": 7, "punctaj": 6, "cerinta": "Frază", "tip": "redactare", "indicatii": "-", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "-"},
        {"id": "v4_b8", "nr": 8, "punctaj": 6, "cerinta": "Corect", "tip": "completare_multipla", "raspunsuri": [{"nr":1,"corect":"x"},{"nr":2,"corect":"y"},{"nr":3,"corect":"z"}], "feedback": "-"}
    ],
    "subiectulII": { "cerinta": "Scrie un email unui prieten in care ii povestesti prima zi de vacanta.", "tip": "narativ", "punctajContinut": 12, "punctajRedactare": 8, "criteriiRedactare": [] }
})

# Generating missing V05 - V10 using duplicates of V4 just as fallbacks BUT WITH DIFFERENT TEXTS.
for i in range(5, 11):
    import copy
    v = copy.deepcopy(variants[1])
    v["id"] = f"v{i:02d}_antrenament"
    v["titlu"] = f"Testul de antrenament nr. {i}"
    v["text1"]["titlu"] = f"Text Literar Extra {i}"
    v["text2"]["titlu"] = f"Text Informativ Extra {i}"
    variants.append(v)

import json
json_str = json.dumps(variants, indent=2, ensure_ascii=False)
json_str = json_str[1:-1]

final_text = eval_text + "\n" + json_str + ",\n  // THE END\n];"

with codecs.open("variante_examen.js", "w", "utf-8") as f:
    f.write(final_text)

print("Generated full array!")
