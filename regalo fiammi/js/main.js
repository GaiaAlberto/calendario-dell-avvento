/* main.js */
const calendar = document.getElementById("calendar");
const letterModal = document.getElementById("letterModal");
const dayNumberEl = document.getElementById("dayNumber");
const letterTextEl = document.getElementById("letterText");
const playGameWrapper = document.getElementById("playGameWrapper");

const today = new Date();
const currentDay = (today.getMonth() === 11) ? today.getDate() : 1;
let opened = JSON.parse(localStorage.getItem("openedGifts")) || [];

/* render calendar */
function revealAnimation(el, delay) {
  setTimeout(()=> el.classList.add("reveal"), delay);
}
function renderCalendar(){
  calendar.innerHTML = "";
  for(let day=1; day<=25; day++){
    const box = document.createElement("div");
    box.className = "gift";
    box.innerText = day;
    box.dataset.day = day;
    if(opened.includes(day)) box.classList.add("opened");
    box.addEventListener("click", ()=> openGift(day, box));
    calendar.appendChild(box);
    revealAnimation(box, day * 60);
  }
}

/* open gift (flip + show letter) */
function openGift(day, box){
  if(day > currentDay && !opened.includes(day)){
    alert(`Puoi aprirlo solo il ${day} dicembre ❤️`);
    return;
  }
  box.classList.add("flip");
  setTimeout(()=>{
    showLetter(day);
    if(!opened.includes(day)){
      opened.push(day);
      localStorage.setItem("openedGifts", JSON.stringify(opened));
    }
    box.classList.add("opened");
  }, 380);
}

/* unified modal open/close for letter */
function openModal(modalEl){
  modalEl.classList.add("show");
  document.body.classList.add("modal-open");
  modalEl.setAttribute("aria-hidden","false");
}
function closeModalByEl(modalEl){
  modalEl.classList.remove("show");
  document.body.classList.remove("modal-open");
  modalEl.setAttribute("aria-hidden","true");
}

/* show letter and optional Play button */
function showLetter(day){
  const gift = gifts[day-1];
  dayNumberEl.innerText = day;
  letterTextEl.innerHTML = gift.message;

  // clear previous play wrapper
  playGameWrapper.innerHTML = "";

  // Se il giorno ha un gioco E NON è il giorno 5 → mostra il bottone
  if (gift.gameId && day !== 5) {
    const btn = document.createElement("button");
    btn.innerText = "Gioca!";
    btn.className = "play-game-button";
    btn.style.marginTop = "12px";
    btn.onclick = () => openGameModal(gift.gameId);
    playGameWrapper.appendChild(btn);
  }

  openModal(letterModal);
}


/* close letter with close button */
document.querySelectorAll("#letterModal .close").forEach(btn=>{
  btn.addEventListener("click", ()=> closeModalByEl(letterModal));
});
/* close modal by clicking backdrop */
letterModal.addEventListener("click", (e)=>{
  if(e.target === letterModal) closeModalByEl(letterModal);
});
document.addEventListener("keydown", e=>{
  if(e.key === "Escape"){
    closeModalByEl(letterModal);
    // also close any open game modals
    document.querySelectorAll(".modal.show").forEach(m=> closeModalByEl(m));
  }
});

/* -------- GIOCHI: apri modal gioco specifico -------- */
function openGameModal(id){
  // id like "gameModal-5"
  const modal = document.getElementById(id);
  if(!modal) return;
  openModal(modal);
  // initialize the game when modal opens
  initGameById(id);
}

/* attach close to every game modal close button */
document.querySelectorAll(".modal-game .game-close").forEach(btn=>{
  btn.addEventListener("click", (e)=>{
    const id = btn.dataset.game;
    const modal = document.getElementById(`gameModal-${id}`);
    if(modal) closeModalByEl(modal);
  });
});

/* close modal by backdrop click for games */
document.querySelectorAll(".modal-game").forEach(m=>{
  m.addEventListener("click",(e)=>{ if(e.target === m) closeModalByEl(m); });
});

/* -------- Implementazioni giochi -------- */

function initGameById(id){
  // called each time a game modal opens
  if(id === "gameModal-5") initHeartGame();
  if(id === "gameModal-10") initPuzzleGame();
  if(id === "gameModal-15") initMemoryGame();
  if(id === "gameModal-20") initWordGame();
}


// GIOCO 5 — INDOVINA IL RICORDO
// ---------------------------

const ricordi = [
    {
        domanda: "📅 Qual è il giorno in cui ci siamo messe assieme?",
        opzioni: ["28 agosto", "29 agosto", "6 settembre"],
        risposta: "28 agosto"
    },
    {
        domanda: "💋 Quando c'è stato il nostro primo bacio?",
        opzioni: ["10 agosto", "15 agosto", "16 agosto"],
        risposta: "15 agosto"
    },
    {
        domanda: "🎁 Cosa le ho regalato alla nostra prima uscita?",
        opzioni: ["Un peluche", "Una rosa e un braccialetto", "Una rosa"],
        risposta: "Una rosa e un braccialetto"
    },
    {
        domanda: "🎉 Quando abbiamo fatto la prima foto assieme dove ci baciavamo?",
        opzioni: ["6 settembre", "28 agosto", "1 ottobre"],
        risposta: "6 settembre"
    },
    {
        domanda: "🎬 Qual è il primo film che abbiamo visto assieme?",
        opzioni: ["The amazing spiderman 1", "Il buco", "The amazing spiderman 2"],
        risposta: "The amazing spiderman 1"
    }
];

let ricordoIndex = 0;

function startRicordo() {
    ricordoIndex = 0;
    showRicordo();
    openRicordo();
}

function showRicordo() {
    const q = ricordi[ricordoIndex];
    document.getElementById("ricordoQuestion").innerText = q.domanda;

    const optionsDiv = document.getElementById("ricordoOptions");
    optionsDiv.innerHTML = "";

    q.opzioni.forEach(op => {
        const btn = document.createElement("button");
        btn.classList.add("ricordo-btn");
        btn.innerText = op;

        btn.onclick = () => checkRicordo(op);

        optionsDiv.appendChild(btn);
    });

    document.getElementById("ricordoResult").innerText = "";
    document.getElementById("nextRicordo").style.display = "none";
}

function checkRicordo(opzione) {
    const result = document.getElementById("ricordoResult");
    const q = ricordi[ricordoIndex];

    if (opzione === q.risposta) {
        result.innerHTML = "💚 Esatto amore!";
    } else {
        result.innerHTML = "💔 No amore, riprova!";
    }

    document.getElementById("nextRicordo").style.display = "block";
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("start-ricordo")) {
        startRicordo();
    }
});

document.getElementById("nextRicordo").onclick = () => {
    ricordoIndex++;

    if (ricordoIndex >= ricordi.length) {
        document.getElementById("ricordoQuestion").innerText = "🎉 Hai finito tutti i ricordi amore mio!";
        document.getElementById("ricordoOptions").innerHTML = "";
        document.getElementById("nextRicordo").style.display = "none";
    } else {
        showRicordo();
    }
};

function openRicordo() {
    document.getElementById("ricordoGame").style.display = "flex";
    document.getElementById("ricordoGame").classList.add("show");
}

function closeRicordo() {
    const modal = document.getElementById("ricordoGame");
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 200);
}

/* --- GIOCO 10: Puzzle --- */
function initPuzzleGame() {
    const container = document.getElementById("puzzleContainer");
    const msg = document.getElementById("puzzleMsg");
    const resetBtn = document.getElementById("resetPuzzle");

    container.innerHTML = "";
    msg.innerText = "";

    const size = 3; // 3x3
    const pieces = [];

    const imgSrc = "img/noi.jpeg";

    // CREA I PEZZI
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const index = y * size + x;

            const piece = document.createElement("div");
            piece.classList.add("puzzle-piece");

            // posizione corretta
            piece.dataset.correct = index;

            // posizione dell'immagine
            piece.style.backgroundImage = `url('${imgSrc}')`;
            piece.style.backgroundPosition = `-${x * 100}px -${y * 100}px`;

            pieces.push(piece);
        }
    }

    // MESCOLA I PEZZI
    pieces.sort(() => Math.random() - 0.5);

    // INSERISCI NEL DOM
    pieces.forEach((p, i) => {
        p.dataset.index = i;
        container.appendChild(p);
    });

    let first = null;

    // CLICK PER SCAMBIARE
    pieces.forEach(p => {
        p.addEventListener("click", () => {
            if (!first) {
                first = p;
                p.classList.add("selected");
                return;
            }

            // secondo click → scambia
            const second = p;

            // scambia solo se non è lo stesso
            if (first !== second) {
                swapPieces(first, second);
            }

            first.classList.remove("selected");
            first = null;

            checkWin();
        });
    });

    // FUNZIONE SWAP
    function swapPieces(a, b) {
        const indexA = a.dataset.index;
        const indexB = b.dataset.index;

        // scambia nel DOM
        const parent = a.parentNode;
        const aNext = a.nextSibling === b ? a : a.nextSibling;
        parent.insertBefore(a, b);
        parent.insertBefore(b, aNext);

        // aggiorna indici
        a.dataset.index = indexB;
        b.dataset.index = indexA;
    }

    // CONTROLLA SE HAI VINTO
    function checkWin() {
        const all = [...container.children];
        const ok = all.every((p, i) => Number(p.dataset.correct) === i);

        if (ok) {
            msg.innerText = "🎉 Bravissima amore! Hai ricomposto la nostra foto ❤️";
        }
    }

    resetBtn.onclick = initPuzzleGame;
}





/* --- GIOCO 15: Memory con 5 coppie (10 carte) --- */
function initMemoryGame() {
  const grid = document.getElementById("memoryGrid");
  const msg = document.getElementById("memoryMsg");

  // Le tue 5 foto → 5 coppie
  const photos = [
    "img/1a.jpg",
    "img/2a.jpg",
    "img/3a.jpg",
    "img/4a.jpg",
    "img/5a.jpg"
  ];

  // crea array 10 carte (5 coppie)
  let cardsArr = [];
  photos.forEach(src => cardsArr.push(src, src));

  // mescola
  for (let i = cardsArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardsArr[i], cardsArr[j]] = [cardsArr[j], cardsArr[i]];
  }

  grid.innerHTML = "";
  msg.innerText = "";

  let first = null;
  let lock = false;
  let matchedCount = 0;

  cardsArr.forEach(src => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.value = src;

    const front = document.createElement("div");
    front.className = "front";
    front.style.backgroundImage = `url('${src}')`;

    const back = document.createElement("div");
    back.className = "back";
    back.innerHTML = "🎁"; // simbolo coperto

    card.appendChild(front);
    card.appendChild(back);

    card.onclick = () => {
      if (lock || card.classList.contains("flipped")) return;

      card.classList.add("flipped");

      if (!first) {
        first = card;
      } else {
        lock = true;

        const second = card;

        setTimeout(() => {
          if (first.dataset.value === second.dataset.value) {
            // coppia trovata
            matchedCount++;
            first.style.boxShadow = "0 0 10px #5cd65c";
            second.style.boxShadow = "0 0 10px #5cd65c";

            if (matchedCount === 5) {
              msg.innerText = "Hai trovato tutte le coppie! 🎉";
            }
          } else {
            // sbagliato
            first.classList.remove("flipped");
            second.classList.remove("flipped");
          }

          first = null;
          lock = false;
        }, 700);
      }
    };

    grid.appendChild(card);
  });

  // pulsante reset
  const resetBtn = document.getElementById("resetMemory");
  if (resetBtn) resetBtn.onclick = () => initMemoryGame();
}


/* --- GIOCO 20: Parola Misteriosa --- */
/* ----------------------------------------
   GIOCO: PAROLA MISTERIOSA – GIORNO 20
---------------------------------------- */

function initWordGame() {
  const phrase = "Sei la parte più bella che mi sia capitata nella vita";
  const normalizedPhrase = phrase.toLowerCase();

  const phraseContainer = document.getElementById("misteryPhrase");
  const lettersContainer = document.getElementById("lettersContainer");
  const messageBox = document.getElementById("misteryMessage");

  if (!phraseContainer || !lettersContainer) return;

  // Pulisce tutto ogni volta che si apre il gioco
  phraseContainer.innerHTML = "";
  lettersContainer.innerHTML = "";
  messageBox.textContent = "";

  // Mostra la frase con lettere nascoste
  [...normalizedPhrase].forEach(char => {
    const span = document.createElement("span");
    span.classList.add("mistery-letter");

    if (char === " "){
      span.textContent = " ";
      span.classList.add("space");
    } else {
      span.textContent = "_";
      span.dataset.letter = char;
    }

    phraseContainer.appendChild(span);
  });

  // Lettere dalla A alla Z + lettere accentate
  const alphabet = "abcdefghijklmnopqrstuvwxyzàèéìòù".split("");

  alphabet.forEach(letter => {
    const btn = document.createElement("button");
    btn.classList.add("letter-btn");
    btn.textContent = letter;

    btn.addEventListener("click", () => {
      btn.disabled = true;

      const letters = document.querySelectorAll(".mistery-letter");
      let found = false;

      letters.forEach(l => {
        if (l.dataset.letter === letter) {
          l.textContent = letter;
          found = true;
        }
      });

      if (!found) {
        btn.classList.add("wrong");
      } else {
        btn.classList.add("correct");
      }

      checkWin();
    });

    lettersContainer.appendChild(btn);
  });

  function checkWin(){
    const all = document.querySelectorAll(".mistery-letter");
    const done = [...all].every(l => l.textContent !== "_");

    if(done){
      messageBox.textContent = "🎉 Amore mio, hai indovinato la frase! ❤️";
      document.querySelectorAll(".letter-btn").forEach(b => b.disabled = true);
    }
  }
}

/* render initially */
renderCalendar();
