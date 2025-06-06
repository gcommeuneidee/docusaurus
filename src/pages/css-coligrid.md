---
title: Coligrid
---

# Coligrid

Découvrez comment bien utiliser notre système de colonnes pour la mise en page web.

Dans le fichier SCSS, on peut modifier les paramètres du colonnage :

- Les breakpoints (tablette et mobile)
- Le nombre maximal de colonnes (par défaut : 12)
- La largeur de la gouttière
- La largeur maximale du conteneur

## Exemple simple

Pour établir une rangée de colonnes, il faut les intégrer dans une div avec la class `.coligrid`.
Chaque colonne aura la class `.col-` suivi du nombre correspondant à la largeur (dépend du nombre maximal).

```html
<div class="coligrid">
  <div class="coli-6"></div>
  <div class="coli-6"></div>
</div>
```

## Exemple avec colonnage différent sur tablette et smartphone

Pour définir une largeur différente sur tablette ou mobile, il faudra dupliquer la class `.col-` avec le suffixe `-tab` ou `-mob` et modifier le nombre.

```html
<div class="coligrid">
  <div class="coli-4 coli-6-tab coli-12-mob"></div>
  <div class="coli-4 coli-3-tab coli-6-mob"></div>
  <div class="coli-4 coli-3-tab coli-6-mob"></div>
</div>
```

## Exemple avec des alignements

Chaque colonne peut avoir un alignement spécifique, il suffit de rajouter la class `.colign` avec un des suffixes suivants :

- Centrer : `--centerh` ou `--centerv`
- Aligner à droite : `--right`
- Aligner en bas : `--bottom`

Pour un alignement spécique à un type d'écran, il faut préciser avec :

- `-desk` sur ordinateur
- `-tab` sur tablette
- `-mob` sur smartphone

```html

<div class="coligrid">
  <div class="coli-4"></div>
  <div class="coli-4 colign--bottom-desk colign--centerv--mob"></div>
  <div class="coli-4"></div>
</div>

```

L'ordre des colonnes peut également être inversé, dans la même logique :

- `--reverse-tab` sur tablette
- `--reverse-mob` sur smartphone

## Points d'amélioration

- Pouvoir mettre une ligne coligrid en full-width.

<details>
  <summary>Changelog</summary>
  <div>1.0 : Commit initial</div>
</details>

## Installation

- Avoir accès au repository (https://github.com/gcommeuneidee/Coligrid)
- Ajouter un fichier .npmrc indiquant le registre NPM `@gcommeuneidee:registry=https://npm.pkg.github.com`
- Dans le même fichier, ajouter un jeton d'authentification GitHub pour le registre, à créer depuis les paramètres de son compte `//npm.pkg.github.com/:_authToken=***`
- Installer le paquet `npm i @gcommeuneidee/coligrid` NPM
- Importer le style `@import "@gcommeuneidee/coligrid";` dans votre fichier .scss
