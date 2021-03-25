(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{125:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),c=(r(0),r(174)),o={},p={unversionedId:"v0/workspaces/GetPasswordPolicy",id:"v0/workspaces/GetPasswordPolicy",isDocsHomePage:!1,title:"GetPasswordPolicy",description:"GetPasswordPolicy",source:"@site/docs/v0/workspaces/GetPasswordPolicy.md",slug:"/v0/workspaces/GetPasswordPolicy",permalink:"/linker-api-doc/docs/v0/workspaces/GetPasswordPolicy",version:"current",sidebar:"default",previous:{title:"CreateNewWorkspace",permalink:"/linker-api-doc/docs/v0/workspaces/CreateNewWorkspace"},next:{title:"GetWorkspaceUsage",permalink:"/linker-api-doc/docs/v0/workspaces/GetWorkspaceUsage"}},l=[],s={toc:l};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"getpasswordpolicy"},"GetPasswordPolicy"),Object(c.b)("p",null,"\u73fe\u5728\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u30dd\u30ea\u30b7\u30fc\u3092\u53d6\u5f97\u3057\u307e\u3059"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6307\u5b9a\u3057\u305f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u30dd\u30ea\u30b7\u30fc\u60c5\u5831\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),Object(c.b)("li",{parentName:"ul"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u30e6\u30fc\u30b6\u306f\u5229\u7528\u3067\u304d\u307e\u305b\u3093\uff08403:Forbidden\uff09")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"GET"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Format")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/workspaces/:workspace-id/password-policy\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL Params")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"workspace-id\u3000\u53d6\u5f97\u3057\u305f\u3044\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9ID\u3092\u6307\u5b9a\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Query Params")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"\u306a\u3057\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.xxx.com/api/v0/workspaces/58ca3597cce5fe3ea0a42fa8/password-policy\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "use_expired_day": false,\u3000// \u30d1\u30b9\u30ef\u30fc\u30c9\u6709\u52b9\u671f\u9650\u306e\u5229\u7528\u53ef\u5426\n    "use_lockout_count": false,\u3000// \u30d1\u30b9\u30ef\u30fc\u30c9\u30ed\u30c3\u30af\u306e\u5229\u7528\u53ef\u5426\n    "use_lockout_time": false,\u3000// \u30d1\u30b9\u30ef\u30fc\u30c9\u30ed\u30c3\u30af\u6642\u9593\u306e\u5229\u7528\u53ef\u5426\n    "use_min_length": false,\u3000\u3000// \u30d1\u30b9\u30ef\u30fc\u30c9\u6700\u5c0f\u6587\u5b57\u6570\u306e\u5229\u7528\u53ef\u5426\n    "use_pattern_check": false,\u3000// \u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u8907\u96d1\u6027\u30c1\u30a7\u30c3\u30af\u306e\u5229\u7528\u53ef\u5426\n    "use_same_limit": false,\u3000// \u30d1\u30b9\u30ef\u30fc\u30c9\u5931\u6557\u56de\u6570\u306e\u5229\u7528\u53ef\u5426\n    "expired_day": 30,  // \u30d1\u30b9\u30ef\u30fc\u30c9\u6709\u52b9\u671f\u9650\n    "lockout_count": 5, // \u30d1\u30b9\u30ef\u30fc\u30c9\u30ed\u30c3\u30af\u3055\u308c\u308b\u307e\u3067\u306e\u5931\u6557\u56de\u6570\n    "lockout_time": 5, // \u30d1\u30b9\u30ef\u30fc\u30c9\u30ed\u30c3\u30af\u6642\u9593\uff08\u5206\uff09\n    "min_length": 6, // \u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u6700\u5c0f\u6587\u5b57\u6570\n    "pattern_check_type": 0, // \u30d1\u30b9\u30ef\u30fc\u30c9\u30c1\u30a7\u30c3\u30af\u30d1\u30bf\u30fc\u30f3 (\u4e0b\u8a18\u53c2\u7167)\n    "same_limit": 2\n}\n')),Object(c.b)("h4",{id:"\u30d1\u30b9\u30ef\u30fc\u30c9\u30c1\u30a7\u30c3\u30af\u30d1\u30bf\u30fc\u30f3"},"\u30d1\u30b9\u30ef\u30fc\u30c9\u30c1\u30a7\u30c3\u30af\u30d1\u30bf\u30fc\u30f3"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'- 0: "\u30d1\u30b9\u30ef\u30fc\u30c9\u306b\u30b9\u30da\u30fc\u30b9\u3092\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093"\n- 1: "\u82f1\u30fb\u6570\u5b57\u4e21\u65b9\u3092\u542b\u3081\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059"\n- 2: "\u5b57\u3001\u6570\u5b57\u3001\u304a\u3088\u3073\u7279\u6b8a\u6587\u5b57\uff08!#$%-_=+<>\u306e\u3044\u305a\u308c\u304b\uff09\u3092\u542b\u3081\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059"\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Errors")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u304c\u3001\u6307\u5b9a\u3057\u305f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u5229\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u306f403\u30a8\u30e9\u30fc\u3068\u306a\u308a\u307e\u3059")))}i.isMDXComponent=!0},174:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),i=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=i(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return r?a.a.createElement(d,p(p({ref:t},s),{},{components:r})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);