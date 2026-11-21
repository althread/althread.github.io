const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BlqAb9HM.js","assets/codemirror-CxIvJr0B.js","assets/index-DSRLhUMa.js","assets/index-27Oa6cPa.js","assets/index-LBiqdFRM.js","assets/index-BYirMQhs.js","assets/index-etIPbnKY.js","assets/index-Dj1yPGQn.js","assets/index-D-fBKaJZ.js","assets/Graph-Bmzs4mrq.js","assets/visHelpers-7h3dvP32.js","assets/visHelpers-C5-pRpzx.css","assets/Graph-DruHsj2C.css","assets/CommGraph-ChW7WV7l.js","assets/Tutorial-zbrLx-o-.js","assets/Tutorial-CUP3AYsF.css"])))=>i.map(i=>d[i]);
import{C as At,S as jt,E as vt,a as Yn,s as Ur,H as jr,t as V,b as Vr,L as Wr,c as Xr,d as qn,V as Gr,l as Bi,e as Br,h as Yr,k as Hn,f as qr,g as Hr,i as Zr,j as Kr,m as Jr,n as eo,o as to,p as no,q as io,D as zt,r as ro,u as oo,v as ao,w as lo,x as so,y as co,z as uo,A as fo,B as go,F as ho,G as mo,I as po,J as bo,K as yo,M as vo,N as Oo,O as wo,P as _o,Q as $o,R as So,T as xo,U as Co,W as Po,X as Eo,Y as ko}from"./codemirror-CxIvJr0B.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const zo="modulepreload",Ro=function(e){return"/dev/editor/"+e},di={},Ne=function(t,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=Promise.allSettled(n.map(s=>{if(s=Ro(s),s in di)return;di[s]=!0;const c=s.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":zo,c||(d.as="script"),d.crossOrigin="",d.href=s,l&&d.setAttribute("nonce",l),document.head.appendChild(d),c)return new Promise((h,m)=>{d.addEventListener("load",h),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},ie={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return ui(this.context.count)},getNextContextId(){return ui(this.context.count++)}};function ui(e){const t=String(e),n=t.length-1;return ie.context.id+(n?String.fromCharCode(96+n):"")+t}function Dt(e){ie.context=e}const Yi=!1,To=(e,t)=>e===t,sn=Symbol("solid-proxy"),qi=typeof Proxy=="function",Ao=Symbol("solid-track"),cn={equals:To};let Hi=tr;const nt=1,dn=2,Zi={owned:null,cleanups:null,context:null,owner:null},Sn={};var ce=null;let xn=null,Do=null,he=null,Pe=null,Je=null,yn=0;function It(e,t){const n=he,i=ce,r=e.length===0,o=t===void 0?i:t,a=r?Zi:{owned:null,cleanups:null,context:o?o.context:null,owner:o},l=r?e:()=>e(()=>pe(()=>Nt(a)));ce=a,he=null;try{return qe(l,!0)}finally{he=n,ce=i}}function W(e,t){t=t?Object.assign({},cn,t):cn;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),er(n,r));return[Ji.bind(n),i]}function Qo(e,t,n){const i=On(e,t,!0,nt);Et(i)}function te(e,t,n){const i=On(e,t,!1,nt);Et(i)}function ue(e,t,n){Hi=jo;const i=On(e,t,!1,nt);i.user=!0,Je?Je.push(i):Et(i)}function oe(e,t,n){n=n?Object.assign({},cn,n):cn;const i=On(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,Et(i),Ji.bind(i)}function Fo(e){return e&&typeof e=="object"&&"then"in e}function Io(e,t,n){let i,r,o;i=!0,r=e,o={};let a=null,l=Sn,s=null,c=!1,f="initialValue"in o,d=typeof i=="function"&&oe(i);const h=new Set,[m,S]=(o.storage||W)(o.initialValue),[w,A]=W(void 0),[p,v]=W(void 0,{equals:!1}),[P,z]=W(f?"ready":"unresolved");ie.context&&(s=ie.getNextContextId(),o.ssrLoadFrom==="initial"?l=o.initialValue:ie.load&&ie.has(s)&&(l=ie.load(s)));function $(C,F,R,X){return a===C&&(a=null,X!==void 0&&(f=!0),(C===l||F===l)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(X,{value:F})),l=Sn,L(F,R)),F}function L(C,F){qe(()=>{F===void 0&&S(()=>C),z(F!==void 0?"errored":f?"ready":"unresolved"),A(F);for(const R of h.keys())R.decrement();h.clear()},!1)}function T(){const C=No,F=m(),R=w();if(R!==void 0&&!a)throw R;return he&&he.user,F}function I(C=!0){if(C!==!1&&c)return;c=!1;const F=d?d():i;if(F==null||F===!1){$(a,pe(m));return}let R;const X=l!==Sn?l:pe(()=>{try{return r(F,{value:m(),refetching:C})}catch(u){R=u}});if(R!==void 0){$(a,void 0,Jt(R),F);return}else if(!Fo(X))return $(a,X,void 0,F),X;return a=X,"v"in X?(X.s===1?$(a,X.v,void 0,F):$(a,void 0,Jt(X.v),F),X):(c=!0,queueMicrotask(()=>c=!1),qe(()=>{z(f?"refreshing":"pending"),v()},!1),X.then(u=>$(X,u,void 0,F),u=>$(X,void 0,Jt(u),F)))}Object.defineProperties(T,{state:{get:()=>P()},error:{get:()=>w()},loading:{get(){const C=P();return C==="pending"||C==="refreshing"}},latest:{get(){if(!f)return T();const C=w();if(C&&!a)throw C;return m()}}});let _=ce;return d?Qo(()=>(_=ce,I(!1))):I(!1),[T,{refetch:C=>Zn(_,()=>I(C)),mutate:S}]}function Ce(e){return qe(e,!1)}function pe(e){if(he===null)return e();const t=he;he=null;try{return e()}finally{he=t}}function Ue(e,t,n){const i=Array.isArray(e);let r,o=n&&n.defer;return a=>{let l;if(i){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(o)return o=!1,a;const s=pe(()=>t(l,r,a));return r=l,s}}function xt(e){ue(()=>pe(e))}function Qe(e){return ce===null||(ce.cleanups===null?ce.cleanups=[e]:ce.cleanups.push(e)),e}function Ki(){return ce}function Zn(e,t){const n=ce,i=he;ce=e,he=null;try{return qe(t,!0)}catch(r){Kn(r)}finally{ce=n,he=i}}function Lo(e){const t=he,n=ce;return Promise.resolve().then(()=>{he=t,ce=n;let i;return qe(e,!1),he=ce=null,i?i.done:void 0})}const[cu,du]=W(!1);function Ct(e,t){const n=Symbol("context");return{id:n,Provider:Vo(n),defaultValue:e}}function Pt(e){let t;return ce&&ce.context&&(t=ce.context[e.id])!==void 0?t:e.defaultValue}function vn(e){const t=oe(e),n=oe(()=>Fn(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}let No;function Ji(){if(this.sources&&this.state)if(this.state===nt)Et(this);else{const e=Pe;Pe=null,qe(()=>fn(this),!1),Pe=e}if(he){const e=this.observers?this.observers.length:0;he.sources?(he.sources.push(this),he.sourceSlots.push(e)):(he.sources=[this],he.sourceSlots=[e]),this.observers?(this.observers.push(he),this.observerSlots.push(he.sources.length-1)):(this.observers=[he],this.observerSlots=[he.sources.length-1])}return this.value}function er(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&qe(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r],a=xn&&xn.running;a&&xn.disposed.has(o),(a?!o.tState:!o.state)&&(o.pure?Pe.push(o):Je.push(o),o.observers&&nr(o)),a||(o.state=nt)}if(Pe.length>1e6)throw Pe=[],new Error},!1)),t}function Et(e){if(!e.fn)return;Nt(e);const t=yn;Mo(e,e.value,t)}function Mo(e,t,n){let i;const r=ce,o=he;he=ce=e;try{i=e.fn(t)}catch(a){return e.pure&&(e.state=nt,e.owned&&e.owned.forEach(Nt),e.owned=null),e.updatedAt=n+1,Kn(a)}finally{he=o,ce=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?er(e,i):e.value=i,e.updatedAt=n)}function On(e,t,n,i=nt,r){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:ce,context:ce?ce.context:null,pure:n};return ce===null||ce!==Zi&&(ce.owned?ce.owned.push(o):ce.owned=[o]),o}function un(e){if(e.state===0)return;if(e.state===dn)return fn(e);if(e.suspense&&pe(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<yn);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===nt)Et(e);else if(e.state===dn){const i=Pe;Pe=null,qe(()=>fn(e,t[0]),!1),Pe=i}}function qe(e,t){if(Pe)return e();let n=!1;t||(Pe=[]),Je?n=!0:Je=[],yn++;try{const i=e();return Uo(n),i}catch(i){n||(Je=null),Pe=null,Kn(i)}}function Uo(e){if(Pe&&(tr(Pe),Pe=null),e)return;const t=Je;Je=null,t.length&&qe(()=>Hi(t),!1)}function tr(e){for(let t=0;t<e.length;t++)un(e[t])}function jo(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:un(i)}if(ie.context){if(ie.count){ie.effects||(ie.effects=[]),ie.effects.push(...e.slice(0,n));return}Dt()}for(ie.effects&&(ie.done||!ie.count)&&(e=[...ie.effects,...e],n+=ie.effects.length,delete ie.effects),t=0;t<n;t++)un(e[t])}function fn(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===nt?i!==t&&(!i.updatedAt||i.updatedAt<yn)&&un(i):r===dn&&fn(i,t)}}}function nr(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=dn,n.pure?Pe.push(n):Je.push(n),n.observers&&nr(n))}}function Nt(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),a=n.observerSlots.pop();i<r.length&&(o.sourceSlots[a]=i,r[i]=o,n.observerSlots[i]=a)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)Nt(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Nt(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Jt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Kn(e,t=ce){throw Jt(e)}function Fn(e){if(typeof e=="function"&&!e.length)return Fn(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=Fn(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function Vo(e,t){return function(i){let r;return te(()=>r=pe(()=>(ce.context={...ce.context,[e]:i.value},vn(()=>i.children))),void 0),r}}const Wo=Symbol("fallback");function fi(e){for(let t=0;t<e.length;t++)e[t]()}function Xo(e,t,n={}){let i=[],r=[],o=[],a=0,l=t.length>1?[]:null;return Qe(()=>fi(o)),()=>{let s=e()||[],c=s.length,f,d;return s[Ao],pe(()=>{let m,S,w,A,p,v,P,z,$;if(c===0)a!==0&&(fi(o),o=[],i=[],r=[],a=0,l&&(l=[])),n.fallback&&(i=[Wo],r[0]=It(L=>(o[0]=L,n.fallback())),a=1);else if(a===0){for(r=new Array(c),d=0;d<c;d++)i[d]=s[d],r[d]=It(h);a=c}else{for(w=new Array(c),A=new Array(c),l&&(p=new Array(c)),v=0,P=Math.min(a,c);v<P&&i[v]===s[v];v++);for(P=a-1,z=c-1;P>=v&&z>=v&&i[P]===s[z];P--,z--)w[z]=r[P],A[z]=o[P],l&&(p[z]=l[P]);for(m=new Map,S=new Array(z+1),d=z;d>=v;d--)$=s[d],f=m.get($),S[d]=f===void 0?-1:f,m.set($,d);for(f=v;f<=P;f++)$=i[f],d=m.get($),d!==void 0&&d!==-1?(w[d]=r[f],A[d]=o[f],l&&(p[d]=l[f]),d=S[d],m.set($,d)):o[f]();for(d=v;d<c;d++)d in w?(r[d]=w[d],o[d]=A[d],l&&(l[d]=p[d],l[d](d))):r[d]=It(h);r=r.slice(0,a=c),i=s.slice(0)}return r});function h(m){if(o[d]=m,l){const[S,w]=W(d);return l[d]=w,t(s[d],S)}return t(s[d])}}}function b(e,t){return pe(()=>e(t||{}))}function Gt(){return!0}const In={get(e,t,n){return t===sn?n:e.get(t)},has(e,t){return t===sn?!0:e.has(t)},set:Gt,deleteProperty:Gt,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Gt,deleteProperty:Gt}},ownKeys(e){return e.keys()}};function Cn(e){return(e=typeof e=="function"?e():e)?e:{}}function Go(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function ct(...e){let t=!1;for(let a=0;a<e.length;a++){const l=e[a];t=t||!!l&&sn in l,e[a]=typeof l=="function"?(t=!0,oe(l)):l}if(qi&&t)return new Proxy({get(a){for(let l=e.length-1;l>=0;l--){const s=Cn(e[l])[a];if(s!==void 0)return s}},has(a){for(let l=e.length-1;l>=0;l--)if(a in Cn(e[l]))return!0;return!1},keys(){const a=[];for(let l=0;l<e.length;l++)a.push(...Object.keys(Cn(e[l])));return[...new Set(a)]}},In);const n={},i=Object.create(null);for(let a=e.length-1;a>=0;a--){const l=e[a];if(!l)continue;const s=Object.getOwnPropertyNames(l);for(let c=s.length-1;c>=0;c--){const f=s[c];if(f==="__proto__"||f==="constructor")continue;const d=Object.getOwnPropertyDescriptor(l,f);if(!i[f])i[f]=d.get?{enumerable:!0,configurable:!0,get:Go.bind(n[f]=[d.get.bind(l)])}:d.value!==void 0?d:void 0;else{const h=n[f];h&&(d.get?h.push(d.get.bind(l)):d.value!==void 0&&h.push(()=>d.value))}}}const r={},o=Object.keys(i);for(let a=o.length-1;a>=0;a--){const l=o[a],s=i[l];s&&s.get?Object.defineProperty(r,l,s):r[l]=s?s.value:void 0}return r}function Vt(e,...t){if(qi&&sn in e){const r=new Set(t.length>1?t.flat():t[0]),o=t.map(a=>new Proxy({get(l){return a.includes(l)?e[l]:void 0},has(l){return a.includes(l)&&l in e},keys(){return a.filter(l=>l in e)}},In));return o.push(new Proxy({get(a){return r.has(a)?void 0:e[a]},has(a){return r.has(a)?!1:a in e},keys(){return Object.keys(e).filter(a=>!r.has(a))}},In)),o}const n={},i=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const o=Object.getOwnPropertyDescriptor(e,r),a=!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable;let l=!1,s=0;for(const c of t)c.includes(r)&&(l=!0,a?i[s][r]=o.value:Object.defineProperty(i[s],r,o)),++s;l||(a?n[r]=o.value:Object.defineProperty(n,r,o))}return[...i,n]}function Jn(e){let t,n;const i=r=>{const o=ie.context;if(o){const[l,s]=W();ie.count||(ie.count=0),ie.count++,(n||(n=e())).then(c=>{!ie.done&&Dt(o),ie.count--,s(()=>c.default),Dt()}),t=l}else if(!t){const[l]=Io(()=>(n||(n=e())).then(s=>s.default));t=l}let a;return oe(()=>(a=t())?pe(()=>{if(!o||ie.done)return a(r);const l=ie.context;Dt(o);const s=a(r);return Dt(l),s}):"")};return i.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),i}let Bo=0;function wn(){return ie.context?ie.getNextContextId():`cl-${Bo++}`}const ir=e=>`Stale read from <${e}>.`;function Oe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return oe(Xo(()=>e.each,e.children,t||void 0))}function B(e){const t=e.keyed,n=oe(()=>e.when,void 0,void 0),i=t?n:oe(n,void 0,{equals:(r,o)=>!r==!o});return oe(()=>{const r=i();if(r){const o=e.children;return typeof o=="function"&&o.length>0?pe(()=>o(t?r:()=>{if(!pe(i))throw ir("Show");return n()})):o}return e.fallback},void 0,void 0)}function Ln(e){const t=vn(()=>e.children),n=oe(()=>{const i=t(),r=Array.isArray(i)?i:[i];let o=()=>{};for(let a=0;a<r.length;a++){const l=a,s=r[a],c=o,f=oe(()=>c()?void 0:s.when,void 0,void 0),d=s.keyed?f:oe(f,void 0,{equals:(h,m)=>!h==!m});o=()=>c()||(d()?[l,f,s]:void 0)}return o});return oe(()=>{const i=n()();if(!i)return e.fallback;const[r,o,a]=i,l=a.children;return typeof l=="function"&&l.length>0?pe(()=>l(a.keyed?o():()=>{if(pe(n)()?.[0]!==r)throw ir("Match");return o()})):l},void 0,void 0)}function Se(e){return e}const Yo=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],qo=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline",...Yo]),Ho=new Set(["innerHTML","textContent","innerText","children"]),Zo=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ko=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Jo(e,t){const n=Ko[e];return typeof n=="object"?n[t]?n.$:void 0:n}const ea=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ta=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),na={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},ke=e=>oe(()=>e());function ia(e,t,n){let i=n.length,r=t.length,o=i,a=0,l=0,s=t[r-1].nextSibling,c=null;for(;a<r||l<o;){if(t[a]===n[l]){a++,l++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===a){const f=o<i?l?n[l-1].nextSibling:n[o-l]:s;for(;l<o;)e.insertBefore(n[l++],f)}else if(o===l)for(;a<r;)(!c||!c.has(t[a]))&&t[a].remove(),a++;else if(t[a]===n[o-1]&&n[l]===t[r-1]){const f=t[--r].nextSibling;e.insertBefore(n[l++],t[a++].nextSibling),e.insertBefore(n[--o],f),t[r]=n[o]}else{if(!c){c=new Map;let d=l;for(;d<o;)c.set(n[d],d++)}const f=c.get(t[a]);if(f!=null)if(l<f&&f<o){let d=a,h=1,m;for(;++d<r&&d<o&&!((m=c.get(t[d]))==null||m!==f+h);)h++;if(h>f-l){const S=t[a];for(;l<f;)e.insertBefore(n[l++],S)}else e.replaceChild(n[l++],t[a++])}else a++;else t[a++].remove()}}}const gi="_$DX_DELEGATE";function ra(e,t,n,i={}){let r;return It(o=>{r=o,t===document?e():y(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function k(e,t,n,i){let r;const o=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},a=()=>(r||(r=o())).cloneNode(!0);return a.cloneNode=a,a}function xe(e,t=window.document){const n=t[gi]||(t[gi]=new Set);for(let i=0,r=e.length;i<r;i++){const o=e[i];n.has(o)||(n.add(o),t.addEventListener(o,fa))}}function re(e,t,n){Ot(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function oa(e,t,n,i){Ot(e)||(i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i))}function aa(e,t,n){Ot(e)||(n?e.setAttribute(t,""):e.removeAttribute(t))}function ge(e,t){Ot(e)||(t==null?e.removeAttribute("class"):e.className=t)}function Ie(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=o=>r.call(e,n[1],o))}else e.addEventListener(t,n,typeof n!="function"&&n)}function la(e,t,n={}){const i=Object.keys(t||{}),r=Object.keys(n);let o,a;for(o=0,a=r.length;o<a;o++){const l=r[o];!l||l==="undefined"||t[l]||(hi(e,l,!1),delete n[l])}for(o=0,a=i.length;o<a;o++){const l=i[o],s=!!t[l];!l||l==="undefined"||n[l]===s||!s||(hi(e,l,!0),n[l]=s)}return n}function sa(e,t,n){if(!t)return n?re(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let r,o;for(o in n)t[o]==null&&i.removeProperty(o),delete n[o];for(o in t)r=t[o],r!==n[o]&&(i.setProperty(o,r),n[o]=r);return n}function ei(e,t={},n,i){const r={};return i||te(()=>r.children=Mt(e,t.children,r.children)),te(()=>typeof t.ref=="function"&&Ye(t.ref,e)),te(()=>ca(e,t,n,!0,r,!0)),r}function Ye(e,t,n){return pe(()=>e(t,n))}function y(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return Mt(e,t,i,n);te(r=>Mt(e,t(),r,n),i)}function ca(e,t,n,i,r={},o=!1){t||(t={});for(const a in r)if(!(a in t)){if(a==="children")continue;r[a]=mi(e,a,null,r[a],n,o,t)}for(const a in t){if(a==="children")continue;const l=t[a];r[a]=mi(e,a,l,r[a],n,o,t)}}function da(e){let t,n;return!Ot()||!(t=ie.registry.get(n=ga()))?e():(ie.completed&&ie.completed.add(t),ie.registry.delete(n),t)}function Ot(e){return!!ie.context&&!ie.done&&(!e||e.isConnected)}function ua(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function hi(e,t,n){const i=t.trim().split(/\s+/);for(let r=0,o=i.length;r<o;r++)e.classList.toggle(i[r],n)}function mi(e,t,n,i,r,o,a){let l,s,c,f,d;if(t==="style")return sa(e,n,i);if(t==="classList")return la(e,n,i);if(n===i)return i;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);i&&e.removeEventListener(h,i,typeof i!="function"&&i),n&&e.addEventListener(h,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);i&&e.removeEventListener(h,i,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),m=ea.has(h);if(!m&&i){const S=Array.isArray(i)?i[0]:i;e.removeEventListener(h,S)}(m||n)&&(Ie(e,h,n,m),m&&xe([h]))}else if(t.slice(0,5)==="attr:")re(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")aa(e,t.slice(5),n);else if((d=t.slice(0,5)==="prop:")||(c=Ho.has(t))||!r&&((f=Jo(t,e.tagName))||(s=qo.has(t)))||(l=e.nodeName.includes("-")||"is"in a)){if(d)t=t.slice(5),s=!0;else if(Ot(e))return n;t==="class"||t==="className"?ge(e,n):l&&!s&&!c?e[ua(t)]=n:e[f||t]=n}else{const h=r&&t.indexOf(":")>-1&&na[t.split(":")[0]];h?oa(e,h,t,n):re(e,Zo[t]||t,n)}return n}function fa(e){if(ie.registry&&ie.events&&ie.events.find(([s,c])=>c===e))return;let t=e.target;const n=`$$${e.type}`,i=e.target,r=e.currentTarget,o=s=>Object.defineProperty(e,"target",{configurable:!0,value:s}),a=()=>{const s=t[n];if(s&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?s.call(t,c,e):s.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},l=()=>{for(;a()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),ie.registry&&!ie.done&&(ie.done=_$HY.done=!0),e.composedPath){const s=e.composedPath();o(s[0]);for(let c=0;c<s.length-2&&(t=s[c],!!a());c++){if(t._$host){t=t._$host,l();break}if(t.parentNode===r)break}}else l();o(i)}function Mt(e,t,n,i,r){const o=Ot(e);if(o){!n&&(n=[...e.childNodes]);let s=[];for(let c=0;c<n.length;c++){const f=n[c];f.nodeType===8&&f.data.slice(0,2)==="!$"?f.remove():s.push(f)}n=s}for(;typeof n=="function";)n=n();if(t===n)return n;const a=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,a==="string"||a==="number"){if(o||a==="number"&&(t=t.toString(),t===n))return n;if(l){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=_t(e,n,i,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||a==="boolean"){if(o)return n;n=_t(e,n,i)}else{if(a==="function")return te(()=>{let s=t();for(;typeof s=="function";)s=s();n=Mt(e,s,n,i)}),()=>n;if(Array.isArray(t)){const s=[],c=n&&Array.isArray(n);if(Nn(s,t,n,r))return te(()=>n=Mt(e,s,n,i,!0)),()=>n;if(o){if(!s.length)return n;if(i===void 0)return n=[...e.childNodes];let f=s[0];if(f.parentNode!==e)return n;const d=[f];for(;(f=f.nextSibling)!==i;)d.push(f);return n=d}if(s.length===0){if(n=_t(e,n,i),l)return n}else c?n.length===0?pi(e,s,i):ia(e,n,s):(n&&_t(e),pi(e,s));n=s}else if(t.nodeType){if(o&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=_t(e,n,i,t);_t(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Nn(e,t,n,i){let r=!1;for(let o=0,a=t.length;o<a;o++){let l=t[o],s=n&&n[e.length],c;if(!(l==null||l===!0||l===!1))if((c=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))r=Nn(e,l,s)||r;else if(c==="function")if(i){for(;typeof l=="function";)l=l();r=Nn(e,Array.isArray(l)?l:[l],Array.isArray(s)?s:[s])||r}else e.push(l),r=!0;else{const f=String(l);s&&s.nodeType===3&&s.data===f?e.push(s):e.push(document.createTextNode(f))}}return r}function pi(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function _t(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let o=!1;for(let a=t.length-1;a>=0;a--){const l=t[a];if(r!==l){const s=l.parentNode===e;!o&&!a?s?e.replaceChild(r,l):e.insertBefore(r,n):s&&l.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}function ga(){return ie.getNextContextId()}const ha=!1,ma="http://www.w3.org/2000/svg";function pa(e,t=!1){return t?document.createElementNS(ma,e):document.createElement(e)}function ba(e,t){const n=oe(e);return oe(()=>{const i=n();switch(typeof i){case"function":return pe(()=>i(t));case"string":const r=ta.has(i),o=ie.context?da():pa(i,r);return ei(o,t,r),o}})}function ya(e){const[,t]=Vt(e,["component"]);return ba(()=>e.component,t)}function rr(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function i(r,o){if(n)return!(n=!1);const a={to:r,options:o,defaultPrevented:!1,preventDefault:()=>a.defaultPrevented=!0};for(const l of e)l.listener({...a,from:l.location,retry:s=>{s&&(n=!0),l.navigate(r,{...o,resolve:!1})}});return!a.defaultPrevented}return{subscribe:t,confirm:i}}let Mn;function ti(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Mn=window.history.state._depth}ti();function va(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Oa(e,t){let n=!1;return()=>{const i=Mn;ti();const r=i==null?null:Mn-i;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const wa=/^(?:[a-z0-9]+:)?\/\//i,_a=/^\/+|(\/)\/+$/g,or="http://sr";function Lt(e,t=!1){const n=e.replace(_a,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function en(e,t,n){if(wa.test(t))return;const i=Lt(e),r=n&&Lt(n);let o="";return!r||t.startsWith("/")?o=i:r.toLowerCase().indexOf(i.toLowerCase())!==0?o=i+r:o=r,(o||"/")+Lt(t,!o)}function $a(e,t){if(e==null)throw new Error(t);return e}function Sa(e,t){return Lt(e).replace(/\/*(\*.*)?$/g,"")+Lt(t)}function ar(e){const t={};return e.searchParams.forEach((n,i)=>{i in t?Array.isArray(t[i])?t[i].push(n):t[i]=[t[i],n]:t[i]=n}),t}function xa(e,t,n){const[i,r]=e.split("/*",2),o=i.split("/").filter(Boolean),a=o.length;return l=>{const s=l.split("/").filter(Boolean),c=s.length-a;if(c<0||c>0&&r===void 0&&!t)return null;const f={path:a?"":"/",params:{}},d=h=>n===void 0?void 0:n[h];for(let h=0;h<a;h++){const m=o[h],S=m[0]===":",w=S?s[h]:s[h].toLowerCase(),A=S?m.slice(1):m.toLowerCase();if(S&&Pn(w,d(A)))f.params[A]=w;else if(S||!Pn(w,A))return null;f.path+=`/${w}`}if(r){const h=c?s.slice(-c).join("/"):"";if(Pn(h,d(r)))f.params[r]=h;else return null}return f}}function Pn(e,t){const n=i=>i===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Ca(e){const[t,n]=e.pattern.split("/*",2),i=t.split("/").filter(Boolean);return i.reduce((r,o)=>r+(o.startsWith(":")?2:3),i.length-(n===void 0?0:1))}function lr(e){const t=new Map,n=Ki();return new Proxy({},{get(i,r){return t.has(r)||Zn(n,()=>t.set(r,oe(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function sr(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),i=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(i);)r.push(n+=t[1]),i=i.slice(t[0].length);return sr(i).reduce((o,a)=>[...o,...r.map(l=>l+a)],[])}const Pa=100,cr=Ct(),dr=Ct(),ur=()=>$a(Pt(cr),"<A> and 'use' router primitives can be only used inside a Route."),fr=()=>ur().navigatorFactory(),uu=()=>ur().params;function Ea(e,t=""){const{component:n,preload:i,load:r,children:o,info:a}=e,l=!o||Array.isArray(o)&&!o.length,s={key:e,component:n,preload:i||r,info:a};return gr(e.path).reduce((c,f)=>{for(const d of sr(f)){const h=Sa(t,d);let m=l?h:h.split("/*",1)[0];m=m.split("/").map(S=>S.startsWith(":")||S.startsWith("*")?S:encodeURIComponent(S)).join("/"),c.push({...s,originalPath:f,pattern:m,matcher:xa(m,!l,e.matchFilters)})}return c},[])}function ka(e,t=0){return{routes:e,score:Ca(e[e.length-1])*1e4-t,matcher(n){const i=[];for(let r=e.length-1;r>=0;r--){const o=e[r],a=o.matcher(n);if(!a)return null;i.unshift({...a,route:o})}return i}}}function gr(e){return Array.isArray(e)?e:[e]}function hr(e,t="",n=[],i=[]){const r=gr(e);for(let o=0,a=r.length;o<a;o++){const l=r[o];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const s=Ea(l,t);for(const c of s){n.push(c);const f=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!f)hr(l.children,c.pattern,n,i);else{const d=ka([...n],i.length);i.push(d)}n.pop()}}}return n.length?i:i.sort((o,a)=>a.score-o.score)}function En(e,t){for(let n=0,i=e.length;n<i;n++){const r=e[n].matcher(t);if(r)return r}return[]}function za(e,t,n){const i=new URL(or),r=oe(f=>{const d=e();try{return new URL(d,i)}catch{return console.error(`Invalid path ${d}`),f}},i,{equals:(f,d)=>f.href===d.href}),o=oe(()=>r().pathname),a=oe(()=>r().search,!0),l=oe(()=>r().hash),s=()=>"",c=Ue(a,()=>ar(r()));return{get pathname(){return o()},get search(){return a()},get hash(){return l()},get state(){return t()},get key(){return s()},query:n?n(c):lr(c)}}let bt;function Ra(){return bt}function Ta(e,t,n,i={}){const{signal:[r,o],utils:a={}}=e,l=a.parsePath||(u=>u),s=a.renderPath||(u=>u),c=a.beforeLeave||rr(),f=en("",i.base||"");if(f===void 0)throw new Error(`${f} is not a valid base path`);f&&!r().value&&o({value:f,replace:!0,scroll:!1});const[d,h]=W(!1);let m;const S=(u,g)=>{g.value===w()&&g.state===p()||(m===void 0&&h(!0),bt=u,m=g,Lo(()=>{m===g&&(A(m.value),v(m.state),$[1](O=>O.filter(E=>E.pending)))}).finally(()=>{m===g&&Ce(()=>{bt=void 0,u==="navigate"&&R(m),h(!1),m=void 0})}))},[w,A]=W(r().value),[p,v]=W(r().state),P=za(w,p,a.queryWrapper),z=[],$=W([]),L=oe(()=>typeof i.transformUrl=="function"?En(t(),i.transformUrl(P.pathname)):En(t(),P.pathname)),T=()=>{const u=L(),g={};for(let O=0;O<u.length;O++)Object.assign(g,u[O].params);return g},I=a.paramsWrapper?a.paramsWrapper(T,t):lr(T),_={pattern:f,path:()=>f,outlet:()=>null,resolvePath(u){return en(f,u)}};return te(Ue(r,u=>S("native",u),{defer:!0})),{base:_,location:P,params:I,isRouting:d,renderPath:s,parsePath:l,navigatorFactory:F,matches:L,beforeLeave:c,preloadRoute:X,singleFlight:i.singleFlight===void 0?!0:i.singleFlight,submissions:$};function C(u,g,O){pe(()=>{if(typeof g=="number"){g&&(a.go?a.go(g):console.warn("Router integration does not support relative routing"));return}const E=!g||g[0]==="?",{replace:x,resolve:Q,scroll:G,state:D}={replace:!1,resolve:!E,scroll:!0,...O},U=Q?u.resolvePath(g):en(E&&P.pathname||"",g);if(U===void 0)throw new Error(`Path '${g}' is not a routable path`);if(z.length>=Pa)throw new Error("Too many redirects");const Z=w();(U!==Z||D!==p())&&(ha||c.confirm(U,O)&&(z.push({value:Z,replace:x,scroll:G,state:p()}),S("navigate",{value:U,state:D})))})}function F(u){return u=u||Pt(dr)||_,(g,O)=>C(u,g,O)}function R(u){const g=z[0];g&&(o({...u,replace:g.replace,scroll:g.scroll}),z.length=0)}function X(u,g){const O=En(t(),u.pathname),E=bt;bt="preload";for(let x in O){const{route:Q,params:G}=O[x];Q.component&&Q.component.preload&&Q.component.preload();const{preload:D}=Q;g&&D&&Zn(n(),()=>D({params:G,location:{pathname:u.pathname,search:u.search,hash:u.hash,query:ar(u),state:null,key:""},intent:"preload"}))}bt=E}}function Aa(e,t,n,i){const{base:r,location:o,params:a}=e,{pattern:l,component:s,preload:c}=i().route,f=oe(()=>i().path);s&&s.preload&&s.preload();const d=c?c({params:a,location:o,intent:bt||"initial"}):void 0;return{parent:t,pattern:l,path:f,outlet:()=>s?b(s,{params:a,location:o,data:d,get children(){return n()}}):n(),resolvePath(m){return en(r.path(),m,f())}}}const Da=e=>t=>{const{base:n}=t,i=vn(()=>t.children),r=oe(()=>hr(i(),t.base||""));let o;const a=Ta(e,r,()=>o,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(a),b(cr.Provider,{value:a,get children(){return b(Qa,{routerState:a,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[ke(()=>(o=Ki())&&null),b(Fa,{routerState:a,get branches(){return r()}})]}})}})};function Qa(e){const t=e.routerState.location,n=e.routerState.params,i=oe(()=>e.preload&&pe(()=>{e.preload({params:n,location:t,intent:Ra()||"initial"})}));return b(B,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>b(r,{params:n,location:t,get data(){return i()},get children(){return e.children}})})}function Fa(e){const t=[];let n;const i=oe(Ue(e.routerState.matches,(r,o,a)=>{let l=o&&r.length===o.length;const s=[];for(let c=0,f=r.length;c<f;c++){const d=o&&o[c],h=r[c];a&&d&&h.route.key===d.route.key?s[c]=a[c]:(l=!1,t[c]&&t[c](),It(m=>{t[c]=m,s[c]=Aa(e.routerState,s[c-1]||e.routerState.base,bi(()=>i()[c+1]),()=>e.routerState.matches()[c])}))}return t.splice(r.length).forEach(c=>c()),a&&l?a:(n=s[0],s)}));return bi(()=>i()&&n)()}const bi=e=>()=>b(B,{get when(){return e()},keyed:!0,children:t=>b(dr.Provider,{value:t,get children(){return t.outlet()}})}),Bt=e=>{const t=vn(()=>e.children);return ct(e,{get children(){return t()}})};function Ia([e,t],n,i){return[e,i?r=>t(i(r)):t]}function La(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,i=Ia(W(n(e.get()),{equals:(r,o)=>r.value===o.value&&r.state===o.state}),void 0,r=>(!t&&e.set(r),ie.registry&&!ie.done&&(ie.done=!0),r));return e.init&&Qe(e.init((r=e.get())=>{t=!0,i[1](n(r)),t=!1})),Da({signal:i,create:e.create,utils:e.utils})}function Na(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Ma(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Ua=new Map;function ja(e=!0,t=!1,n="/_server",i){return r=>{const o=r.base.path(),a=r.navigatorFactory(r.base);let l,s;function c(w){return w.namespaceURI==="http://www.w3.org/2000/svg"}function f(w){if(w.defaultPrevented||w.button!==0||w.metaKey||w.altKey||w.ctrlKey||w.shiftKey)return;const A=w.composedPath().find(L=>L instanceof Node&&L.nodeName.toUpperCase()==="A");if(!A||t&&!A.hasAttribute("link"))return;const p=c(A),v=p?A.href.baseVal:A.href;if((p?A.target.baseVal:A.target)||!v&&!A.hasAttribute("state"))return;const z=(A.getAttribute("rel")||"").split(/\s+/);if(A.hasAttribute("download")||z&&z.includes("external"))return;const $=p?new URL(v,document.baseURI):new URL(v);if(!($.origin!==window.location.origin||o&&$.pathname&&!$.pathname.toLowerCase().startsWith(o.toLowerCase())))return[A,$]}function d(w){const A=f(w);if(!A)return;const[p,v]=A,P=r.parsePath(v.pathname+v.search+v.hash),z=p.getAttribute("state");w.preventDefault(),a(P,{resolve:!1,replace:p.hasAttribute("replace"),scroll:!p.hasAttribute("noscroll"),state:z?JSON.parse(z):void 0})}function h(w){const A=f(w);if(!A)return;const[p,v]=A;r.preloadRoute(v,p.getAttribute("preload")!=="false")}function m(w){clearTimeout(l);const A=f(w);if(!A)return s=null;const[p,v]=A;s!==p&&(l=setTimeout(()=>{r.preloadRoute(v,p.getAttribute("preload")!=="false"),s=p},20))}function S(w){if(w.defaultPrevented)return;let A=w.submitter&&w.submitter.hasAttribute("formaction")?w.submitter.getAttribute("formaction"):w.target.getAttribute("action");if(!A)return;if(!A.startsWith("https://action/")){const v=new URL(A,or);if(A=r.parsePath(v.pathname+v.search),!A.startsWith(n))return}if(w.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const p=Ua.get(A);if(p){w.preventDefault();const v=new FormData(w.target,w.submitter);p.call({r,f:w.target},w.target.enctype==="multipart/form-data"?v:new URLSearchParams(v))}}xe(["click","submit"]),document.addEventListener("click",d),e&&(document.addEventListener("mousemove",m,{passive:!0}),document.addEventListener("focusin",h,{passive:!0}),document.addEventListener("touchstart",h,{passive:!0})),document.addEventListener("submit",S),Qe(()=>{document.removeEventListener("click",d),e&&(document.removeEventListener("mousemove",m),document.removeEventListener("focusin",h),document.removeEventListener("touchstart",h)),document.removeEventListener("submit",S)})}}function Va(e){const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}function Wa(e){const t=()=>window.location.hash.slice(1),n=rr();return La({get:t,set({value:i,replace:r,scroll:o,state:a}){r?window.history.replaceState(va(a),"","#"+i):window.history.pushState(a,"","#"+i);const l=i.indexOf("#"),s=l>=0?i.slice(l+1):"";Ma(s,o),ti()},init:i=>Na(window,"hashchange",Oa(i,r=>!n.confirm(r&&r<0?r:t()))),create:ja(e.preload,e.explicitLinks,e.actionBase),utils:{go:i=>window.history.go(i),renderPath:i=>`#${i}`,parsePath:Va,beforeLeave:n}})(e)}const Xa="/dev/editor/assets/logo-Db7mqqtV.png";var Ga=k('<img alt="Althread logo">');const Ba=e=>(()=>{var t=Ga();return t.style.setProperty("height","42px"),re(t,"src",Xa),ei(t,e,!1,!1),t})();var Ya=k('<div class=confirmation-dialog-overlay role=button tabindex=-1><div class=confirmation-dialog role=dialog aria-modal=true><div class=confirmation-dialog-header><i class="codicon codicon-warning"></i></div><div class=confirmation-dialog-body><br><span class=confirmation-dialog-file-name></span></div><div class=confirmation-dialog-actions><button type=button class=button-secondary><i class="codicon codicon-close"></i>Cancel</button><button type=button class=button-primary><i class="codicon codicon-check"></i>Replace'),qa=k("<span class=confirmation-dialog-file-name>"),yi=k("<br>"),Ha=k("<div style=max-height:120px;overflow-y:auto;font-size:12px;color:#999;>"),Za=k('<div class=confirmation-dialog-overlay role=button tabindex=-1><div class=confirmation-dialog role=dialog aria-modal=true><div class=confirmation-dialog-header><i class="codicon codicon-trash"></i>Delete </div><div class=confirmation-dialog-body></div><div class=confirmation-dialog-actions><button type=button class=button-secondary><i class="codicon codicon-close"></i>Cancel</button><button type=button class=button-destructive><i class="codicon codicon-trash"></i>Delete'),Ka=k("<div>• <span class=confirmation-dialog-file-name>");const Ja=e=>(ue(()=>{if(e.isOpen){const t=n=>{n.key==="Escape"&&e.onCancel()};window.addEventListener("keydown",t),Qe(()=>window.removeEventListener("keydown",t))}}),b(B,{get when(){return e.isOpen},get children(){var t=Ya(),n=t.firstChild,i=n.firstChild;i.firstChild;var r=i.nextSibling,o=r.firstChild,a=o.nextSibling,l=r.nextSibling,s=l.firstChild,c=s.nextSibling;return t.$$keydown=f=>{f.key==="Escape"&&e.onCancel()},t.$$click=f=>{f.target===f.currentTarget&&e.onCancel()},y(i,()=>e.title,null),y(r,()=>e.message,o),y(a,()=>e.fileName),Ie(s,"click",e.onCancel,!0),Ie(c,"click",e.onConfirm,!0),t}})),el=e=>{ue(()=>{if(e.isOpen){const n=i=>{i.key==="Escape"&&e.onCancel()};window.addEventListener("keydown",n),Qe(()=>window.removeEventListener("keydown",n))}});const t=()=>{const n=e.paths.length;return n===1?["Are you sure you want to delete"," ",(()=>{var i=qa();return y(i,()=>e.paths[0]),i})(),"?"]:`Are you sure you want to delete ${n} items?`};return b(B,{get when(){return e.isOpen},get children(){var n=Za(),i=n.firstChild,r=i.firstChild,o=r.firstChild;o.nextSibling;var a=r.nextSibling,l=a.nextSibling,s=l.firstChild,c=s.nextSibling;return n.$$keydown=f=>{f.key==="Escape"&&e.onCancel()},n.$$click=f=>{f.target===f.currentTarget&&e.onCancel()},y(r,()=>e.paths.length===1?"Item":"Items",null),y(a,t,null),y(a,b(B,{get when(){return e.paths.length>1},get children(){return[yi(),yi(),(()=>{var f=Ha();return y(f,b(Oe,{get each(){return e.paths},children:d=>(()=>{var h=Ka(),m=h.firstChild,S=m.nextSibling;return y(S,d),h})()})),f})()]}}),null),Ie(s,"click",e.onCancel,!0),Ie(c,"click",e.onConfirm,!0),n}})};xe(["click","keydown"]);var tl=k('<div class=confirmation-dialog-overlay role=button tabindex=-1><div class=confirmation-dialog role=dialog aria-modal=true><div class=confirmation-dialog-header><i class="codicon codicon-file-code"></i></div><div class=confirmation-dialog-body><br><br><div style=font-size:12px;color:#858585;></div></div><div class=confirmation-dialog-actions><button type=button class=button-secondary><i class="codicon codicon-close"></i>Cancel</button><button type=button class=button-secondary><i class="codicon codicon-file"></i></button><button type=button class=button-primary><i class="codicon codicon-new-file">');const vi=e=>(ue(()=>{if(e.isOpen){const t=n=>{n.key==="Escape"&&e.onCancel()};window.addEventListener("keydown",t),Qe(()=>window.removeEventListener("keydown",t))}}),b(B,{get when(){return e.isOpen},get children(){var t=tl(),n=t.firstChild,i=n.firstChild;i.firstChild;var r=i.nextSibling,o=r.firstChild,a=o.nextSibling,l=a.nextSibling,s=r.nextSibling,c=s.firstChild,f=c.nextSibling;f.firstChild;var d=f.nextSibling;return d.firstChild,t.$$keydown=h=>{h.key==="Escape"&&e.onCancel()},t.$$click=h=>{h.target===h.currentTarget&&e.onCancel()},y(i,()=>e.title||"Load Example",null),y(r,()=>e.message||"Where would you like to load the example code?",o),y(l,()=>e.detail||"Choose to replace the current file content or create a new file tab."),Ie(c,"click",e.onCancel,!0),Ie(f,"click",e.onLoadInCurrent,!0),y(f,()=>e.currentLabel||"Current File",null),Ie(d,"click",e.onLoadInNew,!0),y(d,()=>e.newLabel||"New File",null),t}}));xe(["click","keydown"]);function nl(e,t){const n=new At,i=o=>{t()?.dispatch({effects:n.reconfigure(o)})};return ue(Ue([t,typeof e=="function"?e:()=>e],([o,a])=>{o&&a&&(n.get(o.state)?i(a):o.dispatch({effects:jt.appendConfig.of(n.of(a))}))},{defer:!0})),i}function il(e){const[t,n]=W(),[i,r]=W();function o(l){return nl(l,i)}const a=vt.updateListener.of(l=>e?.onModelViewUpdate?.(l));return o(a),ue(Ue(t,l=>{const s=Yn.create({doc:e?.value??""}),c=new vt({state:s,parent:l,dispatch:(f,d)=>{if(e?.onTransactionDispatched&&e.onTransactionDispatched(f,d),c.update([f]),f.docChanged){const m=f.state.doc.toString();e?.onValueChange?.(m)}}});xt(()=>r(c)),Qe(()=>{i()?.destroy(),r(void 0)})})),ue(Ue(i,l=>{const s=l?.state.doc.toString();s!==e?.value&&l&&l.dispatch({changes:{from:0,to:s?.length,insert:e?.value??""}})},{defer:!0})),{editorView:i,ref:n,createExtension:o}}const rl={dark:{text:"#abb2bf",keyword:"#c678dd",string:"#98c379",number:"#d19a66",comment:"#5c6370",typeName:"#e5c07b",functionName:"#61afef",property:"#e06c75",namespace:"#61afef"},light:{text:"#2f3441",keyword:"#8b38c9",string:"#2f7d32",number:"#b65c1b",comment:"#8b94a7",typeName:"#9f6a00",functionName:"#0f6bbd",property:"#bc4b63",namespace:"#0f6bbd"}},ol=e=>{const t=rl[e];return jr.define([{tag:V.content,color:t.text},{tag:[V.keyword,V.controlKeyword,V.definitionKeyword,V.operatorKeyword,V.modifier],color:t.keyword},{tag:[V.moduleKeyword],color:t.keyword,fontWeight:"bold"},{tag:[V.special(V.keyword)],color:t.keyword,fontStyle:"italic"},{tag:[V.string,V.special(V.string)],color:t.string},{tag:[V.number,V.bool,V.null],color:t.number},{tag:V.lineComment,color:t.comment,fontStyle:"italic"},{tag:V.blockComment,color:t.comment,fontStyle:"italic"},{tag:[V.className,V.typeName],color:t.typeName},{tag:V.variableName,color:t.text},{tag:V.function(V.variableName),color:t.functionName},{tag:V.propertyName,color:t.property},{tag:V.namespace,color:t.namespace},{tag:[V.separator,V.punctuation],color:t.text},{tag:V.derefOperator,color:t.text}])},Un=e=>Ur(ol(e),{fallback:!0});Un("dark");const al=Vr({"AtomicStatement/atomic AtomicStatement/@":V.modifier,"WhileStatement/while WaitStatement/await IfStatement/if IfStatement/else ReceiveExpression/receive SendExpression/send RunExpression/run ForStatement/for LoopStatement/loop ForStatement/in ReturnStatement/return BreakLoopStatement/break BreakLoopStatement/continue UnaryExpression/void":V.controlKeyword,"ImportItem/as":V.operatorKeyword,"VariableDeclaration/let VariableDeclaration/const SharedDeclaration/let SharedDeclaration/const ChannelDeclarationStatement/channel":V.definitionKeyword,"LtlUnaryExpression/eventually LtlUnaryExpression/always LtlBinaryExpression/until":V.special(V.keyword),"LtlIfExpression/if LtlIfExpression/else LtlForExpression/for LtlForExpression/in":V.special(V.keyword),"MainBlock/main ProgramBlock/program GlobalBlock/shared ImportBlock/import FunctionBlock/fn ConditionBlock/Condition/always ConditionBlock/Condition/check":V.moduleKeyword,PrivateDirective:V.moduleKeyword,"PrivateDirective/private":V.moduleKeyword,"FunctionBlock/FnName":V.function(V.definition(V.variableName)),"CallExpression/FnName":V.function(V.variableName),FnName:V.function(V.variableName),"RunExpression/ProgName":V.function(V.variableName),ProgName:V.function(V.variableName),"MemberExpression > identifier:first-child":V.namespace,"CallExpression/MemberExpression > identifier:last-child":V.function(V.variableName),"MemberExpression > identifier:last-child":V.propertyName,"MemberExpression/object":V.namespace,"CallExpression/MemberExpression/property":V.function(V.variableName),"MemberExpression/property":V.propertyName,"ImportBlock/as":V.operatorKeyword,"ImportBlock/ImportList/ImportItem/ImportPath":V.namespace,"ImportBlock/ImportList/ImportItem/ImportAlias":V.namespace,ImportPath:V.namespace,ImportAlias:V.namespace,ImportSlash:V.separator,TemplateString:V.special(V.string),super:V.atom,BooleanLiteral:V.bool,this:V.self,null:V.null,Star:V.modifier,TypeToken:V.typeName,"Variable/self":V.self,LocalVariableName:V.variableName,SharedVariableName:V.propertyName,ProgName:V.className,UpdateOp:V.updateOperator,LineComment:V.lineComment,BlockComment:V.blockComment,Number:V.number,String:V.string,ArithOp:V.arithmeticOperator,LogicOp:V.logicOperator,BitOp:V.bitwiseOperator,CompareOp:V.compareOperator,RegExp:V.regexp,Equals:V.definitionOperator,Arrow:V.function(V.punctuation),"( )":V.paren,"[ ]":V.squareBracket,"{ }":V.brace,"InterpolationStart InterpolationEnd":V.special(V.brace),".":V.derefOperator,", ;":V.separator}),ll={__proto__:null,shared:10,let:16,const:18,self:44,true:46,false:46,null:48,void:54,typeof:56,delete:58,private:96,main:98,channel:106,while:110,for:114,in:116,if:124,else:126,run:132,loop:138,atomic:142,send:150,await:154,seq:158,first:160,receive:166,return:182,break:186,continue:188,program:192,always:198,check:200,until:210,eventually:214,fn:224,import:230,as:242},sl=Wr.deserialize({version:14,states:"HhQ`QPOOPzOPOOO!PQPO'#EaOOQO'#Fa'#FaOOQO'#E}'#E}Q`QPOOO!UQPO'#C`O!ZQPO'#D]O!`QPO'#D[O!eQPO'#D[O!pQPO'#E_OOQO'#Eb'#EbO!pQPO'#EoO!xQPO'#ErP!}O`O'#C^POOO)CAO)CAOO$dQPO'#EeOOQO,5:{,5:{OOQO-E8{-E8{O$kQPO,58zOOQO,59w,59wO&WQQO'#D`OOQO,59v,59vO!`QPO,59vO!pQPO,5:yO!pQPO,5;ZOOQO'#Ff'#FfOOQO'#Dq'#DqO&_QPO,5:yOOQO'#DT'#DTO&dQPO,5;ZO!pQPO,5;^POOO'#E|'#E|P&iO`O,58xPOOO,58x,58xO&tQQO'#CfO'xQQO'#CqOOQO'#Cp'#CpO#YQPO'#CvO(|QPO'#CvO#YQPO'#C|O*fQQO'#EfO*sQPO'#DTO+|QQO'#FeO*{QQO'#FeO,TQPO'#DSOOQO'#Fe'#FeO,YQPO'#FUOOQO'#Ef'#EfO,eQPO,5;POOQO,5;P,5;PO#YQPO'#EjO#YQPO'#ElO,lQPO'#EmOOQO'#FO'#FOO,qQPO1G.fO,|QPO'#CcOOQO1G.f1G.fO-RQSO'#CfO-^QSO'#CqO(|QPO'#C|O-iQPO'#DSO-lQPO'#DUO-qQPO'#DnO$vQQO'#DtO-vQPO'#DwO-{QPO'#EUO.QQSO'#EWOOQO'#Fi'#FiOOQO'#FR'#FRO.VQQO,59zOOQO,59z,59zO,lQPO'#DaO.^QPO'#DbO(|QPO'#DdO,lQPO'#DfO(|QPO'#DkO.iQPO'#DoO$vQQO'#DrO.^QPO'#DxO.tQPO'#DzO/RQPO'#EVO/WQPO'#EYO/_QPO'#E[OOQO1G/b1G/bO/jQPO1G0eO/oQPO1G0uO/tQSO1G0eO/tQSO1G0uO/|QPO'#EwO0[QPO'#EvO0gQPO'#EuO0oQPO1G0xPOOO-E8z-E8zPOOO1G.d1G.dOOQO,59b,59bOOQO,5;U,5;UO)zQQO,59hO0tQPO,5;YO(|QPO,59iO(|QPO,59iO(|QPO,59iO!pQPO,59pO1PQWO'#DWOOQO,59n,59nO#YQPO,5;ROOQO,5;p,5;pOOQO-E9S-E9SOOQO1G0k1G0kO1ZQPO,5;WOOQO'#Cq'#CqO1fQPO,5;XOOQO-E8|-E8|OOQO7+$Q7+$QOOQO'#Cf'#CfO1kQPO,58}O2XQQO,59hOOQO,5:Y,5:YOOQO,5:`,5:`OOQO,5:c,5:cOOQO,5:p,5:pO(|QPO,5:rOOQO-E9P-E9POOQO1G/f1G/fO2`QPO,59{O2kQPO'#FjO2yQPO,59|O3RQQO,5:OO3YQPO,5:QO3RQQO,5:VO-iQPO,5:ZO3_QPO'#DqO,TQPO,5:ZOOQO,5:^,5:^O,TQPO,5:dO3gQQO'#EPO3qQQO'#EPO3yQPO'#EQO4XQPO'#D|OOQO,5:f,5:fOOQO,5:q,5:qO4^QQO,5:tOOQO,5:t,5:tOOQO,5:v,5:vO4eQPO,5:vO/tQSO7+&PO/tQSO7+&aO4jQPO'#FdO4rQPO'#ChO5WQPO7+&PO5]QPO7+&aO!pQPO'#FVO5bQPO,5;cO!pQPO,5;bO5pQPO,5;aO5{QPO,5;aOOQO7+&d7+&dOOQO1G/S1G/SOOQO1G0t1G0tOOQO1G/T1G/TO7OQQO1G/TO7VQQO1G/TOOQO1G/[1G/[O7^QQO'#FgO(|QPO'#FgO7hQPO,59rOOQO1G0m1G0mO#YQPO1G0rO(|QPO1G0sOOQO1G.i1G.iO(|QPO1G.iO7mQSO1G.iO7rQQO1G0^OOQO1G/g1G/gO(|QPO1G/gO7mQSO1G/gO.^QPO,5<UO/tQSO1G/hO7yQPO1G/hOOQO1G/j1G/jO(|QPO1G/lO8dQQO1G/qOOQO1G/u1G/uOOQO1G0O1G0OOOQO,5:k,5:kO$vQQO,5:kO9pQPO'#FnO9{QQO,5:lO:TQPO,5:lO:YQPO,5:hOOQO1G0`1G0`OOQO1G0b1G0bO:dQPO<<IkO:iQPO<<I{O7mQSO'#FPO:nQPO,5<OO/tQSO,59SO!`QPO<<IkO:vQSO<<I{OOQO,5;q,5;qOOQO-E9T-E9TOOQO'#Ez'#EzOOQO1G0|1G0|OOQO,5;r,5;rO:{QPO1G0{OOQO-E9U-E9UO;WQWO'#FQO;_QPO,5<RO;gQQO,5<ROOQO1G/^1G/^O;qQPO7+&^O;|QQO'#DjOOQO'#Di'#DiO<TQPO7+&_O<YQQO7+$TO<aQPO7+$TO<iQQO7+%RO<pQPO7+%ROOQO1G1p1G1pO<xQPO7+%SO/tQSO7+%SO!`QPO7+%WO!`QPO7+%]OOQO1G0V1G0VOOQO'#ES'#ESOOQO'#Fo'#FoO<}QPO,5<YO$vQQO1G0WO=VQQO1G0WOOQO'#FS'#FSO=_QPO1G0SOOQO1G0S1G0SO!`QPOAN?VO:vQSOAN?gOOQO,5;k,5;kOOQO-E8}-E8}O=iQPO1G.nOOQOAN?VAN?VO7mQSO'#EqO!`QPOAN?gP!pQPO'#FWO=nQQO,5;lO(|QPO,5;lOOQO-E9O-E9OO=xQPO1G1mO>QQPO<<IxO(|QPO,5:UO#YQPO<<IyOOQO<<Go<<GoO(|QPO<<GoOOQO<<Hm<<HmO(|QPO<<HmO>iQPO<<HnO>wQPO<<HnOOQO<<Hr<<HrOOQO<<Hw<<HwO9pQPO'#FTO>|QPO1G1tOOQO1G1t1G1tOOQO7+%r7+%rO$vQQO7+%rOOQO-E9Q-E9QOOQO7+%n7+%nOOQOG24qG24qO!`QPOG25ROOQO7+$Y7+$YOOQO,5;],5;]OOQOG25RG25RO?UQQO1G1WO?`QPOAN?dO?eQQO1G/pO?lQPOAN?eO?wQQOAN=ZO@OQQOAN>XO@VQPOAN>YO.^QPOAN>YO@[QPOAN>YOOQO,5;o,5;oOOQO-E9R-E9ROOQO7+'`7+'`OOQO<<I^<<I^OOQOLD*mLD*mO#YQPOG25OOOQOG25PG25POOQOG22uG22uOOQOG23sG23sOOQOG23tG23tO@jQPOG23tO.^QPOG23tO@oQPOLD*jOOQOLD)`LD)`O@zQPOLD)`OAPQPO1G/qOOQO!$'NU!$'NUOOQO!$'Lz!$'LzO3RQQO,5:VO(|QPO'#DkOAvQQO'#DrOAvQQO'#DtOAvQQO,5:kOCWQQO'#EPOCbQQO'#EPO.tQPO'#Dz",stateData:"Cs~O#}OS$OOSPOS$PPQ~OTUO!RWO#SYO#VZO#WZO#d[O#g]O$[VO~O$P^O~OU`O~OUcO~O!QdO~OUeO~O!RgO#ShO#diO~O$UjO$VjO~O#hoO~O$QpO$RpO$SrO~O^xOb!OOc!OOfuOg!OOh!OOi!OOkwOlwOmwOnvOowO!Z!VO!`!UO#V!TO#_!TO$UtO$VsO~O}!SO~P#YOW!YOX!YO}!ZO~OUeOW!jOX!jO^!^OfuO!V!kO!X!lO!Z!mO!`!nO!d!oO!g!pO!i!bO!j!bO!m!qO!o!rO!}!tO#P!uO#Q!uO$U!]O$V![O~O}!iO~P$vO^!yO~O^!zO~O$QpO$RpO$S#QO~O^$YXoYXrYXsYXtYXuYXy$YX|YX#[YX#]YX`YXUYX!wYX_YX}YX$aYX~O^$YXoeXreXseXteXueXy$YX|eX#[eX#]eX`eXUeX!weX_eX}eX$aeX~O^!^Ob!OOc!OOfuOg!OOh!OOi!OOkwOlwOmwOnwOowO$UtO$VsO~Oo#WOr#VOs#VOt#VOu#XO#[#YX#]#YX`#YX~O|#YXU#YX}#YX~P)zOy#YO^wX~Oy#YOo$XXr$XXs$XXt$XXu$XX|$XX#[$XX#]$XX`$XXU$XX!w$XX_$XX}$XX$a$XX~O^#ZO~P*{O^#ZO~O|#^O#[#]O#]#]O~O}#`O~P#YO$U#bO~OW!YOX!YO}#eO~O$V#fO~O^$YXy$YX!{YX~O^$YXy$YX!{eX~O^#ZOy#YO~O|#iO~O|#kO~O|#lO~O!{#mO~O}#oO~P$vOfuO$U#bO$V#fO~O^!^O$UjO$VjO~O!q$OO!r$OO!u#}O~P(|O|$QO~O|$SO~P(|O|$TO$UjO$VjO~O^$VO~O^$WO~O]$YO`$WP~O#l$]O_#kX#m#kX#o#kX~O#m$_O_#jX#o#jX~O_$`O#o#iX~O#o$bO~O`$dO#[#]O#]#]O~O{$jO`$ZP~P(|OU$mO#[#]O#]#]O~O![$nO~OZ$qOa$pO|$oO~Oo#WOr#VOs#VOt#VOu#XO~O`$cO~P1vOZ$uOa$tO|$sO~Oy$vO^$^X$_$^X|$^X~O^$wO$_$xO~OUeO~P1vO![$zO~Oy#YO^!eX~O|%OO!w%PO~P1vO|%OO!w%PO~O^%QOfuO$U#bO$V#fO~OU%TO~O|%UO~P1vO|%VO~O_%YO`$WX~O^%[O_[X`[Xa[X|[XU[X~O`%]O~O`%^O~O#l$]O_#ka#m#ka#o#ka~O$UjO$VjO#o#ia~O_%dO#o#ia~Or#VOs#VOt#VOuqi|qi#[qi#]qi`qiUqi!wqi_qi}qi$aqi~Ooqi~P6TOo#WO~P6TO_%fO`$ZX~P1vO`%iO~O]$YO~O|!zi~P1vO^%tO~O!a%vO^!_if!_i}!_i$U!_i$V!_i~OU!_iW!_iX!_i!V!_i!X!_i!Z!_i!`!_i!d!_i!g!_i!i!_i!j!_i!m!_i!o!_i!}!_i#P!_i#Q!_i|!_i!w!_i~P8OOb%xOc%xO$U#bO~O!w%{O|!ta~O^%QO~O}&PO!u#}O~P(|O`&QO~O`&RO~O_%YO`$Wa~O$d&WO~O$UjO$VjO#o#ii~O{&[O~P(|O_%fO`$Za~O_%fO`$Za~P1vO}&_O#[#]O#]#]O~O$a&`O~P1vOU&aO~O|&bO~P1vOa&cO|&bO~O|&dO~P1vOa&eO|&dO~O`&fO~O_&jO`&lO~O!w&nO|!ti~O}&pO!u#}O~P(|O`&sO~O_#ta`#ta~P1vO_%fO`$Zi~O!a&wO|#`y#[#`y#]#`y`#`yU#`y}#`y~OfuO$U#bO$V#fO$`&}O~O`'OO~O_&jO`'RO~O_#ti`#ti~P1vOU'UO~OU!^i~P1vO}'VO#[#]O#]#]O~O|'WO~P1vO|'XO~P1vO|'YO~OfuO$U#bO$V#fO$`'[O~O|'^O~O}'aO#[#]O#]#]O~O|'bO~Ob!_ic!_ig!_ih!_ii!_ik!_il!_im!_in!_io!_i!u!_i~P8OOUeOW!jOX!jO^!^OfuO!V!kO!X!lO!Z!mO!`'dO!d!oO!g'eO!i'fO!j'fO!m!qO!o'jO!}!tO#P!uO#Q!uO$U!]O$V![O~O|%OO!w'gO~P1vO|%OO!w'gO~ObyP#l$Pi#lr~",goto:"9}$dPP$eP$hPP$lPP$pP%|PPPPPPP&c'pPPPP)WPPPPP)})WPPPP+R,U-]P.cPPP$h.oPP.s/r/rP/rP/rPP0O0U/rPP/r0YP0f/rP/rPP/r0oP/rP0{PP1P1XP)SP/r/r1aP/rP/rPP$hP$h1mPP1q1t2`PP2`P2`2`2`$hP2l$hPP2r2u2}PP3TP3W3^3d3j3p3z4Q4W4^4d4jPPPPPPPP4pPP4t5Z7Q8pP8s9ZPPP9q9wR_PTROTT!Wc!X#^u`evwx!R!T!U!^!b!h!k!l!n!p!q!r!t#V#W#X#Z#]#m#}$j$m$n$p$t$v$z%P%T%f%{&O&[&`&a&c&e&f&n&}'O'U'['d'e'f'g'jR#g!Y^$X!y!z$V$W$w%[%tQ%o$qQ%q$uQ&S%YR&t&W!h!O`vwx!R!T!U!^!l!n!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%T%f&O&[&`&a&c&e'U'd'jd!ee!b!h!p%P%{&n'e'f'ga#q!k!q#}$v&f&}'O'[#^u`evwx!R!T!U!^!b!h!k!l!n!p!q!r!t#V#W#X#Z#]#m#}$j$m$n$p$t$v$z%P%T%f%{&O&[&`&a&c&e&f&n&}'O'U'['d'e'f'g'jQ#c!VQ#p!jQ#t!mT%y%Q&j!i!O`vwx!R!T!U!^!l!n!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%T%f&O&[&`&a&c&e'U'd'j!h|`vwx!R!T!U!^!l!n!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%T%f&O&[&`&a&c&e'U'd'jg!`e!b!h!o!p%P%{&n'e'f'g!h!O`vwx!R!T!U!^!l!n!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%T%f&O&[&`&a&c&e'U'd'je!de!b!h!p%P%{&n'e'f'gQn[!|}`evwx!R!T!U!^!b!h!l!n!p!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%P%T%f%{&O&[&`&a&c&e&n'U'd'e'f'g'jR!xi!h{`vwx!R!T!U!^!l!n!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%T%f&O&[&`&a&c&e'U'd'jd!_e!b!h!p%P%{&n'e'f'gR#v!oU#[{}!_S$|#v#xR$}#zTXOTQfWd!fe!b!h!p%P%{&n'e'f'gQ!vgQ$y#sQ${#uQ&V%]Q&h%uQ&i%vQ&q&QQ&u&XQ'T&rR'`'ce!fe!b!h!p%P%{&n'e'f'gQ%m$nR%u$zT%l$n$ze!ae!b!h!p%P%{&n'e'f'gQlYQ!whR#x!oe!ce!b!h!p%P%{&n'e'f'gT$P!r'jS$P!r'jT%}%T&OQ#|!rV'i%T&O'je!se!b!h!p%P%{&n'e'f'gTQOTRaQS!P`!RS#Sv!TQ#UxQ#a!UQ$l#]Q%j$mQ&y&aR']'Ue!Q`vx!R!T!U#]$m&a'UQ&X%^R&r&RR#OoQ!}oV%c$`%d&YX!|o$`%d&YR%b$_Qq^R#PqQTORbTQ!XcR#d!XQ%Z$XR&T%ZQ%g$iS&]%g&^R&^%hQ!heR#n!hQ&O%TR&o&OQ&k%zR'Q&kQ!R`R#_!RQ$^!{R%`$^Q$a!}R%e$aTSOTQ$Z!yQ$[!zQ%W$VQ%X$WQ%s$wQ&U%[R&g%t`y`!R!T!U#]$m&a'US#RvwQ#TxQ#h!^Q#s!lQ#u!nQ#{!rQ$R!tQ$e#VQ$f#WQ$g#XQ$i#ZQ$r#mQ%h$jS%k$n$zQ%n$pQ%p$tQ&Z%fQ&v&[Q&x&`Q&z&cQ&{&eQ'c'dV'h%T&O'jSkYhSm[i!|z`evwx!R!T!U!^!b!h!l!n!p!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%P%T%f%{&O&[&`&a&c&e&n'U'd'e'f'g'jW!{o$`%d&YQ#w!oQ$U!uQ$h#YQ%_$]R%a$_R$k#ZS!ge!hS#j!b'fS#y!p'eS%w%P'gQ&m%{R'S&nQ#r!kQ#z!qQ%S#}Q%r$vQ&|&fS'Z&}'OR'_'[Q%R#}R%|%SQ%z%QR'P&j",nodeNames:"⚠ LineComment BlockComment Project GlobalBlock shared { SharedDeclaration let const SharedVariableName : Type TypeToken ( , ) = Number String Variable LocalVariableName self BooleanLiteral null RegExp UnaryExpression void typeof delete LogicOp ArithOp ParenthesizedExpression BinaryExpression ArithOp ArithOp ArithOp CompareOp CallExpression FnName MemberExpression . ArgList ... ; } MainBlock PrivateDirective private main CodeBlock VariableDeclaration ChannelDeclarationStatement channel WhileStatement while ForStatement for in ListExpression RangeExpression IfStatement if else RunStatement RunExpression run ProgName LoopStatement loop AtomicStatement atomic LogicOp SendStatement SendExpression send WaitStatement await WaitingBlock seq first WaitingBlockCase ReceiveExpression receive Literal => CallStatement AssignmentStatement AssignmentExpression UpdateOp ReturnStatement return BreakLoopStatement break continue ProgramBlock program ConditionBlock Condition always check FormulaBlock LtlExpression LtlBinaryExpression LogicOp until LtlUnaryExpression eventually LtlIfExpression LtlForExpression ParenthesizedLtlExpression FunctionBlock fn ReturnType ImportBlock import [ ImportList ImportItem ImportPath ImportSlash as ImportAlias ]",maxTerm:158,nodeProps:[["group",-11,18,19,20,23,24,25,26,32,33,38,40,"Expression"]],skippedNodes:[0,1,2,124],repeatNodeCount:11,tokenData:"Ia~R!PXY$UYZ$gZ[$U]^$gpq$Uqr$lrs$yuv&qvw'Owx'Zxy(|yz)Rz{)W{|)`|})h}!O)m!O!P)}!P!Q+m!Q!R1Z!R![2a![!]4x!]!^4}!^!_5S!_!`5Z!`!a5m!b!c5t!c!}5{!}#O6p#P#Q6u#T#U6z#U#V7o#V#Y6z#Y#Z:m#Z#]6z#]#^=l#^#`6z#`#a>a#a#d6z#d#e?y#e#g6z#g#hBW#h#iE}#i#o6z#o#pIP#p#qIU#q#rI[$f$g$U~$ZS#}~XY$UZ[$Upq$U$f$g$U~$lO$O~f$qPnb!_!`$tS$yOuS~%OWc~OY$yZr$yrs%hs#O$y#O#P%m#P;'S$y;'S;=`&k<%lO$y~%mOc~~%pRO;'S$y;'S;=`%y;=`O$y~&OXc~OY$yZr$yrs%hs#O$y#O#P%m#P;'S$y;'S;=`&k;=`<%l$y<%lO$y~&nP;=`<%l$y[&vPsS!_!`&yW'OO!{W~'RPvw'U~'ZO#[~~'`Wc~OY'ZZw'Zwx%hx#O'Z#O#P'x#P;'S'Z;'S;=`(v<%lO'Z~'{RO;'S'Z;'S;=`(U;=`O'Z~(ZXc~OY'ZZw'Zwx%hx#O'Z#O#P'x#P;'S'Z;'S;=`(v;=`<%l'Z<%lO'Z~(yP;=`<%l'Z~)RO^~~)WO`~[)]PtS!_!`&yn)ePof!_!`&y~)mO_~n)rQof!_!`&y!`!a)xW)}O$dW~*SQy^!O!P*Y!Q![*gd*_P$aS!O!P*b`*gO{`~*lSb~!Q![*g!g!h*x#R#S*g#X#Y*x~*{S{|+X}!O+X!Q![+b#R#S+b~+[Q!Q![+b#R#S+b~+gQb~!Q![+b#R#S+b~+t]#lQrSOY,mZz,mz{/[{!P,m!P!Q0O!Q!_,m!_!`0g!`!},m!}#O-v#O#P.u#P;'S,m;'S;=`/U<%lO,mb,rXibOY,mZ!P,m!P!Q-_!Q!},m!}#O-v#O#P.u#P;'S,m;'S;=`/U<%lO,mb-dUib#Z#[-_#]#^-_#a#b-_#g#h-_#i#j-_#m#n-_b-yVOY-vZ#O-v#O#P.`#P#Q,m#Q;'S-v;'S;=`.o<%lO-vb.cSOY-vZ;'S-v;'S;=`.o<%lO-vb.rP;=`<%l-vb.xSOY,mZ;'S,m;'S;=`/U<%lO,mb/XP;=`<%l,m~/cX$P~ibOY,mZ!P,m!P!Q-_!Q!},m!}#O-v#O#P.u#P;'S,m;'S;=`/U<%lO,m~0TSP~OY0OZ;'S0O;'S;=`0a<%lO0O~0dP;=`<%l0Oj0nX!{WibOY,mZ!P,m!P!Q-_!Q!},m!}#O-v#O#P.u#P;'S,m;'S;=`/U<%lO,m~1`Xb~!O!P1{!Q![2a!g!h*x#R#S2a#U#V2}#X#Y*x#b#c2x#c#d3l#l#m4T~2OQ!Q![2U#R#S2U~2ZQb~!g!h*x#X#Y*x~2fUb~!O!P1{!Q![2a!g!h*x#R#S2a#X#Y*x#b#c2x~2}Ob~~3QR!Q!R3Z!R!S3Z#R#S3Z~3`Sb~!Q!R3Z!R!S3Z#R#S3Z#b#c2x~3oQ!Q!Y3u#R#S3u~3zRb~!Q!Y3u#R#S3u#b#c2x~4WS!Q![4d!c!i4d#R#S4d#T#Z4d~4iTb~!Q![4d!c!i4d#R#S4d#T#Z4d#b#c2x~4}OZ~~5SO|~U5ZO$_QuS^5bQaQ!{W!_!`$t!`!a5hS5mO!wSU5tO$`QuSU5{O$[Q!jS~6QW$V~tu5{!Q![5{!c!}5{#R#S5{#T#o5{$g;'S5{;'S;=`6j<%lO5{~6mP;=`<%l5{~6uO#h~~6zO#o~f7PW$Uftu6z!Q![6z!c!}6z#R#S6z#T#o6z$g;'S6z;'S;=`7i<%lO6zf7lP;=`<%l6zn7tY$Uftu6z!Q![6z!c!}6z#R#S6z#T#c6z#c#d8d#d#o6z$g;'S6z;'S;=`7i<%lO6zn8iY$Uftu6z!Q![6z!c!}6z#R#S6z#T#c6z#c#d9X#d#o6z$g;'S6z;'S;=`7i<%lO6zn9^Y$Uftu6z!Q![6z!c!}6z#R#S6z#T#`6z#`#a9|#a#o6z$g;'S6z;'S;=`7i<%lO6zn:TW]W$Uftu6z!Q![6z!c!}6z#R#S6z#T#o6z$g;'S6z;'S;=`7i<%lO6zn:rY$Uftu6z!Q![6z!c!}6z#R#S6z#T#`6z#`#a;b#a#o6z$g;'S6z;'S;=`7i<%lO6zn;gY$Uftu6z!Q![6z!c!}6z#R#S6z#T#c6z#c#d<V#d#o6z$g;'S6z;'S;=`7i<%lO6zn<[X$Uftu6z!Q![6z!c!}6z#R#S6z#T#U<w#U#o6z$g;'S6z;'S;=`7i<%lO6zn<|Y$Uftu6z!Q![6z!c!}6z#R#S6z#T#h6z#h#i9|#i#o6z$g;'S6z;'S;=`7i<%lO6zn=qY$Uftu6z!Q![6z!c!}6z#R#S6z#T#b6z#b#c<w#c#o6z$g;'S6z;'S;=`7i<%lO6zn>fY$Uftu6z!Q![6z!c!}6z#R#S6z#T#]6z#]#^?U#^#o6z$g;'S6z;'S;=`7i<%lO6zn?ZY$Uftu6z!Q![6z!c!}6z#R#S6z#T#g6z#g#h<w#h#o6z$g;'S6z;'S;=`7i<%lO6zn@OY$Uftu6z!Q![6z!c!}6z#R#S6z#T#f6z#f#g@n#g#o6z$g;'S6z;'S;=`7i<%lO6zn@sY$Uftu6z!Q![6z!c!}6z#R#S6z#T#c6z#c#dAc#d#o6z$g;'S6z;'S;=`7i<%lO6znAhY$Uftu6z!Q![6z!c!}6z#R#S6z#T#V6z#V#W9|#W#o6z$g;'S6z;'S;=`7i<%lO6znB]Y$Uftu6z!Q![6z!c!}6z#R#S6z#T#h6z#h#iB{#i#o6z$g;'S6z;'S;=`7i<%lO6znCQY$Uftu6z!Q![6z!c!}6z#R#S6z#T#f6z#f#gCp#g#o6z$g;'S6z;'S;=`7i<%lO6znCuY$Uftu6z!Q![6z!c!}6z#R#S6z#T#]6z#]#^De#^#o6z$g;'S6z;'S;=`7i<%lO6znDjY$Uftu6z!Q![6z!c!}6z#R#S6z#T#b6z#b#cEY#c#o6z$g;'S6z;'S;=`7i<%lO6znE_Y$Uftu6z!Q![6z!c!}6z#R#S6z#T#Z6z#Z#[9|#[#o6z$g;'S6z;'S;=`7i<%lO6znFSY$Uftu6z!Q![6z!c!}6z#R#S6z#T#i6z#i#jFr#j#o6z$g;'S6z;'S;=`7i<%lO6znFwY$Uftu6z!Q![6z!c!}6z#R#S6z#T#d6z#d#eGg#e#o6z$g;'S6z;'S;=`7i<%lO6znGlY$Uftu6z!Q![6z!c!}6z#R#S6z#T#`6z#`#aH[#a#o6z$g;'S6z;'S;=`7i<%lO6znHaY$Uftu6z!Q![6z!c!}6z#R#S6z#T#X6z#X#Y9|#Y#o6z$g;'S6z;'S;=`7i<%lO6z~IUOU~~IXP#p#q'U~IaO}~",tokenizers:[1,2,3,4,new Xr("j~RQYZXz{^~^O$R~~aP!P!Qd~iO$S~~",25,140)],topRules:{Project:[0,3]},specialized:[{term:144,get:e=>ll[e]||-1}],tokenPrec:1590}),jn=e=>`file:///${e.split("/").map(encodeURIComponent).join("/")}`,kn=e=>decodeURIComponent(e.replace(/^file:\/\/\//,""));function cl(e,t){const n=e.slice(0,Math.max(0,Math.min(t,e.length)));return{line:n.split(`
`).length-1,character:n.length-n.lastIndexOf(`
`)-1}}function Ke(e,t){let n=0;for(let r=0;r<t.line;r++){const o=e.indexOf(`
`,n);if(o<0)return e.length;n=o+1}const i=e.indexOf(`
`,n);return Math.min(n+t.character,i<0?e.length:i)}class dl{worker;nextId=0;pending=new Map;documents=new Map;ready;closed=!1;constructor(){this.worker=new Worker(new URL("/dev/editor/assets/language-server.worker-HouAA7e9.js",import.meta.url),{type:"module"}),this.worker.onmessage=t=>{const{id:n,result:i,error:r}=t.data,o=this.pending.get(n);o&&(clearTimeout(o.timer),this.pending.delete(n),r?o.reject(new Error(r.message)):o.resolve(i))},this.worker.onerror=()=>this.dispose(new Error("Althread language worker failed to start")),this.ready=this.send("initialize",{capabilities:{general:{positionEncodings:["utf-16"]},textDocument:{completion:{completionItem:{snippetSupport:!0}}}},rootUri:null}).then(()=>this.notify({jsonrpc:"2.0",method:"initialized"})),this.ready.catch(()=>{})}notify(t){this.closed||this.worker.postMessage(t)}send(t,n){if(this.closed)return Promise.reject(new Error("Language client closed"));const i=this.nextId++;return new Promise((r,o)=>{const a=setTimeout(()=>{this.pending.delete(i),o(new Error(`Language request timed out: ${t}`))},15e3);this.pending.set(i,{resolve:l=>r(l),reject:o,timer:a}),this.worker.postMessage({jsonrpc:"2.0",id:i,method:t,params:n})})}async request(t,n,i){await this.ready;const r=new Set(Object.keys(i).map(jn));for(const o of this.documents.keys())r.has(o)||(this.notify({jsonrpc:"2.0",method:"textDocument/didClose",params:{textDocument:{uri:o}}}),this.documents.delete(o));for(const[o,a]of Object.entries(i)){const l=jn(o),s=this.documents.get(l);if(s?.text===a)continue;const c=(s?.version??0)+1;this.documents.set(l,{text:a,version:c}),s?this.notify({jsonrpc:"2.0",method:"textDocument/didChange",params:{textDocument:{uri:l,version:c},contentChanges:[{text:a}]}}):this.notify({jsonrpc:"2.0",method:"textDocument/didOpen",params:{textDocument:{uri:l,version:c,text:a,languageId:o.endsWith(".alt")?"althread":"plaintext"}}})}return this.send(t,n)}dispose(t=new Error("Language client closed")){if(!this.closed){this.closed=!0,this.worker.terminate();for(const n of this.pending.values())clearTimeout(n.timer),n.reject(t);this.pending.clear()}}}const ul={2:"method",3:"function",6:"variable",7:"class",9:"namespace",14:"keyword",15:"keyword",21:"constant",25:"type"},mr=jt.define(),fl=()=>qn.define({create:()=>null,update(e,t){(t.docChanged||t.selection)&&(e=null);for(const n of t.effects)n.is(mr)&&(e=n.value);return e},provide:e=>qr.from(e)}),tn=jt.define(),gl=()=>qn.define({create:()=>null,update(e,t){t.docChanged&&(e=null);for(const n of t.effects)n.is(tn)&&(e=n.value);return e},provide:e=>Hr.from(e)});function Rt(e,t="cm-lsp-info"){const n=document.createElement("div");return n.className=t,n.textContent=e,n}function hl(e,t){for(const n of[...t].sort((i,r)=>Ke(e,r.range.start)-Ke(e,i.range.start)))e=e.slice(0,Ke(e,n.range.start))+n.newText+e.slice(Ke(e,n.range.end));return e}function ml(e){const t=fl(),n=gl();let i,r=!1;const o=jn(e.filePath),a=p=>({...e.getWorkspace?.(),[e.filePath]:p}),l=(p,v,P)=>r?Promise.reject(new Error("Editor language session closed")):(i??=new dl,i.request(p,v,a(P))),s=(p,v)=>({textDocument:{uri:o},position:cl(p,v)}),c=(p,v)=>!r&&p.state.doc.toString()===v,f=(p,v)=>{if(v.uri===o){const P=Ke(p.state.doc.toString(),v.range.start);p.dispatch({selection:Kr.cursor(P),effects:vt.scrollIntoView(P,{y:"center"})}),p.focus()}else e.onNavigate?.(kn(v.uri),v.range.start)},d=(p,v=p.state.selection.main.head)=>{const P=p.state.doc.toString();return l("textDocument/definition",s(P,v),P).then(z=>{z&&c(p,P)&&f(p,z)}).catch(console.warn),!0},h=p=>{p.dispatch({effects:tn.of(null)}),p.focus()},m=p=>{const v=p.state.doc.toString();return l("textDocument/references",{...s(v,p.state.selection.main.head),context:{includeDeclaration:!0}},v).then(P=>{c(p,v)&&p.dispatch({effects:tn.of(()=>{const z=Rt(`${P.length} reference(s)`,"cm-lsp-panel");for(const L of P){const T=document.createElement("button");T.textContent=`${kn(L.uri)}:${L.range.start.line+1}:${L.range.start.character+1}`,T.onclick=()=>f(p,L),z.append(T)}const $=document.createElement("button");return $.textContent="Close",$.onclick=()=>h(p),z.append($),{dom:z,top:!1}})})}).catch(console.warn),!0},S=p=>{if(p.state.readOnly)return!1;const v=p.state.doc.toString(),P=s(v,p.state.selection.main.head);return l("textDocument/prepareRename",P,v).then(z=>{!z||!c(p,v)||p.dispatch({effects:tn.of(()=>{const $=document.createElement("form");$.className="cm-lsp-panel";const L=document.createElement("label");L.textContent="Rename symbol: ";const T=document.createElement("input");T.value=z.placeholder,T.required=!0,T.pattern="[a-zA-Z][a-zA-Z0-9_]*",L.append(T),$.append(L);const I=document.createElement("button");I.type="submit",I.textContent="Rename",$.append(I);const _=document.createElement("button");_.type="button",_.textContent="Cancel",_.onclick=()=>h(p),$.append(_);const C=Rt("");return C.setAttribute("role","status"),$.append(C),$.onkeydown=F=>{F.key==="Escape"&&(F.preventDefault(),h(p))},$.onsubmit=F=>{F.preventDefault();const R=a(v);I.disabled=!0,l("textDocument/rename",{...P,newName:T.value},v).then(X=>{if(!c(p,v)||p.state.readOnly)return;if(!X){C.textContent="Cannot rename: invalid name, name conflict, or read-only reference.";return}const u=a(v),g={};for(const[O,E]of Object.entries(X.changes)){const x=kn(O);if(R[x]===void 0||R[x]!==u[x]){C.textContent="A file changed. Retry the rename.";return}if(O!==o&&!e.onWorkspaceChange){C.textContent="Cross-file rename is unavailable in this editor.";return}g[x]=hl(R[x],E)}e.onWorkspaceChange?.(g),g[e.filePath]!==void 0&&p.dispatch({changes:{from:0,to:p.state.doc.length,insert:g[e.filePath]},userEvent:"input.rename"}),h(p)}).catch(X=>{C.textContent=String(X)}).finally(()=>{I.disabled=!1})},{dom:$,top:!0,mount:()=>{T.focus(),T.select()}}})})}).catch(console.warn),!0},w=async p=>{if(p.state.readOnly)return null;const v=p.matchBefore(/\w*/),P=p.state.sliceDoc(Math.max(0,p.pos-1),p.pos);if(!p.explicit&&!v?.text&&P!==".")return null;const z=p.state.doc.toString();try{const $=await l("textDocument/completion",s(z,p.pos),z);return p.aborted||r?null:{from:v?.from??p.pos,options:$.items.map(L=>({label:L.label,type:ul[L.kind]??"variable",detail:L.detail,info:L.documentation,apply:L.insertTextFormat===2?Zr((L.insertText??L.label).replace(/\$(\d+)/g,(T,I)=>`\${${I==="0"?"99":I}:}`)):L.insertText}))}}catch($){return r||console.warn("Althread completion unavailable",$),null}},A=Gr.fromClass(class{constructor(p){this.view=p}timer;update(p){!p.docChanged&&!p.selectionSet&&!p.focusChanged||(clearTimeout(this.timer),!(!p.view.hasFocus||p.view.state.readOnly)&&(this.timer=setTimeout(()=>this.signature(),150)))}signature(){const p=this.view,v=p.state.doc.toString(),P=p.state.selection.main.head;l("textDocument/signatureHelp",s(v,P),v).then(z=>{if(!c(p,v)||p.state.selection.main.head!==P||!p.hasFocus)return;const $=z?.signatures[z.activeSignature];p.dispatch({effects:mr.of($?{pos:P,above:!0,create:()=>{const L=Rt($.label),T=$.parameters[z.activeParameter];return T&&L.append(Rt(`Parameter ${z.activeParameter+1}: ${T.label}`)),{dom:L}}}:null)})}).catch(z=>{r||console.warn(z)})}destroy(){r=!0,clearTimeout(this.timer),i?.dispose()}});return{completion:w,extension:[A,t,n,Bi(),Br(async p=>{if(p.state.readOnly)return[];const v=p.state.doc.toString();try{const P=await l("textDocument/diagnostic",{textDocument:{uri:o}},v);return c(p,v)?P.items.map(z=>({from:Ke(v,z.range.start),to:Ke(v,z.range.end),severity:"error",message:z.message,source:z.source})):[]}catch(P){return r||console.warn("Althread diagnostics unavailable",P),[]}},{delay:450}),Yr(async(p,v)=>{const P=p.state.doc.toString();try{const z=await l("textDocument/hover",s(P,v),P);return!z||!c(p,P)?null:{pos:Ke(P,z.range.start),end:Ke(P,z.range.end),above:!0,create:()=>({dom:Rt(z.contents.value)})}}catch{return null}}),Hn.of([{key:"F12",run:d},{key:"Shift-F12",run:m},{key:"F2",run:S},{key:"Escape",run:p=>p.state.field(n)?(h(p),!0):!1}]),vt.domEventHandlers({mousedown(p,v){if(!(p.metaKey||p.ctrlKey)||p.button!==0)return!1;const P=v.posAtCoords({x:p.clientX,y:p.clientY});return P===null?!1:(p.preventDefault(),d(v,P))}}),vt.baseTheme({".cm-lsp-info":{padding:"6px 10px",fontFamily:"monospace",whiteSpace:"pre-wrap",maxWidth:"600px"},".cm-lsp-panel":{padding:"8px",display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap",maxHeight:"180px",overflow:"auto"},".cm-lsp-panel button, .cm-lsp-panel input":{font:"inherit",color:"inherit",background:"transparent",border:"1px solid #888",borderRadius:"3px",padding:"3px 6px"},".cm-lsp-panel button":{cursor:"pointer"}})]}}const pl=sl.configure({props:[al,Jr.add({Application:e=>e.column(e.node.from)+e.unit}),eo.add({Application:to})]}),Oi=no.define({parser:pl,languageData:{commentTokens:{line:"//"}}});function wi(e){const t=ml(e);return new io(Oi,[t.extension,Oi.data.of({autocomplete:t.completion})])}const pr=e=>e.split(".").pop()?.toLowerCase()??"",_i=e=>pr(e)==="alt",bl=async e=>{const t=pr(e);switch(t){case"js":case"jsx":case"ts":case"tsx":return(await Ne(async()=>{const{javascript:n}=await import("./index-BlqAb9HM.js");return{javascript:n}},__vite__mapDeps([0,1]))).javascript({jsx:t.endsWith("x"),typescript:t.startsWith("ts")});case"css":return(await Ne(async()=>{const{css:n}=await import("./index-DSRLhUMa.js");return{css:n}},__vite__mapDeps([2,1]))).css();case"html":case"htm":return(await Ne(async()=>{const{html:n}=await import("./index-27Oa6cPa.js");return{html:n}},__vite__mapDeps([3,1,2,0]))).html();case"json":return(await Ne(async()=>{const{json:n}=await import("./index-LBiqdFRM.js");return{json:n}},__vite__mapDeps([4,1]))).json();case"md":case"markdown":return(await Ne(async()=>{const{markdown:n}=await import("./index-BYirMQhs.js");return{markdown:n}},__vite__mapDeps([5,1,3,2,0]))).markdown();case"py":return(await Ne(async()=>{const{python:n}=await import("./index-etIPbnKY.js");return{python:n}},__vite__mapDeps([6,1]))).python();case"rs":return(await Ne(async()=>{const{rust:n}=await import("./index-Dj1yPGQn.js");return{rust:n}},__vite__mapDeps([7,1]))).rust();case"cpp":case"cc":case"cxx":case"c":case"h":case"hpp":return(await Ne(async()=>{const{cpp:n}=await import("./index-D-fBKaJZ.js");return{cpp:n}},__vite__mapDeps([8,1]))).cpp();default:return[]}},br=jt.define(),yr=jt.define();class yl extends Po{constructor(t){super(),this.label=t}toDOM(){const t=document.createElement("span");return t.className="cm-process-badge",t.textContent=this.label,t}}const vl=qn.define({create(){return zt.none},update(e,t){e=e.map(t.changes);for(const n of t.effects)if(n.is(br)){const i=n.value,r=[],o=new Map;for(const l of i)o.has(l.line)||o.set(l.line,[]),l.label&&o.get(l.line).push(l.label);const a=Array.from(o.keys()).sort((l,s)=>l-s);for(const l of a)if(l>0&&l<=t.state.doc.lines){const s=t.state.doc.line(l);r.push(zt.line({attributes:{style:"background-color: rgba(255, 165, 0, 0.2); border-left: 3px solid orange;"}}).range(s.from));const c=o.get(l);c.length>0&&r.push(zt.widget({widget:new yl(c.join(", ")),side:1}).range(s.to))}e=zt.set(r.sort((l,s)=>l.from-s.from))}else n.is(yr)&&(e=zt.none);return e},provide:e=>vt.decorations.from(e)}),Ol=[ro(),oo(),ao(),lo(),so(),co(),uo(),Yn.allowMultipleSelections.of(!0),fo(),go(),ho(),mo(),po(),bo(),yo(),vo(),Hn.of([...Oo,...wo,..._o,...$o,...So,...xo,...Co])],$i=e=>{const t=e==="dark";return vt.theme({"&":{color:t?"#abb2bf":"#2f3441",backgroundColor:t?"#1e1e1e":"#f7f1e7"},".cm-tooltip":{backgroundColor:t?"#252526":"#fffaf2",color:t?"#ddd":"#2f3441",border:`1px solid ${t?"#555":"#c6bda9"}`},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:t?"#094771":"#d9e8f5",color:t?"#fff":"#16324c"},".cm-content":{caretColor:t?"#528bff":"#0f6bbd"},".cm-cursor, .cm-dropCursor":{borderLeft:`2px solid ${t?"#528bff":"#0f6bbd"}`},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground":{backgroundColor:t?"rgba(38, 79, 120, 0.70) !important":"rgba(245, 184, 96, 0.38) !important"},".cm-selectionLayer":{mixBlendMode:"normal"},".cm-selectionLayer .cm-selectionBackground":{mixBlendMode:"normal"},".cm-content ::selection":{backgroundColor:t?"rgba(38, 79, 120, 1.00)":"rgba(245, 184, 96, 0.52)"},".cm-gutters":{backgroundColor:t?"#1e1e1e":"#efe5d6",color:t?"#5c6370":"#8b7f72",borderRight:`1px solid ${t?"#333":"#dccfbf"}`,minWidth:"60px"},".cm-lineNumbers":{minWidth:"40px",paddingRight:"8px",textAlign:"right"},".cm-lineNumbers .cm-gutterElement":{minWidth:"32px",textAlign:"right"},".cm-activeLineGutter":{backgroundColor:t?"#3a3f4b":"#e5d9c5"},".cm-activeLine":{backgroundColor:t?"rgba(58, 63, 75, 0.35)":"rgba(196, 148, 88, 0.10)",boxShadow:t?"inset 0 0 0 1px rgba(255, 255, 255, 0.06)":"inset 0 0 0 1px rgba(163, 118, 63, 0.14)"},".cm-selectionMatch":{backgroundColor:t?"rgba(255, 217, 102, 0.15)":"rgba(209, 136, 38, 0.16)",borderRadius:"2px"},".cm-selectionMatch.cm-selectionMatch-main":{backgroundColor:t?"rgba(38, 79, 120, 0.30)":"rgba(214, 156, 75, 0.22)"},".cm-foldGutter":{width:"16px",paddingLeft:"2px"},".cm-lintGutter":{width:"16px"},".cm-scroller":{fontFamily:"'Menlo', 'Monaco', 'Courier New', monospace",fontSize:"13px",lineHeight:"1.5"},".cm-process-badge":{backgroundColor:t?"orange":"#c96f1a",color:t?"black":"#fffaf2",borderRadius:"4px",padding:"0 4px",fontSize:"10px",fontWeight:"bold",marginLeft:"10px",verticalAlign:"middle",display:"inline-block"}},{dark:t})},wl=({defaultValue:e,onValueChange:t,filePath:n="main.alt",theme:i="dark",getWorkspace:r,onNavigate:o,onWorkspaceChange:a})=>{let l=e??"",s=!1;const c=il({value:e,onValueChange:T=>{l=T,t?.(T)}});let f=n;const d=new At,h=new At,m=new At,S=new At,w=T=>({filePath:T,getWorkspace:r,onNavigate:o,onWorkspaceChange:a}),A=T=>{f=T;const I=c.editorView();if(!(!I||!d.get(I.state))){if(_i(T)){I.dispatch({effects:d.reconfigure(wi(w(T)))});return}I.dispatch({effects:d.reconfigure([])}),bl(T).then(_=>{const C=c.editorView();C&&f===T&&C.dispatch({effects:d.reconfigure(_)})}).catch(_=>console.warn(`Could not load highlighting for ${T}`,_))}};c.createExtension(Ol),c.createExtension(Hn.of([Eo,{key:"Mod-/",run:ko},{key:"Mod-s",preventDefault:!0,run:()=>!0}])),c.createExtension(m.of($i(i))),c.createExtension(S.of(Un(i))),c.createExtension(d.of(_i(n)?wi(w(n)):[])),c.createExtension(Bi()),c.createExtension(h.of([])),c.createExtension(vl);const p=()=>{try{return c.editorView&&c.editorView()?c.editorView():null}catch(T){return console.warn("Editor view not ready:",T),null}},v=T=>{l=T;const I=p();if(I)try{const _=I.state.update({changes:{from:0,to:I.state.doc.length,insert:T}});return I.update([_]),!0}catch(_){return console.warn("Failed to update editor content:",_),!1}return!1},P=T=>{s=T;const I=p();if(I)try{const _=T?Yn.readOnly.of(!0):[];return I.dispatch({effects:h.reconfigure(_)}),!0}catch(_){return console.warn("Failed to set read-only mode:",_),!1}return!1};return ue(()=>{c.editorView()&&(v(l),A(f),P(s))}),{...c,updateLanguage:A,updateTheme:T=>{const I=p();if(I)try{return I.dispatch({effects:[m.reconfigure($i(T)),S.reconfigure(Un(T))]}),!0}catch(_){return console.warn("Failed to update editor theme:",_),!1}return!1},getCurrentFileName:()=>f,safeEditorView:p,safeUpdateContent:v,setReadOnly:P,highlightLines:T=>{const I=p();if(I)try{const _=T.map(C=>typeof C=="number"?{line:C}:C);return I.dispatch({effects:br.of(_)}),!0}catch(_){return console.warn("Failed to highlight lines:",_),!1}return!1},clearHighlights:()=>{const T=p();if(T)try{return T.dispatch({effects:yr.of(null)}),!0}catch(I){return console.warn("Failed to clear highlights:",I),!1}return!1}}};var _l=k('<div class=empty-editor><div class=empty-editor-content><div class=empty-editor-icon><i class="codicon codicon-new-file"></i></div><h3>No file is open</h3><p>Create a new file to get started</p><button type=button class="vscode-button primary"><i class="codicon codicon-new-file"></i>New File');const $l=e=>(()=>{var t=_l(),n=t.firstChild,i=n.firstChild,r=i.nextSibling,o=r.nextSibling,a=o.nextSibling;return Ie(a,"click",e.onNewFile,!0),t})();xe(["click"]);var Sl=k("<div class=file-tabs-container>"),xl=k('<div class=file-tab role=button tabindex=0><i class="codicon codicon-file"></i><span class=tab-label></span><button type=button class=tab-close-button title=Close><i class="codicon codicon-close">'),Cl=k('<i class="codicon codicon-lock read-only-icon"title="Read-only file">');const Pl=e=>{let t;ue(Ue(()=>e.activeFile,i=>{i&&t&&requestAnimationFrame(()=>{const r=t?.querySelector(".file-tab.active");r&&r.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})})}));const n=i=>{const r=e.getFilePath(i);return r==="deps"||r.startsWith("deps/")};return(()=>{var i=Sl(),r=t;return typeof r=="function"?Ye(r,i):t=i,y(i,b(Oe,{get each(){return e.openFiles},children:o=>(()=>{var a=xl(),l=a.firstChild,s=l.nextSibling,c=s.nextSibling;return a.$$keydown=f=>{(f.key==="Enter"||f.key===" ")&&f.currentTarget===f.target&&(f.preventDefault(),e.onTabClick(o))},a.$$click=()=>e.onTabClick(o),y(s,()=>o.name),y(a,(()=>{var f=ke(()=>!!n(o));return()=>f()&&Cl()})(),c),c.$$click=f=>{f.stopPropagation(),e.onTabClose(o)},te(f=>{var d=e.activeFile!==null&&e.getFilePath(e.activeFile)===e.getFilePath(o),h=!!n(o);return d!==f.e&&a.classList.toggle("active",f.e=d),h!==f.t&&a.classList.toggle("read-only",f.t=h),f},{e:void 0,t:void 0}),a})()})),i})()};xe(["click","keydown"]);var Si=k("<pre>"),El=k("<span>File: <button type=button class=file-link>"),kl=k("<span><button type=button class=file-link></button>:<!>:"),zl=k("<span>"),Rl=k("<div class=error-display>");function Tl(e){const t=()=>{if(!e.error.filePath)return(()=>{var r=Si();return y(r,()=>e.error.message),r})();const i=e.error.message.split(`
`);return(()=>{var r=Si();return y(r,()=>i.map((o,a)=>{if(o.startsWith("File: ")){const s=o.substring(6);return(()=>{var c=El(),f=c.firstChild,d=f.nextSibling;return d.$$click=()=>e.onFileClick?.(s),re(d,"title",`Click to open ${s}`),y(d,s),y(c,()=>a<i.length-1&&`
`,null),c})()}const l=o.match(/^(\s*at\s+)([^:]+):(\d+):(\d+)$/);if(l){const[,s,c,f,d]=l;return(()=>{var h=kl(),m=h.firstChild,S=m.nextSibling,w=S.nextSibling;return w.nextSibling,y(h,s,m),m.$$click=()=>e.onFileClick?.(c),re(m,"title",`Click to open ${c} at line ${f}`),y(m,c),y(h,f,w),y(h,d,null),y(h,()=>a<i.length-1&&`
`,null),h})()}return(()=>{var s=zl();return y(s,o,null),y(s,()=>a<i.length-1&&`
`,null),s})()})),r})()};return(()=>{var n=Rl();return y(n,t),n})()}xe(["click"]);const Vn=200;function gn(e){return e==null?JSON.stringify(e):Array.isArray(e)?`[${e.map(t=>gn(t)).join(",")}]`:typeof e=="object"?`{${Object.entries(e).sort(([n],[i])=>n.localeCompare(i)).map(([n,i])=>`${JSON.stringify(n)}:${gn(i)}`).join(",")}}`:JSON.stringify(e)}function xi(e,t={}){const{mode:n="check",stepLines:i=[],violationPath:r=[]}=t,o=[],a=[],l=new Set(r),s=new Set;for(let c=0;c<r.length-1;c++)s.add(`${r[c]}->${r[c+1]}`);for(let c=0;c<e.length;c++){const f=e[c],d=f.metadata,h=n==="check"&&l.has(c),m=n==="run"?c===e.length-1:(d.successors?.length??0)===0,S=c===0?"initial":h?"violation":m?"final":"normal",w=n==="run"?`Step ${c}`:`State ${c}`,A=[n==="check"?`depth ${d.level}`:null,S==="initial"?"initial state":null,S==="final"?n==="run"?"last state":"no successor":null,h?"on the counterexample":null].filter(Boolean);if(o.push({id:c,label:"",level:d.level,kind:S,title:A.length?`${w} · ${A.join(" · ")}`:w,rawState:{vm:f.vm,stepIndex:n==="run"?c:void 0,nodeIndex:c,level:d.level},isViolationNode:h}),n==="run"){if(c<e.length-1){const p=i[c]||[];a.push({id:`e${c}`,from:c,to:c+1,label:`step ${c+1}`,lines:p,font:{size:0}})}}else if(d.successors){let p=0;for(const v of d.successors){const P=v.name+"#"+v.pid+": "+v.lines.join(","),z=s.has(`${c}->${v.to_index}`);a.push({id:`e${c}-${v.to_index}-${p++}`,from:c,to:v.to_index,label:P,lines:v.lines.map($=>Number($)),font:{size:0},isViolationEdge:z})}}}return{nodes:o,edges:a}}var Al=k("<span class=literal-null>null"),Dl=k("<span class=literal-int>"),Ql=k("<span class=literal-float>"),Fl=k('<span class=literal-string>"<!>"'),Il=k("<span class=literal-bool>"),Ll=k("<span class=literal-list>[<!>]"),Nl=k("<span class=literal-tuple>(<!>)"),Ml=k("<span class=literal-process>Proc(<!>#<!>)");function dt(e){return b(Ln,{get children(){return[b(Se,{get when(){return e.value.type==="Null"},get children(){return Al()}}),b(Se,{get when(){return e.value.type==="Int"},get children(){var t=Dl();return y(t,()=>e.value.value),t}}),b(Se,{get when(){return e.value.type==="Float"},get children(){var t=Ql();return y(t,()=>e.value.value),t}}),b(Se,{get when(){return e.value.type==="String"},get children(){var t=Fl(),n=t.firstChild,i=n.nextSibling;return i.nextSibling,y(t,()=>e.value.value,i),t}}),b(Se,{get when(){return e.value.type==="Bool"},get children(){var t=Il();return y(t,()=>e.value.value?"true":"false"),t}}),b(Se,{get when(){return e.value.type==="List"},get children(){var t=Ll(),n=t.firstChild,i=n.nextSibling;return i.nextSibling,y(t,b(Oe,{get each(){return e.value.value},children:(r,o)=>[ke(()=>o()>0&&", "),b(dt,{value:r})]}),i),t}}),b(Se,{get when(){return e.value.type==="Tuple"},get children(){var t=Nl(),n=t.firstChild,i=n.nextSibling;return i.nextSibling,y(t,b(Oe,{get each(){return e.value.value},children:(r,o)=>[ke(()=>o()>0&&", "),b(dt,{value:r})]}),i),t}}),b(Se,{get when(){return e.value.type==="Process"},get children(){var t=Ml(),n=t.firstChild,i=n.nextSibling,r=i.nextSibling,o=r.nextSibling;return o.nextSibling,y(t,()=>e.value.value[0],i),y(t,()=>e.value.value[1],o),t}})]}})}var Ul=k("<span class=change-indicator>!"),jl=k("<div class=variables-grid>"),Vl=k('<div><button type=button><i></i><i class="codicon codicon-symbol-variable header-section-icon"></i><span class=section-label>Globals</span><span></span></button><div>'),Wl=k("<div class=empty-state>No globals"),Xl=k("<div class=variable-item><span class=var-name></span> = <span class=var-value>");function Gl(e){const t=`globals-${wn()}`,n=oe(()=>Object.entries(e.globals).sort((r,o)=>r[0].localeCompare(o[0]))),i=()=>!e.collapsed&&!e.canCollapse;return(()=>{var r=Vl(),o=r.firstChild,a=o.firstChild,l=a.nextSibling,s=l.nextSibling,c=s.nextSibling,f=o.nextSibling;return Ie(o,"click",e.onToggle,!0),re(o,"aria-controls",t),y(c,b(B,{get when(){return e.hasChanged},get children(){return Ul()}}),null),y(c,()=>n().length,null),re(f,"id",t),y(f,b(B,{get when(){return n().length>0},get fallback(){return Wl()},get children(){var d=jl();return y(d,b(Oe,{get each(){return n()},children:([h,m])=>(()=>{var S=Xl(),w=S.firstChild,A=w.nextSibling,p=A.nextSibling;return y(w,h),y(p,b(dt,{value:m})),S})()})),d}})),te(d=>{var h=`section${e.collapsed?" section-collapsed":""}`,m=`collapsible-header${i()?" header-locked":""}`,S=i()?-1:0,w=!e.collapsed,A=i()?"Cannot collapse — only section open":e.collapsed?"Expand Globals":"Collapse Globals",p=`codicon ${e.collapsed?"codicon-chevron-left":"codicon-chevron-right"} header-toggle-icon`,v=`header-count${e.hasChanged?" changed":""}`,P=`section-body${e.collapsed?" section-body-hidden":""}`;return h!==d.e&&ge(r,d.e=h),m!==d.t&&ge(o,d.t=m),S!==d.a&&re(o,"tabindex",d.a=S),w!==d.o&&re(o,"aria-expanded",d.o=w),A!==d.i&&re(o,"title",d.i=A),p!==d.n&&ge(a,d.n=p),v!==d.s&&ge(c,d.s=v),P!==d.h&&ge(f,d.h=P),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),r})()}xe(["click"]);var Bl=k("<span class=change-indicator>!"),Yl=k("<div class=subsection><div class=subsection-title>Pending Delivery</div><div class=message-list>"),ql=k("<div class=subsection><div class=subsection-title>Waiting (Unconnected)</div><div class=message-list>"),Hl=k('<div><button type=button><i></i><i class="codicon codicon-mail header-section-icon"></i><span class=section-label>In-flight messages</span><span></span></button><div>'),Zl=k("<div class=empty-state>No pending messages"),Kl=k('<div class=message-card><div class=message-route><span class="message-endpoint from">:</span><i class="codicon codicon-arrow-right route-arrow"></i><span class="message-endpoint to">:</span></div><div class=message-payload>'),Ci=k("<div class=payload-item>"),Jl=k('<div class="message-card waiting"><div class=message-route><span class="message-endpoint from">:</span><i class="codicon codicon-question route-arrow"></i><span class=message-status>No connection</span></div><div class=message-payload>');function es(e){const t=`messages-${wn()}`,n=()=>e.pendingDeliveries.length>0||e.waitingSend.length>0,i=()=>e.pendingDeliveries.length+e.waitingSend.length,r=()=>!e.collapsed&&!e.canCollapse;return(()=>{var o=Hl(),a=o.firstChild,l=a.firstChild,s=l.nextSibling,c=s.nextSibling,f=c.nextSibling,d=a.nextSibling;return Ie(a,"click",e.onToggle,!0),re(a,"aria-controls",t),y(f,b(B,{get when(){return e.hasChanged},get children(){return Bl()}}),null),y(f,i,null),re(d,"id",t),y(d,b(B,{get when(){return n()},get fallback(){return Zl()},get children(){return[b(B,{get when(){return e.pendingDeliveries.length>0},get children(){var h=Yl(),m=h.firstChild,S=m.nextSibling;return y(S,b(Oe,{get each(){return e.pendingDeliveries},children:w=>(()=>{var A=Kl(),p=A.firstChild,v=p.firstChild,P=v.firstChild,z=v.nextSibling,$=z.nextSibling,L=$.firstChild,T=p.nextSibling;return y(v,()=>w.from_pid,P),y(v,()=>w.from_channel,null),y($,()=>w.to_pid,L),y($,()=>w.to_channel,null),y(T,b(Oe,{get each(){return w.values},children:I=>(()=>{var _=Ci();return y(_,b(dt,{value:I})),_})()})),A})()})),h}}),b(B,{get when(){return e.waitingSend.length>0},get children(){var h=ql(),m=h.firstChild,S=m.nextSibling;return y(S,b(Oe,{get each(){return e.waitingSend},children:w=>(()=>{var A=Jl(),p=A.firstChild,v=p.firstChild,P=v.firstChild,z=p.nextSibling;return y(v,()=>w.pid,P),y(v,()=>w.name,null),y(z,b(Oe,{get each(){return w.values},children:$=>(()=>{var L=Ci();return y(L,b(dt,{value:$})),L})()})),A})()})),h}})]}})),te(h=>{var m=`section${e.collapsed?" section-collapsed":""}`,S=`collapsible-header${r()?" header-locked":""}`,w=r()?-1:0,A=!e.collapsed,p=r()?"Cannot collapse — only section open":e.collapsed?"Expand Messages":"Collapse Messages",v=`codicon ${e.collapsed?"codicon-chevron-left":"codicon-chevron-right"} header-toggle-icon`,P=`header-count${e.hasChanged?" changed":""}`,z=`section-body${e.collapsed?" section-body-hidden":""}`;return m!==h.e&&ge(o,h.e=m),S!==h.t&&ge(a,h.t=S),w!==h.a&&re(a,"tabindex",h.a=w),A!==h.o&&re(a,"aria-expanded",h.o=A),p!==h.i&&re(a,"title",h.i=p),v!==h.n&&ge(l,h.n=v),P!==h.s&&ge(f,h.s=P),z!==h.h&&ge(d,h.h=z),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),o})()}xe(["click"]);var ts=k("<div class=variables-list>"),ns=k("<div class=variable-display>"),is=k("<div class=fallback-memory><div class=memory-label>Raw Memory:</div><div class=stack-container>"),rs=k("<div class=memory-item><span class=memory-index>[<!>]</span><span class=memory-value>"),os=k("<div class=variable-row><span class=var-name></span><span class=var-separator>:</span><span class=var-type></span><span class=var-equals>=</span><span class=var-value>");function Pi(e){const t=()=>Object.keys(e.variables||{}).length>0,n=oe(()=>Object.entries(e.variables).sort((i,r)=>i[0].localeCompare(r[0])));return(()=>{var i=ns();return y(i,b(B,{get when(){return t()},get fallback(){return b(B,{get when(){return e.fallbackMemory&&e.fallbackMemory.length>0},get children(){var r=is(),o=r.firstChild,a=o.nextSibling;return y(a,b(Oe,{get each(){return e.fallbackMemory},children:(l,s)=>(()=>{var c=rs(),f=c.firstChild,d=f.firstChild,h=d.nextSibling;h.nextSibling;var m=f.nextSibling;return y(f,s,h),y(m,b(dt,{value:l})),c})()})),r}})},get children(){var r=ts();return y(r,b(Oe,{get each(){return n()},children:([o,a])=>(()=>{var l=os(),s=l.firstChild,c=s.nextSibling,f=c.nextSibling,d=f.nextSibling,h=d.nextSibling;return y(s,o),y(f,()=>a.type),y(h,b(dt,{get value(){return a.value}})),te(()=>re(s,"title",a.type)),l})()})),r}})),i})()}var as=k("<div class=call-frame-display>"),ls=k("<div class=frame-card><div class=frame-header><span class=frame-title>Stack Memory</span></div><div class=frame-body>"),ss=k('<span class=frame-location title="Source line"><i class="codicon codicon-file-code"></i>Line '),cs=k('<div class=frame-header><span class=frame-title></span><div class=frame-meta><span class=frame-ip title="Instruction pointer">IP: '),ds=k("<div class=frame-card><div class=frame-body>"),us=k("<div class=no-variables>No local variables in scope");function fs(e){return(()=>{var t=as();return y(t,b(B,{get when(){return e.frames&&e.frames.length>0},get fallback(){return b(B,{get when(){return e.fallbackMemory},get children(){var n=ls(),i=n.firstChild,r=i.nextSibling;return y(r,b(Pi,{variables:{},get fallbackMemory(){return e.fallbackMemory}})),n}})},get children(){return b(Oe,{get each(){return e.frames},children:(n,i)=>(()=>{var r=ds(),o=r.firstChild;return y(r,b(B,{get when(){return i()>0},get children(){var a=cs(),l=a.firstChild,s=l.nextSibling,c=s.firstChild;return c.firstChild,y(l,()=>n.function),y(s,b(B,{get when(){return n.line},get children(){var f=ss(),d=f.firstChild;return d.nextSibling,y(f,()=>n.line,null),f}}),c),y(c,()=>n.instruction_pointer,null),a}}),o),y(o,b(B,{get when(){return ke(()=>!!n.variables)()&&Object.keys(n.variables).length>0},get fallback(){return us()},get children(){return b(Pi,{get variables(){return n.variables||{}},get fallbackMemory(){return i()===0?e.fallbackMemory:void 0}})}})),te(()=>r.classList.toggle("top-frame",i()===0)),r})()})}})),t})()}var gs=k("<span class=process-line>Line "),hs=k("<div class=channels-row><span class=row-label>Channels</span><div class=channels-container>"),ms=k("<div class=process-card><div class=process-card-header><span class=process-name></span><span class=process-id>PID </span><span class=process-pc>PC </span></div><div class=process-card-body>"),ps=k("<span class=channel-count>[<!>]"),bs=k("<div class=channel-values>"),ys=k("<div class=channel-pill><span class=channel-name>"),vs=k("<div class=channel-value-item>");function Os(e){return(()=>{var t=ms(),n=t.firstChild,i=n.firstChild,r=i.nextSibling;r.firstChild;var o=r.nextSibling;o.firstChild;var a=n.nextSibling;return y(i,()=>e.process.name),y(r,()=>e.process.pid,null),y(o,()=>e.process.instruction_pointer,null),y(n,b(B,{get when(){return e.process.line},get children(){var l=gs();return l.firstChild,y(l,()=>e.process.line,null),l}}),null),y(a,b(fs,{get frames(){return e.process.frames},get fallbackMemory(){return e.process.memory}}),null),y(a,b(B,{get when(){return e.channels.length>0},get children(){var l=hs(),s=l.firstChild,c=s.nextSibling;return y(c,b(Oe,{get each(){return e.channels},children:f=>(()=>{var d=ys(),h=d.firstChild;return y(h,()=>f.name),y(d,b(B,{get when(){return f.values.length>0},get children(){return[(()=>{var m=ps(),S=m.firstChild,w=S.nextSibling;return w.nextSibling,y(m,()=>f.values.length,w),m})(),(()=>{var m=bs();return y(m,b(Oe,{get each(){return f.values},children:S=>(()=>{var w=vs();return y(w,b(dt,{value:S})),w})()})),m})()]}}),null),d})()})),l}}),null),t})()}var ws=k("<span class=header-subtitle>depth "),_s=k('<div class=vm-state-inspector><div class=inspector-header><div class=header-title><i class="codicon codicon-debug-console"></i><span></span></div><button type=button class=close-btn title="Close Inspector"><i class="codicon codicon-close">'),$s=k("<div class=inspector-empty-state>Select a node in the graph to inspect its state"),Ss=k('<div class=inspector-sections><div><button type=button><i></i><i class="codicon codicon-debug-all header-section-icon"></i><span class=section-label>Processes</span><span class=header-count></span></button><div>'),xs=k("<div class=empty-state>No processes");const Ei=new WeakMap;function Yt(e){let t=Ei.get(e);return t||(t={globals:gn(e.globals),messages:gn({p:e.pending_deliveries,w:e.waiting_send})},Ei.set(e,t)),t}function Cs(e){const t=`processes-${wn()}`,[n,i]=W(!1),[r,o]=W(!1),[a,l]=W(!1),[s,c]=W(!1),[f,d]=W(!1),h=oe(()=>e.node?.vm??null),m=()=>{const _=e.node;return _?.stepIndex!==void 0?`Step ${_.stepIndex}`:_?.nodeIndex!==void 0?`State ${_.nodeIndex}`:"State Details"},S=_=>{const C=h();return C?C.channels.filter(F=>F.pid===_):[]};let w="",A="",p=null,v=!1,P=!1;ue(()=>{const _=h(),C=e.node;if(!_||!C)return;const F=Object.keys(_.globals).length===0,R=_.pending_deliveries.length===0&&_.waiting_send.length===0;p===null&&(F&&i(!0),R&&o(!0)),p=C}),ue(()=>{const _=h();if(!_)return;const C=n(),F=r(),R=Object.keys(_.globals).length===0,X=_.pending_deliveries.length===0&&_.waiting_send.length===0;C?v?R||Yt(_).globals!==w&&c(!0):w=Yt(_).globals:c(!1),F?P?X||Yt(_).messages!==A&&d(!0):A=Yt(_).messages:d(!1),v=C,P=F});const z=oe(()=>{let _=0;return n()||_++,r()||_++,a()||_++,_}),$=()=>z()>1,L=()=>{!n()&&!$()||i(_=>!_)},T=()=>{!r()&&!$()||o(_=>!_)},I=()=>{!a()&&!$()||l(_=>!_)};return(()=>{var _=_s(),C=_.firstChild,F=C.firstChild,R=F.firstChild,X=R.nextSibling,u=F.nextSibling;return y(X,m),y(F,b(B,{get when(){return e.node?.level!==void 0&&e.node?.stepIndex===void 0},get children(){var g=ws();return g.firstChild,y(g,()=>e.node?.level,null),g}}),null),Ie(u,"click",e.onClose,!0),y(_,b(B,{get when(){return h()},get fallback(){return $s()},children:g=>(()=>{var O=Ss(),E=O.firstChild,x=E.firstChild,Q=x.firstChild,G=Q.nextSibling,D=G.nextSibling,U=D.nextSibling,Z=x.nextSibling;return y(O,b(Gl,{get globals(){return g().globals},get collapsed(){return n()},get canCollapse(){return $()},onToggle:L,get hasChanged(){return s()}}),E),y(O,b(es,{get pendingDeliveries(){return g().pending_deliveries},get waitingSend(){return g().waiting_send},get collapsed(){return r()},get canCollapse(){return $()},onToggle:T,get hasChanged(){return f()}}),E),x.$$click=I,re(x,"aria-controls",t),y(U,()=>g().locals.length),re(Z,"id",t),y(Z,b(B,{get when(){return g().locals.length>0},get fallback(){return xs()},get children(){return b(Oe,{get each(){return g().locals},children:H=>b(Os,{process:H,get channels(){return S(H.pid)}})})}})),te(H=>{var q=`section programs-section${a()?" section-collapsed":""}`,K=`collapsible-header${!a()&&!$()?" header-locked":""}`,ee=!a()&&!$()?-1:0,fe=!a(),ae=!a()&&!$()?"Cannot collapse — only section open":a()?"Expand Processes":"Collapse Processes",le=`codicon ${a()?"codicon-chevron-left":"codicon-chevron-right"} header-toggle-icon`,se=`section-body${a()?" section-body-hidden":""}`;return q!==H.e&&ge(E,H.e=q),K!==H.t&&ge(x,H.t=K),ee!==H.a&&re(x,"tabindex",H.a=ee),fe!==H.o&&re(x,"aria-expanded",H.o=fe),ae!==H.i&&re(x,"title",H.i=ae),le!==H.n&&ge(Q,H.n=le),se!==H.s&&ge(Z,H.s=se),H},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),O})()}),null),_})()}xe(["click"]);var ki=k("<code>"),Ps=k('<span class=choice-message-op><i class="codicon codicon-arrow-right"></i> '),Es=k("<p class=interactive-hint>Pick the process that executes next. Hover a choice to see its code highlighted in the editor."),ks=k("<ol class=choice-list>"),zs=k('<section class=interactive-choices aria-label="Next instruction"tabindex=-1><div class=interactive-toolbar><span class=interactive-step-count>Step <strong></strong></span><div class=interactive-toolbar-actions><button type=button class=icon-button title="Undo last step (Backspace)"><i class="codicon codicon-discard"></i><span>Undo</span></button><button type=button class=icon-button title="Restart from the initial state"><i class="codicon codicon-debug-restart"></i><span>Restart</span></button><button type=button class=icon-button title="Leave step-by-step mode"><i class="codicon codicon-debug-stop"></i><span>Stop'),Rs=k("<div class=results-empty><i></i><h4></h4><p>"),Ts=k('<li><button type=button class=choice-item><span class=choice-key></span><span class=choice-process><span class=choice-pid>#</span></span><span class=choice-code></span><i class="codicon codicon-debug-step-over choice-go">');const As=["SEND","RECEIVE","DELIVER"];function Ds(e){const t=r=>{const o=e.getSourceLines(r.lines),a=r.instructions.filter(l=>As.some(s=>l.includes(s)));return o.length===0?(()=>{var l=ki();return y(l,()=>r.instructions.join("; ")),l})():[b(Oe,{each:o,children:l=>(()=>{var s=ki();return y(s,l),s})()}),b(B,{get when(){return a.length>0},get children(){var l=Ps(),s=l.firstChild;return s.nextSibling,y(l,()=>a.join(", "),null),l}})]},n=r=>{if(r.ctrlKey||r.metaKey||r.altKey)return;const o=Number.parseInt(r.key,10);o>=1&&o<=9&&o<=e.choices.length?(r.preventDefault(),e.onExecute(o-1)):(r.key==="Backspace"||r.key==="u")&&e.stepCount>0&&(r.preventDefault(),e.onUndo())};let i;return xt(()=>i?.focus({preventScroll:!0})),(()=>{var r=zs(),o=r.firstChild,a=o.firstChild,l=a.firstChild,s=l.nextSibling,c=a.nextSibling,f=c.firstChild,d=f.nextSibling,h=d.nextSibling;r.$$keydown=n;var m=i;return typeof m=="function"?Ye(m,r):i=r,y(s,()=>e.stepCount),f.$$click=()=>e.onUndo(),d.$$click=()=>e.onRestart(),h.$$click=()=>e.onStop(),y(r,b(B,{get when(){return e.choices.length>0},get fallback(){return(()=>{var S=Rs(),w=S.firstChild,A=w.nextSibling,p=A.nextSibling;return y(A,()=>e.deadlock?"Deadlock":"Execution completed"),y(p,()=>e.deadlock?"Every process is blocked. Inspect the States tab to see what each one is waiting for.":"No process can execute any further instruction."),te(()=>ge(w,`codicon ${e.deadlock?"codicon-debug-pause":"codicon-pass"}`)),S})()},get children(){return[Es(),(()=>{var S=ks();return y(S,b(Oe,{get each(){return e.choices},children:(w,A)=>(()=>{var p=Ts(),v=p.firstChild,P=v.firstChild,z=P.nextSibling,$=z.firstChild;$.firstChild;var L=z.nextSibling;return v.addEventListener("blur",()=>e.onPreviewLines(null)),v.addEventListener("focus",()=>e.onPreviewLines(w.lines)),v.addEventListener("mouseleave",()=>e.onPreviewLines(null)),v.addEventListener("mouseenter",()=>e.onPreviewLines(w.lines)),v.$$click=()=>e.onExecute(A()),y(P,(()=>{var T=ke(()=>A()<9);return()=>T()?A()+1:""})()),y(z,()=>w.prog_name,$),y($,()=>w.prog_id,null),y(L,()=>t(w)),te(()=>re(v,"title",A()<9?`Execute (press ${A()+1})`:"Execute this instruction")),p})()})),S})()]}}),null),te(()=>f.disabled=e.stepCount===0),r})()}xe(["keydown","click"]);var nn=new Map,ni=(e,t)=>{if(nn.has(e))return nn.get(e);const n=Ct(t);return nn.set(e,n),n},ii=e=>{const t=nn.get(e);if(t)return Pt(t)},Qs=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function Fs(e){const t={};let n;for(;n=Qs.exec(e);)t[n[1]]=n[2];return t}function ri(e,t){return typeof t=="string"&&(t=Fs(t)),{...e,...t}}var ot=(e,t)=>(e&&(typeof e=="function"?e(t):e[0](e[1],t)),t.defaultPrevented),Is=(e,t)=>{const n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS?1:n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:0},zi=e=>typeof e=="function"?e():e,Ls=e=>(...t)=>{for(const n of e)n&&n(...t)},oi=(...e)=>Ls(e),Ns=(...e)=>e.some(t=>!!t()),vr=e=>typeof e=="function"&&e.length>0,hn=e=>e?"":void 0,Ms=e=>{const[t,n]=Vt(e,["as"]),i=oe(()=>t.as??"div");return oe(()=>{const o=i();switch(typeof o){case"function":return pe(()=>o(n));case"string":return b(ya,ct({component:o},n))}})},ai=Ms,Us=e=>{let t,n=!1;return()=>n?t:(n=!0,t=oe(e))},Or=Us;function js(e){const[t,n]=W(e.initialValue),i=()=>e.value?.()!==void 0,r=()=>i()?e.value?.():t();return[r,a=>pe(()=>{let l;return typeof a=="function"?l=a(r()):l=a,Object.is(l,r())||(i()||n(l),e.onChange?.(l)),l})]}var Vs=js,Ws=e=>{const[t,n]=W(0);ue(()=>{const o=zi(e.element);if(!o)return;r(o);const a=new ResizeObserver(i);a.observe(o),Qe(()=>{a.disconnect()})});const i=([o])=>{r(o.target)},r=o=>{switch(zi(e.dimension)){case"width":n(o.offsetWidth);break;case"height":n(o.offsetHeight);break}};return t},Xs=Ws,Gs=k("<div data-corvu-resizable-handle-start-intersection>"),Bs=k("<div data-corvu-resizable-handle-end-intersection>"),wr=Ct(),Ys=e=>e===void 0?wr:ni(`resizable-${e}`),qs=e=>{if(e===void 0){const n=Pt(wr);if(!n)throw new Error("[corvu]: Resizable context not found. Make sure to wrap Resizable components in <Resizable.Root>");return n}const t=ii(`resizable-${e}`);if(!t)throw new Error(`[corvu]: Resizable context with id "${e}" not found. Make sure to wrap Resizable components in <Resizable.Root contextId="${e}">`);return t},_r=Ct(),Hs=e=>e===void 0?_r:ni(`resizable-internal-${e}`),$r=e=>{if(e===void 0){const n=Pt(_r);if(!n)throw new Error("[corvu]: Resizable context not found. Make sure to wrap Resizable components in <Resizable.Root>");return n}const t=ii(`resizable-internal-${e}`);if(!t)throw new Error(`[corvu]: Resizable context with id "${e}" not found. Make sure to wrap Resizable components in <Resizable.Root contextId="${e}">`);return t},de=(e,t)=>{if(typeof e=="number")return e;if(!e.endsWith("px"))throw new Error(`[corvu] Sizes must be a number or a string ending with 'px'. Got ${e}`);return Ae(parseFloat(e)/t)},Ut=e=>{const t=e.panels.filter(i=>!!(e.focusedElement.compareDocumentPosition(i.data.element)&Node.DOCUMENT_POSITION_PRECEDING)),n=e.panels.filter(i=>!!(e.focusedElement.compareDocumentPosition(i.data.element)&Node.DOCUMENT_POSITION_FOLLOWING));return[t,n]},Zs=6,Ae=e=>parseFloat(e.toFixed(Zs)),Wn=null,ut=null,Re=0,Ks={1:"e-resize",2:"w-resize",3:"ew-resize",4:"s-resize",8:"n-resize",12:"ns-resize",5:"se-resize",9:"ne-resize",6:"sw-resize",10:"nw-resize"},zn=null,li=()=>{if(!Wn){ut&&(zn=null,ut.remove(),ut=null);return}let e=Ks[Re]??null;if(e===null)switch(Wn){case"horizontal":e="col-resize";break;case"vertical":e="row-resize";break;case"both":e="move";break}e!==zn&&(zn=e,ut||(ut=document.createElement("style"),document.head.appendChild(ut)),ut.innerHTML=`*{cursor: ${e}!important;}`)},Ri=(e,t)=>{switch(e){case"horizontal":t===1?(Re|=1,Re&=-3):t===2?(Re|=2,Re&=-2):t===3?Re|=3:Re&=-4;break;case"vertical":t===1?(Re|=4,Re&=-9):t===2?(Re|=8,Re&=-5):t===3?Re|=12:Re&=-13;break}li()},Js=()=>{Re=0,li()},Xn=e=>{Wn=e,li()},Ti=e=>{if(Ae(e.distributablePercentage)!==Ae(e.desiredPercentage)){let t=null;e.betweenCollapse===!0?t=3:e.desiredPercentage<e.distributablePercentage&&e.revertConstraints!==!0||e.desiredPercentage>e.distributablePercentage&&e.revertConstraints===!0?t=1:t=2,Ri(e.orientation,t)}else Ri(e.orientation,0)},et=[],yt=null,Sr=null,ec=1,qt=(e,t)=>Math.abs(e-t)<=ec,tc=e=>{et.push(e);for(const t of et)for(const n of et){if(t.orientation===n.orientation||t.element===n.element)continue;const i=t.element.getBoundingClientRect(),r=n.element.getBoundingClientRect();if(t.orientation==="horizontal"&&(i.left>r.right||i.right<r.left)||t.orientation==="vertical"&&(i.top>r.bottom||i.bottom<r.top))continue;const o=t.orientation==="horizontal"?qt(i.top,r.bottom):qt(i.left,r.right),a=t.orientation==="horizontal"?qt(i.bottom,r.top):qt(i.right,r.left);o&&t.startIntersection.setHandle(n),a&&t.endIntersection.setHandle(n)}return{onDragStart:(t,n)=>ic(e,t,n),onHoveredChange:t=>{Sr=t;const n=!!yt;let i=null;Ce(()=>{switch(t){case"handle":{const r=e.startIntersection.handle(),o=e.endIntersection.handle();n||(e.setActive(!0),r?.setActive(!1),o?.setActive(!1)),r?.setHoveredAsIntersection(!1),o?.setHoveredAsIntersection(!1),i=e.orientation;break}case"startIntersection":{const r=e.startIntersection.handle();n||r?.setActive(!0),r?.setHoveredAsIntersection(!0),i="both";break}case"endIntersection":{const r=e.endIntersection.handle();n||r?.setActive(!0),r?.setHoveredAsIntersection(!0),i="both";break}case null:{const r=e.startIntersection.handle(),o=e.endIntersection.handle();!n&&!e.focused()&&(e.setActive(!1),r?.setActive(!1),o?.setActive(!1)),r?.setHoveredAsIntersection(!1),o?.setHoveredAsIntersection(!1),i=null;break}}!n&&e.handleCursorStyle()&&Xn(i)})}}},nc=e=>{et.splice(et.indexOf(e),1)},ic=(e,t,n)=>{yt={x:t.clientX,y:t.clientY},Ce(()=>{e.setDragging(!0),n==="startIntersection"&&e.startIntersection.handle()?.setDragging(!0),n==="endIntersection"&&e.endIntersection.handle()?.setDragging(!0)}),window.addEventListener("pointermove",xr),window.addEventListener("touchmove",Cr),window.addEventListener("pointerup",St),window.addEventListener("touchend",St),window.addEventListener("contextmenu",St)},xr=e=>Pr(e.clientX,e.clientY,e.altKey),Cr=e=>{e.touches[0]&&Pr(e.touches[0].clientX,e.touches[0].clientY,e.altKey)},Ai=!1,Pr=(e,t,n)=>{if(yt){et.some(i=>i.dragging()&&i.altKey==="only")&&(n=!0),et.some(i=>i.dragging()&&i.altKey===!1)&&(n=!1),Ai!==n&&(yt={x:e,y:t},Ai=n);for(const i of et)i.dragging()&&i.onDrag(i.orientation==="horizontal"?e-yt.x:t-yt.y,n)}},St=e=>{Ce(()=>{for(const t of et)t.dragging()?(t.setDragging(!1),t.onDragEnd(e),!t.hovered()&&!t.hoveredAsIntersection()&&t.setActive(!1),!Sr&&t.handleCursorStyle()&&Xn(null)):Ns(t.hovered,t.focused,t.hoveredAsIntersection)&&(t.setActive(!0),t.handleCursorStyle()&&Xn(t.orientation))}),Js(),yt=null,window.removeEventListener("pointermove",xr),window.removeEventListener("touchmove",Cr),window.removeEventListener("pointerup",St),window.removeEventListener("touchend",St),window.removeEventListener("contextmenu",St)},rc=e=>{const t=ct({startIntersection:!0,endIntersection:!0,altKey:!0},e),[n,i]=Vt(t,["startIntersection","endIntersection","altKey","onHandleDragStart","onHandleDrag","onHandleDragEnd","contextId","ref","style","disabled","children","onMouseEnter","onMouseLeave","onKeyDown","onKeyUp","onFocus","onBlur","onPointerDown"]),[r,o]=W(null),[a,l]=W(!1),[s,c]=W(null),[f,d]=W(!1),[h,m]=W(!1),[S,w]=W(!1),[A,p]=W(null),[v,P]=W(null),z=oe(()=>$r(n.contextId)),$=oe(()=>{const u=r();if(!u)return;const g=z().panels(),[O,E]=Ut({panels:g,focusedElement:u}),x=O[O.length-1]?.data.id,Q=E.reduce((U,Z)=>U-de(Z.data.minSize,z().rootSize()),1),G=O.reduce((U,Z)=>U+de(Z.data.minSize,z().rootSize()),0),D=O.reduce((U,Z)=>U+de(Z.size(),z().rootSize()),0);return{ariaControls:x,ariaValueMax:Ae(Q),ariaValueMin:Ae(G),ariaValueNow:Ae(D)}});let L=null;return ue(()=>{if(n.disabled===!0)return;const u=r();if(!u)return;const g={element:u,orientation:z().orientation(),handleCursorStyle:z().handleCursorStyle,altKey:n.altKey,startIntersection:{handle:A,setHandle:O=>{n.startIntersection===!0&&p(O)}},endIntersection:{handle:v,setHandle:O=>{n.endIntersection===!0&&P(O)}},hovered:s,focused:f,hoveredAsIntersection:a,setHoveredAsIntersection:l,active:h,setActive:m,dragging:S,setDragging:w,onDrag:(O,E)=>{if(n.onHandleDrag!==void 0){const x=new CustomEvent("drag",{cancelable:!0});if(n.onHandleDrag(x),x.defaultPrevented)return}z().onDrag(u,O,E)},onDragEnd:O=>{n.onHandleDragEnd?.(O),z().onDragEnd()}};L=tc(g),Qe(()=>{nc(g),L=null})}),ue(Ue(s,()=>{L?.onHoveredChange(s())})),b(ai,ct({as:"button",ref(u){var g=oi(o,n.ref);typeof g=="function"&&g(u)},get style(){return ri({position:"relative",cursor:z().handleCursorStyle()?"inherit":void 0,"touch-action":"none","flex-shrink":0},n.style)},get disabled(){return n.disabled},onBlur:u=>{ot(n.onBlur,u)||(d(!1),!s()&&m(!1))},onFocus:u=>{ot(n.onFocus,u)||s()||(d(!0),m(!0))},onKeyDown:u=>{if(ot(n.onKeyDown,u)||S())return;const g=r();if(!g)return;const O=n.altKey==="only"||n.altKey!==!1&&u.altKey;z().onKeyDown(g,u,O)},onKeyUp:u=>{ot(n.onKeyUp,u)||u.key!=="Tab"||d(!0)},onMouseEnter:u=>{ot(n.onMouseEnter,u)||n.disabled===!0||c("handle")},onMouseLeave:u=>{ot(n.onMouseLeave,u)||c(null)},onPointerDown:u=>{if(ot(n.onPointerDown,u)||ot(n.onHandleDragStart,u))return;const g=u.target;g.setPointerCapture(u.pointerId);let O="handle";g.hasAttribute("data-corvu-resizable-handle-start-intersection")&&(O="startIntersection"),g.hasAttribute("data-corvu-resizable-handle-end-intersection")&&(O="endIntersection"),L?.onDragStart(u,O)},role:"separator",get"aria-controls"(){return $()?.ariaControls},get"aria-orientation"(){return z().orientation()},get"aria-valuemax"(){return $()?.ariaValueMax},get"aria-valuemin"(){return $()?.ariaValueMin},get"aria-valuenow"(){return $()?.ariaValueNow},get"data-active"(){return hn(h())},get"data-dragging"(){return hn(S())},get"data-orientation"(){return z().orientation()},"data-corvu-resizable-handle":""},i,{get children(){return[b(B,{get when(){return A()},get children(){var u=Gs();return u.addEventListener("mouseleave",g=>{r()?.contains(g.relatedTarget)===!0?c("handle"):c(null)}),u.addEventListener("mouseenter",()=>c("startIntersection")),u.style.setProperty("position","absolute"),u.style.setProperty("aspect-ratio","1 / 1"),u.style.setProperty("top","0"),u.style.setProperty("left","0"),u.style.setProperty("z-index","1"),te(g=>{var O=z().orientation()==="horizontal"?void 0:"100%",E=z().orientation()==="horizontal"?"100%":void 0,x=z().orientation()==="horizontal"?"translate3d(0, -100%, 0)":"translate3d(-100%, 0, 0)";return O!==g.e&&((g.e=O)!=null?u.style.setProperty("height",O):u.style.removeProperty("height")),E!==g.t&&((g.t=E)!=null?u.style.setProperty("width",E):u.style.removeProperty("width")),x!==g.a&&((g.a=x)!=null?u.style.setProperty("transform",x):u.style.removeProperty("transform")),g},{e:void 0,t:void 0,a:void 0}),u}}),ke(()=>n.children),b(B,{get when(){return v()},get children(){var u=Bs();return u.addEventListener("mouseleave",g=>{r()?.contains(g.relatedTarget)===!0?c("handle"):c(null)}),u.addEventListener("mouseenter",()=>c("endIntersection")),u.style.setProperty("position","absolute"),u.style.setProperty("aspect-ratio","1 / 1"),u.style.setProperty("bottom","0"),u.style.setProperty("right","0"),u.style.setProperty("z-index","1"),te(g=>{var O=z().orientation()==="horizontal"?void 0:"100%",E=z().orientation()==="horizontal"?"100%":void 0,x=z().orientation()==="horizontal"?"translate3d(0, 100%, 0)":"translate3d(100%, 0, 0)";return O!==g.e&&((g.e=O)!=null?u.style.setProperty("height",O):u.style.removeProperty("height")),E!==g.t&&((g.t=E)!=null?u.style.setProperty("width",E):u.style.removeProperty("width")),x!==g.a&&((g.a=x)!=null?u.style.setProperty("transform",x):u.style.removeProperty("transform")),g},{e:void 0,t:void 0,a:void 0}),u}})]}}))},oc=rc,Er=Ct(),ac=e=>e===void 0?Er:ni(`resizable-panel-${e}`),lc=e=>{if(e===void 0){const n=Pt(Er);if(!n)throw new Error("[corvu]: Resizable panel context not found. Make sure to call usePanelContext under <Resizable.Panel>");return n}const t=ii(`resizable-panel-${e}`);if(!t)throw new Error(`[corvu]: Resizable context with id "${e}" not found. Make sure to call usePanelContext under <Resizable.Panel contextId="${e}">`);return t},sc=e=>{const t=ct({initialSize:null,minSize:0,maxSize:1,collapsible:!1,collapsedSize:0,collapseThreshold:.05,panelId:wn()},e),[n,i]=Vt(t,["initialSize","minSize","maxSize","collapsible","collapsedSize","collapseThreshold","onResize","onCollapse","onExpand","contextId","panelId","ref","style","children"]),[r,o]=W(null),a=oe(()=>$r(n.contextId)),[l,s]=W(null);ue(()=>{const v=r();if(!v)return;const P=a(),z=pe(()=>P.registerPanel({id:n.panelId,element:v,initialSize:n.initialSize,minSize:n.minSize,maxSize:n.maxSize,collapsible:n.collapsible,collapsedSize:n.collapsedSize,collapseThreshold:n.collapseThreshold,onResize:n.onResize}));s(z),Qe(()=>{P.unregisterPanel(z.data.id)})});const c=()=>{const v=l();return v?v.size():typeof n.initialSize=="number"?n.initialSize:1},f=oe(v=>{const P=l();if(n.collapsible!==!0)return!1;const z=P?P.size()===de(n.collapsedSize,a().rootSize()):!1;return P&&v!==z&&(z&&n.onCollapse!==void 0?n.onCollapse(P.size()):!z&&n.onExpand!==void 0&&n.onExpand(P.size())),z}),d=(v,P)=>{const z=l();z&&z.resize(v,P??"both")},h=v=>{const P=l();P&&P.collapse(v??"both")},m=v=>{const P=l();P&&P.expand(v??"both")},S={get size(){return c()},get minSize(){return n.minSize},get maxSize(){return n.maxSize},get collapsible(){return n.collapsible},get collapsedSize(){return n.collapsedSize},get collapseThreshold(){return n.collapseThreshold},get collapsed(){return f()},resize:d,collapse:h,expand:m,get panelId(){return n.panelId}},w=Or(()=>n.children),A=()=>{const v=w()();return vr(v)?v(S):v};return oe(()=>{const v=ac(n.contextId);return b(v.Provider,{value:{size:c,minSize:()=>n.minSize,maxSize:()=>n.maxSize,collapsible:()=>n.collapsible,collapsedSize:()=>n.collapsedSize,collapseThreshold:()=>n.collapseThreshold,collapsed:f,resize:d,collapse:h,expand:m,panelId:()=>n.panelId},get children(){return b(ai,ct({as:"div",ref(P){var z=oi(o,n.ref);typeof z=="function"&&z(P)},get style(){return ri({"flex-basis":c()*100+"%"},n.style)},get id(){return n.panelId},get"data-collapsed"(){return hn(f())},get"data-expanded"(){return hn(n.collapsible===!0&&!f())},get"data-orientation"(){return a().orientation()},"data-corvu-resizable-panel":""},i,{get children(){return pe(()=>A())}}))}})})},cc=sc,mn=e=>{let t=e.desiredPercentage>=0?1/0:-1/0,n=e.initialSizes;for(const i of e.resizeActions){const r=i.negate!==!0?e.desiredPercentage:-e.desiredPercentage;let[o,a,l]=pn({desiredPercentage:r,side:"preceding",panels:i.precedingPanels,initialSizes:n,initialSizesStartIndex:0,collapsible:e.collapsible,rootSize:e.resizableData.rootSize}),[s,c,f]=pn({desiredPercentage:r,side:"following",panels:i.followingPanels,initialSizes:n,initialSizesStartIndex:i.precedingPanels.length,collapsible:e.collapsible,rootSize:e.resizableData.rootSize});i.negate===!0&&(o=-o,s=-s),l&&(s=o),f&&(o=s),e.desiredPercentage>=0?t=Math.min(t,Math.min(o,s)):t=Math.max(t,Math.max(o,s)),n=[...a,...c]}return t},pn=e=>{e.desiredPercentage=Ae(e.desiredPercentage);const t=dc({side:e.side,desiredPercentage:e.desiredPercentage});let n=0;const i=e.initialSizes.slice(e.initialSizesStartIndex,e.initialSizesStartIndex+e.panels.length);for(let m=e.side==="preceding"?e.panels.length-1:0;e.side==="preceding"?m>=0:m<e.panels.length;e.side==="preceding"?m--:m++){const S=e.panels[m],w=e.initialSizes[m+e.initialSizesStartIndex],A=de(S.data.collapsedSize??0,e.rootSize);if(S.data.collapsible&&w===A)continue;const p=Ae(e.desiredPercentage-n);if(p===0)break;switch(t){case"precedingDecreasing":{const v=de(S.data.minSize,e.rootSize);i[m]=Math.max(v,w+p),n+=i[m]-w;break}case"followingDecreasing":{const v=de(S.data.minSize,e.rootSize);i[m]=Math.max(v,w-p),n-=i[m]-w;break}case"precedingIncreasing":{const v=de(S.data.maxSize,e.rootSize);i[m]=Math.min(v,w+p),n+=i[m]-w;break}case"followingIncreasing":{const v=de(S.data.maxSize,e.rootSize);i[m]=Math.min(v,w-p),n-=i[m]-w;break}}}if(n=Ae(n),!e.collapsible||n===e.desiredPercentage)return[n,i,!1];const r=e.side==="preceding"?e.panels.length-1:0,o=e.panels[r];if(!o.data.collapsible)return[n,i,!1];const a=Ae(e.desiredPercentage-n);let l=!1;const s=e.initialSizes[r+e.initialSizesStartIndex],c=de(o.data.minSize,e.rootSize),f=de(o.data.collapsedSize??0,e.rootSize),d=Math.min(de(o.data.collapseThreshold??0,e.rootSize),c-f),h=s===f;if(t==="precedingDecreasing"&&!h&&Math.abs(a)>=d)n-=i[r]-s,i[r]=f,n+=i[r]-s,l=!0;else if(t==="precedingIncreasing"&&h&&Math.abs(a)>=d){const m=de(o.data.minSize,e.rootSize);if(i[r]=m,Math.abs(a)>=m-f){const S=de(o.data.maxSize,e.rootSize);i[r]=Math.min(S,s+a)}else l=!0;n+=i[r]-s}else if(t==="followingDecreasing"&&!h&&Math.abs(a)>=d)n+=i[r]-s,i[r]=f,n-=i[r]-s,l=!0;else if(t==="followingIncreasing"&&h&&Math.abs(a)>=d){const m=de(o.data.minSize,e.rootSize);if(i[r]=m,Math.abs(a)>=m-f){const S=de(o.data.maxSize,e.rootSize);i[r]=Math.min(S,s-a)}else l=!0;n-=i[r]-s}return[n,i,l]},dc=e=>{switch(e.side){case"preceding":return e.desiredPercentage>=0?"precedingIncreasing":"precedingDecreasing";case"following":return e.desiredPercentage>=0?"followingDecreasing":"followingIncreasing"}},bn=e=>{let t=e.initialSizes;for(const i of e.resizeActions){const[,r]=pn({desiredPercentage:i.deltaPercentage,side:"preceding",panels:i.precedingPanels,initialSizes:t,initialSizesStartIndex:0,collapsible:e.collapsible,rootSize:e.resizableData.rootSize}),[,o]=pn({desiredPercentage:i.deltaPercentage,side:"following",panels:i.followingPanels,initialSizes:t,initialSizesStartIndex:i.precedingPanels.length,collapsible:e.collapsible,rootSize:e.resizableData.rootSize});t=[...r,...o]}t=t.map(Ae);const n=t.reduce((i,r)=>i+r,0);if(n!==1){const r=(n-1)/t.length;t=t.map(o=>o-r)}e.resizableData.setSizes(t.map(Ae))},Rn=e=>{let[t,n]=Ut({panels:e.panels,focusedElement:e.panel.data.element});const i=e.panels.indexOf(e.panel);if(i===0?e.strategy="following":i===e.panels.length-1&&(e.strategy="preceding"),e.strategy==="both"){const r=[...t,e.panel],o=[e.panel,...n],a=mn({desiredPercentage:e.deltaPercentage/2,initialSizes:e.initialSizes,collapsible:!0,resizeActions:[{precedingPanels:r,followingPanels:n},{precedingPanels:t,followingPanels:o,negate:!0}],resizableData:{rootSize:e.resizableData.rootSize}});bn({initialSizes:e.initialSizes,collapsible:!0,resizeActions:[{precedingPanels:r,followingPanels:n,deltaPercentage:a},{precedingPanels:t,followingPanels:o,deltaPercentage:-a}],resizableData:e.resizableData})}else{t=e.strategy==="preceding"?t:[...t,e.panel],n=e.strategy==="following"?n:[e.panel,...n],e.strategy==="preceding"&&(e.deltaPercentage=-e.deltaPercentage);const r=mn({desiredPercentage:e.deltaPercentage,initialSizes:e.initialSizes,collapsible:e.collapsible,resizeActions:[{precedingPanels:t,followingPanels:n}],resizableData:{rootSize:e.resizableData.rootSize}});bn({initialSizes:e.initialSizes,collapsible:!0,resizeActions:[{precedingPanels:t,followingPanels:n,deltaPercentage:r}],resizableData:e.resizableData})}},Di=e=>{if(e.altKey&&e.panels.length>2){let t=e.panels.filter(m=>!!(e.handle.compareDocumentPosition(m.data.element)&Node.DOCUMENT_POSITION_PRECEDING)).length-1;const n=t===0;n&&(t++,e.deltaPercentage=-e.deltaPercentage);const i=e.panels[t],r=e.initialSizes[t],o=de(i.data.minSize,e.resizableData.rootSize)-r,a=de(i.data.maxSize,e.resizableData.rootSize)-r,l=Math.max(o,Math.min(e.deltaPercentage*2,a))/2,[s,c]=Ut({panels:e.panels,focusedElement:i.data.element}),f=[...s,i],d=[i,...c],h=mn({desiredPercentage:l,initialSizes:e.initialSizes,collapsible:!1,resizeActions:[{precedingPanels:f,followingPanels:c},{precedingPanels:s,followingPanels:d,negate:!0}],resizableData:{rootSize:e.resizableData.rootSize}});e.resizableData.handleCursorStyle===!0&&Ti({orientation:e.resizableData.orientation,desiredPercentage:e.deltaPercentage,distributablePercentage:h,revertConstraints:n}),bn({initialSizes:e.initialSizes,collapsible:!1,resizeActions:[{precedingPanels:f,followingPanels:c,deltaPercentage:h},{precedingPanels:s,followingPanels:d,deltaPercentage:-h}],resizableData:e.resizableData})}else{const[t,n]=Ut({panels:e.panels,focusedElement:e.handle}),i=mn({desiredPercentage:e.deltaPercentage,initialSizes:e.initialSizes,collapsible:!0,resizeActions:[{precedingPanels:t,followingPanels:n}],resizableData:{rootSize:e.resizableData.rootSize}});if(bn({initialSizes:e.initialSizes,collapsible:!0,resizeActions:[{precedingPanels:t,followingPanels:n,deltaPercentage:i}],resizableData:e.resizableData}),e.resizableData.handleCursorStyle){const r=Ae(e.deltaPercentage),o=Ae(i);let a=!1;const l=t[t.length-1];if(l.data.collapsible){const c=de(l.data.collapsedSize??0,e.resizableData.rootSize);(l.size()===c&&r>o||l.size()!==c&&r<o)&&(a=!0)}const s=n[0];if(s.data.collapsible){const c=de(s.data.collapsedSize??0,e.resizableData.rootSize);(s.size()===c&&r<o||s.size()!==c&&r>o)&&(a=!0)}Ti({orientation:e.resizableData.orientation,desiredPercentage:e.deltaPercentage,distributablePercentage:i,betweenCollapse:a})}}},uc=e=>{const t=ct({orientation:"horizontal",initialSizes:[],keyboardDelta:.1,handleCursorStyle:!0},e),[n,i]=Vt(t,["orientation","sizes","onSizesChange","initialSizes","keyboardDelta","handleCursorStyle","contextId","ref","style","children"]),[r,o]=Vs({value:()=>n.sizes,initialValue:[],onChange:n.onSizesChange}),[a,l]=W(null),s=Xs({element:a,dimension:()=>n.orientation==="horizontal"?"width":"height"}),[c,f]=W([]),d=[],h=_=>{const F=c().filter(E=>!!(_.element.compareDocumentPosition(E.data.element)&Node.DOCUMENT_POSITION_PRECEDING)).length,R=d[F]===void 0||d[F]===_.id,X=r()[F]!==void 0;let u=null;_.initialSize!==null?u=de(_.initialSize,s()):n.initialSizes[F]!==void 0&&R&&(u=de(n.initialSizes[F],s())),u=u??.5,o(E=>{let x=[...E];const Q=x.reduce((G,D)=>G+D,0);if((R&&!X||!R)&&Q===1){const G=u/x.length;x=x.map(D=>D-G)}return R?(X||(x[F]=u),d[F]=_.id):(x.splice(F,0,u),d.splice(F,0,_.id)),x});const g=oe(()=>{const E=d.indexOf(_.id);return r()[E]});ue(()=>_.onResize?.(g()));const O={data:_,size:g,resize:(E,x)=>S(d.indexOf(_.id),E,x),collapse:E=>w(d.indexOf(_.id),E),expand:E=>A(d.indexOf(_.id),E)};return f(E=>{const x=[...E];return x.push(O),x.sort((Q,G)=>Is(Q.data.element,G.data.element)),x}),O},m=_=>{f(F=>F.filter(R=>R.data.id!==_));const C=d.indexOf(_);d.splice(C,1),o(F=>{let R=[...F];R.splice(C,1);const g=(R.reduce((O,E)=>O+E,0)-1)/R.length;return R=R.map(O=>O+g),R})};ue(()=>{n.onSizesChange!==void 0&&n.onSizesChange(r())});const S=(_,C,F)=>{pe(()=>{const R=c()[_];if(!R)return;const X=de(R.data.minSize,s()),u=de(R.data.maxSize,s()),g=de(C,s()),E=Math.max(X,Math.min(g,u))-r()[_];Rn({deltaPercentage:E,strategy:F??"both",panel:R,panels:c(),initialSizes:c().map(x=>x.size()),collapsible:!1,resizableData:{rootSize:s(),orientation:n.orientation,setSizes:o}})})},w=(_,C)=>{pe(()=>{const F=c()[_];if(!F)return;const R=r()[_],X=de(F.data.collapsedSize??0,s());if(!F.data.collapsible||R===X)return;const u=X-R;Rn({deltaPercentage:u,strategy:C??"both",panel:F,panels:c(),initialSizes:c().map(g=>g.size()),collapsible:!0,resizableData:{rootSize:s(),orientation:n.orientation,setSizes:o}})})},A=(_,C)=>{pe(()=>{const F=c()[_];if(!F)return;const R=r()[_],X=de(F.data.collapsedSize??0,s());if(!F.data.collapsible||R!==X)return;const g=de(F.data.minSize,s())-R;Rn({deltaPercentage:g,strategy:C??"both",panel:F,panels:c(),initialSizes:c().map(O=>O.size()),collapsible:!0,resizableData:{rootSize:s(),orientation:n.orientation,setSizes:o}})})};let p=null,v=!1;const P=(_,C,F)=>{(p===null||v!==F)&&(p=c().map(R=>R.size()),v=F),Di({deltaPercentage:C/s(),altKey:F,handle:_,panels:c(),initialSizes:p,resizableData:{rootSize:s(),handleCursorStyle:n.handleCursorStyle,orientation:n.orientation,setSizes:o}})},z=(_,C,F)=>{if(C.key==="Enter"){const[u,g]=Ut({panels:c(),focusedElement:_});let O=u[u.length-1];if((!O||!O.data.collapsible)&&(O=g[0],!O||!O.data.collapsible))return;const E=O.size(),x=de(O.data.collapsedSize??0,s());E===x?O.expand("following"):O.collapse("following");return}let R=null;if(n.orientation==="horizontal"&&C.key==="ArrowLeft"||n.orientation==="vertical"&&C.key==="ArrowUp"||C.key==="Home"?C.shiftKey||C.key==="Home"?R=-1:R=-de(n.keyboardDelta,s()):(n.orientation==="horizontal"&&C.key==="ArrowRight"||n.orientation==="vertical"&&C.key==="ArrowDown"||C.key==="End")&&(C.shiftKey||C.key==="End"?R=1:R=de(n.keyboardDelta,s())),R===null)return;C.preventDefault();const X=c().map(u=>u.size());Di({deltaPercentage:R,altKey:F,handle:_,panels:c(),initialSizes:X,resizableData:{rootSize:s(),handleCursorStyle:!1,orientation:n.orientation,setSizes:o}})},$={get sizes(){return r()},setSizes:o,get orientation(){return n.orientation},get keyboardDelta(){return n.keyboardDelta},get handleCursorStyle(){return n.handleCursorStyle},resize:S,collapse:w,expand:A},L=Or(()=>n.children),T=()=>{const _=L()();return vr(_)?_($):_};return oe(()=>{const _=Ys(n.contextId),C=Hs(n.contextId);return b(_.Provider,{value:{sizes:r,setSizes:o,orientation:()=>n.orientation,keyboardDelta:()=>n.keyboardDelta,handleCursorStyle:()=>n.handleCursorStyle,resize:S,collapse:w,expand:A},get children(){return b(C.Provider,{value:{sizes:r,setSizes:o,orientation:()=>n.orientation,keyboardDelta:()=>n.keyboardDelta,handleCursorStyle:()=>n.handleCursorStyle,rootSize:s,panels:c,registerPanel:h,unregisterPanel:m,onDrag:P,onDragEnd:()=>p=null,onKeyDown:z,resize:S,collapse:w,expand:A},get children(){return b(ai,ct({as:"div",ref(F){var R=oi(l,n.ref);typeof R=="function"&&R(F)},get style(){return ri({display:"flex","flex-direction":n.orientation==="horizontal"?"row":"column"},n.style)},get"data-orientation"(){return n.orientation},"data-corvu-resizable-root":""},i,{get children(){return pe(()=>T())}}))}})}})})},fc=uc,gc=Object.assign(fc,{Panel:cc,Handle:oc,useContext:qs,usePanelContext:lc}),Ve=gc,hc=k("<p>"),mc=k("<div class=results-empty><i></i><h4>"),pc=k('<button type=button class=status-action title="Load the violating execution as a trace you can walk step by step"><i class="codicon codicon-debug-alt"></i>Replay counterexample'),bc=k("<b>Run"),yc=k("<b>Check"),vc=k("<code>always"),Oc=k("<code>eventually"),wc=k("<div class=execution-error-box>"),Ht=k("<div class=console>"),Tn=k("<pre>"),_c=k("<pre class=console-warning>"),$c=k('<div class=execution-content><div class=tab role=tablist><button type=button class=tab-clear-button title="Clear results"><i class="codicon codicon-clear-all"></i></button></div><div class=tab-content>'),Sc=k("<button type=button role=tab class=tab_button><i></i><span>"),xc=k("<div class=status-detail>"),Cc=k("<div role=status><i></i><div class=status-text><div class=status-title>");const Qi=Jn(()=>Ne(()=>import("./Graph-Bmzs4mrq.js"),__vite__mapDeps([9,10,11,1,12]))),Pc=Jn(()=>Ne(()=>import("./CommGraph-ChW7WV7l.js"),__vite__mapDeps([13,10,11,1]))),Ec=e=>{const t=e;return!!t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.tagName==="SELECT"||t.isContentEditable||!!t.closest?.(".cm-editor"))};function ft(e){return(()=>{var t=mc(),n=t.firstChild,i=n.nextSibling;return y(i,()=>e.title),y(t,b(B,{get when(){return e.children},get children(){var r=hc();return y(r,()=>e.children),r}}),null),te(()=>ge(n,`codicon codicon-${e.icon}`)),t})()}function Fi(e){return b(Ve,{get id(){return e.id},orientation:"vertical",class:"states-layout",get children(){return[b(Ve.Panel,{initialSize:.4,minSize:.15,class:"states-pane",get children(){return b(Cs,{get node(){return e.exec.selectedVM()},onClose:()=>e.exec.setSelectedVM(null)})}}),b(Ve.Handle,{class:"Resizable-handle"}),b(Ve.Panel,{initialSize:.6,minSize:.15,class:"states-pane",get children(){return e.graph}})]}})}function kc(e){const t=e.exec;let n,i;const r=()=>[...t.mode()==="interactive"?[{id:"step",label:"Step",icon:"debug-step-over"}]:[],{id:"console",label:"Console",icon:"terminal"},{id:"execution",label:"Execution",icon:"output"},{id:"msg_flow",label:"Messages",icon:"send"},{id:"vm_states",label:"States",icon:"type-hierarchy-sub"}],o=(f,d)=>{d?.lines&&e.editor.highlightLines?.(d.lines)};ue(Ue([t.stdout,t.activeTab],()=>{n&&(n.scrollTop=n.scrollHeight)})),ue(Ue([t.executionOutput,t.activeTab],()=>{i&&(i.scrollTop=i.scrollHeight)})),ue(()=>{if(t.activeTab()!=="vm_states"||t.mode()==="check")return;const f=d=>{if(d.key!=="ArrowLeft"&&d.key!=="ArrowRight"||d.ctrlKey||d.metaKey||d.altKey||d.shiftKey||Ec(d.target)||t.traceNodes().length===0)return;const h=t.selectedVM()?.stepIndex??-1;t.selectTraceStep(d.key==="ArrowRight"?h+1:h-1),d.preventDefault()};window.addEventListener("keydown",f),Qe(()=>window.removeEventListener("keydown",f))});const a=f=>{const d=e.editor.safeEditorView?.();if(!d||!f?.length)return[];const h=d.state.doc,m=f.filter(S=>S>0&&S<=h.lines).map(S=>h.line(S).text.trim()).filter(S=>S!=="");return[...new Set(m)]},l=()=>b(B,{get when(){return ke(()=>t.mode()==="check")()&&t.counterexample().length>0},get children(){var f=pc();return f.$$click=()=>t.replayCounterexample(),f}}),s=()=>b(Ln,{get children(){return[b(Se,{get when(){return ke(()=>t.mode()==="check")()&&t.busy()==="check"},get children(){return b(ft,{icon:"loading codicon-modifier-spin",title:"Model checking…",children:"Exploring every reachable state of the program."})}}),b(Se,{get when(){return ke(()=>t.mode()==="check")()&&t.checkStateCount()===0},get children(){return b(ft,{icon:"type-hierarchy-sub",title:"No state graph",children:"The check did not produce any state."})}}),b(Se,{get when(){return t.mode()==="check"},get children(){return b(Fi,{id:"checker-states-layout",exec:t,get graph(){return b(B,{get when(){return t.checkStateCount()<=Vn},get fallback(){return b(ft,{icon:"graph",title:"Graph too large to display",get children(){return[ke(()=>t.checkStateCount().toLocaleString())," states were explored, above the display limit of ",Vn,".",b(B,{get when(){return t.counterexample().length>0},get children(){return[" ","Use “Replay counterexample” to inspect the violating trace."]}})]}})},get children(){return b(Qi,{get nodes(){return t.checkGraph().nodes},get edges(){return t.checkGraph().edges},get theme(){return e.theme},onEdgeClick:o,get onNodeSelect(){return t.setSelectedVM}})}})}})}}),b(Se,{get when(){return t.traceNodes().length>0},get children(){return b(Fi,{id:"vm-states-layout",exec:t,get graph(){return b(Qi,{get nodes(){return t.traceGraph().nodes},get edges(){return t.traceGraph().edges},get theme(){return e.theme},onEdgeClick:o,get onNodeSelect(){return t.setSelectedVM},get selectedNode(){return t.selectedVM()?.stepIndex??null}})}})}}),b(Se,{when:!0,get children(){return b(ft,{icon:"type-hierarchy-sub",title:"No states yet",get children(){return[bc()," shows the states of one execution; ",yc()," explores all of them and verifies your ",vc()," /"," ",Oc()," properties."]}})}})]}}),c=()=>b(Ln,{get children(){return[b(Se,{get when(){return ke(()=>t.activeTab()==="step")()&&t.mode()==="interactive"},get children(){return b(Ds,{get choices(){return t.choices()},get finished(){return t.interactiveFinished()},get deadlock(){return t.interactiveDeadlock()},get stepCount(){return t.history().length},getSourceLines:a,get onExecute(){return t.executeStep},get onPreviewLines(){return e.onPreviewLines},get onUndo(){return t.undoStep},get onRestart(){return t.startInteractive},get onStop(){return t.stopInteractive}})}}),b(Se,{get when(){return t.activeTab()==="execution"},get children(){var f=Ht(),d=i;return typeof d=="function"?Ye(d,f):i=f,y(f,b(B,{get when(){return t.executionOutput()||t.structuredError()},get fallback(){return b(ft,{icon:"output",title:"No execution trace",children:"The instructions executed by each process will be listed here."})},get children(){return b(B,{get when(){return t.executionError()},get fallback(){return(()=>{var h=Tn();return y(h,()=>t.executionOutput()),h})()},get children(){var h=wc();return y(h,b(B,{get when(){return t.structuredError()},get fallback(){return(()=>{var m=Tn();return y(m,()=>t.executionOutput()),m})()},children:m=>b(Tl,{get error(){return m()},get onFileClick(){return e.onErrorFileClick}})})),h}})}})),f}}),b(Se,{get when(){return t.activeTab()==="msg_flow"},get children(){var f=Ht();return y(f,b(B,{get when(){return t.messageFlow().length>0},get fallback(){return b(ft,{icon:"send",title:"No messages",get children(){return t.mode()==="check"?"Message flow is shown for a single execution: use Run, Step or Replay counterexample.":"Messages exchanged through channels will be drawn here."}})},get children(){return b(Pc,{get events(){return t.messageFlow()},get editor(){return e.editor}})}})),f}}),b(Se,{get when(){return t.activeTab()==="vm_states"},get children(){var f=Ht();return y(f,s),f}}),b(Se,{when:!0,get children(){var f=Ht();return y(f,b(B,{get when(){return t.stdout()||t.stdoutWarning()},get fallback(){return b(ft,{icon:"terminal",title:"No output",get children(){return ke(()=>t.mode()==="check")()?"Model checking does not print. Use Run or Step to see the program output.":t.mode()==="none"?`Press Run (${e.runShortcut}) to execute the program.`:"The program did not print anything."}})},get children(){return[(()=>{var d=Tn(),h=n;return typeof h=="function"?Ye(h,d):n=d,y(d,()=>t.stdout()),d})(),b(B,{get when(){return t.stdoutWarning()},children:d=>(()=>{var h=_c();return y(h,d),h})()})]}})),f}})]}});return(()=>{var f=$c(),d=f.firstChild,h=d.firstChild,m=d.nextSibling;return y(d,b(Oe,{get each(){return r()},children:S=>(()=>{var w=Sc(),A=w.firstChild,p=A.nextSibling;return w.$$click=()=>t.setActiveTab(S.id),y(p,()=>S.label),te(v=>{var P=t.activeTab()===S.id,z=t.activeTab()===S.id,$=!!(S.id==="execution"&&t.executionError()),L=S.id==="step"&&t.activeTab()!=="step",T=S.label,I=`codicon codicon-${S.icon}`;return P!==v.e&&re(w,"aria-selected",v.e=P),z!==v.t&&w.classList.toggle("active",v.t=z),$!==v.a&&w.classList.toggle("execution-error",v.a=$),L!==v.o&&w.classList.toggle("highlighted",v.o=L),T!==v.i&&re(w,"title",v.i=T),I!==v.n&&ge(A,v.n=I),v},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),w})()}),h),h.$$click=()=>t.reset(),y(f,b(B,{get when(){return t.status()},children:S=>(()=>{var w=Cc(),A=w.firstChild,p=A.nextSibling,v=p.firstChild;return y(v,()=>S().title),y(p,b(B,{get when(){return S().detail},get children(){var P=xc();return y(P,()=>S().detail),P}}),null),y(w,l,null),te(P=>{var z=`status-banner tone-${S().tone}`,$=`codicon codicon-${S().icon}${S().tone==="busy"?" codicon-modifier-spin":""}`;return z!==P.e&&ge(w,P.e=z),$!==P.t&&ge(A,P.t=$),P},{e:void 0,t:void 0}),w})()}),m),y(m,c),te(()=>h.disabled=t.mode()==="none"&&!t.status()),f})()}xe(["click"]);var rn=k("<div class=file-entry-error>"),zc=k('<div class=file-entry-input-wrapper><div class=file-entry-rename-input><i class="codicon codicon-folder"></i><input class=rename-input type=text>'),kr=k("<div class=file-entry-input-wrapper><div class=file-entry-input><i></i><input type=text>"),Rc=k("<div class=directory-children>"),Tc=k('<div class=context-menu role=menu><button type=button><i class="codicon codicon-copy"></i>Copy</button><button type=button><i class="codicon codicon-clippy"></i>Paste</button><div class=context-menu-separator></div><button type=button><i class="codicon codicon-edit"></i>Rename</button><button type=button><i class="codicon codicon-trash"></i>Delete'),Ac=k('<div class=directory role=group><div class=directory-header role=treeitem tabindex=0><i></i><i class="codicon codicon-folder">'),Ii=k("<span>"),Dc=k('<div class=file-entry-input-wrapper><div class=file-entry-rename-input><i class="codicon codicon-file"></i><input class=rename-input type=text>'),Qc=k('<div class=context-menu role=menu><button type=button><i class="codicon codicon-copy"></i>Copy</button><button type=button><i class="codicon codicon-clippy"></i>Paste</button><div class=context-menu-separator></div><button type=button><i class="codicon codicon-edit"></i>Rename</button><button type=button class=context-menu-delete-btn><i class="codicon codicon-trash"></i>Delete'),Fc=k("<div class=file role=treeitem tabindex=0>"),Ic=k('<i class="codicon codicon-file">'),Lc=k('<section class=file-explorer aria-label="File explorer"><div class=file-explorer-header><h3>Explorer</h3><div class=file-explorer-actions><button type=button class=header-action-btn><i class="codicon codicon-new-file"></i></button><button type=button class=header-action-btn><i class="codicon codicon-new-folder"></i></button><button type=button class=header-action-btn title="Download all files as .zip"><i class="codicon codicon-desktop-download"></i></button></div></div><div class=file-explorer-content role=tree aria-multiselectable=true tabindex=-1>');const zr=e=>{const t=e.path?`${e.path}/${e.entry.name}`:e.entry.name,[n,i]=W(!1),[r,o]=W(!1),[a,l]=W({x:0,y:0}),[s,c]=W(null),f=()=>e.isContextMenuOpenFor===t,d=u=>{e.setContextMenuOpenFor(u?t:null)},h=()=>e.currentlyRenaming===t;ue(()=>{!h()&&s()&&c(null)});const m=()=>e.selectedFiles.includes(t),S=u=>u==="deps"||u.startsWith("deps/"),w=u=>{if(u.metaKey||u.ctrlKey){const g=m()?e.selectedFiles.filter(O=>O!==t):[...e.selectedFiles,t];e.onSelectionChange(g),m()||e.onFileSelect(t)}else if(u.shiftKey&&e.selectedFiles.length>0){const g=e.selectedFiles[e.selectedFiles.length-1],O=T(g,t);e.onSelectionChange(O),e.onFileSelect(t)}else e.onSelectionChange([t]),e.onFileSelect(t)},A=u=>{u.preventDefault(),u.stopPropagation(),!S(t)&&(m()||e.onSelectionChange([t]),l({x:u.clientX,y:u.clientY}),d(!0))},p=()=>{d(!1),e.onCopy(e.selectedFiles)},v=()=>{d(!1);const u=e.entry.type==="directory"?t:e.path;e.onPaste(u)},P=()=>{d(!1),e.startRename(t)},z=()=>{d(!1),e.selectedFiles.length>1?e.showDeleteConfirmDialog(e.selectedFiles):e.showDeleteConfirmDialog([t])},$=u=>{if(u=u.trim(),u&&u!==e.entry.name){const g=t.split("/");g.pop();const O=g.join("/");if(e.checkNameConflict&&e.checkNameConflict(O,u)){c("A file or folder with this name already exists.");return}c(null),e.onRenameEntry(t,u)}e.startRename("")},L=()=>{e.startRename(""),c(null)};ue(()=>{const u=g=>{g.target.closest(".context-menu")||d(!1)};f()&&(document.addEventListener("click",u,{capture:!0}),Qe(()=>document.removeEventListener("click",u,{capture:!0})))});const T=(u,g)=>{const O=I(),E=O.indexOf(u),x=O.indexOf(g);if(E===-1||x===-1)return[g];const Q=Math.min(E,x),G=Math.max(E,x);return O.slice(Q,G+1)},I=()=>e.allVisibleFiles,_=u=>{if(S(t)){u.preventDefault();return}if(u.dataTransfer.effectAllowed="move",o(!0),m()&&e.selectedFiles.length>1){const g=e.selectedFiles;if(g.some(O=>S(O))){u.preventDefault();return}u.dataTransfer.setData("text/plain",JSON.stringify(g))}else u.dataTransfer.setData("text/plain",JSON.stringify([t])),e.onSelectionChange([t]);u.stopPropagation()},C=()=>{o(!1)},F=u=>{if(u.preventDefault(),u.stopPropagation(),S(t)){u.dataTransfer.dropEffect="none";return}u.dataTransfer?.files.length?u.dataTransfer.dropEffect="copy":u.dataTransfer.dropEffect="move",i(!0)},R=u=>{const g=u.currentTarget.getBoundingClientRect(),O=u.clientX>=g.left&&u.clientX<=g.right,E=u.clientY>=g.top&&u.clientY<=g.bottom;(!O||!E)&&i(!1)},X=u=>{if(u.preventDefault(),u.stopPropagation(),i(!1),console.log("Drop event on:",t,"with data:",u.dataTransfer?.getData("text/plain")),S(t))return;if(u.dataTransfer?.files.length){e.entry.type==="directory"&&e.onFileUpload(Array.from(u.dataTransfer.files),t);return}const g=u.dataTransfer.getData("text/plain");if(g&&e.entry.type==="directory")try{const O=JSON.parse(g);console.log("Moving paths:",O,"to:",t);for(const E of O){if(E.split("/").slice(0,-1).join("/")===t){console.log("Skipping move - already in destination:",E);continue}const Q=E.split("/").pop();if(e.checkNameConflict&&e.checkNameConflict(t,Q)){e.showConfirmDialog&&e.showConfirmDialog(O,t,Q);return}}O.forEach(E=>{E.split("/").slice(0,-1).join("/")!==t&&e.onMoveEntry(E,t)})}catch{if(console.log("Fallback: moving single item:",g,"to:",t),g.split("/").slice(0,-1).join("/")===t){console.log("Skipping move - already in destination:",g);return}const x=g.split("/").pop();if(e.checkNameConflict&&e.checkNameConflict(t,x)){e.showConfirmDialog&&e.showConfirmDialog([g],t,x);return}e.onMoveEntry(g,t)}};if(e.entry.type==="directory"){const[u,g]=W(!0);ue(()=>{e.creating&&e.creating.parentPath===t&&g(!0)});const O=x=>[...x].sort((Q,G)=>Q.type!==G.type?Q.type==="directory"?-1:1:Q.name.toLowerCase().localeCompare(G.name.toLowerCase())),E=x=>{g(!u()),w(x)};return(()=>{var x=Ac(),Q=x.firstChild,G=Q.firstChild;return G.nextSibling,x.addEventListener("drop",X),x.addEventListener("dragleave",R),x.addEventListener("dragover",F),Q.addEventListener("dragend",C),Q.addEventListener("dragstart",_),Q.$$contextmenu=A,Q.$$keydown=D=>{D.target===D.currentTarget&&(D.key==="Enter"||D.key===" "?(D.preventDefault(),E(D)):D.key==="ArrowRight"&&!u()?(D.preventDefault(),g(!0)):D.key==="ArrowLeft"&&u()&&(D.preventDefault(),g(!1)))},Q.$$click=E,y(Q,b(B,{get when(){return h()},get fallback(){return(()=>{var D=Ii();return y(D,()=>e.entry.name),D})()},get children(){var D=zc(),U=D.firstChild,Z=U.firstChild,H=Z.nextSibling;return Ye(q=>{q&&setTimeout(()=>{q.focus(),q.select()},10)},H),H.addEventListener("blur",q=>$(q.currentTarget.value)),H.$$keydown=q=>{q.key==="Enter"?(q.preventDefault(),$(q.currentTarget.value)):q.key==="Escape"&&(q.preventDefault(),L())},y(D,b(B,{get when(){return s()},get children(){var q=rn();return y(q,s),q}}),null),te(()=>H.value=e.entry.name),D}}),null),y(x,b(B,{get when(){return u()},get children(){var D=Rc();return y(D,b(Oe,{get each(){return O(e.entry.children||[])},children:U=>b(zr,{entry:U,path:t,get onFileSelect(){return e.onFileSelect},get getFilePath(){return e.getFilePath},get activeFile(){return e.activeFile},get onMoveEntry(){return e.onMoveEntry},get onRenameEntry(){return e.onRenameEntry},get onDeleteEntry(){return e.onDeleteEntry},get onCopy(){return e.onCopy},get onPaste(){return e.onPaste},get isPasteEnabled(){return e.isPasteEnabled},get selectedFiles(){return e.selectedFiles},get onSelectionChange(){return e.onSelectionChange},get onFileUpload(){return e.onFileUpload},get checkNameConflict(){return e.checkNameConflict},get showConfirmDialog(){return e.showConfirmDialog},get showDeleteConfirmDialog(){return e.showDeleteConfirmDialog},get allVisibleFiles(){return e.allVisibleFiles},get creating(){return e.creating},get onCreateCommit(){return e.onCreateCommit},get onCreateCancel(){return e.onCreateCancel},get creationError(){return e.creationError},get setCreationError(){return e.setCreationError},get createCommitInProgress(){return e.createCommitInProgress},get currentlyRenaming(){return e.currentlyRenaming},get startRename(){return e.startRename},get isContextMenuOpenFor(){return e.isContextMenuOpenFor},get setContextMenuOpenFor(){return e.setContextMenuOpenFor}})}),null),y(D,b(B,{get when(){return e.creating&&e.creating.parentPath===t},get children(){var U=kr(),Z=U.firstChild,H=Z.firstChild,q=H.nextSibling;return q.$$input=()=>{e.setCreationError&&e.setCreationError(null)},q.addEventListener("blur",K=>{if(!e.createCommitInProgress||!e.createCommitInProgress()){const ee=K.currentTarget.value.trim();e.onCreateCommit(ee)}}),q.$$keydown=K=>{if(K.key==="Enter"){K.preventDefault();const ee=K.currentTarget.value.trim();e.onCreateCommit(ee)}else K.key==="Escape"&&(K.preventDefault(),e.onCreateCancel())},Ye(K=>{K&&e.creating&&e.creating.parentPath===t&&setTimeout(()=>K.focus(),10)},q),y(U,b(B,{get when(){return e.creationError},get children(){var K=rn();return y(K,()=>e.creationError),K}}),null),te(()=>ge(H,`codicon codicon-${e.creating.type==="file"?"file":"folder"}`)),U}}),null),D}}),null),y(x,b(B,{get when(){return f()},get children(){var D=Tc(),U=D.firstChild,Z=U.nextSibling,H=Z.nextSibling,q=H.nextSibling,K=q.nextSibling;return D.$$keydown=ee=>{ee.stopPropagation(),ee.key==="Escape"&&d(!1)},D.$$click=ee=>ee.stopPropagation(),D.style.setProperty("position","fixed"),D.style.setProperty("z-index","1000"),U.$$click=p,Z.$$click=v,q.$$click=P,K.$$click=z,te(ee=>{var fe=`${a().y}px`,ae=`${a().x}px`,le=!e.isPasteEnabled;return fe!==ee.e&&((ee.e=fe)!=null?D.style.setProperty("top",fe):D.style.removeProperty("top")),ae!==ee.t&&((ee.t=ae)!=null?D.style.setProperty("left",ae):D.style.removeProperty("left")),le!==ee.a&&(Z.disabled=ee.a=le),ee},{e:void 0,t:void 0,a:void 0}),D}}),null),te(D=>{var U=!!n(),Z=!!r(),H=!!(m()&&!h()),q=u(),K=m(),ee=!!S(t),fe=!S(t),ae=`codicon codicon-chevron-${u()?"down":"right"}`;return U!==D.e&&x.classList.toggle("drag-over",D.e=U),Z!==D.t&&x.classList.toggle("dragging",D.t=Z),H!==D.a&&x.classList.toggle("selected",D.a=H),q!==D.o&&re(Q,"aria-expanded",D.o=q),K!==D.i&&re(Q,"aria-selected",D.i=K),ee!==D.n&&Q.classList.toggle("read-only",D.n=ee),fe!==D.s&&re(Q,"draggable",D.s=fe),ae!==D.h&&ge(G,D.h=ae),D},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),x})()}return(()=>{var u=Fc();return u.$$keydown=g=>{g.target===g.currentTarget&&(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),w(g))},u.$$click=w,u.$$contextmenu=A,u.addEventListener("dragend",C),u.addEventListener("dragstart",_),y(u,b(B,{get when(){return h()},get fallback(){return[Ic(),(()=>{var g=Ii();return y(g,()=>e.entry.name),g})()]},get children(){var g=Dc(),O=g.firstChild,E=O.firstChild,x=E.nextSibling;return Ye(Q=>{Q&&setTimeout(()=>{Q.focus(),Q.select()},10)},x),x.addEventListener("blur",Q=>$(Q.currentTarget.value)),x.$$keydown=Q=>{Q.key==="Enter"?(Q.preventDefault(),$(Q.currentTarget.value)):Q.key==="Escape"&&(Q.preventDefault(),L())},y(g,b(B,{get when(){return s()},get children(){var Q=rn();return y(Q,s),Q}}),null),te(()=>x.value=e.entry.name),g}}),null),y(u,b(B,{get when(){return f()},get children(){var g=Qc(),O=g.firstChild,E=O.nextSibling,x=E.nextSibling,Q=x.nextSibling,G=Q.nextSibling;return g.$$keydown=D=>{D.stopPropagation(),D.key==="Escape"&&d(!1)},g.$$click=D=>D.stopPropagation(),g.style.setProperty("position","fixed"),g.style.setProperty("z-index","1000"),O.$$click=p,E.$$click=v,Q.$$click=P,G.$$click=z,te(D=>{var U=`${a().y}px`,Z=`${a().x}px`,H=!e.isPasteEnabled;return U!==D.e&&((D.e=U)!=null?g.style.setProperty("top",U):g.style.removeProperty("top")),Z!==D.t&&((D.t=Z)!=null?g.style.setProperty("left",Z):g.style.removeProperty("left")),H!==D.a&&(E.disabled=D.a=H),D},{e:void 0,t:void 0,a:void 0}),g}}),null),te(g=>{var O=m(),E=!S(t),x=e.activeFile!==null&&e.getFilePath(e.activeFile)===t,Q=!!(m()&&!h()),G=!!r(),D=!!S(t),U=!!f();return O!==g.e&&re(u,"aria-selected",g.e=O),E!==g.t&&re(u,"draggable",g.t=E),x!==g.a&&u.classList.toggle("active",g.a=x),Q!==g.o&&u.classList.toggle("selected",g.o=Q),G!==g.i&&u.classList.toggle("dragging",g.i=G),D!==g.n&&u.classList.toggle("read-only",g.n=D),U!==g.s&&u.classList.toggle("has-context-menu",g.s=U),g},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),u})()},Nc=e=>{const[t,n]=W(null),i=()=>e.globalFileCreation!==void 0?e.globalFileCreation:t(),r=e.setGlobalFileCreation||n,[o,a]=W(!1),[l,s]=W(null),[c,f]=W(null),[d,h]=W(null),m=()=>{r(null),h(null),e.setCreationError&&e.setCreationError(null)},S=u=>{u===""?h(null):(m(),h(u))},w=(u,g)=>{m(),r({type:u,parentPath:g})},A=u=>u==="deps"||u.startsWith("deps/"),p=u=>{const g=u.filter(O=>!A(O));g.length>0&&s(g)},v=u=>{const g=l();if(g)for(const O of g){const E=O.split("/").pop();let x=E,Q=1;const G=E.split("."),U=G.length>1&&G[G.length-1].length>0?`.${G.pop()}`:"",Z=G.join(".");if(e.checkNameConflict)for(;e.checkNameConflict(u,x);)x=`${Z} (${Q})${U}`,Q++;e.onCopyEntry(O,u,x)}},P=u=>[...u].sort((g,O)=>g.type!==O.type?g.type==="directory"?-1:1:g.name.toLowerCase().localeCompare(O.name.toLowerCase())),z=()=>{const u=[],g=(O,E="")=>{const x=P(O);for(const Q of x){const G=E?`${E}/${Q.name}`:Q.name;u.push(G),Q.type==="directory"&&Q.children&&g(Q.children,G)}};return g(e.files),u};ue(()=>{const u=g=>{if(g.key==="Escape"){const G=g.target;if(G.tagName==="INPUT"||G.tagName==="TEXTAREA"||G.isContentEditable)return;let D=G;for(;D&&D!==document.body;){if(D.classList.contains("cm-editor")||D.classList.contains("cm-content")||D.classList.contains("cm-scroller")||D.closest(".cm-editor"))return;D=D.parentElement}i()||d()?m():e.onSelectionChange([]);return}if(i()||d())return;const O=g.target,E=O.tagName==="INPUT"||O.tagName==="TEXTAREA"||O.isContentEditable;let x=!1,Q=O;for(;Q&&Q!==document.body;){if(Q.classList.contains("cm-editor")||Q.classList.contains("cm-content")||Q.classList.contains("cm-scroller")||Q.closest(".cm-editor")){x=!0;break}Q=Q.parentElement}if(!(E||x)){if((g.metaKey||g.ctrlKey)&&g.key==="a"){g.preventDefault();const G=z();e.onSelectionChange(G)}if((g.metaKey||g.ctrlKey)&&g.key==="c"&&(g.preventDefault(),e.selectedFiles.length>0&&p(e.selectedFiles)),(g.metaKey||g.ctrlKey)&&g.key==="v"&&(g.preventDefault(),l())){let G="";if(e.selectedFiles.length===1){const D=e.selectedFiles[0],U=_(e.files,D);if(U)if(U.type==="directory")G=D;else{const Z=D.split("/");Z.length>1&&(Z.pop(),G=Z.join("/"))}}v(G)}}};return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}});const $=u=>{const g=u==="file"?"New File":"New Folder";if(e.selectedFiles.length===1){const O=e.selectedFiles[0],E=_(e.files,O);if(E&&E.type==="directory")return`${g} in ${O}`;if(E&&E.type==="file"){const x=O.split("/");if(x.length>1){x.pop();const Q=x.join("/");return`${g} in ${Q}`}else return`${g} in root (same level as ${E.name})`}}return`${g} in root`},[L,T]=W(!1),I=u=>{if(!(!i()||L()))if(u=u.trim(),u){const g=i().parentPath,O=i().type;T(!0),O==="file"?e.onNewFile(u,g):e.onNewFolder(u,g),setTimeout(()=>{e.creationError||m(),T(!1)},50)}else m()},_=(u,g)=>{for(const O of u){if(O.name===g&&O.type==="file"||O.name===g&&O.type==="directory")return O;if(O.type==="directory"&&O.children){const E=g.split("/");if(E[0]===O.name&&E.length>1){const x=E.slice(1).join("/"),Q=_(O.children,x);if(Q)return Q}}}return null},C=()=>{m(),T(!1)},F=u=>{u.preventDefault(),u.stopPropagation(),u.dataTransfer?.files.length?u.dataTransfer.dropEffect="copy":u.dataTransfer.dropEffect="move",a(!0)},R=()=>{a(!1)},X=u=>{if(u.preventDefault(),a(!1),console.log("Drop event on root explorer with data:",u.dataTransfer?.getData("text/plain")),u.dataTransfer?.files.length){e.onFileUpload(Array.from(u.dataTransfer.files),"");return}const g=u.dataTransfer.getData("text/plain");if(g)try{const O=JSON.parse(g);console.log("Moving paths to root:",O);for(const E of O){if(!E.includes("/")){console.log("Skipping move - already at root:",E);continue}const x=E.split("/").pop();if(e.checkNameConflict&&e.checkNameConflict("",x)){e.showConfirmDialog&&e.showConfirmDialog(O,"",x);return}}O.forEach(E=>{E.includes("/")&&e.onMoveEntry(E,"")})}catch{if(console.log("Fallback: moving single item to root:",g),!g.includes("/")){console.log("Skipping move - already at root:",g);return}const E=g.split("/").pop();if(e.checkNameConflict&&e.checkNameConflict("",E)){e.showConfirmDialog&&e.showConfirmDialog([g],"",E);return}e.onMoveEntry(g,"")}};return(()=>{var u=Lc(),g=u.firstChild,O=g.firstChild,E=O.nextSibling,x=E.firstChild,Q=x.nextSibling,G=Q.nextSibling,D=g.nextSibling;return u.addEventListener("drop",X),u.addEventListener("dragleave",R),u.addEventListener("dragover",F),x.$$click=()=>{let U="";if(e.selectedFiles.length===1){const Z=e.selectedFiles[0],H=_(e.files,Z);if(H&&H.type==="directory")U=Z;else if(H&&H.type==="file"){const q=Z.split("/");q.length>1&&(q.pop(),U=q.join("/"))}}w("file",U)},Q.$$click=()=>{let U="";if(e.selectedFiles.length===1){const Z=e.selectedFiles[0],H=_(e.files,Z);if(H&&H.type==="directory")U=Z;else if(H&&H.type==="file"){const q=Z.split("/");q.length>1&&(q.pop(),U=q.join("/"))}}w("folder",U)},G.$$click=async()=>{const U=await Ne(()=>import("./jszip.min-BiHF8TMC.js").then(ae=>ae.j),[]),Z=U.default||U,H=new Z,q=localStorage.getItem("althread-file-system");let K=q?JSON.parse(q):[];const ee=ae=>ae.map(le=>({...le,id:le.id||(window.crypto?crypto.randomUUID():Math.random().toString(36).slice(2)),children:le.children?ee(le.children):void 0}));K=ee(K);const fe=(ae,le="")=>{for(const se of ae){const _e=le?`${le}/${se.name}`:se.name;if(se.type==="file"){const Ge=localStorage.getItem("althread-file-content-"+_e)||"";H.file(_e,Ge)}else se.type==="directory"&&se.children&&fe(se.children,_e)}};fe(K),H.generateAsync({type:"blob"}).then(ae=>{const le=URL.createObjectURL(ae),se=document.createElement("a");se.href=le,se.download="althread-files.zip",document.body.appendChild(se),se.click(),setTimeout(()=>{document.body.removeChild(se),URL.revokeObjectURL(le)},100)})},D.$$click=U=>{U.target===U.currentTarget&&e.onSelectionChange([])},D.$$keydown=U=>{U.key==="Escape"&&e.onSelectionChange([])},y(D,b(Oe,{get each(){return P(e.files)},children:U=>b(zr,{entry:U,path:"",get onFileSelect(){return e.onFileSelect},get activeFile(){return e.activeFile},get getFilePath(){return e.getFilePath},get onMoveEntry(){return e.onMoveEntry},get onRenameEntry(){return e.onRenameEntry},get onDeleteEntry(){return e.onDeleteEntry},onCopy:p,onPaste:v,get isPasteEnabled(){return!!l()},get selectedFiles(){return e.selectedFiles},get onSelectionChange(){return e.onSelectionChange},get onFileUpload(){return e.onFileUpload},get checkNameConflict(){return e.checkNameConflict||(()=>!1)},get showConfirmDialog(){return e.showConfirmDialog||(()=>{})},get showDeleteConfirmDialog(){return e.showDeleteConfirmDialog||(()=>{})},get allVisibleFiles(){return z()},get creating(){return i()},onCreateCommit:I,onCreateCancel:C,get creationError(){return e.creationError||null},get setCreationError(){return e.setCreationError},createCommitInProgress:L,get currentlyRenaming(){return d()},startRename:S,get isContextMenuOpenFor(){return c()},setContextMenuOpenFor:f})}),null),y(D,b(B,{get when(){return ke(()=>!!i())()&&i().parentPath===""},get children(){var U=kr(),Z=U.firstChild,H=Z.firstChild,q=H.nextSibling;return q.$$input=()=>e.setCreationError&&e.setCreationError(null),q.addEventListener("blur",K=>{if(!L()){const ee=K.currentTarget.value.trim();I(ee)}}),q.$$keydown=K=>{if(K.key==="Enter"){K.preventDefault();const ee=K.currentTarget.value.trim();I(ee)}else K.key==="Escape"&&(K.preventDefault(),C())},Ye(K=>{K&&i()&&i().parentPath===""&&setTimeout(()=>K.focus(),10)},q),y(U,b(B,{get when(){return e.creationError},get children(){var K=rn();return y(K,()=>e.creationError),K}}),null),te(()=>ge(H,`codicon codicon-${i().type==="file"?"file":"folder"}`)),U}}),null),te(U=>{var Z=!!o(),H=$("file"),q=!!i()||!!d(),K=$("folder"),ee=!!i()||!!d();return Z!==U.e&&u.classList.toggle("drag-over",U.e=Z),H!==U.t&&re(x,"title",U.t=H),q!==U.a&&(x.disabled=U.a=q),K!==U.o&&re(Q,"title",U.o=K),ee!==U.i&&(Q.disabled=U.i=ee),U},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),u})()};xe(["click","keydown","contextmenu","input"]);var Mc=k('<button type=button class=search-clear><i class="codicon codicon-close">'),Uc=k('<div class=search-empty><i class="codicon codicon-search"></i><p>'),jc=k('<div class=search-empty><i class="codicon codicon-search"></i><p>Start typing to search files...'),Vc=k('<div class=search-no-results><i class="codicon codicon-search-stop"></i><p></p><button type=button class=search-clear-btn>Clear search'),Wc=k('<div class=search-view><div class=search-view-header><h3>Search</h3></div><div class=search-view-content><div class=search-input-container><div class=search-input-wrapper><i class="codicon codicon-search search-icon"></i><input type=text class=search-input></div></div><div class=search-results>'),Xc=k("<i>"),Gc=k("<div class=search-result-subtitle>"),Bc=k("<div class=search-result-description>"),Yc=k("<button type=button class=search-result-item><div class=search-result-content><div class=search-result-title>");function Rr(e){const[t,n]=W(""),i=()=>e.searchFields||["title","subtitle","description","content","path"],r=(c,f)=>{const d=c.description||"",h=c.content||"",m=f.trim().toLowerCase();if(!m||!h)return d;const S=h.split(`
`).find(A=>A.toLowerCase().includes(m));if(!S)return d;let w=S.trim();if(w.length>100){const A=w.toLowerCase().indexOf(m),p=Math.max(0,A-30),v=Math.min(w.length,p+100);w=`${p>0?"…":""}${w.substring(p,v)}${v<w.length?"…":""}`}return d?`${d}
${w}`:w},o=c=>c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),a=(c,f)=>{const d=f.trim(),h=d?c.toLowerCase().indexOf(d.toLowerCase()):-1;if(h===-1)return o(c);const m=c.substring(0,h),S=c.substring(h,h+d.length),w=c.substring(h+d.length);return`${o(m)}<span class="search-highlight">${o(S)}</span>${o(w)}`},l=oe(()=>{const c=t().toLowerCase().trim();return c?e.items.filter(f=>i().some(d=>{const h=f[d];return h?Array.isArray(h)?h.some(m=>m.toLowerCase().includes(c)):h.toLowerCase().includes(c):!1})):e.showAllByDefault!==!1?e.items:[]}),s=()=>{n("")};return(()=>{var c=Wc(),f=c.firstChild,d=f.nextSibling,h=d.firstChild,m=h.firstChild,S=m.firstChild,w=S.nextSibling,A=h.nextSibling;return w.$$keydown=p=>{p.key==="Escape"&&(s(),p.preventDefault())},w.$$input=p=>n(p.currentTarget.value),y(m,b(B,{get when(){return t()},get children(){var p=Mc();return p.$$click=s,p}}),null),y(A,b(B,{get when(){return e.items.length===0},get children(){var p=Uc(),v=p.firstChild,P=v.nextSibling;return y(P,()=>e.emptyMessage||"No items available"),p}}),null),y(A,b(B,{get when(){return e.items.length>0&&!t()&&e.showAllByDefault===!1},get children(){return jc()}}),null),y(A,b(B,{get when(){return ke(()=>e.items.length>0&&l().length===0)()&&t()},get children(){var p=Vc(),v=p.firstChild,P=v.nextSibling,z=P.nextSibling;return y(P,()=>e.noResultsMessage||"No results found"),z.$$click=s,p}}),null),y(A,b(B,{get when(){return l().length>0},get children(){return b(Oe,{get each(){return l()},children:p=>(()=>{var v=Yc(),P=v.firstChild,z=P.firstChild;return Ie(v,"click",p.onClick,!0),y(v,b(B,{get when(){return p.icon},get children(){var $=Xc();return te(()=>ge($,`codicon codicon-${p.icon} search-result-icon`)),$}}),P),y(z,()=>p.title),y(P,b(B,{get when(){return p.subtitle},get children(){var $=Gc();return y($,()=>p.subtitle==="Root"?"root":p.subtitle),$}}),null),y(P,b(B,{get when(){return r(p,t())},get children(){var $=Bc();return te(()=>$.innerHTML=a(r(p,t()),t())),$}}),null),v})()})}}),null),te(()=>re(w,"placeholder",e.placeholder||"Search...")),te(()=>w.value=t()),c})()}xe(["input","keydown","click"]);const qc=()=>{if(typeof navigator>"u")return!1;const e=navigator.userAgentData?.platform??navigator.platform??"";return/mac/i.test(e)||/mac/i.test(navigator.userAgent)},si=qc(),$t=si?"Cmd":"Ctrl",Te={FILE_SYSTEM:"althread-file-system",FILE_CONTENT_PREFIX:"althread-file-content-",EDITOR_THEME:"althread-editor-theme"},Ze=e=>{localStorage.setItem(Te.FILE_SYSTEM,JSON.stringify(e))},Hc=()=>{const e=localStorage.getItem(Te.FILE_SYSTEM),t=n=>n.map(i=>({...i,id:i.id||crypto.randomUUID(),children:i.children?t(i.children):void 0}));return t(e?JSON.parse(e):[{name:"main.alt",type:"file"}])},Me=(e,t)=>{localStorage.setItem(Te.FILE_CONTENT_PREFIX+e,t)},tt=e=>{const t=localStorage.getItem(Te.FILE_CONTENT_PREFIX+e);if(t!==null)return t;if(e==="main.alt"){const n=`// Althread program

main {
    // write your code here
}
`;return localStorage.setItem(Te.FILE_CONTENT_PREFIX+"main.alt",n),n}return`// New file
`},Zc=e=>{switch(e.split(".").pop()?.toLowerCase()){case"js":case"jsx":return`// JavaScript file
console.log("Hello, World!");`;case"ts":case"tsx":return`// TypeScript file
console.log("Hello, World!");`;case"py":return`# Python file
print("Hello, World!")`;case"html":return`<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;case"css":return`/* CSS file */
body {
    margin: 0;
    padding: 0;
}`;case"json":return`{
    "name": "example",
    "version": "1.0.0"
}`;case"md":return`# Markdown File

This is a markdown document.`;case"alt":return`// Althread file

main {

}
`;default:return`// New file
`}},Kc=e=>{localStorage.setItem(Te.EDITOR_THEME,e)},Jc=()=>{const e=localStorage.getItem(Te.EDITOR_THEME);return e==="light"||e==="dark"?e:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"},ed=[{fileName:"coffee_machine.alt",title:"Coffee Machine",description:"Example program: Coffee Machine",tags:["example","shared","concurrency","programs","loops","conditionals","synchronization","math"],content:`shared {
    let Coin_inserted = false;
    let Coffee_ready = false;
    let State = 0; // 0: Idle, 1: Brewing, 2: Done
}

program Machine() {
    loop {
         // Wait for coin
         await Coin_inserted;
         
         // Consume coin
         Coin_inserted = false;
         
         // Start brewing
         State = 1; 
         
         // Finish brewing
         State = 2; 
         Coffee_ready = true;
         
         // Wait for user to take coffee
         await !Coffee_ready;
         
         // Return to idle
         State = 0; 
    }
}

program User() {
    loop {
        // Action: Insert coin
        // We can only insert if machine is ready (optional constraint, but good for flow)
        // await state == 0; 
        Coin_inserted = true;
        
        // Action: Wait for coffee
        await Coffee_ready;
        
        // Action: Take coffee
        Coffee_ready = false;
    }
}

check {
    // Response property: If I put a coin, I eventually get coffee
    // Note: This relies on fairness (Machine must be scheduled)
    always ( if Coin_inserted { eventually Coffee_ready } );
}

check {
    // Safety: Coffee is never ready in Idle state
    always ( if (State == 0) { !Coffee_ready } );
}

main {
    run Machine();
    run User();
}`},{fileName:"concurrency.alt",title:"Concurrency",description:"Example program: Concurrency",tags:["example","shared","concurrency","atomic","channels","communication","programs","functions","loops","conditionals","synchronization","messaging"],content:`shared {
    let A = 1;
    let B = 0;
    let Start = false;
    let WorkersFinished = 0;  // Counts finished workers
}

fn process_message(value: int, flag: bool) -> void {
    print("Processing message: value=" + value + ", flag=" + flag);
    atomic {
        if flag {
            A = value;
        } else {
            B = value;
        }
        WorkersFinished = WorkersFinished + 1; 
    }
}

fn verify_state() -> bool {
    return (A == 125 && B == 125);
}

program Worker() {
    await Start;
    
    await receive in (x, y);
    
    process_message(x, y);
}

main {
    let worker1 = run Worker();
    let worker2 = run Worker();

    channel self.out (int, bool)> worker1.in;
    channel self.out2 (int, bool)> worker2.in;
    
    atomic { Start = true; }
    
    send out(125, true);
    send out2(125, false);

    // Waits for both workers to finish processing
    await WorkersFinished == 2;

    if verify_state() {
        print("Channel test successful!");
    } else {
        print("Channel test failed!");
    }
}

// Output:
// Processing message: value=125, flag=true
// Processing message: value=125, flag=false
// Channel test successful!
// or
// Processing message: value=125, flag=false
// Processing message: value=125, flag=true
// Channel test successful!`},{fileName:"fibo.alt",title:"Fibo",description:"Example program: Fibo",tags:["example","functions","loops","conditionals","recursion","fibonacci","math","algorithms"],content:`fn fibonacci_recursive(n: int, a: int, b: int) -> int {
  if n == 0 {
    return a;
  } else {
    return fibonacci_recursive(n - 1, b, a + b);
  }
}

fn fibonacci_iterative(n: int, a: int, b: int) -> int {
  for i in 1..n {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

main {
    let n = 10;
    let res = fibonacci_recursive(n, 0, 1);
    print("Fibonacci recursive of " + n + ": " + res);

    let res = fibonacci_iterative(n, 0, 1);
    print("Fibonacci iterative of " + n + ": " + res);
}

// Outputs:
// Fibonacci recursive of 10: 55
// Fibonacci iterative of 10: 55`},{fileName:"list-of-list.alt",title:"List-Of-List",description:"Example program: List-Of-List",tags:["example","shared","concurrency","loops"],content:`shared {
  let N = 8;
  let Global = 1..9;
  let Global2 = [1..3, 1..7, Global];
}

main {
  let s: list(list(int));
  for i in 0..Global2.at(2).at(6) {
    s.push(1..i+1);
  }

  for i in s {
    print(i);
    for j in i {
      print(j);
    }
  }

  let v = s.at(3);
  let v = v.at(1);
  print("=========");
  print(v);
}`},{fileName:"loop-sum.alt",title:"Loop-Sum",description:"Example program: Loop-Sum",tags:["example","shared","concurrency","programs","loops","conditionals"],content:`shared {
  let Sum = 0;
}

program A(my_id: int) {
  loop {
    @ Sum = Sum + 1;
    @ Sum = Sum - 1;
  }
}

check {
  always if Sum == 2 { eventually Sum == 1 };
}

main {
  let n = 2;
  let a:list(proc(A));
  for i in 0..n {
    let p = run A(i);
  }
}`},{fileName:"ltl-always-eventually-fail.alt",title:"Ltl-Always-Eventually-Fail",description:"Example program: Ltl-Always-Eventually-Fail",tags:["example","shared","concurrency","atomic","programs"],content:`shared {
    let Tick: int = 0;
}

program TickOnce() {
    atomic {
        Tick = Tick + 1;
    }
}

check {
    always eventually (Tick > 1);
}

main {
    run TickOnce();
}`},{fileName:"ltl-always-eventually.alt",title:"Ltl-Always-Eventually",description:"Example program: Ltl-Always-Eventually",tags:["example","shared","concurrency","atomic","programs"],content:`shared {
    let Tick: int = 0;
}

program InfiniteTicker() {
    atomic {
        Tick = Tick + 1;
    }
}

check {
    always eventually (Tick > 0);
}

main {
    run InfiniteTicker();
}`},{fileName:"ltl-boolean-workflow.alt",title:"Ltl-Boolean-Workflow",description:"Example program: Ltl-Boolean-Workflow",tags:["example","shared","concurrency","programs","ring"],content:`// Example 5: Boolean conditions
// Testing various boolean combinations

shared {
    let Ready: bool = false;
    let Started: bool = false;
    let Finished: bool = false;
}

program Workflow() {
    Ready = true;
    Started = true;
    Finished = true;
}

// All these formulas PASS with the workflow
check {
    eventually (Ready == true);
}

check {
    always (!(Ready == true) || eventually (Started == true));
}

check {
    eventually (Finished == true);
}

// This demonstrates ordering: Ready before Started before Finished
// In actual execution, they happen in sequence
// check {
//     always (!(Started == true) || (Ready == true))
// }

main {
    run Workflow();
}`},{fileName:"ltl-bounded-buffer.alt",title:"Ltl-Bounded-Buffer",description:"Example program: Ltl-Bounded-Buffer",tags:["example","shared","concurrency","programs","conditionals","math"],content:`// Example 7: Bounded buffer property
// Buffer should never overflow or underflow

shared {
    let BufferSize: int = 0;
    let MAX_SIZE: int = 10;
}

program Producer() {
    if (BufferSize < MAX_SIZE) {
        BufferSize = BufferSize + 1;
    }
}

program Consumer() {
    if (BufferSize > 0) {
        BufferSize = BufferSize - 1;
    }
}

// These formulas PASS: buffer stays within bounds
check {
    always (BufferSize >= 0);
}

check {
    always (BufferSize <= MAX_SIZE);
}

// Combined: buffer is always in valid range
check {
    always (BufferSize >= 0 && BufferSize <= MAX_SIZE);
}

main {
    run Producer();
    run Producer();
    run Consumer();
    run Producer();
}`},{fileName:"ltl-broadcast-fail.alt",title:"Ltl-Broadcast-Fail",description:"Example program: Ltl-Broadcast-Fail",tags:["example","channels","communication","programs","loops","synchronization","messaging"],content:`program sender() {
    send out.a.*(42);
}

program receiver() {
    await receive in(x) => {
        print("receive", x);
    };
}

main {
    let s = run sender();
    let r1 = run receiver();
    let r2 = run receiver();
    
    channel s.out.a.a (int)> r1.in;
    channel s.out.b.b (int)> r2.in;
}

check {
    for p in $.procs.receiver { eventually p.reaches(end) };
}`},{fileName:"ltl-broadcast-pass.alt",title:"Ltl-Broadcast-Pass",description:"Example program: Ltl-Broadcast-Pass",tags:["example","channels","communication","programs","loops","synchronization","messaging"],content:`program sender() {
    send out.*(42);
}

program receiver() {
    label L;
    await receive in(x);
    print("receive", x);
}

main {
    let s = run sender();
    let r1 = run receiver();
    let r2 = run receiver();
    
    channel s.out.a.a (int)> r1.in;
    channel s.out.b.b (int)> r2.in;
}

check {
    for p in $.procs.receiver { eventually p.reaches(end) };
}`},{fileName:"ltl-deadlock-freedom.alt",title:"Ltl-Deadlock-Freedom",description:"Example program: Ltl-Deadlock-Freedom",tags:["example","shared","concurrency","programs","conditionals","ring"],content:`// Example 10: Deadlock freedom
// System should eventually make progress

shared {
    let Lock1: bool = false;
    let Lock2: bool = false;
    let Progress: int = 0;
}

program UseResources() {
    // Acquire locks in consistent order (prevents deadlock)
    Lock1 = true;
    Lock2 = true;
    
    // Do work
    Progress = Progress + 1;
    
    // Release locks
    Lock2 = false;
    Lock1 = false;
}

// These formulas PASS: system makes progress
check {
    eventually (Progress > 0);
}

check {
    always (Progress >= 0);
}

// Locks are eventually released
check {
    always eventually (Lock1 == false && Lock2 == false);
}

// This would demonstrate deadlock if we had two processes
// with inconsistent lock ordering
// program DeadlockProne() {
//     Lock2 = true;
//     Lock1 = true;  // Opposite order!
//     progress = progress + 1;
//     lock1 = false;
//     lock2 = false;
// }

main {
    run UseResources();
}`},{fileName:"ltl-eventually-simple.alt",title:"Ltl-Eventually-Simple",description:"Example program: Ltl-Eventually-Simple",tags:["example","shared","concurrency","programs"],content:`// Example 3: Liveness property with eventually
// Property: Something good eventually happens

shared {
    let Flag: bool = false;
    let Counter: int = 0;
}

program EventuallySetsFlag() {
    Counter = Counter + 1;
    Counter = Counter + 1;
    Flag = true;
}

// This formula PASSES: Flag eventually becomes true

check {
    eventually (Flag == true);
}

// This formula also PASSES: Counter eventually exceeds 1
check {
    eventually (Counter > 1);
}

main {
    run EventuallySetsFlag();
}`},{fileName:"ltl-implication-fail.alt",title:"Ltl-Implication-Fail",description:"Example program: Ltl-Implication-Fail",tags:["example","shared","concurrency","programs","conditionals"],content:`shared {
    let Request: bool = false;
    let Granted: bool = false;
    let Completed: bool = false;
}

program RequestGrantComplete() {
        Request = true;
        Granted = true;
        Completed = true;
}
check {
    always (if Request { Granted });
}

main {
    run RequestGrantComplete();
}`},{fileName:"ltl-implications.alt",title:"Ltl-Implications",description:"Example program: Ltl-Implications",tags:["example","shared","concurrency","atomic","programs","loops","conditionals","synchronization"],content:`// Example 11: Complex conditions with implications
// If something happens, then something else must follow

shared {
    let Request: bool = false;
    let Granted: bool = false;
    let Completed: bool = false;
}

program RequestGrantComplete() {
    loop {
        await Request;

        Granted = true;

        Completed = true;

        await Completed == false; // commenting this line make the check fails
    }
}

program MakeRequest() {
    loop {
        // Make a request
        Request = true;

        await Completed;

        print("Request completed.");

        // Reset for next iteration
        atomic {
            Granted = false;
            Completed = false;
            Request = false;
        }
    }
}

// These formulas demonstrate implications
check {
    always (if Request { eventually Granted });
    
    always (if Granted { eventually Completed });
    
    eventually Request;
    
    always (if Completed { Granted });
}

main {
    run RequestGrantComplete();
    run MakeRequest();
}`},{fileName:"ltl-multiple-properties.alt",title:"Ltl-Multiple-Properties",description:"Example program: Ltl-Multiple-Properties",tags:["example","shared","concurrency","programs","math"],content:`// Example 12: Multiple properties on same system
// Demonstrates checking several properties at once

shared {
    let Value: int = 0;
    let PositiveCount: int = 0;
    let NegativeCount: int = 0;
}

program Modifier() {
    Value = Value + 5;
    PositiveCount = PositiveCount + 1;
    
    Value = Value - 3;
    
    Value = Value + 2;
    PositiveCount = PositiveCount + 1;
}

// Property 1: Value eventually positive
check {
    eventually (Value > 0);
}

// Property 2: Positive operations counted
check {
    eventually (PositiveCount > 0);
}

// Property 3: Final value is sum of operations
check {
    eventually (Value == 4);  // 5 - 3 + 2 = 4
}

// Property 4: Counters are non-negative
check {
    always (PositiveCount >= 0);
}

check {
    always (NegativeCount >= 0);
}

// Property 5: Value changes monotonically upward overall
// (This depends on specific execution)
// check {
//     always (Value >= 0)  // Would FAIL: value becomes -3 then 2
// }

main {
    run Modifier();
}`},{fileName:"ltl-mutual-exclusion.alt",title:"Ltl-Mutual-Exclusion",description:"Example program: Ltl-Mutual-Exclusion",tags:["example","shared","concurrency","programs"],content:`// Example 6: Mutual exclusion property
// Two processes should never be in critical section simultaneously

shared {
    let Cs1: bool = false;  // Process 1 in critical section
    let Cs2: bool = false;  // Process 2 in critical section
    let Turn: int = 1;
}

program Process1() {
    // Enter critical section
    Cs1 = true;
    
    // Critical section work
    Turn = 2;
    
    // Exit critical section
    Cs1 = false;
}

program Process2() {
    // Enter critical section
    Cs2 = true;
    
    // Critical section work
    Turn = 1;
    
    // Exit critical section
    Cs2 = false;
}

// This formula FAILS be
check {
    always (!(Cs1 == true && Cs2 == true));
}


main {
    run Process1();
    run Process2();
}`},{fileName:"ltl-resource-allocation.alt",title:"Ltl-Resource-Allocation",description:"Example program: Ltl-Resource-Allocation",tags:["example","shared","concurrency","programs","conditionals"],content:`// Example 9: Resource allocation
// Resource count should never exceed available resources

shared {
    let Allocated: int = 0;
    let MAX_RESOURCES: int = 5;
}

program Allocate() {
    if (Allocated < MAX_RESOURCES) {
        Allocated = Allocated + 1;
    }
}

program Release() {
    if (Allocated > 0) {
        Allocated = Allocated - 1;
    }
}

// These formulas PASS: resources managed correctly
check {
    always (Allocated >= 0);
}

check {
    always (Allocated <= MAX_RESOURCES);
}

// Resource usage stays bounded
check {
    always (Allocated >= 0 && Allocated <= MAX_RESOURCES);
}

// This would FAIL without the guard in Allocate
// If we had: Allocated = Allocated + 1; (without if)
// check {
//     always (Allocated <= MAX_RESOURCES)
// }

main {
    run Allocate();
    run Allocate();
    run Allocate();
    run Release();
    run Allocate();
}`},{fileName:"ltl-safety-simple.alt",title:"Ltl-Safety-Simple",description:"Example program: Ltl-Safety-Simple",tags:["example","shared","concurrency","programs"],content:`// Example 1: Simple safety property
// Property: x should always be non-negative

shared {
    let X: int = 0;
}

program Incrementer() {
    X = X + 1;
}

program Decrementer() {
    X = X - 1;
}

// This formula PASSES: X starts at 0 and is only incremented
check {
    always eventually (X >= 0);
}

main {
    run Incrementer();
    run Incrementer();
    run Incrementer();
    // If we uncomment this line, the check above would FAIL (X becomes negative)
    // run Decrementer();
}`},{fileName:"ltl-safety-violation.alt",title:"Ltl-Safety-Violation",description:"Example program: Ltl-Safety-Violation",tags:["example","shared","concurrency","programs"],content:`// Example 2: Safety violation
// Demonstrates a counter that can become negative

shared {
    let Counter: int = 5;
}

program BadDecrement() {
    Counter = Counter - 10;
}

// This formula FAILS: Counter becomes -5 after BadDecrement
check {
    always (Counter >= 0);
}

// This formula PASSES: Counter stays above -10
// check {
//     always (Counter >= -10)
// }

main {
    run BadDecrement();
}`},{fileName:"ltl-state-machine.alt",title:"Ltl-State-Machine",description:"Example program: Ltl-State-Machine",tags:["example","shared","concurrency","programs","conditionals"],content:`// Example 8: State machine property
// System progresses through well-defined states

shared {
    let State: int = 0;  // 0=INIT, 1=READY, 2=RUNNING, 3=DONE
}

program StateMachine() {
    // INIT -> READY
    State = 1;
    
    // READY -> RUNNING
    State = 2;
    
    // RUNNING -> DONE
    State = 3;
}

// These formulas PASS: State progresses correctly
check {
    eventually (State == 1);  // Eventually reaches READY
}

check {
    eventually (State == 3);  // Eventually reaches DONE
}

// State never goes backwards (monotonic)
check {
    always (State >= 0 && State <= 3);
}

// This would FAIL if we had: State = 1; State = 0;
// check {
//     always (!(State == 1) || eventually (State == 2))
// }

main {
    run StateMachine();
}`},{fileName:"max.alt",title:"Max",description:"Example program: Max",tags:["example","functions","conditionals","math"],content:`fn max(a: int, b: int) -> int {
    if a > b {
        return a;
    }
    return b;
}

main {
    print("The max between 5 and 10 is", max(5, 10));
}`},{fileName:"peterson_mutual_exlusion.alt",title:"Peterson Mutual Exlusion",description:"Example program: Peterson Mutual Exlusion",tags:["example","shared","concurrency","programs","synchronization"],content:`shared {
    const A_TURN = 1;
    const B_TURN = 2;
    let X: bool = false;
    let Y: bool = false;
    let T: int = 0;
    let NbSC = 0;
}

program A() {
    X = true;
    T = B_TURN;

    await Y == false || T == A_TURN;

    NbSC = NbSC + 1;
    //section critique
    NbSC = NbSC - 1;

    X = false;
    print("A is done");
}

program B() {
    Y = true;
    T = A_TURN;
    await X == false || T == B_TURN;

    NbSC = NbSC + 1;
    //section critique
    NbSC = NbSC - 1;

    Y = false;
    print("B is done");
}

always {
    NbSC == 0 || NbSC == 1;
}

main {
    run A();
    run B();
}`},{fileName:"readers_writers.alt",title:"Readers Writers",description:"Example program: Readers Writers",tags:["example","shared","concurrency","atomic","programs","conditionals","synchronization"],content:`shared {
    let Readers = 0;
    let Writers = 0;
}

program Reader() {
    loop {
        atomic { 
            // Wait until no writer is active
            await Writers == 0;
            // Enter reading section
            Readers = Readers + 1; 
        }
        
        // Reading happens here...
        
        // Exit reading section
        atomic { Readers = Readers - 1; }
    }
}

program Writer() {
    loop {
        
        // Enter writing section
        atomic { 
            // Wait until no readers and no other writers
            await (Readers == 0 && Writers == 0);
            
            Writers = Writers + 1; 
        }
        
        // Writing happens here...
        
        // Exit writing section
        atomic { Writers = Writers - 1; }
    }
}

check {
    // Safety: Never more than one writer
    always ( Writers <= 1 );
}

check {
    // Safety: If a writer is active, there are no readers
    always ( if (Writers > 0) { (Readers == 0) } );
}

check {
    // Safety: If readers are active, there is no writer
    always ( if (Readers > 0) { (Writers == 0) } );
}

main {
    // One Writer, Two Readers
    run Reader();
    run Reader();
    run Writer();
}`},{fileName:"ring-election-eventually.alt",title:"Ring-Election-Eventually",description:"Example program: Ring-Election-Eventually",tags:["example","shared","concurrency","channels","communication","programs","loops","conditionals","synchronization","messaging"],content:`shared {
  let Leader = 0;
}

program A(my_id: int) {

  let leader_id = my_id;

  send out(my_id);

  loop atomic await receive in (x) => {
    print("receive", x);
      if x > leader_id {
        leader_id = x;
        send out(x);
      } else {
        if x == leader_id {
          print("finished");
          send out(x);
          break;
        }
      }
  }
  
  label L;
  if my_id == leader_id {
    print("I AM THE LEADER!!!");
    @ {
        Leader = Leader + 1;
    }
  }
}

check {
  for p in $.procs.A { eventually p.reaches(L) };
}
always {
  Leader <= 1;
}


main {
  let n = 3;
  let a:list(proc(A));
  for i in 0..n {
    let p = run A(i);
    a.push(p);
  }
  for i in 0..n-1 {
    let p1 = a.at(i);
    let p2 = a.at(i+1);
    channel p1.out (int)> p2.in;
  }
  
  let p1 = a.at(n-1);
  let p2 = a.at(0);
  channel p1.out (int)> p2.in;
}`},{fileName:"ring-election.alt",title:"Ring-Election",description:"Example program: Ring-Election",tags:["example","shared","concurrency","atomic","channels","communication","programs","conditionals","synchronization","messaging"],content:`shared {
  let Done = false;
  let Leader = 0;
}

program A(my_id: int) {

  let leader_id = my_id;

  send out(my_id);

  loop atomic await receive in (x) => {
    print("receive", x);
    if x > leader_id {
      leader_id = x;
      send out(x);
    } else {
      if x == leader_id {
        print("finished");
        send out(x);
        break;
      }
    }
  }
  
  if my_id == leader_id {
    print("I AM THE LEADER!!!");
    atomic {
        Done = true;
        Leader = Leader + 1;
    }
  }
}

always {
  !Done || (Leader == 1);
}

main {
  let a = run A(1);
  let b = run A(2);

  channel a.out (int)> b.in;
  channel b.out (int)> a.in;

  print("DONE");
}`},{fileName:"shared-list.alt",title:"Shared-List",description:"Example program: Shared-List",tags:["example","shared","concurrency","atomic"],content:`shared {
  let L:list(int);

}

main {
    

    // add an element to a global list
    // L.push() is not yet supported 
    //
    atomic {
      let l = L;
      l.push(1);
      l.push(2);
      l.push(42);
      L = l;
    }
    print("L = ", L);

    // get an element from a global list
    let a:int;
    @ {
        let l = L;
        a = l.at(2);
    }
    print("a = ", a);
}`},{fileName:"test-atomic.alt",title:"Test-Atomic",description:"Example program: Test-Atomic",tags:["example","shared","concurrency","channels","communication","programs","synchronization","messaging"],content:`shared {
  let A: bool = false;
  let B: bool = true;
  let Done = 0;
}

program A() {
  print("starting A");
  @ {
    A = false;
    B = true;
  }
  Done = Done + 1;
  send out(42,true);
}

program B() {
  print("starting B");
  @ {
    A = true;
    B = false;
  }
  Done = Done + 1;
}

always {
  A || B;
}

main {
  let a = run A();
  run B();
  await Done == 2;

  channel a.out (int, bool)> self.in;

  await receive in(x,y);
  print("Receive", x, y);
  print("DONE");
}`},{fileName:"test-break.alt",title:"Test-Break",description:"Example program: Test-Break",tags:["example","shared","concurrency","programs","synchronization"],content:`shared {
    let A = false;
}

program A() {
    let i = 0;
    loop {
        await first {
            A => {
                print("A is true");
                break;
            }
            !A => {
                print("A is false");
                break;
            }
        }
    }
}

always {
}

main {
    let a = run A();
    print("started", a);
    A = true;
}`},{fileName:"test-channels.alt",title:"Test-Channels",description:"Example program: Test-Channels",tags:["example","shared","concurrency","channels","communication","programs","synchronization","messaging"],content:`shared {
    let A = 1;
    let B = 0;
    let Start = false;
}
program A() {
    await Start;

    await receive in (x,y);

    print("received", x,y);

    await first {
        receive in (x,y) => {
            print("first received ", x, y);
        }
        A == x => {
            print("first A == x");
        }
    }


}

main {
    let pa = run A();

    channel self.out (int, bool)> pa.in;
    channel self.out2 (int, bool)> pa.in;
    Start = true;
    send out (125, true);
    send out2 (125, false);

}`},{fileName:"test-if-else.alt",title:"Test-If-Else",description:"Example program: Test-If-Else",tags:["example","loops","conditionals"],content:`main {
    for x in 0..5 {
        if x == 1 {
            print("x is 1");
        } else if x == 2 {
            print("x is 2");
        } else if x == 3 {
            print("x is 3");
        } else {
            print("else");
        }
    }
}`},{fileName:"test-list.alt",title:"Test-List",description:"Example program: Test-List",tags:["example","channels","communication","programs","loops","synchronization","messaging"],content:`main {
    let n = 6;
    let p: list(proc(A));
    for i in 0..n {
        let pid = run A(i);
        p.push(pid);
    }
    
    //not yet supported
    //let p = [run A(i) for i in 0..10];

    for i in 0..(n-1) {
        let n = p.len();
        let at_i = p.at(i);
        let at_i2 = p.at((i+1)%n);
        print(at_i, "->", at_i2);
        channel at_i.out (int)> at_i2.in;
    }

    let first = p.at(0);
    channel self.out (int)> first.in;
    let n = p.len();
    let last = p.at(n-1);
    channel last.out (int)> self.in;

    send out(0);

    await receive in(i);
    print("FINAL Received: ", i);
}


program A(id:int) {
    print("Hello from A");
    await receive in (i);
    id = id + i;
    print("Received", i, " new value is ", id);
    
    send out(id);
}`},{fileName:"test-reaches-simple.alt",title:"Test-Reaches-Simple",description:"Example program: Test-Reaches-Simple",tags:["example","programs","conditionals"],content:`program A() {
    label START;
    let x = 1;
    label MIDDLE;
    let y = 2;
}

main {
    run A();
}

check {
    always (if $.procs.A.len() > 0 && $.procs.A.at(0).reaches(MIDDLE) {
        eventually $.procs.A.at(0).reaches(end)
    });
}`},{fileName:"test-wait.alt",title:"Test-Wait",description:"Example program: Test-Wait",tags:["example","shared","concurrency","programs","loops","conditionals","synchronization","ring"],content:`shared {
    let VA = 1;
}

main {

    print("await first");
    //print "CASE 1" (because the keyword first is used)
    await first {
        (VA == 0) => { print("CASE 0"); }
        (VA == 1) => { print("CASE 1"); VA = 2; }
        (VA == 2) => { print("CASE 2"); }
    }
    
    print("await seq");
    VA = 1;
    //print "CASE 1" and "CASE 2"
    await seq {
        (VA == 0) => { print("CASE 0"); }
        (VA == 1) => { print("CASE 1"); VA = 2; }
        (VA == 2) => { print("CASE 2"); }
    }
    
    
    if VA == 0 {
        print("if condition");
    }

    VA = 0; // comment to see a deadlock
    
    await (VA == 0);
    print("await condition");
}
/**
\`condition\` is a boolean expression
\`await condition\` is a statement that waits for the condition to be true

\`\`\`
first { 
    condition1 => block1
    condition2 => block2
}
\`\`\` 
is an boolean expression that is true if one of the conditions is true. Each condition is evaluated sequentially from top to bottom, if one condition is true, it executes only the first corresponding block and then goes to the first instruction outside the block, hence:
\`\`\`
await first {
    condition1 => block1,
    condition2 => block2,
}
\`\`\`
waits for one of the conditions to be true, then executes only the corresponding block, then continues with the rest of the program

Similarly, 
\`\`\`
seq { 
    condition1 => block1,
    condition2 => block2,
}
\`\`\`
is an boolean expression that evaluates to true if one of the conditions is true, however here, when the block corresponding to the first true condition is executed, the remaining conditions are also evaluated, and the blocks associated with all the true conditions are executed sequentially from top to bottom. Hence,
\`\`\`
await seq {
    condition1 => block1,
    condition2 => block2,
}
\`\`\`
waits for one of the conditions to be true, then executes the corresponding block, then evaluate the remaining conditions from this first true condition and execute all the blocks associated with true conditions. Then, the rest of the program continues.

Since seq {} and first {} are boolean expressions, they can be used in if statements, while loops, and first/seq conditions.

Example:
\`\`\`
if seq {
        first {
            condition1 => block1,
            condition2 => block2,
        }
        condition3 => block3,
    } 
{
    print("if seq")
}
\`\`\`
means that if condition1 is true, block1 is executed, then condition3 is evaluated (if it is true, block3 is executed). Otherwise if condition1 is false, then condition2 is evaluated, if it is true, block2 is executed, then condition3 is evaluated (if it is true, block3 is executed), if condition2 is false, condition3 is evaluated, if it is true, block3 is executed. If all conditions are false, the entier expression is false and the pring statement is not executed.
 */`},{fileName:"traffic_lights.alt",title:"Traffic Lights",description:"Example program: Traffic Lights",tags:["example","shared","concurrency","programs","conditionals"],content:`shared {
    // 0: Green, 1: Yellow, 2: Red
    let Ns_state = 0;
    let Ew_state = 2;
}

program TrafficController() {
    loop {
        // NS is Green, EW is Red
        // Transition NS to Yellow
        Ns_state = 1;
        
        // Transition NS to Red
        Ns_state = 2;
        
        // Transition EW to Green
        Ew_state = 0;
        
        // Transition EW to Yellow
        Ew_state = 1;
        
        // Transition EW to Red
        Ew_state = 2;
        
        // Transition NS to Green
        Ns_state = 0;
    }
}

check {
    // Safety: Cannot have both lights passing (Green or Yellow) at the same time
    // Passing means state < 2 (0 or 1)
    always ( (Ns_state == 2) || (Ew_state == 2) );
}

check {
    // Liveness: If NS is Red, it eventually becomes Green
    always ( if (Ns_state == 2) { eventually (Ns_state == 0) } );
}

check {
    // Liveness: If EW is Red, it eventually becomes Green
    always ( if (Ew_state == 2) { eventually (Ew_state == 0) } );
}

main {
    run TrafficController();
}`},{fileName:"tuple.alt",title:"Tuple",description:"Example program: Tuple",tags:["example","shared","concurrency","programs","functions","conditionals","ring"],content:`//Tuple can be used in global
shared {
  const Default_tuple = (0,"zero",0.0);
  let Tuple = Default_tuple; 
  let Tuple_of_proc : tuple(proc(A),proc(A),proc(A));

  let P :proc(A);
}
  
check {

  eventually (Tuple_of_proc.0().reaches(end)
    && Tuple_of_proc.1().reaches(end)
    && Tuple_of_proc.2().reaches(end)
    );
    
  always (if 
    (Tuple_of_proc.0().reaches(end)
    || Tuple_of_proc.1().reaches(end)
    || Tuple_of_proc.2().reaches(end)
    )
    {
      Tuple != Default_tuple;
    }
    );
}


program A(id : int)
{
  Tuple.set0( Tuple.0()+1);
  if (id == 1)
  {
    Tuple.set1("one");
  }
  if (id == 2)
  {
    Tuple.set1("two");
  }
  if (id == 3)
  {
    Tuple.set1("three");
  }
  Tuple.set2( Tuple.2()+1.0 );
  print("id : ",id," -> ",Tuple);
}


//how to return tuple type in a function
fn init() -> tuple(int,string,float)
{
  return (1,"2",3.0);
}




main {
  let i = init();

  let copyi = i;

  //change value of tuple

  let first = i.0();
  copyi.set0( first*2 );

  copyi.set1("Hello");

  copyi.set2( i.2() * 2.0 );


  // initialisation of tuple with default value

  let otherinit : tuple(int,string,float);


  // initalisation of multiple variable at the same type

  //with default value : a = 0 , b = "" , c = 0
  let (a,b,c) : tuple(int,string,float);

  //with value d = 9 , e = "World" , f = 10
  let (d,e,f) : tuple(int,string,float) = (9,"World",10.0);


  //compare tuple only work if the tuple are of the same type, if they are not, the program will not compile
  let t = (a,b,c);
  let equal = ( otherinit == t );

  let not_equal = ( copyi != i );

 

  let megatuple =((i,copyi),equal,not_equal,otherinit != t,(((a,b,c),(d,e,f)),(12,(otherinit,"!"))),"fin");

  // Initiate variable from a tuple but with _ to ignore some value or entire tuple

  let ((_,(_,hello,_)),_,_,_,((_,(_,world,_)),(_,(_,inter))),_) = megatuple;

  let message = (hello,world,inter);

  print("from megatuple : ",megatuple);
  
  print("to : ",message);

  print("modification of a global tuple : ",Tuple);
  let a1 = run A(1);
  let a2 = run A(2);
  let a3 = run A(3);
  
  Tuple_of_proc = (a1,a2,a3);
}`}],td=new Set(["ltl","tp1","tp2","tp3"]),nd=e=>e.split(/[-_\s]+/).filter(Boolean).map((t,n)=>{const i=t.toLowerCase();return td.has(i)?i.toUpperCase():n===0?i.charAt(0).toUpperCase()+i.slice(1):i}).join(" "),id=(e,t)=>{if(e&&!e.startsWith("Example program:"))return e;const n=[];for(const i of t.split(`
`)){const r=i.trim().match(/^\/\/\s?(.*)$/);if(!r)break;const o=r[1].replace(/^Example\s+\d+\s*:\s*/i,"").trim();o&&n.push(o)}return n.join(" — ")};function rd(e){const t=oe(()=>ed.map(n=>({id:n.fileName,title:nd(n.title),subtitle:n.fileName,description:id(n.description,n.content),icon:"file-code",content:n.content,tags:n.tags,onClick:()=>{e.onLoadExample(n.content,n.fileName)}})));return b(Rr,{placeholder:"Search examples by name, description, or content...",get items(){return t()},searchFields:["title","subtitle","description","content","tags"],emptyMessage:"No examples available",noResultsMessage:"No examples match your search",showAllByDefault:!0})}var od=k('<div class=help-links><div class=help-link><div><div class=help-link-title>Intelligent Althread editor</div><div class=help-link-desc>Ctrl+Space: completion · F12 or Ctrl/Cmd+click: definition · Shift+F12: references · F2: rename. Hover a symbol for its type; function signatures appear while typing arguments.</div></div></div><button type=button class=help-link><i class="codicon codicon-file-code"></i><div><div class=help-link-title>Browse Examples</div><div class=help-link-desc>Explore sample programs and code examples</div></div></button><button type=button class=help-link><i class="codicon codicon-book"></i><div><div class=help-link-title>Tutorials</div><div class=help-link-desc>Step-by-step guides</div></div></button><button type=button class=help-link><i class="codicon codicon-repo"></i><div><div class=help-link-title>Documentation</div><div class=help-link-desc>Complete reference</div></div></button><button type=button class=help-link><i class="codicon codicon-issue-opened"></i><div><div class=help-link-title>Report Issue</div><div class=help-link-desc>Found a bug?'),ad=k('<div class=example-search-container><div class=example-search-header><button type=button class=back-button><i class="codicon codicon-arrow-left"></i>Back to Help</button></div><div class=example-search-content>'),ld=k("<div class=help-view><div class=help-view-header><h3>Help & Resources</h3></div><div class=help-view-content>");function sd(e){const t=fr(),[n,i]=W(!1);return(()=>{var r=ld(),o=r.firstChild,a=o.nextSibling;return y(a,b(B,{get when(){return!n()},get children(){var l=od(),s=l.firstChild,c=s.nextSibling,f=c.nextSibling,d=f.nextSibling,h=d.nextSibling;return c.$$click=()=>i(!0),f.$$click=()=>t("/tutorials"),d.$$click=()=>window.open("https://althread.github.io/en/docs/guide/intro/","_blank"),h.$$click=()=>window.open("https://github.com/althread/althread/issues/new?template=🐞-bug-report.md","_blank"),l}}),null),y(a,b(B,{get when(){return n()},get children(){var l=ad(),s=l.firstChild,c=s.firstChild,f=s.nextSibling;return c.$$click=()=>i(!1),y(f,b(rd,{onLoadExample:(d,h)=>{e.onLoadExample?.(d,h)}})),l}}),null),r})()}xe(["click"]);let Y,ve=0,Qt=null;function on(){return(Qt===null||Qt.byteLength===0)&&(Qt=new Uint8Array(Y.memory.buffer)),Qt}const an=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},cd=typeof an.encodeInto=="function"?function(e,t){return an.encodeInto(e,t)}:function(e,t){const n=an.encode(e);return t.set(n),{read:e.length,written:n.length}};function we(e,t,n){if(n===void 0){const l=an.encode(e),s=t(l.length,1)>>>0;return on().subarray(s,s+l.length).set(l),ve=l.length,s}let i=e.length,r=t(i,1)>>>0;const o=on();let a=0;for(;a<i;a++){const l=e.charCodeAt(a);if(l>127)break;o[r+a]=l}if(a!==i){a!==0&&(e=e.slice(a)),r=n(r,i,i=a+e.length*3,1)>>>0;const l=on().subarray(r+a,r+i),s=cd(e,l);a+=s.written,r=n(r,i,a,1)>>>0}return ve=a,r}let mt=null;function Le(){return(mt===null||mt.buffer.detached===!0||mt.buffer.detached===void 0&&mt.buffer!==Y.memory.buffer)&&(mt=new DataView(Y.memory.buffer)),mt}function Ft(e){const t=Y.__externref_table_alloc();return Y.__wbindgen_export_4.set(t,e),t}function gt(e,t){try{return e.apply(this,t)}catch(n){const i=Ft(n);Y.__wbindgen_exn_store(i)}}const Tr=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&Tr.decode();function st(e,t){return e=e>>>0,Tr.decode(on().subarray(e,e+t))}function Be(e){return e==null}function Gn(e){const t=typeof e;if(t=="number"||t=="boolean"||e==null)return`${e}`;if(t=="string")return`"${e}"`;if(t=="symbol"){const r=e.description;return r==null?"Symbol":`Symbol(${r})`}if(t=="function"){const r=e.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(e)){const r=e.length;let o="[";r>0&&(o+=Gn(e[0]));for(let a=1;a<r;a++)o+=", "+Gn(e[a]);return o+="]",o}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let i;if(n&&n.length>1)i=n[1];else return toString.call(e);if(i=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:i}function Ar(){Y.initialize()}function De(e){const t=Y.__wbindgen_export_4.get(e);return Y.__externref_table_dealloc(e),t}function dd(e,t,n){let i,r;try{const l=we(e,Y.__wbindgen_malloc,Y.__wbindgen_realloc),s=ve,c=we(t,Y.__wbindgen_malloc,Y.__wbindgen_realloc),f=ve,d=Y.compile(l,s,c,f,n);var o=d[0],a=d[1];if(d[3])throw o=0,a=0,De(d[2]);return i=o,r=a,st(o,a)}finally{Y.__wbindgen_free(i,r,1)}}function ud(e,t,n){const i=we(e,Y.__wbindgen_malloc,Y.__wbindgen_realloc),r=ve,o=we(t,Y.__wbindgen_malloc,Y.__wbindgen_realloc),a=ve,l=Y.run(i,r,o,a,n);if(l[2])throw De(l[1]);return De(l[0])}function fd(e,t,n,i){const r=we(e,Y.__wbindgen_malloc,Y.__wbindgen_realloc),o=ve,a=we(t,Y.__wbindgen_malloc,Y.__wbindgen_realloc),l=ve,s=Y.check(r,o,a,l,n,Be(i)?4294967297:i>>>0);if(s[2])throw De(s[1]);return De(s[0])}function gd(e,t){let n,i;try{const r=we(e,Y.__wbindgen_malloc,Y.__wbindgen_realloc),o=ve,a=we(t,Y.__wbindgen_malloc,Y.__wbindgen_realloc),l=ve,s=Y.create_alt_toml(r,o,a,l);return n=s[0],i=s[1],st(s[0],s[1])}finally{Y.__wbindgen_free(n,i,1)}}function hd(e,t,n){let i,r;try{const l=we(e,Y.__wbindgen_malloc,Y.__wbindgen_realloc),s=ve,c=we(t,Y.__wbindgen_malloc,Y.__wbindgen_realloc),f=ve,d=we(n,Y.__wbindgen_malloc,Y.__wbindgen_realloc),h=ve,m=Y.add_dependency_to_toml(l,s,c,f,d,h);var o=m[0],a=m[1];if(m[3])throw o=0,a=0,De(m[2]);return i=o,r=a,st(o,a)}finally{Y.__wbindgen_free(i,r,1)}}function md(e){const t=we(e,Y.__wbindgen_malloc,Y.__wbindgen_realloc),n=ve,i=Y.parse_dependencies_from_toml(t,n);if(i[2])throw De(i[1]);return De(i[0])}function pd(e){const t=we(e,Y.__wbindgen_malloc,Y.__wbindgen_realloc),n=ve;return Y.validate_package_name(t,n)!==0}function Bn(e,t,n){const i=we(e,Y.__wbindgen_malloc,Y.__wbindgen_realloc),r=ve,o=we(t,Y.__wbindgen_malloc,Y.__wbindgen_realloc),a=ve,l=Y.start_interactive_session(i,r,o,a,n);if(l[2])throw De(l[1]);return De(l[0])}function Dr(e,t,n,i){const r=we(e,Y.__wbindgen_malloc,Y.__wbindgen_realloc),o=ve,a=we(t,Y.__wbindgen_malloc,Y.__wbindgen_realloc),l=ve,s=Y.get_next_interactive_states(r,o,a,l,n,i);if(s[2])throw De(s[1]);return De(s[0])}function Qr(e,t,n,i,r){const o=we(e,Y.__wbindgen_malloc,Y.__wbindgen_realloc),a=ve,l=we(t,Y.__wbindgen_malloc,Y.__wbindgen_realloc),s=ve,c=Y.execute_interactive_step(o,a,l,s,n,i,r);if(c[2])throw De(c[1]);return De(c[0])}async function bd(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(i){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function Fr(){const e={};return e.wbg={},e.wbg.__wbg_String_8f0eb39a4a4c2f66=function(t,n){const i=String(n),r=we(i,Y.__wbindgen_malloc,Y.__wbindgen_realloc),o=ve;Le().setInt32(t+4*1,o,!0),Le().setInt32(t+4*0,r,!0)},e.wbg.__wbg_buffer_609cc3eee51ed158=function(t){return t.buffer},e.wbg.__wbg_call_672a4d21634d4a24=function(){return gt(function(t,n){return t.call(n)},arguments)},e.wbg.__wbg_call_7cccdd69e0791ae2=function(){return gt(function(t,n,i){return t.call(n,i)},arguments)},e.wbg.__wbg_crypto_ed58b8e10a292839=function(t){return t.crypto},e.wbg.__wbg_done_769e5ede4b31c67b=function(t){return t.done},e.wbg.__wbg_entries_3265d4158b33e5dc=function(t){return Object.entries(t)},e.wbg.__wbg_error_7534b8e9a36f1ab4=function(t,n){let i,r;try{i=t,r=n,console.error(st(t,n))}finally{Y.__wbindgen_free(i,r,1)}},e.wbg.__wbg_getRandomValues_bcb4912f16000dc4=function(){return gt(function(t,n){t.getRandomValues(n)},arguments)},e.wbg.__wbg_get_67b2ba62fc30de12=function(){return gt(function(t,n){return Reflect.get(t,n)},arguments)},e.wbg.__wbg_get_b9b93047fe3cf45b=function(t,n){return t[n>>>0]},e.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc=function(t){let n;try{n=t instanceof ArrayBuffer}catch{n=!1}return n},e.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9=function(t){let n;try{n=t instanceof Uint8Array}catch{n=!1}return n},e.wbg.__wbg_isArray_a1eab7e0d067391b=function(t){return Array.isArray(t)},e.wbg.__wbg_isSafeInteger_343e2beeeece1bb0=function(t){return Number.isSafeInteger(t)},e.wbg.__wbg_iterator_9a24c88df860dc65=function(){return Symbol.iterator},e.wbg.__wbg_length_a446193dc22c12f8=function(t){return t.length},e.wbg.__wbg_length_e2d2a49132c1b256=function(t){return t.length},e.wbg.__wbg_msCrypto_0a36e2ec3a343d26=function(t){return t.msCrypto},e.wbg.__wbg_new_405e22f390576ce2=function(){return new Object},e.wbg.__wbg_new_5e0be73521bc8c17=function(){return new Map},e.wbg.__wbg_new_78feb108b6472713=function(){return new Array},e.wbg.__wbg_new_8a6f238a6ece86ea=function(){return new Error},e.wbg.__wbg_new_a12002a7f91c75be=function(t){return new Uint8Array(t)},e.wbg.__wbg_newnoargs_105ed471475aaf50=function(t,n){return new Function(st(t,n))},e.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a=function(t,n,i){return new Uint8Array(t,n>>>0,i>>>0)},e.wbg.__wbg_newwithlength_a381634e90c276d4=function(t){return new Uint8Array(t>>>0)},e.wbg.__wbg_next_25feadfc0913fea9=function(t){return t.next},e.wbg.__wbg_next_6574e1a8a62d1055=function(){return gt(function(t){return t.next()},arguments)},e.wbg.__wbg_node_02999533c4ea02e3=function(t){return t.node},e.wbg.__wbg_process_5c1d670bc53614b8=function(t){return t.process},e.wbg.__wbg_randomFillSync_ab2cfe79ebbf2740=function(){return gt(function(t,n){t.randomFillSync(n)},arguments)},e.wbg.__wbg_require_79b1e9274cde3c87=function(){return gt(function(){return module.require},arguments)},e.wbg.__wbg_set_37837023f3d740e8=function(t,n,i){t[n>>>0]=i},e.wbg.__wbg_set_3f1d0b984ed272ed=function(t,n,i){t[n]=i},e.wbg.__wbg_set_65595bdd868b3009=function(t,n,i){t.set(n,i>>>0)},e.wbg.__wbg_set_8fc6bf8a5b1071d1=function(t,n,i){return t.set(n,i)},e.wbg.__wbg_stack_0ed75d68575b0f3c=function(t,n){const i=n.stack,r=we(i,Y.__wbindgen_malloc,Y.__wbindgen_realloc),o=ve;Le().setInt32(t+4*1,o,!0),Le().setInt32(t+4*0,r,!0)},e.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07=function(){const t=typeof global>"u"?null:global;return Be(t)?0:Ft(t)},e.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0=function(){const t=typeof globalThis>"u"?null:globalThis;return Be(t)?0:Ft(t)},e.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819=function(){const t=typeof self>"u"?null:self;return Be(t)?0:Ft(t)},e.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40=function(){const t=typeof window>"u"?null:window;return Be(t)?0:Ft(t)},e.wbg.__wbg_subarray_aa9065fa9dc5df96=function(t,n,i){return t.subarray(n>>>0,i>>>0)},e.wbg.__wbg_value_cd1ffa7b1ab794f1=function(t){return t.value},e.wbg.__wbg_versions_c71aa1626a93e0a1=function(t){return t.versions},e.wbg.__wbindgen_as_number=function(t){return+t},e.wbg.__wbindgen_bigint_from_i64=function(t){return t},e.wbg.__wbindgen_bigint_from_u64=function(t){return BigInt.asUintN(64,t)},e.wbg.__wbindgen_bigint_get_as_i64=function(t,n){const i=n,r=typeof i=="bigint"?i:void 0;Le().setBigInt64(t+8*1,Be(r)?BigInt(0):r,!0),Le().setInt32(t+4*0,!Be(r),!0)},e.wbg.__wbindgen_boolean_get=function(t){const n=t;return typeof n=="boolean"?n?1:0:2},e.wbg.__wbindgen_debug_string=function(t,n){const i=Gn(n),r=we(i,Y.__wbindgen_malloc,Y.__wbindgen_realloc),o=ve;Le().setInt32(t+4*1,o,!0),Le().setInt32(t+4*0,r,!0)},e.wbg.__wbindgen_error_new=function(t,n){return new Error(st(t,n))},e.wbg.__wbindgen_init_externref_table=function(){const t=Y.__wbindgen_export_4,n=t.grow(4);t.set(0,void 0),t.set(n+0,void 0),t.set(n+1,null),t.set(n+2,!0),t.set(n+3,!1)},e.wbg.__wbindgen_is_bigint=function(t){return typeof t=="bigint"},e.wbg.__wbindgen_is_function=function(t){return typeof t=="function"},e.wbg.__wbindgen_is_object=function(t){const n=t;return typeof n=="object"&&n!==null},e.wbg.__wbindgen_is_string=function(t){return typeof t=="string"},e.wbg.__wbindgen_is_undefined=function(t){return t===void 0},e.wbg.__wbindgen_jsval_eq=function(t,n){return t===n},e.wbg.__wbindgen_jsval_loose_eq=function(t,n){return t==n},e.wbg.__wbindgen_memory=function(){return Y.memory},e.wbg.__wbindgen_number_get=function(t,n){const i=n,r=typeof i=="number"?i:void 0;Le().setFloat64(t+8*1,Be(r)?0:r,!0),Le().setInt32(t+4*0,!Be(r),!0)},e.wbg.__wbindgen_number_new=function(t){return t},e.wbg.__wbindgen_string_get=function(t,n){const i=n,r=typeof i=="string"?i:void 0;var o=Be(r)?0:we(r,Y.__wbindgen_malloc,Y.__wbindgen_realloc),a=ve;Le().setInt32(t+4*1,a,!0),Le().setInt32(t+4*0,o,!0)},e.wbg.__wbindgen_string_new=function(t,n){return st(t,n)},e.wbg.__wbindgen_throw=function(t,n){throw new Error(st(t,n))},e}function Ir(e,t){return Y=e.exports,_n.__wbindgen_wasm_module=t,mt=null,Qt=null,Y.__wbindgen_start(),Y}function yd(e){if(Y!==void 0)return Y;typeof e<"u"&&(Object.getPrototypeOf(e)===Object.prototype?{module:e}=e:console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const t=Fr();e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e));const n=new WebAssembly.Instance(e,t);return Ir(n,e)}async function _n(e){if(Y!==void 0)return Y;typeof e<"u"&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof e>"u"&&(e=new URL("/dev/editor/assets/althread_web_bg-o1SrQMDx.wasm",import.meta.url));const t=Fr();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:i}=await bd(await e,t);return Ir(n,i)}const vd=Object.freeze(Object.defineProperty({__proto__:null,add_dependency_to_toml:hd,check:fd,compile:dd,create_alt_toml:gd,default:_n,execute_interactive_step:Qr,get_next_interactive_states:Dr,initSync:yd,initialize:Ar,parse_dependencies_from_toml:md,run:ud,start_interactive_session:Bn,validate_package_name:pd},Symbol.toStringTag,{value:"Module"})),pt=(e,t)=>{for(const n of e){if(n.id===t)return n;if(n.children){const i=pt(n.children,t);if(i)return i}}return null},We=(e,t,n="")=>{for(const i of e){const r=n?`${n}/${i.name}`:i.name;if(i.id===t)return r;if(i.children){const o=We(i.children,t,r);if(o)return o}}return null},Xe=(e,t)=>{for(const n of e){if(n.name===t&&n.type==="file")return n;if(n.type==="directory"&&n.children){const i=t.split("/");if(i[0]===n.name&&i.length>1){const r=i.slice(1).join("/"),o=Xe(n.children,r);if(o)return o}}}return null},Li=(e,t)=>{if(t==="")return e;const n=t.split("/").filter(r=>r!=="");let i=e;for(const r of n){const o=i.find(a=>a.name===r&&a.type==="directory");if(!o||!o.children)return null;i=o.children}return i},at=(e,t)=>{const n=t.split("/").filter(l=>l!=="");if(n.length===0)return null;let i=e;for(let l=0;l<n.length-1;l++){const s=n[l],c=i.find(f=>f.name===s&&f.type==="directory");if(!c||!c.children)return null;i=c.children}const r=n[n.length-1],o=i.findIndex(l=>l.name===r);return o===-1?null:{entry:i[o],parent:i,index:o}},ln=e=>{const t=[];return e.type==="file"?t.push(e.id):e.type==="directory"&&e.children&&e.children.forEach(n=>{t.push(...ln(n))}),t};function Ni(e){const t={};function n(i,r=""){const o=r?`${r}/${i.name}`:i.name;if(i.type==="file"){const a=tt(o);t[o]=a}else if(i.type==="directory"&&i.children)for(const a of i.children)n(a,o)}for(const i of e)n(i);return t}function Od(e,t){return Object.hasOwn(e,t)?(console.log(`File found in virtual FS: ${t}`),e[t]):""}const Zt=async()=>(await _n(),vd),An="althread-package-cache",wd="althread-package-metadata";class _d{packageCache=new Map;fileSystem;setFileSystem;constructor(t,n){this.fileSystem=t,this.setFileSystem=n,this.loadPackageCache()}loadPackageCache(){try{const t=localStorage.getItem(An);if(t){const n=JSON.parse(t);this.packageCache=new Map(Object.entries(n))}}catch(t){console.error("Failed to load package cache:",t)}}savePackageCache(){try{const t=Object.fromEntries(this.packageCache.entries());localStorage.setItem(An,JSON.stringify(t))}catch(t){console.error("Failed to save package cache:",t)}}async initializeProject(t,n="0.1.0"){const r=(await Zt()).create_alt_toml(t,n);if(Xe(this.fileSystem,"alt.toml")){Me("alt.toml",r);return}const a={id:crypto.randomUUID(),name:"alt.toml",type:"file"},l=[...this.fileSystem,a];this.fileSystem=l,this.setFileSystem(l),Me("alt.toml",r),console.log("✓ Project initialized with alt.toml")}async parseAltToml(){if(console.log("🔍 Parsing alt.toml..."),console.log("Current file system:",this.fileSystem.map(i=>i.name)),!Xe(this.fileSystem,"alt.toml"))return console.log("❌ No alt.toml file found in file system"),null;console.log("✓ Found alt.toml file");const n=tt("alt.toml");if(!n)return console.log("❌ No content loaded from alt.toml"),null;console.log("✓ Loaded alt.toml content:",n.substring(0,100)+"...");try{const r=(await Zt()).parse_dependencies_from_toml(n);let o={};r instanceof Map?o=Object.fromEntries(r.entries()):typeof r=="object"&&r!==null&&(o=r),console.log("✓ Parsed dependencies:",o);const a=n.match(/\[package\]\s*name\s*=\s*"([^"]+)"\s*version\s*=\s*"([^"]+)"/s);if(!a)throw console.log("❌ Invalid alt.toml format - no package section found"),new Error("Invalid alt.toml format");return console.log("✓ Successfully parsed alt.toml"),{package:{name:a[1],version:a[2]},dependencies:o||{}}}catch(i){return console.error("❌ Failed to parse alt.toml:",i),null}}async addDependency(t,n){if(console.log(`📦 Adding dependency: ${t}@${n}`),!Xe(this.fileSystem,"alt.toml"))return console.error("❌ No alt.toml file found"),!1;try{const r=tt("alt.toml");console.log("📄 Current alt.toml content:",r);const o=await Zt();let a;try{a=o.add_dependency_to_toml(r,t,n)}catch(l){throw console.error("❌ WASM function failed:",l),new Error(`Failed to update alt.toml: ${l}`)}return console.log("📄 Updated alt.toml content:",a),Me("alt.toml",a),console.log("✅ Dependency added successfully"),!0}catch(r){throw console.error("❌ Failed to add dependency:",r),r}}async installDependencies(){const t=await this.parseAltToml();if(!t)throw new Error("No alt.toml file found or invalid format");const n=Object.entries(t.dependencies).map(([i,r])=>this.installPackage(i,r));await Promise.all(n)}async installPackage(t,n){const i=`${t}`;if(this.packageCache.has(i)){console.log(`Using cached package: ${t}`),await this.loadPackageIntoFileSystem(t,this.packageCache.get(i));return}console.log(`Installing package: ${t}@${n}`);const r=await this.fetchRemotePackage(t,n);if(r)this.packageCache.set(i,r),this.savePackageCache(),await this.loadPackageIntoFileSystem(t,r),console.log(`✓ Successfully installed: ${t}`);else throw new Error(`Failed to install package: ${t}`)}async fetchRemotePackage(t,n){console.log("🚀 fetchRemotePackage called with:",t,n);try{const i=t.replace("github.com/","").split("/");if(console.log("🔍 Debug info:"),console.log("  packageName:",t),console.log("  parts:",i),console.log("  parts.length:",i.length),!t.startsWith("github.com/"))throw new Error("Only GitHub packages are supported currently");const[r,o]=i;if(console.log("  user:",r),console.log("  repo:",o),console.log("  user empty?",!r),console.log("  repo empty?",!o),!r||!o)throw new Error(`Invalid GitHub package format - user: "${r}", repo: "${o}"`);if(console.log(`Fetching package: ${t} (${r}/${o})`),t==="github.com/althread/test-package")return this.createMockPackage(t,n);const a={};return await this.fetchDirectoryContents(r,o,"",a),Object.keys(a).length===0&&(console.warn(`No .alt files found in ${t}, creating minimal package`),a["README.md"]=`# ${t}

This package was imported from GitHub but contains no .alt files.`),console.log(`Fetched ${Object.keys(a).length} files from ${t}`),{name:t,version:n,url:`https://github.com/${r}/${o}`,type:"remote",cached:!0,files:a}}catch(i){throw console.error(`Failed to fetch remote package ${t}:`,i),i}}createMockPackage(t,n){return{name:t,version:n,url:`https://github.com/${t.replace("github.com/","")}`,type:"remote",cached:!0,files:{"main.alt":`// Mock package: ${t}
process main() {
  print("Hello from ${t}!");
}

export function greet(name: string) {
  print("Hello, " + name + "!");
}
`,"utils/math.alt":`// Math utilities
export function add(a: int, b: int) -> int {
  return a + b;
}

export function multiply(a: int, b: int) -> int {
  return a * b;
}
`,"alt.toml":`[package]
name = "${t}"
version = "${n}"

[dependencies]

[dev-dependencies]
`}}}async fetchDirectoryContents(t,n,i,r){const o=`https://api.github.com/repos/${t}/${n}/contents/${i}`;console.log(`Fetching directory: ${o}`);try{const a=await fetch(o);if(!a.ok){console.warn(`Failed to fetch directory ${i}: ${a.statusText}`);return}const l=await a.json();if(!Array.isArray(l)){console.warn(`Expected array but got ${typeof l} for ${i}`);return}for(const s of l)if(s.type==="file"&&(s.name.endsWith(".alt")||s.name==="alt.toml")){console.log(`Fetching file: ${s.name}`);try{const c=await fetch(s.download_url);if(c.ok){const f=await c.text(),d=i?`${i}/${s.name}`:s.name;r[d]=f,console.log(`✓ Fetched file: ${d}`)}}catch(c){console.warn(`Failed to fetch file ${s.name}:`,c)}}else if(s.type==="dir"){const c=i?`${i}/${s.name}`:s.name;await this.fetchDirectoryContents(t,n,c,r)}}catch(a){console.error(`Error fetching directory ${i}:`,a)}}async loadPackageIntoFileSystem(t,n){if(!n.files){console.warn(`No files found in package: ${t}`);return}console.log(`Loading package into file system: ${t}`);let i=this.fileSystem.find(a=>a.name==="deps"&&a.type==="directory");i||(i={id:crypto.randomUUID(),name:"deps",type:"directory",children:[]},this.fileSystem.push(i));const r=t.replace(/[^a-zA-Z0-9]/g,"_");let o=i.children?.find(a=>a.name===r);o||(o={id:crypto.randomUUID(),name:r,type:"directory",children:[]},i.children=i.children||[],i.children.push(o)),o.children=[];for(const[a,l]of Object.entries(n.files)){const s=a.split("/");let c=o;for(let m=0;m<s.length-1;m++){const S=s[m];let w=c.children?.find(A=>A.name===S&&A.type==="directory");w||(w={id:crypto.randomUUID(),name:S,type:"directory",children:[]},c.children=c.children||[],c.children.push(w)),c=w}const f=s[s.length-1],d={id:crypto.randomUUID(),name:f,type:"file"};c.children=c.children||[],c.children.push(d);const h=`deps/${r}/${a}`;Me(h,l),console.log(`✓ Added file: ${h}`)}this.fileSystem=[...this.fileSystem],this.setFileSystem(this.fileSystem),console.log(`✓ Package loaded: ${t} (${Object.keys(n.files).length} files)`)}getCachedPackages(){return Array.from(this.packageCache.values())}clearCache(){this.packageCache.clear(),localStorage.removeItem(An),localStorage.removeItem(wd)}async removePackage(t){const n=Array.from(this.packageCache.keys()).filter(o=>o.startsWith(t));for(const o of n)this.packageCache.delete(o);this.savePackageCache();const i=this.fileSystem.find(o=>o.name==="deps"&&o.type==="directory");if(i&&i.children){const o=t.replace(/[^a-zA-Z0-9]/g,"_");i.children=i.children.filter(a=>a.name!==o),this.setFileSystem([...this.fileSystem])}const r=await this.parseAltToml();if(r&&r.dependencies[t]){delete r.dependencies[t];const o=this.generateAltTomlContent(r);Me("alt.toml",o)}}generateAltTomlContent(t){let n=`[package]
`;n+=`name = "${t.package.name}"
`,n+=`version = "${t.package.version}"

`,n+=`[dependencies]
`;for(const[i,r]of Object.entries(t.dependencies))n+=`"${i}" = "${r}"
`;if(n+=`
[dev-dependencies]
`,t["dev-dependencies"])for(const[i,r]of Object.entries(t["dev-dependencies"]))n+=`"${i}" = "${r}"
`;return n}async validatePackageName(t){try{return(await Zt()).validate_package_name(t)}catch(n){return console.error("Failed to validate package name:",n),!1}}}var $d=k('<button type=button title="Install all dependencies"class=header-action-btn><i class="codicon codicon-cloud-download"></i><span>Install All'),Sd=k('<div class=loading-spinner><i class="codicon codicon-loading codicon-modifier-spin"></i>Loading...'),xd=k('<div class=error-message><i class="codicon codicon-error"></i><span></span><button type=button class=close-msg>×'),Cd=k('<div class=success-message><i class="codicon codicon-check"></i><span></span><button type=button class=close-msg>×'),Pd=k('<div class=init-project-section><div class=section-icon><i class="codicon codicon-rocket"></i></div><h4>Initialize Project</h4><p>Create an alt.toml file to manage dependencies</p><div class=form-group><label for=init-project-name>Project Name:</label><input id=init-project-name type=text placeholder="e.g., my-project"></div><div class=form-group><label for=init-project-version>Version:</label><input id=init-project-version type=text placeholder=0.1.0></div><div class=dependency-form-actions><span></span><button type=button class="btn btn-add-dependency"><i class="codicon codicon-rocket"></i>Initialize Project'),Ed=k('<div class=project-info><div class=project-header><div class=project-icon><i class="codicon codicon-package"></i></div><div class=project-details><div class=project-name></div><div class=project-version>v'),kd=k('<div class=add-dependency-section><div class=section-header><div class=section-icon><i class="codicon codicon-extensions"></i></div><h4>Add Dependency</h4></div><div class=add-dependency-form><div class=form-group><input type=text placeholder="Package name (e.g., github.com/user/repo)"></div><div class=form-group><input type=text placeholder="Version (e.g., latest, 1.0.0)"></div><div class=dependency-form-actions><button type=button class="btn btn-add-dependency"><i class="codicon codicon-plus"></i>Add Dependency'),zd=k('<div class=dependencies-install-hint><i class="codicon codicon-info"></i><span>Click "Install All" in the header to download and install all dependencies.'),Rd=k("<div class=dependency-list>"),Td=k('<div class=empty-state><i class="codicon codicon-package"></i><p>No dependencies yet</p><span>Add dependencies above to get started'),Ad=k('<div class=dependencies-section><div class=dependencies-section-header><div class=section-header><div class=section-icon><i class="codicon codicon-package"></i></div><h4>Dependencies (<!>)'),Dd=k('<div class=cache-section><div class=section-header><div class=section-icon><i class="codicon codicon-database"></i></div><h4>Package Cache (<!>)</h4></div><div class=cached-packages>'),Qd=k('<div class=package-manager-view><div class=package-manager-header><h3>Packages</h3><div class=package-manager-actions><button type=button title="Refresh packages"class=header-action-btn><i class="codicon codicon-refresh"></i><span>Update</span></button></div></div><div class=package-manager-content>'),Fd=k('<div class=dependency-item><a class=package-link target=_blank rel="noopener noreferrer"><div class=dependency-icon><i class="codicon codicon-package"></i></div><div class=dependency-info><div class=dependency-name></div><div class=dependency-version></div></div></a><button type=button class="btn btn-danger btn-sm btn-remove"title="Remove dependency"><i class="codicon codicon-close">'),Id=k('<a class="cached-package package-link"target=_blank rel="noopener noreferrer"><div class=package-icon><i class="codicon codicon-package"></i></div><div class=package-info><div class=package-name></div><div class=package-version></div></div><span class=package-type>');function Ld(e){const[t,n]=W(null),[i,r]=W(null),[o,a]=W([]),[l,s]=W(!1),[c,f]=W(null),[d,h]=W(null),[m,S]=W(""),[w,A]=W("latest"),[p,v]=W(""),[P,z]=W("0.1.0");xt(()=>{const R=new _d(e.fileSystem,e.setFileSystem);n(R),$()});const $=async()=>{const R=t();if(R)try{s(!0);const X=await R.parseAltToml();r(X),X&&(v(X.package.name),z(X.package.version)),a(R.getCachedPackages())}catch(X){f(X instanceof Error?X.message:"Failed to load package state")}finally{s(!1)}},L=async()=>{const R=t();if(R)try{if(s(!0),f(null),!p().trim()){f("Project name is required");return}if(!await R.validatePackageName(p())){f("Invalid project name format");return}await R.initializeProject(p(),P()),h("Project initialized successfully!"),await $()}catch(X){f(X instanceof Error?X.message:"Failed to initialize project")}finally{s(!1)}},T=async()=>{const R=t();if(R)try{if(s(!0),f(null),!m().trim()){f("Package name is required");return}if(!await R.validatePackageName(m())){f("Invalid package name format");return}await R.addDependency(m(),w())?(h(`Added dependency: ${m()}@${w()}`),S(""),A("latest"),await $()):f("Failed to add dependency")}catch(X){f(X instanceof Error?X.message:"Failed to add dependency")}finally{s(!1)}},I=async()=>{const R=t();if(R)try{s(!0),f(null),await R.installDependencies(),h("Dependencies installed successfully!"),await $()}catch(X){f(X instanceof Error?X.message:"Failed to install dependencies")}finally{s(!1)}},_=async R=>{const X=t();if(X)try{s(!0),f(null),await X.removePackage(R),h(`Removed package: ${R}`),await $()}catch(u){f(u instanceof Error?u.message:"Failed to remove package")}finally{s(!1)}},C=()=>{f(null),h(null)},F=R=>/^https?:\/\//.test(R)?R:R.startsWith("github.com/")?`https://${R}`:`https://github.com/${R}`;return(()=>{var R=Qd(),X=R.firstChild,u=X.firstChild,g=u.nextSibling,O=g.firstChild,E=X.nextSibling;return O.$$click=$,y(g,b(B,{get when(){return i()},get children(){var x=$d();return x.$$click=I,te(()=>x.disabled=l()||Object.keys(i()?.dependencies||{}).length===0),x}}),null),y(E,b(B,{get when(){return l()},get children(){return Sd()}}),null),y(E,b(B,{get when(){return c()},get children(){var x=xd(),Q=x.firstChild,G=Q.nextSibling,D=G.nextSibling;return y(G,c),D.$$click=C,x}}),null),y(E,b(B,{get when(){return d()},get children(){var x=Cd(),Q=x.firstChild,G=Q.nextSibling,D=G.nextSibling;return y(G,d),D.$$click=C,x}}),null),y(E,b(B,{get when(){return!i()},get children(){var x=Pd(),Q=x.firstChild,G=Q.nextSibling,D=G.nextSibling,U=D.nextSibling,Z=U.firstChild,H=Z.nextSibling,q=U.nextSibling,K=q.firstChild,ee=K.nextSibling,fe=q.nextSibling,ae=fe.firstChild,le=ae.nextSibling;return H.$$input=se=>v(se.target.value),ee.$$input=se=>z(se.target.value),le.$$click=L,te(()=>le.disabled=l()),te(()=>H.value=p()),te(()=>ee.value=P()),x}}),null),y(E,b(B,{get when(){return i()},get children(){return[(()=>{var x=Ed(),Q=x.firstChild,G=Q.firstChild,D=G.nextSibling,U=D.firstChild,Z=U.nextSibling;return Z.firstChild,y(U,()=>i()?.package.name),y(Z,()=>i()?.package.version,null),x})(),(()=>{var x=kd(),Q=x.firstChild,G=Q.nextSibling,D=G.firstChild,U=D.firstChild,Z=D.nextSibling,H=Z.firstChild,q=Z.nextSibling,K=q.firstChild;return U.$$input=ee=>S(ee.target.value),H.$$input=ee=>A(ee.target.value),K.$$click=T,te(()=>K.disabled=l()),te(()=>U.value=m()),te(()=>H.value=w()),x})(),(()=>{var x=Ad(),Q=x.firstChild,G=Q.firstChild,D=G.firstChild,U=D.nextSibling,Z=U.firstChild,H=Z.nextSibling;return H.nextSibling,y(U,()=>Object.keys(i()?.dependencies||{}).length,H),y(x,b(B,{get when(){return Object.keys(i()?.dependencies||{}).length>0},get children(){return[zd(),(()=>{var q=Rd();return y(q,b(Oe,{get each(){return Object.entries(i()?.dependencies||{})},children:([K,ee])=>(()=>{var fe=Fd(),ae=fe.firstChild,le=ae.firstChild,se=le.nextSibling,_e=se.firstChild,Ge=_e.nextSibling,He=ae.nextSibling;return re(ae,"title",`Open ${K} in a new tab`),y(_e,K),y(Ge,ee),He.$$click=ze=>{ze.stopPropagation(),_(K)},te(ze=>{var je=F(K),wt=l();return je!==ze.e&&re(ae,"href",ze.e=je),wt!==ze.t&&(He.disabled=ze.t=wt),ze},{e:void 0,t:void 0}),fe})()})),q})()]}}),null),y(x,b(B,{get when(){return Object.keys(i()?.dependencies||{}).length===0},get children(){return Td()}}),null),x})(),b(B,{get when(){return o().length>0},get children(){var x=Dd(),Q=x.firstChild,G=Q.firstChild,D=G.nextSibling,U=D.firstChild,Z=U.nextSibling;Z.nextSibling;var H=Q.nextSibling;return y(D,()=>o().length,Z),y(H,b(Oe,{get each(){return o()},children:q=>(()=>{var K=Id(),ee=K.firstChild,fe=ee.nextSibling,ae=fe.firstChild,le=ae.nextSibling,se=fe.nextSibling;return y(ae,()=>q.name),y(le,()=>q.version),y(se,()=>q.type),te(_e=>{var Ge=F(q.name),He=`Open ${q.name} in a new tab`,ze=q.type;return Ge!==_e.e&&re(K,"href",_e.e=Ge),He!==_e.t&&re(K,"title",_e.t=He),ze!==_e.a&&re(se,"data-type",_e.a=ze),_e},{e:void 0,t:void 0,a:void 0}),K})()})),x}})]}}),null),te(()=>O.disabled=l()),R})()}xe(["click","input"]);var Nd=k("<div class=sidebar-content>"),Md=k('<div><div class=sidebar-tabs><button type=button><i class="codicon codicon-files"></i></button><button type=button><i class="codicon codicon-search"></i></button><button type=button><i class="codicon codicon-package"></i></button><button type=button><i class="codicon codicon-question">');function Ud(e){const[t,n]=W("explorer"),i=()=>e.activeView!==void 0?e.activeView:t(),r=l=>{e.onViewChange?e.onViewChange(l):n(l)},o=l=>{e.isCollapsed&&e.onToggleCollapse?(e.onToggleCollapse(),r(l)):i()===l&&e.onToggleCollapse?e.onToggleCollapse():r(l)};ue(()=>{const l=s=>{if((si?s.metaKey:s.ctrlKey)&&s.shiftKey)switch(s.key.toLowerCase()){case"e":s.preventDefault(),o("explorer");break;case"f":s.preventDefault(),o("search");break;case"p":s.preventDefault(),o("packages");break;case"i":s.preventDefault(),o("help");break}};document.addEventListener("keydown",l),Qe(()=>{document.removeEventListener("keydown",l)})});const a=()=>{const l=[],s=(c,f="")=>{const d=f?`${f}/${c.name}`:c.name;if(c.type==="file"){const h=tt(d);l.push({id:c.id,title:c.name,subtitle:f||"Root",description:`File: ${d}`,content:h,path:d,icon:c.name.endsWith(".alt")?"file-code":"file",onClick:()=>e.onFileSelect(d)})}if(c.children)for(const h of c.children)s(h,d)};for(const c of e.files)s(c);return l};return(()=>{var l=Md(),s=l.firstChild,c=s.firstChild,f=c.nextSibling,d=f.nextSibling,h=d.nextSibling;return c.$$click=()=>o("explorer"),re(c,"title",`File Explorer (${$t}+Shift+E)`),f.$$click=()=>o("search"),re(f,"title",`Search (${$t}+Shift+F)`),d.$$click=()=>o("packages"),re(d,"title",`Package Manager (${$t}+Shift+P)`),h.$$click=()=>o("help"),re(h,"title",`Help & Resources (${$t}+Shift+I)`),y(l,b(B,{get when(){return!e.isCollapsed},get children(){var m=Nd();return y(m,b(B,{get when(){return i()==="explorer"},get children(){return b(Nc,{get files(){return e.files},get onFileSelect(){return e.onFileSelect},get onNewFile(){return e.onNewFile},get onNewFolder(){return e.onNewFolder},get onMoveEntry(){return e.onMoveEntry},get onRenameEntry(){return e.onRenameEntry},get onDeleteEntry(){return e.onDeleteEntry},get onCopyEntry(){return e.onCopyEntry},get onFileUpload(){return e.onFileUpload},get activeFile(){return e.activeFile},get getFilePath(){return e.getFilePath},get selectedFiles(){return e.selectedFiles},get onSelectionChange(){return e.onSelectionChange},get creationError(){return e.creationError},get setCreationError(){return e.setCreationError},get checkNameConflict(){return e.checkNameConflict},get showConfirmDialog(){return e.showConfirmDialog},get showDeleteConfirmDialog(){return e.showDeleteConfirmDialog},get globalFileCreation(){return e.globalFileCreation},get setGlobalFileCreation(){return e.setGlobalFileCreation}})}}),null),y(m,b(B,{get when(){return i()==="search"},get children(){return b(Rr,{placeholder:"Search files...",get items(){return a()},searchFields:["title","subtitle","description","content","path"],emptyMessage:"No files to search",noResultsMessage:"No files match your search",showAllByDefault:!1})}}),null),y(m,b(B,{get when(){return i()==="packages"},get children(){return b(Ld,{get fileSystem(){return e.files},get setFileSystem(){return e.setFileSystem}})}}),null),y(m,b(B,{get when(){return i()==="help"},get children(){return b(sd,{get onLoadExample(){return e.onLoadExample}})}}),null),m}}),null),te(m=>{var S=`sidebar ${e.isCollapsed?"collapsed":""}`,w=`sidebar-tab ${i()==="explorer"?"active":""}`,A=`sidebar-tab ${i()==="search"?"active":""}`,p=`sidebar-tab ${i()==="packages"?"active":""}`,v=`sidebar-tab ${i()==="help"?"active":""}`;return S!==m.e&&ge(l,m.e=S),w!==m.t&&ge(c,m.t=w),A!==m.a&&ge(f,m.a=A),p!==m.o&&ge(d,m.o=p),v!==m.i&&ge(h,m.i=v),m},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),l})()}xe(["click"]);const jd=e=>{const[t,n]=W([]),[i,r]=W(null);return{openFiles:t,setOpenFiles:n,activeFile:i,setActiveFile:r,handleFileSelect:(c,f)=>{console.log("File selected:",c);const d=Xe(f,c);if(d){t().some(S=>S.id===d.id)||n([...t(),d]),r(d);const m=c==="deps"||c.startsWith("deps/");if(e&&e.safeUpdateContent){const S=tt(c);e.safeUpdateContent(S),e.setReadOnly&&e.setReadOnly(m),e.updateLanguage?.(c)}}},handleFileTabClick:(c,f)=>{if(r(c),e&&e.safeUpdateContent){const d=We(f,c.id)||c.name,h=tt(d);e.safeUpdateContent(h);const m=d==="deps"||d.startsWith("deps/");e.setReadOnly&&e.setReadOnly(m),e.updateLanguage?.(d)}},handleTabClose:(c,f)=>{const d=t().filter(h=>h.id!==c.id);if(n(d),i()&&i().id===c.id){const h=d.length>0?d[d.length-1]:null;if(r(h),h&&e&&e.safeUpdateContent){const m=We(f,h.id)||h.name,S=tt(m);e.safeUpdateContent(S),e.updateLanguage?.(m),e.setReadOnly?.(m==="deps"||m.startsWith("deps/"))}}},createNewFileWithContent:(c,f,d,h)=>{c.includes(".")||(c=c+".alt"),d.handleNewFile(c,void 0,f),h||Me(c,f)}}};function Vd(e,t){if(!e)return{message:"Unknown error"};const n=[];let i,r,o;if(e.pos&&(i=e.pos.file_path||"unknown",r=e.pos.line,o=e.pos.col,n.push(`File: ${i||"unknown"}
Line: ${r}, Col: ${o}`),t&&typeof r=="number"&&r>0)){const l=t.split(`
`)[r-1]||"",s=" ".repeat(r.toString().length);n.push(`${s} |`),n.push(`${r} | ${l}`),n.push(`${s} |${" ".repeat(o||0)}^---`),n.push(`${s} |`)}return e.error_type&&n.push(`Type: ${e.error_type}`),n.push(`Message: ${e.message}`),e.stack&&Array.isArray(e.stack)&&e.stack.length>0&&(n.push(`
Stack trace:`),e.stack.forEach(a=>{n.push(`  at ${a.file_path||"unknown"}:${a.line}:${a.col}`)})),{message:`ERROR:
`+n.join(`
`),filePath:i,line:r,col:o}}class Wd{worker=null;nextId=0;pendingRequests=new Map;constructor(){typeof window<"u"&&(this.worker=new Worker(new URL("/dev/editor/assets/althread.worker-XG5DmlQz.js",import.meta.url),{type:"module"}),this.worker.onmessage=t=>{const{id:n,result:i,error:r,rawError:o}=t.data,a=this.pendingRequests.get(n);if(a)if(this.pendingRequests.delete(n),r){const l=o||new Error(r);o&&typeof o=="object"&&Object.assign(l,o),a.reject(l)}else a.resolve(i)})}sendRequest(t,n){if(!this.worker)return Promise.reject(new Error("Worker not initialized"));const i=this.nextId++;return new Promise((r,o)=>{this.pendingRequests.set(i,{resolve:r,reject:o}),this.worker.postMessage({type:t,payload:n,id:i})})}async run(t,n,i){return this.sendRequest("run",{source:t,filePath:n,virtualFS:i})}async check(t,n,i,r){return this.sendRequest("check",{source:t,filePath:n,virtualFS:i,maxStates:r})}async compile(t,n,i){return this.sendRequest("compile",{source:t,filePath:n,virtualFS:i})}}const Mi=new Wd,Ui=1e4,ji=1e3,Tt={nodes:[],edges:[]},Kt=e=>typeof e?.message=="string"&&e.message.toLowerCase().includes("deadlock"),ht=(e,t)=>{const n=e.trimEnd();return n.length>0?`${n}

${t}`:t},Ee=(e,t)=>`${e.toLocaleString()} ${t}${e===1?"":"s"}`,Vi=e=>{const t=typeof e?.message=="string"?e.message:"",n=e?.pos?.line!==void 0?` (${e.pos.file_path?`${e.pos.file_path}:`:"line "}${e.pos.line})`:"";return t?`${t}${n}`:void 0};function Xd(e){const[t,n]=W("none"),[i,r]=W(null),[o,a]=W(null),[l,s]=W("console"),[c,f]=W(""),[d,h]=W(null),[m,S]=W(""),[w,A]=W(!1),[p,v]=W(null),[P,z]=W([]),[$,L]=W([]),[T,I]=W(Tt),[_,C]=W([]),[F,R]=W(Tt),[X,u]=W(0),[g,O]=W([]),[E,x]=W([]),[Q,G]=W([]),[D,U]=W(!1),[Z,H]=W(!1);let q=null;const[K,ee]=W(null),fe=(N,j="")=>{const J=e.getContext(),ne=N?.pos?.file_path||j;return Vd(N,J?Od(J.virtualFS,ne):void 0)},ae=(N,j)=>{L(N),C(j),I(xi(N,{mode:"run",stepLines:j}))},le=()=>{f(""),h(null),S(""),A(!1),v(null),z([]),ee(null),ae([],[])},se=()=>{q=null,x([]),G([]),U(!1),H(!1)},_e=(N,j="")=>{const J=fe(N,j);Ce(()=>{v(J),S(J.message),A(!0),a({tone:"error",icon:"error",title:"Error",detail:Vi(N)}),s("execution")})},Ge=async()=>{const N=e.getContext();if(!(!N||i())){Ce(()=>{se(),le(),n("run"),r("run"),a({tone:"busy",icon:"loading",title:"Running…"})});try{const j=await Mi.run(N.source,N.filePath,N.virtualFS),J=Math.max(0,j.nodes.length-1),ne=j.stdout.join(`
`);Ce(()=>{S(j.debug),z(j.message_flow_events),ae(j.nodes,j.step_lines||[]),f(ne),h(j.max_steps_reached?`Maximum number of steps reached (${ji}). Execution was stopped.`:null);const be=j.runtime_error;if(be&&Kt(be)){const $e=fe(be,N.filePath);S(ht(j.debug,$e.message)),f(ht(ne,"Deadlock detected.")),a({tone:"warning",icon:"debug-pause",title:"Deadlock",detail:`All processes are blocked after ${Ee(J,"step")}.`}),s("console")}else if(be){const $e=fe(be,N.filePath);S(ht(j.debug,$e.message)),A(!0),a({tone:"error",icon:"error",title:"Runtime error",detail:Vi(be)}),s("execution")}else j.max_steps_reached?(a({tone:"warning",icon:"watch",title:"Step limit reached",detail:`Stopped after ${Ee(ji,"step")}. The program may not terminate.`}),s("console")):(a({tone:"success",icon:"pass",title:"Program finished",detail:`${Ee(J,"step")} executed (one random interleaving).`}),s("console"))})}catch(j){console.error("Execution error:",j),Ce(()=>{le(),_e(j)})}finally{r(null)}}},He=async()=>{const N=e.getContext();if(!(!N||i())){Ce(()=>{se(),le(),R(Tt),u(0),O([]),n("check"),r("check"),a({tone:"busy",icon:"loading",title:"Exploring the state space…",detail:`Up to ${Ee(Ui,"state")}.`}),s("vm_states")});try{const j=await Mi.check(N.source,N.filePath,N.virtualFS,Ui),J=j.nodes.length;Ce(()=>{if(u(J),O(j.path),R(J>Vn?Tt:xi(j.nodes,{mode:"check",violationPath:j.violation_path})),j.verdict==="violated"){const ne=Math.max(0,j.path.length-1);a({tone:"error",icon:"error",title:"Property violated",detail:j.exhaustive?`Counterexample of ${Ee(ne,"step")} found (${Ee(J,"state")} explored).`:`Counterexample of ${Ee(ne,"step")} found before the exploration completed (${Ee(J,"state")} explored).`}),S(j.exhaustive?"Violation found! See the highlighted path in the state graph.":"Violation found before exploration completed. The counterexample is valid, but the explored graph is partial.")}else j.verdict==="verified"?(a({tone:"success",icon:"pass",title:"All properties hold",detail:`Every reachable state was explored (${Ee(J,"state")}).`}),S("Verification complete: No property violations found.")):(a({tone:"warning",icon:"warning",title:"Inconclusive",detail:`The exploration stopped at ${Ee(J,"state")} before it could complete.`}),S("Verification inconclusive: The state limit was reached."))})}catch(j){console.error("Check error:",j),_e(j)}finally{r(null)}}},ze=()=>{const N=g();N.length!==0&&(Ce(()=>{le(),n("run"),ae(N,N.slice(1).map(j=>j.metadata.lines??[])),a({tone:"error",icon:"debug-alt",title:"Counterexample replay",detail:`${Ee(N.length-1,"step")} leading to the violation. Use ← / → to walk through it.`}),S("Counter-example replay loaded from the checker path."),s("vm_states")}),it(0))},je=(N,j)=>{const J=Q().length;if(j){const be=fe(j,q?.filePath);f($e=>ht($e,"Deadlock detected.")),S($e=>ht($e,be.message)),x([]),U(!0),H(!0),a({tone:"warning",icon:"debug-pause",title:"Deadlock",detail:`All processes are blocked after ${Ee(J,"step")}.`});return}const ne=N??[];x(ne),U(ne.length===0),H(!1),ne.length===0?(S(be=>ht(be,"Program execution completed.")),a({tone:"success",icon:"pass",title:"Program finished",detail:`${Ee(J,"step")} executed.`})):a({tone:"neutral",icon:"debug-step-over",title:"Step-by-step execution",detail:`${Ee(J,"step")} so far · ${Ee(ne.length,"possible next instruction")}.`})},wt=()=>{const N=e.getContext();!N||i()||Ce(()=>{se(),le(),n("interactive"),s("step"),q=N;try{const j=Bn(N.source,N.filePath,N.virtualFS);ae([{vm:j.current_state,metadata:{level:0}}],[]),f(j.output?.length?`${j.output.join(`
`)}
`:""),S("Interactive session started. Choose the next instruction to execute."),je(j.next_states),it(0)}catch(j){console.error("Interactive mode error:",j),Kt(j)?je(void 0,j):(se(),n("none"),_e(j,N.filePath))}})},Wt=N=>{const j=q;!j||t()!=="interactive"||Ce(()=>{try{const J=Qr(j.source,j.filePath,j.virtualFS,Q(),N),ne=[...Q(),N];G(ne),J.output?.length&&f(ye=>`${ye}${J.output.join(`
`)}
`),z(ye=>[...ye,...J.message_flow_events||[]]);const be=J.executed_step,$e=be?`Executed: ${be.prog_name}#${be.prog_id}
${J.debug||""}`:J.debug||"";S(ye=>ye?`${ye}

${$e}`:$e);const Fe=$();ae([...Fe,{vm:J.new_state,metadata:{level:Fe.length,lines:J.lines}}],[..._(),J.lines||[]]);try{const ye=Dr(j.source,j.filePath,j.virtualFS,ne);je(ye.next_states)}catch(ye){if(!Kt(ye))throw ye;je(void 0,ye)}it($().length-1)}catch(J){console.error("Interactive step error:",J),Kt(J)?je(void 0,J):_e(J,j.filePath)}})},$n=()=>{const N=q,j=Q();if(!N||j.length===0)return;const J=j.slice(0,-1);Ce(()=>{se(),le(),n("interactive"),q=N;try{const ne=Bn(N.source,N.filePath,N.virtualFS);ae([{vm:ne.current_state,metadata:{level:0}}],[]),f(ne.output?.length?`${ne.output.join(`
`)}
`:""),je(ne.next_states)}catch(ne){_e(ne,N.filePath);return}for(const ne of J)Wt(ne);S(ne=>ht(ne,"Last step undone.")),s("step")})},Xt=()=>{Ce(()=>{se(),n($().length>0?"run":"none"),a(null),l()==="step"&&s("console")})},it=N=>{const j=$();if(j.length===0)return;const J=Math.max(0,Math.min(N,j.length-1));ee({vm:j[J].vm,stepIndex:J,nodeIndex:J})};return{mode:t,busy:i,status:o,activeTab:l,setActiveTab:s,stdout:c,stdoutWarning:d,executionOutput:m,executionError:w,structuredError:p,messageFlow:P,traceNodes:$,traceGraph:T,stepLines:_,checkGraph:F,checkStateCount:X,counterexample:g,choices:E,history:Q,interactiveFinished:D,interactiveDeadlock:Z,selectedVM:K,setSelectedVM:ee,run:Ge,check:He,replayCounterexample:ze,startInteractive:wt,executeStep:Wt,undoStep:$n,stopInteractive:Xt,selectTraceStep:it,reset:()=>{Ce(()=>{se(),le(),R(Tt),u(0),O([]),n("none"),a(null),s("console")})}}}const Gd=(e,t,n,i,r,o,a,l,s,c,f)=>{const d=($,L,T)=>{const I={id:crypto.randomUUID(),name:$,type:"file"},_=L||"",C=JSON.parse(JSON.stringify(e())),F=Li(C,_);if(!F){n("Target directory not found.");return}if(F.find(g=>g.name===$)){n("A file or folder with this name already exists.");return}n(null),F.push(I),t(C),Ze(C);const X=_===""?$:`${_}/${$}`,u=T??Zc($);Me(X,u),r([...i(),I]),a(I),c&&c.safeUpdateContent&&(c.safeUpdateContent(u),c.updateLanguage?.(X),c.setReadOnly?.(X.startsWith("deps/")))},h=($,L)=>{const T={id:crypto.randomUUID(),name:$,type:"directory",children:[]},I=L||"",_=JSON.parse(JSON.stringify(e())),C=Li(_,I);if(!C){n("Target directory not found.");return}if(C.find(R=>R.name===$)){n("A file or folder with this name already exists.");return}n(null),C.push(T),t(_),Ze(_)},m=($,L,T)=>{if($.type==="file"){const I=Te.FILE_CONTENT_PREFIX+L,_=Te.FILE_CONTENT_PREFIX+T,C=localStorage.getItem(I);C!==null&&(localStorage.setItem(_,C),localStorage.removeItem(I))}else $.type==="directory"&&$.children&&$.children.forEach(I=>{const _=L+"/"+I.name,C=T+"/"+I.name;m(I,_,C)})},S=($,L)=>{if(console.log(`Moving ${$} to ${L}`),$===L){console.warn("Cannot move into itself");return}if(L.startsWith($+"/")){console.warn("Cannot move into child directory");return}const T=JSON.parse(JSON.stringify(e())),I=at(T,$);if(!I){console.error("Source not found:",$);return}const[_]=I.parent.splice(I.index,1);if(L==="")T.push(_);else{const u=at(T,L);if(!u||u.entry.type!=="directory"){console.error("Destination not found or is not a directory:",L),I.parent.splice(I.index,0,_);return}u.entry.children||(u.entry.children=[]),u.entry.children.push(_)}const C=L===""?_.name:`${L}/${_.name}`;$!==C&&m(_,$,C),console.log("File system after move:",T),Ze(T);const F=i().map(u=>u.id),R=o()?.id;t(T);const X=F.map(u=>pt(T,u)).filter(Boolean);if(r(X),R){const u=pt(T,R);if(a(u),u){const g=We(T,u.id)||u.name;c.updateLanguage?.(g),c.setReadOnly?.(g.startsWith("deps/"))}}},w=async($,L)=>{const T=JSON.parse(JSON.stringify(e()));for(const I of $){const _=new FileReader;_.onload=C=>{const F=C.target?.result,R={id:crypto.randomUUID(),name:I.name,type:"file"},X=L===""?I.name:`${L}/${I.name}`;Me(X,F);const g=((O,E)=>{if(E==="")return O;const x=E.split("/");let Q=O;for(const G of x){const D=Q.find(U=>U.name===G&&U.type==="directory");if(!D||!D.children)return null;Q=D.children}return Q})(T,L);g&&(g.push(R),t([...T]),Ze(T))},_.readAsText(I)}},A=($,L)=>{console.log(`Renaming ${$} to ${L}`);const T=JSON.parse(JSON.stringify(e())),I=at(T,$);if(!I){console.error("Entry not found for rename:",$);return}I.entry.name=L;const _=$.split("/");_[_.length-1]=L;const C=_.join("/");$!==C&&m(I.entry,$,C),t(T),Ze(T);const F=i().map(u=>u.id),R=o()?.id,X=F.map(u=>pt(T,u)).filter(Boolean);if(r(X),R){const u=pt(T,R);if(a(u),u){const g=We(T,u.id)||u.name;c.updateLanguage?.(g),c.setReadOnly?.(g.startsWith("deps/"))}}},p=($,L)=>{if($.type==="file"){const T=Te.FILE_CONTENT_PREFIX+L;localStorage.removeItem(T)}else $.type==="directory"&&$.children&&$.children.forEach(T=>{const I=L+"/"+T.name;p(T,I)})};return{handleNewFile:d,handleNewFolder:h,handleMoveEntry:S,handleFileUpload:w,handleRenameEntry:A,handleDeleteEntry:$=>{console.log(`Deleting ${$}`);const L=JSON.parse(JSON.stringify(e())),T=at(L,$);if(!T){console.error("Entry not found for deletion:",$);return}T.parent.splice(T.index,1),p(T.entry,$),t(L),Ze(L);const I=ln(T.entry),_=i().filter(R=>!I.includes(R.id));if(r(_),o()&&I.includes(o().id)){const R=_.length>0?_[_.length-1]:null;if(a(R),R&&c&&c.safeUpdateContent){const X=We(L,R.id)||R.name,u=f(X);c.safeUpdateContent(u),c.updateLanguage?.(X),c.setReadOnly?.(X.startsWith("deps/"))}}const F=l().filter(R=>R!==$);s(F)},handleMoveWithReplacement:($,L,T)=>{if(console.log(`Moving ${$} to ${L} with replacement of ${T}`),$===L){console.warn("Cannot move into itself");return}if(L.startsWith($+"/")){console.warn("Cannot move into child directory");return}const I=JSON.parse(JSON.stringify(e())),_=at(I,$);if(!_){console.error("Source not found:",$);return}const[C]=_.parent.splice(_.index,1),F=[];if(L===""){for(let O=I.length-1;O>=0;O--)I[O].name===T&&(F.push(...ln(I[O])),I.splice(O,1),localStorage.removeItem(Te.FILE_CONTENT_PREFIX+T));I.push(C)}else{const O=at(I,L);if(!O||O.entry.type!=="directory"){console.error("Destination not found or is not a directory:",L),_.parent.splice(_.index,0,C);return}O.entry.children||(O.entry.children=[]);for(let E=O.entry.children.length-1;E>=0;E--)if(O.entry.children[E].name===T){F.push(...ln(O.entry.children[E])),O.entry.children.splice(E,1);const x=`${L}/${T}`;localStorage.removeItem(Te.FILE_CONTENT_PREFIX+x)}O.entry.children.push(C)}const R=L===""?C.name:`${L}/${C.name}`;$!==R&&m(C,$,R),console.log("File system after move with replacement:",I),Ze(I);const X=i().map(O=>O.id),u=o()?.id;t(I);const g=X.filter(O=>!F.includes(O)).map(O=>pt(I,O)).filter(Boolean);if(r(g),u)if(F.includes(u)){const O=g.length>0?g[g.length-1]:null;if(a(O),O&&c&&c.safeUpdateContent){const E=We(I,O.id)||O.name,x=f(E);c.safeUpdateContent(x),c.updateLanguage?.(E),c.setReadOnly?.(E.startsWith("deps/"))}}else{const O=pt(I,u);if(a(O),O){const E=We(I,O.id)||O.name;c.updateLanguage?.(E),c.setReadOnly?.(E.startsWith("deps/"))}}},handleCopyEntry:($,L,T)=>{console.log(`Copying ${$} to ${L}/${T}`);const I=JSON.parse(JSON.stringify(e())),_=at(I,$);if(!_){console.error("Source not found for copy:",$);return}const C=(u,g)=>({id:crypto.randomUUID(),name:g,type:u.type,children:u.type==="directory"&&u.children?u.children.map(E=>C(E,E.name)):void 0}),F=C(_.entry,T);if(L==="")I.push(F);else{const u=at(I,L);if(!u||u.entry.type!=="directory"){console.error("Destination not found or is not a directory:",L);return}u.entry.children||(u.entry.children=[]),u.entry.children.push(F)}const R=(u,g,O,E)=>{if(u.type==="file"){const x=Te.FILE_CONTENT_PREFIX+O,Q=Te.FILE_CONTENT_PREFIX+E,G=localStorage.getItem(x);G!==null&&localStorage.setItem(Q,G)}else if(u.type==="directory"&&u.children&&g.children)for(let x=0;x<u.children.length;x++){const Q=u.children[x],G=g.children[x],D=O+"/"+Q.name,U=E+"/"+G.name;R(Q,G,D,U)}},X=L===""?T:`${L}/${T}`;R(_.entry,F,$,X),console.log("File system after copy:",I),Ze(I),t(I)}}},Dn="shared-link.alt",Lr=["data"],Nr=["data64","base64"],Mr=["fileName","filename","file"],Bd=[...Lr,...Nr,...Mr],Yd=()=>{const e=[new URLSearchParams(window.location.search)],t=window.location.hash.indexOf("?");return t>=0&&e.push(new URLSearchParams(window.location.hash.slice(t))),e},Qn=e=>{for(const t of Yd())for(const n of e){const i=t.get(n);if(i!==null)return i}return null},qd=e=>{try{const t=e.replace(/-/g,"+").replace(/_/g,"/"),n=(4-t.length%4)%4,i=t+"=".repeat(n),r=atob(i),o=Uint8Array.from(r,a=>a.charCodeAt(0));return new TextDecoder().decode(o)}catch(t){return console.warn("Unable to decode shared editor payload from URL query parameters.",t),null}},Hd=e=>{const n=(e?.trim()||Dn).split(/[\\/]/).filter(r=>r.length>0).pop()||Dn,i=Array.from(n,r=>r.charCodeAt(0)<32||'<>:"|?*'.includes(r)?"-":r).join("").trim();return i.length===0?Dn:i.includes(".")?i:`${i}.alt`},Zd=()=>{if(typeof window>"u")return null;const e=Qn(Nr),t=Qn(Lr),n=Hd(Qn(Mr));if(e!==null){const i=qd(e);return i===null?null:{fileName:n,content:i}}return t===null?null:{fileName:n,content:t}},Wi=e=>{let t=!1;for(const n of Bd)e.has(n)&&(e.delete(n),t=!0);return t},Kd=()=>{if(typeof window>"u")return;const e=new URL(window.location.href);let t=Wi(e.searchParams);const n=e.hash.indexOf("?");if(n>=0){const i=e.hash.slice(0,n),r=new URLSearchParams(e.hash.slice(n+1));if(Wi(r)){const a=r.toString();e.hash=a?`${i}?${a}`:i,t=!0}}t&&window.history.replaceState(window.history.state,document.title,`${e.pathname}${e.search}${e.hash}`)};var Jd=k("<button type=button class=vscode-button><i></i><span>"),eu=k("<div class=collapsed-sidebar-container>"),tu=k("<div class=editor-instance-wrapper>"),nu=k('<div class=app-shell><header id=header><div class=brand><h3>Althread</h3></div><div class=actions><div class=action-group></div><span class=actions-separator></span><button type=button class="vscode-button icon-only theme-toggle-button"aria-label="Toggle theme"><i class="codicon codicon-color-mode"></i></button></div></header><div class=content-wrapper>'),iu=k("<div>");_n().then(()=>{Ar()});const ru=(e,t)=>{if(!Xe(e,t))return t;const n=t.lastIndexOf("."),i=n>0?t.slice(0,n):t,r=n>0?t.slice(n):"";let o=2;for(;Xe(e,`${i}-${o}${r}`);)o++;return`${i}-${o}${r}`},ou=(e,t,n)=>{let i=e;for(const r of t.split("/").filter(Boolean))if(i=i?.find(o=>o.name===r&&o.type==="directory")?.children,!i)return!1;return i.some(r=>r.name===n)},lt={isOpen:!1,content:"",fileName:""};function au(){const e=Zd(),[t,n]=W(Hc()),[i,r]=W([]),[o,a]=W(null),[l,s]=W(!!e),[c,f]=W(Jc()),[d,h]=W(null),[m,S]=W("help"),[w,A]=W(!1);let p=null,v=null;const[P,z]=W(.2),$=48,L=()=>{const M=!w(),N=v,j=document.querySelector(".right-panel"),J=document.getElementById("content");if(p&&N&&j&&J){const ne=J.getBoundingClientRect().width,be=j.getBoundingClientRect().width;if(M){const $e=ne-$,Fe=document.querySelector("#content > [data-corvu-resizable-panel]:first-child")?.getBoundingClientRect().width||ne*.2;z(Fe);const ye=be/$e;N([0,1-ye,ye])}else{const $e=ne+$,Fe=P()/$e,ye=be/$e;N([Fe,1-Fe-ye,ye])}}A(M)},T=M=>{w()&&L(),S(M)},I=M=>We(t(),M.id)||M.name,_=wl({getWorkspace:()=>Ni(t()),onWorkspaceChange:M=>{for(const[N,j]of Object.entries(M))Me(N,j)},onNavigate:(M,N)=>{if(!Xe(t(),M))return;C.handleFileSelect(M,t());const j=_.safeEditorView();if(!j)return;const J=j.state.doc.line(Math.min(N.line+1,j.state.doc.lines)),ne=Math.min(J.from+N.character,J.to);j.dispatch({selection:{anchor:ne},scrollIntoView:!0}),j.focus()},defaultValue:`// Welcome to Althread
`,filePath:"untitled.alt",theme:c(),onValueChange:M=>{const N=C.activeFile();N&&Me(I(N),M)}}),C=jd(_),F=Gd(t,n,a,C.openFiles,C.setOpenFiles,C.activeFile,C.setActiveFile,i,r,_,tt),R=(M,N)=>{C.createNewFileWithContent(ru(t(),M),N,F,t)},X=()=>C.activeFile()?.name.endsWith(".alt")??!1,g=Xd({getContext:()=>{const M=C.activeFile(),N=_.safeEditorView();if(!M||!X()||!N)return null;const j=t();return{source:N.state.doc.toString(),filePath:We(j,M.id,"")||M.name,virtualFS:Ni(j)}}}),[O,E]=W(null);ue(()=>{const M=O();if(M&&M.length>0){_.highlightLines?.(M);return}const N=g.selectedVM(),j=(N?.vm?.locals??[]).map(J=>({line:J.line,label:`${J.name}#${J.pid}`})).filter(J=>typeof J.line=="number"&&J.line>0);if(j.length>0){_.highlightLines?.(j);return}if(N?.stepIndex!==void 0){const J=g.stepLines()[N.stepIndex];if(J?.length){_.highlightLines?.(J);return}}_.clearHighlights?.()}),ue(Ue(()=>C.activeFile()?.id,()=>{E(null),g.mode()==="interactive"&&g.stopInteractive()},{defer:!0}));const x=()=>!!C.activeFile()&&X(),Q=(M,N)=>C.activeFile()?X()?N?`${M} (${N})`:M:`${M} — only .alt files can be executed`:`${M} — open a file first`,G=`${$t}+Enter`,D=`${$t}+Shift+Enter`;xt(()=>{const M=N=>{!(si?N.metaKey:N.ctrlKey)||N.key!=="Enter"||N.altKey||(N.preventDefault(),N.stopPropagation(),N.shiftKey?g.check():g.run())};window.addEventListener("keydown",M,!0),Qe(()=>window.removeEventListener("keydown",M,!0))}),xt(()=>{if(!e)return;if(Kd(),Xe(t(),e.fileName)?.type==="file"){le({isOpen:!0,content:e.content,fileName:e.fileName});return}R(e.fileName,e.content)}),ue(()=>{if(l()||(s(!0),C.activeFile()))return;const M=t();Xe(M,"main.alt")?.type==="file"?C.handleFileSelect("main.alt",M):M.length===1&&M[0].type==="file"&&C.handleFileSelect(We(M,M[0].id)||M[0].name,M)}),ue(()=>Ze(t())),ue(()=>{const M=c();document.documentElement.dataset.theme=M,document.body.dataset.theme=M,_.updateTheme?.(M)}),ue(Ue(w,()=>{setTimeout(()=>{const M=C.activeFile(),N=_.safeEditorView();if(!M||!N)return;const j=tt(I(M));N.dispatch({changes:{from:0,to:N.state.doc.length,insert:j}})},50)}));const[U,Z]=W({isOpen:!1,sourcePaths:[],destPath:"",conflictingName:""}),H=()=>Z({isOpen:!1,sourcePaths:[],destPath:"",conflictingName:""}),[q,K]=W({isOpen:!1,paths:[]}),[ee,fe]=W(lt),[ae,le]=W(lt),se=()=>{const{sourcePaths:M,destPath:N,conflictingName:j}=U();for(const J of M)F.handleMoveWithReplacement(J,N,j);H()},_e=()=>{for(const M of q().paths)F.handleDeleteEntry(M);K({isOpen:!1,paths:[]})},Ge=()=>{const M=ee();fe(lt);const N=C.activeFile();if(!N){R(M.fileName,M.content);return}_.safeUpdateContent(M.content),Me(I(N),M.content)},He=()=>{const M=ee();fe(lt),R(M.fileName,M.content)},ze=()=>{const M=ae();le(lt),Me(M.fileName,M.content),C.handleFileSelect(M.fileName,t())},je=()=>{const M=ae();le(lt),R(M.fileName,M.content)},wt=()=>{le(lt),C.activeFile()||s(!1)},Wt=()=>{T("explorer"),h({type:"file",parentPath:""})},$n=M=>{if(!Xe(t(),M)){console.warn(`File not found: ${M}`);return}C.handleFileSelect(M,t()),T("explorer")},Xt=()=>b(Ud,{get files(){return t()},onFileSelect:M=>C.handleFileSelect(M,t()),get onNewFile(){return F.handleNewFile},get onNewFolder(){return F.handleNewFolder},get onMoveEntry(){return F.handleMoveEntry},get onRenameEntry(){return F.handleRenameEntry},get onDeleteEntry(){return F.handleDeleteEntry},get onCopyEntry(){return F.handleCopyEntry},get onFileUpload(){return F.handleFileUpload},get activeFile(){return C.activeFile()},getFilePath:I,get selectedFiles(){return i()},onSelectionChange:r,get creationError(){return o()},setCreationError:a,checkNameConflict:(M,N)=>ou(t(),M,N),showConfirmDialog:(M,N,j)=>Z({isOpen:!0,sourcePaths:M,destPath:N,conflictingName:j}),showDeleteConfirmDialog:M=>K({isOpen:!0,paths:M}),get globalFileCreation(){return d()},setGlobalFileCreation:h,setFileSystem:n,onLoadExample:(M,N)=>fe({isOpen:!0,content:M,fileName:N}),get activeView(){return m()},onViewChange:S,get isCollapsed(){return w()},onToggleCollapse:L}),it=M=>(()=>{var N=Jd(),j=N.firstChild,J=j.nextSibling;return N.$$click=()=>M.onClick(),y(J,()=>M.label),te(ne=>{var be=!!M.primary,$e=M.action==="interactive"&&g.mode()==="interactive",Fe=!x()||g.busy()!==null,ye=Q(M.label,M.shortcut),me=g.busy()===M.action?"codicon codicon-loading codicon-modifier-spin":`codicon codicon-${M.icon}`;return be!==ne.e&&N.classList.toggle("primary",ne.e=be),$e!==ne.t&&N.classList.toggle("active",ne.t=$e),Fe!==ne.a&&(N.disabled=ne.a=Fe),ye!==ne.o&&re(N,"title",ne.o=ye),me!==ne.i&&ge(j,ne.i=me),ne},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),N})();return(()=>{var M=nu(),N=M.firstChild,j=N.firstChild,J=j.firstChild,ne=j.nextSibling,be=ne.firstChild,$e=be.nextSibling,Fe=$e.nextSibling,ye=N.nextSibling;return y(j,b(Ba,{}),J),y(be,b(it,{action:"run",label:"Run",icon:"play",shortcut:G,primary:!0,get onClick(){return g.run}}),null),y(be,b(it,{action:"check",label:"Check",icon:"workspace-trusted",shortcut:D,get onClick(){return g.check}}),null),y(be,b(it,{action:"interactive",label:"Step",icon:"debug-step-over",get onClick(){return g.startInteractive}}),null),Fe.$$click=()=>{const me=c()==="dark"?"light":"dark";Kc(me),f(me)},y(M,b(B,{get when(){return w()},get children(){var me=eu();return y(me,b(Xt,{})),me}}),ye),y(ye,b(Ve,{id:"content",as:me=>{const rt=Ve.useContext();return p=rt.sizes,v=rt.setSizes,(()=>{var kt=iu();return ei(kt,me,!1,!1),kt})()},get children(){return[b(Ve.Panel,{initialSize:.2,minSize:.15,collapsible:!0,collapsedSize:0,onCollapse:()=>A(!0),onExpand:()=>A(!1),style:{overflow:"hidden"},get children(){return b(Xt,{})}}),b(Ve.Handle,{class:"Resizable-handle"}),b(Ve.Panel,{class:"editor-panel",initialSize:.5,minSize:.2,get children(){return[b(Pl,{get openFiles(){return C.openFiles()},get activeFile(){return C.activeFile()},getFilePath:I,onTabClick:me=>C.handleFileTabClick(me,t()),onTabClose:me=>C.handleTabClose(me,t())}),b(B,{get when(){return C.activeFile()},get fallback(){return b($l,{onNewFile:Wt})},get children(){var me=tu(),rt=_.ref;return typeof rt=="function"?Ye(rt,me):_.ref=me,me}})]}}),b(Ve.Handle,{class:"Resizable-handle"}),b(Ve.Panel,{class:"right-panel",initialSize:.3,minSize:.15,get children(){return b(kc,{exec:g,editor:_,get theme(){return c()},runShortcut:G,onErrorFileClick:$n,onPreviewLines:E})}})]}})),y(M,b(Ja,{get isOpen(){return U().isOpen},title:"Replace Existing Item",message:"An item with this name already exists in the destination folder. Do you want to replace it?",get fileName(){return U().conflictingName},onConfirm:se,onCancel:H}),null),y(M,b(el,{get isOpen(){return q().isOpen},get paths(){return q().paths},onConfirm:_e,onCancel:()=>K({isOpen:!1,paths:[]})}),null),y(M,b(vi,{get isOpen(){return ee().isOpen},get detail(){return`Replace the content of the current file, or open “${ee().fileName}” in a new file.`},onLoadInCurrent:Ge,onLoadInNew:He,onCancel:()=>fe(lt)}),null),y(M,b(vi,{get isOpen(){return ae().isOpen},onLoadInCurrent:ze,onLoadInNew:je,onCancel:wt,title:"Shared Link Import",message:"A file with the same name already exists. What should the editor do with the shared content?",get detail(){return`Replace ${ae().fileName} or create a new file with a unique name.`},currentLabel:"Replace File",newLabel:"Create Copy"}),null),te(me=>{var rt=c(),kt=`Switch to ${c()==="dark"?"light":"dark"} theme`,ci=!!w();return rt!==me.e&&re(M,"data-theme",me.e=rt),kt!==me.t&&re(Fe,"title",me.t=kt),ci!==me.a&&ye.classList.toggle("sidebar-collapsed",me.a=ci),me},{e:void 0,t:void 0,a:void 0}),M})()}xe(["click"]);const Xi=Jn(()=>Ne(()=>import("./Tutorial-zbrLx-o-.js"),__vite__mapDeps([14,1,15]))),lu=()=>{const e=fr();return xt(()=>{e("/",{replace:!0})}),null},Gi=document.getElementById("app");Gi&&ra(()=>b(Wa,{get children(){return[b(Bt,{path:"/tutorials",component:Xi}),b(Bt,{path:"/tutorials/:stepName",component:Xi}),b(Bt,{path:"/",component:au}),b(Bt,{path:"*all",component:lu})]}}),Gi);export{Ie as A,Oe as F,Ba as L,Vn as M,B as S,Ne as _,fr as a,ue as b,W as c,Qe as d,wl as e,b as f,Ve as g,te as h,y as i,Ye as j,ge as k,Jc as l,ke as m,Kc as n,xt as o,It as p,Vd as q,xe as r,re as s,k as t,uu as u,Ue as v,Mi as w,sa as x,pe as y,dt as z};
