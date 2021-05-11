(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return o}));var a=t(3),r=t(7),i=(t(0),t(182)),l={},s={unversionedId:"v0/item-actions/GetInputFields",id:"v0/item-actions/GetInputFields",isDocsHomePage:!1,title:"GetInputFields",description:"GetInputFields",source:"@site/docs/v0/item-actions/GetInputFields.md",slug:"/v0/item-actions/GetInputFields",permalink:"/linker-api-doc/docs/v0/item-actions/GetInputFields",version:"current",sidebar:"default",previous:{title:"ExecuteBulkAction",permalink:"/linker-api-doc/docs/v0/item-actions/ExecuteBulkAction"},next:{title:"GetNewActions",permalink:"/linker-api-doc/docs/v0/item-actions/GetNewActions"}},c=[],u={toc:c};function o(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"getinputfields"},"GetInputFields"),Object(i.b)("p",null,"\u30a2\u30af\u30b7\u30e7\u30f3\u30d5\u30a3\u30fc\u30eb\u30c9\u60c5\u5831"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Description")),Object(i.b)("p",null,"\u30a2\u30af\u30b7\u30e7\u30f3\u3067\u5229\u7528\u53ef\u80fd\u306a\u30d5\u30a3\u30fc\u30eb\u30c9\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Method")),Object(i.b)("p",null,"GET"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request Format")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/datastores/:datastore-id/actions/:action-id/fields\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"URL Params")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"datastore-id    : \u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID\naction-id       : \u30a2\u30af\u30b7\u30e7\u30f3ID\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request URL Sample")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.xxx.com/api/v0/datastores/59bf42550e2479186a6c6c70/5a2671ec0e24794c979fa5b1/fields\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Response Sample")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "action": {\n        "action_id": "5a2671ec0e24794c979fa5b1",\n        "display_order": 3,\n        "description": "",\n        "crud_type": "2",\n        "next_status_id": "5a2671eb0e24794c979fa5ab"\n    },\n    "action_fields": {\n        "5a2671eb0e24794c979fa5a9": {\n            "field_id": "5a2671eb0e24794c979fa5a9",\n            "name": "\u30bf\u30a4\u30c8\u30eb",\n            "display_id": "Fld-U2WtgeXa",\n            "dataType": "text",\n            "search": true,\n            "show_list": false,\n            "as_title": true,\n            "status": false,\n            "fieldIndex": 0,\n            "title_order": 1,\n            "full_text": false,\n            "unique": false,\n            "min_value": "",\n            "max_value": ""\n        },\n        "5a2671eb0e24794c979fa5aa": {\n            "field_id": "5a2671eb0e24794c979fa5aa",\n            "name": "\u30b9\u30c6\u30fc\u30bf\u30b9",\n            "display_id": "Fld-cTsftJE1",\n            "dataType": "status",\n            "search": true,\n            "show_list": true,\n            "as_title": false,\n            "status": true,\n            "fieldIndex": 1,\n            "title_order": 0,\n            "full_text": false,\n            "unique": false,\n            "min_value": "",\n            "max_value": ""\n        },\n        "5a2672080e24794c979fa5b4": {\n            "field_id": "5a2672080e24794c979fa5b4",\n            "name": "\u9078\u629e\u80a21",\n            "display_id": "Fld-oQmo4lvb",\n            "dataType": "select",\n            "search": true,\n            "show_list": true,\n            "as_title": false,\n            "status": false,\n            "fieldIndex": 0,\n            "title_order": 0,\n            "full_text": false,\n            "unique": false,\n            "min_value": "",\n            "max_value": "",\n            "options": [\n                {\n                    "option_id": "ba280b86-fa91-4ab5-acf7-4c6d2445ffc7",\n                    "sort_id": 0,\n                    "value": "\u9078\u629e1",\n                    "enabled": true\n                },\n                {\n                  "option_id": "c742f7f6-0339-4240-a1ea-66543fc504ca",\n                  "sort_id": 1,\n                  "value": "\u9078\u629e2",\n                  "enabled": true\n                }\n            ],\n            "selected": "c742f7f6-0339-4240-a1ea-66543fc504ca"  // select,radio type has default value\n        },\n        "5a26722e0e24794c979fa5b6": {\n            "field_id": "5a26722e0e24794c979fa5b6",\n            "name": "\u6570\u50241",\n            "display_id": "Fld-BCgyvxUw",\n            "dataType": "number",\n            "search": true,\n            "show_list": true,\n            "as_title": false,\n            "status": false,\n            "fieldIndex": 0,\n            "title_order": 0,\n            "full_text": false,\n            "unique": false,\n            "min_value": "1",\n            "max_value": "10"\n        },\n        "5a26724e0e24794c979fa5b7": {\n            "field_id": "5a26724e0e24794c979fa5b7",\n            "name": "\u30e6\u30fc\u30b61",\n            "display_id": "Fld-mZbgboDW",\n            "dataType": "users",\n            "search": true,\n            "show_list": true,\n            "as_title": false,\n            "status": false,\n            "fieldIndex": 0,\n            "title_order": 0,\n            "full_text": false,\n            "unique": false,\n            "min_value": "",\n            "max_value": ""\n        },\n        "5a2672880e24794c979fa5b8": {\n            "field_id": "5a2672880e24794c979fa5b8",\n            "name": "\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u53c2\u71671",\n            "display_id": "Fld-2CtMZFCM",\n            "dataType": "dslookup",\n            "search": false,\n            "show_list": true,\n            "as_title": false,\n            "status": false,\n            "fieldIndex": 0,\n            "title_order": 0,\n            "full_text": false,\n            "unique": false,\n            "min_value": "",\n            "max_value": ""\n            },\n        "5a2672970e24794c979fa5b9": {\n            "field_id": "5a2672970e24794c979fa5b9",\n            "name": "\u81ea\u52d5\u63a1\u756a1",\n            "display_id": "Fld-v8f4OWuI",\n            "dataType": "autonum",\n            "search": true,\n            "show_list": true,\n            "as_title": false,\n            "status": false,\n            "fieldIndex": 0,\n            "title_order": 0,\n            "full_text": true,\n            "unique": false,\n            "min_value": "",\n            "max_value": ""\n        },\n        "5a2673740e24794c979fa5bf": {\n            "field_id": "5a2673740e24794c979fa5bf",\n            "name": "\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb1",\n            "display_id": "Fld-WLZo8vwy",\n            "dataType": "file",\n            "search": false,\n            "show_list": false,\n            "as_title": false,\n            "status": false,\n            "fieldIndex": 0,\n            "title_order": 0,\n            "full_text": true,\n            "unique": false,\n            "min_value": "",\n            "max_value": ""\n        }\n    },\n    "action_field_settings": {\n        "5a2671eb0e24794c979fa5a9": {\n            "action_id": "5a2671ec0e24794c979fa5b1",\n            "field_id": "5a2671eb0e24794c979fa5a9",\n            "show": true,\n            "update": true,\n            "mandatory": false\n        },\n        "5a2671eb0e24794c979fa5aa": {\n            "action_id": "5a2671ec0e24794c979fa5b1",\n            "field_id": "5a2671eb0e24794c979fa5aa",\n            "show": true,\n            "update": true,\n            "mandatory": false\n        },\n        "5a2672080e24794c979fa5b4": {\n            "action_id": "",\n            "field_id": "5a2672080e24794c979fa5b4",\n            "show": true,\n            "update": true,\n            "mandatory": false\n        },\n        "5a26722e0e24794c979fa5b6": {\n            "action_id": "",\n            "field_id": "5a26722e0e24794c979fa5b6",\n            "show": true,\n            "update": true,\n            "mandatory": false\n        },\n        "5a26724e0e24794c979fa5b7": {\n            "action_id": "",\n            "field_id": "5a26724e0e24794c979fa5b7",\n            "show": true,\n            "update": true,\n            "mandatory": false\n        },\n        "5a2672880e24794c979fa5b8": {\n            "action_id": "",\n            "field_id": "5a2672880e24794c979fa5b8",\n            "show": true,\n            "update": true,\n            "mandatory": false\n        },\n        "5a2672970e24794c979fa5b9": {\n            "action_id": "",\n            "field_id": "5a2672970e24794c979fa5b9",\n            "show": true,\n            "update": true,\n            "mandatory": false\n        },\n        "5a2673740e24794c979fa5bf": {\n            "action_id": "",\n            "field_id": "5a2673740e24794c979fa5bf",\n            "show": true,\n            "update": true,\n            "mandatory": false\n        }\n    }\n}\n')))}o.isMDXComponent=!0},182:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),o=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=o(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=o(t),p=a,b=d["".concat(l,".").concat(p)]||d[p]||f[p]||i;return t?r.a.createElement(b,s(s({ref:n},u),{},{components:t})):r.a.createElement(b,s({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);