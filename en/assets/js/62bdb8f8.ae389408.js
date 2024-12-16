"use strict";(self.webpackChunkalthread=self.webpackChunkalthread||[]).push([[433],{9291:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});var o=n(6070),s=n(5710);const a={sidebar_position:1},i="Using Programs",t={id:"guide/program/simple-process",title:"Using Programs",description:"We will now see how to create and execute programs in Althread. A program is simply an algorithm that, when executed, becomes a process, an independent execution unit that can run in parallel with other processes. Processes can communicate with each other using shared variables or channels.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/program/simple-process.md",sourceDirName:"guide/program",slug:"/guide/program/simple-process",permalink:"/en/docs/guide/program/simple-process",draft:!1,unlisted:!1,editUrl:"https://github.com/althread/althread/tree/main/doc/docs/guide/program/simple-process.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guideSidebar",previous:{title:"hello-world",permalink:"/en/docs/guide/getting-started/hello-world"},next:{title:"Arguments",permalink:"/en/docs/guide/program/arguments"}},c={},l=[{value:"Program Declaration",id:"program-declaration",level:2},{value:"Program Execution",id:"program-execution",level:2},{value:"What Happens When a Program is Executed?",id:"what-happens-when-a-program-is-executed",level:3},{value:"Complete Example",id:"complete-example",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"using-programs",children:"Using Programs"})}),"\n",(0,o.jsx)(r.p,{children:"We will now see how to create and execute programs in Althread. A program is simply an algorithm that, when executed, becomes a process, an independent execution unit that can run in parallel with other processes. Processes can communicate with each other using shared variables or channels."}),"\n",(0,o.jsx)(r.h2,{id:"program-declaration",children:"Program Declaration"}),"\n",(0,o.jsxs)(r.p,{children:["To declare a program, you must use the ",(0,o.jsx)(r.code,{children:"program"})," keyword. Here's an example of a program declaration:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-althread",children:"program MyProgram() {\n    // program code\n}\n"})}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsx)(r.p,{children:"You can declare as many programs as you want. All declared programs are stored in a list."})}),"\n",(0,o.jsx)(r.admonition,{type:"warning",children:(0,o.jsx)(r.p,{children:"It is not possible to have two programs with the same name."})}),"\n",(0,o.jsx)(r.h2,{id:"program-execution",children:"Program Execution"}),"\n",(0,o.jsxs)(r.p,{children:["To execute a program, you must use the ",(0,o.jsx)(r.code,{children:"run"})," function. Here's an example of program execution:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-althread",children:"main {\n    run MyProgram();\n}\n"})}),"\n",(0,o.jsxs)(r.admonition,{type:"note",children:[(0,o.jsxs)(r.p,{children:["A program can be executed multiple times in parallel, creating several independent processes. For example, to execute the ",(0,o.jsx)(r.code,{children:"MyProgram"})," program twice in parallel, you can write:"]}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-althread",children:"main {\n    run MyProgram();\n    run MyProgram();\n}\n"})})]}),"\n",(0,o.jsx)(r.h3,{id:"what-happens-when-a-program-is-executed",children:"What Happens When a Program is Executed?"}),"\n",(0,o.jsxs)(r.p,{children:["Once a program is executed, it becomes a process. Process execution occurs by iteration. Each iteration corresponds to the execution of an ",(0,o.jsx)(r.a,{href:"/docs/guide/getting-started/syntaxe#expression-atomique",children:"atomic instruction"})," of a randomly chosen process among the currently running processes. When a process is executed, it can perform operations such as variable assignment, function calls, reading or writing to channels, etc..."]}),"\n",(0,o.jsx)(r.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,o.jsx)(r.p,{children:"Here's a complete example of an Althread system that executes two processes in parallel, one running the Prog1 program and the other running the main program:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-althread",children:'program Prog1() {\n    print("program 1");\n}\nmain {\n    run Prog1();\n    print("main");\n}\n'})}),"\n",(0,o.jsxs)(r.p,{children:["In this example, the ",(0,o.jsx)(r.code,{children:"Prog1"})," program is executed in parallel with the main program. Here's how this program executes:"]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["The ",(0,o.jsx)(r.code,{children:"Prog1"})," program and the main program are declared and stored in the list of programs."]}),"\n",(0,o.jsx)(r.li,{children:"The main program is started and its process is added to the list of running processes."}),"\n",(0,o.jsx)(r.li,{children:"A process is randomly drawn from the running processes. Here, since there is only the main process, it is the one executed."}),"\n",(0,o.jsxs)(r.li,{children:["The main program executes the ",(0,o.jsx)(r.code,{children:"run Prog1();"})," instruction, which adds a process running the ",(0,o.jsx)(r.code,{children:"Prog1"})," program to the list of running processes."]}),"\n",(0,o.jsxs)(r.li,{children:["A process is randomly drawn from the running processes. Here, the main process and the process running ",(0,o.jsx)(r.code,{children:"Prog1"})," are running, so one of the two is randomly executed (either the ",(0,o.jsx)(r.code,{children:'print("main");'})," instruction or the ",(0,o.jsx)(r.code,{children:'print("program 1");'})," instruction)."]}),"\n",(0,o.jsx)(r.li,{children:"When a process has finished its execution, it is removed from the list of running processes."}),"\n",(0,o.jsx)(r.li,{children:"When all processes have finished their execution, the system stops."}),"\n"]}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsx)(r.p,{children:"There is no priority regarding the order of program declaration: all declared programs are stored in the program list before the main program execution. However, we will see that type checking of communication channels is performed in the order of program declarations. Thus, channels should only be used when their types are known, therefore after creating them (although in practice the order in which this occurs during execution is arbitrary)."})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},5710:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>t});var o=n(758);const s={},a=o.createContext(s);function i(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);