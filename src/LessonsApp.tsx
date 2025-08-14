import { useState, useRef, useEffect, type FC } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Book,
  Cpu,
  HardDrive,
  Settings,
  Monitor,
  List,
  ArrowUp,
  CheckCircle,
  Moon,
  Sun,
} from 'lucide-react';

/**
 * A small theme toggle button that flips the `dark` class on the root document element.
 * It persists the selection in localStorage and respects the user's system preference by default.
 */
const ThemeToggle: FC = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
      // Default to system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-yellow-400 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

const LessonsApp: FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [showSectionMenu, setShowSectionMenu] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const lessons = [
    {
      id: 1,
      title: 'Input/Output - Parte 1',
      icon: <Monitor className="w-6 h-6" />,
      description:
        'Introduzione al sottosistema I/O, classificazione dispositivi e architetture hardware',
      concepts: [
        'Sottosistema I/O e gestione dispositivi',
        'Classificazione Input/Output/Both',
        'Block vs Character devices',
        'Architetture chipset tradizionali vs moderne',
      ],
      content: {
        intro:
          "Il sottosistema I/O è quella parte del sistema operativo che gestisce tutti i dispositivi di input e output, fornendo un'interfaccia uniforme alle applicazioni.",
        sections: [
          {
            id: 'intro-io',
            title: 'Introduzione al Sottosistema I/O',
            icon: '🎯',
            content:
              "Il sottosistema I/O separa il resto del SO dalla complessità dei dispositivi I/O. Deve fornire un'interfaccia uniforme agli strati superiori e gestire dispositivi molto diversi tra loro per velocità, funzionalità e protocolli di comunicazione.",
            keyPoints: [
              'Interfaccia uniforme per tutti i dispositivi',
              'Driver dedicati per ogni tipo di dispositivo',
              'Separazione tra complessità I/O e applicazioni',
              'Gestione di dispositivi eterogenei',
            ],
          },
          {
            id: 'classification',
            title: 'Classificazione Dispositivi',
            icon: '📦',
            content:
              'I dispositivi si dividono in Input (tastiera, microfono), Output (speaker, display), o Both (hard disk, NIC). Inoltre si classificano come Block devices (accesso casuale a blocchi fissi) o Character devices (stream seriale di byte).',
            keyPoints: [
              'Input: tastiera, microfono, mouse',
              'Output: speaker, display, stampante',
              'Both: hard disk, NIC, memory card',
              'Block vs Character: modalità di accesso dati',
            ],
          },
          {
            id: 'hardware',
            title: 'Hardware e Controller',
            icon: '⚙️',
            content:
              "Ogni dispositivo ha un controller che nasconde la complessità hardware e presenta un'interfaccia semplificata al SO. Il controller gestisce registri di comando, stato e dati per la comunicazione con la CPU.",
            keyPoints: [
              'Controller nasconde complessità dispositivo',
              'Registri di comando, stato e dati',
              'Interfaccia semplificata per il SO',
              'Gestione protocolli a basso livello',
            ],
          },
          {
            id: 'architecture',
            title: 'Architetture Bus',
            icon: '🚌',
            content:
              'Le architetture moderne integrano il memory controller nella CPU eliminando il collo di bottiglia del Front Side Bus. Il Platform Controller Hub (PCH) gestisce le comunicazioni I/O a velocità inferiore.',
            keyPoints: [
              'Eliminazione collo di bottiglia FSB',
              'Memory controller integrato nella CPU',
              'PCH per gestione I/O dispositivi',
              'Comunicazioni CPU-RAM più veloci',
            ],
          },
        ],
      },
    },
    {
      id: 2,
      title: 'CPU-Dispositivi Interaction',
      icon: <Cpu className="w-6 h-6" />,
      description: 'Port-mapped I/O, Memory-mapped I/O e tecniche di accesso ai registri',
      concepts: [
        'Port-mapped I/O vs Memory-mapped I/O',
        'Registri di controllo, stato e dati',
        'Istruzioni speciali vs standard',
        'Vantaggi e svantaggi di ogni approccio',
      ],
      content: {
        intro:
          'La comunicazione tra CPU e dispositivi avviene attraverso registri accessibili in due modalità principali: port-mapped I/O e memory-mapped I/O.',
        sections: [
          {
            id: 'port-mapped',
            title: 'Port-Mapped I/O',
            icon: '🔢',
            content:
              'Ogni registro ha un numero di porta I/O in uno spazio di indirizzi separato dalla memoria. Richiede istruzioni speciali (IN/OUT) e può essere eseguito solo in modalità kernel.',
            keyPoints: [
              'Spazio indirizzi separato dalla memoria',
              'Istruzioni speciali IN/OUT',
              'Esecuzione solo in modalità kernel',
              'Non consuma spazio memoria fisica',
            ],
          },
          {
            id: 'memory-mapped',
            title: 'Memory-Mapped I/O',
            icon: '🗺️',
            content:
              'I registri sono mappati nello spazio memoria normale. Si usano istruzioni standard di accesso memoria. Vantaggi: sviluppo driver più semplice, protezione automatica, design CPU più semplice.',
            keyPoints: [
              'Registri mappati in spazio memoria',
              'Istruzioni standard di memoria',
              'Sviluppo driver semplificato',
              'Protezione automatica OS',
            ],
          },
          {
            id: 'registers',
            title: 'Registri del Controller',
            icon: '🎛️',
            content:
              'Data registers per controllo trasferimenti, Status registers per stato dispositivo, Command registers per operazioni. Molti dispositivi hanno anche buffer dati per memorizzazione temporanea.',
            keyPoints: [
              'Data registers: controllo trasferimenti',
              'Status registers: stato dispositivo',
              'Command registers: operazioni controllo',
              'Buffer dati: memorizzazione temporanea',
            ],
          },
          {
            id: 'hybrid',
            title: 'Approccio Ibrido',
            icon: '🔄',
            content:
              'Combina entrambi gli approcci: port-mapped per controllo base, memory-mapped per buffer dati grandi. Esempio: controller grafico usa porte I/O per comandi e memoria mappata per contenuto schermo.',
            keyPoints: [
              'Port-mapped per controllo base',
              'Memory-mapped per buffer grandi',
              'Esempio: controller grafico',
              "Ottimizzazione per caso d'uso specifico",
            ],
          },
        ],
      },
    },
    {
      id: 3,
      title: 'Modalità di Esecuzione I/O',
      icon: <HardDrive className="w-6 h-6" />,
      description: 'Programmed I/O, Interrupt-driven I/O e Direct Memory Access (DMA)',
      concepts: [
        'Polling e busy waiting',
        'Gestione interrupt precisi e imprecisi',
        'DMA controller e trasferimenti automatici',
        'Cycle-stealing vs Burst mode',
      ],
      content: {
        intro:
          'Esistono tre approcci principali per eseguire operazioni I/O: programmed I/O (polling), interrupt-driven I/O e DMA.',
        sections: [
          {
            id: 'polling',
            title: 'Programmed I/O (Polling)',
            icon: '🔄',
            content:
              'La CPU invia una richiesta e attende in un loop controllando continuamente lo stato del dispositivo. Semplice da implementare ma spreca cicli CPU. Appropriato per trasferimenti piccoli o sistemi dedicati.',
            keyPoints: [
              'CPU attende in loop continuo',
              'Controllo stato dispositivo ripetuto',
              'Semplice da implementare',
              'Appropriato per trasferimenti piccoli',
            ],
          },
          {
            id: 'interrupt',
            title: 'Interrupt-Driven I/O',
            icon: '⚡',
            content:
              'La CPU invia la richiesta, blocca il processo e fa altro lavoro. Il controller solleva un interrupt quando finito. La CPU usa l\'interrupt vector per trovare l\'handler appropriato. Efficiente per uso generale.',
            keyPoints: [
              'CPU può fare altro lavoro durante I/O',
              'Controller solleva interrupt a fine operazione',
              'Interrupt vector per trovare handler',
              'Efficiente per uso generale',
            ],
          },
          {
            id: 'dma',
            title: 'Direct Memory Access (DMA)',
            icon: '🚚',
            content:
              'Un controller dedicato gestisce i trasferimenti tra memoria e dispositivo. La CPU programma il DMA e può fare altro lavoro. Il DMA invia interrupt quando finito. Essenziale per trasferimenti grandi.',
            keyPoints: [
              'Controller dedicato per trasferimenti',
              'CPU libera per altro lavoro',
              'Interrupt al completamento',
              'Essenziale per trasferimenti grandi',
            ],
          },
          {
            id: 'dma-modes',
            title: 'Modalità DMA',
            icon: '💥',
            content:
              'Fly-by mode: dati non passano per DMA (1 ciclo bus, efficiente). Flow-through: dati passano per DMA (2 cicli, flessibile). Cycle-stealing vs Burst mode per gestione contesa bus.',
            keyPoints: [
              'Fly-by: 1 ciclo bus, più efficiente',
              'Flow-through: 2 cicli, più flessibile',
              'Cycle-stealing: singoli cicli rubati',
              'Burst mode: acquisizione prolungata bus',
            ],
          },
        ],
      },
    },
    {
      id: 4,
      title: 'Gestione Interrupt',
      icon: <Settings className="w-6 h-6" />,
      description: 'Interrupt controller, vector table e gestione interrupt in CPU pipeline',
      concepts: [
        'Interrupt controller e priorità',
        'Interrupt vector e handler',
        'Interrupt precisi vs imprecisi',
        'Problemi con CPU pipeline e superscalari',
      ],
      content: {
        intro:
          'Gli interrupt permettono ai dispositivi di notificare eventi alla CPU senza polling continuo, ma richiedono gestione complessa nelle CPU moderne.',
        sections: [
          {
            id: 'controller',
            title: 'Interrupt Controller',
            icon: '🎛️',
            content:
              "Rileva segnali dai dispositivi, gestisce priorità e presenta interrupt alla CPU. Usa interrupt vector table per trovare l'handler corretto. Ogni dispositivo ha un numero univoco nell'interrupt vector.",
            keyPoints: [
              'Rilevazione segnali dispositivi',
              'Gestione priorità interrupt',
              'Interrupt vector table',
              'Numero univoco per dispositivo',
            ],
          },
          {
            id: 'precise',
            title: 'Interrupt Precisi',
            icon: '🎯',
            content:
              "PC salvato in posizione nota, tutte le istruzioni prima del PC completate, nessuna dopo il PC completata, stato dell'istruzione al PC noto. Necessari per ripristino corretto dell'esecuzione.",
            keyPoints: [
              'PC salvato in posizione nota',
              'Istruzioni prima PC completate',
              'Istruzioni dopo PC non completate',
              'Stato istruzione PC noto',
            ],
          },
          {
            id: 'imprecise',
            title: 'Interrupt Imprecisi',
            icon: '🌀',
            content:
              'Almeno una proprietà degli interrupt precisi è violata. Richiedono salvataggio di molto stato e logica complessa per ripristino. Comuni in CPU con pipeline profonde o esecuzione out-of-order.',
            keyPoints: [
              'Proprietà interrupt precisi violate',
              'Salvataggio stato complesso',
              'Logica ripristino complicata',
              'Comuni in CPU pipeline profonde',
            ],
          },
          {
            id: 'pipeline',
            title: 'CPU Pipeline e Interrupt',
            icon: '🏃‍♂️',
            content:
              'Le CPU moderne eseguono multiple istruzioni contemporaneamente. Quando arriva un interrupt, alcune istruzioni possono essere parzialmente eseguite, creando problemi per il ripristino dello stato.',
            keyPoints: [
              'Multiple istruzioni contemporanee',
              'Istruzioni parzialmente eseguite',
              'Problemi ripristino stato',
              'Complessità CPU moderne',
            ],
          },
        ],
      },
    },
  ];

  useEffect(() => {
    if (selectedSection && sectionRefs.current[selectedSection]) {
      sectionRefs.current[selectedSection]!.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [selectedSection]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setSelectedLesson(null);
    setSelectedSection(null);
    setShowSectionMenu(false);
  };

  const openSection = (sectionId: string) => {
    setSelectedSection(sectionId);
    setShowSectionMenu(false);
  };

  const LessonCard: React.FC<{ lesson: any; onClick: () => void }> = ({
    lesson,
    onClick,
  }) => (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 mb-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-500 hover:transform hover:scale-[1.02] active:scale-[0.98]"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="text-blue-600 dark:text-blue-400 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-indigo-900 p-3 rounded-xl transition-all duration-300">
            {lesson.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg mb-1">
              {lesson.title}
            </h3>
            <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium">
              <span>{lesson.concepts.length} concetti</span>
            </div>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500 transition-transform duration-200 group-hover:translate-x-1" />
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
        {lesson.description}
      </p>

      <div className="space-y-3">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Argomenti principali
        </p>
        <div className="grid gap-2">
          {lesson.concepts.slice(0, 3).map((concept: string, index: number) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg"
            >
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-200 text-sm">
                {concept}
              </span>
            </div>
          ))}
          {lesson.concepts.length > 3 && (
            <div className="flex items-center space-x-3 text-blue-600 dark:text-blue-400 px-3 py-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">
                +{lesson.concepts.length - 3} altri argomenti
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const SectionMenu: React.FC<{
    sections: any[];
    onSectionClick: (id: string) => void;
    currentSection: string | null;
  }> = ({ sections, onSectionClick, currentSection }) => (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl p-4 mb-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
          <List className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
          Sezioni della lezione
        </h3>
      </div>
      <div className="grid gap-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            className={`flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
              currentSection === section.id
                ? 'bg-blue-50 dark:bg-blue-900 border-2 border-blue-200 dark:border-blue-600 text-blue-900 dark:text-blue-200'
                : 'hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-transparent'
            }`}
          >
            <span className="text-lg">{section.icon}</span>
            <div className="flex-1">
              <span className="text-sm font-medium block text-gray-900 dark:text-gray-100">
                {section.title}
              </span>
            </div>
            {currentSection === section.id && (
              <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  );

  const SectionContent: React.FC<{ section: any; sectionRef: (el: HTMLElement | null) => void }> = ({
    section,
    sectionRef,
  }) => (
    <div
      ref={sectionRef}
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 mb-6 scroll-mt-24"
    >
      <div className="flex items-start space-x-3 mb-4">
        <span className="text-2xl">{section.icon}</span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {section.title}
          </h3>
        </div>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none mb-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {section.content}
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 text-sm uppercase tracking-wide">
          Punti Chiave
        </h4>
        <div className="grid gap-2">
          {section.keyPoints.map((point: string, index: number) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const LessonDetail: React.FC<{ lesson: any }> = ({ lesson }) => {
    useEffect(() => {
      lesson.content.sections.forEach((section: any) => {
        sectionRefs.current[section.id] = null;
      });
    }, [lesson]);

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header fisso */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <button
              onClick={goBack}
              className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              <span className="text-sm font-semibold">Torna alle lezioni</span>
            </button>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-blue-600 dark:text-blue-400 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-indigo-900 p-3 rounded-xl">
                  {lesson.icon}
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {lesson.title}
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {lesson.content.sections.length} sezioni
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {/* Theme toggle button in header */}
                <ThemeToggle />
                <button
                  onClick={() => setShowSectionMenu(!showSectionMenu)}
                  className="lg:hidden bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 p-2 rounded-lg transition-colors duration-200"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Intro */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-purple-900 rounded-xl p-6 mb-6 text-white">
            <p className="leading-relaxed">{lesson.content.intro}</p>
          </div>

          {/* Menu sezioni (mobile) */}
          {showSectionMenu && (
            <div className="lg:hidden animate-fadeIn">
              <SectionMenu
                sections={lesson.content.sections}
                onSectionClick={openSection}
                currentSection={selectedSection}
              />
            </div>
          )}

          {/* Layout desktop/tablet */}
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Menu sezioni (desktop) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-32">
                <SectionMenu
                  sections={lesson.content.sections}
                  onSectionClick={openSection}
                  currentSection={selectedSection}
                />
              </div>
            </div>

            {/* Contenuto */}
            <div className="lg:col-span-3">
              {lesson.content.sections.map((section: any) => (
                <SectionContent
                  key={section.id}
                  section={section}
                  sectionRef={(el) => (sectionRefs.current[section.id] = el)}
                />
              ))}

              {/* Riepilogo finale */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 border border-green-200 dark:border-green-700 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Book className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <h3 className="font-bold text-green-900 dark:text-green-100 text-lg">
                    Riepilogo Completato
                  </h3>
                </div>
                <p className="text-green-800 dark:text-green-300 leading-relaxed">
                  Hai completato questa lezione sui concetti fondamentali dell'I/O nei sistemi operativi.
                  Questi principi ti aiuteranno a comprendere come il computer gestisce la comunicazione
                  con tastiera, mouse, disco e tutti gli altri dispositivi hardware.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating action buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col space-y-2 z-20">
          <button
            onClick={scrollToTop}
            className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  };

  if (selectedLesson) {
    const lesson = lessons.find((l) => l.id === selectedLesson);
    return lesson ? <LessonDetail lesson={lesson} /> : null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-8 flex items-start justify-between">
          <div className="text-center flex-1">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Sistemi Operativi 2
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Input/Output e gestione dispositivi
            </p>
            <div className="mt-4 inline-flex items-center bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
              <Book className="w-4 h-4 mr-2" />
              {lessons.length} lezioni disponibili
            </div>
          </div>
          <div className="flex items-center ml-4">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Contenuto */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Lezioni del Corso
          </h2>
          <div className="space-y-6">
            {lessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                onClick={() => setSelectedLesson(lesson.id)}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-8 text-center">
          <div className="text-gray-400 dark:text-gray-500 mb-3">
            <Settings className="w-8 h-8 mx-auto" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Altre lezioni in arrivo
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Il corso verrà ampliato con nuovi argomenti sui sistemi operativi
          </p>
        </div>
      </div>
    </div>
  );
};

export default LessonsApp;
import { useEffect, useMemo, useRef, useState, type FC } from 'react';
import { buildSectionFromMarkdown } from './utils/markdown';

const ThemeToggle: FC = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      className="p-2 rounded-lg bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-yellow-300 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label="Toggle dark mode"
      title="Tema chiaro/scuro"
    >
      <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} w-5 h-5`}></i>
    </button>
  );
};

const LessonsApp: FC = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [showSectionMenu, setShowSectionMenu] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Importa i markdown delle slide come stringhe (build-time con Vite)
  const rawSlides = import.meta.glob('../slide_markdown/*.md', { as: 'raw', eager: true }) as Record<string, string>;

  const sections = useMemo(() => {
    const icons = ['fa-microchip', 'fa-hard-drive', 'fa-network-wired', 'fa-diagram-project', 'fa-microchip', 'fa-screwdriver-wrench'];
    return Object.entries(rawSlides)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([path, md], idx) => {
        const fileName = path.split('/').pop() || `sezione-${idx + 1}`;
        const id = fileName.replace(/\W+/g, '-').replace(/(^-|-$)/g, '').toLowerCase();
        const base = buildSectionFromMarkdown(md, id, fileName.replace(/\.md$/i, ''));
        return { ...base, icon: icons[idx % icons.length] } as (typeof base) & { icon: string };
      });
  }, [rawSlides]);

  useEffect(() => {
    if (!selectedSection && sections.length > 0) setSelectedSection(sections[0].id);
  }, [sections, selectedSection]);

  useEffect(() => {
    if (selectedSection && sectionRefs.current[selectedSection]) {
      sectionRefs.current[selectedSection]!.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedSection]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const SectionMenu: FC<{
    sections: { id: string; title: string; icon?: string }[];
    onSectionClick: (id: string) => void;
    currentSection: string | null;
  }> = ({ sections, onSectionClick, currentSection }) => (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 mb-6 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
          <i className="fa-solid fa-list-ul w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
          Sezioni
        </h3>
      </div>
      <div className="grid gap-2">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => onSectionClick(s.id)}
            className={`flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
              currentSection === s.id
                ? 'bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700'
                : 'hover:bg-gray-50 dark:hover:bg-gray-700 border border-transparent'
            }`}
          >
            <i className={`fa-solid ${s.icon || 'fa-circle'} text-blue-600 dark:text-blue-400`}></i>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{s.title}</span>
            {currentSection === s.id && <i className="fa-solid fa-check text-blue-600 dark:text-blue-400 ml-auto"></i>}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-sm">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">Sistemi Operativi 2 — Lezioni I/O</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Una lezione unica, sezioni dalle slide</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setShowSectionMenu((v) => !v)}
              className="lg:hidden bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 p-2 rounded-lg"
              aria-label="Apri menu sezioni"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 mb-6 text-white shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Input/Output nei Sistemi Operativi</h2>
              <p className="text-sm opacity-90">
                Contenuti accorpati in un'unica lezione, organizzata in sezioni generate dai file Markdown.
              </p>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-white/90">
              <i className="fa-solid fa-layer-group"></i>
              <span className="text-sm font-medium">{sections.length} sezioni</span>
            </div>
          </div>
        </div>

        {showSectionMenu && (
          <div className="lg:hidden animate-fadeIn">
            <SectionMenu sections={sections} onSectionClick={setSelectedSection} currentSection={selectedSection} />
          </div>
        )}

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28">
              <SectionMenu sections={sections} onSectionClick={setSelectedSection} currentSection={selectedSection} />
            </div>
          </div>

          <div className="lg:col-span-3">
            {sections.map((section) => (
              <div
                key={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 mb-6 shadow-sm animate-fadeIn"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <i className="fa-solid fa-circle text-blue-500 mt-1"></i>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{section.title}</h3>
                    {section.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">{section.description}</p>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedSection(section.id)}
                    className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                  >
                    vai alla sezione
                  </button>
                </div>

                <div className="content leading-relaxed text-gray-800 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: (section as any).html }} />

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-blue-100 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/30 p-4">
                    <div className="flex items-center text-blue-700 dark:text-blue-300 mb-2">
                      <i className="fa-solid fa-lightbulb mr-2"></i>
                      <span className="font-semibold">Idea chiave</span>
                    </div>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Rifletti sui concetti principali della sezione e su come si collegano ai dispositivi reali.</p>
                  </div>
                  <div className="rounded-lg border border-emerald-100 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-900/30 p-4">
                    <div className="flex items-center text-emerald-700 dark:text-emerald-300 mb-2">
                      <i className="fa-solid fa-diagram-project mr-2"></i>
                      <span className="font-semibold">Schema mentale</span>
                    </div>
                    <p className="text-sm text-emerald-800 dark:text-emerald-200">Collega i livelli del software I/O con i relativi componenti hardware e le interazioni.</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 border border-green-200 dark:border-green-700 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <i className="fa-solid fa-flag-checkered text-green-600 dark:text-green-400"></i>
                <h4 className="font-bold text-green-900 dark:text-green-100 text-lg">Riepilogo</h4>
              </div>
              <p className="text-green-800 dark:text-green-300 leading-relaxed">Hai esplorato i principi dell'I/O e del software I/O. Usa il menu laterale per ripassare rapidamente le sezioni chiave.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col space-y-2 z-20">
        <button
          onClick={scrollToTop}
          className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Torna su"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default LessonsApp;
