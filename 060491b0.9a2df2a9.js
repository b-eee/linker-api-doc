(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{187:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),d=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):f(f({},n),e)),t},s=function(e){var n=d(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},_={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(t),p=a,m=s["".concat(i,".").concat(p)]||s[p]||_[p]||o;return t?r.a.createElement(m,f(f({ref:n},c),{},{components:t})):r.a.createElement(m,f({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var f={};for(var l in n)hasOwnProperty.call(n,l)&&(f[l]=n[l]);f.originalType=e,f.mdxType="string"==typeof e?e:a,i[1]=f;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return f})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),o=(t(0),t(187)),i=["components"],f={},l={unversionedId:"v0/reports/GetReportData",id:"v0/reports/GetReportData",isDocsHomePage:!1,title:"GetReportData",description:"GetReportData",source:"@site/docs/v0/reports/GetReportData.md",slug:"/v0/reports/GetReportData",permalink:"/linker-api-doc/docs/v0/reports/GetReportData",version:"current",sidebar:"default",previous:{title:"GetImportResults",permalink:"/linker-api-doc/docs/v0/items-import/GetImportResults"},next:{title:"GetReportDataByConditions",permalink:"/linker-api-doc/docs/v0/reports/GetReportDataByConditions"}},c=[],d={toc:c};function s(e){var n=e.components,t=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"getreportdata"},"GetReportData"),Object(o.b)("p",null,"\u30ec\u30dd\u30fc\u30c8\u30c7\u30fc\u30bf\u306e\u53d6\u5f97"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u30c7\u30fc\u30bf\u30ec\u30dd\u30fc\u30c8\u306e\u7d50\u679c\u3092\u53d6\u5f97\u3059\u308b"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"GET"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/reports/:report-id\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Query Params")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},'per_page : 1\u30da\u30fc\u30b8\u305f\u3042\u305f\u308a\u306e\u4ef6\u6570\npage : \u30da\u30fc\u30b8\u6570\ninclude_date_at: true\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u691c\u7d22\u7d50\u679c\u306b\u4f5c\u6210\u65e5\u3001\u66f4\u65b0\u65e5\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u6307\u5b9a\u3057\u305f\u30c7\u30fc\u30bf\u306e\u4f5c\u6210\u65e5\u3001\u66f4\u65b0\u65e5\u304c\u7d50\u679c\u306b\u542b\u307e\u308c\u307e\u3059\u3002\uff08\u95a2\u9023\u5148\u3092\u7d50\u5408\u3057\u305f\u5834\u5408\u3001\u95a2\u9023\u5148\u30a2\u30a4\u30c6\u30e0\u306e\u4f5c\u6210\u65e5\u3001\u66f4\u65b0\u65e5\u306f\u542b\u307e\u308c\u307e\u305b\u3093\uff09\ninclude_lookups\u3000\u3000\u3000\u3000: true \u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u53c2\u7167\u578bItem\u306e\u30c7\u30fc\u30bf\u307e\u3067\u542b\u307e\u308c\u308b\ninclude_item_ref  : true \u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u53c2\u7167\u5148Item\u306eID(d_id, i_id,rev_no) \u60c5\u5831\u3092\u53d6\u5f97\u3067\u304d\u308b\nreturn_number_value   : "include_lookups": true\u306e\u3068\u304dtrue \u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u53c2\u7167\u5148Item\u306e\u6570\u5024\u578b\u30c7\u30fc\u30bf\u304cNumber\u3068\u3057\u3066\u51fa\u529b\u3055\u308c\u307e\u3059\uff08default\u3067\u306f\u3001\u6570\u5024\u306f\u6587\u5b57\u5217("123")\u3067\u8fd4\u5374\u3055\u308c\u308b\uff09\nreturn_count_only : totalItems\u306e\u307f\u60c5\u5831\u3092\u8fd4\u3059\u3002 report_results\u306fnull\u3068\u306a\u308b\u3002\nreturn_utc_datetime: \u65e5\u4ed8\u578b\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5834\u5408\u3001\u623b\u308a\u5024\u3092UTC\u6642\u523b(ISO format)\u3067\u8fd4\u3059. \u305f\u3060\u3057\u3001HexabaseUI\u306e\u30ec\u30dd\u30fc\u30c8\u8a2d\u5b9a\u3067\u3053\u306e\u8a2d\u5b9a\u304cON\u306b\u306a\u3063\u3066\u3044\u305f\u5834\u5408\u306f\u3001\u30d5\u30e9\u30b0\u6307\u5b9a\u306b\u9650\u3089\u305aUTC\u3068\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u8a2d\u5b9a\u306fDate\u578b\uff08Datetime\u578b\u3067\u306f\u306a\u3044\uff09\u306b\u5bfe\u3057\u3066\u306e\u307f\u6709\u52b9\u3067\u3059\u3002\nomit_total_items : totalItems\u3092\u7701\u7565\u3057\u307e\u3059\u3002\u3000\uff08\u4ef6\u6570\u306e\u30ab\u30a6\u30f3\u30c8\u3092\u7701\u7565\u3059\u308b\u3068\u3001\u3088\u308a\u9ad8\u901f\u306b\u52d5\u4f5c\u3057\u307e\u3059\uff09\ntotal_count_timeout_sec : totalItems\u306e\u53d6\u5f97\u306b\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u79d2\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u6307\u5b9a\u3057\u305f\u79d2\u6570\u3092\u8d85\u904e\u3059\u308b\u3068totalItems\u306e\u53d6\u5f97\u3092\u7701\u7565(-1\u304c\u304b\u3048\u308b)\u3057\u307e\u3059\u3002default:60s\ndata_result_timeout_sec : report_results\u53d6\u5f97\u6642\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u79d2\u6570\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3059\u308b\u3068report_results\u306e\u53d6\u5f97\u304c\u7701\u7565(null)\u3055\u308c\u307e\u3059\u3002default:60s\nomit_fields_data : \u53d6\u5f97\u7d50\u679c\u304b\u3089\u3001"report_fields"\u90e8\u5206\u3092\u7701\u7565\u3067\u304d\u307e\u3059\uff08report_fields\u60c5\u5831\u304c\u4e0d\u8981\u306e\u969b\u306b\u30c7\u30fc\u30bf\u91cf\u3092\u524a\u6e1b\u3067\u304d\u307e\u3059\uff09\nformat: \u7701\u7565\u53ef\u80fd\u3002\u3000"csv" \u3092\u6307\u5b9a\u3059\u308b\u3068\u3001CSV\u5f62\u5f0f\u3067\u51fa\u529b\u3059\u308b\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID?per_page=5&page=1\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u51fa\u529b\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u753b\u9762ID(display_id)\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001report_result \u306fdisplay_id \u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002")),Object(o.b)("p",null,'format="csv"\u306e\u5834\u5408'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csv"},"NOTE,TITLE,CATEGORY,STATUS,NUM,DUE_DATE\nB,\u30bf\u30b9\u30af\uff23,B,New,0,2016/01/01\nB,\u30bf\u30b9\u30af\uff23,\u6848\u4ef6\uff08\u660e\u7d30\u3042\u308a\uff09,B,In Review,0,2016/01/01\nB,,B,New,0,2016/01/01\nB,\uff11\uff11\uff11\u65b0\u898f\u8d77\u7968,B,New,0,2016/01/01\nB,\u30bf\u30b9\u30afB,B,New,0,2016/01/01\n")),Object(o.b)("p",null,"format\u3092\u7701\u7565\u3057\u305f\u5834\u5408"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "error": ""\n    "report_title": "SimpleJoin", // \u30ec\u30dd\u30fc\u30c8\u540d\n    "totalItems": 40932, // \u5168\u30c7\u30fc\u30bf\u4ef6\u6570\n    "item_index_from": 0, // \u7d50\u679c\u30c7\u30fc\u30bf\u306e\u6700\u521d\u306eIndex\u756a\u53f7\n    "item_index_to": 4,\u3000// \u7d50\u679c\u30c7\u30fc\u30bf\u306e\u6700\u5f8c\u306eIndex\u756a\u53f7\n    "report_results": [ // \u53d6\u5f97\u30c7\u30fc\u30bf\n        {\n            "NOTE": "B",\n            "TITLE": "\u30bf\u30b9\u30afC",\n            "CATEGORY": "B",\n            "STATUS": "New",\n            "NUM": 0,\n            "DUE_DATE": "2016/01/01",\n            "items": [\u3000 // \u96c6\u8a08\u30ec\u30dd\u30fc\u30c8\u306e\u5834\u5408\u3001\u96c6\u8a08\u7d50\u679c\u306b\u542b\u307e\u308c\u308b\u8a72\u5f53Item,Datasstore\u306eID\u304c\u542b\u307e\u308c\u308b\n                {\n                    "d_id": "5f267f1028dc5c6988bc2fe0",\n                    "i_id": "5f267f1628dc5c6988bc2ff0"\n                },\n                {\n                    "d_id": "5f267f1028dc5c6988bc2fe0",\n                    "i_id": "5f267f1628dc5c6988bc2ff2"\n                }\n            ],\n            "i_id": "5f267f1628dc5c6988bc2fef" // \u96c6\u8a08\u3055\u308c\u3066\u3044\u306a\u3044\u30ec\u30dd\u30fc\u30c8\u306e\u5834\u5408\u306f\u3001\u8a72\u5f53\u30a2\u30a4\u30c6\u30e0\u306eID\u304c\u542b\u307e\u308c\u308b\n        },\n        {\n            "NOTE": "B",\n            "TITLE": "\u6848\u4ef6\uff08\u660e\u7d30\u3042\u308a\uff09",\n            "CATEGORY": "B",\n            "STATUS": "In Review",\n            "NUM": 0,\n            "DUE_DATE": "2016/01/01"\n            "items": [ \n                {\n                    "d_id": "5f267f1028dc5c6988bc2fe0",\n                    "i_id": "5f267f1628dc5c6988bc2ff1"\n                }\n            ]\n        },\n        {\n            "NOTE": "B",\n            "TITLE": "",\n            "CATEGORY": "B",\n            "STATUS": "New",\n            "NUM": 0,,\n            "items": [\n                {\n                    "d_id": "5f267f1028dc5c6988bc2fe0",\n                    "i_id": "5f267f1628dc5c6988bc2fef"\n                }\n            ]\n        },\n        {\n            "NOTE": "B",\n            "TITLE": "\uff11\uff11\uff11\u65b0\u898f\u8d77\u7968",\n            "CATEGORY": "B",\n            "STATUS": "New",\n            "NUM": 0,,\n            "items": [\n                {\n                    "d_id": "5f267f1028dc5c6988bc2fe0",\n                    "i_id": "5f267f1628dc5c6988bc2fee"\n                }\n            ]\n        },\n        {\n            "NOTE": "B",\n            "TITLE": "\u30bf\u30b9\u30afB",\n            "CATEGORY": "B",\n            "STATUS": "New",\n            "NUM": 0,\n            "DUE_DATE": "2016/01/01",\n            "items": [\n                {\n                    "d_id": "5f267f1028dc5c6988bc2fe0",\n                    "i_id": "5f267f1628dc5c6988bc2fbb"\n                }\n            ]\n        }\n    ],\n    "report_fields": [ // \u53d6\u5f97\u30ec\u30dd\u30fc\u30c8\u306efield\u60c5\u5831\n        {\n            "title": "Title",\n            "rpf_id": "4a0b2f8a-f332-4579-a2d4-e9b5971d9e80",\n            "display_id" : "TITLE",\n            "data_type": "text",\n            "display_type": "",\n            "align": "",\n            "width": 235,\n            "negative_sign_type": "triangle",\n            "num_format": "comma-separeted",\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [],\n            "f_id": "5c69148384f4be344c2ff0f1",\n            "d_id": "5c69148384f4be1f241fedcd",\n            "merge_cells": false,\n            "hide": false,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": false\n        },\n        {\n            "title": "Due Date",\n            "rpf_id": "b752bf7f-9f0d-4370-ac34-45b9be01453f",\n            "display_id" : "DUE_DATE",\n            "data_type": "date",\n            "display_type": "",\n            "align": "",\n            "width": 106,\n            "negative_sign_type": "triangle",\n            "num_format": "comma-separeted",\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [],\n            "f_id": "5c69148384f4be344c2ff0f5",\n            "d_id": "5c69148384f4be1f241fedcd",\n            "merge_cells": false,\n            "hide": false,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": false\n        },\n        {\n            "title": "Category",\n            "rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",\n            "display_id" : "CATEGORY",\n            "data_type": "select",\n            "display_type": "text",\n            "align": "left",\n            "width": 94,\n            "negative_sign_type": "triangle",\n            "num_format": "comma-separeted",\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [\n                {\n                    "cond_rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",\n                    "condition": "eq",\n                    "cond_type": "text",\n                    "value": "B",\n                    "bg_color": "#dcecf3",\n                    "ft_color": "#165896",\n                    "apply_row": false,\n                    "use_field_ref": false,\n                    "value_rpf_id": "",\n                    "font_size": "normal",\n                    "font_style": "normal",\n                    "font_weight": "normal",\n                    "negative_sign_type": "normal",\n                    "num_format": "comma-separeted"\n                },\n                {\n                    "cond_rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",\n                    "condition": "eq",\n                    "cond_type": "text",\n                    "value": "C",\n                    "bg_color": "#dcecf3",\n                    "ft_color": "#165896",\n                    "apply_row": false,\n                    "use_field_ref": false,\n                    "value_rpf_id": "",\n                    "font_size": "normal",\n                    "font_style": "normal",\n                    "font_weight": "normal",\n                    "negative_sign_type": "normal",\n                    "num_format": "comma-separeted"\n                },\n                {\n                    "cond_rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",\n                    "condition": "eq",\n                    "cond_type": "text",\n                    "value": "A",\n                    "bg_color": "#f4eaf3",\n                    "ft_color": "#9e9e9e",\n                    "apply_row": false,\n                    "use_field_ref": false,\n                    "value_rpf_id": "",\n                    "font_size": "normal",\n                    "font_style": "normal",\n                    "font_weight": "normal",\n                    "negative_sign_type": "normal",\n                    "num_format": "comma-separeted"\n                }\n            ],\n            "f_id": "5c6363ed84f4be7de0350452",\n            "d_id": "5c6363ed84f4be2550bfe8ff",\n            "merge_cells": false,\n            "hide": false,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": false\n        },\n        {\n            "title": "Status",\n            "rpf_id": "85c15eca-1b7a-4423-9969-55f363efc4c1",\n            "display_id" : "STATUS",\n            "data_type": "status",\n            "display_type": "text",\n            "align": "left",\n            "width": 97,\n            "negative_sign_type": "triangle",\n            "num_format": "comma-separeted",\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [\n                {\n                    "cond_rpf_id": "85c15eca-1b7a-4423-9969-55f363efc4c1",\n                    "condition": "eq",\n                    "cond_type": "text",\n                    "value": "\u65b0\u898f",\n                    "bg_color": "#f9e9e9",\n                    "ft_color": "#c01717",\n                    "apply_row": true,\n                    "use_field_ref": false,\n                    "value_rpf_id": "",\n                    "font_size": "normal",\n                    "font_style": "normal",\n                    "font_weight": "normal",\n                    "negative_sign_type": "normal",\n                    "num_format": "comma-separeted"\n                },\n                {\n                    "cond_rpf_id": "2d9bfd30-e194-4492-a93e-e6d0e4323685",\n                    "condition": "eq",\n                    "cond_type": "text",\n                    "value": "",\n                    "bg_color": "#f0f7df",\n                    "ft_color": "#2a7850",\n                    "apply_row": false,\n                    "use_field_ref": true,\n                    "value_rpf_id": "4552a666-508d-419c-ba99-7c9a16b24894",\n                    "font_size": "small",\n                    "font_style": "italic",\n                    "font_weight": "normal",\n                    "negative_sign_type": "normal",\n                    "num_format": "comma-separeted"\n                }\n            ],\n            "f_id": "5c6363ed84f4be7de0350453",\n            "d_id": "5c6363ed84f4be2550bfe8ff",\n            "merge_cells": false,\n            "hide": true,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": false\n        },\n        {\n            "title": "note",\n            "rpf_id": "4552a666-508d-419c-ba99-7c9a16b24894",\n            "display_id" : "NOTE",\n            "data_type": "textarea",\n            "display_type": "",\n            "align": "",\n            "width": 174,\n            "negative_sign_type": "triangle",\n            "num_format": "comma-separeted",\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [],\n            "f_id": "5c6459de84f4be4588a77288",\n            "d_id": "5c6363ed84f4be2550bfe8ff",\n            "merge_cells": false,\n            "hide": false,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": false\n        },\n        {\n            "title": "Num",\n            "rpf_id": "8a20643b-fe36-45f1-bbd6-b2b6e4296a54",\n            "display_id" : "NUM",\n            "data_type": "number",\n            "display_type": "number",\n            "align": "right",\n            "width": 200,\n            "negative_sign_type": "triangle",\n            "num_format": "comma-separeted",\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [],\n            "f_id": "5c91f38a84f4be29540c4e9c",\n            "d_id": "5c6363ed84f4be2550bfe8ff",\n            "merge_cells": false,\n            "hide": false,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": false\n        },\n        {\n            "title": "X",\n            "rpf_id": "X",\n            "data_type": "number",\n            "display_type": "number",\n            "align": "right",\n            "width": 104,\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [\n                {\n                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",\n                    "condition": "eq",\n                    "cond_type": "number",\n                    "value": 1,\n                    "bg_color": "#f8eadc",\n                    "ft_color": "#d26c07",\n                    "apply_row": false,\n                    "use_field_ref": false,\n                    "value_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",\n                    "font_size": "big",\n                    "font_style": "italic",\n                    "font_weight": "bold",\n                    "negative_sign_type": "normal",\n                    "num_format": "comma-separeted"\n                },\n                {\n                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",\n                    "condition": "eq",\n                    "cond_type": "number",\n                    "value": "",\n                    "bg_color": "#FFFFFF",\n                    "ft_color": "#000000",\n                    "apply_row": false,\n                    "use_field_ref": false,\n                    "value_rpf_id": "",\n                    "font_size": "normal",\n                    "font_style": "normal",\n                    "font_weight": "normal",\n                    "negative_sign_type": "normal",\n                    "num_format": "num_format"\n                }\n            ],\n            "f_id": "",\n            "d_id": "",\n            "merge_cells": false,\n            "hide": false,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": true\n        },\n        {\n            "title": "Y",\n            "rpf_id": "Y",\n            "data_type": "number",\n            "display_type": "number",\n            "align": "right",\n            "width": 104,\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [\n                {\n                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",\n                    "condition": "eq",\n                    "cond_type": "number",\n                    "value": 1,\n                    "bg_color": "#f8eadc",\n                    "ft_color": "#d26c07",\n                    "apply_row": false,\n                    "use_field_ref": false,\n                    "value_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",\n                    "font_size": "big",\n                    "font_style": "italic",\n                    "font_weight": "bold",\n                    "negative_sign_type": "normal",\n                    "num_format": "comma-separeted"\n                },\n                {\n                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",\n                    "condition": "eq",\n                    "cond_type": "number",\n                    "value": "",\n                    "bg_color": "#FFFFFF",\n                    "ft_color": "#000000",\n                    "apply_row": false,\n                    "use_field_ref": false,\n                    "value_rpf_id": "",\n                    "font_size": "normal",\n                    "font_style": "normal",\n                    "font_weight": "normal",\n                    "negative_sign_type": "normal",\n                    "num_format": "num_format"\n                }\n            ],\n            "f_id": "",\n            "d_id": "",\n            "merge_cells": false,\n            "hide": false,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": true\n        }\n    ]\n}\n')))}s.isMDXComponent=!0}}]);