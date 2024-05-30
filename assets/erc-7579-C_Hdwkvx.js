import{u as a,j as e}from"./index-DanGLIwc.js";const r={sidebar_position:4,title:"ERC-7579",description:"undefined"};function i(n){const t={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"erc-7579",children:["ERC-7579",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#erc-7579",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:"ERC-7579 outlines the minimally required interfaces and behavior for modular smart accounts and modules to ensure interoperability across implementations."}),`
`,e.jsxs(t.h3,{id:"compatible-smart-accounts",children:["Compatible Smart Accounts",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compatible-smart-accounts",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"ERC-7579 compatible smart account implementations"}),`
`,e.jsx(t.p,{children:"There are various implementations for ERC-6900 accounts including:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://github.com/zerodevapp/kernel",children:"ZeroDev Kernel"})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://github.com/bcnmy/scw-contracts",children:"Biconomy Smart Account"})}),`
`]}),`
`]}),`
`,e.jsxs(t.h3,{id:"safe-account-support",children:["Safe Account Support",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#safe-account-support",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"ERC-7579 based modules are natively not supported on Safe smart accounts. They can be easily supported via adapters."}),`
`,e.jsxs(t.p,{children:["Safe along with Rhinestone team has developed a ",e.jsx(t.a,{href:"https://github.com/rhinestonewtf/safe7579",children:"7579 adapter"})," that will make Safe compatible with 7579 based modules."]}),`
`,e.jsxs(t.h3,{id:"how-to-make-a-safe-comaptible-with-7579-standard",children:["How to make a Safe comaptible with 7579 standard",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-make-a-safe-comaptible-with-7579-standard",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["An existing Safe can be 7579 compatible just by adding the ",e.jsx(t.a,{href:"https://github.com/rhinestonewtf/safe7579",children:"7579 adapter"})," as a Safe Module and Safe Fallback handler."]}),`
`]}),`
`,e.jsxs(t.h3,{id:"getting-started",children:["Getting started:",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["The best way to get started with the module development is with the help of ",e.jsx(t.a,{href:"https://github.com/rhinestonewtf/module-template",children:"module-template"})," by Rhinestone."]}),`
`,e.jsx(t.p,{children:"Here are a few links to get started with building and testing."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/rhinestonewtf/modulekit/tree/main",children:"With Rhinestone Module Kit"})," - ",e.jsx(t.em,{children:"Repo"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/rhinestonewtf/module-template",children:"Module template"})," - ",e.jsx(t.em,{children:"Repo"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://docs.rhinestone.wtf/modulekit/build/module-basics",children:"How to build a module"})," - ",e.jsx(t.em,{children:"Docs"})]}),`
`]}),`
`,e.jsxs(t.p,{children:[`Once the module has been independantly developed. It can be tested and enabled on Safe Accounts.
If you are looking to enable the module on the existing Safe, it can be achieved by building a Safe App along with the `,e.jsx(t.a,{href:"https://github.com/rhinestonewtf/safe7579",children:"7579 adapter"}),"."]}),`
`,e.jsxs(t.p,{children:["Here is a ",e.jsx(t.a,{href:"https://github.com/koshikraj/module-template-7579",children:"module template"})," to get started building module and Safe App that enables and interacts with the module developed."]}),`
`,e.jsxs(t.h2,{id:"usage",children:["Usage",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:"Clone the repository:"}),`
`,e.jsx(t.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(t.code,{children:e.jsxs(t.span,{className:"line",children:[e.jsx(t.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(t.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),e.jsx(t.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://github.com/koshikraj/module-template-7579.git"})]})})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:"Project structure:"}),`
`]}),`
`]}),`
`,e.jsxs(t.p,{children:["├── module-template-7579 ",`
│   ├── `,e.jsx(t.a,{href:"https://github.com/koshikraj/module-template-7579/tree/main/web",children:"Safe App"}),`
│   ├── `,e.jsx(t.a,{href:"https://github.com/koshikraj/module-template-7579/tree/main/module",children:"Module"}),`
│   └── `,e.jsx(t.a,{href:"https://github.com/koshikraj/module-template-7579/tree/main/packages",children:"Dependency Packages"})]}),`
`,e.jsxs(t.h3,{id:"additional-resources",children:["Additional Resources",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional-resources",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/zenguardxyz/module-templates",children:"List of Module Templates"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/erc7579/erc7579-implementation",children:"Reference implementation"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/koshikraj/module-template-7579",children:"7579 Module template"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://erc7579.com",children:"ERC 7579"})}),`
`]})]})}function d(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{d as default,r as frontmatter};
