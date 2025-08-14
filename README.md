# SO2 WebApp

Applicazione web per il corso di **Sistemi Operativi 2**, focalizzata sulla gestione dell'Input/Output e dei dispositivi. Il progetto è realizzato con **React**, **TypeScript** e **Vite**, con stile moderno gestito da **Tailwind CSS** e supporto per la modalità scura.

**Sito online:** https://phantumblade.github.io/SO2_webapp/

## Caratteristiche
- Interfaccia reattiva per la consultazione delle lezioni
- Tema chiaro/scuro con salvataggio della preferenza
- Contenuti generati dai file Markdown in `slide_markdown/`
- Configurazione basata su Vite per tempi di build rapidi

## Prerequisiti
- [Node.js](https://nodejs.org/) (versione 18 o superiore consigliata)
- [npm](https://www.npmjs.com/)

## Installazione
1. Clonare il repository:
   ```bash
   git clone <url-del-repo>
   cd SO2_webapp
   ```
2. Installare le dipendenze:
   ```bash
   npm install
   ```

## Utilizzo
- Avvio in ambiente di sviluppo:
  ```bash
  npm run dev
  ```
  Il server di sviluppo sarà disponibile all'indirizzo indicato nel terminale.

- Build per la produzione:
  ```bash
  npm run build
  ```

- Anteprima della build di produzione:
  ```bash
  npm run preview
  ```

## Distribuzione su GitHub Pages
- Opzione A — GitHub Actions (consigliata):
  1) In Settings → Pages seleziona "GitHub Actions" come source.
  2) Fai push su `main`: il workflow `.github/workflows/pages.yml` builda e deploya automaticamente.

- Opzione B — Branch/Cartella `docs/`:
  1) Esegui la build: `npm run build` (output in `docs/`).
  2) In Settings → Pages, scegli "Deploy from a branch" → branch `main`, folder `/docs`.
  3) Pusha le modifiche su `main` per aggiornare il sito.

Nota: La configurazione Vite imposta `base` su `/SO2_webapp/` (nome repo), necessario per i project site su GitHub Pages.

## Aggiungere/aggiornare i contenuti
- Modifica o aggiungi file Markdown in `slide_markdown/` (es. `Lezione3.md`).
- Il sito costruisce automaticamente una singola lezione con una sezione per ogni file.
- Il titolo è preso dal primo heading `#` del file; la descrizione dalla prima frase/blockquote.
- Le icone utilizzano Font Awesome (via CDN) per un look professionale e coerente.

### Troubleshooting Pages
- Se la pagina appare bianca: verifica che l'HTML online punti a `/SO2_webapp/assets/...` (non a `/src/main.tsx`).
- Svuota la cache del browser (hard refresh) o attendi la propagazione del deploy (1–2 minuti).
- In caso di 404 sugli asset, controlla che la Source sia “GitHub Actions” oppure `main / docs`.

## Struttura del progetto
- `src/` – componenti e logica dell'applicazione
- `index.html` – punto di ingresso dell'app
- `tailwind.config.js` – configurazione di Tailwind CSS
- `postcss.config.js` – configurazione PostCSS

## Licenza
Questo progetto è distribuito con licenza MIT. Vedere il file `LICENSE` (se presente) per maggiori informazioni.

## Contributi
Le proposte di miglioramento sono benvenute. Aprire una issue o inviare una pull request.
