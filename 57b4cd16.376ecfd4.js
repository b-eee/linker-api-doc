(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),c=(t(0),t(186)),i={},s={unversionedId:"v0/items-search/GlobalSearch",id:"v0/items-search/GlobalSearch",isDocsHomePage:!1,title:"GlobalSearch",description:"GlobalSearch",source:"@site/docs/v0/items-search/GlobalSearch.md",slug:"/v0/items-search/GlobalSearch",permalink:"/linker-api-doc/docs/v0/items-search/GlobalSearch",version:"current",sidebar:"default",previous:{title:"ItemList",permalink:"/linker-api-doc/docs/v0/items-search/ItemList"},next:{title:"GetItemDetails",permalink:"/linker-api-doc/docs/v0/items-search/GetItemDetails"}},l=[],o={toc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"globalsearch"},"GlobalSearch"),Object(c.b)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u306e\u30c7\u30fc\u30bf\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u5168\u6587\u691c\u7d22\u3092\u884c\u3046"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"\u6307\u5b9a\u3057\u305f\u30ef\u30fc\u30c9(query)\u306b\u5bfe\u3057\u3066\u3001\u5168\u6587\u691c\u7d22(Full-text-search)\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\n\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u8a2d\u5b9a\u3067\u3001\u300c\u5168\u6587\u691c\u7d22\u306e\u5bfe\u8c61\u3068\u3059\u308b\u300d\u30c1\u30a7\u30c3\u30af\u304cON\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u306e\u307f\u3001\u691c\u7d22\u5bfe\u8c61\u3068\u306a\u308a\u307e\u3059\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"POST"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Format")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/globalsearch\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL Params")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"(N/A)\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Payload")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},'query               : \u691c\u7d22\u30ef\u30fc\u30c9\u3092\u6307\u5b9a\uff08\u5fc5\u9808\uff09\ncategory            : "items", "files", "histories" \u306e\u3044\u305a\u308c\u304b\u3092\u6307\u5b9a\u3059\u308b\u3002\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u3059\u3079\u3066\u304c\u691c\u7d22\u5bfe\u8c61\u3068\u306a\u308b\u3002\n                      "items"         : Item\u5185\u306e\u30c7\u30fc\u30bf\u3092\u691c\u7d22\n                      "files"         : \u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u5185\u306e\u6587\u5b57\u3092\u691c\u7d22\n                      "histories"     : Item\u306e\u5c65\u6b74\u30b3\u30e1\u30f3\u30c8\u3092\u691c\u7d22\napp_id              : \u8a72\u5f53\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u307f\u3092\u691c\u7d22\u5bfe\u8c61\u3068\u3057\u305f\u3044\u5834\u5408\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\u3092\u6307\u5b9a\ndatastore_id        : \u8a72\u5f53\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u307f\u3092\u691c\u7d22\u5bfe\u8c61\u3068\u3057\u305f\u3044\u5834\u5408\u306b\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9ID\uff08datastore-id\uff09\u3092\u6307\u5b9a\nfield_id            : \u8a72\u5f53\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u307f\u3092\u691c\u7d22\u5bfe\u8c61\u3068\u3057\u305f\u3044\u5834\u5408\u306b\u3001\u30d5\u30a3\u30fc\u30eb\u30c9ID\u3092\u6307\u5b9a\nreturn_item_list    : true\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u8a72\u5f53\u3057\u305fItem\u306b\u5bfe\u3057\u3066\u3001[ItemList](/docs/v0/items/ItemList) \u3067\u691c\u7d22\u3057\u305f\u7d50\u679c\u3092\u8fd4\u5374\u3059\u308b\nitem_search_params  : [ItemList](/docs/v0/items/ItemList) \u306e\u7d5e\u8fbc\u6761\u4ef6\u3084\u3001\u30bd\u30fc\u30c8\u3001\u30da\u30fc\u30b8\u30cd\u30fc\u30b7\u30e7\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u53ef\u80fd\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/globalsearch\n")),Object(c.b)("h5",{id:"payload-sample"},"Payload sample"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "query": "\u30bf\u30b9\u30afX",\n    "category": "items",\n    "app_id": "TestApp",\n    "datastore_id": "TODO-SAMPLE",\n    "field_id": "Assignee",\n    "return_item_list": true,\n    "item_search_params": {\n        "page": 1, \n        "per_page" : 100,\n        "sort_fields" : [{ "id" :"ID", "order": "desc" }]\n    }\n}\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample"),'\n"return_item_list": false\u306e\u5834\u5408'),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "search_result": [ \n        {\n            "category": "items",\n            "d_id": "5f38a11baa395581685afdb4",\n            "datastore_name": "TODO-SAMPLE",\n            "f_id": "5f38a11baa39556e74845a39",\n            "highlight_value": {\n                "value": [\n                    "<em class=\'searched_em\'>X</em>"   // hit\u3057\u305f\u6587\u7ae0\u306e\u524d\u5f8c\u3092\u542b\u3081\u305f\u30cf\u30a4\u30e9\u30a4\u30c8\u5024\u304c\u8fd4\u308a\u307e\u3059\n                ]\n            },\n            "i_id": "5f38a121aa395581685afdc0",\n            "p_id": "5f25956528dc5c55b463bc7b",\n            "project_name": "TestApp",\n            "title": "TaskE",\n            "w_id": "5f25956428dc5c55b463bc78"\n        },\n        {\n            "category": "items",\n            "d_id": "5f38a11baa395581685afdb4",\n            "datastore_name": "TODO-SAMPLE",\n            "f_id": "5f38a11baa39556e74845a39",\n            "highlight_value": {\n                "value": [\n                    "<em class=\'searched_em\'>X</em>"\n                ]\n            },\n            "i_id": "5f38a121aa395581685afdc1",\n            "p_id": "5f25956528dc5c55b463bc7b",\n            "project_name": "TestApp",\n            "title": "TaskD",\n            "w_id": "5f25956428dc5c55b463bc78"\n        }\n    ]\n}\n')),Object(c.b)("p",null,'"return_item_list": true\u306e\u5834\u5408'),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "item_list": {\n        "items": [\n            {\n                "Assignee": "X",\n                "AutoNum1": "PREFIX_6",\n                "Category": "A",\n                "Checkbox": "A",\n                "DueDate": "2015-12-31T15:00:00Z",\n                "LU2": null,\n                "Lookup1": "bbb",\n                "Num1": "5",\n                "Num2": "12",\n                "Radio": "B",\n                "Status": "Closed",\n                "Title": "TaskE",\n                "Total": "17",\n                "created_at": "2020-08-16T02:59:45Z",\n                "created_by": "IMPORT",\n                "d_id": "5f38a11baa395581685afdb4",\n                "i_id": "5f38a121aa395581685afdc0",\n                "p_id": "5f25956528dc5c55b463bc7b",\n                "rev_no": "8",\n                "status_id": "5f38a11baa39556e74845a3e",\n                "title": "TaskE",\n                "unread": "0",\n                "updated_at": "2021-04-27T06:59:27Z",\n                "updated_by": "5f25952c28dc5c55b463bc76"\n            },\n            {\n                "Assignee": "X",\n                "Category": "B",\n                "Checkbox": "B",\n                "DueDate": "2015-12-31T15:00:00Z",\n                "Status": "In Review",\n                "Title": "TaskD",\n                "User": "hi-hexabase",\n                "created_at": "2020-08-16T02:59:45Z",\n                "created_by": "IMPORT",\n                "d_id": "5f38a11baa395581685afdb4",\n                "i_id": "5f38a121aa395581685afdc1",\n                "p_id": "5f25956528dc5c55b463bc7b",\n                "rev_no": "4",\n                "status_id": "5f38a11baa39556e74845a41",\n                "title": "TaskD",\n                "unread": "0",\n                "updated_at": "2020-09-30T14:04:30Z",\n                "updated_by": "5f25952c28dc5c55b463bc76"\n            }\n        ],\n        "totalItems": 2\n    },\n    "search_result": [\n        {\n            "category": "items",\n            "d_id": "5f38a11baa395581685afdb4",\n            "datastore_name": "TODO-SAMPLE",\n            "f_id": "5f38a11baa39556e74845a39",\n            "highlight_value": {\n                "value": [\n                    "<em class=\'searched_em\'>X</em>"\n                ]\n            },\n            "i_id": "5f38a121aa395581685afdc0",\n            "p_id": "5f25956528dc5c55b463bc7b",\n            "project_name": "TestApp",\n            "title": "TaskE",\n            "w_id": "5f25956428dc5c55b463bc78"\n        },\n        {\n            "category": "items",\n            "d_id": "5f38a11baa395581685afdb4",\n            "datastore_name": "TODO-SAMPLE",\n            "f_id": "5f38a11baa39556e74845a39",\n            "highlight_value": {\n                "value": [\n                    "<em class=\'searched_em\'>X</em>"\n                ]\n            },\n            "i_id": "5f38a121aa395581685afdc1",\n            "p_id": "5f25956528dc5c55b463bc7b",\n            "project_name": "TestApp",\n            "title": "TaskD",\n            "w_id": "5f25956428dc5c55b463bc78"\n        }\n    ]\n}\n')),Object(c.b)("p",null,"\u30c7\u30fc\u30bf\u304c\u30d2\u30c3\u30c8\u3057\u306a\u304b\u3063\u305f\u5834\u5408"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'{\n    "search_result": []\n    "item_list": {\n        "items": [],\n        "totalItems": 0\n    }\n}\n')))}b.isMDXComponent=!0},186:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),b=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=b(t),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||c;return t?r.a.createElement(m,s(s({ref:n},o),{},{components:t})):r.a.createElement(m,s({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<c;o++)i[o]=t[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);