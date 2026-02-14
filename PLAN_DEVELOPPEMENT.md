# Plan de Développement - Portfolio Ryzlane

**Date de création** : 12 février 2025
**Statut** : Plan validé, prêt pour implémentation
**Durée estimée** : 5-6 heures de développement

---

## 1. Architecture des fichiers et dossiers

```
portfolio-ryzlane/
│
├── public/
│   ├── photo-ryzlane.jpg          # Photo circulaire (800x800px minimum)
│   ├── favicon.ico                # Favicon du site
│   └── og-image.jpg               # Image pour partages sociaux (1200x630px)
│
├── src/
│   ├── components/
│   │   ├── Navigation.jsx         # Navigation sticky avec smooth scroll
│   │   ├── Hero.jsx               # Section hero avec titre + photo
│   │   ├── PersonalitySection.jsx # Section sondages IFOP (4 axes)
│   │   ├── DesignSkills.jsx       # Section compétences design + Behance
│   │   ├── DevSkills.jsx          # Section dev avec terminal-style header
│   │   ├── WritingSection.jsx     # Section écriture (articles + Instagram)
│   │   ├── ContactForm.jsx        # Formulaire de contact (Formspree)
│   │   └── Footer.jsx             # Footer avec liens sociaux
│   │
│   ├── utils/
│   │   └── constants.js           # Constantes (liens, textes, config)
│   │
│   ├── App.jsx                    # Composant principal
│   ├── main.jsx                   # Point d'entrée React
│   └── index.css                  # Styles globaux + Tailwind imports
│
├── .gitignore
├── package.json
├── tailwind.config.js             # Configuration Tailwind custom
├── postcss.config.js              # Configuration PostCSS
├── vite.config.js                 # Configuration Vite
├── README.md                      # Documentation projet
└── PLAN_DEVELOPPEMENT.md          # Ce fichier

```

### Responsabilités des composants

**Navigation.jsx**
- Navigation sticky en haut de page
- Logo répété "LOREM IPSUM" (marquee effect)
- Menu 4 liens : Design, Développement, Écriture, Entrepreneuriat
- Smooth scroll vers sections
- Scroll spy : highlight section active
- Responsive : hamburger menu mobile (<768px)

**Hero.jsx**
- Layout 2 colonnes (texte + photo)
- Titre "RYZLANE●" avec styling particulier
- Baseline + texte répétitif
- Photo circulaire avec border noir
- Animations d'entrée (Framer Motion)
- Responsive : stack vertical mobile

**PersonalitySection.jsx**
- Titre section avec mention IFOP
- Grid 4 colonnes (4 axes de sondage)
- Composant réutilisable SurveyAxis (sous-composant)
- Indicateurs visuels (flèches/curseurs)
- Borders dashed styling
- Animation stagger au scroll
- Responsive : 1 col mobile, 2 cols tablet, 4 cols desktop

**DesignSkills.jsx**
- Layout 2 colonnes (70% texte + 30% bouton)
- Texte descriptif compétences design
- Bouton CTA Behance (noir, texte blanc)
- Lien externe (nouvel onglet)
- Hover effects
- Responsive : stack vertical mobile

**DevSkills.jsx**
- Header terminal noir avec commandes
- Layout 2 colonnes (30% card projet + 70% texte)
- Card projet noire avec styling brutal
- Lien GitHub cliquable dans header
- Font monospace pour terminal
- Responsive : stack vertical mobile

**WritingSection.jsx**
- Layout 2 colonnes égales
- Colonne gauche : liste articles avec icônes
- Colonne droite : Card Instagram noire "À demi-rêve"
- Liens externes cliquables
- Hover effects
- Responsive : stack vertical mobile

**ContactForm.jsx**
- Formulaire 4 champs (nom, email, sujet, message)
- Validation HTML5 + gestion états
- Intégration Formspree pour envoi
- États : idle, loading, success, error
- Messages feedback utilisateur
- Styling brutal (border noir, no radius)
- Accessibilité complète

**Footer.jsx**
- Background noir, texte blanc
- Copyright + mention technique
- Liens sociaux avec icônes (GitHub, LinkedIn, Behance, Instagram)
- Hover effects
- Responsive

---

## 2. Liste des dépendances à installer

### Dépendances de production

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^11.0.3",
  "react-intersection-observer": "^9.5.3"
}
```

**Justifications** :
- `react` + `react-dom` : Framework UI (v18 pour Concurrent features)
- `framer-motion` : Animations fluides et performantes (fade in, slide up, stagger)
- `react-intersection-observer` : Détection éléments visibles dans viewport (trigger animations)

### Dépendances de développement

```json
{
  "@vitejs/plugin-react": "^4.2.1",
  "vite": "^5.0.0",
  "tailwindcss": "^3.4.1",
  "postcss": "^8.4.32",
  "autoprefixer": "^10.4.16",
  "eslint": "^8.55.0",
  "eslint-plugin-react": "^7.33.2"
}
```

**Justifications** :
- `vite` : Build tool ultra-rapide (HMR instantané)
- `tailwindcss` : Utility-first CSS framework (rapidité de développement)
- `postcss` + `autoprefixer` : Préfixes CSS automatiques (compatibilité navigateurs)
- `eslint` : Linting code React (qualité du code)

### Commandes d'installation

```bash
# 1. Créer projet avec Vite + React
npm create vite@latest portfolio-ryzlane -- --template react
cd portfolio-ryzlane

# 2. Installer Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Installer dépendances animations
npm install framer-motion react-intersection-observer

# 4. Installer ESLint (optionnel mais recommandé)
npm install -D eslint eslint-plugin-react
```

---

## 3. Ordre de développement des fonctionnalités

### Phase 1 : Setup & Structure (30 min) - CRITICAL

**Objectifs** :
- Projet initialisé et fonctionnel
- Tailwind configuré correctement
- Structure de fichiers en place
- Composants skeleton créés

**Tâches** :
1. ✅ Créer projet Vite + React
2. ✅ Installer et configurer Tailwind CSS
3. ✅ Configurer `tailwind.config.js` (voir section 4)
4. ✅ Créer structure de dossiers (`components/`, `utils/`)
5. ✅ Créer fichier `src/utils/constants.js` avec liens/textes
6. ✅ Créer composants vides (exports par défaut uniquement)
7. ✅ Configurer `src/index.css` avec imports Tailwind
8. ✅ Nettoyer `App.jsx` et importer tous les composants
9. ✅ Tester que le serveur Vite démarre (`npm run dev`)

**Validation** :
- [ ] `npm run dev` fonctionne sans erreur
- [ ] Page blanche s'affiche (composants vides)
- [ ] Tailwind classes fonctionnent (test avec `className="bg-black text-white"`)

---

### Phase 2 : Navigation (20 min) - CRITICAL

**Objectifs** :
- Navigation sticky fonctionnelle
- Smooth scroll vers sections
- Version desktop + mobile

**Tâches** :
1. Créer `Navigation.jsx` avec structure HTML
2. Implémenter logo marquee "LOREM IPSUM" (répété, scroll horizontal)
3. Menu desktop : 4 liens (Design, Développement, Écriture, Contact)
4. Implémenter smooth scroll (ancres `#section-id`)
5. Styling : sticky top-0, border-bottom noir, bg blanc
6. Version mobile : hamburger menu (icône burger + menu fullscreen)
7. Ajouter state `isMenuOpen` pour mobile
8. Responsive breakpoint à 768px (Tailwind `md:`)

**Code clé** :
```javascript
// Smooth scroll handler
const handleScrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};
```

**Validation** :
- [ ] Navigation reste fixée en haut au scroll
- [ ] Clic sur lien → scroll fluide vers section
- [ ] Menu mobile fonctionnel (toggle)
- [ ] Logo marquee visible

---

### Phase 3 : Hero Section (30 min) - CRITICAL

**Objectifs** :
- Section hero impactante et responsive
- Animations d'entrée fluides

**Tâches** :
1. Créer `Hero.jsx` avec layout 2 colonnes (grid ou flex)
2. Colonne gauche :
   - Titre "RYZLANE●" avec classes Tailwind (text-9xl, font-black)
   - Point "●" en superscript (styling particulier)
   - Baseline "Un seul cerveau, mille fenêtres"
   - Texte répétitif (opacity réduite)
3. Colonne droite :
   - Image circulaire (rounded-full, border-2 noir)
   - Utiliser placeholder temporaire (400x400px)
4. Implémenter animations Framer Motion :
   - Titre : fade in + slide up (delay: 0)
   - Baseline : fade in + slide up (delay: 0.2s)
   - Texte : fade in (delay: 0.4s)
   - Photo : fade in + scale (delay: 0.3s)
5. Responsive mobile : stack vertical, photo 250px

**Code animations** :
```javascript
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};
```

**Validation** :
- [ ] Layout 2 colonnes desktop
- [ ] Animations fluides au chargement
- [ ] Photo circulaire avec border noir
- [ ] Responsive mobile (stack vertical)

---

### Phase 4 : Section Personnalité Sondages (45 min) - HIGH PRIORITY

**Objectifs** :
- Section originale avec 4 axes de sondages
- Animation stagger au scroll

**Tâches** :
1. Créer `PersonalitySection.jsx`
2. Titre section : "Selon les sondages (approuvés par l'IFOP)..."
3. Grid 4 colonnes responsive (1 col mobile, 2 tablet, 4 desktop)
4. Créer sous-composant `SurveyAxis` réutilisable :
   - Props : `labelTop`, `labelBottom`, `position` (0-100)
   - Structure verticale : label top → indicateur → label bottom
   - Border dashed noir
   - Indicateur visuel (flèche SVG ou caractère ↕)
5. Données des 4 axes dans `constants.js` :
   ```javascript
   export const SURVEY_AXES = [
     { labelTop: "Extravertie", labelBottom: "Introvertie", position: 70 },
     { labelTop: "Théoricienne", labelBottom: "Praticienne", position: 40 },
     // ...
   ];
   ```
6. Animation stagger avec Framer Motion :
   ```javascript
   <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.2 }}
     variants={containerVariants}
   >
   ```
7. Responsive : ajuster padding/spacing mobile

**Validation** :
- [ ] 4 axes affichés en grid
- [ ] Borders dashed noirs
- [ ] Indicateurs visuels clairs
- [ ] Animation stagger au scroll (chaque axe avec 100ms délai)
- [ ] Responsive 1/2/4 colonnes

---

### Phase 5 : Section Design Skills (20 min) - MEDIUM PRIORITY

**Objectifs** :
- Présentation compétences design + CTA Behance

**Tâches** :
1. Créer `DesignSkills.jsx`
2. Layout 2 colonnes (70% texte + 30% bouton)
3. Texte descriptif :
   - Titre "Mes compétences en design ?"
   - Paragraphe description (récupérer depuis `constants.js`)
4. Bouton Behance :
   - Background noir, texte blanc
   - Padding généreux (px-12 py-4)
   - Hover : scale(1.05) avec Framer Motion
   - Lien externe : `target="_blank" rel="noopener noreferrer"`
5. Responsive mobile : stack vertical, bouton full width

**Validation** :
- [ ] Layout 2 colonnes desktop
- [ ] Bouton Behance cliquable (nouvel onglet)
- [ ] Hover effect scale
- [ ] Responsive mobile

---

### Phase 6 : Section Dev Skills (40 min) - MEDIUM PRIORITY

**Objectifs** :
- Section dev avec header terminal-style
- Card projet noir

**Tâches** :
1. Créer `DevSkills.jsx`
2. Header terminal :
   - Background noir, texte blanc
   - Font monospace (`font-mono`)
   - 2 éléments : "cd ryzlane/projects/dev" (gauche) + "cd ryzlane/github" (droite)
   - "cd ryzlane/github" cliquable → lien GitHub
3. Layout 2 colonnes (30% card + 70% texte)
4. Colonne gauche - Card projet :
   - Background noir, texte blanc
   - Titre "Projet phare"
   - Note en bas : "(c'est daté mais from scratch...)" (italic, opacity réduite)
   - Padding généreux
   - Border-radius: 0 (brutal)
5. Colonne droite :
   - Titre "Mes compétences en développement ?"
   - Texte description compétences
6. Responsive mobile : stack vertical

**Validation** :
- [ ] Header terminal noir visible
- [ ] Lien GitHub fonctionnel
- [ ] Card projet noire avec texte blanc
- [ ] Font monospace dans terminal
- [ ] Responsive mobile

---

### Phase 7 : Section Écriture (30 min) - MEDIUM PRIORITY

**Objectifs** :
- Double colonne : articles + Instagram card

**Tâches** :
1. Créer `WritingSection.jsx`
2. Layout 2 colonnes égales
3. Colonne gauche "Un soupçon de rédaction..." :
   - Titre section
   - Liste articles :
     - Icône emoji 👉 ou point noir
     - Titre article cliquable
     - Underline au hover
     - Liens externes
   - Données articles dans `constants.js`
4. Colonne droite "Un zeste d'écriture créative" :
   - Card Instagram noire :
     - Background noir
     - Texte blanc centré
     - Titre "À demi-rêve"
     - Sous-titre descriptif
     - Lien externe vers Instagram
   - Hover : scale(1.02)
5. Responsive mobile : stack vertical

**Validation** :
- [ ] 2 colonnes desktop
- [ ] Articles cliquables avec hover underline
- [ ] Card Instagram noire visible
- [ ] Lien Instagram fonctionnel
- [ ] Responsive mobile

---

### Phase 8 : Formulaire Contact (45 min) - HIGH PRIORITY

**Objectifs** :
- Formulaire fonctionnel avec Formspree
- Gestion états (idle, loading, success, error)

**Tâches** :
1. Créer `ContactForm.jsx`
2. Structure formulaire :
   - Container max-width 600px, centré
   - 4 champs : nom, email, sujet, message
   - Labels avec astérisque * pour champs requis
3. Styling inputs :
   - Border noir 1px (2px sur focus)
   - Background blanc
   - Padding généreux
   - Border-radius: 0 (brutal)
   - Font-size 16px (éviter zoom mobile)
4. Gestion états avec `useState` :
   ```javascript
   const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
   const [status, setStatus] = useState('idle'); // idle | loading | success | error
   ```
5. Intégration Formspree :
   - Créer compte Formspree (gratuit)
   - Obtenir endpoint (https://formspree.io/f/YOUR_ID)
   - Implémenter `handleSubmit` avec fetch POST
6. Validation HTML5 :
   - Attributs `required` sur champs obligatoires
   - Type `email` pour champ email
7. Messages feedback :
   - Loading : désactiver bouton + spinner
   - Success : message vert "Message envoyé !"
   - Error : message rouge "Erreur, réessayez"
8. Bouton submit :
   - Background noir, texte blanc
   - Full width mobile, auto desktop
   - Disabled pendant envoi
9. Accessibilité :
   - Labels associés avec `htmlFor`
   - Focus visible
   - Messages d'erreur descriptifs

**Code clé** :
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('loading');

  try {
    const response = await fetch('https://formspree.io/f/YOUR_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }
};
```

**Validation** :
- [ ] Formulaire envoie correctement
- [ ] Validation HTML5 fonctionne
- [ ] États loading/success/error visibles
- [ ] Messages feedback clairs
- [ ] Accessibilité OK (labels, focus)
- [ ] Responsive mobile

---

### Phase 9 : Footer (15 min) - LOW PRIORITY

**Objectifs** :
- Footer noir avec liens sociaux

**Tâches** :
1. Créer `Footer.jsx`
2. Background noir, texte blanc
3. Layout centré :
   - Copyright "© 2025 Ryzlane"
   - Mention technique "Fait avec React + Tailwind"
4. Liens sociaux :
   - 4 liens : GitHub, LinkedIn, Behance, Instagram
   - Icônes SVG simples (ou caractères Unicode)
   - Spacing horizontal 24px
   - Hover : opacity 0.7
   - Target blank sur tous
5. Données liens dans `constants.js`

**Validation** :
- [ ] Background noir, texte blanc
- [ ] Copyright visible
- [ ] 4 liens sociaux fonctionnels (nouvel onglet)
- [ ] Hover effects

---

### Phase 10 : Polish & Testing (60 min) - CRITICAL

**Objectifs** :
- Fonctionnalités finales et optimisations

**Tâches** :

**A. Scroll Spy (15 min)** :
1. Implémenter détection section active :
   - Utiliser `react-intersection-observer`
   - Highlight lien navigation correspondant
   - Ajouter state `activeSection` dans `Navigation.jsx`
2. Style section active : font-weight bold ou underline permanent

**B. Test liens externes (10 min)** :
1. Vérifier tous les liens externes s'ouvrent en nouvel onglet
2. Ajouter `rel="noopener noreferrer"` partout
3. Vérifier liens placeholder commentés dans `constants.js`

**C. Test formulaire complet (10 min)** :
1. Tester envoi réel avec Formspree
2. Vérifier email de réception
3. Tester tous les états (loading, success, error)
4. Tester validation (champs vides, email invalide)

**D. Vérification responsive (15 min)** :
1. Tester sur tous breakpoints (320px, 640px, 768px, 1024px, 1280px)
2. Vérifier pas de scroll horizontal
3. Vérifier espacements mobile/desktop cohérents
4. Tester menu hamburger mobile

**E. Optimisation images (5 min)** :
1. Compresser photo-ryzlane.jpg (TinyPNG ou Squoosh)
2. Ajouter `loading="lazy"` sur images
3. Vérifier alt text présents

**F. Audit accessibilité (5 min)** :
1. Contraste texte/bg OK (noir/blanc = parfait)
2. Focus visible sur tous éléments interactifs
3. Labels formulaire associés
4. Navigation clavier OK (Tab, Enter, Espace)
5. Test lecteur d'écran basique (VoiceOver/NVDA)

**G. Audit performance (10 min)** :
1. Lighthouse audit (viser score >90)
2. Vérifier pas de layout shifts (CLS)
3. Vérifier animations performantes (60fps)
4. Temps de chargement < 2s

**H. Fix bugs (variable)** :
1. Corriger erreurs console
2. Corriger bugs identifiés
3. Vérifier smooth scroll sur tous navigateurs

**Validation finale** :
- [ ] Scroll spy fonctionne
- [ ] Tous liens testés
- [ ] Formulaire testé en production
- [ ] Responsive parfait
- [ ] Images optimisées
- [ ] Accessibilité validée
- [ ] Performance OK (Lighthouse >90)
- [ ] Aucune erreur console

---

## 4. Configuration Tailwind

### tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales (noir/blanc pur)
        noir: '#000000',
        blanc: '#FFFFFF',
        'gris-clair': '#F5F5F5',
      },
      fontFamily: {
        // Police principale
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        // Police monospace pour terminal
        mono: ['Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Tailles custom pour le hero
        'hero': ['96px', { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '900' }],
        'hero-mobile': ['48px', { lineHeight: '0.95', letterSpacing: '-0.02em', fontWeight: '900' }],
      },
      spacing: {
        // Espacements custom sections
        'section-desktop': '120px',
        'section-mobile': '80px',
      },
      maxWidth: {
        // Container principal
        'container': '1200px',
        'form': '600px',
      },
      animation: {
        // Animation marquee pour logo
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
```

### src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Styles globaux */
@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply font-sans text-noir bg-blanc antialiased;
  }

  /* Focus visible pour accessibilité */
  *:focus-visible {
    @apply outline-2 outline-offset-2 outline-noir;
  }
}

/* Composants réutilisables */
@layer components {
  /* Bouton primaire noir */
  .btn-primary {
    @apply bg-noir text-blanc px-12 py-4 text-base font-semibold transition-transform duration-200 hover:scale-105;
  }

  /* Input formulaire */
  .input-field {
    @apply w-full border border-noir px-4 py-4 text-base bg-blanc focus:border-2 focus:border-noir transition-all;
  }

  /* Card noire */
  .card-dark {
    @apply bg-noir text-blanc p-8;
  }

  /* Section container */
  .section-container {
    @apply max-w-container mx-auto px-6 md:px-12 py-section-mobile md:py-section-desktop;
  }
}

/* Utilities custom */
@layer utilities {
  /* Border dashed noir */
  .border-dashed-noir {
    border: 1px dashed #000;
  }

  /* Texte avec opacity réduite */
  .text-muted {
    @apply opacity-80;
  }
}
```

---

## 5. Stratégie d'animations

### Approche générale

**Objectif** : Animations subtiles et performantes qui enrichissent l'expérience sans la ralentir.

**Principe** : Moins c'est plus (less is more). Animations au scroll uniquement sur sections principales.

### Animations avec Framer Motion

#### A. Animations au chargement (Hero Section)

```javascript
// Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => {
  // Variantes pour titre
  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Variantes pour photo (avec scale)
  const photoVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 }
    }
  };

  return (
    <section>
      <motion.h1
        variants={titleVariants}
        initial="initial"
        animate="animate"
      >
        RYZLANE●
      </motion.h1>

      <motion.img
        variants={photoVariants}
        initial="initial"
        animate="animate"
        src="..."
        alt="..."
      />
    </section>
  );
};
```

**Déclencheur** : Au chargement de la page (`initial` + `animate`)

---

#### B. Animations au scroll (Sections)

```javascript
// PersonalitySection.jsx (exemple)
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PersonalitySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation une seule fois
    threshold: 0.2,     // Déclenche quand 20% de la section est visible
  });

  // Variantes container (pour stagger children)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // 100ms entre chaque enfant
      }
    }
  };

  // Variantes enfants (axes)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {SURVEY_AXES.map((axis, index) => (
        <motion.div key={index} variants={itemVariants}>
          <SurveyAxis {...axis} />
        </motion.div>
      ))}
    </motion.section>
  );
};
```

**Déclencheur** : Quand la section devient visible (Intersection Observer)

---

#### C. Hover animations (Boutons, Cards)

```javascript
// Bouton avec hover
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2 }}
  className="btn-primary"
>
  Behance
</motion.button>

// Card avec hover
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3 }}
  className="card-dark"
>
  {/* Contenu card */}
</motion.div>
```

**Déclencheur** : Hover/tap utilisateur

---

### Configuration performance

```javascript
// Variantes optimisées (transform + opacity uniquement)
const optimizedVariants = {
  hidden: {
    opacity: 0,
    y: 20 // transform: translateY → GPU accelerated
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // Easing naturel
    }
  }
};
```

**Principes d'optimisation** :
- Utiliser uniquement `transform` (translateX, translateY, scale) et `opacity` → GPU accelerated
- Éviter `width`, `height`, `top`, `left` → provoquent reflows
- `will-change` automatiquement géré par Framer Motion
- `triggerOnce: true` sur sections → économie de calculs

---

### Timing des animations

| Élément | Delay | Duration | Easing |
|---------|-------|----------|--------|
| Hero titre | 0ms | 600ms | easeOut |
| Hero baseline | 200ms | 600ms | easeOut |
| Hero texte | 400ms | 600ms | easeOut |
| Hero photo | 300ms | 600ms | easeOut |
| Sections (scroll) | 0ms | 600ms | easeOut |
| Stagger items | +100ms/item | 600ms | easeOut |
| Hover bouton | 0ms | 200ms | easeOut |
| Hover card | 0ms | 300ms | easeOut |

---

### Sections à animer

| Section | Type animation | Priorité |
|---------|----------------|----------|
| Hero | Fade in + slide up (au chargement) | CRITICAL |
| Personnalité | Fade in + stagger (au scroll) | HIGH |
| Design Skills | Fade in (au scroll) | MEDIUM |
| Dev Skills | Fade in (au scroll) | MEDIUM |
| Écriture | Fade in (au scroll) | MEDIUM |
| Contact | Fade in (au scroll) | MEDIUM |
| Footer | Pas d'animation | LOW |

---

## 6. Gestion du formulaire

### Solution technique : Formspree

**Pourquoi Formspree ?**
- Gratuit jusqu'à 50 soumissions/mois
- Aucun backend nécessaire
- Anti-spam intégré (reCAPTCHA optionnel)
- Notifications email automatiques
- Dashboard pour voir les soumissions

**Alternatives** :
- Web3Forms (100 soumissions/mois, similaire)
- EmailJS (200 soumissions/mois, configuration plus complexe)

---

### Setup Formspree

#### Étape 1 : Créer un compte

1. Aller sur https://formspree.io
2. Sign up (gratuit)
3. Create new form
4. Obtenir l'endpoint : `https://formspree.io/f/YOUR_FORM_ID`

#### Étape 2 : Configuration dans le code

**constants.js**
```javascript
// Configuration formulaire
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'; // À remplacer
```

**ContactForm.jsx** (implémentation complète)
```javascript
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FORMSPREE_ENDPOINT } from '../utils/constants';

const ContactForm = () => {
  // États
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  // Handlers
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        // Reset formulaire
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Auto-reset status après 5 secondes
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-container bg-gris-clair">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-form mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Travaillons ensemble
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nom */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Nom *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Votre nom"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="votre@email.com"
            />
          </div>

          {/* Sujet */}
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold mb-2">
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="input-field"
              placeholder="Sujet de votre message"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="input-field resize-y"
              placeholder="Votre message..."
            />
          </div>

          {/* Bouton submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>

          {/* Messages feedback */}
          {status === 'success' && (
            <p className="text-green-600 text-center font-semibold">
              ✓ Message envoyé avec succès ! Je vous réponds rapidement.
            </p>
          )}

          {status === 'error' && (
            <p className="text-red-600 text-center font-semibold">
              ✗ Erreur lors de l'envoi. Veuillez réessayer.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
```

---

### Validation et sécurité

**Validation côté client** :
- HTML5 : `required`, `type="email"`, `minlength`
- Regex email (Formspree le fait aussi côté serveur)

**Sécurité** :
- Formspree inclut anti-spam (honeypot)
- Rate limiting automatique
- Pas d'exposition d'email (Formspree relaie)
- HTTPS obligatoire

**UX** :
- États visuels clairs (idle, loading, success, error)
- Messages feedback en français
- Auto-reset formulaire après succès
- Désactivation bouton pendant envoi
- Placeholder descriptifs

---

## 7. Points d'attention techniques

### A. Smooth Scroll & Scroll Spy

**Problème** : Navigation doit highlight la section actuellement visible + scroll fluide.

**Solution** :

1. **Smooth scroll CSS** :
```css
/* index.css */
html {
  scroll-behavior: smooth;
}
```

2. **Ancres sections** :
```javascript
// Chaque section doit avoir un ID unique
<section id="design">...</section>
<section id="developpement">...</section>
<section id="ecriture">...</section>
<section id="contact">...</section>
```

3. **Scroll spy avec Intersection Observer** :
```javascript
// Navigation.jsx
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger au centre viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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

  return (
    <nav>
      {/* Liens avec classe active si section courante */}
      <a
        href="#design"
        className={activeSection === 'design' ? 'font-bold underline' : ''}
      >
        Design
      </a>
      {/* ... autres liens */}
    </nav>
  );
};
```

**Point d'attention** : Offset navigation sticky (80px) peut nécessiter `scroll-margin-top` sur sections.

```css
section {
  scroll-margin-top: 80px; /* Hauteur navigation */
}
```

---

### B. Navigation Sticky

**Problème** : Navigation doit rester fixée en haut au scroll.

**Solution** :
```javascript
// Navigation.jsx
<nav className="sticky top-0 z-50 bg-blanc border-b border-noir">
  {/* Contenu navigation */}
</nav>
```

**Points d'attention** :
- `z-index: 50` pour rester au-dessus de tout
- Background blanc opaque (pas transparent)
- Border-bottom pour délimiter visuellement

---

### C. Responsive Breakpoints

**Stratégie Mobile-First** :

```javascript
// Tailwind breakpoints
sm: 640px   // Mobile large / phablet
md: 768px   // Tablet portrait
lg: 1024px  // Tablet landscape / laptop
xl: 1280px  // Desktop
```

**Breakpoints critiques** :

| Breakpoint | Changements UI |
|------------|----------------|
| < 768px | Navigation hamburger, Hero stack vertical, Sondages 1 col |
| 768px - 1024px | Navigation horizontale, Sondages 2 cols, Hero 2 cols |
| >= 1024px | Layout complet desktop, Sondages 4 cols |

**Test checklist** :
- [ ] 320px (iPhone SE)
- [ ] 375px (iPhone 12/13)
- [ ] 390px (iPhone 14 Pro)
- [ ] 640px (transition mobile → tablet)
- [ ] 768px (iPad portrait)
- [ ] 1024px (iPad landscape)
- [ ] 1280px (desktop standard)
- [ ] 1920px (desktop large)

---

### D. Optimisation des performances

**Images** :
```html
<!-- Lazy loading -->
<img src="..." alt="..." loading="lazy" />

<!-- Compression : utiliser TinyPNG, Squoosh ou ImageOptim -->
<!-- Format : WebP si possible, fallback JPEG -->
```

**Framer Motion** :
```javascript
// Optimisation : triggerOnce pour animations scroll
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }} // once: true = économie CPU
>
```

**Vite optimisations** :
- Code splitting automatique
- Tree shaking
- Minification CSS/JS

**Lighthouse targets** :
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

---

### E. Accessibilité

**Contraste** :
- Noir (#000) sur blanc (#FFF) = ratio 21:1 ✓ (parfait)
- Blanc (#FFF) sur noir (#000) = ratio 21:1 ✓ (parfait)

**Focus visible** :
```css
/* index.css */
*:focus-visible {
  @apply outline-2 outline-offset-2 outline-noir;
}
```

**Labels formulaire** :
```javascript
// Toujours associer label avec input
<label htmlFor="email">Email *</label>
<input id="email" name="email" type="email" />
```

**Navigation clavier** :
- Tab : navigation entre éléments interactifs
- Enter : activation boutons/liens
- Espace : activation boutons

**Alt text** :
```html
<img src="photo-ryzlane.jpg" alt="Photo portrait de Ryzlane" />
```

**ARIA labels** (si nécessaire) :
```javascript
// Hamburger menu mobile
<button aria-label="Ouvrir le menu" aria-expanded={isMenuOpen}>
  {/* Icône burger */}
</button>
```

**Test checklist** :
- [ ] Navigation clavier complète
- [ ] Focus visible partout
- [ ] Labels formulaire associés
- [ ] Alt text sur images
- [ ] Contraste suffisant (OK noir/blanc)
- [ ] Test lecteur écran (VoiceOver/NVDA)

---

## 8. Questions de clarification

Avant de démarrer l'implémentation, voici les points à clarifier :

### A. Contenu texte

❓ **Textes à fournir** :

1. **Hero section** :
   - Texte répétitif "Je suis le corps..." → Quel texte exact ?
   - Longueur : 2-3 paragraphes ?

2. **Section Design** :
   - Description compétences design (1 paragraphe) → Texte ?

3. **Section Dev** :
   - Description compétences développement (1 paragraphe) → Texte ?
   - Nom du "Projet phare" → Quel projet ?
   - Lien GitHub du projet ?

4. **Section Écriture** :
   - Articles de rédaction : titres + liens (2-3 articles) ?

**→ Si pas encore prêt** : J'utiliserai du placeholder avec commentaires `// TODO: Remplacer`

---

### B. Liens externes

❓ **Liens réseaux sociaux à configurer** :

- Behance : URL complète ?
- GitHub : Username ou URL ?
- LinkedIn : URL ?
- Instagram "À demi-rêve" : URL ?

**→ Si pas encore prêt** : J'utiliserai des placeholders commentés dans `constants.js`

---

### C. Assets visuels

❓ **Photo** :

- Avez-vous une photo circulaire haute qualité (800x800px minimum) ?
- Format : JPEG ou PNG ?
- Si pas encore : J'utiliserai un placeholder gris avec texte "Photo 400x400"

❓ **Favicon** :

- Avez-vous un favicon .ico ou .png ?
- Si pas encore : Je créerai un favicon basique avec initiales "R"

❓ **OG Image** (partages sociaux) :

- Avez-vous une image 1200x630px pour partages Facebook/Twitter ?
- Si pas encore : Non prioritaire, on peut ajouter plus tard

---

### D. Logo "LOREM IPSUM"

❓ **Logo répété** :

- "LOREM IPSUM" est le texte final ou placeholder ?
- Si placeholder → Quel texte voulez-vous répété ?
- Effet marquee (scroll horizontal automatique) : oui ou non ?

**Ma suggestion** : Soit "RYZLANE" répété, soit "LOREM IPSUM" si esthétique voulue.

---

### E. Sondages IFOP - Données exactes

❓ **4 axes de sondage** :

Le PRD mentionne :
1. Extravertie ↔ Introvertie
2. Théoricienne ↔ Praticienne
3. Multi-tâches ↔ Focus laser
4. Sens de l'esthétique ↔ Sens du fonctionnel

**Positions des curseurs** (0-100, où 0 = label top, 100 = label bottom) :

- Axe 1 : ? (ex: 70 = plutôt introvertie)
- Axe 2 : ?
- Axe 3 : ?
- Axe 4 : ?

**→ Si pas encore défini** : J'utiliserai des valeurs intermédiaires (50) en placeholder.

---

### F. Formspree

❓ **Email de réception** :

- Quel email doit recevoir les soumissions du formulaire ?
- Je peux créer le compte Formspree pour vous ou vous le créez ?

**→ Ma suggestion** : Vous créez le compte avec votre email, puis me donnez l'endpoint (`https://formspree.io/f/YOUR_ID`)

---

### G. Déploiement

❓ **Hébergement** :

- Vercel (recommandé, gratuit, déploiement auto) ?
- Netlify (alternative similaire) ?
- Autre ?

❓ **Nom de domaine** :

- Domaine custom (ex: ryzlane.com) ?
- Sous-domaine Vercel (ex: portfolio-ryzlane.vercel.app) OK ?

**→ Non prioritaire** : On peut déployer sur Vercel gratuit d'abord, ajouter domaine plus tard.

---

### H. Préférences de style

❓ **Animations** :

- Niveau d'animation : subtil (actuel) ou plus prononcé ?
- Marquee logo : oui ou non ?

❓ **Menu mobile** :

- Menu déroulant fullscreen (PRD) ou sidebar latéral ?
- Animation d'ouverture : slide ou fade ?

**→ Ma suggestion** : Suivre exactement le PRD (fullscreen, fade).

---

## Résumé : Ready to Start?

### ✅ Ce qui est défini :

- Architecture complète
- Stack technique
- Design system (noir/blanc, Tailwind config)
- Stratégie animations (Framer Motion)
- Ordre de développement (10 phases)
- Intégration formulaire (Formspree)
- Points techniques (scroll spy, responsive, a11y)

### ❓ Ce qui nécessite clarification :

1. Contenu texte (hero, design, dev, écriture)
2. Liens externes (Behance, GitHub, LinkedIn, Instagram)
3. Photo haute qualité (si disponible)
4. Logo répété : "LOREM IPSUM" ou autre texte ?
5. Positions curseurs sondages IFOP
6. Endpoint Formspree (après création compte)

### 🚀 Proposition :

**Option 1** : Vous fournissez tout le contenu maintenant → Implémentation complète directe

**Option 2** : Je commence avec placeholders → Vous remplacez le contenu après
- Avantage : Développement plus rapide
- Inconvénient : Nécessite étape de remplacement contenu

### 📝 Prochaine étape :

**Dites-moi** :

1. Option 1 ou 2 ?
2. Si Option 2 : Je démarre la Phase 1 (Setup) immédiatement ?
3. Réponses aux questions A-H (même partielles) ?

**Je suis prêt à coder dès votre feu vert** ! 🚀

---

*Plan créé le 12 février 2025*
*Version 1.0*
*Prêt pour validation et implémentation*
