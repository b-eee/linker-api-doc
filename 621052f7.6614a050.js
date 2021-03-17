(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(177)),c={},s={unversionedId:"v0/userinfo/SetNewPassword",id:"v0/userinfo/SetNewPassword",isDocsHomePage:!1,title:"SetNewPassword",description:"SetNewPassword",source:"@site/docs\\v0\\userinfo\\SetNewPassword.md",slug:"/v0/userinfo/SetNewPassword",permalink:"/linker-api-doc/docs/v0/userinfo/SetNewPassword",version:"current",sidebar:"default",previous:{title:"ResetPassword",permalink:"/linker-api-doc/docs/v0/userinfo/ResetPassword"},next:{title:"SetPassword",permalink:"/linker-api-doc/docs/v0/userinfo/SetPassword"}},p=[],i={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"setnewpassword"},"SetNewPassword"),Object(o.b)("p",null,"\u30d1\u30b9\u30ef\u30fc\u30c9\u518d\u767b\u9332"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u306a\u3044\u72b6\u614b\u3067\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5909\u66f4\u3059\u308b\u3002\u524d\u63d0\u6761\u4ef6\u3068\u3057\u3066\u5909\u66f4\u7528\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u521d\u671f\u5316\u7528\u306eID\u304c\u5fc5\u8981"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"PUT"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/users/password/forgot\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "new_password":"\u5fc5\u9808\u3000\u65b0\u898f\u4f5c\u6210\u30d1\u30b9\u30ef\u30fc\u30c9\u3000\u4f8b\uff1atest",\n  "confirm_password":"\u5fc5\u9808\u3000\u78ba\u8a8d\u7528\u30d1\u30b9\u30ef\u30fc\u30c9 \u4f8b\uff1atest \u3053\u306e\u5024\u306f\u65b0\u898f\u4f5c\u6210\u306e\u5024\u3068\u540c\u3058\u3067\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044",\n  "id":"\u5fc5\u9808\u3000\u30d1\u30b9\u30ef\u30fc\u30c9\u521d\u671f\u5316\u958b\u59cb\u306eapi\u9001\u4fe1\u5f8c\u306bemail\u306e\u30ea\u30f3\u30af\u5185\u90e8\u306b\u57cb\u3081\u8fbc\u307e\u308c\u305f\u60c5\u5831\u3092\u3053\u3053\u306b\u5165\u308c\u308b"\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"PUT https://api.xxx.com/api/v0/users/password/forgot\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"\u306a\u3057\n")))}l.isMDXComponent=!0},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,s(s({ref:t},i),{},{components:r})):a.a.createElement(f,s({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);