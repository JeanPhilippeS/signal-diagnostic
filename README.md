# SIGNAL — Diagnostic d'Alignement Identitaire
## Guide de déploiement en ligne (15–30 minutes)

---

## ÉTAPE 1 — Créer un compte GitHub (gratuit)
1. Va sur https://github.com
2. Clique "Sign up"
3. Crée ton compte avec ton email

---

## ÉTAPE 2 — Mettre les fichiers en ligne sur GitHub
1. Une fois connecté, clique sur le "+" en haut à droite → "New repository"
2. Nomme-le : `signal-diagnostic`
3. Laisse-le en "Public"
4. Clique "Create repository"
5. Sur la page suivante, clique "uploading an existing file"
6. Glisse-dépose TOUT le contenu de ce dossier
7. Clique "Commit changes"

---

## ÉTAPE 3 — Déployer sur Vercel (gratuit)
1. Va sur https://vercel.com
2. Clique "Sign up" → connecte-toi avec GitHub
3. Clique "Add New Project"
4. Choisis ton repo `signal-diagnostic`
5. Vercel détecte automatiquement que c'est un projet React
6. Clique "Deploy"
7. ⏳ Attends 2–3 minutes

→ Ton diagnostic est en ligne sur une URL du type :
**https://signal-diagnostic.vercel.app**

---

## ÉTAPE 4 — Personnaliser ton URL (optionnel)
Dans Vercel → Settings → Domains :
- Tu peux ajouter ton propre domaine : `diagnostic.tonsite.fr`
- Ou garder l'URL Vercel gratuite

---

## ÉTAPE 5 — Personnaliser le bouton "Prendre rendez-vous"
Dans le fichier `src/App.js`, cherche cette ligne :

```
onClick={() => window.open('mailto:contact@tonsite.fr?subject=Suite au diagnostic SIGNAL', '_blank')}
```

Remplace par :
- Ton email réel : `contact@jean-philippe.fr`
- Ou l'URL de ton Calendly : `window.open('https://calendly.com/ton-lien', '_blank')`

Après modification, re-dépose le fichier sur GitHub → Vercel redéploie automatiquement.

---

## UTILISER DANS UNE NEWSLETTER

Dans ta newsletter (Mailchimp, Brevo, Substack, etc.) :
1. Ajoute un bouton ou un lien texte
2. L'URL cible = ton URL Vercel
3. Texte suggéré :

> **→ Découvre ton profil d'alignement identitaire**
> *Un miroir. 6 dimensions. 15 minutes.*
> [Accéder au diagnostic SIGNAL]

---

## STRUCTURE DES FICHIERS

```
signal-diagnostic/
├── public/
│   └── index.html          ← Page HTML de base
├── src/
│   ├── index.js            ← Point d'entrée React
│   └── App.js              ← L'application complète (tout est ici)
├── package.json            ← Configuration du projet
└── vercel.json             ← Configuration Vercel 
```

---

## BESOIN D'AIDE ?
Tout le contenu du diagnostic se trouve dans `src/App.js`
dans la constante `DIAGNOSTIC_DATA` en haut du fichier.
Tu peux modifier les textes, questions, et profils directement là.
