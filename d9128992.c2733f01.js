(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{156:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(173)),p={},c={unversionedId:"API/v1/roles/UpdateGroupRoles",id:"API/v1/roles/UpdateGroupRoles",isDocsHomePage:!1,title:"UpdateGroupRoles",description:"UpdateGroupRoles",source:"@site/docs/API/v1/roles/UpdateGroupRoles.md",slug:"/API/v1/roles/UpdateGroupRoles",permalink:"/linker-api-doc/docs/API/v1/roles/UpdateGroupRoles",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API/v1/roles/UpdateGroupRoles.md",version:"current",sidebar:"default",previous:{title:"RemoveRoleFromUser",permalink:"/linker-api-doc/docs/API/v1/roles/RemoveRoleFromUser"},next:{title:"ConfirmRegistration",permalink:"/linker-api-doc/docs/API/v1/user-registration/ConfirmRegistration"}},l=[],i={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"updategrouproles"},"UpdateGroupRoles"),Object(a.b)("p",null,"\u30b0\u30eb\u30fc\u30d7\u30ed\u30fc\u30eb\u66f4\u65b0"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"\u30b0\u30eb\u30fc\u30d7\u306b\u3072\u3082\u4ed8\u304f\u30ed\u30fc\u30eb\u3092\u3059\u3079\u3066\u524a\u9664\u3057\u3001\u65b0\u898f\u4ed8\u4e0e\uff08\u6d17\u3044\u5909\u3048\uff09\u3059\u308b"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Method")),Object(a.b)("p",null,"POST"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Request URL Format")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"/api/v0/grouproles/:group-id\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Payload")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Content-Type : application/json")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "group_roles":\n  [\n    {\n      "app_id":"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff29\uff24-\uff11",\n      "role_id":"\u30ed\u30fc\u30eb\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4ID-1"\n    },\n    {\n      "app_id":"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30c7\u30a4\u30b9\u30d7\u30ec\u30a4\uff29\uff24-\uff12",\n      "role_id":"\u30ed\u30fc\u30eb\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4ID-2"\n    }\n  ]\n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Request URL Sample")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"POST https://api.xxx.com/api/v0/grouproles/:group-id\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Response Sample")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"{}   // empty object\n")))}u.isMDXComponent=!0},173:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(p,".").concat(d)]||s[d]||b[d]||a;return r?o.a.createElement(m,c(c({ref:t},i),{},{components:r})):o.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<a;i++)p[i]=r[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);