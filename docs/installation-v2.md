---
sidebar_position: 4
---

# Installation (v2)

Voici la nouvelle procédure d'installation, encore en phase de test.

## En local sur Windows, **lancer le WAMP** :

1. Ouvrir le terminal et dupliquer le repo wp-cli-gcom avec la commande `git clone https://github.com/gcommeuneidee/wp-cli-gcom`
2. Accéder au dossier avec la commande `cd wp-cli-gcom`
3. Démarrer un nouveau projet WordPress avec la commande `./bin/gcom.bat "Test Nouveau Projet" D:\projets\test-nouveau-projet` ou `php .\scr\gcom.php "Test Nouveau Projet" D:\projets\test-nouveau-projet`
4. Redémarrer les DNS (clic droit sur le logo WAMP > Outils > Redémarrage DNS)

:::info
Les étapes 1 et 2 ne sont à reproduire qu'une seule fois.
:::
:::info
Le dossier cible ne doit pas exister.
:::
:::info
Le slug sera le nom du projet en minuscule avec les caractères spéciaux remplacés par des tirets.
:::
:::info
La base de donnée aura comme nom le slug, elle ne doit pas déjà exister.
:::
:::info
Le virtual host aura comme nom le slug généré + `.local`, il ne doit pas déjà exister.
:::
