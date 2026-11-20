const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BlqAb9HM.js","assets/codemirror-CxIvJr0B.js","assets/index-DSRLhUMa.js","assets/index-27Oa6cPa.js","assets/index-LBiqdFRM.js","assets/index-BYirMQhs.js","assets/index-etIPbnKY.js","assets/index-Dj1yPGQn.js","assets/index-D-fBKaJZ.js","assets/Graph-Cx9rnvJ1.js","assets/visHelpers-P6nEhIAc.js","assets/visHelpers-C5-pRpzx.css","assets/Graph-DruHsj2C.css","assets/CommGraph-DnrzC8dZ.js","assets/Tutorial-C6oQoEZY.js","assets/Tutorial-CUP3AYsF.css"])))=>i.map(i=>d[i]);
import{C as At,S as jt,E as vt,a as Yn,s as Ur,H as jr,t as W,b as Vr,L as Wr,c as Xr,d as qn,V as Gr,l as Bi,e as Br,h as Yr,k as Hn,f as qr,g as Hr,i as Zr,j as Kr,m as Jr,n as eo,o as to,p as no,q as io,D as zt,r as ro,u as oo,v as ao,w as lo,x as so,y as co,z as uo,A as fo,B as go,F as ho,G as mo,I as po,J as bo,K as yo,M as vo,N as Oo,O as wo,P as _o,Q as $o,R as So,T as xo,U as Co,W as Po,X as ko,Y as Eo}from"./codemirror-CxIvJr0B.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const zo="modulepreload",Ro=function(e){return"/dev/editor/"+e},di={},Ne=function(t,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=Promise.allSettled(n.map(s=>{if(s=Ro(s),s in di)return;di[s]=!0;const c=s.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":zo,c||(u.as="script"),u.crossOrigin="",u.href=s,l&&u.setAttribute("nonce",l),document.head.appendChild(u),c)return new Promise((h,m)=>{u.addEventListener("load",h),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},ie={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return ui(this.context.count)},getNextContextId(){return ui(this.context.count++)}};function ui(e){const t=String(e),n=t.length-1;return ie.context.id+(n?String.fromCharCode(96+n):"")+t}function Dt(e){ie.context=e}const Yi=!1,To=(e,t)=>e===t,sn=Symbol("solid-proxy"),qi=typeof Proxy=="function",Ao=Symbol("solid-track"),cn={equals:To};let Hi=tr;const nt=1,dn=2,Zi={owned:null,cleanups:null,context:null,owner:null},Sn={};var se=null;let xn=null,Do=null,he=null,Pe=null,Je=null,yn=0;function It(e,t){const n=he,i=se,r=e.length===0,o=t===void 0?i:t,a=r?Zi:{owned:null,cleanups:null,context:o?o.context:null,owner:o},l=r?e:()=>e(()=>pe(()=>Nt(a)));se=a,he=null;try{return qe(l,!0)}finally{he=n,se=i}}function X(e,t){t=t?Object.assign({},cn,t):cn;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),er(n,r));return[Ji.bind(n),i]}function Qo(e,t,n){const i=On(e,t,!0,nt);kt(i)}function te(e,t,n){const i=On(e,t,!1,nt);kt(i)}function ue(e,t,n){Hi=jo;const i=On(e,t,!1,nt);i.user=!0,Je?Je.push(i):kt(i)}function oe(e,t,n){n=n?Object.assign({},cn,n):cn;const i=On(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,kt(i),Ji.bind(i)}function Fo(e){return e&&typeof e=="object"&&"then"in e}function Io(e,t,n){let i,r,o;i=!0,r=e,o={};let a=null,l=Sn,s=null,c=!1,d="initialValue"in o,u=typeof i=="function"&&oe(i);const h=new Set,[m,_]=(o.storage||X)(o.initialValue),[w,Q]=X(void 0),[p,v]=X(void 0,{equals:!1}),[z,E]=X(d?"ready":"unresolved");ie.context&&(s=ie.getNextContextId(),o.ssrLoadFrom==="initial"?l=o.initialValue:ie.load&&ie.has(s)&&(l=ie.load(s)));function $(P,L,R,j){return a===P&&(a=null,j!==void 0&&(d=!0),(P===l||L===l)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(j,{value:L})),l=Sn,F(L,R)),L}function F(P,L){qe(()=>{L===void 0&&_(()=>P),E(L!==void 0?"errored":d?"ready":"unresolved"),Q(L);for(const R of h.keys())R.decrement();h.clear()},!1)}function A(){const P=No,L=m(),R=w();if(R!==void 0&&!a)throw R;return he&&he.user,L}function S(P=!0){if(P!==!1&&c)return;c=!1;const L=u?u():i;if(L==null||L===!1){$(a,pe(m));return}let R;const j=l!==Sn?l:pe(()=>{try{return r(L,{value:m(),refetching:P})}catch(f){R=f}});if(R!==void 0){$(a,void 0,Jt(R),L);return}else if(!Fo(j))return $(a,j,void 0,L),j;return a=j,"v"in j?(j.s===1?$(a,j.v,void 0,L):$(a,void 0,Jt(j.v),L),j):(c=!0,queueMicrotask(()=>c=!1),qe(()=>{E(d?"refreshing":"pending"),v()},!1),j.then(f=>$(j,f,void 0,L),f=>$(j,void 0,Jt(f),L)))}Object.defineProperties(A,{state:{get:()=>z()},error:{get:()=>w()},loading:{get(){const P=z();return P==="pending"||P==="refreshing"}},latest:{get(){if(!d)return A();const P=w();if(P&&!a)throw P;return m()}}});let x=se;return u?Qo(()=>(x=se,S(!1))):S(!1),[A,{refetch:P=>Zn(x,()=>S(P)),mutate:_}]}function Ce(e){return qe(e,!1)}function pe(e){if(he===null)return e();const t=he;he=null;try{return e()}finally{he=t}}function Ue(e,t,n){const i=Array.isArray(e);let r,o=n&&n.defer;return a=>{let l;if(i){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(o)return o=!1,a;const s=pe(()=>t(l,r,a));return r=l,s}}function xt(e){ue(()=>pe(e))}function Qe(e){return se===null||(se.cleanups===null?se.cleanups=[e]:se.cleanups.push(e)),e}function Ki(){return se}function Zn(e,t){const n=se,i=he;se=e,he=null;try{return qe(t,!0)}catch(r){Kn(r)}finally{se=n,he=i}}function Lo(e){const t=he,n=se;return Promise.resolve().then(()=>{he=t,se=n;let i;return qe(e,!1),he=se=null,i?i.done:void 0})}const[su,cu]=X(!1);function Ct(e,t){const n=Symbol("context");return{id:n,Provider:Vo(n),defaultValue:e}}function Pt(e){let t;return se&&se.context&&(t=se.context[e.id])!==void 0?t:e.defaultValue}function vn(e){const t=oe(e),n=oe(()=>Fn(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}let No;function Ji(){if(this.sources&&this.state)if(this.state===nt)kt(this);else{const e=Pe;Pe=null,qe(()=>fn(this),!1),Pe=e}if(he){const e=this.observers?this.observers.length:0;he.sources?(he.sources.push(this),he.sourceSlots.push(e)):(he.sources=[this],he.sourceSlots=[e]),this.observers?(this.observers.push(he),this.observerSlots.push(he.sources.length-1)):(this.observers=[he],this.observerSlots=[he.sources.length-1])}return this.value}function er(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&qe(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r],a=xn&&xn.running;a&&xn.disposed.has(o),(a?!o.tState:!o.state)&&(o.pure?Pe.push(o):Je.push(o),o.observers&&nr(o)),a||(o.state=nt)}if(Pe.length>1e6)throw Pe=[],new Error},!1)),t}function kt(e){if(!e.fn)return;Nt(e);const t=yn;Mo(e,e.value,t)}function Mo(e,t,n){let i;const r=se,o=he;he=se=e;try{i=e.fn(t)}catch(a){return e.pure&&(e.state=nt,e.owned&&e.owned.forEach(Nt),e.owned=null),e.updatedAt=n+1,Kn(a)}finally{he=o,se=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?er(e,i):e.value=i,e.updatedAt=n)}function On(e,t,n,i=nt,r){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:se,context:se?se.context:null,pure:n};return se===null||se!==Zi&&(se.owned?se.owned.push(o):se.owned=[o]),o}function un(e){if(e.state===0)return;if(e.state===dn)return fn(e);if(e.suspense&&pe(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<yn);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===nt)kt(e);else if(e.state===dn){const i=Pe;Pe=null,qe(()=>fn(e,t[0]),!1),Pe=i}}function qe(e,t){if(Pe)return e();let n=!1;t||(Pe=[]),Je?n=!0:Je=[],yn++;try{const i=e();return Uo(n),i}catch(i){n||(Je=null),Pe=null,Kn(i)}}function Uo(e){if(Pe&&(tr(Pe),Pe=null),e)return;const t=Je;Je=null,t.length&&qe(()=>Hi(t),!1)}function tr(e){for(let t=0;t<e.length;t++)un(e[t])}function jo(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:un(i)}if(ie.context){if(ie.count){ie.effects||(ie.effects=[]),ie.effects.push(...e.slice(0,n));return}Dt()}for(ie.effects&&(ie.done||!ie.count)&&(e=[...ie.effects,...e],n+=ie.effects.length,delete ie.effects),t=0;t<n;t++)un(e[t])}function fn(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===nt?i!==t&&(!i.updatedAt||i.updatedAt<yn)&&un(i):r===dn&&fn(i,t)}}}function nr(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=dn,n.pure?Pe.push(n):Je.push(n),n.observers&&nr(n))}}function Nt(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),a=n.observerSlots.pop();i<r.length&&(o.sourceSlots[a]=i,r[i]=o,n.observerSlots[i]=a)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)Nt(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Nt(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Jt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Kn(e,t=se){throw Jt(e)}function Fn(e){if(typeof e=="function"&&!e.length)return Fn(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=Fn(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function Vo(e,t){return function(i){let r;return te(()=>r=pe(()=>(se.context={...se.context,[e]:i.value},vn(()=>i.children))),void 0),r}}const Wo=Symbol("fallback");function fi(e){for(let t=0;t<e.length;t++)e[t]()}function Xo(e,t,n={}){let i=[],r=[],o=[],a=0,l=t.length>1?[]:null;return Qe(()=>fi(o)),()=>{let s=e()||[],c=s.length,d,u;return s[Ao],pe(()=>{let m,_,w,Q,p,v,z,E,$;if(c===0)a!==0&&(fi(o),o=[],i=[],r=[],a=0,l&&(l=[])),n.fallback&&(i=[Wo],r[0]=It(F=>(o[0]=F,n.fallback())),a=1);else if(a===0){for(r=new Array(c),u=0;u<c;u++)i[u]=s[u],r[u]=It(h);a=c}else{for(w=new Array(c),Q=new Array(c),l&&(p=new Array(c)),v=0,z=Math.min(a,c);v<z&&i[v]===s[v];v++);for(z=a-1,E=c-1;z>=v&&E>=v&&i[z]===s[E];z--,E--)w[E]=r[z],Q[E]=o[z],l&&(p[E]=l[z]);for(m=new Map,_=new Array(E+1),u=E;u>=v;u--)$=s[u],d=m.get($),_[u]=d===void 0?-1:d,m.set($,u);for(d=v;d<=z;d++)$=i[d],u=m.get($),u!==void 0&&u!==-1?(w[u]=r[d],Q[u]=o[d],l&&(p[u]=l[d]),u=_[u],m.set($,u)):o[d]();for(u=v;u<c;u++)u in w?(r[u]=w[u],o[u]=Q[u],l&&(l[u]=p[u],l[u](u))):r[u]=It(h);r=r.slice(0,a=c),i=s.slice(0)}return r});function h(m){if(o[u]=m,l){const[_,w]=X(u);return l[u]=w,t(s[u],_)}return t(s[u])}}}function b(e,t){return pe(()=>e(t||{}))}function Gt(){return!0}const In={get(e,t,n){return t===sn?n:e.get(t)},has(e,t){return t===sn?!0:e.has(t)},set:Gt,deleteProperty:Gt,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Gt,deleteProperty:Gt}},ownKeys(e){return e.keys()}};function Cn(e){return(e=typeof e=="function"?e():e)?e:{}}function Go(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function ct(...e){let t=!1;for(let a=0;a<e.length;a++){const l=e[a];t=t||!!l&&sn in l,e[a]=typeof l=="function"?(t=!0,oe(l)):l}if(qi&&t)return new Proxy({get(a){for(let l=e.length-1;l>=0;l--){const s=Cn(e[l])[a];if(s!==void 0)return s}},has(a){for(let l=e.length-1;l>=0;l--)if(a in Cn(e[l]))return!0;return!1},keys(){const a=[];for(let l=0;l<e.length;l++)a.push(...Object.keys(Cn(e[l])));return[...new Set(a)]}},In);const n={},i=Object.create(null);for(let a=e.length-1;a>=0;a--){const l=e[a];if(!l)continue;const s=Object.getOwnPropertyNames(l);for(let c=s.length-1;c>=0;c--){const d=s[c];if(d==="__proto__"||d==="constructor")continue;const u=Object.getOwnPropertyDescriptor(l,d);if(!i[d])i[d]=u.get?{enumerable:!0,configurable:!0,get:Go.bind(n[d]=[u.get.bind(l)])}:u.value!==void 0?u:void 0;else{const h=n[d];h&&(u.get?h.push(u.get.bind(l)):u.value!==void 0&&h.push(()=>u.value))}}}const r={},o=Object.keys(i);for(let a=o.length-1;a>=0;a--){const l=o[a],s=i[l];s&&s.get?Object.defineProperty(r,l,s):r[l]=s?s.value:void 0}return r}function Vt(e,...t){if(qi&&sn in e){const r=new Set(t.length>1?t.flat():t[0]),o=t.map(a=>new Proxy({get(l){return a.includes(l)?e[l]:void 0},has(l){return a.includes(l)&&l in e},keys(){return a.filter(l=>l in e)}},In));return o.push(new Proxy({get(a){return r.has(a)?void 0:e[a]},has(a){return r.has(a)?!1:a in e},keys(){return Object.keys(e).filter(a=>!r.has(a))}},In)),o}const n={},i=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const o=Object.getOwnPropertyDescriptor(e,r),a=!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable;let l=!1,s=0;for(const c of t)c.includes(r)&&(l=!0,a?i[s][r]=o.value:Object.defineProperty(i[s],r,o)),++s;l||(a?n[r]=o.value:Object.defineProperty(n,r,o))}return[...i,n]}function Jn(e){let t,n;const i=r=>{const o=ie.context;if(o){const[l,s]=X();ie.count||(ie.count=0),ie.count++,(n||(n=e())).then(c=>{!ie.done&&Dt(o),ie.count--,s(()=>c.default),Dt()}),t=l}else if(!t){const[l]=Io(()=>(n||(n=e())).then(s=>s.default));t=l}let a;return oe(()=>(a=t())?pe(()=>{if(!o||ie.done)return a(r);const l=ie.context;Dt(o);const s=a(r);return Dt(l),s}):"")};return i.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),i}let Bo=0;function wn(){return ie.context?ie.getNextContextId():`cl-${Bo++}`}const ir=e=>`Stale read from <${e}>.`;function Oe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return oe(Xo(()=>e.each,e.children,t||void 0))}function Y(e){const t=e.keyed,n=oe(()=>e.when,void 0,void 0),i=t?n:oe(n,void 0,{equals:(r,o)=>!r==!o});return oe(()=>{const r=i();if(r){const o=e.children;return typeof o=="function"&&o.length>0?pe(()=>o(t?r:()=>{if(!pe(i))throw ir("Show");return n()})):o}return e.fallback},void 0,void 0)}function Ln(e){const t=vn(()=>e.children),n=oe(()=>{const i=t(),r=Array.isArray(i)?i:[i];let o=()=>{};for(let a=0;a<r.length;a++){const l=a,s=r[a],c=o,d=oe(()=>c()?void 0:s.when,void 0,void 0),u=s.keyed?d:oe(d,void 0,{equals:(h,m)=>!h==!m});o=()=>c()||(u()?[l,d,s]:void 0)}return o});return oe(()=>{const i=n()();if(!i)return e.fallback;const[r,o,a]=i,l=a.children;return typeof l=="function"&&l.length>0?pe(()=>l(a.keyed?o():()=>{if(pe(n)()?.[0]!==r)throw ir("Match");return o()})):l},void 0,void 0)}function Se(e){return e}const Yo=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],qo=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline",...Yo]),Ho=new Set(["innerHTML","textContent","innerText","children"]),Zo=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ko=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Jo(e,t){const n=Ko[e];return typeof n=="object"?n[t]?n.$:void 0:n}const ea=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ta=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),na={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},Ee=e=>oe(()=>e());function ia(e,t,n){let i=n.length,r=t.length,o=i,a=0,l=0,s=t[r-1].nextSibling,c=null;for(;a<r||l<o;){if(t[a]===n[l]){a++,l++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===a){const d=o<i?l?n[l-1].nextSibling:n[o-l]:s;for(;l<o;)e.insertBefore(n[l++],d)}else if(o===l)for(;a<r;)(!c||!c.has(t[a]))&&t[a].remove(),a++;else if(t[a]===n[o-1]&&n[l]===t[r-1]){const d=t[--r].nextSibling;e.insertBefore(n[l++],t[a++].nextSibling),e.insertBefore(n[--o],d),t[r]=n[o]}else{if(!c){c=new Map;let u=l;for(;u<o;)c.set(n[u],u++)}const d=c.get(t[a]);if(d!=null)if(l<d&&d<o){let u=a,h=1,m;for(;++u<r&&u<o&&!((m=c.get(t[u]))==null||m!==d+h);)h++;if(h>d-l){const _=t[a];for(;l<d;)e.insertBefore(n[l++],_)}else e.replaceChild(n[l++],t[a++])}else a++;else t[a++].remove()}}}const gi="_$DX_DELEGATE";function ra(e,t,n,i={}){let r;return It(o=>{r=o,t===document?e():y(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function D(e,t,n,i){let r;const o=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},a=()=>(r||(r=o())).cloneNode(!0);return a.cloneNode=a,a}function xe(e,t=window.document){const n=t[gi]||(t[gi]=new Set);for(let i=0,r=e.length;i<r;i++){const o=e[i];n.has(o)||(n.add(o),t.addEventListener(o,fa))}}function re(e,t,n){Ot(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function oa(e,t,n,i){Ot(e)||(i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i))}function aa(e,t,n){Ot(e)||(n?e.setAttribute(t,""):e.removeAttribute(t))}function ge(e,t){Ot(e)||(t==null?e.removeAttribute("class"):e.className=t)}function Ie(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=o=>r.call(e,n[1],o))}else e.addEventListener(t,n,typeof n!="function"&&n)}function la(e,t,n={}){const i=Object.keys(t||{}),r=Object.keys(n);let o,a;for(o=0,a=r.length;o<a;o++){const l=r[o];!l||l==="undefined"||t[l]||(hi(e,l,!1),delete n[l])}for(o=0,a=i.length;o<a;o++){const l=i[o],s=!!t[l];!l||l==="undefined"||n[l]===s||!s||(hi(e,l,!0),n[l]=s)}return n}function sa(e,t,n){if(!t)return n?re(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let r,o;for(o in n)t[o]==null&&i.removeProperty(o),delete n[o];for(o in t)r=t[o],r!==n[o]&&(i.setProperty(o,r),n[o]=r);return n}function ei(e,t={},n,i){const r={};return i||te(()=>r.children=Mt(e,t.children,r.children)),te(()=>typeof t.ref=="function"&&Ye(t.ref,e)),te(()=>ca(e,t,n,!0,r,!0)),r}function Ye(e,t,n){return pe(()=>e(t,n))}function y(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return Mt(e,t,i,n);te(r=>Mt(e,t(),r,n),i)}function ca(e,t,n,i,r={},o=!1){t||(t={});for(const a in r)if(!(a in t)){if(a==="children")continue;r[a]=mi(e,a,null,r[a],n,o,t)}for(const a in t){if(a==="children")continue;const l=t[a];r[a]=mi(e,a,l,r[a],n,o,t)}}function da(e){let t,n;return!Ot()||!(t=ie.registry.get(n=ga()))?e():(ie.completed&&ie.completed.add(t),ie.registry.delete(n),t)}function Ot(e){return!!ie.context&&!ie.done&&(!e||e.isConnected)}function ua(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function hi(e,t,n){const i=t.trim().split(/\s+/);for(let r=0,o=i.length;r<o;r++)e.classList.toggle(i[r],n)}function mi(e,t,n,i,r,o,a){let l,s,c,d,u;if(t==="style")return sa(e,n,i);if(t==="classList")return la(e,n,i);if(n===i)return i;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);i&&e.removeEventListener(h,i,typeof i!="function"&&i),n&&e.addEventListener(h,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);i&&e.removeEventListener(h,i,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),m=ea.has(h);if(!m&&i){const _=Array.isArray(i)?i[0]:i;e.removeEventListener(h,_)}(m||n)&&(Ie(e,h,n,m),m&&xe([h]))}else if(t.slice(0,5)==="attr:")re(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")aa(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(c=Ho.has(t))||!r&&((d=Jo(t,e.tagName))||(s=qo.has(t)))||(l=e.nodeName.includes("-")||"is"in a)){if(u)t=t.slice(5),s=!0;else if(Ot(e))return n;t==="class"||t==="className"?ge(e,n):l&&!s&&!c?e[ua(t)]=n:e[d||t]=n}else{const h=r&&t.indexOf(":")>-1&&na[t.split(":")[0]];h?oa(e,h,t,n):re(e,Zo[t]||t,n)}return n}function fa(e){if(ie.registry&&ie.events&&ie.events.find(([s,c])=>c===e))return;let t=e.target;const n=`$$${e.type}`,i=e.target,r=e.currentTarget,o=s=>Object.defineProperty(e,"target",{configurable:!0,value:s}),a=()=>{const s=t[n];if(s&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?s.call(t,c,e):s.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},l=()=>{for(;a()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),ie.registry&&!ie.done&&(ie.done=_$HY.done=!0),e.composedPath){const s=e.composedPath();o(s[0]);for(let c=0;c<s.length-2&&(t=s[c],!!a());c++){if(t._$host){t=t._$host,l();break}if(t.parentNode===r)break}}else l();o(i)}function Mt(e,t,n,i,r){const o=Ot(e);if(o){!n&&(n=[...e.childNodes]);let s=[];for(let c=0;c<n.length;c++){const d=n[c];d.nodeType===8&&d.data.slice(0,2)==="!$"?d.remove():s.push(d)}n=s}for(;typeof n=="function";)n=n();if(t===n)return n;const a=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,a==="string"||a==="number"){if(o||a==="number"&&(t=t.toString(),t===n))return n;if(l){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=_t(e,n,i,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||a==="boolean"){if(o)return n;n=_t(e,n,i)}else{if(a==="function")return te(()=>{let s=t();for(;typeof s=="function";)s=s();n=Mt(e,s,n,i)}),()=>n;if(Array.isArray(t)){const s=[],c=n&&Array.isArray(n);if(Nn(s,t,n,r))return te(()=>n=Mt(e,s,n,i,!0)),()=>n;if(o){if(!s.length)return n;if(i===void 0)return n=[...e.childNodes];let d=s[0];if(d.parentNode!==e)return n;const u=[d];for(;(d=d.nextSibling)!==i;)u.push(d);return n=u}if(s.length===0){if(n=_t(e,n,i),l)return n}else c?n.length===0?pi(e,s,i):ia(e,n,s):(n&&_t(e),pi(e,s));n=s}else if(t.nodeType){if(o&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=_t(e,n,i,t);_t(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Nn(e,t,n,i){let r=!1;for(let o=0,a=t.length;o<a;o++){let l=t[o],s=n&&n[e.length],c;if(!(l==null||l===!0||l===!1))if((c=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))r=Nn(e,l,s)||r;else if(c==="function")if(i){for(;typeof l=="function";)l=l();r=Nn(e,Array.isArray(l)?l:[l],Array.isArray(s)?s:[s])||r}else e.push(l),r=!0;else{const d=String(l);s&&s.nodeType===3&&s.data===d?e.push(s):e.push(document.createTextNode(d))}}return r}function pi(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function _t(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let o=!1;for(let a=t.length-1;a>=0;a--){const l=t[a];if(r!==l){const s=l.parentNode===e;!o&&!a?s?e.replaceChild(r,l):e.insertBefore(r,n):s&&l.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}function ga(){return ie.getNextContextId()}const ha=!1,ma="http://www.w3.org/2000/svg";function pa(e,t=!1){return t?document.createElementNS(ma,e):document.createElement(e)}function ba(e,t){const n=oe(e);return oe(()=>{const i=n();switch(typeof i){case"function":return pe(()=>i(t));case"string":const r=ta.has(i),o=ie.context?da():pa(i,r);return ei(o,t,r),o}})}function ya(e){const[,t]=Vt(e,["component"]);return ba(()=>e.component,t)}function rr(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function i(r,o){if(n)return!(n=!1);const a={to:r,options:o,defaultPrevented:!1,preventDefault:()=>a.defaultPrevented=!0};for(const l of e)l.listener({...a,from:l.location,retry:s=>{s&&(n=!0),l.navigate(r,{...o,resolve:!1})}});return!a.defaultPrevented}return{subscribe:t,confirm:i}}let Mn;function ti(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Mn=window.history.state._depth}ti();function va(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Oa(e,t){let n=!1;return()=>{const i=Mn;ti();const r=i==null?null:Mn-i;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const wa=/^(?:[a-z0-9]+:)?\/\//i,_a=/^\/+|(\/)\/+$/g,or="http://sr";function Lt(e,t=!1){const n=e.replace(_a,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function en(e,t,n){if(wa.test(t))return;const i=Lt(e),r=n&&Lt(n);let o="";return!r||t.startsWith("/")?o=i:r.toLowerCase().indexOf(i.toLowerCase())!==0?o=i+r:o=r,(o||"/")+Lt(t,!o)}function $a(e,t){if(e==null)throw new Error(t);return e}function Sa(e,t){return Lt(e).replace(/\/*(\*.*)?$/g,"")+Lt(t)}function ar(e){const t={};return e.searchParams.forEach((n,i)=>{i in t?Array.isArray(t[i])?t[i].push(n):t[i]=[t[i],n]:t[i]=n}),t}function xa(e,t,n){const[i,r]=e.split("/*",2),o=i.split("/").filter(Boolean),a=o.length;return l=>{const s=l.split("/").filter(Boolean),c=s.length-a;if(c<0||c>0&&r===void 0&&!t)return null;const d={path:a?"":"/",params:{}},u=h=>n===void 0?void 0:n[h];for(let h=0;h<a;h++){const m=o[h],_=m[0]===":",w=_?s[h]:s[h].toLowerCase(),Q=_?m.slice(1):m.toLowerCase();if(_&&Pn(w,u(Q)))d.params[Q]=w;else if(_||!Pn(w,Q))return null;d.path+=`/${w}`}if(r){const h=c?s.slice(-c).join("/"):"";if(Pn(h,u(r)))d.params[r]=h;else return null}return d}}function Pn(e,t){const n=i=>i===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Ca(e){const[t,n]=e.pattern.split("/*",2),i=t.split("/").filter(Boolean);return i.reduce((r,o)=>r+(o.startsWith(":")?2:3),i.length-(n===void 0?0:1))}function lr(e){const t=new Map,n=Ki();return new Proxy({},{get(i,r){return t.has(r)||Zn(n,()=>t.set(r,oe(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function sr(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),i=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(i);)r.push(n+=t[1]),i=i.slice(t[0].length);return sr(i).reduce((o,a)=>[...o,...r.map(l=>l+a)],[])}const Pa=100,cr=Ct(),dr=Ct(),ur=()=>$a(Pt(cr),"<A> and 'use' router primitives can be only used inside a Route."),fr=()=>ur().navigatorFactory(),du=()=>ur().params;function ka(e,t=""){const{component:n,preload:i,load:r,children:o,info:a}=e,l=!o||Array.isArray(o)&&!o.length,s={key:e,component:n,preload:i||r,info:a};return gr(e.path).reduce((c,d)=>{for(const u of sr(d)){const h=Sa(t,u);let m=l?h:h.split("/*",1)[0];m=m.split("/").map(_=>_.startsWith(":")||_.startsWith("*")?_:encodeURIComponent(_)).join("/"),c.push({...s,originalPath:d,pattern:m,matcher:xa(m,!l,e.matchFilters)})}return c},[])}function Ea(e,t=0){return{routes:e,score:Ca(e[e.length-1])*1e4-t,matcher(n){const i=[];for(let r=e.length-1;r>=0;r--){const o=e[r],a=o.matcher(n);if(!a)return null;i.unshift({...a,route:o})}return i}}}function gr(e){return Array.isArray(e)?e:[e]}function hr(e,t="",n=[],i=[]){const r=gr(e);for(let o=0,a=r.length;o<a;o++){const l=r[o];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const s=ka(l,t);for(const c of s){n.push(c);const d=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!d)hr(l.children,c.pattern,n,i);else{const u=Ea([...n],i.length);i.push(u)}n.pop()}}}return n.length?i:i.sort((o,a)=>a.score-o.score)}function kn(e,t){for(let n=0,i=e.length;n<i;n++){const r=e[n].matcher(t);if(r)return r}return[]}function za(e,t,n){const i=new URL(or),r=oe(d=>{const u=e();try{return new URL(u,i)}catch{return console.error(`Invalid path ${u}`),d}},i,{equals:(d,u)=>d.href===u.href}),o=oe(()=>r().pathname),a=oe(()=>r().search,!0),l=oe(()=>r().hash),s=()=>"",c=Ue(a,()=>ar(r()));return{get pathname(){return o()},get search(){return a()},get hash(){return l()},get state(){return t()},get key(){return s()},query:n?n(c):lr(c)}}let bt;function Ra(){return bt}function Ta(e,t,n,i={}){const{signal:[r,o],utils:a={}}=e,l=a.parsePath||(f=>f),s=a.renderPath||(f=>f),c=a.beforeLeave||rr(),d=en("",i.base||"");if(d===void 0)throw new Error(`${d} is not a valid base path`);d&&!r().value&&o({value:d,replace:!0,scroll:!1});const[u,h]=X(!1);let m;const _=(f,g)=>{g.value===w()&&g.state===p()||(m===void 0&&h(!0),bt=f,m=g,Lo(()=>{m===g&&(Q(m.value),v(m.state),$[1](O=>O.filter(T=>T.pending)))}).finally(()=>{m===g&&Ce(()=>{bt=void 0,f==="navigate"&&R(m),h(!1),m=void 0})}))},[w,Q]=X(r().value),[p,v]=X(r().state),z=za(w,p,a.queryWrapper),E=[],$=X([]),F=oe(()=>typeof i.transformUrl=="function"?kn(t(),i.transformUrl(z.pathname)):kn(t(),z.pathname)),A=()=>{const f=F(),g={};for(let O=0;O<f.length;O++)Object.assign(g,f[O].params);return g},S=a.paramsWrapper?a.paramsWrapper(A,t):lr(A),x={pattern:d,path:()=>d,outlet:()=>null,resolvePath(f){return en(d,f)}};return te(Ue(r,f=>_("native",f),{defer:!0})),{base:x,location:z,params:S,isRouting:u,renderPath:s,parsePath:l,navigatorFactory:L,matches:F,beforeLeave:c,preloadRoute:j,singleFlight:i.singleFlight===void 0?!0:i.singleFlight,submissions:$};function P(f,g,O){pe(()=>{if(typeof g=="number"){g&&(a.go?a.go(g):console.warn("Router integration does not support relative routing"));return}const T=!g||g[0]==="?",{replace:C,resolve:I,scroll:G,state:k}={replace:!1,resolve:!T,scroll:!0,...O},U=I?f.resolvePath(g):en(T&&z.pathname||"",g);if(U===void 0)throw new Error(`Path '${g}' is not a routable path`);if(E.length>=Pa)throw new Error("Too many redirects");const H=w();(U!==H||k!==p())&&(ha||c.confirm(U,O)&&(E.push({value:H,replace:C,scroll:G,state:p()}),_("navigate",{value:U,state:k})))})}function L(f){return f=f||Pt(dr)||x,(g,O)=>P(f,g,O)}function R(f){const g=E[0];g&&(o({...f,replace:g.replace,scroll:g.scroll}),E.length=0)}function j(f,g){const O=kn(t(),f.pathname),T=bt;bt="preload";for(let C in O){const{route:I,params:G}=O[C];I.component&&I.component.preload&&I.component.preload();const{preload:k}=I;g&&k&&Zn(n(),()=>k({params:G,location:{pathname:f.pathname,search:f.search,hash:f.hash,query:ar(f),state:null,key:""},intent:"preload"}))}bt=T}}function Aa(e,t,n,i){const{base:r,location:o,params:a}=e,{pattern:l,component:s,preload:c}=i().route,d=oe(()=>i().path);s&&s.preload&&s.preload();const u=c?c({params:a,location:o,intent:bt||"initial"}):void 0;return{parent:t,pattern:l,path:d,outlet:()=>s?b(s,{params:a,location:o,data:u,get children(){return n()}}):n(),resolvePath(m){return en(r.path(),m,d())}}}const Da=e=>t=>{const{base:n}=t,i=vn(()=>t.children),r=oe(()=>hr(i(),t.base||""));let o;const a=Ta(e,r,()=>o,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(a),b(cr.Provider,{value:a,get children(){return b(Qa,{routerState:a,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[Ee(()=>(o=Ki())&&null),b(Fa,{routerState:a,get branches(){return r()}})]}})}})};function Qa(e){const t=e.routerState.location,n=e.routerState.params,i=oe(()=>e.preload&&pe(()=>{e.preload({params:n,location:t,intent:Ra()||"initial"})}));return b(Y,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>b(r,{params:n,location:t,get data(){return i()},get children(){return e.children}})})}function Fa(e){const t=[];let n;const i=oe(Ue(e.routerState.matches,(r,o,a)=>{let l=o&&r.length===o.length;const s=[];for(let c=0,d=r.length;c<d;c++){const u=o&&o[c],h=r[c];a&&u&&h.route.key===u.route.key?s[c]=a[c]:(l=!1,t[c]&&t[c](),It(m=>{t[c]=m,s[c]=Aa(e.routerState,s[c-1]||e.routerState.base,bi(()=>i()[c+1]),()=>e.routerState.matches()[c])}))}return t.splice(r.length).forEach(c=>c()),a&&l?a:(n=s[0],s)}));return bi(()=>i()&&n)()}const bi=e=>()=>b(Y,{get when(){return e()},keyed:!0,children:t=>b(dr.Provider,{value:t,get children(){return t.outlet()}})}),Bt=e=>{const t=vn(()=>e.children);return ct(e,{get children(){return t()}})};function Ia([e,t],n,i){return[e,i?r=>t(i(r)):t]}function La(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,i=Ia(X(n(e.get()),{equals:(r,o)=>r.value===o.value&&r.state===o.state}),void 0,r=>(!t&&e.set(r),ie.registry&&!ie.done&&(ie.done=!0),r));return e.init&&Qe(e.init((r=e.get())=>{t=!0,i[1](n(r)),t=!1})),Da({signal:i,create:e.create,utils:e.utils})}function Na(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Ma(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Ua=new Map;function ja(e=!0,t=!1,n="/_server",i){return r=>{const o=r.base.path(),a=r.navigatorFactory(r.base);let l,s;function c(w){return w.namespaceURI==="http://www.w3.org/2000/svg"}function d(w){if(w.defaultPrevented||w.button!==0||w.metaKey||w.altKey||w.ctrlKey||w.shiftKey)return;const Q=w.composedPath().find(F=>F instanceof Node&&F.nodeName.toUpperCase()==="A");if(!Q||t&&!Q.hasAttribute("link"))return;const p=c(Q),v=p?Q.href.baseVal:Q.href;if((p?Q.target.baseVal:Q.target)||!v&&!Q.hasAttribute("state"))return;const E=(Q.getAttribute("rel")||"").split(/\s+/);if(Q.hasAttribute("download")||E&&E.includes("external"))return;const $=p?new URL(v,document.baseURI):new URL(v);if(!($.origin!==window.location.origin||o&&$.pathname&&!$.pathname.toLowerCase().startsWith(o.toLowerCase())))return[Q,$]}function u(w){const Q=d(w);if(!Q)return;const[p,v]=Q,z=r.parsePath(v.pathname+v.search+v.hash),E=p.getAttribute("state");w.preventDefault(),a(z,{resolve:!1,replace:p.hasAttribute("replace"),scroll:!p.hasAttribute("noscroll"),state:E?JSON.parse(E):void 0})}function h(w){const Q=d(w);if(!Q)return;const[p,v]=Q;r.preloadRoute(v,p.getAttribute("preload")!=="false")}function m(w){clearTimeout(l);const Q=d(w);if(!Q)return s=null;const[p,v]=Q;s!==p&&(l=setTimeout(()=>{r.preloadRoute(v,p.getAttribute("preload")!=="false"),s=p},20))}function _(w){if(w.defaultPrevented)return;let Q=w.submitter&&w.submitter.hasAttribute("formaction")?w.submitter.getAttribute("formaction"):w.target.getAttribute("action");if(!Q)return;if(!Q.startsWith("https://action/")){const v=new URL(Q,or);if(Q=r.parsePath(v.pathname+v.search),!Q.startsWith(n))return}if(w.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const p=Ua.get(Q);if(p){w.preventDefault();const v=new FormData(w.target,w.submitter);p.call({r,f:w.target},w.target.enctype==="multipart/form-data"?v:new URLSearchParams(v))}}xe(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mousemove",m,{passive:!0}),document.addEventListener("focusin",h,{passive:!0}),document.addEventListener("touchstart",h,{passive:!0})),document.addEventListener("submit",_),Qe(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mousemove",m),document.removeEventListener("focusin",h),document.removeEventListener("touchstart",h)),document.removeEventListener("submit",_)})}}function Va(e){const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}function Wa(e){const t=()=>window.location.hash.slice(1),n=rr();return La({get:t,set({value:i,replace:r,scroll:o,state:a}){r?window.history.replaceState(va(a),"","#"+i):window.history.pushState(a,"","#"+i);const l=i.indexOf("#"),s=l>=0?i.slice(l+1):"";Ma(s,o),ti()},init:i=>Na(window,"hashchange",Oa(i,r=>!n.confirm(r&&r<0?r:t()))),create:ja(e.preload,e.explicitLinks,e.actionBase),utils:{go:i=>window.history.go(i),renderPath:i=>`#${i}`,parsePath:Va,beforeLeave:n}})(e)}const Xa="/dev/editor/assets/logo-Db7mqqtV.png";var Ga=D('<img alt="Althread logo">');const Ba=e=>(()=>{var t=Ga();return t.style.setProperty("height","42px"),re(t,"src",Xa),ei(t,e,!1,!1),t})();var Ya=D('<div class=confirmation-dialog-overlay role=button tabindex=-1><div class=confirmation-dialog role=dialog aria-modal=true><div class=confirmation-dialog-header><i class="codicon codicon-warning"></i></div><div class=confirmation-dialog-body><br><span class=confirmation-dialog-file-name></span></div><div class=confirmation-dialog-actions><button type=button class=button-secondary><i class="codicon codicon-close"></i>Cancel</button><button type=button class=button-primary><i class="codicon codicon-check"></i>Replace'),qa=D("<span class=confirmation-dialog-file-name>"),yi=D("<br>"),Ha=D("<div style=max-height:120px;overflow-y:auto;font-size:12px;color:#999;>"),Za=D('<div class=confirmation-dialog-overlay role=button tabindex=-1><div class=confirmation-dialog role=dialog aria-modal=true><div class=confirmation-dialog-header><i class="codicon codicon-trash"></i>Delete </div><div class=confirmation-dialog-body></div><div class=confirmation-dialog-actions><button type=button class=button-secondary><i class="codicon codicon-close"></i>Cancel</button><button type=button class=button-destructive><i class="codicon codicon-trash"></i>Delete'),Ka=D("<div>• <span class=confirmation-dialog-file-name>");const Ja=e=>(ue(()=>{if(e.isOpen){const t=n=>{n.key==="Escape"&&e.onCancel()};window.addEventListener("keydown",t),Qe(()=>window.removeEventListener("keydown",t))}}),b(Y,{get when(){return e.isOpen},get children(){var t=Ya(),n=t.firstChild,i=n.firstChild;i.firstChild;var r=i.nextSibling,o=r.firstChild,a=o.nextSibling,l=r.nextSibling,s=l.firstChild,c=s.nextSibling;return t.$$keydown=d=>{d.key==="Escape"&&e.onCancel()},t.$$click=d=>{d.target===d.currentTarget&&e.onCancel()},y(i,()=>e.title,null),y(r,()=>e.message,o),y(a,()=>e.fileName),Ie(s,"click",e.onCancel,!0),Ie(c,"click",e.onConfirm,!0),t}})),el=e=>{ue(()=>{if(e.isOpen){const n=i=>{i.key==="Escape"&&e.onCancel()};window.addEventListener("keydown",n),Qe(()=>window.removeEventListener("keydown",n))}});const t=()=>{const n=e.paths.length;return n===1?["Are you sure you want to delete"," ",(()=>{var i=qa();return y(i,()=>e.paths[0]),i})(),"?"]:`Are you sure you want to delete ${n} items?`};return b(Y,{get when(){return e.isOpen},get children(){var n=Za(),i=n.firstChild,r=i.firstChild,o=r.firstChild;o.nextSibling;var a=r.nextSibling,l=a.nextSibling,s=l.firstChild,c=s.nextSibling;return n.$$keydown=d=>{d.key==="Escape"&&e.onCancel()},n.$$click=d=>{d.target===d.currentTarget&&e.onCancel()},y(r,()=>e.paths.length===1?"Item":"Items",null),y(a,t,null),y(a,b(Y,{get when(){return e.paths.length>1},get children(){return[yi(),yi(),(()=>{var d=Ha();return y(d,b(Oe,{get each(){return e.paths},children:u=>(()=>{var h=Ka(),m=h.firstChild,_=m.nextSibling;return y(_,u),h})()})),d})()]}}),null),Ie(s,"click",e.onCancel,!0),Ie(c,"click",e.onConfirm,!0),n}})};xe(["click","keydown"]);var tl=D('<div class=confirmation-dialog-overlay role=button tabindex=-1><div class=confirmation-dialog role=dialog aria-modal=true><div class=confirmation-dialog-header><i class="codicon codicon-file-code"></i></div><div class=confirmation-dialog-body><br><br><div style=font-size:12px;color:#858585;></div></div><div class=confirmation-dialog-actions><button type=button class=button-secondary><i class="codicon codicon-close"></i>Cancel</button><button type=button class=button-secondary><i class="codicon codicon-file"></i></button><button type=button class=button-primary><i class="codicon codicon-new-file">');const vi=e=>(ue(()=>{if(e.isOpen){const t=n=>{n.key==="Escape"&&e.onCancel()};window.addEventListener("keydown",t),Qe(()=>window.removeEventListener("keydown",t))}}),b(Y,{get when(){return e.isOpen},get children(){var t=tl(),n=t.firstChild,i=n.firstChild;i.firstChild;var r=i.nextSibling,o=r.firstChild,a=o.nextSibling,l=a.nextSibling,s=r.nextSibling,c=s.firstChild,d=c.nextSibling;d.firstChild;var u=d.nextSibling;return u.firstChild,t.$$keydown=h=>{h.key==="Escape"&&e.onCancel()},t.$$click=h=>{h.target===h.currentTarget&&e.onCancel()},y(i,()=>e.title||"Load Example",null),y(r,()=>e.message||"Where would you like to load the example code?",o),y(l,()=>e.detail||"Choose to replace the current file content or create a new file tab."),Ie(c,"click",e.onCancel,!0),Ie(d,"click",e.onLoadInCurrent,!0),y(d,()=>e.currentLabel||"Current File",null),Ie(u,"click",e.onLoadInNew,!0),y(u,()=>e.newLabel||"New File",null),t}}));xe(["click","keydown"]);function nl(e,t){const n=new At,i=o=>{t()?.dispatch({effects:n.reconfigure(o)})};return ue(Ue([t,typeof e=="function"?e:()=>e],([o,a])=>{o&&a&&(n.get(o.state)?i(a):o.dispatch({effects:jt.appendConfig.of(n.of(a))}))},{defer:!0})),i}function il(e){const[t,n]=X(),[i,r]=X();function o(l){return nl(l,i)}const a=vt.updateListener.of(l=>e?.onModelViewUpdate?.(l));return o(a),ue(Ue(t,l=>{const s=Yn.create({doc:e?.value??""}),c=new vt({state:s,parent:l,dispatch:(d,u)=>{if(e?.onTransactionDispatched&&e.onTransactionDispatched(d,u),c.update([d]),d.docChanged){const m=d.state.doc.toString();e?.onValueChange?.(m)}}});xt(()=>r(c)),Qe(()=>{i()?.destroy(),r(void 0)})})),ue(Ue(i,l=>{const s=l?.state.doc.toString();s!==e?.value&&l&&l.dispatch({changes:{from:0,to:s?.length,insert:e?.value??""}})},{defer:!0})),{editorView:i,ref:n,createExtension:o}}const rl={dark:{text:"#abb2bf",keyword:"#c678dd",string:"#98c379",number:"#d19a66",comment:"#5c6370",typeName:"#e5c07b",functionName:"#61afef",property:"#e06c75",namespace:"#61afef"},light:{text:"#2f3441",keyword:"#8b38c9",string:"#2f7d32",number:"#b65c1b",comment:"#8b94a7",typeName:"#9f6a00",functionName:"#0f6bbd",property:"#bc4b63",namespace:"#0f6bbd"}},ol=e=>{const t=rl[e];return jr.define([{tag:W.content,color:t.text},{tag:[W.keyword,W.controlKeyword,W.definitionKeyword,W.operatorKeyword,W.modifier],color:t.keyword},{tag:[W.moduleKeyword],color:t.keyword,fontWeight:"bold"},{tag:[W.special(W.keyword)],color:t.keyword,fontStyle:"italic"},{tag:[W.string,W.special(W.string)],color:t.string},{tag:[W.number,W.bool,W.null],color:t.number},{tag:W.lineComment,color:t.comment,fontStyle:"italic"},{tag:W.blockComment,color:t.comment,fontStyle:"italic"},{tag:[W.className,W.typeName],color:t.typeName},{tag:W.variableName,color:t.text},{tag:W.function(W.variableName),color:t.functionName},{tag:W.propertyName,color:t.property},{tag:W.namespace,color:t.namespace},{tag:[W.separator,W.punctuation],color:t.text},{tag:W.derefOperator,color:t.text}])},Un=e=>Ur(ol(e),{fallback:!0});Un("dark");const al=Vr({"AtomicStatement/atomic AtomicStatement/@":W.modifier,"WhileStatement/while WaitStatement/await IfStatement/if IfStatement/else ReceiveExpression/receive SendExpression/send RunExpression/run ForStatement/for LoopStatement/loop ForStatement/in ReturnStatement/return BreakLoopStatement/break BreakLoopStatement/continue UnaryExpression/void":W.controlKeyword,"ImportItem/as":W.operatorKeyword,"VariableDeclaration/let VariableDeclaration/const SharedDeclaration/let SharedDeclaration/const ChannelDeclarationStatement/channel":W.definitionKeyword,"LtlUnaryExpression/eventually LtlUnaryExpression/always LtlBinaryExpression/until":W.special(W.keyword),"LtlIfExpression/if LtlIfExpression/else LtlForExpression/for LtlForExpression/in":W.special(W.keyword),"MainBlock/main ProgramBlock/program GlobalBlock/shared ImportBlock/import FunctionBlock/fn ConditionBlock/Condition/always ConditionBlock/Condition/check":W.moduleKeyword,PrivateDirective:W.moduleKeyword,"PrivateDirective/private":W.moduleKeyword,"FunctionBlock/FnName":W.function(W.definition(W.variableName)),"CallExpression/FnName":W.function(W.variableName),FnName:W.function(W.variableName),"RunExpression/ProgName":W.function(W.variableName),ProgName:W.function(W.variableName),"MemberExpression > identifier:first-child":W.namespace,"CallExpression/MemberExpression > identifier:last-child":W.function(W.variableName),"MemberExpression > identifier:last-child":W.propertyName,"MemberExpression/object":W.namespace,"CallExpression/MemberExpression/property":W.function(W.variableName),"MemberExpression/property":W.propertyName,"ImportBlock/as":W.operatorKeyword,"ImportBlock/ImportList/ImportItem/ImportPath":W.namespace,"ImportBlock/ImportList/ImportItem/ImportAlias":W.namespace,ImportPath:W.namespace,ImportAlias:W.namespace,ImportSlash:W.separator,TemplateString:W.special(W.string),super:W.atom,BooleanLiteral:W.bool,this:W.self,null:W.null,Star:W.modifier,TypeToken:W.typeName,"Variable/self":W.self,LocalVariableName:W.variableName,SharedVariableName:W.propertyName,ProgName:W.className,UpdateOp:W.updateOperator,LineComment:W.lineComment,BlockComment:W.blockComment,Number:W.number,String:W.string,ArithOp:W.arithmeticOperator,LogicOp:W.logicOperator,BitOp:W.bitwiseOperator,CompareOp:W.compareOperator,RegExp:W.regexp,Equals:W.definitionOperator,Arrow:W.function(W.punctuation),"( )":W.paren,"[ ]":W.squareBracket,"{ }":W.brace,"InterpolationStart InterpolationEnd":W.special(W.brace),".":W.derefOperator,", ;":W.separator}),ll={__proto__:null,shared:10,let:16,const:18,self:44,true:46,false:46,null:48,void:54,typeof:56,delete:58,private:96,main:98,channel:106,while:110,for:114,in:116,if:124,else:126,run:132,loop:138,atomic:142,send:150,await:154,seq:158,first:160,receive:166,return:182,break:186,continue:188,program:192,always:198,check:200,until:210,eventually:214,fn:224,import:230,as:242},sl=Wr.deserialize({version:14,states:"HhQ`QPOOPzOPOOO!PQPO'#EaOOQO'#Fa'#FaOOQO'#E}'#E}Q`QPOOO!UQPO'#C`O!ZQPO'#D]O!`QPO'#D[O!eQPO'#D[O!pQPO'#E_OOQO'#Eb'#EbO!pQPO'#EoO!xQPO'#ErP!}O`O'#C^POOO)CAO)CAOO$dQPO'#EeOOQO,5:{,5:{OOQO-E8{-E8{O$kQPO,58zOOQO,59w,59wO&WQQO'#D`OOQO,59v,59vO!`QPO,59vO!pQPO,5:yO!pQPO,5;ZOOQO'#Ff'#FfOOQO'#Dq'#DqO&_QPO,5:yOOQO'#DT'#DTO&dQPO,5;ZO!pQPO,5;^POOO'#E|'#E|P&iO`O,58xPOOO,58x,58xO&tQQO'#CfO'xQQO'#CqOOQO'#Cp'#CpO#YQPO'#CvO(|QPO'#CvO#YQPO'#C|O*fQQO'#EfO*sQPO'#DTO+|QQO'#FeO*{QQO'#FeO,TQPO'#DSOOQO'#Fe'#FeO,YQPO'#FUOOQO'#Ef'#EfO,eQPO,5;POOQO,5;P,5;PO#YQPO'#EjO#YQPO'#ElO,lQPO'#EmOOQO'#FO'#FOO,qQPO1G.fO,|QPO'#CcOOQO1G.f1G.fO-RQSO'#CfO-^QSO'#CqO(|QPO'#C|O-iQPO'#DSO-lQPO'#DUO-qQPO'#DnO$vQQO'#DtO-vQPO'#DwO-{QPO'#EUO.QQSO'#EWOOQO'#Fi'#FiOOQO'#FR'#FRO.VQQO,59zOOQO,59z,59zO,lQPO'#DaO.^QPO'#DbO(|QPO'#DdO,lQPO'#DfO(|QPO'#DkO.iQPO'#DoO$vQQO'#DrO.^QPO'#DxO.tQPO'#DzO/RQPO'#EVO/WQPO'#EYO/_QPO'#E[OOQO1G/b1G/bO/jQPO1G0eO/oQPO1G0uO/tQSO1G0eO/tQSO1G0uO/|QPO'#EwO0[QPO'#EvO0gQPO'#EuO0oQPO1G0xPOOO-E8z-E8zPOOO1G.d1G.dOOQO,59b,59bOOQO,5;U,5;UO)zQQO,59hO0tQPO,5;YO(|QPO,59iO(|QPO,59iO(|QPO,59iO!pQPO,59pO1PQWO'#DWOOQO,59n,59nO#YQPO,5;ROOQO,5;p,5;pOOQO-E9S-E9SOOQO1G0k1G0kO1ZQPO,5;WOOQO'#Cq'#CqO1fQPO,5;XOOQO-E8|-E8|OOQO7+$Q7+$QOOQO'#Cf'#CfO1kQPO,58}O2XQQO,59hOOQO,5:Y,5:YOOQO,5:`,5:`OOQO,5:c,5:cOOQO,5:p,5:pO(|QPO,5:rOOQO-E9P-E9POOQO1G/f1G/fO2`QPO,59{O2kQPO'#FjO2yQPO,59|O3RQQO,5:OO3YQPO,5:QO3RQQO,5:VO-iQPO,5:ZO3_QPO'#DqO,TQPO,5:ZOOQO,5:^,5:^O,TQPO,5:dO3gQQO'#EPO3qQQO'#EPO3yQPO'#EQO4XQPO'#D|OOQO,5:f,5:fOOQO,5:q,5:qO4^QQO,5:tOOQO,5:t,5:tOOQO,5:v,5:vO4eQPO,5:vO/tQSO7+&PO/tQSO7+&aO4jQPO'#FdO4rQPO'#ChO5WQPO7+&PO5]QPO7+&aO!pQPO'#FVO5bQPO,5;cO!pQPO,5;bO5pQPO,5;aO5{QPO,5;aOOQO7+&d7+&dOOQO1G/S1G/SOOQO1G0t1G0tOOQO1G/T1G/TO7OQQO1G/TO7VQQO1G/TOOQO1G/[1G/[O7^QQO'#FgO(|QPO'#FgO7hQPO,59rOOQO1G0m1G0mO#YQPO1G0rO(|QPO1G0sOOQO1G.i1G.iO(|QPO1G.iO7mQSO1G.iO7rQQO1G0^OOQO1G/g1G/gO(|QPO1G/gO7mQSO1G/gO.^QPO,5<UO/tQSO1G/hO7yQPO1G/hOOQO1G/j1G/jO(|QPO1G/lO8dQQO1G/qOOQO1G/u1G/uOOQO1G0O1G0OOOQO,5:k,5:kO$vQQO,5:kO9pQPO'#FnO9{QQO,5:lO:TQPO,5:lO:YQPO,5:hOOQO1G0`1G0`OOQO1G0b1G0bO:dQPO<<IkO:iQPO<<I{O7mQSO'#FPO:nQPO,5<OO/tQSO,59SO!`QPO<<IkO:vQSO<<I{OOQO,5;q,5;qOOQO-E9T-E9TOOQO'#Ez'#EzOOQO1G0|1G0|OOQO,5;r,5;rO:{QPO1G0{OOQO-E9U-E9UO;WQWO'#FQO;_QPO,5<RO;gQQO,5<ROOQO1G/^1G/^O;qQPO7+&^O;|QQO'#DjOOQO'#Di'#DiO<TQPO7+&_O<YQQO7+$TO<aQPO7+$TO<iQQO7+%RO<pQPO7+%ROOQO1G1p1G1pO<xQPO7+%SO/tQSO7+%SO!`QPO7+%WO!`QPO7+%]OOQO1G0V1G0VOOQO'#ES'#ESOOQO'#Fo'#FoO<}QPO,5<YO$vQQO1G0WO=VQQO1G0WOOQO'#FS'#FSO=_QPO1G0SOOQO1G0S1G0SO!`QPOAN?VO:vQSOAN?gOOQO,5;k,5;kOOQO-E8}-E8}O=iQPO1G.nOOQOAN?VAN?VO7mQSO'#EqO!`QPOAN?gP!pQPO'#FWO=nQQO,5;lO(|QPO,5;lOOQO-E9O-E9OO=xQPO1G1mO>QQPO<<IxO(|QPO,5:UO#YQPO<<IyOOQO<<Go<<GoO(|QPO<<GoOOQO<<Hm<<HmO(|QPO<<HmO>iQPO<<HnO>wQPO<<HnOOQO<<Hr<<HrOOQO<<Hw<<HwO9pQPO'#FTO>|QPO1G1tOOQO1G1t1G1tOOQO7+%r7+%rO$vQQO7+%rOOQO-E9Q-E9QOOQO7+%n7+%nOOQOG24qG24qO!`QPOG25ROOQO7+$Y7+$YOOQO,5;],5;]OOQOG25RG25RO?UQQO1G1WO?`QPOAN?dO?eQQO1G/pO?lQPOAN?eO?wQQOAN=ZO@OQQOAN>XO@VQPOAN>YO.^QPOAN>YO@[QPOAN>YOOQO,5;o,5;oOOQO-E9R-E9ROOQO7+'`7+'`OOQO<<I^<<I^OOQOLD*mLD*mO#YQPOG25OOOQOG25PG25POOQOG22uG22uOOQOG23sG23sOOQOG23tG23tO@jQPOG23tO.^QPOG23tO@oQPOLD*jOOQOLD)`LD)`O@zQPOLD)`OAPQPO1G/qOOQO!$'NU!$'NUOOQO!$'Lz!$'LzO3RQQO,5:VO(|QPO'#DkOAvQQO'#DrOAvQQO'#DtOAvQQO,5:kOCWQQO'#EPOCbQQO'#EPO.tQPO'#Dz",stateData:"Cs~O#}OS$OOSPOS$PPQ~OTUO!RWO#SYO#VZO#WZO#d[O#g]O$[VO~O$P^O~OU`O~OUcO~O!QdO~OUeO~O!RgO#ShO#diO~O$UjO$VjO~O#hoO~O$QpO$RpO$SrO~O^xOb!OOc!OOfuOg!OOh!OOi!OOkwOlwOmwOnvOowO!Z!VO!`!UO#V!TO#_!TO$UtO$VsO~O}!SO~P#YOW!YOX!YO}!ZO~OUeOW!jOX!jO^!^OfuO!V!kO!X!lO!Z!mO!`!nO!d!oO!g!pO!i!bO!j!bO!m!qO!o!rO!}!tO#P!uO#Q!uO$U!]O$V![O~O}!iO~P$vO^!yO~O^!zO~O$QpO$RpO$S#QO~O^$YXoYXrYXsYXtYXuYXy$YX|YX#[YX#]YX`YXUYX!wYX_YX}YX$aYX~O^$YXoeXreXseXteXueXy$YX|eX#[eX#]eX`eXUeX!weX_eX}eX$aeX~O^!^Ob!OOc!OOfuOg!OOh!OOi!OOkwOlwOmwOnwOowO$UtO$VsO~Oo#WOr#VOs#VOt#VOu#XO#[#YX#]#YX`#YX~O|#YXU#YX}#YX~P)zOy#YO^wX~Oy#YOo$XXr$XXs$XXt$XXu$XX|$XX#[$XX#]$XX`$XXU$XX!w$XX_$XX}$XX$a$XX~O^#ZO~P*{O^#ZO~O|#^O#[#]O#]#]O~O}#`O~P#YO$U#bO~OW!YOX!YO}#eO~O$V#fO~O^$YXy$YX!{YX~O^$YXy$YX!{eX~O^#ZOy#YO~O|#iO~O|#kO~O|#lO~O!{#mO~O}#oO~P$vOfuO$U#bO$V#fO~O^!^O$UjO$VjO~O!q$OO!r$OO!u#}O~P(|O|$QO~O|$SO~P(|O|$TO$UjO$VjO~O^$VO~O^$WO~O]$YO`$WP~O#l$]O_#kX#m#kX#o#kX~O#m$_O_#jX#o#jX~O_$`O#o#iX~O#o$bO~O`$dO#[#]O#]#]O~O{$jO`$ZP~P(|OU$mO#[#]O#]#]O~O![$nO~OZ$qOa$pO|$oO~Oo#WOr#VOs#VOt#VOu#XO~O`$cO~P1vOZ$uOa$tO|$sO~Oy$vO^$^X$_$^X|$^X~O^$wO$_$xO~OUeO~P1vO![$zO~Oy#YO^!eX~O|%OO!w%PO~P1vO|%OO!w%PO~O^%QOfuO$U#bO$V#fO~OU%TO~O|%UO~P1vO|%VO~O_%YO`$WX~O^%[O_[X`[Xa[X|[XU[X~O`%]O~O`%^O~O#l$]O_#ka#m#ka#o#ka~O$UjO$VjO#o#ia~O_%dO#o#ia~Or#VOs#VOt#VOuqi|qi#[qi#]qi`qiUqi!wqi_qi}qi$aqi~Ooqi~P6TOo#WO~P6TO_%fO`$ZX~P1vO`%iO~O]$YO~O|!zi~P1vO^%tO~O!a%vO^!_if!_i}!_i$U!_i$V!_i~OU!_iW!_iX!_i!V!_i!X!_i!Z!_i!`!_i!d!_i!g!_i!i!_i!j!_i!m!_i!o!_i!}!_i#P!_i#Q!_i|!_i!w!_i~P8OOb%xOc%xO$U#bO~O!w%{O|!ta~O^%QO~O}&PO!u#}O~P(|O`&QO~O`&RO~O_%YO`$Wa~O$d&WO~O$UjO$VjO#o#ii~O{&[O~P(|O_%fO`$Za~O_%fO`$Za~P1vO}&_O#[#]O#]#]O~O$a&`O~P1vOU&aO~O|&bO~P1vOa&cO|&bO~O|&dO~P1vOa&eO|&dO~O`&fO~O_&jO`&lO~O!w&nO|!ti~O}&pO!u#}O~P(|O`&sO~O_#ta`#ta~P1vO_%fO`$Zi~O!a&wO|#`y#[#`y#]#`y`#`yU#`y}#`y~OfuO$U#bO$V#fO$`&}O~O`'OO~O_&jO`'RO~O_#ti`#ti~P1vOU'UO~OU!^i~P1vO}'VO#[#]O#]#]O~O|'WO~P1vO|'XO~P1vO|'YO~OfuO$U#bO$V#fO$`'[O~O|'^O~O}'aO#[#]O#]#]O~O|'bO~Ob!_ic!_ig!_ih!_ii!_ik!_il!_im!_in!_io!_i!u!_i~P8OOUeOW!jOX!jO^!^OfuO!V!kO!X!lO!Z!mO!`'dO!d!oO!g'eO!i'fO!j'fO!m!qO!o'jO!}!tO#P!uO#Q!uO$U!]O$V![O~O|%OO!w'gO~P1vO|%OO!w'gO~ObyP#l$Pi#lr~",goto:"9}$dPP$eP$hPP$lPP$pP%|PPPPPPP&c'pPPPP)WPPPPP)})WPPPP+R,U-]P.cPPP$h.oPP.s/r/rP/rP/rPP0O0U/rPP/r0YP0f/rP/rPP/r0oP/rP0{PP1P1XP)SP/r/r1aP/rP/rPP$hP$h1mPP1q1t2`PP2`P2`2`2`$hP2l$hPP2r2u2}PP3TP3W3^3d3j3p3z4Q4W4^4d4jPPPPPPPP4pPP4t5Z7Q8pP8s9ZPPP9q9wR_PTROTT!Wc!X#^u`evwx!R!T!U!^!b!h!k!l!n!p!q!r!t#V#W#X#Z#]#m#}$j$m$n$p$t$v$z%P%T%f%{&O&[&`&a&c&e&f&n&}'O'U'['d'e'f'g'jR#g!Y^$X!y!z$V$W$w%[%tQ%o$qQ%q$uQ&S%YR&t&W!h!O`vwx!R!T!U!^!l!n!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%T%f&O&[&`&a&c&e'U'd'jd!ee!b!h!p%P%{&n'e'f'ga#q!k!q#}$v&f&}'O'[#^u`evwx!R!T!U!^!b!h!k!l!n!p!q!r!t#V#W#X#Z#]#m#}$j$m$n$p$t$v$z%P%T%f%{&O&[&`&a&c&e&f&n&}'O'U'['d'e'f'g'jQ#c!VQ#p!jQ#t!mT%y%Q&j!i!O`vwx!R!T!U!^!l!n!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%T%f&O&[&`&a&c&e'U'd'j!h|`vwx!R!T!U!^!l!n!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%T%f&O&[&`&a&c&e'U'd'jg!`e!b!h!o!p%P%{&n'e'f'g!h!O`vwx!R!T!U!^!l!n!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%T%f&O&[&`&a&c&e'U'd'je!de!b!h!p%P%{&n'e'f'gQn[!|}`evwx!R!T!U!^!b!h!l!n!p!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%P%T%f%{&O&[&`&a&c&e&n'U'd'e'f'g'jR!xi!h{`vwx!R!T!U!^!l!n!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%T%f&O&[&`&a&c&e'U'd'jd!_e!b!h!p%P%{&n'e'f'gR#v!oU#[{}!_S$|#v#xR$}#zTXOTQfWd!fe!b!h!p%P%{&n'e'f'gQ!vgQ$y#sQ${#uQ&V%]Q&h%uQ&i%vQ&q&QQ&u&XQ'T&rR'`'ce!fe!b!h!p%P%{&n'e'f'gQ%m$nR%u$zT%l$n$ze!ae!b!h!p%P%{&n'e'f'gQlYQ!whR#x!oe!ce!b!h!p%P%{&n'e'f'gT$P!r'jS$P!r'jT%}%T&OQ#|!rV'i%T&O'je!se!b!h!p%P%{&n'e'f'gTQOTRaQS!P`!RS#Sv!TQ#UxQ#a!UQ$l#]Q%j$mQ&y&aR']'Ue!Q`vx!R!T!U#]$m&a'UQ&X%^R&r&RR#OoQ!}oV%c$`%d&YX!|o$`%d&YR%b$_Qq^R#PqQTORbTQ!XcR#d!XQ%Z$XR&T%ZQ%g$iS&]%g&^R&^%hQ!heR#n!hQ&O%TR&o&OQ&k%zR'Q&kQ!R`R#_!RQ$^!{R%`$^Q$a!}R%e$aTSOTQ$Z!yQ$[!zQ%W$VQ%X$WQ%s$wQ&U%[R&g%t`y`!R!T!U#]$m&a'US#RvwQ#TxQ#h!^Q#s!lQ#u!nQ#{!rQ$R!tQ$e#VQ$f#WQ$g#XQ$i#ZQ$r#mQ%h$jS%k$n$zQ%n$pQ%p$tQ&Z%fQ&v&[Q&x&`Q&z&cQ&{&eQ'c'dV'h%T&O'jSkYhSm[i!|z`evwx!R!T!U!^!b!h!l!n!p!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%P%T%f%{&O&[&`&a&c&e&n'U'd'e'f'g'jW!{o$`%d&YQ#w!oQ$U!uQ$h#YQ%_$]R%a$_R$k#ZS!ge!hS#j!b'fS#y!p'eS%w%P'gQ&m%{R'S&nQ#r!kQ#z!qQ%S#}Q%r$vQ&|&fS'Z&}'OR'_'[Q%R#}R%|%SQ%z%QR'P&j",nodeNames:"⚠ LineComment BlockComment Project GlobalBlock shared { SharedDeclaration let const SharedVariableName : Type TypeToken ( , ) = Number String Variable LocalVariableName self BooleanLiteral null RegExp UnaryExpression void typeof delete LogicOp ArithOp ParenthesizedExpression BinaryExpression ArithOp ArithOp ArithOp CompareOp CallExpression FnName MemberExpression . ArgList ... ; } MainBlock PrivateDirective private main CodeBlock VariableDeclaration ChannelDeclarationStatement channel WhileStatement while ForStatement for in ListExpression RangeExpression IfStatement if else RunStatement RunExpression run ProgName LoopStatement loop AtomicStatement atomic LogicOp SendStatement SendExpression send WaitStatement await WaitingBlock seq first WaitingBlockCase ReceiveExpression receive Literal => CallStatement AssignmentStatement AssignmentExpression UpdateOp ReturnStatement return BreakLoopStatement break continue ProgramBlock program ConditionBlock Condition always check FormulaBlock LtlExpression LtlBinaryExpression LogicOp until LtlUnaryExpression eventually LtlIfExpression LtlForExpression ParenthesizedLtlExpression FunctionBlock fn ReturnType ImportBlock import [ ImportList ImportItem ImportPath ImportSlash as ImportAlias ]",maxTerm:158,nodeProps:[["group",-11,18,19,20,23,24,25,26,32,33,38,40,"Expression"]],skippedNodes:[0,1,2,124],repeatNodeCount:11,tokenData:"Ia~R!PXY$UYZ$gZ[$U]^$gpq$Uqr$lrs$yuv&qvw'Owx'Zxy(|yz)Rz{)W{|)`|})h}!O)m!O!P)}!P!Q+m!Q!R1Z!R![2a![!]4x!]!^4}!^!_5S!_!`5Z!`!a5m!b!c5t!c!}5{!}#O6p#P#Q6u#T#U6z#U#V7o#V#Y6z#Y#Z:m#Z#]6z#]#^=l#^#`6z#`#a>a#a#d6z#d#e?y#e#g6z#g#hBW#h#iE}#i#o6z#o#pIP#p#qIU#q#rI[$f$g$U~$ZS#}~XY$UZ[$Upq$U$f$g$U~$lO$O~f$qPnb!_!`$tS$yOuS~%OWc~OY$yZr$yrs%hs#O$y#O#P%m#P;'S$y;'S;=`&k<%lO$y~%mOc~~%pRO;'S$y;'S;=`%y;=`O$y~&OXc~OY$yZr$yrs%hs#O$y#O#P%m#P;'S$y;'S;=`&k;=`<%l$y<%lO$y~&nP;=`<%l$y[&vPsS!_!`&yW'OO!{W~'RPvw'U~'ZO#[~~'`Wc~OY'ZZw'Zwx%hx#O'Z#O#P'x#P;'S'Z;'S;=`(v<%lO'Z~'{RO;'S'Z;'S;=`(U;=`O'Z~(ZXc~OY'ZZw'Zwx%hx#O'Z#O#P'x#P;'S'Z;'S;=`(v;=`<%l'Z<%lO'Z~(yP;=`<%l'Z~)RO^~~)WO`~[)]PtS!_!`&yn)ePof!_!`&y~)mO_~n)rQof!_!`&y!`!a)xW)}O$dW~*SQy^!O!P*Y!Q![*gd*_P$aS!O!P*b`*gO{`~*lSb~!Q![*g!g!h*x#R#S*g#X#Y*x~*{S{|+X}!O+X!Q![+b#R#S+b~+[Q!Q![+b#R#S+b~+gQb~!Q![+b#R#S+b~+t]#lQrSOY,mZz,mz{/[{!P,m!P!Q0O!Q!_,m!_!`0g!`!},m!}#O-v#O#P.u#P;'S,m;'S;=`/U<%lO,mb,rXibOY,mZ!P,m!P!Q-_!Q!},m!}#O-v#O#P.u#P;'S,m;'S;=`/U<%lO,mb-dUib#Z#[-_#]#^-_#a#b-_#g#h-_#i#j-_#m#n-_b-yVOY-vZ#O-v#O#P.`#P#Q,m#Q;'S-v;'S;=`.o<%lO-vb.cSOY-vZ;'S-v;'S;=`.o<%lO-vb.rP;=`<%l-vb.xSOY,mZ;'S,m;'S;=`/U<%lO,mb/XP;=`<%l,m~/cX$P~ibOY,mZ!P,m!P!Q-_!Q!},m!}#O-v#O#P.u#P;'S,m;'S;=`/U<%lO,m~0TSP~OY0OZ;'S0O;'S;=`0a<%lO0O~0dP;=`<%l0Oj0nX!{WibOY,mZ!P,m!P!Q-_!Q!},m!}#O-v#O#P.u#P;'S,m;'S;=`/U<%lO,m~1`Xb~!O!P1{!Q![2a!g!h*x#R#S2a#U#V2}#X#Y*x#b#c2x#c#d3l#l#m4T~2OQ!Q![2U#R#S2U~2ZQb~!g!h*x#X#Y*x~2fUb~!O!P1{!Q![2a!g!h*x#R#S2a#X#Y*x#b#c2x~2}Ob~~3QR!Q!R3Z!R!S3Z#R#S3Z~3`Sb~!Q!R3Z!R!S3Z#R#S3Z#b#c2x~3oQ!Q!Y3u#R#S3u~3zRb~!Q!Y3u#R#S3u#b#c2x~4WS!Q![4d!c!i4d#R#S4d#T#Z4d~4iTb~!Q![4d!c!i4d#R#S4d#T#Z4d#b#c2x~4}OZ~~5SO|~U5ZO$_QuS^5bQaQ!{W!_!`$t!`!a5hS5mO!wSU5tO$`QuSU5{O$[Q!jS~6QW$V~tu5{!Q![5{!c!}5{#R#S5{#T#o5{$g;'S5{;'S;=`6j<%lO5{~6mP;=`<%l5{~6uO#h~~6zO#o~f7PW$Uftu6z!Q![6z!c!}6z#R#S6z#T#o6z$g;'S6z;'S;=`7i<%lO6zf7lP;=`<%l6zn7tY$Uftu6z!Q![6z!c!}6z#R#S6z#T#c6z#c#d8d#d#o6z$g;'S6z;'S;=`7i<%lO6zn8iY$Uftu6z!Q![6z!c!}6z#R#S6z#T#c6z#c#d9X#d#o6z$g;'S6z;'S;=`7i<%lO6zn9^Y$Uftu6z!Q![6z!c!}6z#R#S6z#T#`6z#`#a9|#a#o6z$g;'S6z;'S;=`7i<%lO6zn:TW]W$Uftu6z!Q![6z!c!}6z#R#S6z#T#o6z$g;'S6z;'S;=`7i<%lO6zn:rY$Uftu6z!Q![6z!c!}6z#R#S6z#T#`6z#`#a;b#a#o6z$g;'S6z;'S;=`7i<%lO6zn;gY$Uftu6z!Q![6z!c!}6z#R#S6z#T#c6z#c#d<V#d#o6z$g;'S6z;'S;=`7i<%lO6zn<[X$Uftu6z!Q![6z!c!}6z#R#S6z#T#U<w#U#o6z$g;'S6z;'S;=`7i<%lO6zn<|Y$Uftu6z!Q![6z!c!}6z#R#S6z#T#h6z#h#i9|#i#o6z$g;'S6z;'S;=`7i<%lO6zn=qY$Uftu6z!Q![6z!c!}6z#R#S6z#T#b6z#b#c<w#c#o6z$g;'S6z;'S;=`7i<%lO6zn>fY$Uftu6z!Q![6z!c!}6z#R#S6z#T#]6z#]#^?U#^#o6z$g;'S6z;'S;=`7i<%lO6zn?ZY$Uftu6z!Q![6z!c!}6z#R#S6z#T#g6z#g#h<w#h#o6z$g;'S6z;'S;=`7i<%lO6zn@OY$Uftu6z!Q![6z!c!}6z#R#S6z#T#f6z#f#g@n#g#o6z$g;'S6z;'S;=`7i<%lO6zn@sY$Uftu6z!Q![6z!c!}6z#R#S6z#T#c6z#c#dAc#d#o6z$g;'S6z;'S;=`7i<%lO6znAhY$Uftu6z!Q![6z!c!}6z#R#S6z#T#V6z#V#W9|#W#o6z$g;'S6z;'S;=`7i<%lO6znB]Y$Uftu6z!Q![6z!c!}6z#R#S6z#T#h6z#h#iB{#i#o6z$g;'S6z;'S;=`7i<%lO6znCQY$Uftu6z!Q![6z!c!}6z#R#S6z#T#f6z#f#gCp#g#o6z$g;'S6z;'S;=`7i<%lO6znCuY$Uftu6z!Q![6z!c!}6z#R#S6z#T#]6z#]#^De#^#o6z$g;'S6z;'S;=`7i<%lO6znDjY$Uftu6z!Q![6z!c!}6z#R#S6z#T#b6z#b#cEY#c#o6z$g;'S6z;'S;=`7i<%lO6znE_Y$Uftu6z!Q![6z!c!}6z#R#S6z#T#Z6z#Z#[9|#[#o6z$g;'S6z;'S;=`7i<%lO6znFSY$Uftu6z!Q![6z!c!}6z#R#S6z#T#i6z#i#jFr#j#o6z$g;'S6z;'S;=`7i<%lO6znFwY$Uftu6z!Q![6z!c!}6z#R#S6z#T#d6z#d#eGg#e#o6z$g;'S6z;'S;=`7i<%lO6znGlY$Uftu6z!Q![6z!c!}6z#R#S6z#T#`6z#`#aH[#a#o6z$g;'S6z;'S;=`7i<%lO6znHaY$Uftu6z!Q![6z!c!}6z#R#S6z#T#X6z#X#Y9|#Y#o6z$g;'S6z;'S;=`7i<%lO6z~IUOU~~IXP#p#q'U~IaO}~",tokenizers:[1,2,3,4,new Xr("j~RQYZXz{^~^O$R~~aP!P!Qd~iO$S~~",25,140)],topRules:{Project:[0,3]},specialized:[{term:144,get:e=>ll[e]||-1}],tokenPrec:1590}),jn=e=>`file:///${e.split("/").map(encodeURIComponent).join("/")}`,En=e=>decodeURIComponent(e.replace(/^file:\/\/\//,""));function cl(e,t){const n=e.slice(0,Math.max(0,Math.min(t,e.length)));return{line:n.split(`
`).length-1,character:n.length-n.lastIndexOf(`
`)-1}}function Ke(e,t){let n=0;for(let r=0;r<t.line;r++){const o=e.indexOf(`
`,n);if(o<0)return e.length;n=o+1}const i=e.indexOf(`
`,n);return Math.min(n+t.character,i<0?e.length:i)}class dl{worker;nextId=0;pending=new Map;documents=new Map;ready;closed=!1;constructor(){this.worker=new Worker(new URL("/dev/editor/assets/language-server.worker-HouAA7e9.js",import.meta.url),{type:"module"}),this.worker.onmessage=t=>{const{id:n,result:i,error:r}=t.data,o=this.pending.get(n);o&&(clearTimeout(o.timer),this.pending.delete(n),r?o.reject(new Error(r.message)):o.resolve(i))},this.worker.onerror=()=>this.dispose(new Error("Althread language worker failed to start")),this.ready=this.send("initialize",{capabilities:{general:{positionEncodings:["utf-16"]},textDocument:{completion:{completionItem:{snippetSupport:!0}}}},rootUri:null}).then(()=>this.notify({jsonrpc:"2.0",method:"initialized"})),this.ready.catch(()=>{})}notify(t){this.closed||this.worker.postMessage(t)}send(t,n){if(this.closed)return Promise.reject(new Error("Language client closed"));const i=this.nextId++;return new Promise((r,o)=>{const a=setTimeout(()=>{this.pending.delete(i),o(new Error(`Language request timed out: ${t}`))},15e3);this.pending.set(i,{resolve:l=>r(l),reject:o,timer:a}),this.worker.postMessage({jsonrpc:"2.0",id:i,method:t,params:n})})}async request(t,n,i){await this.ready;const r=new Set(Object.keys(i).map(jn));for(const o of this.documents.keys())r.has(o)||(this.notify({jsonrpc:"2.0",method:"textDocument/didClose",params:{textDocument:{uri:o}}}),this.documents.delete(o));for(const[o,a]of Object.entries(i)){const l=jn(o),s=this.documents.get(l);if(s?.text===a)continue;const c=(s?.version??0)+1;this.documents.set(l,{text:a,version:c}),s?this.notify({jsonrpc:"2.0",method:"textDocument/didChange",params:{textDocument:{uri:l,version:c},contentChanges:[{text:a}]}}):this.notify({jsonrpc:"2.0",method:"textDocument/didOpen",params:{textDocument:{uri:l,version:c,text:a,languageId:o.endsWith(".alt")?"althread":"plaintext"}}})}return this.send(t,n)}dispose(t=new Error("Language client closed")){if(!this.closed){this.closed=!0,this.worker.terminate();for(const n of this.pending.values())clearTimeout(n.timer),n.reject(t);this.pending.clear()}}}const ul={2:"method",3:"function",6:"variable",7:"class",9:"namespace",14:"keyword",15:"keyword",21:"constant",25:"type"},mr=jt.define(),fl=()=>qn.define({create:()=>null,update(e,t){(t.docChanged||t.selection)&&(e=null);for(const n of t.effects)n.is(mr)&&(e=n.value);return e},provide:e=>qr.from(e)}),tn=jt.define(),gl=()=>qn.define({create:()=>null,update(e,t){t.docChanged&&(e=null);for(const n of t.effects)n.is(tn)&&(e=n.value);return e},provide:e=>Hr.from(e)});function Rt(e,t="cm-lsp-info"){const n=document.createElement("div");return n.className=t,n.textContent=e,n}function hl(e,t){for(const n of[...t].sort((i,r)=>Ke(e,r.range.start)-Ke(e,i.range.start)))e=e.slice(0,Ke(e,n.range.start))+n.newText+e.slice(Ke(e,n.range.end));return e}function ml(e){const t=fl(),n=gl();let i,r=!1;const o=jn(e.filePath),a=p=>({...e.getWorkspace?.(),[e.filePath]:p}),l=(p,v,z)=>r?Promise.reject(new Error("Editor language session closed")):(i??=new dl,i.request(p,v,a(z))),s=(p,v)=>({textDocument:{uri:o},position:cl(p,v)}),c=(p,v)=>!r&&p.state.doc.toString()===v,d=(p,v)=>{if(v.uri===o){const z=Ke(p.state.doc.toString(),v.range.start);p.dispatch({selection:Kr.cursor(z),effects:vt.scrollIntoView(z,{y:"center"})}),p.focus()}else e.onNavigate?.(En(v.uri),v.range.start)},u=(p,v=p.state.selection.main.head)=>{const z=p.state.doc.toString();return l("textDocument/definition",s(z,v),z).then(E=>{E&&c(p,z)&&d(p,E)}).catch(console.warn),!0},h=p=>{p.dispatch({effects:tn.of(null)}),p.focus()},m=p=>{const v=p.state.doc.toString();return l("textDocument/references",{...s(v,p.state.selection.main.head),context:{includeDeclaration:!0}},v).then(z=>{c(p,v)&&p.dispatch({effects:tn.of(()=>{const E=Rt(`${z.length} reference(s)`,"cm-lsp-panel");for(const F of z){const A=document.createElement("button");A.textContent=`${En(F.uri)}:${F.range.start.line+1}:${F.range.start.character+1}`,A.onclick=()=>d(p,F),E.append(A)}const $=document.createElement("button");return $.textContent="Close",$.onclick=()=>h(p),E.append($),{dom:E,top:!1}})})}).catch(console.warn),!0},_=p=>{if(p.state.readOnly)return!1;const v=p.state.doc.toString(),z=s(v,p.state.selection.main.head);return l("textDocument/prepareRename",z,v).then(E=>{!E||!c(p,v)||p.dispatch({effects:tn.of(()=>{const $=document.createElement("form");$.className="cm-lsp-panel";const F=document.createElement("label");F.textContent="Rename symbol: ";const A=document.createElement("input");A.value=E.placeholder,A.required=!0,A.pattern="[a-zA-Z][a-zA-Z0-9_]*",F.append(A),$.append(F);const S=document.createElement("button");S.type="submit",S.textContent="Rename",$.append(S);const x=document.createElement("button");x.type="button",x.textContent="Cancel",x.onclick=()=>h(p),$.append(x);const P=Rt("");return P.setAttribute("role","status"),$.append(P),$.onkeydown=L=>{L.key==="Escape"&&(L.preventDefault(),h(p))},$.onsubmit=L=>{L.preventDefault();const R=a(v);S.disabled=!0,l("textDocument/rename",{...z,newName:A.value},v).then(j=>{if(!c(p,v)||p.state.readOnly)return;if(!j){P.textContent="Cannot rename: invalid name, name conflict, or read-only reference.";return}const f=a(v),g={};for(const[O,T]of Object.entries(j.changes)){const C=En(O);if(R[C]===void 0||R[C]!==f[C]){P.textContent="A file changed. Retry the rename.";return}if(O!==o&&!e.onWorkspaceChange){P.textContent="Cross-file rename is unavailable in this editor.";return}g[C]=hl(R[C],T)}e.onWorkspaceChange?.(g),g[e.filePath]!==void 0&&p.dispatch({changes:{from:0,to:p.state.doc.length,insert:g[e.filePath]},userEvent:"input.rename"}),h(p)}).catch(j=>{P.textContent=String(j)}).finally(()=>{S.disabled=!1})},{dom:$,top:!0,mount:()=>{A.focus(),A.select()}}})})}).catch(console.warn),!0},w=async p=>{if(p.state.readOnly)return null;const v=p.matchBefore(/\w*/),z=p.state.sliceDoc(Math.max(0,p.pos-1),p.pos);if(!p.explicit&&!v?.text&&z!==".")return null;const E=p.state.doc.toString();try{const $=await l("textDocument/completion",s(E,p.pos),E);return p.aborted||r?null:{from:v?.from??p.pos,options:$.items.map(F=>({label:F.label,type:ul[F.kind]??"variable",detail:F.detail,info:F.documentation,apply:F.insertTextFormat===2?Zr((F.insertText??F.label).replace(/\$(\d+)/g,(A,S)=>`\${${S==="0"?"99":S}:}`)):F.insertText}))}}catch($){return r||console.warn("Althread completion unavailable",$),null}},Q=Gr.fromClass(class{constructor(p){this.view=p}timer;update(p){!p.docChanged&&!p.selectionSet&&!p.focusChanged||(clearTimeout(this.timer),!(!p.view.hasFocus||p.view.state.readOnly)&&(this.timer=setTimeout(()=>this.signature(),150)))}signature(){const p=this.view,v=p.state.doc.toString(),z=p.state.selection.main.head;l("textDocument/signatureHelp",s(v,z),v).then(E=>{if(!c(p,v)||p.state.selection.main.head!==z||!p.hasFocus)return;const $=E?.signatures[E.activeSignature];p.dispatch({effects:mr.of($?{pos:z,above:!0,create:()=>{const F=Rt($.label),A=$.parameters[E.activeParameter];return A&&F.append(Rt(`Parameter ${E.activeParameter+1}: ${A.label}`)),{dom:F}}}:null)})}).catch(E=>{r||console.warn(E)})}destroy(){r=!0,clearTimeout(this.timer),i?.dispose()}});return{completion:w,extension:[Q,t,n,Bi(),Br(async p=>{if(p.state.readOnly)return[];const v=p.state.doc.toString();try{const z=await l("textDocument/diagnostic",{textDocument:{uri:o}},v);return c(p,v)?z.items.map(E=>({from:Ke(v,E.range.start),to:Ke(v,E.range.end),severity:"error",message:E.message,source:E.source})):[]}catch(z){return r||console.warn("Althread diagnostics unavailable",z),[]}},{delay:450}),Yr(async(p,v)=>{const z=p.state.doc.toString();try{const E=await l("textDocument/hover",s(z,v),z);return!E||!c(p,z)?null:{pos:Ke(z,E.range.start),end:Ke(z,E.range.end),above:!0,create:()=>({dom:Rt(E.contents.value)})}}catch{return null}}),Hn.of([{key:"F12",run:u},{key:"Shift-F12",run:m},{key:"F2",run:_},{key:"Escape",run:p=>p.state.field(n)?(h(p),!0):!1}]),vt.domEventHandlers({mousedown(p,v){if(!(p.metaKey||p.ctrlKey)||p.button!==0)return!1;const z=v.posAtCoords({x:p.clientX,y:p.clientY});return z===null?!1:(p.preventDefault(),u(v,z))}}),vt.baseTheme({".cm-lsp-info":{padding:"6px 10px",fontFamily:"monospace",whiteSpace:"pre-wrap",maxWidth:"600px"},".cm-lsp-panel":{padding:"8px",display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap",maxHeight:"180px",overflow:"auto"},".cm-lsp-panel button, .cm-lsp-panel input":{font:"inherit",color:"inherit",background:"transparent",border:"1px solid #888",borderRadius:"3px",padding:"3px 6px"},".cm-lsp-panel button":{cursor:"pointer"}})]}}const pl=sl.configure({props:[al,Jr.add({Application:e=>e.column(e.node.from)+e.unit}),eo.add({Application:to})]}),Oi=no.define({parser:pl,languageData:{commentTokens:{line:"//"}}});function wi(e){const t=ml(e);return new io(Oi,[t.extension,Oi.data.of({autocomplete:t.completion})])}const pr=e=>e.split(".").pop()?.toLowerCase()??"",_i=e=>pr(e)==="alt",bl=async e=>{const t=pr(e);switch(t){case"js":case"jsx":case"ts":case"tsx":return(await Ne(async()=>{const{javascript:n}=await import("./index-BlqAb9HM.js");return{javascript:n}},__vite__mapDeps([0,1]))).javascript({jsx:t.endsWith("x"),typescript:t.startsWith("ts")});case"css":return(await Ne(async()=>{const{css:n}=await import("./index-DSRLhUMa.js");return{css:n}},__vite__mapDeps([2,1]))).css();case"html":case"htm":return(await Ne(async()=>{const{html:n}=await import("./index-27Oa6cPa.js");return{html:n}},__vite__mapDeps([3,1,2,0]))).html();case"json":return(await Ne(async()=>{const{json:n}=await import("./index-LBiqdFRM.js");return{json:n}},__vite__mapDeps([4,1]))).json();case"md":case"markdown":return(await Ne(async()=>{const{markdown:n}=await import("./index-BYirMQhs.js");return{markdown:n}},__vite__mapDeps([5,1,3,2,0]))).markdown();case"py":return(await Ne(async()=>{const{python:n}=await import("./index-etIPbnKY.js");return{python:n}},__vite__mapDeps([6,1]))).python();case"rs":return(await Ne(async()=>{const{rust:n}=await import("./index-Dj1yPGQn.js");return{rust:n}},__vite__mapDeps([7,1]))).rust();case"cpp":case"cc":case"cxx":case"c":case"h":case"hpp":return(await Ne(async()=>{const{cpp:n}=await import("./index-D-fBKaJZ.js");return{cpp:n}},__vite__mapDeps([8,1]))).cpp();default:return[]}},br=jt.define(),yr=jt.define();class yl extends Po{constructor(t){super(),this.label=t}toDOM(){const t=document.createElement("span");return t.className="cm-process-badge",t.textContent=this.label,t}}const vl=qn.define({create(){return zt.none},update(e,t){e=e.map(t.changes);for(const n of t.effects)if(n.is(br)){const i=n.value,r=[],o=new Map;for(const l of i)o.has(l.line)||o.set(l.line,[]),l.label&&o.get(l.line).push(l.label);const a=Array.from(o.keys()).sort((l,s)=>l-s);for(const l of a)if(l>0&&l<=t.state.doc.lines){const s=t.state.doc.line(l);r.push(zt.line({attributes:{style:"background-color: rgba(255, 165, 0, 0.2); border-left: 3px solid orange;"}}).range(s.from));const c=o.get(l);c.length>0&&r.push(zt.widget({widget:new yl(c.join(", ")),side:1}).range(s.to))}e=zt.set(r.sort((l,s)=>l.from-s.from))}else n.is(yr)&&(e=zt.none);return e},provide:e=>vt.decorations.from(e)}),Ol=[ro(),oo(),ao(),lo(),so(),co(),uo(),Yn.allowMultipleSelections.of(!0),fo(),go(),ho(),mo(),po(),bo(),yo(),vo(),Hn.of([...Oo,...wo,..._o,...$o,...So,...xo,...Co])],$i=e=>{const t=e==="dark";return vt.theme({"&":{color:t?"#abb2bf":"#2f3441",backgroundColor:t?"#1e1e1e":"#f7f1e7"},".cm-tooltip":{backgroundColor:t?"#252526":"#fffaf2",color:t?"#ddd":"#2f3441",border:`1px solid ${t?"#555":"#c6bda9"}`},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:t?"#094771":"#d9e8f5",color:t?"#fff":"#16324c"},".cm-content":{caretColor:t?"#528bff":"#0f6bbd"},".cm-cursor, .cm-dropCursor":{borderLeft:`2px solid ${t?"#528bff":"#0f6bbd"}`},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground":{backgroundColor:t?"rgba(38, 79, 120, 0.70) !important":"rgba(245, 184, 96, 0.38) !important"},".cm-selectionLayer":{mixBlendMode:"normal"},".cm-selectionLayer .cm-selectionBackground":{mixBlendMode:"normal"},".cm-content ::selection":{backgroundColor:t?"rgba(38, 79, 120, 1.00)":"rgba(245, 184, 96, 0.52)"},".cm-gutters":{backgroundColor:t?"#1e1e1e":"#efe5d6",color:t?"#5c6370":"#8b7f72",borderRight:`1px solid ${t?"#333":"#dccfbf"}`,minWidth:"60px"},".cm-lineNumbers":{minWidth:"40px",paddingRight:"8px",textAlign:"right"},".cm-lineNumbers .cm-gutterElement":{minWidth:"32px",textAlign:"right"},".cm-activeLineGutter":{backgroundColor:t?"#3a3f4b":"#e5d9c5"},".cm-activeLine":{backgroundColor:t?"rgba(58, 63, 75, 0.35)":"rgba(196, 148, 88, 0.10)",boxShadow:t?"inset 0 0 0 1px rgba(255, 255, 255, 0.06)":"inset 0 0 0 1px rgba(163, 118, 63, 0.14)"},".cm-selectionMatch":{backgroundColor:t?"rgba(255, 217, 102, 0.15)":"rgba(209, 136, 38, 0.16)",borderRadius:"2px"},".cm-selectionMatch.cm-selectionMatch-main":{backgroundColor:t?"rgba(38, 79, 120, 0.30)":"rgba(214, 156, 75, 0.22)"},".cm-foldGutter":{width:"16px",paddingLeft:"2px"},".cm-lintGutter":{width:"16px"},".cm-scroller":{fontFamily:"'Menlo', 'Monaco', 'Courier New', monospace",fontSize:"13px",lineHeight:"1.5"},".cm-process-badge":{backgroundColor:t?"orange":"#c96f1a",color:t?"black":"#fffaf2",borderRadius:"4px",padding:"0 4px",fontSize:"10px",fontWeight:"bold",marginLeft:"10px",verticalAlign:"middle",display:"inline-block"}},{dark:t})},wl=({defaultValue:e,onValueChange:t,filePath:n="main.alt",theme:i="dark",getWorkspace:r,onNavigate:o,onWorkspaceChange:a})=>{let l=e??"",s=!1;const c=il({value:e,onValueChange:A=>{l=A,t?.(A)}});let d=n;const u=new At,h=new At,m=new At,_=new At,w=A=>({filePath:A,getWorkspace:r,onNavigate:o,onWorkspaceChange:a}),Q=A=>{d=A;const S=c.editorView();if(!(!S||!u.get(S.state))){if(_i(A)){S.dispatch({effects:u.reconfigure(wi(w(A)))});return}S.dispatch({effects:u.reconfigure([])}),bl(A).then(x=>{const P=c.editorView();P&&d===A&&P.dispatch({effects:u.reconfigure(x)})}).catch(x=>console.warn(`Could not load highlighting for ${A}`,x))}};c.createExtension(Ol),c.createExtension(Hn.of([ko,{key:"Mod-/",run:Eo},{key:"Mod-s",preventDefault:!0,run:()=>!0}])),c.createExtension(m.of($i(i))),c.createExtension(_.of(Un(i))),c.createExtension(u.of(_i(n)?wi(w(n)):[])),c.createExtension(Bi()),c.createExtension(h.of([])),c.createExtension(vl);const p=()=>{try{return c.editorView&&c.editorView()?c.editorView():null}catch(A){return console.warn("Editor view not ready:",A),null}},v=A=>{l=A;const S=p();if(S)try{const x=S.state.update({changes:{from:0,to:S.state.doc.length,insert:A}});return S.update([x]),!0}catch(x){return console.warn("Failed to update editor content:",x),!1}return!1},z=A=>{s=A;const S=p();if(S)try{const x=A?Yn.readOnly.of(!0):[];return S.dispatch({effects:h.reconfigure(x)}),!0}catch(x){return console.warn("Failed to set read-only mode:",x),!1}return!1};return ue(()=>{c.editorView()&&(v(l),Q(d),z(s))}),{...c,updateLanguage:Q,updateTheme:A=>{const S=p();if(S)try{return S.dispatch({effects:[m.reconfigure($i(A)),_.reconfigure(Un(A))]}),!0}catch(x){return console.warn("Failed to update editor theme:",x),!1}return!1},getCurrentFileName:()=>d,safeEditorView:p,safeUpdateContent:v,setReadOnly:z,highlightLines:A=>{const S=p();if(S)try{const x=A.map(P=>typeof P=="number"?{line:P}:P);return S.dispatch({effects:br.of(x)}),!0}catch(x){return console.warn("Failed to highlight lines:",x),!1}return!1},clearHighlights:()=>{const A=p();if(A)try{return A.dispatch({effects:yr.of(null)}),!0}catch(S){return console.warn("Failed to clear highlights:",S),!1}return!1}}};var _l=D('<div class=empty-editor><div class=empty-editor-content><div class=empty-editor-icon><i class="codicon codicon-new-file"></i></div><h3>No file is open</h3><p>Create a new file to get started</p><button type=button class="vscode-button primary"><i class="codicon codicon-new-file"></i>New File');const $l=e=>(()=>{var t=_l(),n=t.firstChild,i=n.firstChild,r=i.nextSibling,o=r.nextSibling,a=o.nextSibling;return Ie(a,"click",e.onNewFile,!0),t})();xe(["click"]);var Sl=D("<div class=file-tabs-container>"),xl=D('<div class=file-tab role=button tabindex=0><i class="codicon codicon-file"></i><span class=tab-label></span><button type=button class=tab-close-button title=Close><i class="codicon codicon-close">'),Cl=D('<i class="codicon codicon-lock read-only-icon"title="Read-only file">');const Pl=e=>{let t;ue(Ue(()=>e.activeFile,i=>{i&&t&&requestAnimationFrame(()=>{const r=t?.querySelector(".file-tab.active");r&&r.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})})}));const n=i=>{const r=e.getFilePath(i);return r==="deps"||r.startsWith("deps/")};return(()=>{var i=Sl(),r=t;return typeof r=="function"?Ye(r,i):t=i,y(i,b(Oe,{get each(){return e.openFiles},children:o=>(()=>{var a=xl(),l=a.firstChild,s=l.nextSibling,c=s.nextSibling;return a.$$keydown=d=>{(d.key==="Enter"||d.key===" ")&&d.currentTarget===d.target&&(d.preventDefault(),e.onTabClick(o))},a.$$click=()=>e.onTabClick(o),y(s,()=>o.name),y(a,(()=>{var d=Ee(()=>!!n(o));return()=>d()&&Cl()})(),c),c.$$click=d=>{d.stopPropagation(),e.onTabClose(o)},te(d=>{var u=e.activeFile!==null&&e.getFilePath(e.activeFile)===e.getFilePath(o),h=!!n(o);return u!==d.e&&a.classList.toggle("active",d.e=u),h!==d.t&&a.classList.toggle("read-only",d.t=h),d},{e:void 0,t:void 0}),a})()})),i})()};xe(["click","keydown"]);var Si=D("<pre>"),kl=D("<span>File: <button type=button class=file-link>"),El=D("<span><button type=button class=file-link></button>:<!>:"),zl=D("<span>"),Rl=D("<div class=error-display>");function Tl(e){const t=()=>{if(!e.error.filePath)return(()=>{var r=Si();return y(r,()=>e.error.message),r})();const i=e.error.message.split(`
`);return(()=>{var r=Si();return y(r,()=>i.map((o,a)=>{if(o.startsWith("File: ")){const s=o.substring(6);return(()=>{var c=kl(),d=c.firstChild,u=d.nextSibling;return u.$$click=()=>e.onFileClick?.(s),re(u,"title",`Click to open ${s}`),y(u,s),y(c,()=>a<i.length-1&&`
`,null),c})()}const l=o.match(/^(\s*at\s+)([^:]+):(\d+):(\d+)$/);if(l){const[,s,c,d,u]=l;return(()=>{var h=El(),m=h.firstChild,_=m.nextSibling,w=_.nextSibling;return w.nextSibling,y(h,s,m),m.$$click=()=>e.onFileClick?.(c),re(m,"title",`Click to open ${c} at line ${d}`),y(m,c),y(h,d,w),y(h,u,null),y(h,()=>a<i.length-1&&`
`,null),h})()}return(()=>{var s=zl();return y(s,o,null),y(s,()=>a<i.length-1&&`
`,null),s})()})),r})()};return(()=>{var n=Rl();return y(n,t),n})()}xe(["click"]);const Vn=200;function gn(e){return e==null?JSON.stringify(e):Array.isArray(e)?`[${e.map(t=>gn(t)).join(",")}]`:typeof e=="object"?`{${Object.entries(e).sort(([n],[i])=>n.localeCompare(i)).map(([n,i])=>`${JSON.stringify(n)}:${gn(i)}`).join(",")}}`:JSON.stringify(e)}function xi(e,t={}){const{mode:n="check",stepLines:i=[],violationPath:r=[],theme:o="dark"}=t,a=[],l=[],s=new Set(r),c=new Set;for(let d=0;d<r.length-1;d++)c.add(`${r[d]}->${r[d+1]}`);for(let d=0;d<e.length;d++){const u=e[d],h=u.metadata,m=u.vm.locals.length,_=n==="run"?`${d}`:`${d}`,w=Object.keys(u.vm.globals).length,Q=u.vm.channels.length,p=u.vm.pending_deliveries.length,v=`Level: ${h.level}
Processes: ${m}
Globals: ${w}
Channels: ${Q}
Pending: ${p}`,z=n==="check"&&s.has(d);let E,$,F;if(n==="run"?(E="#314d31",$="#a6dfa6",F=o==="dark"?"#ffffff":"#1a3a1a"):(E=z?"#4d3131":"#314d31",$=z?"#ec9999":"#a6dfa6",F=o==="dark"?"#ffffff":z?"#8b1a1a":"#1a3a1a"),a.push({id:d,label:_,level:h.level,color:{background:E,border:$,highlight:{border:"hsla(29.329, 66.552%, 52.544%)",background:E},hover:{border:"hsla(29.329, 66.552%, 52.544%)",background:E}},font:{size:10,color:F},borderWidth:1,title:v,rawState:{vm:u.vm,stepIndex:n==="run"?d:void 0,level:h.level},isViolationNode:z}),n==="run"){if(d<e.length-1){const A=i[d]||[];l.push({id:`e${d}`,from:d,to:d+1,label:`step ${d+1}`,lines:A,font:{size:0}})}}else if(h.successors){let A=0;for(const S of h.successors){const x=S.name+"#"+S.pid+": "+S.lines.join(","),P=c.has(`${d}->${S.to_index}`);l.push({id:`e${d}-${S.to_index}-${A++}`,from:d,to:S.to_index,label:x,lines:S.lines.map(L=>Number(L)),font:{size:0},color:P?{color:"#ec9999",highlight:"#ec9999",hover:"#ec9999"}:void 0,width:P?2:void 0})}}}return{nodes:a,edges:l}}var Al=D("<span class=literal-null>null"),Dl=D("<span class=literal-int>"),Ql=D("<span class=literal-float>"),Fl=D('<span class=literal-string>"<!>"'),Il=D("<span class=literal-bool>"),Ll=D("<span class=literal-list>[<!>]"),Nl=D("<span class=literal-tuple>(<!>)"),Ml=D("<span class=literal-process>Proc(<!>#<!>)");function dt(e){return b(Ln,{get children(){return[b(Se,{get when(){return e.value.type==="Null"},get children(){return Al()}}),b(Se,{get when(){return e.value.type==="Int"},get children(){var t=Dl();return y(t,()=>e.value.value),t}}),b(Se,{get when(){return e.value.type==="Float"},get children(){var t=Ql();return y(t,()=>e.value.value),t}}),b(Se,{get when(){return e.value.type==="String"},get children(){var t=Fl(),n=t.firstChild,i=n.nextSibling;return i.nextSibling,y(t,()=>e.value.value,i),t}}),b(Se,{get when(){return e.value.type==="Bool"},get children(){var t=Il();return y(t,()=>e.value.value?"true":"false"),t}}),b(Se,{get when(){return e.value.type==="List"},get children(){var t=Ll(),n=t.firstChild,i=n.nextSibling;return i.nextSibling,y(t,b(Oe,{get each(){return e.value.value},children:(r,o)=>[Ee(()=>o()>0&&", "),b(dt,{value:r})]}),i),t}}),b(Se,{get when(){return e.value.type==="Tuple"},get children(){var t=Nl(),n=t.firstChild,i=n.nextSibling;return i.nextSibling,y(t,b(Oe,{get each(){return e.value.value},children:(r,o)=>[Ee(()=>o()>0&&", "),b(dt,{value:r})]}),i),t}}),b(Se,{get when(){return e.value.type==="Process"},get children(){var t=Ml(),n=t.firstChild,i=n.nextSibling,r=i.nextSibling,o=r.nextSibling;return o.nextSibling,y(t,()=>e.value.value[0],i),y(t,()=>e.value.value[1],o),t}})]}})}var Ul=D("<span class=change-indicator>!"),jl=D("<div class=variables-grid>"),Vl=D('<div><button type=button><i></i><i class="codicon codicon-symbol-variable header-section-icon"></i><span class=section-label>Globals</span><span></span></button><div>'),Wl=D("<div class=empty-state>No globals"),Xl=D("<div class=variable-item><span class=var-name></span> = <span class=var-value>");function Gl(e){const t=`globals-${wn()}`,n=oe(()=>Object.entries(e.globals).sort((r,o)=>r[0].localeCompare(o[0]))),i=()=>!e.collapsed&&!e.canCollapse;return(()=>{var r=Vl(),o=r.firstChild,a=o.firstChild,l=a.nextSibling,s=l.nextSibling,c=s.nextSibling,d=o.nextSibling;return Ie(o,"click",e.onToggle,!0),re(o,"aria-controls",t),y(c,b(Y,{get when(){return e.hasChanged},get children(){return Ul()}}),null),y(c,()=>n().length,null),re(d,"id",t),y(d,b(Y,{get when(){return n().length>0},get fallback(){return Wl()},get children(){var u=jl();return y(u,b(Oe,{get each(){return n()},children:([h,m])=>(()=>{var _=Xl(),w=_.firstChild,Q=w.nextSibling,p=Q.nextSibling;return y(w,h),y(p,b(dt,{value:m})),_})()})),u}})),te(u=>{var h=`section${e.collapsed?" section-collapsed":""}`,m=`collapsible-header${i()?" header-locked":""}`,_=i()?-1:0,w=!e.collapsed,Q=i()?"Cannot collapse — only section open":e.collapsed?"Expand Globals":"Collapse Globals",p=`codicon ${e.collapsed?"codicon-chevron-left":"codicon-chevron-right"} header-toggle-icon`,v=`header-count${e.hasChanged?" changed":""}`,z=`section-body${e.collapsed?" section-body-hidden":""}`;return h!==u.e&&ge(r,u.e=h),m!==u.t&&ge(o,u.t=m),_!==u.a&&re(o,"tabindex",u.a=_),w!==u.o&&re(o,"aria-expanded",u.o=w),Q!==u.i&&re(o,"title",u.i=Q),p!==u.n&&ge(a,u.n=p),v!==u.s&&ge(c,u.s=v),z!==u.h&&ge(d,u.h=z),u},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),r})()}xe(["click"]);var Bl=D("<span class=change-indicator>!"),Yl=D("<div class=subsection><div class=subsection-title>Pending Delivery</div><div class=message-list>"),ql=D("<div class=subsection><div class=subsection-title>Waiting (Unconnected)</div><div class=message-list>"),Hl=D('<div><button type=button><i></i><i class="codicon codicon-mail header-section-icon"></i><span class=section-label>In-flight messages</span><span></span></button><div>'),Zl=D("<div class=empty-state>No pending messages"),Kl=D('<div class=message-card><div class=message-route><span class="message-endpoint from">:</span><i class="codicon codicon-arrow-right route-arrow"></i><span class="message-endpoint to">:</span></div><div class=message-payload>'),Ci=D("<div class=payload-item>"),Jl=D('<div class="message-card waiting"><div class=message-route><span class="message-endpoint from">:</span><i class="codicon codicon-question route-arrow"></i><span class=message-status>No connection</span></div><div class=message-payload>');function es(e){const t=`messages-${wn()}`,n=()=>e.pendingDeliveries.length>0||e.waitingSend.length>0,i=()=>e.pendingDeliveries.length+e.waitingSend.length,r=()=>!e.collapsed&&!e.canCollapse;return(()=>{var o=Hl(),a=o.firstChild,l=a.firstChild,s=l.nextSibling,c=s.nextSibling,d=c.nextSibling,u=a.nextSibling;return Ie(a,"click",e.onToggle,!0),re(a,"aria-controls",t),y(d,b(Y,{get when(){return e.hasChanged},get children(){return Bl()}}),null),y(d,i,null),re(u,"id",t),y(u,b(Y,{get when(){return n()},get fallback(){return Zl()},get children(){return[b(Y,{get when(){return e.pendingDeliveries.length>0},get children(){var h=Yl(),m=h.firstChild,_=m.nextSibling;return y(_,b(Oe,{get each(){return e.pendingDeliveries},children:w=>(()=>{var Q=Kl(),p=Q.firstChild,v=p.firstChild,z=v.firstChild,E=v.nextSibling,$=E.nextSibling,F=$.firstChild,A=p.nextSibling;return y(v,()=>w.from_pid,z),y(v,()=>w.from_channel,null),y($,()=>w.to_pid,F),y($,()=>w.to_channel,null),y(A,b(Oe,{get each(){return w.values},children:S=>(()=>{var x=Ci();return y(x,b(dt,{value:S})),x})()})),Q})()})),h}}),b(Y,{get when(){return e.waitingSend.length>0},get children(){var h=ql(),m=h.firstChild,_=m.nextSibling;return y(_,b(Oe,{get each(){return e.waitingSend},children:w=>(()=>{var Q=Jl(),p=Q.firstChild,v=p.firstChild,z=v.firstChild,E=p.nextSibling;return y(v,()=>w.pid,z),y(v,()=>w.name,null),y(E,b(Oe,{get each(){return w.values},children:$=>(()=>{var F=Ci();return y(F,b(dt,{value:$})),F})()})),Q})()})),h}})]}})),te(h=>{var m=`section${e.collapsed?" section-collapsed":""}`,_=`collapsible-header${r()?" header-locked":""}`,w=r()?-1:0,Q=!e.collapsed,p=r()?"Cannot collapse — only section open":e.collapsed?"Expand Messages":"Collapse Messages",v=`codicon ${e.collapsed?"codicon-chevron-left":"codicon-chevron-right"} header-toggle-icon`,z=`header-count${e.hasChanged?" changed":""}`,E=`section-body${e.collapsed?" section-body-hidden":""}`;return m!==h.e&&ge(o,h.e=m),_!==h.t&&ge(a,h.t=_),w!==h.a&&re(a,"tabindex",h.a=w),Q!==h.o&&re(a,"aria-expanded",h.o=Q),p!==h.i&&re(a,"title",h.i=p),v!==h.n&&ge(l,h.n=v),z!==h.s&&ge(d,h.s=z),E!==h.h&&ge(u,h.h=E),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),o})()}xe(["click"]);var ts=D("<div class=variables-list>"),ns=D("<div class=variable-display>"),is=D("<div class=fallback-memory><div class=memory-label>Raw Memory:</div><div class=stack-container>"),rs=D("<div class=memory-item><span class=memory-index>[<!>]</span><span class=memory-value>"),os=D("<div class=variable-row><span class=var-name></span><span class=var-separator>:</span><span class=var-type></span><span class=var-equals>=</span><span class=var-value>");function Pi(e){const t=()=>Object.keys(e.variables||{}).length>0,n=oe(()=>Object.entries(e.variables).sort((i,r)=>i[0].localeCompare(r[0])));return(()=>{var i=ns();return y(i,b(Y,{get when(){return t()},get fallback(){return b(Y,{get when(){return e.fallbackMemory&&e.fallbackMemory.length>0},get children(){var r=is(),o=r.firstChild,a=o.nextSibling;return y(a,b(Oe,{get each(){return e.fallbackMemory},children:(l,s)=>(()=>{var c=rs(),d=c.firstChild,u=d.firstChild,h=u.nextSibling;h.nextSibling;var m=d.nextSibling;return y(d,s,h),y(m,b(dt,{value:l})),c})()})),r}})},get children(){var r=ts();return y(r,b(Oe,{get each(){return n()},children:([o,a])=>(()=>{var l=os(),s=l.firstChild,c=s.nextSibling,d=c.nextSibling,u=d.nextSibling,h=u.nextSibling;return y(s,o),y(d,()=>a.type),y(h,b(dt,{get value(){return a.value}})),te(()=>re(s,"title",a.type)),l})()})),r}})),i})()}var as=D("<div class=call-frame-display>"),ls=D("<div class=frame-card><div class=frame-header><span class=frame-title>Stack Memory</span></div><div class=frame-body>"),ss=D('<span class=frame-location title="Source line"><i class="codicon codicon-file-code"></i>Line '),cs=D('<div class=frame-header><span class=frame-title></span><div class=frame-meta><span class=frame-ip title="Instruction pointer">IP: '),ds=D("<div class=frame-card><div class=frame-body>"),us=D("<div class=no-variables>No local variables in scope");function fs(e){return(()=>{var t=as();return y(t,b(Y,{get when(){return e.frames&&e.frames.length>0},get fallback(){return b(Y,{get when(){return e.fallbackMemory},get children(){var n=ls(),i=n.firstChild,r=i.nextSibling;return y(r,b(Pi,{variables:{},get fallbackMemory(){return e.fallbackMemory}})),n}})},get children(){return b(Oe,{get each(){return e.frames},children:(n,i)=>(()=>{var r=ds(),o=r.firstChild;return y(r,b(Y,{get when(){return i()>0},get children(){var a=cs(),l=a.firstChild,s=l.nextSibling,c=s.firstChild;return c.firstChild,y(l,()=>n.function),y(s,b(Y,{get when(){return n.line},get children(){var d=ss(),u=d.firstChild;return u.nextSibling,y(d,()=>n.line,null),d}}),c),y(c,()=>n.instruction_pointer,null),a}}),o),y(o,b(Y,{get when(){return Ee(()=>!!n.variables)()&&Object.keys(n.variables).length>0},get fallback(){return us()},get children(){return b(Pi,{get variables(){return n.variables||{}},get fallbackMemory(){return i()===0?e.fallbackMemory:void 0}})}})),te(()=>r.classList.toggle("top-frame",i()===0)),r})()})}})),t})()}var gs=D("<span class=process-line>Line "),hs=D("<div class=channels-row><span class=row-label>Channels</span><div class=channels-container>"),ms=D("<div class=process-card><div class=process-card-header><span class=process-name></span><span class=process-id>PID </span><span class=process-pc>PC </span></div><div class=process-card-body>"),ps=D("<span class=channel-count>[<!>]"),bs=D("<div class=channel-values>"),ys=D("<div class=channel-pill><span class=channel-name>"),vs=D("<div class=channel-value-item>");function Os(e){return(()=>{var t=ms(),n=t.firstChild,i=n.firstChild,r=i.nextSibling;r.firstChild;var o=r.nextSibling;o.firstChild;var a=n.nextSibling;return y(i,()=>e.process.name),y(r,()=>e.process.pid,null),y(o,()=>e.process.instruction_pointer,null),y(n,b(Y,{get when(){return e.process.line},get children(){var l=gs();return l.firstChild,y(l,()=>e.process.line,null),l}}),null),y(a,b(fs,{get frames(){return e.process.frames},get fallbackMemory(){return e.process.memory}}),null),y(a,b(Y,{get when(){return e.channels.length>0},get children(){var l=hs(),s=l.firstChild,c=s.nextSibling;return y(c,b(Oe,{get each(){return e.channels},children:d=>(()=>{var u=ys(),h=u.firstChild;return y(h,()=>d.name),y(u,b(Y,{get when(){return d.values.length>0},get children(){return[(()=>{var m=ps(),_=m.firstChild,w=_.nextSibling;return w.nextSibling,y(m,()=>d.values.length,w),m})(),(()=>{var m=bs();return y(m,b(Oe,{get each(){return d.values},children:_=>(()=>{var w=vs();return y(w,b(dt,{value:_})),w})()})),m})()]}}),null),u})()})),l}}),null),t})()}var ws=D('<div class=vm-state-inspector><div class=inspector-header><div class=header-title><i class="codicon codicon-debug-console"></i><span>State Details</span></div><button type=button class=close-btn title="Close Inspector"><i class="codicon codicon-close">'),_s=D("<div class=inspector-empty-state>Select a node in the graph to inspect its state"),$s=D('<div class=inspector-sections><div><button type=button><i></i><i class="codicon codicon-debug-all header-section-icon"></i><span class=section-label>Processes</span><span class=header-count></span></button><div>'),Ss=D("<div class=empty-state>No processes");const ki=new WeakMap;function Yt(e){let t=ki.get(e);return t||(t={globals:gn(e.globals),messages:gn({p:e.pending_deliveries,w:e.waiting_send})},ki.set(e,t)),t}function xs(e){const t=`processes-${wn()}`,[n,i]=X(!1),[r,o]=X(!1),[a,l]=X(!1),[s,c]=X(!1),[d,u]=X(!1),h=oe(()=>e.node?.vm??null),m=S=>{const x=h();return x?x.channels.filter(P=>P.pid===S):[]};let _="",w="",Q=null,p=!1,v=!1;ue(()=>{const S=h(),x=e.node;if(!S||!x)return;const P=Object.keys(S.globals).length===0,L=S.pending_deliveries.length===0&&S.waiting_send.length===0;Q===null&&(P&&i(!0),L&&o(!0)),Q=x}),ue(()=>{const S=h();if(!S)return;const x=n(),P=r(),L=Object.keys(S.globals).length===0,R=S.pending_deliveries.length===0&&S.waiting_send.length===0;x?p?L||Yt(S).globals!==_&&c(!0):_=Yt(S).globals:c(!1),P?v?R||Yt(S).messages!==w&&u(!0):w=Yt(S).messages:u(!1),p=x,v=P});const z=oe(()=>{let S=0;return n()||S++,r()||S++,a()||S++,S}),E=()=>z()>1,$=()=>{!n()&&!E()||i(S=>!S)},F=()=>{!r()&&!E()||o(S=>!S)},A=()=>{!a()&&!E()||l(S=>!S)};return(()=>{var S=ws(),x=S.firstChild,P=x.firstChild,L=P.nextSibling;return Ie(L,"click",e.onClose,!0),y(S,b(Y,{get when(){return h()},get fallback(){return _s()},children:R=>(()=>{var j=$s(),f=j.firstChild,g=f.firstChild,O=g.firstChild,T=O.nextSibling,C=T.nextSibling,I=C.nextSibling,G=g.nextSibling;return y(j,b(Gl,{get globals(){return R().globals},get collapsed(){return n()},get canCollapse(){return E()},onToggle:$,get hasChanged(){return s()}}),f),y(j,b(es,{get pendingDeliveries(){return R().pending_deliveries},get waitingSend(){return R().waiting_send},get collapsed(){return r()},get canCollapse(){return E()},onToggle:F,get hasChanged(){return d()}}),f),g.$$click=A,re(g,"aria-controls",t),y(I,()=>R().locals.length),re(G,"id",t),y(G,b(Y,{get when(){return R().locals.length>0},get fallback(){return Ss()},get children(){return b(Oe,{get each(){return R().locals},children:k=>b(Os,{process:k,get channels(){return m(k.pid)}})})}})),te(k=>{var U=`section programs-section${a()?" section-collapsed":""}`,H=`collapsible-header${!a()&&!E()?" header-locked":""}`,J=!a()&&!E()?-1:0,q=!a(),Z=!a()&&!E()?"Cannot collapse — only section open":a()?"Expand Processes":"Collapse Processes",ee=`codicon ${a()?"codicon-chevron-left":"codicon-chevron-right"} header-toggle-icon`,fe=`section-body${a()?" section-body-hidden":""}`;return U!==k.e&&ge(f,k.e=U),H!==k.t&&ge(g,k.t=H),J!==k.a&&re(g,"tabindex",k.a=J),q!==k.o&&re(g,"aria-expanded",k.o=q),Z!==k.i&&re(g,"title",k.i=Z),ee!==k.n&&ge(O,k.n=ee),fe!==k.s&&ge(G,k.s=fe),k},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),j})()}),null),S})()}xe(["click"]);var Ei=D("<code>"),Cs=D('<span class=choice-message-op><i class="codicon codicon-arrow-right"></i> '),Ps=D("<p class=interactive-hint>Pick the process that executes next. Hover a choice to see its code highlighted in the editor."),ks=D("<ol class=choice-list>"),Es=D('<section class=interactive-choices aria-label="Next instruction"tabindex=-1><div class=interactive-toolbar><span class=interactive-step-count>Step <strong></strong></span><div class=interactive-toolbar-actions><button type=button class=icon-button title="Undo last step (Backspace)"><i class="codicon codicon-discard"></i><span>Undo</span></button><button type=button class=icon-button title="Restart from the initial state"><i class="codicon codicon-debug-restart"></i><span>Restart</span></button><button type=button class=icon-button title="Leave step-by-step mode"><i class="codicon codicon-debug-stop"></i><span>Stop'),zs=D("<div class=results-empty><i></i><h4></h4><p>"),Rs=D('<li><button type=button class=choice-item><span class=choice-key></span><span class=choice-process><span class=choice-pid>#</span></span><span class=choice-code></span><i class="codicon codicon-debug-step-over choice-go">');const Ts=["SEND","RECEIVE","DELIVER"];function As(e){const t=r=>{const o=e.getSourceLines(r.lines),a=r.instructions.filter(l=>Ts.some(s=>l.includes(s)));return o.length===0?(()=>{var l=Ei();return y(l,()=>r.instructions.join("; ")),l})():[b(Oe,{each:o,children:l=>(()=>{var s=Ei();return y(s,l),s})()}),b(Y,{get when(){return a.length>0},get children(){var l=Cs(),s=l.firstChild;return s.nextSibling,y(l,()=>a.join(", "),null),l}})]},n=r=>{if(r.ctrlKey||r.metaKey||r.altKey)return;const o=Number.parseInt(r.key,10);o>=1&&o<=9&&o<=e.choices.length?(r.preventDefault(),e.onExecute(o-1)):(r.key==="Backspace"||r.key==="u")&&e.stepCount>0&&(r.preventDefault(),e.onUndo())};let i;return xt(()=>i?.focus({preventScroll:!0})),(()=>{var r=Es(),o=r.firstChild,a=o.firstChild,l=a.firstChild,s=l.nextSibling,c=a.nextSibling,d=c.firstChild,u=d.nextSibling,h=u.nextSibling;r.$$keydown=n;var m=i;return typeof m=="function"?Ye(m,r):i=r,y(s,()=>e.stepCount),d.$$click=()=>e.onUndo(),u.$$click=()=>e.onRestart(),h.$$click=()=>e.onStop(),y(r,b(Y,{get when(){return e.choices.length>0},get fallback(){return(()=>{var _=zs(),w=_.firstChild,Q=w.nextSibling,p=Q.nextSibling;return y(Q,()=>e.deadlock?"Deadlock":"Execution completed"),y(p,()=>e.deadlock?"Every process is blocked. Inspect the States tab to see what each one is waiting for.":"No process can execute any further instruction."),te(()=>ge(w,`codicon ${e.deadlock?"codicon-debug-pause":"codicon-pass"}`)),_})()},get children(){return[Ps(),(()=>{var _=ks();return y(_,b(Oe,{get each(){return e.choices},children:(w,Q)=>(()=>{var p=Rs(),v=p.firstChild,z=v.firstChild,E=z.nextSibling,$=E.firstChild;$.firstChild;var F=E.nextSibling;return v.addEventListener("blur",()=>e.onPreviewLines(null)),v.addEventListener("focus",()=>e.onPreviewLines(w.lines)),v.addEventListener("mouseleave",()=>e.onPreviewLines(null)),v.addEventListener("mouseenter",()=>e.onPreviewLines(w.lines)),v.$$click=()=>e.onExecute(Q()),y(z,(()=>{var A=Ee(()=>Q()<9);return()=>A()?Q()+1:""})()),y(E,()=>w.prog_name,$),y($,()=>w.prog_id,null),y(F,()=>t(w)),te(()=>re(v,"title",Q()<9?`Execute (press ${Q()+1})`:"Execute this instruction")),p})()})),_})()]}}),null),te(()=>d.disabled=e.stepCount===0),r})()}xe(["keydown","click"]);var nn=new Map,ni=(e,t)=>{if(nn.has(e))return nn.get(e);const n=Ct(t);return nn.set(e,n),n},ii=e=>{const t=nn.get(e);if(t)return Pt(t)},Ds=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function Qs(e){const t={};let n;for(;n=Ds.exec(e);)t[n[1]]=n[2];return t}function ri(e,t){return typeof t=="string"&&(t=Qs(t)),{...e,...t}}var ot=(e,t)=>(e&&(typeof e=="function"?e(t):e[0](e[1],t)),t.defaultPrevented),Fs=(e,t)=>{const n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS?1:n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:0},zi=e=>typeof e=="function"?e():e,Is=e=>(...t)=>{for(const n of e)n&&n(...t)},oi=(...e)=>Is(e),Ls=(...e)=>e.some(t=>!!t()),vr=e=>typeof e=="function"&&e.length>0,hn=e=>e?"":void 0,Ns=e=>{const[t,n]=Vt(e,["as"]),i=oe(()=>t.as??"div");return oe(()=>{const o=i();switch(typeof o){case"function":return pe(()=>o(n));case"string":return b(ya,ct({component:o},n))}})},ai=Ns,Ms=e=>{let t,n=!1;return()=>n?t:(n=!0,t=oe(e))},Or=Ms;function Us(e){const[t,n]=X(e.initialValue),i=()=>e.value?.()!==void 0,r=()=>i()?e.value?.():t();return[r,a=>pe(()=>{let l;return typeof a=="function"?l=a(r()):l=a,Object.is(l,r())||(i()||n(l),e.onChange?.(l)),l})]}var js=Us,Vs=e=>{const[t,n]=X(0);ue(()=>{const o=zi(e.element);if(!o)return;r(o);const a=new ResizeObserver(i);a.observe(o),Qe(()=>{a.disconnect()})});const i=([o])=>{r(o.target)},r=o=>{switch(zi(e.dimension)){case"width":n(o.offsetWidth);break;case"height":n(o.offsetHeight);break}};return t},Ws=Vs,Xs=D("<div data-corvu-resizable-handle-start-intersection>"),Gs=D("<div data-corvu-resizable-handle-end-intersection>"),wr=Ct(),Bs=e=>e===void 0?wr:ni(`resizable-${e}`),Ys=e=>{if(e===void 0){const n=Pt(wr);if(!n)throw new Error("[corvu]: Resizable context not found. Make sure to wrap Resizable components in <Resizable.Root>");return n}const t=ii(`resizable-${e}`);if(!t)throw new Error(`[corvu]: Resizable context with id "${e}" not found. Make sure to wrap Resizable components in <Resizable.Root contextId="${e}">`);return t},_r=Ct(),qs=e=>e===void 0?_r:ni(`resizable-internal-${e}`),$r=e=>{if(e===void 0){const n=Pt(_r);if(!n)throw new Error("[corvu]: Resizable context not found. Make sure to wrap Resizable components in <Resizable.Root>");return n}const t=ii(`resizable-internal-${e}`);if(!t)throw new Error(`[corvu]: Resizable context with id "${e}" not found. Make sure to wrap Resizable components in <Resizable.Root contextId="${e}">`);return t},de=(e,t)=>{if(typeof e=="number")return e;if(!e.endsWith("px"))throw new Error(`[corvu] Sizes must be a number or a string ending with 'px'. Got ${e}`);return Ae(parseFloat(e)/t)},Ut=e=>{const t=e.panels.filter(i=>!!(e.focusedElement.compareDocumentPosition(i.data.element)&Node.DOCUMENT_POSITION_PRECEDING)),n=e.panels.filter(i=>!!(e.focusedElement.compareDocumentPosition(i.data.element)&Node.DOCUMENT_POSITION_FOLLOWING));return[t,n]},Hs=6,Ae=e=>parseFloat(e.toFixed(Hs)),Wn=null,ut=null,Re=0,Zs={1:"e-resize",2:"w-resize",3:"ew-resize",4:"s-resize",8:"n-resize",12:"ns-resize",5:"se-resize",9:"ne-resize",6:"sw-resize",10:"nw-resize"},zn=null,li=()=>{if(!Wn){ut&&(zn=null,ut.remove(),ut=null);return}let e=Zs[Re]??null;if(e===null)switch(Wn){case"horizontal":e="col-resize";break;case"vertical":e="row-resize";break;case"both":e="move";break}e!==zn&&(zn=e,ut||(ut=document.createElement("style"),document.head.appendChild(ut)),ut.innerHTML=`*{cursor: ${e}!important;}`)},Ri=(e,t)=>{switch(e){case"horizontal":t===1?(Re|=1,Re&=-3):t===2?(Re|=2,Re&=-2):t===3?Re|=3:Re&=-4;break;case"vertical":t===1?(Re|=4,Re&=-9):t===2?(Re|=8,Re&=-5):t===3?Re|=12:Re&=-13;break}li()},Ks=()=>{Re=0,li()},Xn=e=>{Wn=e,li()},Ti=e=>{if(Ae(e.distributablePercentage)!==Ae(e.desiredPercentage)){let t=null;e.betweenCollapse===!0?t=3:e.desiredPercentage<e.distributablePercentage&&e.revertConstraints!==!0||e.desiredPercentage>e.distributablePercentage&&e.revertConstraints===!0?t=1:t=2,Ri(e.orientation,t)}else Ri(e.orientation,0)},et=[],yt=null,Sr=null,Js=1,qt=(e,t)=>Math.abs(e-t)<=Js,ec=e=>{et.push(e);for(const t of et)for(const n of et){if(t.orientation===n.orientation||t.element===n.element)continue;const i=t.element.getBoundingClientRect(),r=n.element.getBoundingClientRect();if(t.orientation==="horizontal"&&(i.left>r.right||i.right<r.left)||t.orientation==="vertical"&&(i.top>r.bottom||i.bottom<r.top))continue;const o=t.orientation==="horizontal"?qt(i.top,r.bottom):qt(i.left,r.right),a=t.orientation==="horizontal"?qt(i.bottom,r.top):qt(i.right,r.left);o&&t.startIntersection.setHandle(n),a&&t.endIntersection.setHandle(n)}return{onDragStart:(t,n)=>nc(e,t,n),onHoveredChange:t=>{Sr=t;const n=!!yt;let i=null;Ce(()=>{switch(t){case"handle":{const r=e.startIntersection.handle(),o=e.endIntersection.handle();n||(e.setActive(!0),r?.setActive(!1),o?.setActive(!1)),r?.setHoveredAsIntersection(!1),o?.setHoveredAsIntersection(!1),i=e.orientation;break}case"startIntersection":{const r=e.startIntersection.handle();n||r?.setActive(!0),r?.setHoveredAsIntersection(!0),i="both";break}case"endIntersection":{const r=e.endIntersection.handle();n||r?.setActive(!0),r?.setHoveredAsIntersection(!0),i="both";break}case null:{const r=e.startIntersection.handle(),o=e.endIntersection.handle();!n&&!e.focused()&&(e.setActive(!1),r?.setActive(!1),o?.setActive(!1)),r?.setHoveredAsIntersection(!1),o?.setHoveredAsIntersection(!1),i=null;break}}!n&&e.handleCursorStyle()&&Xn(i)})}}},tc=e=>{et.splice(et.indexOf(e),1)},nc=(e,t,n)=>{yt={x:t.clientX,y:t.clientY},Ce(()=>{e.setDragging(!0),n==="startIntersection"&&e.startIntersection.handle()?.setDragging(!0),n==="endIntersection"&&e.endIntersection.handle()?.setDragging(!0)}),window.addEventListener("pointermove",xr),window.addEventListener("touchmove",Cr),window.addEventListener("pointerup",St),window.addEventListener("touchend",St),window.addEventListener("contextmenu",St)},xr=e=>Pr(e.clientX,e.clientY,e.altKey),Cr=e=>{e.touches[0]&&Pr(e.touches[0].clientX,e.touches[0].clientY,e.altKey)},Ai=!1,Pr=(e,t,n)=>{if(yt){et.some(i=>i.dragging()&&i.altKey==="only")&&(n=!0),et.some(i=>i.dragging()&&i.altKey===!1)&&(n=!1),Ai!==n&&(yt={x:e,y:t},Ai=n);for(const i of et)i.dragging()&&i.onDrag(i.orientation==="horizontal"?e-yt.x:t-yt.y,n)}},St=e=>{Ce(()=>{for(const t of et)t.dragging()?(t.setDragging(!1),t.onDragEnd(e),!t.hovered()&&!t.hoveredAsIntersection()&&t.setActive(!1),!Sr&&t.handleCursorStyle()&&Xn(null)):Ls(t.hovered,t.focused,t.hoveredAsIntersection)&&(t.setActive(!0),t.handleCursorStyle()&&Xn(t.orientation))}),Ks(),yt=null,window.removeEventListener("pointermove",xr),window.removeEventListener("touchmove",Cr),window.removeEventListener("pointerup",St),window.removeEventListener("touchend",St),window.removeEventListener("contextmenu",St)},ic=e=>{const t=ct({startIntersection:!0,endIntersection:!0,altKey:!0},e),[n,i]=Vt(t,["startIntersection","endIntersection","altKey","onHandleDragStart","onHandleDrag","onHandleDragEnd","contextId","ref","style","disabled","children","onMouseEnter","onMouseLeave","onKeyDown","onKeyUp","onFocus","onBlur","onPointerDown"]),[r,o]=X(null),[a,l]=X(!1),[s,c]=X(null),[d,u]=X(!1),[h,m]=X(!1),[_,w]=X(!1),[Q,p]=X(null),[v,z]=X(null),E=oe(()=>$r(n.contextId)),$=oe(()=>{const f=r();if(!f)return;const g=E().panels(),[O,T]=Ut({panels:g,focusedElement:f}),C=O[O.length-1]?.data.id,I=T.reduce((U,H)=>U-de(H.data.minSize,E().rootSize()),1),G=O.reduce((U,H)=>U+de(H.data.minSize,E().rootSize()),0),k=O.reduce((U,H)=>U+de(H.size(),E().rootSize()),0);return{ariaControls:C,ariaValueMax:Ae(I),ariaValueMin:Ae(G),ariaValueNow:Ae(k)}});let F=null;return ue(()=>{if(n.disabled===!0)return;const f=r();if(!f)return;const g={element:f,orientation:E().orientation(),handleCursorStyle:E().handleCursorStyle,altKey:n.altKey,startIntersection:{handle:Q,setHandle:O=>{n.startIntersection===!0&&p(O)}},endIntersection:{handle:v,setHandle:O=>{n.endIntersection===!0&&z(O)}},hovered:s,focused:d,hoveredAsIntersection:a,setHoveredAsIntersection:l,active:h,setActive:m,dragging:_,setDragging:w,onDrag:(O,T)=>{if(n.onHandleDrag!==void 0){const C=new CustomEvent("drag",{cancelable:!0});if(n.onHandleDrag(C),C.defaultPrevented)return}E().onDrag(f,O,T)},onDragEnd:O=>{n.onHandleDragEnd?.(O),E().onDragEnd()}};F=ec(g),Qe(()=>{tc(g),F=null})}),ue(Ue(s,()=>{F?.onHoveredChange(s())})),b(ai,ct({as:"button",ref(f){var g=oi(o,n.ref);typeof g=="function"&&g(f)},get style(){return ri({position:"relative",cursor:E().handleCursorStyle()?"inherit":void 0,"touch-action":"none","flex-shrink":0},n.style)},get disabled(){return n.disabled},onBlur:f=>{ot(n.onBlur,f)||(u(!1),!s()&&m(!1))},onFocus:f=>{ot(n.onFocus,f)||s()||(u(!0),m(!0))},onKeyDown:f=>{if(ot(n.onKeyDown,f)||_())return;const g=r();if(!g)return;const O=n.altKey==="only"||n.altKey!==!1&&f.altKey;E().onKeyDown(g,f,O)},onKeyUp:f=>{ot(n.onKeyUp,f)||f.key!=="Tab"||u(!0)},onMouseEnter:f=>{ot(n.onMouseEnter,f)||n.disabled===!0||c("handle")},onMouseLeave:f=>{ot(n.onMouseLeave,f)||c(null)},onPointerDown:f=>{if(ot(n.onPointerDown,f)||ot(n.onHandleDragStart,f))return;const g=f.target;g.setPointerCapture(f.pointerId);let O="handle";g.hasAttribute("data-corvu-resizable-handle-start-intersection")&&(O="startIntersection"),g.hasAttribute("data-corvu-resizable-handle-end-intersection")&&(O="endIntersection"),F?.onDragStart(f,O)},role:"separator",get"aria-controls"(){return $()?.ariaControls},get"aria-orientation"(){return E().orientation()},get"aria-valuemax"(){return $()?.ariaValueMax},get"aria-valuemin"(){return $()?.ariaValueMin},get"aria-valuenow"(){return $()?.ariaValueNow},get"data-active"(){return hn(h())},get"data-dragging"(){return hn(_())},get"data-orientation"(){return E().orientation()},"data-corvu-resizable-handle":""},i,{get children(){return[b(Y,{get when(){return Q()},get children(){var f=Xs();return f.addEventListener("mouseleave",g=>{r()?.contains(g.relatedTarget)===!0?c("handle"):c(null)}),f.addEventListener("mouseenter",()=>c("startIntersection")),f.style.setProperty("position","absolute"),f.style.setProperty("aspect-ratio","1 / 1"),f.style.setProperty("top","0"),f.style.setProperty("left","0"),f.style.setProperty("z-index","1"),te(g=>{var O=E().orientation()==="horizontal"?void 0:"100%",T=E().orientation()==="horizontal"?"100%":void 0,C=E().orientation()==="horizontal"?"translate3d(0, -100%, 0)":"translate3d(-100%, 0, 0)";return O!==g.e&&((g.e=O)!=null?f.style.setProperty("height",O):f.style.removeProperty("height")),T!==g.t&&((g.t=T)!=null?f.style.setProperty("width",T):f.style.removeProperty("width")),C!==g.a&&((g.a=C)!=null?f.style.setProperty("transform",C):f.style.removeProperty("transform")),g},{e:void 0,t:void 0,a:void 0}),f}}),Ee(()=>n.children),b(Y,{get when(){return v()},get children(){var f=Gs();return f.addEventListener("mouseleave",g=>{r()?.contains(g.relatedTarget)===!0?c("handle"):c(null)}),f.addEventListener("mouseenter",()=>c("endIntersection")),f.style.setProperty("position","absolute"),f.style.setProperty("aspect-ratio","1 / 1"),f.style.setProperty("bottom","0"),f.style.setProperty("right","0"),f.style.setProperty("z-index","1"),te(g=>{var O=E().orientation()==="horizontal"?void 0:"100%",T=E().orientation()==="horizontal"?"100%":void 0,C=E().orientation()==="horizontal"?"translate3d(0, 100%, 0)":"translate3d(100%, 0, 0)";return O!==g.e&&((g.e=O)!=null?f.style.setProperty("height",O):f.style.removeProperty("height")),T!==g.t&&((g.t=T)!=null?f.style.setProperty("width",T):f.style.removeProperty("width")),C!==g.a&&((g.a=C)!=null?f.style.setProperty("transform",C):f.style.removeProperty("transform")),g},{e:void 0,t:void 0,a:void 0}),f}})]}}))},rc=ic,kr=Ct(),oc=e=>e===void 0?kr:ni(`resizable-panel-${e}`),ac=e=>{if(e===void 0){const n=Pt(kr);if(!n)throw new Error("[corvu]: Resizable panel context not found. Make sure to call usePanelContext under <Resizable.Panel>");return n}const t=ii(`resizable-panel-${e}`);if(!t)throw new Error(`[corvu]: Resizable context with id "${e}" not found. Make sure to call usePanelContext under <Resizable.Panel contextId="${e}">`);return t},lc=e=>{const t=ct({initialSize:null,minSize:0,maxSize:1,collapsible:!1,collapsedSize:0,collapseThreshold:.05,panelId:wn()},e),[n,i]=Vt(t,["initialSize","minSize","maxSize","collapsible","collapsedSize","collapseThreshold","onResize","onCollapse","onExpand","contextId","panelId","ref","style","children"]),[r,o]=X(null),a=oe(()=>$r(n.contextId)),[l,s]=X(null);ue(()=>{const v=r();if(!v)return;const z=a(),E=pe(()=>z.registerPanel({id:n.panelId,element:v,initialSize:n.initialSize,minSize:n.minSize,maxSize:n.maxSize,collapsible:n.collapsible,collapsedSize:n.collapsedSize,collapseThreshold:n.collapseThreshold,onResize:n.onResize}));s(E),Qe(()=>{z.unregisterPanel(E.data.id)})});const c=()=>{const v=l();return v?v.size():typeof n.initialSize=="number"?n.initialSize:1},d=oe(v=>{const z=l();if(n.collapsible!==!0)return!1;const E=z?z.size()===de(n.collapsedSize,a().rootSize()):!1;return z&&v!==E&&(E&&n.onCollapse!==void 0?n.onCollapse(z.size()):!E&&n.onExpand!==void 0&&n.onExpand(z.size())),E}),u=(v,z)=>{const E=l();E&&E.resize(v,z??"both")},h=v=>{const z=l();z&&z.collapse(v??"both")},m=v=>{const z=l();z&&z.expand(v??"both")},_={get size(){return c()},get minSize(){return n.minSize},get maxSize(){return n.maxSize},get collapsible(){return n.collapsible},get collapsedSize(){return n.collapsedSize},get collapseThreshold(){return n.collapseThreshold},get collapsed(){return d()},resize:u,collapse:h,expand:m,get panelId(){return n.panelId}},w=Or(()=>n.children),Q=()=>{const v=w()();return vr(v)?v(_):v};return oe(()=>{const v=oc(n.contextId);return b(v.Provider,{value:{size:c,minSize:()=>n.minSize,maxSize:()=>n.maxSize,collapsible:()=>n.collapsible,collapsedSize:()=>n.collapsedSize,collapseThreshold:()=>n.collapseThreshold,collapsed:d,resize:u,collapse:h,expand:m,panelId:()=>n.panelId},get children(){return b(ai,ct({as:"div",ref(z){var E=oi(o,n.ref);typeof E=="function"&&E(z)},get style(){return ri({"flex-basis":c()*100+"%"},n.style)},get id(){return n.panelId},get"data-collapsed"(){return hn(d())},get"data-expanded"(){return hn(n.collapsible===!0&&!d())},get"data-orientation"(){return a().orientation()},"data-corvu-resizable-panel":""},i,{get children(){return pe(()=>Q())}}))}})})},sc=lc,mn=e=>{let t=e.desiredPercentage>=0?1/0:-1/0,n=e.initialSizes;for(const i of e.resizeActions){const r=i.negate!==!0?e.desiredPercentage:-e.desiredPercentage;let[o,a,l]=pn({desiredPercentage:r,side:"preceding",panels:i.precedingPanels,initialSizes:n,initialSizesStartIndex:0,collapsible:e.collapsible,rootSize:e.resizableData.rootSize}),[s,c,d]=pn({desiredPercentage:r,side:"following",panels:i.followingPanels,initialSizes:n,initialSizesStartIndex:i.precedingPanels.length,collapsible:e.collapsible,rootSize:e.resizableData.rootSize});i.negate===!0&&(o=-o,s=-s),l&&(s=o),d&&(o=s),e.desiredPercentage>=0?t=Math.min(t,Math.min(o,s)):t=Math.max(t,Math.max(o,s)),n=[...a,...c]}return t},pn=e=>{e.desiredPercentage=Ae(e.desiredPercentage);const t=cc({side:e.side,desiredPercentage:e.desiredPercentage});let n=0;const i=e.initialSizes.slice(e.initialSizesStartIndex,e.initialSizesStartIndex+e.panels.length);for(let m=e.side==="preceding"?e.panels.length-1:0;e.side==="preceding"?m>=0:m<e.panels.length;e.side==="preceding"?m--:m++){const _=e.panels[m],w=e.initialSizes[m+e.initialSizesStartIndex],Q=de(_.data.collapsedSize??0,e.rootSize);if(_.data.collapsible&&w===Q)continue;const p=Ae(e.desiredPercentage-n);if(p===0)break;switch(t){case"precedingDecreasing":{const v=de(_.data.minSize,e.rootSize);i[m]=Math.max(v,w+p),n+=i[m]-w;break}case"followingDecreasing":{const v=de(_.data.minSize,e.rootSize);i[m]=Math.max(v,w-p),n-=i[m]-w;break}case"precedingIncreasing":{const v=de(_.data.maxSize,e.rootSize);i[m]=Math.min(v,w+p),n+=i[m]-w;break}case"followingIncreasing":{const v=de(_.data.maxSize,e.rootSize);i[m]=Math.min(v,w-p),n-=i[m]-w;break}}}if(n=Ae(n),!e.collapsible||n===e.desiredPercentage)return[n,i,!1];const r=e.side==="preceding"?e.panels.length-1:0,o=e.panels[r];if(!o.data.collapsible)return[n,i,!1];const a=Ae(e.desiredPercentage-n);let l=!1;const s=e.initialSizes[r+e.initialSizesStartIndex],c=de(o.data.minSize,e.rootSize),d=de(o.data.collapsedSize??0,e.rootSize),u=Math.min(de(o.data.collapseThreshold??0,e.rootSize),c-d),h=s===d;if(t==="precedingDecreasing"&&!h&&Math.abs(a)>=u)n-=i[r]-s,i[r]=d,n+=i[r]-s,l=!0;else if(t==="precedingIncreasing"&&h&&Math.abs(a)>=u){const m=de(o.data.minSize,e.rootSize);if(i[r]=m,Math.abs(a)>=m-d){const _=de(o.data.maxSize,e.rootSize);i[r]=Math.min(_,s+a)}else l=!0;n+=i[r]-s}else if(t==="followingDecreasing"&&!h&&Math.abs(a)>=u)n+=i[r]-s,i[r]=d,n-=i[r]-s,l=!0;else if(t==="followingIncreasing"&&h&&Math.abs(a)>=u){const m=de(o.data.minSize,e.rootSize);if(i[r]=m,Math.abs(a)>=m-d){const _=de(o.data.maxSize,e.rootSize);i[r]=Math.min(_,s-a)}else l=!0;n-=i[r]-s}return[n,i,l]},cc=e=>{switch(e.side){case"preceding":return e.desiredPercentage>=0?"precedingIncreasing":"precedingDecreasing";case"following":return e.desiredPercentage>=0?"followingDecreasing":"followingIncreasing"}},bn=e=>{let t=e.initialSizes;for(const i of e.resizeActions){const[,r]=pn({desiredPercentage:i.deltaPercentage,side:"preceding",panels:i.precedingPanels,initialSizes:t,initialSizesStartIndex:0,collapsible:e.collapsible,rootSize:e.resizableData.rootSize}),[,o]=pn({desiredPercentage:i.deltaPercentage,side:"following",panels:i.followingPanels,initialSizes:t,initialSizesStartIndex:i.precedingPanels.length,collapsible:e.collapsible,rootSize:e.resizableData.rootSize});t=[...r,...o]}t=t.map(Ae);const n=t.reduce((i,r)=>i+r,0);if(n!==1){const r=(n-1)/t.length;t=t.map(o=>o-r)}e.resizableData.setSizes(t.map(Ae))},Rn=e=>{let[t,n]=Ut({panels:e.panels,focusedElement:e.panel.data.element});const i=e.panels.indexOf(e.panel);if(i===0?e.strategy="following":i===e.panels.length-1&&(e.strategy="preceding"),e.strategy==="both"){const r=[...t,e.panel],o=[e.panel,...n],a=mn({desiredPercentage:e.deltaPercentage/2,initialSizes:e.initialSizes,collapsible:!0,resizeActions:[{precedingPanels:r,followingPanels:n},{precedingPanels:t,followingPanels:o,negate:!0}],resizableData:{rootSize:e.resizableData.rootSize}});bn({initialSizes:e.initialSizes,collapsible:!0,resizeActions:[{precedingPanels:r,followingPanels:n,deltaPercentage:a},{precedingPanels:t,followingPanels:o,deltaPercentage:-a}],resizableData:e.resizableData})}else{t=e.strategy==="preceding"?t:[...t,e.panel],n=e.strategy==="following"?n:[e.panel,...n],e.strategy==="preceding"&&(e.deltaPercentage=-e.deltaPercentage);const r=mn({desiredPercentage:e.deltaPercentage,initialSizes:e.initialSizes,collapsible:e.collapsible,resizeActions:[{precedingPanels:t,followingPanels:n}],resizableData:{rootSize:e.resizableData.rootSize}});bn({initialSizes:e.initialSizes,collapsible:!0,resizeActions:[{precedingPanels:t,followingPanels:n,deltaPercentage:r}],resizableData:e.resizableData})}},Di=e=>{if(e.altKey&&e.panels.length>2){let t=e.panels.filter(m=>!!(e.handle.compareDocumentPosition(m.data.element)&Node.DOCUMENT_POSITION_PRECEDING)).length-1;const n=t===0;n&&(t++,e.deltaPercentage=-e.deltaPercentage);const i=e.panels[t],r=e.initialSizes[t],o=de(i.data.minSize,e.resizableData.rootSize)-r,a=de(i.data.maxSize,e.resizableData.rootSize)-r,l=Math.max(o,Math.min(e.deltaPercentage*2,a))/2,[s,c]=Ut({panels:e.panels,focusedElement:i.data.element}),d=[...s,i],u=[i,...c],h=mn({desiredPercentage:l,initialSizes:e.initialSizes,collapsible:!1,resizeActions:[{precedingPanels:d,followingPanels:c},{precedingPanels:s,followingPanels:u,negate:!0}],resizableData:{rootSize:e.resizableData.rootSize}});e.resizableData.handleCursorStyle===!0&&Ti({orientation:e.resizableData.orientation,desiredPercentage:e.deltaPercentage,distributablePercentage:h,revertConstraints:n}),bn({initialSizes:e.initialSizes,collapsible:!1,resizeActions:[{precedingPanels:d,followingPanels:c,deltaPercentage:h},{precedingPanels:s,followingPanels:u,deltaPercentage:-h}],resizableData:e.resizableData})}else{const[t,n]=Ut({panels:e.panels,focusedElement:e.handle}),i=mn({desiredPercentage:e.deltaPercentage,initialSizes:e.initialSizes,collapsible:!0,resizeActions:[{precedingPanels:t,followingPanels:n}],resizableData:{rootSize:e.resizableData.rootSize}});if(bn({initialSizes:e.initialSizes,collapsible:!0,resizeActions:[{precedingPanels:t,followingPanels:n,deltaPercentage:i}],resizableData:e.resizableData}),e.resizableData.handleCursorStyle){const r=Ae(e.deltaPercentage),o=Ae(i);let a=!1;const l=t[t.length-1];if(l.data.collapsible){const c=de(l.data.collapsedSize??0,e.resizableData.rootSize);(l.size()===c&&r>o||l.size()!==c&&r<o)&&(a=!0)}const s=n[0];if(s.data.collapsible){const c=de(s.data.collapsedSize??0,e.resizableData.rootSize);(s.size()===c&&r<o||s.size()!==c&&r>o)&&(a=!0)}Ti({orientation:e.resizableData.orientation,desiredPercentage:e.deltaPercentage,distributablePercentage:i,betweenCollapse:a})}}},dc=e=>{const t=ct({orientation:"horizontal",initialSizes:[],keyboardDelta:.1,handleCursorStyle:!0},e),[n,i]=Vt(t,["orientation","sizes","onSizesChange","initialSizes","keyboardDelta","handleCursorStyle","contextId","ref","style","children"]),[r,o]=js({value:()=>n.sizes,initialValue:[],onChange:n.onSizesChange}),[a,l]=X(null),s=Ws({element:a,dimension:()=>n.orientation==="horizontal"?"width":"height"}),[c,d]=X([]),u=[],h=x=>{const L=c().filter(T=>!!(x.element.compareDocumentPosition(T.data.element)&Node.DOCUMENT_POSITION_PRECEDING)).length,R=u[L]===void 0||u[L]===x.id,j=r()[L]!==void 0;let f=null;x.initialSize!==null?f=de(x.initialSize,s()):n.initialSizes[L]!==void 0&&R&&(f=de(n.initialSizes[L],s())),f=f??.5,o(T=>{let C=[...T];const I=C.reduce((G,k)=>G+k,0);if((R&&!j||!R)&&I===1){const G=f/C.length;C=C.map(k=>k-G)}return R?(j||(C[L]=f),u[L]=x.id):(C.splice(L,0,f),u.splice(L,0,x.id)),C});const g=oe(()=>{const T=u.indexOf(x.id);return r()[T]});ue(()=>x.onResize?.(g()));const O={data:x,size:g,resize:(T,C)=>_(u.indexOf(x.id),T,C),collapse:T=>w(u.indexOf(x.id),T),expand:T=>Q(u.indexOf(x.id),T)};return d(T=>{const C=[...T];return C.push(O),C.sort((I,G)=>Fs(I.data.element,G.data.element)),C}),O},m=x=>{d(L=>L.filter(R=>R.data.id!==x));const P=u.indexOf(x);u.splice(P,1),o(L=>{let R=[...L];R.splice(P,1);const g=(R.reduce((O,T)=>O+T,0)-1)/R.length;return R=R.map(O=>O+g),R})};ue(()=>{n.onSizesChange!==void 0&&n.onSizesChange(r())});const _=(x,P,L)=>{pe(()=>{const R=c()[x];if(!R)return;const j=de(R.data.minSize,s()),f=de(R.data.maxSize,s()),g=de(P,s()),T=Math.max(j,Math.min(g,f))-r()[x];Rn({deltaPercentage:T,strategy:L??"both",panel:R,panels:c(),initialSizes:c().map(C=>C.size()),collapsible:!1,resizableData:{rootSize:s(),orientation:n.orientation,setSizes:o}})})},w=(x,P)=>{pe(()=>{const L=c()[x];if(!L)return;const R=r()[x],j=de(L.data.collapsedSize??0,s());if(!L.data.collapsible||R===j)return;const f=j-R;Rn({deltaPercentage:f,strategy:P??"both",panel:L,panels:c(),initialSizes:c().map(g=>g.size()),collapsible:!0,resizableData:{rootSize:s(),orientation:n.orientation,setSizes:o}})})},Q=(x,P)=>{pe(()=>{const L=c()[x];if(!L)return;const R=r()[x],j=de(L.data.collapsedSize??0,s());if(!L.data.collapsible||R!==j)return;const g=de(L.data.minSize,s())-R;Rn({deltaPercentage:g,strategy:P??"both",panel:L,panels:c(),initialSizes:c().map(O=>O.size()),collapsible:!0,resizableData:{rootSize:s(),orientation:n.orientation,setSizes:o}})})};let p=null,v=!1;const z=(x,P,L)=>{(p===null||v!==L)&&(p=c().map(R=>R.size()),v=L),Di({deltaPercentage:P/s(),altKey:L,handle:x,panels:c(),initialSizes:p,resizableData:{rootSize:s(),handleCursorStyle:n.handleCursorStyle,orientation:n.orientation,setSizes:o}})},E=(x,P,L)=>{if(P.key==="Enter"){const[f,g]=Ut({panels:c(),focusedElement:x});let O=f[f.length-1];if((!O||!O.data.collapsible)&&(O=g[0],!O||!O.data.collapsible))return;const T=O.size(),C=de(O.data.collapsedSize??0,s());T===C?O.expand("following"):O.collapse("following");return}let R=null;if(n.orientation==="horizontal"&&P.key==="ArrowLeft"||n.orientation==="vertical"&&P.key==="ArrowUp"||P.key==="Home"?P.shiftKey||P.key==="Home"?R=-1:R=-de(n.keyboardDelta,s()):(n.orientation==="horizontal"&&P.key==="ArrowRight"||n.orientation==="vertical"&&P.key==="ArrowDown"||P.key==="End")&&(P.shiftKey||P.key==="End"?R=1:R=de(n.keyboardDelta,s())),R===null)return;P.preventDefault();const j=c().map(f=>f.size());Di({deltaPercentage:R,altKey:L,handle:x,panels:c(),initialSizes:j,resizableData:{rootSize:s(),handleCursorStyle:!1,orientation:n.orientation,setSizes:o}})},$={get sizes(){return r()},setSizes:o,get orientation(){return n.orientation},get keyboardDelta(){return n.keyboardDelta},get handleCursorStyle(){return n.handleCursorStyle},resize:_,collapse:w,expand:Q},F=Or(()=>n.children),A=()=>{const x=F()();return vr(x)?x($):x};return oe(()=>{const x=Bs(n.contextId),P=qs(n.contextId);return b(x.Provider,{value:{sizes:r,setSizes:o,orientation:()=>n.orientation,keyboardDelta:()=>n.keyboardDelta,handleCursorStyle:()=>n.handleCursorStyle,resize:_,collapse:w,expand:Q},get children(){return b(P.Provider,{value:{sizes:r,setSizes:o,orientation:()=>n.orientation,keyboardDelta:()=>n.keyboardDelta,handleCursorStyle:()=>n.handleCursorStyle,rootSize:s,panels:c,registerPanel:h,unregisterPanel:m,onDrag:z,onDragEnd:()=>p=null,onKeyDown:E,resize:_,collapse:w,expand:Q},get children(){return b(ai,ct({as:"div",ref(L){var R=oi(l,n.ref);typeof R=="function"&&R(L)},get style(){return ri({display:"flex","flex-direction":n.orientation==="horizontal"?"row":"column"},n.style)},get"data-orientation"(){return n.orientation},"data-corvu-resizable-root":""},i,{get children(){return pe(()=>A())}}))}})}})})},uc=dc,fc=Object.assign(uc,{Panel:sc,Handle:rc,useContext:Ys,usePanelContext:ac}),Ve=fc,gc=D("<p>"),hc=D("<div class=results-empty><i></i><h4>"),mc=D('<button type=button class=status-action title="Load the violating execution as a trace you can walk step by step"><i class="codicon codicon-debug-alt"></i>Replay counterexample'),pc=D("<b>Run"),bc=D("<b>Check"),yc=D("<code>always"),vc=D("<code>eventually"),Oc=D("<div class=execution-error-box>"),Ht=D("<div class=console>"),Tn=D("<pre>"),wc=D("<pre class=console-warning>"),_c=D('<div class=execution-content><div class=tab role=tablist><button type=button class=tab-clear-button title="Clear results"><i class="codicon codicon-clear-all"></i></button></div><div class=tab-content>'),$c=D("<button type=button role=tab class=tab_button><i></i><span>"),Sc=D("<div class=status-detail>"),xc=D("<div role=status><i></i><div class=status-text><div class=status-title>");const Qi=Jn(()=>Ne(()=>import("./Graph-Cx9rnvJ1.js"),__vite__mapDeps([9,10,11,1,12]))),Cc=Jn(()=>Ne(()=>import("./CommGraph-DnrzC8dZ.js"),__vite__mapDeps([13,10,11,1]))),Pc=e=>{const t=e;return!!t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.tagName==="SELECT"||t.isContentEditable||!!t.closest?.(".cm-editor"))};function ft(e){return(()=>{var t=hc(),n=t.firstChild,i=n.nextSibling;return y(i,()=>e.title),y(t,b(Y,{get when(){return e.children},get children(){var r=gc();return y(r,()=>e.children),r}}),null),te(()=>ge(n,`codicon codicon-${e.icon}`)),t})()}function Fi(e){return b(Ve,{get id(){return e.id},orientation:"vertical",class:"states-layout",get children(){return[b(Ve.Panel,{initialSize:.4,minSize:.15,class:"states-pane",get children(){return b(xs,{get node(){return e.exec.selectedVM()},onClose:()=>e.exec.setSelectedVM(null)})}}),b(Ve.Handle,{class:"Resizable-handle"}),b(Ve.Panel,{initialSize:.6,minSize:.15,class:"states-pane",get children(){return e.graph}})]}})}function kc(e){const t=e.exec;let n,i;const r=()=>[...t.mode()==="interactive"?[{id:"step",label:"Step",icon:"debug-step-over"}]:[],{id:"console",label:"Console",icon:"terminal"},{id:"execution",label:"Execution",icon:"output"},{id:"msg_flow",label:"Messages",icon:"send"},{id:"vm_states",label:"States",icon:"type-hierarchy-sub"}],o=(d,u)=>{u?.lines&&e.editor.highlightLines?.(u.lines)};ue(Ue([t.stdout,t.activeTab],()=>{n&&(n.scrollTop=n.scrollHeight)})),ue(Ue([t.executionOutput,t.activeTab],()=>{i&&(i.scrollTop=i.scrollHeight)})),ue(()=>{if(t.activeTab()!=="vm_states"||t.mode()==="check")return;const d=u=>{if(u.key!=="ArrowLeft"&&u.key!=="ArrowRight"||u.ctrlKey||u.metaKey||u.altKey||u.shiftKey||Pc(u.target)||t.traceNodes().length===0)return;const h=t.selectedVM()?.stepIndex??-1;t.selectTraceStep(u.key==="ArrowRight"?h+1:h-1),u.preventDefault()};window.addEventListener("keydown",d),Qe(()=>window.removeEventListener("keydown",d))});const a=d=>{const u=e.editor.safeEditorView?.();if(!u||!d?.length)return[];const h=u.state.doc,m=d.filter(_=>_>0&&_<=h.lines).map(_=>h.line(_).text.trim()).filter(_=>_!=="");return[...new Set(m)]},l=()=>b(Y,{get when(){return Ee(()=>t.mode()==="check")()&&t.counterexample().length>0},get children(){var d=mc();return d.$$click=()=>t.replayCounterexample(),d}}),s=()=>b(Ln,{get children(){return[b(Se,{get when(){return Ee(()=>t.mode()==="check")()&&t.busy()==="check"},get children(){return b(ft,{icon:"loading codicon-modifier-spin",title:"Model checking…",children:"Exploring every reachable state of the program."})}}),b(Se,{get when(){return Ee(()=>t.mode()==="check")()&&t.checkStateCount()===0},get children(){return b(ft,{icon:"type-hierarchy-sub",title:"No state graph",children:"The check did not produce any state."})}}),b(Se,{get when(){return t.mode()==="check"},get children(){return b(Fi,{id:"checker-states-layout",exec:t,get graph(){return b(Y,{get when(){return t.checkStateCount()<=Vn},get fallback(){return b(ft,{icon:"graph",title:"Graph too large to display",get children(){return[Ee(()=>t.checkStateCount().toLocaleString())," states were explored, above the display limit of ",Vn,".",b(Y,{get when(){return t.counterexample().length>0},get children(){return[" ","Use “Replay counterexample” to inspect the violating trace."]}})]}})},get children(){return b(Qi,{get nodes(){return t.checkGraph().nodes},get edges(){return t.checkGraph().edges},get theme(){return e.theme},onEdgeClick:o,get onNodeSelect(){return t.setSelectedVM}})}})}})}}),b(Se,{get when(){return t.traceNodes().length>0},get children(){return b(Fi,{id:"vm-states-layout",exec:t,get graph(){return b(Qi,{get nodes(){return t.traceGraph().nodes},get edges(){return t.traceGraph().edges},get theme(){return e.theme},onEdgeClick:o,get onNodeSelect(){return t.setSelectedVM},get selectedNode(){return t.selectedVM()?.stepIndex??null}})}})}}),b(Se,{when:!0,get children(){return b(ft,{icon:"type-hierarchy-sub",title:"No states yet",get children(){return[pc()," shows the states of one execution; ",bc()," explores all of them and verifies your ",yc()," /"," ",vc()," properties."]}})}})]}}),c=()=>b(Ln,{get children(){return[b(Se,{get when(){return Ee(()=>t.activeTab()==="step")()&&t.mode()==="interactive"},get children(){return b(As,{get choices(){return t.choices()},get finished(){return t.interactiveFinished()},get deadlock(){return t.interactiveDeadlock()},get stepCount(){return t.history().length},getSourceLines:a,get onExecute(){return t.executeStep},get onPreviewLines(){return e.onPreviewLines},get onUndo(){return t.undoStep},get onRestart(){return t.startInteractive},get onStop(){return t.stopInteractive}})}}),b(Se,{get when(){return t.activeTab()==="execution"},get children(){var d=Ht(),u=i;return typeof u=="function"?Ye(u,d):i=d,y(d,b(Y,{get when(){return t.executionOutput()||t.structuredError()},get fallback(){return b(ft,{icon:"output",title:"No execution trace",children:"The instructions executed by each process will be listed here."})},get children(){return b(Y,{get when(){return t.executionError()},get fallback(){return(()=>{var h=Tn();return y(h,()=>t.executionOutput()),h})()},get children(){var h=Oc();return y(h,b(Y,{get when(){return t.structuredError()},get fallback(){return(()=>{var m=Tn();return y(m,()=>t.executionOutput()),m})()},children:m=>b(Tl,{get error(){return m()},get onFileClick(){return e.onErrorFileClick}})})),h}})}})),d}}),b(Se,{get when(){return t.activeTab()==="msg_flow"},get children(){var d=Ht();return y(d,b(Y,{get when(){return t.messageFlow().length>0},get fallback(){return b(ft,{icon:"send",title:"No messages",get children(){return t.mode()==="check"?"Message flow is shown for a single execution: use Run, Step or Replay counterexample.":"Messages exchanged through channels will be drawn here."}})},get children(){return b(Cc,{get events(){return t.messageFlow()},get editor(){return e.editor}})}})),d}}),b(Se,{get when(){return t.activeTab()==="vm_states"},get children(){var d=Ht();return y(d,s),d}}),b(Se,{when:!0,get children(){var d=Ht();return y(d,b(Y,{get when(){return t.stdout()||t.stdoutWarning()},get fallback(){return b(ft,{icon:"terminal",title:"No output",get children(){return Ee(()=>t.mode()==="check")()?"Model checking does not print. Use Run or Step to see the program output.":t.mode()==="none"?`Press Run (${e.runShortcut}) to execute the program.`:"The program did not print anything."}})},get children(){return[(()=>{var u=Tn(),h=n;return typeof h=="function"?Ye(h,u):n=u,y(u,()=>t.stdout()),u})(),b(Y,{get when(){return t.stdoutWarning()},children:u=>(()=>{var h=wc();return y(h,u),h})()})]}})),d}})]}});return(()=>{var d=_c(),u=d.firstChild,h=u.firstChild,m=u.nextSibling;return y(u,b(Oe,{get each(){return r()},children:_=>(()=>{var w=$c(),Q=w.firstChild,p=Q.nextSibling;return w.$$click=()=>t.setActiveTab(_.id),y(p,()=>_.label),te(v=>{var z=t.activeTab()===_.id,E=t.activeTab()===_.id,$=!!(_.id==="execution"&&t.executionError()),F=_.id==="step"&&t.activeTab()!=="step",A=_.label,S=`codicon codicon-${_.icon}`;return z!==v.e&&re(w,"aria-selected",v.e=z),E!==v.t&&w.classList.toggle("active",v.t=E),$!==v.a&&w.classList.toggle("execution-error",v.a=$),F!==v.o&&w.classList.toggle("highlighted",v.o=F),A!==v.i&&re(w,"title",v.i=A),S!==v.n&&ge(Q,v.n=S),v},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),w})()}),h),h.$$click=()=>t.reset(),y(d,b(Y,{get when(){return t.status()},children:_=>(()=>{var w=xc(),Q=w.firstChild,p=Q.nextSibling,v=p.firstChild;return y(v,()=>_().title),y(p,b(Y,{get when(){return _().detail},get children(){var z=Sc();return y(z,()=>_().detail),z}}),null),y(w,l,null),te(z=>{var E=`status-banner tone-${_().tone}`,$=`codicon codicon-${_().icon}${_().tone==="busy"?" codicon-modifier-spin":""}`;return E!==z.e&&ge(w,z.e=E),$!==z.t&&ge(Q,z.t=$),z},{e:void 0,t:void 0}),w})()}),m),y(m,c),te(()=>h.disabled=t.mode()==="none"&&!t.status()),d})()}xe(["click"]);var rn=D("<div class=file-entry-error>"),Ec=D('<div class=file-entry-input-wrapper><div class=file-entry-rename-input><i class="codicon codicon-folder"></i><input class=rename-input type=text>'),Er=D("<div class=file-entry-input-wrapper><div class=file-entry-input><i></i><input type=text>"),zc=D("<div class=directory-children>"),Rc=D('<div class=context-menu role=menu><button type=button><i class="codicon codicon-copy"></i>Copy</button><button type=button><i class="codicon codicon-clippy"></i>Paste</button><div class=context-menu-separator></div><button type=button><i class="codicon codicon-edit"></i>Rename</button><button type=button><i class="codicon codicon-trash"></i>Delete'),Tc=D('<div class=directory role=group><div class=directory-header role=treeitem tabindex=0><i></i><i class="codicon codicon-folder">'),Ii=D("<span>"),Ac=D('<div class=file-entry-input-wrapper><div class=file-entry-rename-input><i class="codicon codicon-file"></i><input class=rename-input type=text>'),Dc=D('<div class=context-menu role=menu><button type=button><i class="codicon codicon-copy"></i>Copy</button><button type=button><i class="codicon codicon-clippy"></i>Paste</button><div class=context-menu-separator></div><button type=button><i class="codicon codicon-edit"></i>Rename</button><button type=button class=context-menu-delete-btn><i class="codicon codicon-trash"></i>Delete'),Qc=D("<div class=file role=treeitem tabindex=0>"),Fc=D('<i class="codicon codicon-file">'),Ic=D('<section class=file-explorer aria-label="File explorer"><div class=file-explorer-header><h3>Explorer</h3><div class=file-explorer-actions><button type=button class=header-action-btn><i class="codicon codicon-new-file"></i></button><button type=button class=header-action-btn><i class="codicon codicon-new-folder"></i></button><button type=button class=header-action-btn title="Download all files as .zip"><i class="codicon codicon-desktop-download"></i></button></div></div><div class=file-explorer-content role=tree aria-multiselectable=true tabindex=-1>');const zr=e=>{const t=e.path?`${e.path}/${e.entry.name}`:e.entry.name,[n,i]=X(!1),[r,o]=X(!1),[a,l]=X({x:0,y:0}),[s,c]=X(null),d=()=>e.isContextMenuOpenFor===t,u=f=>{e.setContextMenuOpenFor(f?t:null)},h=()=>e.currentlyRenaming===t;ue(()=>{!h()&&s()&&c(null)});const m=()=>e.selectedFiles.includes(t),_=f=>f==="deps"||f.startsWith("deps/"),w=f=>{if(f.metaKey||f.ctrlKey){const g=m()?e.selectedFiles.filter(O=>O!==t):[...e.selectedFiles,t];e.onSelectionChange(g),m()||e.onFileSelect(t)}else if(f.shiftKey&&e.selectedFiles.length>0){const g=e.selectedFiles[e.selectedFiles.length-1],O=A(g,t);e.onSelectionChange(O),e.onFileSelect(t)}else e.onSelectionChange([t]),e.onFileSelect(t)},Q=f=>{f.preventDefault(),f.stopPropagation(),!_(t)&&(m()||e.onSelectionChange([t]),l({x:f.clientX,y:f.clientY}),u(!0))},p=()=>{u(!1),e.onCopy(e.selectedFiles)},v=()=>{u(!1);const f=e.entry.type==="directory"?t:e.path;e.onPaste(f)},z=()=>{u(!1),e.startRename(t)},E=()=>{u(!1),e.selectedFiles.length>1?e.showDeleteConfirmDialog(e.selectedFiles):e.showDeleteConfirmDialog([t])},$=f=>{if(f=f.trim(),f&&f!==e.entry.name){const g=t.split("/");g.pop();const O=g.join("/");if(e.checkNameConflict&&e.checkNameConflict(O,f)){c("A file or folder with this name already exists.");return}c(null),e.onRenameEntry(t,f)}e.startRename("")},F=()=>{e.startRename(""),c(null)};ue(()=>{const f=g=>{g.target.closest(".context-menu")||u(!1)};d()&&(document.addEventListener("click",f,{capture:!0}),Qe(()=>document.removeEventListener("click",f,{capture:!0})))});const A=(f,g)=>{const O=S(),T=O.indexOf(f),C=O.indexOf(g);if(T===-1||C===-1)return[g];const I=Math.min(T,C),G=Math.max(T,C);return O.slice(I,G+1)},S=()=>e.allVisibleFiles,x=f=>{if(_(t)){f.preventDefault();return}if(f.dataTransfer.effectAllowed="move",o(!0),m()&&e.selectedFiles.length>1){const g=e.selectedFiles;if(g.some(O=>_(O))){f.preventDefault();return}f.dataTransfer.setData("text/plain",JSON.stringify(g))}else f.dataTransfer.setData("text/plain",JSON.stringify([t])),e.onSelectionChange([t]);f.stopPropagation()},P=()=>{o(!1)},L=f=>{if(f.preventDefault(),f.stopPropagation(),_(t)){f.dataTransfer.dropEffect="none";return}f.dataTransfer?.files.length?f.dataTransfer.dropEffect="copy":f.dataTransfer.dropEffect="move",i(!0)},R=f=>{const g=f.currentTarget.getBoundingClientRect(),O=f.clientX>=g.left&&f.clientX<=g.right,T=f.clientY>=g.top&&f.clientY<=g.bottom;(!O||!T)&&i(!1)},j=f=>{if(f.preventDefault(),f.stopPropagation(),i(!1),console.log("Drop event on:",t,"with data:",f.dataTransfer?.getData("text/plain")),_(t))return;if(f.dataTransfer?.files.length){e.entry.type==="directory"&&e.onFileUpload(Array.from(f.dataTransfer.files),t);return}const g=f.dataTransfer.getData("text/plain");if(g&&e.entry.type==="directory")try{const O=JSON.parse(g);console.log("Moving paths:",O,"to:",t);for(const T of O){if(T.split("/").slice(0,-1).join("/")===t){console.log("Skipping move - already in destination:",T);continue}const I=T.split("/").pop();if(e.checkNameConflict&&e.checkNameConflict(t,I)){e.showConfirmDialog&&e.showConfirmDialog(O,t,I);return}}O.forEach(T=>{T.split("/").slice(0,-1).join("/")!==t&&e.onMoveEntry(T,t)})}catch{if(console.log("Fallback: moving single item:",g,"to:",t),g.split("/").slice(0,-1).join("/")===t){console.log("Skipping move - already in destination:",g);return}const C=g.split("/").pop();if(e.checkNameConflict&&e.checkNameConflict(t,C)){e.showConfirmDialog&&e.showConfirmDialog([g],t,C);return}e.onMoveEntry(g,t)}};if(e.entry.type==="directory"){const[f,g]=X(!0);ue(()=>{e.creating&&e.creating.parentPath===t&&g(!0)});const O=C=>[...C].sort((I,G)=>I.type!==G.type?I.type==="directory"?-1:1:I.name.toLowerCase().localeCompare(G.name.toLowerCase())),T=C=>{g(!f()),w(C)};return(()=>{var C=Tc(),I=C.firstChild,G=I.firstChild;return G.nextSibling,C.addEventListener("drop",j),C.addEventListener("dragleave",R),C.addEventListener("dragover",L),I.addEventListener("dragend",P),I.addEventListener("dragstart",x),I.$$contextmenu=Q,I.$$keydown=k=>{k.target===k.currentTarget&&(k.key==="Enter"||k.key===" "?(k.preventDefault(),T(k)):k.key==="ArrowRight"&&!f()?(k.preventDefault(),g(!0)):k.key==="ArrowLeft"&&f()&&(k.preventDefault(),g(!1)))},I.$$click=T,y(I,b(Y,{get when(){return h()},get fallback(){return(()=>{var k=Ii();return y(k,()=>e.entry.name),k})()},get children(){var k=Ec(),U=k.firstChild,H=U.firstChild,J=H.nextSibling;return Ye(q=>{q&&setTimeout(()=>{q.focus(),q.select()},10)},J),J.addEventListener("blur",q=>$(q.currentTarget.value)),J.$$keydown=q=>{q.key==="Enter"?(q.preventDefault(),$(q.currentTarget.value)):q.key==="Escape"&&(q.preventDefault(),F())},y(k,b(Y,{get when(){return s()},get children(){var q=rn();return y(q,s),q}}),null),te(()=>J.value=e.entry.name),k}}),null),y(C,b(Y,{get when(){return f()},get children(){var k=zc();return y(k,b(Oe,{get each(){return O(e.entry.children||[])},children:U=>b(zr,{entry:U,path:t,get onFileSelect(){return e.onFileSelect},get getFilePath(){return e.getFilePath},get activeFile(){return e.activeFile},get onMoveEntry(){return e.onMoveEntry},get onRenameEntry(){return e.onRenameEntry},get onDeleteEntry(){return e.onDeleteEntry},get onCopy(){return e.onCopy},get onPaste(){return e.onPaste},get isPasteEnabled(){return e.isPasteEnabled},get selectedFiles(){return e.selectedFiles},get onSelectionChange(){return e.onSelectionChange},get onFileUpload(){return e.onFileUpload},get checkNameConflict(){return e.checkNameConflict},get showConfirmDialog(){return e.showConfirmDialog},get showDeleteConfirmDialog(){return e.showDeleteConfirmDialog},get allVisibleFiles(){return e.allVisibleFiles},get creating(){return e.creating},get onCreateCommit(){return e.onCreateCommit},get onCreateCancel(){return e.onCreateCancel},get creationError(){return e.creationError},get setCreationError(){return e.setCreationError},get createCommitInProgress(){return e.createCommitInProgress},get currentlyRenaming(){return e.currentlyRenaming},get startRename(){return e.startRename},get isContextMenuOpenFor(){return e.isContextMenuOpenFor},get setContextMenuOpenFor(){return e.setContextMenuOpenFor}})}),null),y(k,b(Y,{get when(){return e.creating&&e.creating.parentPath===t},get children(){var U=Er(),H=U.firstChild,J=H.firstChild,q=J.nextSibling;return q.$$input=()=>{e.setCreationError&&e.setCreationError(null)},q.addEventListener("blur",Z=>{if(!e.createCommitInProgress||!e.createCommitInProgress()){const ee=Z.currentTarget.value.trim();e.onCreateCommit(ee)}}),q.$$keydown=Z=>{if(Z.key==="Enter"){Z.preventDefault();const ee=Z.currentTarget.value.trim();e.onCreateCommit(ee)}else Z.key==="Escape"&&(Z.preventDefault(),e.onCreateCancel())},Ye(Z=>{Z&&e.creating&&e.creating.parentPath===t&&setTimeout(()=>Z.focus(),10)},q),y(U,b(Y,{get when(){return e.creationError},get children(){var Z=rn();return y(Z,()=>e.creationError),Z}}),null),te(()=>ge(J,`codicon codicon-${e.creating.type==="file"?"file":"folder"}`)),U}}),null),k}}),null),y(C,b(Y,{get when(){return d()},get children(){var k=Rc(),U=k.firstChild,H=U.nextSibling,J=H.nextSibling,q=J.nextSibling,Z=q.nextSibling;return k.$$keydown=ee=>{ee.stopPropagation(),ee.key==="Escape"&&u(!1)},k.$$click=ee=>ee.stopPropagation(),k.style.setProperty("position","fixed"),k.style.setProperty("z-index","1000"),U.$$click=p,H.$$click=v,q.$$click=z,Z.$$click=E,te(ee=>{var fe=`${a().y}px`,ae=`${a().x}px`,le=!e.isPasteEnabled;return fe!==ee.e&&((ee.e=fe)!=null?k.style.setProperty("top",fe):k.style.removeProperty("top")),ae!==ee.t&&((ee.t=ae)!=null?k.style.setProperty("left",ae):k.style.removeProperty("left")),le!==ee.a&&(H.disabled=ee.a=le),ee},{e:void 0,t:void 0,a:void 0}),k}}),null),te(k=>{var U=!!n(),H=!!r(),J=!!(m()&&!h()),q=f(),Z=m(),ee=!!_(t),fe=!_(t),ae=`codicon codicon-chevron-${f()?"down":"right"}`;return U!==k.e&&C.classList.toggle("drag-over",k.e=U),H!==k.t&&C.classList.toggle("dragging",k.t=H),J!==k.a&&C.classList.toggle("selected",k.a=J),q!==k.o&&re(I,"aria-expanded",k.o=q),Z!==k.i&&re(I,"aria-selected",k.i=Z),ee!==k.n&&I.classList.toggle("read-only",k.n=ee),fe!==k.s&&re(I,"draggable",k.s=fe),ae!==k.h&&ge(G,k.h=ae),k},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),C})()}return(()=>{var f=Qc();return f.$$keydown=g=>{g.target===g.currentTarget&&(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),w(g))},f.$$click=w,f.$$contextmenu=Q,f.addEventListener("dragend",P),f.addEventListener("dragstart",x),y(f,b(Y,{get when(){return h()},get fallback(){return[Fc(),(()=>{var g=Ii();return y(g,()=>e.entry.name),g})()]},get children(){var g=Ac(),O=g.firstChild,T=O.firstChild,C=T.nextSibling;return Ye(I=>{I&&setTimeout(()=>{I.focus(),I.select()},10)},C),C.addEventListener("blur",I=>$(I.currentTarget.value)),C.$$keydown=I=>{I.key==="Enter"?(I.preventDefault(),$(I.currentTarget.value)):I.key==="Escape"&&(I.preventDefault(),F())},y(g,b(Y,{get when(){return s()},get children(){var I=rn();return y(I,s),I}}),null),te(()=>C.value=e.entry.name),g}}),null),y(f,b(Y,{get when(){return d()},get children(){var g=Dc(),O=g.firstChild,T=O.nextSibling,C=T.nextSibling,I=C.nextSibling,G=I.nextSibling;return g.$$keydown=k=>{k.stopPropagation(),k.key==="Escape"&&u(!1)},g.$$click=k=>k.stopPropagation(),g.style.setProperty("position","fixed"),g.style.setProperty("z-index","1000"),O.$$click=p,T.$$click=v,I.$$click=z,G.$$click=E,te(k=>{var U=`${a().y}px`,H=`${a().x}px`,J=!e.isPasteEnabled;return U!==k.e&&((k.e=U)!=null?g.style.setProperty("top",U):g.style.removeProperty("top")),H!==k.t&&((k.t=H)!=null?g.style.setProperty("left",H):g.style.removeProperty("left")),J!==k.a&&(T.disabled=k.a=J),k},{e:void 0,t:void 0,a:void 0}),g}}),null),te(g=>{var O=m(),T=!_(t),C=e.activeFile!==null&&e.getFilePath(e.activeFile)===t,I=!!(m()&&!h()),G=!!r(),k=!!_(t),U=!!d();return O!==g.e&&re(f,"aria-selected",g.e=O),T!==g.t&&re(f,"draggable",g.t=T),C!==g.a&&f.classList.toggle("active",g.a=C),I!==g.o&&f.classList.toggle("selected",g.o=I),G!==g.i&&f.classList.toggle("dragging",g.i=G),k!==g.n&&f.classList.toggle("read-only",g.n=k),U!==g.s&&f.classList.toggle("has-context-menu",g.s=U),g},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),f})()},Lc=e=>{const[t,n]=X(null),i=()=>e.globalFileCreation!==void 0?e.globalFileCreation:t(),r=e.setGlobalFileCreation||n,[o,a]=X(!1),[l,s]=X(null),[c,d]=X(null),[u,h]=X(null),m=()=>{r(null),h(null),e.setCreationError&&e.setCreationError(null)},_=f=>{f===""?h(null):(m(),h(f))},w=(f,g)=>{m(),r({type:f,parentPath:g})},Q=f=>f==="deps"||f.startsWith("deps/"),p=f=>{const g=f.filter(O=>!Q(O));g.length>0&&s(g)},v=f=>{const g=l();if(g)for(const O of g){const T=O.split("/").pop();let C=T,I=1;const G=T.split("."),U=G.length>1&&G[G.length-1].length>0?`.${G.pop()}`:"",H=G.join(".");if(e.checkNameConflict)for(;e.checkNameConflict(f,C);)C=`${H} (${I})${U}`,I++;e.onCopyEntry(O,f,C)}},z=f=>[...f].sort((g,O)=>g.type!==O.type?g.type==="directory"?-1:1:g.name.toLowerCase().localeCompare(O.name.toLowerCase())),E=()=>{const f=[],g=(O,T="")=>{const C=z(O);for(const I of C){const G=T?`${T}/${I.name}`:I.name;f.push(G),I.type==="directory"&&I.children&&g(I.children,G)}};return g(e.files),f};ue(()=>{const f=g=>{if(g.key==="Escape"){const G=g.target;if(G.tagName==="INPUT"||G.tagName==="TEXTAREA"||G.isContentEditable)return;let k=G;for(;k&&k!==document.body;){if(k.classList.contains("cm-editor")||k.classList.contains("cm-content")||k.classList.contains("cm-scroller")||k.closest(".cm-editor"))return;k=k.parentElement}i()||u()?m():e.onSelectionChange([]);return}if(i()||u())return;const O=g.target,T=O.tagName==="INPUT"||O.tagName==="TEXTAREA"||O.isContentEditable;let C=!1,I=O;for(;I&&I!==document.body;){if(I.classList.contains("cm-editor")||I.classList.contains("cm-content")||I.classList.contains("cm-scroller")||I.closest(".cm-editor")){C=!0;break}I=I.parentElement}if(!(T||C)){if((g.metaKey||g.ctrlKey)&&g.key==="a"){g.preventDefault();const G=E();e.onSelectionChange(G)}if((g.metaKey||g.ctrlKey)&&g.key==="c"&&(g.preventDefault(),e.selectedFiles.length>0&&p(e.selectedFiles)),(g.metaKey||g.ctrlKey)&&g.key==="v"&&(g.preventDefault(),l())){let G="";if(e.selectedFiles.length===1){const k=e.selectedFiles[0],U=x(e.files,k);if(U)if(U.type==="directory")G=k;else{const H=k.split("/");H.length>1&&(H.pop(),G=H.join("/"))}}v(G)}}};return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f)}});const $=f=>{const g=f==="file"?"New File":"New Folder";if(e.selectedFiles.length===1){const O=e.selectedFiles[0],T=x(e.files,O);if(T&&T.type==="directory")return`${g} in ${O}`;if(T&&T.type==="file"){const C=O.split("/");if(C.length>1){C.pop();const I=C.join("/");return`${g} in ${I}`}else return`${g} in root (same level as ${T.name})`}}return`${g} in root`},[F,A]=X(!1),S=f=>{if(!(!i()||F()))if(f=f.trim(),f){const g=i().parentPath,O=i().type;A(!0),O==="file"?e.onNewFile(f,g):e.onNewFolder(f,g),setTimeout(()=>{e.creationError||m(),A(!1)},50)}else m()},x=(f,g)=>{for(const O of f){if(O.name===g&&O.type==="file"||O.name===g&&O.type==="directory")return O;if(O.type==="directory"&&O.children){const T=g.split("/");if(T[0]===O.name&&T.length>1){const C=T.slice(1).join("/"),I=x(O.children,C);if(I)return I}}}return null},P=()=>{m(),A(!1)},L=f=>{f.preventDefault(),f.stopPropagation(),f.dataTransfer?.files.length?f.dataTransfer.dropEffect="copy":f.dataTransfer.dropEffect="move",a(!0)},R=()=>{a(!1)},j=f=>{if(f.preventDefault(),a(!1),console.log("Drop event on root explorer with data:",f.dataTransfer?.getData("text/plain")),f.dataTransfer?.files.length){e.onFileUpload(Array.from(f.dataTransfer.files),"");return}const g=f.dataTransfer.getData("text/plain");if(g)try{const O=JSON.parse(g);console.log("Moving paths to root:",O);for(const T of O){if(!T.includes("/")){console.log("Skipping move - already at root:",T);continue}const C=T.split("/").pop();if(e.checkNameConflict&&e.checkNameConflict("",C)){e.showConfirmDialog&&e.showConfirmDialog(O,"",C);return}}O.forEach(T=>{T.includes("/")&&e.onMoveEntry(T,"")})}catch{if(console.log("Fallback: moving single item to root:",g),!g.includes("/")){console.log("Skipping move - already at root:",g);return}const T=g.split("/").pop();if(e.checkNameConflict&&e.checkNameConflict("",T)){e.showConfirmDialog&&e.showConfirmDialog([g],"",T);return}e.onMoveEntry(g,"")}};return(()=>{var f=Ic(),g=f.firstChild,O=g.firstChild,T=O.nextSibling,C=T.firstChild,I=C.nextSibling,G=I.nextSibling,k=g.nextSibling;return f.addEventListener("drop",j),f.addEventListener("dragleave",R),f.addEventListener("dragover",L),C.$$click=()=>{let U="";if(e.selectedFiles.length===1){const H=e.selectedFiles[0],J=x(e.files,H);if(J&&J.type==="directory")U=H;else if(J&&J.type==="file"){const q=H.split("/");q.length>1&&(q.pop(),U=q.join("/"))}}w("file",U)},I.$$click=()=>{let U="";if(e.selectedFiles.length===1){const H=e.selectedFiles[0],J=x(e.files,H);if(J&&J.type==="directory")U=H;else if(J&&J.type==="file"){const q=H.split("/");q.length>1&&(q.pop(),U=q.join("/"))}}w("folder",U)},G.$$click=async()=>{const U=await Ne(()=>import("./jszip.min-BiHF8TMC.js").then(ae=>ae.j),[]),H=U.default||U,J=new H,q=localStorage.getItem("althread-file-system");let Z=q?JSON.parse(q):[];const ee=ae=>ae.map(le=>({...le,id:le.id||(window.crypto?crypto.randomUUID():Math.random().toString(36).slice(2)),children:le.children?ee(le.children):void 0}));Z=ee(Z);const fe=(ae,le="")=>{for(const ce of ae){const _e=le?`${le}/${ce.name}`:ce.name;if(ce.type==="file"){const Ge=localStorage.getItem("althread-file-content-"+_e)||"";J.file(_e,Ge)}else ce.type==="directory"&&ce.children&&fe(ce.children,_e)}};fe(Z),J.generateAsync({type:"blob"}).then(ae=>{const le=URL.createObjectURL(ae),ce=document.createElement("a");ce.href=le,ce.download="althread-files.zip",document.body.appendChild(ce),ce.click(),setTimeout(()=>{document.body.removeChild(ce),URL.revokeObjectURL(le)},100)})},k.$$click=U=>{U.target===U.currentTarget&&e.onSelectionChange([])},k.$$keydown=U=>{U.key==="Escape"&&e.onSelectionChange([])},y(k,b(Oe,{get each(){return z(e.files)},children:U=>b(zr,{entry:U,path:"",get onFileSelect(){return e.onFileSelect},get activeFile(){return e.activeFile},get getFilePath(){return e.getFilePath},get onMoveEntry(){return e.onMoveEntry},get onRenameEntry(){return e.onRenameEntry},get onDeleteEntry(){return e.onDeleteEntry},onCopy:p,onPaste:v,get isPasteEnabled(){return!!l()},get selectedFiles(){return e.selectedFiles},get onSelectionChange(){return e.onSelectionChange},get onFileUpload(){return e.onFileUpload},get checkNameConflict(){return e.checkNameConflict||(()=>!1)},get showConfirmDialog(){return e.showConfirmDialog||(()=>{})},get showDeleteConfirmDialog(){return e.showDeleteConfirmDialog||(()=>{})},get allVisibleFiles(){return E()},get creating(){return i()},onCreateCommit:S,onCreateCancel:P,get creationError(){return e.creationError||null},get setCreationError(){return e.setCreationError},createCommitInProgress:F,get currentlyRenaming(){return u()},startRename:_,get isContextMenuOpenFor(){return c()},setContextMenuOpenFor:d})}),null),y(k,b(Y,{get when(){return Ee(()=>!!i())()&&i().parentPath===""},get children(){var U=Er(),H=U.firstChild,J=H.firstChild,q=J.nextSibling;return q.$$input=()=>e.setCreationError&&e.setCreationError(null),q.addEventListener("blur",Z=>{if(!F()){const ee=Z.currentTarget.value.trim();S(ee)}}),q.$$keydown=Z=>{if(Z.key==="Enter"){Z.preventDefault();const ee=Z.currentTarget.value.trim();S(ee)}else Z.key==="Escape"&&(Z.preventDefault(),P())},Ye(Z=>{Z&&i()&&i().parentPath===""&&setTimeout(()=>Z.focus(),10)},q),y(U,b(Y,{get when(){return e.creationError},get children(){var Z=rn();return y(Z,()=>e.creationError),Z}}),null),te(()=>ge(J,`codicon codicon-${i().type==="file"?"file":"folder"}`)),U}}),null),te(U=>{var H=!!o(),J=$("file"),q=!!i()||!!u(),Z=$("folder"),ee=!!i()||!!u();return H!==U.e&&f.classList.toggle("drag-over",U.e=H),J!==U.t&&re(C,"title",U.t=J),q!==U.a&&(C.disabled=U.a=q),Z!==U.o&&re(I,"title",U.o=Z),ee!==U.i&&(I.disabled=U.i=ee),U},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),f})()};xe(["click","keydown","contextmenu","input"]);var Nc=D('<button type=button class=search-clear><i class="codicon codicon-close">'),Mc=D('<div class=search-empty><i class="codicon codicon-search"></i><p>'),Uc=D('<div class=search-empty><i class="codicon codicon-search"></i><p>Start typing to search files...'),jc=D('<div class=search-no-results><i class="codicon codicon-search-stop"></i><p></p><button type=button class=search-clear-btn>Clear search'),Vc=D('<div class=search-view><div class=search-view-header><h3>Search</h3></div><div class=search-view-content><div class=search-input-container><div class=search-input-wrapper><i class="codicon codicon-search search-icon"></i><input type=text class=search-input></div></div><div class=search-results>'),Wc=D("<i>"),Xc=D("<div class=search-result-subtitle>"),Gc=D("<div class=search-result-description>"),Bc=D("<button type=button class=search-result-item><div class=search-result-content><div class=search-result-title>");function Rr(e){const[t,n]=X(""),i=()=>e.searchFields||["title","subtitle","description","content","path"],r=(c,d)=>{const u=c.description||"",h=c.content||"",m=d.trim().toLowerCase();if(!m||!h)return u;const _=h.split(`
`).find(Q=>Q.toLowerCase().includes(m));if(!_)return u;let w=_.trim();if(w.length>100){const Q=w.toLowerCase().indexOf(m),p=Math.max(0,Q-30),v=Math.min(w.length,p+100);w=`${p>0?"…":""}${w.substring(p,v)}${v<w.length?"…":""}`}return u?`${u}
${w}`:w},o=c=>c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),a=(c,d)=>{const u=d.trim(),h=u?c.toLowerCase().indexOf(u.toLowerCase()):-1;if(h===-1)return o(c);const m=c.substring(0,h),_=c.substring(h,h+u.length),w=c.substring(h+u.length);return`${o(m)}<span class="search-highlight">${o(_)}</span>${o(w)}`},l=oe(()=>{const c=t().toLowerCase().trim();return c?e.items.filter(d=>i().some(u=>{const h=d[u];return h?Array.isArray(h)?h.some(m=>m.toLowerCase().includes(c)):h.toLowerCase().includes(c):!1})):e.showAllByDefault!==!1?e.items:[]}),s=()=>{n("")};return(()=>{var c=Vc(),d=c.firstChild,u=d.nextSibling,h=u.firstChild,m=h.firstChild,_=m.firstChild,w=_.nextSibling,Q=h.nextSibling;return w.$$keydown=p=>{p.key==="Escape"&&(s(),p.preventDefault())},w.$$input=p=>n(p.currentTarget.value),y(m,b(Y,{get when(){return t()},get children(){var p=Nc();return p.$$click=s,p}}),null),y(Q,b(Y,{get when(){return e.items.length===0},get children(){var p=Mc(),v=p.firstChild,z=v.nextSibling;return y(z,()=>e.emptyMessage||"No items available"),p}}),null),y(Q,b(Y,{get when(){return e.items.length>0&&!t()&&e.showAllByDefault===!1},get children(){return Uc()}}),null),y(Q,b(Y,{get when(){return Ee(()=>e.items.length>0&&l().length===0)()&&t()},get children(){var p=jc(),v=p.firstChild,z=v.nextSibling,E=z.nextSibling;return y(z,()=>e.noResultsMessage||"No results found"),E.$$click=s,p}}),null),y(Q,b(Y,{get when(){return l().length>0},get children(){return b(Oe,{get each(){return l()},children:p=>(()=>{var v=Bc(),z=v.firstChild,E=z.firstChild;return Ie(v,"click",p.onClick,!0),y(v,b(Y,{get when(){return p.icon},get children(){var $=Wc();return te(()=>ge($,`codicon codicon-${p.icon} search-result-icon`)),$}}),z),y(E,()=>p.title),y(z,b(Y,{get when(){return p.subtitle},get children(){var $=Xc();return y($,()=>p.subtitle==="Root"?"root":p.subtitle),$}}),null),y(z,b(Y,{get when(){return r(p,t())},get children(){var $=Gc();return te(()=>$.innerHTML=a(r(p,t()),t())),$}}),null),v})()})}}),null),te(()=>re(w,"placeholder",e.placeholder||"Search...")),te(()=>w.value=t()),c})()}xe(["input","keydown","click"]);const Yc=()=>{if(typeof navigator>"u")return!1;const e=navigator.userAgentData?.platform??navigator.platform??"";return/mac/i.test(e)||/mac/i.test(navigator.userAgent)},si=Yc(),$t=si?"Cmd":"Ctrl",Te={FILE_SYSTEM:"althread-file-system",FILE_CONTENT_PREFIX:"althread-file-content-",EDITOR_THEME:"althread-editor-theme"},Ze=e=>{localStorage.setItem(Te.FILE_SYSTEM,JSON.stringify(e))},qc=()=>{const e=localStorage.getItem(Te.FILE_SYSTEM),t=n=>n.map(i=>({...i,id:i.id||crypto.randomUUID(),children:i.children?t(i.children):void 0}));return t(e?JSON.parse(e):[{name:"main.alt",type:"file"}])},Me=(e,t)=>{localStorage.setItem(Te.FILE_CONTENT_PREFIX+e,t)},tt=e=>{const t=localStorage.getItem(Te.FILE_CONTENT_PREFIX+e);if(t!==null)return t;if(e==="main.alt"){const n=`// Althread program

main {
    // write your code here
}
`;return localStorage.setItem(Te.FILE_CONTENT_PREFIX+"main.alt",n),n}return`// New file
`},Hc=e=>{switch(e.split(".").pop()?.toLowerCase()){case"js":case"jsx":return`// JavaScript file
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
`}},Zc=e=>{localStorage.setItem(Te.EDITOR_THEME,e)},Kc=()=>{const e=localStorage.getItem(Te.EDITOR_THEME);return e==="light"||e==="dark"?e:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"},Jc=[{fileName:"coffee_machine.alt",title:"Coffee Machine",description:"Example program: Coffee Machine",tags:["example","shared","concurrency","programs","loops","conditionals","synchronization","math"],content:`shared {
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
}`}],ed=new Set(["ltl","tp1","tp2","tp3"]),td=e=>e.split(/[-_\s]+/).filter(Boolean).map((t,n)=>{const i=t.toLowerCase();return ed.has(i)?i.toUpperCase():n===0?i.charAt(0).toUpperCase()+i.slice(1):i}).join(" "),nd=(e,t)=>{if(e&&!e.startsWith("Example program:"))return e;const n=[];for(const i of t.split(`
`)){const r=i.trim().match(/^\/\/\s?(.*)$/);if(!r)break;const o=r[1].replace(/^Example\s+\d+\s*:\s*/i,"").trim();o&&n.push(o)}return n.join(" — ")};function id(e){const t=oe(()=>Jc.map(n=>({id:n.fileName,title:td(n.title),subtitle:n.fileName,description:nd(n.description,n.content),icon:"file-code",content:n.content,tags:n.tags,onClick:()=>{e.onLoadExample(n.content,n.fileName)}})));return b(Rr,{placeholder:"Search examples by name, description, or content...",get items(){return t()},searchFields:["title","subtitle","description","content","tags"],emptyMessage:"No examples available",noResultsMessage:"No examples match your search",showAllByDefault:!0})}var rd=D('<div class=help-links><div class=help-link><div><div class=help-link-title>Intelligent Althread editor</div><div class=help-link-desc>Ctrl+Space: completion · F12 or Ctrl/Cmd+click: definition · Shift+F12: references · F2: rename. Hover a symbol for its type; function signatures appear while typing arguments.</div></div></div><button type=button class=help-link><i class="codicon codicon-file-code"></i><div><div class=help-link-title>Browse Examples</div><div class=help-link-desc>Explore sample programs and code examples</div></div></button><button type=button class=help-link><i class="codicon codicon-book"></i><div><div class=help-link-title>Tutorials</div><div class=help-link-desc>Step-by-step guides</div></div></button><button type=button class=help-link><i class="codicon codicon-repo"></i><div><div class=help-link-title>Documentation</div><div class=help-link-desc>Complete reference</div></div></button><button type=button class=help-link><i class="codicon codicon-issue-opened"></i><div><div class=help-link-title>Report Issue</div><div class=help-link-desc>Found a bug?'),od=D('<div class=example-search-container><div class=example-search-header><button type=button class=back-button><i class="codicon codicon-arrow-left"></i>Back to Help</button></div><div class=example-search-content>'),ad=D("<div class=help-view><div class=help-view-header><h3>Help & Resources</h3></div><div class=help-view-content>");function ld(e){const t=fr(),[n,i]=X(!1);return(()=>{var r=ad(),o=r.firstChild,a=o.nextSibling;return y(a,b(Y,{get when(){return!n()},get children(){var l=rd(),s=l.firstChild,c=s.nextSibling,d=c.nextSibling,u=d.nextSibling,h=u.nextSibling;return c.$$click=()=>i(!0),d.$$click=()=>t("/tutorials"),u.$$click=()=>window.open("https://althread.github.io/en/docs/guide/intro/","_blank"),h.$$click=()=>window.open("https://github.com/althread/althread/issues/new?template=🐞-bug-report.md","_blank"),l}}),null),y(a,b(Y,{get when(){return n()},get children(){var l=od(),s=l.firstChild,c=s.firstChild,d=s.nextSibling;return c.$$click=()=>i(!1),y(d,b(id,{onLoadExample:(u,h)=>{e.onLoadExample?.(u,h)}})),l}}),null),r})()}xe(["click"]);let B,ve=0,Qt=null;function on(){return(Qt===null||Qt.byteLength===0)&&(Qt=new Uint8Array(B.memory.buffer)),Qt}const an=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},sd=typeof an.encodeInto=="function"?function(e,t){return an.encodeInto(e,t)}:function(e,t){const n=an.encode(e);return t.set(n),{read:e.length,written:n.length}};function we(e,t,n){if(n===void 0){const l=an.encode(e),s=t(l.length,1)>>>0;return on().subarray(s,s+l.length).set(l),ve=l.length,s}let i=e.length,r=t(i,1)>>>0;const o=on();let a=0;for(;a<i;a++){const l=e.charCodeAt(a);if(l>127)break;o[r+a]=l}if(a!==i){a!==0&&(e=e.slice(a)),r=n(r,i,i=a+e.length*3,1)>>>0;const l=on().subarray(r+a,r+i),s=sd(e,l);a+=s.written,r=n(r,i,a,1)>>>0}return ve=a,r}let mt=null;function Le(){return(mt===null||mt.buffer.detached===!0||mt.buffer.detached===void 0&&mt.buffer!==B.memory.buffer)&&(mt=new DataView(B.memory.buffer)),mt}function Ft(e){const t=B.__externref_table_alloc();return B.__wbindgen_export_4.set(t,e),t}function gt(e,t){try{return e.apply(this,t)}catch(n){const i=Ft(n);B.__wbindgen_exn_store(i)}}const Tr=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&Tr.decode();function st(e,t){return e=e>>>0,Tr.decode(on().subarray(e,e+t))}function Be(e){return e==null}function Gn(e){const t=typeof e;if(t=="number"||t=="boolean"||e==null)return`${e}`;if(t=="string")return`"${e}"`;if(t=="symbol"){const r=e.description;return r==null?"Symbol":`Symbol(${r})`}if(t=="function"){const r=e.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(e)){const r=e.length;let o="[";r>0&&(o+=Gn(e[0]));for(let a=1;a<r;a++)o+=", "+Gn(e[a]);return o+="]",o}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let i;if(n&&n.length>1)i=n[1];else return toString.call(e);if(i=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:i}function Ar(){B.initialize()}function De(e){const t=B.__wbindgen_export_4.get(e);return B.__externref_table_dealloc(e),t}function cd(e,t,n){let i,r;try{const l=we(e,B.__wbindgen_malloc,B.__wbindgen_realloc),s=ve,c=we(t,B.__wbindgen_malloc,B.__wbindgen_realloc),d=ve,u=B.compile(l,s,c,d,n);var o=u[0],a=u[1];if(u[3])throw o=0,a=0,De(u[2]);return i=o,r=a,st(o,a)}finally{B.__wbindgen_free(i,r,1)}}function dd(e,t,n){const i=we(e,B.__wbindgen_malloc,B.__wbindgen_realloc),r=ve,o=we(t,B.__wbindgen_malloc,B.__wbindgen_realloc),a=ve,l=B.run(i,r,o,a,n);if(l[2])throw De(l[1]);return De(l[0])}function ud(e,t,n,i){const r=we(e,B.__wbindgen_malloc,B.__wbindgen_realloc),o=ve,a=we(t,B.__wbindgen_malloc,B.__wbindgen_realloc),l=ve,s=B.check(r,o,a,l,n,Be(i)?4294967297:i>>>0);if(s[2])throw De(s[1]);return De(s[0])}function fd(e,t){let n,i;try{const r=we(e,B.__wbindgen_malloc,B.__wbindgen_realloc),o=ve,a=we(t,B.__wbindgen_malloc,B.__wbindgen_realloc),l=ve,s=B.create_alt_toml(r,o,a,l);return n=s[0],i=s[1],st(s[0],s[1])}finally{B.__wbindgen_free(n,i,1)}}function gd(e,t,n){let i,r;try{const l=we(e,B.__wbindgen_malloc,B.__wbindgen_realloc),s=ve,c=we(t,B.__wbindgen_malloc,B.__wbindgen_realloc),d=ve,u=we(n,B.__wbindgen_malloc,B.__wbindgen_realloc),h=ve,m=B.add_dependency_to_toml(l,s,c,d,u,h);var o=m[0],a=m[1];if(m[3])throw o=0,a=0,De(m[2]);return i=o,r=a,st(o,a)}finally{B.__wbindgen_free(i,r,1)}}function hd(e){const t=we(e,B.__wbindgen_malloc,B.__wbindgen_realloc),n=ve,i=B.parse_dependencies_from_toml(t,n);if(i[2])throw De(i[1]);return De(i[0])}function md(e){const t=we(e,B.__wbindgen_malloc,B.__wbindgen_realloc),n=ve;return B.validate_package_name(t,n)!==0}function Bn(e,t,n){const i=we(e,B.__wbindgen_malloc,B.__wbindgen_realloc),r=ve,o=we(t,B.__wbindgen_malloc,B.__wbindgen_realloc),a=ve,l=B.start_interactive_session(i,r,o,a,n);if(l[2])throw De(l[1]);return De(l[0])}function Dr(e,t,n,i){const r=we(e,B.__wbindgen_malloc,B.__wbindgen_realloc),o=ve,a=we(t,B.__wbindgen_malloc,B.__wbindgen_realloc),l=ve,s=B.get_next_interactive_states(r,o,a,l,n,i);if(s[2])throw De(s[1]);return De(s[0])}function Qr(e,t,n,i,r){const o=we(e,B.__wbindgen_malloc,B.__wbindgen_realloc),a=ve,l=we(t,B.__wbindgen_malloc,B.__wbindgen_realloc),s=ve,c=B.execute_interactive_step(o,a,l,s,n,i,r);if(c[2])throw De(c[1]);return De(c[0])}async function pd(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(i){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function Fr(){const e={};return e.wbg={},e.wbg.__wbg_String_8f0eb39a4a4c2f66=function(t,n){const i=String(n),r=we(i,B.__wbindgen_malloc,B.__wbindgen_realloc),o=ve;Le().setInt32(t+4*1,o,!0),Le().setInt32(t+4*0,r,!0)},e.wbg.__wbg_buffer_609cc3eee51ed158=function(t){return t.buffer},e.wbg.__wbg_call_672a4d21634d4a24=function(){return gt(function(t,n){return t.call(n)},arguments)},e.wbg.__wbg_call_7cccdd69e0791ae2=function(){return gt(function(t,n,i){return t.call(n,i)},arguments)},e.wbg.__wbg_crypto_ed58b8e10a292839=function(t){return t.crypto},e.wbg.__wbg_done_769e5ede4b31c67b=function(t){return t.done},e.wbg.__wbg_entries_3265d4158b33e5dc=function(t){return Object.entries(t)},e.wbg.__wbg_error_7534b8e9a36f1ab4=function(t,n){let i,r;try{i=t,r=n,console.error(st(t,n))}finally{B.__wbindgen_free(i,r,1)}},e.wbg.__wbg_getRandomValues_bcb4912f16000dc4=function(){return gt(function(t,n){t.getRandomValues(n)},arguments)},e.wbg.__wbg_get_67b2ba62fc30de12=function(){return gt(function(t,n){return Reflect.get(t,n)},arguments)},e.wbg.__wbg_get_b9b93047fe3cf45b=function(t,n){return t[n>>>0]},e.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc=function(t){let n;try{n=t instanceof ArrayBuffer}catch{n=!1}return n},e.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9=function(t){let n;try{n=t instanceof Uint8Array}catch{n=!1}return n},e.wbg.__wbg_isArray_a1eab7e0d067391b=function(t){return Array.isArray(t)},e.wbg.__wbg_isSafeInteger_343e2beeeece1bb0=function(t){return Number.isSafeInteger(t)},e.wbg.__wbg_iterator_9a24c88df860dc65=function(){return Symbol.iterator},e.wbg.__wbg_length_a446193dc22c12f8=function(t){return t.length},e.wbg.__wbg_length_e2d2a49132c1b256=function(t){return t.length},e.wbg.__wbg_msCrypto_0a36e2ec3a343d26=function(t){return t.msCrypto},e.wbg.__wbg_new_405e22f390576ce2=function(){return new Object},e.wbg.__wbg_new_5e0be73521bc8c17=function(){return new Map},e.wbg.__wbg_new_78feb108b6472713=function(){return new Array},e.wbg.__wbg_new_8a6f238a6ece86ea=function(){return new Error},e.wbg.__wbg_new_a12002a7f91c75be=function(t){return new Uint8Array(t)},e.wbg.__wbg_newnoargs_105ed471475aaf50=function(t,n){return new Function(st(t,n))},e.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a=function(t,n,i){return new Uint8Array(t,n>>>0,i>>>0)},e.wbg.__wbg_newwithlength_a381634e90c276d4=function(t){return new Uint8Array(t>>>0)},e.wbg.__wbg_next_25feadfc0913fea9=function(t){return t.next},e.wbg.__wbg_next_6574e1a8a62d1055=function(){return gt(function(t){return t.next()},arguments)},e.wbg.__wbg_node_02999533c4ea02e3=function(t){return t.node},e.wbg.__wbg_process_5c1d670bc53614b8=function(t){return t.process},e.wbg.__wbg_randomFillSync_ab2cfe79ebbf2740=function(){return gt(function(t,n){t.randomFillSync(n)},arguments)},e.wbg.__wbg_require_79b1e9274cde3c87=function(){return gt(function(){return module.require},arguments)},e.wbg.__wbg_set_37837023f3d740e8=function(t,n,i){t[n>>>0]=i},e.wbg.__wbg_set_3f1d0b984ed272ed=function(t,n,i){t[n]=i},e.wbg.__wbg_set_65595bdd868b3009=function(t,n,i){t.set(n,i>>>0)},e.wbg.__wbg_set_8fc6bf8a5b1071d1=function(t,n,i){return t.set(n,i)},e.wbg.__wbg_stack_0ed75d68575b0f3c=function(t,n){const i=n.stack,r=we(i,B.__wbindgen_malloc,B.__wbindgen_realloc),o=ve;Le().setInt32(t+4*1,o,!0),Le().setInt32(t+4*0,r,!0)},e.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07=function(){const t=typeof global>"u"?null:global;return Be(t)?0:Ft(t)},e.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0=function(){const t=typeof globalThis>"u"?null:globalThis;return Be(t)?0:Ft(t)},e.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819=function(){const t=typeof self>"u"?null:self;return Be(t)?0:Ft(t)},e.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40=function(){const t=typeof window>"u"?null:window;return Be(t)?0:Ft(t)},e.wbg.__wbg_subarray_aa9065fa9dc5df96=function(t,n,i){return t.subarray(n>>>0,i>>>0)},e.wbg.__wbg_value_cd1ffa7b1ab794f1=function(t){return t.value},e.wbg.__wbg_versions_c71aa1626a93e0a1=function(t){return t.versions},e.wbg.__wbindgen_as_number=function(t){return+t},e.wbg.__wbindgen_bigint_from_i64=function(t){return t},e.wbg.__wbindgen_bigint_from_u64=function(t){return BigInt.asUintN(64,t)},e.wbg.__wbindgen_bigint_get_as_i64=function(t,n){const i=n,r=typeof i=="bigint"?i:void 0;Le().setBigInt64(t+8*1,Be(r)?BigInt(0):r,!0),Le().setInt32(t+4*0,!Be(r),!0)},e.wbg.__wbindgen_boolean_get=function(t){const n=t;return typeof n=="boolean"?n?1:0:2},e.wbg.__wbindgen_debug_string=function(t,n){const i=Gn(n),r=we(i,B.__wbindgen_malloc,B.__wbindgen_realloc),o=ve;Le().setInt32(t+4*1,o,!0),Le().setInt32(t+4*0,r,!0)},e.wbg.__wbindgen_error_new=function(t,n){return new Error(st(t,n))},e.wbg.__wbindgen_init_externref_table=function(){const t=B.__wbindgen_export_4,n=t.grow(4);t.set(0,void 0),t.set(n+0,void 0),t.set(n+1,null),t.set(n+2,!0),t.set(n+3,!1)},e.wbg.__wbindgen_is_bigint=function(t){return typeof t=="bigint"},e.wbg.__wbindgen_is_function=function(t){return typeof t=="function"},e.wbg.__wbindgen_is_object=function(t){const n=t;return typeof n=="object"&&n!==null},e.wbg.__wbindgen_is_string=function(t){return typeof t=="string"},e.wbg.__wbindgen_is_undefined=function(t){return t===void 0},e.wbg.__wbindgen_jsval_eq=function(t,n){return t===n},e.wbg.__wbindgen_jsval_loose_eq=function(t,n){return t==n},e.wbg.__wbindgen_memory=function(){return B.memory},e.wbg.__wbindgen_number_get=function(t,n){const i=n,r=typeof i=="number"?i:void 0;Le().setFloat64(t+8*1,Be(r)?0:r,!0),Le().setInt32(t+4*0,!Be(r),!0)},e.wbg.__wbindgen_number_new=function(t){return t},e.wbg.__wbindgen_string_get=function(t,n){const i=n,r=typeof i=="string"?i:void 0;var o=Be(r)?0:we(r,B.__wbindgen_malloc,B.__wbindgen_realloc),a=ve;Le().setInt32(t+4*1,a,!0),Le().setInt32(t+4*0,o,!0)},e.wbg.__wbindgen_string_new=function(t,n){return st(t,n)},e.wbg.__wbindgen_throw=function(t,n){throw new Error(st(t,n))},e}function Ir(e,t){return B=e.exports,_n.__wbindgen_wasm_module=t,mt=null,Qt=null,B.__wbindgen_start(),B}function bd(e){if(B!==void 0)return B;typeof e<"u"&&(Object.getPrototypeOf(e)===Object.prototype?{module:e}=e:console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const t=Fr();e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e));const n=new WebAssembly.Instance(e,t);return Ir(n,e)}async function _n(e){if(B!==void 0)return B;typeof e<"u"&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof e>"u"&&(e=new URL("/dev/editor/assets/althread_web_bg-o1SrQMDx.wasm",import.meta.url));const t=Fr();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:i}=await pd(await e,t);return Ir(n,i)}const yd=Object.freeze(Object.defineProperty({__proto__:null,add_dependency_to_toml:gd,check:ud,compile:cd,create_alt_toml:fd,default:_n,execute_interactive_step:Qr,get_next_interactive_states:Dr,initSync:bd,initialize:Ar,parse_dependencies_from_toml:hd,run:dd,start_interactive_session:Bn,validate_package_name:md},Symbol.toStringTag,{value:"Module"})),pt=(e,t)=>{for(const n of e){if(n.id===t)return n;if(n.children){const i=pt(n.children,t);if(i)return i}}return null},We=(e,t,n="")=>{for(const i of e){const r=n?`${n}/${i.name}`:i.name;if(i.id===t)return r;if(i.children){const o=We(i.children,t,r);if(o)return o}}return null},Xe=(e,t)=>{for(const n of e){if(n.name===t&&n.type==="file")return n;if(n.type==="directory"&&n.children){const i=t.split("/");if(i[0]===n.name&&i.length>1){const r=i.slice(1).join("/"),o=Xe(n.children,r);if(o)return o}}}return null},Li=(e,t)=>{if(t==="")return e;const n=t.split("/").filter(r=>r!=="");let i=e;for(const r of n){const o=i.find(a=>a.name===r&&a.type==="directory");if(!o||!o.children)return null;i=o.children}return i},at=(e,t)=>{const n=t.split("/").filter(l=>l!=="");if(n.length===0)return null;let i=e;for(let l=0;l<n.length-1;l++){const s=n[l],c=i.find(d=>d.name===s&&d.type==="directory");if(!c||!c.children)return null;i=c.children}const r=n[n.length-1],o=i.findIndex(l=>l.name===r);return o===-1?null:{entry:i[o],parent:i,index:o}},ln=e=>{const t=[];return e.type==="file"?t.push(e.id):e.type==="directory"&&e.children&&e.children.forEach(n=>{t.push(...ln(n))}),t};function Ni(e){const t={};function n(i,r=""){const o=r?`${r}/${i.name}`:i.name;if(i.type==="file"){const a=tt(o);t[o]=a}else if(i.type==="directory"&&i.children)for(const a of i.children)n(a,o)}for(const i of e)n(i);return t}function vd(e,t){return Object.hasOwn(e,t)?(console.log(`File found in virtual FS: ${t}`),e[t]):""}const Zt=async()=>(await _n(),yd),An="althread-package-cache",Od="althread-package-metadata";class wd{packageCache=new Map;fileSystem;setFileSystem;constructor(t,n){this.fileSystem=t,this.setFileSystem=n,this.loadPackageCache()}loadPackageCache(){try{const t=localStorage.getItem(An);if(t){const n=JSON.parse(t);this.packageCache=new Map(Object.entries(n))}}catch(t){console.error("Failed to load package cache:",t)}}savePackageCache(){try{const t=Object.fromEntries(this.packageCache.entries());localStorage.setItem(An,JSON.stringify(t))}catch(t){console.error("Failed to save package cache:",t)}}async initializeProject(t,n="0.1.0"){const r=(await Zt()).create_alt_toml(t,n);if(Xe(this.fileSystem,"alt.toml")){Me("alt.toml",r);return}const a={id:crypto.randomUUID(),name:"alt.toml",type:"file"},l=[...this.fileSystem,a];this.fileSystem=l,this.setFileSystem(l),Me("alt.toml",r),console.log("✓ Project initialized with alt.toml")}async parseAltToml(){if(console.log("🔍 Parsing alt.toml..."),console.log("Current file system:",this.fileSystem.map(i=>i.name)),!Xe(this.fileSystem,"alt.toml"))return console.log("❌ No alt.toml file found in file system"),null;console.log("✓ Found alt.toml file");const n=tt("alt.toml");if(!n)return console.log("❌ No content loaded from alt.toml"),null;console.log("✓ Loaded alt.toml content:",n.substring(0,100)+"...");try{const r=(await Zt()).parse_dependencies_from_toml(n);let o={};r instanceof Map?o=Object.fromEntries(r.entries()):typeof r=="object"&&r!==null&&(o=r),console.log("✓ Parsed dependencies:",o);const a=n.match(/\[package\]\s*name\s*=\s*"([^"]+)"\s*version\s*=\s*"([^"]+)"/s);if(!a)throw console.log("❌ Invalid alt.toml format - no package section found"),new Error("Invalid alt.toml format");return console.log("✓ Successfully parsed alt.toml"),{package:{name:a[1],version:a[2]},dependencies:o||{}}}catch(i){return console.error("❌ Failed to parse alt.toml:",i),null}}async addDependency(t,n){if(console.log(`📦 Adding dependency: ${t}@${n}`),!Xe(this.fileSystem,"alt.toml"))return console.error("❌ No alt.toml file found"),!1;try{const r=tt("alt.toml");console.log("📄 Current alt.toml content:",r);const o=await Zt();let a;try{a=o.add_dependency_to_toml(r,t,n)}catch(l){throw console.error("❌ WASM function failed:",l),new Error(`Failed to update alt.toml: ${l}`)}return console.log("📄 Updated alt.toml content:",a),Me("alt.toml",a),console.log("✅ Dependency added successfully"),!0}catch(r){throw console.error("❌ Failed to add dependency:",r),r}}async installDependencies(){const t=await this.parseAltToml();if(!t)throw new Error("No alt.toml file found or invalid format");const n=Object.entries(t.dependencies).map(([i,r])=>this.installPackage(i,r));await Promise.all(n)}async installPackage(t,n){const i=`${t}`;if(this.packageCache.has(i)){console.log(`Using cached package: ${t}`),await this.loadPackageIntoFileSystem(t,this.packageCache.get(i));return}console.log(`Installing package: ${t}@${n}`);const r=await this.fetchRemotePackage(t,n);if(r)this.packageCache.set(i,r),this.savePackageCache(),await this.loadPackageIntoFileSystem(t,r),console.log(`✓ Successfully installed: ${t}`);else throw new Error(`Failed to install package: ${t}`)}async fetchRemotePackage(t,n){console.log("🚀 fetchRemotePackage called with:",t,n);try{const i=t.replace("github.com/","").split("/");if(console.log("🔍 Debug info:"),console.log("  packageName:",t),console.log("  parts:",i),console.log("  parts.length:",i.length),!t.startsWith("github.com/"))throw new Error("Only GitHub packages are supported currently");const[r,o]=i;if(console.log("  user:",r),console.log("  repo:",o),console.log("  user empty?",!r),console.log("  repo empty?",!o),!r||!o)throw new Error(`Invalid GitHub package format - user: "${r}", repo: "${o}"`);if(console.log(`Fetching package: ${t} (${r}/${o})`),t==="github.com/althread/test-package")return this.createMockPackage(t,n);const a={};return await this.fetchDirectoryContents(r,o,"",a),Object.keys(a).length===0&&(console.warn(`No .alt files found in ${t}, creating minimal package`),a["README.md"]=`# ${t}

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
`}}}async fetchDirectoryContents(t,n,i,r){const o=`https://api.github.com/repos/${t}/${n}/contents/${i}`;console.log(`Fetching directory: ${o}`);try{const a=await fetch(o);if(!a.ok){console.warn(`Failed to fetch directory ${i}: ${a.statusText}`);return}const l=await a.json();if(!Array.isArray(l)){console.warn(`Expected array but got ${typeof l} for ${i}`);return}for(const s of l)if(s.type==="file"&&(s.name.endsWith(".alt")||s.name==="alt.toml")){console.log(`Fetching file: ${s.name}`);try{const c=await fetch(s.download_url);if(c.ok){const d=await c.text(),u=i?`${i}/${s.name}`:s.name;r[u]=d,console.log(`✓ Fetched file: ${u}`)}}catch(c){console.warn(`Failed to fetch file ${s.name}:`,c)}}else if(s.type==="dir"){const c=i?`${i}/${s.name}`:s.name;await this.fetchDirectoryContents(t,n,c,r)}}catch(a){console.error(`Error fetching directory ${i}:`,a)}}async loadPackageIntoFileSystem(t,n){if(!n.files){console.warn(`No files found in package: ${t}`);return}console.log(`Loading package into file system: ${t}`);let i=this.fileSystem.find(a=>a.name==="deps"&&a.type==="directory");i||(i={id:crypto.randomUUID(),name:"deps",type:"directory",children:[]},this.fileSystem.push(i));const r=t.replace(/[^a-zA-Z0-9]/g,"_");let o=i.children?.find(a=>a.name===r);o||(o={id:crypto.randomUUID(),name:r,type:"directory",children:[]},i.children=i.children||[],i.children.push(o)),o.children=[];for(const[a,l]of Object.entries(n.files)){const s=a.split("/");let c=o;for(let m=0;m<s.length-1;m++){const _=s[m];let w=c.children?.find(Q=>Q.name===_&&Q.type==="directory");w||(w={id:crypto.randomUUID(),name:_,type:"directory",children:[]},c.children=c.children||[],c.children.push(w)),c=w}const d=s[s.length-1],u={id:crypto.randomUUID(),name:d,type:"file"};c.children=c.children||[],c.children.push(u);const h=`deps/${r}/${a}`;Me(h,l),console.log(`✓ Added file: ${h}`)}this.fileSystem=[...this.fileSystem],this.setFileSystem(this.fileSystem),console.log(`✓ Package loaded: ${t} (${Object.keys(n.files).length} files)`)}getCachedPackages(){return Array.from(this.packageCache.values())}clearCache(){this.packageCache.clear(),localStorage.removeItem(An),localStorage.removeItem(Od)}async removePackage(t){const n=Array.from(this.packageCache.keys()).filter(o=>o.startsWith(t));for(const o of n)this.packageCache.delete(o);this.savePackageCache();const i=this.fileSystem.find(o=>o.name==="deps"&&o.type==="directory");if(i&&i.children){const o=t.replace(/[^a-zA-Z0-9]/g,"_");i.children=i.children.filter(a=>a.name!==o),this.setFileSystem([...this.fileSystem])}const r=await this.parseAltToml();if(r&&r.dependencies[t]){delete r.dependencies[t];const o=this.generateAltTomlContent(r);Me("alt.toml",o)}}generateAltTomlContent(t){let n=`[package]
`;n+=`name = "${t.package.name}"
`,n+=`version = "${t.package.version}"

`,n+=`[dependencies]
`;for(const[i,r]of Object.entries(t.dependencies))n+=`"${i}" = "${r}"
`;if(n+=`
[dev-dependencies]
`,t["dev-dependencies"])for(const[i,r]of Object.entries(t["dev-dependencies"]))n+=`"${i}" = "${r}"
`;return n}async validatePackageName(t){try{return(await Zt()).validate_package_name(t)}catch(n){return console.error("Failed to validate package name:",n),!1}}}var _d=D('<button type=button title="Install all dependencies"class=header-action-btn><i class="codicon codicon-cloud-download"></i><span>Install All'),$d=D('<div class=loading-spinner><i class="codicon codicon-loading codicon-modifier-spin"></i>Loading...'),Sd=D('<div class=error-message><i class="codicon codicon-error"></i><span></span><button type=button class=close-msg>×'),xd=D('<div class=success-message><i class="codicon codicon-check"></i><span></span><button type=button class=close-msg>×'),Cd=D('<div class=init-project-section><div class=section-icon><i class="codicon codicon-rocket"></i></div><h4>Initialize Project</h4><p>Create an alt.toml file to manage dependencies</p><div class=form-group><label for=init-project-name>Project Name:</label><input id=init-project-name type=text placeholder="e.g., my-project"></div><div class=form-group><label for=init-project-version>Version:</label><input id=init-project-version type=text placeholder=0.1.0></div><div class=dependency-form-actions><span></span><button type=button class="btn btn-add-dependency"><i class="codicon codicon-rocket"></i>Initialize Project'),Pd=D('<div class=project-info><div class=project-header><div class=project-icon><i class="codicon codicon-package"></i></div><div class=project-details><div class=project-name></div><div class=project-version>v'),kd=D('<div class=add-dependency-section><div class=section-header><div class=section-icon><i class="codicon codicon-extensions"></i></div><h4>Add Dependency</h4></div><div class=add-dependency-form><div class=form-group><input type=text placeholder="Package name (e.g., github.com/user/repo)"></div><div class=form-group><input type=text placeholder="Version (e.g., latest, 1.0.0)"></div><div class=dependency-form-actions><button type=button class="btn btn-add-dependency"><i class="codicon codicon-plus"></i>Add Dependency'),Ed=D('<div class=dependencies-install-hint><i class="codicon codicon-info"></i><span>Click "Install All" in the header to download and install all dependencies.'),zd=D("<div class=dependency-list>"),Rd=D('<div class=empty-state><i class="codicon codicon-package"></i><p>No dependencies yet</p><span>Add dependencies above to get started'),Td=D('<div class=dependencies-section><div class=dependencies-section-header><div class=section-header><div class=section-icon><i class="codicon codicon-package"></i></div><h4>Dependencies (<!>)'),Ad=D('<div class=cache-section><div class=section-header><div class=section-icon><i class="codicon codicon-database"></i></div><h4>Package Cache (<!>)</h4></div><div class=cached-packages>'),Dd=D('<div class=package-manager-view><div class=package-manager-header><h3>Packages</h3><div class=package-manager-actions><button type=button title="Refresh packages"class=header-action-btn><i class="codicon codicon-refresh"></i><span>Update</span></button></div></div><div class=package-manager-content>'),Qd=D('<div class=dependency-item><a class=package-link target=_blank rel="noopener noreferrer"><div class=dependency-icon><i class="codicon codicon-package"></i></div><div class=dependency-info><div class=dependency-name></div><div class=dependency-version></div></div></a><button type=button class="btn btn-danger btn-sm btn-remove"title="Remove dependency"><i class="codicon codicon-close">'),Fd=D('<a class="cached-package package-link"target=_blank rel="noopener noreferrer"><div class=package-icon><i class="codicon codicon-package"></i></div><div class=package-info><div class=package-name></div><div class=package-version></div></div><span class=package-type>');function Id(e){const[t,n]=X(null),[i,r]=X(null),[o,a]=X([]),[l,s]=X(!1),[c,d]=X(null),[u,h]=X(null),[m,_]=X(""),[w,Q]=X("latest"),[p,v]=X(""),[z,E]=X("0.1.0");xt(()=>{const R=new wd(e.fileSystem,e.setFileSystem);n(R),$()});const $=async()=>{const R=t();if(R)try{s(!0);const j=await R.parseAltToml();r(j),j&&(v(j.package.name),E(j.package.version)),a(R.getCachedPackages())}catch(j){d(j instanceof Error?j.message:"Failed to load package state")}finally{s(!1)}},F=async()=>{const R=t();if(R)try{if(s(!0),d(null),!p().trim()){d("Project name is required");return}if(!await R.validatePackageName(p())){d("Invalid project name format");return}await R.initializeProject(p(),z()),h("Project initialized successfully!"),await $()}catch(j){d(j instanceof Error?j.message:"Failed to initialize project")}finally{s(!1)}},A=async()=>{const R=t();if(R)try{if(s(!0),d(null),!m().trim()){d("Package name is required");return}if(!await R.validatePackageName(m())){d("Invalid package name format");return}await R.addDependency(m(),w())?(h(`Added dependency: ${m()}@${w()}`),_(""),Q("latest"),await $()):d("Failed to add dependency")}catch(j){d(j instanceof Error?j.message:"Failed to add dependency")}finally{s(!1)}},S=async()=>{const R=t();if(R)try{s(!0),d(null),await R.installDependencies(),h("Dependencies installed successfully!"),await $()}catch(j){d(j instanceof Error?j.message:"Failed to install dependencies")}finally{s(!1)}},x=async R=>{const j=t();if(j)try{s(!0),d(null),await j.removePackage(R),h(`Removed package: ${R}`),await $()}catch(f){d(f instanceof Error?f.message:"Failed to remove package")}finally{s(!1)}},P=()=>{d(null),h(null)},L=R=>/^https?:\/\//.test(R)?R:R.startsWith("github.com/")?`https://${R}`:`https://github.com/${R}`;return(()=>{var R=Dd(),j=R.firstChild,f=j.firstChild,g=f.nextSibling,O=g.firstChild,T=j.nextSibling;return O.$$click=$,y(g,b(Y,{get when(){return i()},get children(){var C=_d();return C.$$click=S,te(()=>C.disabled=l()||Object.keys(i()?.dependencies||{}).length===0),C}}),null),y(T,b(Y,{get when(){return l()},get children(){return $d()}}),null),y(T,b(Y,{get when(){return c()},get children(){var C=Sd(),I=C.firstChild,G=I.nextSibling,k=G.nextSibling;return y(G,c),k.$$click=P,C}}),null),y(T,b(Y,{get when(){return u()},get children(){var C=xd(),I=C.firstChild,G=I.nextSibling,k=G.nextSibling;return y(G,u),k.$$click=P,C}}),null),y(T,b(Y,{get when(){return!i()},get children(){var C=Cd(),I=C.firstChild,G=I.nextSibling,k=G.nextSibling,U=k.nextSibling,H=U.firstChild,J=H.nextSibling,q=U.nextSibling,Z=q.firstChild,ee=Z.nextSibling,fe=q.nextSibling,ae=fe.firstChild,le=ae.nextSibling;return J.$$input=ce=>v(ce.target.value),ee.$$input=ce=>E(ce.target.value),le.$$click=F,te(()=>le.disabled=l()),te(()=>J.value=p()),te(()=>ee.value=z()),C}}),null),y(T,b(Y,{get when(){return i()},get children(){return[(()=>{var C=Pd(),I=C.firstChild,G=I.firstChild,k=G.nextSibling,U=k.firstChild,H=U.nextSibling;return H.firstChild,y(U,()=>i()?.package.name),y(H,()=>i()?.package.version,null),C})(),(()=>{var C=kd(),I=C.firstChild,G=I.nextSibling,k=G.firstChild,U=k.firstChild,H=k.nextSibling,J=H.firstChild,q=H.nextSibling,Z=q.firstChild;return U.$$input=ee=>_(ee.target.value),J.$$input=ee=>Q(ee.target.value),Z.$$click=A,te(()=>Z.disabled=l()),te(()=>U.value=m()),te(()=>J.value=w()),C})(),(()=>{var C=Td(),I=C.firstChild,G=I.firstChild,k=G.firstChild,U=k.nextSibling,H=U.firstChild,J=H.nextSibling;return J.nextSibling,y(U,()=>Object.keys(i()?.dependencies||{}).length,J),y(C,b(Y,{get when(){return Object.keys(i()?.dependencies||{}).length>0},get children(){return[Ed(),(()=>{var q=zd();return y(q,b(Oe,{get each(){return Object.entries(i()?.dependencies||{})},children:([Z,ee])=>(()=>{var fe=Qd(),ae=fe.firstChild,le=ae.firstChild,ce=le.nextSibling,_e=ce.firstChild,Ge=_e.nextSibling,He=ae.nextSibling;return re(ae,"title",`Open ${Z} in a new tab`),y(_e,Z),y(Ge,ee),He.$$click=ze=>{ze.stopPropagation(),x(Z)},te(ze=>{var je=L(Z),wt=l();return je!==ze.e&&re(ae,"href",ze.e=je),wt!==ze.t&&(He.disabled=ze.t=wt),ze},{e:void 0,t:void 0}),fe})()})),q})()]}}),null),y(C,b(Y,{get when(){return Object.keys(i()?.dependencies||{}).length===0},get children(){return Rd()}}),null),C})(),b(Y,{get when(){return o().length>0},get children(){var C=Ad(),I=C.firstChild,G=I.firstChild,k=G.nextSibling,U=k.firstChild,H=U.nextSibling;H.nextSibling;var J=I.nextSibling;return y(k,()=>o().length,H),y(J,b(Oe,{get each(){return o()},children:q=>(()=>{var Z=Fd(),ee=Z.firstChild,fe=ee.nextSibling,ae=fe.firstChild,le=ae.nextSibling,ce=fe.nextSibling;return y(ae,()=>q.name),y(le,()=>q.version),y(ce,()=>q.type),te(_e=>{var Ge=L(q.name),He=`Open ${q.name} in a new tab`,ze=q.type;return Ge!==_e.e&&re(Z,"href",_e.e=Ge),He!==_e.t&&re(Z,"title",_e.t=He),ze!==_e.a&&re(ce,"data-type",_e.a=ze),_e},{e:void 0,t:void 0,a:void 0}),Z})()})),C}})]}}),null),te(()=>O.disabled=l()),R})()}xe(["click","input"]);var Ld=D("<div class=sidebar-content>"),Nd=D('<div><div class=sidebar-tabs><button type=button><i class="codicon codicon-files"></i></button><button type=button><i class="codicon codicon-search"></i></button><button type=button><i class="codicon codicon-package"></i></button><button type=button><i class="codicon codicon-question">');function Md(e){const[t,n]=X("explorer"),i=()=>e.activeView!==void 0?e.activeView:t(),r=l=>{e.onViewChange?e.onViewChange(l):n(l)},o=l=>{e.isCollapsed&&e.onToggleCollapse?(e.onToggleCollapse(),r(l)):i()===l&&e.onToggleCollapse?e.onToggleCollapse():r(l)};ue(()=>{const l=s=>{if((si?s.metaKey:s.ctrlKey)&&s.shiftKey)switch(s.key.toLowerCase()){case"e":s.preventDefault(),o("explorer");break;case"f":s.preventDefault(),o("search");break;case"p":s.preventDefault(),o("packages");break;case"i":s.preventDefault(),o("help");break}};document.addEventListener("keydown",l),Qe(()=>{document.removeEventListener("keydown",l)})});const a=()=>{const l=[],s=(c,d="")=>{const u=d?`${d}/${c.name}`:c.name;if(c.type==="file"){const h=tt(u);l.push({id:c.id,title:c.name,subtitle:d||"Root",description:`File: ${u}`,content:h,path:u,icon:c.name.endsWith(".alt")?"file-code":"file",onClick:()=>e.onFileSelect(u)})}if(c.children)for(const h of c.children)s(h,u)};for(const c of e.files)s(c);return l};return(()=>{var l=Nd(),s=l.firstChild,c=s.firstChild,d=c.nextSibling,u=d.nextSibling,h=u.nextSibling;return c.$$click=()=>o("explorer"),re(c,"title",`File Explorer (${$t}+Shift+E)`),d.$$click=()=>o("search"),re(d,"title",`Search (${$t}+Shift+F)`),u.$$click=()=>o("packages"),re(u,"title",`Package Manager (${$t}+Shift+P)`),h.$$click=()=>o("help"),re(h,"title",`Help & Resources (${$t}+Shift+I)`),y(l,b(Y,{get when(){return!e.isCollapsed},get children(){var m=Ld();return y(m,b(Y,{get when(){return i()==="explorer"},get children(){return b(Lc,{get files(){return e.files},get onFileSelect(){return e.onFileSelect},get onNewFile(){return e.onNewFile},get onNewFolder(){return e.onNewFolder},get onMoveEntry(){return e.onMoveEntry},get onRenameEntry(){return e.onRenameEntry},get onDeleteEntry(){return e.onDeleteEntry},get onCopyEntry(){return e.onCopyEntry},get onFileUpload(){return e.onFileUpload},get activeFile(){return e.activeFile},get getFilePath(){return e.getFilePath},get selectedFiles(){return e.selectedFiles},get onSelectionChange(){return e.onSelectionChange},get creationError(){return e.creationError},get setCreationError(){return e.setCreationError},get checkNameConflict(){return e.checkNameConflict},get showConfirmDialog(){return e.showConfirmDialog},get showDeleteConfirmDialog(){return e.showDeleteConfirmDialog},get globalFileCreation(){return e.globalFileCreation},get setGlobalFileCreation(){return e.setGlobalFileCreation}})}}),null),y(m,b(Y,{get when(){return i()==="search"},get children(){return b(Rr,{placeholder:"Search files...",get items(){return a()},searchFields:["title","subtitle","description","content","path"],emptyMessage:"No files to search",noResultsMessage:"No files match your search",showAllByDefault:!1})}}),null),y(m,b(Y,{get when(){return i()==="packages"},get children(){return b(Id,{get fileSystem(){return e.files},get setFileSystem(){return e.setFileSystem}})}}),null),y(m,b(Y,{get when(){return i()==="help"},get children(){return b(ld,{get onLoadExample(){return e.onLoadExample}})}}),null),m}}),null),te(m=>{var _=`sidebar ${e.isCollapsed?"collapsed":""}`,w=`sidebar-tab ${i()==="explorer"?"active":""}`,Q=`sidebar-tab ${i()==="search"?"active":""}`,p=`sidebar-tab ${i()==="packages"?"active":""}`,v=`sidebar-tab ${i()==="help"?"active":""}`;return _!==m.e&&ge(l,m.e=_),w!==m.t&&ge(c,m.t=w),Q!==m.a&&ge(d,m.a=Q),p!==m.o&&ge(u,m.o=p),v!==m.i&&ge(h,m.i=v),m},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),l})()}xe(["click"]);const Ud=e=>{const[t,n]=X([]),[i,r]=X(null);return{openFiles:t,setOpenFiles:n,activeFile:i,setActiveFile:r,handleFileSelect:(c,d)=>{console.log("File selected:",c);const u=Xe(d,c);if(u){t().some(_=>_.id===u.id)||n([...t(),u]),r(u);const m=c==="deps"||c.startsWith("deps/");if(e&&e.safeUpdateContent){const _=tt(c);e.safeUpdateContent(_),e.setReadOnly&&e.setReadOnly(m),e.updateLanguage?.(c)}}},handleFileTabClick:(c,d)=>{if(r(c),e&&e.safeUpdateContent){const u=We(d,c.id)||c.name,h=tt(u);e.safeUpdateContent(h);const m=u==="deps"||u.startsWith("deps/");e.setReadOnly&&e.setReadOnly(m),e.updateLanguage?.(u)}},handleTabClose:(c,d)=>{const u=t().filter(h=>h.id!==c.id);if(n(u),i()&&i().id===c.id){const h=u.length>0?u[u.length-1]:null;if(r(h),h&&e&&e.safeUpdateContent){const m=We(d,h.id)||h.name,_=tt(m);e.safeUpdateContent(_),e.updateLanguage?.(m),e.setReadOnly?.(m==="deps"||m.startsWith("deps/"))}}},createNewFileWithContent:(c,d,u,h)=>{c.includes(".")||(c=c+".alt"),u.handleNewFile(c,void 0,d),h||Me(c,d)}}};function jd(e,t){if(!e)return{message:"Unknown error"};const n=[];let i,r,o;if(e.pos&&(i=e.pos.file_path||"unknown",r=e.pos.line,o=e.pos.col,n.push(`File: ${i||"unknown"}
Line: ${r}, Col: ${o}`),t&&typeof r=="number"&&r>0)){const l=t.split(`
`)[r-1]||"",s=" ".repeat(r.toString().length);n.push(`${s} |`),n.push(`${r} | ${l}`),n.push(`${s} |${" ".repeat(o||0)}^---`),n.push(`${s} |`)}return e.error_type&&n.push(`Type: ${e.error_type}`),n.push(`Message: ${e.message}`),e.stack&&Array.isArray(e.stack)&&e.stack.length>0&&(n.push(`
Stack trace:`),e.stack.forEach(a=>{n.push(`  at ${a.file_path||"unknown"}:${a.line}:${a.col}`)})),{message:`ERROR:
`+n.join(`
`),filePath:i,line:r,col:o}}class Vd{worker=null;nextId=0;pendingRequests=new Map;constructor(){typeof window<"u"&&(this.worker=new Worker(new URL("/dev/editor/assets/althread.worker-XG5DmlQz.js",import.meta.url),{type:"module"}),this.worker.onmessage=t=>{const{id:n,result:i,error:r,rawError:o}=t.data,a=this.pendingRequests.get(n);if(a)if(this.pendingRequests.delete(n),r){const l=o||new Error(r);o&&typeof o=="object"&&Object.assign(l,o),a.reject(l)}else a.resolve(i)})}sendRequest(t,n){if(!this.worker)return Promise.reject(new Error("Worker not initialized"));const i=this.nextId++;return new Promise((r,o)=>{this.pendingRequests.set(i,{resolve:r,reject:o}),this.worker.postMessage({type:t,payload:n,id:i})})}async run(t,n,i){return this.sendRequest("run",{source:t,filePath:n,virtualFS:i})}async check(t,n,i,r){return this.sendRequest("check",{source:t,filePath:n,virtualFS:i,maxStates:r})}async compile(t,n,i){return this.sendRequest("compile",{source:t,filePath:n,virtualFS:i})}}const Mi=new Vd,Ui=1e4,ji=1e3,Tt={nodes:[],edges:[]},Kt=e=>typeof e?.message=="string"&&e.message.toLowerCase().includes("deadlock"),ht=(e,t)=>{const n=e.trimEnd();return n.length>0?`${n}

${t}`:t},ke=(e,t)=>`${e.toLocaleString()} ${t}${e===1?"":"s"}`,Vi=e=>{const t=typeof e?.message=="string"?e.message:"",n=e?.pos?.line!==void 0?` (${e.pos.file_path?`${e.pos.file_path}:`:"line "}${e.pos.line})`:"";return t?`${t}${n}`:void 0};function Wd(e){const[t,n]=X("none"),[i,r]=X(null),[o,a]=X(null),[l,s]=X("console"),[c,d]=X(""),[u,h]=X(null),[m,_]=X(""),[w,Q]=X(!1),[p,v]=X(null),[z,E]=X([]),[$,F]=X([]),[A,S]=X(Tt),[x,P]=X([]),[L,R]=X(Tt),[j,f]=X(0),[g,O]=X([]),[T,C]=X([]),[I,G]=X([]),[k,U]=X(!1),[H,J]=X(!1);let q=null;const[Z,ee]=X(null),fe=(N,V="")=>{const K=e.getContext(),ne=N?.pos?.file_path||V;return jd(N,K?vd(K.virtualFS,ne):void 0)},ae=(N,V)=>{F(N),P(V),S(xi(N,{mode:"run",stepLines:V,theme:e.theme()}))},le=()=>{d(""),h(null),_(""),Q(!1),v(null),E([]),ee(null),ae([],[])},ce=()=>{q=null,C([]),G([]),U(!1),J(!1)},_e=(N,V="")=>{const K=fe(N,V);Ce(()=>{v(K),_(K.message),Q(!0),a({tone:"error",icon:"error",title:"Error",detail:Vi(N)}),s("execution")})},Ge=async()=>{const N=e.getContext();if(!(!N||i())){Ce(()=>{ce(),le(),n("run"),r("run"),a({tone:"busy",icon:"loading",title:"Running…"})});try{const V=await Mi.run(N.source,N.filePath,N.virtualFS),K=Math.max(0,V.nodes.length-1),ne=V.stdout.join(`
`);Ce(()=>{_(V.debug),E(V.message_flow_events),ae(V.nodes,V.step_lines||[]),d(ne),h(V.max_steps_reached?`Maximum number of steps reached (${ji}). Execution was stopped.`:null);const be=V.runtime_error;if(be&&Kt(be)){const $e=fe(be,N.filePath);_(ht(V.debug,$e.message)),d(ht(ne,"Deadlock detected.")),a({tone:"warning",icon:"debug-pause",title:"Deadlock",detail:`All processes are blocked after ${ke(K,"step")}.`}),s("console")}else if(be){const $e=fe(be,N.filePath);_(ht(V.debug,$e.message)),Q(!0),a({tone:"error",icon:"error",title:"Runtime error",detail:Vi(be)}),s("execution")}else V.max_steps_reached?(a({tone:"warning",icon:"watch",title:"Step limit reached",detail:`Stopped after ${ke(ji,"step")}. The program may not terminate.`}),s("console")):(a({tone:"success",icon:"pass",title:"Program finished",detail:`${ke(K,"step")} executed (one random interleaving).`}),s("console"))})}catch(V){console.error("Execution error:",V),Ce(()=>{le(),_e(V)})}finally{r(null)}}},He=async()=>{const N=e.getContext();if(!(!N||i())){Ce(()=>{ce(),le(),R(Tt),f(0),O([]),n("check"),r("check"),a({tone:"busy",icon:"loading",title:"Exploring the state space…",detail:`Up to ${ke(Ui,"state")}.`}),s("vm_states")});try{const V=await Mi.check(N.source,N.filePath,N.virtualFS,Ui),K=V.nodes.length;Ce(()=>{if(f(K),O(V.path),R(K>Vn?Tt:xi(V.nodes,{mode:"check",violationPath:V.violation_path,theme:e.theme()})),V.verdict==="violated"){const ne=Math.max(0,V.path.length-1);a({tone:"error",icon:"error",title:"Property violated",detail:V.exhaustive?`Counterexample of ${ke(ne,"step")} found (${ke(K,"state")} explored).`:`Counterexample of ${ke(ne,"step")} found before the exploration completed (${ke(K,"state")} explored).`}),_(V.exhaustive?"Violation found! See the highlighted path in the state graph.":"Violation found before exploration completed. The counterexample is valid, but the explored graph is partial.")}else V.verdict==="verified"?(a({tone:"success",icon:"pass",title:"All properties hold",detail:`Every reachable state was explored (${ke(K,"state")}).`}),_("Verification complete: No property violations found.")):(a({tone:"warning",icon:"warning",title:"Inconclusive",detail:`The exploration stopped at ${ke(K,"state")} before it could complete.`}),_("Verification inconclusive: The state limit was reached."))})}catch(V){console.error("Check error:",V),_e(V)}finally{r(null)}}},ze=()=>{const N=g();N.length!==0&&(Ce(()=>{le(),n("run"),ae(N,N.slice(1).map(V=>V.metadata.lines??[])),a({tone:"error",icon:"debug-alt",title:"Counterexample replay",detail:`${ke(N.length-1,"step")} leading to the violation. Use ← / → to walk through it.`}),_("Counter-example replay loaded from the checker path."),s("vm_states")}),it(0))},je=(N,V)=>{const K=I().length;if(V){const be=fe(V,q?.filePath);d($e=>ht($e,"Deadlock detected.")),_($e=>ht($e,be.message)),C([]),U(!0),J(!0),a({tone:"warning",icon:"debug-pause",title:"Deadlock",detail:`All processes are blocked after ${ke(K,"step")}.`});return}const ne=N??[];C(ne),U(ne.length===0),J(!1),ne.length===0?(_(be=>ht(be,"Program execution completed.")),a({tone:"success",icon:"pass",title:"Program finished",detail:`${ke(K,"step")} executed.`})):a({tone:"neutral",icon:"debug-step-over",title:"Step-by-step execution",detail:`${ke(K,"step")} so far · ${ke(ne.length,"possible next instruction")}.`})},wt=()=>{const N=e.getContext();!N||i()||Ce(()=>{ce(),le(),n("interactive"),s("step"),q=N;try{const V=Bn(N.source,N.filePath,N.virtualFS);ae([{vm:V.current_state,metadata:{level:0}}],[]),d(V.output?.length?`${V.output.join(`
`)}
`:""),_("Interactive session started. Choose the next instruction to execute."),je(V.next_states),it(0)}catch(V){console.error("Interactive mode error:",V),Kt(V)?je(void 0,V):(ce(),n("none"),_e(V,N.filePath))}})},Wt=N=>{const V=q;!V||t()!=="interactive"||Ce(()=>{try{const K=Qr(V.source,V.filePath,V.virtualFS,I(),N),ne=[...I(),N];G(ne),K.output?.length&&d(ye=>`${ye}${K.output.join(`
`)}
`),E(ye=>[...ye,...K.message_flow_events||[]]);const be=K.executed_step,$e=be?`Executed: ${be.prog_name}#${be.prog_id}
${K.debug||""}`:K.debug||"";_(ye=>ye?`${ye}

${$e}`:$e);const Fe=$();ae([...Fe,{vm:K.new_state,metadata:{level:Fe.length,lines:K.lines}}],[...x(),K.lines||[]]);try{const ye=Dr(V.source,V.filePath,V.virtualFS,ne);je(ye.next_states)}catch(ye){if(!Kt(ye))throw ye;je(void 0,ye)}it($().length-1)}catch(K){console.error("Interactive step error:",K),Kt(K)?je(void 0,K):_e(K,V.filePath)}})},$n=()=>{const N=q,V=I();if(!N||V.length===0)return;const K=V.slice(0,-1);Ce(()=>{ce(),le(),n("interactive"),q=N;try{const ne=Bn(N.source,N.filePath,N.virtualFS);ae([{vm:ne.current_state,metadata:{level:0}}],[]),d(ne.output?.length?`${ne.output.join(`
`)}
`:""),je(ne.next_states)}catch(ne){_e(ne,N.filePath);return}for(const ne of K)Wt(ne);_(ne=>ht(ne,"Last step undone.")),s("step")})},Xt=()=>{Ce(()=>{ce(),n($().length>0?"run":"none"),a(null),l()==="step"&&s("console")})},it=N=>{const V=$();if(V.length===0)return;const K=Math.max(0,Math.min(N,V.length-1));ee({vm:V[K].vm,stepIndex:K})};return{mode:t,busy:i,status:o,activeTab:l,setActiveTab:s,stdout:c,stdoutWarning:u,executionOutput:m,executionError:w,structuredError:p,messageFlow:z,traceNodes:$,traceGraph:A,stepLines:x,checkGraph:L,checkStateCount:j,counterexample:g,choices:T,history:I,interactiveFinished:k,interactiveDeadlock:H,selectedVM:Z,setSelectedVM:ee,run:Ge,check:He,replayCounterexample:ze,startInteractive:wt,executeStep:Wt,undoStep:$n,stopInteractive:Xt,selectTraceStep:it,reset:()=>{Ce(()=>{ce(),le(),R(Tt),f(0),O([]),n("none"),a(null),s("console")})}}}const Xd=(e,t,n,i,r,o,a,l,s,c,d)=>{const u=($,F,A)=>{const S={id:crypto.randomUUID(),name:$,type:"file"},x=F||"",P=JSON.parse(JSON.stringify(e())),L=Li(P,x);if(!L){n("Target directory not found.");return}if(L.find(g=>g.name===$)){n("A file or folder with this name already exists.");return}n(null),L.push(S),t(P),Ze(P);const j=x===""?$:`${x}/${$}`,f=A??Hc($);Me(j,f),r([...i(),S]),a(S),c&&c.safeUpdateContent&&(c.safeUpdateContent(f),c.updateLanguage?.(j),c.setReadOnly?.(j.startsWith("deps/")))},h=($,F)=>{const A={id:crypto.randomUUID(),name:$,type:"directory",children:[]},S=F||"",x=JSON.parse(JSON.stringify(e())),P=Li(x,S);if(!P){n("Target directory not found.");return}if(P.find(R=>R.name===$)){n("A file or folder with this name already exists.");return}n(null),P.push(A),t(x),Ze(x)},m=($,F,A)=>{if($.type==="file"){const S=Te.FILE_CONTENT_PREFIX+F,x=Te.FILE_CONTENT_PREFIX+A,P=localStorage.getItem(S);P!==null&&(localStorage.setItem(x,P),localStorage.removeItem(S))}else $.type==="directory"&&$.children&&$.children.forEach(S=>{const x=F+"/"+S.name,P=A+"/"+S.name;m(S,x,P)})},_=($,F)=>{if(console.log(`Moving ${$} to ${F}`),$===F){console.warn("Cannot move into itself");return}if(F.startsWith($+"/")){console.warn("Cannot move into child directory");return}const A=JSON.parse(JSON.stringify(e())),S=at(A,$);if(!S){console.error("Source not found:",$);return}const[x]=S.parent.splice(S.index,1);if(F==="")A.push(x);else{const f=at(A,F);if(!f||f.entry.type!=="directory"){console.error("Destination not found or is not a directory:",F),S.parent.splice(S.index,0,x);return}f.entry.children||(f.entry.children=[]),f.entry.children.push(x)}const P=F===""?x.name:`${F}/${x.name}`;$!==P&&m(x,$,P),console.log("File system after move:",A),Ze(A);const L=i().map(f=>f.id),R=o()?.id;t(A);const j=L.map(f=>pt(A,f)).filter(Boolean);if(r(j),R){const f=pt(A,R);if(a(f),f){const g=We(A,f.id)||f.name;c.updateLanguage?.(g),c.setReadOnly?.(g.startsWith("deps/"))}}},w=async($,F)=>{const A=JSON.parse(JSON.stringify(e()));for(const S of $){const x=new FileReader;x.onload=P=>{const L=P.target?.result,R={id:crypto.randomUUID(),name:S.name,type:"file"},j=F===""?S.name:`${F}/${S.name}`;Me(j,L);const g=((O,T)=>{if(T==="")return O;const C=T.split("/");let I=O;for(const G of C){const k=I.find(U=>U.name===G&&U.type==="directory");if(!k||!k.children)return null;I=k.children}return I})(A,F);g&&(g.push(R),t([...A]),Ze(A))},x.readAsText(S)}},Q=($,F)=>{console.log(`Renaming ${$} to ${F}`);const A=JSON.parse(JSON.stringify(e())),S=at(A,$);if(!S){console.error("Entry not found for rename:",$);return}S.entry.name=F;const x=$.split("/");x[x.length-1]=F;const P=x.join("/");$!==P&&m(S.entry,$,P),t(A),Ze(A);const L=i().map(f=>f.id),R=o()?.id,j=L.map(f=>pt(A,f)).filter(Boolean);if(r(j),R){const f=pt(A,R);if(a(f),f){const g=We(A,f.id)||f.name;c.updateLanguage?.(g),c.setReadOnly?.(g.startsWith("deps/"))}}},p=($,F)=>{if($.type==="file"){const A=Te.FILE_CONTENT_PREFIX+F;localStorage.removeItem(A)}else $.type==="directory"&&$.children&&$.children.forEach(A=>{const S=F+"/"+A.name;p(A,S)})};return{handleNewFile:u,handleNewFolder:h,handleMoveEntry:_,handleFileUpload:w,handleRenameEntry:Q,handleDeleteEntry:$=>{console.log(`Deleting ${$}`);const F=JSON.parse(JSON.stringify(e())),A=at(F,$);if(!A){console.error("Entry not found for deletion:",$);return}A.parent.splice(A.index,1),p(A.entry,$),t(F),Ze(F);const S=ln(A.entry),x=i().filter(R=>!S.includes(R.id));if(r(x),o()&&S.includes(o().id)){const R=x.length>0?x[x.length-1]:null;if(a(R),R&&c&&c.safeUpdateContent){const j=We(F,R.id)||R.name,f=d(j);c.safeUpdateContent(f),c.updateLanguage?.(j),c.setReadOnly?.(j.startsWith("deps/"))}}const L=l().filter(R=>R!==$);s(L)},handleMoveWithReplacement:($,F,A)=>{if(console.log(`Moving ${$} to ${F} with replacement of ${A}`),$===F){console.warn("Cannot move into itself");return}if(F.startsWith($+"/")){console.warn("Cannot move into child directory");return}const S=JSON.parse(JSON.stringify(e())),x=at(S,$);if(!x){console.error("Source not found:",$);return}const[P]=x.parent.splice(x.index,1),L=[];if(F===""){for(let O=S.length-1;O>=0;O--)S[O].name===A&&(L.push(...ln(S[O])),S.splice(O,1),localStorage.removeItem(Te.FILE_CONTENT_PREFIX+A));S.push(P)}else{const O=at(S,F);if(!O||O.entry.type!=="directory"){console.error("Destination not found or is not a directory:",F),x.parent.splice(x.index,0,P);return}O.entry.children||(O.entry.children=[]);for(let T=O.entry.children.length-1;T>=0;T--)if(O.entry.children[T].name===A){L.push(...ln(O.entry.children[T])),O.entry.children.splice(T,1);const C=`${F}/${A}`;localStorage.removeItem(Te.FILE_CONTENT_PREFIX+C)}O.entry.children.push(P)}const R=F===""?P.name:`${F}/${P.name}`;$!==R&&m(P,$,R),console.log("File system after move with replacement:",S),Ze(S);const j=i().map(O=>O.id),f=o()?.id;t(S);const g=j.filter(O=>!L.includes(O)).map(O=>pt(S,O)).filter(Boolean);if(r(g),f)if(L.includes(f)){const O=g.length>0?g[g.length-1]:null;if(a(O),O&&c&&c.safeUpdateContent){const T=We(S,O.id)||O.name,C=d(T);c.safeUpdateContent(C),c.updateLanguage?.(T),c.setReadOnly?.(T.startsWith("deps/"))}}else{const O=pt(S,f);if(a(O),O){const T=We(S,O.id)||O.name;c.updateLanguage?.(T),c.setReadOnly?.(T.startsWith("deps/"))}}},handleCopyEntry:($,F,A)=>{console.log(`Copying ${$} to ${F}/${A}`);const S=JSON.parse(JSON.stringify(e())),x=at(S,$);if(!x){console.error("Source not found for copy:",$);return}const P=(f,g)=>({id:crypto.randomUUID(),name:g,type:f.type,children:f.type==="directory"&&f.children?f.children.map(T=>P(T,T.name)):void 0}),L=P(x.entry,A);if(F==="")S.push(L);else{const f=at(S,F);if(!f||f.entry.type!=="directory"){console.error("Destination not found or is not a directory:",F);return}f.entry.children||(f.entry.children=[]),f.entry.children.push(L)}const R=(f,g,O,T)=>{if(f.type==="file"){const C=Te.FILE_CONTENT_PREFIX+O,I=Te.FILE_CONTENT_PREFIX+T,G=localStorage.getItem(C);G!==null&&localStorage.setItem(I,G)}else if(f.type==="directory"&&f.children&&g.children)for(let C=0;C<f.children.length;C++){const I=f.children[C],G=g.children[C],k=O+"/"+I.name,U=T+"/"+G.name;R(I,G,k,U)}},j=F===""?A:`${F}/${A}`;R(x.entry,L,$,j),console.log("File system after copy:",S),Ze(S),t(S)}}},Dn="shared-link.alt",Lr=["data"],Nr=["data64","base64"],Mr=["fileName","filename","file"],Gd=[...Lr,...Nr,...Mr],Bd=()=>{const e=[new URLSearchParams(window.location.search)],t=window.location.hash.indexOf("?");return t>=0&&e.push(new URLSearchParams(window.location.hash.slice(t))),e},Qn=e=>{for(const t of Bd())for(const n of e){const i=t.get(n);if(i!==null)return i}return null},Yd=e=>{try{const t=e.replace(/-/g,"+").replace(/_/g,"/"),n=(4-t.length%4)%4,i=t+"=".repeat(n),r=atob(i),o=Uint8Array.from(r,a=>a.charCodeAt(0));return new TextDecoder().decode(o)}catch(t){return console.warn("Unable to decode shared editor payload from URL query parameters.",t),null}},qd=e=>{const n=(e?.trim()||Dn).split(/[\\/]/).filter(r=>r.length>0).pop()||Dn,i=Array.from(n,r=>r.charCodeAt(0)<32||'<>:"|?*'.includes(r)?"-":r).join("").trim();return i.length===0?Dn:i.includes(".")?i:`${i}.alt`},Hd=()=>{if(typeof window>"u")return null;const e=Qn(Nr),t=Qn(Lr),n=qd(Qn(Mr));if(e!==null){const i=Yd(e);return i===null?null:{fileName:n,content:i}}return t===null?null:{fileName:n,content:t}},Wi=e=>{let t=!1;for(const n of Gd)e.has(n)&&(e.delete(n),t=!0);return t},Zd=()=>{if(typeof window>"u")return;const e=new URL(window.location.href);let t=Wi(e.searchParams);const n=e.hash.indexOf("?");if(n>=0){const i=e.hash.slice(0,n),r=new URLSearchParams(e.hash.slice(n+1));if(Wi(r)){const a=r.toString();e.hash=a?`${i}?${a}`:i,t=!0}}t&&window.history.replaceState(window.history.state,document.title,`${e.pathname}${e.search}${e.hash}`)};var Kd=D("<button type=button class=vscode-button><i></i><span>"),Jd=D("<div class=collapsed-sidebar-container>"),eu=D("<div class=editor-instance-wrapper>"),tu=D('<div class=app-shell><header id=header><div class=brand><h3>Althread</h3></div><div class=actions><div class=action-group></div><span class=actions-separator></span><button type=button class="vscode-button icon-only theme-toggle-button"aria-label="Toggle theme"><i class="codicon codicon-color-mode"></i></button></div></header><div class=content-wrapper>'),nu=D("<div>");_n().then(()=>{Ar()});const iu=(e,t)=>{if(!Xe(e,t))return t;const n=t.lastIndexOf("."),i=n>0?t.slice(0,n):t,r=n>0?t.slice(n):"";let o=2;for(;Xe(e,`${i}-${o}${r}`);)o++;return`${i}-${o}${r}`},ru=(e,t,n)=>{let i=e;for(const r of t.split("/").filter(Boolean))if(i=i?.find(o=>o.name===r&&o.type==="directory")?.children,!i)return!1;return i.some(r=>r.name===n)},lt={isOpen:!1,content:"",fileName:""};function ou(){const e=Hd(),[t,n]=X(qc()),[i,r]=X([]),[o,a]=X(null),[l,s]=X(!!e),[c,d]=X(Kc()),[u,h]=X(null),[m,_]=X("help"),[w,Q]=X(!1);let p=null,v=null;const[z,E]=X(.2),$=48,F=()=>{const M=!w(),N=v,V=document.querySelector(".right-panel"),K=document.getElementById("content");if(p&&N&&V&&K){const ne=K.getBoundingClientRect().width,be=V.getBoundingClientRect().width;if(M){const $e=ne-$,Fe=document.querySelector("#content > [data-corvu-resizable-panel]:first-child")?.getBoundingClientRect().width||ne*.2;E(Fe);const ye=be/$e;N([0,1-ye,ye])}else{const $e=ne+$,Fe=z()/$e,ye=be/$e;N([Fe,1-Fe-ye,ye])}}Q(M)},A=M=>{w()&&F(),_(M)},S=M=>We(t(),M.id)||M.name,x=wl({getWorkspace:()=>Ni(t()),onWorkspaceChange:M=>{for(const[N,V]of Object.entries(M))Me(N,V)},onNavigate:(M,N)=>{if(!Xe(t(),M))return;P.handleFileSelect(M,t());const V=x.safeEditorView();if(!V)return;const K=V.state.doc.line(Math.min(N.line+1,V.state.doc.lines)),ne=Math.min(K.from+N.character,K.to);V.dispatch({selection:{anchor:ne},scrollIntoView:!0}),V.focus()},defaultValue:`// Welcome to Althread
`,filePath:"untitled.alt",theme:c(),onValueChange:M=>{const N=P.activeFile();N&&Me(S(N),M)}}),P=Ud(x),L=Xd(t,n,a,P.openFiles,P.setOpenFiles,P.activeFile,P.setActiveFile,i,r,x,tt),R=(M,N)=>{P.createNewFileWithContent(iu(t(),M),N,L,t)},j=()=>P.activeFile()?.name.endsWith(".alt")??!1,g=Wd({getContext:()=>{const M=P.activeFile(),N=x.safeEditorView();if(!M||!j()||!N)return null;const V=t();return{source:N.state.doc.toString(),filePath:We(V,M.id,"")||M.name,virtualFS:Ni(V)}},theme:c}),[O,T]=X(null);ue(()=>{const M=O();if(M&&M.length>0){x.highlightLines?.(M);return}const N=g.selectedVM(),V=(N?.vm?.locals??[]).map(K=>({line:K.line,label:`${K.name}#${K.pid}`})).filter(K=>typeof K.line=="number"&&K.line>0);if(V.length>0){x.highlightLines?.(V);return}if(N?.stepIndex!==void 0){const K=g.stepLines()[N.stepIndex];if(K?.length){x.highlightLines?.(K);return}}x.clearHighlights?.()}),ue(Ue(()=>P.activeFile()?.id,()=>{T(null),g.mode()==="interactive"&&g.stopInteractive()},{defer:!0}));const C=()=>!!P.activeFile()&&j(),I=(M,N)=>P.activeFile()?j()?N?`${M} (${N})`:M:`${M} — only .alt files can be executed`:`${M} — open a file first`,G=`${$t}+Enter`,k=`${$t}+Shift+Enter`;xt(()=>{const M=N=>{!(si?N.metaKey:N.ctrlKey)||N.key!=="Enter"||N.altKey||(N.preventDefault(),N.stopPropagation(),N.shiftKey?g.check():g.run())};window.addEventListener("keydown",M,!0),Qe(()=>window.removeEventListener("keydown",M,!0))}),xt(()=>{if(!e)return;if(Zd(),Xe(t(),e.fileName)?.type==="file"){le({isOpen:!0,content:e.content,fileName:e.fileName});return}R(e.fileName,e.content)}),ue(()=>{if(l()||(s(!0),P.activeFile()))return;const M=t();Xe(M,"main.alt")?.type==="file"?P.handleFileSelect("main.alt",M):M.length===1&&M[0].type==="file"&&P.handleFileSelect(We(M,M[0].id)||M[0].name,M)}),ue(()=>Ze(t())),ue(()=>{const M=c();document.documentElement.dataset.theme=M,document.body.dataset.theme=M,x.updateTheme?.(M)}),ue(Ue(w,()=>{setTimeout(()=>{const M=P.activeFile(),N=x.safeEditorView();if(!M||!N)return;const V=tt(S(M));N.dispatch({changes:{from:0,to:N.state.doc.length,insert:V}})},50)}));const[U,H]=X({isOpen:!1,sourcePaths:[],destPath:"",conflictingName:""}),J=()=>H({isOpen:!1,sourcePaths:[],destPath:"",conflictingName:""}),[q,Z]=X({isOpen:!1,paths:[]}),[ee,fe]=X(lt),[ae,le]=X(lt),ce=()=>{const{sourcePaths:M,destPath:N,conflictingName:V}=U();for(const K of M)L.handleMoveWithReplacement(K,N,V);J()},_e=()=>{for(const M of q().paths)L.handleDeleteEntry(M);Z({isOpen:!1,paths:[]})},Ge=()=>{const M=ee();fe(lt);const N=P.activeFile();if(!N){R(M.fileName,M.content);return}x.safeUpdateContent(M.content),Me(S(N),M.content)},He=()=>{const M=ee();fe(lt),R(M.fileName,M.content)},ze=()=>{const M=ae();le(lt),Me(M.fileName,M.content),P.handleFileSelect(M.fileName,t())},je=()=>{const M=ae();le(lt),R(M.fileName,M.content)},wt=()=>{le(lt),P.activeFile()||s(!1)},Wt=()=>{A("explorer"),h({type:"file",parentPath:""})},$n=M=>{if(!Xe(t(),M)){console.warn(`File not found: ${M}`);return}P.handleFileSelect(M,t()),A("explorer")},Xt=()=>b(Md,{get files(){return t()},onFileSelect:M=>P.handleFileSelect(M,t()),get onNewFile(){return L.handleNewFile},get onNewFolder(){return L.handleNewFolder},get onMoveEntry(){return L.handleMoveEntry},get onRenameEntry(){return L.handleRenameEntry},get onDeleteEntry(){return L.handleDeleteEntry},get onCopyEntry(){return L.handleCopyEntry},get onFileUpload(){return L.handleFileUpload},get activeFile(){return P.activeFile()},getFilePath:S,get selectedFiles(){return i()},onSelectionChange:r,get creationError(){return o()},setCreationError:a,checkNameConflict:(M,N)=>ru(t(),M,N),showConfirmDialog:(M,N,V)=>H({isOpen:!0,sourcePaths:M,destPath:N,conflictingName:V}),showDeleteConfirmDialog:M=>Z({isOpen:!0,paths:M}),get globalFileCreation(){return u()},setGlobalFileCreation:h,setFileSystem:n,onLoadExample:(M,N)=>fe({isOpen:!0,content:M,fileName:N}),get activeView(){return m()},onViewChange:_,get isCollapsed(){return w()},onToggleCollapse:F}),it=M=>(()=>{var N=Kd(),V=N.firstChild,K=V.nextSibling;return N.$$click=()=>M.onClick(),y(K,()=>M.label),te(ne=>{var be=!!M.primary,$e=M.action==="interactive"&&g.mode()==="interactive",Fe=!C()||g.busy()!==null,ye=I(M.label,M.shortcut),me=g.busy()===M.action?"codicon codicon-loading codicon-modifier-spin":`codicon codicon-${M.icon}`;return be!==ne.e&&N.classList.toggle("primary",ne.e=be),$e!==ne.t&&N.classList.toggle("active",ne.t=$e),Fe!==ne.a&&(N.disabled=ne.a=Fe),ye!==ne.o&&re(N,"title",ne.o=ye),me!==ne.i&&ge(V,ne.i=me),ne},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),N})();return(()=>{var M=tu(),N=M.firstChild,V=N.firstChild,K=V.firstChild,ne=V.nextSibling,be=ne.firstChild,$e=be.nextSibling,Fe=$e.nextSibling,ye=N.nextSibling;return y(V,b(Ba,{}),K),y(be,b(it,{action:"run",label:"Run",icon:"play",shortcut:G,primary:!0,get onClick(){return g.run}}),null),y(be,b(it,{action:"check",label:"Check",icon:"workspace-trusted",shortcut:k,get onClick(){return g.check}}),null),y(be,b(it,{action:"interactive",label:"Step",icon:"debug-step-over",get onClick(){return g.startInteractive}}),null),Fe.$$click=()=>{const me=c()==="dark"?"light":"dark";Zc(me),d(me)},y(M,b(Y,{get when(){return w()},get children(){var me=Jd();return y(me,b(Xt,{})),me}}),ye),y(ye,b(Ve,{id:"content",as:me=>{const rt=Ve.useContext();return p=rt.sizes,v=rt.setSizes,(()=>{var Et=nu();return ei(Et,me,!1,!1),Et})()},get children(){return[b(Ve.Panel,{initialSize:.2,minSize:.15,collapsible:!0,collapsedSize:0,onCollapse:()=>Q(!0),onExpand:()=>Q(!1),style:{overflow:"hidden"},get children(){return b(Xt,{})}}),b(Ve.Handle,{class:"Resizable-handle"}),b(Ve.Panel,{class:"editor-panel",initialSize:.5,minSize:.2,get children(){return[b(Pl,{get openFiles(){return P.openFiles()},get activeFile(){return P.activeFile()},getFilePath:S,onTabClick:me=>P.handleFileTabClick(me,t()),onTabClose:me=>P.handleTabClose(me,t())}),b(Y,{get when(){return P.activeFile()},get fallback(){return b($l,{onNewFile:Wt})},get children(){var me=eu(),rt=x.ref;return typeof rt=="function"?Ye(rt,me):x.ref=me,me}})]}}),b(Ve.Handle,{class:"Resizable-handle"}),b(Ve.Panel,{class:"right-panel",initialSize:.3,minSize:.15,get children(){return b(kc,{exec:g,editor:x,get theme(){return c()},runShortcut:G,onErrorFileClick:$n,onPreviewLines:T})}})]}})),y(M,b(Ja,{get isOpen(){return U().isOpen},title:"Replace Existing Item",message:"An item with this name already exists in the destination folder. Do you want to replace it?",get fileName(){return U().conflictingName},onConfirm:ce,onCancel:J}),null),y(M,b(el,{get isOpen(){return q().isOpen},get paths(){return q().paths},onConfirm:_e,onCancel:()=>Z({isOpen:!1,paths:[]})}),null),y(M,b(vi,{get isOpen(){return ee().isOpen},get detail(){return`Replace the content of the current file, or open “${ee().fileName}” in a new file.`},onLoadInCurrent:Ge,onLoadInNew:He,onCancel:()=>fe(lt)}),null),y(M,b(vi,{get isOpen(){return ae().isOpen},onLoadInCurrent:ze,onLoadInNew:je,onCancel:wt,title:"Shared Link Import",message:"A file with the same name already exists. What should the editor do with the shared content?",get detail(){return`Replace ${ae().fileName} or create a new file with a unique name.`},currentLabel:"Replace File",newLabel:"Create Copy"}),null),te(me=>{var rt=c(),Et=`Switch to ${c()==="dark"?"light":"dark"} theme`,ci=!!w();return rt!==me.e&&re(M,"data-theme",me.e=rt),Et!==me.t&&re(Fe,"title",me.t=Et),ci!==me.a&&ye.classList.toggle("sidebar-collapsed",me.a=ci),me},{e:void 0,t:void 0,a:void 0}),M})()}xe(["click"]);const Xi=Jn(()=>Ne(()=>import("./Tutorial-C6oQoEZY.js"),__vite__mapDeps([14,1,15]))),au=()=>{const e=fr();return xt(()=>{e("/",{replace:!0})}),null},Gi=document.getElementById("app");Gi&&ra(()=>b(Wa,{get children(){return[b(Bt,{path:"/tutorials",component:Xi}),b(Bt,{path:"/tutorials/:stepName",component:Xi}),b(Bt,{path:"/",component:ou}),b(Bt,{path:"*all",component:au})]}}),Gi);export{Ie as A,Oe as F,Ba as L,Vn as M,Y as S,Ne as _,fr as a,ue as b,X as c,Qe as d,wl as e,b as f,Ve as g,te as h,y as i,Ye as j,ge as k,Kc as l,Ee as m,Zc as n,xt as o,It as p,jd as q,xe as r,re as s,D as t,du as u,Ue as v,Mi as w,sa as x,pe as y,dt as z};
