(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{166:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),m=n,d=l["".concat(o,".").concat(m)]||l[m]||b[m]||i;return t?a.a.createElement(d,s(s({ref:r},u),{},{components:t})):a.a.createElement(d,s({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),i=(t(0),t(166)),o={},s={unversionedId:"API/v1/user-registration/RegisterUser",id:"API/v1/user-registration/RegisterUser",isDocsHomePage:!1,title:"RegisterUser",description:"RegisterUser",source:"@site/docs\\API\\v1\\user-registration\\RegisterUser.md",slug:"/API/v1/user-registration/RegisterUser",permalink:"/docs/API/v1/user-registration/RegisterUser",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API/v1/user-registration/RegisterUser.md",version:"current",sidebar:"someSidebar",previous:{title:"ConfirmRegistration",permalink:"/docs/API/v1/user-registration/ConfirmRegistration"},next:{title:"UserRegistration",permalink:"/docs/API/v1/user-registration/UserRegistration"}},c=[{value:"RegisterUser",id:"registeruser",children:[]}],u={toc:c};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"registeruser"},"RegisterUser"),Object(i.b)("p",null,"\u30e6\u30fc\u30b6\u30fc\u306e\u521d\u671f\u767b\u9332"),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"UserConfirm\u5f8c\u3001Hexabase\u3092\u521d\u3081\u3066\u5229\u7528\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\uff08\u30e6\u30fc\u30b6\u540d\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u7b49\uff09\u3092\u767b\u9332\u3059\u308b\u3002additional_info\u306b\u306f\u305d\u306e\u30e6\u30fc\u30b6\u30fc\u56fa\u6709\u306e\u60c5\u5831\u3092Map\u5f62\u5f0f\u3067\u767b\u9332\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),Object(i.b)("h5",{id:"method"},"Method"),Object(i.b)("p",null,"POST"),Object(i.b)("h5",{id:"request-url-format"},"Request URL Format"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"/api/v0/users/registration/confirm\n")),Object(i.b)("h5",{id:"payload"},"Payload"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "confirmation_id":"\u78ba\u8a8d\u7528\u306eID", //\u5fc5\u9808\n  "email":"\u767b\u9332\u3055\u308c\u308bemail",\u3000//\u5fc5\u9808\n  "username":"\u767b\u9332\u3055\u308c\u308b\u30e6\u30fc\u30b6\u30fc\u540d",\n  "password": "\u8a2d\u5b9a\u3059\u308b\u30d1\u30b9\u30ef\u30fc\u30c9",\u3000// \u5fc5\u9808\n\u3000"workspace":"\u4f5c\u6210\u3059\u308b\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u540d", \n  "additional_info":{\n      "field_name1": "value",  // field_name, value \u5171\u306b\u4e8b\u7531\u306b\u6307\u5b9a\u53ef\u80fd\n      "field_name2": "value"\n  }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request URL Sample")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"POST https://api.xxx.com/api/v0/users/registration/confirm\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Response Sample")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"")))}p.isMDXComponent=!0}}]);