(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{166:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,d=l["".concat(c,".").concat(f)]||l[f]||b[f]||o;return n?a.a.createElement(d,p(p({ref:t},s),{},{components:n})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(166)),c={},p={unversionedId:"API/v1/userinfo/UpdateUserInfo",id:"API/v1/userinfo/UpdateUserInfo",isDocsHomePage:!1,title:"UpdateUserInfo",description:"UpdateUserInfo",source:"@site/docs\\API\\v1\\userinfo\\UpdateUserInfo.md",slug:"/API/v1/userinfo/UpdateUserInfo",permalink:"/linker-api-doc/docs/API/v1/userinfo/UpdateUserInfo",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API/v1/userinfo/UpdateUserInfo.md",version:"current",sidebar:"someSidebar",previous:{title:"SetPassword",permalink:"/linker-api-doc/docs/API/v1/userinfo/SetPassword"},next:{title:"ValidatePassword",permalink:"/linker-api-doc/docs/API/v1/userinfo/ValidatePassword"}},i=[],s={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"updateuserinfo"},"UpdateUserInfo"),Object(o.b)("p",null,"\u30e6\u30fc\u30b6\u30fc\u540d\u3001\u60c5\u5831\u306e\u66f4\u65b0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u30e6\u30fc\u30b6\u30fc\u306e\u540d\u524d\u3001\u753b\u50cf\u3092\u66f4\u65b0\u3059\u308b"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"PUT"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"/api/v0/userinfo\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "email":"\u30e6\u30fc\u30b6\u306eemail",\u3000//\u5fc5\u9808\n  "username":"\u30e6\u30fc\u30b6\u30fc\u540d",\u3000\n  "user_id":"\u30e6\u30fc\u30b6\u30fcID",\u3000//\u5fc5\u9808\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Sample")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"PUT https://api.xxx.com/api/v0/userinfo\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),'{"error": null //\u30a8\u30e9\u30fc\u306e\u6709\u7121}\n')))}u.isMDXComponent=!0}}]);