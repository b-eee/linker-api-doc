(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{173:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,s(s({ref:t},i),{},{components:r})):a.a.createElement(f,s({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(173)),c={},s={unversionedId:"API/v1/userinfo/ResetPassword",id:"API/v1/userinfo/ResetPassword",isDocsHomePage:!1,title:"ResetPassword",description:"ResetPassword",source:"@site/docs/API/v1/userinfo/ResetPassword.md",slug:"/API/v1/userinfo/ResetPassword",permalink:"/linker-api-doc/docs/API/v1/userinfo/ResetPassword",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API/v1/userinfo/ResetPassword.md",version:"current",sidebar:"default",previous:{title:"GetUserInfo",permalink:"/linker-api-doc/docs/API/v1/userinfo/GetUserInfo"},next:{title:"SetNewPassword",permalink:"/linker-api-doc/docs/API/v1/userinfo/SetNewPassword"}},p=[],i={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"resetpassword"},"ResetPassword"),Object(o.b)("p",null,"\u30d1\u30b9\u30ef\u30fc\u30c9\u521d\u671f\u5316\u30ea\u30af\u30a8\u30b9\u30c8"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u306a\u3044\u72b6\u614b\u3067\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u521d\u671f\u5316\u51e6\u7406\u3092\u4f9d\u983c\u3059\u308b\u3002\u8a72\u5f53\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u5b58\u5728\u3057\u305f\u5834\u5408\u306b\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4URL\u3092\u9001\u4fe1\u3059\u308b\u3002"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"POST"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"/api/v0/users/password/forgot\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "email":"\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u30ea\u30bb\u30c3\u30c8\u3057\u305f\u3044\u30e6\u30fc\u30b6\u30fc\u306eemail",\u3000//\u5fc5\u9808\n  "host":"\u4f8b\uff1ahttps://stg.xxxxxx.com" //\u5fc5\u9808\n\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Sample")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"POST https://api.xxx.com/api/v0/password/forgot\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "valid_email": true //\u30d1\u30b9\u30ef\u30fc\u30c9\u521d\u671f\u5316\u3092\u3057\u305f\u3044email\u306e\u6709\u7121\n}\n')))}l.isMDXComponent=!0}}]);