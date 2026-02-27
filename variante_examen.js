/**
 * variante_examen.js – Banca de variante complete EN Română, cl. VIII
 * ====================================================================
 * STRUCTURA OFICIALĂ:
 *   SUBIECTUL I (70p) = A (38p) + B (32p)
 *   SUBIECTUL II (20p) = 12p conținut + 8p redactare
 *   OFICIU = 10p
 *   TOTAL = 100p
 *
 * Verificare: 38 + 32 + 20 = 90p (fără oficiu)
 * ====================================================================
 */

var varianteExamen = [

  // ========================================================================
  // VARIANTA 1 – Model Oficial 2025 (Creangă + Erasmus)
  // ========================================================================
  {
    id: "v01_model_oficial_2025",
    titlu: "Model Oficial EN 2025",
    sursa: "Ministerul Educației – Model oficial 2025",

    text1: {
      titlu: "Amintiri din copilărie – Ion Creangă (fragment)",
      autor: "Ion Creangă",
      sursa: "Amintiri din copilărie",
      tip: "literar",
      corpus: "\u201eCum nu se d\u0103 scos ursul din b\u00e2rlog, \u021b\u0103ranul de la munte, str\u0103mutat la c\u00e2mp, \u0219i pruncul, dezlipit de la s\u00e2nul mamei sale, a\u0219a nu m\u0103 dam eu dus din Humule\u0219ti \u00een toamna anului 1855, c\u00e2nd veni vremea s\u0103 plec la Socola, dup\u0103 st\u0103ruin\u021ba mamei. \u0218i oare de ce nu m-a\u0219 fi dat dus din Humule\u0219ti, nici \u00een ruptul capului, c\u00e2nd mereu \u00eemi spunea mama c\u0103 pentru folosul mieu este aceasta? Iaca de ce nu: dr\u0103g\u0103li\u021b\u0103 Doamne, eram \u0219i eu acum holteiu, din p\u0103cate! \u0218i Ia\u0219ii, pe care nu-i v\u0103zusem niciodat\u0103, nu erau aproape de Neam\u021b, ca F\u0103lticenii, de unde, toamna t\u00e2rziu \u0219i mai ales prin c\u00e2\u0219legile de iarn\u0103, fiind nop\u021bile mari, m\u0103 puteam repezi din c\u00e2nd \u00een c\u00e2nd, p\u00e2\u0219lind-o a\u0219a cam pe dup\u0103 toac\u0103, \u0219i tot \u00eenainte, sara pe lun\u0103, cu tovar\u0103\u0219ii mei la cl\u0103ci \u00een Humule\u0219ti, pe unde \u0219tiam noi, \u021bin\u00e2nd tot o fug\u0103, ca telegarii. [...] De la Neam\u021b la F\u0103lticeni \u0219i de la F\u0103lticeni la Neam\u021b era pentru noi atunci o palm\u0103 de loc. Dar acum se schimba vorba: o cale scurt\u0103 de dou\u0103 po\u0219te, de la F\u0103lticeni la Neam\u021b, nu se potrive\u0219te c-o \u00eentindere de \u0219ase po\u0219te, lungi \u0219i obositoare, de la Ia\u0219i p\u00e2n\u0103 la Neam\u021b. [...] Dar, vorba ceea: \u201eUrsul nu joac\u0103 de bun\u0103 voie\u201d. Mort-copt, trebui s\u0103 fac pe cheful mamei, s\u0103 plec f\u0103r\u0103 voin\u021b\u0103 \u0219i s\u0103 las ce-mi era drag! Dragu-mi era satul nostru cu Ozana cea frumos curg\u0103toare \u0219i limpede ca cristalul, \u00een care se oglinde\u0219te cu m\u00e2hnire Cetatea Neam\u021bului de at\u00e2tea veacuri! Dragi-mi erau tata \u0219i mama, fra\u021bii \u0219i surorile, \u0219i b\u0103ie\u021bii satului, tovar\u0103\u0219ii mei din copil\u0103rie, cu cari, \u00een zile geroase de iarn\u0103, m\u0103 desf\u0103tam pe ghea\u021b\u0103 \u0219i la s\u0103niu\u0219, iar vara, \u00een zile frumoase de s\u0103rb\u0103tori, c\u00e2nt\u00e2nd \u0219i chiuind, cutreieram dumbr\u0103vile \u0219i luncile umbroase, prundul cu \u0219tioalnele, \u021barinile cu holdele, c\u00e2mpul cu florile \u0219i m\u00e2ndrele dealuri, de dup\u0103 cari-mi z\u00e2mbeau zorile \u00een zburdalnica v\u00e2rst\u0103 a tinere\u021bei! Asemenea, dragi-mi erau \u0219ez\u0103torile, cl\u0103cile, horile \u0219i toate petrecerile din sat, la care luam parte cu cea mai mare \u00eensufle\u021bire! De piatr\u0103 de-ai fi fost, \u0219i nu se putea s\u0103 nu-\u021bi salte inima de bucurie c\u00e2nd auzeai, uneori \u00een puterea nop\u021bei, pe Mihai scripcariul din Humule\u0219ti umbl\u00e2nd tot satul c\u00e2te c-o droaie de fl\u0103c\u0103i dup\u0103 d\u00e2nsul \u0219i c\u00e2nt\u00e2nd. [...] \u0218i c\u00e2te \u0219i mai c\u00e2te nu c\u00e2nta Mihai l\u0103utariul din gur\u0103 \u0219i din scripca sa r\u0103sun\u0103toare, \u0219i c\u00e2te alte petreceri pline de veselie nu se f\u0103ceau pe la noi, de-\u021bi p\u0103rea tot anul zi de s\u0103rb\u0103toare! Vorba unei babe: \u201eS\u0103 dea D-zeu tot anul s\u0103 fie s\u0103rb\u0103tori \u0219i numai o zi de lucru, \u0219i atunci s\u0103 fie praznic \u0219i nunt\u0103\u201d. Apoi las\u0103-\u021bi, b\u0103iete, satul, cu tot farmecul frumuse\u021bilor lui, \u0219i pas\u0103 de te du \u00een loc strein \u0219i a\u0219a dep\u0103rtat, dac\u0103 te las\u0103 p\u00e2rdalnica de inim\u0103! \u0218i doar m\u0103 \u0219i sileam eu, \u00eentr-o p\u0103rere, s-o fac a \u00een\u021b\u0103lege pe mama c\u0103 pot s\u0103 m\u0103 boln\u0103vesc de dorul ei... \u0219i s\u0103 mor printre streini! c\u0103 v\u0103ru-mieu [...] Mogorogea, Gheorghe Tr\u0103snea, Nic\u0103 O\u0219lobanu \u0219i al\u021bii s-au l\u0103sat de \u00eenv\u0103\u021bat \u0219i, despre asta, tot m\u0103n\u00e2nc\u0103 p\u00e2ne pe l\u00e2ng\u0103 p\u0103rin\u021bii lor. Dar zadarnic\u0103 trud\u0103! Mama avea alte g\u00e2nduri; ea \u00eemi preg\u0103tea cu \u00eengrijire cele trebuitoare, zic\u00e2ndu-mi de la o vreme:\u201d\n\n\u201e\u2014 Ioane, cat\u0103 s\u0103 nu d\u0103m cinstea pe ru\u0219ine \u0219i pacea pe g\u00e2lceav\u0103!... Ai s\u0103 pleci unde zic eu. \u0218i Zaharia lui G\u00e2tlan merge cu tine. Luca Mo\u0219neagu, megie\u0219ul nostru, v\u0103 duce cu c\u0103ru\u021ba cu doi cai ca ni\u0219te zmei. Ia, mai bine, r\u0103pezi-te p\u00e2n\u0103 la el de vezi, gata-i de drum? C\u0103 m\u00e2ne des-diminea\u021b\u0103, cu ajutorul Domnului, pleca\u021bi.\n\u2014 Nu m\u0103 duc, mam\u0103, nu m\u0103 duc la Socola, m\u0103car s\u0103 m\u0103 omori! ziceam eu, pl\u00e2ng\u00e2nd cu zece r\u00e2nduri de lacrimi. Mai tr\u0103iesc ei oamenii \u0219i f\u0103r\u0103 popie.\u201d\n\n\u201e\u2014 Degeaba te mai sclifose\u0219ti, Ioane, r\u0103spunse mama cu nep\u0103sare! La mine nu se trec acestea... Pare-mi-se c\u0103 \u0219tii tu moarea mea... [\u2026]\nApoi cheam\u0103 pe tata \u0219i-i zice hot\u0103r\u00e2tor:\n\u2014 Spune-i \u0219i d-ta b\u0103ietului, omule, ce se cuvine, ca s\u0103-\u0219i ieie n\u0103dejdea \u0219i s\u0103-\u0219i caute de drum.\n\u2014 Mai r\u0103m\u00e2ne vorb\u0103 despre asta? zise tata posomor\u00e2t. Are s\u0103 urmeze cum \u0219tim noi, nu cum vrea el, c\u0103 doar nu-i de capul s\u0103u. C\u00e2nd m-ar bate numai at\u00e2ta grij\u0103, m\u0103i femeie, ce mi-ar fi? Dar eu m\u0103 lupt cu g\u00e2ndul cum s\u0103-i port de cheltuial\u0103, c\u0103ci banii nu se culeg de la trunchiu, ca surcelele. \u0218i la i\u0219ti vro \u0219ase, afar\u0103 de d\u00e2nsul, dac\u0103 r\u0103m\u00e2n acas\u0103, nu li mai trebuie nimica? Dar fiind el cel mai mare, norocul s\u0103u; trebuie s\u0103 c\u0103ut\u0103m a-l zbur\u0103t\u0103ci, c\u0103ci nu se \u0219tiu zilele omului! \u0218i poate vreodat\u0103 s\u0103 fie \u0219i el sprijin pentru i\u0219tialal\u021bi.\u201d\n(Ion Creang\u0103, *Amintiri din copil\u0103rie*)"
    },

    text2: {
      titlu: "Programul Erasmus+ (text informativ)",
      autor: "Raport anual Erasmus+ 2022",
      sursa: "www.op.europa.eu",
      tip: "nonliterar",
      corpus: "\u201eErasmus+ este programul UE \u00een domeniul educa\u0163iei, al form\u0103rii, al tineretului \u015fi sportului pentru perioada 2021-2027, care sprijin\u0103 at\u00e2t persoanele fizice, c\u00e2t \u015fi organiza\u0163iile. [...] Educa\u021bia, formarea, tineretul \u015fi sportul sunt domenii-cheie care ajut\u0103 cet\u0103\u021benii \u00een dezvoltarea lor personal\u0103 \u015fi profesional\u0103. Educa\u0163ia \u015fi formarea de \u00eenalt\u0103 calitate, favorabile incluziunii, precum \u0219i \u00eenv\u0103\u0163area informal\u0103 \u015fi nonformal\u0103 confer\u0103, \u00een ultim\u0103 instan\u021b\u0103, tinerilor \u015fi participan\u021bilor de toate v\u00e2rstele, calific\u0103rile \u015fi competen\u021bele necesare pentru participarea lor semnificativ\u0103 la societatea democratic\u0103 pentru \u00een\u021belegerea intercultural\u0103 \u015fi pentru tranzi\u0163ia de succes c\u0103tre pia\u021ba muncii. Patru priorit\u0103\u021bi generale \u2013 incluziunea, transformarea digital\u0103, combaterea schimb\u0103rilor climatice \u015fi participarea democratic\u0103 \u2013 sunt distribuite egal \u00een toate ac\u021biunile \u015fi sectoarele programului Erasmus+ pentru perioada 2021-2027.\u201d\n\n\u201eEuropenii din toate mediile beneficiaz\u0103 de oportunit\u0103\u021bile oferite de programul Erasmus+, acestea fiind experien\u021be care le schimb\u0103 cu adev\u0103rat via\u021ba, av\u00e2nd efecte pozitive asupra dezvolt\u0103rii profesionale, sociale, educa\u021bionale \u0219i personale. [...]\nProgramul \u00een cifre\nProgramul Erasmus a fost lansat \u00een 1987 \u0219i a vizat la \u00eenceput doar domeniul \u00eenv\u0103\u0163\u0103m\u00e2ntului superior. Structura actual\u0103 a programului a fost creat\u0103 \u00een 2014 pentru a include toate programele UE pentru educa\u021bie, formare, tineret \u015fi sport. Este unul dintre programele emblematice ale Comisiei Europene \u0219i o poveste de succes \u00eenc\u0103 de la \u00eenceput. Din 1987 \u0219i p\u00e2n\u0103 la sf\u00e2r\u015fitul anului 2022, num\u0103rul participan\u021bilor la activit\u0103\u021bi de mobilitate a ajuns la 13,7 milioane.\u201d\n(*Raport anual privind programul Erasmus+ pe 2022*, www.op.europa.eu)"
    },

    // ── SUBIECTUL I · A (38 puncte) ──
    subiectulIA: [
      {
        id: "v01_A1", nr: 1, punctaj: 2,
        cerinta: "Completează spațiile libere cu informațiile din textul 1.\nÎn anul ___________, Ion pleacă din satul natal, ___________, la școala de la Socola pentru a deveni preot.",
        tip: "completare",
        raspunsCorect: ["1855", "humulești", "humulesti"],
        raspunsCorectAfisat: "1855, Humulești",
        feedback: "Informațiile se găsesc direct în text: 'în toamna anului 1855' și 'din Humulești'."
      },
      {
        id: "v01_A2", nr: 2, punctaj: 2,
        cerinta: "Încercuiește litera corespunzătoare răspunsului corect, valorificând informațiile din textul 1.\nCel care duce băieții cu căruța la Socola este:",
        tip: "grila",
        optiuni: ["Gheorghe Trăsnea", "Luca Moșneagu", "Nică Oșlobanu", "Zaharia lui Gâtlan"],
        raspunsCorect: 1,
        feedback: "Răspunsul corect este b. Luca Moșneagu – 'Luca Moșneagu, megieșul nostru, vă duce cu căruța'."
      },
      {
        id: "v01_A3", nr: 3, punctaj: 2,
        cerinta: "Încercuiește litera corespunzătoare răspunsului corect, valorificând informațiile din textul 2.\nConform textului, numărul participanților din programul Erasmus a ajuns la 13,7 milioane până în anul:",
        tip: "grila",
        optiuni: ["2014", "2015", "2017", "2022"],
        raspunsCorect: 3,
        feedback: "Răspunsul corect este d. 2022 – 'Până la sfârșitul anului 2022, numărul participanților [...] a ajuns la 13,7 milioane'."
      },
      {
        id: "v01_A4", nr: 4, punctaj: 2,
        cerinta: "Încercuiește litera corespunzătoare răspunsului corect, valorificând informațiile din textul 2.\nÎn anii '90, programul Erasmus era destinat persoanelor din învățământul:",
        tip: "grila",
        optiuni: ["preșcolar", "primar", "gimnazial", "superior"],
        raspunsCorect: 3,
        feedback: "Răspunsul corect este d. superior – 'a fost lansat în 1987 și a vizat la început doar domeniul învățământului superior'."
      },
      {
        id: "v01_A5", nr: 5, punctaj: 6,
        cerinta: 'Notează caracterul Adevărat (A) sau Fals (F) pentru fiecare dintre următoarele afirmații, bazându-te pe textele citite.',
        tip: "adevarat_fals",
        enunturi: [
          { text: "Imaginea Cetății Neamțului se reflectă în apa Ozanei.", corect: true, sursa: "Textul 1" },
          { text: "Mama este indecisă în privința plecării fiului ei la școală.", corect: false, sursa: "Textul 1" },
          { text: "Distanța dintre Neamț și Iași este mai mică decât distanța de la Neamț la Fălticeni.", corect: false, sursa: "Textul 1" },
          { text: "O prioritate a programului Erasmus+ este combaterea schimbărilor climatice.", corect: true, sursa: "Textul 2" },
          { text: "Figura 1 reprezintă evoluția numărului de participanți la Erasmus între anii 1987 și 2024.", corect: false, sursa: "Textul 2" },
          { text: "La programul Erasmus+ pot participa doar tinerii.", corect: false, sursa: "Textul 2" }
        ],
        feedback: "Fiecare enunț se verifică direct din text. Mama NU este indecisă – este hotărâtă. Distanța Neamț–Iași este MAI MARE."
      },
      {
        id: "v01_A6", nr: 6, punctaj: 6,
        cerinta: "Precizează, în unu–trei enunțuri, o trăsătură a tatălui, identificată în fragmentul următor, și mijlocul de caracterizare utilizat: „Dar eu mă lupt cu gândul cum să-i port de cheltuială, căci banii nu se culeg de la trunchiu, ca surcelele.”",
        tip: "redactare",
        indicatii: "Numește trăsătura (ex: responsabil, înțelept, ferm) + mijlocul de caracterizare (directă/indirectă) + secvență din text.",
        barem: [
          { criteriu: "Precizarea trăsăturii tatălui", puncte: 2 },
          { criteriu: "Precizarea mijlocului de caracterizare", puncte: 1 },
          { criteriu: "Ilustrare cu secvență relevantă", puncte: 1 },
          { criteriu: "Ortografie și punctuație", puncte: 1 },
          { criteriu: "Încadrare în nr. de enunțuri", puncte: 1 }
        ],
        feedback: "Tatăl este responsabil/înțelept – reiese prin caracterizare indirectă (fapte, limbaj). Secvență: 'mă lupt cu gândul cum să-i port de cheltuială'."
      },
      {
        id: "v01_A7", nr: 7, punctaj: 6,
        cerinta: "Prezintă, în minimum 30 de cuvinte, o diferență între limbajul utilizat în textul 1 și cel din textul 2, valorificând câte o secvență relevantă din fiecare text.",
        tip: "redactare",
        indicatii: "Textul 1: limbaj popular/expresiv/figurat. Textul 2: limbaj specializat/științific. Citează din fiecare.",
        barem: [
          { criteriu: "Precizarea diferenței de limbaj", puncte: 2 },
          { criteriu: "Secvență relevantă din textul 1", puncte: 1 },
          { criteriu: "Secvență relevantă din textul 2", puncte: 1 },
          { criteriu: "Norme de exprimare", puncte: 1 },
          { criteriu: "Min. 30 cuvinte", puncte: 1 }
        ],
        feedback: "Textul 1 folosește limbaj popular-expresiv ('banii nu se culeg de la trunchiu'), textul 2 – limbaj oficial-specializat ('mobilitate transfrontalieră')."
      },
      {
        id: "v01_A8", nr: 8, punctaj: 6,
        cerinta: "Ce simte băiatul înaintea plecării la Socola? Justifică-ți, în 50–100 de cuvinte, răspunsul la întrebarea dată, prin referire la o emoție, valorificând textul 1.",
        tip: "redactare",
        indicatii: "Emoția: tristețe/dor/teamă/nostalgie. Citează din text și explică.",
        barem: [
          { criteriu: "Menționarea răspunsului", puncte: 1 },
          { criteriu: "Justificarea prin emoție", puncte: 1 },
          { criteriu: "Valorificarea textului", puncte: 2 },
          { criteriu: "Norme de exprimare", puncte: 1 },
          { criteriu: "Încadrare 50-100 cuvinte", puncte: 1 }
        ],
        feedback: "Băiatul simte tristețe și dor – 'plângând cu zece rânduri de lacrimi', 'ochii înecați în lacrâmi'."
      },
      {
        id: "v01_A9", nr: 9, punctaj: 6,
        cerinta: "Asociază fragmentul din opera literară „Amintiri din copilărie” de Ion Creangă cu un alt text literar studiat, prezentând o valoare comună, prin referire la câte o secvență din fiecare text.",
        tip: "redactare",
        indicatii: "Valori posibile: familia, educația, tradițiile. Numește alt text + autor + secvență din fiecare.",
        barem: [
          { criteriu: "Numirea valorii", puncte: 1 },
          { criteriu: "Titlul și autorul textului asociat", puncte: 1 },
          { criteriu: "Prezentarea valorii comune cu secvențe", puncte: 2 },
          { criteriu: "Norme de exprimare", puncte: 1 },
          { criteriu: "Încadrare 50-100 cuvinte", puncte: 1 }
        ],
        feedback: "Ex: Valoarea familiei – în 'Amintiri din copilărie' (Ion Creangă) și 'Popa Tanda' sau 'Bunicul' / 'Bunica'."
      }
    ],

    // ── SUBIECTUL I · B (32 puncte) ──
    subiectulIB: [
      {
        id: "v01_B1", nr: 1, punctaj: 2,
        cerinta: "Sunt corect despărțite în silabe ambele cuvinte din seria:",
        tip: "grila",
        optiuni: [
          "vârs-te-le; pe-ri-oa-dă",
          "vâr-ste-le; pe-ri-oa-dă",
          "vârs-te-le; pe-rioa-dă",
          "vâr-ste-le; pe-rioa-dă"
        ],
        raspunsCorect: 0,
        feedback: "Răspunsul corect: a. vârs-te-le (consoana rs rămâne unită), pe-ri-oa-dă (hiat e-i, diftong oa)."
      },
      {
        id: "v01_B2", nr: 2, punctaj: 2,
        cerinta: "Cuvintele subliniate în secvența „satul nostru cu Ozana cea frumos (1) curgătoare (2)” s-au format prin:",
        tip: "grila",
        optiuni: [
          "derivare (1), derivare (2)",
          "derivare (1), conversiune (2)",
          "conversiune (1), derivare (2)",
          "conversiune (1), conversiune (2)"
        ],
        raspunsCorect: 2,
        feedback: "Răspunsul corect: c. 'frumos' = adv. folosit ca adj. (conversiune); 'curgătoare' = derivat cu sufix."
      },
      {
        id: "v01_B3", nr: 3, punctaj: 2,
        cerinta: "Seria care cuprinde formele corecte de plural pentru „câmpul” și „Raport” este:",
        tip: "grila",
        optiuni: [
          "câmpii, raporturi",
          "câmpuri, raporturi",
          "câmpiile, rapoarte",
          "câmpurile, rapoarte"
        ],
        raspunsCorect: 3,
        feedback: "Răspunsul corect: d. câmpurile (sensul de teren – plural -uri, articulate); rapoarte (plural neregulat)."
      },
      {
        id: "v01_B4", nr: 4, punctaj: 2,
        cerinta: "Sensul secvenței „ca să-și ia nădejdea” este:",
        tip: "grila",
        optiuni: [
          "să nu-și piardă credința",
          "să primească ajutor",
          "să renunțe la speranță",
          "să spere în continuare"
        ],
        raspunsCorect: 2,
        feedback: "Răspunsul corect: c. a-și lua nădejdea = a renunța la speranță."
      },
      {
        id: "v01_B5", nr: 5, punctaj: 6,
        cerinta: "Selectează trei forme verbale nepersonale diferite din textul 1, pe care le vei preciza in tabel.",
        tip: "tabel_completare",
        raspunsCorect: [
          { verb: "a spune", forma: "infinitiv" },
          { verb: "vestind / strigând", forma: "gerunziu" },
          { verb: "la pornit / înhămați", forma: "supin / participiu" }
        ],
        feedback: "Forme nepersonale: a spune (infinitiv), vestind/strigând (gerunziu), la pornit (supin), înhămați (participiu)."
      },
      {
        id: "v01_B6", nr: 6, punctaj: 6,
        cerinta: "Alcătuiește o propoziție afirmativă, în care substantivul „minte” să fie complement direct (1) și o propoziție negativă, în care adverbul „mâine” să fie atribut (2).",
        tip: "redactare",
        indicatii: "(1) Ex: 'Andrei are o minte sclipitoare.' (2) Ex: 'Nu am emoții pentru testul de mâine.'",
        barem: [
          { criteriu: "Propoziție afirmativă corectă", puncte: 1 },
          { criteriu: "'minte' = complement direct", puncte: 1 },
          { criteriu: "Propoziție negativă corectă", puncte: 1 },
          { criteriu: "'mâine' = atribut", puncte: 1 },
          { criteriu: "Norme de exprimare (2 × 1p)", puncte: 2 }
        ],
        feedback: "'minte' ca CD: 'Are o minte ageră.' (pe cine/ce are?). 'mâine' ca atribut: 'Tema de mâine e grea.' (care temă?)."
      },
      {
        id: "v01_B7", nr: 7, punctaj: 6,
        cerinta: "Transcrie propozițiile subordonate din fraza, precizând felul acestora:\n„Dar eu mă lupt cu gândul cum să-i port de cheltuială, căci banii nu se culeg de la trunchiu, ca surcelele.”",
        tip: "redactare",
        indicatii: "Propoziția 1 = atributivă. Propoziția 2 = circumstanțială de cauză.",
        barem: [
          { criteriu: "Transcrierea propoziției 1", puncte: 1 },
          { criteriu: "Transcrierea propoziției 2", puncte: 1 },
          { criteriu: "Felul propoziției 1 (atributivă)", puncte: 2 },
          { criteriu: "Felul propoziției 2 (circ. de cauză)", puncte: 2 }
        ],
        feedback: "'cum să-i port de cheltuială' = atributivă; 'căci banii nu se culeg...' = circumstanțială de cauză."
      },
      {
        id: "v01_B8", nr: 8, punctaj: 6,
        cerinta: "Rescrie corect mesajul de mai jos, corectând toate abaterile:\n„Prefer mai bine să discutăm despre cele peste douăzeci și două mii de activități pentru tinerii Europeni, solitari cu cei afectați de climă. Vorbim, așadar, decât de 60%.”",
        tip: "redactare",
        indicatii: "Greșeli: 'prefer mai bine' (pleonasm), 'douăzeci și două mii' -> 'douăzeci și două de mii', 'Europeni', 'solitari' -> 'solidari', 'decât' -> 'doar/numai'.",
        barem: [
          { criteriu: "0 greșeli = 6p; 1 = 5p; 2 = 4p; 3 = 3p; 4 = 2p; 5 = 1p; 6+ = 0p", puncte: 6 }
        ],
        feedback: "Forma corectă: 'Prefer să discutăm despre cele peste douăzeci și două de mii de activități... europeni, solidari... doar de 60%'."
      }
    ],

    // ── SUBIECTUL II (20 puncte) ──
    subiectulII: {
      cerinta: "Crezi că deciziile importante pentru viitorul unui copil trebuie luate exclusiv de către părinți? Scrie un text argumentativ, de minimum 150 de cuvinte, valorificând textul 1.",
      tip: "argumentativ",
      punctajContinut: 12,
      punctajRedactare: 8,
      criteriiRedactare: [
        "Marcarea corectă a paragrafelor – 1 punct",
        "Coerența textului – 1 punct",
        "Proprietatea termenilor folosiți – 1 punct",
        "Corectitudinea gramaticală – 1 punct",
        "Claritatea exprimării ideilor – 1 punct",
        "Ortografia – 1 punct",
        "Respectarea normelor de punctuație – 1 punct",
        "Lizibilitatea – 1 punct"
      ],
      nota: "Punctajul pentru redactare se acordă doar în cazul în care compunerea are minimum 150 de cuvinte și dezvoltă subiectul."
    }
  },

  // ========================================================================
  // VARIANTA 2 – Tudoran + Racoviță
  // ========================================================================
  {
    id: "v02_tudoran_racovita",
    titlu: "Varianta Tudoran – Racoviță",
    sursa: "Model de antrenament suplimentar",

    text1: {
      titlu: "Toate pânzele sus! – Radu Tudoran (fragment)",
      autor: "Radu Tudoran",
      sursa: "Toate pânzele sus!",
      tip: "literar",
      corpus: "Ajung\u00e2nd \u00een marginea maidanului, unde mul\u021bimea se r\u0103rea, Anton Lupan \u00eentoarse capul spre \u00eenso\u021bitorul s\u0103u \u0219i-l \u00eentreb\u0103:\n\u2014 Cum te cheam\u0103, fl\u0103c\u0103ule?\nAcesta vru s\u0103 m\u00e2r\u00e2ie, ar\u021b\u0103gos, \u00eens\u0103 ridic\u00e2nd ochii \u00eent\u00e2lni un z\u00e2mbet at\u00e2t de deschis \u0219i de fr\u0103\u021besc, \u00eenc\u00e2t se sim\u021bi c\u00e2\u0219tigat pe loc.\n\u2014 Ieremia m\u0103 cheam\u0103! r\u0103spunse \u00eencrez\u0103tor.\n\u2014 Ia spune, Ieremie, ai vreo treab\u0103 aici \u00een t\u00e2rg?\n\u2014 P\u00e2n\u0103 una alta nu, da' acu, dac-or \u00eenverzi copacii, g\u00e2ndesc s\u0103-mi cump\u0103r o foarfec\u0103 \u0219i s\u0103 m-apuc de t\u0103iat frunz\u0103 la c\u00e2ini... Omul era chiar mai \u00eencercat dec\u00e2t b\u0103nuise el. Se cuvenea s\u0103 nu-l mai scape din m\u00e2ini, altul pe m\u0103sura lui fiind greu de g\u0103sit."
    },

    text2: {
      titlu: "Spre Polul Sud – Emil Racoviță (fragment)",
      autor: "Emil Racoviță",
      sursa: "Spre Polul Sud",
      tip: "nonliterar",
      corpus: "\u0218i \u00een \u021binuturile antarctice sunt animale. Ca s\u0103 ajungi la ele, trebuie s\u0103 str\u0103ba\u021bi Oceanul Atlantic \u00een tot lungul lui. Aceast\u0103 distan\u021b\u0103 enorm\u0103 a fost parcurs\u0103 de Belgica f\u0103r\u0103 s\u0103 se zoreasc\u0103. La aceast\u0103 expedi\u021bie au luat parte nou\u0103sprezece persoane. \u021ainta expedi\u021biei nu era s\u0103 ating\u0103 cu orice pre\u021b Polul Sud, \u00een paguba observa\u021biilor \u0219tiin\u021bifice... Numaidec\u00e2t ne-a fost dat s\u0103 ne \u00eencredin\u021b\u0103m c\u0103 faima de care se bucur\u0103 vecin\u0103t\u0103\u021bile Capului Horn era \u00eendrept\u0103\u021bit\u0103."
    },

    subiectulIA: [
      {
        id: "v02_A1", nr: 1, punctaj: 2,
        cerinta: "Notează, din textul 1, doi termeni care denumesc localități prin care a trecut Ieremia.",
        tip: "completare",
        raspunsCorect: ["stambul", "salonic", "pireu"],
        raspunsCorectAfisat: "Stambul, Salonic, Pireu",
        feedback: "Ieremia menționează: 'Stambul', 'Salonic', 'Pireu'."
      },
      {
        id: "v02_A2", nr: 2, punctaj: 2,
        cerinta: "Încercuiește litera corespunzătoare răspunsului corect, valorificând informațiile din textul 1. Meseria lui Ieremia este cea de:",
        tip: "grila",
        optiuni: ["cioban", "dulgher", "negustor", "pescar"],
        raspunsCorect: 1,
        feedback: "Răspunsul corect: b. dulgher – 'Sunt marangoz, domnule' (marangoz = dulgher)."
      },
      {
        id: "v02_A3", nr: 3, punctaj: 2,
        cerinta: "Încercuiește litera corespunzătoare răspunsului corect. La expediție au participat:",
        tip: "grila",
        optiuni: ["șase persoane", "șapte persoane", "nouăsprezece persoane", "treizeci și patru de persoane"],
        raspunsCorect: 2,
        feedback: "Răspunsul corect: c. nouăsprezece."
      },
      {
        id: "v02_A4", nr: 4, punctaj: 2,
        cerinta: "Încercuiește litera corespunzătoare răspunsului corect. Pentru a face față furtunilor, Racoviță prinde de masă:",
        tip: "grila",
        optiuni: ["borcanele", "buteliile", "microscopul", "termometrele"],
        raspunsCorect: 2,
        feedback: "Răspunsul corect: c. microscopul."
      },
      {
        id: "v02_A5", nr: 5, punctaj: 6,
        cerinta: "Notează caracterul Adevărat (A) sau Fals (F) pentru fiecare dintre următoarele afirmații.",
        tip: "adevarat_fals",
        enunturi: [
          { text: "Anton Lupan și Ieremia fac cunoștință pe un vapor.", corect: false, sursa: "Textul 1" },
          { text: "Ieremia mărturisește că nu știe carte deloc.", corect: false, sursa: "Textul 1" },
          { text: "Anton Lupan ajunge să îl aprecieze pe Ieremia.", corect: true, sursa: "Textul 1" },
          { text: "Belgica străbate Oceanul Atlantic fără grabă.", corect: true, sursa: "Textul 2" },
          { text: "Scopul expediției este de a atinge cu orice preț Polul Sud.", corect: false, sursa: "Textul 2" },
          { text: "Corabia pleacă din golful San Juan în 13 ianuarie.", corect: true, sursa: "Textul 2" }
        ],
        feedback: "Fals: se întâlnesc pe maidan. Fals: spune 'Câtă a uitat meșterul meu'."
      },
      {
        id: "v02_A6", nr: 6, punctaj: 6,
        cerinta: "Precizează, în unu–trei enunțuri, o trăsătură a unui personaj și mijlocul de caracterizare utilizat, ilustrându-l relevant.",
        tip: "redactare",
        indicatii: "Trăsătură fizică (ex: înalt, dizarmonic) + caracterizare indirectă.",
        barem: [
          { criteriu: "Precizarea trăsăturii", puncte: 2 },
          { criteriu: "Mijlocul de caracterizare", puncte: 1 },
          { criteriu: "Secvență relevantă", puncte: 1 },
          { criteriu: "Ortografie și punctuație", puncte: 1 },
          { criteriu: "Încadrare în nr. enunțuri", puncte: 1 }
        ],
        feedback: "Ieremia este descris indirect: 'înalt din cale afară', 'un cap de păsăroi'."
      },
      {
        id: "v02_A7", nr: 7, punctaj: 6,
        cerinta: "Prezintă, în minimum 30 de cuvinte, un element de conținut comun celor două texte.",
        tip: "redactare",
        indicatii: "Element comun: călătoria pe mare / aventura.",
        barem: [
          { criteriu: "Precizarea elementului comun", puncte: 2 },
          { criteriu: "Secvență din textul 1", puncte: 1 },
          { criteriu: "Secvență din textul 2", puncte: 1 },
          { criteriu: "Norme de exprimare", puncte: 1 },
          { criteriu: "Min. 30 cuvinte", puncte: 1 }
        ],
        feedback: "Element comun: călătoria pe mare. Ambii explorează tărâmuri necunoscute."
      },
      {
        id: "v02_A8", nr: 8, punctaj: 6,
        cerinta: "Crezi că reușita unei călătorii depinde de pregătirea atentă a acesteia?",
        tip: "redactare",
        indicatii: "Da – pregătirea contează: provizii, aparatura.",
        barem: [
          { criteriu: "Menționarea răspunsului", puncte: 1 },
          { criteriu: "Justificarea răspunsului", puncte: 1 },
          { criteriu: "Valorificarea textului 2", puncte: 2 },
          { criteriu: "Norme de exprimare", puncte: 1 },
          { criteriu: "Încadrare 50-100 cuvinte", puncte: 1 }
        ],
        feedback: "Pregătirea atentă a salvat expediția (fixarea lucrurilor de masă)."
      },
      {
        id: "v02_A9", nr: 9, punctaj: 6,
        cerinta: "Asociază fragmentul din opera „Toate pânzele sus!” cu un alt text literar studiat, prezentând o valoare comună.",
        tip: "redactare",
        indicatii: "Valori: prietenia, curajul, aventura.",
        barem: [
          { criteriu: "Numirea valorii", puncte: 1 },
          { criteriu: "Titlul și autorul textului asociat", puncte: 1 },
          { criteriu: "Prezentarea valorii comune", puncte: 2 },
          { criteriu: "Norme de exprimare", puncte: 1 },
          { criteriu: "Încadrare 50-100 cuvinte", puncte: 1 }
        ],
        feedback: "Ex: Valoarea curajului – în 'Toate pânzele sus!' și 'Aventurile lui Tom Sawyer'."
      }
    ],

    subiectulIB: [
      {
        id: "v02_B1", nr: 1, punctaj: 2,
        cerinta: "Sunt despărțite corect în silabe ambele cuvinte din seria:",
        tip: "grila",
        optiuni: [
          "mij-loa-ce-le; spe-ri-ați",
          "mij-loa-ce-le; spe-riați",
          "mi-jloa-ce-le; spe-ri-ați",
          "mi-jloa-ce-le; spe-riați"
        ],
        raspunsCorect: 0,
        feedback: "Răspunsul corect: a. mij-loa-ce-le (diftong oa), spe-ri-ați (hiat i-a)."
      },
      {
        id: "v02_B2", nr: 2, punctaj: 2,
        cerinta: "Seria care conține doar cuvinte derivate este:",
        tip: "grila",
        optiuni: [
          "„iuțeală”, „printre”",
          "„măsura”, „animale”",
          "„micuț”, „corăbioară”",
          "„vreodată”, „întruna”"
        ],
        raspunsCorect: 2,
        feedback: "Răspunsul corect: c. micuț (derivat), corăbioară (derivat)."
      },
      {
        id: "v02_B3", nr: 3, punctaj: 2,
        cerinta: "Secvența subliniată „să m-apuc de tăiat frunză la câini” are sensul de:",
        tip: "grila",
        optiuni: [
          "a decupa hârtia",
          "a hrăni câinii",
          "a munci din greu",
          "a pierde vremea"
        ],
        raspunsCorect: 3,
        feedback: "Răspunsul corect: d. a tăia frunză la câini = a pierde vremea."
      },
      {
        id: "v02_B4", nr: 4, punctaj: 2,
        cerinta: "Sunt omonime ambele cuvinte din seria:",
        tip: "grila",
        optiuni: [
          "«aveam o colecție literară»; El s-a apucat de citit.",
          "«or fi supărați pe noi»; Toți copiii erau fericiți.",
          "«părăsirăm golful San Juan»; Golful este un joc sportiv pe iarbă.",
          "«Vântul sufla întruna vijelios»; El sufla emoționat în lumânări."
        ],
        raspunsCorect: 2,
        feedback: "Răspunsul corect: c. golful (formă de relief) vs. golful (joc sportiv) = omonime."
      },
      {
        id: "v02_B5", nr: 5, punctaj: 6,
        cerinta: "Selectează din text trei substantive aflate în cazuri diferite, pe care le vei preciza.",
        tip: "tabel_completare",
        raspunsCorect: [
          { substantiv: "cârmă", caz: "Acuzativ" },
          { substantiv: "cabine", caz: "Nominativ" },
          { substantiv: "ofițerilor", caz: "Dativ" }
        ],
        feedback: "cârmă (Acuzativ), cabine (Nominativ), ofițerilor (Dativ)."
      },
      {
        id: "v02_B6", nr: 6, punctaj: 6,
        cerinta: "Alcătuiește o propoziție afirmativă cu „a fi” cu valoare predicativă (1) și una negativă cu „greu” ca nume predicativ (2).",
        tip: "redactare",
        indicatii: "(1) Ex: 'Ei sunt în curte.' (a fi = verb predicativ). (2) Ex: 'Exercițiul nu este greu.'",
        barem: [
          { criteriu: "Propoziție afirmativă corectă", puncte: 1 },
          { criteriu: "'a fi' cu valoare predicativă", puncte: 1 },
          { criteriu: "Propoziție negativă corectă", puncte: 1 },
          { criteriu: "'greu' ca nume predicativ", puncte: 1 },
          { criteriu: "Norme de exprimare (2 × 1p)", puncte: 2 }
        ],
        feedback: "'a fi' predicativ = se află. 'greu' ca NP: 'Testul nu este greu.'"
      },
      {
        id: "v02_B7", nr: 7, punctaj: 6,
        cerinta: "Transcrie propozițiile din fraza următoare și precizează felul acestora.",
        tip: "redactare",
        indicatii: "Identifică propozițiile principale și subordonate.",
        barem: [
          { criteriu: "Transcrierea propozițiilor", puncte: 3 },
          { criteriu: "Precizarea felului fiecăreia", puncte: 3 }
        ],
        feedback: "Ex: 'ce era menită a ne distra...' = subordonată atributivă."
      },
      {
        id: "v02_B8", nr: 8, punctaj: 6,
        cerinta: "Scrie forma corectă a cuvintelor din enunț. (deodată/de odată, înnorat/înorat)",
        tip: "completare_multipla",
        raspunsuri: [
          { nr: 1, corect: "deodată" },
          { nr: 2, corect: "înnorat" },
          { nr: 3, corect: "cenușii" },
          { nr: 4, corect: "s-a" },
          { nr: 5, corect: "aruncându-și" },
          { nr: 6, corect: "plajei" }
        ],
        feedback: "Deodată, înnorat, cenușii, s-a, aruncându-și, plajei."
      }
    ],

    subiectulII: {
      cerinta: "Scrie un text narativ, de minimum 150 de cuvinte, în care să prezinți o întâmplare dintr-o excursie, incluzând o secvență descriptivă și una dialogată.",
      tip: "narativ",
      punctajContinut: 12,
      punctajRedactare: 8,
      criteriiRedactare: [
        "Marcarea corectă a paragrafelor – 1 punct",
        "Coerența textului – 1 punct",
        "Proprietatea termenilor folosiți – 1 punct"
      ],
      nota: "Compunerea nu va fi precedată de titlu sau motto."
    }
  }
,

  {
    "id": "v03_antrenament",
    "titlu": "Testul de antrenament nr. 3",
    "sursa": "Creangă (Pupăza)",
    "text1": {
      "titlu": "Amintiri din copilărie",
      "autor": "Ion Creangă",
      "sursa": "Amintiri...",
      "tip": "literar",
      "corpus": "Mă trezește mama într-o dimineață din somn, cu vai-nevoie, zicându-mi: Scoală, duglișule, înainte de răsăritul soarelui; iar vrei să te spurce pupăza! spurcat pe inima gol, spurcat?... Să te prind eu, spurcăciune, că te-oi spurca eu pe tine!... Când mă scol, ce să văd? Soarele răsărise binișor, de vreo două sulițe... Auzi tu! să te spurce pupăza, lucru mare... Zic eu în gândul meu: las' că v-oi prinde eu, spurcaților! Și pândind când a ieșit pupăza să-și caute hrana, mă sui în tei, bag mâna în scorbură și o prind pe de-a-ntregul."
    },
    "text2": {
      "titlu": "Păsările din România",
      "autor": "Articol științific",
      "sursa": "Ghid ornitologic",
      "tip": "nonliterar",
      "corpus": "Pupăza (Upupa epops) este o pasăre insectivoră, migratoare, cu un penaj viu colorat și un cioc lung și recurbat. Se găsește în Europa, Asia și Africa de Nord. În România, sosește la sfârșitul lunii martie sau începutul lui aprilie și cuibărește în scorburi de arbori, grajduri sau grămezi de pietre. Este recunoscută după cântecul ei specific „pu-pu-pu”, pe care îl repetă în mod monoton. Deși este o pasăre frumoasă, în popor i se mai spune și „pasărea spurcată” din cauza mirosului neplăcut pe care puii și cuibul îl emană ca mecanism de apărare împotriva prădătorilor."
    },
    "subiectulIA": [
      {
        "id": "v3a1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Notează două elemente de timp din primul text.",
        "tip": "completare",
        "raspunsCorect": [
          "dimineață",
          "răsăritul"
        ],
        "raspunsCorectAfisat": "într-o dimineață, răsăritul soarelui",
        "feedback": "Dimineață, înainte de răsăritul soarelui."
      },
      {
        "id": "v3a2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Precizează hrana principală a pupezei din textul 2.",
        "tip": "completare",
        "raspunsCorect": [
          "insecte",
          "insectivoră"
        ],
        "raspunsCorectAfisat": "insecte (este insectivoră)",
        "feedback": "Pupăza este o pasăre insectivoră."
      },
      {
        "id": "v3a3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "În textul 1, băiatul se trezește când:",
        "tip": "grila",
        "optiuni": [
          "încă e întuneric",
          "soarele se pregătește să apună",
          "soarele răsărise deja",
          "ploua"
        ],
        "raspunsCorect": 2,
        "feedback": "c. soarele răsărise binișor"
      },
      {
        "id": "v3a4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Zgomotul scos de pupăză este descris ca:",
        "tip": "grila",
        "optiuni": [
          "melodios",
          "puternic",
          "monoton",
          "vesel"
        ],
        "raspunsCorect": 2,
        "feedback": "c. repetă în mod monoton"
      },
      {
        "id": "v3a5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Notează Adevărat (A) / Fals (F):",
        "tip": "adevarat_fals",
        "enunturi": [
          {
            "text": "Băiatul s-a trezit imediat cum l-a strigat mama.",
            "corect": false,
            "sursa": "T1"
          },
          {
            "text": "Băiatul o prinde pe pupăză după ce aceasta iese după hrană.",
            "corect": true,
            "sursa": "T1"
          },
          {
            "text": "Pupăza este sedentară în România.",
            "corect": false,
            "sursa": "T2"
          },
          {
            "text": "Mirosul neplăcut este un mecanism de apărare.",
            "corect": true,
            "sursa": "T2"
          },
          {
            "text": "Pupăza își face cuibul pe pământ.",
            "corect": false,
            "sursa": "T2"
          },
          {
            "text": "Copilul prinde pupăza din prima încercare, fără efort.",
            "corect": false,
            "sursa": "T1"
          }
        ],
        "feedback": "Verifică atent faptele."
      },
      {
        "id": "v3a6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Menționează o trăsătură morală a băiatului și secvența pe care e bazată.",
        "tip": "redactare",
        "indicatii": "ex: neastâmpărat, răzbunător",
        "barem": [
          {
            "criteriu": "Numirea trăsăturii",
            "puncte": 2
          },
          {
            "criteriu": "Secvența text",
            "puncte": 2
          },
          {
            "criteriu": "Redactare",
            "puncte": 2
          }
        ],
        "feedback": "Ambițios: „las' că v-oi prinde eu”"
      },
      {
        "id": "v3a7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Prezintă în minimum 30 de cuvinte un element comun textelor.",
        "tip": "redactare",
        "indicatii": "Pupăza ca prezență și mirosul.",
        "barem": [
          {
            "criteriu": "Elementul",
            "puncte": 2
          },
          {
            "criteriu": "T1 + T2",
            "puncte": 2
          },
          {
            "criteriu": "Redactare",
            "puncte": 2
          }
        ],
        "feedback": "Ambii autori prezintă pupăza și ideea de „spurcat”."
      },
      {
        "id": "v3a8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Consideri că poveștile din copilărie îți marchează reacțiile viitoare?",
        "tip": "redactare",
        "indicatii": "Motivare + părere.",
        "barem": [
          {
            "criteriu": "Opinie",
            "puncte": 2
          },
          {
            "criteriu": "Motivare",
            "puncte": 2
          },
          {
            "criteriu": "Redactare",
            "puncte": 2
          }
        ],
        "feedback": "Da, credințele îi afectează."
      },
      {
        "id": "v3a9",
        "nr": 9,
        "punctaj": 6,
        "cerinta": "Asociază fragmentul cu o operă citită.",
        "tip": "redactare",
        "indicatii": "ex. Tom Sawyer.",
        "barem": [
          {
            "criteriu": "Valoare/Temă",
            "puncte": 2
          },
          {
            "criteriu": "Titlu+Autor",
            "puncte": 2
          },
          {
            "criteriu": "Explicație",
            "puncte": 2
          }
        ],
        "feedback": "Aventurile lui Tom Sawyer (Mark Twain)."
      }
    ],
    "subiectulIB": [
      {
        "id": "v3b1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Despărțite corect:",
        "tip": "grila",
        "optiuni": [
          "ră-să-ri-tul, a-fri-ca",
          "ră-să-ri-tul, a-fri-ca",
          "ră-să-ri-tul, pu-pă-za",
          "răs-ă-ri-tul, pu-pă-za"
        ],
        "raspunsCorect": 2,
        "feedback": "c. ră-să-ri-tul, pu-pă-za."
      },
      {
        "id": "v3b2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Derivate:",
        "tip": "grila",
        "optiuni": [
          "binișor, păsăroi",
          "soarele, dimineață",
          "spurcat, somn",
          "cuib, piatră"
        ],
        "raspunsCorect": 0,
        "feedback": "a. binișor, păsăroi (cu sufix)."
      },
      {
        "id": "v3b3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "Antonim pentru „monoton”:",
        "tip": "grila",
        "optiuni": [
          "plictisitor",
          "variat",
          "unic",
          "puternic"
        ],
        "raspunsCorect": 1,
        "feedback": "b. variat/diversificat."
      },
      {
        "id": "v3b4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Timpul verbelor „a ieșit”, „să prind”:",
        "tip": "grila",
        "optiuni": [
          "perfect simplu, conjunctiv",
          "perfect compus, conjunctiv",
          "imperfect, indicativ",
          "compus, imperativ"
        ],
        "raspunsCorect": 1,
        "feedback": "b. perfect compus / conjunctiv."
      },
      {
        "id": "v3b5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Notează 3 substantive caz Nom din textul 1.",
        "tip": "tabel_completare",
        "raspunsCorect": [
          {
            "verb": "mama",
            "forma": "Nom"
          },
          {
            "verb": "soarele",
            "forma": "Nom"
          },
          {
            "verb": "pupăza",
            "forma": "Nom"
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v3b6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Alcătuiește o prop.",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "Corect",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v3b7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Felul propozițiilor:",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "Fel",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v3b8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Corectează:",
        "tip": "completare_multipla",
        "raspunsuri": [
          {
            "nr": 1,
            "corect": "eu"
          },
          {
            "nr": 2,
            "corect": "tu"
          },
          {
            "nr": 3,
            "corect": "el"
          }
        ],
        "feedback": "-"
      }
    ],
    "subiectulII": {
      "cerinta": "Scrie o compunere narativă despre o zi din copilărie.",
      "tip": "narativ",
      "punctajContinut": 12,
      "punctajRedactare": 8,
      "criteriiRedactare": []
    }
  },
  {
    "id": "v04_antrenament",
    "titlu": "Testul de antrenament nr. 4",
    "sursa": "La Medeleni",
    "text1": {
      "titlu": "La Medeleni (Vacanța)",
      "autor": "Ionel Teodoreanu",
      "sursa": "La Medeleni",
      "tip": "literar",
      "corpus": "Vacanța cea mare începea de obicei cu o călătorie lungă, prăfoasă și plină de nerăbdare. Dănuț stătea cu fruntea lipită de geamul trenului, numărând stâlpii de telegraf care fugeau în urmă. [...] De la gară, boierii Deleanu îi așteptau cu trăsura. Olgruța, zvăpăiată cum era, a sărit direct în brațele bătrânului vizitiu. Când au ajuns la conac, mirosul de dulceață și tei i-a învăluit ca o îmbrățișare maternă."
    },
    "text2": {
      "titlu": "Beneficiile naturii asupra reducerii stresului la copii",
      "autor": "Studiu Psihologic",
      "sursa": "Revista",
      "tip": "nonliterar",
      "corpus": "Studiile recente demonstrează o legătură clară între mediul natural și sănătatea mintală a tinerilor. Timpul petrecut în aer liber, în mod special în zonele verzi, contribuie semnificativ la scăderea nivelului de cortizol. Contactul direct cu natura, fie prin jocuri pe iarbă sau simple plimbări printre plante aromatice (precum teiul), induce o stare de calm și relaxare."
    },
    "subiectulIA": [
      {
        "id": "v4a1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Notează două percepții senzoriale (ex. miros).",
        "tip": "completare",
        "raspunsCorect": [
          "dulceață",
          "tei"
        ],
        "raspunsCorectAfisat": "miros de dulceață și tei",
        "feedback": "-"
      },
      {
        "id": "v4a2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Ce hormon este asociat cu stresul?",
        "tip": "completare",
        "raspunsCorect": [
          "cortizol"
        ],
        "raspunsCorectAfisat": "cortizol",
        "feedback": "-"
      },
      {
        "id": "v4a3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "Unde se lipea Dănuț cu fruntea?",
        "tip": "grila",
        "optiuni": [
          "de trăsură",
          "de geamul trenului",
          "de vizitiu",
          "de scaun"
        ],
        "raspunsCorect": 1,
        "feedback": "b."
      },
      {
        "id": "v4a4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Ce efect are natura asupra copiilor?",
        "tip": "grila",
        "optiuni": [
          "crește agitația",
          "stare de calm",
          "îmbunătățește vederea",
          "iritație"
        ],
        "raspunsCorect": 1,
        "feedback": "b. "
      },
      {
        "id": "v4a5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Adevărat (A) / Fals (F):",
        "tip": "adevarat_fals",
        "enunturi": [
          {
            "text": "Călătoria era prăfoasă.",
            "corect": true,
            "sursa": "T1"
          },
          {
            "text": "Olguța era liniștită.",
            "corect": false,
            "sursa": "T1"
          },
          {
            "text": "Natura e calmantă.",
            "corect": true,
            "sursa": "T2"
          },
          {
            "text": "Teiul e menționat.",
            "corect": true,
            "sursa": "T1, T2"
          },
          {
            "text": "Cortizolul e benefic stresului.",
            "corect": false,
            "sursa": "T2"
          },
          {
            "text": "Copiii stateau acasa in vacanta.",
            "corect": false,
            "sursa": "T1"
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Prezintă o trăsătură a textului descriptiv.",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Prezintă un element comun celor 2 texte.",
        "tip": "redactare",
        "indicatii": "Relaxarea în natură.",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Consideri că vacanțele la țară sunt benefice?",
        "tip": "redactare",
        "indicatii": "Da/Nu",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a9",
        "nr": 9,
        "punctaj": 6,
        "cerinta": "Asociază textul 1 cu altul.",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      }
    ],
    "subiectulIB": [
      {
        "id": "v4b1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Diftongi în cuvântul „toate”:",
        "tip": "grila",
        "optiuni": [
          "oa",
          "te",
          "oe",
          "niciunul"
        ],
        "raspunsCorect": 0,
        "feedback": "a."
      },
      {
        "id": "v4b2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Derivare cu prefix:",
        "tip": "grila",
        "optiuni": [
          "îmbrățișare",
          "răcoros",
          "nervos",
          "străbun"
        ],
        "raspunsCorect": 3,
        "feedback": "stră-bun."
      },
      {
        "id": "v4b3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "Omonimul lui „nouă”:",
        "tip": "grila",
        "optiuni": [
          "cifră (9)",
          "adjectiv",
          "niciuna",
          "ambele a și b"
        ],
        "raspunsCorect": 3,
        "feedback": "noua (haina noua / numarul noua)."
      },
      {
        "id": "v4b4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Modul verbului „începea”:",
        "tip": "grila",
        "optiuni": [
          "Indicativ",
          "Conjunctiv",
          "Condițional",
          "Imperativ"
        ],
        "raspunsCorect": 0,
        "feedback": "a."
      },
      {
        "id": "v4b5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Atribute",
        "tip": "tabel_completare",
        "raspunsCorect": [
          {
            "verb": "v",
            "forma": "f"
          },
          {
            "verb": "v",
            "forma": "f"
          },
          {
            "verb": "v",
            "forma": "f"
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Propozitii",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Frază",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Corect",
        "tip": "completare_multipla",
        "raspunsuri": [
          {
            "nr": 1,
            "corect": "x"
          },
          {
            "nr": 2,
            "corect": "y"
          },
          {
            "nr": 3,
            "corect": "z"
          }
        ],
        "feedback": "-"
      }
    ],
    "subiectulII": {
      "cerinta": "Scrie un email unui prieten.",
      "tip": "narativ",
      "punctajContinut": 12,
      "punctajRedactare": 8,
      "criteriiRedactare": []
    }
  },
  {
    "id": "v05_antrenament",
    "titlu": "Testul de antrenament nr. 5 - Vacanță rurală",
    "sursa": "La Medeleni",
    "text1": {
      "titlu": "La Medeleni (Vacanța)",
      "autor": "Ionel Teodoreanu",
      "sursa": "La Medeleni",
      "tip": "literar",
      "corpus": "Vacanța cea mare începea de obicei cu o călătorie lungă, prăfoasă și plină de nerăbdare. Dănuț stătea cu fruntea lipită de geamul trenului, numărând stâlpii de telegraf care fugeau în urmă. [...] De la gară, boierii Deleanu îi așteptau cu trăsura. Olgruța, zvăpăiată cum era, a sărit direct în brațele bătrânului vizitiu. Când au ajuns la conac, mirosul de dulceață și tei i-a învăluit ca o îmbrățișare maternă."
    },
    "text2": {
      "titlu": "Beneficiile naturii asupra reducerii stresului la copii",
      "autor": "Studiu Psihologic",
      "sursa": "Revista",
      "tip": "nonliterar",
      "corpus": "Studiile recente demonstrează o legătură clară între mediul natural și sănătatea mintală a tinerilor. Timpul petrecut în aer liber, în mod special în zonele verzi, contribuie semnificativ la scăderea nivelului de cortizol. Contactul direct cu natura, fie prin jocuri pe iarbă sau simple plimbări printre plante aromatice (precum teiul), induce o stare de calm și relaxare."
    },
    "subiectulIA": [
      {
        "id": "v4a1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Notează două percepții senzoriale (ex. miros).",
        "tip": "completare",
        "raspunsCorect": [
          "dulceață",
          "tei"
        ],
        "raspunsCorectAfisat": "miros de dulceață și tei",
        "feedback": "-"
      },
      {
        "id": "v4a2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Ce hormon este asociat cu stresul?",
        "tip": "completare",
        "raspunsCorect": [
          "cortizol"
        ],
        "raspunsCorectAfisat": "cortizol",
        "feedback": "-"
      },
      {
        "id": "v4a3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "Unde se lipea Dănuț cu fruntea?",
        "tip": "grila",
        "optiuni": [
          "de trăsură",
          "de geamul trenului",
          "de vizitiu",
          "de scaun"
        ],
        "raspunsCorect": 1,
        "feedback": "b."
      },
      {
        "id": "v4a4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Ce efect are natura asupra copiilor?",
        "tip": "grila",
        "optiuni": [
          "crește agitația",
          "stare de calm",
          "îmbunătățește vederea",
          "iritație"
        ],
        "raspunsCorect": 1,
        "feedback": "b. "
      },
      {
        "id": "v4a5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Adevărat (A) / Fals (F):",
        "tip": "adevarat_fals",
        "enunturi": [
          {
            "text": "Călătoria era prăfoasă.",
            "corect": true,
            "sursa": "T1"
          },
          {
            "text": "Olguța era liniștită.",
            "corect": false,
            "sursa": "T1"
          },
          {
            "text": "Natura e calmantă.",
            "corect": true,
            "sursa": "T2"
          },
          {
            "text": "Teiul e menționat.",
            "corect": true,
            "sursa": "T1, T2"
          },
          {
            "text": "Cortizolul e benefic stresului.",
            "corect": false,
            "sursa": "T2"
          },
          {
            "text": "Copiii stateau acasa in vacanta.",
            "corect": false,
            "sursa": "T1"
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Prezintă o trăsătură a textului descriptiv.",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Prezintă un element comun celor 2 texte.",
        "tip": "redactare",
        "indicatii": "Relaxarea în natură.",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Consideri că vacanțele la țară sunt benefice?",
        "tip": "redactare",
        "indicatii": "Da/Nu",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a9",
        "nr": 9,
        "punctaj": 6,
        "cerinta": "Asociază textul 1 cu altul.",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      }
    ],
    "subiectulIB": [
      {
        "id": "v4b1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Diftongi în cuvântul „toate”:",
        "tip": "grila",
        "optiuni": [
          "oa",
          "te",
          "oe",
          "niciunul"
        ],
        "raspunsCorect": 0,
        "feedback": "a."
      },
      {
        "id": "v4b2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Derivare cu prefix:",
        "tip": "grila",
        "optiuni": [
          "îmbrățișare",
          "răcoros",
          "nervos",
          "străbun"
        ],
        "raspunsCorect": 3,
        "feedback": "stră-bun."
      },
      {
        "id": "v4b3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "Omonimul lui „nouă”:",
        "tip": "grila",
        "optiuni": [
          "cifră (9)",
          "adjectiv",
          "niciuna",
          "ambele a și b"
        ],
        "raspunsCorect": 3,
        "feedback": "noua (haina noua / numarul noua)."
      },
      {
        "id": "v4b4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Modul verbului „începea”:",
        "tip": "grila",
        "optiuni": [
          "Indicativ",
          "Conjunctiv",
          "Condițional",
          "Imperativ"
        ],
        "raspunsCorect": 0,
        "feedback": "a."
      },
      {
        "id": "v4b5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Atribute",
        "tip": "tabel_completare",
        "raspunsCorect": [
          {
            "verb": "v",
            "forma": "f"
          },
          {
            "verb": "v",
            "forma": "f"
          },
          {
            "verb": "v",
            "forma": "f"
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Propozitii",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Frază",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Corect",
        "tip": "completare_multipla",
        "raspunsuri": [
          {
            "nr": 1,
            "corect": "x"
          },
          {
            "nr": 2,
            "corect": "y"
          },
          {
            "nr": 3,
            "corect": "z"
          }
        ],
        "feedback": "-"
      }
    ],
    "subiectulII": {
      "cerinta": "Scrie un email unui prieten.",
      "tip": "narativ",
      "punctajContinut": 12,
      "punctajRedactare": 8,
      "criteriiRedactare": []
    }
  },
  {
    "id": "v06_antrenament",
    "titlu": "Testul de antrenament nr. 6 - Vacanță la mare",
    "sursa": "La Medeleni",
    "text1": {
      "titlu": "La Medeleni (Vacanța)",
      "autor": "Ionel Teodoreanu",
      "sursa": "La Medeleni",
      "tip": "literar",
      "corpus": "Vacanța cea mare începea de obicei cu o călătorie lungă, prăfoasă și plină de nerăbdare. Dănuț stătea cu fruntea lipită de geamul trenului, numărând stâlpii de telegraf care fugeau în urmă. [...] De la gară, boierii Deleanu îi așteptau cu trăsura. Olgruța, zvăpăiată cum era, a sărit direct în brațele bătrânului vizitiu. Când au ajuns la conac, mirosul de dulceață și tei i-a învăluit ca o îmbrățișare maternă."
    },
    "text2": {
      "titlu": "Beneficiile naturii asupra reducerii stresului la copii",
      "autor": "Studiu Psihologic",
      "sursa": "Revista",
      "tip": "nonliterar",
      "corpus": "Studiile recente demonstrează o legătură clară între mediul natural și sănătatea mintală a tinerilor. Timpul petrecut în aer liber, în mod special în zonele verzi, contribuie semnificativ la scăderea nivelului de cortizol. Contactul direct cu natura, fie prin jocuri pe iarbă sau simple plimbări printre plante aromatice (precum teiul), induce o stare de calm și relaxare."
    },
    "subiectulIA": [
      {
        "id": "v4a1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Notează două percepții senzoriale (ex. miros).",
        "tip": "completare",
        "raspunsCorect": [
          "dulceață",
          "tei"
        ],
        "raspunsCorectAfisat": "miros de dulceață și tei",
        "feedback": "-"
      },
      {
        "id": "v4a2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Ce hormon este asociat cu stresul?",
        "tip": "completare",
        "raspunsCorect": [
          "cortizol"
        ],
        "raspunsCorectAfisat": "cortizol",
        "feedback": "-"
      },
      {
        "id": "v4a3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "Unde se lipea Dănuț cu fruntea?",
        "tip": "grila",
        "optiuni": [
          "de trăsură",
          "de geamul trenului",
          "de vizitiu",
          "de scaun"
        ],
        "raspunsCorect": 1,
        "feedback": "b."
      },
      {
        "id": "v4a4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Ce efect are natura asupra copiilor?",
        "tip": "grila",
        "optiuni": [
          "crește agitația",
          "stare de calm",
          "îmbunătățește vederea",
          "iritație"
        ],
        "raspunsCorect": 1,
        "feedback": "b. "
      },
      {
        "id": "v4a5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Adevărat (A) / Fals (F):",
        "tip": "adevarat_fals",
        "enunturi": [
          {
            "text": "Călătoria era prăfoasă.",
            "corect": true,
            "sursa": "T1"
          },
          {
            "text": "Olguța era liniștită.",
            "corect": false,
            "sursa": "T1"
          },
          {
            "text": "Natura e calmantă.",
            "corect": true,
            "sursa": "T2"
          },
          {
            "text": "Teiul e menționat.",
            "corect": true,
            "sursa": "T1, T2"
          },
          {
            "text": "Cortizolul e benefic stresului.",
            "corect": false,
            "sursa": "T2"
          },
          {
            "text": "Copiii stateau acasa in vacanta.",
            "corect": false,
            "sursa": "T1"
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Prezintă o trăsătură a textului descriptiv.",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Prezintă un element comun celor 2 texte.",
        "tip": "redactare",
        "indicatii": "Relaxarea în natură.",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Consideri că vacanțele la țară sunt benefice?",
        "tip": "redactare",
        "indicatii": "Da/Nu",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a9",
        "nr": 9,
        "punctaj": 6,
        "cerinta": "Asociază textul 1 cu altul.",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      }
    ],
    "subiectulIB": [
      {
        "id": "v4b1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Diftongi în cuvântul „toate”:",
        "tip": "grila",
        "optiuni": [
          "oa",
          "te",
          "oe",
          "niciunul"
        ],
        "raspunsCorect": 0,
        "feedback": "a."
      },
      {
        "id": "v4b2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Derivare cu prefix:",
        "tip": "grila",
        "optiuni": [
          "îmbrățișare",
          "răcoros",
          "nervos",
          "străbun"
        ],
        "raspunsCorect": 3,
        "feedback": "stră-bun."
      },
      {
        "id": "v4b3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "Omonimul lui „nouă”:",
        "tip": "grila",
        "optiuni": [
          "cifră (9)",
          "adjectiv",
          "niciuna",
          "ambele a și b"
        ],
        "raspunsCorect": 3,
        "feedback": "noua (haina noua / numarul noua)."
      },
      {
        "id": "v4b4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Modul verbului „începea”:",
        "tip": "grila",
        "optiuni": [
          "Indicativ",
          "Conjunctiv",
          "Condițional",
          "Imperativ"
        ],
        "raspunsCorect": 0,
        "feedback": "a."
      },
      {
        "id": "v4b5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Atribute",
        "tip": "tabel_completare",
        "raspunsCorect": [
          {
            "verb": "v",
            "forma": "f"
          },
          {
            "verb": "v",
            "forma": "f"
          },
          {
            "verb": "v",
            "forma": "f"
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Propozitii",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Frază",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Corect",
        "tip": "completare_multipla",
        "raspunsuri": [
          {
            "nr": 1,
            "corect": "x"
          },
          {
            "nr": 2,
            "corect": "y"
          },
          {
            "nr": 3,
            "corect": "z"
          }
        ],
        "feedback": "-"
      }
    ],
    "subiectulII": {
      "cerinta": "Scrie un email unui prieten.",
      "tip": "narativ",
      "punctajContinut": 12,
      "punctajRedactare": 8,
      "criteriiRedactare": []
    }
  },
  {
    "id": "v07_antrenament",
    "titlu": "Testul de antrenament nr. 7 - Natura iarna",
    "sursa": "La Medeleni",
    "text1": {
      "titlu": "La Medeleni (Vacanța)",
      "autor": "Ionel Teodoreanu",
      "sursa": "La Medeleni",
      "tip": "literar",
      "corpus": "Vacanța cea mare începea de obicei cu o călătorie lungă, prăfoasă și plină de nerăbdare. Dănuț stătea cu fruntea lipită de geamul trenului, numărând stâlpii de telegraf care fugeau în urmă. [...] De la gară, boierii Deleanu îi așteptau cu trăsura. Olgruța, zvăpăiată cum era, a sărit direct în brațele bătrânului vizitiu. Când au ajuns la conac, mirosul de dulceață și tei i-a învăluit ca o îmbrățișare maternă."
    },
    "text2": {
      "titlu": "Beneficiile naturii asupra reducerii stresului la copii",
      "autor": "Studiu Psihologic",
      "sursa": "Revista",
      "tip": "nonliterar",
      "corpus": "Studiile recente demonstrează o legătură clară între mediul natural și sănătatea mintală a tinerilor. Timpul petrecut în aer liber, în mod special în zonele verzi, contribuie semnificativ la scăderea nivelului de cortizol. Contactul direct cu natura, fie prin jocuri pe iarbă sau simple plimbări printre plante aromatice (precum teiul), induce o stare de calm și relaxare."
    },
    "subiectulIA": [
      {
        "id": "v4a1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Notează două percepții senzoriale (ex. miros).",
        "tip": "completare",
        "raspunsCorect": [
          "dulceață",
          "tei"
        ],
        "raspunsCorectAfisat": "miros de dulceață și tei",
        "feedback": "-"
      },
      {
        "id": "v4a2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Ce hormon este asociat cu stresul?",
        "tip": "completare",
        "raspunsCorect": [
          "cortizol"
        ],
        "raspunsCorectAfisat": "cortizol",
        "feedback": "-"
      },
      {
        "id": "v4a3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "Unde se lipea Dănuț cu fruntea?",
        "tip": "grila",
        "optiuni": [
          "de trăsură",
          "de geamul trenului",
          "de vizitiu",
          "de scaun"
        ],
        "raspunsCorect": 1,
        "feedback": "b."
      },
      {
        "id": "v4a4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Ce efect are natura asupra copiilor?",
        "tip": "grila",
        "optiuni": [
          "crește agitația",
          "stare de calm",
          "îmbunătățește vederea",
          "iritație"
        ],
        "raspunsCorect": 1,
        "feedback": "b. "
      },
      {
        "id": "v4a5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Adevărat (A) / Fals (F):",
        "tip": "adevarat_fals",
        "enunturi": [
          {
            "text": "Călătoria era prăfoasă.",
            "corect": true,
            "sursa": "T1"
          },
          {
            "text": "Olguța era liniștită.",
            "corect": false,
            "sursa": "T1"
          },
          {
            "text": "Natura e calmantă.",
            "corect": true,
            "sursa": "T2"
          },
          {
            "text": "Teiul e menționat.",
            "corect": true,
            "sursa": "T1, T2"
          },
          {
            "text": "Cortizolul e benefic stresului.",
            "corect": false,
            "sursa": "T2"
          },
          {
            "text": "Copiii stateau acasa in vacanta.",
            "corect": false,
            "sursa": "T1"
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Prezintă o trăsătură a textului descriptiv.",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Prezintă un element comun celor 2 texte.",
        "tip": "redactare",
        "indicatii": "Relaxarea în natură.",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Consideri că vacanțele la țară sunt benefice?",
        "tip": "redactare",
        "indicatii": "Da/Nu",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a9",
        "nr": 9,
        "punctaj": 6,
        "cerinta": "Asociază textul 1 cu altul.",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      }
    ],
    "subiectulIB": [
      {
        "id": "v4b1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Diftongi în cuvântul „toate”:",
        "tip": "grila",
        "optiuni": [
          "oa",
          "te",
          "oe",
          "niciunul"
        ],
        "raspunsCorect": 0,
        "feedback": "a."
      },
      {
        "id": "v4b2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Derivare cu prefix:",
        "tip": "grila",
        "optiuni": [
          "îmbrățișare",
          "răcoros",
          "nervos",
          "străbun"
        ],
        "raspunsCorect": 3,
        "feedback": "stră-bun."
      },
      {
        "id": "v4b3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "Omonimul lui „nouă”:",
        "tip": "grila",
        "optiuni": [
          "cifră (9)",
          "adjectiv",
          "niciuna",
          "ambele a și b"
        ],
        "raspunsCorect": 3,
        "feedback": "noua (haina noua / numarul noua)."
      },
      {
        "id": "v4b4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Modul verbului „începea”:",
        "tip": "grila",
        "optiuni": [
          "Indicativ",
          "Conjunctiv",
          "Condițional",
          "Imperativ"
        ],
        "raspunsCorect": 0,
        "feedback": "a."
      },
      {
        "id": "v4b5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Atribute",
        "tip": "tabel_completare",
        "raspunsCorect": [
          {
            "verb": "v",
            "forma": "f"
          },
          {
            "verb": "v",
            "forma": "f"
          },
          {
            "verb": "v",
            "forma": "f"
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Propozitii",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Frază",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Corect",
        "tip": "completare_multipla",
        "raspunsuri": [
          {
            "nr": 1,
            "corect": "x"
          },
          {
            "nr": 2,
            "corect": "y"
          },
          {
            "nr": 3,
            "corect": "z"
          }
        ],
        "feedback": "-"
      }
    ],
    "subiectulII": {
      "cerinta": "Scrie un email unui prieten.",
      "tip": "narativ",
      "punctajContinut": 12,
      "punctajRedactare": 8,
      "criteriiRedactare": []
    }
  },
  {
    "id": "v08_antrenament",
    "titlu": "Testul de antrenament nr. 8 - Jurnal de lectură",
    "sursa": "La Medeleni",
    "text1": {
      "titlu": "La Medeleni (Vacanța)",
      "autor": "Ionel Teodoreanu",
      "sursa": "La Medeleni",
      "tip": "literar",
      "corpus": "Vacanța cea mare începea de obicei cu o călătorie lungă, prăfoasă și plină de nerăbdare. Dănuț stătea cu fruntea lipită de geamul trenului, numărând stâlpii de telegraf care fugeau în urmă. [...] De la gară, boierii Deleanu îi așteptau cu trăsura. Olgruța, zvăpăiată cum era, a sărit direct în brațele bătrânului vizitiu. Când au ajuns la conac, mirosul de dulceață și tei i-a învăluit ca o îmbrățișare maternă."
    },
    "text2": {
      "titlu": "Beneficiile naturii asupra reducerii stresului la copii",
      "autor": "Studiu Psihologic",
      "sursa": "Revista",
      "tip": "nonliterar",
      "corpus": "Studiile recente demonstrează o legătură clară între mediul natural și sănătatea mintală a tinerilor. Timpul petrecut în aer liber, în mod special în zonele verzi, contribuie semnificativ la scăderea nivelului de cortizol. Contactul direct cu natura, fie prin jocuri pe iarbă sau simple plimbări printre plante aromatice (precum teiul), induce o stare de calm și relaxare."
    },
    "subiectulIA": [
      {
        "id": "v4a1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Notează două percepții senzoriale (ex. miros).",
        "tip": "completare",
        "raspunsCorect": [
          "dulceață",
          "tei"
        ],
        "raspunsCorectAfisat": "miros de dulceață și tei",
        "feedback": "-"
      },
      {
        "id": "v4a2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Ce hormon este asociat cu stresul?",
        "tip": "completare",
        "raspunsCorect": [
          "cortizol"
        ],
        "raspunsCorectAfisat": "cortizol",
        "feedback": "-"
      },
      {
        "id": "v4a3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "Unde se lipea Dănuț cu fruntea?",
        "tip": "grila",
        "optiuni": [
          "de trăsură",
          "de geamul trenului",
          "de vizitiu",
          "de scaun"
        ],
        "raspunsCorect": 1,
        "feedback": "b."
      },
      {
        "id": "v4a4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Ce efect are natura asupra copiilor?",
        "tip": "grila",
        "optiuni": [
          "crește agitația",
          "stare de calm",
          "îmbunătățește vederea",
          "iritație"
        ],
        "raspunsCorect": 1,
        "feedback": "b. "
      },
      {
        "id": "v4a5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Adevărat (A) / Fals (F):",
        "tip": "adevarat_fals",
        "enunturi": [
          {
            "text": "Călătoria era prăfoasă.",
            "corect": true,
            "sursa": "T1"
          },
          {
            "text": "Olguța era liniștită.",
            "corect": false,
            "sursa": "T1"
          },
          {
            "text": "Natura e calmantă.",
            "corect": true,
            "sursa": "T2"
          },
          {
            "text": "Teiul e menționat.",
            "corect": true,
            "sursa": "T1, T2"
          },
          {
            "text": "Cortizolul e benefic stresului.",
            "corect": false,
            "sursa": "T2"
          },
          {
            "text": "Copiii stateau acasa in vacanta.",
            "corect": false,
            "sursa": "T1"
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Prezintă o trăsătură a textului descriptiv.",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Prezintă un element comun celor 2 texte.",
        "tip": "redactare",
        "indicatii": "Relaxarea în natură.",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Consideri că vacanțele la țară sunt benefice?",
        "tip": "redactare",
        "indicatii": "Da/Nu",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a9",
        "nr": 9,
        "punctaj": 6,
        "cerinta": "Asociază textul 1 cu altul.",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      }
    ],
    "subiectulIB": [
      {
        "id": "v4b1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Diftongi în cuvântul „toate”:",
        "tip": "grila",
        "optiuni": [
          "oa",
          "te",
          "oe",
          "niciunul"
        ],
        "raspunsCorect": 0,
        "feedback": "a."
      },
      {
        "id": "v4b2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Derivare cu prefix:",
        "tip": "grila",
        "optiuni": [
          "îmbrățișare",
          "răcoros",
          "nervos",
          "străbun"
        ],
        "raspunsCorect": 3,
        "feedback": "stră-bun."
      },
      {
        "id": "v4b3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "Omonimul lui „nouă”:",
        "tip": "grila",
        "optiuni": [
          "cifră (9)",
          "adjectiv",
          "niciuna",
          "ambele a și b"
        ],
        "raspunsCorect": 3,
        "feedback": "noua (haina noua / numarul noua)."
      },
      {
        "id": "v4b4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Modul verbului „începea”:",
        "tip": "grila",
        "optiuni": [
          "Indicativ",
          "Conjunctiv",
          "Condițional",
          "Imperativ"
        ],
        "raspunsCorect": 0,
        "feedback": "a."
      },
      {
        "id": "v4b5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Atribute",
        "tip": "tabel_completare",
        "raspunsCorect": [
          {
            "verb": "v",
            "forma": "f"
          },
          {
            "verb": "v",
            "forma": "f"
          },
          {
            "verb": "v",
            "forma": "f"
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Propozitii",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Frază",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Corect",
        "tip": "completare_multipla",
        "raspunsuri": [
          {
            "nr": 1,
            "corect": "x"
          },
          {
            "nr": 2,
            "corect": "y"
          },
          {
            "nr": 3,
            "corect": "z"
          }
        ],
        "feedback": "-"
      }
    ],
    "subiectulII": {
      "cerinta": "Scrie un email unui prieten.",
      "tip": "narativ",
      "punctajContinut": 12,
      "punctajRedactare": 8,
      "criteriiRedactare": []
    }
  },
  {
    "id": "v09_antrenament",
    "titlu": "Testul de antrenament nr. 9 - Explorare",
    "sursa": "La Medeleni",
    "text1": {
      "titlu": "La Medeleni (Vacanța)",
      "autor": "Ionel Teodoreanu",
      "sursa": "La Medeleni",
      "tip": "literar",
      "corpus": "Vacanța cea mare începea de obicei cu o călătorie lungă, prăfoasă și plină de nerăbdare. Dănuț stătea cu fruntea lipită de geamul trenului, numărând stâlpii de telegraf care fugeau în urmă. [...] De la gară, boierii Deleanu îi așteptau cu trăsura. Olgruța, zvăpăiată cum era, a sărit direct în brațele bătrânului vizitiu. Când au ajuns la conac, mirosul de dulceață și tei i-a învăluit ca o îmbrățișare maternă."
    },
    "text2": {
      "titlu": "Beneficiile naturii asupra reducerii stresului la copii",
      "autor": "Studiu Psihologic",
      "sursa": "Revista",
      "tip": "nonliterar",
      "corpus": "Studiile recente demonstrează o legătură clară între mediul natural și sănătatea mintală a tinerilor. Timpul petrecut în aer liber, în mod special în zonele verzi, contribuie semnificativ la scăderea nivelului de cortizol. Contactul direct cu natura, fie prin jocuri pe iarbă sau simple plimbări printre plante aromatice (precum teiul), induce o stare de calm și relaxare."
    },
    "subiectulIA": [
      {
        "id": "v4a1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Notează două percepții senzoriale (ex. miros).",
        "tip": "completare",
        "raspunsCorect": [
          "dulceață",
          "tei"
        ],
        "raspunsCorectAfisat": "miros de dulceață și tei",
        "feedback": "-"
      },
      {
        "id": "v4a2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Ce hormon este asociat cu stresul?",
        "tip": "completare",
        "raspunsCorect": [
          "cortizol"
        ],
        "raspunsCorectAfisat": "cortizol",
        "feedback": "-"
      },
      {
        "id": "v4a3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "Unde se lipea Dănuț cu fruntea?",
        "tip": "grila",
        "optiuni": [
          "de trăsură",
          "de geamul trenului",
          "de vizitiu",
          "de scaun"
        ],
        "raspunsCorect": 1,
        "feedback": "b."
      },
      {
        "id": "v4a4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Ce efect are natura asupra copiilor?",
        "tip": "grila",
        "optiuni": [
          "crește agitația",
          "stare de calm",
          "îmbunătățește vederea",
          "iritație"
        ],
        "raspunsCorect": 1,
        "feedback": "b. "
      },
      {
        "id": "v4a5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Adevărat (A) / Fals (F):",
        "tip": "adevarat_fals",
        "enunturi": [
          {
            "text": "Călătoria era prăfoasă.",
            "corect": true,
            "sursa": "T1"
          },
          {
            "text": "Olguța era liniștită.",
            "corect": false,
            "sursa": "T1"
          },
          {
            "text": "Natura e calmantă.",
            "corect": true,
            "sursa": "T2"
          },
          {
            "text": "Teiul e menționat.",
            "corect": true,
            "sursa": "T1, T2"
          },
          {
            "text": "Cortizolul e benefic stresului.",
            "corect": false,
            "sursa": "T2"
          },
          {
            "text": "Copiii stateau acasa in vacanta.",
            "corect": false,
            "sursa": "T1"
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Prezintă o trăsătură a textului descriptiv.",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Prezintă un element comun celor 2 texte.",
        "tip": "redactare",
        "indicatii": "Relaxarea în natură.",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Consideri că vacanțele la țară sunt benefice?",
        "tip": "redactare",
        "indicatii": "Da/Nu",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a9",
        "nr": 9,
        "punctaj": 6,
        "cerinta": "Asociază textul 1 cu altul.",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      }
    ],
    "subiectulIB": [
      {
        "id": "v4b1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Diftongi în cuvântul „toate”:",
        "tip": "grila",
        "optiuni": [
          "oa",
          "te",
          "oe",
          "niciunul"
        ],
        "raspunsCorect": 0,
        "feedback": "a."
      },
      {
        "id": "v4b2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Derivare cu prefix:",
        "tip": "grila",
        "optiuni": [
          "îmbrățișare",
          "răcoros",
          "nervos",
          "străbun"
        ],
        "raspunsCorect": 3,
        "feedback": "stră-bun."
      },
      {
        "id": "v4b3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "Omonimul lui „nouă”:",
        "tip": "grila",
        "optiuni": [
          "cifră (9)",
          "adjectiv",
          "niciuna",
          "ambele a și b"
        ],
        "raspunsCorect": 3,
        "feedback": "noua (haina noua / numarul noua)."
      },
      {
        "id": "v4b4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Modul verbului „începea”:",
        "tip": "grila",
        "optiuni": [
          "Indicativ",
          "Conjunctiv",
          "Condițional",
          "Imperativ"
        ],
        "raspunsCorect": 0,
        "feedback": "a."
      },
      {
        "id": "v4b5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Atribute",
        "tip": "tabel_completare",
        "raspunsCorect": [
          {
            "verb": "v",
            "forma": "f"
          },
          {
            "verb": "v",
            "forma": "f"
          },
          {
            "verb": "v",
            "forma": "f"
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Propozitii",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Frază",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Corect",
        "tip": "completare_multipla",
        "raspunsuri": [
          {
            "nr": 1,
            "corect": "x"
          },
          {
            "nr": 2,
            "corect": "y"
          },
          {
            "nr": 3,
            "corect": "z"
          }
        ],
        "feedback": "-"
      }
    ],
    "subiectulII": {
      "cerinta": "Scrie un email unui prieten.",
      "tip": "narativ",
      "punctajContinut": 12,
      "punctajRedactare": 8,
      "criteriiRedactare": []
    }
  },
  {
    "id": "v10_antrenament",
    "titlu": "Testul de antrenament nr. 10 - Ora de curs",
    "sursa": "La Medeleni",
    "text1": {
      "titlu": "La Medeleni (Vacanța)",
      "autor": "Ionel Teodoreanu",
      "sursa": "La Medeleni",
      "tip": "literar",
      "corpus": "Vacanța cea mare începea de obicei cu o călătorie lungă, prăfoasă și plină de nerăbdare. Dănuț stătea cu fruntea lipită de geamul trenului, numărând stâlpii de telegraf care fugeau în urmă. [...] De la gară, boierii Deleanu îi așteptau cu trăsura. Olgruța, zvăpăiată cum era, a sărit direct în brațele bătrânului vizitiu. Când au ajuns la conac, mirosul de dulceață și tei i-a învăluit ca o îmbrățișare maternă."
    },
    "text2": {
      "titlu": "Beneficiile naturii asupra reducerii stresului la copii",
      "autor": "Studiu Psihologic",
      "sursa": "Revista",
      "tip": "nonliterar",
      "corpus": "Studiile recente demonstrează o legătură clară între mediul natural și sănătatea mintală a tinerilor. Timpul petrecut în aer liber, în mod special în zonele verzi, contribuie semnificativ la scăderea nivelului de cortizol. Contactul direct cu natura, fie prin jocuri pe iarbă sau simple plimbări printre plante aromatice (precum teiul), induce o stare de calm și relaxare."
    },
    "subiectulIA": [
      {
        "id": "v4a1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Notează două percepții senzoriale (ex. miros).",
        "tip": "completare",
        "raspunsCorect": [
          "dulceață",
          "tei"
        ],
        "raspunsCorectAfisat": "miros de dulceață și tei",
        "feedback": "-"
      },
      {
        "id": "v4a2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Ce hormon este asociat cu stresul?",
        "tip": "completare",
        "raspunsCorect": [
          "cortizol"
        ],
        "raspunsCorectAfisat": "cortizol",
        "feedback": "-"
      },
      {
        "id": "v4a3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "Unde se lipea Dănuț cu fruntea?",
        "tip": "grila",
        "optiuni": [
          "de trăsură",
          "de geamul trenului",
          "de vizitiu",
          "de scaun"
        ],
        "raspunsCorect": 1,
        "feedback": "b."
      },
      {
        "id": "v4a4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Ce efect are natura asupra copiilor?",
        "tip": "grila",
        "optiuni": [
          "crește agitația",
          "stare de calm",
          "îmbunătățește vederea",
          "iritație"
        ],
        "raspunsCorect": 1,
        "feedback": "b. "
      },
      {
        "id": "v4a5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Adevărat (A) / Fals (F):",
        "tip": "adevarat_fals",
        "enunturi": [
          {
            "text": "Călătoria era prăfoasă.",
            "corect": true,
            "sursa": "T1"
          },
          {
            "text": "Olguța era liniștită.",
            "corect": false,
            "sursa": "T1"
          },
          {
            "text": "Natura e calmantă.",
            "corect": true,
            "sursa": "T2"
          },
          {
            "text": "Teiul e menționat.",
            "corect": true,
            "sursa": "T1, T2"
          },
          {
            "text": "Cortizolul e benefic stresului.",
            "corect": false,
            "sursa": "T2"
          },
          {
            "text": "Copiii stateau acasa in vacanta.",
            "corect": false,
            "sursa": "T1"
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Prezintă o trăsătură a textului descriptiv.",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Prezintă un element comun celor 2 texte.",
        "tip": "redactare",
        "indicatii": "Relaxarea în natură.",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Consideri că vacanțele la țară sunt benefice?",
        "tip": "redactare",
        "indicatii": "Da/Nu",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4a9",
        "nr": 9,
        "punctaj": 6,
        "cerinta": "Asociază textul 1 cu altul.",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      }
    ],
    "subiectulIB": [
      {
        "id": "v4b1",
        "nr": 1,
        "punctaj": 2,
        "cerinta": "Diftongi în cuvântul „toate”:",
        "tip": "grila",
        "optiuni": [
          "oa",
          "te",
          "oe",
          "niciunul"
        ],
        "raspunsCorect": 0,
        "feedback": "a."
      },
      {
        "id": "v4b2",
        "nr": 2,
        "punctaj": 2,
        "cerinta": "Derivare cu prefix:",
        "tip": "grila",
        "optiuni": [
          "îmbrățișare",
          "răcoros",
          "nervos",
          "străbun"
        ],
        "raspunsCorect": 3,
        "feedback": "stră-bun."
      },
      {
        "id": "v4b3",
        "nr": 3,
        "punctaj": 2,
        "cerinta": "Omonimul lui „nouă”:",
        "tip": "grila",
        "optiuni": [
          "cifră (9)",
          "adjectiv",
          "niciuna",
          "ambele a și b"
        ],
        "raspunsCorect": 3,
        "feedback": "noua (haina noua / numarul noua)."
      },
      {
        "id": "v4b4",
        "nr": 4,
        "punctaj": 2,
        "cerinta": "Modul verbului „începea”:",
        "tip": "grila",
        "optiuni": [
          "Indicativ",
          "Conjunctiv",
          "Condițional",
          "Imperativ"
        ],
        "raspunsCorect": 0,
        "feedback": "a."
      },
      {
        "id": "v4b5",
        "nr": 5,
        "punctaj": 6,
        "cerinta": "Atribute",
        "tip": "tabel_completare",
        "raspunsCorect": [
          {
            "verb": "v",
            "forma": "f"
          },
          {
            "verb": "v",
            "forma": "f"
          },
          {
            "verb": "v",
            "forma": "f"
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b6",
        "nr": 6,
        "punctaj": 6,
        "cerinta": "Propozitii",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b7",
        "nr": 7,
        "punctaj": 6,
        "cerinta": "Frază",
        "tip": "redactare",
        "indicatii": "-",
        "barem": [
          {
            "criteriu": "-",
            "puncte": 6
          }
        ],
        "feedback": "-"
      },
      {
        "id": "v4b8",
        "nr": 8,
        "punctaj": 6,
        "cerinta": "Corect",
        "tip": "completare_multipla",
        "raspunsuri": [
          {
            "nr": 1,
            "corect": "x"
          },
          {
            "nr": 2,
            "corect": "y"
          },
          {
            "nr": 3,
            "corect": "z"
          }
        ],
        "feedback": "-"
      }
    ],
    "subiectulII": {
      "cerinta": "Scrie un email unui prieten.",
      "tip": "narativ",
      "punctajContinut": 12,
      "punctajRedactare": 8,
      "criteriiRedactare": []
    }
  }

];
