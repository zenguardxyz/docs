"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[875],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),c=n,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1603:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:4},o="ERC-7579",i={unversionedId:"getting-started/build-modules/erc-7579",id:"getting-started/build-modules/erc-7579",title:"ERC-7579",description:"ERC-7579 outlines the minimally required interfaces and behavior for modular smart accounts and modules to ensure interoperability across implementations.",source:"@site/docs/getting-started/build-modules/erc-7579.md",sourceDirName:"getting-started/build-modules",slug:"/getting-started/build-modules/erc-7579",permalink:"/getting-started/build-modules/erc-7579",draft:!1,editUrl:"https://github.com/zenguardxyz/docs/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/build-modules/erc-7579.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Interoperable standards",permalink:"/getting-started/build-modules/interoperable-spec"},next:{title:"ERC-6900",permalink:"/getting-started/build-modules/erc-6900"}},s={},u=[{value:"Compatible Smart Accounts",id:"compatible-smart-accounts",level:3},{value:"Safe Account Support",id:"safe-account-support",level:3},{value:"How to make a Safe comaptible with 7579 standard",id:"how-to-make-a-safe-comaptible-with-7579-standard",level:3},{value:"Getting started:",id:"getting-started",level:3},{value:"Usage",id:"usage",level:2},{value:"Additional Resources",id:"additional-resources",level:3}],p={toc:u},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"erc-7579"},"ERC-7579"),(0,n.kt)("p",null,"ERC-7579 outlines the minimally required interfaces and behavior for modular smart accounts and modules to ensure interoperability across implementations."),(0,n.kt)("h3",{id:"compatible-smart-accounts"},"Compatible Smart Accounts"),(0,n.kt)("p",null,"ERC-7579 compatible smart account implementations"),(0,n.kt)("p",null,"There are various implementations for ERC-6900 accounts including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zerodevapp/kernel"},"ZeroDev Kernel"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bcnmy/scw-contracts"},"Biconomy Smart Account"))),(0,n.kt)("h3",{id:"safe-account-support"},"Safe Account Support"),(0,n.kt)("p",null,"ERC-7579 based modules are natively not supported on Safe smart accounts. They can be easily supported via adapters."),(0,n.kt)("p",null,"Safe along with Rhinestone team has developed a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rhinestonewtf/safe7579"},"7579 adapter")," that will make Safe compatible with 7579 based modules."),(0,n.kt)("h3",{id:"how-to-make-a-safe-comaptible-with-7579-standard"},"How to make a Safe comaptible with 7579 standard"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An existing Safe can be 7579 compatible just by adding the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rhinestonewtf/safe7579"},"7579 adapter")," as a Safe Module and Safe Fallback handler.")),(0,n.kt)("h3",{id:"getting-started"},"Getting started:"),(0,n.kt)("p",null,"The best way to get started with the module development is with the help of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rhinestonewtf/module-template"},"module-template")," by Rhinestone."),(0,n.kt)("p",null,"Here are a few links to get started with building and testing."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rhinestonewtf/modulekit/tree/main"},"With Rhinestone Module Kit")," - ",(0,n.kt)("em",{parentName:"li"},"Repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rhinestonewtf/module-template"},"Module template")," - ",(0,n.kt)("em",{parentName:"li"},"Repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.rhinestone.wtf/modulekit/build/module-basics"},"How to build a module")," - ",(0,n.kt)("em",{parentName:"li"},"Docs"))),(0,n.kt)("p",null,"Once the module has been independantly developed. It can be tested and enabled on Safe Accounts.\nIf you are looking to enable the module on the existing Safe, it can be achieved by building a Safe App along with the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rhinestonewtf/safe7579"},"7579 adapter"),"."),(0,n.kt)("p",null,"Here is a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/koshikraj/module-template-7579"},"module template")," to get started building module and Safe App that enables and interacts with the module developed."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clone the repository:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/koshikraj/module-template-7579.git\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Project structure:"))),(0,n.kt)("p",null,"\u251c\u2500\u2500 module-template-7579 ",(0,n.kt)("br",null),"\n\u2502   \u251c\u2500\u2500 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/koshikraj/module-template-7579/tree/main/web"},"Safe App"),(0,n.kt)("br",null),"\n\u2502   \u251c\u2500\u2500 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/koshikraj/module-template-7579/tree/main/module"},"Module"),(0,n.kt)("br",null),"\n\u2502   \u2514\u2500\u2500 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/koshikraj/module-template-7579/tree/main/packages"},"Dependency Packages")),(0,n.kt)("h3",{id:"additional-resources"},"Additional Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zenguardxyz/module-templates"},"List of Module Templates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/erc7579/erc7579-implementation"},"Reference implementation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/koshikraj/module-template-7579"},"7579 Module template")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://erc7579.com"},"ERC 7579"))))}d.isMDXComponent=!0}}]);