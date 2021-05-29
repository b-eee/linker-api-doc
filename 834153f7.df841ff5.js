(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(187)),l=["components"],o={id:"README",title:"UserRegistration API",sidebar_label:"\u4f7f\u3044\u65b9"},c={unversionedId:"v0/user-registration/README",id:"v0/user-registration/README",isDocsHomePage:!1,title:"UserRegistration API",description:"\u65b0\u898f\u30e6\u30fc\u30b6\u3092\u767b\u9332\u3057\u3001\u6700\u521d\u306e\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u4f5c\u6210\u3059\u308b",source:"@site/docs/v0/user-registration/README.md",slug:"/v0/user-registration/README",permalink:"/linker-api-doc/docs/v0/user-registration/README",version:"current",sidebar_label:"\u4f7f\u3044\u65b9",sidebar:"default",previous:{title:"Logout",permalink:"/linker-api-doc/docs/v0/login/Logout"},next:{title:"ConfirmRegistration",permalink:"/linker-api-doc/docs/v0/user-registration/ConfirmRegistration"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Pre Requisites",id:"pre-requisites",children:[]},{value:"API",id:"api",children:[]},{value:"Sequence Diagram",id:"sequence-diagram",children:[]}],p={toc:s};function b(e){var t=e.components,o=Object(a.a)(e,l);return Object(i.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u65b0\u898f\u30e6\u30fc\u30b6\u3092\u767b\u9332\u3057\u3001\u6700\u521d\u306e\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u4f5c\u6210\u3059\u308b"),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"\u30b7\u30b9\u30c6\u30e0\u3078\u306f\u3058\u3081\u3066\u306e\u30e6\u30fc\u30b6\u3092\u767b\u9332\u3059\u308b\u305f\u3081\u306e\u30d5\u30ed\u30fc\u3068\u5229\u7528API\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\n\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u306b\u3001SendGrid\u30b5\u30fc\u30d3\u30b9\u306e\u5229\u7528\u304c\u5fc5\u9808\u3067\u3059\u3002"),Object(i.b)("h2",{id:"pre-requisites"},"Pre Requisites"),Object(i.b)("p",null,"Hexabase\u793e\u3078Email\u9001\u4fe1\u7528\u306eSendGrid\u306eAPI_KEY\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8ID\u3092\u9023\u7d61\u3057\u3001email_template_id\u306e\u767a\u884c\u3092\u53d7\u3051\u307e\u3059\u3002\n(Optional) Hexabase\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30e1\u30fc\u30eb\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u5229\u7528\u3059\u308c\u3070email_template_id\u306e\u767a\u884c\u3092\u3057\u306a\u304f\u3066\u3082\u958b\u767a\u3092\u9032\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"No"),Object(i.b)("th",{parentName:"tr",align:"left"},"API Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"API\u540d"),Object(i.b)("th",{parentName:"tr",align:"left"},"Method"),Object(i.b)("th",{parentName:"tr",align:"left"},"URI"),Object(i.b)("th",{parentName:"tr",align:"left"},"\u76ee\u7684"),Object(i.b)("th",{parentName:"tr",align:"left"},"version"),Object(i.b)("th",{parentName:"tr",align:"left"},"\u753b\u9762ID","(","display","_","id",")","\u3078\u306e\u5bfe\u5fdc"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"53"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/linker-api-doc/docs/v0/user-registration/UserRegistration"},"UserRegistration")),Object(i.b)("td",{parentName:"tr",align:"left"},"\u521d\u56de\u30e6\u30fc\u30b6\u30fc\u767b\u9332"),Object(i.b)("td",{parentName:"tr",align:"left"},"POST"),Object(i.b)("td",{parentName:"tr",align:"left"},"/api/v0/users/registration"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u30e6\u30fc\u30b6\u30fc\u306e\u521d\u671f\u767b\u9332\u7528\u30ea\u30af\u30a8\u30b9\u30c8"),Object(i.b)("td",{parentName:"tr",align:"left"},"v0"),Object(i.b)("td",{parentName:"tr",align:"left"},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"55"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/linker-api-doc/docs/v0/user-registration/RegisterUser"},"RegisterUser")),Object(i.b)("td",{parentName:"tr",align:"left"},"\u30e6\u30fc\u30b6\u30fc\u521d\u671f\u767b\u9332"),Object(i.b)("td",{parentName:"tr",align:"left"},"POST"),Object(i.b)("td",{parentName:"tr",align:"left"},"/api/v0/users/registration/confirm"),Object(i.b)("td",{parentName:"tr",align:"left"},"\u30e6\u30fc\u30b6\u30fc\u306e\u521d\u671f\u767b\u9332\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u767b\u9332"),Object(i.b)("td",{parentName:"tr",align:"left"},"v0"),Object(i.b)("td",{parentName:"tr",align:"left"},"-")))),Object(i.b)("h2",{id:"sequence-diagram"},"Sequence Diagram"),Object(i.b)("p",null,Object(i.b)("img",{alt:"User Registration Sequence",src:r(272).default})),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-mermaid"},'sequenceDiagram\n    participant br as Browser\n    participant ml as Mailer\n    participant ap as your WebSite(SPA)\n    participant hx as Hexabase\n    participant sg as SendGrid\n\n    %% register email\n    br->>+ap: access the URL\n    ap->>ap: Enter email and press Register\n    ap->>+hx: UserRegistration [POST /users/registration]\n    Note right of ap: [email, email_template_id, registration_path(redirect url)]\n    ap--\x3e>-br: show "email sent" message\n    hx->>-sg: Send email request\n    Note right of hx: Hexabase will call sendgrid API using template settings\n    \n    %% send mail from sendgrid\n    sg--\x3e>+ml: Send email with url link and confirm id\n    Note right of ml: confirm id\n    ml->>ml: Click the URL link in the mail\n    ml->>+hx: [GET /users/registration/confirm&id=xxxxxxx]\n    \n    %% redirect to "set password"\n    hx--\x3e>-br: Redirect\n    br->>+ap: registration_path(redirect url)\n    ap->>ap: Enter initial passwords\n    ap->>+hx: RegisterUser [POST users/registration/confirm] \n    Note left of hx: confirmation_id, email, password, user_info\n    hx->>hx: Create default workspace and group<br> and add the user in it\n    hx--\x3e>-ap: return result\n\n')))}b.isMDXComponent=!0},187:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(r),u=n,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||i;return r?a.a.createElement(m,o(o({ref:t},s),{},{components:r})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},272:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/user-registration-ea45227272542e17240548e39933d601.png"}}]);