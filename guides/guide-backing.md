---
sidebar_position: 2
---

# Le "Backing"

Comment bien faire le backing pour three.js avec Blender.

## La modélisation

1. Modéliser les formes
2. Créer les matériaux pour chaque typologie de texture
3. Dans le rendu, configurer l’éclairage avec le moteur  “cycles”
4. Supprimer les faces invisibles
5. Vérifier l’orientation de normales, et au besoin faire un “normal flip”
6. Faire un “alt+N” sur chaque objet pour “appliquer” toute transformation qui pourrait rester

## L’unwrapping

7. Dans l’UV Editor, créer une nouvelle image en 4096x4096px, avec fond blanc, en 32 bits et sans transparence. Lui donner un nom.
8. Pour chaque matériau dans la vue Node, ajouter un node “Image” et cibler la nouvelle image
9. S’assurer que le node “Image” est bien sélectionné avant de passer à un autre matériau
10. Poser les seams de façon à optimiser les UV et vérifier qu’aucune face ne se superpose
11. Organiser tous les UV de tous les objets, cocher “Display stretch” pour tout mettre à l’échelle

## Le rendu

12. Dans l’onglet “Bake”, s’assurer que la target est bien “Image Textures”, mettre un margin à 6px environ et décocher “Clear image”
13. Dans le “Compositor”, ajouter un node “Denoise” entre l’image à baker et le composite
14. Sélectionner tous les objets à baker et cliquer sur le bouton “Bake”
15. Attendre la fin du rendu
16. Enregistrer l’image bakée en jpg
