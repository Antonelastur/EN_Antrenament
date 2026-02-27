/**
 * app_v2.js – Logica aplicației EN Antrenament
 * Structura oficială: Sub I A (38p) + Sub I B (32p) + Sub II (20p) + 10p oficiu = 100p
 */

// ── Stare globală ──
let stare = {
  variantaCurenta: null,
  raspunsuri: {},
  punctajeObtinute: {},
  timerInterval: null,
  timpRamas: 7200, // 2h
  profesorDeschis: false
};

// ── Navigare între ecrane ──
function navigheaza(idEcran) {
  document.querySelectorAll('.ecran').forEach(e => e.classList.remove('activ'));
  document.getElementById(idEcran).classList.add('activ');
  window.scrollTo(0, 0);
}

// ── Afișare selecție variante ──
function afiseazaSelectVarianta() {
  const grid = document.getElementById('variante-grid');
  grid.innerHTML = '';
  varianteExamen.forEach(v => {
    const card = document.createElement('div');
    card.className = 'varianta-card';
    card.onclick = () => incarcaVarianta(v.id);
    card.innerHTML = `
      <h3>${v.titlu}</h3>
      <p>${v.sursa}</p>
      <div class="varianta-meta">
        <span class="varianta-tag tag-literar">${v.text1.autor}</span>
        <span class="varianta-tag tag-nonliterar">${v.text2.tip === 'nonliterar' ? 'Text informativ' : v.text2.autor}</span>
      </div>
    `;
    grid.appendChild(card);
  });
  navigheaza('ecran-variante');
}

// ── Încarcă o variantă de examen ──
function incarcaVarianta(idVarianta) {
  const v = varianteExamen.find(x => x.id === idVarianta);
  if (!v) return;
  stare.variantaCurenta = v;
  stare.raspunsuri = {};
  stare.punctajeObtinute = {};
  stare.timpRamas = 7200;

  // Titlu
  document.getElementById('titlu-varianta').textContent = v.titlu;

  // Texte suport
  document.getElementById('titlu-text1').textContent = v.text1.titlu;
  document.getElementById('corpus-text1').textContent = v.text1.corpus;
  document.getElementById('titlu-text2').textContent = v.text2.titlu;
  document.getElementById('corpus-text2').textContent = v.text2.corpus;

  // Generează cerințe
  genereazaCerinte('cerinte-ia', v.subiectulIA);
  genereazaCerinte('cerinte-ib', v.subiectulIB);
  genereazaCompunere(v.subiectulII);

  // Progres
  actualizeazaProgres();

  // Timer
  pornesteCronometru();

  // Prima tab activă
  schimbaTab('texte');
  navigheaza('ecran-examen');
}

// ── Generează cerințele ──
function genereazaCerinte(containerId, cerinte) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  cerinte.forEach(c => {
    const card = document.createElement('div');
    card.className = 'cerinta-card';
    card.id = `card-${c.id}`;

    let bodyHTML = '';

    switch (c.tip) {
      case 'grila':
        bodyHTML = genereazaGrila(c);
        break;
      case 'adevarat_fals':
        bodyHTML = genereazaAF(c);
        break;
      case 'completare':
        bodyHTML = genereazaCompletare(c);
        break;
      case 'completare_multipla':
        bodyHTML = genereazaCompletareMultipla(c);
        break;
      case 'tabel_completare':
        bodyHTML = genereazaTabelCompletare(c);
        break;
      case 'redactare':
        bodyHTML = genereazaRedactare(c);
        break;
    }

    card.innerHTML = `
      <div class="cerinta-header">
        <div class="cerinta-nr">${c.nr}</div>
        <span style="font-size:.88rem;font-weight:500;">${getTipLabel(c.tip)}</span>
        <span class="cerinta-punctaj">${c.punctaj}p</span>
      </div>
      <div class="cerinta-body">
        <div class="cerinta-text">${c.cerinta}</div>
        ${bodyHTML}
        <div class="feedback-box" id="fb-${c.id}"></div>
      </div>
    `;
    container.appendChild(card);
  });
}

function getTipLabel(tip) {
  const labels = {
    grila: 'Grilă', adevarat_fals: 'Adevărat / Fals', completare: 'Completare',
    completare_multipla: 'Forme corecte', tabel_completare: 'Tabel', redactare: 'Redactare'
  };
  return labels[tip] || '';
}

// ── Grilă ──
function genereazaGrila(c) {
  const litere = ['a', 'b', 'c', 'd'];
  return `<div class="optiuni-grila">${c.optiuni.map((opt, i) =>
    `<button class="optiune-btn" id="opt-${c.id}-${i}" onclick="selecteazaOptiune('${c.id}', ${i}, ${c.optiuni.length})">
      <span class="optiune-litera">${litere[i]}</span>${opt}
    </button>`
  ).join('')}</div>
  <button class="btn-verifica" onclick="verificaGrila('${c.id}')">
    <span class="material-icons-round" style="font-size:1rem">check</span> Verifică
  </button>`;
}

function selecteazaOptiune(id, index, total) {
  for (let i = 0; i < total; i++) {
    document.getElementById(`opt-${id}-${i}`).classList.remove('selectata');
  }
  document.getElementById(`opt-${id}-${index}`).classList.add('selectata');
  stare.raspunsuri[id] = index;
}

function verificaGrila(id) {
  const c = gasesteCerinta(id);
  if (!c || stare.raspunsuri[id] === undefined) return;
  const corect = stare.raspunsuri[id] === c.raspunsCorect;

  c.optiuni.forEach((_, i) => {
    const el = document.getElementById(`opt-${id}-${i}`);
    el.classList.remove('selectata');
    if (i === c.raspunsCorect) el.classList.add('corecta');
    if (i === stare.raspunsuri[id] && !corect) el.classList.add('gresita-sel');
    el.disabled = true;
    el.onclick = null;
  });

  stare.punctajeObtinute[id] = corect ? c.punctaj : 0;
  afiseazaFeedback(id, corect, c.feedback);
  actualizeazaProgres();
}

// ── Adevărat / Fals ──
function genereazaAF(c) {
  let rows = c.enunturi.map((e, i) => `
    <tr>
      <td>${e.text} <span class="sursa-badge">${e.sursa}</span></td>
      <td style="text-align:center"><button class="af-btn" id="af-${c.id}-${i}-a" onclick="selecteazaAF('${c.id}',${i},'a')">A</button></td>
      <td style="text-align:center"><button class="af-btn" id="af-${c.id}-${i}-f" onclick="selecteazaAF('${c.id}',${i},'f')">F</button></td>
    </tr>
  `).join('');
  return `<table class="af-tabel">
    <thead><tr><th style="text-align:left">Enunțul</th><th>Adevărat</th><th>Fals</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
  <button class="btn-verifica" onclick="verificaAF('${c.id}')">
    <span class="material-icons-round" style="font-size:1rem">check</span> Verifică
  </button>`;
}

function selecteazaAF(id, idx, val) {
  document.getElementById(`af-${id}-${idx}-a`).classList.toggle('selectat', val === 'a');
  document.getElementById(`af-${id}-${idx}-f`).classList.toggle('selectat', val === 'f');
  if (!stare.raspunsuri[id]) stare.raspunsuri[id] = {};
  stare.raspunsuri[id][idx] = val === 'a';
}

function verificaAF(id) {
  const c = gasesteCerinta(id);
  if (!c) return;
  let puncte = 0;
  c.enunturi.forEach((e, i) => {
    const raspuns = stare.raspunsuri[id]?.[i];
    const corect = raspuns === e.corect;
    if (corect) puncte++;
    const aBtn = document.getElementById(`af-${id}-${i}-a`);
    const fBtn = document.getElementById(`af-${id}-${i}-f`);
    aBtn.classList.remove('selectat');
    fBtn.classList.remove('selectat');
    if (e.corect) aBtn.classList.add('corect'); else fBtn.classList.add('corect');
    if (raspuns !== undefined && raspuns !== e.corect) {
      (raspuns ? aBtn : fBtn).classList.add('gresit');
    }
    aBtn.disabled = true; fBtn.disabled = true;
    aBtn.onclick = null; fBtn.onclick = null;
  });
  stare.punctajeObtinute[id] = puncte;
  const total = c.enunturi.length;
  afiseazaFeedback(id, puncte === total, `${puncte}/${total} corecte. ${c.feedback}`);
  actualizeazaProgres();
}

// ── Completare ──
function genereazaCompletare(c) {
  return `<input class="input-completare" id="inp-${c.id}" placeholder="Scrie răspunsul..." />
  <button class="btn-verifica" onclick="verificaCompletare('${c.id}')">
    <span class="material-icons-round" style="font-size:1rem">check</span> Verifică
  </button>`;
}

function verificaCompletare(id) {
  const c = gasesteCerinta(id);
  const val = document.getElementById(`inp-${id}`).value.trim().toLowerCase();
  if (!val) return;
  const corect = c.raspunsCorect.some(r => val.includes(r.toLowerCase()));
  stare.punctajeObtinute[id] = corect ? c.punctaj : 0;
  afiseazaFeedback(id, corect, `Răspuns așteptat: ${c.raspunsCorectAfisat}. ${c.feedback}`);
  document.getElementById(`inp-${id}`).disabled = true;
  actualizeazaProgres();
}

// ── Completare multiplă ──
function genereazaCompletareMultipla(c) {
  return c.raspunsuri.map((r, i) => `
    <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.5rem">
      <span style="font-weight:600;min-width:30px">(${r.nr})</span>
      <input class="input-completare" id="inpm-${c.id}-${i}" placeholder="Forma corectă..." style="flex:1" />
    </div>
  `).join('') + `
  <button class="btn-verifica" onclick="verificaCompletareMultipla('${c.id}')">
    <span class="material-icons-round" style="font-size:1rem">check</span> Verifică
  </button>`;
}

function verificaCompletareMultipla(id) {
  const c = gasesteCerinta(id);
  let puncte = 0;
  c.raspunsuri.forEach((r, i) => {
    const inp = document.getElementById(`inpm-${id}-${i}`);
    const val = inp.value.trim().toLowerCase();
    if (val === r.corect.toLowerCase()) {
      puncte++;
      inp.style.borderColor = 'var(--green)';
    } else {
      inp.style.borderColor = 'var(--red)';
      inp.value = `${inp.value} → ${r.corect}`;
    }
    inp.disabled = true;
  });
  stare.punctajeObtinute[id] = puncte;
  afiseazaFeedback(id, puncte === c.raspunsuri.length, `${puncte}/${c.raspunsuri.length} corecte. ${c.feedback}`);
  actualizeazaProgres();
}

// ── Tabel completare ──
function genereazaTabelCompletare(c) {
  return `<div class="indicatii-box">
    <span class="material-icons-round">lightbulb</span>
    <span>Completează informațiile cerute pentru fiecare element.</span>
  </div>
  <div style="margin-top:.8rem">
  ${c.raspunsCorect.map((_, i) => `
    <div style="display:flex;gap:.5rem;margin-bottom:.5rem">
      <input class="input-completare" id="tc-${c.id}-${i}-a" placeholder="Cuvântul..." style="flex:1" />
      <input class="input-completare" id="tc-${c.id}-${i}-b" placeholder="Precizarea..." style="flex:1" />
    </div>
  `).join('')}
  </div>
  <button class="btn-verifica" onclick="verificaTabelRedactare('${c.id}')">
    <span class="material-icons-round" style="font-size:1rem">check</span> Verifică (auto-evaluare)
  </button>`;
}

function verificaTabelRedactare(id) {
  const c = gasesteCerinta(id);
  stare.punctajeObtinute[id] = c.punctaj; // auto-evaluare
  afiseazaFeedback(id, true, `Răspunsuri posibile: ${c.feedback}`);
  actualizeazaProgres();
}

// ── Redactare ──
function genereazaRedactare(c) {
  return `<textarea class="textarea-redactare" id="ta-${c.id}" placeholder="Scrie răspunsul tău aici..." oninput="actualizeazaCuvinte('${c.id}')"></textarea>
  <div class="word-count" id="wc-${c.id}">0 cuvinte</div>
  ${c.indicatii ? `<div class="indicatii-box"><span class="material-icons-round">lightbulb</span><span>${c.indicatii}</span></div>` : ''}
  <button class="btn-verifica" onclick="verificaRedactare('${c.id}')">
    <span class="material-icons-round" style="font-size:1rem">check</span> Auto-evaluare
  </button>`;
}

function actualizeazaCuvinte(id) {
  const ta = document.getElementById(`ta-${id}`);
  const cnt = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
  document.getElementById(`wc-${id}`).textContent = `${cnt} cuvinte`;
}

function verificaRedactare(id) {
  const c = gasesteCerinta(id);
  const ta = document.getElementById(`ta-${id}`);
  const text = ta.value.trim();
  const cuvinte = text ? text.split(/\s+/).length : 0;

  if (cuvinte < 5) {
    afiseazaFeedback(id, false, 'Scrie un răspuns mai elaborat pentru a primi punctaj.');
    return;
  }
  stare.punctajeObtinute[id] = c.punctaj;
  afiseazaFeedback(id, true, `Barem:\n${c.barem ? c.barem.map(b => `• ${b.criteriu} – ${b.puncte}p`).join('\n') : c.feedback}\n\n💡 ${c.feedback}`);
  actualizeazaProgres();
}

// ── Compunere (Sub II) ──
function genereazaCompunere(subII) {
  const container = document.getElementById('cerinta-ii');
  container.innerHTML = `
    <div class="compunere-cerinta">
      <h3>📝 Cerința</h3>
      <p style="font-size:.9rem;line-height:1.7">${subII.cerinta}</p>
      <div class="compunere-criterii">
        ${subII.criteriiRedactare.map(cr => `
          <div class="criteriu-mini"><span class="material-icons-round">check_circle_outline</span>${cr}</div>
        `).join('')}
      </div>
      <p style="margin-top:.8rem;font-size:.8rem;color:var(--text-muted)">${subII.nota}</p>
    </div>
    <div style="margin-bottom:.5rem;font-weight:600;font-size:.9rem">
      Conținut: ${subII.punctajContinut}p · Redactare: ${subII.punctajRedactare}p
    </div>
    <textarea class="textarea-redactare" id="ta-sub-ii" placeholder="Scrie compunerea ta aici..." 
      style="min-height:300px" oninput="actualizeazaCuvinteSubII()"></textarea>
    <div class="word-count" id="wc-sub-ii">0 cuvinte</div>
  `;
}

function actualizeazaCuvinteSubII() {
  const ta = document.getElementById('ta-sub-ii');
  const cnt = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
  document.getElementById('wc-sub-ii').textContent = `${cnt} cuvinte`;
}

// ── Utilități ──
function gasesteCerinta(id) {
  const v = stare.variantaCurenta;
  return [...v.subiectulIA, ...v.subiectulIB].find(c => c.id === id);
}

function afiseazaFeedback(id, corect, mesaj) {
  const fb = document.getElementById(`fb-${id}`);
  fb.className = `feedback-box vizibil ${corect ? 'corect' : 'gresit'}`;
  fb.innerHTML = `<strong>${corect ? '✅ Corect!' : '❌ Verifică răspunsul'}</strong><br>${mesaj.replace(/\n/g, '<br>')}`;
  const card = document.getElementById(`card-${id}`);
  card.classList.add(corect ? 'rezolvata' : 'gresita');
}

function actualizeazaProgres() {
  const v = stare.variantaCurenta;
  if (!v) return;
  const toateC = [...v.subiectulIA, ...v.subiectulIB];
  const rezolvate = toateC.filter(c => stare.punctajeObtinute[c.id] !== undefined).length;
  const puncteObt = Object.values(stare.punctajeObtinute).reduce((s, p) => s + p, 0) + 10; // +10 oficiu

  // Progres IA
  const rezIA = v.subiectulIA.filter(c => stare.punctajeObtinute[c.id] !== undefined).length;
  const pIA = document.getElementById('progres-ia');
  if (pIA) pIA.querySelector('span').textContent = `${rezIA}/${v.subiectulIA.length}`;

  // Progres IB
  const rezIB = v.subiectulIB.filter(c => stare.punctajeObtinute[c.id] !== undefined).length;
  const pIB = document.getElementById('progres-ib');
  if (pIB) pIB.querySelector('span').textContent = `${rezIB}/${v.subiectulIB.length}`;

  // Global
  const procent = (rezolvate / toateC.length) * 100;
  document.getElementById('progres-fill').style.width = `${procent}%`;
  document.getElementById('punctaj-curent').textContent = `${puncteObt} / 100 puncte`;
}

// ── Tabs ──
function schimbaTab(tabId) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('activ-tab'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('activ-tab-content'));
  document.querySelector(`[data-tab="${tabId}"]`).classList.add('activ-tab');
  document.getElementById(`panel-${tabId}`).classList.add('activ-tab-content');
}

// ── Timer ──
function pornesteCronometru() {
  if (stare.timerInterval) clearInterval(stare.timerInterval);
  stare.timerInterval = setInterval(() => {
    stare.timpRamas--;
    if (stare.timpRamas <= 0) {
      clearInterval(stare.timerInterval);
      finalizeazaExamenul();
      return;
    }
    const h = Math.floor(stare.timpRamas / 3600);
    const m = Math.floor((stare.timpRamas % 3600) / 60);
    const s = stare.timpRamas % 60;
    document.getElementById('timer').textContent =
      `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }, 1000);
}

// ── Finalizare examen ──
function finalizeazaExamenul() {
  if (stare.timerInterval) clearInterval(stare.timerInterval);
  const v = stare.variantaCurenta;
  const pIA = v.subiectulIA.reduce((s, c) => s + (stare.punctajeObtinute[c.id] || 0), 0);
  const pIB = v.subiectulIB.reduce((s, c) => s + (stare.punctajeObtinute[c.id] || 0), 0);

  // Estimare Sub II
  const taII = document.getElementById('ta-sub-ii');
  const cuvII = taII ? (taII.value.trim() ? taII.value.trim().split(/\s+/).length : 0) : 0;
  let pII = 0;
  if (cuvII >= 150) pII = 16;
  else if (cuvII >= 100) pII = 12;
  else if (cuvII >= 50) pII = 8;
  else if (cuvII >= 20) pII = 4;

  const total = pIA + pIB + pII + 10;
  const nota = Math.min(10, total / 10).toFixed(2);

  document.getElementById('rezultate-content').innerHTML = `
    <div class="rezultat-hero">
      <div class="hero-badge">🎓 Rezultate</div>
      <div class="nota-mare">${nota}</div>
      <p style="color:var(--text-dim);margin-top:.5rem">${total} puncte din 100</p>
      <p style="margin-top:1rem;font-size:.9rem">${getMesajNota(total)}</p>
    </div>
    <div class="rezultat-detalii">
      <div class="detaliu-row"><span>Subiectul I · A (Receptarea textului)</span><span>${pIA} / 38</span></div>
      <div class="detaliu-row"><span>Subiectul I · B (Gramatică)</span><span>${pIB} / 32</span></div>
      <div class="detaliu-row"><span>Subiectul II (Compunere)</span><span>${pII} / 20</span></div>
      <div class="detaliu-row"><span>Puncte din oficiu</span><span>10 / 10</span></div>
      <div class="detaliu-row" style="border:1px solid var(--accent)"><span style="color:var(--text);font-weight:600">TOTAL</span><span style="color:var(--accent);font-size:1.2rem">${total} / 100</span></div>
    </div>
    <p style="text-align:center;margin-top:1rem;font-size:.8rem;color:var(--text-muted)">
      Verificare: ${pIA} + ${pIB} + ${pII} + 10 = ${total} 
      (Sumă fără oficiu: ${pIA + pIB + pII} ${pIA + pIB + pII <= 90 ? '✓' : '⚠'})
    </p>
    <div style="text-align:center;margin-top:2rem">
      <button class="btn-hero" onclick="afiseazaSelectVarianta()">
        <span class="material-icons-round">refresh</span> Alege altă variantă
      </button>
    </div>
  `;
  navigheaza('ecran-rezultate');
}

function getMesajNota(p) {
  if (p >= 90) return '🏆 Excelent! Ești pregătit(ă) pentru examen!';
  if (p >= 75) return '💪 Foarte bine! Mai exersează puțin și vei excela!';
  if (p >= 60) return '👍 Bine! Concentrează-te pe gramatică și compunere.';
  if (p >= 40) return '📚 Poți mai mult! Recitește textele cu atenție.';
  return '🎯 Nu renunța! Exersează zilnic și vei progresa!';
}

// ── Profesor Asistent ──
function toggleProfesor() {
  const panel = document.getElementById('profesor-panel');
  const fab = document.getElementById('fab-profesor');
  stare.profesorDeschis = !stare.profesorDeschis;
  panel.classList.toggle('deschis', stare.profesorDeschis);
  fab.style.display = stare.profesorDeschis ? 'none' : 'flex';
}

function intrebaProfesor(q) {
  document.getElementById('profesor-input').value = q;
  trimiteProfesor();
}

function trimiteProfesor() {
  const inp = document.getElementById('profesor-input');
  const q = inp.value.trim();
  if (!q) return;
  inp.value = '';

  const chat = document.getElementById('profesor-chat');
  chat.innerHTML += `<div class="msg-elev">${q}</div>`;

  setTimeout(() => {
    const raspuns = genereazaRaspunsProfesor(q);
    chat.innerHTML += `<div class="msg-profesor">${raspuns}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);
}

function genereazaRaspunsProfesor(q) {
  const ql = q.toLowerCase();

  // 1. Adevărat / Fals
  if (/(adevărat|fals|a\/f|adevarat)/i.test(ql)) {
    return `📋 <strong>Strategia pentru Adevărat/Fals:</strong><br>
    1. Citește enunțul cu atenție<br>
    2. Caută informația EXACT în text<br>
    3. Dacă un singur cuvânt nu corespunde → FALS<br>
    4. Nu te lăsa păcălit(ă) de formulări similare<br>
    5. Verifică atât textul 1 cât și textul 2!<br>
    <em>Punctaj: 6 enunțuri × 1p = 6 puncte</em>`;
  }

  // 2. Figuri de stil
  if (/(figur|stil|comparați|metafor|epitet|personificar|enumerați|hiperbol|repetiți)/i.test(ql)) {
    return `🎨 <strong>Figuri de stil frecvente la EN:</strong><br>
    • <strong>Comparația</strong>: „limpede ca cristalul" (folosește „ca", „precum", „asemenea")<br>
    • <strong>Metafora</strong>: „ochi de cer" (comparație subînțeleasă, fără „ca")<br>
    • <strong>Personificarea</strong>: „vântul șoptește" (atribuie însușiri umane necuvântătoarelor)<br>
    • <strong>Enumerația</strong>: „frații, surorile, tovarășii" (listare de termeni)<br>
    • <strong>Epitetul</strong>: „zburdalnica vârstă" (atribut expresiv, adesea adjectiv)<br>
    • <strong>Hiperbola</strong>: „plângând cu zece rânduri de lacrimi" (exagerare voită)`;
  }

  // 3. Compunere / Argumentativ
  if (/(argumentativ|compuner|text argumentativ|opinie|subiectul ii|subiectul 2)/i.test(ql)) {
    return `📝 <strong>Structura textului argumentativ (Sub II):</strong><br>
    <strong>Paragraf 1 – Ipoteza:</strong> Formulează-ți clar opinia față de tema dată (Da/Nu/Parțial).<br>
    <strong>Paragraf 2 – Argument 1:</strong> Argument valorificat din textul 1 (obligatoriu + secvență).<br>
    <strong>Paragraf 3 – Argument 2:</strong> Argument din experiența personală sau culturală (lecturi).<br>
    <strong>Paragraf 4 – Concluzia:</strong> Reafirmă și sintetizează opinia.<br><br>
    ⚠️ Min. 150 cuvinte! Fără titlu sau motto invetat!<br>
    💡 12p conținut + 8p redactare = 20p total.`;
  }

  // 4. Greșeli frecvente / Corectitudine
  if (/(greșel|evit|frecvent|corect|pleonasm|cacofoni)/i.test(ql)) {
    return `⚠️ <strong>Greșeli frecvente la EN de evitat:</strong><br>
    • „prefer mai bine" → „prefer" (pleonasm!)<br>
    • „decât" în loc de „doar/numai" (Corect: Am doar un măr. Nu am decât un măr.)<br>
    • „douăzeci și doi" → „douăzeci și două de" (cu substantive feminine)<br>
    • „Europeni" → „europeni" (adjectivele derivate de la nume proprii se scriu cu literă mică)<br>
    • „s-a" vs „sa" (s-a dus / cartea sa)<br>
    • „într-un" corect, „întrțun" incorect (atenție la tastare/scriere)`;
  }

  // 5. Caracterizare personaj
  if (/(caracteriz|personaj|trăsătur)/i.test(ql)) {
    return `👤 <strong>Caracterizarea personajului:</strong><br>
    <strong>Directă:</strong> de către narator (portret), de alte personaje sau autocaracterizare.<br>
    <strong>Indirectă:</strong> reiese din fapte, atitudini, limbaj, mediu social, nume.<br><br>
    📌 La EN, cerința de 6p cere: 2p numirea trăsăturii + 1p mijlocul de caracterizare + 1p secvența ilustrativă + 1p ortografie + 1p coerență/nr. enunțuri.`;
  }

  // --- MEGA SISTEM: FONETICĂ ---
  if (/(fonetic|sunet|vocal|consoan|semivocal|diftong|triftong|hiat|silab|despăr)/i.test(ql)) {
    return `🗣️ <strong>Fonetica (Sunete și silabe):</strong><br>
    • <strong>Vocale (a, ă, â, e, i, o, u):</strong> pot forma singure o silabă. Indispensabile!<br>
    • <strong>Semivocale (e, i, o, u):</strong> apar DOAR lângă o vocală, în aceeași silabă.<br>
    • <strong>Diftong:</strong> 1 vocală + 1 semivocală în aceeași silabă (ex: s<em>oa</em>-re, m<em>ai</em>).<br>
    • <strong>Triftong:</strong> 1 vocală + 2 semivocale în aceeași silabă (ex: l<em>eoa</em>i-că, t-r<em>iau</em>).<br>
    • <strong>Hiat:</strong> 2 vocale alăturate pronunțate în silabe DIFERITE (ex: p<em>o-e</em>-zi-e, i-d<em>e-e</em>).<br>
    • <strong>Despărțirea în silabe (Reguli de bază):</strong><br>
      - V-CV (m-a-să)<br>
      - VC-CV (vârs-tă)<br>
      - Diftongii/Triftongii NU se despart, hiatusurile SE despart!<br>
    💡 <em>Atenție la ce/ci/ge/gi/che/chi/ghe/ghi: dacă în silaba lor NU există altă vocală, e/i sunt vocale propriu-zise. Dacă există altă vocală (ex: „ceas”), „e” e doar literă ajutătoare!</em>`;
  }

  // --- MEGA SISTEM: VOCABULAR / LEXIC ---
  if (/(vocabular|lexic|sinonim|antonim|omonim|paronim|derivar|compuner|conversiun|câmp lexical|sens|îmbogățir|arhaism|regionalism|neologism)/i.test(ql)) {
    return `<strong>Vocabularul (Lexicul):</strong><br>
    • <strong>Sinonime:</strong> sens asemănător, formă diferită (zăpadă = nea). Păstrează partea de vorbire!<br>
    • <strong>Antonime:</strong> sens opus (bun ≠ rău, a veni ≠ a pleca).<br>
    • <strong>Omonime:</strong> aceeași formă, sens complet diferit (râu de apă / râu de la rău, liliac).<br>
    • <strong>Paronime:</strong> formă asemănătoare, sens diferit (familiar / familial, originar / original).<br>
    • <strong>Câmp lexical:</strong> toate cuvintele dintr-un domeniu de sens (școală: elev, manual, a preda).<br>
    • <strong>Formarea cuvintelor (Mijloace interne):</strong><br>
      - <em>Derivare:</em> se adaugă prefixe (<em>stră</em>bun) sau sufixe (băieț<em>andru</em>) la rădăcină.<br>
      - <em>Compunere:</em> alăturarea de cuvinte (floarea-soarelui, binecuvântat, untdelemn).<br>
      - <em>Conversiune:</em> trecerea de la o parte de vorbire la alta (ex: adj. „frumos” devine adv. în „Cântă <em>frumos</em>”).`;
  }

  // --- MEGA SISTEM: MORFOLOGIE FLEXIBILĂ ---
  if (/(morfologi|substantiv|adjectiv|pronume|numeral|verb|articol|flexibil|caz|declinare)/i.test(ql) && !/(adverb|prepo|conjunc|interjec)/i.test(ql)) {
    return `🧩 <strong>Morfologie (Părți de vorbire flexibile):</strong><br>
    • <strong>Substantivul:</strong> denumește obiecte/ființe (casă, vis). Are gen, număr, caz.<br>
    • <strong>Articolul:</strong> însoțește substantivul (hotărât: băiat<em>ul</em>; nehotărât: <em>un</em> test).<br>
    • <strong>Adjectivul:</strong> arată însușirea și se acordă cu substantivul. Are grade de comparație (pozitiv, comparativ, superlativ).<br>
    • <strong>Pronumele:</strong> ține locul unui nume. (Personal: eu; Reflexiv: se, își; Posesiv: al meu; Demonstrativ: acesta/acela; Relativ/Interogativ: care, cine, ce).<br>
    • <strong>Numeralul:</strong> arată numărul (cardinal: doi, zece) sau ordinea (ordinal: primul, al treilea).<br>
    • <strong>Verbul:</strong> arată acțiunea/starea. Are moduri (Indicativ, Conjunctiv, Condițional-optativ, Imperativ + forme nepersonale: Infinitiv, Gerunziu, Participiu, Supin). Atenție la verbele copulative (A FI) și auxiliare.`;
  }

  // --- MEGA SISTEM: MORFOLOGIE NEFLEXIBILĂ ---
  if (/(adverb|prepoziți|conjuncți|interjecți|neflexibil)/i.test(ql)) {
    return `📌 <strong>Morfologie (Părți de vorbire neflexibile):</strong><br>
    Acestea nu își schimbă forma!<br>
    • <strong>Adverbul:</strong> determină un verb/adjectiv. Arată locul (aici, acolo), timpul (ieri, acum) sau modul (bine, frumos). Unele cer grade de comparație (mai bine).<br>
    • <strong>Prepoziția:</strong> cuvânt de legătură ce cere un anumit caz (Genitiv: contra, împotriva, asupra; Dativ: grație, datorită, mulțumită; Acuzativ: de, la, pentru, din, pe).<br>
    • <strong>Conjuncția:</strong> leagă cuvinte sau propoziții (Coordonatoare: și, dar, iar, însă, ci, sau, ori; Subordonatoare: că, să, dacă, deși, încât).<br>
    • <strong>Interjecția:</strong> exprimă un sentiment, un apel sau imită sunete din natură (Au!, Hei!, Miau!). Poate avea funcție de predicat (Hai afară!).`;
  }

  // --- MEGA SISTEM: SINTAXA PROPOZIȚIEI ---
  if (/(sintax|subiect|predicat|atribut|complement|funcție sintactică)/i.test(ql)) {
    return `🔗 <strong>Sintaxa propoziției (Funcții sintactice):</strong><br>
    • <strong>Predicatul (Ce face? / Ce se spune despre?):</strong><br>
      - <em>Verbal</em> (verb la mod personal: „Eu <em>învăț</em>.”)<br>
      - <em>Nominal</em> (verb copulativ + nume predicativ: „Cartea <em>este interesantă</em>.”)<br>
    • <strong>Subiectul (Cine? Ce face acțiunea?):</strong> Poate fi exprimat („<em>Ion</em> citește.”) sau neexprimat (inclus/subînțeles).<br>
    • <strong>Atributul (Care? Ce fel de? Al/A/Ai/Ale cui? Câți?):</strong> determină un substantiv (ex: floarea <em>roșie</em>, cartea <em>de română</em>).<br>
    • <strong>Complementul (determină verbul):</strong><br>
      - <em>Direct (Pe cine? Ce?):</em> Văd <em>rezultatul</em>.<br>
      - <em>Prepozițional (La/Pentru/Despre/Cu cine/ce?):</em> Mă gândesc <em>la test</em>.<br>
      - <em>Indirect (Cui?):</em> Le dau <em>elevilor</em> teme.<br>
      - <em>Circumstanțial:</em> de loc (Unde?), timp (Când?), mod (Cum?), cauză (Din ce cauză?), scop (În ce scop?).`;
  }

  // --- MEGA SISTEM: SINTAXA FRAZEI ---
  if (/(fraz|propoziți|coordonar|subordonar|raport sintactic|principal|secundar)/i.test(ql)) {
    return `⛓️ <strong>Sintaxa frazei (Relații între propoziții):</strong><br>
    Fraza este formată din două sau mai multe propoziții (adică 2 sau mai multe predicate).<br>
    • <strong>Propoziția principală (PP):</strong> are înțeles de sine stătător, nu începe cu element subordonator.<br>
    • <strong>Propoziția subordonată (PS):</strong> depinde gramatical de altă propoziție („regentă”) și se introduce prin conjuncții/pronume relative.<br>
    • <strong>Raporturi sintactice:</strong><br>
      1. <em>Coordonare</em> (între propoziții de același rang: PP+PP sau PS+PS): prin virgulă sau conjuncții coordonatoare (și, nici, sau, dar, iar, însă, ci).<br>
      2. <em>Subordonare</em> (între o regentă și subordonata sa): prin conjuncții subordonatoare (că, să, dacă, deși, deoarece, încât) sau pronume/adverbe relative (care, cine, ce, unde, când).`;
  }

  // Fallback
  return `Mulțumesc pentru întrebare! 😊 Ca asistent virtual pentru Evaluarea Națională, sunt acum pregătit să te ajut la orice întrebare de <strong>Fonetică, Vocabular, Morfologie și Sintaxă</strong>! Doar scrie teoria care te interesează (ex: „ce este un atribut”, „diftong”, „cazurile substantivului”, etc.) și îți voi răspunde conform programei!`;
}

// ── Particule animate (hero) ──
function genereazaParticule() {
  const cont = document.getElementById('particles');
  if (!cont) return;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('span');
    const size = Math.random() * 80 + 20;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.animationDelay = `${Math.random() * 5}s`;
    p.style.animationDuration = `${Math.random() * 8 + 5}s`;
    cont.appendChild(p);
  }
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  genereazaParticule();
  document.getElementById('stat-variante').textContent = varianteExamen.length;
});
