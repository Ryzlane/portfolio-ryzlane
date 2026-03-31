// ============================================
// CONSTANTES - Portfolio Ryzlane
// ============================================
// TODO: Remplacer les placeholders par les vraies valeurs

// ============================================
// LIENS EXTERNES
// ============================================
export const LINKS = {
  behance: "https://www.behance.net/ryzlane",
  github: "https://github.com/Ryzlane",
  linkedin: "https://www.linkedin.com/in/ryzlane-arsac-gothi%C3%A8re/",
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
  repeatedText: `Bienvenue dans ma tête. C'est un fouillis, un mélange de choses et d'autres. Je ne suis ni totalement designer, ni totalement développeuse, ni totalement communicante ou rédactrice. J'aime toucher à tout et c'est ce que j'aspire à faire, être un couteau suisse dans l'immensité du web.`,
};

// ============================================
// LOGO NAVIGATION
// ============================================
export const MARQUEE_ITEMS = [
  "CODER L'ESTHÉTIQUE",
  "DESIGNER LA LOGIQUE",
  "ÉCRIRE L'INVISIBLE",
  "ENTREPRENDRE L'AUDACE",
];

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
    position: 47,
  },
  {
    id: 2,
    labelTop: "Théoricienne",
    labelBottom: "Praticienne",
    position: 75,
  },
  {
    id: 3,
    labelTop: "Multi-tâches",
    labelBottom: "Focus laser",
    position: 67,
  },
  {
    id: 4,
    labelTop: "Sens de l'esthétique",
    labelBottom: "Sens du fonctionnel",
    position: 42,
  },
];

// ============================================
// SECTION DESIGN
// ============================================
export const DESIGN_SECTION = {
  title: "Au pixel près",
  // TODO: Remplacer par votre vraie description
  description: `J'aime la simplicité, les zones épurées. Un léger soupçon d'UI mais surtout beaucoup d'UX. Je me passionne à sonder les besoins des utilisateurs, les optimisations pour délivrer l'expérience la plus fluide et agréable possible. Vous pouvez retrouver, sur mon Behance, un échantillon de mon travail en tant que designer.`,
  buttonText: "Behance",
  buttonLink: LINKS.behance,
};

// ============================================
// SECTION DÉVELOPPEMENT
// ============================================
export const DEV_SECTION = {
  title: "Des lignes par milliers",
  // TODO: Remplacer par votre vraie description
  description: `Ça fait un moment que je n'ai pas développé from\u00A0scratch. Mais c'est une discipline que j'affectionne : surtout le frontend, le don de vie à des projets divers et variés. Mon expérience me permet de comprendre les développeurs et designer ou chaperonner en toute conscience les aspects techniques. Je me suis aussi mise à utiliser Claude\u00A0Code, rendant plus rapide la création de projets que j'imagine.`,
  githubLink: LINKS.github,
  projects: [
    {
      id: 1,
      title: "Portfolio de Kaan Roussel (React.js, from\u00A0scratch)",
      link: "https://kaan-roussel.ryzlane.vercel.app/",
    },
    {
      id: 2,
      title: "OptionBattle, prendre des décisions éclairées (Claude\u00A0Code)",
      link: "https://optionbattle.ryzlane.com/",
    },
    {
      id: 3,
      title: "Debunker, challenger ses croyances (Claude\u00A0Code)",
      link: "https://debunker.ryzlane.com/",
    },
    {
      id: 4,
      title: "Ce site (Claude\u00A0Code)\u00A0!",
      link: null,
    },
  ],
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
        link: "https://ignition-program.com/tuto/politique-salariale-definition-conseils-et-mise-en-place",
      },
      {
        id: 2,
        title: "Le travail hybride : redéfinir la façon de travailler",
        link: "https://ignition-program.com/tuto/le-travail-hybride-redefinir-la-facon-dont-nous-travaillons",
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
    cardTitle: "Rêves",
    cardSubtitle: "Mon compte Instagram sur lequel je relate mes rêves",
    cardLink: LINKS.instagram,
  },
};

// ============================================
// SECTION ENTREPRENEURIAT
// ============================================
export const ENTREPRENEURIAT_SECTION = {
  title: "Le grand saut",
  description: `En duo, nous avons créé doted. que vous pouvez tester sur une application web ou sur l'Apple Store. Réfléchit ensemble, nous voulions aider les gens à mieux faire face aux montagnes russes de la vie. Basée sur la TCD, une thérapie éprouvée basée sur des compétences multiples, nous y avons ajouté notre patte pour créer la meilleure expérience possible.`,
  buttons: [
    { text: "Découvrir", link: "https://doted.run/", icon: "doted" },
    { text: "Éditorial", link: "https://www.instagram.com/hellodoted/", icon: "instagram" },
  ],
};

// ============================================
// NAVIGATION MENU
// ============================================
export const NAV_LINKS = [
  { id: "design", label: "Design", href: "#design" },
  { id: "developpement", label: "Développement", href: "#developpement" },
  { id: "ecriture", label: "Écriture", href: "#ecriture" },
  { id: "entrepreneuriat", label: "Entrepreneuriat", href: "#entrepreneuriat" },
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
