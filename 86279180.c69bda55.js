(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),c=(n(0),n(170)),i={},o={unversionedId:"v0/items/CreateItem",id:"v0/items/CreateItem",isDocsHomePage:!1,title:"CreateItem",description:"CreateItem",source:"@site/docs\\v0\\items\\CreateItem.md",slug:"/v0/items/CreateItem",permalink:"/linker-api-doc/docs/v0/items/CreateItem",version:"current",sidebar:"default",previous:{title:"GetUserQueries",permalink:"/linker-api-doc/docs/v0/items-search/GetUserQueries"},next:{title:"DeleteItem",permalink:"/linker-api-doc/docs/v0/items/DeleteItem"}},p=[],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"createitem"},"CreateItem"),Object(c.b)("p",null,"\u65b0\u898f\u30a2\u30a4\u30c6\u30e0\u3092\u4f5c\u6210\uff08DisplayID\u306e\u5229\u7528\uff09"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"\u65b0\u898f\u30a2\u30a4\u30c6\u30e0\u3092\u4f5c\u6210\u3057\u307e\u3059\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u3092\u6307\u5b9a\uff09"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"POST"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Format")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/datastores/:datastore-id/items/new\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL Params")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"app-id      : \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u3092\u6307\u5b9a\uff09\ndatastore-id    : \u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u3092\u6307\u5b9a\uff09\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASEID/items/new\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Payload")),Object(c.b)("p",null,"\uff08\u4f8b\uff09 ",Object(c.b)("inlineCode",{parentName:"p"},"Content-Type : application/json")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "item": {\n      "field_id": "\u767b\u9332\u30c7\u30fc\u30bf",\n      "title": "\u30bf\u30a4\u30c8\u30eb",\n      "assignee": "\u62c5\u5f53\u8005",\n  },\n  "return_item_result": true, // true\u6307\u5b9a\u3059\u308b\u3068\u3001\u767b\u9332\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u60c5\u5831\u3092\u8fd4\u3057\u307e\u3059\n  "related_ds_items" : {\n      "\u95a2\u9023\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID_1" : [{ },{ },{ },{ }... ] ,\n      "\u95a2\u9023\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID_2" : [{ },{ },{ },{ }... ] ,\n  },  // \u95a2\u9023\u3059\u308b\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u65b0\u898f\u30fb\u66f4\u65b0\u30fb\u524a\u9664\u3092\u6307\u5b9a  \u8a73\u7d30\u306f\u4ee5\u4e0b\u3092\u53c2\u7167\n}\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u95a2\u9023\u3059\u308b\u30a2\u30a4\u30c6\u30e0\u3082\u540c\u6642\u306b\u66f4\u65b0\u3059\u308b\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u6307\u5b9a")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'    "related_ds_items" : { // \u95a2\u9023\u3059\u308b\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u65b0\u898f\u30fb\u66f4\u65b0\u30fb\u524a\u9664\u3092\u6307\u5b9a\n      "RELATED_DS_1" : [\n        {\n          "operation" : 1,  // new\n          "action_id" : "", // new actionID\u3000\u203b\u7701\u7565\u53ef (\u7701\u7565\u3059\u308b\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u65b0\u898f\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5229\u7528\u3055\u308c\u308b)\n          "item": {\n            "FIELD_ID1" : "data",\n            "FIELD_ID2" : "data",\n            "FIELD_ID3" : "data",\n            "FIELD_ID4" : "data",\n          },\n          "related_ds_items" : {  // related_ds_items\u3092\u30cd\u30b9\u30c8\u3055\u305b\u308b\u3053\u3068\u3082\u53ef\u80fd\u3002\uff08\u540c\u4e00Datastore\u306e\u8907\u6570\u30cd\u30b9\u30c8\u3055\u305b\u308b\u3053\u3068\u306f\u4e0d\u53ef\uff09\n            "\u95a2\u9023\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID_3" : [{ },{ },{ },{ }... ] ,\n          }\n        },{\n          "operation" : 2,  // update\n          "action_id" : "", // update actionID\u3000\u203b\u7701\u7565\u53ef (\u7701\u7565\u3059\u308b\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u66f4\u65b0\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5229\u7528\u3055\u308c\u308b)\n          "i_id" : "58bbaa27fbfcba609874aaa3f", // \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0ID\n          "item": {\n            "FIELD_ID1" : "data",\n            "FIELD_ID3" : "data"\n          }\n        },{\n          "operation" : 3,  // delete\n          "action_id" : "", // delete actionID\u3000\u203b\u7701\u7565\u53ef (\u7701\u7565\u3059\u308b\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5229\u7528\u3055\u308c\u308b)\n          "i_id" : "58bbaa27fbfcba609874aqr45", // \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0ID\n        },{\n          // \u95a2\u9023\u3059\u308b\u8907\u6570\u30a2\u30a4\u30c6\u30e0\u3092\u6307\u5b9a\u53ef\u80fd\u3002sample \u7701\u7565\n        },{\n          // \u95a2\u9023\u3059\u308b\u8907\u6570\u30a2\u30a4\u30c6\u30e0\u3092\u6307\u5b9a\u53ef\u80fd\u3002sample \u7701\u7565\n        },{\n          // \u95a2\u9023\u3059\u308b\u8907\u6570\u30a2\u30a4\u30c6\u30e0\u3092\u6307\u5b9a\u53ef\u80fd\u3002sample \u7701\u7565\n        }\n      ]\n      "RELATED_DS_2" : [ // sample \u7701\u7565 ]\n      "RELATED_DS_3" : [ // sample \u7701\u7565 ]\n    }\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "error": null,\n    "history_id": "5d661782aa39559a80479492",\n    "item_id": "5a2647410e24792d87451e34",\n    "item": {\n      \u3000// Payload \u306b "return_item_result": true\u3000\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001\u767b\u9332\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u60c5\u5831\u304c\u3082\u3069\u308b\n    }\n}\n')))}s.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||c;return n?r.a.createElement(d,o(o({ref:t},l),{},{components:n})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);