import{u as a,j as e}from"./index-Df830vq0.js";const d={sidebar_position:4,title:"ERC-7579",description:"undefined"};function s(t){const n={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"erc-7579",children:["ERC-7579",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#erc-7579",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"ERC-7579 outlines the minimally required interfaces and behavior for modular smart accounts and modules to ensure interoperability across implementations."}),`
`,e.jsxs(n.h3,{id:"compatible-smart-accounts",children:["Compatible Smart Accounts",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compatible-smart-accounts",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"ERC-7579 compatible smart account implementations"}),`
`,e.jsx(n.p,{children:"There are various implementations for ERC-6900 accounts including:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/zerodevapp/kernel",children:"ZeroDev Kernel"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/bcnmy/scw-contracts",children:"Biconomy Smart Account"})}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"safe-account-support",children:["Safe Account Support",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#safe-account-support",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"ERC-7579 based modules are natively not supported on Safe smart accounts. They can be easily supported via adapters."}),`
`,e.jsxs(n.p,{children:["Safe along with Rhinestone team has developed a ",e.jsx(n.a,{href:"https://github.com/rhinestonewtf/safe7579",children:"7579 adapter"}),` that will make Safe compatible with 7579 based modules.
This also makes the Safe Accounts full ERC4337 and ERC7579 compliant. There is also a launchpad  that allows the new Safe Account to be created with 7579 enabled.
Launchpad is a factory that creates Safe accounts with Safe7579 and initializes them with the required modules.`]}),`
`,e.jsxs(n.h3,{id:"how-to-make-an-existing-safe-comaptible-with-7579-standard",children:["How to make an existing Safe comaptible with 7579 standard",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-make-an-existing-safe-comaptible-with-7579-standard",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["An existing Safe can be 7579 compatible just by adding the ",e.jsx(n.a,{href:"https://github.com/rhinestonewtf/safe7579",children:"7579 adapter"})," as a Safe Module and Safe Fallback handler."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"getting-started",children:["Getting started:",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Before we install and enable any modules for Safe Accounts, they need to be developed and test. They can then be installed on an existing or a new Safe Account."}),`
`,e.jsxs(n.h4,{id:"steps-to-build-and-test-your-module",children:["Steps to Build and Test Your Module",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#steps-to-build-and-test-your-module",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The best way to get started with the module development is with the help of Module Template by Rhinestone."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Clone the Module Template: Start by cloning the ",e.jsx(n.a,{href:"https://github.com/rhinestonewtf/module-template",children:"module-template"})," repository to use as a base for your development."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:['Follow the Docs: Refer to the "',e.jsx(n.a,{href:"https://docs.rhinestone.wtf/modulekit/build/module-basics",children:"How to build a module"}),'" documentation for detailed steps and best practices.']}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Develop Your Module: Customize and build your module using the template as a guide."}),`
`]}),`
`]}),`
`,e.jsxs(n.h4,{id:"essential-links",children:["Essential Links",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#essential-links",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/rhinestonewtf/modulekit/tree/main",children:"Rhinestone Module Kit"})," - ",e.jsx(n.em,{children:"Repo"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/rhinestonewtf/module-template",children:"Module template"})," - ",e.jsx(n.em,{children:"Repo"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.rhinestone.wtf/modulekit/build/module-basics",children:"How to build a module"})," - ",e.jsx(n.em,{children:"Docs"})]}),`
`]}),`
`,e.jsxs(n.h4,{id:"testing-and-enabling-your-module-on-safe",children:["Testing and Enabling Your Module on Safe",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#testing-and-enabling-your-module-on-safe",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[`Once the module has been independantly developed. It can be tested and enabled on Safe Accounts.
If you are looking to enable the module on the existing Safe, it can be achieved by building a Safe App along with the `,e.jsx(n.a,{href:"https://github.com/rhinestonewtf/safe7579",children:"7579 adapter"}),"."]}),`
`,e.jsxs(n.p,{children:["Here is a ",e.jsx(n.a,{href:"https://github.com/koshikraj/module-template-7579",children:"module template"})," to get started building module and Safe App that enables and interacts with the module developed."]}),`
`,e.jsx(n.p,{children:"Using this template,"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Testing module with Safe 7579 adapter: The module can be tested against Safe Accounts using the hardhat tests."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Enable on Safe Accounts: To enable the module on existing Safe accounts, you can create a Safe App using the 7579 adapter."}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"usage",children:["Usage",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.div,{"data-vocs-steps":"true",children:[e.jsxs(n.div,{"data-depth":"3",children:[e.jsxs(n.h3,{id:"clone-the-repository",children:["Clone the repository:",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#clone-the-repository",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://github.com/koshikraj/module-template-7579.git"})]})})}),e.jsx(n.p,{children:"This will be the directory structure once you clone the template."}),e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed has-diff",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":" Project structure","data-lang":"txt",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"module-template-7579/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"├── web/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"├── module/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"├── packages/"})}),`
`,e.jsx(n.span,{className:"line diff add",children:e.jsx(n.span,{children:"└── package.json"})})]})})]}),e.jsxs(n.div,{"data-depth":"3",children:[e.jsxs(n.h3,{id:"update-the-modules-and-test",children:["Update the modules and test",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#update-the-modules-and-test",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),e.jsx(n.p,{children:"This will be the directory structure of module. This module package is a combination of hardhat and foundry project."}),e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed has-highlighted",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":" Module structure","data-lang":"txt",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"module/"})}),`
`,e.jsx(n.span,{className:"line highlighted",children:e.jsx(n.span,{children:"├── contracts/"})}),`
`,e.jsx(n.span,{className:"line highlighted",children:e.jsx(n.span,{children:"├── test/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"├── src/ "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"├── hardhat.config.ts"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"└── foundry.toml "})})]})}),e.jsxs(n.p,{children:["The module codebase resides in the ",e.jsx(n.code,{children:"contracts"})," and hardhat tests resides inside the ",e.jsx(n.code,{children:"test"}),"."]}),e.jsxs(n.p,{children:["To get started with building the 7579 module, use this ",e.jsx(n.a,{href:"https://docs.rhinestone.wtf/modulekit/build/module-basics",children:"guide by Rhinestone"})," on how to build Validator, Executors or Hooks"]}),e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"test"})," folder to update the tests for your modules and run them against the Safe Account."]})]}),e.jsxs(n.div,{"data-depth":"3",children:[e.jsxs(n.h3,{id:"update-the-safe-app",children:["Update the Safe App",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#update-the-safe-app",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),e.jsx(n.p,{children:`This will be the directory structure of Safe Web App.
All the code logic to enable the Safe 7579 adapter, install the module and interact with the module resides here.`}),e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed has-highlighted",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":" Safe App structure","data-lang":"txt",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"web/src/"})}),`
`,e.jsx(n.span,{className:"line highlighted",children:e.jsx(n.span,{children:"├── logic/"})}),`
`,e.jsx(n.span,{className:"line highlighted",children:e.jsx(n.span,{children:"├── pages/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"└── utils/"})})]})})]})]}),`
`,e.jsxs(n.h3,{id:"additional-resources",children:["Additional Resources",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional-resources",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/zenguardxyz/module-templates",children:"List of Module Templates"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/erc7579/erc7579-implementation",children:"Reference implementation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/koshikraj/module-template-7579",children:"7579 Module template"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://erc7579.com",children:"ERC 7579"})}),`
`]})]})}function l(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{l as default,d as frontmatter};
