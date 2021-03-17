(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{177:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),c=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,b=p["".concat(i,".").concat(f)]||p[f]||u[f]||l;return t?r.a.createElement(b,s(s({ref:n},d),{},{components:t})):r.a.createElement(b,s({ref:n},d))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=f;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<l;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return c}));var a=t(3),r=t(7),l=(t(0),t(177)),i={},s={unversionedId:"v0/datastores/GetDatastoreFields",id:"v0/datastores/GetDatastoreFields",isDocsHomePage:!1,title:"GetDatastoreFields",description:"GetDatastoreFields",source:"@site/docs\\v0\\datastores\\GetDatastoreFields.md",slug:"/v0/datastores/GetDatastoreFields",permalink:"/linker-api-doc/docs/v0/datastores/GetDatastoreFields",version:"current",sidebar:"default",previous:{title:"GetChartSearchConditions",permalink:"/linker-api-doc/docs/v0/charts/GetChartSearchConditions"},next:{title:"CreateGroup",permalink:"/linker-api-doc/docs/v0/groups/CreateGroup"}},o=[],d={toc:o};function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h4",{id:"getdatastorefields"},"GetDatastoreFields"),Object(l.b)("p",null,"\u30d5\u30a3\u30fc\u30eb\u30c9\u4e00\u89a7\uff08DisplayID\u3092\u5229\u7528\uff09"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Description")),Object(l.b)("p",null,"\u5229\u7528\u53ef\u80fd\u306a\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u4e00\u89a7\u3092\u53d6\u5f97\u3057\u307e\u3059\uff08DisplayID\u3092\u5229\u7528\uff09"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Method")),Object(l.b)("p",null,"GET"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Request URL Format")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/datastores/:datastore-id/fields\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"URL Params")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"app-id  : \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u3092\u6307\u5b9a\uff09\ndatastore-id    : \u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\uff09\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Request URL Sample")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.xxx.com/api/v0/applications/APPNAME/datastores/RESERVES/fields\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Response Sample")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "fields": {\n        "59bf42550e247918255de00d": {\n            "field_id": "59bf42550e247918255de00d",\n            "name": "\u30bf\u30a4\u30c8\u30eb",\n            "display_id": "\u30bf\u30a4\u30c8\u30eb",\n            "dataType": "text",\n            "search": true,\n            "show_list": false,\n            "as_title": true,\n            "status": false,\n            "fieldIndex": 0,\n            "title_order": 1,\n            "full_text": false,\n            "unique": false,\n            "min_value": "",\n            "max_value": ""\n        },\n        "59bf42550e247918255de00e": {\n            "field_id": "59bf42550e247918255de00e",\n            "name": "\u30b9\u30c6\u30fc\u30bf\u30b9",\n            "display_id": "Fld-nj1ZetGV",\n            "dataType": "status",\n            "search": true,\n            "show_list": true,\n            "as_title": false,\n            "status": true,\n            "fieldIndex": 1,\n            "title_order": 0,\n            "full_text": false,\n            "unique": false,\n            "min_value": "",\n            "max_value": ""\n        },\n        "5a26722e0e24794c979fa5b6": {\n            "field_id": "5a26722e0e24794c979fa5b6",\n            "name": "n1",\n            "display_id": "Fld-BCgyvxUw",\n            "dataType": "number",\n            "search": true,\n            "show_list": true,\n            "as_title": false,\n            "status": false,\n            "fieldIndex": 0,\n            "title_order": 0,\n            "full_text": false,\n            "unique": false,\n            "min_value": "1",\n            "max_value": "10"\n        },\n        "5a82bffd0e247948bd5cfaf2": {\n          "field_id": "5a82bffd0e247948bd5cfaf2",\n          "name": "ds1",\n          "display_id": "Fld-qFRXJAF2",\n          "dataType": "dslookup",\n          "search": false,\n          "show_list": true,\n          "as_title": false,\n          "status": false,\n          "fieldIndex": 0,\n          "title_order": 0,\n          "full_text": false,\n          "unique": false,\n          "min_value": "",\n          "max_value": "",\n          "dslookup_info": {\n            "dslookup_datastore_id": "5a82bfd50e247948dba5ad20",\n            "dslookup_field_id": "ae47af42-3740-4840-a395-b1b5cc4a8b72"\n          }\n        },\n        "5a8392390e247948bd5cfaf3": {\n          "field_id": "5a8392390e247948bd5cfaf3",\n          "name": "s1",\n          "display_id": "Fld-FZR9lYNR",\n          "dataType": "select",\n          "search": true,\n          "show_list": true,\n          "as_title": false,\n          "status": false,\n          "fieldIndex": 0,\n          "title_order": 0,\n          "full_text": false,\n          "unique": false,\n          "min_value": "",\n          "max_value": "",\n          "options": [\n            {\n              "option_id": "dc236a0d-58b0-400e-88c7-9276207438cb",\n              "sort_id": 0,\n              "value": "\u9078\u629e1",\n              "enabled": true,\n              "display_id": "Option1"\n            },\n            {\n              "option_id": "a355531b-c80f-40e8-b6d7-3dc75cc9f3c5",\n              "sort_id": 1,\n              "value": "\u9078\u629e2",\n              "enabled": true,\n              "display_id": "Option2"\n            }\n          ]\n        }\n    },\n    "field_layout": {\n        "59bf42550e247918255de00d": {\n            "field_id": "59bf42550e247918255de00d",\n            "sizeX": 9,\n            "sizeY": 1,\n            "col": 0,\n            "row": 0\n        },\n        "5a26722e0e24794c979fa5b6": {\n            "field_id": "5a26722e0e24794c979fa5b6",\n            "sizeX": 6,\n            "sizeY": 1,\n            "col": 0,\n            "row": 1\n        },\n    }\n}\n')))}c.isMDXComponent=!0}}]);