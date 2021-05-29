(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{112:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return p})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(7),o=(r(0),r(187)),c=["components"],p={},l={unversionedId:"v0/group-users/AddUser",id:"v0/group-users/AddUser",isDocsHomePage:!1,title:"AddUser",description:"AddUser",source:"@site/docs/v0/group-users/AddUser.md",slug:"/v0/group-users/AddUser",permalink:"/linker-api-doc/docs/v0/group-users/AddUser",version:"current",sidebar:"default",previous:{title:"GetUsersInWorkspace",permalink:"/linker-api-doc/docs/v0/group-users/GetUsersInWorkspace"},next:{title:"UserInvite",permalink:"/linker-api-doc/docs/v0/group-users/UserInvite"}},s=[],i={toc:s};function u(e){var n=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(t.a)({},i,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"adduser"},"AddUser"),Object(o.b)("p",null,"\u30b0\u30eb\u30fc\u30d7\u306b\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u3092\u4f5c\u6210"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30b0\u30eb\u30fc\u30d7\u306b\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u3092\u4f5c\u6210\u3059\u308b"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"POST"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/users\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Content-Type : application/json")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "email": "\u30b0\u30eb\u30fc\u30d7\u306b\u8ffd\u52a0\u3057\u305f\u3044email\u30a2\u30c9\u30ec\u30b9",\u3000//\u5fc5\u9808\n  "g_id": "\u30b0\u30eb\u30fc\u30d7\u3092\u8b58\u5225\u3059\u308bID", //\u5fc5\u9808\n  "w_id": "\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306eID",\n  "username": "\u30b0\u30eb\u30fc\u30d7\u306b\u8ffd\u52a0\u3057\u305f\u3044\u30e6\u30fc\u30b6\u30fc\u540d"\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/users\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "added": false,\u3000//("bool \u8ffd\u52a0\u6e08\u307f\u304b\u3069\u3046\u304b")\n    "exists": false, //("b0ol \u65e2\u306b\u5b58\u5728\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u3000false=\u65b0\u898f\u3067\u5b58\u5728\u3057\u306a\u3044\u65b0\u3057\u3044\u30e6\u30fc\u30b6\u30fc")\n    "user_profile": { //("\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")\n        "confirmed": false,\u3000//("bool \u30e6\u30fc\u30b6\u30fcemail\u78ba\u8a8d\u6e08\u307f\u3000false=email\u4e0a\u78ba\u8a8d\u3055\u308c\u3066\u3044\u306a\u3044")\n        "email": "\u767b\u9332\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u306eemail", \n        "email_sent": false, //("bool email\u304c\u9001\u3089\u308c\u305f\u304b\u3069\u3046\u304b\u3000false=\u65e2\u306b\u5bfe\u8c61email\u306bemail\u304c\u9001\u3089\u308c\u3066\u3044\u308b")\n        "profile_pics": [//("\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u753b\u50cf\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")\n            {\n                "mediaLink": "https://storage.googleapis.com/linker/pub/default.png"\u3000//("\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u753b\u50cf\u306e\u4fdd\u5b58\u5148")\n            }\n        ],\n        "u_id": "\u767b\u9332\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u306eID",\n        "username": "\u767b\u9332\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u540d"\n    }\n}\n')))}u.isMDXComponent=!0},187:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),i=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},u=function(e){var n=i(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(r),d=t,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,p(p({ref:n},s),{},{components:r})):a.a.createElement(m,p({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:t,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);