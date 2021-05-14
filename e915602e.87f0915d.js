(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{176:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(186)),p={},c={unversionedId:"v0/groups/GetGroup",id:"v0/groups/GetGroup",isDocsHomePage:!1,title:"GetGroup",description:"GetGroup",source:"@site/docs/v0/groups/GetGroup.md",slug:"/v0/groups/GetGroup",permalink:"/linker-api-doc/docs/v0/groups/GetGroup",version:"current",sidebar:"default",previous:{title:"GetWorkspaceFunctionality",permalink:"/linker-api-doc/docs/v0/workspaces/GetWorkspaceFunctionality"},next:{title:"GetGroupTree",permalink:"/linker-api-doc/docs/v0/groups/GetGroupTree"}},u=[],i={toc:u};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"getgroup"},"GetGroup"),Object(a.b)("p",null,"\u30b0\u30eb\u30fc\u30d7\u60c5\u5831\u53d6\u5f97"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"\u6307\u5b9a\u3057\u305f\u30b0\u30eb\u30fc\u30d7\u60c5\u5831\u3068\u305d\u306e\u914d\u4e0b\u306e\u30b0\u30eb\u30fc\u30d7\u4e00\u89a7\u3092\u53d6\u5f97"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Method")),Object(a.b)("p",null,"GET"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Request URL Format")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/groups/:group-id\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},":group-id")," \u306f\u7701\u7565\u53ef\u3002\u7701\u7565\u3059\u308b\u3068\u3001TOP\u30b0\u30eb\u30fc\u30d7\u306e\u60c5\u5831\u3092\u8fd4\u3059\u3002")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Request URL Sample")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.xxx.com/api/v0/groups\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response Sample")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "error": "",\n    "group": {\n        "g_id": "\u89aa\u30b0\u30eb\u30fc\u30d7ID",\n        "group_id": "\u89aa\u30b0\u30eb\u30fc\u30d7\u306eDISPLAY_ID",\n        "name": "\u89aa\u30b0\u30eb\u30fc\u30d7\u540d",\n        "index": 0\u3000//("\u89aa\u30b0\u30eb\u30fc\u30d7\u4f4d\u7f6e")\n    },\n    "children": [], //("\u914d\u4e0b\u30b0\u30eb\u30fc\u30d7\u306e\u30b0\u30eb\u30fc\u30d7ID")\n    "count": 0 //\uff08"\u89aa\u30b0\u30eb\u30fc\u30d7\u306e\u914d\u4e0b\u6570"\uff09\n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Request Sample2")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.xxx.com/api/v0/groups/5c5fd6c084f4be2574e2bcb2\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response Sample2")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "error": "",\n    "group": {\n        "g_id": "\u89aa\u30b0\u30eb\u30fc\u30d7ID",\n        "group_id": "\u89aa\u30b0\u30eb\u30fc\u30d7\u306eDISPLAY_ID",\n        "name": "\u89aa\u30b0\u30eb\u30fc\u30d7\u540d",\n        "index": 0 //("\u89aa\u30b0\u30eb\u30fc\u30d7\u4f4d\u7f6e")\n    },\n    "children": [\n        {\n            "g_id": "\u914d\u4e0b\u30b0\u30eb\u30fc\u30d7ID",\n            "group_id": "\u914d\u4e0b\u30b0\u30eb\u30fc\u30d7\u306eDISPLAY_ID",\n            "name": "\u914d\u4e0b\u30b0\u30eb\u30fc\u30d7\u540d,\u3000\u4f8b\uff1a\u4e8b\u696d\u90e8A2",\n            "index": 0 //("\u914d\u4e0b\u30b0\u30eb\u30fc\u30d7\u4f4d\u7f6e")\n        },\n        {\n            "g_id": "\u914d\u4e0b\u30b0\u30eb\u30fc\u30d7ID",\n            "group_id": "\u914d\u4e0b\u30b0\u30eb\u30fc\u30d7\u306eDISPLAY_ID",\n            "name": "\u914d\u4e0b\u30b0\u30eb\u30fc\u30d7\u540d,\u3000\u4f8b\uff1a\u4e8b\u696d\u90e8A2",\n            "index": 1//("\u914d\u4e0b\u30b0\u30eb\u30fc\u30d7\u4f4d\u7f6e")\n        }\n    ],\n    "count": 2 //\uff08"\u89aa\u30b0\u30eb\u30fc\u30d7\u306e\u914d\u4e0b\u6570"\n}\n')))}l.isMDXComponent=!0},186:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),l=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=l(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),b=l(t),m=r,d=b["".concat(p,".").concat(m)]||b[m]||s[m]||a;return t?o.a.createElement(d,c(c({ref:n},i),{},{components:t})):o.a.createElement(d,c({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<a;i++)p[i]=t[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);