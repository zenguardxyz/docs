"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[503],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>b});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},y=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),p=u(n),y=r,b=p["".concat(i,".").concat(y)]||p[y]||d[y]||o;return n?a.createElement(b,s(s({ref:e},l),{},{components:n})):a.createElement(b,s({ref:e},l))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=y;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[p]="string"==typeof t?t:r,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1154:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},s="Basics",c={unversionedId:"aa-guide/intro",id:"aa-guide/intro",title:"Basics",description:"What is Account Abstraction?",source:"@site/docs/aa-guide/intro.md",sourceDirName:"aa-guide",slug:"/aa-guide/intro",permalink:"/aa-guide/intro",draft:!1,editUrl:"https://github.com/zenguardxyz/docs/tree/main/packages/create-docusaurus/templates/shared/docs/aa-guide/intro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Account Abstraction Guide",permalink:"/category/account-abstraction-guide"}},i={},u=[{value:"What is Account Abstraction?",id:"what-is-account-abstraction",level:2},{value:"Externally Owned Accounts (EOAs):",id:"externally-owned-accounts-eoas",level:3},{value:"Smart Contract Accounts:",id:"smart-contract-accounts",level:3},{value:"Benefits of Account Abstraction:",id:"benefits-of-account-abstraction",level:2}],l={toc:u},p="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basics"},"Basics"),(0,r.kt)("h2",{id:"what-is-account-abstraction"},"What is Account Abstraction?"),(0,r.kt)("p",null,'Imagine being able to use your crypto wallet account just as seamlessly as your traditional bank app account. This is the essence of Account Abstraction. Account Abstraction allows users to interact with accounts built on smart contracts seamlessly without the need to know how how wallet accounts are traditionally managed, which can be referred to as "Smart Accounts."'),(0,r.kt)("p",null,"To better understand Account Abstraction, let's first explore the two types of accounts commonly used:"),(0,r.kt)("h3",{id:"externally-owned-accounts-eoas"},"Externally Owned Accounts (EOAs):"),(0,r.kt)("p",null,"EOAs are accounts controlled by a single private key. They are widely used in Ethereum, such as your MetaMask account. However, EOAs present a poor user experience as they require users to securely store private keys, which poses a risk. Losing private keys can result in permanent loss of access to funds stored in the account."),(0,r.kt)("h3",{id:"smart-contract-accounts"},"Smart Contract Accounts:"),(0,r.kt)("p",null,"Smart Contract Accounts are a type of cryptocurrency wallet that allows users to own an account in the form of smart contracts on the blockchain. These wallets have gained popularity due to their ability to automate complex processes and provide wallet recovery functionalities, enabling secure and seamless interaction with the blockchain."),(0,r.kt)("p",null,'Smart Contract Wallets are the foundation of Account Abstraction, with a simple concept: "providing you with a crypto wallet that even a grandparent can use." How is this made possible? Account Abstraction allows your crypto wallet to be represented by a smart contract. Its goal is to offer crypto users features similar to those provided by traditional banking apps, including Wallet Recovery, Multi-Signature Transactions, Custom and 2FA authentication, Gasless or Sponsored Transactions, and other convenient features, all without the need for trust in custody.'),(0,r.kt)("h2",{id:"benefits-of-account-abstraction"},"Benefits of Account Abstraction:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud83d\udd12 Account Recovery"),": Account Abstraction ensures that even if you lose access to your private keys, you can recover your wallet and regain control over your funds."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Batched transactions"),": Capable of batching transactions together; e.g. approving a token transfer and transferring a token in the same operation, thus bringing down the overal transaction cost."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud83d\udd0c Modular Account:")," Account Abstraction enables customizable features to be added to the account such as 2fa based transactions, session keys\nto allow third party authorization, auto payments etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u26fd\ufe0f  Gasless and Sponsored Transactions"),": Account Abstraction simplifies transaction processes by eliminating the need for users to have native blockahin currency such as ETH to pay transaction fees. It allows transactions to be sponsored or paid by others, reducing barriers to entry."))}d.isMDXComponent=!0}}]);