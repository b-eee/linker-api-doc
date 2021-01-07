(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(166)),c={},p={unversionedId:"API/v1/reports/GetReportDataByConditions",id:"API/v1/reports/GetReportDataByConditions",isDocsHomePage:!1,title:"GetReportDataByConditions",description:"GetReportDataByConditions",source:"@site/docs\\API\\v1\\reports\\GetReportDataByConditions.md",slug:"/API/v1/reports/GetReportDataByConditions",permalink:"/linker-api-doc/docs/API/v1/reports/GetReportDataByConditions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API/v1/reports/GetReportDataByConditions.md",version:"current",sidebar:"someSidebar",previous:{title:"GetReportData",permalink:"/linker-api-doc/docs/API/v1/reports/GetReportData"},next:{title:"GetReportSearchConditions",permalink:"/linker-api-doc/docs/API/v1/reports/GetReportSearchConditions"}},i=[],s={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"getreportdatabyconditions"},"GetReportDataByConditions"),Object(o.b)("p",null,"\u6761\u4ef6\u3092\u6307\u5b9a\u3057\u3066\u30ec\u30dd\u30fc\u30c8\u30c7\u30fc\u30bf\u3092\u53d6\u5f97"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u6761\u4ef6\u3092\u6307\u5b9a\u3057\u3066\u30ec\u30dd\u30fc\u30c8\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"POST"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"/api/v0/applications/:app-id/reports/:report-id/filter\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'\n// \u691c\u7d22\u6761\u4ef6\u306e\u6307\u5b9a\n"conditions" : [] //\u691c\u7d22\u6761\u4ef6\u3092\u6307\u5b9a\n            // "id" : DataReport\u30d5\u30a3\u30fc\u30eb\u30c9\u306edisplay_id\u3000\u307e\u305f\u306f\u3001 "rpf_id"(/conditions API\u3067\u8fd4\u3055\u308c\u308b\u30ec\u30dd\u30fc\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9ID) \u3092\u6307\u5b9a\n            // "search_value": \u691c\u7d22\u6761\u4ef6\u3092\u914d\u5217\u3067\u6307\u5b9a\uff08\u30b5\u30f3\u30d7\u30eb\u3092\u53c2\u7167\uff09 \u203b\u30a2\u30a4\u30c6\u30e0\u4e00\u89a7\u306e\u6307\u5b9a\u3068\u540c\u69d8\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u30bf\u30a4\u30d7\u3054\u3068\u306b\u6307\u5b9a\u5185\u5bb9\u304c\u7570\u306a\u308b\n\n// \u30da\u30fc\u30b8\u30cd\u30fc\u30b7\u30e7\u30f3\n"per_page" : 10 // 1\u30da\u30fc\u30b8\u305f\u3042\u305f\u308a\u306e\u53d6\u5f97\u4ef6\u6570\u3000\uff08\u7701\u7565\u3001\u307e\u305f\u306f\u3001\u30bc\u30ed\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u5bfe\u8c61\u30c7\u30fc\u30bf\u5168\u4ef6\u3092\u8fd4\u3057\u307e\u3059\uff09\n"page" : 1 // \u30da\u30fc\u30b8\u6570 \n\n// \u30bd\u30fc\u30c8\u9806\u306e\u6307\u5b9a\uff08\u8907\u6570\u306e\u30bd\u30fc\u30c8\u30ad\u30fc\u6307\u5b9a\uff09\n"sort_fields": [\n    {"id": "Status", "order": "desc"},  // id\u306b\u306f\u3001 display_id \u307e\u305f\u306f rpf_id\u3092\u6307\u5b9a\u3000\n    {"id": "Category", "order": "asc"}\u3000// order \u306b\u306f\u30bd\u30fc\u30c8\u9806\u3092\u6307\u5b9a\u3000desc : \u964d\u9806\u3000ask : \u6607\u9806\u3000\uff08\u7701\u7565\u3059\u308b\u3068\u6607\u9806\u3068\u306a\u308a\u307e\u3059\uff09\n],\n\n// \u30bd\u30fc\u30c8\u9806\u306e\u6307\u5b9a\uff08\u5358\u4e00\u306e\u30bd\u30fc\u30c8\u30ad\u30fc\u6307\u5b9a\uff09\u203b"sort_fields": []\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u3053\u306e\u6307\u5b9a\u306f\u7121\u8996\u3055\u308c\u308c\u307e\u3059\uff08sort_fields\u304c\u512a\u5148\u3055\u308c\u308b\uff09\n"sort_field_id": "No",\u3000// display_id \u307e\u305f\u306f rpf_id\u3092\u6307\u5b9a\n"sort_order": "desc",  // asc \u307e\u305f\u306f desc\u3092\u6307\u5b9a\n\n// \u7d50\u679c\u3092CSV\u5f62\u5f0f\u53d6\u5f97\u3059\u308b\u5834\u5408\u3001"csv"\u3068\u6307\u5b9a\uff08\u7701\u7565\u3059\u308b\u3068JSON\u5f62\u5f0f\u3068\u306a\u308b\uff09\n"format": "csv" \n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Sample")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"POST https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID/conditions\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload Sample")),Object(o.b)("p",null,"\u691c\u7d22\u6761\u4ef6\u306b\u753b\u9762ID\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3000\uff08id: \u306b\u30d5\u30a3\u30fc\u30eb\u30c9ID\u3092\u6307\u5b9a\u3057\u307e\u3059\uff09"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "conditions":[\n        { "id":"CATEGORY",  "search_value":["B"] } // CATEGORY\u30ab\u30e9\u30e0\u306e\u30c7\u30fc\u30bf\u5024B\u306e\u3082\u306e\u306e\u307f\u306b\u7d5e\u8fbc\u307f\n    ],\n    "sort_fields": [\n        {"id": "Status", "order": "desc"}, \u3000// \u7b2c\uff11\u30bd\u30fc\u30c8\u30ad\u30fc\n        {"id": "Category", "order": "asc"}\u3000// \u7b2c\uff12\u30bd\u30fc\u30c8\u30ad\u30fc\n    ],\n    "per_page" : 10,\n    "page" : 1\n}\n')),Object(o.b)("p",null,"\u30ec\u30dd\u30fc\u30c8\u7528\u30d5\u30a3\u30fc\u30eb\u30c9ID\u3092\u5229\u7528\u3059\u308b\u5834\u5408 \uff08rpf_id: \u306b\u30ec\u30dd\u30fc\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9ID\u3092\u6307\u5b9a\u3057\u307e\u3059\uff09"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "conditions":[\n        {\n            "rpf_id":"4552a666-508d-419c-ba99-7c9a16b24894",  // \u7279\u5b9a\u30ab\u30e9\u30e0\u306e\u5024\u3067\u7d5e\u8fbc\n            "search_value":["B"]\n        }\n    ],\n    "sort_field_id": "No",  // No \u30ab\u30e9\u30e0\u3067\u30bd\u30fc\u30c8\n    "sort_order": "desc", // \u964d\u9806\n    "format": "csv" // CSV\u5f62\u5f0f\u3067\u51fa\u529b\n    // per_page\u3092\u7701\u7565\uff1d\u5168\u4ef6\u3092\u51fa\u529b\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'\uff08\u7701\u7565\uff09 \n\u203b\u3000JSON\u5f62\u5f0f\u306f\u3001\u30c7\u30fc\u30bf\u30ec\u30dd\u30fc\u30c8\u53d6\u5f97\u30b5\u30f3\u30d7\u30eb\u3068\u540c\u69d8\n\u203b\u3000format="csv"\u306e\u5834\u5408\u306f\u30011\u884c\u76ee\u304c\u30d8\u30c3\u30c0\u884c\u30012\u884c\u76ee\u4ee5\u964d\u306b\u30c7\u30fc\u30bf\u3092\u30ab\u30f3\u30de\u533a\u5207\u308a\u3067\u51fa\u529b\u3055\u308c\u308b\n')))}l.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,O=d["".concat(c,".").concat(u)]||d[u]||b[u]||o;return n?a.a.createElement(O,p(p({ref:t},s),{},{components:n})):a.a.createElement(O,p({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);