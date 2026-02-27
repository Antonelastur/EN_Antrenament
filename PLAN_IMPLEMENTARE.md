# Plan de Implementare – Aplicația EN Antrenament

## Structura Fișierelor
```
EN_Antrenament/
├── index.html          ← Structura paginii (toate cele 6 secțiuni)
├── style.css           ← Stiluri (navy/gold, responsive, dark mode)
├── main.js             ← Logica principală (navigare, test, feedback, progres)
├── items.js            ← Banca de itemi: teste complete + itemi individuali
├── items2.js           ← Extensie itemi (texte suplimentare)
├── items3.js           ← Extensie itemi (texte suplimentare)
├── assistant.js        ← Logica asistentului profesor (indicii, explicații)
├── dictionar.js        ← Dicționarul literar (termeni, figuri, specii, curenți)
└── PLAN_IMPLEMENTARE.md
```

## Etapele de Implementare

### Etapa 1: Arhitectura de bază (CURENT)
- [x] Secțiunea Subiectul I cu text-suport și itemi
- [x] Secțiunea Subiectul II cu redactare
- [x] Secțiunea Test Complet cu timer
- [x] Secțiunea Ajutor cu acordeoane (figuri, vocabular, fonetică, morfologie, sintaxă)
- [x] Chatbot de bază
- [x] Design navy/gold responsive
- [x] Texte autentice verificate

### Etapa 2: Conținut Ajutor complet
- [ ] Populare Fonetică (sunete, silabe, accent, diftongi, triftongi, hiat)
- [ ] Populare Morfologie (toate părțile de vorbire flexibile și neflexibile)
- [ ] Populare Sintaxă (părți de propoziție, tipuri de propoziții, fraza)
- [ ] Populare Vocabular complet (sinonime, antonime, omonime, paronime, câmpuri semantice, familii lexicale)
- [ ] Populare Dichionar literar (figuri, specii, curenți)

### Etapa 3: Tipuri noi de itemi
- [ ] Adevărat/Fals cu justificare
- [ ] Potrivire coloană stânga-dreapta
- [ ] Ordonare de propoziții/fragmente
- [ ] Identificare figuri de stil în text (highlight)
- [ ] Reformulare cu sinonime/antonime
- [ ] Analiză morfologică ghidată
- [ ] Analiză sintactică ghidată
- [ ] Quiz rapid cronometrat
- [ ] Completare plan de idei
- [ ] Redactare cu checklist

### Etapa 4: Secțiuni noi
- [ ] Biblioteca de Texte-suport (browse cu rezumat, cuvinte-cheie)
- [ ] Dicționar Literar interactiv (căutare, categorii)
- [ ] Progres Personal (vizualizare scor, puncte slabe, recomandări)

### Etapa 5: Asistent Profesor avansat
- [ ] Indicii progresive (3 niveluri)
- [ ] Explicații cerință
- [ ] Strategii de rezolvare per tip item
- [ ] Sfaturi redactare
- [ ] Mesaje motivaționale personalizate
- [ ] Mod "Pregătire de examen" (cronometru, fără indicii)

### Etapa 6: Dark Mode + Polish
- [ ] Toggle dark mode
- [ ] Animații subtile la feedback
- [ ] Optimizare performanță
- [ ] Testare completă

## Punctajul EN (structura reală)
- Subiectul I: 54 puncte (9 cerințe × 6p)
- Subiectul II: 36 puncte (18p conținut + 18p redactare)
- Din oficiu: 10 puncte
- TOTAL: 100 puncte
- Nota = Punctaj ÷ 10

## Structura unui item (format JSON în items.js)
```javascript
{
  id: "test1_s1a_i1",
  subiect: "I-A",           // I-A, I-B, II
  tip: "alegere-multipla",  // vezi lista completă de tipuri
  textId: "text_01",        // referință la textul-suport
  cerinta: "...",
  optiuni: ["A", "B", "C", "D"],
  raspunsCorect: 0,         // index sau array sau string
  explicatie: "...",
  punctaj: 6,
  dificultate: "mediu",     // ușor, mediu, greu
  domeniu: "vocabular"      // vocabular, morfologie, sintaxă, figuri, redactare
}
```
