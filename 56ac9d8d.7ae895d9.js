(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(166)),c={},p={unversionedId:"API/v1/users/UserImport",id:"API/v1/users/UserImport",isDocsHomePage:!1,title:"UserImport",description:"UserImport",source:"@site/docs\\API\\v1\\users\\UserImport.md",slug:"/API/v1/users/UserImport",permalink:"/docs/API/v1/users/UserImport",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API/v1/users/UserImport.md",version:"current",sidebar:"someSidebar",previous:{title:"RemoveUser",permalink:"/docs/API/v1/users/RemoveUser"},next:{title:"UserInvite",permalink:"/docs/API/v1/users/UserInvite"}},s=[],i={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"userimport"},"UserImport"),Object(o.b)("p",null,"\u30e6\u30fc\u30b6\u30fc\u3092\u30a4\u30f3\u30dd\u30fc\u30c8"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30b0\u30eb\u30fc\u30d7\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",null,"POST"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request URL Format")),Object(o.b)("p",null,"/api/v0/userimport"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Payload")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Content-Type : application/form-data")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "current_workspace_id":"\u30e6\u30fc\u30b6\u30fc\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u5bfe\u8c61\u306e\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9ID", //\u5fc5\u9808\n  "filename":"\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u76ee\u7684\u306eCSV\u30d5\u30a1\u30a4\u30eb\u540d",\u3000//\u5fc5\u9808 \n  "file":"\u30d0\u30a4\u30ca\u30ea\u30fc\u578bCSV\u30d5\u30a1\u30a4\u30eb\u3000, CSV \u30d5\u30a1\u30a4\u30eb\u306e\u30d8\u30c3\u30c0\u30fc\u306fEmail, UserName,    Password,    GroupDisplayIDs,    RoleDisplayIDs,    IsDelete\n" //\u5fc5\u9808\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Request Sample")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"POST https://api.xxx.com/api/v0/userimport\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response Sample")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{"error":null}\n')))}l.isMDXComponent=!0},166:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,O=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(O,p(p({ref:t},i),{},{components:r})):a.a.createElement(O,p({ref:t},i))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);