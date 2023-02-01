---
sidebar_position: 2
---

# SSH

En premier lieu il faut se connecter au compte OVH pour vérifier que le user SSH est bien activé. Au passage notez le chemin du dossier racine.

Il faut :
Le nom du user
Le mot de passe du user
L’adresse ou l’ip du serveur

Ouvrir un terminal avec VSCode dans le dossier voulu.

Pour copier un fichier en SSH :
Coller la commande suivante : 
scp nomdufichier.ext user@ssh.cluster028.hosting.ovh.net:/home/user/www/
Renseigner le mot de passe
Et voilà.

Pour copier tout un dossier avec fichiers et sous-répertoires :
Coller la commande suivante : 
scp -r nomdudossier user@ssh.cluster028.hosting.ovh.net:/home/user/www/
Renseigner le mot de passe
Et voilà.

Liste des exemples de commandes :
http://www.hypexr.org/linux_scp_help.php