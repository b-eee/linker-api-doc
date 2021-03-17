(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(177)),i={},p={unversionedId:"v0/item-actions/CreateItemWithItemID",id:"v0/item-actions/CreateItemWithItemID",isDocsHomePage:!1,title:"CreateItemWithItemID",description:"CreateItemWithItemID",source:"@site/docs\\v0\\item-actions\\CreateItemWithItemID.md",slug:"/v0/item-actions/CreateItemWithItemID",permalink:"/linker-api-doc/docs/v0/item-actions/CreateItemWithItemID",version:"current",sidebar:"default",previous:{title:"UpdateGroup",permalink:"/linker-api-doc/docs/v0/groups/UpdateGroup"},next:{title:"CreateNewItemID",permalink:"/linker-api-doc/docs/v0/item-actions/CreateNewItemID"}},o=[],l={toc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"createitemwithitemid"},"CreateItemWithItemID"),Object(c.b)("p",null,"item","_","id\u3092\u6307\u5b9a\u3057\u3066\u65b0\u898f\u30a2\u30a4\u30c6\u30e0\u3092\u4f5c\u6210"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"item","_","id\u3092\u6307\u5b9a\u3057\u3066\u65b0\u898f\u30a2\u30a4\u30c6\u30e0\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",Object(c.b)("br",{parentName:"p"}),"\n","\u3053\u306eAPI\u306f\u3001",Object(c.b)("inlineCode",{parentName:"p"},"\u30a2\u30a4\u30c6\u30e0\u767b\u9332\u524d"),"\u306b",Object(c.b)("inlineCode",{parentName:"p"},"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u304c\u5fc5\u8981"),"\u306a\u5834\u5408\u3067\u5229\u7528\u3057\u307e\u3059\u3002",Object(c.b)("br",{parentName:"p"}),"\n","\u65b0\u898f\u306b\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u3092\u6301\u3063\u305f\u30a2\u30a4\u30c6\u30e0\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u3042\u3089\u304b\u3058\u3081\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e\u767b\u9332\u304c\u5fc5\u8981\u3067\u3059\u3002\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e\u767b\u9332\u306b\u306fitem","_","id\u304c\u5fc5\u8981\u306a\u305f\u3081\u3001item","_","id\u3092\u53d6\u5f97\u3057\u305f\u5f8c\u306b\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u3092\u767b\u9332\u3057\u3001\u5909\u63db\u3055\u308c\u305ffile","_","id\u3092\u6307\u5b9a\u3057\u3066\u3001\u3053\u306eAPI\u3067\u30a2\u30a4\u30c6\u30e0\u3092\u65b0\u898f\u4f5c\u6210\u3057\u307e\u3059\u3002item","_","id\u306f\u3001",Object(c.b)("a",{parentName:"p",href:"/docs/v0/item-actions/CreateNewItemID"},"CreateNewItemID API"),"\u3092\u5229\u7528\u3057\u3066\u4e8b\u524d\u306b\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"POST"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Format")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/items/:item-id/new-actions/:action-id\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL Params")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"item-id      : \u30a2\u30a4\u30c6\u30e0ID\naction-id    : \u65b0\u898f\u4f5c\u6210\u30a2\u30af\u30b7\u30e7\u30f3ID\uff08Payload\u5185\u306e`use_display_id`\u304ctrue\u306e\u5834\u5408\u3001\u753b\u9762ID(\u8a2d\u5b9a\u3067\u6307\u5b9a\u3057\u305fID)\u3092\u4f7f\u7528\u3002false\u306e\u5834\u5408\u30b7\u30b9\u30c6\u30e0\u5185\u90e8\u306eID(a_id)\u3092\u4f7f\u7528\u3002\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Payload")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Content-Type : application/json")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},'{\n  "item": {\n    "\u9805\u76eeID1": "\u4f5c\u6210\u30a2\u30a4\u30c6\u30e0\u9805\u76ee\u306e\u5024\uff11",\n    "\u9805\u76eeID2": "\u4f5c\u6210\u30a2\u30a4\u30c6\u30e0\u9805\u76ee\u306e\u5024\uff12"\n    },\n  "project_id": "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8ID",\n  "datastore_id": "\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9ID",\n  "use_display_id": true or false //true\u306e\u5834\u5408\u3001item\u5185\u306e\u9805\u76eeID\u306b\u753b\u9762ID\u3092\u4f7f\u7528\u3059\u308b\u3002false\u306e\u5834\u5408\u30b7\u30b9\u30c6\u30e0\u5185\u90e8\u306eFieldID(f_id)\u3092\u4f7f\u7528\u3059\u308b\u3002\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306ffalse\u3002\n}\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request Sample1")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/items/5a2671ef0e24794cb08e6200/new-actions/\u30a2\u30af\u30b7\u30e7\u30f3ID\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},'{\n  "item": {\n    "Locaton": "\u5317\u6975",\n    "weather": "\u96ea"\n  },\n  "project_id": "\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID",\n  "datastore_id": "\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9D",\n  "use_display_id": true\n}\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"null\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request Sample2")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/items/5a2671ef0e24794cb08e6200/new-actions/5e99e6a8aeae8e9af01ec366\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},'{\n  "item": {\n    "5e99e2e3aeae8e9af01ec35b": "\u5317\u6975",\n    "5e99e690aeae8e9af01ec363": "\u96ea"\n  },\n  "project_id": "5e99e696aeae8e9af01ec364",\n  "datastore_id": "5e99e69caeae8e9af01ec365",\n  "use_display_id": false\n}\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample2")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"null\n")))}b.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=b(n),u=a,d=m["".concat(i,".").concat(u)]||m[u]||s[u]||c;return n?r.a.createElement(d,p(p({ref:t},l),{},{components:n})):r.a.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);