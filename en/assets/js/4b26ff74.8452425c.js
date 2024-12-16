"use strict";(self.webpackChunkalthread=self.webpackChunkalthread||[]).push([[972],{4471:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var s=i(6070),r=i(5710);const t={sidebar_position:3},l="Althread Syntax",o={id:"guide/getting-started/syntaxe",title:"Althread Syntax",description:"Althread's syntax is designed to be as intuitive as possible. It is inspired by C and Rust, which allows for quick adoption and focuses on concepts rather than syntax.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/getting-started/syntaxe.md",sourceDirName:"guide/getting-started",slug:"/guide/getting-started/syntaxe",permalink:"/en/docs/guide/getting-started/syntaxe",draft:!1,unlisted:!1,editUrl:"https://github.com/althread/althread/tree/main/doc/docs/guide/getting-started/syntaxe.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guideSidebar",previous:{title:"Installation",permalink:"/en/docs/guide/getting-started/installation"},next:{title:"hello-world",permalink:"/en/docs/guide/getting-started/hello-world"}},c={},a=[{value:"Project Structure",id:"project-structure",level:2},{value:"Data Types",id:"data-types",level:2},{value:"Static Typing",id:"static-typing",level:3},{value:"Implicit Typing",id:"implicit-typing",level:3},{value:"Variable Naming Convention",id:"variable-naming-convention",level:2},{value:"Control Structures and Variable Scope",id:"control-structures-and-variable-scope",level:2},{value:"Blocking Instructions",id:"blocking-instructions",level:2},{value:"Atomic Expression",id:"atomic-expression",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"althread-syntax",children:"Althread Syntax"})}),"\n",(0,s.jsx)(n.p,{children:"Althread's syntax is designed to be as intuitive as possible. It is inspired by C and Rust, which allows for quick adoption and focuses on concepts rather than syntax."}),"\n",(0,s.jsx)(n.p,{children:"Some important points to remember:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Each line ends with a semicolon ",(0,s.jsx)(n.code,{children:";"})," and code blocks are delimited by curly braces ",(0,s.jsx)(n.code,{children:"{}"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Code blocks are mandatory after control structures (",(0,s.jsx)(n.code,{children:"if"}),", ",(0,s.jsx)(n.code,{children:"while"}),", etc...). However, parentheses are not required."]}),"\n",(0,s.jsxs)(n.li,{children:["Variables are declared with the ",(0,s.jsx)(n.code,{children:"let"})," or ",(0,s.jsx)(n.code,{children:"const"})," keyword followed by the variable name, type, and optional value."]}),"\n",(0,s.jsxs)(n.li,{children:["Comments are delimited by ",(0,s.jsx)(n.code,{children:"//"})," for single-line comments and ",(0,s.jsx)(n.code,{children:"/* */"})," for multi-line comments."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-althread",children:'main {\n    let x: int = 5;\n    const y = 3.4; // y is of type float\n\n    /* \n    The print function displays\n    all arguments passed as parameters\n    */\n    print("Hello world! y=", y);\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,s.jsx)(n.p,{children:"A project is structured in several blocks, which can correspond to 3 types of elements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Global variable declaration"}),": ",(0,s.jsx)(n.code,{children:"shared { ... }"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Condition verification"}),": ",(0,s.jsx)(n.code,{children:"always { ... }"}),", ",(0,s.jsx)(n.code,{children:"never { ... }"})," or ",(0,s.jsx)(n.code,{children:"eventually { ... }"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Program definition"}),": ",(0,s.jsx)(n.code,{children:"program A() { ... }"})," or ",(0,s.jsx)(n.code,{children:"main { ... }"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The main block is the main program. It is executed first and is used to run other programs."})}),"\n",(0,s.jsx)(n.h2,{id:"data-types",children:"Data Types"}),"\n",(0,s.jsx)(n.p,{children:"Variables in Althread can have the following types:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Void"}),": ",(0,s.jsx)(n.code,{children:"void"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Boolean"}),": ",(0,s.jsx)(n.code,{children:"bool"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Integer"}),": ",(0,s.jsx)(n.code,{children:"int"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Float"}),": ",(0,s.jsx)(n.code,{children:"float"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"String"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["Process running program ",(0,s.jsx)(n.code,{children:"A"})]}),": ",(0,s.jsx)(n.code,{children:"proc(A)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Array of elements of type TYPE"}),": ",(0,s.jsx)(n.code,{children:"list(TYPE)"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"static-typing",children:"Static Typing"}),"\n",(0,s.jsx)(n.p,{children:"Althread uses static typing, which means the type of a variable is determined when it is declared and cannot be modified afterwards. Thus, the following program will cause an error:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-althread",children:"let x: int = 5;\nx = 3.4; // Error: x is of type int and cannot take a float value.\n"})}),"\n",(0,s.jsx)(n.h3,{id:"implicit-typing",children:"Implicit Typing"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-althread",children:"let a: int = 5;   // x is of type int and takes the value 5.\nlet b: bool;      // x is of type bool and takes the default value false.\nlet c = 3.4;      // x is of type float and takes the value 3.4.\nlet d;            // x is of type void and takes the default value `null`.\n"})}),"\n",(0,s.jsx)(n.h2,{id:"variable-naming-convention",children:"Variable Naming Convention"}),"\n",(0,s.jsx)(n.p,{children:"In Althread, local variables to a program must start with a lowercase letter, and global variables with an uppercase letter."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-althread",children:"shared {\n    let G = 5; // G is a global variable\n    // This will error\n    let g = 5; // error\n}\nprogram A() {\n    let l = 5; // l is a local variable\n    // This will error\n    let L = 5; // error\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"control-structures-and-variable-scope",children:"Control Structures and Variable Scope"}),"\n",(0,s.jsx)(n.p,{children:"Althread offers several control structures to manage a program's execution flow:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Condition"}),": ",(0,s.jsx)(n.code,{children:"if condition { ... } else { ... }"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"While Loop"}),": ",(0,s.jsx)(n.code,{children:"while condition { ... }"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"For Loop"}),": ",(0,s.jsx)(n.code,{children:"for i in 0..10 { ... }"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Infinite Loop"}),": ",(0,s.jsx)(n.code,{children:"loop { ... }"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scope"}),": ",(0,s.jsx)(n.code,{children:"{ ... }"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Loops can be interrupted using the ",(0,s.jsx)(n.code,{children:"break"})," or ",(0,s.jsx)(n.code,{children:"continue"})," instructions, which allow exiting the loop or moving to the next iteration respectively."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Variables declared in a control structure are only visible inside that structure. This helps limit variable scope and avoid name conflicts."})}),"\n",(0,s.jsx)(n.h2,{id:"blocking-instructions",children:"Blocking Instructions"}),"\n",(0,s.jsxs)(n.p,{children:["In Althread, the only blocking instruction is waiting for a condition with the ",(0,s.jsx)(n.code,{children:"wait"})," instruction. This instruction allows pausing a process's execution until the condition is verified."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-althread",children:'program A() {\n    wait X == 5;\n    print("x is equal to 5");\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The condition can be a boolean expression as in the previous example, but it can also be receiving a message on a channel with the ",(0,s.jsx)(n.code,{children:"receive"})," instruction, which can be seen as a boolean expression that is ",(0,s.jsx)(n.code,{children:"true"})," if a message is received and ",(0,s.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-althread",children:'program A() {\n    wait receive channel_name(x);\n\n    print("message received");\n    // x is not in scope\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the previous example, ",(0,s.jsx)(n.code,{children:"x"})," is not in scope after the ",(0,s.jsx)(n.code,{children:"wait"})," instruction because the ",(0,s.jsx)(n.code,{children:"receive"})," instruction is optionally followed by an instruction block, allowing the use of received variables."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-althread",children:'program A() {\n    wait receive channel_name(x) => {\n        print("message received, x=", x);\n        // x is in scope\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"wait"})," instruction can also be used to wait for a condition among multiple conditions by following it with the ",(0,s.jsx)(n.code,{children:"first"})," or ",(0,s.jsx)(n.code,{children:"all"})," instruction."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-althread",children:'program A() {\n    wait first {\n        receive channel_name1(x) => {\n            print("message received, x=", x);\n        }\n        receive channel_name2(y) => {\n            print("message received, y=", y);\n        }\n        X == 5 => {\n            print("x is equal to 5");\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"In this construction, a boolean condition can also be followed by an instruction block to execute instructions if the condition is verified."}),"\n",(0,s.jsx)(n.h2,{id:"atomic-expression",children:"Atomic Expression"}),"\n",(0,s.jsx)(n.p,{children:"An atomic expression is the smallest unit of execution. In Althread, there are 6 types of atomic expressions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Declaration"}),": ",(0,s.jsx)(n.code,{children:"let x = 5;"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Assignment"}),": ",(0,s.jsx)(n.code,{children:"x = 5;"}),", ",(0,s.jsx)(n.code,{children:"x++;"}),", ",(0,s.jsx)(n.code,{children:"x += 1"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Arithmetic Operation"}),": ",(0,s.jsx)(n.code,{children:"x + y;"}),", ",(0,s.jsx)(n.code,{children:"x - y;"}),", ",(0,s.jsx)(n.code,{children:"x * y;"}),", ",(0,s.jsx)(n.code,{children:"x / y;"}),", ",(0,s.jsx)(n.code,{children:"x % y;"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Atomic Scope"}),": ",(0,s.jsx)(n.code,{children:"atomic { ... }"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Function Call"}),": ",(0,s.jsx)(n.code,{children:'print("Hello world");'}),", ",(0,s.jsx)(n.code,{children:"wait x == 5;"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Process Execution"}),": ",(0,s.jsx)(n.code,{children:"run A();"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Atomic expressions cannot be interrupted by another process. This means that while a process is executing an atomic expression, no other process can take control."})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5710:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(758);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);