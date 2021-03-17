(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{149:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),c=(t(0),t(170)),o={},l={unversionedId:"v0/charts/GetChartData",id:"v0/charts/GetChartData",isDocsHomePage:!1,title:"GetChartData",description:"GetChartData",source:"@site/docs/v0/charts/GetChartData.md",slug:"/v0/charts/GetChartData",permalink:"/linker-api-doc/docs/v0/charts/GetChartData",version:"current",sidebar:"default",previous:{title:"GetApplicationsAndDatastores",permalink:"/linker-api-doc/docs/v0/applications/GetApplicationsAndDatastores"},next:{title:"GetChartDataByConditions",permalink:"/linker-api-doc/docs/v0/charts/GetChartDataByConditions"}},p=[],i={toc:p};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"getchartdata"},"GetChartData"),Object(c.b)("p",null,"\u30c1\u30e3\u30fc\u30c8\u30c7\u30fc\u30bf\u306e\u53d6\u5f97"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"\u30c1\u30e3\u30fc\u30c8\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"GET"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Format")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/charts/:chart-id\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Params")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"\u7279\u306b\u306a\u3057\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.xxx.com/api/v0/applications/APP_ID/charts/CHART_ID\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample")),Object(c.b)("p",null,"\u6ce8\u610f\uff09\u30c1\u30e3\u30fc\u30c8\u30bf\u30a4\u30d7\u306b\u3088\u308a\u3001\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "chart": {\n        "type": "barStacked"\n    },\n    "color": "DEFAULT",\n    "datasets": [\n        {\n            "data": [\n                80,\n                30\n            ],\n            "label": "9\u6708"\n        },\n        {\n            "data": [\n                90,\n                80\n            ],\n            "label": "8\u6708"\n        },\n        {\n            "data": [\n                140,\n                80\n            ],\n            "label": "11\u6708"\n        },\n        {\n            "data": [\n                100,\n                70\n            ],\n            "label": "1\u6708"\n        },\n        {\n            "data": [\n                150,\n                90\n            ],\n            "label": "12\u6708"\n        },\n        {\n            "data": [\n                120,\n                30\n            ],\n            "label": "2\u6708"\n        },\n        {\n            "data": [\n                160,\n                60\n            ],\n            "label": "3\u6708"\n        },\n        {\n            "data": [\n                80,\n                80\n            ],\n            "label": "4\u6708"\n        },\n        {\n            "data": [\n                50,\n                100\n            ],\n            "label": "6\u6708"\n        },\n        {\n            "data": [\n                120,\n                40\n            ],\n            "label": "10\u6708"\n        },\n        {\n            "data": [\n                70,\n                60\n            ],\n            "label": "5\u6708"\n        },\n        {\n            "data": [\n                60,\n                120\n            ],\n            "label": "7\u6708"\n        }\n    ],\n    "labels": [\n        "\u4e8b\u696d\u90e8A",\n        "\u4e8b\u696d\u90e8B"\n    ],\n    "title": {\n        "text": "\uff11"\n    },\n    "zero": true\n}\n')))}b.isMDXComponent=!0},170:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),b=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=b(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=b(t),d=a,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||c;return t?r.a.createElement(m,l(l({ref:n},i),{},{components:t})):r.a.createElement(m,l({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=t[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);