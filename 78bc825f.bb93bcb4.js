(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(166)),p={},c={unversionedId:"API/v1/groups/UpdateGroup",id:"API/v1/groups/UpdateGroup",isDocsHomePage:!1,title:"UpdateGroup",description:"UpdateGroup",source:"@site/docs\\API\\v1\\groups\\UpdateGroup.md",slug:"/API/v1/groups/UpdateGroup",permalink:"/docs/API/v1/groups/UpdateGroup",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API/v1/groups/UpdateGroup.md",version:"current",sidebar:"someSidebar",previous:{title:"GetGroupTree",permalink:"/docs/API/v1/groups/GetGroupTree"},next:{title:"CreateItemWithItemID",permalink:"/docs/API/v1/item-actions/CreateItemWithItemID"}},u=[],i={toc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"updategroup"},"UpdateGroup"),Object(o.b)("p",null,"\u30b0\u30eb\u30fc\u30d7\u306e\u66f4\u65b0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u6307\u5b9a\u3057\u305f\u30b0\u30eb\u30fc\u30d7\u540d\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"PUT"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"/api/v0/workspaces/:workspace-id/groups/:group-id\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL Params")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"workspace-id    : \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9ID\ngroup-id        : \u30b0\u30eb\u30fc\u30d7ID\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Content-Type : application/json")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "name": "\u30b0\u30eb\u30fc\u30d7\u540d\u2192new name",\n  "display_id": "\u30b0\u30eb\u30fc\u30d7\u3092\u8b58\u5225\u3059\u308bID\uff08\u7d44\u7e54\u30b3\u30fc\u30c9\u306a\u3069\uff09"\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Sample")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"PUT https://api.xxx.com/api/v0/workspaces/582b26d7fb90a15e0c24ad80/groups/59bf3b300e24791418da1aa1\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"null\n")))}l.isMDXComponent=!0},166:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,m=b["".concat(p,".").concat(d)]||b[d]||s[d]||o;return r?a.a.createElement(m,c(c({ref:t},i),{},{components:r})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<o;i++)p[i]=r[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);