"use client";

import { useState } from "react";

export default function Home() {
  const [section, setSection] = useState("home");
  const [page, setPage] = useState(1);
  const [side, setSide] = useState<"R" | "V">("R");
const [note, setNote] = useState<string | null>(null);
  const [flipH, setFlipH] = useState(false); // flip orizzontale
  const [flipV, setFlipV] = useState(false); // flip verticale
const [zoom, setZoom] = useState(1);
const [search, setSearch] = useState("");

  const MAX_PAGE = 120;
  const imgSrc = `/codex/${side}-${page}.jpg`;

  // Calcolo delle classi di flip
  const imgClass = `max-h-[80vh] rounded-2xl border border-[#d6c9b8] transform ${
    flipH ? "scale-x-[-1]" : ""
  } ${flipV ? "scale-y-[-1]" : ""}`;

const pageKey = `${page}-${side}`;

const pageNotes: Record<string, string> = {
  "1-R": "Il testo che accompagna la piattaforma circolare descrive la logica del combattimento a 360 gradi. Punti chiave degli appunti: Invenzione: Una nave a \"ruota\" con 16 cannoni radiale. Vantaggio tattico: Leonardo scrive che questa disposizione permette di \"investire di colpi l'intera area circostante\", eliminando i punti ciechi delle navi tradizionali. Curiosità sulla scrittura: In questa colonna di sinistra, Leonardo usa eccezionalmente la scrittura normale (da sinistra a destra), probabilmente perché destinata a essere letta da un committente (forse Ludovico il Moro). 2. Gli Strumenti di Misura: L'Odometro (Destra) Qui Leonardo descrive come misurare il terreno, un'esigenza fondamentale per i cartografi e gli ingegneri militari dell'epoca. Punti chiave degli appunti: L'Odometro (a sinistra nella sezione): È una sorta di carriola che misura le miglia. Ad ogni giro della ruota principale, un ingranaggio aziona un disco orizzontale che lascia cadere un sassolino in un contenitore dopo una distanza prestabilita. Il contapassi (a destra nella sezione): Un dispositivo più compatto che serve a contare i passi percorsi da un uomo. Stile di scrittura: Qui torna alla sua tipica scrittura speculare (da destra a sinistra), quasi fosse un suo promemoria privato o un modo per proteggere le proprie idee. 3. Struttura del Foglio e del Codice Numerazione: Questo è il Foglio 1, scelto come apertura del Codice Atlantico proprio per la spettacolarità dei disegni ingegneristici. Materiali: Realizzato con penna e inchiostro su carta non preparata. Le macchie marroni visibili sono segni del tempo o residui di umidità accumulati nei secoli.",

  "10-R": "\"Questo è il modo del volgere la mola che lavora li specchi concavi, e così li vetri convessi... e nota che 'l moto della mola sia veloce e quel del vetro sia tardo... per la qual cosa il vetro fia più egualmente consumato.\" Leonardo non si limita a disegnare, ma fornisce istruzioni tecniche precise sul funzionamento della macchina: Differenziazione della velocità: Leonardo sottolinea un principio fondamentale dell'ottica meccanica: la ruota abrasiva (mola) deve girare molto velocemente, mentre il pezzo di vetro deve ruotare lentamente. Questa differenza garantisce che l'abrasione sia uniforme su tutta la superficie, evitando deformazioni. Automazione del moto: Il disegno mostra come Leonardo cerchi di eliminare l'irregolarità del lavoro manuale. Attraverso il sistema di viti senza fine e ingranaggi (visibili al centro e a sinistra), la macchina mantiene un ritmo costante e preciso, indispensabile per ottenere lenti di alta qualità per cannocchiali o specchi ustori. Regolazione della curvatura: Gli schemi geometrici in basso a sinistra e i cerchi indicano i calcoli necessari per determinare l'esatta curvatura della lente in base all'inclinazione degli assi della macchina.",

  "32-R": "Leonardo descrive l'Architronito di Archimede come un cannone in rame che spara palle di ferro con grande rumore. Il funzionamento prevede di scaldare il dispositivo a fuoco e poi, chiudendo una vite, far cadere acqua in un compartimento infuocato; questo genera istantaneamente un effetto spettacolare per forza e fragore. Il disegno mostra un'arma che sfrutta il vapore per la propulsione dei proiettili.",

  "39-R": "Havendo, Signor mio Illustrissimo, visto et considerato ormai ad sufficientia le prove di tutti quelli che si tengono maestri et compositori de istrumenti bellici, et che le inventioni et operatione di dicti istrumenti non sono niente alieni dal comune uso, mi ingegnerò, non derogando a nessuno altro, farmi intendere da Vostra Eccellentia, aprendo a quella li secreti miei, et appresso offrendoli ad ogni suo piacimento in tempi opportuni, operare cum effecto circa tutte quelle cose che sub brevità in parte saranno qui di sotto annotate: 1. Ho modi de ponti leggerissimi et forti; 2. So in la obsidione de una terra toglier l'acqua de' fossi; 3. Ho modi de ruinare ogni rocca; 4. Ho ancora modi de bombarde commodissime; 5. Ho modi per cave e vie secrete; 6. Farò carri coperti, securi e inoffensibili; 7. Item farò bombarde, mortari et passavolanti; 8. Dove mancassi l'operazione delle bombarde, ordinerò briccole, mangani, trabucchi et altri istrumenti; 9. Et quando accadesse in mare, ho modi de molti istrumenti atti da offendere et defendere; 10. In tempo di pace credo satisfare benissimo a paragone de omni altro in architectura, in composizione di edifici pubblici et privati, et in conducer acqua da un loco ad un altro. Il documento è la celebre lettera d'impiego che Leonardo inviò a Ludovico il Moro intorno al 1482 per presentarsi alla corte di Milano. Nel testo, Leonardo elenca le sue abilità principalmente come ingegnere militare, proponendo soluzioni innovative per la guerra come ponti mobili, carri armati, mine e nuovi tipi di artiglieria. Il disegno nella parte superiore del foglio illustra una balestra gigante, progettata per scagliare enormi dardi o pietre con una gittata superiore a quella delle macchine belliche tradizionali. La balestra è montata su un carro con ruote inclinate per aumentarne la stabilità e la manovrabilità sul campo di battaglia.",

  "47-R": "questo è il modo della molla la quale quanto più si tira più acquista forza e per questo è necessario farla andare per la linea piramidale acciò che la forza sia equale e nota che la molla si debbe temperare in modo che la non si rompa nel caricarsi e che la non si pieghi nel darsi la forza e questo si fa con la vite e con la corda che si volge sopra la vite la quale vite è fatta in forma di pera acciò che nel principio dove la molla ha poca forza la tiri con la parte sottile della vite e quando ha molta forza la tiri con la parte grossa. Il disegno mostra diversi studi su molle a spirale e meccanismi di trazione per orologi e automi.",

  "48-R": "questo par buon modo e così de’ essere perché in ogni grado di moto la balla b s’allontana dal centro a piú che la balla c non si s’accosta al detto centro a e per questo il peso b ha piú potenzia di discendere che non ha il peso c di risalire e questo si conferma perché m n non è s’accosta tanto al centro a quanto fa m o e cosí la balla m fuggendo la percussione m n casca in m o e per questo si fa piú distante dal centro a e per conseguenza ha piú potenzia nel discendere che nel risalire. Spiegazione: Il disegno illustra vari tentativi di moto perpetuo basati su ruote sbilanciate con pesi mobili.",

  "55-R": "questo è il modo di fare il ponte salvatico il quale si fa in brieve tempo e con poca spesa e fassi di legname tondo e rozzo e nota che li cavalletti si deono fare in modo che l'uno si appoggi sopra l'altro e così per gradi di forza l'uno sostenga il compagno e fassi questo ponte senza chiodi o legature di ferro ma solo con incastri e appoggi che per il proprio peso si fermano e quanto più carichi tanto più si serrano e stanno fermi e forti",

  "60-R": "questo è il modo della molla la quale quanto più si tira più acquista forza e per questo è necessario farla andare per la linea piramidale acciò che la forza sia equale e nota che la molla si debbe temperare in modo che la non si rompa nel caricarsi e che la non si pieghi nel darsi la forza e questo si fa con la vite e con la corda che si volge sopra la vite la quale vite è fatta in forma di pera acciò che nel principio dove la molla ha poca forza la tiri con la parte sottile della vite e quando ha molta forza la tiri con la parte grossa.",

  "62-R": "questo è il modo della bombarda la quale si carica per la parte di drieto e nota che la detta bombarda ha il suo mascolo il quale si mette in quel foro e poi si ferma con la bietta di ferro e questa è di gran utilità perché in brieve tempo si carica e si scarica e nota ancora come questi cannoni hanno diverse lunghezze e grossezze secondo che l'uomo vuole che li colpi sieno più o meno potenti e nota che quanto più sono lunghi tanto più tengono il colpo unito e lo mandano più lontano",

  "63-R": "questo è il modo della bombarda la quale si carica per la parte di drieto e nota che la detta bombarda ha il suo mascolo il quale si mette in quel foro e poi si ferma con la bietta di ferro e questa è di gran utilità perché in brieve tempo si carica e si scarica e nota ancora come questi cannoni hanno diverse lunghezze e grossezze secondo che l'uomo vuole che li colpi sieno più o meno potenti e nota che quanto più sono lunghi tanto più tengono il colpo unito e lo mandano più lontano.",

  "64-R": "Havendo, Signor mio Illustrissimo, visto et considerato ormai ad sufficientia le prove di tutti quelli che si tengono maestri et compositori de istrumenti bellici, et che le inventioni et operatione di dicti istrumenti non sono niente alieni dal comune uso, mi ingegnerò, non derogando a nessuno altro, farmi intendere da Vostra Eccellentia, aprendo a quella li secreti miei, et appresso offrendoli ad ogni suo piacimento in tempi opportuni, operare cum effecto circa tutte quelle cose che sub brevità in parte saranno qui di sotto annotate: 1. Ho modi de ponti leggerissimi et forti; 2. So in la obsidione de una terra toglier l'acqua de' fossi; 3. Ho modi de ruinare ogni rocca; 4. Ho ancora modi de bombarde commodissime; 5. Ho modi per cave e vie secrete; 6. Farò carri coperti, securi e inoffensibili; 7. Item farò bombarde, mortari et passavolanti; 8. Dove mancassi l'operazione delle bombarde, ordinerò briccole, mangani, trabucchi et altri istrumenti; 9. Et quando accadesse in mare, ho modi de molti istrumenti atti da offendere et defendere; 10. In tempo di pace credo satisfare benissimo a paragone de omni altro in architectura, in composizione di edifici pubblici et privati, et in conducer acqua da un loco ad un altro.",

  "66-R": "Havendo, Signor mio Illustrissimo, visto et considerato ormai ad sufficientia le prove di tutti quelli che si tengono maestri et compositori de istrumenti bellici, et che le inventioni et operatione di dicti istrumenti non sono niente alieni dal comune uso, mi ingegnerò, non derogando a nessuno altro, farmi intendere da Vostra Eccellentia, aprendo a quella li secreti miei, et appresso offrendoli ad ogni suo piacimento in tempi opportuni, operare cum effecto circa tutte quelle cose che sub brevità in parte saranno qui di sotto annotate: 1. Ho modi de ponti leggerissimi et forti; 2. So in la obsidione de una terra toglier l'acqua de' fossi; 3. Ho modi de ruinare ogni rocca; 4. Ho ancora modi de bombarde commodissime; 5. Ho modi per cave e vie secrete; 6. Farò carri coperti, securi e inoffensibili; 7. Item farò bombarde, mortari et passavolanti; 8. Dove mancassi l'operazione delle bombarde, ordinerò briccole, mangani, trabucchi et altri istrumenti; 9. Et quando accadesse in mare, ho modi de molti istrumenti atti da offendere et defendere; 10. In tempo di pace credo satisfare benissimo a paragone de omni altro in architectura, in composizione di edifici pubblici et privati, et in conducer acqua da un loco ad un altro.",

  "69-R": "questo è il modo di fare il ponte salvatico il quale si fa in brieve tempo e con poca spesa e fassi di legname tondo e rozzo e nota che li cavalletti si deono fare in modo che l'uno si appoggi sopra l'altro e così per gradi di forza l'uno sostenga il compagno e fassi questo ponte senza chiodi o legature di ferro ma solo con incastri e appoggi che per il proprio peso si fermano e quanto più carichi tanto più si serrano e stanno fermi e forti",

  "70-R": "questo è il modo della vite la quale col suo volgersi tira a sé il braccio dell'ala e nota che quanto più questa vite fia lunga e sottile tanto fia di maggior forza e di più tardo moto e se la vite fia grossa e corta fia di meno forza e di più veloce moto e nota che qui l'uomo s'aiuta con le braccia e con le gambe a far movere questa ala acciò che 'l peso suo sia vinto dalla forza e velocità di tal moto",

  "78-R": "Havendo, Signor mio Illustrissimo, visto et considerato ormai ad sufficientia le prove di tutti quelli che si tengono maestri et compositori de istrumenti bellici, et che le inventioni et operatione di dicti istrumenti non sono niente alieni dal comune uso, mi ingegnerò, non derogando a nessuno altro, farmi intendere da Vostra Eccellentia, aprendo a quella li secreti miei, et appresso offrendoli ad ogni suo piacimento in tempi opportuni, operare cum effecto circa tutte quelle cose che sub brevità in parte saranno qui di sotto annotate: 1. Ho modi de ponti leggerissimi et forti; 2. So in la obsidione de una terra toglier l'acqua de' fossi; 3. Ho modi de ruinare ogni rocca; 4. Ho ancora modi de bombarde commodissime; 5. Ho modi per cave e vie secrete; 6. Farò carri coperti, securi e inoffensibili; 7. Item farò bombarde, mortari et passavolanti; 8. Dove mancassi l'operazione delle bombarde, ordinerò briccole, mangani, trabucchi et altri istrumenti; 9. Et quando accadesse in mare, ho modi de molti istrumenti atti da offendere et defendere; 10. In tempo di pace credo satisfare benissimo a paragone de omni altro in architectura, in composizione di edifici pubblici et privati, et in conducer acqua da un loco ad un altro.",

  "82-R": "questo è il modo della vite la quale col suo volgersi tira a sé il braccio della ruota e nota che quanto più questa vite fia lunga e sottile tanto fia di maggior forza e di più tardo moto e se la vite fia grossa e corta fia di meno forza e di più veloce moto e nota che qui l'uomo s'aiuta con le braccia e con le gambe a far movere questa ruota acciò che 'l peso suo sia vinto dalla forza e velocità di tal moto ancora si vede qui diversi modi di trasmutare il moto di tondo in retto e di retto in tondo per mezzo di queste viti e ruote dentate le quali servono a alzare pesi grandissimi con facilità",

  "87-R": "questo modo di vite è di gran forza e fa l'uficio suo con poco moto di chi la volge e nota che quanto la vite è più aduguale tanto è di maggior forza ma è di più tardo movimento ancora si vede qui diversi modi di trasmutare il moto di tondo in retto e di retto in tondo per mezzo di queste viti e ruote dentate le quali servono a alzare pesi grandissimi o a tirare legnami e pietre con facilità",

  "100-R": "questo modo di vite è di gran forza e fa l'uficio suo con poco moto di chi la volge e nota che quanto la vite è più aduguale tanto è di maggior forza ma è di più tardo movimento ancora si vede qui diversi modi di trasmutare il moto di tondo in retto e di retto in tondo per mezzo di queste viti e ruote dentate le quali servono a alzare pesi grandissimi o a tirare legnami e pietre con facilità nota ancora che ogni cono è la terza parte del suo cilindro e che il rapporto tra lato e diagonale del quadrato è costante in ogni grandezza"
};
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

    {/* HEADER */}
    <div className="p-4 border-b border-[#d6c9b8] flex flex-wrap gap-3 items-center justify-between bg-white/70">

      <button onClick={() => setSection("home")}>
        Indietro
      </button>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Es: 45R"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const match = search.match(/^(\d+)(R|V)?$/i);
              if (!match) return;

              const newPage = Number(match[1]);
              const newSide = match[2]?.toUpperCase() || "R";

              if (newPage >= 1 && newPage <= MAX_PAGE) {
                setPage(newPage);
                setSide(newSide as "R" | "V");
              }
            }
          }}
          className="border px-3 py-1 rounded-lg w-32"
        />

        <button
          onClick={() => {
            const match = search.match(/^(\d+)(R|V)?$/i);
            if (!match) return;

            const newPage = Number(match[1]);
            const newSide = match[2]?.toUpperCase() || "R";

            if (newPage >= 1 && newPage <= MAX_PAGE) {
              setPage(newPage);
              setSide(newSide as "R" | "V");
            }
          }}
          className="px-3 py-1 border rounded-lg"
        >
          Vai
        </button>
      </div>

      <div>{side}-{page}</div>

    </div>

    {/* CONTENUTO */}
    <div className="flex-1 flex items-center justify-center p-6 gap-6">

      {/* IMMAGINE */}
      <div className="relative">
        <img
          src={imgSrc}
          className="max-h-[80vh] rounded-2xl border border-[#d6c9b8]"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const percentX = (x / rect.width) * 100;
            const percentY = (y / rect.height) * 100;

            const notes = pageNotes[pageKey];
            if (!notes) return;

            setNote(notes); // 👈 FIX: ora è stringa, non array
          }}
        />
      </div>

      {/* NOTA */}
      <div className="w-64 min-h-[200px] bg-white border border-[#d6c9b8] rounded-xl p-4">
        {note ? (
          <p>{note}</p>
        ) : (
          <p className="text-gray-400">
            Clicca sull’immagine per vedere una nota
          </p>
        )}
      </div>

    </div>

    {/* TOOLBAR */}
    <div className="p-4 flex justify-center gap-3 flex-wrap border-t border-[#d6c9b8] bg-white/70">

      <button onClick={() => setPage(p => Math.max(1, p - 1))}>
        Indietro
      </button>

      <button onClick={() => setSide(s => (s === "R" ? "V" : "R"))}>
        Cambia lato
      </button>

      <button onClick={() => setPage(p => Math.min(MAX_PAGE, p + 1))}>
        Avanti
      </button>

      <button onClick={() => setFlipH(h => !h)}>
        Flip Orizzontale
      </button>

      <button onClick={() => setFlipV(v => !v)}>
        Flip Verticale
      </button>

      <button onClick={() => setZoom(z => Math.min(3, z + 0.2))}>
        Zoom +
      </button>

      <button onClick={() => setZoom(z => Math.max(1, z - 0.2))}>
        Zoom -
      </button>

      <button onClick={() => {
        setFlipH(false);
        setFlipV(false);
        setZoom(1);
      }}>
        Reset
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
