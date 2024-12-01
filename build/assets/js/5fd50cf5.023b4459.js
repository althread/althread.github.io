"use strict";(self.webpackChunkalthread=self.webpackChunkalthread||[]).push([[827],{916:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(6070),i=s(5710);const r={sidebar_position:5},o="Cr\xe9er des tests",c={id:"guide/test",title:"Cr\xe9er des tests",description:"Nous allons maintenant voir comment cr\xe9er des tests pour vos processus. Ces tests servent \xe0 contr\xf4ler les comportements de vos processus et \xe0 v\xe9rifier qu'ils fonctionnent correctement.",source:"@site/docs/guide/test.md",sourceDirName:"guide",slug:"/guide/test",permalink:"/docs/guide/test",draft:!1,unlisted:!1,editUrl:"https://github.com/althread/althread/tree/main/doc/docs/guide/test.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guideSidebar",previous:{title:"\xc9crire dans un canal (non impl\xe9ment\xe9)",permalink:"/docs/guide/channels/write"},next:{title:"D\xe9boguer",permalink:"/docs/guide/debugging"}},d={},l=[{value:"Blocks de test",id:"blocks-de-test",level:2},{value:"Fonction assert",id:"fonction-assert",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cr\xe9er-des-tests",children:"Cr\xe9er des tests"})}),"\n",(0,t.jsx)(n.p,{children:"Nous allons maintenant voir comment cr\xe9er des tests pour vos processus. Ces tests servent \xe0 contr\xf4ler les comportements de vos processus et \xe0 v\xe9rifier qu'ils fonctionnent correctement."}),"\n",(0,t.jsx)(n.h2,{id:"blocks-de-test",children:"Blocks de test"}),"\n",(0,t.jsx)(n.p,{children:"En Althread, il existe 3 types de blocks de tests :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"always"}),": v\xe9rifie qu'une condition est remplie \xe0 chaque it\xe9ration"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"never"}),": v\xe9rifie qu'une condition n'est jamais remplie lors de l'ex\xe9cution"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eventually"}),": v\xe9rifie qu'une condition est remplie \xe0 un moment donn\xe9"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Voici un exemple de l'utilisation de ces conditions :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"shared {\n    let x: int;\n}\n\nprocess A() {\n    x++;\n}\n\nprocess B() {\n    x--;\n}\n\nmain {\n    atomic {\n        run A();\n        run B();\n    }\n}\n\nalways {\n    x < 1;\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Ici, le block ",(0,t.jsx)(n.code,{children:"always"})," v\xe9rifie que la variable ",(0,t.jsx)(n.code,{children:"x"})," est toujours inf\xe9rieure \xe0 1. Le test ne passera que si le process ",(0,t.jsx)(n.code,{children:"B"})," est ex\xe9cut\xe9 avant le process ",(0,t.jsx)(n.code,{children:"A"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Il n'est pas possible d'utiliser le block de test pour des variables locales \xe0 un processus."})}),"\n",(0,t.jsx)(n.h2,{id:"fonction-assert",children:"Fonction assert"}),"\n",(0,t.jsx)(n.p,{children:"La fonction assert permet de v\xe9rifier si une condition est remplie. Si la condition n'est pas remplie, le test \xe9choue et affiche un message d'erreur."}),"\n",(0,t.jsx)(n.p,{children:"Voici un exemple de l'utilisation de la fonction assert :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'shared {\n    let x: int;\n}\n\nprocess A() {\n    x++;\n}\n\nprocess B() {\n    x--;\n}\n\nmain {\n    atomic {\n        run A();\n        run B();\n    }\n    \n    assert(x < 1, "x doit \xeatre inf\xe9rieur \xe0 1");\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Il est possible d'utiliser ",(0,t.jsx)(n.code,{children:"assert"}),"sur des variables locales \xe0 un processus."]})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},5710:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(758);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);