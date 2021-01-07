(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{119:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),c=(r(0),r(166)),o={},i={unversionedId:"API/v1/item-actions/CreateNewItemID",id:"API/v1/item-actions/CreateNewItemID",isDocsHomePage:!1,title:"CreateNewItemID",description:"CreateNewItemID",source:"@site/docs\\API\\v1\\item-actions\\CreateNewItemID.md",slug:"/API/v1/item-actions/CreateNewItemID",permalink:"/linker-api-doc/docs/API/v1/item-actions/CreateNewItemID",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API/v1/item-actions/CreateNewItemID.md",version:"current",sidebar:"someSidebar",previous:{title:"CreateItemWithItemID",permalink:"/linker-api-doc/docs/API/v1/item-actions/CreateItemWithItemID"},next:{title:"ExecuteAction",permalink:"/linker-api-doc/docs/API/v1/item-actions/ExecuteAction"}},p=[],b={toc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"createnewitemid"},"CreateNewItemID"),Object(c.b)("p",null,"\u65b0\u898f\u30a2\u30a4\u30c6\u30e0ID\u53d6\u5f97"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"\u65b0\u898f\u30a2\u30a4\u30c6\u30e0\u306e\u5165\u529b\u30d5\u30a9\u30fc\u30e0\u3092\u8868\u793a\u3059\u308b\u969b\u306b\u3001\u3042\u3089\u304b\u3058\u3081\u30a2\u30a4\u30c6\u30e0ID\u3092\u53d6\u5f97\u3059\u308b\u969b\u306b\u5229\u7528\u3057\u307e\u3059\u3002",Object(c.b)("br",{parentName:"p"}),"\n","\u53d6\u5f97\u3057\u305f\u30a2\u30a4\u30c6\u30e0ID\u306f\u3001\u30a2\u30a4\u30c6\u30e0\u767b\u9332\u524d\u306b\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u304c\u5fc5\u8981\u306a\u5834\u5408\u306b\u5229\u7528\u3057\u307e\u3059\u3002",Object(c.b)("br",{parentName:"p"}),"\n","\u3053\u306eAPI\u3067\u53d6\u5f97\u3057\u305fitem","_","id\u306f\u3001",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"api-document_jp.md#PostNewAction"}),"PostNewAction")," API\u3067\u65b0\u898f\u30a2\u30a4\u30c6\u30e0\u3092\u767b\u9332\u3059\u308b\u969b\u306b\u5229\u7528\u3057\u307e\u3059\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"POST"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Format")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"/api/v0/datastores/:datastore-id/items/create-id\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL Params")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"datastore-id    : \u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request Sample")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"POST https://api.xxx.com/api/v0/datastores/58bbaa27fbfcba6098746061/items/create-id\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "item_id": "5a2647410e24792d87451e34"\n}\n')))}s.isMDXComponent=!0},166:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(r),m=n,d=l["".concat(o,".").concat(m)]||l[m]||u[m]||c;return r?a.a.createElement(d,i(i({ref:t},b),{},{components:r})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);