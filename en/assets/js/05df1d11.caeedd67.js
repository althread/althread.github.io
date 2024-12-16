"use strict";(self.webpackChunkalthread=self.webpackChunkalthread||[]).push([[245],{7273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(6070),i=n(5710);const s={sidebar_position:1},r="Installation",l={id:"guide/getting-started/installation",title:"Installation",description:"Browser Usage",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/getting-started/installation.md",sourceDirName:"guide/getting-started",slug:"/guide/getting-started/installation",permalink:"/en/docs/guide/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/althread/althread/tree/main/doc/docs/guide/getting-started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guideSidebar",previous:{title:"Introduction",permalink:"/en/docs/guide/intro"},next:{title:"Althread Syntax",permalink:"/en/docs/guide/getting-started/syntaxe"}},o={},d=[{value:"Browser Usage",id:"browser-usage",level:2},{value:"Local Installation",id:"local-installation",level:2},{value:"Compile",id:"compile",level:3},{value:"Run",id:"run",level:3},{value:"Random search",id:"random-search",level:3},{value:"Check",id:"check",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"installation",children:"Installation"})}),"\n",(0,a.jsx)(t.h2,{id:"browser-usage",children:"Browser Usage"}),"\n",(0,a.jsxs)(t.p,{children:["The easiest way to start using Althread is to use the online editor available at ",(0,a.jsx)(t.a,{href:"https://althread.github.io/editor",children:"althread.github.io/editor"}),". This will allow you to test the language without having to install anything on your machine."]}),"\n",(0,a.jsx)(t.h2,{id:"local-installation",children:"Local Installation"}),"\n",(0,a.jsx)(t.p,{children:"To use Althread on your machine, you must install the Althread compiler."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Clone the github project: ",(0,a.jsx)(t.code,{children:"git clone https://github.com/althread/althread.git"})]}),"\n",(0,a.jsxs)(t.li,{children:["Run the program (this will install dependencies and run the program): ",(0,a.jsx)(t.code,{children:"cargo run --release"})]}),"\n",(0,a.jsxs)(t.li,{children:["You can also compile the program with ",(0,a.jsx)(t.code,{children:"cargo build --release"})," and run the program with ",(0,a.jsx)(t.code,{children:"./target/release/althread-cli"}),"\nThe available commands are as follows:"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"compile",children:"Compile"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"./target/release/althread-cli compile file.alt\n"})}),"\n",(0,a.jsxs)(t.p,{children:["compiles the ",(0,a.jsx)(t.code,{children:"file.alt"})," program and displays any potential errors. On success, displays the abstract syntax tree and the generated code."]}),"\n",(0,a.jsx)(t.h3,{id:"run",children:"Run"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"./target/release/althread-cli run file.alt\n"})}),"\n",(0,a.jsxs)(t.p,{children:["compiles and runs the ",(0,a.jsx)(t.code,{children:"file.alt"})," program. On success, displays the execution result. Use the ",(0,a.jsx)(t.code,{children:"--debug"})," option to see lines executed by processes. Use the ",(0,a.jsx)(t.code,{children:"--verbose"})," option to see the evolution of each process's state. Use the ",(0,a.jsx)(t.code,{children:"--seed <seed>"})," option to set the random number generator seed."]}),"\n",(0,a.jsx)(t.h3,{id:"random-search",children:"Random search"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"./target/release/althread-cli random-search file.alt\n"})}),"\n",(0,a.jsxs)(t.p,{children:["compiles and runs the ",(0,a.jsx)(t.code,{children:"file.alt"})," program multiple times using different random values. In case of an invariant violation, indicates the seed that caused the error."]}),"\n",(0,a.jsx)(t.h3,{id:"check",children:"Check"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"./target/release/althread-cli check file.alt\n"})}),"\n",(0,a.jsxs)(t.p,{children:["compiles the ",(0,a.jsx)(t.code,{children:"file.alt"})," program, generates the graph of accessible system states, and checks that invariants are respected in each state."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5710:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var a=n(758);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);