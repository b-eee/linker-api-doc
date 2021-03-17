(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{177:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),i=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(t),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(m,l(l({ref:n},s),{},{components:t})):a.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return i}));var r=t(3),a=t(7),o=(t(0),t(177)),c={},l={unversionedId:"v0/users/AddUser",id:"v0/users/AddUser",isDocsHomePage:!1,title:"AddUser",description:"AddUser",source:"@site/docs/v0/users/AddUser.md",slug:"/v0/users/AddUser",permalink:"/linker-api-doc/docs/v0/users/AddUser",version:"current",sidebar:"default",previous:{title:"Users API",permalink:"/linker-api-doc/docs/v0/users/README"},next:{title:"GetAllUsersInWorkspace",permalink:"/linker-api-doc/docs/v0/users/GetAllUsersInWorkspace"}},p=[],s={toc:p};function i(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"adduser"},"AddUser"),Object(o.b)("p",null,"\u30b0\u30eb\u30fc\u30d7\u306b\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u3092\u4f5c\u6210"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30b0\u30eb\u30fc\u30d7\u306b\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u3092\u4f5c\u6210\u3059\u308b"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"POST"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/users\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Content-Type : application/json")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "email": "\u30b0\u30eb\u30fc\u30d7\u306b\u8ffd\u52a0\u3057\u305f\u3044email\u30a2\u30c9\u30ec\u30b9",\u3000//\u5fc5\u9808\n  "g_id": "\u30b0\u30eb\u30fc\u30d7\u3092\u8b58\u5225\u3059\u308bID", //\u5fc5\u9808\n  "w_id": "\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306eID",\n  "username": "\u30b0\u30eb\u30fc\u30d7\u306b\u8ffd\u52a0\u3057\u305f\u3044\u30e6\u30fc\u30b6\u30fc\u540d"\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/users\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "added": false,\u3000//("bool \u8ffd\u52a0\u6e08\u307f\u304b\u3069\u3046\u304b")\n    "exists": false, //("b0ol \u65e2\u306b\u5b58\u5728\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u3000false=\u65b0\u898f\u3067\u5b58\u5728\u3057\u306a\u3044\u65b0\u3057\u3044\u30e6\u30fc\u30b6\u30fc")\n    "user_profile": { //("\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")\n        "confirmed": false,\u3000//("bool \u30e6\u30fc\u30b6\u30fcemail\u78ba\u8a8d\u6e08\u307f\u3000false=email\u4e0a\u78ba\u8a8d\u3055\u308c\u3066\u3044\u306a\u3044")\n        "email": "\u767b\u9332\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u306eemail", \n        "email_sent": false, //("bool email\u304c\u9001\u3089\u308c\u305f\u304b\u3069\u3046\u304b\u3000false=\u65e2\u306b\u5bfe\u8c61email\u306bemail\u304c\u9001\u3089\u308c\u3066\u3044\u308b")\n        "profile_pics": [//("\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u753b\u50cf\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")\n            {\n                "mediaLink": "https://storage.googleapis.com/linker/pub/default.png"\u3000//("\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u753b\u50cf\u306e\u4fdd\u5b58\u5148")\n            }\n        ],\n        "u_id": "\u767b\u9332\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u306eID",\n        "username": "\u767b\u9332\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u540d"\n    }\n}\n')))}i.isMDXComponent=!0}}]);