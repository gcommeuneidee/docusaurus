"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[752],{4556:(e,t,a)=>{a.d(t,{c:()=>g});var n=a(5072),l=a(1504),c=a(8080),r=a(5864),o=a(9940),s=a(3376),i=a(6016),d=a(4357),m=a(964);function u(e){return l.createElement("svg",(0,n.c)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function p(){const e=(0,m.c)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.c,{"aria-label":(0,d.G)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},l.createElement(u,{className:b.breadcrumbHomeIcon})))}const E={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function h(e){let{children:t,href:a,isLast:n}=e;const c="breadcrumbs__link";return n?l.createElement("span",{className:c,itemProp:"name"},t):a?l.createElement(i.c,{className:c,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:c},t)}function v(e){let{children:t,active:a,index:r,addMicrodata:o}=e;return l.createElement("li",(0,n.c)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,c.c)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(r+1)}))}function g(){const e=(0,o.js)(),t=(0,s.Y5)();return e?l.createElement("nav",{className:(0,c.c)(r.W.docs.docBreadcrumbs,E.breadcrumbsContainer),"aria-label":(0,d.G)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(p,null),e.map(((t,a)=>{const n=a===e.length-1;return l.createElement(v,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(h,{href:t.href,isLast:n},t.label))})))):null}},7936:(e,t,a)=>{a.r(t),a.d(t,{default:()=>X});var n=a(1504),l=a(5756),c=a(1100);const r=n.createContext(null);function o(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(r.Provider,{value:l},t)}function s(){const e=(0,n.useContext)(r);if(null===e)throw new c.AH("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=s();return n.createElement(l.U7,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(8080),m=a(1432),u=a(9236);function b(){const{metadata:e}=s();return n.createElement(u.c,{previous:e.previous,next:e.next})}var p=a(2136),E=a(8092),h=a(5864),v=a(4357);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(v.c,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(v.c,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:h.W.common.lastUpdated},n.createElement(v.c,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(5072);const L={iconEdit:"iconEdit_Z9Sw"};function C(e){let{className:t,...a}=e;return n.createElement("svg",(0,N.c)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.c)(L.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function T(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:h.W.common.editThisPage},n.createElement(C,null),n.createElement(v.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var U=a(6016);const k={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function w(e){let{permalink:t,label:a,count:l}=e;return n.createElement(U.c,{href:t,className:(0,d.c)(k.tag,l?k.tagWithCount:k.tagRegular)},a,l&&n.createElement("span",null,l))}const x={tags:"tags_jXut",tag:"tag_QGVx"};function y(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(v.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.c)(x.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:x.tag},n.createElement(w,{label:t,permalink:a}))}))))}const A={lastUpdated:"lastUpdated_vwxv"};function M(e){return n.createElement("div",{className:(0,d.c)(h.W.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(y,e)))}function B(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:c}=e;return n.createElement("div",{className:(0,d.c)(h.W.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T,{editUrl:t})),n.createElement("div",{className:(0,d.c)("col",A.lastUpdated)},(a||l)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:c,lastUpdatedBy:l})))}function I(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:c,tags:r}=e,o=r.length>0,i=!!(t||a||c);return o||i?n.createElement("footer",{className:(0,d.c)(h.W.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(M,{tags:r}),i&&n.createElement(B,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:c,formattedLastUpdatedAt:l})):null}var H=a(8448),V=a(3088);const W={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function P(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,N.c)({type:"button"},a,{className:(0,d.c)("clean-btn",W.tocCollapsibleButton,!t&&W.tocCollapsibleButtonExpanded,a.className)}),n.createElement(v.c,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const D={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function S(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:c}=e;const{collapsed:r,toggleCollapsed:o}=(0,H.a)({initialState:!0});return n.createElement("div",{className:(0,d.c)(D.tocCollapsible,!r&&D.tocCollapsibleExpanded,a)},n.createElement(P,{collapsed:r,onClick:o}),n.createElement(H.U,{lazy:!0,className:D.tocCollapsibleContent,collapsed:r},n.createElement(V.c,{toc:t,minHeadingLevel:l,maxHeadingLevel:c})))}const F={tocMobile:"tocMobile_ITEo"};function R(){const{toc:e,frontMatter:t}=s();return n.createElement(S,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.c)(h.W.docs.docTocMobile,F.tocMobile)})}var O=a(5124);function j(){const{toc:e,frontMatter:t}=s();return n.createElement(O.c,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:h.W.docs.docTocDesktop})}var z=a(6448),G=a(6992);function q(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=s();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.c)(h.W.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(z.c,{as:"h1"},a)),n.createElement(G.c,null,t))}var Y=a(4556);const Z={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Q(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=s(),a=(0,m.U)(),l=e.hide_table_of_contents,c=!l&&t.length>0;return{hidden:l,mobile:c?n.createElement(R,null):void 0,desktop:!c||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(j,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.c)("col",!a.hidden&&Z.docItemCol)},n.createElement(p.c,null),n.createElement("div",{className:Z.docItemContainer},n.createElement("article",null,n.createElement(Y.c,null),n.createElement(E.c,null),a.mobile,n.createElement(q,null,t),n.createElement(I,null)),n.createElement(b,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function X(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(o,{content:e.content},n.createElement(l.cr,{className:t},n.createElement(i,null),n.createElement(Q,null,n.createElement(a,null))))}},9236:(e,t,a)=>{a.d(t,{c:()=>i});var n=a(5072),l=a(1504),c=a(4357),r=a(8080),o=a(6016);function s(e){const{permalink:t,title:a,subLabel:n,isNext:c}=e;return l.createElement(o.c,{className:(0,r.c)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}function i(e){const{previous:t,next:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.G)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&l.createElement(s,(0,n.c)({},t,{subLabel:l.createElement(c.c,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(s,(0,n.c)({},a,{subLabel:l.createElement(c.c,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},8092:(e,t,a)=>{a.d(t,{c:()=>s});var n=a(1504),l=a(8080),c=a(4357),r=a(5864),o=a(9920);function s(e){let{className:t}=e;const a=(0,o.E)();return a.badge?n.createElement("span",{className:(0,l.c)(t,r.W.docs.docVersionBadge,"badge badge--secondary")},n.createElement(c.c,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},2136:(e,t,a)=>{a.d(t,{c:()=>h});var n=a(1504),l=a(8080),c=a(8264),r=a(6016),o=a(4357),s=a(2840),i=a(5864),d=a(4592),m=a(9920);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(o.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.c,{to:a,onClick:l},n.createElement(o.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,c.c)(),{pluginId:o}=(0,s.UF)({failfast:!0}),{savePreferredVersionName:m}=(0,d.iy)(o),{latestDocSuggestion:u,latestVersionSuggestion:E}=(0,s.i8)(o),h=u??(v=E).docs.find((e=>e.id===v.mainDocId));var v;return n.createElement("div",{className:(0,l.c)(t,i.W.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:E.label,to:h.path,onClick:()=>m(E.name)})))}function h(e){let{className:t}=e;const a=(0,m.E)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}}}]);