(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(187)),o=["components"],i={},l={unversionedId:"v0/item-actions/DeleteItem",id:"v0/item-actions/DeleteItem",isDocsHomePage:!1,title:"DeleteItem",description:"DeleteItem",source:"@site/docs/v0/item-actions/DeleteItem.md",slug:"/v0/item-actions/DeleteItem",permalink:"/linker-api-doc/docs/v0/item-actions/DeleteItem",version:"current",sidebar:"default",previous:{title:"ExecuteBulkAction",permalink:"/linker-api-doc/docs/v0/item-actions/ExecuteBulkAction"},next:{title:"DeleteItemByConditions",permalink:"/linker-api-doc/docs/v0/item-actions/DeleteItemByConditions"}},p=[],b={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"deleteitem"},"DeleteItem"),Object(c.b)("p",null,"\u30a2\u30a4\u30c6\u30e0\u306e\u524a\u9664\uff08DisplayID\u306e\u5229\u7528\uff09"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"\u6307\u5b9a\u3057\u305f\u30a2\u30a4\u30c6\u30e0\u3092\u524a\u9664\u3057\u307e\u3059\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u3092\u6307\u5b9a\uff09"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"DELETE"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Format")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/datastores/:datastore-id/items/delete/:item-id\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL Params")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"app-id          : \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u307e\u305f\u306f\u5185\u90e8ID[p_id]\u3092\u6307\u5b9a\uff09\ndatastore-id    : \u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u307e\u305f\u306f\u5185\u90e8ID[d_id]\u3092\u6307\u5b9a\uff09\nitem-id         : \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0\u306eID\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Payload")),Object(c.b)("p",null,"\uff08\u6ce8\u610f\uff09"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3067\u3082\u3001\u7a7a\u306eJSON ",Object(c.b)("inlineCode",{parentName:"li"},"{}"),"\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059"),Object(c.b)("li",{parentName:"ul"},"delete_linked_items : true\u306e\u5834\u5408\u306f\u3001\u524a\u9664\u5bfe\u8c61\u306etarget_datastores\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),Object(c.b)("li",{parentName:"ul"},"target_datastores\u306b\u306f\u3001\u753b\u9762ID\u307e\u305f\u306fd_id\u3092\u6307\u5b9a\u53ef\u80fd\u3067\u3059\u3002\u5b6b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306a\u3069\u3001\u95a2\u9023\u3092\u305f\u3069\u3063\u3066\u6307\u5b9a\u53ef\u80fd\u3067\u3059\u3002"),Object(c.b)("li",{parentName:"ul"},"\u3053\u306eAPI\u304c\u524a\u9664\u53ef\u80fd\u306a\uff11\u30a2\u30a4\u30c6\u30e0\u306b\u95a2\u9023\u3059\u308b\u30a2\u30a4\u30c6\u30e0\u306e\u4e0a\u9650\u306f",Object(c.b)("inlineCode",{parentName:"li"},"100\u4ef6"),"\u3067\u3059\u3002100\u4ef6\u3092\u8d85\u3048\u305f\u5834\u5408\u3001\u305d\u306e\u95a2\u9023\u30a2\u30a4\u30c6\u30e0\u306f\u524a\u9664\u3055\u308c\u307e\u305b\u3093\u3002")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  delete_linked_items : true,                                     // true : \u95a2\u9023\u3057\u305f\u30a2\u30a4\u30c6\u30e0\u3082\u524a\u9664\n  target_datastores: [ "DATASTORE_A", "DATASTORE_B", ...] // delete_linked_items: true\u306e\u5834\u5408\u3001\u524a\u9664\u3059\u308b\u95a2\u9023\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u753b\u9762ID(\u307e\u305f\u306fd_id)\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\uff08\u540c\u4e00\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306e\u307f\u6307\u5b9a\u53ef\u80fd\uff09\u6ce8\u610f\uff1a\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u524a\u9664\u3055\u308c\u307e\u305b\u3093\u3002\n}\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"DELETE http://api.xxx.com/api/v0/applications/APPNAME/datastores/RESERVES/items/delete/5d4c058baa39555618ac9e8b\n\nPayload (\u7a7a\u306eJSON\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059)\n{}\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "error": null,\n}\n')))}s.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||c;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);