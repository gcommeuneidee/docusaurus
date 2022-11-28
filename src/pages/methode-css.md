---
title: Notre méthode CSS
---

# Méthode PECT

Proposition d’organisation des déclarateurs CSS afin d’optimiser la lecture, la modification et la maintenance d’une feuille CSS.

- **Position**     => position, z-index, top, left, border-box.
- **Display**    => display, flex, grid
- **Espace**     => width, height, margin, padding, object-fit
- **Couleur**     => color, background
- **Text**         => font, text, letter, word-wrap
- **Décoration**     => border, box-shadow, outline, list-style
- **Modification**     => transform, opacity, visibility, cursor, overflow
- **Animation**     => animation, transition
- **Divers**     => pointer-event, content, appearance, etc.
- **Debug**        => déclaration(s) temporaire(s), se place après un `/**/`

:::info Note sur @extend et @include :
Quand il y a un @, il se place tout en haut, avant la moindre déclaration.
:::

## Exemple

```scss

@extend .maclass;

position:absolute;bottom:5rem;left:50%;z-index:2;
display:flex;justify-content:center;
height:6rem;width:28.8rem;
text-transform:uppercase;letter-spacing:0.05rem;
transform:translateX(-50%);
/**/outline:1px solid red;

```

## Points d'amélioration

- Trouver un nom qui fonctionne à l’international.
- Qu’en est-il d’un déclarateur multi-niveau (ex : “content”) ? Il peut aussi bien être dans “position” que dans “divers” selon le cas d’usage…


<details>
  <summary>Changelog</summary>
  <div>0.6 : ajout de l’étape “Debug” et du changelog</div>
  <hr />
  <div>0.5 : ajout de l’étage “Display” et précision sur les @extend et @include</div>
</details>