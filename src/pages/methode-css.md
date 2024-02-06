---
title: Notre méthode CSS
---

# Méthode PECT

Proposition d’organisation des déclarateurs CSS afin d’optimiser la lecture, la modification et la maintenance d’une feuille CSS.

- **Position**     => position, top, right, bottom, left, z-index, border-box, float, clear.
- **Display**    => display, flex, grid, gap, align, justify, order
- **Espace**     => width, height, box-sizing, margin, padding, object-fit
- **Couleur**     => color, background
- **Text**         => font, font-family, font-size, line-height, font-*, text, letter-spacing, word-
- **Décoration**     => border, box-shadow, outline, list-*
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
width:28.8rem;height:6rem;
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
