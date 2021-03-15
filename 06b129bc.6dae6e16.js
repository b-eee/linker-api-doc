(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{168:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var l=2;l<o;l++)p[l]=r[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(168)),p={},c={unversionedId:"v1/items-import/GetImportResults",id:"v1/items-import/GetImportResults",isDocsHomePage:!1,title:"GetImportResults",description:"GetImportResults",source:"@site/docs/v1/items-import/GetImportResults.md",slug:"/v1/items-import/GetImportResults",permalink:"/linker-api-doc/docs/v1/items-import/GetImportResults",version:"current",sidebar:"default",previous:{title:"UpdateItemLink",permalink:"/linker-api-doc/docs/v1/item-links/UpdateItemLink"},next:{title:"ImportItems",permalink:"/linker-api-doc/docs/v1/items-import/ImportItems"}},i=[],l={toc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"getimportresults"},"GetImportResults"),Object(o.b)("p",null,"\u30c7\u30fc\u30bf\u30a4\u30f3\u30dd\u30fc\u30c8\u7d50\u679c\u306e\u53d6\u5f97"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u30c7\u30fc\u30bf\u30a4\u30f3\u30dd\u30fc\u30c8\u306e\u51e6\u7406\u7d50\u679c\u3092\u53d6\u5f97\u3059\u308b"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"GET"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request Format")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/datastores/:datastore-id/import/:temp-datastore-id\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Params")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"temp-datastore-id  :  \u30a4\u30f3\u30dd\u30fc\u30c8\u51e6\u7406\u6642\u306e\u7d50\u679cID\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.xxx.com/api/v0/datastores/59bf3a310e2479145baba476/import/59706031bc29a9afa46b59eb\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("p",null,"\u6210\u529f\u6642"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"\u306a\u3057\n")),Object(o.b)("p",null,"\u30a8\u30e9\u30fc\u6642"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "errors": [\n    {\n      "description": "Insert ERROR",\n      "line": 2\n    },\n    {\n      "description": "Update ERROR",\n      "line": 3\n    }\n  ]\n}\n')))}s.isMDXComponent=!0}}]);