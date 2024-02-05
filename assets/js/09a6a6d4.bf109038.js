"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),c=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,v=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?l.createElement(v,a(a({ref:t},s),{},{components:n})):l.createElement(v,a({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2592:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var l=n(7462),r=(n(7294),n(3905));const i={title:"Coligrid"},a="Coligrid",o={type:"mdx",permalink:"/docusaurus/css-coligrid",source:"@site/src/pages/css-coligrid.md",title:"Coligrid",description:"D\xe9couvrez comment bien utiliser notre syst\xe8me de colonnes pour la mise en page web.",frontMatter:{title:"Coligrid"}},u=[{value:"Exemple simple",id:"exemple-simple",level:2},{value:"Exemple avec colonnage diff\xe9rent sur tablette et smartphone",id:"exemple-avec-colonnage-diff\xe9rent-sur-tablette-et-smartphone",level:2},{value:"Exemple avec des alignements",id:"exemple-avec-des-alignements",level:2},{value:"Points d&#39;am\xe9lioration",id:"points-dam\xe9lioration",level:2}],c={toc:u},s="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"coligrid"},"Coligrid"),(0,r.kt)("p",null,"D\xe9couvrez comment bien utiliser notre syst\xe8me de colonnes pour la mise en page web."),(0,r.kt)("p",null,"Dans le fichier SCSS, on peut modifier les param\xe8tres du colonnage :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Les breakpoints (tablette et mobile)"),(0,r.kt)("li",{parentName:"ul"},"Le nombre maximal de colonnes (par d\xe9faut : 12)"),(0,r.kt)("li",{parentName:"ul"},"La largeur de la goutti\xe8re"),(0,r.kt)("li",{parentName:"ul"},"La largeur maximale du conteneur")),(0,r.kt)("h2",{id:"exemple-simple"},"Exemple simple"),(0,r.kt)("p",null,"Pour \xe9tablir une rang\xe9e de colonnes, il faut les int\xe9grer dans une div avec la class ",(0,r.kt)("inlineCode",{parentName:"p"},".coligrid"),".\nChaque colonne aura la class ",(0,r.kt)("inlineCode",{parentName:"p"},".col-")," suivi du nombre correspondant \xe0 la largeur (d\xe9pend du nombre maximal)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\n<div class="coligrid">\n  <div class="coli-6"></div>\n  <div class="coli-6"></div>\n</div>\n\n')),(0,r.kt)("h2",{id:"exemple-avec-colonnage-diff\xe9rent-sur-tablette-et-smartphone"},"Exemple avec colonnage diff\xe9rent sur tablette et smartphone"),(0,r.kt)("p",null,"Pour d\xe9finir une largeur diff\xe9rente sur tablette ou mobile, il faudra dupliquer la class ",(0,r.kt)("inlineCode",{parentName:"p"},".col-")," avec le suffixe ",(0,r.kt)("inlineCode",{parentName:"p"},"-tab")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"-mob")," et modifier le nombre."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\n<div class="coligrid">\n  <div class="coli-4 coli-6-tab coli-12-mob"></div>\n  <div class="coli-4 coli-3-tab coli-6-mob"></div>\n  <div class="coli-4 coli-3-tab coli-6-mob"></div>\n</div>\n\n')),(0,r.kt)("h2",{id:"exemple-avec-des-alignements"},"Exemple avec des alignements"),(0,r.kt)("p",null,"Chaque colonne peut avoir un alignement sp\xe9cifique, il suffit de rajouter la class ",(0,r.kt)("inlineCode",{parentName:"p"},".colign")," avec un des suffixes suivants :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Centrer : ",(0,r.kt)("inlineCode",{parentName:"li"},"--centerh")," ou ",(0,r.kt)("inlineCode",{parentName:"li"},"--centerv")),(0,r.kt)("li",{parentName:"ul"},"Aligner \xe0 droite : ",(0,r.kt)("inlineCode",{parentName:"li"},"--right")),(0,r.kt)("li",{parentName:"ul"},"Aligner en bas : ",(0,r.kt)("inlineCode",{parentName:"li"},"--bottom"))),(0,r.kt)("p",null,"Pour un alignement sp\xe9cique \xe0 un type d'\xe9cran, il faut pr\xe9ciser avec :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-desk")," sur ordinateur"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-tab")," sur tablette"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-mob")," sur smartphone")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\n<div class="coligrid">\n  <div class="coli-4"></div>\n  <div class="coli-4 colign--bottom-desk colign--centerv--mob"></div>\n  <div class="coli-4"></div>\n</div>\n\n')),(0,r.kt)("p",null,"L'ordre des colonnes peut \xe9galement \xeatre invers\xe9, dans la m\xeame logique :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--reverse-tab")," sur tablette"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--reverse-mob")," sur smartphone")),(0,r.kt)("h2",{id:"points-dam\xe9lioration"},"Points d'am\xe9lioration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pouvoir mettre une ligne coligrid en full-width.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Changelog"),(0,r.kt)("div",null,"1.0 : Commit initial")))}p.isMDXComponent=!0}}]);