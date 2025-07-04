---
sidebar_position: 2
---

# Support du multilangue dans votre thème

1/ Générer le fichier source .pot
wp i18n make-pot --exclude=\"build\" . languages/{text-domain}.pot

2/ Mettre à jour le fichier .po (si des traductions ont été ajoutées mettez à jour le fichier .pot avant)
wp i18n update-po languages/{text-domain}.pot

3/ Générer le fichier de traduction .php, utilisé depuis 2024 pour optimiser les perfs
wp i18n make-php languages/

4/ Générer le fichier .mo, fichier classique utilisé avant WP 6.5.5 ou si pas de fichier de traduction .php
wp i18n make-mo languages/

5/ Générer les fichiers de trad .json ; 1 fichier généré par source JS, avec comme nom le hash md5 de la source, vérifiez dans le fichier .pot que les références des fichiers .js pointent bien vers le fichier compilé et non le fichier source
wp i18n make-json --no-purge languages/

6/ Activer le support de traduction dans ./lib/configuration.php
load_theme_textdomain( '{text-domain}', get_template_directory() . '/languages' );
