(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(179)),i={},p={unversionedId:"v0/reports/GetReportDataByConditions",id:"v0/reports/GetReportDataByConditions",isDocsHomePage:!1,title:"GetReportDataByConditions",description:"GetReportDataByConditions",source:"@site/docs/v0/reports/GetReportDataByConditions.md",slug:"/v0/reports/GetReportDataByConditions",permalink:"/linker-api-doc/docs/v0/reports/GetReportDataByConditions",version:"current",sidebar:"default",previous:{title:"GetReportData",permalink:"/linker-api-doc/docs/v0/reports/GetReportData"},next:{title:"GetReportSearchConditions",permalink:"/linker-api-doc/docs/v0/reports/GetReportSearchConditions"}},c=[{value:"&quot;include_lookups&quot;: true\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408",id:"include_lookups-true\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408",children:[]},{value:"\u30a8\u30e9\u30fc\u30b1\u30fc\u30b9",id:"\u30a8\u30e9\u30fc\u30b1\u30fc\u30b9",children:[]}],l={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"getreportdatabyconditions"},"GetReportDataByConditions"),Object(o.b)("p",null,"\u6761\u4ef6\u3092\u6307\u5b9a\u3057\u3066\u30ec\u30dd\u30fc\u30c8\u30c7\u30fc\u30bf\u3092\u53d6\u5f97"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u6761\u4ef6\u3092\u6307\u5b9a\u3057\u3066\u30ec\u30dd\u30fc\u30c8\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"POST"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/reports/:report-id/filter\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'\n// \u691c\u7d22\u6761\u4ef6\u306e\u6307\u5b9a\n"conditions" : [] //\u691c\u7d22\u6761\u4ef6\u3092\u6307\u5b9a\n            // "id" : DataReport\u30d5\u30a3\u30fc\u30eb\u30c9\u306edisplay_id\u3000\u307e\u305f\u306f\u3001 "rpf_id"(/conditions API\u3067\u8fd4\u3055\u308c\u308b\u30ec\u30dd\u30fc\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9ID) \u3092\u6307\u5b9a\n            // "search_value": \u691c\u7d22\u6761\u4ef6\u3092\u914d\u5217\u3067\u6307\u5b9a\uff08\u30b5\u30f3\u30d7\u30eb\u3092\u53c2\u7167\uff09 \u203b\u30a2\u30a4\u30c6\u30e0\u4e00\u89a7\u306e\u6307\u5b9a\u3068\u540c\u69d8\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u30bf\u30a4\u30d7\u3054\u3068\u306b\u6307\u5b9a\u5185\u5bb9\u304c\u7570\u306a\u308b\n\n// \u30da\u30fc\u30b8\u30cd\u30fc\u30b7\u30e7\u30f3\n"per_page" : 10 // 1\u30da\u30fc\u30b8\u305f\u3042\u305f\u308a\u306e\u53d6\u5f97\u4ef6\u6570\u3000\uff08\u7701\u7565\u3001\u307e\u305f\u306f\u3001\u30bc\u30ed\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u5bfe\u8c61\u30c7\u30fc\u30bf\u5168\u4ef6\u3092\u8fd4\u3057\u307e\u3059\uff09\n"page" : 1 // \u30da\u30fc\u30b8\u6570 \n\n// \u30bd\u30fc\u30c8\u9806\u306e\u6307\u5b9a\uff08\u8907\u6570\u306e\u30bd\u30fc\u30c8\u30ad\u30fc\u6307\u5b9a\uff09\n"sort_fields": [\n    {"id": "Status", "order": "desc"},  // id\u306b\u306f\u3001 display_id \u307e\u305f\u306f rpf_id\u3092\u6307\u5b9a\u3000\n    {"id": "Category", "order": "asc"}\u3000// order \u306b\u306f\u30bd\u30fc\u30c8\u9806\u3092\u6307\u5b9a\u3000desc : \u964d\u9806\u3000ask : \u6607\u9806\u3000\uff08\u7701\u7565\u3059\u308b\u3068\u6607\u9806\u3068\u306a\u308a\u307e\u3059\uff09\n],\n\n// \u30bd\u30fc\u30c8\u9806\u306e\u6307\u5b9a\uff08\u5358\u4e00\u306e\u30bd\u30fc\u30c8\u30ad\u30fc\u6307\u5b9a\uff09\u203b"sort_fields": []\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u3053\u306e\u6307\u5b9a\u306f\u7121\u8996\u3055\u308c\u308c\u307e\u3059\uff08sort_fields\u304c\u512a\u5148\u3055\u308c\u308b\uff09\n"sort_field_id": "No",\u3000// display_id \u307e\u305f\u306f rpf_id\u3092\u6307\u5b9a\n"sort_order": "desc",  // asc \u307e\u305f\u306f desc\u3092\u6307\u5b9a\n\n// \u691c\u7d22\u7d50\u679c\u306b\u4f5c\u6210\u65e5\u3001\u66f4\u65b0\u65e5\u3092\u542b\u3081\u308b\u5834\u5408\u306f\u4ee5\u4e0b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u6307\u5b9a\u3057\u305f\u30c7\u30fc\u30bf\u306e\u4f5c\u6210\u65e5\u3001\u66f4\u65b0\u65e5\u304c\u7d50\u679c\u306b\u542b\u307e\u308c\u307e\u3059\u3002\uff08\u95a2\u9023\u5148\u3092\u7d50\u5408\u3057\u305f\u5834\u5408\u3001\u95a2\u9023\u5148\u30a2\u30a4\u30c6\u30e0\u306e\u4f5c\u6210\u65e5\u3001\u66f4\u65b0\u65e5\u306f\u542b\u307e\u308c\u307e\u305b\u3093\uff09\n"include_date_at": true,\n\n// \u691c\u7d22\u7d50\u679c\u306b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u53c2\u7167(Lookup)\u5148\u30a2\u30a4\u30c6\u30e0\u306e\u5024\u3092\u542b\u3081\u308b\u5834\u5408\u3001\u4ee5\u4e0b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\n"include_lookups": true, // default false\n\n// \u691c\u7d22\u7d50\u679c\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u53c2\u7167\u5148Item\u306eID(d_id, i_id,rev_no) \u3092\u542b\u3081\u308b\u5834\u5408\u3001\u4ee5\u4e0b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\n"include_item_ref": true, // default false\n\n// "include_lookups": true\u306e\u3068\u304d\u3001\u53c2\u7167\u5148Item\u306e\u6570\u5024\u578b\u30c7\u30fc\u30bf\u304cNumber\u3068\u3057\u3066\u51fa\u529b\u3059\u308b\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u3092\u6307\u5b9a\u3057\u307e\u3059\uff08default\u3067\u306f\u3001\u6570\u5024\u306f\u6587\u5b57\u5217("123")\u3067\u8fd4\u5374\u3055\u308c\u308b\uff09\n"return_number_value": true,\n\n// totalItems\uff08\u30d2\u30c3\u30c8\u3057\u305f\u4ef6\u6570\uff09\u306e\u307f\u3092\u8fd4\u5374\u3057\u307e\u3059\u3002report_results\u306b\u306fnull\u304c\u8fd4\u5374\u3055\u308c\u307e\u3059\u3002\n"return_count_only": true, // default false\n\n// totalItems\u306e\u691c\u7d22\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u6642\u9593\u3092\u79d2\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u305f\u5834\u5408\u3001totalCount\u306f-1\u304c\u8fd4\u308a\u307e\u3059\u3002\n"total_count_timeout_sec": 10 // default 60(s)\n\n// data_result_timeout_sec  report_results\u53d6\u5f97\u6642\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u79d2\u6570\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3059\u308b\u3068report_results\u306e\u53d6\u5f97\u304c\u7701\u7565(null)\u3055\u308c\u307e\u3059\u3002\n"data_result_timeout_sec": 20 // default 60(s)\n\n// totalItems\u3092\u8a08\u7b97\u3092\u7701\u7565\u3057\u307e\u3059\u3002totalItems\u306b\u306f\u304b\u306a\u3089\u305a0\u304c\u8fd4\u308a\u307e\u3059\u3002\u30c7\u30fc\u30bf\u91cf\u304c\u591a\u3044\u5834\u5408\u306f\u9855\u8457\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002\u691c\u7d22\u7d50\u679c\u306e\u51e6\u7406\u901f\u5ea6\u6539\u5584\u3057\u307e\u3059\u3002\n"omit_total_items": false, // default false\n\n\n// \u53d6\u5f97\u7d50\u679c\u304b\u3089\u3001"report_fields"\u90e8\u5206\u3092\u7701\u7565\u3067\u304d\u307e\u3059\uff08report_fields\u60c5\u5831\u304c\u4e0d\u8981\u306e\u969b\u306b\u30c7\u30fc\u30bf\u91cf\u3092\u524a\u6e1b\u3067\u304d\u307e\u3059\uff09\n"omit_fields_data" : true,\n\n// \u7d50\u679c\u3092CSV\u5f62\u5f0f\u53d6\u5f97\u3059\u308b\u5834\u5408\u3001"csv"\u3068\u6307\u5b9a\uff08\u7701\u7565\u3059\u308b\u3068JSON\u5f62\u5f0f\u3068\u306a\u308b\uff09\n"format": "csv" \n\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID/conditions\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload Sample")),Object(o.b)("p",null,"\u691c\u7d22\u6761\u4ef6\u306b\u753b\u9762ID\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3000\uff08id: \u306b\u30d5\u30a3\u30fc\u30eb\u30c9ID\u3092\u6307\u5b9a\u3057\u307e\u3059\uff09"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "conditions":[\n        { "id":"CATEGORY",  "search_value":["B"] } // CATEGORY\u30ab\u30e9\u30e0\u306e\u30c7\u30fc\u30bf\u5024B\u306e\u3082\u306e\u306e\u307f\u306b\u7d5e\u8fbc\u307f\n    ],\n    "sort_fields": [\n        {"id": "Status", "order": "desc"}, \u3000// \u7b2c\uff11\u30bd\u30fc\u30c8\u30ad\u30fc\n        {"id": "Category", "order": "asc"}\u3000// \u7b2c\uff12\u30bd\u30fc\u30c8\u30ad\u30fc\n    ],\n    "per_page" : 10,\n    "page" : 1\n}\n')),Object(o.b)("p",null,"\u30ec\u30dd\u30fc\u30c8\u7528\u30d5\u30a3\u30fc\u30eb\u30c9ID\u3092\u5229\u7528\u3059\u308b\u5834\u5408 \uff08rpf_id: \u306b\u30ec\u30dd\u30fc\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9ID\u3092\u6307\u5b9a\u3057\u307e\u3059\uff09"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "conditions":[\n        {\n            "rpf_id":"4552a666-508d-419c-ba99-7c9a16b24894",  // \u7279\u5b9a\u30ab\u30e9\u30e0\u306e\u5024\u3067\u7d5e\u8fbc\n            "search_value":["B"]\n        }\n    ],\n    "sort_field_id": "No",  // No \u30ab\u30e9\u30e0\u3067\u30bd\u30fc\u30c8\n    "sort_order": "desc", // \u964d\u9806\n    "format": "csv" // CSV\u5f62\u5f0f\u3067\u51fa\u529b\n    // per_page\u3092\u7701\u7565\uff1d\u5168\u4ef6\u3092\u51fa\u529b\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("p",null,"\u901a\u5e38\u306e\u7d50\u679c\u30b5\u30f3\u30d7\u30eb\u306b\u3064\u3044\u3066\u306f\u3001",Object(o.b)("a",{parentName:"p",href:"/linker-api-doc/docs/v0/reports/GetReportData"},"GetReportData")," \u3092\u53c2\u7167"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'\u203b\u3000JSON\u5f62\u5f0f\u306f\u3001\u30c7\u30fc\u30bf\u30ec\u30dd\u30fc\u30c8\u53d6\u5f97\u30b5\u30f3\u30d7\u30eb\u3068\u540c\u69d8\n\u203b\u3000format="csv"\u306e\u5834\u5408\u306f\u30011\u884c\u76ee\u304c\u30d8\u30c3\u30c0\u884c\u30012\u884c\u76ee\u4ee5\u964d\u306b\u30c7\u30fc\u30bf\u3092\u30ab\u30f3\u30de\u533a\u5207\u308a\u3067\u51fa\u529b\u3055\u308c\u308b\n')),Object(o.b)("h3",{id:"include_lookups-true\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408"},'"include_lookups": true\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408'),Object(o.b)("p",null,'"lookup_items" \u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u3001\u8a72\u5f53\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u53c2\u7167(Lookup)\u5148\u306e\u30a2\u30a4\u30c6\u30e0\u60c5\u5831\u304c\u5c55\u958b\u3055\u308c\u307e\u3059\u3002\nLookup\u5148\u306eItem\u304c\u518d\u5e30\u7684\u306b\u81ea\u5206\u306eItem\u3092\u53c2\u7167\u3057\u3066\u3044\u308b\u3088\u3046\u306a\u30b1\u30fc\u30b9\u3067\u306f\u3001\u6700\u5927\u30672\u56de\u307e\u3067\u5c55\u958b\u3055\u308c\u307e\u3059\u304c\u3001\uff08\u7121\u9650\u30eb\u30fc\u30d7\u3092\u907f\u3051\u308b\u305f\u3081\uff09\u305d\u308c\u4ee5\u4e0a\u306e\u547c\u3073\u51fa\u3057\u306f\u3055\u308c\u307e\u305b\u3093\u3002'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "report_fields": [\n        // (\u7701\u7565)  // omit_fields_data : true \u6307\u5b9a\u3059\u308b\u3068\u3001\u3053\u306e"report_fields"\u3092\u7701\u304f\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002\n    ],\n    "report_results": [\n        {\n            "ChildID": "3",\n            "LookupMySelf": "\u30bf\u30b9\u30afE", // Lookup type 1\n            "Status1": "\u78ba\u8a8d",\n            "Status2": "\u5b8c\u4e86",\n            "Title": "TaskD",\n            "Title2": "\u30bf\u30b9\u30afE",\n            "created_at": "2020/08/16 11:59:45",\n            "items": [\n                {\n                    "d_id": "5f38a11baa395581685afdb4",\n                    "i_id": "5f38a121aa395581685afdc1"\n                }\n            ],\n            "lookup_items": {\n                "LookupMySelf": { // Item values of Lookup type 1\n                    "Assignee": "X",\n                    "Category": "B",\n                    "DueDate": "2015-12-31T15:00:00Z",\n                    "LookupMySelf": "3",   // Item values of Lookup type 1 (LookupField in the Lookup Item)\n                    "Status": "\u5b8c\u4e86",\n                    "Title": "\u30bf\u30b9\u30afE",\n                    "created_at": "2020-08-16T04:06:14Z",\n                    "created_by": "IMPORT",\n                    "d_id": "5f38b0afaa395581685afdf6",\n                    "i_id": "5f38b0b6aa395581685afdff",\n                    "lookup_items": {\n                        "LookupMySelf": { // Item values of Lookup type 1 (Recursive Link... )\n                            "Assignee": "X",\n                            "Category": "B",\n                            "DueDate": "2015-12-31T15:00:00Z",\n                            "LookupMySelf": "4", // Recursive call will be limited by twice for the same datastores in the result\n                            "Title": "\u30bf\u30b9\u30afE",\n                            "created_at": "2020-08-16T04:06:14Z",\n                            "created_by": "IMPORT",\n                            "d_id": "5f38b0afaa395581685afdf6",\n                            "i_id": "5f38b0b6aa395581685afdff",\n                            "p_id": "5f25956528dc5c55b463bc7b",\n                            "rev_no": "4",\n                            "status_id": "5f38b0afaa39558bfca2963c",\n                            "title": "\u30bf\u30b9\u30afE",\n                            "updated_at": "2021-01-22T17:10:37Z",\n                            "updated_by": "5f25952c28dc5c55b463bc76"\n                        }\n                    },\n                    "p_id": "5f25956528dc5c55b463bc7b",\n                    "rev_no": "4",\n                    "status_id": "5f38b0afaa39558bfca2963c",\n                    "title": "\u30bf\u30b9\u30afE",\n                    "updated_at": "2021-01-22T17:10:37Z",\n                    "updated_by": "5f25952c28dc5c55b463bc76"\n                }\n            },\n            "updated_at": "2020/09/30 23:04:30"\n        }\n    ],\n    "report_title": "LookupJoin",\n    "error": "",\n    "totalItems": 9,\n    "item_index_from": 0,\n    "item_index_to": 0\n}\n')),Object(o.b)("h3",{id:"\u30a8\u30e9\u30fc\u30b1\u30fc\u30b9"},"\u30a8\u30e9\u30fc\u30b1\u30fc\u30b9"),Object(o.b)("p",null,"totalItems\u306e\u691c\u7d22\u3067\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u305f\u5834\u5408"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n    "report_results": [\n        ...(\u7701\u7565)\n    ],\n    "report_title": "ReportTitle",\n    "error": "error totalItems count process timeout. (3 sec elapsed)",\n    "totalItems": -1,\n    "item_index_from": 0,\n    "item_index_to": 4\n}\n')))}s.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(f,p(p({ref:t},l),{},{components:n})):a.a.createElement(f,p({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);