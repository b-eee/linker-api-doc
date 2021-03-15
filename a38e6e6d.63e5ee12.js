(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{132:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return f})),t.d(e,"toc",(function(){return c})),t.d(e,"default",(function(){return d}));var a=t(3),r=t(7),i=(t(0),t(168)),o={},f={unversionedId:"v1/reports/GetReportData",id:"v1/reports/GetReportData",isDocsHomePage:!1,title:"GetReportData",description:"GetReportData",source:"@site/docs/v1/reports/GetReportData.md",slug:"/v1/reports/GetReportData",permalink:"/linker-api-doc/docs/v1/reports/GetReportData",version:"current",sidebar:"default",previous:{title:"Logout",permalink:"/linker-api-doc/docs/v1/login/Logout"},next:{title:"GetReportDataByConditions",permalink:"/linker-api-doc/docs/v1/reports/GetReportDataByConditions"}},c=[],l={toc:c};function d(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"getreportdata"},"GetReportData"),Object(i.b)("p",null,"\u30ec\u30dd\u30fc\u30c8\u30c7\u30fc\u30bf\u306e\u53d6\u5f97"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Description")),Object(i.b)("p",null,"\u30c7\u30fc\u30bf\u30ec\u30dd\u30fc\u30c8\u306e\u7d50\u679c\u3092\u53d6\u5f97\u3059\u308b"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Method")),Object(i.b)("p",null,"GET"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request URL Format")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/reports/:report-id\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Query Params")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},'per_page : 1\u30da\u30fc\u30b8\u305f\u3042\u305f\u308a\u306e\u4ef6\u6570\npage : \u30da\u30fc\u30b8\u6570\nformat: \u7701\u7565\u53ef\u80fd\u3002\u3000"csv" \u3092\u6307\u5b9a\u3059\u308b\u3068\u3001CSV\u5f62\u5f0f\u3067\u51fa\u529b\u3059\u308b\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request URL Sample")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID?per_page=5&page=1\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Response Sample")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u51fa\u529b\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u753b\u9762ID(display_id)\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001report_result \u306fdisplay_id \u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002")),Object(i.b)("p",null,'format="csv"\u306e\u5834\u5408'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csv"},"NOTE,TITLE,CATEGORY,STATUS,NUM,DUE_DATE\nB,\u30bf\u30b9\u30af\uff23,B,New,0,2016/01/01\nB,\u30bf\u30b9\u30af\uff23,\u6848\u4ef6\uff08\u660e\u7d30\u3042\u308a\uff09,B,In Review,0,2016/01/01\nB,,B,New,0,2016/01/01\nB,\uff11\uff11\uff11\u65b0\u898f\u8d77\u7968,B,New,0,2016/01/01\nB,\u30bf\u30b9\u30afB,B,New,0,2016/01/01\n")),Object(i.b)("p",null,"format\u3092\u7701\u7565\u3057\u305f\u5834\u5408"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "error": ""\n    "report_title": "SimpleJoin", // \u30ec\u30dd\u30fc\u30c8\u540d\n    "totalItems": 40932, // \u5168\u30c7\u30fc\u30bf\u4ef6\u6570\n    "item_index_from": 0, // \u7d50\u679c\u30c7\u30fc\u30bf\u306e\u6700\u521d\u306eIndex\u756a\u53f7\n    "item_index_to": 4,\u3000// \u7d50\u679c\u30c7\u30fc\u30bf\u306e\u6700\u5f8c\u306eIndex\u756a\u53f7\n    "report_results": [ // \u53d6\u5f97\u30c7\u30fc\u30bf\n        {\n            "NOTE": "B",\n            "TITLE": "\u30bf\u30b9\u30afC",\n            "CATEGORY": "B",\n            "STATUS": "New",\n            "NUM": 0,\n            "DUE_DATE": "2016/01/01",\n            "items": [\u3000 // \u96c6\u8a08\u30ec\u30dd\u30fc\u30c8\u306e\u5834\u5408\u3001\u96c6\u8a08\u7d50\u679c\u306b\u542b\u307e\u308c\u308b\u8a72\u5f53Item,Datasstore\u306eID\u304c\u542b\u307e\u308c\u308b\n                {\n                    "d_id": "5f267f1028dc5c6988bc2fe0",\n                    "i_id": "5f267f1628dc5c6988bc2ff0"\n                },\n                {\n                    "d_id": "5f267f1028dc5c6988bc2fe0",\n                    "i_id": "5f267f1628dc5c6988bc2ff2"\n                }\n            ],\n            "i_id": "5f267f1628dc5c6988bc2fef" // \u96c6\u8a08\u3055\u308c\u3066\u3044\u306a\u3044\u30ec\u30dd\u30fc\u30c8\u306e\u5834\u5408\u306f\u3001\u8a72\u5f53\u30a2\u30a4\u30c6\u30e0\u306eID\u304c\u542b\u307e\u308c\u308b\n        },\n        {\n            "NOTE": "B",\n            "TITLE": "\u6848\u4ef6\uff08\u660e\u7d30\u3042\u308a\uff09",\n            "CATEGORY": "B",\n            "STATUS": "In Review",\n            "NUM": 0,\n            "DUE_DATE": "2016/01/01"\n            "items": [ \n                {\n                    "d_id": "5f267f1028dc5c6988bc2fe0",\n                    "i_id": "5f267f1628dc5c6988bc2ff1"\n                }\n            ]\n        },\n        {\n            "NOTE": "B",\n            "TITLE": "",\n            "CATEGORY": "B",\n            "STATUS": "New",\n            "NUM": 0,,\n            "items": [\n                {\n                    "d_id": "5f267f1028dc5c6988bc2fe0",\n                    "i_id": "5f267f1628dc5c6988bc2fef"\n                }\n            ]\n        },\n        {\n            "NOTE": "B",\n            "TITLE": "\uff11\uff11\uff11\u65b0\u898f\u8d77\u7968",\n            "CATEGORY": "B",\n            "STATUS": "New",\n            "NUM": 0,,\n            "items": [\n                {\n                    "d_id": "5f267f1028dc5c6988bc2fe0",\n                    "i_id": "5f267f1628dc5c6988bc2fee"\n                }\n            ]\n        },\n        {\n            "NOTE": "B",\n            "TITLE": "\u30bf\u30b9\u30afB",\n            "CATEGORY": "B",\n            "STATUS": "New",\n            "NUM": 0,\n            "DUE_DATE": "2016/01/01",\n            "items": [\n                {\n                    "d_id": "5f267f1028dc5c6988bc2fe0",\n                    "i_id": "5f267f1628dc5c6988bc2fbb"\n                }\n            ]\n        }\n    ],\n    "report_fields": [ // \u53d6\u5f97\u30ec\u30dd\u30fc\u30c8\u306efield\u60c5\u5831\n        {\n            "title": "Title",\n            "rpf_id": "4a0b2f8a-f332-4579-a2d4-e9b5971d9e80",\n            "display_id" : "TITLE",\n            "data_type": "text",\n            "display_type": "",\n            "align": "",\n            "width": 235,\n            "negative_sign_type": "triangle",\n            "num_format": "comma-separeted",\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [],\n            "f_id": "5c69148384f4be344c2ff0f1",\n            "d_id": "5c69148384f4be1f241fedcd",\n            "merge_cells": false,\n            "hide": false,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": false\n        },\n        {\n            "title": "Due Date",\n            "rpf_id": "b752bf7f-9f0d-4370-ac34-45b9be01453f",\n            "display_id" : "DUE_DATE",\n            "data_type": "date",\n            "display_type": "",\n            "align": "",\n            "width": 106,\n            "negative_sign_type": "triangle",\n            "num_format": "comma-separeted",\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [],\n            "f_id": "5c69148384f4be344c2ff0f5",\n            "d_id": "5c69148384f4be1f241fedcd",\n            "merge_cells": false,\n            "hide": false,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": false\n        },\n        {\n            "title": "Category",\n            "rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",\n            "display_id" : "CATEGORY",\n            "data_type": "select",\n            "display_type": "text",\n            "align": "left",\n            "width": 94,\n            "negative_sign_type": "triangle",\n            "num_format": "comma-separeted",\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [\n                {\n                    "cond_rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",\n                    "condition": "eq",\n                    "cond_type": "text",\n                    "value": "B",\n                    "bg_color": "#dcecf3",\n                    "ft_color": "#165896",\n                    "apply_row": false,\n                    "use_field_ref": false,\n                    "value_rpf_id": "",\n                    "font_size": "normal",\n                    "font_style": "normal",\n                    "font_weight": "normal",\n                    "negative_sign_type": "normal",\n                    "num_format": "comma-separeted"\n                },\n                {\n                    "cond_rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",\n                    "condition": "eq",\n                    "cond_type": "text",\n                    "value": "C",\n                    "bg_color": "#dcecf3",\n                    "ft_color": "#165896",\n                    "apply_row": false,\n                    "use_field_ref": false,\n                    "value_rpf_id": "",\n                    "font_size": "normal",\n                    "font_style": "normal",\n                    "font_weight": "normal",\n                    "negative_sign_type": "normal",\n                    "num_format": "comma-separeted"\n                },\n                {\n                    "cond_rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",\n                    "condition": "eq",\n                    "cond_type": "text",\n                    "value": "A",\n                    "bg_color": "#f4eaf3",\n                    "ft_color": "#9e9e9e",\n                    "apply_row": false,\n                    "use_field_ref": false,\n                    "value_rpf_id": "",\n                    "font_size": "normal",\n                    "font_style": "normal",\n                    "font_weight": "normal",\n                    "negative_sign_type": "normal",\n                    "num_format": "comma-separeted"\n                }\n            ],\n            "f_id": "5c6363ed84f4be7de0350452",\n            "d_id": "5c6363ed84f4be2550bfe8ff",\n            "merge_cells": false,\n            "hide": false,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": false\n        },\n        {\n            "title": "Status",\n            "rpf_id": "85c15eca-1b7a-4423-9969-55f363efc4c1",\n            "display_id" : "STATUS",\n            "data_type": "status",\n            "display_type": "text",\n            "align": "left",\n            "width": 97,\n            "negative_sign_type": "triangle",\n            "num_format": "comma-separeted",\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [\n                {\n                    "cond_rpf_id": "85c15eca-1b7a-4423-9969-55f363efc4c1",\n                    "condition": "eq",\n                    "cond_type": "text",\n                    "value": "\u65b0\u898f",\n                    "bg_color": "#f9e9e9",\n                    "ft_color": "#c01717",\n                    "apply_row": true,\n                    "use_field_ref": false,\n                    "value_rpf_id": "",\n                    "font_size": "normal",\n                    "font_style": "normal",\n                    "font_weight": "normal",\n                    "negative_sign_type": "normal",\n                    "num_format": "comma-separeted"\n                },\n                {\n                    "cond_rpf_id": "2d9bfd30-e194-4492-a93e-e6d0e4323685",\n                    "condition": "eq",\n                    "cond_type": "text",\n                    "value": "",\n                    "bg_color": "#f0f7df",\n                    "ft_color": "#2a7850",\n                    "apply_row": false,\n                    "use_field_ref": true,\n                    "value_rpf_id": "4552a666-508d-419c-ba99-7c9a16b24894",\n                    "font_size": "small",\n                    "font_style": "italic",\n                    "font_weight": "normal",\n                    "negative_sign_type": "normal",\n                    "num_format": "comma-separeted"\n                }\n            ],\n            "f_id": "5c6363ed84f4be7de0350453",\n            "d_id": "5c6363ed84f4be2550bfe8ff",\n            "merge_cells": false,\n            "hide": true,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": false\n        },\n        {\n            "title": "note",\n            "rpf_id": "4552a666-508d-419c-ba99-7c9a16b24894",\n            "display_id" : "NOTE",\n            "data_type": "textarea",\n            "display_type": "",\n            "align": "",\n            "width": 174,\n            "negative_sign_type": "triangle",\n            "num_format": "comma-separeted",\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [],\n            "f_id": "5c6459de84f4be4588a77288",\n            "d_id": "5c6363ed84f4be2550bfe8ff",\n            "merge_cells": false,\n            "hide": false,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": false\n        },\n        {\n            "title": "Num",\n            "rpf_id": "8a20643b-fe36-45f1-bbd6-b2b6e4296a54",\n            "display_id" : "NUM",\n            "data_type": "number",\n            "display_type": "number",\n            "align": "right",\n            "width": 200,\n            "negative_sign_type": "triangle",\n            "num_format": "comma-separeted",\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [],\n            "f_id": "5c91f38a84f4be29540c4e9c",\n            "d_id": "5c6363ed84f4be2550bfe8ff",\n            "merge_cells": false,\n            "hide": false,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": false\n        },\n        {\n            "title": "X",\n            "rpf_id": "X",\n            "data_type": "number",\n            "display_type": "number",\n            "align": "right",\n            "width": 104,\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [\n                {\n                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",\n                    "condition": "eq",\n                    "cond_type": "number",\n                    "value": 1,\n                    "bg_color": "#f8eadc",\n                    "ft_color": "#d26c07",\n                    "apply_row": false,\n                    "use_field_ref": false,\n                    "value_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",\n                    "font_size": "big",\n                    "font_style": "italic",\n                    "font_weight": "bold",\n                    "negative_sign_type": "normal",\n                    "num_format": "comma-separeted"\n                },\n                {\n                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",\n                    "condition": "eq",\n                    "cond_type": "number",\n                    "value": "",\n                    "bg_color": "#FFFFFF",\n                    "ft_color": "#000000",\n                    "apply_row": false,\n                    "use_field_ref": false,\n                    "value_rpf_id": "",\n                    "font_size": "normal",\n                    "font_style": "normal",\n                    "font_weight": "normal",\n                    "negative_sign_type": "normal",\n                    "num_format": "num_format"\n                }\n            ],\n            "f_id": "",\n            "d_id": "",\n            "merge_cells": false,\n            "hide": false,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": true\n        },\n        {\n            "title": "Y",\n            "rpf_id": "Y",\n            "data_type": "number",\n            "display_type": "number",\n            "align": "right",\n            "width": 104,\n            "num_info": {\n                "prefix": "",\n                "suffix": "",\n                "no_comma": false\n            },\n            "conditions": [\n                {\n                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",\n                    "condition": "eq",\n                    "cond_type": "number",\n                    "value": 1,\n                    "bg_color": "#f8eadc",\n                    "ft_color": "#d26c07",\n                    "apply_row": false,\n                    "use_field_ref": false,\n                    "value_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",\n                    "font_size": "big",\n                    "font_style": "italic",\n                    "font_weight": "bold",\n                    "negative_sign_type": "normal",\n                    "num_format": "comma-separeted"\n                },\n                {\n                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",\n                    "condition": "eq",\n                    "cond_type": "number",\n                    "value": "",\n                    "bg_color": "#FFFFFF",\n                    "ft_color": "#000000",\n                    "apply_row": false,\n                    "use_field_ref": false,\n                    "value_rpf_id": "",\n                    "font_size": "normal",\n                    "font_style": "normal",\n                    "font_weight": "normal",\n                    "negative_sign_type": "normal",\n                    "num_format": "num_format"\n                }\n            ],\n            "f_id": "",\n            "d_id": "",\n            "merge_cells": false,\n            "hide": false,\n            "disable_search": false,\n            "use_integrated_report": false,\n            "is_cross_key": true\n        }\n    ]\n}\n')))}d.isMDXComponent=!0},168:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=r.a.createContext({}),d=function(n){var e=r.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):f(f({},e),n)),t},s=function(n){var e=d(n.components);return r.a.createElement(l.Provider,{value:e},n.children)},_={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},p=r.a.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,o=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),s=d(t),p=a,m=s["".concat(o,".").concat(p)]||s[p]||_[p]||i;return t?r.a.createElement(m,f(f({ref:e},l),{},{components:t})):r.a.createElement(m,f({ref:e},l))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=p;var f={};for(var c in e)hasOwnProperty.call(e,c)&&(f[c]=e[c]);f.originalType=n,f.mdxType="string"==typeof n?n:a,o[1]=f;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);