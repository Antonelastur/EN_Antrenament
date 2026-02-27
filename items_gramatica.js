/**
 * items_gramatica.js – Banca de itemi pentru Subiectul I B (Limbă și comunicare)
 */

const itemsSubiectulIB = [
    {
        id: "s1b_t1_i1",
        tip: "grila",
        cerinta: "În enunțul «Stau câteodată și mă întreb», cuvântul «câteodată» s-a format prin:",
        optiuni: ["Derivare cu sufix", "Derivare cu prefix", "Compunere", "Conversiune"],
        raspunsCorect: 2,
        explicatie: "«Câteodată» s-a format prin compunere (câte + o + dată).",
        punctaj: 6,
        domeniu: "vocabular/formare"
    },
    {
        id: "s1b_t1_i2",
        tip: "grila",
        cerinta: "Identifică numărul de sunete din cuvântul «ciudați»:",
        optiuni: ["7 litere, 7 sunete", "7 litere, 6 sunete", "7 litere, 5 sunete", "7 litere, 4 sunete"],
        raspunsCorect: 1,
        explicatie: "C-I-U-D-A-Ț-I. Grupul «ci» urmat de vocală («u») se pronunță ca un singur sunet (č). Deci: č-u-d-a-ț-i = 6 sunete.",
        punctaj: 6,
        domeniu: "fonetica"
    },
    {
        id: "s1b_t1_i3",
        tip: "grila",
        cerinta: "În secvența «peste apa Neamțului», cuvântul «peste» este:",
        optiuni: ["Adverb de loc", "Prepoziție simplă", "Prepoziție compusă", "Conjuncție"],
        raspunsCorect: 1,
        explicatie: "«Peste» este o prepoziție simplă care cere cazul Acuzativ.",
        punctaj: 6,
        domeniu: "morfologie"
    },
    {
        id: "s1b_t1_i4",
        tip: "grila",
        cerinta: "Alege varianta corectă. În enunțul «mă tem să nu fac și eu vreo prostie», verbul «mă tem» este la modul:",
        optiuni: ["Indicativ", "Conjunctiv", "Condițional-optativ", "Imperativ"],
        raspunsCorect: 0,
        explicatie: "«Mă tem» este la modul INDICATIV, timpul prezent.",
        punctaj: 6,
        domeniu: "morfologie"
    },
    {
        id: "s1b_t1_i5",
        tip: "grila",
        cerinta: "Precizează dacă afirmația este Adevărată sau Falsă: Cuvântul «senectuții» este un substantiv la cazul Genitiv.",
        optiuni: ["Adevărat", "Fals"],
        raspunsCorect: 0,
        explicatie: "«a senectuții» — este substantiv la cazul Genitiv, articulat hotărât.",
        punctaj: 6,
        domeniu: "morfologie"
    },
    {
        id: "s1b_t1_i6",
        tip: "completare",
        cerinta: "Construiește un enunț în care cuvântul «vale» să aibă sens figurat.",
        raspunsCorect: ["vale a plângerii", "valea timpului", "valea amintirilor"],
        raspunsCorectAfisat: "Exemplu: «Viața aceasta este o vale a plângerii.»",
        feedback: "Sensul figurat apare în expresii metaforice, nu se referă la forma de relief.",
        punctaj: 6,
        domeniu: "vocabular"
    }
];

// Extindem setul de itemi existenți
// Notă: În logica aplicației, vom putea alege din acest pool pentru testele complete.
