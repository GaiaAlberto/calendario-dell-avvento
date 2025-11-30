const gifts = [];

const spotifyTracks = [
  "5rwQGBi5mdmU7dqNM7x9Oo", //1
  "5cUwl3Zf7TJDsZypvxSrti", //2
  "0SeoeFL0XM5YpTag15SX9n", //3
  "5lSVipVtewS5AsTcM8ZbTD", //4
  "5aVUDn1F4x26UkHFVgWsiE", //5
  "7JCcVAZytTNniXxvw3N4mT", //6
  "6D6tK55Dywt5qtJeUvQtVO", //7
  "6mA9cV0ti1IICSv3Wb0rSt", //8
  "4QRvzl7Ka6SbRHxbgVYRKU", //9
  "10hc6GvyWhe2E48PAfQrdD", //10
  "4Znj6S7JGcu4QbCyrs1GBL", //11
  "7jVQ6DP7Q6S2wKWqJmcTZL", //12
  "4tIDe4F2wXQByJ1kpYjfnI", //13
  "3bkfnsCQ5QMQ5rTU4NPiAo", //14
  "1luaDJSIBAAQxxeS6JBEqX", //15
  "0rjVRGqVuNwnGCxwBkBZXd", //16
  "7IQ9ydR5yQue6RrFfYl1zt", //17
  "56aNXzJAZbI1j6jJeEampd", //18
  "1eDC4NiUYgQSKpKDIvXxi4", //19
  "7gNV6kCC2GTJ1zRqutAze1", //20
  "3l109GEhkVYrTvDoKuNGlu", //21
  "5coGRpcrHdoLBuTLAeKGxu", //22
  "5pL8J6weoydzXglhsoJ6Vw", //23
  "0WI4Oe17LXAWCekzAEPCWi", //24
  "0bYg9bo50gSsH3LtXe2SQn" //25
];

const lettersText = [
`Amore mio, oggi inizia il nostro piccolo conto alla rovescia che finisce col nostro primo natale assieme,
e non sai quanto sono felice di viverlo e passarlo con te. Non sono brava ad esprimermi e a mostrare i miei sentimenti
ma con questo  calendario spero di riuscire a strapparti un sorriso ogni mattina svegliandoti e aprendo ogni giorno una lettera.
Sopratutto volevo dirti grazie, per esserci, per scegliere me, per render tutto più bello.
Ah dimenticavo, oltre alla lettera sotto trovi una canzone ogni giorno voglio dedicarti.  Spero ti piaccia!`, //1
`Buongiorno, e sopratutto buon 2 dicembre!  <br>  
Non penso di essere in grado di fare 25 lettere sdolcinate, non fa per me :) Mi basta strapparti
un sorriso ogni mattina e sono la persona pioù felice del mondo. `, //2
`Buongiorno amore, buon 3 dicembre!  <br> 
Forse queste date possono sembrare piccole o senza senso, ma per me hanno un valore enorme… perché segnano il nostro primo Natale insieme.
E spero davvero che sia il primo di tanti, perché ogni giorno che passa sento sempre di più quanto voglio condividere con te tutti gli altri giorni che verranno. `, //3
`Buongiornissimoo, buon 4 dicembre!  <br> 
Oggi voglio fare un piccolo salto nel passato, il perchè lo capirai domani :)
Ti ricordi quel fantomatico 15 agosto? Tralasciando la mia sbronza è stato il giorno del nostro primo bacio, una data che rimarrà impressa per sempre nella mia testa.
Non desideravo niente di meglio quel giorno se non stare li con te.`, //4
`
<h2>💖 Indovina il Ricordo 💖</h2>
<p>Buongiornooo <br>
Per te oggi non c'è una lettera ma un piccolo mini-game <br>  
Riuscirai a collegare ogni indizio al nostro momento speciale?</p>
<button class="start-ricordo">Inizia il gioco</button>
`, // 5

`Buongiorno e buon 6 dicembre!  <br> 
spero che il mini-gioco di ieri ti abbia strapatto un sorriso, e spero che tu non abbia sbagliato le risposte ovviamente!!
Da quando stiamo insieme sono la persone più felice del mondo, mi sveglio sapendo di dare il buongiorno alla ragazza più bella che c'è, 
ed è vero non lo dico solo per dire.`, //6
`Buongiornoo e buon 7 dicembre!  <br> 
Vorrei che tu sapessi che, anche quando non lo dico, ti porto con me in ogni pensiero, in ogni idea, in ogni piccolo momento della mia giornata.`, //7
`Buongiorno e buon 8 dicembre!  <br> 
Nel mondo ci sono 8 miliardi di persone,  ma nessuna e dico nessuna (tranne Cristiano Ronaldo,  dai scherzo forse :) ) mi fa l'effetto che mi fai tu, 
nessuna mi guarda come mi guardi tu. Nessuna è come te.`, //8
`Buongiorno, e buon 9 dicembre!  <br> 
Per te domani c'è un'altro giochino divertente, ti do solo un piccolo spoiler dai, si tratta di una foto ma non una foto qualunque, una delle mie foto preferite. 
Tutte le foto con te sono le mie preferite, ma questa ha un piccolo spazio nel mio cuore! `, //9
`Oggi c'è un gioco divertente: puzzle!`, // 10
` Buongiorno e buon 11 dicembre!  <br> 
Siamo quasi a metà di questo calendario, e io sto finendo le idee :)
Oggi volevo farti sapere che io ti penso sempre, vorrei che fossi con me sempre. Anche quando ci vediamo, il secondo dopo che ti ho salutata
mi manchi già. E spero che tu questo lo sappia!`, //11
`Buongiorno e buon 12 dicembre!!  <br> 
Bene ho completamente finito le idee, sono pessima lo so. Perciò per il giorno di oggi voglio che ascolti la canzone 
e voglio dedicartela facendoti sapere che non sarai mai sola perchè avrai sempre me. Per qualsiasi cosa io ci sarò sempre per te!`, //12
`Buongiorno e buon 13 dicembre!  <br> 
Da quando ci sei tu, tutto ha preso un colore diverso. Anche le giornate normali sembrano più leggere, 
anche quando sono stanca o ho mille pensieri mi basta un tuo messaggio, una tua frase spontanea, e mi sento subito meglio.
Tu riesci a calmarmi, a farmi sorridere, a farmi sentire al posto giusto.
 È un tuo superpotere (come spiderman :)), e io ne sono innamorata.<br>
 ps. so che alfa non ti piace ma questa canzone ci stava troppo bene scusa :) `,  //13
`Buongiorno amore mio, buon 14 dicembre.  <br> 
Oggi volevo dirti una cosa che forse non ti dico abbastanza: sono orgoglioso di te.
Forse non te l'ho mai detto abbastanza, ma sono così tanto orgogliosa di te che spesso vado in tilt e non te lo dico ma vorrei che tu lo sappia
e che non te ne dimentichi mai.`, //14
`Buongiorno e buon 15 dicembre! <br>
Oggi per te c'è un'altro giochino!`, //15
`Buongiorno e buon 16 dicembre!  <br> 
spero che il mini-game di ieri ti sia piaciuto, ho messo solo 5 foto ma ognuna di quelle foto per me rappresentano
un momento impotante vissuto con te, perciò dobbiamo fare più  foto!!!`, //16
`Buongiorno e buon 17 dicembre!!  <br> 
Una cosa che amo di te?
La maniera in cui mi fai ridere.
Il modo in cui mi guardi, con quegli occhi che sembrano dirmi mille cose anche quando non parli.
E anche quando litighiamo (spero non succeda più), anche quando non siamo d’accordo, io so sempre che alla fine scegliamo di capirci.`, //17
`Buongiornooo e buon 18 dicembre!!  <br> 
Ogni volta che ti guardo, mi viene naturale immaginare un futuro con te, spero di non essere frettolosa ma non è una cosa che mi capita con tutte.
Non mi fa paura, non mi mette ansia.
Mi fa sorridere. <br>
Ti immagino accanto a me mentre passano gli anni,  <br>
ti immagino nelle piccole cose quotidiane,  <br>
ti immagino mentre litighiamo per cose stupide e poi facciamo pace,  <br>
ti immagino mentre mi stringi perché sei freddolosa (questo succede già ora).  <br> 
E in tutte queste immagini, ci sei tu.  <br>
Perché sei ciò che voglio`, //18
`Buongiorno e buon 19 dicembre!!  <br> 
Sai una cosa?
A volte mi fermo a pensare a quanto siamo diventati importanti l’uno per l’altra in così poco tempo, 
e ogni volta mi prende quella sensazione al petto… quella bella, quella che ti scalda. <br>
Non voglio perderla mai. <br>
Non voglio perderti mai.`, //19
`Buongiorno e buon 20 dicembre, per te oggi c'è l'ultimo mini-game!
Non voglio dirti niente oggi perchè fara tutto il gioco!`, //20
`Buongiornoo e buon 21 dicembre!!  <br> 
Ieri non stavo scherzando con la frase "sei la parte più bella che mi sia capitata nella vita".
Per me sei davvero la parte più bella, non cambierei nulla dal 28 agosto ad oggi, sceglierei sempre e solo te.`, //21
`Buongiorno amore mio, buon 22 dicembre!!   <br> 
Natale si avvicina e io continuo a pensare a quanto sarà bello passarlo insieme.
È il nostro primo Natale, e io lo sento davvero speciale. <br> 
Forse perché ci sei tu.  <br> 
Forse perché sei il regalo più bello che potessi trovare sotto l’albero.  <br> 
O forse perché, per la prima volta, mi sento davvero felice in questo periodo.  <br> 
Non vedo l’ora di guardarti mentre sorridi aprendo i tuoi regali.
E non vedo l’ora di abbracciarti forte.`, //22
`Amore, buon 23 dicembre. <br>
Siamo arrivati quasi alla fine di questo calendario…   <br> 
ma non alla fine di quello che provo.
Quello continua, anzi cresce.  <br> 
Oggi voglio solo dirti che mi fai sentire amata, davvero. <br>
Con la tua presenza, con tutto quello che fai anche senza accorgertene. <br>
Ogni tanto mi chiedo come ho fatto prima, <br>
come ho fatto senza di te. <br>
E non mi so più rispondere`, //23
`Buon 24 dicembre, la vigilia di natale. <br>
Oggi è uno di quei giorni in cui tutto sembra più magico…  <br>
ma per me la cosa più magica sei tu.  <br>
Non vedo l’ora di passare questo Natale insieme, di guardarti negli occhi e pensare:  <br>
“Eccoci qui… il nostro primo Natale, il primo di tanti.”  <br>
Se solo tu potessi sentire quello che sento io quando ti guardo
capiresti quanto sei speciale per me  <br>
grazie per esserci sempre e per aiutarmi quando sono in difficoltà, capirmi e sostenerti sempre `, //24
`Buon Natale amore mio. <br>
Eccoci qui, al giorno più speciale. <br>

Oggi volevo solo dirti una cosa semplice: <br>
Ogni giorno che passa mi innamoro sempre di più di te. <br>
Non come frase buttata lì, ma come sentimento pieno. <br>
Come certezza. <br>
Come promessa che voglio stare sempre con te. <br>

Tu sei entrata nella mia vita da un momento così inaspettato e l’hai cambiata senza chiedere niente. <br>

E se oggi potessi esprimere un desiderio, uno soltanto, sarebbe questo: <br>
continuare a svegliarmi ogni giorno sapendo che ci sei tu nella mia vita. <br>

Buon Natale amore. <br>
Il nostro primo. <br>
Il primo di tanti. 🎄❤️` //25
];

for (let i = 1; i <= 25; i++) {
  const gameMap = {5: "5", 10: "10", 15: "15", 20: "20"};
  gifts.push({
    id: i,
    date: `2025-12-${String(i).padStart(2,"0")}`,
    title: `Lettera del ${i} Dicembre`,
    // message is pure HTML text (no scripts)
    message: `
      <div class="letter-text">
        <h3>Lettera del ${i} Dicembre ❤️</h3>
        <p>${lettersText[i-1]}</p>
        <p style="margin-top:10px"><strong>🎵 Canzone del giorno</strong></p>
        <iframe src="https://open.spotify.com/embed/track/${spotifyTracks[i-1]}?utm_source=generator" width="100%" height="152" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    `,
    gameId: gameMap[i] ? `gameModal-${gameMap[i]}` : null
  });
}
