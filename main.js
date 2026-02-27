/**
 * main.js – Logica aplicației Antrenament EN Română, cl. VIII
 * ============================================================
 * Secțiuni:
 *  1. STATE GLOBAL
 *  2. NAVIGARE MENIURI
 *  3. SUBIECTUL I – generare & verificare itemi
 *  4. SUBIECTUL II – redactare & evaluare
 *  5. TEST COMPLET – timer & corectare
 *  6. MODULUL AJUTOR – acordeon
 *  7. CHATBOT „Prof. de Română"
 *  8. UTILITARE (toast, modal, progres, scor)
 *  9. INIȚIALIZARE
 * ============================================================
 */

// ============================================================
// 1. STATE GLOBAL
// ============================================================
const stare = {
  modulActiv: 'subI',
  testSubI: {
    textIndex: 0,          // indexul textului curent în texteSuport
    raspunsuri: {},        // { itemId: valoare }
    incercari: {},         // { itemId: numar_incercari }
    verificat: false,
    punctajObtinut: 0
  },
  testSubII: {
    tipActiv: null,
    cerintaIndex: 0
  },
  testComplet: {
    activ: false,
    timerInterval: null,
    secundeRamase: 7200,   // 2 ore în secunde
    testSubI: null,
    testSubII: null,
    finalizat: false
  },
  scorTotal: 0,
  itemsRezolvati: 0,
  itemsCorecte: 0
};

// ============================================================
// 2. NAVIGARE MENIURI
// ============================================================

/**
 * Comută între modulele aplicației.
 * @param {string} modul - 'subI' | 'subII' | 'test' | 'ajutor'
 */
function afiseazaModul(modul) {
  // Ascunde toate modulele
  document.querySelectorAll('.modul').forEach(m => m.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  // Activează modulul și butonul selectat
  document.getElementById('modul-' + modul)?.classList.add('active');
  document.getElementById('nav-' + modul)?.classList.add('active');

  stare.modulActiv = modul;

  // Inițializare lazy pentru module
  if (modul === 'ajutor') initAjutor();
  if (modul === 'biblioteca') initBiblioteca();
  if (modul === 'dictionar') initDictionar();
}

// ============================================================
// 3. SUBIECTUL I – GENERARE & VERIFICARE
// ============================================================

/**
 * Generează un set nou de itemi pentru Subiectul I,
 * alegând aleatoriu un text din texteSuport.
 */
function genereazaTestSubI() {
  // Rotire prin texte (aleatoriu, dar fără repetare imediată)
  const nrTexte = texteSuport.length;
  let indexNou = Math.floor(Math.random() * nrTexte);
  if (nrTexte > 1 && indexNou === stare.testSubI.textIndex) {
    indexNou = (indexNou + 1) % nrTexte;
  }
  stare.testSubI.textIndex = indexNou;

  const text = texteSuport[indexNou];
  const setItemi = itemsSubiectulI.find(s => s.textId === text.id);

  if (!text || !setItemi) {
    afiseazaToast('Nu există itemi pentru acest text.', 'error');
    return;
  }

  // Resetare stare
  stare.testSubI.raspunsuri = {};
  stare.testSubI.incercari = {};
  stare.testSubI.verificat = false;
  stare.testSubI.punctajObtinut = 0;

  // Afișează textul-suport
  afiseazaTextSuport(text);

  // Afișează itemii
  afiseazaItemiSubI(setItemi.itemi);

  // Afișează butonul de verificare
  document.getElementById('btn-verifica-subI').style.display = 'inline-flex';
  document.getElementById('rezultate-subI').style.display = 'none';
}

/**
 * Randează textul-suport în cardul de text.
 */
function afiseazaTextSuport(text) {
  document.getElementById('titlu-text-suport').textContent = text.titlu;
  document.getElementById('meta-text-suport').innerHTML =
    `${text.autor} &bull; <em>${text.sursa}</em> &bull;
     <span style="background:var(--gold);color:var(--navy-dark);padding:2px 8px;border-radius:10px;font-size:.75rem;font-weight:700;">
       ${text.tip === 'literar' ? 'Literar' : 'Nonliterar'}
     </span>`;

  const corpul = document.getElementById('corpul-textului');
  corpul.innerHTML = '';
  text.corpus.split('\n').filter(p => p.trim()).forEach(paragraf => {
    const el = document.createElement('p');
    el.textContent = paragraf;
    corpul.appendChild(el);
  });
  document.getElementById('text-suport-container').style.display = '';
  document.getElementById('itemi-subI-container').style.display = 'flex';
}

/**
 * Construiește și randează itemii în DOM.
 * @param {Array} itemi - array de itemi din items.js
 */
function afiseazaItemiSubI(itemi, container = 'itemi-subI-container', prefix = '') {
  const cont = document.getElementById(container);
  cont.innerHTML = '';
  cont.style.display = 'flex';

  itemi.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.id = (prefix || '') + 'card-' + item.id;

    card.innerHTML = `
      <div class="item-header">
        <span class="item-nr">Cerința ${item.nr}.</span>
        <span class="item-punctaj">${item.punctaj} puncte</span>
      </div>
      <div class="item-body">
        <div class="item-cerinta">${item.cerinta.replace(/\n/g, '<br>')}</div>
        ${construiesteInputItem(item, prefix)}
        <div class="item-hint-zona">
          <button class="btn-hint" onclick="cereIndiciu('${item.id}')">💡 Vreau un indiciu</button>
        </div>
        <div class="item-feedback" id="${(prefix || '')}feedback-${item.id}" style="display:none;"></div>
      </div>`;

    cont.appendChild(card);
  });
}

/**
 * Construiește HTML-ul pentru inputul corespunzător tipului de item.
 */
function construiesteInputItem(item, prefix = '') {
  if (item.tip === 'grila') {
    const litere = ['a', 'b', 'c', 'd'];
    return `<div class="optiuni-grid" id="${prefix}opt-${item.id}">
      ${item.optiuni.map((opt, i) => `
        <button class="optiune-btn"
                id="${prefix}opt-${item.id}-${i}"
                onclick="selecteazaOptiune('${item.id}', ${i}, '${prefix}')"
                aria-label="Opțiunea ${litere[i]}: ${opt}">
          <span class="optiune-litera">${litere[i]}</span>
          <span>${opt}</span>
        </button>`).join('')}
    </div>`;
  }
  if (item.tip === 'completare') {
    return `<input class="input-raspuns"
                   type="text"
                   id="${prefix}input-${item.id}"
                   placeholder="Scrie răspunsul tău..."
                   aria-label="Câmp de răspuns pentru cerința ${item.nr}"
                   onchange="salveazaRaspuns('${item.id}', this.value, '${prefix}')" />`;
  }
  return '';
}

/**
 * Înregistrează selecția la grilă.
 */
function selecteazaOptiune(itemId, indexOptiune, prefix = '') {
  if (stare.testSubI.verificat && !prefix) return; // blocat după verificare la test normal

  // Vizual: marchează opțiunea selectată
  const grid = document.getElementById(prefix + 'opt-' + itemId);
  if (!grid) return;
  grid.querySelectorAll('.optiune-btn').forEach(b => b.classList.remove('selectata'));
  const btn = document.getElementById(prefix + 'opt-' + itemId + '-' + indexOptiune);
  if (btn) btn.classList.add('selectata');

  stare.testSubI.raspunsuri[itemId] = indexOptiune;
}

/**
 * Salvează răspunsul la completare.
 */
function salveazaRaspuns(itemId, valoare, prefix = '') {
  stare.testSubI.raspunsuri[itemId] = valoare.trim().toLowerCase();
}

/**
 * Verifică toate răspunsurile Subiectului I.
 */
function verificaSubiectulI() {
  const text = texteSuport[stare.testSubI.textIndex];
  const setItemi = itemsSubiectulI.find(s => s.textId === text.id);
  if (!setItemi) return;

  let punctajTotal = 0;
  let itemsCorecte = 0;

  setItemi.itemi.forEach(item => {
    const raspuns = stare.testSubI.raspunsuri[item.id];
    const eCorect = verificaCorectitudine(item, raspuns);

    if (eCorect) {
      punctajTotal += item.punctaj;
      itemsCorecte++;
    }

    // Afișează feedback vizual
    const card = document.getElementById('card-' + item.id);
    const feedbackEl = document.getElementById('feedback-' + item.id);

    if (card) card.classList.add(eCorect ? 'raspuns-corect' : 'raspuns-gresit');

    if (feedbackEl) {
      feedbackEl.style.display = 'flex';
      feedbackEl.className = 'item-feedback ' + (eCorect ? 'corect' : 'gresit');
      feedbackEl.innerHTML = `
        <span class="feedback-icon">${eCorect ? '✓' : '✗'}</span>
        <div>
          <strong>${eCorect ? 'Răspuns corect!' : 'Răspuns incorect.'}</strong>
          ${!eCorect ? `<br><em>Răspuns corect: <strong>${item.raspunsCorectAfisat || (Array.isArray(item.raspunsCorect) ? item.raspunsCorect[0] : item.optiuni?.[item.raspunsCorect])}</strong></em>` : ''}
          <br>${item.feedback}
        </div>`;
    }

    // Blochează input-urile după verificare
    if (item.tip === 'grila') {
      const grid = document.getElementById('opt-' + item.id);
      if (grid) {
        grid.querySelectorAll('.optiune-btn').forEach((btn, i) => {
          btn.disabled = true;
          if (i === item.raspunsCorect) btn.classList.add('corecta');
          else if (i === raspuns) btn.classList.add('gresita');
        });
      }
    } else if (item.tip === 'completare') {
      const inp = document.getElementById('input-' + item.id);
      if (inp) {
        inp.disabled = true;
        inp.classList.add(eCorect ? 'corect' : 'gresit');
      }
    }
  });

  stare.testSubI.verificat = true;
  stare.testSubI.punctajObtinut = punctajTotal;
  stare.itemsCorecte += itemsCorecte;
  stare.itemsRezolvati += setItemi.itemi.length;
  stare.scorTotal += punctajTotal;
  actualizeazaScorUI();

  // Afișează panel rezultate
  afiseazaRezultateSubI(punctajTotal, setItemi.itemi.length * 6, itemsCorecte, setItemi.itemi.length);
}

/**
 * Verifică dacă răspunsul dat este corect.
 */
function verificaCorectitudine(item, raspuns) {
  if (raspuns === undefined || raspuns === null || raspuns === '') return false;

  if (item.tip === 'grila') {
    return parseInt(raspuns) === item.raspunsCorect;
  }
  if (item.tip === 'completare') {
    const r = String(raspuns).toLowerCase().trim();
    if (Array.isArray(item.raspunsCorect)) {
      return item.raspunsCorect.some(rc => {
        const rcNorm = String(rc).toLowerCase().trim();
        return r.includes(rcNorm) || rcNorm.includes(r);
      });
    }
    return r.includes(String(item.raspunsCorect).toLowerCase().trim());
  }
  return false;
}

/**
 * Afișează panoul de rezultate după Subiectul I.
 */
function afiseazaRezultateSubI(punctaj, maxPunctaj, corecte, totalItemi) {
  const procent = Math.round((punctaj / maxPunctaj) * 100);
  const culoare = procent >= 70 ? 'var(--success)' : procent >= 50 ? 'var(--warning)' : 'var(--error)';
  const mesaj = procent >= 90 ? 'Excelent! Ești pregătit!' :
    procent >= 70 ? 'Bine! Mai exersează!' :
      procent >= 50 ? 'Continuă să înveți!' : 'Nu renunța, mai încearcă!';

  const el = document.getElementById('rezultate-subI');
  el.style.display = '';
  el.innerHTML = `
    <div class="rezultate-panel">
      <div class="rezultate-header">
        <div class="rezultate-nota" style="color:${culoare};">${punctaj}p</div>
        <p style="font-size:1.1rem;font-weight:600;margin:.5rem 0;">${mesaj}</p>
        <p style="color:var(--text-muted);">${corecte} din ${totalItemi} răspunsuri corecte &bull; ${procent}%</p>
      </div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px;">
        <button class="btn btn-gold" onclick="genereazaTestSubI()">Alt set de exerciții</button>
        <button class="btn btn-outline" onclick="afiseazaModul('subII')">Mergi la Subiectul II</button>
      </div>
    </div>`;

  actualizeazaProgresGlobal();
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================================
// 4. SUBIECTUL II – REDACTARE & EVALUARE
// ============================================================

let tipRedactareActiv = null;

function selecteazaTipRedactare(tip) {
  tipRedactareActiv = tip;

  // Vizual
  document.querySelectorAll('.tip-card').forEach(c => c.classList.remove('activ'));
  document.getElementById('tip-' + tip)?.classList.add('activ');

  genereazaSubiectulII(tip);
}

function genereazaSubiectulII(tip) {
  const tipFolosit = tip || tipRedactareActiv;
  if (!tipFolosit) {
    afiseazaToast('Selectează mai întâi un tip de compunere!', 'error');
    return;
  }
  tipRedactareActiv = tipFolosit;

  const cerinte = itemsSubiectulII[tipFolosit];
  if (!cerinte || cerinte.length === 0) return;

  const idx = Math.floor(Math.random() * cerinte.length);
  const cerinta = cerinte[idx];
  stare.testSubII.tipActiv = tipFolosit;

  document.getElementById('cerinta-redactare-text').innerHTML = cerinta.cerinta.replace(/\n/g, '<br>').replace(/•/g, '&bull;');
  document.getElementById('punctaj-redactare').textContent = cerinta.punctaj;

  // Structura
  const structEl = document.getElementById('structura-compunere');
  structEl.innerHTML = cerinta.structura.map(step => `
    <div class="structura-paso">
      <span class="structura-nr">${step.nr}</span>
      <span>${step.text}</span>
    </div>`).join('');

  document.getElementById('zona-redactare').style.display = 'flex';
  document.getElementById('textarea-compunere').value = '';
  document.getElementById('feedback-redactare').style.display = 'none';
  actualizeazaStats();

  document.getElementById('zona-redactare').scrollIntoView({ behavior: 'smooth' });
}

function actualizeazaStats() {
  const text = document.getElementById('textarea-compunere')?.value || '';
  const cuvinte = text.trim() ? text.trim().split(/\s+/).length : 0;
  const randuri = Math.ceil(cuvinte / 10); // aprox. 10 cuvinte/rând
  document.getElementById('numar-cuvinte').textContent = cuvinte + ' cuvinte';
  document.getElementById('numar-randuri').textContent = '~' + randuri + ' rânduri';
}

function evalueazaCompunere() {
  const text = document.getElementById('textarea-compunere')?.value?.trim();
  if (!text || text.length < 50) {
    afiseazaToast('Scrie cel puțin câteva propoziții pentru a putea evalua compunerea!', 'error');
    return;
  }

  const cuvinte = text.split(/\s+/).length;
  const randuri = Math.ceil(cuvinte / 10);

  // Criterii de evaluare (simulare – fără AI real)
  const criterii = calculeazaCriterii(text, cuvinte, randuri);
  const totalPuncte = criterii.reduce((sum, c) => sum + c.puncte, 0);

  const feedbackEl = document.getElementById('feedback-redactare');
  feedbackEl.style.display = '';

  feedbackEl.innerHTML = `
    <h4>Evaluare compunere</h4>
    <div class="grila-evaluare">
      ${criterii.map(c => `
        <div class="criteriu-rand">
          <span class="criteriu-label">${c.criteriu}</span>
          <div class="criteriu-bar"><div class="criteriu-bar-fill" style="width:${Math.round(c.puncte / c.maxPuncte * 100)}%"></div></div>
          <span class="criteriu-scor">${c.puncte}/${c.maxPuncte}p</span>
        </div>`).join('')}
    </div>
    <div class="scor-total-redactare">
      <div class="scor-nr">${totalPuncte}p</div>
      <div>din 36 puncte</div>
      <p style="margin-top:8px;font-size:.85rem;color:rgba(255,255,255,.8);">
        ${totalPuncte >= 30 ? 'Excelent!' : totalPuncte >= 22 ? 'Bine!' : totalPuncte >= 16 ? 'Continuă!' : 'Mai exersează!'}
      </p>
    </div>
    <div style="margin-top:16px;padding:14px;background:var(--info-bg);border-radius:var(--radius);font-size:.87rem;color:#084298;border-left:4px solid var(--info);">
      <strong>Sfat de la Prof. de Română:</strong><br>
      ${genereazaSfatRedactare(criterii, randuri)}
    </div>
    <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-gold" onclick="genereazaSubiectulII()">Altă cerință</button>
      <button class="btn btn-outline" onclick="resetRedactare()">Rescrie</button>
    </div>`;

  feedbackEl.scrollIntoView({ behavior: 'smooth' });
}

function calculeazaCriterii(text, cuvinte, randuri) {
  const criterii = [];

  // 1. Lungime (rânduri)
  let puncteRanduri = randuri >= 14 ? 6 : randuri >= 10 ? 4 : randuri >= 6 ? 2 : 1;
  criterii.push({ criteriu: 'Lungimea compunerii (16-18 rânduri recomandat)', puncte: puncteRanduri, maxPuncte: 6 });

  // 2. Structură (verifică cuvinte cheie)
  const areStructura = /\n/.test(text) || text.split('.').length > 4;
  criterii.push({ criteriu: 'Structură (introducere, cuprins, final)', puncte: areStructura ? 5 : 3, maxPuncte: 6 });

  // 3. Vocabulary richness
  const cuvinteUnique = new Set(text.toLowerCase().replace(/[,\.!?;:]/g, '').split(/\s+/));
  const diversitate = cuvinte > 0 ? cuvinteUnique.size / cuvinte : 0;
  const puncteVocab = diversitate > 0.7 ? 6 : diversitate > 0.55 ? 4 : 2;
  criterii.push({ criteriu: 'Diversitatea vocabularului', puncte: puncteVocab, maxPuncte: 6 });

  // 4. Figuri de stil (cuvinte-cheie sugestive)
  const figuriCheie = ['ca', 'precum', 'parcă', 'ca și cum', 'asemeni', 'îmi amintesc', 'simțeam'];
  const areFiguri = figuriCheie.some(f => text.toLowerCase().includes(f));
  criterii.push({ criteriu: 'Mijloace expresive (figuri de stil)', puncte: areFiguri ? 5 : 3, maxPuncte: 6 });

  // 5. Ortografie (lipsa unor erori comune – simplificat)
  const eroriComune = ['am mers', 'sa', 'nea', 'ia'];
  const puncteOrto = 6; // Fără verificator real, acordăm punctaj maxim cu sfat
  criterii.push({ criteriu: 'Ortografie și punctuație', puncte: puncteOrto, maxPuncte: 6 });

  // 6. Coeziune (conectori logici)
  const conectori = ['deoarece', 'astfel', 'prin urmare', 'în concluzie', 'totuși', 'în timp ce', 'după ce', 'când'];
  const areConectori = conectori.some(c => text.toLowerCase().includes(c));
  criterii.push({ criteriu: 'Coeziunea textului (conectori logici)', puncte: areConectori ? 6 : 4, maxPuncte: 6 });

  return criterii;
}

function genereazaSfatRedactare(criterii, randuri) {
  if (randuri < 14) return 'Compunerea ta este prea scurtă. La examen se cer 16-18 rânduri. Dezvoltă mai mult acțiunea și adaugă detalii descriptive!';
  const vocabCriteriu = criterii.find(c => c.criteriu.includes('vocabular'));
  if (vocabCriteriu && vocabCriteriu.puncte < 4) return 'Încearcă să variezi cuvintele folosite! Evită repetarea acelorași termeni și folosește sinonime.';
  return 'Compunerea arată bine! Asigură-te că ai verificat ortografia și că respecti exact cerința. Citește textul o dată înainte de a-l preda!';
}

function resetRedactare() {
  document.getElementById('textarea-compunere').value = '';
  document.getElementById('feedback-redactare').style.display = 'none';
  actualizeazaStats();
}

// ============================================================
// 5. TEST COMPLET – TIMER & CORECTARE
// ============================================================

function incepeTestComplet() {
  document.getElementById('test-intro').style.display = 'none';
  document.getElementById('test-complet-continut').style.display = '';

  // Generează un test complet
  const textIdx = Math.floor(Math.random() * texteSuport.length);
  const text = texteSuport[textIdx];
  const setItemi = itemsSubiectulI.find(s => s.textId === text.id);

  stare.testSubI.textIndex = textIdx;
  stare.testSubI.raspunsuri = {};
  stare.testSubI.verificat = false;

  // Construiește conținutul testului
  const cont = document.getElementById('test-complet-itemi');
  cont.innerHTML = '';

  // Subiectul I
  const sectSubI = document.createElement('div');
  sectSubI.innerHTML = `
    <div class="modul-header" style="margin-bottom:16px;">
      <div>
        <div class="modul-titlu">Subiectul I – Receptarea textului (54 puncte)</div>
        <div class="modul-desc">Citește textul și răspunde la toți itemii.</div>
      </div>
    </div>`;
  cont.appendChild(sectSubI);

  // Text suport
  if (text && setItemi) {
    const cardText = document.createElement('div');
    cardText.className = 'text-suport-card';
    cardText.style.marginBottom = '20px';
    cardText.innerHTML = `
      <div class="text-suport-header">
        <h3>${text.titlu}</h3>
        <div class="text-meta">${text.autor} · <em>${text.sursa}</em></div>
      </div>
      <div class="text-suport-body">${text.corpus.split('\n').filter(p => p.trim()).map(p => `<p>${p}</p>`).join('')}</div>`;
    cont.appendChild(cardText);

    // Itemi Subiectul I
    const itemiContTC = document.createElement('div');
    itemiContTC.id = 'tc-itemi-subI';
    itemiContTC.className = 'itemi-container';
    cont.appendChild(itemiContTC);
    afiseazaItemiSubI(setItemi.itemi, 'tc-itemi-subI', 'tc_');
  }

  // Subiectul II
  const sectSubII = document.createElement('div');
  sectSubII.style.marginTop = '24px';
  const tipRandom = ['narativ', 'descriptiv', 'eseu'][Math.floor(Math.random() * 3)];
  const cerintaIdx = Math.floor(Math.random() * (itemsSubiectulII[tipRandom]?.length || 1));
  const cerinta = itemsSubiectulII[tipRandom]?.[cerintaIdx];

  stare.testComplet.cerintaSubII = cerinta;

  sectSubII.innerHTML = `
    <div class="modul-header" style="margin:16px 0;">
      <div>
        <div class="modul-titlu">Subiectul II – Redactare (36 puncte)</div>
        <div class="modul-desc">Timp recomandat: 55 minute.</div>
      </div>
    </div>
    <div class="cerinta-redactare-card">
      <div class="cerinta-label">Cerința</div>
      <div class="cerinta-text">${cerinta?.cerinta?.replace(/\n/g, '<br>').replace(/•/g, '&bull;') || ''}</div>
      <div class="cerinta-punctaj">${cerinta?.punctaj || ''}</div>
    </div>
    <div class="editor-zona" style="margin-top:14px;">
      <div class="editor-header">
        <span>Compunerea ta</span>
        <div class="editor-stats">
          <span id="tc-numar-cuvinte">0 cuvinte</span>
        </div>
      </div>
      <textarea id="tc-textarea"
                class="textarea-compunere"
                placeholder="Scrie compunerea ta aici..."
                oninput="document.getElementById('tc-numar-cuvinte').textContent=this.value.trim().split(/\\s+/).filter(Boolean).length+' cuvinte'"></textarea>
    </div>`;
  cont.appendChild(sectSubII);

  // Pornește timer-ul
  stare.testComplet.secundeRamase = 7200;
  stare.testComplet.activ = true;
  pornesteTimer();
}

function pornesteTimer() {
  if (stare.testComplet.timerInterval) clearInterval(stare.testComplet.timerInterval);

  stare.testComplet.timerInterval = setInterval(() => {
    stare.testComplet.secundeRamase--;
    const s = stare.testComplet.secundeRamase;

    if (s <= 0) {
      clearInterval(stare.testComplet.timerInterval);
      finalizeazaTestComplet(true);
      return;
    }

    const ore = Math.floor(s / 3600);
    const min = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    const display = `${ore}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

    document.getElementById('timer-display').textContent = display;

    // Progres timer
    const procent = (s / 7200) * 100;
    document.getElementById('timer-fill').style.width = procent + '%';

    // Urgența – ultimele 10 minute
    if (s < 600) document.getElementById('timer-bar').classList.add('urgenta');
    if (s === 300) afiseazaToast('Mai sunt 5 minute! Termină compunerea!', 'error');
  }, 1000);
}

function finalizeazaTestComplet(expirat = false) {
  clearInterval(stare.testComplet.timerInterval);
  stare.testComplet.activ = false;

  if (expirat) afiseazaToast('Timpul a expirat! Testul a fost trimis automat.', 'error');

  document.getElementById('test-complet-continut').style.display = 'none';

  // Corectare Subiectul I
  const textIdx = stare.testSubI.textIndex;
  const text = texteSuport[textIdx];
  const setItemi = itemsSubiectulI.find(s => s.textId === text?.id);

  let punctSubI = 0, corecteSubI = 0;
  if (setItemi) {
    setItemi.itemi.forEach(item => {
      const raspuns = stare.testSubI.raspunsuri[item.id];
      if (verificaCorectitudine(item, raspuns)) {
        punctSubI += item.punctaj;
        corecteSubI++;
      }
    });
  }

  const compunere = document.getElementById('tc-textarea')?.value?.trim() || '';
  const criterii = calculeazaCriterii(compunere, compunere.split(/\s+/).filter(Boolean).length, Math.ceil(compunere.split(/\s+/).filter(Boolean).length / 10));
  const punctSubII = criterii.reduce((s, c) => s + c.puncte, 0);

  const totalPuncte = punctSubI + punctSubII + 10; // + 10 din oficiu
  const nota = (totalPuncte / 10).toFixed(2);

  afiseazaRezultateTestComplet(punctSubI, punctSubII, totalPuncte, nota, corecteSubI, setItemi?.itemi?.length || 0);
}

function calculNota(puncte) {
  if (puncte >= 95) return 10;
  if (puncte >= 85) return 9;
  if (puncte >= 75) return 8;
  if (puncte >= 65) return 7;
  if (puncte >= 55) return 6;
  if (puncte >= 45) return 5;
  return Math.max(1, Math.floor(puncte / 10));
}

function afiseazaRezultateTestComplet(punctSubI, punctSubII, total, nota, corecteSubI, totalItemiSubI) {
  const el = document.getElementById('rezultate-test-complet');
  el.style.display = '';

  const clsNota = nota >= 9 ? 'nota-excelent' : nota >= 5 ? 'nota-5plus' : 'nota-sub5';
  const mesaj = nota >= 9 ? 'Felicitări! Performanță excelentă!' :
    nota >= 7 ? 'Bine! Continuă să exersezi!' :
      nota >= 5 ? 'Ai promovat! Mai lucrează la punctele slabe.' :
        'Nu renunța! Exersează mai mult și vei reuși!';

  el.innerHTML = `
    <div class="rezultate-panel">
      <div class="rezultate-header">
        <div class="rezultate-nota ${clsNota}">${nota}</div>
        <p style="font-size:1.3rem;font-weight:700;margin:.5rem 0;">${mesaj}</p>
        <p style="color:var(--text-muted);">Total: ${total} puncte din 100</p>
      </div>
      <div class="test-info-grid" style="margin:20px 0;">
        <div class="test-info-card">
          <div class="test-info-icon">I</div>
          <div class="test-info-label">Subiectul I</div>
          <div class="test-info-val">${punctSubI}/54p</div>
          <small style="color:var(--text-muted);font-size:.78rem;">${corecteSubI}/${totalItemiSubI} corecte</small>
        </div>
        <div class="test-info-card">
          <div class="test-info-icon">II</div>
          <div class="test-info-label">Subiectul II</div>
          <div class="test-info-val">${punctSubII}/36p</div>
        </div>
        <div class="test-info-card">
          <div class="test-info-icon">+</div>
          <div class="test-info-label">Din oficiu</div>
          <div class="test-info-val">10p</div>
        </div>
        <div class="test-info-card" style="border-top-color:var(--gold);">
          <div class="test-info-icon">N</div>
          <div class="test-info-label">Nota</div>
          <div class="test-info-val" style="font-size:1.5rem;color:var(--navy);">${nota}</div>
        </div>
      </div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-gold" onclick="reiaTest()">Alt test</button>
        <button class="btn btn-outline" onclick="afiseazaModul('subI')">Exersează Subiectul I</button>
      </div>
    </div>`;

  el.scrollIntoView({ behavior: 'smooth' });
}

function reiaTest() {
  document.getElementById('test-intro').style.display = '';
  document.getElementById('rezultate-test-complet').style.display = 'none';
  document.getElementById('test-complet-continut').style.display = 'none';
}

// ============================================================
// 6. MODULUL AJUTOR – ACORDEON
// ============================================================

let ajutorInitializat = false;

function initAjutor() {
  if (ajutorInitializat) return;
  ajutorInitializat = true;

  // Figuri de stil
  const gridFiguri = document.getElementById('grid-figuri-stil');
  if (gridFiguri && typeof figuriDeStil !== 'undefined') {
    gridFiguri.innerHTML = figuriDeStil.map(f => `
      <div class="figura-card">
        <h5>${f.nume}</h5>
        <p>${f.definitie}</p>
        <div class="figura-exemplu">Ex: ${f.exemplu}</div>
      </div>`).join('');
  }

  // Vocabular — complet
  document.getElementById('continut-vocabular').innerHTML = `
    <div class="figuri-grid">
      <div class="figura-card"><h5>Sinonim</h5><p>Cuvânt cu sens asemănător cu altul.</p><div class="figura-exemplu">frumos = splendid, minunat, fermecător</div></div>
      <div class="figura-card"><h5>Antonim</h5><p>Cuvânt cu sens opus.</p><div class="figura-exemplu">fericit ↔ trist, lumină ↔ întuneric</div></div>
      <div class="figura-card"><h5>Omonim</h5><p>Cuvinte cu aceeași formă, dar sens diferit.</p><div class="figura-exemplu">«broască» (animal) vs. «broască» (a ușii)</div></div>
      <div class="figura-card"><h5>Paronim</h5><p>Cuvinte cu formă asemănătoare, dar sens diferit. Atenție la confuzii!</p><div class="figura-exemplu">«complement» vs. «compliment», «original» vs. «originar»</div></div>
      <div class="figura-card"><h5>Sens propriu</h5><p>Sensul de bază, literal al cuvântului, primul din dicționar.</p><div class="figura-exemplu">inimă = organ al corpului uman</div></div>
      <div class="figura-card"><h5>Sens figurat</h5><p>Sens metaforic, derivat prin asociere sau transfer de semnificație.</p><div class="figura-exemplu">«om cu inimă mare» = generos, «a lua foc» = a se enerva</div></div>
      <div class="figura-card"><h5>Câmp semantic</h5><p>Grup de cuvinte care aparțin aceluiași domeniu tematic. Nu confunda cu familia lexicală!</p><div class="figura-exemplu">Câmpul semantic al «apei»: lac, val, mal, nufăr, izvor, pârâu</div></div>
      <div class="figura-card"><h5>Familie lexicală</h5><p>Cuvinte formate din același radical prin derivare sau compunere.</p><div class="figura-exemplu">Familia «apă»: apos, apărel, subacvatic, acvatic</div></div>
      <div class="figura-card"><h5>Cuvânt de bază / derivat / compus</h5><p>Cuvânt de bază = fără prefix/sufix. Derivat = cu afixe. Compus = din 2+ cuvinte.</p><div class="figura-exemplu">«floare» (bază) → «înflorit» (derivat) → «floarea-soarelui» (compus)</div></div>
    </div>`;

  // FONETICĂ
  const foneticaEl = document.getElementById('continut-fonetica');
  if (foneticaEl) {
    foneticaEl.innerHTML = `
    <div class="figuri-grid">
      <div class="figura-card"><h5>Sunet vs. Literă</h5><p>Sunetul = ceea ce auzim; litera = ceea ce scriem. Unele litere notează 2 sunete, și invers.</p><div class="figura-exemplu">«ex» are 4 litere, dar 5 sunete (e-c-s-a-m-e-n); «x» = 2 sunete (cs/gz)</div></div>
      <div class="figura-card"><h5>Vocale</h5><p>Sunete care pot forma singure o silabă: <strong>a, ă, â (î), e, i, o, u</strong>. Sunt 7 vocale în limba română.</p><div class="figura-exemplu">a-pă (2 vocale, 2 silabe)</div></div>
      <div class="figura-card"><h5>Consoane</h5><p>Sunete care nu pot forma singure silabă. Se pronunță doar împreună cu o vocală.</p><div class="figura-exemplu">b, c, d, f, g, h, j, k, l, m, n, p, r, s, ș, t, ț, v, z</div></div>
      <div class="figura-card"><h5>Semivocale</h5><p>Sunete intermediare între vocale și consoane. Apar în diftong sau triftong. Nu poartă niciodată accent.</p><div class="figura-exemplu">«ea» din «seară» — «e» este semivocală, «a» este vocală</div></div>
      <div class="figura-card"><h5>Diftong</h5><p>Grup de 2 sunete (vocală + semivocală sau invers) pronunțate într-o singură silabă.</p><div class="figura-exemplu">«ea» (seară), «oa» (foarte), «ai» (dai), «ou» (nou)</div></div>
      <div class="figura-card"><h5>Triftong</h5><p>Grup de 3 sunete (semivocală + vocală + semivocală) pronunțate într-o singură silabă.</p><div class="figura-exemplu">«eau» (leoaică), «eai» (voieai), «oai» (ploaia)</div></div>
      <div class="figura-card"><h5>Hiat</h5><p>Grup de 2 vocale alăturate pronunțate în silabe DIFERITE. Fiecare vocală e accentuabilă.</p><div class="figura-exemplu">«po-e-zi-e» (4 silabe, hiat e-i), «a-er» (hiat a-e)</div></div>
      <div class="figura-card"><h5>Despărțirea în silabe</h5><p>Regulile principale: V-C (a-pă), V-CC (al-tul), VC-CV (ob-lic). Diftongii și triftongii stau în aceeași silabă.</p><div class="figura-exemplu">«car-te», «scri-i-tor», «co-pi-lă-ri-e»</div></div>
      <div class="figura-card"><h5>Accentul</h5><p>Silaba pronunțată cu mai mare intensitate. În limba română, accentul este liber (poate cădea pe orice silabă).</p><div class="figura-exemplu">«co-PII» vs. «CO-pii» — accentul schimbă sensul!</div></div>
    </div>`;
  }

  // MORFOLOGIE
  const morfologieEl = document.getElementById('continut-morfologie');
  if (morfologieEl) {
    morfologieEl.innerHTML = `
    <h4 style="margin-bottom:12px;color:var(--navy);">Părți de vorbire flexibile</h4>
    <div class="figuri-grid">
      <div class="figura-card"><h5>Substantivul</h5>
        <p>Denumește ființe, lucruri, fenomene, stări, acțiuni. Se flexionează după gen, număr, caz.</p>
        <div class="figura-exemplu">«copilul» — gen masculin, nr. singular, caz nominativ, articulat hotărât</div>
      </div>
      <div class="figura-card"><h5>Articolul</h5>
        <p>Însoțește substantivul. Hotărât (-(u)l, -a, -le): «copilul». Nehotărât (un, o, niște): «un copil». Posesiv-genitival (al, a, ai, ale): «al meu».</p>
        <div class="figura-exemplu">«Cartea mamei» — art. hotărât «-a», posesiv-genitival «a» (subînțeles)</div>
      </div>
      <div class="figura-card"><h5>Adjectivul</h5>
        <p>Exprimă o însușire a substantivului. Se acordă în gen, număr, caz. Are grade de comparație.</p>
        <div class="figura-exemplu">«frumoasă» — adj. calificativ, f., sg., grad pozitiv. «mai frumoasă» — comparativ de superioritate</div>
      </div>
      <div class="figura-card"><h5>Pronumele</h5>
        <p>Înlocuiește un substantiv. Tipuri: personal (eu, tu), posesiv (al meu), demonstrativ (acesta), relativ (care), interogativ (cine), nehotărât (cineva), negativ (nimeni), reflexiv (se, -și).</p>
        <div class="figura-exemplu">«El citește» — pron. personal, pers. a III-a, m., sg., N.</div>
      </div>
      <div class="figura-card"><h5>Numeralul</h5>
        <p>Indică un număr sau o ordine. Cardinal (doi, trei), ordinal (primul, al doilea), colectiv (amândoi), distributiv (câte doi).</p>
        <div class="figura-exemplu">«al doilea» — numeral ordinal, m., sg.</div>
      </div>
      <div class="figura-card"><h5>Verbul</h5>
        <p>Exprimă o acțiune, o stare sau o existență. Se conjugă la mod, timp, persoană, număr. Moduri: indicativ, conjunctiv, condițional-optativ, imperativ + moduri nepersonale (infinitiv, gerunziu, participiu, supinul).</p>
        <div class="figura-exemplu">«citesc» — v. a citi, conj. IV, ind., prez., pers. I, sg. «am citit» — perf. compus</div>
      </div>
    </div>
    <h4 style="margin:20px 0 12px;color:var(--navy);">Părți de vorbire neflexibile</h4>
    <div class="figuri-grid">
      <div class="figura-card"><h5>Adverbul</h5>
        <p>Determină un verb, adjectiv sau alt adverb. Exprimă modul, locul, timpul, cauza. Are grade de comparație.</p>
        <div class="figura-exemplu">«frumos» (mod), «aici» (loc), «ieri» (timp), «foarte» (intensitate)</div>
      </div>
      <div class="figura-card"><h5>Prepoziția</h5>
        <p>Leagă un cuvânt regent de un cuvânt subordonat. Nu are funcție sintactică proprie.</p>
        <div class="figura-exemplu">«pe», «în», «la», «de», «cu», «fără», «despre», «printre»</div>
      </div>
      <div class="figura-card"><h5>Conjuncția</h5>
        <p>Leagă cuvinte sau propoziții. Coordonatoare (și, dar, sau, ci, deci) sau subordonatoare (că, dacă, deși, încât, deoarece).</p>
        <div class="figura-exemplu">«Citesc și scriu.» — conj. coordonatoare copulativă «și»</div>
      </div>
      <div class="figura-card"><h5>Interjecția</h5>
        <p>Exprimă sentimente, stări, sunete. Nu are funcție sintactică (de regulă). Poate deveni predicat.</p>
        <div class="figura-exemplu">«Vai!», «Of!», «Bravo!», «Ura!», «Trosc!» (onomatopee)</div>
      </div>
    </div>`;
  }

  // SINTAXĂ
  const sintaxaEl = document.getElementById('continut-sintaxa');
  if (sintaxaEl) {
    sintaxaEl.innerHTML = `
    <h4 style="margin-bottom:12px;color:var(--navy);">Părțile de propoziție</h4>
    <div class="figuri-grid">
      <div class="figura-card"><h5>Subiectul (S)</h5>
        <p>Cine face acțiunea? Răspunde la: <strong>Cine? Ce?</strong> Poate fi exprimat (substantiv, pronume, numeral) sau neexprimat (subînțeles, inclus).</p>
        <div class="figura-exemplu">«<u>Copilul</u> citește.» — S exprimat prin subst. «copilul»</div>
      </div>
      <div class="figura-card"><h5>Predicatul (P)</h5>
        <p>Ce face subiectul? <strong>Predicat verbal</strong> = verb la mod personal. <strong>Predicat nominal</strong> = verb copulativ + nume predicativ.</p>
        <div class="figura-exemplu">PV: «Copilul <u>citește</u>.» PN: «Cerul <u>este senin</u>.» (este = copulativ, senin = NP)</div>
      </div>
      <div class="figura-card"><h5>Atributul (Atr)</h5>
        <p>Determină un substantiv. Răspunde la: <strong>Care? Ce fel de? Al cui? Câți?</strong> Tipuri: adjectival, substantival, pronominal, verbal (gerunzial, participial), adverbial.</p>
        <div class="figura-exemplu">«Floarea <u>roșie</u>» — Atr. adj.; «Cartea <u>fratelui</u>» — Atr. subst. genitival</div>
      </div>
      <div class="figura-card"><h5>Complementul direct (CD)</h5>
        <p>Completează sensul unui verb tranzitiv. Răspunde la: <strong>Ce? Pe cine?</strong></p>
        <div class="figura-exemplu">«Citesc <u>o carte</u>.» — CD exprimat prin subst. «carte»</div>
      </div>
      <div class="figura-card"><h5>Complementul indirect (CI)</h5>
        <p>Completează sensul unui verb, adjectiv sau adverb. Răspunde la: <strong>Cui? De cine? Cu cine? La ce?</strong></p>
        <div class="figura-exemplu">«Dau <u>mamei</u> o carte.» — CI în dativ, exprimat prin subst.</div>
      </div>
      <div class="figura-card"><h5>Complementul circumstanțial (CC)</h5>
        <p>Arată împrejurarea acțiunii. Tipuri: <strong>de loc</strong> (Unde?), <strong>de timp</strong> (Când?), <strong>de mod</strong> (Cum?), <strong>de cauză</strong> (De ce?), <strong>de scop</strong> (Cu ce scop?).</p>
        <div class="figura-exemplu">CCL: «Merg <u>la școală</u>.» CCT: «Pleacă <u>mâine</u>.» CCM: «Scrie <u>frumos</u>.»</div>
      </div>
    </div>
    <h4 style="margin:20px 0 12px;color:var(--navy);">Tipuri de propoziții în frază</h4>
    <div class="figuri-grid">
      <div class="figura-card"><h5>Propoziție principală (PP)</h5><p>Nu depinde de altă propoziție. Poate sta singură.</p><div class="figura-exemplu">«Am plecat acasă.»</div></div>
      <div class="figura-card"><h5>Propoziție subordonată</h5><p>Depinde de o altă propoziție (regentă). Se leagă prin conjuncții subordonatoare sau pronume/adverbe relative.</p><div class="figura-exemplu">«Știu <u>că va veni</u>.» — subordonată completivă directă</div></div>
      <div class="figura-card"><h5>Coordonare vs. Subordonare</h5>
        <p><strong>Coordonare</strong> = propoziții de același rang (legate prin: și, dar, sau, ci, deci). <strong>Subordonare</strong> = propoziție dependentă de alta (legate prin: că, dacă, deși, care, când, unde).</p>
        <div class="figura-exemplu">Coord.: «Citesc și scriu.» Subord.: «Citesc deoarece îmi place.»</div>
      </div>
    </div>`;
  }

  // Moduri de expunere
  document.getElementById('continut-expunere').innerHTML = `
    <div class="figuri-grid">
      <div class="figura-card"><h5>Narațiunea</h5><p>Prezintă fapte, acțiuni, evenimente care se desfășoară în timp. Verbele sunt la timpul trecut.</p><div class="figura-exemplu">Indicator: verbe la trecut, cuvinte temporale (apoi, după, când)</div></div>
      <div class="figura-card"><h5>Descrierea</h5><p>Prezintă aspectul/caracteristicile unui obiect, loc sau persoană. Verbele sunt la prezent.</p><div class="figura-exemplu">Indicator: adjective, imagini artistice, verbe la prezent</div></div>
      <div class="figura-card"><h5>Dialogul</h5><p>Schimb de replici între personaje. Marchează oralitatea și caracterizează indirect personajele.</p><div class="figura-exemplu">Indicator: liniuță de dialog, liniuță de pauză, verbe dicendi (zise, răspunse)</div></div>
      <div class="figura-card"><h5>Monologul</h5><p>Text vorbit sau gândit de un singur personaj.</p><div class="figura-exemplu">Interior: gânduri; exterior: discurs adresat unui public</div></div>
      <div class="figura-card"><h5>Argumentarea</h5><p>Exprime un punct de vedere și îl susține cu argumente. Structură: ipoteză → argument 1 → argument 2 → concluzie.</p><div class="figura-exemplu">Conectori: «în primul rând», «pe de altă parte», «în concluzie», «deoarece»</div></div>
    </div>`;

  // Strategii
  document.getElementById('continut-strategii').innerHTML = `
    <ul style="padding-left:18px;line-height:2;">
      <li><strong>Citește AMBELE texte înainte de a răspunde</strong> (10 min).</li>
      <li><strong>Subiectul I – Itemii A:</strong> Răspunsuri scurte, punctuale, cu termeni literari (30 min).</li>
      <li><strong>Subiectul I – Itemii B:</strong> Text la prima vedere – citire atentă, răspuns complet (20 min).</li>
      <li><strong>Subiectul II:</strong> Planifică 5 min, scrie 40 min, corectează 10 min.</li>
      <li><strong>Nu lăsa niciun item necompletat!</strong> Un răspuns parțial poate primi puncte parțiale.</li>
      <li><strong>Verifică ortografia</strong> la final (î/â, s/ș, t/ț, cratima, virgula).</li>
      <li><strong>Atenție la formulările cerințelor:</strong> «Menționează», «Explică», «Precizează», «Motivează» cer niveluri diferite de detaliu.</li>
      <li><strong>La redactare:</strong> numără rândurile! 16-18 rânduri = obligatoriu. Sub 10 rânduri = pierdere de puncte.</li>
    </ul>`;

  // Baremul oficial
  document.getElementById('continut-barem').innerHTML = `
    <table style="width:100%;border-collapse:collapse;font-size:.88rem;">
      <thead>
        <tr style="background:var(--navy);color:#fff;">
          <th style="padding:10px;text-align:left;">Cerință</th>
          <th style="padding:10px;text-align:center;">Punctaj</th>
        </tr>
      </thead>
      <tbody>
        ${[
      ['Subiectul I A – cerințele 1-4 (text literar studiat)', '24p (4 × 6p)'],
      ['Subiectul I A – redactare (ortografie, punctuație, coerență)', '10p'],
      ['Subiectul I B – cerințele 5-9 (text la prima vedere)', '30p (5 × 6p)'],
      ['Total Subiectul I', '54p'],
      ['Subiectul II – conținut și structură compunere', '18p'],
      ['Subiectul II – redactare (coeziune, vocabular, ortografie)', '18p'],
      ['Total Subiectul II', '36p'],
      ['Din oficiu', '10p'],
      ['TOTAL GENERAL', '100p (Nota = punctaj ÷ 10)'],
    ].map((r, i) => `<tr style="background:${i % 2 ? 'var(--bg-page)' : '#fff'};border-bottom:1px solid var(--border);${r[0].startsWith('Total') || r[0].startsWith('TOTAL') ? 'font-weight:700;' : ''}">
          <td style="padding:9px 10px;">${r[0]}</td>
          <td style="padding:9px 10px;text-align:center;font-weight:700;color:var(--navy);">${r[1]}</td>
        </tr>`).join('')}
      </tbody>
    </table>`;

  // Opere studiate (programa clasa a VIII-a)
  document.getElementById('continut-opere').innerHTML = `
    <div class="figuri-grid">
      ${[
      { autor: 'Mihai Eminescu', opere: 'Lacul, Revedere, O, rămâi, Sara pe deal, Luceafărul (fragment), Scrisoarea III (fragment)' },
      { autor: 'Ion Creangă', opere: 'Amintiri din copilărie (fragmente)' },
      { autor: 'Ion Luca Caragiale', opere: 'O scrisoare pierdută (fragmente), D-l Goe, Vizită' },
      { autor: 'Ioan Slavici', opere: 'Moara cu noroc (fragmente), Budulea Taichii' },
      { autor: 'Barbu Ștefănescu Delavrancea', opere: 'Sultănica' },
      { autor: 'Mihail Sadoveanu', opere: 'Baltagul (fragmente), Hanu Ancuței (fragmente)' },
      { autor: 'Vasile Alecsandri', opere: 'Malul Siretului, Pasteluri (Iarna, Miezul iernii)' },
      { autor: 'George Coșbuc', opere: 'Nunta Zamfirei, La oglindă' },
      { autor: 'Tudor Arghezi', opere: 'Testament, Cuvânt' },
      { autor: 'Lucian Blaga', opere: 'Eu nu strivesc corola de minuni a lumii' },
      { autor: 'Nicolae Labiș', opere: 'Moartea căprioarei' },
      { autor: 'Nichita Stănescu', opere: 'Lecția despre cub, În dulcele stil clasic' },
    ].map(o => `<div class="figura-card"><h5>${o.autor}</h5><p style="font-size:.8rem;">${o.opere}</p></div>`).join('')}
    </div>`;
}

function toggleAcordeon(id) {
  const btn = document.querySelector(`[onclick="toggleAcordeon('${id}')"]`);
  const body = document.getElementById('ac-' + id + '-body');
  if (!btn || !body) return;

  const esteOpen = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', !esteOpen);
  body.hidden = esteOpen;
}

// ============================================================
// 7. CHATBOT „Prof. de Română"
// ============================================================

let chatbotDeschis = false;
let mesajeBlocat = false; // previne spam

function toggleChatbot() {
  chatbotDeschis = !chatbotDeschis;
  const panel = document.getElementById('chatbot-panel');
  const toggle = document.getElementById('chatbot-toggle');

  panel.hidden = !chatbotDeschis;
  toggle.setAttribute('aria-expanded', chatbotDeschis);
  document.getElementById('chatbot-notif').style.display = 'none';

  if (chatbotDeschis && document.getElementById('chatbot-messages').children.length === 0) {
    adaugaMesajProfesor(`Salut! 👋 Sunt **Prof. de Română**, asistentul tău pentru Evaluarea Națională.

Pot să te ajut cu:
• Explicații despre figuri de stil
• Structura compunerii
• Vocabular și gramatică
• Strategii de examen
• Indicii (fără răspunsul complet!) pentru exercițiile la care ai greși

Cu ce pot să-ți fiu de ajutor? ✨`);
  }
}

function adaugaMesajProfesor(text, delay = 800) {
  const cont = document.getElementById('chatbot-messages');

  // Typing indicator
  const typing = document.createElement('div');
  typing.className = 'mesaj-typing';
  typing.innerHTML = '<span></span><span></span><span></span>';
  cont.appendChild(typing);
  cont.scrollTop = cont.scrollHeight;

  setTimeout(() => {
    typing.remove();
    const msg = document.createElement('div');
    msg.className = 'mesaj-profesor';
    // Procesare markdown simplu
    msg.innerHTML = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
    cont.appendChild(msg);
    cont.scrollTop = cont.scrollHeight;
    mesajeBlocat = false;
  }, delay);
}

function adaugaMesajElev(text) {
  const cont = document.getElementById('chatbot-messages');
  const msg = document.createElement('div');
  msg.className = 'mesaj-elev';
  msg.textContent = text;
  cont.appendChild(msg);
  cont.scrollTop = cont.scrollHeight;
}

async function trimiteIntrebare() {
  const input = document.getElementById('chatbot-input');
  const text = input.value.trim();
  if (!text || mesajeBlocat) return;

  input.value = '';
  adaugaMesajElev(text);
  mesajeBlocat = true;

  const t = text.toLowerCase();

  if (t.includes('indiciu') || t.includes('hint') || t.includes('ajută-mă')) {
    adaugaMesajProfesor("Pentru indicii la un exercițiu specific, apasă butonul **💡 Vreau un indiciu** direct de sub cerința respectivă. Te pot ghida pas cu pas!");
  } else {
    adaugaMesajProfesor("Stai să mă uit pe programa școlară...", 100);
    mesajeBlocat = true; // Still blocked while fetching
    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: text })
      });
      const data = await response.json();

      // Remove typing/loading message manually to replace with actual answer
      setTimeout(() => {
        const cont = document.getElementById('chatbot-messages');
        if (cont.lastChild) cont.lastChild.remove();
        adaugaMesajProfesor(data.answer || "Nu am găsit informația cerută, te rog reformulează.", 50);
      }, 500);
    } catch (e) {
      setTimeout(() => {
        const cont = document.getElementById('chatbot-messages');
        if (cont.lastChild) cont.lastChild.remove();
        adaugaMesajProfesor("A intervenit o eroare temporară la accesarea arhivei. Încearcă mai târziu.", 50);
      }, 500);
    }
  }
}

function trimiteIntrebarePredefinita(cheie) {
  if (mesajeBlocat) return;
  const intrebari = {
    figuri: "Ce figuri de stil trebuie să știu?",
    structura: "Cum fac structura compunerii?",
    vocabular: "Ce învăț la vocabular?",
    timp: "Cum gestionez timpul de examen?",
    nota10: "Cum iau nota 10 la română?"
  };

  adaugaMesajElev(intrebari[cheie]);
  mesajeBlocat = true;

  const raspuns = window.Assistant.raspunsuri[cheie] || "Te pot ajuta cu asta!";
  adaugaMesajProfesor(raspuns);
}

function cereIndiciu(itemId) {
  // Găsește itemul în bancă
  let itemGasit = null;
  [itemsSubiectulI, itemsSubiectulIB].forEach(pool => {
    pool.forEach(textSet => {
      if (textSet.itemi) {
        const it = textSet.itemi.find(i => i.id === itemId);
        if (it) itemGasit = it;
      }
    });
  });

  if (!chatbotDeschis) toggleChatbot();

  const raspuns = window.Assistant.oferaIndiciu(itemGasit);
  adaugaMesajProfesor(raspuns, 500);
}



// ============================================================
// 9. BIBLIOTECA & DICȚIONAR
// ============================================================

let bibliotecaInitializata = false;
function initBiblioteca() {
  if (bibliotecaInitializata) return;
  bibliotecaInitializata = true;

  const cont = document.getElementById('continut-biblioteca');
  if (!cont) return;

  cont.innerHTML = texteSuport.map(t => {
    // Căutăm câțiva itemi pentru a genera cuvinte-cheie/teme
    const set = itemsSubiectulI.find(s => s.textId === t.id);
    const tema = set?.itemi?.find(i => i.cerinta.toLowerCase().includes('tema'))?.raspunsCorect?.[0] || 'literatură';

    return `
        <div class="biblioteca-card">
            <div class="bib-badge">${t.tip.toUpperCase()}</div>
            <h3>${t.titlu}</h3>
            <p class="bib-autor">${t.autor}</p>
            <div class="bib-rezumat">${t.corpus.substring(0, 150)}...</div>
            <div class="bib-tags">
                <span>#${tema}</span>
                <span>#clasa8</span>
                <span>#examen</span>
            </div>
            <button class="btn btn-outline btn-sm" onclick="afiseazaTextBiblioteca('${t.id}')">Citește tot</button>
        </div>`;
  }).join('');
}

function afiseazaTextBiblioteca(id) {
  const text = texteSuport.find(t => t.id === id);
  if (!text) return;

  const overlay = document.getElementById('modal-overlay');
  const titlu = document.getElementById('modal-titlu');
  const cont = document.getElementById('modal-continut');

  titlu.textContent = text.titlu;
  cont.innerHTML = `
        <div class="text-meta" style="margin-bottom:1rem;">${text.autor} · ${text.sursa}</div>
        <div class="text-suport-body">${text.corpus.split('\n').filter(p => p.trim()).map(p => `<p>${p}</p>`).join('')}</div>
    `;
  overlay.hidden = false;
}

let dictionarInitializat = false;
function initDictionar() {
  if (dictionarInitializat) return;
  dictionarInitializat = true;
  filtratDictionar('');
}

function filtratDictionar(termen) {
  const cont = document.getElementById('continut-dictionar');
  if (!cont || typeof DictionarLiterar === 'undefined') return;

  const query = termen.toLowerCase();
  let html = '';

  for (const [categorie, itemi] of Object.entries(DictionarLiterar)) {
    const itemiFiltrati = itemi.filter(i =>
      i.term.toLowerCase().includes(query) ||
      i.def.toLowerCase().includes(query)
    );

    if (itemiFiltrati.length > 0) {
      html += `<h4 class="dict-cat-header">${categorie}</h4>`;
      html += itemiFiltrati.map(i => `
                <div class="dict-item">
                    <div class="dict-term">${i.term}</div>
                    <div class="dict-def">${i.def}</div>
                    <div class="dict-ex">Ex: ${i.ex}</div>
                </div>
            `).join('');
    }
  }

  cont.innerHTML = html || '<p style="text-align:center;padding:2rem;color:var(--text-muted);">Niciun termen găsit pentru căutarea ta.</p>';
}

/** Afișează un toast (mesaj temporar) */
function afiseazaToast(mesaj, tip = 'info') {
  const toast = document.getElementById('toast-notif');
  toast.textContent = mesaj;
  toast.className = 'toast show ' + (tip === 'error' ? 'error' : tip === 'success' ? 'success' : '');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/** Deschide un modal cu titlu și conținut */
function deschideModal(titlu, continut) {
  document.getElementById('modal-titlu').textContent = titlu;
  document.getElementById('modal-continut').innerHTML = continut;
  document.getElementById('modal-overlay').classList.add('active');
  document.getElementById('modal-box').focus();
}

function inchideModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}

/** Actualizează scorul și procentul din header */
function actualizeazaScorUI() {
  document.getElementById('scor-curent').textContent = stare.scorTotal;
  const proc = stare.itemsRezolvati > 0
    ? Math.round((stare.itemsCorecte / stare.itemsRezolvati) * 100)
    : 0;
  document.getElementById('progres-curent').textContent = proc + '%';
}

/** Actualizează bara de progres globală (jos de tot) */
function actualizeazaProgresGlobal() {
  const proc = stare.itemsRezolvati > 0
    ? Math.min(100, Math.round((stare.itemsCorecte / Math.max(stare.itemsRezolvati, 27)) * 100))
    : 0;
  document.getElementById('progress-global-fill').style.width = proc + '%';
}

/** Tasta Escape închide modal */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    inchideModal();
    if (chatbotDeschis) toggleChatbot();
  }
});

// ============================================================
// 9. INIȚIALIZARE
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Primul modul activ
  afiseazaModul('subI');

  // Afișează un mesaj de bun-venit în chatbot după 3 secunde
  setTimeout(() => {
    if (!chatbotDeschis) {
      document.getElementById('chatbot-notif').style.display = 'flex';
    }
  }, 3000);

  console.log('[EN Antrenament] Aplicație inițializată. Versiune: 1.0.0');
  console.log('[EN Antrenament] Texte disponibile:', texteSuport.length);
  console.log('[EN Antrenament] Seturi de itemi:', itemsSubiectulI.length);
});
