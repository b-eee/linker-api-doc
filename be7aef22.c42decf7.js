(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{154:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),c=(t(0),t(183)),i={},o={unversionedId:"v0/item-actions/ExecuteBulkAction",id:"v0/item-actions/ExecuteBulkAction",isDocsHomePage:!1,title:"ExecuteBulkAction",description:"ExecuteBulkAction",source:"@site/docs/v0/item-actions/ExecuteBulkAction.md",slug:"/v0/item-actions/ExecuteBulkAction",permalink:"/linker-api-doc/docs/v0/item-actions/ExecuteBulkAction",version:"current",sidebar:"default",previous:{title:"ExecuteActionByActionID",permalink:"/linker-api-doc/docs/v0/item-actions/ExecuteActionByActionID"},next:{title:"DeleteItem",permalink:"/linker-api-doc/docs/v0/item-actions/DeleteItem"}},l=[],s={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"executebulkaction"},"ExecuteBulkAction"),Object(c.b)("p",null,"\u6761\u4ef6\u3092\u6307\u5b9a\u3057\u3066\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4e00\u62ec\u5b9f\u884c\u3059\u308b"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6307\u5b9a\u3057\u305f\u6761\u4ef6\u306b\u30de\u30c3\u30c1\u3057\u305f\u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0\u306b\u5bfe\u3057\u3066\u4e00\u6589\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u3001\u30a2\u30a4\u30c6\u30e0\u306b\u66f4\u65b0\u3068\u30b3\u30e1\u30f3\u30c8\u3092\u4ed8\u4e0e\u3057\u307e\u3059\u3002"),Object(c.b)("li",{parentName:"ul"},"\u4e00\u62ec\u3067\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u5909\u66f4\u3059\u308b\u3088\u3046\u306a\u5229\u7528\u30b7\u30fc\u30f3\uff08\u4e00\u62ec\u627f\u8a8d\u3001\u306a\u3069\uff09\u3084\u3001\u4e00\u62ec\u3067\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5024\u3092\u4e00\u6589\u66f4\u65b0\u3059\u308b\u5834\u5408\u306a\u3069\u3067\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"),Object(c.b)("li",{parentName:"ul"},"\u540c\u6642\u51e6\u7406\u5b9f\u884c\u4ef6\u6570\u306f \u30c7\u30d5\u30a9\u30eb\u30c8\u3067100\u4ef6\u3067\u3059\u3002",Object(c.b)("inlineCode",{parentName:"li"},"max_items"),"\u30d1\u30e9\u30e1\u30fc\u30bf\u3067\u6700\u5927300\u4ef6\u307e\u3067\u6307\u5b9a\u304c\u53ef\u80fd\u3067\u3059\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"continue_proc")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092true\u306b\u3059\u308b\u3068\u3001\u5bfe\u8c61\u304c\u6700\u5927\u4ef6\u6570\u3092\u8d85\u3048\u305f\u5834\u5408\u306b\u6700\u5927\u4ef6\u6570\u307e\u3067\u66f4\u65b0\u3092\u304a\u3053\u306a\u3044\u307e\u3059\u3002\u7d50\u679cJSON\u306b\u542b\u307e\u308c\u308b",Object(c.b)("inlineCode",{parentName:"li"},"matched")," = ",Object(c.b)("inlineCode",{parentName:"li"},"processed"),"\u3068\u306a\u308b\u307e\u3067\u3053\u306eAPI\u3092\u8907\u6570\u56de\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u3001\u5168\u4ef6\u306e\u66f4\u65b0\u304c\u53ef\u80fd\u3067\u3059\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"item_revisions")," \u306bitem_id\u3068\u30ea\u30d3\u30b8\u30e7\u30f3\u756a\u53f7(rev_no)\u306emap\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u305d\u306e\u30ea\u30d3\u30b8\u30e7\u30f3\u756a\u53f7\u306b\u5f93\u3063\u3066\u6392\u4ed6\u30a8\u30e9\u30fc\u30c1\u30a7\u30c3\u30af\u3092\u304b\u3051\u307e\u3059\u3002\u7701\u7565\u3057\u305f\u5834\u5408\u306f\u3001\u5e38\u306b\u6700\u65b0\u306erev_no\u3092\u5224\u5b9a\u3057\u3066\u66f4\u65b0\u3057\u307e\u3059\u3002\uff08\u30ea\u30d3\u30b8\u30e7\u30f3\u756a\u53f7\u306e\u6307\u5b9a\u304c\u306a\u3044\u5834\u5408\u306f\u3001force_update\u30aa\u30d7\u30b7\u30e7\u30f3=true\u3068\u3057\u3066\u5b9f\u884c\u3057\u3001\u6392\u4ed6\u5236\u5fa1\u306f\u3055\u308c\u307e\u305b\u3093\uff09")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"POST"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Format")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"/api/v0/applications/:app-id/datastores/:datastore-id/items/bulkaction/:action-id\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Payload"),"\nconditions \u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",Object(c.b)("a",{parentName:"p",href:"#conditions"},"conditions"),"\u3092\u53c2\u7167"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Content-Type : application/json")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "conditions": [\n    {\n      "id": "i_id", // i_id \u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u6307\u5b9a\u3057\u305fItem\u3092\u5bfe\u8c61\u306b\u3067\u304d\u307e\u3059\n      "search_value": [\n        "58272f4efb90a148d850qwer", // item_id\n        "5846636efb90a1024d29as12", // item_id\n        "5846636efb90a1024d29asdf"  // item_id (\u8907\u6570\u4ef6\u3092\u6307\u5b9a\u53ef\u80fd)\n      ]\n    },\n    {\n      "id": "STATUS_FLD", // StatusID \u306e\u30d5\u30a3\u30fc\u30eb\u30c9ID\n      "search_value": [\n        "New"   // status_id \n      ]\n    }\n  ],\n  "item": { // Item\u3092\u66f4\u65b0\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u3068\u5024\u3092\u6307\u5b9a\u3057\u307e\u3059\n    "TEXT_FIELD_1": "\u66f4\u65b0\u30c7\u30fc\u30bf\u30b5\u30f3\u30d7\u30eb",  // field_id : \u66f4\u65b0value\n    "SELECT_FIELD_1": ["5ab84c1fcce5fe5c983ea186","5846636efb90a1024d2982fa" ], // select type Field\u306e\u5834\u5408 \u9078\u629e\u80a2ID o_id \u306e\u914d\u5217\u3092\u6307\u5b9a\n    "USER_FIELD_1": ["58272f4efb90a148d8508d9c","5ab84c1fcce5fe5c983ea999" ], // user type Field\u306e\u5834\u5408 user_id \u306e\u914d\u5217\u3092\u6307\u5b9a\n    "FILE_FIELD_1": ["5ab84c1fcce5fe5c983ea185","5ab84c1fcce5fe5c983ea789" ]\u3000// attachment file type Field\u306e\u5834\u5408\u3001file_id\u306e\u914d\u5217\u3092\u6307\u5b9a\n  },\n  "item_revisions": {  // item_revisions\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u8a72\u5f53\u3059\u308bItem\u306b\u3064\u3044\u3066\u6392\u4ed6\u30a8\u30e9\u30fc\u30c1\u30a7\u30c3\u30af\u3092\u304b\u3051\u307e\u3059\u3002\u7701\u7565\u3001\u307e\u305f\u306fRevision\u306e\u6307\u5b9a\u306e\u306a\u3044Item\u306f\u3001\u6307\u5b9a\u3057\u305f\u5024\u3067\u66f4\u65b0\u3055\u308c\u307e\u3059\uff08is_force_update: true\u304c\u9069\u7528\u3055\u308c\u308b\uff09\n     "58272f4efb90a148d850qwer": 1,  // item_id : rev_no\n     "5846636efb90a1024d29as12": 3,\n     "5846636efb90a1024d29asdf": 12\n  },\n  "comment": "\u4e00\u62ec\u627f\u8a8d", // \u30a2\u30af\u30b7\u30e7\u30f3\u5b9f\u884c\u6642\u306b\u30a2\u30a4\u30c6\u30e0\u3078\u4ed8\u52a0\u3059\u308b\u30b3\u30e1\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\n  "max_items": 100, // \u6700\u5927\u306e\u51e6\u7406\u5b9f\u884c\u4ef6\u6570. \u30c7\u30d5\u30a9\u30eb\u30c8\u306f100.\u3000\u6700\u5927300\u4ef6\u307e\u3067\u300210\u4ef6\u5358\u4f4d\u3067\u6307\u5b9a\u3059\u308b\uff0810,20,30,...300)\n  "use_display_id" : true, // \u753b\u9762ID\u3092\u6307\u5b9a true\u306e\u5834\u5408\u3001\u30d5\u30a3\u30fc\u30eb\u30c9ID\u306b\u753b\u9762ID\u3092\u5229\u7528\u53ef\u80fd\n  "continue_proc": true, // (default)false: \u5bfe\u8c61\u304cmax_items\u3092\u8d85\u3048\u3066\u3044\u305f\u3089\u30a8\u30e9\u30fc\uff081\u4ef6\u3082\u51e6\u7406\u3057\u306a\u3044\uff09, true\u306e\u5834\u5408\u3001\u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0\u4ef6\u6570\u304cmax_items\u3092\u8d85\u3048\u305f\u5834\u5408\u3001max_items\u4ef6\u307e\u3067\u51e6\u7406\u3092\u5b9f\u884c\u3059\u308b\u3002\n\u3000"access_key_updates": {\u3000\u3000// \u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u6307\u5b9a\n      "overwrite": true,\u3000 // \u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u4e0a\u66f8\u304d\u4fdd\u5b58\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\u306ffalse\uff1a\u65e2\u5b58\u306e\u30ad\u30fc\u306b\u8ffd\u52a0\u3059\u308b\uff09\n      "ignore_action_settings": true, // \u30a2\u30af\u30b7\u30e7\u30f3\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u516c\u958b\u8a2d\u5b9a\u3092\u5229\u7528\u3057\u306a\u3044\uff08\u3053\u306ePayload\u3067\u6307\u5b9a\u3057\u305f\u30ad\u30fc\u306e\u307f\u3092\u4ed8\u4e0e\u3059\u308b\uff09\n      "apply_related_ds": true,  // related_ds_items\u306b\u6307\u5b9a\u3057\u305f\u30a2\u30a4\u30c6\u30e0\u306b\u3082\u540c\u69d8\u306e\u8a2d\u5b9a\u3092\u5229\u7528\u3059\u308b\n      "groups_to_publish": ["GROUP1", "GROUP2"],  // group display_id\u3092\u6307\u5b9a\uff08\u5b9f\u884c\u30e6\u30fc\u30b6\u304c\u4fdd\u6301\u3059\u308b\u30ad\u30fc\u306e\u307f\u6307\u5b9a\u53ef\u80fd\uff09\n      "roles_to_publish": ["ADMIN", "MEMBER"], // role display_id\u3092\u6307\u5b9a\uff08\u5b9f\u884c\u30e6\u30fc\u30b6\u304c\u4fdd\u6301\u3059\u308b\u30ad\u30fc\u306e\u307f\u6307\u5b9a\u53ef\u80fd\uff09\n      "users_to_publish": ["607c2a25844887b6855a12a9", "5f25956428dc5c55b463bc77" ] // user_id\u3092\u6307\u5b9a\uff08\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u306b\u5b58\u5728\u3059\u308buser_id\u3092\u6307\u5b9a\u53ef\u80fd\uff09\n  }\n}\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u66f4\u65b0item\u306e\u60c5\u5831\u306f\u3001\u5909\u66f4\u70b9\u306e\u307f\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),Object(c.b)("li",{parentName:"ul"},"\u66f4\u65b0\u7528Value\u306f",Object(c.b)("inlineCode",{parentName:"li"},"changes")," \u30d7\u30ed\u30d1\u30c6\u30a3\u3078\u914d\u5217\u3067\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002\u3000")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'"changes": [\n    {\n      "id": "5a26722e0e24794c979fa5b6",\n      "value": "\u66f4\u65b0\u30c7\u30fc\u30bf\u30b5\u30f3\u30d7\u30eb"\n    },\n    {\n      "id": "5ab84bfecce5fe5c983ea184",  // user type Field\u306e\u5834\u5408\n      "value": [\n        "58272f4efb90a148d8508d9c", // user_id\n        "5846636efb90a1024d2982fa"  // user_id\n      ],\n    },\n    {\n      "id": "5ab0c239cce5fed3a859a910", // attachment file type Field\u306e\u5834\u5408\n      "value": [\n        "5ab84c1fcce5fe5c983ea185",  // file_id\n        "5ab84c1fcce5fe5c983ea186"   // file_id\n      ],\n    },\n  ]\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"POST https://api.xxx.com//api/v0/applications/TestApp/datastores/SampleDB/items/bulkaction/UpdateAction\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},'// \u6210\u529f\u6642\n{\n    "has_error": false,\n    "result": {\n        "matched": 99,\n        "processed": 99\n    }\n}\n\n// \u4e00\u90e8\u30a8\u30e9\u30fc\u6642\n{\n    "errors": [\n        {\n            "description": "item:601a572c28dc5c4e8c0783cd(d_id:5f263b7628dc5c6af0b1206a) has rev_no:4 but specified rev_no:2",\n            "error": "Revision number mismatch",\n            "error_code": "ITEM_REV_CONFLICT",           // \u6392\u4ed6\u30a8\u30e9\u30fc\n            "error_level": "ERROR",\n            "reference_id": "601a572c28dc5c4e8c0783cd"   // \u6392\u4ed6\u30a8\u30e9\u30fc\u6642\u306e\u5bfe\u8c61ItemID\n        },\n        {\n            "description": "error occurred when execute action",\n            "error": "Error",\n            "error_code": "SYSTEM_ERROR",\n            "error_level": "ERROR",\n            "reference_id": "5c6a674f84f4be1f241ff4af"  // \u30a8\u30e9\u30fc\u5bfe\u8c61\u306eItemID\n        }\n    ],\n    "has_error": true,\n    "result": {\n        "matched": 21,\n        "processed": 19\n    }\n}\n\n// \u5bfe\u8c61\u4ef6\u6570\u304cmax_items\u3092\u8d85\u3048\u305f\u5834\u5408\u3001Warn\u51fa\u529b\uff08\u4ee5\u4e0b\u306fmax_items:10\u3068\u8a2d\u5b9a\u3057\u305f\u4f8b\uff09\n{\n    "errors": [\n        {\n            "description": "the number of items has reached max_items 10",\n            "error_level": "WARN"\n        }\n    ],\n    "has_error": true,\n    "result": {\n        "matched": 15,\n        "processed": 10\n    }\n}\n\n// \u5bfe\u8c61\u4ef6\u6570\u304c\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u306f\u3001Warn\u51fa\u529b\n{\n    "errors": [\n        {\n            "description": "target was not found.",\n            "error": "",\n            "error_level": "WARN"\n        }\n    ],\n    "has_error": false,\n    "result": {\n        "matched": 0,\n        "processed": 0\n    }\n}\n')))}p.isMDXComponent=!0},183:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||c;return t?a.a.createElement(m,o(o({ref:n},s),{},{components:t})):a.a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=b;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);