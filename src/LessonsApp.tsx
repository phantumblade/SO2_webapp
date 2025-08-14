import { useEffect, useMemo, useRef, useState, type FC } from 'react';
import { buildSectionFromMarkdown } from './utils/markdown';

// Toggle tema con persistenza e rispetto preferenza di sistema
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

  // Import Markdown come testo (build-time via Vite)
  const rawSlides = import.meta.glob('../slide_markdown/*.md', { as: 'raw', eager: true }) as Record<string, string>;

  const sections = useMemo(() => {
    const icons = ['fa-microchip', 'fa-hard-drive', 'fa-network-wired', 'fa-diagram-project', 'fa-microchip', 'fa-screwdriver-wrench'];
    return Object.entries(rawSlides)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([path, md], idx) => {
        const fileName = path.split('/').pop() || `sezione-${idx + 1}`;
        const id = fileName.replace(/\W+/g, '-').replace(/(^-|-$)/g, '').toLowerCase();
        const base = buildSectionFromMarkdown(md, id, fileName.replace(/\.md$/i, '')) as any;
        return { ...base, icon: icons[idx % icons.length] };
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

