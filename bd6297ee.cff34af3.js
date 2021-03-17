(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{140:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(170)),c={},p={unversionedId:"v0/users/GetUsersInGroup",id:"v0/users/GetUsersInGroup",isDocsHomePage:!1,title:"GetUsersInGroup",description:"GetUsersInGroup",source:"@site/docs/v0/users/GetUsersInGroup.md",slug:"/v0/users/GetUsersInGroup",permalink:"/linker-api-doc/docs/v0/users/GetUsersInGroup",version:"current",sidebar:"default",previous:{title:"GetRoleUsers",permalink:"/linker-api-doc/docs/v0/users/GetRoleUsers"},next:{title:"GetUsersInWorkspace",permalink:"/linker-api-doc/docs/v0/users/GetUsersInWorkspace"}},s=[],u={toc:s};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"getusersingroup"},"GetUsersInGroup"),Object(o.b)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30b0\u30eb\u30fc\u30d7\u306e\u30e6\u30fc\u30b6\u30fc\u4e00\u89a7\u306e\u53d6\u5f97"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30b0\u30eb\u30fc\u30d7\u306e\u30e6\u30fc\u30b6\u30fc\u4e00\u89a7\u3092\u53d6\u5f97\u3059\u308b"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"GET"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/users/api/v0/groups/:group-id/users\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL Params")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"group-id :  \u30b0\u30eb\u30fc\u30d7ID\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Query Param")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"recursive        : bool  //\u30b0\u30eb\u30fc\u30d7\u968e\u5c64\u306e\u4e0b\u3092\u305f\u3069\u3063\u3066\u3001\u6240\u5c5e\u3059\u308b\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.xxx.com/api/v0/groups/5df9d7d7aeae8e2fa894e324/users?recursive=true\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "members": [\n        {\n            "u_id": "\u30e6\u30fc\u30b6\u30fcID",\n            "username": "\u30e6\u30fc\u30b6\u30fc\u540d",\n            "email": "\u30e6\u30fc\u30b6\u30fc\u306eemail",\n            "profile_pic": "https://storage.googleapis.com/linker/pub/default.png", //("\u753b\u50cf\u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u9818\u57df")\n            "confirmed": true, //("bool, \u3053\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u78ba\u8a8d\u6e08\u307f\u304b\u3069\u3046\u304b")\n            "email_sent": true,//("bool, \u3053\u306e\u30e6\u30fc\u30b6\u30fc\u306bemail\u304c\u9001\u3089\u308c\u305f\u304b\u3069\u3046\u304b")\n            "is_sv": true //("bool, \u3053\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u30b9\u30fc\u30d1\u30d0\u30a4\u30b6\u30fc\u578b\u304b\u3069\u3046\u304b\u3001true=supervisor\u3067\u3042\u308b")\n        } //("\u30e6\u30fc\u30b6\u30fc\u6bce\u306b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u8fd4\u3055\u308c\u308b")\n    ],\n    "count": 1//("\u3053\u306e\u30b0\u30eb\u30fc\u30d7\u5185\u90e8\u306b\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u6570")\n}\n')))}l.isMDXComponent=!0},170:function(e,r,t){"use strict";t.d(r,"a",(function(){return i})),t.d(r,"b",(function(){return O}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},i=function(e){var r=l(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),i=l(t),m=n,O=i["".concat(c,".").concat(m)]||i[m]||b[m]||o;return t?a.a.createElement(O,p(p({ref:r},u),{},{components:t})):a.a.createElement(O,p({ref:r},u))}));function O(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);