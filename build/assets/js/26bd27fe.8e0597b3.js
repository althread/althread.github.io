"use strict";(self.webpackChunkalthread=self.webpackChunkalthread||[]).push([[287],{7988:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var r=n(6070),o=n(5710);const c={sidebar_position:1},i="Utilisation des processus",t={id:"guide/process/simple-process",title:"Utilisation des processus",description:"Nous allons maintenant voir comment cr\xe9er et ex\xe9cuter des processus en Althread. Un processus est une unit\xe9 d'ex\xe9cution ind\xe9pendante qui peut s'ex\xe9cuter en parall\xe8le d'autres processus. Les processus peuvent communiquer entre eux en utilisant des variables partag\xe9es ou des canaux.",source:"@site/docs/guide/process/simple-process.md",sourceDirName:"guide/process",slug:"/guide/process/simple-process",permalink:"/docs/guide/process/simple-process",draft:!1,unlisted:!1,editUrl:"https://github.com/althread/althread/tree/main/doc/docs/guide/process/simple-process.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guideSidebar",previous:{title:"Syntaxe d'Althread",permalink:"/docs/guide/getting-started/syntaxe"},next:{title:"Arguments (non impl\xe9ment\xe9)",permalink:"/docs/guide/process/arguments"}},u={},l=[{value:"D\xe9claration d&#39;un processus",id:"d\xe9claration-dun-processus",level:2},{value:"Ex\xe9cution d&#39;un processus",id:"ex\xe9cution-dun-processus",level:2},{value:"Que se passe-t-il lorsqu&#39;un processus est ex\xe9cut\xe9 ?",id:"que-se-passe-t-il-lorsquun-processus-est-ex\xe9cut\xe9-",level:3},{value:"Exemple complet",id:"exemple-complet",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"utilisation-des-processus",children:"Utilisation des processus"})}),"\n",(0,r.jsx)(s.p,{children:"Nous allons maintenant voir comment cr\xe9er et ex\xe9cuter des processus en Althread. Un processus est une unit\xe9 d'ex\xe9cution ind\xe9pendante qui peut s'ex\xe9cuter en parall\xe8le d'autres processus. Les processus peuvent communiquer entre eux en utilisant des variables partag\xe9es ou des canaux."}),"\n",(0,r.jsx)(s.h2,{id:"d\xe9claration-dun-processus",children:"D\xe9claration d'un processus"}),"\n",(0,r.jsxs)(s.p,{children:["Pour d\xe9clarer un processus, vous devez utiliser le mot-cl\xe9 ",(0,r.jsx)(s.code,{children:"process"}),". Voici un exemple de d\xe9claration de processus :"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"process MyProcess() {\n    // code du processus\n}\n"})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"Il est possible de d\xe9clarer autant de processus que vous le souhaitez. Tous les processus d\xe9clar\xe9s sont stock\xe9s dans une liste"})}),"\n",(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsx)(s.p,{children:"Il n'est pas possible d'avoir deux processus avec le m\xeame nom."})}),"\n",(0,r.jsx)(s.h2,{id:"ex\xe9cution-dun-processus",children:"Ex\xe9cution d'un processus"}),"\n",(0,r.jsxs)(s.p,{children:["Pour ex\xe9cuter un processus, vous devez utiliser la fonction ",(0,r.jsx)(s.code,{children:"run"}),". Voici un exemple d'ex\xe9cution d'un processus :"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"main {\n    run MyProcess();\n}\n"})}),"\n",(0,r.jsxs)(s.admonition,{type:"note",children:[(0,r.jsx)(s.p,{children:"Un processus peut \xeatre ex\xe9cut\xe9 plusieurs fois en parall\xe8le :"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"main {\n    run MyProcess();\n    run MyProcess();\n}\n"})})]}),"\n",(0,r.jsx)(s.h3,{id:"que-se-passe-t-il-lorsquun-processus-est-ex\xe9cut\xe9-",children:"Que se passe-t-il lorsqu'un processus est ex\xe9cut\xe9 ?"}),"\n",(0,r.jsxs)(s.p,{children:["Un programme althread est ex\xe9cut\xe9 par it\xe9ration. Chaque it\xe9ration correspond \xe0 l'ex\xe9cution d'une ",(0,r.jsx)(s.a,{href:"/docs/guide/getting-started/syntaxe#expression-atomique",children:"instruction atomique"})," d'un processus choisi al\xe9atoirement parmi les processus en cours d'ex\xe9cution. Lorsqu'un processus est ex\xe9cut\xe9, il peut effectuer des op\xe9rations telles que l'assignation de variables, l'appel de fonctions, la lecture ou l'\xe9criture de canaux, etc..."]}),"\n",(0,r.jsx)(s.h2,{id:"exemple-complet",children:"Exemple complet"}),"\n",(0,r.jsx)(s.p,{children:"Voici un exemple complet d'un programme Althread qui ex\xe9cute deux processus en parall\xe8le :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'process Process1() {\n    print("process 1");\n}\n\nmain {\n    run Process1();\n    print("main");\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["Dans cet exemple, le processus ",(0,r.jsx)(s.code,{children:"Process1"})," est ex\xe9cut\xe9 en parall\xe8le du processus principal. Voici comment s'ex\xe9cute ce programme :"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Le processus ",(0,r.jsx)(s.code,{children:"Process1"})," et le processus principal sont d\xe9clar\xe9s et stock\xe9s dans la liste des processus."]}),"\n",(0,r.jsx)(s.li,{children:"Le processus principal est ajout\xe9 \xe0 la liste des processus en cours d'ex\xe9cution."}),"\n",(0,r.jsx)(s.li,{children:"Un processus est tir\xe9 al\xe9atoirement parmi les processus en cours d'ex\xe9cution. Ici, comme il n'y a que le processus principal, c'est lui qui est ex\xe9cut\xe9."}),"\n",(0,r.jsxs)(s.li,{children:["Le processus principal ex\xe9cute l'instruction ",(0,r.jsx)(s.code,{children:"run Process1();"}),", ce qui ajoute le processus ",(0,r.jsx)(s.code,{children:"Process1"})," \xe0 la liste des processus en cours d'ex\xe9cution."]}),"\n",(0,r.jsxs)(s.li,{children:["Un processus est tir\xe9 al\xe9atoirement parmi les processus en cours d'ex\xe9cution. Ici, le processus principal et le processus ",(0,r.jsx)(s.code,{children:"Process1"})," sont en cours d'ex\xe9cution, donc l'un des deux est ex\xe9cut\xe9 al\xe9atoirement (soit l'instruction ",(0,r.jsx)(s.code,{children:'print("main");'}),", soit l'instruction ",(0,r.jsx)(s.code,{children:'print("process 1");'}),")."]}),"\n",(0,r.jsx)(s.li,{children:"Quand un processus a termin\xe9 son ex\xe9cution, il est retir\xe9 de la liste des processus en cours d'ex\xe9cution."}),"\n",(0,r.jsx)(s.li,{children:"Quand tous les processus ont termin\xe9 leur ex\xe9cution, le programme s'arr\xeate."}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"Il n'y a pas de priorit\xe9 quant \xe0 l'ordre de d\xe9claration des processus : tous les processus d\xe9clar\xe9s sont stock\xe9s dans la liste des processus avant l'ex\xe9cution du processus principal."})})]})}function a(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5710:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>t});var r=n(758);const o={},c=r.createContext(o);function i(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);