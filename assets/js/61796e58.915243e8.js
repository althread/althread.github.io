"use strict";(self.webpackChunkalthread=self.webpackChunkalthread||[]).push([[300],{3379:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=s(6070),t=s(5710);const a={sidebar_position:2},i="Cr\xe9ation d'un canal",c={id:"guide/channels/create",title:"Cr\xe9ation d'un canal",description:"Un canal de communication peut \xeatre cr\xe9\xe9 entre deux processus pour leur permettre de communiquer. La cr\xe9ation d'un canal se fait en utilisant le mot-cl\xe9 channel. Voici un exemple de d\xe9claration de canal :",source:"@site/docs/guide/channels/create.md",sourceDirName:"guide/channels",slug:"/guide/channels/create",permalink:"/docs/guide/channels/create",draft:!1,unlisted:!1,editUrl:"https://github.com/althread/althread/tree/main/doc/docs/guide/channels/create.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"Variables partag\xe9es",permalink:"/docs/guide/program/global"},next:{title:"Attente multiple de messages",permalink:"/docs/guide/channels/multiple-wait"}},o={},l=[{value:"Envoi de messages",id:"envoi-de-messages",level:2},{value:"R\xe9ception de messages",id:"r\xe9ception-de-messages",level:2}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cr\xe9ation-dun-canal",children:"Cr\xe9ation d'un canal"})}),"\n",(0,r.jsxs)(n.p,{children:["Un canal de communication peut \xeatre cr\xe9\xe9 entre deux ",(0,r.jsx)(n.em,{children:"processus"})," pour leur permettre de communiquer. La cr\xe9ation d'un canal se fait en utilisant le mot-cl\xe9 ",(0,r.jsx)(n.code,{children:"channel"}),". Voici un exemple de d\xe9claration de canal :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-althread",children:"channel p1.out (string, int)> p2.in;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Dans cet exemple, un canal nomm\xe9 ",(0,r.jsx)(n.code,{children:"out"})," est cr\xe9\xe9 sur le processus ",(0,r.jsx)(n.code,{children:"p1"})," pour envoyer des messages de type ",(0,r.jsx)(n.code,{children:"(string, int)"})," au canal nomm\xe9 ",(0,r.jsx)(n.code,{children:"in"})," sur le processus ",(0,r.jsx)(n.code,{children:"p2"}),". Les messages devront obligatoirement avoir le type d\xe9clar\xe9. Pour le moment les canaux ne peuvent pas \xeatre utilis\xe9s que dans une seule direction (de ",(0,r.jsx)(n.code,{children:"p1"})," vers ",(0,r.jsx)(n.code,{children:"p2"}),", indiqu\xe9 par le chevron ",(0,r.jsx)(n.code,{children:">"}),")."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["le mot cl\xe9 ",(0,r.jsx)(n.code,{children:"self"}),"fait r\xe9f\xe9rence au processus courant et peut \xeatre utiliser pour cr\xe9er un canal avec un autre processus."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-althread",children:"channel self.out (string, int)> p2.in;\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"envoi-de-messages",children:"Envoi de messages"}),"\n",(0,r.jsxs)(n.p,{children:["Un message est envoy\xe9 sur un canal en utilisant l'instruction ",(0,r.jsx)(n.code,{children:"send"}),". Voici un exemple d'envoi de message :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-althread",children:'prgram Prog1() {\n    send out("Hello", 42);\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Dans cet exemple, le message ",(0,r.jsx)(n.code,{children:"(Hello, 42)"})," est envoy\xe9 sur le canal ",(0,r.jsx)(n.code,{children:"out"})," du processus courant. Pour que cette instruction soit valide, il faut qu'un programme ait d\xe9clar\xe9 un canal ",(0,r.jsx)(n.code,{children:"out"})," sur sur au moin un processus de type ",(0,r.jsx)(n.code,{children:"Prog1"}),". Cela permet de s'assurer que les types des messages sont coh\xe9rents."]}),"\n",(0,r.jsxs)(n.p,{children:["Ainsi, pour que l'exemple pr\xe9c\xe9dent fonctionne, il faut que la d\xe9claration du cannal ",(0,r.jsx)(n.code,{children:"out"})," soit attach\xe9e \xe0 un programme de type ",(0,r.jsx)(n.code,{children:"Prog1"})," :\nLe code complet est le suivant:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-althread",children:'main {\n    let p1 = run Prog1();\n    channel p1.out (string, int)> self.in;\n}\nprogram Prog1() {\n    send out("Hello", 42);\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["La compilation s'effectuant dans l'ordre de haut en bas, il est n\xe9cessaire de d\xe9clarer les canaux avant de les utiliser pour que la v\xe9rifications des types soit correcte. Cependant, le programme ",(0,r.jsx)(n.code,{children:"main"})," est toujours compil\xe9 en premier, il est donc possible de d\xe9placer la d\xe9claration du programme ",(0,r.jsx)(n.code,{children:"main"})," en bas du fichier."]})}),"\n",(0,r.jsx)(n.p,{children:"L'envoie d'un message est une op\xe9ration asynchrone, c'est-\xe0-dire que le processus qui envoie le message et continue son ex\xe9cution sans attendre que le processus destinataire ait re\xe7u le message."}),"\n",(0,r.jsx)(n.h2,{id:"r\xe9ception-de-messages",children:"R\xe9ception de messages"}),"\n",(0,r.jsxs)(n.p,{children:["Un message est re\xe7u sur un canal en utilisant l'instruction ",(0,r.jsx)(n.code,{children:"receive"}),".\nC'est une op\xe9ration particuli\xe8re qui doit \xeatre pr\xe9c\xe9d\xe9e de l'instruction ",(0,r.jsx)(n.code,{children:"wait"})," afin de la rendre bloquante.\nVoici un exemple de r\xe9ception de message :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-althread",children:'main {\n    let p1 = run Prog1();\n    channel p1.out (string, int)> self.in;\n    // highlight-next-line\n    wait receive in (x, y) => {\n        print("Message re\xe7u : ", x, y);\n    }\n}\nprogram Prog1() {\n    send out("Hello", 42);\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["On voit que les valeurs re\xe7ues sont stock\xe9es dans les variables ",(0,r.jsx)(n.code,{children:"x"})," et ",(0,r.jsx)(n.code,{children:"y"})," et ne peuvent \xeatre utilis\xe9es que dans le bloc d'instruction suivant l'instruction ",(0,r.jsx)(n.code,{children:"receive"}),".\nLe type des variables est automatiquement d\xe9duit du type du canal."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5710:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var r=s(758);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);