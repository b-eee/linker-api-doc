(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(190)),o=["components"],c={},l={unversionedId:"v0/item-actions/CreateItem",id:"v0/item-actions/CreateItem",isDocsHomePage:!1,title:"CreateItem",description:"CreateItem",source:"@site/docs/v0/item-actions/CreateItem.md",slug:"/v0/item-actions/CreateItem",permalink:"/linker-api-doc/docs/v0/item-actions/CreateItem",version:"current",sidebar:"default",previous:{title:"GetInputFields",permalink:"/linker-api-doc/docs/v0/item-actions/GetInputFields"},next:{title:"CreateNewItemID",permalink:"/linker-api-doc/docs/v0/item-actions/CreateNewItemID"}},p=[],s={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"createitem"},"CreateItem"),Object(i.b)("p",null,"\u65b0\u898f\u30a2\u30a4\u30c6\u30e0\u3092\u4f5c\u6210\uff08DisplayID\u306e\u5229\u7528\uff09"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Description")),Object(i.b)("p",null,"\u65b0\u898f\u30a2\u30a4\u30c6\u30e0\u3092\u4f5c\u6210\u3057\u307e\u3059\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u3092\u6307\u5b9a\uff09"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Method")),Object(i.b)("p",null,"POST"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request URL Format")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/datastores/:datastore-id/items/new\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"URL Params")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"app-id      : \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u3092\u6307\u5b9a\uff09\ndatastore-id    : \u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u3092\u6307\u5b9a\uff09\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request URL Sample")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASEID/items/new\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Payload")),Object(i.b)("p",null,"\uff08\u4f8b\uff09 ",Object(i.b)("inlineCode",{parentName:"p"},"Content-Type : application/json")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "action_id": "NewAction2", // \uff08\u7701\u7565\u53ef\uff09\u7701\u7565\u3059\u308b\u3068\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u65b0\u898f\u767b\u9332Action\u306b\u3088\u308a\u3001\u767b\u9332\u3055\u308c\u307e\u3059\u3002 \u30a2\u30af\u30b7\u30e7\u30f3\u306e\u753b\u9762ID(display_id)\u307e\u305f\u306f \u5185\u90e8ID\uff08a_id\uff09\u3092\u6307\u5b9a\u53ef\u80fd\u3067\u3059\u3002\n  "item": {\n      "field_id": "\u767b\u9332\u30c7\u30fc\u30bf",\n      "title": "\u30bf\u30a4\u30c8\u30eb",\n      "assignee": "\u62c5\u5f53\u8005"\n  },\n  "return_item_result": true, // true\u6307\u5b9a\u3059\u308b\u3068\u3001\u767b\u9332\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u60c5\u5831\u3092\u8fd4\u3057\u307e\u3059\n  "related_ds_items" : {\n      "\u95a2\u9023\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID_1" : [{ },{ },{ },{ }... ] ,\n      "\u95a2\u9023\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID_2" : [{ },{ },{ },{ }... ] \n  },  // \u95a2\u9023\u3059\u308b\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u65b0\u898f\u30fb\u66f4\u65b0\u30fb\u524a\u9664\u3092\u6307\u5b9a  \u8a73\u7d30\u306f\u4ee5\u4e0b\u3092\u53c2\u7167\n\u3000"access_key_updates": {\u3000\u3000// \u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u6307\u5b9a\n      "overwrite": true,\u3000 // \u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u4e0a\u66f8\u304d\u4fdd\u5b58\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\u306ffalse\uff1a\u65e2\u5b58\u306e\u30ad\u30fc\u306b\u8ffd\u52a0\u3059\u308b\uff09\n      "ignore_action_settings": true, // \u30a2\u30af\u30b7\u30e7\u30f3\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u516c\u958b\u8a2d\u5b9a\u3092\u5229\u7528\u3057\u306a\u3044\uff08\u3053\u306ePayload\u3067\u6307\u5b9a\u3057\u305f\u30ad\u30fc\u306e\u307f\u3092\u4ed8\u4e0e\u3059\u308b\uff09\n      "apply_related_ds": true,  // related_ds_items\u306b\u6307\u5b9a\u3057\u305f\u30a2\u30a4\u30c6\u30e0\u306b\u3082\u540c\u69d8\u306e\u8a2d\u5b9a\u3092\u5229\u7528\u3059\u308b\n      "groups_to_publish": ["GROUP1", "GROUP2"],  // group display_id\u3092\u6307\u5b9a\uff08\u5b9f\u884c\u30e6\u30fc\u30b6\u304c\u4fdd\u6301\u3059\u308b\u30ad\u30fc\u306e\u307f\u6307\u5b9a\u53ef\u80fd\uff09\n      "roles_to_publish": ["ADMIN", "MEMBER"], // role display_id\u3092\u6307\u5b9a\uff08\u5b9f\u884c\u30e6\u30fc\u30b6\u304c\u4fdd\u6301\u3059\u308b\u30ad\u30fc\u306e\u307f\u6307\u5b9a\u53ef\u80fd\uff09\n      "users_to_publish": ["607c2a25844887b6855a12a9", "5f25956428dc5c55b463bc77" ] // user_id\u3092\u6307\u5b9a\uff08\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u306b\u5b58\u5728\u3059\u308buser_id\u3092\u6307\u5b9a\u53ef\u80fd\uff09\n  }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u95a2\u9023\u3059\u308b\u30a2\u30a4\u30c6\u30e0\u3082\u540c\u6642\u306b\u66f4\u65b0\u3059\u308b\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u6307\u5b9a")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    "related_ds_items" : { // \u95a2\u9023\u3059\u308b\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u65b0\u898f\u30fb\u66f4\u65b0\u30fb\u524a\u9664\u3092\u6307\u5b9a\n      "RELATED_DS_1" : [\n        {\n          "operation" : 1,  // new\n          "link_to_parent": true,  // \u89aaItem\u3068\u306e\u30c7\u30fc\u30bf\u30ea\u30f3\u30af\u3092\u4f5c\u6210\u3059\u308b\uff08\u53cc\u65b9\u306e\u30ea\u30f3\u30af\u304c\u4f5c\u6210\u3055\u308c\u308b\uff09 default: false(\u89aa\u2192\u6307\u5b9a\u3057\u305fi_id\u3078\u306e\u30ea\u30f3\u30af\u306e\u307f)\n          "action_id" : "", // new actionID\u3000\u203b\u7701\u7565\u53ef (\u7701\u7565\u3059\u308b\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u65b0\u898f\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5229\u7528\u3055\u308c\u308b)\n          "item": {\n            "FIELD_ID1" : "data",\n            "FIELD_ID2" : "data",\n            "FIELD_ID3" : "data",\n            "FIELD_ID4" : "data"\n          },\n          "related_ds_items" : {  // related_ds_items\u3092\u30cd\u30b9\u30c8\u3055\u305b\u308b\u3053\u3068\u3082\u53ef\u80fd\u3002\uff08\u540c\u4e00Datastore\u306e\u8907\u6570\u30cd\u30b9\u30c8\u3055\u305b\u308b\u3053\u3068\u306f\u4e0d\u53ef\uff09\n            "\u95a2\u9023\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID_3" : [{ },{ },{ },{ }... ] \n          }\n        },{\n          "operation" : 2,  // update\n          "action_id" : "", // update actionID\u3000\u203b\u7701\u7565\u53ef (\u7701\u7565\u3059\u308b\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u66f4\u65b0\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5229\u7528\u3055\u308c\u308b)\n          "link_to_parent": true,  // \u89aaItem\u3068\u306e\u30c7\u30fc\u30bf\u30ea\u30f3\u30af\u3092\u4f5c\u6210\u3059\u308b\uff08\u53cc\u65b9\u306e\u30ea\u30f3\u30af\u304c\u4f5c\u6210\u3055\u308c\u308b\uff09 default: false(\u89aa\u2192\u6307\u5b9a\u3057\u305fi_id\u3078\u306e\u30ea\u30f3\u30af\u306e\u307f)\n          "i_id" : "58bbaa27fbfcba609874aaa3f", // \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0ID\n          "item": {\n            "FIELD_ID1" : "data",\n            "FIELD_ID3" : "data"\n          }\n        },{\n          "operation" : 3,  // delete\n          "action_id" : "", // delete actionID\u3000\u203b\u7701\u7565\u53ef (\u7701\u7565\u3059\u308b\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5229\u7528\u3055\u308c\u308b)\n          "i_id" : "58bbaa27fbfcba609874aqr45" // \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0ID\n        },{\n          "operation" : 11,  // add link :\u30ea\u30f3\u30af\u3092\u4f5c\u6210\n          "link_to_parent": true,  // \u89aaItem\u3068\u306e\u30c7\u30fc\u30bf\u30ea\u30f3\u30af\u3092\u4f5c\u6210\u3059\u308b\uff08\u53cc\u65b9\u306e\u30ea\u30f3\u30af\u304c\u4f5c\u6210\u3055\u308c\u308b\uff09 default: false(\u89aa\u2192\u6307\u5b9a\u3057\u305fi_id\u3078\u306e\u30ea\u30f3\u30af\u306e\u307f)\n          "i_id" : "58bbaa27fbfcba609874aqr46" // \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0ID\n        },{\n          "operation" : 12,  // remove link :\u30ea\u30f3\u30af\u3092\u524a\u9664\n          "i_id" : "58bbaa27fbfcba609874aqr47" // \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0ID\n        },{\n          // \u95a2\u9023\u3059\u308b\u8907\u6570\u30a2\u30a4\u30c6\u30e0\u3092\u6307\u5b9a\u53ef\u80fd\u3002sample \u7701\u7565\n        },{\n          // \u95a2\u9023\u3059\u308b\u8907\u6570\u30a2\u30a4\u30c6\u30e0\u3092\u6307\u5b9a\u53ef\u80fd\u3002sample \u7701\u7565\n        },{\n          // \u95a2\u9023\u3059\u308b\u8907\u6570\u30a2\u30a4\u30c6\u30e0\u3092\u6307\u5b9a\u53ef\u80fd\u3002sample \u7701\u7565\n        }\n      ]\n      "RELATED_DS_2" : [ // sample \u7701\u7565 ]\n      "RELATED_DS_3" : [ // sample \u7701\u7565 ]\n    }\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Response Sample")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "error": null,\n    "history_id": "5d661782aa39559a80479492",\n    "item_id": "5a2647410e24792d87451e34",\n    "item": {\n      \u3000// Payload \u306b "return_item_result": true\u3000\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001\u767b\u9332\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u60c5\u5831\u304c\u3082\u3069\u308b\n    }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Errors")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306e\u30a8\u30e9\u30fc\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",Object(i.b)("a",{parentName:"li",href:"ExecuteAction"},"ExecuteAction"),"\u306e\u30a8\u30e9\u30fc\u8aac\u660e\u90e8\u5206\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),Object(i.b)("li",{parentName:"ul"},"\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9\u306f",Object(i.b)("a",{parentName:"li",href:"/docs/errors"},"\u3053\u3061\u3089"),"\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002")))}b.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);