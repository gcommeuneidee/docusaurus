---
sidebar_position: 2
---

# HTACCESS

dsdfd

## Redirection www vers non-www

```
Options +FollowSymlinks
RewriteEngine on
RewriteCond %{HTTP_HOST} ^www\.nomdusite\.fr [NC]
RewriteRule ^(.*)$ https://nomdusite.fr/$1 [R=301,L]
```

## Redirection du non-www vers www

```
Options +FollowSymlinks
RewriteEngine on
RewriteCond %{HTTP_HOST} ^nomdusite.fr [NC]
RewriteRule ^(.*) https://www.nomdusite.fr/$1 [L,R=301,QSA]
```

## Redirection vers HTTPS

```
RewriteCond %{SERVER_PORT} ^80$ [OR]
RewriteCond %{HTTPS} =off
RewriteRule ^(.*)$ https://www.%{HTTP_HOST}/$1 [R=301,L]
```

## Augmenter limite d’upload

```
php_value upload_max_filesize 128M
php_value post_max_size 128M
php_value max_execution_time 300
php_value max_input_time 300
```