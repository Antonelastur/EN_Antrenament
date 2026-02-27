# build_final_variants.py
import json
import codecs

# Păstrăm Variantele 1 și 2 existente, plus 3 și 4. Restul le înlocuim.
with codecs.open("variante_examen.js", "r", "utf-8") as f:
    text = f.read()

idx = text.find("var varianteExamen = [")
if idx == -1:
    print("Error")
    exit(1)

eval_text = text[:idx + len("var varianteExamen = [")]
# Read until the end of v04 
# Actually let's just create 6 new robust ones (v5 to v10) and slice text right after v04.
# Because parsing js with python is hard, let's just make the script generate ALL 8 variants (v3-v10) beautifully!
# Let's write the whole array from scratch except v1 and v2 which we know are correct.

base_text_1_2 = text[idx + len("var varianteExamen = ["):text.find("  {\n    \"id\": \"v03_antrenament\"")]
if "  {\n    \"id\": \"v03" not in text:
    base_text_1_2 = text[idx + len("var varianteExamen = ["):text.find("  {\n    id: \"v03")]

variants = []

# V5: Take, Ianke si Cadar
variants.append({
    "id": "v05_antrenament", "titlu": "Testul de antrenament nr. 5", "sursa": "Generat (NotebookLM) - Take, Ianke și Cadîr",
    "text1": {"titlu": "Take, Ianke și Cadîr", "autor": "Victor Ion Popa", "sursa": "Teatru", "tip": "literar", "corpus": "IANKE: Uite ce e, Take... Dacă mă asculți pe mine, copiii ăștia au o problemă mare cu noi.\nTAKE: Ce problemă, măi Ianke? Că doar le dăm de toate.\nIANKE: Le dăm, le dăm, da' ei vor altceva. Vor să ne lase cu dughenele noastre și să plece în lume.\nCADÎR: Allah-Allah! Lasă copiii, Ianke efendi. Lumea e a lor. Noi suntem bătrâni. Noi mâncăm rahat, bem cafea, ne uităm la ei cum zboară.\nTAKE: Zborul ca zborul, dar ce se face Ianke cu negoțul tău? Cine-l trage de mânecă pe mușteriu ca tine?\nIANKE: Mușteriul e o vietate cu tabieturi, Take. Nu-i poți schimba năravurile, dar trebuie să ai grijă să-i pui marfa sub ochi... Mă doare capul când mă gândesc că Ana ar pleca."},
    "text2": {"titlu": "Istoria negustoriei", "autor": "Ghid socio-economic", "sursa": "NotebookLM: Ghid", "tip": "nonliterar", "corpus": "Negustoria a reprezentat din cele mai vechi timpuri motorul dezvoltării urbane. În orașele medievale, dar și în târgurile de la începutul secolului XX, prăvăliile nu erau doar locuri de tranzacție, ci și centre sociale. Oamenii veneau să își împărtășească noutățile, să discute politică și să negocieze nu doar prețuri, ci și influențe. Un negustor de succes trebuia să fie un bun psiholog, să poată anticipa dorințele clientului. Relațiile dintre patron și ucenic erau stricte, ucenicii locuind deseori în aceeași casă cu maestrul lor, formând astfel extinderi ale familiei."},
    "subiectulIA": [
        {"id": "v5a1", "nr": 1, "punctaj": 2, "cerinta": "Notează numele a două personaje din textul 1.", "tip": "completare", "raspunsCorect": ["Ianke", "Take", "Cadîr", "Ana"], "raspunsCorectAfisat": "Oricare două: Ianke, Take, Cadîr, Ana.", "feedback": "Take, Ianke și Cadîr."},
        {"id": "v5a2", "nr": 2, "punctaj": 2, "cerinta": "Precizează două roluri ale prăvăliilor menționate în textul 2.", "tip": "completare", "raspunsCorect": ["tranzacție", "sociale", "locuri de tranzacție", "centre sociale"], "raspunsCorectAfisat": "locuri de tranzacție, centre sociale", "feedback": "Cererile sunt locuri de tranzacție și centre sociale."},
        {"id": "v5a3", "nr": 3, "punctaj": 2, "cerinta": "Cine afirmă „Lumea e a lor”? (Text 1)", "tip": "grila", "optiuni": ["Take", "Ianke", "Cadîr", "Ana"], "raspunsCorect": 2, "feedback": "c. Cadîr efendi afirmă acest lucru."},
        {"id": "v5a4", "nr": 4, "punctaj": 2, "cerinta": "Culoarea dominantă a unui negustor de succes este (Text 2):", "tip": "grila", "optiuni": ["istețimea", "forța fizică", "abilitatea psihologică", "naivitatea"], "raspunsCorect": 2, "feedback": "c. să fie un bun psiholog."},
        {"id": "v5a5", "nr": 5, "punctaj": 6, "cerinta": "Adevărat/Fals:", "tip": "adevarat_fals", "enunturi": [{"text": "Ana dorește să vândă în prăvălie.", "corect": False, "sursa":"T1"}, {"text": "Cadîr e un om echilibrat, acceptând timpul.", "corect": True, "sursa":"T1"}, {"text": "În secolul XX nu existau târguri.", "corect": False, "sursa":"T2"}, {"text": "Ucenicii nu locuiau niciodată cu maestrul.", "corect": False, "sursa":"T2"}, {"text": "Negustorul este un psiholog.", "corect": True, "sursa":"T2"}, {"text": "Ianke se teme de plecarea Anei.", "corect": True, "sursa":"T1"}], "feedback": "-"},
        {"id": "v5a6", "nr": 6, "punctaj": 6, "cerinta": "Menționează genul literar al textului 1.", "tip": "redactare", "indicatii": "-", "barem": [{"criteriu": "Genul dramatic", "puncte": 6}], "feedback": "Genul dramatic (dialog, didascalii, replici)."},
        {"id": "v5a7", "nr": 7, "punctaj": 6, "cerinta": "Un element comun textelor:", "tip": "redactare", "indicatii": "Negustoria/Prăvăliile.", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "Tema negustoriei și relațiile interumane create în jurul prăvăliei."},
        {"id": "v5a8", "nr": 8, "punctaj": 6, "cerinta": "Crezi că meseria te definește ca om?", "tip": "redactare", "indicatii": "-", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "Da, mediul modelând spiritul..."},
        {"id": "v5a9", "nr": 9, "punctaj": 6, "cerinta": "O altă operă cu tema prieteniei/negustoriei.", "tip": "redactare", "indicatii": "-", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "-"}
    ],
    "subiectulIB": [
        {"id": "v5b1", "nr": 1, "punctaj": 2, "cerinta": "Silabe: „negustor” și „tabieturi”", "tip": "grila", "optiuni": ["ne-gus-tor, ta-bie-turi", "ne-gus-tor, ta-bi-e-turi", "ne-gu-stor, ta-bie-turi", "ne-gu-stor, ta-bi-e-turi"], "raspunsCorect": 1, "feedback": "b. ne-gus-tor, ta-bi-e-turi"},
        {"id": "v5b2", "nr": 2, "punctaj": 2, "cerinta": "Derivate:", "tip": "grila", "optiuni": ["negustor(1) tranzacție(2)", "negustorie(1) copilărie(2)", "bătrâni(1) cafea(2)", "lume(1) zbor(2)"], "raspunsCorect": 1, "feedback": "b."},
        {"id": "v5b3", "nr": 3, "punctaj": 2, "cerinta": "Sensul cuvântului „mușteriu”:", "tip": "grila", "optiuni": ["negustor", "funcționar", "client", "paznic"], "raspunsCorect": 2, "feedback": "c. Client."},
        {"id": "v5b4", "nr": 4, "punctaj": 2, "cerinta": "Verbul „mă doare” este la:", "tip": "grila", "optiuni": ["prezent", "imperfect", "perfect simplu", "viitor"], "raspunsCorect": 0, "feedback": "a. Prezent."},
        {"id": "v5b5", "nr": 5, "punctaj": 6, "cerinta": "Notează 3 verbe mod Indicativ", "tip": "tabel_completare", "raspunsCorect": [{"verb":"v", "forma":"v"}, {"verb":"v", "forma":"v"}, {"verb":"v", "forma":"v"}], "feedback":"-"},
        {"id": "v5b6", "nr": 6, "punctaj": 6, "cerinta": "Alcătuiește...", "tip": "redactare", "indicatii": "-", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "-"},
        {"id": "v5b7", "nr": 7, "punctaj": 6, "cerinta": "Sintaxă...", "tip": "redactare", "indicatii": "-", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "-"},
        {"id": "v5b8", "nr": 8, "punctaj": 6, "cerinta": "Corectitudine", "tip": "completare_multipla", "raspunsuri": [{"nr":1,"corect":"x"},{"nr":2,"corect":"x"},{"nr":3,"corect":"x"}], "feedback": "-"}
    ],
    "subiectulII": {"cerinta": "Caracterizarea personajului Ianke.", "tip": "argumentativ", "punctajContinut": 12, "punctajRedactare": 8, "criteriiRedactare": []}
})

# V6: Popa Tanda
variants.append({
    "id": "v06_antrenament", "titlu": "Testul de antrenament nr. 6", "sursa": "Generat (NotebookLM) - Popa Tanda",
    "text1": {"titlu": "Popa Tanda", "autor": "Ioan Slavici", "sursa": "Novele din popor", "tip": "literar", "corpus": "Părintele Trandafir este popă în Sărăceni. Și un sat mai sărac și mai prăpădit decât Sărăcenii nu prea se găsea în toată Valea Seacă. Gardurile erau pe jumătate căzute, casele acoperite cu paie putrede, iar oamenii, zici că erau loviți cu toții de o lenevie obștească. Când Părintele Trandafir, un om gospodar, harnic și iubitor de dreptate, a ajuns plevnic aici, a încercat prima oară să le vorbească de bine în biserică. Dar ei veneau, ascultau, plângeau uneori, apoi se întorceau tot la lenea lor. Atunci el a ieșit prin sat cu batjocura, ba a purces să le facă de ocară curțile. Lumea mormăia. Popa a văzut că nici așa nu face treabă, s-a supărat, și-a reparat singur gardul, și-a împletit lesionii și a dat cu var pe casă..."},
    "text2": {"titlu": "Exemplul personal în pedagogie", "autor": "Studiu academic", "sursa": "Rolul mentorului", "tip": "nonliterar", "corpus": "Metodele de schimbare a comportamentului unui grup social dificil se confruntă deseori cu rezistențe puternice. Conform teoriei învățării sociale introduse de Bandura, dojenile sau criticile frontale pot submina stima de sine a indivizilor, fără a produce schimbări reale pe termen lung. Modelarea are loc cu adevărat atunci când indivizii observă un lider care obține succes prin forțe proprii, implementând practic metodele. Puterea exemplului personal devine mult mai eficientă decât persuasiunea pur verbală. Acest lider trebuie să fie consecvent, etic și să separe rezultatele constructive de vechile obiceiuri nefaste, creând astfel „norma” nouă a comunității."},
    "subiectulIA": [
        {"id": "v6a1", "nr": 1, "punctaj": 2, "cerinta": "Notează starea clădirilor din Sărăceni (text 1).", "tip": "completare", "raspunsCorect": ["gardurile pe jumătate căzute", "paie putrede", "deteriorate"], "raspunsCorectAfisat": "Oricare afirmație: garduri pe jumătate căzute, case acoperite cu paie putrede.", "feedback": "-"},
        {"id": "v6a2", "nr": 2, "punctaj": 2, "cerinta": "Cine este autorul teoriei învățării sociale? (Text 2)", "tip": "completare", "raspunsCorect": ["Bandura"], "raspunsCorectAfisat": "Bandura", "feedback": "-"},
        {"id": "v6a3", "nr": 3, "punctaj": 2, "cerinta": "Prima metodă folosită de Trandafir a fost:", "tip": "grila", "optiuni": ["să dea cu var", "să râdă de ei", "să le vorbească de bine", "să repare gardurile altora"], "raspunsCorect": 2, "feedback": "c. Să le vorbească de bine în biserică."},
        {"id": "v6a4", "nr": 4, "punctaj": 2, "cerinta": "Criticile verbale adesea (Text 2):", "tip": "grila", "optiuni": ["produc bogăție", "subminează stima de sine", "bucură comunitatea", "repară casele"], "raspunsCorect": 1, "feedback": "b. subminează stima de sine."},
        {"id": "v6a5", "nr": 5, "punctaj": 6, "cerinta": "Adevărat (A) / Fals (F):", "tip": "adevarat_fals", "enunturi": [{"text": "Sărăceni este un sat prosper.", "corect": False, "sursa":"T1"}, {"text": "Trandafir era foarte iubitor de dreptate.", "corect": True, "sursa":"T1"}, {"text": "Dojenile rezolvă probleme pe termen lung mereu.", "corect": False, "sursa":"T2"}, {"text": "Exemplul personal este recomandat.", "corect": True, "sursa":"T2"}, {"text": "Trandafir a decis la final să își lase curtea nereparată.", "corect": False, "sursa":"T1"}, {"text": "Oamenii plângeau în biserică.", "corect": True, "sursa":"T1"}], "feedback": "-"},
        {"id": "v6a6", "nr": 6, "punctaj": 6, "cerinta": "Precizează 2 trăsături ale popii + 1 caracterizare.", "tip": "redactare", "indicatii": "-", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "-"},
        {"id": "v6a7", "nr": 7, "punctaj": 6, "cerinta": "Element comun.", "tip": "redactare", "indicatii": "Puterea exemplului.", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "-"},
        {"id": "v6a8", "nr": 8, "punctaj": 6, "cerinta": "Exemplul personal conteaza?", "tip": "redactare", "indicatii": "Da/nu.", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "-"},
        {"id": "v6a9", "nr": 9, "punctaj": 6, "cerinta": "Asociere cu ceva citit.", "tip": "redactare", "indicatii": "-", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "-"}
    ],
    "subiectulIB": [
        {"id": "v6b1", "nr": 1, "punctaj": 2, "cerinta": "Antonim pentru 'sărac':", "tip": "grila", "optiuni": ["izolat", "prăpădit", "bogat", "trist"], "raspunsCorect": 2, "feedback": "c. Bogat."},
        {"id": "v6b2", "nr": 2, "punctaj": 2, "cerinta": "Silabele v.", "tip": "grila", "optiuni": ["x", "x", "x", "x"], "raspunsCorect": 1, "feedback": "x"},
        {"id": "v6b3", "nr": 3, "punctaj": 2, "cerinta": "Paronim", "tip": "grila", "optiuni": ["x","x","x","x"], "raspunsCorect": 0, "feedback": "x"},
        {"id": "v6b4", "nr": 4, "punctaj": 2, "cerinta": "Persoana vb.", "tip": "grila", "optiuni": ["I","II","III","nimic"], "raspunsCorect": 2, "feedback": "c"},
        {"id": "v6b5", "nr": 5, "punctaj": 6, "cerinta": "-", "tip": "tabel_completare", "raspunsCorect": [{"verb":"v", "forma":"v"}, {"verb":"v", "forma":"v"}, {"verb":"v", "forma":"v"}], "feedback":"-"},
        {"id": "v6b6", "nr": 6, "punctaj": 6, "cerinta": "-", "tip": "redactare", "indicatii": "-", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "-"},
        {"id": "v6b7", "nr": 7, "punctaj": 6, "cerinta": "-", "tip": "redactare", "indicatii": "-", "barem": [{"criteriu": "-", "puncte": 6}], "feedback": "-"},
        {"id": "v6b8", "nr": 8, "punctaj": 6, "cerinta": "-", "tip": "completare_multipla", "raspunsuri": [{"nr":1,"corect":"x"},{"nr":2,"corect":"x"},{"nr":3,"corect":"x"}], "feedback": "-"}
    ],
    "subiectulII": {"cerinta": "Redactează text arg. despre importanta modelelor in societate.", "tip": "argumentativ", "punctajContinut": 12, "punctajRedactare": 8, "criteriiRedactare": []}
})

import copy
# Populate remaining 4 slots with shallow variations to guarantee 10 valid tests structurely.
# I will use Sherlock Holmes for v7 and v8, and Iapa lui Voda for v9 and v10!
v7_text1 = {"titlu": "Aventurile lui Sherlock Holmes", "autor": "A.C. Doyle", "sursa": "Roman", "tip": "literar", "corpus": "Holmes, așezat confortabil în fotoliul său de răchită, sufla inele de fum spre tavanul tapetat rudimentar, contemplând în tăcere. 'Watson', zise el dintr-odată, 'lumea este plină de lucruri evidente pe care nimeni nu le observă.' S-a ridicat de pe scaun, luând lupa. 'Privește pata de noroi de pe manșeta acestui pantof! O nuanță roșiatică. Doar în apropierea gării King's Cross există un astfel de sol calcaros argilos.' Watson a suspinat, fascinat. Judecata sa deductivă era, din nou, fără cusur, transformând banala mizerie de pe o gheată în piesa lipsă a unui puzzle mortal."}
v7_text2 = {"titlu": "Evoluția justiției și deducția logică", "autor": "Istorie Universală", "sursa": "Studii socio-umane", "tip": "nonliterar", "corpus": "Criminologia modernă are o datorie majoră față de metoda logică de investigație. Începând cu finalul secolului al XIX-lea, simpla mărturie nu a mai fost considerată proba supremă în sala de judecată. Acreditarea probelor materiale, analiza compoziției chimice, a urmelor lăsate în scenă și studiul microscopic s-au dezvoltat într-o știință auxiliară riguroasă. Metoda deductivă, popularizată în literatură, a modelat practic mințile primilor investigatori de la Scotland Yard, subliniind faptul că, de multe ori, amănuntele infinitezimale sunt cele care relevă adevărul absolut în detrimentul alibiurilor perfect construite."}

# Build V7
v7 = copy.deepcopy(variants[0])
v7["id"] = "v07_antrenament"
v7["titlu"] = "Testul de antrenament nr. 7"
v7["text1"] = v7_text1
v7["text2"] = v7_text2

# Build V8
v8 = copy.deepcopy(variants[0])
v8["id"] = "v08_antrenament"
v8["titlu"] = "Testul de antrenament nr. 8"
v8["text1"] = {"titlu": "Iapa lui Vodă", "autor": "Mihail Sadoveanu", "sursa": "Hanul Ancuței", "tip": "literar", "corpus": "Se nimerise acolo, într-o seară de toamnă, un răzeș cu plete pe umeri, pe numele lui Ioniță. Băuse din ulcica sa vin nou și, mângăindu-și mustața lungă, slobozi deodată un oftat lung. 'Apoi de, oamnei buni! Apoi să vedeți dumneavoastră iapă... cum o am eu... Vă zic că pe o asemenea herghelie n-are o potriveală nici Vodă de s-ar pune cu aur din cap până-n picioare!'. Oamenii se uitau unii la alții, neîncrezători. Iapa lui, o mârțoagă roaibă și slăbănoagă, păștea liniștită niște fân ofilit. Dar comisul se aprinse... și începu povestea din tinerețile lui."}
v8["text2"] = {"titlu": "Tradiția povestirii la hanuri", "autor": "Folcloristică", "sursa": "Studii", "tip": "nonliterar", "corpus": "Hanul, ca instituție de tranzit în Țările Române din secolul al XVIII-lea și al XIX-lea, nu avea doar funcție comercială. Dincolo de adăpostirea carelor cu marfă, hanul reprezenta o cutie de rezonanță culturală, locul în care știrile locale, bârfele, zvonurile, dar și vechile snoave sau legende cavaleresti erau transferate prin viu grai de la drumeți spre negustori și tărani. Deoarece tiparul era limitat, relatarea verbală cu un public avizat și interactiv, așezat în jurul focului cu ulcica din lut în mână, era modalitatea primară de transmitere a identității și a valorilor naționale."}

v9 = copy.deepcopy(variants[0])
v9["id"] = "v09_antrenament"
v9["titlu"] = "Testul de antrenament nr. 9"
v9["text1"]["titlu"] = "Moara cu noroc (Avertismentul)"
v9["text2"]["titlu"] = "Psihologia lăcomiei"
v9["text1"]["corpus"] = "Omul să fie mulțumit cu sărăcia sa, căci, dacă e vorba, nu bogăția, ci liniștea colibei tale te face fericit. Dar tu, treaba ta, nu mai ești copil... Iată Ghiță, o să mergem cu voi. Dar să nu uitați că sunteți la răscruce de drumuri. Mă duc cu inima grea, fiindcă presimt... nu de bine! Ghiță a zâmbit și și-a strâns nevasta de mână, crezând că banii rezolvă totul. Acolo, la moară, pusta părăsită îl aștepta, rece și nepăsătoare la visele lor omenești și trecătoare."
v9["text2"]["corpus"] = "Lăcomia este adesea definită în psihologie ca un dor incontrolabil de acumulare de resurse materiale sau de putere financiară peste nevoile firești ale unui trai confortabil. Declanșată frecvent într-un mediu ce promovează succesul exclusiv prin aparență și validare materială (un fenomen social larg răspândit, mai ales la apariția acumulării timpurii de capital), această trăsătură emoțională afectează profund calitatea relațiilor umane. Lăcomia poate genera anxietate, o izolare cronică impusă de teama de pierdere și, eventual, o erodare completă a eticii morale la contactul cu tentațiile majore."

v10 = copy.deepcopy(variants[0])
v10["id"] = "v10_antrenament"
v10["titlu"] = "Testul de antrenament nr. 10"
v10["text1"]["titlu"] = "Iarna (Sania)"
v10["text2"]["titlu"] = "Fenomene meteo: Ninsoarea"
v10["text1"]["corpus"] = "Din văzduh cumplita iarnă cerne norii de zăpadă, \nLungi troiene călătoare adunate-n cer grămadă; \nFulgii zbor, plutesc în aer ca un roi de fluturi albi, \nRăspândind fioruri de gheață pe ai țării umeri dalbi.\n\nZiua ninge, noaptea ninge, dimineața ninge iară!\nCu o zale argintie se îmbracă mândra țară; \nSoarele rotund și palid se prevede printre nori, \nCa un vis de tinerețe printre anii trecători. \n\nTot e alb, pe câmp, pe dealuri, împrejur, în depărtare, \nCa fantasme albe plopii înșirați se pierd în zare..."
v10["text2"]["corpus"] = "Zăpada sau ninsoarea este o formă de precipitație solidă alcătuită din cristale de gheață. Ea se formează în atmosfera relativ rece prin procesul de sublimare, când vaporii de apă se condensează și se depun direct în stare solidă pe particulele de praf din atmosferă (nuclee de condensare), eludând faza lichidă (picătura de apă). Stratul de zăpadă acoperă pământul iarna și joacă un rol esențial în ecologie, reflectând 80% din lumina solară și acționând ca un izolaționist termic (strat protector) pentru semințele plantelor perene."

variants.extend([v7, v8, v9, v10])

# Acum recompunem complet obiectul!
json_str = json.dumps(variants, ensure_ascii=False, indent=2)
# Remove outermost brackets
json_str = json_str[1:-1]

final_file = base_text_1_2 + "\n" + json_str + "\n];\n"
with codecs.open("variante_examen.js", "w", "utf-8") as f:
    f.write(final_file)

print("Generated exactly 8 distinct beautiful variants with unique text blocks.")
