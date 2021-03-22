(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(176)),c={},p={unversionedId:"v0/users/UserInvite",id:"v0/users/UserInvite",isDocsHomePage:!1,title:"UserInvite",description:"UserInvite",source:"@site/docs/v0/users/UserInvite.md",slug:"/v0/users/UserInvite",permalink:"/linker-api-doc/docs/v0/users/UserInvite",version:"current",sidebar:"default",previous:{title:"UserImport",permalink:"/linker-api-doc/docs/v0/users/UserImport"},next:{title:"Workspace API",permalink:"/linker-api-doc/docs/v0/workspaces/README"}},i=[],s={toc:i};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"userinvite"},"UserInvite"),Object(o.b)("p",null,"\u30e6\u30fc\u30b6\u30fc\u3092\u62db\u5f85"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u30e6\u30fc\u30b6\u30fc\u3092\u62db\u5f85\u3059\u308b"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"POST"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/userinvite\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Content-Type : application/json")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "users": [\n        {\n            "email": "xxx@b-eee.com"\n        },\n        {\n            "email": "yyy@b-eee.com"\n        }\n    ],\n    "domain": "app.xxx.com",\n    "invitation_path": "\u62db\u5f85\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306e\u30d1\u30b9" // \u30aa\u30d7\u30b7\u30e7\u30f3 (\u30c7\u30d5\u30a9\u30eb\u30c8\uff1a \'confirm_email\')\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/userinvite\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'[\n    {\n        "email": "xxx@b-eee.com",\n        "stats": 200\n    },\n    {\n        "email": "yyyC@b-eee.com",\n        "stats": 200\n    }\n]\n')))}l.isMDXComponent=!0},176:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,O=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return t?a.a.createElement(O,p(p({ref:n},s),{},{components:t})):a.a.createElement(O,p({ref:n},s))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);