(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(170)),o={},i={unversionedId:"v0/item-actions/GetNewActions",id:"v0/item-actions/GetNewActions",isDocsHomePage:!1,title:"GetNewActions",description:"GetNewActions",source:"@site/docs\\v0\\item-actions\\GetNewActions.md",slug:"/v0/item-actions/GetNewActions",permalink:"/linker-api-doc/docs/v0/item-actions/GetNewActions",version:"current",sidebar:"default",previous:{title:"GetInputFields",permalink:"/linker-api-doc/docs/v0/item-actions/GetInputFields"},next:{title:"DeleteFile",permalink:"/linker-api-doc/docs/v0/item-files/DeleteFile"}},p=[],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"getnewactions"},"GetNewActions"),Object(c.b)("p",null,"\u65b0\u898f\u4f5c\u6210\u30a2\u30af\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc\u4e00\u89a7"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u304c\u5229\u7528\u53ef\u80fd\u306a",Object(c.b)("inlineCode",{parentName:"p"},"\u65b0\u898f\u4f5c\u6210\u30a2\u30af\u30b7\u30e7\u30f3"),"\u306e\u4e00\u89a7\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002",Object(c.b)("br",{parentName:"p"}),"\n","\u5229\u7528\u30b7\u30fc\u30f3\u3068\u3057\u3066\u306f\u3001\u4e00\u89a7\u753b\u9762\u7b49\u306b\u914d\u7f6e\u3055\u308c\u308b\u300c\u65b0\u898f\u4f5c\u6210\u300d\u30dc\u30bf\u30f3\u62bc\u4e0b\u6642\u7b49\u306bCall\u3057\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u5229\u7528\u53ef\u80fd\u306a\u65b0\u898f\u4f5c\u6210\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u30e1\u30cb\u30e5\u30fc\u3092\u8868\u793a\u3059\u308b\u969b\u306b\u5229\u7528\u3057\u307e\u3059\u3002",Object(c.b)("br",{parentName:"p"}),"\n","\u901a\u5e38\u65b0\u898f\u4f5c\u6210\u30e1\u30cb\u30e5\u30fc\u306f\uff11\u3064\u3067\u3059\u304c\u3001Hexabase\u3067\u306f\u8907\u6570\u306e\u65b0\u898f\u4f5c\u6210\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"GET"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Format")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/datastores/:datastore-id/new-action\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL Params")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"datastore-id    : \u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.xxx.com/api/v0/datastores/59bf42550e2479186a6c6c70/new-action\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "actions": [\n        {\n            "action_id": "5a2502f00e24792b67887200",  // \u30a2\u30af\u30b7\u30e7\u30f3ID\n            "display_order": 2,  // \u30e1\u30cb\u30e5\u30fc\u306e\u8868\u793a\u9806\u3002Hexabase\u306eAction\u30e1\u30cb\u30e5\u30fc\u306e\u30bd\u30fc\u30c8\u9806\n            "crud_type": "1",  // \u5e38\u306b1\uff08\u65b0\u898f\u767b\u9332\uff09\u304c\u8fd4\u308b\n            "next_status_id": "5a2502f00e24792b678871f8"   //\u30a2\u30af\u30b7\u30e7\u30f3\u5b9f\u884c\u5f8c\u3001\u9077\u79fb\u3059\u308b\u30b9\u30c6\u30fc\u30bf\u30b9ID\n        }\n    ]\n}\n')))}s.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||c;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);