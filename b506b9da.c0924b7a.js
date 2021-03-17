(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(177)),o={},c={unversionedId:"v0/item-histories/GetItemHistories",id:"v0/item-histories/GetItemHistories",isDocsHomePage:!1,title:"GetItemHistories",description:"GetItemHistories",source:"@site/docs\\v0\\item-histories\\GetItemHistories.md",slug:"/v0/item-histories/GetItemHistories",permalink:"/linker-api-doc/docs/v0/item-histories/GetItemHistories",version:"current",sidebar:"default",previous:{title:"DeleteItemComment",permalink:"/linker-api-doc/docs/v0/item-histories/DeleteItemComment"},next:{title:"GetItemHistoriesOld",permalink:"/linker-api-doc/docs/v0/item-histories/GetItemHistoriesOld"}},s=[],d={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"getitemhistories"},"GetItemHistories"),Object(i.b)("p",null,"\u5c65\u6b74\u53d6\u5f97"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Description")),Object(i.b)("p",null,"\u30b3\u30e1\u30f3\u30c8\u3084\u30a2\u30af\u30b7\u30e7\u30f3\u5b9f\u884c\u306e\u5c65\u6b74\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),Object(i.b)("p",null,"\uff08\u6ce8\u610f\uff09"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u3053\u306eAPI\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u5b9f\u884c\u3057\u305f\u30e6\u30fc\u30b6\u30fc\u304c\u53d6\u5f97\u3057\u305f\u672a\u8aad\u5c65\u6b74\u306f\u65e2\u8aad\u306b\u5909\u66f4\u3055\u308c\u307e\u3059\u3002"),Object(i.b)("li",{parentName:"ul"},"\u8868\u793a\u4ef6\u6570\u306e\u6700\u5927\u4ef6\u6570\u306f100\u4ef6\u307e\u3067\u3068\u306a\u308a\u307e\u3059\u3002")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Method")),Object(i.b)("p",null,"GET"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request URL Format")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/datastores/:datastore-id/items/histories/:item-id\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Query Params")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'"from_index" int // \u53d6\u5f97\u5c65\u6b74\u306e\u6700\u521d\u5c65\u6b74Index(From) \u7701\u7565\u3059\u308b\u30680\u304c\u30bb\u30c3\u30c8\u3055\u308c\u307e\u3059\u3002\n"to_index" int // \u53d6\u5f97\u5c65\u6b74\u306e\u6700\u5f8c\u306eIndex(To)\u3002\u7701\u7565\u3059\u308b\u306830\u304c\u30bb\u30c3\u30c8\u3055\u308c\u307e\u3059\u3002  (To) - (From) \u304c\u8868\u793a\u4ef6\u6570\u3068\u306a\u308a\u307e\u3059\u3002\u8868\u793a\u4ef6\u6570\u306e\u6700\u5927\u4ef6\u6570\u306f100\u307e\u3067\u3068\u306a\u308a\u307e\u3059\u3002\n"from_datetime" Date // \u53d6\u5f97\u5c65\u6b74\u306e\u691c\u7d22From\u3000UTC\u65e5\u4ed8\u3092ISO 8601 \u306b\u57fa\u3065\u3044\u305f\u30d5\u30a9\u30fc\u30de\u30c3\u30c8[ YYYY-MM-DDThh:mm:ss.uuuZ ]\u306b\u3066\u6307\u5b9a. \u4f8b\uff09 new Date(Date.UTC(2020, 1, 2, 3, 4, 5)).toISOString(); \n"to_datetime" Date  // \u53d6\u5f97\u5c65\u6b74\u306e\u691c\u7d22\u7bc4\u56f2To UTC\u65e5\u4ed8\u3092ISO 8601 \u306b\u57fa\u3065\u3044\u305f\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u3066\u6307\u5b9a\n"exclude_action_history"  bool  //\u30a2\u30af\u30b7\u30e7\u30f3\u5b9f\u884c\u306b\u3088\u308b\u5c65\u6b74\u3092\u9664\u304f\u3002\u30b3\u30e1\u30f3\u30c8\u306e\u307f\u3092\u53d6\u5f97\u3059\u308b\u5834\u5408\u306btrue\u3092\u6307\u5b9a\n"exclude_comment_history" bool  //\u30b3\u30e1\u30f3\u30c8\u6295\u7a3f\u306b\u3088\u308b\u5c65\u6b74\u3092\u9664\u304f\u3002\u30a2\u30af\u30b7\u30e7\u30f3\u5b9f\u884c\u5c65\u6b74\u306e\u307f\u3092\u53d6\u5f97\u3059\u308b\u5834\u5408\u306btrue\u3092\u6307\u5b9a\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request URL Sample")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.xxx.com/api/v0/applications/AppID/datastores/DS-ID/items/histories/59ad2d8a0e247927638e761a\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Response Sample")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "unread": 2,  // \u672a\u8aad\u4ef6\u6570\u3000\uff08\u53d6\u5f97\u7d50\u679c\u306b\u95a2\u4fc2\u306a\u304f\u3001\u6307\u5b9a\u3057\u305fItem\u306e\u672a\u8aad\u300c\u5168\u4ef6\u6570\u300d\u304c\u30ab\u30a6\u30f3\u30c8\u3055\u308c\u307e\u3059\uff09\n    "histories": [\n        {\n            "history_id": "604384aa28dc5c20307cf4a2",\n            "display_order": 0,\n            "is_unread": true,  // \u672a\u8aad\n            "comment": "\u30b3\u30e1\u30f3\u30c8\u5185\u5bb9\u3067\u3059",\n            "created_at": "2021-03-06T13:33:30.29Z",\n            "action_id": "5f38a11daa39556e74845a4b", // \u30a2\u30af\u30b7\u30e7\u30f3\u306b\u3088\u308b\u5c65\u6b74\n            "action_name": "Update", // \u30a2\u30af\u30b7\u30e7\u30f3\u306b\u3088\u308b\u5c65\u6b74\n            "transaction_id": "604384aa28dc5c20307cf498", // \u3053\u306eID\u3092\u3082\u3068\u306b\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5909\u66f4\u5c65\u6b74\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\uff08API\u6e96\u5099\u4e2d\uff09\n            "action_operation": "2",\u3000// \u66f4\u65b0\u7cfb\u306e\u5834\u5408 "2" \u65b0\u898f\u306e\u5834\u5408 "1"\u304c\u8fd4\u3055\u308c\u307e\u3059\n            "is_status_action": true, // \u30b9\u30c6\u30fc\u30bf\u30b9\u306b\u7d10\u3065\u304f\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u5834\u5408\u3001true\u304c\u30bb\u30c3\u30c8\u3055\u308c\u307e\u3059\n            "datastore_id": "5f38a11baa395581685afdb4",\n            "datastore_name": "TODO-SAMPLE",\n            "user_id": "5fc9b4aaaa39557110839cf7",\n            "username": "h.i",\n            "email": "hi@xxx.com",\n            "updated_by": "5fc9b4aaaa39557110839cf7", // \u66f4\u65b0\u30e6\u30fc\u30b6\u30fcID\n            "updated_at": "2021-03-08T15:05:44.104Z", // \u66f4\u65b0\u65e5\n            "is_updated": true  // \u30b3\u30e1\u30f3\u30c8\u304c\u66f4\u65b0\u3055\u308c\u3066\u3044\u308b\u3068\u3001true\u304c\u30bb\u30c3\u30c8\u3055\u308c\u307e\u3059\n        },\n        {\n            "history_id": "6046212628dc5c0ca8114001",\n            "display_order": 1,\n            "is_unread": true, // \u672a\u8aad\n            "comment": "\u30b3\u30e1\u30f3\u30c8\uff12",   // \u30b3\u30e1\u30f3\u30c8\u306e\u307f\u306e\u5c65\u6b74\u306e\u5834\u5408\u3001action_id\u7b49\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u60c5\u5831\u304c\u542b\u307e\u308c\u307e\u305b\u3093\u3002\n            "created_at": "2021-03-08T13:05:42.924Z",\n            "datastore_id": "5f38a11baa395581685afdb4",\n            "datastore_name": "TODO-SAMPLE",\n            "user_id": "5fc9b4aaaa39557110839cf7",\n            "username": "h.iwasaki",\n            "email": "h.iwasaki@b-eee.com",\n            "updated_at": "2021-03-08T13:05:42.924Z", // \u30b3\u30e1\u30f3\u30c8\u66f4\u65b0\u304c\u306a\u3044\u5834\u5408\u3001created_at\u3068\u540c\u3058\n            "is_updated": false \n        },\n        {\n            "history_id": "6046211128dc5c0ca8113fff",\n            "display_order": 2,\n            "is_unread": false,\n            "comment": "\u30b3\u30e1\u30f3\u30c8",\n            "created_at": "2021-03-08T13:05:21.922Z",\n            "datastore_id": "5f38a11baa395581685afdb4",\n            "datastore_name": "TODO-SAMPLE",\n            "user_id": "5fc9b4aaaa39557110839cf7",\n            "username": "h.iwasaki",\n            "email": "h.iwasaki@b-eee.com",\n            "updated_at": "2021-03-08T13:05:21.922Z",\n            "is_updated": false \n        },\n        {\n            "history_id": "5f9441e328dc5c771c1f5a0a",\n            "display_order": 3,\n            "is_unread": false,\n            "comment": "\u66f4\u65b0\u3057\u307e\u3057\u305f",\n            "created_at": "2020-10-24T15:01:55.576Z",\n            "action_id": "5f38a11daa39556e74845a4b",  // \u30a2\u30af\u30b7\u30e7\u30f3\u306b\u3088\u308b\u5c65\u6b74\n            "action_name": "Update",\u3000 // \u30a2\u30af\u30b7\u30e7\u30f3\u306b\u3088\u308b\u5c65\u6b74\n            "transaction_id": "5f9441e328dc5c771c1f5a02", // \u30a2\u30af\u30b7\u30e7\u30f3\u306b\u3088\u308b\u5c65\u6b74\n            "datastore_id": "5f38a11baa395581685afdb4",\n            "datastore_name": "TODO-SAMPLE",\n            "user_id": "5f25952c28dc5c55b463bc76",\n            "username": "hi-hexabase",\n            "email": "hi@hexabase.com",\n            "updated_at": "2020-10-24T15:01:55.576Z",\n            "is_updated": false \n        },\n        {\n            "history_id": "5f45294228dc5ca3a826371e",\n            "display_order": 4,\n            "is_unread": false,\n            "comment": "\u65b0\u898f\u4f5c\u6210\u3057\u307e\u3057\u305f",\n            "created_at": "2020-08-25T15:07:46.335Z",\n            "action_id": "5f38a11daa39556e74845a4d",\u3000 // \u30a2\u30af\u30b7\u30e7\u30f3\u306b\u3088\u308b\u5c65\u6b74\n            "action_name": "New",\u3000\u3000 // \u30a2\u30af\u30b7\u30e7\u30f3\u306b\u3088\u308b\u5c65\u6b74\n            "datastore_id": "5f38a11baa395581685afdb4", // \u30a2\u30af\u30b7\u30e7\u30f3\u306b\u3088\u308b\u5c65\u6b74\n            "datastore_name": "TODO-SAMPLE",\n            "user_id": "5f25952c28dc5c55b463bc76",\n            "username": "hi-hexabase",\n            "email": "hi@hexabase.com",\n            "updated_at": "2020-08-25T15:07:46.335Z",\n            "is_updated": false \n        }\n    ]\n}\n')))}p.isMDXComponent=!0},177:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,b=u["".concat(o,".").concat(m)]||u[m]||l[m]||i;return a?r.a.createElement(b,c(c({ref:t},d),{},{components:a})):r.a.createElement(b,c({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);