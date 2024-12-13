"use strict";(self.webpackChunkalthread=self.webpackChunkalthread||[]).push([[263],{8740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(6070),i=r(5710);const a={sidebar_position:1},s="Architecture interne",o={id:"internal/architecture",title:"Architecture interne",description:"Althread est un langage statiquement typ\xe9 qui est compil\xe9 en instructions pour la machine virtuelle Althread. Cette machine virtuelle est un programme qui ex\xe9cute les instructions du programme Althread. Les instructions sont des op\xe9rations de bas niveau qui manipulent les donn\xe9es du programme, mais ne sont pas aussi bas niveau que les instructions d'une machine physique. La machine virtuelle Althread est con\xe7ue pour \xeatre facile \xe0 impl\xe9menter et \xe0 comprendre, mais elle reste assez performante pour ex\xe9cuter des programmes de taille raisonnable.",source:"@site/docs/internal/architecture.md",sourceDirName:"internal",slug:"/internal/architecture",permalink:"/docs/internal/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/althread/althread/tree/main/doc/docs/internal/architecture.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},u={},l=[];function c(e){const t={a:"a",h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"architecture-interne",children:"Architecture interne"})}),"\n",(0,n.jsxs)(t.p,{children:["Althread est un langage statiquement typ\xe9 qui est compil\xe9 en instructions pour la machine virtuelle Althread. Cette machine virtuelle est un programme qui ex\xe9cute les instructions du programme Althread. Les instructions sont des op\xe9rations de bas niveau qui manipulent les donn\xe9es du programme, mais ne sont pas aussi bas niveau que les instructions d'une machine physique. La machine virtuelle Althread est con\xe7ue pour \xeatre facile \xe0 impl\xe9menter et \xe0 comprendre, mais elle reste assez performante pour ex\xe9cuter des programmes de taille raisonnable.\nL'execution sur la machine virtuelle Althread est similaire \xe0 l'execution d'un programme sur un ordinateur standard, avec des piles d'execution par processus, o\xf9 sont stock\xe9es les variables locales, et une zone de m\xe9moire partag\xe9. La machine virtuelle est d\xe9crite en d\xe9tail dans la section ",(0,n.jsx)(t.a,{href:"/docs/internal/vm",children:"Machine virtuelle"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Pour \xeatre ex\xe9cut\xe9 sur la machine virtuelle, un programme Althread doit \xeatre compil\xe9 en instructions. Le compilateur Althread est un programme qui prend un programme Althread en entr\xe9e et produit une structure de donn\xe9e qui est directement utilis\xe9e par la machine virtuelle (pour le moment, il n'est pas possible de stocker la version compiler d'un programme).\nLe compilateur Althread est d\xe9crit en d\xe9tail dans la section ",(0,n.jsx)(t.a,{href:"/docs/internal/compiler.md",children:"Compilateur"}),". Il faut not\xe9 que le compilateur n'effectue aucune optimisation, il se contente de traduire le programme en instructions."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5710:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(758);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);