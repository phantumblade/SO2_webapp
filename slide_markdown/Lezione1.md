# 📚 Input/Output - Sistemi Operativi 2

## 🎯 Introduzione al Sottosistema I/O

Il **sottosistema I/O** è quella parte del sistema operativo che gestisce tutti i dispositivi di input e output del computer. È fondamentale perché le applicazioni non dipendono solo da CPU e memoria, ma anche da molti componenti hardware diversi.

> 💡 **Concetto Chiave**: I dispositivi I/O sono componenti hardware specificamente progettati per fornire input o dirigere output (tastiere, mouse, schede di rete, hard disk, ecc.).

---

## 🔍 Classificazione dei Dispositivi I/O

### 📥📤 Input vs Output vs Both

| Dispositivo | Tipo | Spiegazione |
|-------------|------|-------------|
| ⌨️ Tastiera | **Input (I)** | Fornisce solo dati al sistema |
| 🔊 Speaker | **Output (O)** | Riceve solo dati dal sistema |
| 🖥️ Display | **Output (O)** | Mostra informazioni (Both se touchscreen) |
| 💾 Hard Disk | **Both (B)** | Può leggere E scrivere dati |
| 🎤 Microfono | **Input (I)** | Cattura solo audio |
| 🌐 Scheda di Rete | **Both (B)** | Invia E riceve dati |
| 💳 Memory Card | **Both (B)** | Lettura E scrittura |

---

## ⚡ Le Sfide del Sottosistema I/O

### 🤔 Perché è così complesso?

1. **Eterogeneità Funzionale** 🔄
   - Dispositivi con funzioni completamente diverse
   - Protocolli di comunicazione diversi

2. **Velocità Drasticamente Diverse** 🏃‍♂️🐌
   - Mouse: ~100 byte/sec
   - Tastiera: ~10 byte/sec  
   - Hard Disk: ~100 MB/sec
   - Schede di rete: ~1 GB/sec

3. **Metodi di Controllo Diversi** 🎛️
   - Ogni dispositivo ha le sue specifiche
   - Protocolli di comunicazione unici

### 🎯 La Soluzione: Astrazione

Il SO deve fornire:
- **Interfaccia uniforme** agli strati superiori
- **Driver dedicati** per ogni tipo di dispositivo
- **Separazione** tra complessità I/O e resto del sistema

---

## 🏗️ Architettura del Sottosistema I/O

```
┌─────────────────┐
│   Applicazioni   │
├─────────────────┤
│ Interfaccia     │ ← Indipendente dal dispositivo
│ Uniforme        │
├─────────────────┤
│ Sottosistema    │
│ I/O             │
├─────────────────┤
│ Driver          │ ← Specifico per dispositivo  
│ Dedicati        │
├─────────────────┤
│ Hardware        │
└─────────────────┘
```

### 🏭 Metafora della Catena di Montaggio

**Catena di Montaggio** = **Sottosistema I/O**
- **Protocolli** = Come arrivano/escono i pezzi
- **Staff dedicato** = Driver specifici
- **Separazione** = Astrae i dettagli dalla produzione

---

## 📦 Classificazione: Block vs Character Devices

### 🧱 Block Devices (Dispositivi a Blocchi)

**Caratteristiche:**
- Operano su **blocchi di dimensione fissa**
- Il blocco è l'**unità più piccola indirizzabile**
- Supportano **accesso casuale** (random access)
- Ogni blocco può essere letto/scritto **indipendentemente**

**Esempi:** 💾 Hard Disk, 📀 DVD, 🔌 Chiavette USB

**Codice di esempio:**
```c
FILE *fp = fopen("/dev/sda", "rb");  // Disco
int ret = fseek(fp, 0L, SEEK_END);   // Seek funziona!
// ret = 0 (successo)
```

### 📝 Character Devices (Dispositivi a Carattere)

**Caratteristiche:**
- Gestiscono **stream di byte** (caratteri)
- **Non indirizzabili** singolarmente
- **Accesso seriale** solamente
- Operazioni tipiche: get/put character

**Esempi:** ⌨️ Tastiera, 🖱️ Mouse, 🖨️ Stampanti

**Codice di esempio:**
```c
FILE *fp = fopen("/dev/tty", "rb");  // Terminale
int ret = fseek(fp, 0L, SEEK_END);   // Seek NON funziona!
// ret = -1 (errore: "Illegal seek")
```

### 🌐 Caso Speciale: Dispositivi di Rete

I dispositivi di rete sono **un caso intermedio**:
- Gestiscono **pacchetti** (più di un carattere)
- Dimensioni **non fisse**
- **Non supportano accesso casuale**
- Stream di **chunk di dati** di dimensioni diverse

---

## ⚙️ Hardware I/O: Dispositivi e Controller

### 🔧 Anatomia di un Dispositivo I/O

Ogni dispositivo I/O è composto da **due parti principali**:

1. **Il Dispositivo** 🔩
   - Componenti meccanici
   - Parte fisica vera e propria

2. **Il Controller** 🧠  
   - Componenti elettronici
   - Chip o set di chip che controllano fisicamente il dispositivo
   - Spesso contiene un **piccolo computer embedded**

### 🔌 Connessioni: Porte vs Bus

**Porta** 🔌
- Punto di connessione singolo
- Esempi: USB, PS/2, SATA, VGA

**Bus** 🚌  
- Set di cavi condivisi tra più dispositivi
- Esempio: Cavo ATA/IDE condiviso tra CD-ROM e Hard Disk

---

## 🎮 Controller: Il Cervello del Dispositivo

### 🧠 Funzioni del Controller

1. **Accetta comandi** dal SO
2. **Nasconde la complessità** del dispositivo  
3. **Presenta interfaccia semplificata** al SO
4. **Gestisce i dettagli** a basso livello

### 📀 Esempio Pratico: Lettura Settore Hard Disk

**Quello che vede il SO:**
- Hard disk = sequenza lineare di settori
- Settore = 512 byte
- Indirizzamento da 0 in poi

**Quello che fa realmente il Controller:**

```
1. 🔄 Converte settore lineare (es. 11206) 
   → <cilindro X, testina Y, settore Z>

2. 📍 Rileva posizione attuale della testina

3. ➡️ Muove testina alla posizione corretta  

4. ⏳ Aspetta rotazione del settore giusto

5. 📖 Legge stream di bit e memorizza in buffer

6. ✅ Controlla errori

7. 📤 Se OK ritorna dati, altrimenti riprova
```

---

## 🚌 Architetture di Sistema: Bus e Chipset

### 🏛️ Architettura Tradizionale (Vecchia Generazione)

```
    CPU
     |
   FSB (Front Side Bus)  
     |
┌────────────┐     ┌─────────────┐
│Northbridge │────│ Southbridge │
│(Memory Hub)│     │(I/O Hub)    │  
└────────────┘     └─────────────┘
     |                    |
   RAM              Dispositivi I/O
```

**Problemi:**
- FSB diventa **collo di bottiglia** 🚧
- Comunicazioni CPU-RAM limitate dalla velocità FSB

### 🚀 Architettura Moderna

```
┌─────────────────┐
│      CPU        │
│ +Memory Controller│ ← Integrato nella CPU
│ +PCIe Lanes     │
└─────────────────┘
         |
     DMI Bus
         |
┌─────────────────┐  
│      PCH        │ ← Platform Controller Hub
│(ex Southbridge)│
└─────────────────┘
         |
  Dispositivi I/O
```

**Vantaggi:**
- **Eliminato collo di bottiglia** FSB
- Comunicazioni CPU-RAM **più veloci**
- Controller memoria **integrato nella CPU**

---

## 🔗 Interazione CPU-Dispositivi

### 🗺️ Modello di Riferimento del Sistema

```
CPU ←→ BUS ←→ MEMORIA
 ↕      ↕        
DISPOSITIVI I/O
```

### 🎛️ Modello di Riferimento del Dispositivo  

```
┌─────────────────┐
│   INTERFACCIA   │ ← Registri accessibili dalla CPU
├─────────────────┤
│ STRUTTURA       │ ← Implementazione interna
│ INTERNA         │   (non visibile alla CPU)
└─────────────────┘
```

### 📋 Registri del Controller

**Data Registers** 📊
- Per controllare trasferimento dati IN/OUT
- CPU li legge/scrive per ottenere input/inviare output

**Status Registers** 📈
- Indicano **stato attuale** del dispositivo  
- Bit leggibili dalla CPU: comando completato, errore, pronto per nuovo comando

**Command Registers** ⚙️
- CPU li scrive per **controllare operazioni**
- Esempi: avvia comando, imposta modalità full/half-duplex

**Data Buffer** 🗃️
- **Memorizza temporaneamente** dati
- Per dispositivi che non possono passare dati direttamente al SO
- Esempi: pacchetti di rete, stream audio/video

---

## 🚪 Tecniche di Accesso ai Registri

### 🔢 Port-Mapped I/O

**Caratteristiche:**
- Ogni registro ha un **numero di porta I/O**
- **Spazio indirizzi separato** dalla memoria
- Accessibile **solo in modalità kernel**
- **Istruzioni speciali** per I/O

```assembly
IN REG, PORT    ; Legge da porta PORT → registro REG  
OUT PORT, REG   ; Scrive registro REG → porta PORT
```

**Schema:**
```
┌─────────────┐    ┌──────────────┐
│   MEMORIA   │    │  PORTE I/O   │
│             │    │              │  
│ 0x0000      │    │ Port 0       │
│ ...         │    │ Port 1       │
│ 0xFFFF      │    │ ...          │
└─────────────┘    └──────────────┘
```

### 🗺️ Memory-Mapped I/O  

**Caratteristiche:**
- Registri **mappati nello spazio memoria**
- **Stesso spazio indirizzi** della memoria
- **Istruzioni standard** di accesso memoria
- Ogni registro ha **indirizzo memoria unico**

```assembly
MOV REG, ADDR   ; Legge da indirizzo ADDR → registro REG
MOV ADDR, REG   ; Scrive registro REG → indirizzo ADDR  
```

**Schema:**
```
┌─────────────────────┐
│      MEMORIA        │
│                     │
│ 0x0000 - Programmi  │  
│ 0x8000 - Dati       │
│ 0xF000 - Registri   │ ← Registri I/O mappati qui
│          Dispositivi│
└─────────────────────┘
```

### 🔄 Approccio Ibrido

**Combinazione di entrambi:**
- Port-mapped per **operazioni di controllo base**
- Memory-mapped per **buffer dati grandi**

**Esempio - Controller Grafico:**
- Porte I/O → comandi di controllo
- Memoria mappata → contenuto schermo (milioni di byte)

---

## ⚖️ Confronto: Port-Mapped vs Memory-Mapped

### 🌟 Vantaggi Memory-Mapped I/O

**1. Sviluppo Driver Semplificato** 👨‍💻
```c
// Memory-mapped (semplice)
int status = *(int*)0xF000;  // Registro come variabile C

// Port-mapped (complesso)  
int status;
__asm__("inl %%dx, %%eax" : "=a"(status) : "d"(port));
```

**2. Protezione Automatica** 🛡️
- OS mappa registri **fuori dallo spazio utente**
- Nessun meccanismo speciale necessario

**3. CPU Design Semplificato** 🔧
- **Tutte le istruzioni** memoria funzionano con I/O
- Tutti i **modi di indirizzamento** disponibili  
- **Nessuna istruzione speciale** necessaria

### 🌟 Vantaggi Port-Mapped I/O

**1. Nessun Consumo Memoria** 💾
- I dispositivi **non consumano** indirizzi fisici
- Utile in architetture con memoria limitata

**2. Nessun Problema di Cache** 🚫💾
- Lo spazio porte I/O **non viene mai cachato**
- Con memory-mapped, HW deve **disabilitare cache selettivamente**

**3. Gestione Multi-Bus Semplificata** 🚌
```
CPU → Bus Memoria (veloce)   → RAM
    → Bus I/O (lento)       → Dispositivi I/O
```
- Operazioni I/O usano automaticamente **bus dedicato**
- Memory-mapped richiede logica aggiuntiva per **routing**

---

## ⚙️ Modalità di Esecuzione I/O

### 🔄 1. Programmed I/O (Polling)

**Come Funziona:**
1. CPU **invia richiesta** al controller
2. CPU entra in **loop di attesa continua** 
3. **Controlla ripetutamente** bit di stato
4. Quando completato, CPU **procede**

```c
// Pseudocodice polling
do {
    status = read_status_register();
} while (status & BUSY_BIT);  // Aspetta fino a quando non è pronto

data = read_data_register();  // Legge il dato
```

**✅ Vantaggi:**
- **Semplice da implementare**
- **Buono per trasferimenti piccoli**
- **Appropriato** se non c'è altro lavoro da fare

**❌ Svantaggi:**  
- CPU **completamente occupata** nell'attesa
- **Spreco** di cicli CPU
- **Non può** fare altro lavoro utile

### ⚡ 2. Interrupt-Driven I/O

**Come Funziona:**
1. CPU **invia richiesta** al controller
2. CPU **blocca processo corrente**
3. CPU **schedula altro processo** 
4. Controller **solleva interrupt** quando finito
5. CPU **gestisce interrupt** e riprende processo originale

**🔌 Meccanismo degli Interrupt:**

```
1. Controller → segnale su linea controllo bus
2. Interrupt Controller → rileva segnale  
3. Se priorità OK → numero su linee indirizzo bus
4. CPU → usa numero come indice in Interrupt Vector
5. Interrupt Vector → indirizzo Interrupt Handler
6. CPU → salta a Interrupt Handler
```

**Interrupt Vector Table:**
```
Indice | Indirizzo Handler
-------|------------------
  0    | 0x1000 (Tastiera)
  1    | 0x1500 (Mouse)  
  2    | 0x2000 (Disco)
  3    | 0x2500 (Rete)
```

**✅ Vantaggi:**
- CPU può **fare altro lavoro** durante I/O
- **Efficiente** per la maggior parte delle operazioni
- **Migliore utilizzo** delle risorse

### 🏃‍♂️ CPU Pipeline e Interrupt

**Problema nelle CPU Moderne:**
- CPU **pipelined** e **superscalari**  
- **Più istruzioni** in esecuzione simultanea
- Quando arriva interrupt, **stato complesso**

**Tipi di Interrupt:**

**🎯 Precise Interrupt** (Preciso)
1. PC salvato in **posizione nota**
2. Tutte le istruzioni **prima del PC completate**  
3. Nessuna istruzione **dopo il PC completata**
4. Stato dell'istruzione al PC **noto**

**🌀 Imprecise Interrupt** (Impreciso)  
- **Almeno una** delle proprietà sopra violata
- OS deve **capire cosa è successo**
- **Codice complesso** per ripristino
- **Salvataggio stato** molto costoso

### 🚚 3. Direct Memory Access (DMA)

**Come Funziona:**
1. CPU **programma DMA controller**
2. CPU **invia comando** al dispositivo  
3. **DMA controller** gestisce trasferimento
4. DMA **invia interrupt** quando finito
5. CPU trova **dati già pronti** in memoria

**🎛️ Registri DMA Controller:**
- **Memory Address Register** → dove leggere/scrivere
- **Byte Count Register** → quanti byte trasferire
- **Control Registers** → direzione, modalità, dimensione trasferimento

**📖 Esempio: Lettura da Disco con DMA**

```
1. 🖥️ CPU programma registri DMA controller
2. 🖥️ CPU invia comando READ al disco  
3. 💾 Disco legge dati in buffer interno
4. 🎛️ DMA mette indirizzo memoria su bus
5. 🎛️ DMA invia READ request al disco  
6. 💾 Disco scrive parola in memoria
7. 💾 Disco invia ACK al DMA
8. 🎛️ DMA decrementa contatore, incrementa indirizzo
9. 🔄 Ripete fino a contatore = 0
10. ⚡ DMA invia interrupt a CPU
11. 🖥️ CPU trova dati già pronti in memoria!
```

### 🔄 Modalità DMA: Fly-by vs Flow-through

**Fly-by Mode** ✈️
- Dati **NON passano** attraverso DMA controller
- DMA dice al dispositivo **cosa fare e dove**
- **1 ciclo bus** per trasferimento
- ✅ **Più efficiente**  
- ❌ **Limitato**: no device-to-device transfers

**Flow-through Mode** 🌊
- Dati **passano attraverso** DMA controller  
- **2 cicli bus**: device→DMA, DMA→memory
- ✅ **Più flessibile**: supporta device-to-device
- ❌ **Meno efficiente**

### ⚡ Contesa Bus: Cycle-stealing vs Burst Mode

**Cycle-stealing** 🔄
- DMA **ruba singoli cicli** bus quando necessario
- DMA ha **priorità più alta** di CPU
- ✅ CPU non resta **mai bloccata troppo**
- ❌ **Tasso trasferimento lento**

**Burst Mode** 💥  
- DMA **acquisisce bus** per serie di trasferimenti
- **Rilascia** solo quando finito
- ✅ **Trasferimento molto veloce**
- ❌ Può **bloccare CPU** per periodi lunghi

---

## 📊 Riepilogo Comparativo

| Modalità | CPU Usage | Velocità | Complessità | Caso d'Uso |
|----------|-----------|----------|-------------|------------|
| **Polling** 🔄 | Alta (100%) | Bassa | Minima | Trasferimenti piccoli, sistemi dedicati |
| **Interrupt** ⚡ | Media | Media | Media | Uso generale, I/O moderato |
| **DMA** 🚚 | Bassa | Alta | Alta | Trasferimenti grandi, alta performance |

---

## 💡 Concetti Chiave da Ricordare

### 🎯 Punti Essenziali

1. **Astrazione è Fondamentale** 🏗️
   - Il sottosistema I/O nasconde la complessità dei dispositivi

2. **Block vs Character** 📦📝  
   - Determina come il SO interagisce con il dispositivo

3. **Memory-mapped Vince** 🗺️
   - Più semplice da programmare e gestire

4. **DMA per Performance** 🚀
   - Essenziale per trasferimenti dati grandi

5. **Interrupt = Multitasking** ⚡
   - Permette alla CPU di fare più cose contemporaneamente

### 🔧 Applicazioni Pratiche

- **Sviluppo Driver**: Memory-mapped I/O semplifica il codice
- **Performance**: DMA per operazioni disco/rete intensive  
- **Real-time**: Attenzione a burst mode DMA che può bloccare CPU
- **Embedded**: Polling può andare bene in sistemi semplici

---

*📚 Questo riassunto copre tutti i concetti fondamentali dell'I/O nei sistemi operativi. Usa questi principi per comprendere come il tuo computer gestisce tastiera, mouse, disco e tutti gli altri dispositivi!* 🖥️✨