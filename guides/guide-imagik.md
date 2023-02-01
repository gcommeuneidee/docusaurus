---
sidebar_position: 2
---

# Imagik

Installer Imagik avec WAMP.

https://refreshless.com/blog/imagick-pecl-imagemagick-windows/

Installer l’exe d’imagik

http://pecl.php.net/package/imagick/3.4.4RC2/windows
Pour Php 7.2 prendre : 7.2 Thread Safe (TS) x64 

- Mettre la dll imagik dans ext de php 7.2
- Mettre les dll CORE_RL dans le bin d’apache

Ensuite dans function.php

```php title=function.php
/**
 * Changement du module php utilisé lors de l'upload des images
 * Evite les erreurs http
 */
add_filter( 'wp_image_editors', 'change_graphic_lib' );
 
function change_graphic_lib($array) {
  return array( 'WP_Image_Editor_GD', 'WP_Image_Editor_Imagick' );
}
```