(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{127:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),c=(r(0),r(187)),p=["components"],o={title:"API Update 2021-03-25",author:"iwask",author_title:"iwask",author_url:"https://github.com/iwask",tags:["API","update",2021]},l={permalink:"/linker-api-doc/blog/2021/03/25/API_update",source:"@site/blog/2021-03-25-API_update.md",description:"Workspace\u95a2\u9023API\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",date:"2021-03-25T00:00:00.000Z",tags:[{label:"API",permalink:"/linker-api-doc/blog/tags/api"},{label:"update",permalink:"/linker-api-doc/blog/tags/update"},2021],title:"API Update 2021-03-25",readingTime:.355,truncated:!1,prevItem:{title:"API Update 2021-04-07",permalink:"/linker-api-doc/blog/2021/04/07/API_update"},nextItem:{title:"API Update 2021-03-15",permalink:"/linker-api-doc/blog/API"}},i=[],b={toc:i};function u(e){var t=e.components,r=Object(n.a)(e,p);return Object(c.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Workspace\u95a2\u9023API\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002\n\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u95a2\u9023API\u306f\u3001",Object(c.b)("a",{parentName:"p",href:"/docs/v0/workspaces/README"},Object(c.b)("strong",{parentName:"a"},"\u3053\u3061\u3089")),"\u306e\u30da\u30fc\u30b8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/v0/workspaces/README"},Object(c.b)("strong",{parentName:"a"},"Workspace API")))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"}),Object(c.b)("th",{parentName:"tr",align:"left"},"API Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Method"),Object(c.b)("th",{parentName:"tr",align:"left"},"URI"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"NEW"),Object(c.b)("td",{parentName:"tr",align:"left"},"[CreateNewWorkspace]"),Object(c.b)("td",{parentName:"tr",align:"left"},"POST"),Object(c.b)("td",{parentName:"tr",align:"left"},"/api/v0/workspaces"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u65b0\u898f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u4f5c\u6210\u3059\u308b")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"NEW"),Object(c.b)("td",{parentName:"tr",align:"left"},"[GetPasswordPolicy]"),Object(c.b)("td",{parentName:"tr",align:"left"},"GET"),Object(c.b)("td",{parentName:"tr",align:"left"},"/api/v0/workspaces/:workspace-id/password-policy"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u30dd\u30ea\u30b7\u30fc\u3092\u53d6\u5f97\u3059\u308b")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"NEW"),Object(c.b)("td",{parentName:"tr",align:"left"},"[GetWorkspaceUsage]"),Object(c.b)("td",{parentName:"tr",align:"left"},"GET"),Object(c.b)("td",{parentName:"tr",align:"left"},"/api/v0/workspaces/:workspace-id/usages"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u5229\u7528\u72b6\u6cc1(\u30e6\u30fc\u30b6\u6570\u3001DB\u6570\u306a\u3069)\u3092\u53d6\u5f97\u3059\u308b")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"NEW"),Object(c.b)("td",{parentName:"tr",align:"left"},"[GetWorkspaceFunctionality]"),Object(c.b)("td",{parentName:"tr",align:"left"},"GET"),Object(c.b)("td",{parentName:"tr",align:"left"},"/api/v0/workspaces/:workspace-id/functionalities"),Object(c.b)("td",{parentName:"tr",align:"left"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304c\u5229\u7528\u3067\u304d\u308b\u6a5f\u80fd\u8a2d\u5b9a\u3092\u53d6\u5f97\u3059\u308b")))))}u.isMDXComponent=!0},187:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),b=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=b(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=b(r),m=a,s=u["".concat(p,".").concat(m)]||u[m]||d[m]||c;return r?n.a.createElement(s,o(o({ref:t},i),{},{components:r})):n.a.createElement(s,o({ref:t},i))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,p=new Array(c);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var i=2;i<c;i++)p[i]=r[i];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);