// ============================================
// CONSTANTES - Portfolio Ryzlane
// ============================================
// TODO: Remplacer les placeholders par les vraies valeurs

// ============================================
// LIENS EXTERNES
// ============================================
export const LINKS = {
  behance: "https://behance.net/TODO", // TODO: Remplacer par votre lien Behance
  github: "https://github.com/TODO", // TODO: Remplacer par votre lien GitHub
  linkedin: "https://linkedin.com/in/TODO", // TODO: Remplacer par votre lien LinkedIn
  instagram: "https://instagram.com/ademireve", // TODO: Vérifier le lien Instagram "À demi-rêve"
};

// ============================================
// CONFIGURATION FORMSPREE
// ============================================
// TODO: Créer un compte sur https://formspree.io et remplacer par votre endpoint
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

// ============================================
// TEXTES HERO SECTION
// ============================================
export const HERO_TEXT = {
  title: "RYZLANE●",
  baseline: "Un seul cerveau, mille fenêtres",
  // TODO: Remplacer par votre texte répétitif réel
  repeatedText: `Je suis le corps. Je suis le corps qui rêve. Je suis le corps qui rêve et qui écrit.
Je suis le corps qui rêve, qui écrit, qui code. Je suis le corps qui rêve, qui écrit, qui code, qui crée.
Je suis le corps qui habite mille fenêtres à la fois.`,
};

// ============================================
// LOGO NAVIGATION
// ============================================
// TODO: Remplacer "LOREM IPSUM" par votre texte si différent (ou garder si c'est l'esthétique voulue)
export const LOGO_TEXT = "LOREM IPSUM";

// ============================================
// SONDAGES IFOP (Section Personnalité)
// ============================================
// Position : 0 = label top, 100 = label bottom
// TODO: Ajuster les positions selon votre personnalité réelle
export const SURVEY_AXES = [
  {
    id: 1,
    labelTop: "Extravertie",
    labelBottom: "Introvertie",
    position: 70, // TODO: 70 = plutôt introvertie, ajuster si nécessaire
  },
  {
    id: 2,
    labelTop: "Théoricienne",
    labelBottom: "Praticienne",
    position: 45, // TODO: 45 = équilibre, ajuster si nécessaire
  },
  {
    id: 3,
    labelTop: "Multi-tâches",
    labelBottom: "Focus laser",
    position: 60, // TODO: 60 = plutôt focus, ajuster si nécessaire
  },
  {
    id: 4,
    labelTop: "Sens de l'esthétique",
    labelBottom: "Sens du fonctionnel",
    position: 40, // TODO: 40 = plutôt esthétique, ajuster si nécessaire
  },
];

// ============================================
// SECTION DESIGN
// ============================================
export const DESIGN_SECTION = {
  title: "Mes compétences en design ?",
  // TODO: Remplacer par votre vraie description
  description: `Je conçois des interfaces qui respirent la clarté et l'intention.
Mon approche mêle esthétique minimaliste et architecture de l'information rigoureuse.
Du wireframe au prototype haute-fidélité, je traduis les besoins utilisateurs en expériences visuelles cohérentes et accessibles.`,
  buttonText: "Behance",
  buttonLink: LINKS.behance,
};

// ============================================
// SECTION DÉVELOPPEMENT
// ============================================
export const DEV_SECTION = {
  title: "Mes compétences en développement ?",
  // TODO: Remplacer par votre vraie description
  description: `Je transforme le design en code performant et maintenable.
Spécialisée en React, JavaScript moderne et architecture frontend, je construis des interfaces qui allient fluidité visuelle et robustesse technique.
Du composant atomique au système de design complet, je code avec rigueur et attention au détail.`,
  projectTitle: "Projet phare", // TODO: Remplacer par le nom de votre projet
  projectNote: "(c'est daté mais c'est from scratch et j'en suis fière)",
  githubLink: LINKS.github,
};

// ============================================
// SECTION ÉCRITURE
// ============================================
export const WRITING_SECTION = {
  rédaction: {
    title: "Un soupçon de rédaction et d'optimisation",
    // TODO: Remplacer par vos vrais articles avec liens
    articles: [
      {
        id: 1,
        title: "Politique salariale : comment s'y retrouver\u00A0?",
        link: "#", // TODO: Lien vers l'article
      },
      {
        id: 2,
        title: "Le travail hybride : redéfinir la façon de travailler",
        link: "#", // TODO: Lien vers l'article
      },
      {
        id: 3,
        title: "Optimiser sa présence en ligne",
        link: "#", // TODO: Lien vers l'article
      },
    ],
  },
  creative: {
    title: "Un zeste d'écriture créative",
    cardTitle: "À demi-rêvé",
    cardSubtitle: "Mon compte Instagram sur lequel je relate mes rêves",
    cardLink: LINKS.instagram,
  },
};

// ============================================
// NAVIGATION MENU
// ============================================
export const NAV_LINKS = [
  { id: "design", label: "Design", href: "#design" },
  { id: "developpement", label: "Développement", href: "#developpement" },
  { id: "ecriture", label: "Écriture", href: "#ecriture" },
];

// ============================================
// FOOTER
// ============================================
export const FOOTER = {
  copyright: "© 2025 Ryzlane",
  tech: "Fait avec React + Tailwind",
  socials: [
    { name: "GitHub", url: LINKS.github, icon: "github" },
    { name: "LinkedIn", url: LINKS.linkedin, icon: "linkedin" },
    { name: "Behance", url: LINKS.behance, icon: "behance" },
    { name: "Instagram", url: LINKS.instagram, icon: "instagram" },
  ],
};
