# Portfolio Ryzlane - Guide Claude Code

Ce fichier documente l'historique des décisions et l'état du projet pour faciliter la collaboration avec Claude Code.

---

## 🎯 Description du projet

Portfolio one-page minimaliste en **noir et blanc** présentant les compétences multidisciplinaires :
- Design
- Développement
- Écriture
- Entrepreneuriat

**Style** : Brutal, minimaliste, typographie forte

---

## 🏗️ Stack Technique

- **Frontend** : React 18 + Vite
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Formulaire** : Formspree (à configurer)
- **Déploiement** : Vercel (prévu)

---

## ✅ État actuel du projet (12 février 2025)

### Complété

#### 1. Structure et Configuration ✅
- [x] Projet Vite + React initialisé
- [x] Tailwind CSS configuré
- [x] Tous les composants créés et fonctionnels
- [x] Build fonctionnel

#### 2. Composants implémentés ✅
- [x] **Navigation** - Sticky avec scroll spy
- [x] **Hero** - Section principale avec animations
- [x] **PersonalitySection** - Sondages IFOP (4 axes)
- [x] **DesignSkills** - Section compétences design
- [x] **DevSkills** - Section développement avec style terminal
- [x] **WritingSection** - Articles + Instagram
- [x] **ContactForm** - Formulaire avec états (idle/loading/success/error)
- [x] **Footer** - Liens sociaux
- [x] **PageTransition** - Transitions de page
- [x] **ScrollToTop** - Bouton retour en haut

#### 3. Fonctionnalités ✅
- [x] Animations Framer Motion (fade in, slide up, stagger)
- [x] Scroll spy (highlight section active)
- [x] Smooth scroll vers sections
- [x] Menu hamburger mobile
- [x] Responsive design (mobile-first)

---

## 🎨 Décisions de design prises

### Navigation (modifiée 12 février 2025)

**Structure** :
```
┌─────────────────────────────────────────────┐
│  BANDE NOIRE : LOREM IPSUM (défilement)    │  ← Fond noir, texte blanc
├─────────────────────────────────────────────┤
│ [Design] [Développement] [Écriture] [Ent.] │  ← Boutons encadrés, toute la box cliquable
└─────────────────────────────────────────────┘
```

**Caractéristiques** :
- Bande noire séparée en haut avec effet marquee
- Navigation en dessous avec boutons dans des cadres noirs
- **Toute la box est cliquable**, pas juste le texte
- Hover : fond gris clair
- Section active : fond noir + texte blanc
- Liens : Design, Développement, Écriture, **Entrepreunarianat** (pas "Contact")

### Typographie ✅ (configuré 12 février 2025)

**Polices** :
- **Corps de texte** : Roboto Mono ✅ (Google Fonts)
- **Titres** : Rowdies ✅ (Google Fonts)
- **Monospace** : Roboto Mono ✅ (Google Fonts)

**Configuration** :
- Fichier : `tailwind.config.js` → `fontFamily`
- Import : `index.html` → Google Fonts
- Classes : `font-sans` (Roboto Mono), `font-display` (Rowdies), `font-mono` (Roboto Mono)

**Utilisation** :
- `font-sans` : Corps de texte, paragraphes
- `font-display` : Tous les titres h1, h2, h3
- `font-mono` : Section Dev terminal

---

## 📝 Ce qui reste à faire

### PRIORITÉ HAUTE 🔴

1. **Police des titres**
   - [ ] Obtenir le nom de la police custom
   - [ ] OU obtenir les fichiers (.woff2)
   - [ ] Configurer dans Tailwind

2. **Contenu personnalisé**
   - [ ] Remplacer tous les placeholders dans `constants.js`
   - [ ] Liens externes (Behance, GitHub, LinkedIn, Instagram)
   - [ ] Photo principale (`/public/photo-ryzlane.jpg`)
   - [ ] Textes (Hero, Design, Dev, Écriture)

3. **Formspree**
   - [ ] Créer compte sur formspree.io
   - [ ] Obtenir l'endpoint
   - [ ] Remplacer dans `constants.js` → `FORMSPREE_ENDPOINT`

### PRIORITÉ MOYENNE 🟡

4. **Ajustements de contenu**
   - [ ] Positions curseurs sondages IFOP (0-100)
   - [ ] Texte du marquee (remplacer "LOREM IPSUM" ?)
   - [ ] Articles de rédaction (titres + liens)
   - [ ] Nom du projet phare (section Dev)

5. **Section Entrepreunarianat**
   - [ ] Décider si on renomme la section Contact ou si on crée une nouvelle section
   - [ ] Contenu de cette section

### PRIORITÉ BASSE 🟢

6. **Assets**
   - [ ] Favicon personnalisé
   - [ ] OG Image pour partages sociaux (1200x630px)

7. **Tests finaux**
   - [ ] Test responsive (320px, 768px, 1024px, 1280px)
   - [ ] Test formulaire (envoi réel)
   - [ ] Test tous les liens externes
   - [ ] Audit Lighthouse (viser >90)

8. **Déploiement**
   - [ ] Déployer sur Vercel
   - [ ] Configurer domaine custom (si souhaité)

---

## 🎨 Design System

### Couleurs
```javascript
noir: '#000000'        // Fond, texte, borders
blanc: '#FFFFFF'       // Fond, texte
gris-clair: '#F5F5F5'  // Hover, backgrounds secondaires
```

### Typographie actuelle
```javascript
// Corps de texte
font-family: 'Roboto Mono', monospace

// Tailles
hero: 96px (desktop) / 48px (mobile)
body: 16px
navigation: 14px
```

### Spacing
```javascript
section-desktop: 120px
section-mobile: 80px
container-max-width: 1200px
```

### Breakpoints
```javascript
sm: 640px   // Mobile large
md: 768px   // Tablet (transition majeure)
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
```

---

## 📁 Structure des fichiers

```
portfolio-ryzlane/
├── public/
│   ├── photo-ryzlane.jpg      # TODO: À ajouter
│   ├── favicon.ico             # TODO: Personnaliser
│   └── og-image.jpg            # TODO: Créer
│
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # ✅ Modifié (bande noire + boutons)
│   │   ├── Hero.jsx            # ✅ Complet
│   │   ├── PersonalitySection.jsx  # ✅ Complet
│   │   ├── DesignSkills.jsx    # ✅ Complet
│   │   ├── DevSkills.jsx       # ✅ Complet
│   │   ├── WritingSection.jsx  # ✅ Complet
│   │   ├── ContactForm.jsx     # ✅ Complet (config Formspree à faire)
│   │   ├── Footer.jsx          # ✅ Complet
│   │   ├── PageTransition.jsx  # ✅ Complet
│   │   └── ScrollToTop.jsx     # ✅ Complet
│   │
│   ├── utils/
│   │   └── constants.js        # ⏳ Placeholders à remplacer
│   │
│   ├── App.jsx                 # ✅ Complet
│   ├── main.jsx                # ✅ Complet
│   └── index.css               # ✅ Complet
│
├── index.html                  # ✅ Roboto Mono ajouté
├── tailwind.config.js          # ✅ Roboto Mono configuré
├── vite.config.js              # ✅ Complet
├── package.json                # ✅ Complet
│
├── README.md                   # ✅ Documentation utilisateur
├── PLAN_DEVELOPPEMENT.md       # ✅ Plan détaillé (1500+ lignes)
├── CONTENU_A_REMPLACER.md      # ✅ Checklist contenu
├── DEPLOIEMENT.md              # ✅ Guide déploiement
└── CLAUDE.md                   # 📍 Ce fichier
```

---

## 🔧 Commandes utiles

```bash
# Lancer le serveur de dev
npm run dev          # http://localhost:3000

# Build pour production
npm run build

# Preview du build
npm run preview
```

---

## 💡 Conventions de code

### React
- Composants fonctionnels uniquement
- Hooks : useState, useEffect
- Props destructurées

### Styling
- Tailwind CSS utility-first
- Classes custom dans `index.css` (`.btn-primary`, `.card-dark`, etc.)
- Pas de CSS modules

### Animations
- Framer Motion pour toutes les animations
- `triggerOnce: true` pour économie CPU
- Uniquement `transform` et `opacity` (GPU accelerated)

### Nommage
- Composants : PascalCase (`Hero.jsx`)
- Constantes : UPPER_SNAKE_CASE (`HERO_TEXT`)
- Variables : camelCase (`activeSection`)

---

## 📚 Ressources

### Documentation
- [React 18](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Formspree](https://formspree.io)

### Polices
- [Google Fonts - Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)
- [Transfonter](https://transfonter.org/) - Convertir polices en format web

### Outils
- [TinyPNG](https://tinypng.com) - Compression images
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Audit performance
- [Vercel](https://vercel.com) - Déploiement

---

## 🐛 Problèmes connus

Aucun problème connu pour le moment. Le site fonctionne correctement en local.

---

## 📝 Notes de session

### Session du 12 février 2025

**Modifications effectuées** :
1. ✅ Navigation refondue (bande noire + boutons encadrés)
2. ✅ Lien "Contact" remplacé par "Entrepreunarianat"
3. ✅ Roboto Mono installé pour le corps de texte
4. ⏳ Attente police custom pour les titres

### Session du 12 février 2025 (Après-midi) - Design UX/UI

**Modifications Navigation** :
1. ✅ Boutons collés ensemble (suppression du `gap-6`)
2. ✅ Boutons alignés à droite (`justify-end`)
3. ✅ **Bug fixé** : Premier bouton sélectionné par défaut
   - Ajout condition `window.scrollY > 100` dans l'observer
   - Ajout listener scroll pour reset quand en haut de page

**Modifications Espacement** :
1. ✅ Espacement navbar → Hero : **40px** (`pt-10`)
2. ✅ Espacement entre sections : **80px total** (`py-10` = 40px top + 40px bottom)
3. ✅ Hero collé à PersonalitySection (`pb-0` sur Hero)
4. ⚠️ Note : Vite ne recompilait pas les changements dans `tailwind.config.js`, passage à valeurs hardcodées dans `index.css`

**Refonte PersonalitySection (sondages IFOP)** :
1. ✅ Section collée au Hero
   - Hero : `pb-0` au lieu de `pb-10`
   - PersonalitySection container : `border-x-2 border-b-2` (pas de border-top pour fusion)
2. ✅ Items prennent toute la hauteur
   - Wrapper items : `h-full`
   - Items : `flex flex-col` avec `mb-auto` et `mt-auto` pour alignment
3. ✅ Bordures en pointillés entre items
   - `border-t-2 border-dashed border-noir` sur tous les items (haut)
   - `lg:border-r-2 lg:border-dashed` sur items pas derniers de ligne (droite)
   - `lg:border-l-2 lg:border-dashed` sur items pas premiers de ligne (gauche)
   - Pas de bordures sur côtés touchant le cadre extérieur
4. ✅ Espacement entre items : **16px** (`gap-4` dans la grid)
5. ✅ Curseurs alignés
   - Textes du haut : `min-h-[3rem] flex items-end justify-center`
   - Textes du bas : `min-h-[3rem] flex items-start justify-center`
   - Garantit alignement même si texte sur 2 lignes

**Modifications Hero** :
1. ✅ Baseline "Un seul cerveau, mille fenêtres" en **bold** (`font-bold`)
2. ✅ Ajout bouton "LinkedIn" sous le texte répétitif
   - Style : `btn-primary` (bouton noir comme le reste de la page)
   - Lien : `LINKS.linkedin`
   - Animations : fade in + hover scale + tap scale
   - Icône LinkedIn (react-icons/fa) avant le texte
3. ✅ Ajout lien "Télécharger mon CV" à côté du bouton LinkedIn
   - Style : même typo et graisse que le corps de texte (text-sm), soulignement au hover
   - Icône téléchargement (FaDownload) avant le texte
   - Lien vers `/cv.pdf` avec attribut download
4. ✅ Point "●" remplacé par un vrai point "." dans le titre "RYZLANE."
5. ✅ Photo mise à jour : `/photo-ryzlane.JPG` (meilleure qualité, extension en majuscules)

**Modifications Boutons** :
1. ✅ Effet hover amélioré pour tous les boutons `.btn-primary`
   - Normal : fond noir, texte blanc, bordure noire
   - Hover : fond blanc, texte noir, bordure noire + scale 1.05
   - Transition fluide sur toutes les propriétés

**Modifications DesignSkills** :
1. ✅ Padding vertical augmenté : **130px** en haut et en bas (`py-[130px]`)
   - Padding horizontal conservé : `px-8 md:px-12`

**Fichiers modifiés** :
- `src/components/Navigation.jsx` (boutons alignés, bug scroll spy)
- `src/components/Hero.jsx` (`pb-0`, baseline bold, bouton LinkedIn)
- `src/components/PersonalitySection.jsx` (refonte complète bordures et layout)
- `src/index.css` (`py-10` hardcodé dans `.section-container`)

**Prochaines étapes** :
- Obtenir le nom/fichiers de la police custom des titres
- Décider du contenu de la section Entrepreunarianat
- Commencer à remplir les placeholders de contenu

---

**Dernière mise à jour** : 12 février 2025, 17:00
**Version** : 1.1
**Statut** : En développement actif
