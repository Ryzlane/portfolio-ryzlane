// Navigation sticky avec smooth scroll et scroll spy
import { useState, useEffect } from 'react';
import { NAV_LINKS, LOGO_TEXT } from '../utils/constants';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll spy avec Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger au centre du viewport
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

    // Observer toutes les sections
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
    // Vérifier aussi au montage
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile au clic sur un lien
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="z-50">
      {/* Bande noire avec marquee LOREM IPSUM */}
      <div className="bg-noir overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap py-2">
          {/* Répéter plusieurs fois pour effet continu */}
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-blanc text-sm font-bold tracking-wider">
              {LOGO_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation avec boutons encadrés */}
      <nav className="bg-blanc border-b-2 border-noir">
        <div className="max-w-container mx-auto px-6 md:px-12">
          {/* Navigation desktop */}
          <div className="hidden md:flex justify-end">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-6 py-3 border-x-2 border-noir text-sm font-semibold uppercase transition-colors ${
                  index > 0 ? '-ml-[2px]' : ''
                } ${
                  activeSection === link.id
                    ? 'bg-noir text-blanc'
                    : 'bg-blanc text-noir hover:bg-noir hover:text-blanc'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Navigation mobile */}
          <div className="md:hidden flex items-center justify-between h-16">
            <span className="text-sm font-bold">MENU</span>
            <button
              className="flex flex-col gap-1.5 w-6 h-6 justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`block h-0.5 w-full bg-noir transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-noir transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-noir transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile fullscreen */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[96px] bg-blanc z-40 flex flex-col gap-6 p-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={handleLinkClick}
              className={`py-4 text-center border-2 border-noir text-xl font-bold uppercase transition-colors ${
                activeSection === link.id
                  ? 'bg-noir text-blanc'
                  : 'bg-blanc text-noir hover:bg-noir hover:text-blanc'
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
