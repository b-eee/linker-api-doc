(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{172:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return d})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return o}));var a=t(3),r=t(7),i=(t(0),t(179)),c={},d={unversionedId:"v0/items/ItemList",id:"v0/items/ItemList",isDocsHomePage:!1,title:"ItemList",description:"ItemList",source:"@site/docs/v0/items/ItemList.md",slug:"/v0/items/ItemList",permalink:"/linker-api-doc/docs/v0/items/ItemList",version:"current",sidebar:"default",previous:{title:"GetItemDetails",permalink:"/linker-api-doc/docs/v0/items/GetItemDetails"},next:{title:"UpdateItem",permalink:"/linker-api-doc/docs/v0/items/UpdateItem"}},l=[{value:"include_links : true\u3000\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u4f8b",id:"include_links--true-\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u4f8b",children:[]},{value:"include_lookups : true\u3000\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u4f8b",id:"include_lookups--true-\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u4f8b",children:[]}],u={toc:l};function o(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"itemlist"},"ItemList"),Object(i.b)("p",null,"\u30a2\u30a4\u30c6\u30e0\u4e00\u89a7\u306e\u53d6\u5f97"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Description")),Object(i.b)("p",null,"\u691c\u7d22\u6761\u4ef6\u3092\u6307\u5b9a\u3057\u3066\u30a2\u30a4\u30c6\u30e0\u306e\u4e00\u89a7\u3092\u53d6\u5f97\u3057\u307e\u3059"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Method")),Object(i.b)("p",null,"POST"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request URL Format")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/datastores/:datastore-id/items/search\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"URL Params")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"app-id      : \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u3092\u6307\u5b9a\uff09\ndatastore-id    : \u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u3092\u6307\u5b9a\uff09\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Payload")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},'conditions          : \u691c\u7d22\u6761\u4ef6\u3092\u6307\u5b9a\nuse_or_condition    : conditions\u306e\u6761\u4ef6\u306b\u5bfe\u3057\u3066OR\u6761\u4ef6\u3067\u691c\u7d22\u3057\u307e\u3059\uff08false\u307e\u305f\u306f\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u306f\u3001AND\u6761\u4ef6\u304c\u9069\u7528\u3055\u308c\u307e\u3059\uff09\nper_page            : \u691c\u7d22\u7d50\u679c\u306e\u4ef6\u6570(\u7701\u7565\u3001\u307e\u305f\u306f\u30010\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u5168\u4ef6\u53d6\u5f97\u3055\u308c\u307e\u3059\uff09\npage                : \u30da\u30fc\u30b8\u6570\nunread_only         : true\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u300c\u672a\u8aad\u5c65\u6b74\u3092\u3082\u3064Item\u300d\u306e\u307f\u306e\u7d5e\u8fbc\u6761\u4ef6\u304cconditions\u3078\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002\nsort_field_id       : \u30bd\u30fc\u30c8\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9ID\u3092\u6307\u5b9a(\u30bd\u30fc\u30c8\u30ad\u30fc\u304c1field\u306e\u307f\u306e\u5834\u5408)\nsort_order          : \u6607\u9806\u306e\u5834\u5408"asc" \u964d\u9806\u306e\u5834\u5408"desc"(\u30bd\u30fc\u30c8\u30ad\u30fc\u304c1field\u306e\u307f\u306e\u5834\u5408)\nsort_fields         : \u30bd\u30fc\u30c8\u30ad\u30fc\u304c\u8907\u6570\u3042\u308b\u5834\u5408\u306b\u6307\u5b9a\u3057\u307e\u3059\u3002 sort_field_id\u306b\u512a\u5148\u3057\u3066\u30bd\u30fc\u30c8\u306b\u5229\u7528\u3055\u308c\u307e\u3059\u3002 [{id: "FIELD_A", order: "asc"},{id: "FIELD_B", order: "desc"}]\n                      id\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u753b\u9762ID\u3001order\u306b\u30bd\u30fc\u30c8\u9806\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002order\u3092\u7701\u7565\u3067\u304d\u307e\u3059\u3002\u7701\u7565\u3059\u308b\u3068\u6607\u9806\u3068\u306a\u308a\u307e\u3059\u3002\n                      \u914d\u5217\u3067\u6307\u5b9a\u3057\u305f\u9806\u756a\u3067\u7b2c1\u30bd\u30fc\u30c8\u30ad\u30fc\u3001\u7b2c2\u30bd\u30fc\u30c8\u30ad\u30fc\u3068\u3044\u3046\u5f62\u3067\u9069\u7528\u3055\u308c\u307e\u3059\u3002\nuse_default_search  : true or false \u30c7\u30d5\u30a9\u30eb\u30c8\u691c\u7d22\u6761\u4ef6(\u6ce8)\u3092\u9069\u7528\u3059\u308b\u5834\u5408\u3001true\u3092\u6307\u5b9a\ninclude_links       : true \u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u95a2\u9023\u3059\u308b\u30a2\u30a4\u30c6\u30e0\u306eID\u306e\u914d\u5217\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\ninclude_lookups     : true \u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u53c2\u7167\u578b\u306e\u53c2\u7167\u5148\u30a2\u30a4\u30c6\u30e0\u60c5\u5831\u3092\u7d50\u679c\u306b\u542b\u3081\u307e\u3059\nreturn_count_only   : true\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001totalItems\u306e\u307f\u8fd4\u5374\u3057\u307e\u3059\u3002 items\u306f[] (\u7a7a\u914d\u5217)\u3068\u306a\u308a\u307e\u3059\u3002\nomit_fields_data    : \u7d50\u679c\u304b\u3089\u3001fields\u306e\u60c5\u5831\u3092\u542b\u3081\u307e\u305b\u3093\u3002\uff08\u4e0d\u8981\u306a\u901a\u4fe1\u30c7\u30fc\u30bf\u91cf\u3092\u7701\u7565\u3067\u304d\u307e\u3059\uff09\nomit_total_items    : true\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001totalItems\u3092\u30ab\u30a6\u30f3\u30c8\u3057\u307e\u305b\u3093\uff08\u3088\u308a\u9ad8\u901f\u306b\u306a\u308a\u307e\u3059\uff09 totalItems\u306f0\u3068\u306a\u308a\u307e\u3059\u3002\ndata_result_timeout_sec    : \u4e00\u89a7\u7d50\u679c\u53d6\u5f97\u307e\u3067\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u79d2\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u305f\u5834\u5408\u306f\u3001items\u306f[] (\u7a7a\u914d\u5217)\u3068\u306a\u308a\u307e\u3059\u3002\ntotal_count_timeout_sec    : \u4ef6\u6570\u53d6\u5f97\u307e\u3067\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u79d2\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u305f\u5834\u5408\u306f-1\u304c\u8fd4\u308a\u307e\u3059\u3002\nreturn_number_value : true \u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u6570\u5024\u578b\u30c7\u30fc\u30bf\u304cNumber\u3068\u3057\u3066\u51fa\u529b\u3055\u308c\u307e\u3059\uff08default\u3067\u306f\u3001\u6570\u5024\u306f\u6587\u5b57\u5217("123")\u3067\u8fd4\u5374\u3055\u308c\u308b\uff09\nformat              : "csv"\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u7d50\u679c\u3092CSV\u5f62\u5f0f\u3067\u51fa\u529b\u3055\u308c\u307e\u3059\n')),Object(i.b)("p",null," (\u6ce8\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u691c\u7d22\u6761\u4ef6"),"\u306f\u3001Hexabase\u7ba1\u7406UI\u306e\u4e00\u89a7\u753b\u9762\u306e\u691c\u7d22\u6761\u4ef6\u30c0\u30a4\u30a2\u30ed\u30b0\u5185\u3067\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3066\u6307\u5b9a\u3057\u307e\u3059\u3002)"),Object(i.b)("h4",{id:"conditions"},"conditions"),Object(i.b)("h5",{id:"conditions-\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u6307\u5b9a\u306b\u3064\u3044\u3066"},"conditions \u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u6307\u5b9a\u306b\u3064\u3044\u3066"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u65e5\u6642\u578b\u3001\u6642\u523b\u578b\u3001\u6570\u5024\u578b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5834\u5408\u3001 ",Object(i.b)("inlineCode",{parentName:"li"},"search_value")," \u306e\u4e00\u756a\u76ee\u306e\u5024\u304cFrom\u30012\u756a\u76ee\u306e\u5024\u304cTo\u3092\u610f\u5473\u3057\u307e\u3059\u3002"),Object(i.b)("li",{parentName:"ul"},"\u65e5\u6642\u578b\u3078\u6307\u5b9a\u3059\u308b\u5024\u306f\u3001\u5fc5\u305aUTC\u6642\u523b\uff08\u4e16\u754c\u6a19\u6e96\u6642\u523b\uff09\u3001ISO 8601 \u306b\u57fa\u3065\u3044\u305f\u30d5\u30a9\u30fc\u30de\u30c3\u30c8","[ YYYY-MM-DDThh:mm:ss.uuuZ ]","\u306b\u3066\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 ISO format\u3067\u306e\u6642\u523b\u53d6\u5f97\u4f8b : ",Object(i.b)("inlineCode",{parentName:"li"},"new Date(Date.UTC(2020, 1, 2, 3, 4, 5)).toISOString(); ")),Object(i.b)("li",{parentName:"ul"},"\u65e5\u6642\u578b\u3001\u6642\u523b\u578b\u3001\u6570\u5024\u578b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5834\u5408\u3001\u3069\u3061\u3089\u304b\u306bnull\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001From\uff5e\u3001To\uff5e\u306e\u3088\u3046\u306a\u691c\u7d22\u304c\u53ef\u80fd\u3068\u306a\u308a\u307e\u3059\u3002"),Object(i.b)("li",{parentName:"ul"},"\u65e5\u6642\u578b\u306e\u5834\u5408\u3001\u5024\u306b ",Object(i.b)("inlineCode",{parentName:"li"},'"TODAY"'),"\u3068\u3044\u3046\u6587\u5b57\u5217\u3092\u5165\u308c\u308b\u3068\u3001\u672c\u65e5\uff5e\u306e\u3088\u3046\u306a\u691c\u7d22\u304c\u53ef\u80fd\u3067\u3059\u3002"),Object(i.b)("li",{parentName:"ul"},"\u30c6\u30ad\u30b9\u30c8\u578b\u307e\u305f\u306f\u8907\u6570\u884c\u30c6\u30ad\u30b9\u30c8\u306e\u5834\u5408\u3001",Object(i.b)("inlineCode",{parentName:"li"},"search_value"),"\u306b\u6307\u5b9a\u3057\u305f\u6587\u5b57\u5217\u306f\u90e8\u5206\u4e00\u81f4\u306b\u3088\u308a\u30de\u30c3\u30c1\u3057\u307e\u3059\u3002"),Object(i.b)("li",{parentName:"ul"},"\u30c6\u30ad\u30b9\u30c8\u578b\u307e\u305f\u306f\u8907\u6570\u884c\u30c6\u30ad\u30b9\u30c8\u306e\u5834\u5408\u3001",Object(i.b)("inlineCode",{parentName:"li"},"search_value"),'\u306f\u6b63\u898f\u8868\u73fe\u3092\u6307\u5b9a\u53ef\u80fd\u3067\u3059\u3002\u6b63\u898f\u8868\u73fe\u306fPerl\u4e92\u63db\u5f62\u5f0f(PCRE)\u306b\u3088\u308b\u6307\u5b9a\u3068\u306a\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001"|"\u3067\u533a\u5207\u308b\u3068\u3001OR\u691c\u7d22\u304c\u53ef\u80fd\u3067\u3059\u3002'),Object(i.b)("li",{parentName:"ul"},'\u30c6\u30ad\u30b9\u30c8\u578b\u307e\u305f\u306f\u8907\u6570\u884c\u30c6\u30ad\u30b9\u30c8\u306e\u5834\u5408\u3001"exact_match": true\u3068\u3057\u305f\u5834\u5408\u3001\u5b8c\u5168\u4e00\u81f4\u306b\u3088\u308b\u691c\u7d22\u3068\u306a\u308a\u307e\u3059\u3002'),Object(i.b)("li",{parentName:"ul"},'"exact_match": true\u3068\u3057\u305f\u5834\u5408\u3001serach_value\u306e\u914d\u5217\u306b\u8907\u6570\u6587\u5b57\u5217\u3092\u6307\u5b9a\u3059\u308b\u3068OR\u691c\u7d22\u3068\u306a\u308a\u307e\u3059\u3002search_value: ','["A","B","C"]'," => A\u307e\u305f\u306fB\u307e\u305f\u306fC\u306b\u30de\u30c3\u30c1"),Object(i.b)("li",{parentName:"ul"},'"not_match": true \u3068\u3059\u308b\u3068\u3001\u6307\u5b9a\u3057\u305f\u5024\u306b\u5bfe\u3057\u3066NOT\u6761\u4ef6\u304c\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u3000')),Object(i.b)("h5",{id:"conditions\u306e\u30cd\u30b9\u30c8"},'"conditions"\u306e\u30cd\u30b9\u30c8'),Object(i.b)("p",null,"conditions\u5185\u306bconditions\u3092\u6307\u5b9a\u53ef\u80fd\u3067\u3059\u3002use_or_condition\u30d5\u30e9\u30b0\u3068\u5171\u306b\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001AND/OR\u6761\u4ef6\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u6761\u4ef6\u6307\u5b9a\u304c\u53ef\u80fd\u3067\u3059\u3002\n\u4f8b\uff09\u4f8b\u3048\u3070\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30ed\u30b8\u30c3\u30af\u306e\u5834\u5408\u3001"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'AND : {\n   OR: {\n     {"FieldA" == "X"},\n     {"FieldB" == "Y"}\n   }\n   AND: {\n     {"FieldA" is including "ABC"},\n     {"FieldC" != "Z"},\n   }\n}\n')),Object(i.b)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3001conditions\u3092\u30cd\u30b9\u30c8\u3057\u3066\u6761\u4ef6\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "conditions": [\n        {  \n           "conditions": [\n                {"id": "FieldA", "search_value": ["X"], "exact_match": true},\n                {"id": "FieldB", "search_value": ["Y"]}\n           ],\n           "use_or_condition": true // OR\u691c\u7d22\n        },\n        {  \n           "conditions": [\n                {"id": "FieldA", "search_value": ["ABC"]},\n                {"id": "FieldC", "search_value": ["Z"], "not_match": true}\n           ] // AND\u691c\u7d22\u6642\u3001"use_or_condition"\u306f\u7701\u7565\u53ef\u80fd\n        } \n    ],\n    "use_or_condition": false, // AND\u691c\u7d22\n\n    "page": 1,\n    "per_page": 0, // return all\n    "use_display_id": true,\n    "return_number_value": true\n}\n')),Object(i.b)("p",null,"\uff08\u6ce8\u610f\uff09\u30cd\u30b9\u30c8\u306e\u968e\u5c64\u306f\u3044\u304f\u3064\u3067\u3082\u6307\u5b9a\u53ef\u80fd\u3067\u3059\u304c\u3001\u30b3\u30fc\u30c9\u306e\u8907\u96d1\u5316\u3084\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u52a3\u5316\u306e\u30ea\u30b9\u30af\u3092\u907f\u3051\u308b\u305f\u3081\u3001\u30b7\u30f3\u30d7\u30eb\u306b\u8a2d\u8a08\u3059\u308b\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002"),Object(i.b)("h5",{id:"condition\u306b\u6307\u5b9a\u53ef\u80fd\u306a\u30d1\u30e9\u30e1\u30fc\u30bf"},"condition\u306b\u6307\u5b9a\u53ef\u80fd\u306a\u30d1\u30e9\u30e1\u30fc\u30bf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'"exact_match": true, // \u5b8c\u5168\u4e00\u81f4\u3067\u691c\u7d22\n"not_match": false, // true \u306b\u3059\u308b\u3068NOT\u6761\u4ef6\u304c\u9069\u7528\u3055\u308c\u308b\n"search_value": [\n  "ABC|DEF",\n  "GHI", \n  "JKL", // ABC or DEF or GHI or JKL\u3092\u691c\u7d22\n]\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'\u30c6\u30ad\u30b9\u30c8\u578b\u307e\u305f\u306f\u8907\u6570\u884c\u30c6\u30ad\u30b9\u30c8\u306e\u5834\u5408\u3001"exact_match": false\u3068\u3057\u305f\u5834\u5408\u3001serach_value\u306e1\u756a\u76ee\u306e\u5024\u306b\u5bfe\u3057\u3066\u6b63\u898f\u8868\u73fe\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002\u4f8b\u3048\u3070\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u6307\u5b9a\u3067OR\u691c\u7d22\u304c\u53ef\u80fd\u3067\u3059\u3002\u6b63\u898f\u8868\u73fe\u8a00\u8a9e\u3068\u3057\u3066PCRE\uff08Perl\u4e92\u63db\u6b63\u898f\u8868\u73fe\uff09\u306b\u5f93\u3044\u307e\u3059\u3002')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'"exact_match": false, \n"search_value": [\n  "ABC|DEF", // ABC \u307e\u305f\u306f DEF\u3092\u691c\u7d22\n]\n')),Object(i.b)("p",null,"\uff08conditions \u6307\u5b9a\u30b5\u30f3\u30d7\u30eb\uff09"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'  {\n  "conditions": [\n    {\n      "id": "FIELD_ID", // Hexabase\u753b\u9762\u3067\u5165\u529b\u3057\u305fID\u3092\u6307\u5b9a\n      "search_value": [\n        "fa"\n      ],\n      "exact_match": true, // \u5b8c\u5168\u4e00\u81f4\u3067\u691c\u7d22\n      "not_match": true, // search_value\u306b\u6307\u5b9a\u3057\u305f\u5024\u3067\u306a\u3044Item\u3092\u691c\u7d22(NOT\u6761\u4ef6)\n      "include_null": true // \u7a7a\u767d\u3092\u542b\u3080\n    },{\n      "id": "FIELD_ID2", \n      "search_value": [\n        "value"\n      ],\n      "exact_match": false, // \u90e8\u5206\u4e00\u81f4\u3067\u691c\u7d22\n      "include_null": false // \u7a7a\u767d\u3092\u9664\u304f\n    },{\n      "id": "i_id", // id\u306b "i_id" \u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u6307\u5b9a\u3057\u305fItem\u3092\u5bfe\u8c61\u306b\u3067\u304d\u307e\u3059\n      "search_value": [\n        "58272f4efb90a148d850qwer", // item_id\n        "5846636efb90a1024d29as12", // item_id\n        "5846636efb90a1024d29asdf"  // item_id (\u8907\u6570\u4ef6\u3092\u6307\u5b9a\u53ef\u80fd)(OR\u6761\u4ef6)\n      ]\n    },{\n      "id": "updated_by", // id\u306b "updated_by" \u307e\u305f\u306f "created_by" \u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u6307\u5b9a\u3057\u305f\u30e6\u30fc\u30b6\u30fc(u_id)\u304c\u66f4\u65b0\u3001\u4f5c\u6210\u3057\u305fItem\u3092\u691c\u7d22\u53ef\u80fd\u3067\u3059\u3002\n      "search_value": [\n        "58272f4efb90a148d850qwer", // user_id\n        "5846636efb90a1024d29as12", // user_id\n        "5846636efb90a1024d29asdf"  // user_id (\u8907\u6570\u4ef6\u3092OR\u6307\u5b9a\u53ef\u80fd)(OR\u6761\u4ef6)\n      ]\n    },{\n      "id": "updated_at", // id\u306b "updated_at" \u307e\u305f\u306f "created_at" \u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u66f4\u65b0\u65e5\u30fb\u4f5c\u6210\u65e5\u3067\u306e\u7bc4\u56f2\u691c\u7d22\u304c\u53ef\u80fd\u3067\u3059\u3002\n      "search_value": [\n        "2020-01-24T10:42:07.880Z",\n        null,                       // \u6307\u5b9a\u65e5\u4ed8\u4ee5\u5f8c\u306e\u66f4\u65b0\u3055\u308c\u305fItem\u3092\u6307\u5b9a\n      ]\n    },{\n      "id": "58bbaa27fbfcba773851339f", // \u65e5\u4ed8\u578b\u30d5\u30a3\u30fc\u30eb\u30c9\u3067\u306f "TODAY"\u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u6307\u5b9a\u53ef\u80fd\n      "search_value": [\n        "TODAY",\n        null     //\u672c\u65e5\u4ee5\u964d\u306eItem\u3092\u5bfe\u8c61\u3068\u3059\u308b\n      ],\n    },{\n      "id": "58bbaa27fbfcba773851339f", // \u6570\u5024\u578b\n      "search_value": [\n        null,\n        "100"  // 100\u4ee5\u4e0b\u306e\u5024\u3092\u691c\u7d22 \u203b\u6570\u5024\u3082""\u3067\u62ec\u3063\u3066\u6307\u5b9a\u3059\u308b\n      ],\n    },{\n      "id": "5e5f334e8250710006078dbd", // StatusID \u306e\u30d5\u30a3\u30fc\u30eb\u30c9ID\n      "search_value": [\n        "5e5f334e8250710006078dc0"   // status_id  \n      ]\n    }\n  ],\n  "page": 1,\n  "per_page": 100,\n  "sort_fields": [\n        {"id": "Status", "order": "desc"}, \u3000// \u7b2c\uff11\u30bd\u30fc\u30c8\u30ad\u30fc id:\u306f\u753b\u9762D\u3092\u6307\u5b9a\n        {"id": "Category", "order": "asc"}\u3000// \u7b2c\uff12\u30bd\u30fc\u30c8\u30ad\u30fc asc\u306e\u5834\u5408,order\u306f\u7701\u7565\u3067\u304d\u307e\u3059\n\u3000],\n  "sort_field_id": "FIELD_ID", // \u753b\u9762D\u3092\u6307\u5b9a\u3002\u30bd\u30fc\u30c8\u30ad\u30fc\u304c1\u3064\u306e\u5834\u5408\u306b\u5229\u7528\u3059\u308b\u3002sort_fields\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u3053\u306e\u6307\u5b9a\u306f\u7121\u8996\u3055\u308c\u307e\u3059\n  "sort_order": "asc",\n  "include_links" : true, // true or false.  true\u306e\u5834\u5408\u3001\u53d6\u5f97\u7d50\u679c\u306b\u5404Item\u306b\u95a2\u9023\u3059\u308bi_id\u306e\u914d\u5217\u3092\u542b\u3081\u308b\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request URL Sample")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/applications/5c6363d984f4be7de0350445/datastores/DATABASEID/items/search\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Response Sample")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'"use_display_id": true,\n"return_number_value":true\n\u3092\u6307\u5b9a\u3057\u3066\u691c\u7d22\u3057\u305f\u4f8b\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "items": [\n        {\n            "Assignee": "Y",\n            "Category": "C",\n            "Checkbox": "A,B,C",\n            "DueDate": "2015-12-31T15:00:00Z",\n            "Status": "\u4f5c\u696d\u4e2d",\n            "Title": "TaskC",\n            "User": "hi-hexabase",\n            "created_at": "2020-08-16T02:59:45Z",\n            "created_by": "IMPORT",\n            "d_id": "5f38a11baa395581685afdb4",\n            "i_id": "5f38a121aa395581685afdc2",\n            "p_id": "5f25956528dc5c55b463bc7b",\n            "rev_no": 4,\n            "status_id": "5f38a11baa39556e74845a42",\n            "title": "TaskC",\n            "unread": 0,\n            "updated_at": "2020-09-02T17:48:04Z",\n            "updated_by": "5f25952c28dc5c55b463bc76"\n        },\n        {\n            "Assignee": "X",\n            "Category": "B",\n            "Checkbox": "B",\n            "DueDate": "2015-12-31T15:00:00Z",\n            "Status": "\u78ba\u8a8d",\n            "Title": "TaskD",\n            "User": "hi-hexabase",\n            "created_at": "2020-08-16T02:59:45Z",\n            "created_by": "IMPORT",\n            "d_id": "5f38a11baa395581685afdb4",\n            "i_id": "5f38a121aa395581685afdc1",\n            "p_id": "5f25956528dc5c55b463bc7b",\n            "rev_no": 4,\n            "status_id": "5f38a11baa39556e74845a41",\n            "title": "TaskD",\n            "unread": 0,\n            "updated_at": "2020-09-30T14:04:30Z",\n            "updated_by": "5f25952c28dc5c55b463bc76"\n        },\n        {\n            "Assignee": "X",\n            "AutoNum1": "PREFIX_6",\n            "Category": "A",\n            "Checkbox": "A",\n            "DueDate": "2015-12-31T15:00:00Z",\n            "LU2": null,\n            "Lookup1": "\u30bf\u30b9\u30afC",\n            "Num1": 5,\n            "Num2": 12,\n            "Status": "\u5b8c\u4e86",\n            "Title": "TaskE",\n            "Total": 17,\n            "created_at": "2020-08-16T02:59:45Z",\n            "created_by": "IMPORT",\n            "d_id": "5f38a11baa395581685afdb4",\n            "i_id": "5f38a121aa395581685afdc0",\n            "p_id": "5f25956528dc5c55b463bc7b",\n            "rev_no": 7,\n            "status_id": "5f38a11baa39556e74845a3e",\n            "title": "TaskE",\n            "unread": 0,\n            "updated_at": "2021-02-01T13:25:24Z",\n            "updated_by": "5f25952c28dc5c55b463bc76"\n        }\n    ],\n    "totalItems": 3\n}\n')),Object(i.b)("h3",{id:"include_links--true-\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u4f8b"},"include_links : true\u3000\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u4f8b"),Object(i.b)("p",null,'"item_links" \u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u3001\u95a2\u9023\u30a2\u30a4\u30c6\u30e0\u306e\u30ea\u30f3\u30af\u5148d_id, i_id\u60c5\u5831\u304c\u4ed8\u4e0e\u3055\u308c\u307e\u3059'),Object(i.b)("p",null,'"return_number_value": true \u3092\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001\u6570\u5024\u306f\u6587\u5b57\u5217\u306b\u5909\u63db\u3055\u308c\u3066\u8fd4\u3055\u308c\u307e\u3059'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "items": [\n        {\n            "Assignee": "",\n            "AutoNum1": "PREFIX_4",\n            "Category": "A",\n            "Checkbox": "C,A",\n            "DateTime": "2020-12-23T01:41:14Z",\n            "DueDate": null,\n            "User": "h.iwasaki",\n            "LU2": "\u30bf\u30b9\u30afB",\n            "Lookup1": "\u30bf\u30b9\u30afE",\n            "Status": "\u53d7\u4ed8",\n            "Title": "Title sample AA",\n            "created_at": "2020-08-16T04:08:11Z",\n            "created_by": "5f25952c28dc5c55b463bc76",\n            "d_id": "5f38a11baa395581685afdb4",\n            "i_id": "5f38b12aaa39558bfca2964f",\n            "item_links": {\n                "db_count": 1,\n                "item_count": 3,\n                "links": [\n                    {\n                        "d_id": "5f38b0afaa395581685afdf6",\n                        "item_count": 3,\n                        "items": [\n                            {\n                                "i_id": "5f38b0b6aa395581685afdff",\n                                "type": "lookup"\n                            },\n                            {\n                                "i_id": "5f38b0b6aa395581685afdff",\n                                "type": "lookup"\n                            },\n                            {\n                                "i_id": "5f38b0b6aa395581685afe02",\n                                "type": "lookup"\n                            }\n                        ]\n                    }\n                ]\n            },\n            "p_id": "TestApp",\n            "rev_no": "10",\n            "status_id": "5f38a11baa39556e74845a40",\n            "title": "Title sample AA",\n            "unread": "0",\n            "updated_at": "2021-01-22T16:55:59Z",\n            "updated_by": "5f25952c28dc5c55b463bc76"\n        }\n    ],\n    "totalItems": 1\n}\n')),Object(i.b)("h3",{id:"include_lookups--true-\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u4f8b"},"include_lookups : true\u3000\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u4f8b"),Object(i.b)("p",null,'"lookup_items" \u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u3001\u8a72\u5f53\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u53c2\u7167(Lookup)\u5148\u306e\u30a2\u30a4\u30c6\u30e0\u60c5\u5831\u304c\u5c55\u958b\u3055\u308c\u307e\u3059\u3002\nLookup\u5148\u306eItem\u304c\u518d\u5e30\u7684\u306b\u540c\u4e00\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u53c2\u7167\u3057\u3066\u3044\u308b\u3088\u3046\u306a\u30b1\u30fc\u30b9\u3067\u306f\u3001\u6700\u5927\u30672\u56de\u307e\u3067\u5c55\u958b\u3055\u308c\u307e\u3059\u304c\u3001\uff08\u7121\u9650\u30eb\u30fc\u30d7\u3092\u907f\u3051\u308b\u305f\u3081\uff09\u305d\u308c\u4ee5\u4e0a\u306e\u547c\u3073\u51fa\u3057\u306f\u3055\u308c\u307e\u305b\u3093\u3002'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "items": [\n        {\n            "Assignee": "",\n            "AutoNum1": "PREFIX_4",\n            "Category": "A",\n            "Checkbox": "C,A",\n            "DateTime": "2020-12-23T01:41:14Z",\n            "DueDate": null,\n            "LU2": "\u30bf\u30b9\u30afB", // Lookup type 1\n            "Lookup1": "\u30bf\u30b9\u30afE", // Lookup type 2 \n            "Status": "\u53d7\u4ed8",\n            "Title": "Title sample AA",\n            "created_at": "2020-08-16T04:08:11Z",\n            "created_by": "5f25952c28dc5c55b463bc76",\n            "d_id": "5f38a11baa395581685afdb4",\n            "i_id": "5f38b12aaa39558bfca2964f",\n            "lookup_items": {\n                "LU2": { // Item values for Lookup type 1\n                    "Assignee": "Y",\n                    "Category": "A",\n                    "DueDate": "2015-12-31T15:00:00Z",\n                    "Fld-tSWAyL4f": "0",\n                    "Status": "\u53d7\u4ed8",\n                    "Title": "\u30bf\u30b9\u30afB",\n                    "created_at": "2020-08-16T04:06:14Z",\n                    "created_by": "IMPORT",\n                    "d_id": "5f38b0afaa395581685afdf6",\n                    "i_id": "5f38b0b6aa395581685afe02",\n                    "p_id": "5f25956528dc5c55b463bc7b",\n                    "rev_no": "2",\n                    "status_id": "5f38b0afaa39558bfca2963e",\n                    "title": "\u30bf\u30b9\u30afB",\n                    "updated_at": "2021-01-22T07:50:24Z",\n                    "updated_by": "5f25952c28dc5c55b463bc76"\n                },\n                "Lookup1": { // Item values for Lookup type 2\n                    "Assignee": "X",\n                    "Category": "B",\n                    "DueDate": "2015-12-31T15:00:00Z",\n                    "Fld-tSWAyL4f": "3",\n                    "LookupMySelf": "\u30bf\u30b9\u30afE",  // Lookup type 3 (LookupField in the Lookup Item)\n                    "Status": "\u5b8c\u4e86",\n                    "Title": "\u30bf\u30b9\u30afE",\n                    "created_at": "2020-08-16T04:06:14Z",\n                    "created_by": "IMPORT",\n                    "d_id": "5f38b0afaa395581685afdf6",\n                    "i_id": "5f38b0b6aa395581685afdff",\n                    "lookup_items": {\n                        "LookupMySelf": { // Items for Lookup Item 3 \n                            "Assignee": "X",\n                            "Category": "B",\n                            "DueDate": "2015-12-31T15:00:00Z",\n                            "Fld-tSWAyL4f": "3",\n                            "LookupMySelf": "\u30bf\u30b9\u30afE",  // Lookup Item 3 (Recursive Link... )\n                            "Status": "\u5b8c\u4e86",\n                            "Title": "\u30bf\u30b9\u30afE",\n                            "created_at": "2020-08-16T04:06:14Z",\n                            "created_by": "IMPORT",\n                            "d_id": "5f38b0afaa395581685afdf6",\n                            "i_id": "5f38b0b6aa395581685afdff",\n                            "lookup_items": {\n                                "LookupMySelf": {  // Recursive call will be limited by twice for the same datastores in the result\n                                    "Assignee": "X",\n                                    "Category": "B",\n                                    "DueDate": "2015-12-31T15:00:00Z",\n                                    "Fld-tSWAyL4f": "3",\n                                    "LookupMySelf": "5f38b0b6aa395581685afdff",\n                                    "Title": "\u30bf\u30b9\u30afE",\n                                    "created_at": "2020-08-16T04:06:14Z",\n                                    "created_by": "IMPORT",\n                                    "d_id": "5f38b0afaa395581685afdf6",\n                                    "i_id": "5f38b0b6aa395581685afdff",\n                                    "p_id": "5f25956528dc5c55b463bc7b",\n                                    "rev_no": "4",\n                                    "status_id": "5f38b0afaa39558bfca2963c",\n                                    "title": "\u30bf\u30b9\u30afE",\n                                    "updated_at": "2021-01-22T17:10:37Z",\n                                    "updated_by": "5f25952c28dc5c55b463bc76"\n                                }\n                            },\n                            "p_id": "5f25956528dc5c55b463bc7b",\n                            "rev_no": "4",\n                            "status_id": "5f38b0afaa39558bfca2963c",\n                            "title": "\u30bf\u30b9\u30afE",\n                            "updated_at": "2021-01-22T17:10:37Z",\n                            "updated_by": "5f25952c28dc5c55b463bc76"\n                        }\n                    },\n                    "p_id": "5f25956528dc5c55b463bc7b",\n                    "rev_no": "4",\n                    "status_id": "5f38b0afaa39558bfca2963c",\n                    "title": "\u30bf\u30b9\u30afE",\n                    "updated_at": "2021-01-22T17:10:37Z",\n                    "updated_by": "5f25952c28dc5c55b463bc76"\n                }\n            },\n            "p_id": "TestApp",\n            "rev_no": "10",\n            "status_id": "5f38a11baa39556e74845a40",\n            "title": "Title sample AA",\n            "unread": "0",\n            "updated_at": "2021-01-22T16:55:59Z",\n            "updated_by": "5f25952c28dc5c55b463bc76"\n        }\n    ],\n    "totalItems": 1\n}\n')))}o.isMDXComponent=!0},179:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return _}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),o=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},b=function(e){var n=o(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=o(t),p=a,_=b["".concat(c,".").concat(p)]||b[p]||s[p]||i;return t?r.a.createElement(_,d(d({ref:n},u),{},{components:t})):r.a.createElement(_,d({ref:n},u))}));function _(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=p;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,c[1]=d;for(var u=2;u<i;u++)c[u]=t[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);