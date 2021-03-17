(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(177)),i={},c={unversionedId:"v0/item-files/UploadFile",id:"v0/item-files/UploadFile",isDocsHomePage:!1,title:"UploadFile",description:"UploadFile",source:"@site/docs\\v0\\item-files\\UploadFile.md",slug:"/v0/item-files/UploadFile",permalink:"/linker-api-doc/docs/v0/item-files/UploadFile",version:"current",sidebar:"default",previous:{title:"GetFile",permalink:"/linker-api-doc/docs/v0/item-files/GetFile"},next:{title:"DeleteItemComment",permalink:"/linker-api-doc/docs/v0/item-histories/DeleteItemComment"}},o=[],p={toc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h4",{id:"uploadfile"},"UploadFile"),Object(l.b)("p",null,"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u30d5\u30a3\u30fc\u30eb\u30c9\u306bFile\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Description")),Object(l.b)("p",null,"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306fStorage\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u304c\u3001Item\u3078\u306f\u767b\u9332\u3055\u308c\u307e\u305b\u3093\u3002"),Object(l.b)("li",{parentName:"ul"},"\u8a72\u5f53Item\u3078\u767b\u9332\u3059\u308b\u305f\u3081\u306b\u306f\u3001Response\u306b\u3075\u304f\u307e\u308c\u308b",Object(l.b)("inlineCode",{parentName:"li"},"file_id"),"\u3092\u4f7f\u3063\u3066\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u5b9f\u884cAPI\uff08",Object(l.b)("a",{parentName:"li",href:"api-document_jp.md#CreateItemWithItemID"},"CreateItemWithItemID"),"\u3084",Object(l.b)("a",{parentName:"li",href:"api-document_jp.md#ExecuteAction"},"ExecuteAction"),"\u306a\u3069\uff09\u3092call\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Method")),Object(l.b)("p",null,"POST"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Request URL Format")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/items/:item-id/fields/:field-id/attachments\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"URL Params")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"item-id          : \u30a2\u30a4\u30c6\u30e0ID\nfield-id         : \u30d5\u30a3\u30fc\u30eb\u30c9ID\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Content-Type : multipart/form-data")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"application_id   : \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\ndatastore_id     : \u30c7\u30fc\u30bf\u30b9\u30c8\u30a2ID\nfilename         : \u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u540d\nfile             : \u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Request URL Sample")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/items/59ad2d8a0e247927638e761a/fields/58cc9253fbfcba88307142d1/attachments\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"CSV\u30d5\u30a1\u30a4\u30eb\u540d:./testcsv/importapi/test.csv"),Object(l.b)("li",{parentName:"ul"},"CSV\u30d5\u30a1\u30a4\u30eb\u30a4\u30e1\u30fc\u30b8:")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Response Sample")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "file_id": "59af720c0e247958c7011a88"\n}\n')))}b.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,d=u["".concat(i,".").concat(s)]||u[s]||m[s]||l;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);