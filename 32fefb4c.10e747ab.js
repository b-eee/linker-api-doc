(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{177:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,b=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(177)),o={},c={unversionedId:"v0/item-histories/GetItemHistoriesOld",id:"v0/item-histories/GetItemHistoriesOld",isDocsHomePage:!1,title:"GetItemHistoriesOld",description:"GetItemHistoriesOld",source:"@site/docs/v0/item-histories/GetItemHistoriesOld.md",slug:"/v0/item-histories/GetItemHistoriesOld",permalink:"/linker-api-doc/docs/v0/item-histories/GetItemHistoriesOld",version:"current",sidebar:"default",previous:{title:"GetItemHistories",permalink:"/linker-api-doc/docs/v0/item-histories/GetItemHistories"},next:{title:"PostItemComment",permalink:"/linker-api-doc/docs/v0/item-histories/PostItemComment"}},s=[],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"getitemhistoriesold"},"GetItemHistoriesOld"),Object(i.b)("p",null,"\u5c65\u6b74\u53d6\u5f97"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Description")),Object(i.b)("p",null,"\u30b3\u30e1\u30f3\u30c8\u3084\u30a2\u30af\u30b7\u30e7\u30f3\u5b9f\u884c\u306e\u5c65\u6b74\u3092\u53d6\u5f97\u3057\u307e\u3059"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Method")),Object(i.b)("p",null,"GET"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request URL Format")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/datastores/:datastore-id/items/:item-id/histories\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Params")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"from_item_index : \u6700\u65b0\u30b3\u30e1\u30f3\u30c8\u304b\u3089\u4f55\u756a\u76ee\u3092\u53d6\u5f97\u3059\u308b\u304b\u3001\u3092\u6307\u5b9a\nto_item_index : \u6700\u65b0\u30b3\u30e1\u30f3\u30c8\u304b\u3089\u4f55\u756a\u76ee\u307e\u3067\u53d6\u5f97\u3059\u308b\u304b\u3001\u3092\u6307\u5b9a\n")),Object(i.b)("p",null,"\uff08\u4f8b\uff09\n1\u30da\u30fc\u30b8\u76ee\u306e\u53d6\u5f97\nfrom_item_index=0\nto_item_index=10"),Object(i.b)("p",null,"2\u30da\u30fc\u30b8\u76ee\u306e\u53d6\u5f97\nfrom_item_index=10\nto_item_index=20"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request URL Sample")),Object(i.b)("p",null,"\u6700\u521d\u306e30\u4ef6\u306e\u66f4\u65b0\u30b3\u30e1\u30f3\u30c8\u3092\u53d6\u5f97\u3057\u307e\u3059"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"GET https://api.xxx.com/api/v0/datastores/58cbf6cbfbfcba78dc71228d/items/59ad2d8a0e247927638e761a/histories?from_item_index=0&to_item_index=30\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Response Sample")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "histories": [\n        {\n            "h_id": "59af71aa0e247958c7011a87",\n            "user_id": "59ac9f980e2479264852594f",\n            "i_id": "59ad2d8a0e247927638e761a",\n            "history": {\n                "user_id": "59ac9f980e2479264852594f",\n                "history_id": "59af71aa0e247958c7011a87",\n                "item_id": "59ad2d8a0e247927638e761a",\n                "transaction_id": "59af71aa0e247958c7011a80",\n                "comment": "\u66f4\u65b0\u3057\u307e\u3057\u305f",\n                "datastore_id": "59ad2d890e247927638e7619",\n                "workspace_id": "59ac9fac0e24792648525951",\n                "action_id": "59ad2d8a0e2479348590c85f",\n                "action_name": "\u6b21\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u306b\u9032\u3081\u308b",\n                "post_mode": "ExcecuteAction",\n                "created_at": "2017-09-06T12:55:22.409+09:00",\n                "username": "user1",\n                "email": "user1@example.com",\n                "datastore_name": "\u30c7\u30fc\u30bf\u30b9\u30c8\u30a21",\n                "media_link": "https://storage.googleapis.com/linker/pub/default.png",\n                "display_order": 0\n            }\n        }\n    ],\n    "unread": 0\n}\n')))}l.isMDXComponent=!0}}]);