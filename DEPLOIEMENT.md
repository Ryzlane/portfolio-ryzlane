# 🚀 Guide de Déploiement - Portfolio Ryzlane

Ce guide vous accompagne pas à pas pour déployer votre portfolio en ligne.

---

## 📋 Pré-requis avant déploiement

### 1. Contenu à jour

- [ ] Tous les placeholders remplacés dans `src/utils/constants.js`
- [ ] Photo ajoutée dans `/public/photo-ryzlane.jpg`
- [ ] Liens externes vérifiés (Behance, GitHub, LinkedIn, Instagram)
- [ ] Endpoint Formspree configuré

### 2. Tests locaux

```bash
# Tester le site en local
npm run dev

# Vérifier que tout fonctionne :
# - Navigation smooth scroll ✓
# - Animations au scroll ✓
# - Formulaire contact ✓
# - Menu mobile ✓
# - Responsive ✓
```

### 3. Build de production

```bash
# Créer le build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

Si le build réussit sans erreur, vous êtes prêt pour le déploiement ! ✅

---

## 🎯 Option 1 : Déploiement sur Vercel (Recommandé)

**Pourquoi Vercel ?**
- Gratuit pour projets personnels
- Déploiement automatique depuis GitHub
- HTTPS automatique
- Performance optimale (CDN global)
- Domaine custom gratuit

### Méthode A : Via GitHub (Recommandé)

#### Étape 1 : Créer un repo GitHub

```bash
# Initialiser Git (si pas encore fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: Portfolio Ryzlane complet"

# Créer un repo sur GitHub.com (nommez-le "portfolio-ryzlane")
# Puis lier votre repo local :
git remote add origin https://github.com/VOTRE_USERNAME/portfolio-ryzlane.git
git branch -M main
git push -u origin main
```

#### Étape 2 : Connecter à Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. **Sign up** avec votre compte GitHub
3. Cliquez sur **"New Project"**
4. Importez votre repo `portfolio-ryzlane`
5. Vercel détecte automatiquement Vite :
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Cliquez sur **"Deploy"**

⏱️ **Déploiement en cours** (30-60 secondes)...

✅ **Déployé !** Vous obtenez une URL : `https://portfolio-ryzlane.vercel.app`

#### Étape 3 : Domaine custom (optionnel)

1. Dans Vercel, allez dans **Settings > Domains**
2. Ajoutez votre domaine (ex: `ryzlane.com`)
3. Suivez les instructions pour configurer les DNS

---

### Méthode B : Via CLI Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer (suivez les prompts)
vercel

# Pour deployer en production
vercel --prod
```

---

## 🌐 Option 2 : Déploiement sur Netlify

**Pourquoi Netlify ?**
- Gratuit pour projets personnels
- Interface simple
- Déploiement par drag & drop
- Forms handling intégré

### Méthode A : Drag & Drop

1. Buildez le projet :
   ```bash
   npm run build
   ```

2. Allez sur [app.netlify.com/drop](https://app.netlify.com/drop)

3. Glissez-déposez le dossier **`dist/`**

4. ✅ Déployé instantanément ! URL : `https://random-name-123.netlify.app`

5. Personnalisez le nom :
   - Allez dans **Site settings > Site details**
   - Changez le nom : `portfolio-ryzlane.netlify.app`

### Méthode B : Via GitHub

1. Créez un repo GitHub (voir Vercel Méthode A, Étape 1)

2. Sur [netlify.com](https://netlify.com) :
   - **New site from Git**
   - Connectez GitHub
   - Sélectionnez `portfolio-ryzlane`
   - Build settings :
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - **Deploy site**

3. ✅ Déployé !

---

## ☁️ Option 3 : Autres plateformes

### GitHub Pages

```bash
# Installer gh-pages
npm install -D gh-pages

# Ajouter dans package.json :
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}

# Déployer
npm run deploy
```

URL : `https://VOTRE_USERNAME.github.io/portfolio-ryzlane`

### Cloudflare Pages

1. Push sur GitHub
2. Allez sur [pages.cloudflare.com](https://pages.cloudflare.com)
3. Connectez votre repo
4. Build settings : identiques à Vercel/Netlify
5. Deploy

---

## 🔧 Configuration post-déploiement

### 1. Mettre à jour les URLs

Une fois déployé, mettez à jour les URLs dans votre code :

**`index.html`** (ligne 13 et 17) :
```html
<!-- Remplacez -->
<link rel="canonical" href="https://ryzlane.com" />
<meta property="og:url" content="https://ryzlane.com" />

<!-- Par votre vraie URL -->
<link rel="canonical" href="https://portfolio-ryzlane.vercel.app" />
<meta property="og:url" content="https://portfolio-ryzlane.vercel.app" />
```

### 2. Tester le formulaire contact

Envoyez un message test via le formulaire pour vérifier que Formspree fonctionne.

### 3. Vérifier les liens

Testez tous les liens externes :
- Behance
- GitHub
- LinkedIn
- Instagram
- Articles

### 4. Test responsive

Testez sur plusieurs appareils :
- Mobile (iPhone, Android)
- Tablet (iPad)
- Desktop

### 5. Audit performance

Lancez un Lighthouse audit :
1. Ouvrez le site en production
2. DevTools (F12) > Lighthouse
3. Generate report

**Cibles** :
- Performance : > 90
- Accessibility : > 95
- Best Practices : > 90
- SEO : > 90

---

## 🔄 Mises à jour futures

### Avec GitHub + Vercel/Netlify (automatique)

```bash
# Faites vos modifications localement
# Puis :
git add .
git commit -m "feat: description de la modification"
git push origin main

# Vercel/Netlify redéploie automatiquement ! 🎉
```

### Sans Git (manuellement)

```bash
# Rebuild
npm run build

# Glissez-déposez le nouveau dossier dist/ sur Netlify
# Ou relancez : vercel --prod
```

---

## 🛠️ Troubleshooting

### Problème : Build échoue sur Vercel/Netlify

**Solution** : Vérifiez les erreurs dans les logs. Souvent lié à :
- Dépendances manquantes → `npm install`
- Node version incompatible → Ajoutez dans package.json :
  ```json
  "engines": {
    "node": ">=18.0.0"
  }
  ```

### Problème : Animations ne fonctionnent pas

**Solution** : Vérifiez que Framer Motion est dans `dependencies` (pas `devDependencies`) :

```bash
npm install framer-motion react-intersection-observer
```

### Problème : Images ne s'affichent pas

**Solution** : Vérifiez les chemins. Sur Vercel/Netlify, les assets doivent être dans `/public/` et référencés avec `/nom-image.jpg` (slash au début).

### Problème : Formulaire ne fonctionne pas

**Solution** : Vérifiez :
1. Endpoint Formspree correct dans `constants.js`
2. Pas d'erreurs CORS (Formspree doit autoriser votre domaine)
3. Logs dans la console navigateur (F12)

---

## 📊 Analytics (optionnel)

### Google Analytics

1. Créez une propriété sur [analytics.google.com](https://analytics.google.com)
2. Copiez votre ID (ex: `G-XXXXXXXXXX`)
3. Ajoutez dans `index.html` (avant `</head>`) :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible (alternative privacy-friendly)

Plus respectueux de la vie privée, sans cookies.

1. Créez un compte sur [plausible.io](https://plausible.io)
2. Ajoutez le script dans `index.html`

---

## ✅ Checklist finale déploiement

Avant de partager votre portfolio :

- [ ] Site déployé et accessible via URL
- [ ] Contenu 100% remplacé (pas de placeholders)
- [ ] Photo ajoutée
- [ ] Tous les liens externes fonctionnent
- [ ] Formulaire contact testé et fonctionne
- [ ] Responsive testé (mobile/tablet/desktop)
- [ ] Lighthouse score > 90
- [ ] SEO : meta tags à jour avec vraie URL
- [ ] Favicon visible dans l'onglet
- [ ] Animations fluides
- [ ] Menu mobile fonctionne
- [ ] Scroll spy actif
- [ ] Bouton scroll-to-top visible

---

## 🎉 Félicitations !

Votre portfolio est en ligne ! 🚀

**Partagez-le** :
- LinkedIn
- Twitter
- GitHub profile README
- CV

**Maintenez-le à jour** :
- Ajoutez nouveaux projets
- Mettez à jour les compétences
- Partagez nouveaux articles

---

**Besoin d'aide ?**
- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Documentation Netlify : [docs.netlify.com](https://docs.netlify.com)
- Issues GitHub : Créez une issue si problème

---

*Guide créé le 12 février 2025*
*Version 1.0*
