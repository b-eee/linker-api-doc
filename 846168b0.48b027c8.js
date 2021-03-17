(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{119:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return i}));var n=r(3),o=r(7),a=(r(0),r(170)),c={},l={unversionedId:"v0/roles/AddRoleToUser",id:"v0/roles/AddRoleToUser",isDocsHomePage:!1,title:"AddRoleToUser",description:"AddRoleToUser",source:"@site/docs\\v0\\roles\\AddRoleToUser.md",slug:"/v0/roles/AddRoleToUser",permalink:"/linker-api-doc/docs/v0/roles/AddRoleToUser",version:"current",sidebar:"default",previous:{title:"AddGroupRoles",permalink:"/linker-api-doc/docs/v0/roles/AddGroupRoles"},next:{title:"RemoveRoleFromUser",permalink:"/linker-api-doc/docs/v0/roles/RemoveRoleFromUser"}},p=[],s={toc:p};function i(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"addroletouser"},"AddRoleToUser"),Object(a.b)("p",null,"\u30e6\u30fc\u30b6\u30fc\u3078\u30ed\u30fc\u30eb\u4ed8\u4e0e"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"\u30e6\u30fc\u30b6\u30fc\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ed\u30fc\u30eb\u3092\u4ed8\u4e0e\u3059\u308b"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Method")),Object(a.b)("p",null,"POST"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Request URL Format")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"/api/v0/applications/:app-id/userroles\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"URL Params")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"app-id: \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u8868\u793aID\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Payload")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "user_id": "\u30ed\u30fc\u30eb\u3092\u4ed8\u52a0\u3057\u305f\u3044\u5bfe\u8c61\u306e\u30e6\u30fc\u30b6\u30fcID",\n    "role_id": "\u30ed\u30fc\u30eb\u8868\u793aID" \n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Request URL Sample")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/applications/:app-id/userroles\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response Sample")),Object(a.b)("p",null,"Status 200"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},'{"error": null //\u30a8\u30e9\u30fc\u306e\u6709\u7121}\n')),Object(a.b)("p",null,"Status 403"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},'{\n    "code": 999,\n    "message": "No privileges to the Application"//\u30e6\u30fc\u30b6\u30fc\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u6a29\u9650\u3092\u8ffd\u52a0\u3059\u308b\u6a29\u9650\u304c\u7121\u3044\n}\n')))}i.isMDXComponent=!0},170:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),i=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(m,l(l({ref:t},s),{},{components:r})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);