(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{131:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return i}));var n=t(3),a=t(7),o=(t(0),t(168)),p={},c={unversionedId:"v1/users/UserImport",id:"v1/users/UserImport",isDocsHomePage:!1,title:"UserImport",description:"UserImport",source:"@site/docs/v1/users/UserImport.md",slug:"/v1/users/UserImport",permalink:"/linker-api-doc/docs/v1/users/UserImport",version:"current",sidebar:"default",previous:{title:"RemoveUser",permalink:"/linker-api-doc/docs/v1/users/RemoveUser"},next:{title:"UserInvite",permalink:"/linker-api-doc/docs/v1/users/UserInvite"}},l=[],s={toc:l};function i(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"userimport"},"UserImport"),Object(o.b)("p",null,"\u30e6\u30fc\u30b6\u30fc\u3092\u30a4\u30f3\u30dd\u30fc\u30c8"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30b0\u30eb\u30fc\u30d7\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"POST"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("p",null,"/api/v0/userimport"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Content-Type : application/form-data")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "current_workspace_id":"\u30e6\u30fc\u30b6\u30fc\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u5bfe\u8c61\u306e\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9ID", //\u5fc5\u9808\n  "filename":"\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u76ee\u7684\u306eCSV\u30d5\u30a1\u30a4\u30eb\u540d",\u3000//\u5fc5\u9808 \n  "file":"\u30d0\u30a4\u30ca\u30ea\u30fc\u578bCSV\u30d5\u30a1\u30a4\u30eb\u3000, CSV \u30d5\u30a1\u30a4\u30eb\u306e\u30d8\u30c3\u30c0\u30fc\u306fEmail, UserName,    Password,    GroupDisplayIDs,    RoleDisplayIDs,    IsDelete\n" //\u5fc5\u9808\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"POST https://api.xxx.com/api/v0/userimport\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{"error":null}\n')))}i.isMDXComponent=!0},168:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return O}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),i=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=i(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(t),m=n,O=u["".concat(p,".").concat(m)]||u[m]||b[m]||o;return t?a.a.createElement(O,c(c({ref:r},s),{},{components:t})):a.a.createElement(O,c({ref:r},s))}));function O(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var s=2;s<o;s++)p[s]=t[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);