"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[512],{5788:(e,r,t)=>{t.d(r,{Iu:()=>l,yg:()=>m});var n=t(1504);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},w=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(t),w=i,m=d["".concat(s,".").concat(w)]||d[w]||p[w]||o;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=w;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u[d]="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}w.displayName="MDXCreateElement"},7384:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=t(5072),i=(t(1504),t(5788));const o={sidebar_position:2},a="HTACCESS",u={unversionedId:"guide-htaccess",id:"guide-htaccess",title:"HTACCESS",description:"dsdfd",source:"@site/guides/guide-htaccess.md",sourceDirName:".",slug:"/guide-htaccess",permalink:"/docusaurus/guides/guide-htaccess",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\xc9changes avec le client",permalink:"/docusaurus/guides/guide-gestion"},next:{title:"Imagik",permalink:"/docusaurus/guides/guide-imagik"}},s={},c=[{value:"Redirection www vers non-www",id:"redirection-www-vers-non-www",level:2},{value:"Redirection du non-www vers www",id:"redirection-du-non-www-vers-www",level:2},{value:"Redirection vers HTTPS",id:"redirection-vers-https",level:2},{value:"Augmenter limite d\u2019upload",id:"augmenter-limite-dupload",level:2}],l={toc:c},d="wrapper";function p(e){let{components:r,...t}=e;return(0,i.yg)(d,(0,n.c)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"htaccess"},"HTACCESS"),(0,i.yg)("p",null,"dsdfd"),(0,i.yg)("h2",{id:"redirection-www-vers-non-www"},"Redirection www vers non-www"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Options +FollowSymlinks\nRewriteEngine on\nRewriteCond %{HTTP_HOST} ^www\\.nomdusite\\.fr [NC]\nRewriteRule ^(.*)$ https://nomdusite.fr/$1 [R=301,L]\n")),(0,i.yg)("h2",{id:"redirection-du-non-www-vers-www"},"Redirection du non-www vers www"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Options +FollowSymlinks\nRewriteEngine on\nRewriteCond %{HTTP_HOST} ^nomdusite.fr [NC]\nRewriteRule ^(.*) https://www.nomdusite.fr/$1 [L,R=301,QSA]\n")),(0,i.yg)("h2",{id:"redirection-vers-https"},"Redirection vers HTTPS"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"RewriteCond %{SERVER_PORT} ^80$ [OR]\nRewriteCond %{HTTPS} =off\nRewriteRule ^(.*)$ https://www.%{HTTP_HOST}/$1 [R=301,L]\n")),(0,i.yg)("h2",{id:"augmenter-limite-dupload"},"Augmenter limite d\u2019upload"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"php_value upload_max_filesize 128M\nphp_value post_max_size 128M\nphp_value max_execution_time 300\nphp_value max_input_time 300\n")))}p.isMDXComponent=!0}}]);