(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),p=(r(0),r(190)),o=["components"],c={},u={unversionedId:"v0/groups/UpdateGroup",id:"v0/groups/UpdateGroup",isDocsHomePage:!1,title:"UpdateGroup",description:"UpdateGroup",source:"@site/docs/v0/groups/UpdateGroup.md",slug:"/v0/groups/UpdateGroup",permalink:"/linker-api-doc/docs/v0/groups/UpdateGroup",version:"current",sidebar:"default",previous:{title:"CreateTopGroup",permalink:"/linker-api-doc/docs/v0/groups/CreateTopGroup"},next:{title:"DeleteGroup",permalink:"/linker-api-doc/docs/v0/groups/DeleteGroup"}},l=[],i={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h4",{id:"updategroup"},"UpdateGroup"),Object(p.b)("p",null,"\u30b0\u30eb\u30fc\u30d7\u306e\u66f4\u65b0"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Description")),Object(p.b)("p",null,"\u6307\u5b9a\u3057\u305f\u30b0\u30eb\u30fc\u30d7\u540d\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Method")),Object(p.b)("p",null,"PUT"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Request URL Format")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/workspaces/:workspace-id/groups/:group-id\n")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"URL Params")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-text"},"workspace-id    : \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9ID\ngroup-id        : \u30b0\u30eb\u30fc\u30d7ID\n")),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"Content-Type : application/json")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "name": "\u30b0\u30eb\u30fc\u30d7\u540d\u2192new name",\n  "display_id": "\u30b0\u30eb\u30fc\u30d7\u3092\u8b58\u5225\u3059\u308bID\uff08\u7d44\u7e54\u30b3\u30fc\u30c9\u306a\u3069\uff09"\n}\n')),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Request URL Sample")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-text"},"PUT https://api.xxx.com/api/v0/workspaces/582b26d7fb90a15e0c24ad80/groups/59bf3b300e24791418da1aa1\n")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Response Sample")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-text"},"null\n")))}b.isMDXComponent=!0},190:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),i=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=i(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=i(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||p;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<p;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);