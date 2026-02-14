# Portfolio Ryzlane

Portfolio one-page minimaliste en noir et blanc présentant les compétences multidisciplinaires : design, développement, écriture et entrepreneuriat.

## 🎨 Design

- **Style** : Minimaliste brutal, noir et blanc uniquement
- **Typographie** : Inter (système fonts)
- **Layout** : One-page avec smooth scroll navigation
- **Responsive** : Mobile-first design

## 🛠️ Stack Technique

- **Frontend** : React 18
- **Build** : Vite
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion (à ajouter)
- **Formulaire** : Formspree

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement (port 3000)
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

## 📁 Structure du projet

```
portfolio-ryzlane/
├── src/
│   ├── components/          # Composants React
│   │   ├── Navigation.jsx   # Navigation sticky
│   │   ├── Hero.jsx         # Section hero
│   │   ├── PersonalitySection.jsx  # Sondages IFOP
│   │   ├── DesignSkills.jsx
│   │   ├── DevSkills.jsx
│   │   ├── WritingSection.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── constants.js     # Toutes les constantes et textes
│   ├── App.jsx              # Composant principal
│   ├── main.jsx             # Point d'entrée
│   └── index.css            # Styles globaux + Tailwind
├── public/                  # Assets statiques
├── index.html
└── README.md
```

## ✏️ Contenu à remplacer

**Tous les placeholders sont marqués avec des commentaires `// TODO:`**

### 1. Fichier `src/utils/constants.js`

Ce fichier contient TOUT le contenu du site. Remplacez les placeholders :

- **LINKS** : Vos liens Behance, GitHub, LinkedIn, Instagram
- **FORMSPREE_ENDPOINT** : Votre endpoint Formspree (après création compte)
- **HERO_TEXT** : Votre texte d'introduction personnalisé
- **LOGO_TEXT** : Texte logo navigation (ou gardez "LOREM IPSUM")
- **SURVEY_AXES** : Ajustez les positions des curseurs (0-100) selon votre personnalité
- **DESIGN_SECTION** : Description de vos compétences design
- **DEV_SECTION** : Description compétences dev + nom projet phare
- **WRITING_SECTION** : Titres et liens de vos articles

### 2. Photo

Remplacez le placeholder dans `Hero.jsx` :

```jsx
// Ligne à modifier dans src/components/Hero.jsx
<img src="/photo-ryzlane.jpg" alt="Photo de Ryzlane" />
```

Ajoutez votre photo dans `/public/photo-ryzlane.jpg` (800x800px minimum).

### 3. Formspree

1. Créez un compte sur [https://formspree.io](https://formspree.io) (gratuit)
2. Créez un nouveau formulaire
3. Copiez l'endpoint `https://formspree.io/f/YOUR_FORM_ID`
4. Remplacez dans `constants.js` → `FORMSPREE_ENDPOINT`

## 🎯 Prochaines étapes

### Fonctionnalités à ajouter

- [ ] **Animations Framer Motion** (fade in, slide up au scroll)
- [ ] **Scroll spy** (highlight section active dans navigation)
- [ ] **Menu hamburger mobile** (navigation responsive)
- [ ] **Logo marquee** (animation scroll horizontal)
- [ ] **Hover effects** améliorés (scale sur boutons/cards)

### Tests à faire

- [ ] Test responsive (320px, 768px, 1024px, 1280px)
- [ ] Test formulaire contact (envoi réel)
- [ ] Test tous les liens externes
- [ ] Test navigation smooth scroll
- [ ] Audit Lighthouse (viser >90)

## 🚀 Déploiement

### Vercel (recommandé)

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

Ou directement via l'interface Vercel en connectant votre repo GitHub.

### Netlify

Glissez-déposez le dossier `dist` (après `npm run build`) sur [https://app.netlify.com/drop](https://app.netlify.com/drop)

## 📝 Configuration actuelle

- **Port dev** : 3000
- **Couleurs** : Noir (#000), Blanc (#FFF), Gris clair (#F5F5F5)
- **Breakpoints** : 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- **Container max-width** : 1200px

## 📚 Documentation

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Formspree](https://formspree.io/docs)

---

**Développé avec Claude Code** 🤖
