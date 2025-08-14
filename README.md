# SO2 WebApp

Applicazione web per il corso di **Sistemi Operativi 2**, focalizzata sulla gestione dell'Input/Output e dei dispositivi. Il progetto è realizzato con **React**, **TypeScript** e **Vite**, con stile moderno gestito da **Tailwind CSS** e supporto per la modalità scura.

## Caratteristiche
- Interfaccia reattiva per la consultazione delle lezioni
- Tema chiaro/scuro con salvataggio della preferenza
- Contenuti modulari e facilmente estendibili
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

## Struttura del progetto
- `src/` – componenti e logica dell'applicazione
- `index.html` – punto di ingresso dell'app
- `tailwind.config.js` – configurazione di Tailwind CSS
- `postcss.config.js` – configurazione PostCSS

## Licenza
Questo progetto è distribuito con licenza MIT. Vedere il file `LICENSE` (se presente) per maggiori informazioni.

## Contributi
Le proposte di miglioramento sono benvenute. Aprire una issue o inviare una pull request.

