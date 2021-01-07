(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(166)),c={},o={unversionedId:"API/v1/item-links/DeleteItemLink",id:"API/v1/item-links/DeleteItemLink",isDocsHomePage:!1,title:"DeleteItemLink",description:"DeleteItemLink",source:"@site/docs\\API\\v1\\item-links\\DeleteItemLink.md",slug:"/API/v1/item-links/DeleteItemLink",permalink:"/linker-api-doc/docs/API/v1/item-links/DeleteItemLink",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API/v1/item-links/DeleteItemLink.md",version:"current",sidebar:"someSidebar",previous:{title:"AddItemLink",permalink:"/linker-api-doc/docs/API/v1/item-links/AddItemLink"},next:{title:"GetLinkedItems",permalink:"/linker-api-doc/docs/API/v1/item-links/GetLinkedItems"}},l=[],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"deleteitemlink"},"DeleteItemLink"),Object(i.b)("p",null,"\u95a2\u9023\u30a2\u30a4\u30c6\u30e0\u3068\u306e\u30ea\u30f3\u30af\u3092\u524a\u9664\uff08DisplayID\u306e\u5229\u7528\uff09"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Description")),Object(i.b)("p",null,"\u95a2\u9023\u30a2\u30a4\u30c6\u30e0\u3068\u306e\u30ea\u30f3\u30af\u3092\u524a\u9664\u3057\u307e\u3059"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Method")),Object(i.b)("p",null,"DELETE"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request URL Format")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"/api/v0/applications/:app-id/datastores/:datastore-id/items/dellink/:item-id\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"URL Params")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"app-id          : \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u307e\u305f\u306f\u5185\u90e8ID[p_id]\u3092\u6307\u5b9a\uff09\ndatastore-id    : \u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID\uff08Hexabase\u753b\u9762\u304b\u3089\u5165\u529b\u3057\u305fID\u307e\u305f\u306f\u5185\u90e8ID[d_id]\u3092\u6307\u5b9a\uff09\nitem-id         : \u5bfe\u8c61\u30a2\u30a4\u30c6\u30e0\u306eID\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Payload")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "link_datastore_id": "DATABASE_2",\n    "link_item_id": "5d4c055eaa39555618ac9e6a"  //\u7701\u7565\u3059\u308b\u3068\u3001link_datastore_id\u306b\u95a2\u9023\u3059\u308b\u3059\u3079\u3066\u306eItem\u306e\u30ea\u30f3\u30af\u304c\u524a\u9664\u3055\u308c\u307e\u3059\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request URL Sample")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"DELETE http://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASE_1/items/dellink/5d4c058baa39555618ac9e8b\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Response Sample")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"null\n")))}s.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||i;return n?a.a.createElement(d,o(o({ref:t},p),{},{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);