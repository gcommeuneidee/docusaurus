---
sidebar_position: 2
---

# Git & VINCI Construction

Prérequis : Avoir une installation liée au repo en local

## Procédure 
Étapes de mise à jour :

- Modification des fichiers
- Publication sur la branche de préprod (PPD)
- Mise à jour du serveur de préprod 30 minutes après le push
- Vérification sur la PPD
- Appliquer les modifications à la prod (PRD)

### Mise à jour du code sur la PPD
Vérifier si on est sur la branch PPD

```bash
git branch
--- si besoin ---
git checkout PPD
```

Commit :

```bash
git add .
git commit -m "Nom de ton commit"
git push origin PPD
```

### Mettre à jour la PRD

```bash
git checkout PRD
git merge PPD
git push origin PRD
```

### /!\ Important 

Une fois le push sur la PRD effectué, penser à se remettre sur la PPD pour les prochaines modifications

```bash
git checkout PPD
```

### Retirer le repo existant (si besoin)

Si un dépôt existant ('gcom') est déjà configuré et doit être retiré, utilisez la commande suivante :

```bash
git remote remove origin
```

### Connecter mon dossier au repo distant

Connecter mon dossier au repo distant

Pour connecter un dossier local à un repo Git distant, suivez les étapes suivantes :

1. Initialiser le dépôt local (si ce n'est pas déjà fait) :

    ```bash
    git init
    ```

2. Ajouter le repo distant :

    ```bash
    git remote add origin <URL_DU_REPO>
    ```

    Remplacez <URL_DU_REPO> par l'URL du dépôt distant.

3. Vérifier la connexion au repo distant :

    ```bash
    git remote -v
    ```

    Cela affichera les références du dépôt distant configuré.

4. Pousser les modifications initiales :

    Si c'est la première fois que vous connectez le répertoire local au répértoire distant, vous devrez peut-être forcer le push initial :

    ```bash
    git push -u origin master
    ```

    Cela enverra les modifications vers la branche principale (master ou main). Utilisez -u pour lier la branche locale à la branche distante.

## Commande utile

| Description                             | Commande                    |
| --------------------------------------- | --------------------------- |
| Récupérer les modifications en ligne            | ```git pull```            |
| Vérifier la branche actuelle            | ```git branch```            |
| Changer de branche                      | ```git checkout 'PPD'```    |
| Ajouter tous les fichiers au commit     | ```git add .```             |
| Afficher l'historique des commits       | ```git log```               |
| Afficher le statut des fichiers         | ```git status```            |
| Fusionner une branche                   | ```git merge 'nom_branche'``` |
| Réinitialiser le dernier commit (en gardant les modifications) | ```git reset --soft HEAD~1``` |
| Réinitialiser le dernier commit (en supprimant les modifications) | ```git reset --hard HEAD~1``` |
| Pousser les commits locaux vers le dépôt distant | ```git push origin 'nom_branche'``` |
| Afficher le repo distant | ```git remote -v``` |
