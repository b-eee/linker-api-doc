(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),c=(r(0),r(166)),o={},p={unversionedId:"API/v1/workspaces/GetWorkspaces",id:"API/v1/workspaces/GetWorkspaces",isDocsHomePage:!1,title:"GetWorkspaces",description:"GetWorkspaces",source:"@site/docs\\API\\v1\\workspaces\\GetWorkspaces.md",slug:"/API/v1/workspaces/GetWorkspaces",permalink:"/docs/API/v1/workspaces/GetWorkspaces",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API/v1/workspaces/GetWorkspaces.md",version:"current",sidebar:"someSidebar",previous:{title:"UserInvite",permalink:"/docs/API/v1/users/UserInvite"},next:{title:"SelectWorkspace",permalink:"/docs/API/v1/workspaces/SelectWorkspace"}},s=[],i={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"getworkspaces"},"GetWorkspaces"),Object(c.b)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u4e00\u89a7"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u304c\u5229\u7528\u53ef\u80fd\u306a\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u4e00\u89a7\u3092\u53d6\u5f97\u3057\u307e\u3059"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"GET"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Format")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"/api/v0/workspaces\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Params")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"\u7279\u306b\u306a\u3057\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Sample")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"GET https://api.xxx.com/api/v0/workspaces\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "workspaces": [\n        {\n            "workspace_id": "582b26d7fb90a15e0c24ad80",\n            "workspace_name": "Test\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9"\n        },\n        {\n            "workspace_id": "58dfcd20fbfcba39c881021e",\n            "workspace_name": "ABC\u682a\u5f0f\u4f1a\u793e"\n        },\n        {\n            "workspace_id": "58ca3597cce5fe3ea0a42fa8",\n            "workspace_name": "XXXX\u90e8\u9580"\n        },\n        {\n            "workspace_id": "58ca3211cce5fe2e84446cd3",\n            "workspace_name": "\u25cb\u25cb\u25cb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"\n        },\n    ]\n}\n')))}l.isMDXComponent=!0},166:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,f=b["".concat(o,".").concat(m)]||b[m]||u[m]||c;return r?a.a.createElement(f,p(p({ref:t},i),{},{components:r})):a.a.createElement(f,p({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<c;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);