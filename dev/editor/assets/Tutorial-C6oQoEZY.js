import{u as nt,a as st,c as U,l as Ee,o as rt,b as Q,d as it,e as Ie,t as H,i as V,f as ne,L as at,F as ot,g as ce,h as X,j as lt,m as ue,k as he,s as ct,n as ut,p as ht,w as pt,q as Le,r as dt}from"./index-ChA8ntwn.js";import"./codemirror-CxIvJr0B.js";function ye(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var J=ye();function Ge(s){J=s}var ae={exec:()=>null};function g(s,e=""){let t=typeof s=="string"?s:s.source;const r={replace:(n,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(T.caret,"$1"),t=t.replace(n,a),r},getRegex:()=>new RegExp(t,e)};return r}var T={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:s=>new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}#`),htmlBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}<(?:[a-z].*>|!--)`,"i")},ft=/^(?:[ \t]*(?:\n|$))+/,gt=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,mt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,oe=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,bt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Se=/(?:[*+-]|\d{1,9}[.)])/,Oe=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Fe=g(Oe).replace(/bull/g,Se).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),kt=g(Oe).replace(/bull/g,Se).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),$e=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,xt=/^[^\n]+/,Te=/(?!\s*\])(?:\\.|[^\[\]\\])+/,wt=g(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Te).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),vt=g(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Se).getRegex(),be="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Re=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,yt=g("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Re).replace("tag",be).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ve=g($e).replace("hr",oe).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",be).getRegex(),St=g(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ve).getRegex(),_e={blockquote:St,code:gt,def:wt,fences:mt,heading:bt,hr:oe,html:yt,lheading:Fe,list:vt,newline:ft,paragraph:Ve,table:ae,text:xt},ze=g("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",oe).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",be).getRegex(),$t={..._e,lheading:kt,table:ze,paragraph:g($e).replace("hr",oe).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ze).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",be).getRegex()},Tt={..._e,html:g(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Re).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ae,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:g($e).replace("hr",oe).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Fe).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Rt=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,_t=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,He=/^( {2,}|\\)\n(?!\s*$)/,Ct=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ke=/[\p{P}\p{S}]/u,Ce=/[\s\p{P}\p{S}]/u,We=/[^\s\p{P}\p{S}]/u,At=g(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ce).getRegex(),Ye=/(?!~)[\p{P}\p{S}]/u,Pt=/(?!~)[\s\p{P}\p{S}]/u,Et=/(?:[^\s\p{P}\p{S}]|~)/u,It=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,je=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Lt=g(je,"u").replace(/punct/g,ke).getRegex(),zt=g(je,"u").replace(/punct/g,Ye).getRegex(),Ze="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Nt=g(Ze,"gu").replace(/notPunctSpace/g,We).replace(/punctSpace/g,Ce).replace(/punct/g,ke).getRegex(),Bt=g(Ze,"gu").replace(/notPunctSpace/g,Et).replace(/punctSpace/g,Pt).replace(/punct/g,Ye).getRegex(),Mt=g("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,We).replace(/punctSpace/g,Ce).replace(/punct/g,ke).getRegex(),Dt=g(/\\(punct)/,"gu").replace(/punct/g,ke).getRegex(),qt=g(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Gt=g(Re).replace("(?:-->|$)","-->").getRegex(),Ot=g("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Gt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),fe=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ft=g(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",fe).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ue=g(/^!?\[(label)\]\[(ref)\]/).replace("label",fe).replace("ref",Te).getRegex(),Qe=g(/^!?\[(ref)\](?:\[\])?/).replace("ref",Te).getRegex(),Vt=g("reflink|nolink(?!\\()","g").replace("reflink",Ue).replace("nolink",Qe).getRegex(),Ae={_backpedal:ae,anyPunctuation:Dt,autolink:qt,blockSkip:It,br:He,code:_t,del:ae,emStrongLDelim:Lt,emStrongRDelimAst:Nt,emStrongRDelimUnd:Mt,escape:Rt,link:Ft,nolink:Qe,punctuation:At,reflink:Ue,reflinkSearch:Vt,tag:Ot,text:Ct,url:ae},Ht={...Ae,link:g(/^!?\[(label)\]\((.*?)\)/).replace("label",fe).getRegex(),reflink:g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",fe).getRegex()},xe={...Ae,emStrongRDelimAst:Bt,emStrongLDelim:zt,url:g(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Wt={...xe,br:g(He).replace("{2,}","*").getRegex(),text:g(xe.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},pe={normal:_e,gfm:$t,pedantic:Tt},re={normal:Ae,gfm:xe,breaks:Wt,pedantic:Ht},Yt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ne=s=>Yt[s];function N(s,e){if(e){if(T.escapeTest.test(s))return s.replace(T.escapeReplace,Ne)}else if(T.escapeTestNoEncode.test(s))return s.replace(T.escapeReplaceNoEncode,Ne);return s}function Be(s){try{s=encodeURI(s).replace(T.percentDecode,"%")}catch{return null}return s}function Me(s,e){const t=s.replace(T.findPipe,(i,a,o)=>{let c=!1,l=a;for(;--l>=0&&o[l]==="\\";)c=!c;return c?"|":" |"}),r=t.split(T.splitPipe);let n=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(T.slashPipe,"|");return r}function ie(s,e,t){const r=s.length;if(r===0)return"";let n=0;for(;n<r&&s.charAt(r-n-1)===e;)n++;return s.slice(0,r-n)}function jt(s,e){if(s.indexOf(e[1])===-1)return-1;let t=0;for(let r=0;r<s.length;r++)if(s[r]==="\\")r++;else if(s[r]===e[0])t++;else if(s[r]===e[1]&&(t--,t<0))return r;return t>0?-2:-1}function De(s,e,t,r,n){const i=e.href,a=e.title||null,o=s[1].replace(n.other.outputLinkReplace,"$1");r.state.inLink=!0;const c={type:s[0].charAt(0)==="!"?"image":"link",raw:t,href:i,title:a,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,c}function Zt(s,e,t){const r=s.match(t.other.indentCodeCompensation);if(r===null)return e;const n=r[1];return e.split(`
`).map(i=>{const a=i.match(t.other.beginningSpace);if(a===null)return i;const[o]=a;return o.length>=n.length?i.slice(n.length):i}).join(`
`)}var ge=class{options;rules;lexer;constructor(s){this.options=s||J}space(s){const e=this.rules.block.newline.exec(s);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(s){const e=this.rules.block.code.exec(s);if(e){const t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:ie(t,`
`)}}}fences(s){const e=this.rules.block.fences.exec(s);if(e){const t=e[0],r=Zt(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(s){const e=this.rules.block.heading.exec(s);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){const r=ie(t,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(t=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(s){const e=this.rules.block.hr.exec(s);if(e)return{type:"hr",raw:ie(e[0],`
`)}}blockquote(s){const e=this.rules.block.blockquote.exec(s);if(e){let t=ie(e[0],`
`).split(`
`),r="",n="";const i=[];for(;t.length>0;){let a=!1;const o=[];let c;for(c=0;c<t.length;c++)if(this.rules.other.blockquoteStart.test(t[c]))o.push(t[c]),a=!0;else if(!a)o.push(t[c]);else break;t=t.slice(c);const l=o.join(`
`),u=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${l}`:l,n=n?`${n}
${u}`:u;const f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,i,!0),this.lexer.state.top=f,t.length===0)break;const d=i.at(-1);if(d?.type==="code")break;if(d?.type==="blockquote"){const x=d,p=x.raw+`
`+t.join(`
`),v=this.blockquote(p);i[i.length-1]=v,r=r.substring(0,r.length-x.raw.length)+v.raw,n=n.substring(0,n.length-x.text.length)+v.text;break}else if(d?.type==="list"){const x=d,p=x.raw+`
`+t.join(`
`),v=this.list(p);i[i.length-1]=v,r=r.substring(0,r.length-d.raw.length)+v.raw,n=n.substring(0,n.length-x.raw.length)+v.raw,t=p.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:n}}}list(s){let e=this.rules.block.list.exec(s);if(e){let t=e[1].trim();const r=t.length>1,n={type:"list",raw:"",ordered:r,start:r?+t.slice(0,-1):"",loose:!1,items:[]};t=r?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=r?t:"[*+-]");const i=this.rules.other.listItemRegex(t);let a=!1;for(;s;){let c=!1,l="",u="";if(!(e=i.exec(s))||this.rules.block.hr.test(s))break;l=e[0],s=s.substring(l.length);let f=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,E=>" ".repeat(3*E.length)),d=s.split(`
`,1)[0],x=!f.trim(),p=0;if(this.options.pedantic?(p=2,u=f.trimStart()):x?p=e[1].length+1:(p=e[2].search(this.rules.other.nonSpaceChar),p=p>4?1:p,u=f.slice(p),p+=e[1].length),x&&this.rules.other.blankLine.test(d)&&(l+=d+`
`,s=s.substring(d.length+1),c=!0),!c){const E=this.rules.other.nextBulletRegex(p),W=this.rules.other.hrRegex(p),C=this.rules.other.fencesBeginRegex(p),I=this.rules.other.headingBeginRegex(p),R=this.rules.other.htmlBeginRegex(p);for(;s;){const B=s.split(`
`,1)[0];let $;if(d=B,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),$=d):$=d.replace(this.rules.other.tabCharGlobal,"    "),C.test(d)||I.test(d)||R.test(d)||E.test(d)||W.test(d))break;if($.search(this.rules.other.nonSpaceChar)>=p||!d.trim())u+=`
`+$.slice(p);else{if(x||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||C.test(f)||I.test(f)||W.test(f))break;u+=`
`+d}!x&&!d.trim()&&(x=!0),l+=B+`
`,s=s.substring(B.length+1),f=$.slice(p)}}n.loose||(a?n.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(a=!0));let v=null,L;this.options.gfm&&(v=this.rules.other.listIsTask.exec(u),v&&(L=v[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),n.items.push({type:"list_item",raw:l,task:!!v,checked:L,loose:!1,text:u,tokens:[]}),n.raw+=l}const o=n.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let c=0;c<n.items.length;c++)if(this.lexer.state.top=!1,n.items[c].tokens=this.lexer.blockTokens(n.items[c].text,[]),!n.loose){const l=n.items[c].tokens.filter(f=>f.type==="space"),u=l.length>0&&l.some(f=>this.rules.other.anyLine.test(f.raw));n.loose=u}if(n.loose)for(let c=0;c<n.items.length;c++)n.items[c].loose=!0;return n}}html(s){const e=this.rules.block.html.exec(s);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(s){const e=this.rules.block.def.exec(s);if(e){const t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:r,title:n}}}table(s){const e=this.rules.block.table.exec(s);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const t=Me(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===r.length){for(const a of r)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<t.length;a++)i.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:i.align[a]});for(const a of n)i.rows.push(Me(a,i.header.length).map((o,c)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:i.align[c]})));return i}}lheading(s){const e=this.rules.block.lheading.exec(s);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(s){const e=this.rules.block.paragraph.exec(s);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(s){const e=this.rules.block.text.exec(s);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(s){const e=this.rules.inline.escape.exec(s);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(s){const e=this.rules.inline.tag.exec(s);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(s){const e=this.rules.inline.link.exec(s);if(e){const t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;const i=ie(t.slice(0,-1),"\\");if((t.length-i.length)%2===0)return}else{const i=jt(e[2],"()");if(i===-2)return;if(i>-1){const o=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let r=e[2],n="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],n=i[3])}else n=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r=r.slice(1):r=r.slice(1,-1)),De(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(s,e){let t;if((t=this.rules.inline.reflink.exec(s))||(t=this.rules.inline.nolink.exec(s))){const r=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=e[r.toLowerCase()];if(!n){const i=t[0].charAt(0);return{type:"text",raw:i,text:i}}return De(t,n,t[0],this.lexer,this.rules)}}emStrong(s,e,t=""){let r=this.rules.inline.emStrongLDelim.exec(s);if(!r||r[3]&&t.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const i=[...r[0]].length-1;let a,o,c=i,l=0;const u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*s.length+i);(r=u.exec(e))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){c+=o;continue}else if((r[5]||r[6])&&i%3&&!((i+o)%3)){l+=o;continue}if(c-=o,c>0)continue;o=Math.min(o,o+c+l);const f=[...r[0]][0].length,d=s.slice(0,i+r.index+f+o);if(Math.min(i,o)%2){const p=d.slice(1,-1);return{type:"em",raw:d,text:p,tokens:this.lexer.inlineTokens(p)}}const x=d.slice(2,-2);return{type:"strong",raw:d,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(s){const e=this.rules.inline.code.exec(s);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(t),n=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&n&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(s){const e=this.rules.inline.br.exec(s);if(e)return{type:"br",raw:e[0]}}del(s){const e=this.rules.inline.del.exec(s);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(s){const e=this.rules.inline.autolink.exec(s);if(e){let t,r;return e[2]==="@"?(t=e[1],r="mailto:"+t):(t=e[1],r=t),{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(s){let e;if(e=this.rules.inline.url.exec(s)){let t,r;if(e[2]==="@")t=e[0],r="mailto:"+t;else{let n;do n=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(n!==e[0]);t=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(s){const e=this.rules.inline.text.exec(s);if(e){const t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},q=class we{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||J,this.options.tokenizer=this.options.tokenizer||new ge,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={other:T,block:pe.normal,inline:re.normal};this.options.pedantic?(t.block=pe.pedantic,t.inline=re.pedantic):this.options.gfm&&(t.block=pe.gfm,this.options.breaks?t.inline=re.breaks:t.inline=re.gfm),this.tokenizer.rules=t}static get rules(){return{block:pe,inline:re}}static lex(e,t){return new we(t).lex(e)}static lexInline(e,t){return new we(t).inlineTokens(e)}lex(e){e=e.replace(T.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],r=!1){for(this.options.pedantic&&(e=e.replace(T.tabCharGlobal,"    ").replace(T.spaceLine,""));e;){let n;if(this.options.extensions?.block?.some(a=>(n=a.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))continue;if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length);const a=t.at(-1);n.raw.length===1&&a!==void 0?a.raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length);const a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=`
`+n.raw,a.text+=`
`+n.text,this.inlineQueue.at(-1).src=a.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length);const a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=`
`+n.raw,a.text+=`
`+n.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}let i=e;if(this.options.extensions?.startBlock){let a=1/0;const o=e.slice(1);let c;this.options.extensions.startBlock.forEach(l=>{c=l.call({lexer:this},o),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(i=e.substring(0,a+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i))){const a=t.at(-1);r&&a?.type==="paragraph"?(a.raw+=`
`+n.raw,a.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(n),r=i.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length);const a=t.at(-1);a?.type==="text"?(a.raw+=`
`+n.raw,a.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(n);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r=e,n=null;if(this.tokens.links){const o=Object.keys(this.tokens.links);if(o.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)o.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,n.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(n=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,a="";for(;e;){i||(a=""),i=!1;let o;if(this.options.extensions?.inline?.some(l=>(o=l.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);const l=t.at(-1);o.type==="text"&&l?.type==="text"?(l.raw+=o.raw,l.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,r,a)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let c=e;if(this.options.extensions?.startInline){let l=1/0;const u=e.slice(1);let f;this.options.extensions.startInline.forEach(d=>{f=d.call({lexer:this},u),typeof f=="number"&&f>=0&&(l=Math.min(l,f))}),l<1/0&&l>=0&&(c=e.substring(0,l+1))}if(o=this.tokenizer.inlineText(c)){e=e.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(a=o.raw.slice(-1)),i=!0;const l=t.at(-1);l?.type==="text"?(l.raw+=o.raw,l.text+=o.text):t.push(o);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return t}},me=class{options;parser;constructor(s){this.options=s||J}space(s){return""}code({text:s,lang:e,escaped:t}){const r=(e||"").match(T.notSpaceStart)?.[0],n=s.replace(T.endingNewline,"")+`
`;return r?'<pre><code class="language-'+N(r)+'">'+(t?n:N(n,!0))+`</code></pre>
`:"<pre><code>"+(t?n:N(n,!0))+`</code></pre>
`}blockquote({tokens:s}){return`<blockquote>
${this.parser.parse(s)}</blockquote>
`}html({text:s}){return s}heading({tokens:s,depth:e}){return`<h${e}>${this.parser.parseInline(s)}</h${e}>
`}hr(s){return`<hr>
`}list(s){const e=s.ordered,t=s.start;let r="";for(let a=0;a<s.items.length;a++){const o=s.items[a];r+=this.listitem(o)}const n=e?"ol":"ul",i=e&&t!==1?' start="'+t+'"':"";return"<"+n+i+`>
`+r+"</"+n+`>
`}listitem(s){let e="";if(s.task){const t=this.checkbox({checked:!!s.checked});s.loose?s.tokens[0]?.type==="paragraph"?(s.tokens[0].text=t+" "+s.tokens[0].text,s.tokens[0].tokens&&s.tokens[0].tokens.length>0&&s.tokens[0].tokens[0].type==="text"&&(s.tokens[0].tokens[0].text=t+" "+N(s.tokens[0].tokens[0].text),s.tokens[0].tokens[0].escaped=!0)):s.tokens.unshift({type:"text",raw:t+" ",text:t+" ",escaped:!0}):e+=t+" "}return e+=this.parser.parse(s.tokens,!!s.loose),`<li>${e}</li>
`}checkbox({checked:s}){return"<input "+(s?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:s}){return`<p>${this.parser.parseInline(s)}</p>
`}table(s){let e="",t="";for(let n=0;n<s.header.length;n++)t+=this.tablecell(s.header[n]);e+=this.tablerow({text:t});let r="";for(let n=0;n<s.rows.length;n++){const i=s.rows[n];t="";for(let a=0;a<i.length;a++)t+=this.tablecell(i[a]);r+=this.tablerow({text:t})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:s}){return`<tr>
${s}</tr>
`}tablecell(s){const e=this.parser.parseInline(s.tokens),t=s.header?"th":"td";return(s.align?`<${t} align="${s.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:s}){return`<strong>${this.parser.parseInline(s)}</strong>`}em({tokens:s}){return`<em>${this.parser.parseInline(s)}</em>`}codespan({text:s}){return`<code>${N(s,!0)}</code>`}br(s){return"<br>"}del({tokens:s}){return`<del>${this.parser.parseInline(s)}</del>`}link({href:s,title:e,tokens:t}){const r=this.parser.parseInline(t),n=Be(s);if(n===null)return r;s=n;let i='<a href="'+s+'"';return e&&(i+=' title="'+N(e)+'"'),i+=">"+r+"</a>",i}image({href:s,title:e,text:t,tokens:r}){r&&(t=this.parser.parseInline(r,this.parser.textRenderer));const n=Be(s);if(n===null)return N(t);s=n;let i=`<img src="${s}" alt="${t}"`;return e&&(i+=` title="${N(e)}"`),i+=">",i}text(s){return"tokens"in s&&s.tokens?this.parser.parseInline(s.tokens):"escaped"in s&&s.escaped?s.text:N(s.text)}},Pe=class{strong({text:s}){return s}em({text:s}){return s}codespan({text:s}){return s}del({text:s}){return s}html({text:s}){return s}text({text:s}){return s}link({text:s}){return""+s}image({text:s}){return""+s}br(){return""}},G=class ve{options;renderer;textRenderer;constructor(e){this.options=e||J,this.options.renderer=this.options.renderer||new me,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Pe}static parse(e,t){return new ve(t).parse(e)}static parseInline(e,t){return new ve(t).parseInline(e)}parse(e,t=!0){let r="";for(let n=0;n<e.length;n++){const i=e[n];if(this.options.extensions?.renderers?.[i.type]){const o=i,c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){r+=c||"";continue}}const a=i;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let o=a,c=this.renderer.text(o);for(;n+1<e.length&&e[n+1].type==="text";)o=e[++n],c+=`
`+this.renderer.text(o);t?r+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):r+=c;continue}default:{const o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}parseInline(e,t=this.renderer){let r="";for(let n=0;n<e.length;n++){const i=e[n];if(this.options.extensions?.renderers?.[i.type]){const o=this.options.extensions.renderers[i.type].call({parser:this},i);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=o||"";continue}}const a=i;switch(a.type){case"escape":{r+=t.text(a);break}case"html":{r+=t.html(a);break}case"link":{r+=t.link(a);break}case"image":{r+=t.image(a);break}case"strong":{r+=t.strong(a);break}case"em":{r+=t.em(a);break}case"codespan":{r+=t.codespan(a);break}case"br":{r+=t.br(a);break}case"del":{r+=t.del(a);break}case"text":{r+=t.text(a);break}default:{const o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}},de=class{options;block;constructor(s){this.options=s||J}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(s){return s}postprocess(s){return s}processAllTokens(s){return s}provideLexer(){return this.block?q.lex:q.lexInline}provideParser(){return this.block?G.parse:G.parseInline}},Ut=class{defaults=ye();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=G;Renderer=me;TextRenderer=Pe;Lexer=q;Tokenizer=ge;Hooks=de;constructor(...s){this.use(...s)}walkTokens(s,e){let t=[];for(const r of s)switch(t=t.concat(e.call(this,r)),r.type){case"table":{const n=r;for(const i of n.header)t=t.concat(this.walkTokens(i.tokens,e));for(const i of n.rows)for(const a of i)t=t.concat(this.walkTokens(a.tokens,e));break}case"list":{const n=r;t=t.concat(this.walkTokens(n.items,e));break}default:{const n=r;this.defaults.extensions?.childTokens?.[n.type]?this.defaults.extensions.childTokens[n.type].forEach(i=>{const a=n[i].flat(1/0);t=t.concat(this.walkTokens(a,e))}):n.tokens&&(t=t.concat(this.walkTokens(n.tokens,e)))}}return t}use(...s){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return s.forEach(t=>{const r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){const i=e.renderers[n.name];i?e.renderers[n.name]=function(...a){let o=n.renderer.apply(this,a);return o===!1&&(o=i.apply(this,a)),o}:e.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=e[n.level];i?i.unshift(n.tokenizer):e[n.level]=[n.tokenizer],n.start&&(n.level==="block"?e.startBlock?e.startBlock.push(n.start):e.startBlock=[n.start]:n.level==="inline"&&(e.startInline?e.startInline.push(n.start):e.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(e.childTokens[n.name]=n.childTokens)}),r.extensions=e),t.renderer){const n=this.defaults.renderer||new me(this.defaults);for(const i in t.renderer){if(!(i in n))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const a=i,o=t.renderer[a],c=n[a];n[a]=(...l)=>{let u=o.apply(n,l);return u===!1&&(u=c.apply(n,l)),u||""}}r.renderer=n}if(t.tokenizer){const n=this.defaults.tokenizer||new ge(this.defaults);for(const i in t.tokenizer){if(!(i in n))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const a=i,o=t.tokenizer[a],c=n[a];n[a]=(...l)=>{let u=o.apply(n,l);return u===!1&&(u=c.apply(n,l)),u}}r.tokenizer=n}if(t.hooks){const n=this.defaults.hooks||new de;for(const i in t.hooks){if(!(i in n))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const a=i,o=t.hooks[a],c=n[a];de.passThroughHooks.has(i)?n[a]=l=>{if(this.defaults.async)return Promise.resolve(o.call(n,l)).then(f=>c.call(n,f));const u=o.call(n,l);return c.call(n,u)}:n[a]=(...l)=>{let u=o.apply(n,l);return u===!1&&(u=c.apply(n,l)),u}}r.hooks=n}if(t.walkTokens){const n=this.defaults.walkTokens,i=t.walkTokens;r.walkTokens=function(a){let o=[];return o.push(i.call(this,a)),n&&(o=o.concat(n.call(this,a))),o}}this.defaults={...this.defaults,...r}}),this}setOptions(s){return this.defaults={...this.defaults,...s},this}lexer(s,e){return q.lex(s,e??this.defaults)}parser(s,e){return G.parse(s,e??this.defaults)}parseMarkdown(s){return(t,r)=>{const n={...r},i={...this.defaults,...n},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&n.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=s);const o=i.hooks?i.hooks.provideLexer():s?q.lex:q.lexInline,c=i.hooks?i.hooks.provideParser():s?G.parse:G.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(t):t).then(l=>o(l,i)).then(l=>i.hooks?i.hooks.processAllTokens(l):l).then(l=>i.walkTokens?Promise.all(this.walkTokens(l,i.walkTokens)).then(()=>l):l).then(l=>c(l,i)).then(l=>i.hooks?i.hooks.postprocess(l):l).catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let l=o(t,i);i.hooks&&(l=i.hooks.processAllTokens(l)),i.walkTokens&&this.walkTokens(l,i.walkTokens);let u=c(l,i);return i.hooks&&(u=i.hooks.postprocess(u)),u}catch(l){return a(l)}}}onError(s,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,s){const r="<p>An error occurred:</p><pre>"+N(t.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(t);throw t}}},K=new Ut;function b(s,e){return K.parse(s,e)}b.options=b.setOptions=function(s){return K.setOptions(s),b.defaults=K.defaults,Ge(b.defaults),b};b.getDefaults=ye;b.defaults=J;b.use=function(...s){return K.use(...s),b.defaults=K.defaults,Ge(b.defaults),b};b.walkTokens=function(s,e){return K.walkTokens(s,e)};b.parseInline=K.parseInline;b.Parser=G;b.parser=G.parse;b.Renderer=me;b.TextRenderer=Pe;b.Lexer=q;b.lexer=q.lex;b.Tokenizer=ge;b.Hooks=de;b.parse=b;b.options;b.setOptions;b.use;b.walkTokens;b.parseInline;G.parse;q.lex;const Qt={name:"variables",displayName:"1. Variables",content:`
# 1. Variables in Althread

Althread supports two main types of variables: local and shared.

## Local Variables

Local variables are declared using the \`let\` or \`const\` keyword and **must start with a lowercase letter**. They are scoped to the block in which they are defined (e.g., within a function, loop, or program).

\`\`\`althread
main {
    let myLocalVariable = 10;
    const anotherOne = "hello";
    print(myLocalVariable);
}
\`\`\`

## Shared Variables

Shared variables are used for communication and synchronization between different programs. They must be declared within a \`shared\` block and **their names must start with an uppercase letter**. They are also declared using the \`let\` or \`const\` keyword.

\`\`\`althread
shared {
    let SHARED_COUNTER = 0;
    let IsDone = false;
}

main {
    // SHARED_COUNTER can be accessed here
    print(SHARED_COUNTER, IsDone);
}
\`\`\`

Try declaring one local variable \`count\` initialized to \`5\` and one shared variable \`STATUS_MESSAGE\` of type \`string\` initialized to \`"Pending"\`.
  `,defaultCode:`
// Declare a shared block with a STATUS_MESSAGE variable

main {
    // Declare a local variable 'count'
    // You can try to print them if you like
    // print(count);
    // print(STATUS_MESSAGE);
}`,validate:s=>{const e=/(let|const)\s+count\s*=\s*5;/.test(s),t=/shared\s*{[^}]*(let|const)\s+STATUS_MESSAGE\s*(:\s*string\s*)?=\s*"Pending";[^}]*}/s.test(s);if(e&&t)return{success:!0,message:"Excellent! Both local and shared variables declared correctly."};const r=[];return e||r.push("local variable 'count = 5'"),t||r.push(`shared variable 'STATUS_MESSAGE: string = "Pending"' inside a shared block`),{success:!1,message:`Looks like you're missing: ${r.join(", ")}.`}}},Xt={name:"ifElse",displayName:"2. Conditional Logic (if/else)",content:`
# 2. Conditional Logic: \`if\`, \`else if\`, \`else\`

Althread uses \`if\`, \`else if\`, and \`else\` statements for conditional execution, similar to many other programming languages.

The basic structure is:
\`\`\`althread
if condition1 {
    // code to execute if condition1 is true
} else if condition2 {
    // code to execute if condition1 is false and condition2 is true
} else {
    // code to execute if all preceding conditions are false
}
\`\`\`
Conditions are boolean expressions.

**Example:**
\`\`\`althread
main {
    let temperature = 25;
    if temperature > 30 {
        print("It's hot!");
    } else if temperature > 20 {
        print("It's warm.");
    } else {
        print("It's cool or cold.");
    }
}
\`\`\`

Try writing an \`if/else\` statement that checks a local variable \`x\`.
If \`x\` is greater than 10, print "x is greater than 10".
Otherwise, print "x is not greater than 10".
Initialize \`x\` to 7.
  `,defaultCode:`main {
    let x = 7;

    // Add your if/else statement here
}`,validate:s=>{const e=/let\s+x\s*=\s*7;/.test(s),t=/if\s+x\s*>\s*10\s*{/.test(s),r=/if\s+x\s*>\s*10\s*{[^}]*print\("x is greater than 10"\);[^}]*}/s.test(s),n=/}\s*else\s*{[^}]*print\("x is not greater than 10"\);[^}]*}/s.test(s);if(e&&r&&n)return{success:!0,message:"Great job with the if/else statement!"};const i=[];return e||i.push("initialize 'x' to 7"),t||i.push("if condition 'x > 10'"),r||i.push("print statement 'x is greater than 10' inside the if block"),n||i.push("else block with print statement 'x is not greater than 10'"),{success:!1,message:`Check the following: ${i.join(", ")}.`}}},Kt={name:"forLoops",displayName:"3. Loops (for)",content:"\n# 3. Loops: `for`\n\nAlthread provides `for` loops to iterate over a range of numbers. The syntax is:\n\n```althread\nfor variable_name in start_inclusive..end_exclusive {\n    // code to execute in each iteration\n    // variable_name will take values from start_inclusive to end_exclusive - 1\n}\n```\n\n**Example:**\n```althread\nmain {\n    for i in 0..5 { // i will be 0, 1, 2, 3, 4\n        print(i);\n    }\n}\n```\n\nTry writing a `for` loop that iterates from `1` up to (but not including) `6`, printing the square of each number.\nFor example, for `i = 2`, it should print `4`.\n  ",defaultCode:`main {
    // Add your for loop here
}`,validate:s=>{const e=/for\s+(\w+)\s+in\s+1\.\.6\s*{([\s\S]*?)}/s,t=s.match(e);if(t){const n=t[1],i=t[2],a=new RegExp(`let\\s+square\\s*=\\s*${n}\\s*\\*\\s*${n};|print\\(\\s*${n}\\s*\\*\\s*${n}\\s*\\)`,"s"),o=new RegExp(`print\\(square\\);|print\\(\\s*${n}\\s*\\*\\s*${n}\\s*\\)`,"s"),c=a.test(i),l=o.test(i);if(c&&l)return{success:!0,message:"For loop implemented correctly!"}}const r=[];if(!t)r.push("for loop structure 'for i in 1..6 {}'");else{const n=t[1],i=t[2],a=new RegExp(`let\\s+square\\s*=\\s*${n}\\s*\\*\\s*${n};|print\\(\\s*${n}\\s*\\*\\s*${n}\\s*\\)`,"s"),o=new RegExp(`print\\(square\\);|print\\(\\s*${n}\\s*\\*\\s*${n}\\s*\\)`,"s");a.test(i)||r.push(`calculation of the square (e.g., let square = ${n} * ${n}; or print(${n}*${n});) inside the loop`),o.test(i)||r.push("printing the square (e.g., print(square) or print(i*i)) inside the loop")}return{success:!1,message:`Review your loop: ${r.join(", ")}.`}}},Jt={name:"functions",displayName:"4. Functions",content:`
# 4. Functions

Functions are reusable blocks of code that perform a specific task. In Althread, you define them using the \`fn\` keyword. They can also call themselves, which is known as recursion.

## Syntax
A function definition includes its name, a list of parameters with their types, a return type, and a body.

\`\`\`althread
fn function_name(param1: type, param2: type) -> return_type {
    // code block
    return some_value; // must match return_type
}
\`\`\`

*   \`fn\`: The keyword to start a function definition.
*   \`function_name\`: The name of your function.
*   \`parameters\`: A comma-separated list of \`name: type\`.
*   \`-> return_type\`: Specifies the type of the value the function will return.
*   \`return\`: The keyword to send a value back from the function.

**Note on Parameters:** When you pass a variable to a function, a *copy* of its value is used (this is known as "pass-by-value"). Any changes to the parameter inside the function will not affect the original variable outside the function.

## Functions Without a Return Value
If a function does not need to return a value, you can omit the return type specification (\`-> return_type\`).

\`\`\`althread
fn log_message(message: string) {
    print("Log: " + message);
}
\`\`\`

You can use an empty \`return;\` statement to exit such a function early. If there is no \`return\` statement, the function automatically returns after its last statement is executed.

**Example:**
\`\`\`althread
fn add(a: int, b: int) -> int {
    return a + b;
}

main {
    let sum = add(5, 3);
    print("The sum is: " + sum); // Prints "The sum is: 8"
}
\`\`\`

## Your Task:
1.  Define a function named \`multiply\` that takes two integer parameters.
2.  The function should return the product of these two numbers.
3.  In the \`main\` block, call your \`multiply\` function with two numbers (e.g., 7 and 6) and print the result.
  `,defaultCode:`// Define the 'multiply' function here

main {
    // Call the function and print the result
}`,validate:s=>{const e=/fn\s+multiply\s*\(\s*(\w+)\s*:\s*int\s*,\s*(\w+)\s*:\s*int\s*\)\s*->\s*int\s*\{([\s\S]*?)\}/s,t=s.match(e);let r=!1;if(t){const o=t[1],c=t[2],l=t[3];new RegExp(`return\\s+${o}\\s*\\*\\s*${c}\\s*;|return\\s+${c}\\s*\\*\\s*${o}\\s*;`,"s").test(l)&&(r=!0)}const n=s.match(/main\s*\{([\s\S]*?)\}/s);let i=!1;if(n){const o=n[1],c=/print\([\s\S]*multiply\(\s*\d+\s*,\s*\d+\s*\)[\s\S]*\)/s.test(o),l=o.match(/let\s+(\w+)\s*=\s*multiply\(\s*\d+\s*,\s*\d+\s*\)\s*;/s);let u=!1;if(l){const f=l[1];u=new RegExp(`print\\([\\s\\S]*${f}[\\s\\S]*\\)`,"s").test(o)}(c||u)&&(i=!0)}if(r&&i)return{success:!0,message:"Function defined and called correctly!"};const a=[];return t?r||a.push("the body of 'multiply' to return the product of its parameters (e.g., 'return a * b;')"):a.push("defining a function 'multiply(a: int, b: int) -> int'"),i||a.push("calling 'multiply' from the main block and printing its result"),{success:!1,message:`Please check: ${a.join(", ")}.`}}},en={name:"sharedBlocks",displayName:"5. Shared Blocks",content:`
# 5. Shared Blocks & Shared Variables

As introduced earlier, \`shared\` blocks are crucial for concurrent programming in Althread. They define variables that can be accessed and modified by multiple processes simultaneously.

Key points:
*   Declared with the \`shared { ... }\` syntax.
*   Variables inside a \`shared\` block **must** start with an uppercase letter.
*   Shared variables **can** have a type annotation (e.g., \`MY_VAR: int\`, \`FLAG: bool\`).
*   If the have a type annotation without value, they are initialized with a default value (0, false, or empty string).

\`\`\`althread
shared {
    let GLOBAL_COUNT: int = 0;
    let APP_STATE: string = "INITIALIZING";
    let IS_ACTIVE: bool = true;
}

program Worker1 ({
    // Can read and write to GLOBAL_COUNT, APP_STATE, IS_ACTIVE
    GLOBAL_COUNT = GLOBAL_COUNT + 1;
}

program Worker2() {
    if IS_ACTIVE {
        print(APP_STATE);
    }
}

main {
    run Worker1();
    run Worker2();
}
\`\`\`
This mechanism allows different parts of your Althread application to coordinate and share data safely.

Declare a shared block containing a variable \`Counter\` of type \`int\` initialized to \`0\`, and another variable \`Message\` of type \`string\` initialized to \`"Hello from shared!"\`.
  `,defaultCode:`// Define your shared block here

main {
    // You can try to print them
    // print(Counter);
    // print(Message);
}`,validate:s=>{const e=/shared\s*{[^}]*(const|let)\s+Counter\s*(:\s*int\s*)?=\s*0;[^}]*(const|let)\s+Message\s*(:\s*string\s*)?=\s*"Hello from shared!";[^}]*}/s.test(s);if(e)return{success:!0,message:"Shared block and variables declared correctly!"};const t=[];if(!/shared\s*\{/.test(s))t.push("presence of 'shared {' block");else{const n=/Counter\s*(:\s*int\s*)?(=\s*0)?;/.test(s),i=/shared\s*{[^}]*Counter\s*(:\s*int\s*)?(=\s*0)?;[\s\S]*}/s.test(s);(!n||!i)&&t.push("shared variable 'Counter: int = 0;' inside the shared block");const a=/Message\s*(:\s*string\s*)?=\s*"Hello from shared!";/.test(s),o=/shared\s*{[^}]*Message\s*(:\s*string\s*)?=\s*"Hello from shared!";[\s\S]*}/s.test(s);(!a||!o)&&t.push(`shared variable 'Message: string = "Hello from shared!";' inside the shared block`),t.length===0&&!e&&t.push("correct structure of the shared block with both Counter and Message variables as specified (check order or extra content).")}return{success:!1,message:`Check your shared block: ${t.join(", ")}.`}}},tn={name:"programs",displayName:"6. Programs (Creation & Execution)",content:'\n# 6. Programs: Creation and Execution\n\nIn Althread, concurrent units of execution are called **programs**. You define a program using the `program` keyword, followed by its name, its arguments, and a block of code.\n\n```althread\nprogram MyTask() {\n    // Code for this program\n    print("MyTask is running!");\n}\n```\n\nTo execute a program, you use the `run` keyword. A program is executed in a **process** that runs concurrently with the main program and other processes.\n```althread\nmain {\n    run MyTask(); // Starts a process executing MyTask program\n    run MyTask(); // Starts another process executing MyTask\n}\n```\nEach `run` command creates and starts a new, independent proces of the program. These processes run concurrently.\n\nThe `main` block itself is the entry point of your Althread application and can also be thought of as a special process.\n\nDefine a program named `Greeter` that prints "Hello from Greeter program!". Then, in the `main` block, run this `Greeter` program twice.\n  ',defaultCode:`// Define the Greeter program here

main {
    // Run the Greeter program twice
}`,validate:s=>{const e=/program\s+Greeter\s*\(\s*\)\s*{[\s\S]*print\("Hello from Greeter program!"\);[\s\S]*}/s.test(s),t=(s.match(/run\s+Greeter\s*\(\s*\);/g)||[]).length,r=t>=2,n=/main\s*{[\s\S]*(run\s+Greeter\s*\(\s*\)\s*;[\s\S]*run\s+Greeter\s*\(\s*\);|run\s+Greeter\s*\(\s*\);[^}]*run\s+Greeter\s*\(\s*\)\s*;)[\s\S]*}/s.test(s);if(e&&r&&n)return{success:!0,message:"Program defined and run correctly!"};const i=[];return e||i.push("definition of 'Greeter' program that prints the message 'Hello from Greeter program!'"),r?n||i.push("ensuring both 'run Greeter();' commands are within the main block"):i.push(`running 'Greeter' program at least twice (found ${t} runs)`),{success:!1,message:`Please check: ${i.join(", ")}.`}}},nn={name:"wait",displayName:"7. Awaiting Conditions (wait until)",content:'\n# 7. Awaiting Conditions: `await condition`\n\nThe `await` statement is a powerful construct in Althread for synchronization. It allows a program to pause its execution until a specific condition becomes true. This is often used with shared variables.\n\nSyntax:\n```althread\nawait <boolean_condition>;\n```\nThe program will block at this line and only resume when the `<boolean_condition>` evaluates to `true`.\n\n**Example:**\n```althread\nshared {\n    let Flag: bool = false;\n}\n\nprogram Setter() {\n    Flag = true;\n    print("Setter: Flag is now true.");\n}\n\nprogram Waiter() {\n    print("Waiter: Waiting for Flag to be true...");\n    await Flag == true; // or simply \'await Flag;\' if Flag is boolean\n    print("Waiter: Flag is true! Resuming.");\n}\n\nmain {\n    run Setter();\n    run Waiter();\n}\n```\nIn this example, `Waiter` will pause until `Setter` changes `Flag` to `true`.\n\n**Your Task:**\n1. Create a shared boolean variable `READY` initialized to `false`.\n2. Create a program `Signal` that sets `READY` to `true` and prints "Signal: READY set to true".\n3. Create a program `Listener` that prints "Listener: Waiting..." and wait `READY` to become true, then prints "Listener: Ready!".\n4. Run both programs in `main`.\n  ',defaultCode:`
main {

}`,validate:s=>{const e=/shared\s*{[^}]*READY\s*:\s*bool\s*=\s*false;[^}]*}/s.test(s),t=/program\s+Signal\s*\(\s*\)\s*{[^}]*READY\s*=\s*true;[^}]*print\("Signal: READY set to true"\);[^}]*}/s.test(s),r=/program\s+Listener\s*\(\s*\)\s*{[^}]*print\("Listener: Waiting..."\);[^}]*await\s+READY(\s*==\s*true)?;[^}]*print\("Listener: Ready!"\);[^}]*}/s.test(s),n=/main\s*{[\s\S]*(run\s+Signal\s*\(\s*\)\s*;[\s\S]*run\s+Listener\s*\(\s*\)\s*;|run\s+Listener\s*\(\s*\)\s*;[\s\S]*run\s+Signal\s*\(\s*\)\s*;)[\s\S]*}/s.test(s);if(e&&t&&r&&n)return{success:!0,message:"`await` implemented correctly!"};const i=[];return e||i.push("shared variable 'READY: bool = false'"),t||i.push("Program 'Signal' to set READY to true, and print 'Signal: READY set to true'"),r||i.push("Program 'Listener' to print 'Listener: Waiting...', wait for READY (e.g. 'await READY;'), and print 'Listener: Ready!'"),n||i.push("running both Signal and Listener programs in the main block"),{success:!1,message:`Check the following: ${i.join(", ")}.`}}},sn={name:"channels",displayName:"8. Channels (Declaration, Send, Receive)",content:`
# 8. Channels: Communication Between Programs

Channels provide a way for Althread programs to communicate by sending and receiving messages. They are typed, meaning a channel is declared to carry messages of a specific type.

## Declaration
Channels are usually created in the main block, as we need to know what processes they connect. They connect a process **out port** to a process **in port**. The name a port can be an arbitrary identifier. The syntax for declaring a channel is:
\`\`\`althread
main {
    process1 = run Prog1();
    process2 = run Prog2();
    channel process1.outPortName (type1, type2, ...)> process2.inPortName;
}
\`\`\`

## Sending Messages
Use the \`send\` keyword to send a value to a channel:
\`\`\`althread
send outPortName(value1, value2, ...);
\`\`\`
Sending is not a blocking operation as we assume channel have infinite capacity.

## Receiving Messages
Use the \`receive\` keyword to receive a value from a channel. This is not alone a blocking operation, but it can be seen as a boolean condition that is true when a message is correctly received. So it is tipically used in an \`await\` statement:
\`\`\`althread
await receive inPortName(value1, value2, ...);
// Do something with the received values
\`\`\`

**Example: Producer-Consumer**
\`\`\`althread

program Producer() {
    for i in 0..3 {
        print("Producer: sending ", i);
        send outPort(i);
    }
}

program Consumer() {
    for i in 0..3 { // We expect 3 messages
        await receive inPort(val);
        print("Consumer: received ", val);
    }
}

main {
    let prod = run Producer();
    let cons = run Consumer();
    channel prod.outPort (int)> cons.inPort;
}
\`\`\`

## Your Task:
Create a \`Sender\` program that sends the message \`"Ping"\` and prints "Sender: sent 'Ping'".
Create a \`Receiver\` program that receives a message from an in port into a variable \`msg\` and prints "Receiver: received " followed by that variable.
Run both programs and create a channel between them with the correct in and out port name.
  `,defaultCode:`
main {

}`,validate:s=>{const e=[],t=p=>p.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),r=/program\s+Sender\s*\(\s*\)\s*\{[^}]*send\s+(\w+)\s*\(\s*"Ping"\s*\)\s*;[^}]*print\s*\(\s*"Sender: sent 'Ping'"\s*\)\s*;[^}]*\}/s,n=s.match(r),i=n!==null,a=i?n[1]:null;i||e.push(`Sender Program: Must be 'program Sender()', send '"Ping"' via an out port (e.g., 'send myOutPort("Ping");'), and print "Sender: sent 'Ping'".`);const o=/program\s+Receiver\s*\(\s*\)\s*\{[^}]*await\s+receive\s+(\w+)\s*\(\s*(\w+)\s*\)\s*;[^}]*print\s*\(\s*"Receiver: received "\s*,\s*\2\s*\)\s*;[^}]*\}/s,c=s.match(o),l=c!==null,u=l?c[1]:null,f=l?c[2]:null;l?f&&!/^[a-zA-Z_]\w*$/.test(f)&&e.push(`Receiver Program: The variable used in 'receive ${u}(${f})' (\`${f}\`) is not a valid identifier.`):e.push(`Receiver Program: Must be 'program Receiver()', use 'await receive myInPort(msg);' on an in port, and print '"Receiver: received "' followed by the received variable (e.g., 'print("Receiver: received ", msg);').`);let d=!1;const x=s.match(/main\s*\{([\s\S]*?)\}/s);if(!x)e.push("Main Block: A 'main { ... }' block is required.");else{const p=x[1],v=/let\s+(\w+)\s*=\s*run\s+Sender\s*\(\s*\)\s*;/s,L=/let\s+(\w+)\s*=\s*run\s+Receiver\s*\(\s*\)\s*;/s,E=p.match(v),W=p.match(L),C=E?E[1]:null,I=W?W[1]:null,R=[];if(C||R.push("Sender execution: 'let senderInstance = run Sender();' in main."),I||R.push("Receiver execution: 'let receiverInstance = run Receiver();' in main."),i&&l&&C&&I&&a&&u){const B=`channel ${C}.${a} (string) > ${I}.${u};`,$=`channel\\s+${t(C)}\\.${t(a)}\\s*\\(\\s*string\\s*\\)\\s*>\\s+${t(I)}\\.${t(u)}\\s*;`;new RegExp($,"s").test(p)?d=!0:R.push(`Channel: Declare '${B}' in main.`)}else if(!p.includes("channel "))R.push("Channel: A channel declaration is missing in main.");else if(a&&u){const B=`channel\\s+\\w+\\.${t(a)}\\s*\\(\\s*string\\s*\\)\\s*>\\s+\\w+\\.${t(u)}\\s*;`;new RegExp(B,"s").test(p)?R.push(`Channel: A channel using ports '${a}' and '${u}' exists, but make sure it connects the correct instances of Sender and Receiver (defined with 'let ... = run ...;'), and that the type is 'string'.`):R.push(`Channel: A channel of type 'string' connecting an out port named '${a}' to an in port named '${u}' seems to be missing or incorrect.`)}else e.length===0&&R.push("Channel: The declaration in main could not be fully validated. Ensure Sender/Receiver programs are correct, executed with 'let instance = run Program();', and then connected by a channel.");R.length>0&&e.push(`Main block issues: ${R.join(" ")}`)}if(i&&l&&d)return{success:!0,message:"Channels used correctly for sending/receiving!"};{const p=[...new Set(e)];return p.length===0&&!(i&&l&&d)&&p.push("An unknown validation error occurred. Please check your code against the tutorial task description."),{success:!1,message:`Please review your implementation: ${p.join(" ")}`}}}},rn={name:"imports",displayName:"9. Imports",content:`
# 9. Imports

As your Althread projects grow, you'll want to organize code into multiple files. The \`import\` statement lets you bring definitions from other files, even those in subdirectories, into your current file.

## Syntax

\`\`\`althread
import {
    math,
    cool/fib,
    display
}
\`\`\`

- Each item in the list is a relative filepath (e.g., \`directory/file\`), without the \`.alt\` extension.
- When importing from a subdirectory like \`cool/fib\`, the module is available under its filename, \`fib\`.
- You can use \`as\` to give an imported module an alias.

## Available Modules

For this tutorial, we've provided three modules for you to work with:

### math.alt
\`\`\`althread
fn max(a: int, b: int) -> int {
  if a > b {
    return a;
  }
  return b;
}
\`\`\`

### cool/fib.alt
\`\`\`althread
shared {
  let N: int = 8;
}

@private
fn fibonacci_iterative(n: int, a: int, b: int) -> int {
  for i in 1..n {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

fn fibonacci_iterative_N() -> int {
  return fibonacci_iterative(N, 0, 1);      
}
\`\`\`

### display.alt
\`\`\`althread
program Hello() {
  print("Hi there!");
}
\`\`\`

## Using Imported Items

Once imported, you can access items from that module using dot notation. Notice how the \`@private\` directive in \`cool/fib.alt\` hides the \`fibonacci_iterative\` function from external access.

\`\`\`althread
main {
    // Call a function from 'math'
    let result = math.max(5, 10);
    print(result); // Prints 10

    // Access shared variable from 'cool/fib'
    print(fib.N); // Prints 8

    // Run a program from 'display'
    run display.Hello(); // Prints "Hi there!"
}
\`\`\`

## Your Task

1.  Import the \`math\`, \`cool/fib\`, and \`display\` modules.
2.  In the \`main\` block, call \`math.max(7, 3)\` and print the result.
3.  The module \`cool/fib\` contains a shared variable \`N\` with the value \`8\`. Call \`fib.fibonacci_iterative_N()\` and print its result. Also print the value of \`N\` directly.
4.  Change the value of \`N\` to \`10\` using \`fib.N = 10\` and call \`fib.fibonacci_iterative_N()\` again to see the updated result.
5.  Try calling \`fib.fibonacci_iterative(8, 0, 1)\` directly. You'll see an error because this function is marked as \`@private\` and cannot be accessed from outside the module.
6.  Finally, run the \`Hello()\` program from the \`display\` module.

  `,defaultCode:`import {
    // Import modules here
}

main {
    // Call imported functions and run programs
}`,validate:s=>{const e=s.match(/import\s*\{([\s\S]*?)\}/s);let t=!1;if(e){const a=e[1],o=/\bmath\b/.test(a),c=/cool\/fib/.test(a),l=/\bdisplay\b/.test(a);o&&c&&l&&(t=!0)}const r=s.match(/main\s*\{([\s\S]*?)\}/s),n=[];let i=!1;if(r){const a=r[1],o=a.match(/let\s+(\w+)\s*=\s*math\.max\(\s*7\s*,\s*3\s*\)\s*;/),c=/print\([\s\S]*math\.max\(\s*7\s*,\s*3\s*\)[\s\S]*\)/.test(a),l=o&&new RegExp(`print\\([\\s\\S]*${o[1]}[\\s\\S]*\\)`).test(a);c||l||n.push("printing the result of math.max(7, 3)");const u=a.match(/let\s+(\w+)\s*=\s*fib\.fibonacci_iterative_N\(\s*\)\s*;/),f=/print\([\s\S]*fib\.fibonacci_iterative_N\(\s*\)[\s\S]*\)/.test(a),d=u&&new RegExp(`print\\([\\s\\S]*${u[1]}[\\s\\S]*\\)`).test(a);if(f||d||n.push("printing the result of fib.fibonacci_iterative_N()"),/print\([\s\S]*fib\.N[\s\S]*\)/.test(a)||n.push("printing fib.N"),!/fib\.N\s*=\s*10\s*;/.test(a))n.push("assigning fib.N = 10");else{const p=a.split(/fib\.N\s*=\s*10\s*;/)[1]||"",v=p.match(/let\s+(\w+)\s*=\s*fib\.fibonacci_iterative_N\(\s*\)\s*;/),L=/print\([\s\S]*fib\.fibonacci_iterative_N\(\s*\)[\s\S]*\)/.test(p),E=v&&new RegExp(`print\\([\\s\\S]*${v[1]}[\\s\\S]*\\)`).test(p);L||E||n.push("printing the result of fib.fibonacci_iterative_N() after changing fib.N")}/run\s+display\.Hello\(\s*\)\s*;/.test(a)||n.push("running display.Hello()"),/fib\.fibonacci_iterative\s*\(\s*8\s*,\s*0\s*,\s*1\s*\)/.test(a)&&(i=!0)}else n.push("main block");return t||n.unshift("importing 'math', 'cool/fib', and 'display'"),i?{success:!1,message:"You tried to call fib.fibonacci_iterative(8, 0, 1) directly. This function is private and cannot be used outside the module. Please use fib.fibonacci_iterative_N() instead."}:n.length===0?{success:!0,message:"Fantastic! You've completed all the tasks for this tutorial."}:{success:!1,message:`Please check the following: ${n.join("; ")}.`}}},an={name:"wait-first",displayName:"10. Multi-Condition Wait (await first)",content:`
# 10. Multi-Condition Wait: await first

In concurrent programming, you often need to wait for one of several possible events. Althread provides the \`await first\` construct to handle this.

## Selective Wait
The \`await first\` statement allows a program to wait for multiple conditions simultaneously. It will block until **at least one** of the conditions becomes true. If multiple conditions are true, it executes the block associated with the **first** one that matches (from top to bottom).

The syntax is:
\`\`\`althread
await first {
    (condition1) => {
        // block executed if condition1 is true
    }
    (condition2) => {
        // block executed if condition2 is true
    }
}
\`\`\`

## Receiving from Multiple Channels
A common use case is waiting for messages from different ports:

\`\`\`althread
await first {
    receive portA(val) => {
        print("Received from A: ", val);
    }
    receive portB(val) => {
        print("Received from B: ", val);
    }
}
\`\`\`

**Note:** When used inside \`first\`, the \`receive\` condition is followed by \`=> { ... }\` to define the action to take when that specific message is received.

## Your Task:
Create a program that waits for either a message on \`port1\` or a message on \`port2\`.
- If a message is received on \`port1\`, print "Received from port 1".
- If a message is received on \`port2\`, print "Received from port 2".

In the \`main\` block, run one instance of this program and two sender programs (one for each port) to test it.
  `,defaultCode:`
program MultiReceiver() {
    // Write your await first here
}

program Sender1() {
    send out(1);
}

program Sender2() {
    send out(2);
}

main {
    let receiver = run MultiReceiver();
    let s1 = run Sender1();
    let s2 = run Sender2();
    channel s1.out (int)> receiver.port1;
    channel s2.out (int)> receiver.port2;
}`,validate:s=>{const e=[];/await\s+first\s*\{/.test(s)||e.push("You must use 'await first { ... }' to wait for multiple conditions.");const r=/receive\s+port1\s*\(\s*\w+\s*\)\s*=>\s*\{\s*print\s*\(\s*"Received from port 1"\s*\)\s*;?\s*\}/.test(s),n=/receive\s+port2\s*\(\s*\w+\s*\)\s*=>\s*\{\s*print\s*\(\s*"Received from port 2"\s*\)\s*;?\s*\}/.test(s);return r||e.push("You need to handle 'receive port1' and print 'Received from port 1'."),n||e.push("You need to handle 'receive port2' and print 'Received from port 2'."),e.length===0?{success:!0,message:"Great! You've mastered multi-condition waiting."}:{success:!1,message:e.join(" ")}}};var on=H("<div class=tutorial-content>"),ln=H('<div class=navigation-buttons><button type=button class=vscode-button><i class="codicon codicon-arrow-left"></i> Previous</button><button type=button class=vscode-button>Next <i class="codicon codicon-arrow-right">'),cn=H('<div class=editor-pane-area><div class=editor-toolbar><h3>Editor</h3><div class="action-buttons-center editor-toolbar-actions"><button type=button class="vscode-button validate-button"><i class="codicon codicon-check"></i> Validate</button><button type=button class=vscode-button><i class="codicon codicon-play"></i> Run</button></div></div><div class=editor-tutorial-instance-wrapper>'),un=H("<div class=output-pane><div class=tab><button type=button><h3>Validation</h3></button><button type=button><h3>Result</h3></button></div><div class=tab-content><div class=console>"),hn=H('<div class=tutorial-page-container><div class=tutorial-header><div class=brand><h3>Althread</h3></div><div class=tutorial-step-selector-wrapper><select></select></div><div class=actions-placeholder><button type=button class="vscode-button icon-only theme-toggle-button"aria-label="Toggle theme"><i class="codicon codicon-color-mode"></i></button><button type=button class=vscode-button><i class="codicon codicon-terminal-tmux"></i> Back to Editor'),pn=H("<option>"),dn=H("<div>"),fn=H("<div><pre>");const qe=s=>({"main.alt":s,"math.alt":`
      fn max(a: int, b: int) -> int {
        if a > b {
          return a;
        }
        return b;
      }
      `,"cool/fib.alt":`
      shared {
        let N: int = 8;
      }
      @private
      fn fibonacci_iterative(n: int, a: int, b: int) -> int {
        for i in 1..n {
          let c = a + b;
          a = b;
          b = c;
        }
        return b;
      }
      fn fibonacci_iterative_N() -> int {
        return fibonacci_iterative(N, 0, 1);      
      }
      `,"display.alt":`
      program Hello() {
        print("Hi there!");
      }
    `}),se={TutorialStep1_Variables:Qt,TutorialStep2_IfElse:Xt,TutorialStep3_ForLoops:Kt,TutorialStep4_Functions:Jt,TutorialStep5_SharedBlocks:en,TutorialStep6_Programs:tn,TutorialStep7_Wait:nn,TutorialStep8_Channels:sn,TutorialStep9_Imports:rn,TutorialStep10_WaitFirst:an},P=["TutorialStep1_Variables","TutorialStep2_IfElse","TutorialStep3_ForLoops","TutorialStep4_Functions","TutorialStep5_SharedBlocks","TutorialStep6_Programs","TutorialStep7_Wait","TutorialStep8_Channels","TutorialStep9_Imports","TutorialStep10_WaitFirst"],bn=()=>{const s=nt(),e=st(),[t,r]=U(Ee());rt(()=>{const h=Ee();r(h),document.documentElement.dataset.theme=h,document.body.dataset.theme=h});const n=h=>{if(!h)return 0;const m=P.findIndex(k=>se[k]?.name.toLowerCase()===h.toLowerCase());return m!==-1?m:0},[i,a]=U(""),[o,c]=U(n(s.stepName)),[l,u]=U("validation"),[f,d]=U(null),[x,p]=U(""),[v,L]=U(!1),E=h=>{if(h>=0&&h<P.length){const m=P[h],k=se[m];return k&&k.name?`althread_tutorial_${k.name.replace(/\s+/g,"_")}`:(console.warn(`Tutorial 'name' property not found for key ${m}, using key itself for localStorage.`),`althread_tutorial_${m}`)}return console.error("Attempted to get localStorage key with out-of-bounds index:",h),`althread_tutorial_invalid_${h}`};Q(()=>{const h=o(),m=P[h],k=se[m];k&&k.name&&s.stepName?.toLowerCase()!==k.name.toLowerCase()&&e(`/tutorials/${k.name}`,{replace:!0})}),Q(()=>{const h=t();document.documentElement.dataset.theme=h,document.body.dataset.theme=h});const W=()=>{r(h=>{const m=h==="dark"?"light":"dark";return ut(m),m})};Q(()=>{const h=P[o()],m=se[h];if(m){const k=localStorage.getItem(E(o())),M=k!==null?k:m.defaultCode;a(M),d(null),p(""),u("validation")}else console.error(`Tutorial data not found for key: ${h}`),a(`// Error: Tutorial '${h}' not found.`),d({success:!1,message:`Tutorial data for '${h}' is missing.`})}),Q(()=>{const h=i();P[o()]&&typeof h=="string"&&localStorage.setItem(E(o()),h)});const C=[],I=[],R=()=>{for(const h of C)h.safeEditorView()?.destroy();for(const h of I)h();C.length=0,I.length=0};it(R);const B=h=>{const m=/```althread\n([\s\S]*?)\n```/g;let k=h;const M=[];let D=0;for(const ee of h.matchAll(m)){const F=`code-block-${D}`,Y=ee[1];M.push({id:F,code:Y}),k=k.replace(ee[0],`<div id="${F}" class="tutorial-code-block"></div>`),D++}const O=b(k);return setTimeout(()=>{R(),M.forEach(({id:ee,code:F})=>{const Y=document.getElementById(ee);if(Y){Y.innerHTML="";const w=ht(y=>(I.push(y),Ie({defaultValue:F,onValueChange:void 0,filePath:"example.alt",theme:t()}))),S=document.createElement("div");Y.appendChild(S),w.ref(S),C.push(w),setTimeout(()=>{w.setReadOnly(!0);const y=w.safeEditorView();y&&y.dispatch({selection:{anchor:0,head:0}})},50)}})},10),O};Q(()=>{const h=t();C.forEach(m=>{m.updateTheme&&m.updateTheme(h)})});const $=Ie({defaultValue:i(),onValueChange:h=>{a(h)},getWorkspace:()=>qe(i()),theme:t()});Q(()=>{const h=$.editorView(),m=i();h&&h.state.doc.toString()!==m&&h.dispatch({changes:{from:0,to:h.state.doc.length,insert:m}})}),Q(()=>{const h=t();$&&$.updateTheme&&$.updateTheme(h)});const le=()=>se[P[o()]],Xe=()=>{const h=le();if(h){const m=h.validate(i());d(m),u("validation")}else d({success:!1,message:"Error: Current tutorial not found for validation."})},Ke=async()=>{L(!1);const h=i(),m=qe(h);console.log("Running code with virtual filesystem:",m);try{const k=await pt.run(h,"main.alt",m),M=k.runtime_error,D=k.stdout.join(`
`);if(M){L(!0);const O=Le(M,h).message;p(D?`${D}

${O}`:O)}else p(D)}catch(k){L(!0),p(Le(k,h).message)}u("result")},Je=()=>{o()<P.length-1?c(o()+1):alert("Congratulations! You have completed all tutorial steps.")},et=()=>{o()>0&&c(o()-1)};return(()=>{var h=hn(),m=h.firstChild,k=m.firstChild,M=k.firstChild,D=k.nextSibling,O=D.firstChild,ee=D.nextSibling,F=ee.firstChild,Y=F.nextSibling;return V(k,ne(at,{}),M),O.addEventListener("change",w=>{const S=w.currentTarget.value,y=P.indexOf(S);y!==-1&&c(y)}),V(O,ne(ot,{each:P,children:w=>{const S=se[w];return(()=>{var y=pn();return y.value=w,V(y,()=>S?S.displayName:`Loading: ${w}`),y})()}})),F.$$click=W,Y.$$click=()=>{e("/")},V(h,ne(ce,{id:"tutorial-content-area",get children(){return[ne(ce.Panel,{class:"explanation-pane",initialSize:.4,minSize:.2,get children(){return[(()=>{var w=on();return X(()=>w.innerHTML=le()?.content?B(le().content):"Loading tutorial content..."),w})(),(()=>{var w=ln(),S=w.firstChild,y=S.nextSibling;return S.$$click=et,y.$$click=Je,X(z=>{var j=o()===0,Z=o()===P.length-1;return j!==z.e&&(S.disabled=z.e=j),Z!==z.t&&(y.disabled=z.t=Z),z},{e:void 0,t:void 0}),w})()]}}),ne(ce.Handle,{class:"Resizable-handle"}),ne(ce.Panel,{class:"editor-output-panes",initialSize:.6,minSize:.2,get children(){return[(()=>{var w=cn(),S=w.firstChild,y=S.firstChild,z=y.nextSibling,j=z.firstChild,Z=j.nextSibling,A=S.nextSibling;j.$$click=Xe,Z.$$click=Ke;var _=$.ref;return typeof _=="function"?lt(_,A):$.ref=A,w})(),(()=>{var w=un(),S=w.firstChild,y=S.firstChild,z=y.nextSibling,j=S.nextSibling,Z=j.firstChild;return y.$$click=()=>u("validation"),z.$$click=()=>u("result"),V(Z,(()=>{var A=ue(()=>l()==="validation");return()=>A()&&(()=>{var _=dn();return V(_,(()=>{var te=ue(()=>!!f());return()=>te()?f().message:"No validation output yet."})()),X(()=>he(_,`validation-message ${f()?f().success?"success":"error":""}`)),_})()})(),null),V(Z,(()=>{var A=ue(()=>l()==="result");return()=>A()&&(()=>{var _=fn(),te=_.firstChild;return V(te,(()=>{var tt=ue(()=>!!x());return()=>tt()?x():"No execution output yet."})()),X(()=>he(_,`validation-message${v()?" execution-error-box":""}`)),_})()})(),null),X(A=>{var _=`tab_button ${l()==="validation"?"active":""}`,te=`tab_button ${l()==="result"?"active":""} ${v()?"execution-error":""}`;return _!==A.e&&he(y,A.e=_),te!==A.t&&he(z,A.t=te),A},{e:void 0,t:void 0}),w})()]}})]}}),null),X(()=>ct(F,"title",`Switch to ${t()==="dark"?"light":"dark"} theme`)),X(()=>O.value=P[o()]),h})()};dt(["click"]);export{bn as default};
