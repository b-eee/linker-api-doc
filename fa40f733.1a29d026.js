(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{163:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(7),a=(t(0),t(170)),c={},s={unversionedId:"v0/userinfo/SetPassword",id:"v0/userinfo/SetPassword",isDocsHomePage:!1,title:"SetPassword",description:"SetPassword",source:"@site/docs\\v0\\userinfo\\SetPassword.md",slug:"/v0/userinfo/SetPassword",permalink:"/linker-api-doc/docs/v0/userinfo/SetPassword",version:"current",sidebar:"default",previous:{title:"SetNewPassword",permalink:"/linker-api-doc/docs/v0/userinfo/SetNewPassword"},next:{title:"UpdateUserEmail",permalink:"/linker-api-doc/docs/v0/userinfo/UpdateUserEmail"}},i=[{value:"SetPassword",id:"setpassword",children:[]}],p={toc:i};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"setpassword"},"SetPassword"),Object(a.b)("p",null,"\u30ed\u30b0\u30a4\u30f3\u5f8c\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u5909\u66f4"),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5909\u66f4\u3059\u308b"),Object(a.b)("h5",{id:"method"},"Method"),Object(a.b)("p",null,"PUT"),Object(a.b)("h5",{id:"request-url-format"},"Request URL Format"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'\n/api/v0/users/password\n\n```text\n##### Payload\n```JSON\n{\n  "confirm_password":"\u5fc5\u9808\u3000\u65b0\u3057\u3044\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u78ba\u8a8d //\u5165\u529b\u5185\u5bb9\u306fnew_pasword\u3068\u540c\u3058\u3067\u6709\u308b\u5fc5\u8981\u304c\u6709\u308b",\n  "new_password":"\u5fc5\u9808\u3000\u65b0\u3057\u3044\u30d1\u30b9\u30ef\u30fc\u30c9",\n  "old_password":"\u5fc5\u9808\u3000\u4eca\u307e\u3067\u4f7f\u7528\u3057\u3066\u3044\u305f\u30d1\u30b9\u30ef\u30fc\u30c9"\n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Request URL Sample")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"PUT https://api.xxx.com/api/v0/users/password\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response Sample")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},'{\n  "error": null //\u30a8\u30e9\u30fc\u306e\u6709\u7121\n}\n')))}u.isMDXComponent=!0},170:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(t),b=n,f=l["".concat(c,".").concat(b)]||l[b]||d[b]||a;return t?o.a.createElement(f,s(s({ref:r},p),{},{components:t})):o.a.createElement(f,s({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);