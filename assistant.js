/**
 * assistant.js – Logica avansată a Asistentului Profesor
 */

const Assistant = {
    avatar: "👨‍🏫",
    name: "Prof. de Română",
    currentHintIndex: 0,
    lastItemId: null,

    // Mesaje inițiale și răspunsuri predefinite
    raspunsuri: {
        figuri: "Figurile de stil sunt procedee artistice care dau textului expresivitate. Cele mai importante pentru EN sunt: epitetul, comparația, personificarea, metafora, repetiția și enumerarea. Vrei un exemplu pentru una anume?",
        structura: "O compunere corectă are 3 părți: \n1. **Introducere** (fixarea spațiului, timpului, personajelor)\n2. **Cuprins** (succesiunea de fapte/evenimente)\n3. **Încheiere** (rezolvarea acțiunii sau concluzia/sentimentul).\nNu uita să folosești conectori: «în primul rând», «pe de altă parte», «în concluzie».",
        vocabular: "La vocabular trebuie să stăpânești: sinonime, antonime, omonime, paronime, câmpuri semantice și familia lexicală. Verifică în secțiunea AJUTOR tabelul complet!",
        timp: "Timpul este de 120 de minute. Recomandare: \n- Citiirea textelor + Subiectul I A: 40 min\n- Subiectul I B: 30 min\n- Subiectul II: 40 min\n- Revizuire finală: 10 min.",
        nota10: "Pentru nota 10: \n1. Respectă numărul de rânduri la Subiectul II (min. 150 cuvinte/16-18 rânduri).\n2. Scrie citeț și evită ștersăturile.\n3. Acordă atenție cratimei și semnelor de punctuație.\n4. Motivează răspunsurile cu citate clare din text."
    },

    // Sistem de indicii progresive
    oferaIndiciu(item) {
        if (!item) return "Selectează un item pentru a primi un indiciu.";

        if (this.lastItemId !== item.id) {
            this.currentHintIndex = 0;
            this.lastItemId = item.id;
        }

        const hints = item.hints || this.genereazaIndiciiAutomate(item);

        if (this.currentHintIndex >= hints.length) {
            return "Ți-am oferit deja toate indiciile disponibile pentru acest item. Răspunsul corect este legat de: " + (item.feedback || "text.");
        }

        const hint = hints[this.currentHintIndex];
        this.currentHintIndex++;

        return `💡 **Indiciu ${this.currentHintIndex}:** ${hint}`;
    },

    genereazaIndiciiAutomate(item) {
        // Dacă itemul nu are indicii definite, generăm unele pe baza tipului și feedback-ului
        const feedbackBase = item.feedback ? item.feedback.split('.')[0] : "Caută în text.";
        return [
            `Analizează cu atenție cerința: «${item.cerinta}».`,
            `Recitește fragmentul relevant din text...`,
            `Gândește-te la ${feedbackBase}.`
        ];
    },

    salutMotivator(scor) {
        if (scor >= 90) return "Excelent! Ești gata de examen. Continuă să menții acest ritm!";
        if (scor >= 70) return "Foarte bine! Te descurci grozav. Mai avem puțin de lucrat la nuanțe.";
        if (scor >= 50) return "Ești pe drumul cel bun. Continuă antrenamentul și punctajul va crește!";
        return "Nu te descuraja! Fiecare greșeală este o lecție. Hai să încercăm încă o dată!";
    }
};

// Integrăm cu funcțiile din main.js prin window
window.Assistant = Assistant;
