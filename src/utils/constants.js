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
  // Positionnement : identique au titre LinkedIn et au CV
  role: "Produit digital & communauté",
  baseline: "Un seul cerveau, mille fenêtres",
  repeatedText: `Bienvenue dans ma tête : c'est un joyeux fouillis. Mon métier, c'est de faire le lien entre ceux qui construisent un produit et ceux qui l'utilisent. J'ai été Product Owner, cheffe de produit, chargée de communication, et je code un peu. Bref, un couteau suisse qui sait où il plante sa lame.`,
  // Mettre à null pour masquer le badge de disponibilité
  availability: "Ouverte aux opportunités · Paris, hybride ou à distance",
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
// SECTIONS EXPÉRIENCES (Produit, Communauté)
// ============================================
// Affichées par le composant générique ExperienceSection.
// Chaque expérience : role (intitulé), org (structure), period (dates), summary (une phrase).
export const PRODUCT_SECTION = {
  id: "produit",
  title: "Du besoin à la mise en ligne",
  description: `Faire avancer un produit, c'est traduire les besoins des utilisateurs en spécifications claires, prioriser avec l'équipe technique et mesurer ce qui fonctionne. C'est ce que j'ai fait en start-up, souvent avec une casquette de couteau suisse.`,
  listTitle: "Parcours",
  experiences: [
    {
      id: 1,
      role: "Cheffe de produit",
      org: "Flint Media",
      period: "2021 – 2022",
      summary: "Refonte du site et de la newsletter, parcours de parrainage, suivi des analytics.",
    },
    {
      id: 2,
      role: "Program Manager",
      org: "French Future Academy",
      period: "2022",
      summary: "Formations en Design Thinking : organisation des sessions et relation clients.",
    },
    {
      id: 3,
      role: "Product Owner",
      org: "JOONE",
      period: "2020",
      summary: "Spécifications fonctionnelles et techniques, roadmap de l'équipe tech, mise en place des analytics.",
    },
  ],
};

export const COMMUNITY_SECTION = {
  id: "communaute",
  title: "Faire parler, faire vivre",
  description: `Stratégie de contenus, réseaux sociaux, influence : j'aime trouver le bon format pour la bonne audience, de l'idée jusqu'au montage vidéo.`,
  listTitle: "Parcours",
  experiences: [
    {
      id: 1,
      role: "Influence Manager & Content Creator",
      org: "Editions Goutte d'Or",
      period: "2026",
      summary: "Stratégie de publication Instagram et LinkedIn, suivi d'influenceurs, vidéos courtes de la captation au montage.",
    },
    {
      id: 2,
      role: "Brand & Communication",
      org: "Ignition Program",
      period: "2022 – 2023",
      summary: "Animation des réseaux sociaux, articles de blog, analyse des retombées.",
    },
    {
      id: 3,
      role: "Éditorial",
      org: "doted.",
      period: "depuis 2024",
      summary: "Ligne éditoriale et animation du compte Instagram @hellodoted.",
    },
  ],
};

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
  description: `Le frontend, c'est mon terrain de jeu : donner vie à des projets divers et variés. Cette pratique me permet de comprendre les développeurs, et de designer ou chaperonner en toute conscience les aspects techniques. Aujourd'hui, j'utilise aussi Claude\u00A0Code pour créer plus vite les projets que j'imagine.`,
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
  description: `En duo, nous avons créé doted., que vous pouvez tester en application web ou sur l'App\u00A0Store. Pensée à deux, elle aide à mieux faire face aux montagnes russes de la vie. Elle s'inspire de la TCD, une thérapie éprouvée fondée sur des compétences multiples, à laquelle nous avons ajouté notre patte pour créer la meilleure expérience possible.`,
  buttons: [
    { text: "Découvrir", link: "https://doted.run/", icon: "doted" },
    { text: "Éditorial", link: "https://www.instagram.com/hellodoted/", icon: "instagram" },
  ],
};

// ============================================
// NAVIGATION MENU
// ============================================
// Ordre identique à celui des sections dans App.jsx
export const NAV_LINKS = [
  { id: "entrepreneuriat", label: "Entrepreneuriat", href: "#entrepreneuriat" },
  { id: "produit", label: "Produit", href: "#produit" },
  { id: "communaute", label: "Communauté", href: "#communaute" },
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
