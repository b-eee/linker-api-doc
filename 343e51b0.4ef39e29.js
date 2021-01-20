(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{173:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(t),b=r,f=s["".concat(o,".").concat(b)]||s[b]||d[b]||c;return t?a.a.createElement(f,p(p({ref:n},u),{},{components:t})):a.a.createElement(f,p({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=b;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var u=2;u<c;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),c=(t(0),t(173)),o={},p={unversionedId:"API/v1/groups/GetGroupTree",id:"API/v1/groups/GetGroupTree",isDocsHomePage:!1,title:"GetGroupTree",description:"GetGroupTree",source:"@site/docs/API/v1/groups/GetGroupTree.md",slug:"/API/v1/groups/GetGroupTree",permalink:"/linker-api-doc/docs/API/v1/groups/GetGroupTree",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/API/v1/groups/GetGroupTree.md",version:"current",sidebar:"default",previous:{title:"GetGroup",permalink:"/linker-api-doc/docs/API/v1/groups/GetGroup"},next:{title:"UpdateGroup",permalink:"/linker-api-doc/docs/API/v1/groups/UpdateGroup"}},i=[],u={toc:i};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"getgrouptree"},"GetGroupTree"),Object(c.b)("p",null,"\u30b0\u30eb\u30fc\u30d7\u30c4\u30ea\u30fc\u60c5\u5831\u53d6\u5f97"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u306e\u30b0\u30eb\u30fc\u30d7\u3092\u30c4\u30ea\u30fc\u5f62\u5f0f\u306eJSON\u306b\u3066\u53d6\u5f97\u3057\u307e\u3059"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")),Object(c.b)("p",null,"GET"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Format")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"/api/v0/grouptree\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Params")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"\u7279\u306b\u306a\u3057\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Request URL Sample")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"GET https://api.xxx.com/api/v0/grouptree\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Response Sample")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "error": null,\n    "result": [\n        {\n            "childGroups": [\n                {\n                    "childGroups": [\n                        {\n                            "childGroups": [],\n                            "display_id": "addfaa",\n                            "id": "5972e630cce5fe6c280cd242",\n                            "name": "test",\n                            "show_child": true\n                        }\n                    ],\n                    "display_id": "ssss",\n                    "id": "5972ebebcce5fe6c280cd246",\n                    "name": "sss",\n                    "show_child": true\n                },\n                {\n                    "childGroups": [\n                        {\n                            "childGroups": [\n                                {\n                                    "childGroups": [],\n                                    "display_id": "etsetse",\n                                    "id": "5972d10dcce5fe6c280cd240",\n                                    "name": "test",\n                                    "show_child": true\n                                }\n                            ],\n                            "display_id": "aaa",\n                            "id": "593b9674fbfcba27707e2345",\n                            "name": "aaaa",\n                            "show_child": true\n                        }\n                    ],\n                    "display_id": "TEST_G",\n                    "id": "593b9660fbfcba27707e2343",\n                    "name": "\u30c6\u30b9\u30c8\u7528\u30b0\u30eb\u30fc\u30d72",\n                    "show_child": true\n                },\n                {\n                    "childGroups": [\n                        {\n                            "childGroups": [\n                                {\n                                    "childGroups": [],\n                                    "display_id": "TEST333",\n                                    "id": "593b9688fbfcba27707e2347",\n                                    "name": "test3",\n                                    "show_child": true\n                                }\n                            ],\n                            "display_id": "123",\n                            "id": "593a7ee5cce5fe9fc0192326",\n                            "name": "\u4e0b\u306e\u968e\u5c64",\n                            "show_child": true\n                        }\n                    ],\n                    "display_id": "583278f6fb90a122e2646527",\n                    "id": "583278f6fb90a122e2646527",\n                    "name": "NEW",\n                    "show_child": true\n                }\n            ],\n            "display_id": "582b26d8fb90a15e0c24ad81",\n            "id": "582b26d8fb90a15e0c24ad81",\n            "name": "WORKSPACE.DEFAULT_GROUP_NAME",\n            "show_child": true\n        }\n    ]\n}\n')))}l.isMDXComponent=!0}}]);