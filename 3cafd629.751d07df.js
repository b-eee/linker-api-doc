(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(186)),i={},o={unversionedId:"v0/item-actions/ExecuteAction",id:"v0/item-actions/ExecuteAction",isDocsHomePage:!1,title:"ExecuteAction",description:"ExecuteAction",source:"@site/docs/v0/item-actions/ExecuteAction.md",slug:"/v0/item-actions/ExecuteAction",permalink:"/linker-api-doc/docs/v0/item-actions/ExecuteAction",version:"current",sidebar:"default",previous:{title:"UpdateItem",permalink:"/linker-api-doc/docs/v0/item-actions/UpdateItem"},next:{title:"ExecuteActionByActionID",permalink:"/linker-api-doc/docs/v0/item-actions/ExecuteActionByActionID"}},l=[],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"executeaction"},"ExecuteAction"),Object(c.b)("p",null,"\u6307\u5b9a\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"\u6307\u5b9a\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u3001\u30a2\u30a4\u30c6\u30e0\u66f4\u65b0\u3001\u30b3\u30e1\u30f3\u30c8\u306e\u8ffd\u8a18"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"POST"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request Format")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/datastores/:datastore-id/items/action/:item-id/:action-id\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Payload")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Content-Type : application/json")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "comment": "test-comment",\n  "return_item_result": true, // true\u6307\u5b9a\u3059\u308b\u3068\u3001\u66f4\u65b0\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u60c5\u5831\u3092\u8fd4\u3057\u307e\u3059\n  "return_actionscript_logs": false, // default false. true\u6307\u5b9a\u3059\u308b\u3068\u3001ActionScript\u5b9f\u884c\u30ed\u30b0\u3092\u8fd4\u5374\u3057\u307e\u3059\n  "item": {\n      "5e256923aeae8e212cb2e03b": "value", // text tyepe\n      "58bbaa27fbfcba6098746061": "5d4c058baa39555618ac9e98", // select type\n      "58bbaa27fbfcba6098746067" : [ "58bbaa27fbfcba6098746015", "596e2327fbfcbab8283dde09"],  // checkbox type\n  },\n  "rev_no":8,\u3000//\u73fe\u5728\u306erevison\u756a\u53f7\n  "related_ds_items" : {\n      "\u95a2\u9023\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID_1" : [{ },{ },{ },{ }... ] ,\n      "\u95a2\u9023\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID_2" : [{ },{ },{ },{ }... ] ,\n    },  // \u95a2\u9023\u3059\u308b\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u65b0\u898f\u30fb\u66f4\u65b0\u30fb\u524a\u9664\u3092\u6307\u5b9a  \u8a73\u7d30\u306f\u4ee5\u4e0b\u3092\u53c2\u7167\n  "access_key_updates": {\u3000\u3000// \u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u6307\u5b9a\n      "overwrite": true,\u3000 // \u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u4e0a\u66f8\u304d\u4fdd\u5b58\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\u306ffalse\uff1a\u65e2\u5b58\u306e\u30ad\u30fc\u306b\u8ffd\u52a0\u3059\u308b\uff09\n      "ignore_action_settings": true, // \u30a2\u30af\u30b7\u30e7\u30f3\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u516c\u958b\u8a2d\u5b9a\u3092\u5229\u7528\u3057\u306a\u3044\uff08\u3053\u306ePayload\u3067\u6307\u5b9a\u3057\u305f\u30ad\u30fc\u306e\u307f\u3092\u4ed8\u4e0e\u3059\u308b\uff09\n      "apply_related_ds": true,  // related_ds_items\u306b\u6307\u5b9a\u3057\u305f\u30a2\u30a4\u30c6\u30e0\u306b\u3082\u540c\u69d8\u306e\u8a2d\u5b9a\u3092\u5229\u7528\u3059\u308b\n      "groups_to_publish": ["GROUP1", "GROUP2"],  // group display_id\u3092\u6307\u5b9a\uff08\u5b9f\u884c\u30e6\u30fc\u30b6\u304c\u4fdd\u6301\u3059\u308b\u30ad\u30fc\u306e\u307f\u6307\u5b9a\u53ef\u80fd\uff09\n      "roles_to_publish": ["ADMIN", "MEMBER"], // role display_id\u3092\u6307\u5b9a\uff08\u5b9f\u884c\u30e6\u30fc\u30b6\u304c\u4fdd\u6301\u3059\u308b\u30ad\u30fc\u306e\u307f\u6307\u5b9a\u53ef\u80fd\uff09\n      "users_to_publish": ["607c2a25844887b6855a12a9", "5f25956428dc5c55b463bc77" ] // user_id\u3092\u6307\u5b9a\uff08\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u306b\u5b58\u5728\u3059\u308buser_id\u3092\u6307\u5b9a\u53ef\u80fd\uff09\n  }\n}\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u95a2\u9023\u3059\u308b\u30a2\u30a4\u30c6\u30e0\u3082\u540c\u6642\u306b\u66f4\u65b0\u3059\u308b\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u6307\u5b9a")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'    "related_ds_items" : { // \u95a2\u9023\u3059\u308b\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u65b0\u898f\u30fb\u66f4\u65b0\u30fb\u524a\u9664\u3092\u6307\u5b9a\n      "RELATED_DS_1" : [\n        {\n          "operation" : 1,  // new\n          "link_to_parent": true,  // \u89aaItem\u3068\u306e\u30c7\u30fc\u30bf\u30ea\u30f3\u30af\u3092\u4f5c\u6210\u3059\u308b\uff08\u53cc\u65b9\u306e\u30ea\u30f3\u30af\u304c\u4f5c\u6210\u3055\u308c\u308b\uff09 default: false(\u89aa\u2192\u6307\u5b9a\u3057\u305fi_id\u3078\u306e\u30ea\u30f3\u30af\u306e\u307f)\n          "action_id" : "", // new actionID\u3000\u203b\u7701\u7565\u53ef (\u7701\u7565\u3059\u308b\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u65b0\u898f\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5229\u7528\u3055\u308c\u308b)\n          "item": {\n            "FIELD_ID1" : "data",\n            "FIELD_ID2" : "data",\n            "FIELD_ID3" : "data",\n            "FIELD_ID4" : "data",\n          },\n          "related_ds_items" : {  // related_ds_items\u3092\u30cd\u30b9\u30c8\u3055\u305b\u308b\u3053\u3068\u3082\u53ef\u80fd\u3002\uff08\u540c\u4e00Datastore\u306e\u8907\u6570\u30cd\u30b9\u30c8\u3055\u305b\u308b\u3053\u3068\u306f\u4e0d\u53ef\uff09\n              "\u95a2\u9023\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID_3" : [{ },{ },{ },{ }... ] ,\n          }\n        },{\n          "operation" : 2,  // update\n          "action_id" : "Update2", // update actionID\u3000\u203b\u7701\u7565\u53ef (\u7701\u7565\u3059\u308b\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u66f4\u65b0\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5229\u7528\u3055\u308c\u308b)\n          "i_id" : "58bbaa27fbfcba609874aaa3f", // \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0ID\n          "item": {\n            "FIELD_ID1" : "data",\n            "FIELD_ID3" : "data"\n          }\n        },{\n          "operation" : 3,  // delete\n          "i_id" : "58bbaa27fbfcba609874aqr45", // \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0ID\n        },{\n          "operation" : 11,  // add link :\u30ea\u30f3\u30af\u3092\u4f5c\u6210\n          "link_to_parent": true,  // \u89aaItem\u3068\u306e\u30c7\u30fc\u30bf\u30ea\u30f3\u30af\u3092\u4f5c\u6210\u3059\u308b\uff08\u53cc\u65b9\u306e\u30ea\u30f3\u30af\u304c\u4f5c\u6210\u3055\u308c\u308b\uff09 default: false(\u89aa\u2192\u6307\u5b9a\u3057\u305fi_id\u3078\u306e\u30ea\u30f3\u30af\u306e\u307f)\n          "i_id" : "58bbaa27fbfcba609874aqr46", // \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0ID\n        },{\n          "operation" : 12,  // remove link :\u30ea\u30f3\u30af\u3092\u524a\u9664\n          "i_id" : "58bbaa27fbfcba609874aqr47", // \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0ID\n        },{\n          // \u95a2\u9023\u3059\u308b\u8907\u6570\u30a2\u30a4\u30c6\u30e0\u3092\u6307\u5b9a\u53ef\u80fd\u3002sample \u7701\u7565\n        },{\n          // \u95a2\u9023\u3059\u308b\u8907\u6570\u30a2\u30a4\u30c6\u30e0\u3092\u6307\u5b9a\u53ef\u80fd\u3002sample \u7701\u7565\n        },{\n          // \u95a2\u9023\u3059\u308b\u8907\u6570\u30a2\u30a4\u30c6\u30e0\u3092\u6307\u5b9a\u53ef\u80fd\u3002sample \u7701\u7565\n        }\n      ]\n      "RELATED_DS_2" : [ // sample \u7701\u7565 ]\n      "RELATED_DS_3" : [ // sample \u7701\u7565 ]\n    }\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u66f4\u65b0\u7528Value\u306f",Object(c.b)("inlineCode",{parentName:"li"},"changes")," \u30d7\u30ed\u30d1\u30c6\u30a3\u3078\u914d\u5217\u3067\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002\u3000")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'"changes": [\n    {\n      "id": "5e256923aeae8e212cb2e03b",\n      "value": "value"\n    },\n    {\n      "id": "58bbaa27fbfcba6098746061", \n      "value": "5d4c058baa39555618ac9e98",\n    },\n    {\n      "id": "58bbaa27fbfcba6098746067",\n      "value": [ "58bbaa27fbfcba6098746015", "596e2327fbfcbab8283dde09"],  // checkbox type\n    },\n  ]\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com//api/v0/applications/:app-id/datastores/:datastore-id/items/action/:item-id/:action-id\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"null\n")),Object(c.b)("p",null,'Payload \u306b "return_item_result": true\u3000\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001\u767b\u9332\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u60c5\u5831\u304c\u3082\u3069\u308b'),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"{\n  item: {\n    // \u767b\u9332\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u60c5\u5831\u304c\u3082\u3069\u308b\uff08\u95a2\u9023\u30a2\u30a4\u30c6\u30e0\u306e\u8a73\u7d30\u306f\u542b\u307e\u308c\u306a\u3044\uff09\n  }\n}\n")))}b.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||c;return n?r.a.createElement(m,o(o({ref:t},p),{},{components:n})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);