(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(173)),i={},l={unversionedId:"API/v1/item-files/DeleteFile",id:"API/v1/item-files/DeleteFile",isDocsHomePage:!1,title:"DeleteFile",description:"DeleteFile",source:"@site/docs/API/v1/item-files/DeleteFile.md",slug:"/API/v1/item-files/DeleteFile",permalink:"/linker-api-doc/docs/API/v1/item-files/DeleteFile",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API/v1/item-files/DeleteFile.md",version:"current",sidebar:"default",previous:{title:"GetNewActions",permalink:"/linker-api-doc/docs/API/v1/item-actions/GetNewActions"},next:{title:"GetFile",permalink:"/linker-api-doc/docs/API/v1/item-files/GetFile"}},o=[],p={toc:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"deletefile"},"DeleteFile"),Object(c.b)("p",null,"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3057\u307e\u3059"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"DELETE"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Format")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"/api/v0/items/:item-id/fields/:field-id/attachments/:file-id\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Params")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"\u306a\u3057\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Sample")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"DELETE https://api.xxx.com/api/v0/items/59ad2d8a0e247927638e761a/fields/58cc9253fbfcba88307142d1/attachments/59af720c0e247958c7011a88\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"null\n")))}s.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||c;return n?a.a.createElement(f,l(l({ref:t},p),{},{components:n})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);