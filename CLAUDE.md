# Portfolio Ryzlane - Guide Claude Code

## Description du projet

Portfolio one-page minimaliste en **noir et blanc** pour Ryzlane Arsac-Gothiere.
**Style** : Brutal, minimaliste, typographie forte.
**Dark mode** : Supporte via toggle (class-based, persistance localStorage + detection systeme).

**URL principale** : https://ryzlane.com (Railway)
**URL secondaire** : https://ryzlane.github.io/portfolio-ryzlane/ (GitHub Pages)
**Repo** : https://github.com/Ryzlane/portfolio-ryzlane

---

## Stack Technique

- **Frontend** : React 18 + Vite
- **Styling** : Tailwind CSS (darkMode: 'class')
- **Animations** : Framer Motion
- **Formulaire contact** : FormSubmit.co (popup flottante)
- **Deploiement ryzlane.com** : Railway (projet "Portfolio", service `portfolio-ryzlane`), deploiement automatique a chaque push sur `master`. Build `npm run build`, demarrage `npm start` (`serve -s dist -l 3000`). Cloudflare gere uniquement le DNS du domaine.
- **Deploiement GitHub Pages** : manuel via `npm run deploy` (branche `gh-pages`)
- **Base path** : `VITE_BASE_PATH` (variable Railway = `/`) ; par defaut `/portfolio-ryzlane/` pour GitHub Pages (voir `vite.config.js`)
- **Si ryzlane.com ne se met pas a jour** : verifier que le plan Railway est actif, puis l'onglet Deployments du service (build en echec ?)

---

## Etat actuel (6 novembre 2026)

### Contenu personnalise
- [x] Texte hero (positionnement "Product Owner · Product Builder", baseline, texte descriptif, badge de disponibilite)
- [x] Marquee : 4 items (CODER L'ESTHETIQUE, DESIGNER LA LOGIQUE, ECRIRE L'INVISIBLE, ENTREPRENDRE L'AUDACE)
- [x] Lien LinkedIn
- [x] Photo de profil (`public/photo-ryzlane.JPG`)
- [x] Logo R. (`public/logo.png`, `public/logo-square.png`)
- [x] Favicon SVG inline (data URI dans index.html)
- [x] CV telecharable (`public/cv.pdf`)
- [x] Curseurs personnalite (Extravertie 53/Introvertie 47, Theoricienne 25/Praticienne 75, Multi-taches 33/Focus laser 67, Esthetique 58/Fonctionnel 42)
- [x] Dark mode avec toggle soleil/lune dans la navigation
- [x] Section Entrepreneuriat avec boutons doted. et Instagram
- [x] Liens projets dev (Kaan Roussel, OptionBattle, Debunker)
- [x] Espaces insecables sur "Claude Code" et "from scratch"
- [ ] Liens Behance, GitHub (encore en TODO)
- [ ] OG Image pour partages sociaux

### Sections et titres (ordre d'affichage)
- **Entrepreneuriat** : "Le grand saut" (remontee juste apres la personnalite)
- **Produit** : "Du besoin a la mise en ligne" (ExperienceSection + PRODUCT_SECTION)
- **Design** : "Au pixel pres"
- **Developpement** : "Des lignes par milliers" / sous-titre projets : "Laboratoire"
- **Ecriture** : Redaction + Ecriture creative (bouton "Reves" vers Instagram)

### Composants
- **Navigation** : Fixed, marquee noire + nav avec logo R. + toggle dark mode (soleil/lune). Menu complet a partir de `lg` (1024px), menu hamburger en dessous (5 liens)
- **Hero** : Grille 3fr/2fr, photo ronde (carre calcule sur la largeur de colonne), boutons LinkedIn + CV
- **ExperienceSection** : Composant generique (description + liste d'experiences), utilise pour Produit (section Communication retiree le 6 novembre 2026)
- **PersonalitySection** : 4 axes avec curseurs animes
- **DesignSkills** : Section design avec description + bouton Behance
- **DevSkills** : Section dev avec description + liste projets "Laboratoire"
- **WritingSection** : Articles redaction (gauche) + ecriture creative ferree a droite (bouton "Reves")
- **EntrepreneuriatSection** : Description doted. + boutons Decouvrir (logo doted. inline SVG) et Editorial (Instagram)
- **ScrollToTop** : Formulaire contact flottant (FormSubmit.co) - titre "Me faire un coucou"
- **Footer** : Liens sociaux

---

## Architecture cles

### Fichier de configuration central
`src/utils/constants.js` contient TOUT le contenu editable :
- `LINKS` : URLs externes
- `HERO_TEXT` : Titre, baseline, texte descriptif
- `MARQUEE_ITEMS` : Tableau des 4 textes de la banniere
- `SURVEY_AXES` : Positions des curseurs personnalite
- `DESIGN_SECTION`, `DEV_SECTION`, `WRITING_SECTION` : Contenu des sections
- `ENTREPRENEURIAT_SECTION` : Section entrepreneuriat avec boutons
- `PRODUCT_SECTION` : Section experiences (role, org, period, summary)
- `NAV_LINKS` : Liens de navigation (5 sections, meme ordre que App.jsx)
- `FOOTER` : Copyright et liens sociaux

### Assets dans `public/`
- `photo-ryzlane.JPG` : Photo de profil
- `logo.png` : Logo original (1536x1024, rectangulaire)
- `logo-square.png` : Logo recadre carre (utilise dans la nav)
- `favicon-cropped.png` : Favicon recadre
- `doted-logo.svg` : Logo doted. (non utilise directement, SVG inline dans le composant)
- `favicon-32.png`, `favicon-16.png`, `favicon.ico` : Favicons (generes mais non utilises, favicon = SVG inline)
- `apple-touch-icon.png` : Icone Apple
- `cv.pdf` : CV telecharable

### Navigation fixe
Le menu est `fixed top-0`, avec un spacer `pt-[90px]` dans App.jsx pour compenser.

### Boutons
Tous les boutons CTA (Behance, Reves, Decouvrir, Editorial) ont une largeur fixe `w-48` pour l'uniformite.

---

## Design System

### Couleurs
- `noir: '#1a1a1a'`
- `blanc: '#FFFFFF'`
- `gris-clair: '#F5F5F5'`
- Dark mode : bg `#1a1a1a`, texte `#F5F5F5`, borders `#F5F5F5`

### Polices
- **Corps** : Roboto Mono (`font-sans`)
- **Titres** : Rowdies (`font-display`)
- **Terminal** : Roboto Mono (`font-mono`)

### Breakpoints
- `md: 768px` (transition mobile/desktop principale)

---

## Commandes

```bash
npm run dev        # Serveur local (port 3000+)
npm run build      # Build production
npm run deploy     # Deploy GitHub Pages (build + gh-pages)
git push           # Deploie ryzlane.com via Railway (branche master)
```

---

**Derniere mise a jour** : 6 novembre 2026
