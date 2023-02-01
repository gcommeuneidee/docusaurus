---
sidebar_position: 2
---

# Installation

Voici la procédure d'installation.

## 1. Préparation

En local, **lancer le WAMP** :

1. Créer une BDD en `utf8mb4_general_ci`
2. Créer un Virtualhost sur le dossier d'installation du site

:::info
En local, l'url du virtualhost doit se terminer en `.local`.
:::

## 2. Installer WordPress

**Dans le dossier du site**, pour télécharger la version française, lancez la commande :

```
wp core download --locale=fr_FR
```

→ Compléter la commande suivante pour **générer le wp-config** avec les bons paramètres

```
wp config create --dbname=nomdelabase --dbuser=root --dbpass= --dbprefix=prefixe_ --skip-check
```

→ **Éditer le ficher** `wp-config.php` à la racine du dossier et ajouter :

```php
// Désactiver l'éditeur de thème et de plugins en administration
define('DISALLOW_FILE_EDIT', true);

// Changer le nombre de révisions de contenus
define('WP_POST_REVISIONS', 5);

// Supprimer automatiquement la corbeille tous les 7 jours
define('EMPTY_TRASH_DAYS', 7);

// Fixe la limite de mémoire de PHP à 256mo
define('WP_MEMORY_LIMIT', '256M');

//Mode debug
define('WP_DEBUG', false);
define('WP_DEBUG_DISPLAY', false);
define('WP_DEBUG_LOG', false);

// Nom du cookie
define('COOKIEHASH', md5('nomdusite'));
define('DISALLOW_UNFILTERED_HTML', true);

// Performance
define('WP_CACHE', true);
define('COMPRESS_CSS', true);
define('COMPRESS_SCRIPTS', true);
define('CONCATENATE_SCRIPTS', true);
define('ENFORCE_GZIP', true);
```

:::tip
Pensez à remplacer le `nomdusite` par le nom du client, sans espace, sans accent, tout attaché. Ce nom sera réutilisé par la suite en cas de site multilangue.
:::

Rendez vous sur l'url `http://nomdusite.local/` du site pour **terminer l'installation** et renseigner les identifiants de connexion avec :

    user : maintenance
    mdp : la formule Gcom
    mail : maintenance@gcommeuneidee.com


:::caution
Assurez-vous que la case `demander aux moteurs de recherche de ne pas indexer ce site` soit bien cochée.
:::

## 3. Nettoyer l'installation

→ **Supprimer les plugins** installés par défaut :

```
wp plugin delete hello akismet
```

→ **Supprimer les thèmes** installés par défaut :

```
wp theme delete twentytwenty twentytwentyone twentytwentytwo twentytwentythree
```

## 4. Personnaliser l'installation

→ **Installer les plugins** utilisés de base :
- ACF (ne s'installe pas via `wp`)
- Yoast
- ACF extended

La liste sera à compléter...

```
wp plugin install wordpress-seo acf-extended --activate
```

## 5. Installer le thème Starter

Avec la console, se place dans le dossier d'installation des thèmes : `\wp-content\themes`

→ **Récupérer l’archive** du thème starter depuis le repository github :

```
git clone https://github.com/gcommeuneidee/starter.git
```

→ **Activer le thème Gcom** :
```
wp theme activate starter
```

→ **Renommer le dossier** `/starter` par le nom du thème du client

Aller dans le dossier du thème et **initialiser webpack** :
```
npm i
```
:::tip
Pensez à mettre à jour l'url du site dans le `webpack.config.js` avant de lancer la commande `npm run dev`.
:::

## 6. Le plugin Gcom ?
Partie à modifier...
