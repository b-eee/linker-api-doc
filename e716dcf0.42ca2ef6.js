(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(179)),p={},i={unversionedId:"v0/items/UpdateItem",id:"v0/items/UpdateItem",isDocsHomePage:!1,title:"UpdateItem",description:"UpdateItem",source:"@site/docs/v0/items/UpdateItem.md",slug:"/v0/items/UpdateItem",permalink:"/linker-api-doc/docs/v0/items/UpdateItem",version:"current",sidebar:"default",previous:{title:"ItemList",permalink:"/linker-api-doc/docs/v0/items/ItemList"},next:{title:"Login",permalink:"/linker-api-doc/docs/v0/login/Login"}},o=[],l={toc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"updateitem"},"UpdateItem"),Object(c.b)("p",null,"\u30a2\u30a4\u30c6\u30e0\u306e\u7de8\u96c6\uff08DisplayID\u306e\u5229\u7528\uff09"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"\u6307\u5b9a\u3057\u305f\u30a2\u30a4\u30c6\u30e0\u3092\u66f4\u65b0\u3057\u307e\u3059\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u3092\u6307\u5b9a\uff09"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"POST"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Format")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/datastores/:datastore-id/items/edit/:item-id\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL Params")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"app-id          : \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u307e\u305f\u306f\u5185\u90e8ID[p_id]\u3092\u6307\u5b9a\uff09\ndatastore-id    : \u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u307e\u305f\u306f\u5185\u90e8ID[d_id]\u3092\u6307\u5b9a\uff09\nitem-id         : \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0\u306eID\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Payload")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "comment": "test-comment"\n    "item": {\n        "CAR_NAME": "value": "\u540d\u524d\u306e\u30c7\u30fc\u30bf", // text tyepe\n        "CAR_TYPE": "5d4c058baa39555618ac9e98", // select type\n        "OPTIONS" : [ "58bbaa27fbfcba6098746061", "596e2327fbfcbab8283dde09"],  // checkbox type\n    },\n    "groups_to_publish":["\u753b\u9762\u30b0\u30eb\u30fc\u30d7ID", "\u30b7\u30b9\u30c6\u30e0\u306e\u30b0\u30eb\u30fc\u30d7ID"],\u3000// item \u3092\u95b2\u89a7\u53ef\u80fd\u3068\u3059\u308b\u30b0\u30eb\u30fc\u30d7ID\u3092\u6307\u5b9a\uff08\u7701\u7565\u53ef\uff09\n    "use_display_id" : true,  // ID\u306b\u753b\u9762ID\u3092\u5229\u7528\u3002 groups_to_publish\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u306ftrue\u3068\u3059\u308b\u3002\n    "is_force_update": true,\n    "return_item_result": true, // true\u6307\u5b9a\u3059\u308b\u3068\u3001\u767b\u9332\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u60c5\u5831\u3092\u8fd4\u3057\u307e\u3059\n    "related_ds_items" : {\n      "\u95a2\u9023\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID_1" : [{ },{ },{ },{ }... ] ,\n      "\u95a2\u9023\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID_2" : [{ },{ },{ },{ }... ] ,\n    },  // \u95a2\u9023\u3059\u308b\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u65b0\u898f\u30fb\u66f4\u65b0\u30fb\u524a\u9664\u3092\u6307\u5b9a  \u8a73\u7d30\u306f\u4ee5\u4e0b\u3092\u53c2\u7167\n}\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u95a2\u9023\u3059\u308b\u30a2\u30a4\u30c6\u30e0\u3082\u540c\u6642\u306b\u66f4\u65b0\u3059\u308b\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u6307\u5b9a")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'    "related_ds_items" : { // \u95a2\u9023\u3059\u308b\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u65b0\u898f\u30fb\u66f4\u65b0\u30fb\u524a\u9664\u3092\u6307\u5b9a\n      "RELATED_DS_1" : [\n        {\n          "operation" : 1,  // new\n          "action_id" : "", // new actionID\u3000\u203b\u7701\u7565\u53ef (\u7701\u7565\u3059\u308b\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u65b0\u898f\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5229\u7528\u3055\u308c\u308b)\n          "item": {\n            "FIELD_ID1" : "data",\n            "FIELD_ID2" : "data",\n            "FIELD_ID3" : "data",\n            "FIELD_ID4" : "data",\n          },\n          "related_ds_items" : {  // related_ds_items\u3092\u30cd\u30b9\u30c8\u3055\u305b\u308b\u3053\u3068\u3082\u53ef\u80fd\u3002\uff08\u540c\u4e00Datastore\u306e\u8907\u6570\u30cd\u30b9\u30c8\u3055\u305b\u308b\u3053\u3068\u306f\u4e0d\u53ef\uff09\n              "\u95a2\u9023\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID_3" : [{ },{ },{ },{ }... ] ,\n          }\n        },{\n          "operation" : 2,  // update\n          "action_id" : "", // update actionID\u3000\u203b\u7701\u7565\u53ef (\u7701\u7565\u3059\u308b\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u66f4\u65b0\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5229\u7528\u3055\u308c\u308b)\n          "i_id" : "58bbaa27fbfcba609874aaa3f", // \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0ID\n          "item": {\n            "FIELD_ID1" : "data",\n            "FIELD_ID3" : "data"\n          }\n        },{\n          "operation" : 3,  // delete\n          "action_id" : "", // delete actionID\u3000\u203b\u7701\u7565\u53ef (\u7701\u7565\u3059\u308b\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5229\u7528\u3055\u308c\u308b)\n          "i_id" : "58bbaa27fbfcba609874aqr45", // \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0ID\n        },{\n          // \u95a2\u9023\u3059\u308b\u8907\u6570\u30a2\u30a4\u30c6\u30e0\u3092\u6307\u5b9a\u53ef\u80fd\u3002sample \u7701\u7565\n        },{\n          // \u95a2\u9023\u3059\u308b\u8907\u6570\u30a2\u30a4\u30c6\u30e0\u3092\u6307\u5b9a\u53ef\u80fd\u3002sample \u7701\u7565\n        },{\n          // \u95a2\u9023\u3059\u308b\u8907\u6570\u30a2\u30a4\u30c6\u30e0\u3092\u6307\u5b9a\u53ef\u80fd\u3002sample \u7701\u7565\n        }\n      ]\n      "RELATED_DS_2" : [ // sample \u7701\u7565 ]\n      "RELATED_DS_3" : [ // sample \u7701\u7565 ]\n    }\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u66f4\u65b0\u7528Value\u306f",Object(c.b)("inlineCode",{parentName:"li"},"changes")," \u30d7\u30ed\u30d1\u30c6\u30a3\u3078\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u914d\u5217\u3067\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002\u3000")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'    "changes": [\n        {\n            "id": "CAR_TYPE",\n            "value": "5d4c058baa39555618ac9e98" // select type\n        },\n        {\n            "id": "CAR_NAME",\n            "value": "\u540d\u524d\u306e\u30c7\u30fc\u30bf" // text tyepe\n        },\n        {\n            "id": "OPTIONS",\n            "value": [ "58bbaa27fbfcba6098746061", "596e2327fbfcbab8283dde09"]  // checkbox type\n        }\n    ],\n')),Object(c.b)("p",null,"\u30a2\u30a4\u30c6\u30e0\u66f4\u65b0\u6642\u306b\u30b0\u30eb\u30fc\u30d7\u30ed\u30fc\u30eb\u3092\u4ed8\u4e0e\u3059\u308b\u3001\u753b\u9762\u30b0\u30eb\u30fc\u30d7ID\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306fuse_display_id\u3092true\u306b\u3059\u308b\u3001\u753b\u9762\u30b0\u30eb\u30fc\u30d7ID\u3092\u4f7f\u3046\u5834\u5408\u306f\u5168\u3066\u753b\u9762\u30b0\u30eb\u30fc\u30d7ID\u306b\u7d71\u4e00\u3059\u308b\u3001\u30b7\u30b9\u30c6\u30e0\u306e\u30b0\u30eb\u30fc\u30d7ID(g_id)\u306e\u5834\u5408\u5168\u3066\u305d\u308c\u306b\u7d71\u4e00\u3059\u308b\u3000\u73fe\u5728\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u6240\u6301\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u30ed\u30fc\u30eb\u3092\u5143\u306b\u30ed\u30fc\u30eb\u4ed8\u4e0e\u51fa\u6765\u308b\u304b\u5224\u65ad\u3002\u4f8b\uff1a\u30b0\u30eb\u30fc\u30d7\u30c4\u30ea\u30fc\u4e0b\u5c64\u304b\u3089\u4e0a\u5c64\u306b\u30b0\u30eb\u30fc\u30d7\u3092\u4ed8\u4e0e\u3067\u304d\u306a\u3044\u3000warning\u304c\u8fd4\u3055\u308c\u308b\u3002\u4e0a\u5c64\u304b\u3089\u4e0b\u5c64\u306b\u5411\u3051\u3066\u306f\u4ed8\u4e0e\u53ef\u80fd\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASEID/items/edit/5d4c058baa39555618ac9e8b\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"null\n")),Object(c.b)("p",null,'Payload \u306b "return_item_result": true\u3000\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001\u767b\u9332\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u60c5\u5831\u304c\u3082\u3069\u308b'),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"{\n  item: {\n    // \u767b\u9332\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u60c5\u5831\u304c\u3082\u3069\u308b\uff08\u95a2\u9023\u30a2\u30a4\u30c6\u30e0\u306e\u8a73\u7d30\u306f\u542b\u307e\u308c\u306a\u3044\uff09\n  }\n}\n")))}b.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(p,".").concat(d)]||s[d]||u[d]||c;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,p=new Array(c);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<c;l++)p[l]=n[l];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);