/**
 * items.js – Banca de itemi pentru Evaluarea Națională la Limba Română, cl. VIII
 * ============================================================================
 * STRUCTURA: fiecare item are:
 *   id, cerinta, tip ('grila'|'completare'|'redactare'), raspunsCorect,
 *   optiuni (doar pt grila), feedback, punctaj
 *
 * ► PENTRU A ADĂUGA NOI TEXTE: copiază un obiect din `texteSuport` și completează.
 * ► PENTRU A ADĂUGA NOI ITEMI: copiază un obiect din `itemsSubiectulI` și completează.
 * ============================================================================
 */

// ===========================================================================
// TEXTE-SUPORT (texte literare și nonliterare autentice sau adaptate)
// Adaugă texte noi ca obiecte noi în acest array.
// ===========================================================================
const texteSuport = [
    {
        id: "text_01",
        titlu: "«Amintiri din copilărie» – Ion Creangă (fragment)",
        autor: "Ion Creangă",
        tip: "literar",
        sursa: "Amintiri din copilărie, 1881",
        corpus: `Stau câteodată și mă întreb: oare nu visez? Atâta amar de vreme a trecut de atunci — și par-că-mi vine a nu crede că-s eu. Mulți dintre cei cu care m-am jucat s-au dus de mult la «plata obștei», ori s-au risipit în lume ca florile de păpădie în bătaia vântului. Și de la o vreme încoace, mă tem să nu fac și eu vreo prostie: să mă apuc a scrie niște icoane de la țară, tocmai acum, la vremea senectuții mele, când tot moșneagul are huzur de povești și-și caută de suflet!
Iată că nu ascult de nimeni. Și mă apuc de treabă.
Stau câteodată și-mi aduc aminte ce vremi și ce oameni mai erau în părțile noastre, pe când începusem și eu, drăgănelul mamei, a mă ridica băiețaș la casa părinților mei, în satul Humulești, din târg drept în față, peste apa Neamțului.`
    },
    {
        id: "text_02",
        titlu: "«Lacul» – Mihai Eminescu (poem)",
        autor: "Mihai Eminescu",
        tip: "literar",
        sursa: "Convorbiri literare, 1876",
        corpus: `Lacul codrilor albastru
Nuferi galbeni îl încarcă;
Tresărind în cercuri albe
El cutremură o barcă.

Și eu trec de-a lung de maluri,
Parc-ascult și parc-aștept
Ea din trestii să răsară
Și să-mi cadă lin pe piept;

Să sărim în luntrea mică,
Îngânați de glas de ape,
Și să scap din mână cârma,
Și lopețile să-mi scape;

Să plutim cuprinși de farmec
Sub lumina blândei lune —
Vântu-n trestii lin foșnească,
Unduioasa apă sune!

Dar nu vine... Singuratic
În zadar suspin și sufăr
Lângă lacul cel albastru
Încărcat cu flori de nufăr.`
    },
    {
        id: "text_03",
        titlu: "Importanța lecturii în era digitală (text nonliterar)",
        autor: "Text explicativ-argumentativ",
        tip: "nonliterar",
        sursa: "Text adaptat pentru examen",
        corpus: `Lectura rămâne una dintre cele mai valoroase activități umane, chiar și în contextul revoluției digitale. Studiile recente arată că tinerii care citesc zilnic cel puțin 20 de minute au un vocabular cu 50% mai bogat față de semenii lor și obțin rezultate semnificativ mai bune la examenele naționale.
Cartea transmite nu doar informații, ci și emoții, valori și modele de comportament. Prin intermediul personajelor, cititorul trăiește experiențe noi, își dezvoltă empatia și gândirea critică.
Specialiștii în educație subliniază că lectura de plăcere, practicată constant, contribuie la formarea unor cetățeni mai informați, mai creativi și mai capabili să rezolve probleme complexe. Biblioteca, fie ea fizică sau digitală, rămâne cel mai democratic spațiu de acces la cunoaștere.`
    },
    {
        id: "text_04",
        titlu: "«Moara cu noroc» – Ioan Slavici (fragment)",
        autor: "Ioan Slavici",
        tip: "literar",
        sursa: "Moara cu noroc, 1881",
        corpus: `— Omul să fie mulțumit cu sărăcia sa, căci, dacă e vorba, nu bogăția, ci liniștea colibei tale te face fericit, zise soacra lui Ghiță, strângând cu mâini tremurânde punguța la piept.
Ghiță simțea că bătrâna are dreptate, dar gândul câștigului îl muncea. Luă în arendă cârciuma de la Moara cu noroc. Soarta lui se schimbă. Venea lume multă, câștigul era bun — dar cu trecerea timpului, ceva se întuneca în sufletul lui. Lică Sămădăul, un om cu privire rece și cuvânt puțin, își făcuse obiceiul de a poposi la moară. Și de fiecare dată, Ghiță simțea un fior ciudat, ca și când cineva i-ar fi răsucit un cuțit în inimă.`
    },
    // ► ADAUGĂ TEXTE NOI AICI – copiază blocul de mai sus și completează câmpurile
];

// ===========================================================================
// ITEMI – SUBIECTUL I (receptarea textului)
// Fiecare set conține itemii aferenți unui text-suport.
// Adaugă seturi noi în acest array.
// ===========================================================================
const itemsSubiectulI = [

    // ---- SET 1: Creangă -------------------------------------------------------
    {
        textId: "text_01",
        itemi: [
            {
                id: "s1_t1_i1",
                nr: 1,
                cerinta: "Transcrie din text două cuvinte care aparțin câmpului semantic al «timpului trecut».",
                tip: "completare",
                raspunsCorect: ["vreme", "trecut", "atunci", "de-atunci"],
                raspunsCorectAfisat: "vreme, trecut (sau: atunci, de atunci)",
                feedback: "Câmpul semantic grupează cuvintele înrudite ca sens. Cuvintele legate de timp în fragment sunt: «vreme», «de atunci», «trecut».",
                punctaj: 2
            },
            {
                id: "s1_t1_i2",
                nr: 2,
                cerinta: "Selectează varianta corectă. Expresia «la plata obștei» din text înseamnă:",
                tip: "grila",
                optiuni: [
                    "au plecat în altă localitate",
                    "au murit",
                    "au achitat o datorie",
                    "s-au certat cu vecinii"
                ],
                raspunsCorect: 1,
                feedback: "«La plata obștei» este o expresie populară care înseamnă «a muri». Obștea este comunitatea, iar «plata» e datoria față de ea – moartea.",
                punctaj: 2
            },
            {
                id: "s1_t1_i3",
                nr: 3,
                cerinta: "Identifică modul de expunere dominant în fragmentul dat.",
                tip: "grila",
                optiuni: ["Descriere", "Dialog", "Narațiune", "Argumentare"],
                raspunsCorect: 2,
                feedback: "Fragmentul prezintă o succesiune de gânduri și amintiri ale naratorului (la persoana I), specifică narațiunii la persoana I.",
                punctaj: 2
            },
            {
                id: "s1_t1_i4",
                nr: 4,
                cerinta: "Care este atitudinea naratorului față de copilărie, conform textului?",
                tip: "grila",
                optiuni: [
                    "Indiferență și uitare",
                    "Nostalgie și dor",
                    "Furie și regret",
                    "Frică și tristețe"
                ],
                raspunsCorect: 1,
                feedback: "Naratorul privește copilăria cu nostalgie («par-că-mi vine a nu crede că-s eu»), reamintind cu dor persoane și locuri din trecut.",
                punctaj: 2
            },
            {
                id: "s1_t1_i5",
                nr: 5,
                cerinta: "Precizează valoarea stilistică a comparației «s-au risipit în lume ca florile de păpădie în bătaia vântului».",
                tip: "completare",
                raspunsCorect: ["dispersare", "risipire", "plecarea oamenilor în lume", "împrăștiere", "faptul că oamenii s-au răspândit"],
                raspunsCorectAfisat: "Comparația sugerează risipirea oamenilor în lume, asemenea florilor de păpădie purtate de vânt, adică faptul că s-au împrăștiat în toate direcțiile.",
                feedback: "O comparație unește doi termeni prin cuvintele «ca», «precum», «ca și». Valoarea stilistică se explică prin imaginea creată.",
                punctaj: 2
            },
            {
                id: "s1_t1_i6",
                nr: 6,
                cerinta: "Menționează satul în care a copilărit naratorul, conform textului.",
                tip: "completare",
                raspunsCorect: ["humulești", "Humulești"],
                raspunsCorectAfisat: "Humulești",
                feedback: "Informația se găsește direct în text: «în satul Humulești, din târg drept în față, peste apa Neamțului».",
                punctaj: 6
            },
            {
                id: "s1_t1_i7",
                nr: 7,
                cerinta: "Selectează sinonimul contextual al cuvântului «senectuții» din text:",
                tip: "grila",
                optiuni: ["tinereții", "bătrâneții", "maturității", "copilăriei"],
                raspunsCorect: 1,
                feedback: "«Senectute» este un termen livresc care desemnează vârsta înaintată, bătrânețea.",
                punctaj: 6
            },
            {
                id: "s1_t1_i8",
                nr: 8,
                cerinta: "Precizează tipul naratorului din fragmentul dat (persoana naratorului și implicarea acestuia).",
                tip: "completare",
                raspunsCorect: ["persoana I", "narator implicat", "homodiegetic", "narator-personaj"],
                raspunsCorectAfisat: "Narator la persoana I, implicat în acțiune (narator-personaj / homodiegetic).",
                feedback: "Clue: verbele și pronumele la persoana I («Stau», «mă întreb», «eu»). Naratorul participă la evenimentele povestite.",
                punctaj: 6
            },
            {
                id: "s1_t1_i9",
                nr: 9,
                cerinta: "Rescrie enunțul «Stau câteodată și mă întreb», înlocuind cuvintele «stau» și «mă întreb» cu sinonime potrivite.",
                tip: "completare",
                raspunsCorect: ["rămân uneori", "șed uneori", "stau uneori și mă gândesc", "rămân câteodată și reflectez"],
                raspunsCorectAfisat: "Exemplu: «Rămân câteodată și mă gândesc.» / «Șed uneori și reflectez.»",
                feedback: "Sinonimele lui «stau» pot fi: rămân, șed. Sinonimele lui «mă întreb»: mă gândesc, reflectez, meditez.",
                punctaj: 6
            }
        ]
    },

    // ---- SET 2: Eminescu -------------------------------------------------------
    {
        textId: "text_02",
        itemi: [
            {
                id: "s1_t2_i1",
                nr: 1,
                cerinta: "Identifică figura de stil din versul «Lacul codrilor albastru».",
                tip: "grila",
                optiuni: ["Personificare", "Metaforă", "Epitet", "Comparație"],
                raspunsCorect: 2,
                feedback: "«Albastru» este un epitet cromatic (de culoare) care caracterizează lacul, creând o imagine vizuală sugestivă.",
                punctaj: 2
            },
            {
                id: "s1_t2_i2",
                nr: 2,
                cerinta: "Precizează sentimentul dominant al eului liric în ultima strofă a poeziei.",
                tip: "grila",
                optiuni: ["Bucurie și împlinire", "Singurătate și melancolie", "Furie și deznădejde", "Indiferență"],
                raspunsCorect: 1,
                feedback: "Ultimele versuri («Dar nu vine... Singuratic / În zadar suspin și sufăr») comunică sentimentul de singurătate și melancolie al îndrăgostitului.",
                punctaj: 2
            },
            {
                id: "s1_t2_i3",
                nr: 3,
                cerinta: "Transcrie din poem două imagini artistice (vizuale sau auditive).",
                tip: "completare",
                raspunsCorect: ["lacul codrilor albastru", "nuferi galbeni", "glas de ape", "unduioasa apă sune", "lumina blândei lune"],
                raspunsCorectAfisat: "Imagini vizuale: «Lacul codrilor albastru», «Nuferi galbeni îl încarcă». Imagini auditive: «Vântu-n trestii lin foșnească», «Unduioasa apă sune».",
                feedback: "Imaginile artistice sunt reprezentări senzoriale create prin limbaj. Vizuale = ce se vede; auditive = ce se aude.",
                punctaj: 2
            },
            {
                id: "s1_t2_i4",
                nr: 4,
                cerinta: "Care este tema principală a poeziei «Lacul»?",
                tip: "grila",
                optiuni: ["Natura ca peisaj separat de om", "Iubirea neîmplinită în cadrul naturii", "Critica societății", "Moartea și trecerea timpului"],
                raspunsCorect: 1,
                feedback: "Tema este iubirea neîmplinită: eul liric o așteaptă pe iubita absentă, în mijlocul unui peisaj lacustru romantic.",
                punctaj: 2
            },
            {
                id: "s1_t2_i5",
                nr: 5,
                cerinta: "Menționează două elemente de natură prezente în poezie.",
                tip: "completare",
                raspunsCorect: ["lac", "nuferi", "trestii", "barcă", "lună", "ape", "vânt", "codri"],
                raspunsCorectAfisat: "Lac, nuferi, trestii, lună, vânt, ape (orice două).",
                feedback: "Natura la Eminescu este reflecție a stărilor sufletești. Elementele naturii creează cadrul romantic al iubirii.",
                punctaj: 2
            },
            {
                id: "s1_t2_i6",
                nr: 6,
                cerinta: "Identifică figura de stil din versul «Vântu-n trestii lin foșnească».",
                tip: "grila",
                optiuni: ["Epitet", "Inversiune", "Personificare", "Antiteză"],
                raspunsCorect: 1,
                feedback: "«Lin foșnească» – adverbul «lin» este inversat față de ordinea firească (foșnească lin). Aceasta este o inversiune (inversion), figură de sintaxă.",
                punctaj: 6
            },
            {
                id: "s1_t2_i7",
                nr: 7,
                cerinta: "Selectează varianta corectă: poezia «Lacul» aparține curentului literar:",
                tip: "grila",
                optiuni: ["Clasicism", "Realism", "Romantism", "Simbolism"],
                raspunsCorect: 2,
                feedback: "Romantismul se caracterizează prin: natura ca reflex al trăirilor, iubirea idealizată, melancolia, eul liric solitar — toate prezente în «Lacul».",
                punctaj: 6
            },
            {
                id: "s1_t2_i8",
                nr: 8,
                cerinta: "Precizează tipul de rimă din prima strofă (schema rimei).",
                tip: "grila",
                optiuni: ["Rimă încrucișată (ABAB)", "Rimă îmbrățișată (ABBA)", "Rimă împerecheată (AABB)", "Rimă monorima (AAAA)"],
                raspunsCorect: 0,
                feedback: "«albastru–albe» (v.1,3) și «încarcă–barcă» (v.2,4): versurile alternează, deci rimă încrucișată ABAB.",
                punctaj: 6
            },
            {
                id: "s1_t2_i9",
                nr: 9,
                cerinta: "Explică, în 2-3 enunțuri, semnificația titlului «Lacul» în raport cu conținutul poeziei.",
                tip: "completare",
                raspunsCorect: ["cadru", "oglindă", "vis", "spațiu al iubirii", "locul așteptării"],
                raspunsCorectAfisat: "Lacul reprezintă atât cadrul natural al poeziei, cât și simbolul iubirii așteptate. El este locul visului de iubire, care rămâne neîmplinit. Lacul «albastru» sugerează idealul și puritatea sentimentului.",
                feedback: "Titlul la Eminescu este mereu simbolic. Lacul = spațiul romantic al iubirii, al visului, dar și al singurătății.",
                punctaj: 6
            }
        ]
    },

    // ---- SET 3: Text nonliterar -----------------------------------------------
    {
        textId: "text_03",
        itemi: [
            {
                id: "s1_t3_i1",
                nr: 1,
                cerinta: "Formulează ideea principală a primului paragraf.",
                tip: "completare",
                raspunsCorect: ["lectura rămâne valoroasă", "cititul ajută în era digitală", "lectura este importantă"],
                raspunsCorectAfisat: "Lectura rămâne una dintre cele mai valoroase activități umane, chiar și în era digitală, contribuind la îmbogățirea vocabularului și la obținerea unor rezultate mai bune la examene.",
                feedback: "Ideea principală rezumă esența paragrafului, fără detalii. Se exprimă într-un enunț complet.",
                punctaj: 2
            },
            {
                id: "s1_t3_i2",
                nr: 2,
                cerinta: "Conform textului, cu cât este mai bogat vocabularul tinerilor care citesc zilnic?",
                tip: "grila",
                optiuni: ["30%", "50%", "75%", "100%"],
                raspunsCorect: 1,
                feedback: "Informația este explicită în text: «au un vocabular cu 50% mai bogat față de semenii lor».",
                punctaj: 2
            },
            {
                id: "s1_t3_i3",
                nr: 3,
                cerinta: "Identifică tipul de text (literar / nonliterar) și justifică alegerea cu un argument din text.",
                tip: "completare",
                raspunsCorect: ["nonliterar", "explicativ", "argumentativ", "informativ"],
                raspunsCorectAfisat: "Text nonliterar (explicativ-argumentativ), deoarece transmite informații și argumente obiective (studii, statistici), nu are scop estetic.",
                feedback: "Textul nonliterar informează, explică sau argumentează. Clue: folosește statistici («50%»), termeni tehnici, structură logică.",
                punctaj: 2
            },
            {
                id: "s1_t3_i4",
                nr: 4,
                cerinta: "Selectează antonimul cuvântului «valoroase» din text:",
                tip: "grila",
                optiuni: ["utile", "fără valoare", "importante", "folositoare"],
                raspunsCorect: 1,
                feedback: "Antonimul (opusul) lui «valoroase» este «fără valoare» / «neînsemnate» / «inutile».",
                punctaj: 2
            },
            {
                id: "s1_t3_i5",
                nr: 5,
                cerinta: "Menționează două avantaje ale lecturii, conform textului.",
                tip: "completare",
                raspunsCorect: ["vocabular mai bogat", "rezultate mai bune la examene", "dezvoltarea empatiei", "gândire critică", "creativitate", "cetățeni mai informați"],
                raspunsCorectAfisat: "Vocabular mai bogat, rezultate mai bune la examene, dezvoltarea empatiei și a gândirii critice, creativitate mai mare (orice două).",
                feedback: "Răspunde direct la întrebare, cu informații din text. Folosește cuvintele textului sau parafrazează.",
                punctaj: 2
            },
            {
                id: "s1_t3_i6",
                nr: 6,
                cerinta: "Explică sensul expresiei «cel mai democratic spațiu de acces la cunoaștere» referitor la bibliotecă.",
                tip: "completare",
                raspunsCorect: ["accesibil tuturor", "gratuit", "pentru toți", "fără discriminare"],
                raspunsCorectAfisat: "«Democratic» înseamnă că biblioteca este accesibilă tuturor oamenilor, indiferent de vârstă, origine sau resurse financiare. Cunoașterea nu este rezervată unui grup privilegiat.",
                feedback: "«Democratic» vine de la «demos» (popor). Sensul contextual: ceva ce aparține tuturor și este accesibil fiecăruia.",
                punctaj: 2
            },
            {
                id: "s1_t3_i7",
                nr: 7,
                cerinta: "Precizează scopul comunicativ al textului:",
                tip: "grila",
                optiuni: ["Să distreze cititorul", "Să informeze și să convingă despre valoarea lecturii", "Să descrie o bibliotecă", "Să nareze o întâmplare"],
                raspunsCorect: 1,
                feedback: "Textul explicativ-argumentativ are scopul de a informa (prezintă fapte, studii) și de a convinge (aduce argumente în favoarea lecturii).",
                punctaj: 2
            },
            {
                id: "s1_t3_i8",
                nr: 8,
                cerinta: "Identifică conectorul logic din al doilea paragraf care introduce o concluzie.",
                tip: "completare",
                raspunsCorect: ["prin intermediul", "și"],
                raspunsCorectAfisat: "«Prin intermediul» introduce o relație de mijloc/instrument. Alt conector relevant: conjuncția «și» cu rol conclusiv.",
                feedback: "Conectorii logici leagă ideile: «deci», «prin urmare», «astfel», «în concluzie» = concluzie; «deoarece», «întrucât» = cauză.",
                punctaj: 2
            },
            {
                id: "s1_t3_i9",
                nr: 9,
                cerinta: "Formulează un titlu alternativ potrivit pentru text, justificând alegerea în 1-2 enunțuri.",
                tip: "completare",
                raspunsCorect: ["lectură", "carte", "cunoaștere", "beneficii", "digital"],
                raspunsCorectAfisat: "Exemplu: «Cartea – prietenul cel mai bun al elevului» sau «De ce să citim în era digitală». Titlul reflectă mesajul central al textului.",
                feedback: "Un titlu bun rezumă tema textului și atrage atenția. Justifică de ce ai ales titlul respectiv.",
                punctaj: 2
            }
        ]
    },

    // ► ADAUGĂ SETURI NOI AICI – copiați blocul de mai sus și completați pentru noile texte
];

// ===========================================================================
// ITEMI – SUBIECTUL II (redactare)
// Adaugă cerințe noi în array-ul corespunzător tipului de compunere.
// ===========================================================================
const itemsSubiectulII = {

    narativ: [
        {
            id: "sII_nar_01",
            cerinta: `Redactează o compunere narativă de 16-18 rânduri în care să prezinți o întâmplare deosebită petrecută într-un loc care ți-a marcat copilăria.
În compunerea ta, vei avea în vedere:
• prezentarea unui moment de incipit (început) și a unui final;
• existența a cel puțin unui personaj și a unui conflict;
• utilizarea narațiunii la persoana I;
• respectarea normelor de ortografie și de punctuație.`,
            punctaj: "20 puncte (12 conținut + 8 redactare)",
            structura: [
                { nr: 1, text: "Incipit (2-3 rânduri): Prezintă locul, momentul și personajele implicate." },
                { nr: 2, text: "Cuprins – Evenimentul (8-10 rânduri): Descrie ce s-a întâmplat, cu un moment de conflict/tensiune." },
                { nr: 3, text: "Punct culminant (2-3 rânduri): Momentul cel mai intens al întâmplării." },
                { nr: 4, text: "Final (2-3 rânduri): Rezolvarea situației și o reflecție/lecție învățată." }
            ]
        },
        {
            id: "sII_nar_02",
            cerinta: `Redactează o compunere narativă de 16-18 rânduri, pornind de la ideea: «Uneori, un gest mic poate schimba totul.»
În compunerea ta, vei avea în vedere:
• prezența a cel puțin două personaje;
• îmbinarea narațiunii cu dialogul;
• respectarea structurii narative (incipit, cuprins, final);
• respectarea normelor de limbă scrisă.`,
            punctaj: "20 puncte (12 conținut + 8 redactare)",
            structura: [
                { nr: 1, text: "Incipit: Prezintă personajele și situația inițială." },
                { nr: 2, text: "Desfășurarea acțiunii: Gestul mic și efectul lui asupra personajelor." },
                { nr: 3, text: "Dialog: Include o replică semnificativă între personaje." },
                { nr: 4, text: "Final: Consecința gestului și reflecția naratorului." }
            ]
        }
    ],

    descriptiv: [
        {
            id: "sII_desc_01",
            cerinta: `Redactează o compunere descriptivă de 16-18 rânduri în care să prezinți un loc drag ție (o cameră, un parc, o stradă, un sat etc.).
În compunerea ta, vei avea în vedere:
• prezența unor imagini artistice (vizuale, auditive, olfactive);
• utilizarea a cel puțin două figuri de stil (comparație, epitet, personificare);
• exprimarea sentimentelor pe care ți le trezește acel loc;
• respectarea normelor de ortografie și de punctuație.`,
            punctaj: "20 puncte (12 conținut + 8 redactare)",
            structura: [
                { nr: 1, text: "Introducere (2-3 rânduri): Prezintă locul și motivul pentru care este important pentru tine." },
                { nr: 2, text: "Descriere propriu-zisă (10-12 rânduri): Descrie detaliile locului folosind simțurile (văz, auz, miros). Folosește figuri de stil." },
                { nr: 3, text: "Încheiere (2-3 rânduri): Exprimă sentimentele și gândurile legate de acel loc." }
            ]
        }
    ],

    eseu: [
        {
            id: "sII_eseu_01",
            cerinta: `Pornind de la afirmația «Cartea este prietenul cel mai bun al omului», redactează un text argumentativ de 16-18 rânduri în care să îți exprimi opinia despre importanța lecturii în viața unui adolescent.
În compunerea ta, vei avea în vedere:
• formularea unei teze clare (opinia ta);
• prezentarea a cel puțin două argumente susținute cu exemple;
• includerea unei concluzii;
• respectarea normelor de ortografie și de punctuație.`,
            punctaj: "20 puncte (12 conținut + 8 redactare)",
            structura: [
                { nr: 1, text: "Introducere/Teză (2-3 rânduri): Formulează opinia ta clar. (Ex: «Consider că lectura...»)" },
                { nr: 2, text: "Argument 1 + Exemplu (4-5 rânduri): Primul motiv pentru care susții opinia." },
                { nr: 3, text: "Argument 2 + Exemplu (4-5 rânduri): Al doilea motiv, cu un exemplu concret." },
                { nr: 4, text: "Concluzie (2-3 rânduri): Reafirmă teza și închide argumentația. (Ex: «Prin urmare...»)" }
            ]
        }
    ]
};

// ===========================================================================
// FIGURI DE STIL – date pentru Modulul Ajutor
// ===========================================================================
const figuriDeStil = [
    { nume: "Epitetul", definitie: "Adjectiv sau adverb care subliniază o calitate a unui obiect/ființă, cu valoare expresivă.", exemplu: "«cerul senin», «Lacul albastru», «trist se duc»" },
    { nume: "Comparația", definitie: "Asemănare între doi termeni printr-un termen comparativ (ca, precum, ca și).", exemplu: "«s-au risipit ca florile de păpădie»" },
    { nume: "Metafora", definitie: "Comparație prescurtată; transferul unui sens de la un cuvânt la altul, pe baza asemănării.", exemplu: "«luna – o corabie de argint»" },
    { nume: "Personificarea", definitie: "Atribuirea de însușiri sau acțiuni omenești unor ființe/obiecte fără viață.", exemplu: "«Vântul șoptea prin frunze»" },
    { nume: "Hiperbola", definitie: "Exagerare cu scop expresiv, pentru a accentua o calitate sau o stare.", exemplu: "«Plângea cu lacrimi și cu sânge»" },
    { nume: "Antiteza", definitie: "Opoziție puternică între două idei, cuvinte sau imagini.", exemplu: "«Zile albe, nopți negre»" },
    { nume: "Enumerația", definitie: "Înșiruirea mai multor elemente de același fel, pentru amplificare.", exemplu: "«Câmpii, dealuri, văi, păduri»" },
    { nume: "Repetiția", definitie: "Reluarea unui cuvânt sau expresii pentru a accentua o idee sau emoție.", exemplu: "«Dormi, dormi, puiule, dormi»" },
    { nume: "Invocația retorică", definitie: "Adresare directă unui interlocutor abstract (natură, divinitate, idee).", exemplu: "«O! Eminescu, poet nepereche»" },
    { nume: "Interogația retorică", definitie: "Întrebare care nu așteaptă răspuns, ci exprimă o afirmație sau emoție puternică.", exemplu: "«Oare nu mai e nicio speranță?»" },
    { nume: "Aliterația", definitie: "Repetarea aceluiași sunet/grup de sunete (consoane) pentru efect muzical.", exemplu: "«Suflare, șoapte, șuier surd»" },
    { nume: "Sinecdoca", definitie: "Substituirea întregului prin parte sau invers.", exemplu: "«Românul s-a ridicat!» (în loc de: românii)" }
];

// ===========================================================================
// CUNOȘTINȚE CHATBOT (baza de cunoaștere a asistentului)
// Adaugă noi intrări pentru a extinde răspunsurile chatbot-ului.
// ===========================================================================
const cunostinteChatbot = {
    figuri: {
        cuvinteCheie: ["figuri de stil", "metafora", "epitete", "comparatie", "personificare", "hiperbola", "figura"],
        raspuns: `**Figuri de stil \u2013 Ghid complet EN 2026** \ud83d\udcda

\ud83d\udd35 **Epitetul** = adjectiv/adverb expresiv: \u00ablacul *albastru*\u00bb, \u00abtrist *se duc*\u00bb
\ud83d\udd35 **Metafora** = compara\u021bie f\u0103r\u0103 termen comparativ: \u00abluna \u2013 *corabie de argint*\u00bb
\ud83d\udd35 **Compara\u021bia** = asem\u0103nare cu \u00abca\u00bb, \u00abprecum\u00bb: \u00ab*ca florile de p\u0103p\u0103die*\u00bb
\ud83d\udd35 **Personificarea** = obiecte/natur\u0103 cu \u00eensu\u0219iri omene\u0219ti: \u00ab*V\u00e2ntul \u0219optea*\u00bb
\ud83d\udd35 **Hiperbola** = exagerare expresiv\u0103: \u00ab*pl\u00e2ngea un ocean de lacrimi*\u00bb
\ud83d\udd35 **Inversiunea** = schimbarea ordinii fire\u0219ti: \u00ab*Codrii de aram\u0103*\u00bb
\ud83d\udd35 **Antiteza** = contrast: \u00ab*Zile albe, nop\u021bi negre*\u00bb
\ud83d\udd35 **Repeti\u021bia** = efect de accentuare: \u00ab*Dormi, dormi, puiule*\u00bb

\ud83d\udca1 **La EN 2026**: Identific\u0103 figura \u2192 Nume\u0219te-o \u2192 Explic\u0103 efectul expresiv \u00een context!
\u26a0\ufe0f Gre\u0219eal\u0103 frecvent\u0103: confundarea epitetului cu adjectivul simplu. Epitetul are **valoare expresiv\u0103**, nu e doar informativ.`
    },
    structura: {
        cuvinteCheie: ["structura compunerii", "compunere", "cum scriu", "ce scriu mai intai", "structura", "redactare"],
        raspuns: `**Structura compunerii \u2013 EN 2026** \ud83d\udcdd

**\ud83d\udcd6 Compunere NARATIV\u0102 (cea mai frecvent\u0103 la EN):**
1\ufe0f\u20e3 **Incipit** (2-3 r\u00e2nduri) \u2013 Cine? Unde? C\u00e2nd?
2\ufe0f\u20e3 **Desf\u0103\u0219urarea ac\u021biunii** (8-10 r\u00e2nduri) \u2013 Ce s-a \u00eent\u00e2mplat? Include conflictul.
3\ufe0f\u20e3 **Punct culminant** (2-3 r\u00e2nduri) \u2013 Momentul cel mai intens.
4\ufe0f\u20e3 **Final** (2-3 r\u00e2nduri) \u2013 Rezolvare + reflec\u021bie.

**\ud83c\udfa8 Compunere DESCRIPTIV\u0102:**
1\ufe0f\u20e3 Introducere \u2013 Ce descrii \u0219i de ce?
2\ufe0f\u20e3 Descrierea propriu-zis\u0103 \u2013 Imagini vizuale, auditive, olfactive.
3\ufe0f\u20e3 \u00cencheiere \u2013 Ce sentiment treze\u0219te locul/obiectul?

**\ud83d\udcac Compunere ARGUMENTATIV\u0102 (eseu):**
1\ufe0f\u20e3 Tez\u0103 \u2013 \u00abConsider c\u0103...\u00bb
2\ufe0f\u20e3 Argument 1 + exemplu
3\ufe0f\u20e3 Argument 2 + exemplu
4\ufe0f\u20e3 Concluzie \u2013 \u00abPrin urmare...\u00bb

\ud83d\udca1 **Regula de aur**: 16-18 r\u00e2nduri, cel pu\u021bin 1 figur\u0103 de stil, dialog (la narativ\u0103), ortografie impecabil\u0103!
\u26a0\ufe0f Sub 16 r\u00e2nduri = depunctare! Peste 18 r\u00e2nduri = risc de gre\u0219eli suplimentare.`
    },
    vocabular: {
        cuvinteCheie: ["vocabular", "sinonim", "antonim", "sens propriu", "sens figurat", "paronime", "camp semantic"],
        raspuns: `**Vocabular \u2013 Tot ce trebuie s\u0103 \u0219tii la EN 2026** \ud83d\udcd6

\u2022 **Sinonim** = cuv\u00e2nt cu sens asem\u0103n\u0103tor: *frumos \u2192 splendid, minunat*
\u2022 **Antonim** = cuv\u00e2nt cu sens opus: *fericit \u2192 trist, nefericit*
\u2022 **Sens propriu** = sensul de baz\u0103, literal: *inim\u0103 = organ vital*
\u2022 **Sens figurat** = sens metaforic: *\u00abom cu inim\u0103 mare\u00bb = om generos*
\u2022 **C\u00e2mp semantic** = cuvinte din acela\u0219i domeniu: *lac, ap\u0103, val, mal* \u2192 c\u00e2mpul apei
\u2022 **Paronime** = cuvinte asem\u0103n\u0103toare ca form\u0103, diferite ca sens: *complement \u2260 compliment*
\u2022 **Omonime** = aceea\u0219i form\u0103, sensuri diferite: *lac* (de ap\u0103) / *lac* (de unghii)

\ud83d\udca1 **Sinonimul CONTEXTUAL**: nu orice sinonim e bun, ci cel care se potrive\u0219te \u00een **acel** context specific! \u00cenlocuie\u0219te mental \u0219i verific\u0103 dac\u0103 sensul se p\u0103streaz\u0103.

\u26a0\ufe0f **Capcan\u0103 frecvent\u0103**: \u00abc\u00e2mpul semantic\u00bb \u2260 \u00abfamilia lexical\u0103\u00bb. C\u00e2mpul semantic = cuvinte legate prin **sens** (ap\u0103, lac, val). Familia lexical\u0103 = cuvinte cu aceea\u0219i **r\u0103d\u0103cin\u0103** (ap\u0103, apos, adap\u0103).`
    },
    timp: {
        cuvinteCheie: ["timp", "gestionare", "cat timp", "plan de timp", "minute", "ore", "examen"],
        raspuns: `**Cum gestionezi timpul la EN Rom\u00e2n\u0103 2026** \u23f1\ufe0f

**Total: 2 ore (120 de minute)**

\ud83d\udcd6 **Subiectul I** (~60 min):
- Cite\u0219te textele cu aten\u021bie (10 min)
- Rezolv\u0103 cerin\u021bele A \u0219i B (45 min)
- Revizuie\u0219te r\u0103spunsurile (5 min)

\u270d\ufe0f **Subiectul II** (~55 min):
- Planific\u0103 compunerea pe ciorn\u0103 (5-7 min)
- Scrie compunerea pe curat (38-40 min)
- Corecteaz\u0103 ortografia \u0219i punctua\u021bia (8-10 min)

\ud83d\udd04 **Ultimele 5 minute** = verificare final\u0103!

\ud83d\udca1 **Strategii de eficien\u021b\u0103:**
\u2022 Nu r\u0103m\u00e2ne blocat la o cerin\u021b\u0103! Treci mai departe \u0219i revino.
\u2022 \u00cencepe cu cerin\u021bele pe care le \u0219tii sigur.
\u2022 Num\u0103r\u0103 r\u00e2ndurile compunerii \u00eenainte de a o trece pe curat.
\u2022 Verific\u0103 cratimele (\u00eentr-o, dintr-o, s-au/sau) \u2013 sunt cele mai penalizate gre\u0219eli!`
    },
    nota10: {
        cuvinteCheie: ["nota 10", "nota zece", "sfaturi", "punctaj maxim", "cum iau nota"],
        raspuns: `**Sfaturi pentru nota 10 la EN 2026** \ud83c\udfc6

\u2705 **La Subiectul I (54p):**
- Cite\u0219te textul de **2 ori** \u00eenainte de a r\u0103spunde
- R\u0103spunde **complet**, \u00een enun\u021buri \u00eentregi (nu telegrafic!)
- Identific\u0103 corect figurile de stil \u0219i explic\u0103 **efectul expresiv**
- Folose\u0219te termeni literari: *eu liric, narator, tem\u0103, motiv, viziune...*
- La cerin\u021bele cu \u00abjustific\u0103\u00bb \u2014 formuleaz\u0103 argument + citat din text

\u2705 **La Subiectul II (36p):**
- Respect\u0103 **EXACT** 16-18 r\u00e2nduri (num\u0103r\u0103-le!)
- Folose\u0219te vocabular **variat** (evit\u0103 repeti\u021biile)
- Include figuri de stil \u0219i dialog (la narativ\u0103)
- Planific\u0103 pe ciorn\u0103 \u00eenainte de a scrie pe curat
- Verific\u0103 **OBLIGATORIU**: virgule, puncte, cratim\u0103, \u00ee/\u00e2

\u2705 **Gre\u0219eli frecvente de evitat:**
- \u00absau\u00bb vs. \u00abs-au\u00bb (sau = ori; s-au = au fost)
- \u00ab\u00eentr-o\u00bb cu cratim\u0103 (nu \u00abintro\u00bb)
- Virgula \u00eenaintea lui \u00abdar\u00bb, \u00ab\u00eens\u0103\u00bb, \u00abci\u00bb
- \u00ab\u00ee\u00bb la \u00eenceput \u0219i la final de cuv\u00e2nt; \u00ab\u00e2\u00bb \u00een interiorul cuv\u00e2ntului

\ud83d\udca1 **Secret**: Exerseaz\u0103 zilnic c\u00e2te 15 minute. Progresul vine din consecven\u021b\u0103, nu din studiu masiv \u00eenainte de examen!`
    },
    caracterizare: {
        cuvinteCheie: ["caracterizare", "mijloace de caracterizare", "personaj", "cum caracterizez"],
        raspuns: `**Mijloace de caracterizare a personajului** \ud83d\udc64

**\u2b1b Direct\u0103** (autorul/naratorul spune direct):
- *Naratorul*: \u00abEra un om harnic \u0219i cinstit.\u00bb
- *Alte personaje*: \u00ab\u2014 E\u0219ti cel mai bun prieten!\u00bb
- *Autoprezentarea*: \u00abEu \u00eentotdeauna am fost...\u00bb

**\u2b1b Indirect\u0103** (deduci din comportament):
- *Fapte/ac\u021biuni*: Ce face personajul? \u2192 dezv\u0103luie tr\u0103s\u0103turi
- *Vorbe/limbaj*: Cum vorbe\u0219te? \u2192 nivel cultural, stare de spirit
- *G\u00e2nduri/sentimente*: Ce simte? \u2192 via\u021ba interioar\u0103
- *Rela\u021bii cu alte personaje*: Cum se poart\u0103 cu ceilal\u021bi?
- *Portret fizic*: Cum arat\u0103? (deseori reflect\u0103 interiorul)
- *Mediul \u00een care tr\u0103ie\u0219te*: Casa, camera \u2192 personalitatea

\ud83d\udca1 **Schema r\u0103spunsului la EN:**
1. Nume\u0219te tr\u0103s\u0103tura: \u00ab[Personajul] este [tr\u0103s\u0103tur\u0103].\u00bb
2. Identific\u0103 mijlocul: \u00abAcest lucru reiese prin caracterizare [direct\u0103/indirect\u0103].\u00bb
3. Citeaz\u0103 din text: \u00abDovada este secven\u021ba: \u201e...\u201d\u00bb
4. Explic\u0103: \u00abAceasta eviden\u021biaz\u0103 faptul c\u0103...\u00bb`
    }
};

