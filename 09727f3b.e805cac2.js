(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{170:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,d=m["".concat(i,".").concat(u)]||m[u]||b[u]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(170)),i={},c={unversionedId:"v0/item-histories/PostItemComment",id:"v0/item-histories/PostItemComment",isDocsHomePage:!1,title:"PostItemComment",description:"PostItemComment",source:"@site/docs/v0/item-histories/PostItemComment.md",slug:"/v0/item-histories/PostItemComment",permalink:"/linker-api-doc/docs/v0/item-histories/PostItemComment",version:"current",sidebar:"default",previous:{title:"GetItemHistoriesOld",permalink:"/linker-api-doc/docs/v0/item-histories/GetItemHistoriesOld"},next:{title:"UpdateItemComment",permalink:"/linker-api-doc/docs/v0/item-histories/UpdateItemComment"}},p=[],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"postitemcomment"},"PostItemComment"),Object(o.b)("p",null,"\u30b3\u30e1\u30f3\u30c8\u767b\u9332"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u30a2\u30a4\u30c6\u30e0\u306b\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3057\u307e\u3059\u3002\u30b3\u30e1\u30f3\u30c8\u306f\u30a2\u30a4\u30c6\u30e0\u306e\u5c65\u6b74\u3078\u6295\u7a3f\u3055\u308c\u3001",Object(o.b)("a",{parentName:"li",href:"GetItemHistories"},"GetItemHistories"),"\u3067\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),Object(o.b)("li",{parentName:"ul"},"\u6295\u7a3f\u306f\u8a2d\u5b9a\u306b\u5f93\u3063\u3066\u4ed6\u306e\u30e6\u30fc\u30b6\u306b\u901a\u77e5\u3055\u308c\u3001\u4ed6\u30e1\u30f3\u30d0\u30fc\u306e\u672a\u8aad\u5c65\u6b74\u3068\u306a\u308a\u307e\u3059\u3002")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"POST"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/datastores/:datastore-id/items/histories/:item-id\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL Params")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"  app-id: \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\uff08\u753b\u9762ID\u3001\u307e\u305f\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u5185\u90e8ID p_id\uff09\n  datastore-id: \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9ID\uff08\u753b\u9762ID\u3001\u307e\u305f\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u5185\u90e8ID d_id\uff09\n  item-id: \u30b3\u30e1\u30f3\u30c8\u767b\u9332\u3059\u308b\u5bfe\u8c61Item\u306eitem_id\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},'{\n  "comment" : \u767b\u9332\u3057\u305f\u3044\u30b3\u30e1\u30f3\u30c8\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/applications/AppID/datastores/DS-ID/items/histories/59ad2d8a0e247927638e761a\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},'{\n    "comment" : "text..."\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"null\n")))}l.isMDXComponent=!0}}]);