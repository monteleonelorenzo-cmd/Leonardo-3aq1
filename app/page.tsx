"use client";

import { useState } from "react";

export default function Home() {
  const [section, setSection] = useState("home");
  const [page, setPage] = useState(1);
  const [side, setSide] = useState<"R" | "V">("R");
  const [flipH, setFlipH] = useState(false); // flip orizzontale
  const [flipV, setFlipV] = useState(false); // flip verticale

  const MAX_PAGE = 120;
  const imgSrc = `/codex/${side}-${page}.jpg`;

  // Calcolo delle classi di flip
  const imgClass = `max-h-[80vh] rounded-2xl border border-[#d6c9b8] transform ${
    flipH ? "scale-x-[-1]" : ""
  } ${flipV ? "scale-y-[-1]" : ""}`;

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#2b2b2b]">

      {/* ================= HOME ================= */}
      {section === "home" && (
        <div className="min-h-screen p-10">
          <h1 className="text-center text-4xl tracking-[0.4em] mb-14 font-light text-[#3a2f24]">
            3AQ LABORATORIO LEONARDO
          </h1>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div onClick={() => setSection("codex")} className="cursor-pointer bg-white p-3 rounded-2xl border border-[#d6c9b8]">
              <img src="/museum/codex.jpg" className="h-64 w-full object-cover rounded-xl" />
              <p className="mt-3">Codex Atlantico</p>
            </div>

            <div onClick={() => setSection("life")} className="cursor-pointer bg-white p-3 rounded-2xl border border-[#d6c9b8]">
              <img src="/museum/life.jpg" className="h-64 w-full object-cover rounded-xl" />
              <p className="mt-3">Vita di Leonardo</p>
            </div>

            <div onClick={() => setSection("inventions")} className="cursor-pointer bg-white p-3 rounded-2xl border border-[#d6c9b8]">
              <img src="/museum/inventions.jpg" className="h-64 w-full object-cover rounded-xl" />
              <p className="mt-3">Invenzioni</p>
            </div>

            <div onClick={() => setSection("bridge")} className="cursor-pointer bg-white p-3 rounded-2xl border border-[#d6c9b8]">
              <img src="/museum/bridge.jpg" className="h-64 w-full object-cover rounded-xl" />
              <p className="mt-3">Ponte Autoportante</p>
            </div>
          </div>
        </div>
      )}

      {/* ================= CODEX ================= */}
      {section === "codex" && (
        <div className="min-h-screen flex flex-col bg-[#f5f1e8]">

          <div className="p-4 border-b border-[#d6c9b8] flex justify-between bg-white/70">
            <button onClick={() => setSection("home")}>Indietro</button>
            <div>Codex Atlantico</div>
            <div>{side}-{page}</div>
          </div>

          <div className="flex-1 flex items-center justify-center p-6">
            <img src={imgSrc} className={imgClass} />
          </div>

          <div className="p-4 flex justify-center gap-3 border-t border-[#d6c9b8] bg-white/70">

            <button onClick={() => setPage(p => Math.max(1, p - 1))}>
              Indietro
            </button>

            <button onClick={() => {
              setSide(s => (s === "R" ? "V" : "R"));
              setPage(1);
              setFlipH(false); // reset flip
              setFlipV(false); // reset flip
            }}>
              Cambia lato
            </button>

            <button onClick={() => setPage(p => Math.min(MAX_PAGE, p + 1))}>
              Avanti
            </button>

            <button onClick={() => setFlipH(f => !f)}>
              Capovolgi Orizzontale
            </button>

            <button onClick={() => setFlipV(f => !f)}>
              Capovolgi Verticale
            </button>

          </div>
        </div>
      )}

      {/* ================= VITA ================= */}
      {section === "life" && (
        <div className="min-h-screen p-10">

          <button onClick={() => setSection("home")}>Indietro</button>

          <div className="bg-white p-6 mt-6 rounded-2xl border border-[#d6c9b8] max-w-3xl space-y-4 leading-relaxed">

            <p>
              Leonardo da Vinci è stato molto più di un semplice artista: è stato la persona più curiosa della storia, un uomo che ha passato l’intera vita a cercare di capire come funziona ogni singolo pezzo del mondo. Nato nel 1452 a Vinci, in Toscana, Leonardo non ebbe un’istruzione classica. Questo si rivelò un vantaggio, perché invece di studiare solo sui libri, imparò a usare i suoi occhi. Fin da bambino esplorava le campagne osservando il volo degli uccelli, il movimento dell'acqua e la forma delle piante, convincendosi che la natura fosse la più grande maestra di tutte.
            </p>

            <p>
              Il suo incredibile talento nel disegno lo portò a Firenze, nella bottega del Verrocchio, dove imparò a dipingere, a scolpire e a lavorare i metalli. Leonardo, però, non si accontentava di creare immagini belle; voleva che fossero vere. Per dipingere un braccio umano in modo perfetto, non si limitava a guardarlo da fuori: studiava l'anatomia, arrivando persino ad analizzare i cadaveri per capire come i muscoli e le ossa si muovessero sotto la pelle. Questa unione tra arte e scienza è ciò che lo ha reso unico. Quando guardiamo i suoi quadri più famosi, come la Gioconda o l'Ultima Cena, non vediamo solo colori su una superficie, ma percepiamo la vita. Usava la tecnica dello sfumato, dove i contorni non sono linee dure ma ombre leggere, proprio come accade nella realtà, dove l'aria e la luce rendono tutto un po' vago e misterioso.
            </p>

            <p>
              Ma la pittura era solo una piccola parte della sua giornata. La mente di Leonardo era un vulcano di idee: passava ore a riempire i suoi taccuini (scritti al contrario, da destra a sinistra, per un vezzo o per segretezza) con disegni di macchine incredibili. Secoli prima che venissero inventati davvero, lui aveva già immaginato il paracadute, l’elicottero, il carro armato e persino un robot meccanico.
            </p>

            <p>
              Oltre a essere un genio, Leonardo era una persona dal cuore d'oro e dal carattere magnetico. Si racconta che fosse un uomo bellissimo, molto forte fisicamente e profondamente gentile. Amava così tanto la vita e gli animali che era vegetariano e spesso comprava gli uccellini chiusi nelle gabbie al mercato solo per il gusto di aprirle e vederli volare via felici.
            </p>

            <p>
              Passò i suoi ultimi anni in Francia, ospite del Re Francesco I che lo ammirava profondamente, e lì morì nel 1519. Leonardo da Vinci ci ha lasciato una lezione importantissima che vale ancora oggi: non smettere mai di essere curiosi.
            </p>

          </div>
        </div>
      )}

      {/* ================= INVENZIONI ================= */}
      {section === "inventions" && (
        <div className="min-h-screen p-10">

          <button onClick={() => setSection("home")}>Indietro</button>

          <div className="bg-white p-6 mt-6 rounded-2xl border border-[#d6c9b8] max-w-3xl space-y-4 leading-relaxed">

            <p>
              Per comprendere davvero l'immensità di Leonardo da Vinci, dobbiamo guardare a due progetti che sembrano agli opposti: uno nato per sollevarsi verso le nuvole, l’altro creato per dominare il fango delle battaglie. La Vite Aerea e il Carro Armato sono i due simboli perfetti della sua mente, capace di sognare la libertà assoluta del volo e, allo stesso tempo, di progettare la difesa più impenetrabile che il Rinascimento avesse mai immaginato.
            </p>

            <p>
              Il sogno di volare fu l'ossessione che accompagnò Leonardo per tutta la vita. Osservando la natura, non vedeva solo uccelli, ma leggi fisiche in movimento. La sua Vite Aerea, disegnata intorno al 1489, è la prova che lui aveva capito qualcosa che gli altri ignoravano: l'aria non è il nulla, ma un fluido con una sua consistenza. Se una vite di metallo può entrare nel legno, pensò Leonardo, allora una vite di tela leggera potrebbe "avvitarsi" nell'aria e sollevarsi. Il progetto prevedeva una grande spirale di tela di lino, tesa su canne di bambù e trattata con amido per renderla impermeabile al vento. Alla base, quattro uomini avrebbero dovuto spingere delle manovelle con tutta la loro forza per farla ruotare. Anche se oggi sappiamo che la forza umana non sarebbe mai bastata e che mancava un sistema per non far girare la base su se stessa, l'idea di base era corretta: Leonardo aveva appena inventato il concetto di elica. Ogni elicottero moderno che vediamo oggi nel cielo ha una piccola scintilla di quel disegno fatto di lino e legno.
            </p>

            <p>
              Mentre la Vite Aerea cercava la leggerezza, il suo Carro Armato era l'incarnazione della solidità. Progettato per Ludovico il Moro, questo mezzo doveva essere una fortezza inarrestabile capace di seminare il panico tra le file nemiche. Leonardo si ispirò ancora una volta alla natura, dando al carro la forma a cupola di un guscio di tartaruga. Questa scelta era pura ingegneria della difesa: i colpi di cannone o le pietre lanciate contro di lui non l’avrebbero colpito in pieno, ma sarebbero scivolati via sulla superficie curva. Tutto intorno al carro erano posizionati dei cannoni pronti a sparare in ogni direzione, mentre all’interno otto uomini dovevano muovere le ruote tramite un sistema di ingranaggi e manovelle. C'è però un dettaglio affascinante: nel disegno originale, gli ingranaggi sono montati al contrario, rendendo il carro immobile. Leonardo era un maestro della meccanica, e molti credono che quell'errore fosse intenzionale: forse non voleva davvero che una macchina così distruttiva venisse costruita, o forse voleva solo impedire a qualche spia di rubare il suo segreto.
            </p>

            <p>
              Unire queste due macchine in un solo racconto significa vedere Leonardo per quello che era davvero: un uomo che non vedeva confini tra l'impossibile e il pratico. Da una parte la vite di tela che sfida il cielo, dall'altra la tartaruga di legno che protegge la vita sulla terra. In entrambi i casi, non c'è traccia di magia, ma solo di un'osservazione profonda del mondo. Leonardo ci ha insegnato che, sia che si tratti di volare o di proteggersi, la risposta è sempre scritta nel libro della natura. Quelle macchine, che ai suoi tempi erano solo macchie d'inchiostro su un foglio, sono diventate le radici del nostro mondo moderno, dimostrando che un'idea potente, se basata sulla logica e sulla curiosità, può viaggiare nel tempo per secoli fino a diventare realtà.
            </p>

          </div>
        </div>
      )}

      {/* ================= PONTE ================= */}
      {section === "bridge" && (
        <div className="min-h-screen p-10">

          <button onClick={() => setSection("home")}>Indietro</button>

          <div className="bg-white p-6 mt-6 rounded-2xl border border-[#d6c9b8] max-w-3xl space-y-4 leading-relaxed">

            <p>
              Il ponte autoportante di Leonardo da Vinci non è solo un ammasso di legname incastrato; è la prova tangibile che la genialità non ha bisogno di complicazioni, bulloni o motori per cambiare il mondo. Immagina di trovarti nel Rinascimento, un’epoca di grandi scoperte ma anche di guerre costanti. Gli eserciti dovevano muoversi in fretta e i fiumi erano il nemico numero uno: per superarli servivano barche, che erano lente, o ponti di pietra, che richiedevano mesi di lavoro. Leonardo, osservando i soldati e i carpentieri del suo tempo, capì che serviva qualcosa di diverso. Serviva un’idea che stesse in un carro e che potesse essere montata da chiunque, anche da chi non aveva mai studiato ingegneria.
            </p>

            <p>
              La bellezza di questo progetto sta tutta nella sua incredibile semplicità. Se guardi il disegno originale nel Codice Atlantico, vedi una serie di tronchi cilindrici che sembrano quasi intrecciati, come se fossero le fibre di un tessuto o i rami di un nido. Non c'è traccia di chiodi, non ci sono corde che stringono i legni, non c'è colla. Questo sembra impossibile a prima vista: come può una struttura stare in piedi e reggere il peso di uomini e cavalli senza nulla che tenga uniti i pezzi? La risposta di Leonardo è pura poesia della fisica: la forza di gravità.
            </p>

            <p>
              Di solito, la gravità è ciò che fa cadere le cose. Se costruisci una casa male, la gravità la tira giù. Leonardo, invece, decise di rendere la gravità sua amica. Nel ponte autoportante, ogni tronco è posizionato in modo da appoggiarsi su quello successivo e, contemporaneamente, bloccare quello precedente. È un gioco di incastri perfetti dove ogni elemento spinge contro l'altro. Il risultato è magico: più peso carichi sopra il ponte, più i tronchi si stringono tra loro, rendendo la struttura incredibilmente solida. Se un soldato ci cammina sopra, il suo peso non "affatica" il ponte nel senso comune, ma lo "chiude" con più forza. È una lezione di vita, oltre che di ingegneria: usare la pressione esterna per diventare più resistenti.
            </p>

            <p>
              Leonardo scelse il legno non solo perché era economico, ma perché era flessibile. I tronchi di bosco, tagliati in modo semplice e senza troppe rifiniture, potevano essere trasportati ovunque. Immagina la scena: un piccolo gruppo di soldati arriva sulla riva di un ruscello profondo. Non hanno attrezzi pesanti, hanno solo dei tronchi. In pochi minuti, seguendo lo schema di Leonardo, iniziano a incastrare i pezzi. Non serve un architetto che misuri al millimetro; lo schema è così intuitivo che le mani sanno quasi da sole dove posizionare il legno. Una volta che l'arco è formato, il ponte è pronto. E la cosa più geniale è che, una volta passato l'ultimo uomo, il ponte può essere smontato in un attimo, lasciando il nemico dall'altra parte del fiume, a guardare il vuoto.
            </p>

            <p>
              Ma perché questa invenzione è così importante per noi oggi, a distanza di più di cinquecento anni? Perché ci insegna che la soluzione a un problema complesso non deve essere per forza complessa. Spesso pensiamo che per costruire qualcosa di grande servano tecnologie avanzate, materiali costosi o computer potentissimi. Leonardo ci dice che basta guardare come sono fatti gli alberi o come si intrecciano le dita delle nostre mani. Il ponte autoportante è l'essenza del "meno è meglio". È un'opera pulita, ecologica (diremmo oggi) e logica.
            </p>

            <p>
              In questo progetto vediamo anche il lato umano di Leonardo: il suo desiderio di aiutare, di rendere il lavoro meno faticoso, di proteggere le persone. Anche se era un ponte pensato per la guerra, la sua struttura a forma di arco è un simbolo di unione. Un ponte collega due mondi che prima erano separati, e farlo con la sola forza dell'incastro naturale rende l'opera quasi spirituale. È come se Leonardo avesse trovato il modo di far collaborare i materiali tra loro, obbligandoli a sostenersi a vicenda invece di combattere contro la forza della terra.
            </p>

            <p>
              Se oggi costruissi un modello in miniatura di questo ponte con dei semplici bastoncini di gelato, proveresti un’emozione particolare nel vedere che, all'ultimo incastro, la struttura si alza da sola e sta in piedi senza che tu debba reggerla. In quel momento, capiresti esattamente cosa provava Leonardo: la gioia della scoperta, lo stupore davanti alla logica della natura. Non è solo un ponte fatto di legno; è un ponte fatto di pensiero puro. È la dimostrazione che l'intelligenza umana può superare qualsiasi ostacolo fisico se impara a rispettare e a usare le regole del mondo che ci circonda.
            </p>

            <p>
              Leonardo ci ha lasciato questo disegno non solo per farci costruire ponti, ma per invitarci a guardare il mondo in modo diverso. Ci chiede di chiederci: "Cosa posso fare con quello che ho già a disposizione? Come posso usare la forza che mi spinge a terra per stare invece in piedi?". Il ponte autoportante è la sua risposta silenziosa e perfetta a queste domande. È un invito a costruire legami solidi usando solo la fiducia e l'incastro dei nostri talenti, proprio come quei tronchi che, pur essendo soli e semplici, insieme diventano una strada sicura verso l'altra riva.
            </p>

          </div>
        </div>
      )}

    </div>
  );
}
