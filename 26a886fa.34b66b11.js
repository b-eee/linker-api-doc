(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{177:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),i=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=i(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=i(r),d=n,m=b["".concat(p,".").concat(d)]||b[d]||s[d]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var l=2;l<o;l++)p[l]=r[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),o=(r(0),r(177)),p={},c={unversionedId:"v0/groups/CreateTopGroup",id:"v0/groups/CreateTopGroup",isDocsHomePage:!1,title:"CreateTopGroup",description:"CreateTopGroup",source:"@site/docs/v0/groups/CreateTopGroup.md",slug:"/v0/groups/CreateTopGroup",permalink:"/linker-api-doc/docs/v0/groups/CreateTopGroup",version:"current",sidebar:"default",previous:{title:"CreateGroup",permalink:"/linker-api-doc/docs/v0/groups/CreateGroup"},next:{title:"DeleteGroup",permalink:"/linker-api-doc/docs/v0/groups/DeleteGroup"}},u=[],l={toc:u};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"createtopgroup"},"CreateTopGroup"),Object(o.b)("p",null,"\u65b0\u898f\u30b0\u30eb\u30fc\u30d7\u4f5c\u6210","(","\u7b2c1\u968e\u5c64",")"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u30b0\u30eb\u30fc\u30d7\u306e\u7b2c1\u968e\u5c64\u306b\u3001\u65b0\u3057\u3044\u30b0\u30eb\u30fc\u30d7\u3092\u767b\u9332\u3057\u307e\u3059\u3002\u767b\u9332\u3057\u305f\u30b0\u30eb\u30fc\u30d7\u306f\u3001\u30c4\u30ea\u30fc\u306e\u76f4\u4e0b\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"POST"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/workspaces/:workspace-id/groups\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL Params")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"workspace-id    : \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9ID\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Content-Type : application/json")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "name": "\u30b0\u30eb\u30fc\u30d7\u540d",\n  "display_id": "\u30b0\u30eb\u30fc\u30d7\u3092\u8b58\u5225\u3059\u308bID\uff08\u7d44\u7e54\u30b3\u30fc\u30c9\u306a\u3069\uff09"\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/workspaces/582b26d7fb90a15e0c24ad80/groups\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "group": {\n        "name": "\u30b0\u30eb\u30fc\u30d7\u540d"\n        "id": "59bf3b300e24791418da1aa1",\n        "g_id": "59bf3b300e24791418da1aa1",\n        "access_key": "59bf3b300e24791418da1aa2",\n        "display_id": "\u30b0\u30eb\u30fc\u30d7\u3092\u8b58\u5225\u3059\u308bID\uff08\u7d44\u7e54\u30b3\u30fc\u30c9\u306a\u3069\uff09",\n        "created_at": "2017-09-18T12:19:12.007119961+09:00",\n    }\n}\n')))}i.isMDXComponent=!0}}]);