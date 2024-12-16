"use strict";(self.webpackChunkalthread=self.webpackChunkalthread||[]).push([[230],{5465:(e,n,s)=>{s.r(n),s.d(n,{InstructionType:()=>d,assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var i=s(6070),l=s(5710);const r={sidebar_position:2},t="Machine virtuelle Althread",a={id:"guide/internal/vm",title:"Machine virtuelle Althread",description:"Etat de la machine virtuelle",source:"@site/docs/guide/internal/vm.md",sourceDirName:"guide/internal",slug:"/guide/internal/vm",permalink:"/docs/guide/internal/vm",draft:!1,unlisted:!1,editUrl:"https://github.com/althread/althread/tree/main/doc/docs/guide/internal/vm.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"Architecture",permalink:"/docs/guide/internal/architecture"}},c={},d=({children:e,color:n,code:s,args:r})=>{const t={div:"div",span:"span",...(0,l.R)()};return(0,i.jsxs)(t.div,{id:s,children:[(0,i.jsxs)(t.div,{style:{fontFamily:"var(--ifm-font-family-monospace)",fontSize:"var(--ifm-code-font-size)",color:"#008cdf"},children:[(0,i.jsx)(t.span,{style:{color:"#008cdf"},children:s})," ",(0,i.jsx)(t.span,{style:{color:"rgb(174, 0, 223)"},children:r})]}),(0,i.jsx)(t.div,{style:{borderRadius:"2px",padding:"0 15px"},children:e})]})},o=[{value:"Etat de la machine virtuelle",id:"etat-de-la-machine-virtuelle",level:2},{value:"Instructions",id:"instructions",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"machine-virtuelle-althread",children:"Machine virtuelle Althread"})}),"\n",(0,i.jsx)(n.h2,{id:"etat-de-la-machine-virtuelle",children:"Etat de la machine virtuelle"}),"\n",(0,i.jsx)(n.p,{children:"L'\xe9tat de la machine virtuelle est repr\xe9sent\xe9 par"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"La valeur des variables globales d'un c\xf4t\xe9"}),"\n",(0,i.jsx)(n.li,{children:"L'\xe9tat des canaux de communications (les messages en transit)"}),"\n",(0,i.jsx)(n.li,{children:"Une structure pour chaque processus en cours d'ex\xe9cution. L'\xe9tat d'un processus en ex\xe9cution contient sa pile d'ex\xe9cution, c'est-\xe0-dire les variables locales des processus, et la valeur du pointeur d'instruction, qui est l'index de l'instruction en cours d'ex\xe9cution."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["La pile d'execution d'un processus ne contient pas d'information de d\xe9buggage, elle contient uniquement les valeurs des variables locales et les valeurs interm\xe9diaires des expressions sous forme d'un tableau de ",(0,i.jsx)(n.code,{children:"Literal"}),".\nLes expressions utilisant des variables locales utilisent l'index de la variable dans la pile d'ex\xe9cution du processus. L'index d'une variable locale est d\xe9termin\xe9 lors de la compilation, ce qui permet un acc\xe8s rapide durant l'ex\xe9cution."]}),"\n",(0,i.jsx)(n.p,{children:"Pour simplifier, les variables globales sont stock\xe9s dans une HashMap (un dictionnaire) et leur valeur est directement accessible par leur nom."}),"\n",(0,i.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,i.jsxs)(n.p,{children:["Les instructions de la machine virtuelles sont repr\xe9sent\xe9es par un enum ",(0,i.jsx)(n.code,{children:"InstructionType"}),". Chaque instruction contient des champs avec les informations n\xe9cessaires pour l'ex\xe9cution de l'instruction:"]}),"\n","\n",(0,i.jsx)("table",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#Empty",children:"Empty"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#Expression",children:"Expression"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#Push",children:"Push"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#Unstack",children:"Unstack"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#Destruct",children:"Destruct"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#GlobalReads",children:"GlobalReads"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#GlobalAssignment",children:"GlobalAssignment"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#LocalAssignment",children:"LocalAssignment"})}),"\n"]})}),(0,i.jsx)("td",{children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#Declaration",children:"Declaration"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#RunCall",children:"RunCall"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#FnCall",children:"FnCall"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#JumpIf",children:"JumpIf"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#Jump",children:"Jump"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#Break",children:"Break"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#ChannelPeek",children:"ChannelPeek"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#ChannelPop",children:"ChannelPop"})}),"\n"]})}),(0,i.jsx)("td",{children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#WaitStart",children:"WaitStart"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#Wait",children:"Wait"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#Send",children:"Send"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#Connect",children:"Connect"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#AtomicStart",children:"AtomicStart"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#AtomicEnd",children:"AtomicEnd"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#EndProgram",children:"EndProgram"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#Exit",children:"Exit"})}),"\n"]})})]})}),"\n",(0,i.jsx)(d,{code:"Empty",children:(0,i.jsx)(n.p,{children:"Instruction vide, ne fait rien."})}),"\n",(0,i.jsx)(d,{code:"Expression",args:"(LocalExpressionNode)",children:(0,i.jsxs)(n.p,{children:["\xc9value une expression et ajoute le r\xe9sultat sur la pile. ",(0,i.jsx)(n.code,{children:"LocalExpressionNode"})," est la racine d'un arbre repr\xe9sentant l'expression."]})}),"\n",(0,i.jsx)(d,{code:"Push",args:"(Literal)",children:(0,i.jsx)(n.p,{children:"Ajoute le literal donn\xe9 sur la pile."})}),"\n",(0,i.jsx)(d,{code:"Unstack",args:"{unstack_len: usize}",children:(0,i.jsxs)(n.p,{children:["Retire ",(0,i.jsx)(n.code,{children:"unstack_len"})," valeurs de la pile."]})}),"\n",(0,i.jsx)(d,{code:"Destruct",args:"",children:(0,i.jsx)(n.p,{children:"Remplace le tuple situ\xe9 au sommet de la pile par ses \xe9l\xe9ments. Un tuple contenant 3 \xe9l\xe9ments sera remplac\xe9 par 3 valeurs sur la pile."})}),"\n",(0,i.jsx)(d,{code:"GlobalReads",args:"{variables: Vec<String>, only_const: bool}",children:(0,i.jsxs)(n.p,{children:["Ajoute les valeurs des variables globales sur la pile. Le champs ",(0,i.jsx)(n.code,{children:"only_const"})," indique si les variables sont toutes des constantes (si c'est le cas, l'instruction peut \xeatre optimis\xe9e car elle n'est pas globale)."]})}),"\n",(0,i.jsx)(d,{code:"GlobalAssignment",args:"{identifier: String, operator: BinaryAssignmentOperator, unstack_len: usize}",children:(0,i.jsxs)(n.p,{children:["Assigne la valeur au sommet de la pile \xe0 la variable globale ",(0,i.jsx)(n.code,{children:"identifier"})," donn\xe9e, puis retire ",(0,i.jsx)(n.code,{children:"unstack_len"})," valeurs de la pile."]})}),"\n",(0,i.jsx)(d,{code:"LocalAssignment",args:"{index: usize, operator: BinaryAssignmentOperator, unstack_len: usize}",children:(0,i.jsxs)(n.p,{children:["Assigne la valeur au sommet de la pile \xe0 la variable locale d'index ",(0,i.jsx)(n.code,{children:"index"})," donn\xe9e, puis retire ",(0,i.jsx)(n.code,{children:"unstack_len"})," valeurs de la pile."]})}),"\n",(0,i.jsx)(d,{code:"Declaration",args:"{unstack_len: usize}",children:(0,i.jsxs)(n.p,{children:["D\xe9clare une variable dans le scope courant initialis\xe9e avec la valeur au sommet de la pile, puis retire ",(0,i.jsx)(n.code,{children:"unstack_len"})," valeurs de la pile."]})}),"\n",(0,i.jsx)(d,{code:"RunCall",args:"{name: String, unstack_len: usize}",children:(0,i.jsxs)(n.p,{children:["D\xe9marre un nouveau thread ex\xe9cutant le programme ",(0,i.jsx)(n.code,{children:"name"})," avec comme argument la valeur au sommet de la pile, puis retire ",(0,i.jsx)(n.code,{children:"unstack_len"})," valeurs de la pile. Finalement, ajoute le pid du thread sur la pile."]})}),"\n",(0,i.jsx)(d,{code:"FnCall",args:"{name: String, unstack_len: usize, variable_idx: Option<usize>, arguments: Option<Vec<usize>}",children:(0,i.jsxs)(n.p,{children:["Appelle la fonction ",(0,i.jsx)(n.code,{children:"name"})," avec les arguments locaux aux indexes donn\xe9s, puis retire ",(0,i.jsx)(n.code,{children:"unstack_len"})," valeurs de la pile. Si ",(0,i.jsx)(n.code,{children:"variable_idx"})," est donn\xe9, la fonction est une m\xe9thode de l'objet \xe0 l'index donn\xe9.\nFinalement, ajoute le r\xe9sultat de la fonction sur la pile, si elle retourne une valeur."]})}),"\n",(0,i.jsx)(d,{code:"JumpIf",args:"{jump_false: i64, unstack_len: usize}",children:(0,i.jsxs)(n.p,{children:["Saute \xe0 l'instruction ",(0,i.jsx)(n.code,{children:"jump_false"})," si la valeur au sommet de la pile est fausse, puis retire ",(0,i.jsx)(n.code,{children:"unstack_len"})," valeurs de la pile. La valeur du saut est relative \xe0 l'instruction courante: si ",(0,i.jsx)(n.code,{children:"jump_false"})," vaut ",(0,i.jsx)(n.code,{children:"-2"}),", alors le saut se fait \xe0 l'instruction courante moins 2."]})}),"\n",(0,i.jsx)(d,{code:"Jump",args:"{jump: i64}",children:(0,i.jsxs)(n.p,{children:["Saute \xe0 l'instruction ",(0,i.jsx)(n.code,{children:"jump"}),". La valeur du saut est relative \xe0 l'instruction courante."]})}),"\n",(0,i.jsx)(d,{code:"Break",args:"{jump: i64, unstack_len: usize, stop_atomic: bool}",children:(0,i.jsxs)(n.p,{children:["Saute \xe0 l'instruction ",(0,i.jsx)(n.code,{children:"jump"})," en retirant ",(0,i.jsx)(n.code,{children:"unstack_len"})," valeurs de la pile. Si ",(0,i.jsx)(n.code,{children:"stop_atomic"})," est vrai, arr\xeate l'ex\xe9cution atomique."]})}),"\n",(0,i.jsx)(d,{code:"ChannelPeek",args:"{channel_name: String}",children:(0,i.jsxs)(n.p,{children:["Regarde si un message est disponible dans le canal ",(0,i.jsx)(n.code,{children:"channel_name"}),". Si c'est le cas ajoute le message et la valeur ",(0,i.jsx)(n.code,{children:"true"})," sur la pile, sinon ajoute ",(0,i.jsx)(n.code,{children:"false"})," sur la pile."]})}),"\n",(0,i.jsx)(d,{code:"ChannelPop",args:"{channel_name: String}",children:(0,i.jsxs)(n.p,{children:["Retire le message du canal ",(0,i.jsx)(n.code,{children:"channel_name"})," (sans l'ajouter sur la pile)."]})}),"\n",(0,i.jsx)(d,{code:"WaitStart",args:"{dependencies: WaitDependency, start_atomic: bool}",children:(0,i.jsxs)(n.p,{children:["D\xe9marre une attente sur une conditions utilisant les d\xe9pendances donn\xe9es. Si ",(0,i.jsx)(n.code,{children:"start_atomic"})," est vrai, d\xe9marre une section atomique. Les d\xe9pendances sont des variables globales ou des canaux dont la valeur est utilis\xe9e dans la condition. Cette instruction ne modifie pas l'\xe9tat de la machine virtuelle, elle est utilis\xe9e uniquement pour indiqu\xe9 l'entr\xe9e dans une zone d'attente. De plus un processus en attente attendra obligatoirement sur cette instruction. Cependant, ce n'est pas cette instruction seule qui permet de d\xe9termin\xe9 si le processus est en attente. L'attente est d\xe9termin\xe9e par la l'ex\xe9cution de l'instruction ",(0,i.jsx)(n.code,{children:"Wait"})," qui doit renvoyer le processus en attente sur l'instruction ",(0,i.jsx)(n.code,{children:"WaitStart"}),"."]})}),"\n",(0,i.jsx)(d,{code:"Wait",args:"{jump: i64, unstack_len: usize}",children:(0,i.jsxs)(n.p,{children:["Si le sommet de la pile est ",(0,i.jsx)(n.code,{children:"false"}),", saute \xe0 l'instruction ",(0,i.jsx)(n.code,{children:"jump"})," (donn\xe9 en position relativement \xe0 l'instruction suivante), sinon passe \xe0 l'instruction suivante.\nDans tous les cas ",(0,i.jsx)(n.code,{children:"unstack_len"})," valeurs sont d\xe9pil\xe9es."]})}),"\n",(0,i.jsx)(d,{code:"Send",args:"{channel_name: String, unstack_len: usize}",children:(0,i.jsxs)(n.p,{children:["Envoie la valeur au sommet de la pile dans le canal ",(0,i.jsx)(n.code,{children:"channel_name"}),", puis retire ",(0,i.jsx)(n.code,{children:"unstack_len"})," valeurs de la pile."]})}),"\n",(0,i.jsx)(d,{code:"Connect",args:"{sender_pid: Option<usize>, receiver_pid: Option<usize>, sender_channel: String, receiver_channel: String}",children:(0,i.jsxs)(n.p,{children:["Connecte les canaux ",(0,i.jsx)(n.code,{children:"sender_channel"})," et ",(0,i.jsx)(n.code,{children:"receiver_channel"})," entre les processus ",(0,i.jsx)(n.code,{children:"sender_pid"})," et ",(0,i.jsx)(n.code,{children:"receiver_pid"}),". Si ",(0,i.jsx)(n.code,{children:"sender_pid"})," ou ",(0,i.jsx)(n.code,{children:"receiver_pid"})," est ",(0,i.jsx)(n.code,{children:"None"}),", alors le processus courant est utilis\xe9.\nLors de la connexion, si le processus envoyeur \xe0 d\xe9j\xe0 effectu\xe9 un ",(0,i.jsx)(n.code,{children:"Send"})," sur le canal, le message est directement d\xe9pos\xe9 dans le channel du processus receveur."]})}),"\n",(0,i.jsx)(d,{code:"AtomicStart",args:"",children:(0,i.jsxs)(n.p,{children:["D\xe9marre une section atomique. Les sections atomiques sont des zones de code o\xf9 les processus ne peuvent pas \xeatre interrompus. Cela permet d'\xe9viter les probl\xe8mes de concurrence. Une section atomique est termin\xe9e par une instruction ",(0,i.jsx)(n.code,{children:"AtomicEnd"}),". Elle ne doit pas contenir d'instructions d'attente, sauf si c'est la premi\xe8re instruction."]})}),"\n",(0,i.jsx)(d,{code:"AtomicEnd",args:"",children:(0,i.jsx)(n.p,{children:"Termine une section atomique."})}),"\n",(0,i.jsx)(d,{code:"EndProgram",args:"",children:(0,i.jsx)(n.p,{children:"Termine le processus courant."})}),"\n",(0,i.jsx)(d,{code:"Exit",args:"",children:(0,i.jsx)(n.p,{children:"Termine tous les processus."})}),"\n",(0,i.jsxs)(n.p,{children:["L'enum ",(0,i.jsx)(n.code,{children:"InstructionType"})," est d\xe9fini dans le fichier ",(0,i.jsx)(n.a,{href:"https://github.com/althread/althread/blob/main/interpreter/src/vm/instruction.rs#L12",children:"/vm/src/instruction.rs"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5710:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(758);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);