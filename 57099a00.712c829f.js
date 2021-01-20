(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),x=r(7),o=(r(0),r(173)),a={},i={unversionedId:"API/v1/user-registration/ConfirmRegistration",id:"API/v1/user-registration/ConfirmRegistration",isDocsHomePage:!1,title:"ConfirmRegistration",description:"ConfirmRegistration",source:"@site/docs/API/v1/user-registration/ConfirmRegistration.md",slug:"/API/v1/user-registration/ConfirmRegistration",permalink:"/linker-api-doc/docs/API/v1/user-registration/ConfirmRegistration",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API/v1/user-registration/ConfirmRegistration.md",version:"current",sidebar:"default",previous:{title:"UpdateGroupRoles",permalink:"/linker-api-doc/docs/API/v1/roles/UpdateGroupRoles"},next:{title:"RegisterUser",permalink:"/linker-api-doc/docs/API/v1/user-registration/RegisterUser"}},c=[],s={toc:c};function p(e){var t=e.components,r=Object(x.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"confirmregistration"},"ConfirmRegistration"),Object(o.b)("p",null,"\u30e6\u30fc\u30b6\u30fc\u306e\u521d\u671f\u767b\u9332\u306e\u78ba\u8a8d"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u30e6\u30fc\u30b6\u30fc\u306e\u521d\u671f\u767b\u9332\u7528\u306e\u30e1\u30fc\u30eb\u306b\u6dfb\u4ed8\u3055\u308c\u305fURL\u304b\u3089\u3001\u30e6\u30fc\u30b6\u30fc\u3092\u78ba\u8a8d\u3057\u3001\u78ba\u8a8d\u60c5\u5831\u3092\u78ba\u8a8d\u6e08\u307f\u306b\u3059\u308b"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"GET"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"/api/v0/users/registration/confirm\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Query Params")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"id : xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //\u5fc5\u9808 \u30e6\u30fc\u30b6\u30fc\u521d\u671f\u767b\u9332\u30b7\u30fc\u30b1\u30f3\u30b9\u306econfirmation ID\n")),Object(o.b)("h5",{id:"request-url-sample"},"Request URL Sample"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"GET https://api.xxx.com/api/v0/users/registration/confirm?id=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")),Object(o.b)("h5",{id:"response-sample"},"Response Sample"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{ "user": {\n    "confirmation\\_id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", //\u4e0a\u8a18\u306e\u78ba\u8a8dID\n    "confirmed": bool, //true =\u78ba\u8a8d\u6e08,false=\u672a\u78ba\u8a8d\n    "email": "hogehoge@gmail.com", //\u521d\u671f\u767b\u9332\u3055\u308c\u305femail\n    "id": "5e8ffd39d4b3e00006344d1e",//\u30b7\u30b9\u30c6\u30e0\u5185\u90e8\u306euserID\n    "isElapsed": bool,      //true =\u4f7f\u7528\u671f\u9650\u5207\u308c, false=\u4f7f\u7528\u53ef\u80fd\n    "username": "\u767b\u9332\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u540d"\n}}\n')))}p.isMDXComponent=!0},173:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),x=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,x=function(e,t){if(null==e)return{};var r,n,x={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(x[r]=e[r]);return x}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(x[r]=e[r])}return x}var s=x.a.createContext({}),p=function(e){var t=x.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return x.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return x.a.createElement(x.a.Fragment,{},t)}},b=x.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(a,".").concat(b)]||u[b]||l[b]||o;return r?x.a.createElement(m,i(i({ref:t},s),{},{components:r})):x.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return x.a.createElement.apply(null,a)}return x.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);