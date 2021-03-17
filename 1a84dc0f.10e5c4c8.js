(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{177:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),s=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=s(t),u=r,f=l["".concat(c,".").concat(u)]||l[u]||b[u]||o;return t?a.a.createElement(f,i(i({ref:n},d),{},{components:t})):a.a.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<o;d++)c[d]=t[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},84:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(177)),c={},i={unversionedId:"v0/reports/GetReportSearchConditions",id:"v0/reports/GetReportSearchConditions",isDocsHomePage:!1,title:"GetReportSearchConditions",description:"GetReportSearchConditions",source:"@site/docs/v0/reports/GetReportSearchConditions.md",slug:"/v0/reports/GetReportSearchConditions",permalink:"/linker-api-doc/docs/v0/reports/GetReportSearchConditions",version:"current",sidebar:"default",previous:{title:"GetReportDataByConditions",permalink:"/linker-api-doc/docs/v0/reports/GetReportDataByConditions"},next:{title:"AddGroupRoles",permalink:"/linker-api-doc/docs/v0/roles/AddGroupRoles"}},p=[],d={toc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"getreportsearchconditions"},"GetReportSearchConditions"),Object(o.b)("p",null,"\u30ec\u30dd\u30fc\u30c8\u306e\u691c\u7d22\u6761\u4ef6\u3092\u53d6\u5f97"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u30c7\u30fc\u30bf\u30ec\u30dd\u30fc\u30c8\u306e\u691c\u7d22\u6761\u4ef6\u3092\u53d6\u5f97\u3059\u308b\uff08\u691c\u7d22\u6761\u4ef6\u30c0\u30a4\u30a2\u30ed\u30b0\u7b49\u3001\u8868\u793a\u7528\uff09"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"GET"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/reports/:report-id/conditions\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Params")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"\u7279\u306b\u306a\u3057\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID/conditions\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'[\n    {\n        "rpf_id": "4a0b2f8a-f332-4579-a2d4-e9b5971d9e80",\n        "display_id": "TITLE",\n        "f_id": "5c69148384f4be344c2ff0f1",\n        "name": "Title",\n        "dataType": "text",\n        "order": 0\n    },\n    {\n        "rpf_id": "b752bf7f-9f0d-4370-ac34-45b9be01453f",\n        "display_id": "DueDate",\n        "f_id": "5c69148384f4be344c2ff0f2",\n        "name": "Due Date",\n        "dataType": "date",\n        "order": 4\n    },\n    {\n        "rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",\n        "display_id": "CATEGORY",\n        "f_id": "5c6363ed84f4be7de0350452",\n        "name": "Category",\n        "dataType": "select",\n        "order": 2,\n        "options": [\n            {\n                "o_id": "5c6363f384f4be2550bfe91b",\n                "value": "C",\n                "color": "",\n                "enabled": true,\n                "sort_id": 0\n            },\n            {\n                "o_id": "5c6363f384f4be2550bfe91c",\n                "value": "B",\n                "color": "",\n                "enabled": true,\n                "sort_id": 1\n            },\n            {\n                "o_id": "5c6363f384f4be2550bfe91d",\n                "value": "A",\n                "color": "",\n                "enabled": true,\n                "sort_id": 2\n            }\n        ]\n    },\n    {\n        "rpf_id": "85c15eca-1b7a-4423-9969-55f363efc4c1",\n        "name": "Status",\n        "display_id": "STATUS",\n        "f_id": "5c6363ed84f4be7de0350453",\n        "dataType": "status",\n        "order": 3,\n        "statuses": [\n            {\n                "s_id": "5c6363ed84f4be7de0350457",\n                "name": "New",\n                "color": ""\n            },\n            {\n                "s_id": "5c6363ed84f4be7de0350456",\n                "name": "Closed",\n                "color": ""\n            },\n            {\n                "s_id": "5c6363ed84f4be7de0350459",\n                "name": "In Review",\n                "color": ""\n            },\n            {\n                "s_id": "5c6363ed84f4be7de0350458",\n                "name": "Assigned",\n                "color": ""\n            },\n            {\n                "s_id": "5c6363ed84f4be7de035045a",\n                "name": "In Progress",\n                "color": ""\n            }\n        ]\n    },\n    {\n        "rpf_id": "4552a666-508d-419c-ba99-7c9a16b24894",\n        "display_id": "NOTE",\n        "f_id": "5c6459de84f4be4588a77288",\n        "name": "note",\n        "dataType": "textarea",\n        "order": 5\n    },\n    {\n        "rpf_id": "8a20643b-fe36-45f1-bbd6-b2b6e4296a54",\n        "display_id": "NUM",\n        "f_id": "5c91f38a84f4be29540c4e9c",\n        "name": "Num",\n        "dataType": "number",\n        "order": 6\n    }\n]\n')))}s.isMDXComponent=!0}}]);