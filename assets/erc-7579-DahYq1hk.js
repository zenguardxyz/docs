import{u as n,j as e}from"./index-DNqROEbC.js";const d={sidebar_position:4,title:"ERC-7579",description:"undefined"};function i(s){const t={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"erc-7579",children:["ERC-7579",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#erc-7579",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
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
`,e.jsxs(t.div,{"data-vocs-steps":"true",children:[e.jsxs(t.div,{"data-depth":"3",children:[e.jsxs(t.h3,{id:"clone-the-repository",children:["Clone the repository:",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#clone-the-repository",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsx(t.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(t.code,{children:e.jsxs(t.span,{className:"line",children:[e.jsx(t.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(t.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),e.jsx(t.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://github.com/koshikraj/module-template-7579.git"})]})})}),e.jsx(t.p,{children:"This will be the directory structure once you clone the template."}),e.jsx(t.pre,{className:"shiki shiki-themes github-light github-dark-dimmed has-diff",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":" Project structure","data-lang":"txt",children:e.jsxs(t.code,{children:[e.jsx(t.span,{className:"line",children:e.jsx(t.span,{children:"module-template-7579/"})}),`
`,e.jsx(t.span,{className:"line",children:e.jsx(t.span,{children:"├── web/"})}),`
`,e.jsx(t.span,{className:"line",children:e.jsx(t.span,{children:"├── module/"})}),`
`,e.jsx(t.span,{className:"line",children:e.jsx(t.span,{children:"├── packages/"})}),`
`,e.jsx(t.span,{className:"line diff add",children:e.jsx(t.span,{children:"└── package.json"})})]})})]}),e.jsxs(t.div,{"data-depth":"3",children:[e.jsxs(t.h3,{id:"update-the-modules-and-test",children:["Update the modules and test",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#update-the-modules-and-test",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsx(t.p,{children:"This will be the directory structure of module. This module package is a combination of hardhat and foundry project."}),e.jsx(t.pre,{className:"shiki shiki-themes github-light github-dark-dimmed has-highlighted",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":" Module structure","data-lang":"txt",children:e.jsxs(t.code,{children:[e.jsx(t.span,{className:"line",children:e.jsx(t.span,{children:"module/"})}),`
`,e.jsx(t.span,{className:"line highlighted",children:e.jsx(t.span,{children:"├── contracts/"})}),`
`,e.jsx(t.span,{className:"line highlighted",children:e.jsx(t.span,{children:"├── test/"})}),`
`,e.jsx(t.span,{className:"line",children:e.jsx(t.span,{children:"├── src/ "})}),`
`,e.jsx(t.span,{className:"line",children:e.jsx(t.span,{children:"├── hardhat.config.ts"})}),`
`,e.jsx(t.span,{className:"line",children:e.jsx(t.span,{children:"└── foundry.toml "})})]})}),e.jsxs(t.p,{children:["The module codebase resides in the ",e.jsx(t.code,{children:"contracts"})," and hardhat tests resides inside the ",e.jsx(t.code,{children:"test"}),"."]}),e.jsxs(t.p,{children:["To get started with building the 7579 module, use this ",e.jsx(t.a,{href:"https://docs.rhinestone.wtf/modulekit/build/module-basics",children:"guide by Rhinestone"})," on how to build Validator, Executors or Hooks"]}),e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"test"})," folder to update the tests for your modules and run them against the Safe Account."]})]}),e.jsxs(t.div,{"data-depth":"3",children:[e.jsxs(t.h3,{id:"update-the-safe-app",children:["Update the Safe App",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#update-the-safe-app",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsx(t.p,{children:`This will be the directory structure of Safe Web App.
All the code logic to enable the Safe 7579 adapter, install the module and interact with the module resides here.`}),e.jsx(t.pre,{className:"shiki shiki-themes github-light github-dark-dimmed has-highlighted",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":" Safe App structure","data-lang":"txt",children:e.jsxs(t.code,{children:[e.jsx(t.span,{className:"line",children:e.jsx(t.span,{children:"web/src/"})}),`
`,e.jsx(t.span,{className:"line highlighted",children:e.jsx(t.span,{children:"├── logic/"})}),`
`,e.jsx(t.span,{className:"line highlighted",children:e.jsx(t.span,{children:"├── pages/"})}),`
`,e.jsx(t.span,{className:"line",children:e.jsx(t.span,{children:"└── utils/"})})]})})]})]}),`
`,e.jsxs(t.h3,{id:"additional-resources",children:["Additional Resources",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional-resources",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/zenguardxyz/module-templates",children:"List of Module Templates"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/erc7579/erc7579-implementation",children:"Reference implementation"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/koshikraj/module-template-7579",children:"7579 Module template"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://erc7579.com",children:"ERC 7579"})}),`
`]})]})}function r(s={}){const{wrapper:t}={...n(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(i,{...s})}):i(s)}export{r as default,d as frontmatter};
