(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(190)),i=["components"],o={},l={unversionedId:"v0/item-links/DeleteItemLink",id:"v0/item-links/DeleteItemLink",isDocsHomePage:!1,title:"DeleteItemLink",description:"DeleteItemLink",source:"@site/docs/v0/item-links/DeleteItemLink.md",slug:"/v0/item-links/DeleteItemLink",permalink:"/linker-api-doc/docs/v0/item-links/DeleteItemLink",version:"current",sidebar:"default",previous:{title:"AddItemLink",permalink:"/linker-api-doc/docs/v0/item-links/AddItemLink"},next:{title:"GetLinkedItems",permalink:"/linker-api-doc/docs/v0/item-links/GetLinkedItems"}},p=[],b={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,i);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"deleteitemlink"},"DeleteItemLink"),Object(c.b)("p",null,"\u95a2\u9023\u30a2\u30a4\u30c6\u30e0\u3068\u306e\u30ea\u30f3\u30af\u3092\u524a\u9664\uff08DisplayID\u306e\u5229\u7528\uff09"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"\u95a2\u9023\u30a2\u30a4\u30c6\u30e0\u3068\u306e\u30ea\u30f3\u30af\u3092\u524a\u9664\u3057\u307e\u3059"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"DELETE"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Format")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/datastores/:datastore-id/items/dellink/:item-id\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL Params")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"app-id          : \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u307e\u305f\u306f\u5185\u90e8ID[p_id]\u3092\u6307\u5b9a\uff09\ndatastore-id    : \u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u307e\u305f\u306f\u5185\u90e8ID[d_id]\u3092\u6307\u5b9a\uff09\nitem-id         : \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0\u306eID\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Payload")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "link_datastore_id": "DATABASE_2",\n    "link_item_id": "5d4c055eaa39555618ac9e6a"  //\u7701\u7565\u3059\u308b\u3068\u3001link_datastore_id\u306b\u95a2\u9023\u3059\u308b\u3059\u3079\u3066\u306eItem\u306e\u30ea\u30f3\u30af\u304c\u524a\u9664\u3055\u308c\u307e\u3059\n}\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"DELETE http://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASE_1/items/dellink/5d4c058baa39555618ac9e8b\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"null\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Error Sample"),"\n\u524a\u9664\u5bfe\u8c61\u304c\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'HTTP 404\n{\n    "error": "item links not found for {DATABASE_1 5d4c058baa39555618ac9e8b DATABASE_2 5d4c055eaa39555618ac9e6a  }",\n    "error_code": "NOT_FOUND"\n}\n')))}s.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||c;return n?a.a.createElement(d,o(o({ref:t},p),{},{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);