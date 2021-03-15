(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),c=(n(0),n(168)),o={},p={unversionedId:"v1/workspaces/GetWorkspaces",id:"v1/workspaces/GetWorkspaces",isDocsHomePage:!1,title:"GetWorkspaces",description:"GetWorkspaces",source:"@site/docs/v1/workspaces/GetWorkspaces.md",slug:"/v1/workspaces/GetWorkspaces",permalink:"/linker-api-doc/docs/v1/workspaces/GetWorkspaces",version:"current",sidebar:"default",previous:{title:"UserInvite",permalink:"/linker-api-doc/docs/v1/users/UserInvite"},next:{title:"SelectWorkspace",permalink:"/linker-api-doc/docs/v1/workspaces/SelectWorkspace"}},s=[],l={toc:s};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"getworkspaces"},"GetWorkspaces"),Object(c.b)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u4e00\u89a7"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u304c\u5229\u7528\u53ef\u80fd\u306a\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u4e00\u89a7\u3092\u53d6\u5f97\u3057\u307e\u3059"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"GET"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Format")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/workspaces\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Params")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"\u7279\u306b\u306a\u3057\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.xxx.com/api/v0/workspaces\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "workspaces": [\n        {\n            "workspace_id": "582b26d7fb90a15e0c24ad80",\n            "workspace_name": "Test\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9"\n        },\n        {\n            "workspace_id": "58dfcd20fbfcba39c881021e",\n            "workspace_name": "ABC\u682a\u5f0f\u4f1a\u793e"\n        },\n        {\n            "workspace_id": "58ca3597cce5fe3ea0a42fa8",\n            "workspace_name": "XXXX\u90e8\u9580"\n        },\n        {\n            "workspace_id": "58ca3211cce5fe2e84446cd3",\n            "workspace_name": "\u25cb\u25cb\u25cb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"\n        },\n    ]\n}\n')))}i.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),i=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return n?a.a.createElement(f,p(p({ref:t},l),{},{components:n})):a.a.createElement(f,p({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);