(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(166)),c={},p={unversionedId:"API/v1/roles/AddGroupRoles",id:"API/v1/roles/AddGroupRoles",isDocsHomePage:!1,title:"AddGroupRoles",description:"AddGroupRoles",source:"@site/docs\\API\\v1\\roles\\AddGroupRoles.md",slug:"/API/v1/roles/AddGroupRoles",permalink:"/docs/API/v1/roles/AddGroupRoles",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API/v1/roles/AddGroupRoles.md",version:"current",sidebar:"someSidebar",previous:{title:"GetReportSearchConditions",permalink:"/docs/API/v1/reports/GetReportSearchConditions"},next:{title:"AddRoleToUser",permalink:"/docs/API/v1/roles/AddRoleToUser"}},l=[],u={toc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"addgrouproles"},"AddGroupRoles"),Object(a.b)("p",null,"\u30b0\u30eb\u30fc\u30d7\u30ed\u30fc\u30eb\u8ffd\u52a0"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"\u30b0\u30eb\u30fc\u30d7\u306b\u30ed\u30fc\u30eb\u3092\u8ffd\u52a0\u3059\u308b\uff08\u65e2\u5b58\u30ed\u30fc\u30eb\u306f\u524a\u9664\u3055\u308c\u306a\u3044\uff09"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Method")),Object(a.b)("p",null,"PUT"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Request URL Format")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"/api/v0/grouproles/:group-id\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"URL Params")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"group-id :  \u30b0\u30eb\u30fc\u30d7ID\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Content-Type : application/json")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "group_roles":\n  [\n    {\n      "app_id":"\u8ffd\u52a0\u5bfe\u8c61\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff29\uff24-\uff11",\n      "role_id":"\u8ffd\u52a0\u5bfe\u8c61\u306e\u30ed\u30fc\u30eb\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4ID-1"\n    },\n    {\n      "app_id":"\u8ffd\u52a0\u5bfe\u8c61\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30c7\u30a4\u30b9\u30d7\u30ec\u30a4\uff29\uff24-\uff12",\n      "role_id":"\u8ffd\u52a0\u5bfe\u8c61\u306e\u30ed\u30fc\u30eb\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4ID-2"\n    }\n  ]\n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Request URL Sample")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"PUT https://api.xxx.com/api/v0/grouproles/:group-id\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response Sample")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"{} //\u7a7a\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u8fd4\u3063\u3066\u304f\u308b\n")))}s.isMDXComponent=!0},166:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),i=s(r),d=n,m=i["".concat(c,".").concat(d)]||i[d]||b[d]||a;return r?o.a.createElement(m,p(p({ref:t},u),{},{components:r})):o.a.createElement(m,p({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);