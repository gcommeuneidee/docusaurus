"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[875],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3008:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},l="Installation (v2)",i={unversionedId:"installation-v2",id:"installation-v2",title:"Installation (v2)",description:"Voici la nouvelle proc\xe9dure d'installation, encore en phase de test.",source:"@site/docs/installation-v2.md",sourceDirName:".",slug:"/installation-v2",permalink:"/docusaurus/docs/installation-v2",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Trello",permalink:"/docusaurus/docs/trello"}},s={},c=[{value:"En local sur Windows, <strong>lancer le WAMP</strong> :",id:"en-local-sur-windows-lancer-le-wamp-",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-v2"},"Installation (v2)"),(0,o.kt)("p",null,"Voici la nouvelle proc\xe9dure d'installation, encore en phase de test."),(0,o.kt)("h2",{id:"en-local-sur-windows-lancer-le-wamp-"},"En local sur Windows, ",(0,o.kt)("strong",{parentName:"h2"},"lancer le WAMP")," :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ouvrir le terminal et dupliquer le repo wp-cli-gcom avec la commande ",(0,o.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/gcommeuneidee/wp-cli-gcom")),(0,o.kt)("li",{parentName:"ol"},"Acc\xe9der au dossier avec la commande ",(0,o.kt)("inlineCode",{parentName:"li"},"cd wp-cli-gcom")),(0,o.kt)("li",{parentName:"ol"},"D\xe9marrer un nouveau projet WordPress avec la commande ",(0,o.kt)("inlineCode",{parentName:"li"},'./bin/gcom.bat "Test Nouveau Projet" D:\\projets\\test-nouveau-projet')," ou ",(0,o.kt)("inlineCode",{parentName:"li"},'php .\\scr\\gcom.php "Test Nouveau Projet" D:\\projets\\test-nouveau-projet')),(0,o.kt)("li",{parentName:"ol"},"Red\xe9marrer les DNS (clic droit sur le logo WAMP > Outils > Red\xe9marrage DNS)")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Les \xe9tapes 1 et 2 ne sont \xe0 reproduire qu'une seule fois.\nLe dossier cible ne doit pas exister.\nLe slug sera le nom du projet en minuscule avec les caract\xe8res sp\xe9ciaux remplac\xe9s par des tirets.\nLa base de donn\xe9e aura comme nom le slug, elle ne doit pas d\xe9j\xe0 exister.\nLe virtual host aura comme nom le slug g\xe9n\xe9r\xe9 + ",(0,o.kt)("inlineCode",{parentName:"p"},".local"),", il ne doit pas d\xe9j\xe0 exister.")))}d.isMDXComponent=!0}}]);