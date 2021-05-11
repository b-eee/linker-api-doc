(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{182:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,p(p({ref:t},l),{},{components:r})):a.a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(182)),c={},p={unversionedId:"v0/userinfo/UpdateUserEmailRequest",id:"v0/userinfo/UpdateUserEmailRequest",isDocsHomePage:!1,title:"UpdateUserEmailRequest",description:"UpdateUserEmailRequest",source:"@site/docs/v0/userinfo/UpdateUserEmailRequest.md",slug:"/v0/userinfo/UpdateUserEmailRequest",permalink:"/linker-api-doc/docs/v0/userinfo/UpdateUserEmailRequest",version:"current",sidebar:"default",previous:{title:"UpdateUserEmail",permalink:"/linker-api-doc/docs/v0/userinfo/UpdateUserEmail"},next:{title:"UpdateUserInfo",permalink:"/linker-api-doc/docs/v0/userinfo/UpdateUserInfo"}},i=[],l={toc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"updateuseremailrequest"},"UpdateUserEmailRequest"),Object(o.b)("p",null,"\u30e6\u30fc\u30b6\u30fc\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306e\u66f4\u65b0\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u30e6\u30fc\u30b6\u30fc\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\uff08\u30ed\u30b0\u30a4\u30f3ID\uff09\u306e\u5909\u66f4\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u3001\u5909\u66f4\u5148\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u78ba\u8a8d\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"POST"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/users/email\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    email : "address@email.com", // \u5909\u66f4\u5148\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\n    registration_path : "/registration_page" // \uff08\u7701\u7565\u53ef\u80fd\uff09\u30e1\u30fc\u30eb\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u5f8c\u306b\u9077\u79fb\u3059\u308bURL\uff08\u7701\u7565\u3059\u308b\u3068Hexabase\u7ba1\u7406UI\u3078\u9077\u79fb\u3059\u308b\uff09\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/users/email\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "error": null //\u6210\u529f\u306e\u5834\u5408 null\u304c\u8fd4\u308b\u3002\u30a8\u30e9\u30fc\u304c\u3042\u3063\u305f\u5834\u5408\u306e\u307f\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8fd4\u5374\u3055\u308c\u308b\u3002\n}\n')))}s.isMDXComponent=!0}}]);