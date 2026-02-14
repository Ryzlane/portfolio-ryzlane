# 📝 Contenu à remplacer - Checklist

Ce fichier liste tous les placeholders à remplacer par votre contenu réel.

## 🔗 Liens externes (PRIORITÉ HAUTE)

Fichier : `src/utils/constants.js` → objet `LINKS`

- [ ] **Behance** : Remplacer `"https://behance.net/TODO"` par votre lien
- [ ] **GitHub** : Remplacer `"https://github.com/TODO"` par votre lien
- [ ] **LinkedIn** : Remplacer `"https://linkedin.com/in/TODO"` par votre lien
- [ ] **Instagram** : Vérifier `"https://instagram.com/ademireve"` (À demi-rêve)

## 📧 Formulaire contact (PRIORITÉ HAUTE)

Fichier : `src/utils/constants.js` → `FORMSPREE_ENDPOINT`

1. [ ] Créer un compte sur [https://formspree.io](https://formspree.io)
2. [ ] Créer un nouveau formulaire
3. [ ] Copier l'endpoint (format : `https://formspree.io/f/xyzabc12`)
4. [ ] Remplacer `"https://formspree.io/f/YOUR_FORM_ID"` dans constants.js

**Test** : Une fois configuré, tester l'envoi d'un message réel.

---

## ✍️ Textes du site

Fichier : `src/utils/constants.js`

### Hero Section

- [ ] **HERO_TEXT.repeatedText** : Remplacer le texte "Je suis le corps..." par votre texte personnel
  - Actuellement : placeholder générique
  - Recommandé : 2-3 phrases courtes qui vous décrivent

### Logo Navigation

- [ ] **LOGO_TEXT** : Décider si vous gardez "LOREM IPSUM" ou le remplacez
  - Option 1 : Garder "LOREM IPSUM" (esthétique brutalist)
  - Option 2 : Remplacer par "RYZLANE" répété
  - Option 3 : Autre texte de votre choix

### Section Design

- [ ] **DESIGN_SECTION.description** : Remplacer par votre vraie description (1 paragraphe)
  - Parlez de votre approche design, vos compétences, votre méthodologie

### Section Développement

- [ ] **DEV_SECTION.description** : Remplacer par votre vraie description (1 paragraphe)
  - Mentionnez vos compétences techniques, langages, frameworks
- [ ] **DEV_SECTION.projectTitle** : Nom de votre projet phare
  - Exemple : "DecisionHub", "PortfolioBuilder", etc.
- [ ] **DEV_SECTION.projectNote** : Ajuster la note si nécessaire
  - Actuellement : "(c'est daté mais c'est from scratch et j'en suis fière)"

### Section Écriture

- [ ] **WRITING_SECTION.rédaction.articles** : Remplacer les 3 articles placeholder
  - Format :
    ```javascript
    {
      id: 1,
      title: "Titre de votre article",
      link: "https://lien-vers-article.com"
    }
    ```
  - Si vous avez moins de 3 articles, vous pouvez en supprimer
  - Si vous avez plus, ajoutez-en

---

## 🖼️ Assets visuels

### Photo principale (PRIORITÉ HAUTE)

Fichier : `src/components/Hero.jsx` (ligne ~22)

- [ ] Préparer votre photo :
  - **Format** : JPG ou PNG
  - **Dimensions** : Minimum 800x800px (idéal : 1000x1000px)
  - **Poids** : < 500 Ko (compresser si nécessaire sur [TinyPNG](https://tinypng.com))
  - **Cadrage** : Photo carrée, fond uni de préférence
- [ ] Renommer en `photo-ryzlane.jpg`
- [ ] Placer dans `/public/photo-ryzlane.jpg`
- [ ] Remplacer dans Hero.jsx :
  ```jsx
  // AVANT (ligne ~22)
  <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-noir bg-gris-clair flex items-center justify-center">
    <span className="text-sm text-center px-8">Photo 400x400px<br/>À remplacer</span>
  </div>

  // APRÈS
  <img
    src="/photo-ryzlane.jpg"
    alt="Photo de Ryzlane"
    className="w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-noir object-cover"
  />
  ```

### Favicon (PRIORITÉ MOYENNE)

- [ ] Créer un favicon (16x16px et 32x32px)
  - Outil recommandé : [Favicon.io](https://favicon.io)
  - Peut être vos initiales "R" sur fond noir/blanc
- [ ] Remplacer `/public/favicon.ico`

### OG Image (PRIORITÉ BASSE)

Pour les partages sur réseaux sociaux (Facebook, Twitter, LinkedIn).

- [ ] Créer une image 1200x630px
  - Contenu : Votre nom + baseline + photo
  - Outil : Canva, Figma, ou Photoshop
- [ ] Placer dans `/public/og-image.jpg`
- [ ] Ajouter dans `index.html` :
  ```html
  <meta property="og:image" content="/og-image.jpg" />
  ```

---

## 🎯 Sondages IFOP (Section Personnalité)

Fichier : `src/utils/constants.js` → tableau `SURVEY_AXES`

Ajustez les **positions** (0-100) pour refléter votre personnalité :

- **0** = Complètement le label du haut
- **50** = Équilibre parfait
- **100** = Complètement le label du bas

### Axe 1 : Extravertie ↔ Introvertie

- [ ] Position actuelle : `70` (plutôt introvertie)
- [ ] Ajuster si besoin : `position: XX`

### Axe 2 : Théoricienne ↔ Praticienne

- [ ] Position actuelle : `45` (équilibre)
- [ ] Ajuster si besoin : `position: XX`

### Axe 3 : Multi-tâches ↔ Focus laser

- [ ] Position actuelle : `60` (plutôt focus laser)
- [ ] Ajuster si besoin : `position: XX`

### Axe 4 : Sens de l'esthétique ↔ Sens du fonctionnel

- [ ] Position actuelle : `40` (plutôt esthétique)
- [ ] Ajuster si besoin : `position: XX`

**Conseil** : Soyez honnête, c'est ce qui rend cette section authentique !

---

## ✅ Validation finale

Une fois tous les placeholders remplacés :

- [ ] Vérifier que tous les liens externes fonctionnent (ouvrir dans un nouvel onglet)
- [ ] Tester le formulaire contact en envoyant un message test
- [ ] Vérifier que la photo s'affiche correctement (pas déformée)
- [ ] Relire tous les textes (fautes d'orthographe, cohérence)
- [ ] Vérifier les positions des sondages IFOP (visuellement cohérent ?)

---

## 🔍 Où trouver les fichiers à modifier

| Contenu | Fichier | Ligne approximative |
|---------|---------|---------------------|
| Liens externes | `src/utils/constants.js` | Ligne 6-11 |
| Endpoint Formspree | `src/utils/constants.js` | Ligne 17 |
| Textes hero | `src/utils/constants.js` | Ligne 22-29 |
| Logo navigation | `src/utils/constants.js` | Ligne 35 |
| Sondages IFOP | `src/utils/constants.js` | Ligne 41-71 |
| Section Design | `src/utils/constants.js` | Ligne 77-85 |
| Section Dev | `src/utils/constants.js` | Ligne 91-102 |
| Section Écriture | `src/utils/constants.js` | Ligne 108-137 |
| Photo hero | `src/components/Hero.jsx` | Ligne 22 |

---

**Astuce** : Recherchez `// TODO:` dans tous les fichiers pour trouver rapidement ce qui doit être remplacé.

```bash
# Commande pour lister tous les TODO
grep -r "TODO:" src/
```

---

**Une fois tous les placeholders remplacés, supprimez ce fichier !** ✅
