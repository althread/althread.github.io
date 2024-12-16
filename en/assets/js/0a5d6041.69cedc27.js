"use strict";(self.webpackChunkalthread=self.webpackChunkalthread||[]).push([[834],{2712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(6070),i=t(5710);const o={sidebar_position:5},r="Creating Tests",c={id:"guide/test",title:"Creating Tests",description:"Now, let\u2019s look at how to create tests for your processes. These tests are used to monitor the behavior of your processes and ensure they function correctly.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/test.md",sourceDirName:"guide",slug:"/guide/test",permalink:"/en/docs/guide/test",draft:!1,unlisted:!1,editUrl:"https://github.com/althread/althread/tree/main/doc/docs/guide/test.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guideSidebar",previous:{title:"Multiple Message Waiting",permalink:"/en/docs/guide/channels/multiple-wait"},next:{title:"Debugging",permalink:"/en/docs/guide/debugging"}},a={},d=[{value:"Test Blocks",id:"test-blocks",level:2},{value:"The <code>assert</code> Function (Not Yet Implemented)",id:"the-assert-function-not-yet-implemented",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"creating-tests",children:"Creating Tests"})}),"\n",(0,s.jsx)(n.p,{children:"Now, let\u2019s look at how to create tests for your processes. These tests are used to monitor the behavior of your processes and ensure they function correctly."}),"\n",(0,s.jsx)(n.h2,{id:"test-blocks",children:"Test Blocks"}),"\n",(0,s.jsx)(n.p,{children:"In Althread, there are three types of test blocks:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"always"}),": checks that a condition is met in every iteration."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"never"}),": checks that a condition is never met during execution."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eventually"}),": checks that a condition is met at some point."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of how these conditions can be used:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-althread",children:"shared {\n    let X: int;\n}\n\nprogram A() {\n    X++;\n}\n\nprogram B() {\n    X--;\n}\n\nmain {\n    atomic {\n        run A();\n        run B();\n    }\n}\n\nalways {\n    X < 1;\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"always"})," block ensures that the variable ",(0,s.jsx)(n.code,{children:"X"})," is always less than 1. The test will pass only if the ",(0,s.jsx)(n.code,{children:"B"})," process is executed before the ",(0,s.jsx)(n.code,{children:"A"})," process."]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"It is not possible to use test blocks for variables local to a process."})}),"\n",(0,s.jsxs)(n.h2,{id:"the-assert-function-not-yet-implemented",children:["The ",(0,s.jsx)(n.code,{children:"assert"})," Function (Not Yet Implemented)"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"assert"})," function is used to verify if a condition is satisfied. If the condition is not met, the test fails and displays an error message."]}),"\n",(0,s.jsxs)(n.p,{children:["Here\u2019s an example of how to use the ",(0,s.jsx)(n.code,{children:"assert"})," function:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-althread",children:'shared {\n    let X: int;\n}\n\nprogram A() {\n    X++;\n}\n\nprogram B() {\n    X--;\n}\n\nmain {\n    atomic {\n        run A();\n        run B();\n    }\n    \n    assert(X < 1, "X must be less than 1");\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["It is possible to use ",(0,s.jsx)(n.code,{children:"assert"})," with variables local to a process."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},5710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(758);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);