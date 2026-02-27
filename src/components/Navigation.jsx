// Navigation sticky avec smooth scroll et scroll spy
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { NAV_LINKS, MARQUEE_ITEMS } from '../utils/constants';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialiser le dark mode + écouter les changements de préférence système
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const saved = localStorage.getItem('theme');
      const shouldBeDark = saved ? saved === 'dark' : mediaQuery.matches;
      document.documentElement.classList.toggle('dark', shouldBeDark);
      setIsDark(shouldBeDark);
    };

    const handleSystemChange = (e) => {
      // Quand le système change, on suit toujours (override le choix manuel)
      localStorage.removeItem('theme');
      document.documentElement.classList.toggle('dark', e.matches);
      setIsDark(e.matches);
    };

    applyTheme();
    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  // Scroll spy avec Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && window.scrollY > 100) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Désactiver la sélection quand on est en haut de la page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Bande noire avec marquee */}
      <div className="bg-noir dark:bg-blanc overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap py-2">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-blanc dark:text-noir text-sm font-bold tracking-wider">
              {MARQUEE_ITEMS[i % MARQUEE_ITEMS.length]}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation avec logo et boutons encadrés */}
      <nav className="bg-blanc dark:bg-[#1a1a1a] border-b-2 border-noir dark:border-blanc transition-colors">
        <div className="max-w-container mx-auto px-6 md:px-12">
          {/* Navigation desktop */}
          <div className="hidden md:flex items-stretch">
            <div className="mr-auto flex items-center py-1 -ml-3">
              <img src={`${import.meta.env.BASE_URL}logo-square.png`} alt="R." className="h-10 dark:invert" />
            </div>
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-6 flex items-center border-x-2 border-noir dark:border-blanc text-sm font-semibold uppercase transition-colors ${
                  index > 0 ? '-ml-[2px]' : ''
                } ${
                  activeSection === link.id
                    ? 'bg-noir text-blanc dark:bg-blanc dark:text-noir'
                    : 'bg-blanc text-noir dark:bg-[#1a1a1a] dark:text-blanc hover:bg-noir hover:text-blanc dark:hover:bg-blanc dark:hover:text-noir'
                }`}
              >
                {link.label}
              </a>
            ))}
            {/* Toggle dark mode */}
            <button
              onClick={toggleDark}
              className="ml-4 flex items-center justify-center w-10 h-10 self-center transition-colors text-noir dark:text-blanc hover:opacity-70"
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>
          </div>

          {/* Navigation mobile */}
          <div className="md:hidden flex items-center justify-between h-16">
            <div>
              <img src={`${import.meta.env.BASE_URL}logo-square.png`} alt="R." className="h-12 dark:invert" />
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDark}
                className="text-noir dark:text-blanc hover:opacity-70 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
              </button>
              <button
                className="flex flex-col gap-1.5 w-6 h-6 justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
                aria-expanded={isMenuOpen}
              >
                <span className={`block h-0.5 w-full bg-noir dark:bg-blanc transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-noir dark:bg-blanc transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-noir dark:bg-blanc transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu mobile fullscreen */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[96px] bg-blanc dark:bg-[#1a1a1a] z-40 flex flex-col gap-6 p-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={handleLinkClick}
              className={`py-4 text-center border-2 border-noir dark:border-blanc text-xl font-bold uppercase transition-colors ${
                activeSection === link.id
                  ? 'bg-noir text-blanc dark:bg-blanc dark:text-noir'
                  : 'bg-blanc text-noir dark:bg-[#1a1a1a] dark:text-blanc hover:bg-noir hover:text-blanc dark:hover:bg-blanc dark:hover:text-noir'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
