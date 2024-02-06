"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[44],{5788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>y});var r=t(1504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(5072),o=(t(1504),t(5788));const a={sidebar_position:4},i="Installation (v2)",l={unversionedId:"installation-v2",id:"installation-v2",title:"Installation (v2)",description:"Voici la nouvelle proc\xe9dure d'installation, encore en phase de test.",source:"@site/docs/installation-v2.md",sourceDirName:".",slug:"/installation-v2",permalink:"/docusaurus/docs/installation-v2",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Trello",permalink:"/docusaurus/docs/trello"}},s={},c=[{value:"En local sur Windows, <strong>lancer le WAMP</strong> :",id:"en-local-sur-windows-lancer-le-wamp-",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"installation-v2"},"Installation (v2)"),(0,o.yg)("p",null,"Voici la nouvelle proc\xe9dure d'installation, encore en phase de test."),(0,o.yg)("h2",{id:"en-local-sur-windows-lancer-le-wamp-"},"En local sur Windows, ",(0,o.yg)("strong",{parentName:"h2"},"lancer le WAMP")," :"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Ouvrir le terminal et dupliquer le repo wp-cli-gcom avec la commande ",(0,o.yg)("inlineCode",{parentName:"li"},"git clone https://github.com/gcommeuneidee/wp-cli-gcom")),(0,o.yg)("li",{parentName:"ol"},"Acc\xe9der au dossier avec la commande ",(0,o.yg)("inlineCode",{parentName:"li"},"cd wp-cli-gcom")),(0,o.yg)("li",{parentName:"ol"},"D\xe9marrer un nouveau projet WordPress avec la commande ",(0,o.yg)("inlineCode",{parentName:"li"},'./bin/gcom.bat "Test Nouveau Projet" D:\\projets\\test-nouveau-projet')," ou ",(0,o.yg)("inlineCode",{parentName:"li"},'php .\\scr\\gcom.php "Test Nouveau Projet" D:\\projets\\test-nouveau-projet')),(0,o.yg)("li",{parentName:"ol"},"Red\xe9marrer les DNS (clic droit sur le logo WAMP > Outils > Red\xe9marrage DNS)")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Les \xe9tapes 1 et 2 ne sont \xe0 reproduire qu'une seule fois.")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Le dossier cible ne doit pas exister.")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Le slug sera le nom du projet en minuscule avec les caract\xe8res sp\xe9ciaux remplac\xe9s par des tirets.")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"La base de donn\xe9e aura comme nom le slug, elle ne doit pas d\xe9j\xe0 exister.")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Le virtual host aura comme nom le slug g\xe9n\xe9r\xe9 + ",(0,o.yg)("inlineCode",{parentName:"p"},".local"),", il ne doit pas d\xe9j\xe0 exister.")))}d.isMDXComponent=!0}}]);