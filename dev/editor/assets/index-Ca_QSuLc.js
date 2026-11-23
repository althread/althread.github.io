const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BlqAb9HM.js","assets/codemirror-CxIvJr0B.js","assets/index-DSRLhUMa.js","assets/index-27Oa6cPa.js","assets/index-LBiqdFRM.js","assets/index-BYirMQhs.js","assets/index-etIPbnKY.js","assets/index-Dj1yPGQn.js","assets/index-D-fBKaJZ.js","assets/Graph-BPy696rq.js","assets/visHelpers-Ck8vR259.js","assets/visHelpers-C5-pRpzx.css","assets/Graph-DruHsj2C.css","assets/CommGraph-D3FKQU0H.js","assets/Tutorial-Bs0fSI_i.js","assets/Tutorial-CUP3AYsF.css"])))=>i.map(i=>d[i]);
import{C as It,S as Xt,E as wt,a as Hn,s as jr,H as Vr,t as j,b as Wr,L as Xr,c as Gr,d as Zn,V as Br,l as qi,e as Yr,h as qr,k as Kn,f as Hr,g as Zr,i as Kr,j as Jr,m as eo,n as to,o as no,p as io,q as ro,D as At,r as oo,u as ao,v as lo,w as so,x as co,y as uo,z as fo,A as go,B as ho,F as mo,G as po,I as bo,J as yo,K as vo,M as Oo,N as wo,O as _o,P as $o,Q as So,R as xo,T as Co,U as Po,W as Eo,X as ko,Y as zo}from"./codemirror-CxIvJr0B.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Ro="modulepreload",To=function(e){return"/dev/editor/"+e},fi={},Ge=function(t,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=Promise.allSettled(n.map(s=>{if(s=To(s),s in fi)return;fi[s]=!0;const c=s.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Ro,c||(d.as="script"),d.crossOrigin="",d.href=s,l&&d.setAttribute("nonce",l),document.head.appendChild(d),c)return new Promise((h,m)=>{d.addEventListener("load",h),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},ie={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return gi(this.context.count)},getNextContextId(){return gi(this.context.count++)}};function gi(e){const t=String(e),n=t.length-1;return ie.context.id+(n?String.fromCharCode(96+n):"")+t}function Ft(e){ie.context=e}const Hi=!1,Ao=(e,t)=>e===t,dn=Symbol("solid-proxy"),Zi=typeof Proxy=="function",Do=Symbol("solid-track"),un={equals:Ao};let Ki=ir;const at=1,fn=2,Ji={owned:null,cleanups:null,context:null,owner:null},Cn={};var de=null;let Pn=null,Qo=null,be=null,Re=null,it=null,On=0;function Mt(e,t){const n=be,i=de,r=e.length===0,o=t===void 0?i:t,a=r?Ji:{owned:null,cleanups:null,context:o?o.context:null,owner:o},l=r?e:()=>e(()=>ye(()=>jt(a)));de=a,be=null;try{return et(l,!0)}finally{be=n,de=i}}function U(e,t){t=t?Object.assign({},un,t):un;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),nr(n,r));return[tr.bind(n),i]}function Io(e,t,n){const i=_n(e,t,!0,at);Rt(i)}function ne(e,t,n){const i=_n(e,t,!1,at);Rt(i)}function ge(e,t,n){Ki=Vo;const i=_n(e,t,!1,at);i.user=!0,it?it.push(i):Rt(i)}function oe(e,t,n){n=n?Object.assign({},un,n):un;const i=_n(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,Rt(i),tr.bind(i)}function Fo(e){return e&&typeof e=="object"&&"then"in e}function Lo(e,t,n){let i,r,o;i=!0,r=e,o={};let a=null,l=Cn,s=null,c=!1,f="initialValue"in o,d=typeof i=="function"&&oe(i);const h=new Set,[m,$]=(o.storage||U)(o.initialValue),[w,A]=U(void 0),[p,v]=U(void 0,{equals:!1}),[P,k]=U(f?"ready":"unresolved");ie.context&&(s=ie.getNextContextId(),o.ssrLoadFrom==="initial"?l=o.initialValue:ie.load&&ie.has(s)&&(l=ie.load(s)));function S(C,Q,R,V){return a===C&&(a=null,V!==void 0&&(f=!0),(C===l||Q===l)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(V,{value:Q})),l=Cn,F(Q,R)),Q}function F(C,Q){et(()=>{Q===void 0&&$(()=>C),k(Q!==void 0?"errored":f?"ready":"unresolved"),A(Q);for(const R of h.keys())R.decrement();h.clear()},!1)}function T(){const C=Mo,Q=m(),R=w();if(R!==void 0&&!a)throw R;return be&&be.user,Q}function I(C=!0){if(C!==!1&&c)return;c=!1;const Q=d?d():i;if(Q==null||Q===!1){S(a,ye(m));return}let R;const V=l!==Cn?l:ye(()=>{try{return r(Q,{value:m(),refetching:C})}catch(u){R=u}});if(R!==void 0){S(a,void 0,tn(R),Q);return}else if(!Fo(V))return S(a,V,void 0,Q),V;return a=V,"v"in V?(V.s===1?S(a,V.v,void 0,Q):S(a,void 0,tn(V.v),Q),V):(c=!0,queueMicrotask(()=>c=!1),et(()=>{k(f?"refreshing":"pending"),v()},!1),V.then(u=>S(V,u,void 0,Q),u=>S(V,void 0,tn(u),Q)))}Object.defineProperties(T,{state:{get:()=>P()},error:{get:()=>w()},loading:{get(){const C=P();return C==="pending"||C==="refreshing"}},latest:{get(){if(!f)return T();const C=w();if(C&&!a)throw C;return m()}}});let _=de;return d?Io(()=>(_=de,I(!1))):I(!1),[T,{refetch:C=>Jn(_,()=>I(C)),mutate:$}]}function ke(e){return et(e,!1)}function ye(e){if(be===null)return e();const t=be;be=null;try{return e()}finally{be=t}}function Ye(e,t,n){const i=Array.isArray(e);let r,o=n&&n.defer;return a=>{let l;if(i){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(o)return o=!1,a;const s=ye(()=>t(l,r,a));return r=l,s}}function Et(e){ge(()=>ye(e))}function Fe(e){return de===null||(de.cleanups===null?de.cleanups=[e]:de.cleanups.push(e)),e}function er(){return de}function Jn(e,t){const n=de,i=be;de=e,be=null;try{return et(t,!0)}catch(r){ei(r)}finally{de=n,be=i}}function No(e){const t=be,n=de;return Promise.resolve().then(()=>{be=t,de=n;let i;return et(e,!1),be=de=null,i?i.done:void 0})}const[uu,fu]=U(!1);function kt(e,t){const n=Symbol("context");return{id:n,Provider:Wo(n),defaultValue:e}}function zt(e){let t;return de&&de.context&&(t=de.context[e.id])!==void 0?t:e.defaultValue}function wn(e){const t=oe(e),n=oe(()=>Ln(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}let Mo;function tr(){if(this.sources&&this.state)if(this.state===at)Rt(this);else{const e=Re;Re=null,et(()=>hn(this),!1),Re=e}if(be){const e=this.observers?this.observers.length:0;be.sources?(be.sources.push(this),be.sourceSlots.push(e)):(be.sources=[this],be.sourceSlots=[e]),this.observers?(this.observers.push(be),this.observerSlots.push(be.sources.length-1)):(this.observers=[be],this.observerSlots=[be.sources.length-1])}return this.value}function nr(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&et(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r],a=Pn&&Pn.running;a&&Pn.disposed.has(o),(a?!o.tState:!o.state)&&(o.pure?Re.push(o):it.push(o),o.observers&&rr(o)),a||(o.state=at)}if(Re.length>1e6)throw Re=[],new Error},!1)),t}function Rt(e){if(!e.fn)return;jt(e);const t=On;Uo(e,e.value,t)}function Uo(e,t,n){let i;const r=de,o=be;be=de=e;try{i=e.fn(t)}catch(a){return e.pure&&(e.state=at,e.owned&&e.owned.forEach(jt),e.owned=null),e.updatedAt=n+1,ei(a)}finally{be=o,de=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?nr(e,i):e.value=i,e.updatedAt=n)}function _n(e,t,n,i=at,r){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:de,context:de?de.context:null,pure:n};return de===null||de!==Ji&&(de.owned?de.owned.push(o):de.owned=[o]),o}function gn(e){if(e.state===0)return;if(e.state===fn)return hn(e);if(e.suspense&&ye(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<On);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===at)Rt(e);else if(e.state===fn){const i=Re;Re=null,et(()=>hn(e,t[0]),!1),Re=i}}function et(e,t){if(Re)return e();let n=!1;t||(Re=[]),it?n=!0:it=[],On++;try{const i=e();return jo(n),i}catch(i){n||(it=null),Re=null,ei(i)}}function jo(e){if(Re&&(ir(Re),Re=null),e)return;const t=it;it=null,t.length&&et(()=>Ki(t),!1)}function ir(e){for(let t=0;t<e.length;t++)gn(e[t])}function Vo(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:gn(i)}if(ie.context){if(ie.count){ie.effects||(ie.effects=[]),ie.effects.push(...e.slice(0,n));return}Ft()}for(ie.effects&&(ie.done||!ie.count)&&(e=[...ie.effects,...e],n+=ie.effects.length,delete ie.effects),t=0;t<n;t++)gn(e[t])}function hn(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===at?i!==t&&(!i.updatedAt||i.updatedAt<On)&&gn(i):r===fn&&hn(i,t)}}}function rr(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=fn,n.pure?Re.push(n):it.push(n),n.observers&&rr(n))}}function jt(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),a=n.observerSlots.pop();i<r.length&&(o.sourceSlots[a]=i,r[i]=o,n.observerSlots[i]=a)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)jt(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)jt(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function tn(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ei(e,t=de){throw tn(e)}function Ln(e){if(typeof e=="function"&&!e.length)return Ln(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=Ln(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function Wo(e,t){return function(i){let r;return ne(()=>r=ye(()=>(de.context={...de.context,[e]:i.value},wn(()=>i.children))),void 0),r}}const Xo=Symbol("fallback");function hi(e){for(let t=0;t<e.length;t++)e[t]()}function Go(e,t,n={}){let i=[],r=[],o=[],a=0,l=t.length>1?[]:null;return Fe(()=>hi(o)),()=>{let s=e()||[],c=s.length,f,d;return s[Do],ye(()=>{let m,$,w,A,p,v,P,k,S;if(c===0)a!==0&&(hi(o),o=[],i=[],r=[],a=0,l&&(l=[])),n.fallback&&(i=[Xo],r[0]=Mt(F=>(o[0]=F,n.fallback())),a=1);else if(a===0){for(r=new Array(c),d=0;d<c;d++)i[d]=s[d],r[d]=Mt(h);a=c}else{for(w=new Array(c),A=new Array(c),l&&(p=new Array(c)),v=0,P=Math.min(a,c);v<P&&i[v]===s[v];v++);for(P=a-1,k=c-1;P>=v&&k>=v&&i[P]===s[k];P--,k--)w[k]=r[P],A[k]=o[P],l&&(p[k]=l[P]);for(m=new Map,$=new Array(k+1),d=k;d>=v;d--)S=s[d],f=m.get(S),$[d]=f===void 0?-1:f,m.set(S,d);for(f=v;f<=P;f++)S=i[f],d=m.get(S),d!==void 0&&d!==-1?(w[d]=r[f],A[d]=o[f],l&&(p[d]=l[f]),d=$[d],m.set(S,d)):o[f]();for(d=v;d<c;d++)d in w?(r[d]=w[d],o[d]=A[d],l&&(l[d]=p[d],l[d](d))):r[d]=Mt(h);r=r.slice(0,a=c),i=s.slice(0)}return r});function h(m){if(o[d]=m,l){const[$,w]=U(d);return l[d]=w,t(s[d],$)}return t(s[d])}}}function b(e,t){return ye(()=>e(t||{}))}function Yt(){return!0}const Nn={get(e,t,n){return t===dn?n:e.get(t)},has(e,t){return t===dn?!0:e.has(t)},set:Yt,deleteProperty:Yt,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Yt,deleteProperty:Yt}},ownKeys(e){return e.keys()}};function En(e){return(e=typeof e=="function"?e():e)?e:{}}function Bo(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function ut(...e){let t=!1;for(let a=0;a<e.length;a++){const l=e[a];t=t||!!l&&dn in l,e[a]=typeof l=="function"?(t=!0,oe(l)):l}if(Zi&&t)return new Proxy({get(a){for(let l=e.length-1;l>=0;l--){const s=En(e[l])[a];if(s!==void 0)return s}},has(a){for(let l=e.length-1;l>=0;l--)if(a in En(e[l]))return!0;return!1},keys(){const a=[];for(let l=0;l<e.length;l++)a.push(...Object.keys(En(e[l])));return[...new Set(a)]}},Nn);const n={},i=Object.create(null);for(let a=e.length-1;a>=0;a--){const l=e[a];if(!l)continue;const s=Object.getOwnPropertyNames(l);for(let c=s.length-1;c>=0;c--){const f=s[c];if(f==="__proto__"||f==="constructor")continue;const d=Object.getOwnPropertyDescriptor(l,f);if(!i[f])i[f]=d.get?{enumerable:!0,configurable:!0,get:Bo.bind(n[f]=[d.get.bind(l)])}:d.value!==void 0?d:void 0;else{const h=n[f];h&&(d.get?h.push(d.get.bind(l)):d.value!==void 0&&h.push(()=>d.value))}}}const r={},o=Object.keys(i);for(let a=o.length-1;a>=0;a--){const l=o[a],s=i[l];s&&s.get?Object.defineProperty(r,l,s):r[l]=s?s.value:void 0}return r}function Gt(e,...t){if(Zi&&dn in e){const r=new Set(t.length>1?t.flat():t[0]),o=t.map(a=>new Proxy({get(l){return a.includes(l)?e[l]:void 0},has(l){return a.includes(l)&&l in e},keys(){return a.filter(l=>l in e)}},Nn));return o.push(new Proxy({get(a){return r.has(a)?void 0:e[a]},has(a){return r.has(a)?!1:a in e},keys(){return Object.keys(e).filter(a=>!r.has(a))}},Nn)),o}const n={},i=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const o=Object.getOwnPropertyDescriptor(e,r),a=!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable;let l=!1,s=0;for(const c of t)c.includes(r)&&(l=!0,a?i[s][r]=o.value:Object.defineProperty(i[s],r,o)),++s;l||(a?n[r]=o.value:Object.defineProperty(n,r,o))}return[...i,n]}function ti(e){let t,n;const i=r=>{const o=ie.context;if(o){const[l,s]=U();ie.count||(ie.count=0),ie.count++,(n||(n=e())).then(c=>{!ie.done&&Ft(o),ie.count--,s(()=>c.default),Ft()}),t=l}else if(!t){const[l]=Lo(()=>(n||(n=e())).then(s=>s.default));t=l}let a;return oe(()=>(a=t())?ye(()=>{if(!o||ie.done)return a(r);const l=ie.context;Ft(o);const s=a(r);return Ft(l),s}):"")};return i.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),i}let Yo=0;function $n(){return ie.context?ie.getNextContextId():`cl-${Yo++}`}const or=e=>`Stale read from <${e}>.`;function _e(e){const t="fallback"in e&&{fallback:()=>e.fallback};return oe(Go(()=>e.each,e.children,t||void 0))}function G(e){const t=e.keyed,n=oe(()=>e.when,void 0,void 0),i=t?n:oe(n,void 0,{equals:(r,o)=>!r==!o});return oe(()=>{const r=i();if(r){const o=e.children;return typeof o=="function"&&o.length>0?ye(()=>o(t?r:()=>{if(!ye(i))throw or("Show");return n()})):o}return e.fallback},void 0,void 0)}function Mn(e){const t=wn(()=>e.children),n=oe(()=>{const i=t(),r=Array.isArray(i)?i:[i];let o=()=>{};for(let a=0;a<r.length;a++){const l=a,s=r[a],c=o,f=oe(()=>c()?void 0:s.when,void 0,void 0),d=s.keyed?f:oe(f,void 0,{equals:(h,m)=>!h==!m});o=()=>c()||(d()?[l,f,s]:void 0)}return o});return oe(()=>{const i=n()();if(!i)return e.fallback;const[r,o,a]=i,l=a.children;return typeof l=="function"&&l.length>0?ye(()=>l(a.keyed?o():()=>{if(ye(n)()?.[0]!==r)throw or("Match");return o()})):l},void 0,void 0)}function Ce(e){return e}const qo=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ho=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline",...qo]),Zo=new Set(["innerHTML","textContent","innerText","children"]),Ko=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Jo=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ea(e,t){const n=Jo[e];return typeof n=="object"?n[t]?n.$:void 0:n}const ta=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),na=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),ia={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},ze=e=>oe(()=>e());function ra(e,t,n){let i=n.length,r=t.length,o=i,a=0,l=0,s=t[r-1].nextSibling,c=null;for(;a<r||l<o;){if(t[a]===n[l]){a++,l++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===a){const f=o<i?l?n[l-1].nextSibling:n[o-l]:s;for(;l<o;)e.insertBefore(n[l++],f)}else if(o===l)for(;a<r;)(!c||!c.has(t[a]))&&t[a].remove(),a++;else if(t[a]===n[o-1]&&n[l]===t[r-1]){const f=t[--r].nextSibling;e.insertBefore(n[l++],t[a++].nextSibling),e.insertBefore(n[--o],f),t[r]=n[o]}else{if(!c){c=new Map;let d=l;for(;d<o;)c.set(n[d],d++)}const f=c.get(t[a]);if(f!=null)if(l<f&&f<o){let d=a,h=1,m;for(;++d<r&&d<o&&!((m=c.get(t[d]))==null||m!==f+h);)h++;if(h>f-l){const $=t[a];for(;l<f;)e.insertBefore(n[l++],$)}else e.replaceChild(n[l++],t[a++])}else a++;else t[a++].remove()}}}const mi="_$DX_DELEGATE";function oa(e,t,n,i={}){let r;return Mt(o=>{r=o,t===document?e():y(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function z(e,t,n,i){let r;const o=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},a=()=>(r||(r=o())).cloneNode(!0);return a.cloneNode=a,a}function Pe(e,t=window.document){const n=t[mi]||(t[mi]=new Set);for(let i=0,r=e.length;i<r;i++){const o=e[i];n.has(o)||(n.add(o),t.addEventListener(o,ga))}}function re(e,t,n){_t(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function aa(e,t,n,i){_t(e)||(i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i))}function la(e,t,n){_t(e)||(n?e.setAttribute(t,""):e.removeAttribute(t))}function he(e,t){_t(e)||(t==null?e.removeAttribute("class"):e.className=t)}function Ne(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=o=>r.call(e,n[1],o))}else e.addEventListener(t,n,typeof n!="function"&&n)}function sa(e,t,n={}){const i=Object.keys(t||{}),r=Object.keys(n);let o,a;for(o=0,a=r.length;o<a;o++){const l=r[o];!l||l==="undefined"||t[l]||(pi(e,l,!1),delete n[l])}for(o=0,a=i.length;o<a;o++){const l=i[o],s=!!t[l];!l||l==="undefined"||n[l]===s||!s||(pi(e,l,!0),n[l]=s)}return n}function ca(e,t,n){if(!t)return n?re(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let r,o;for(o in n)t[o]==null&&i.removeProperty(o),delete n[o];for(o in t)r=t[o],r!==n[o]&&(i.setProperty(o,r),n[o]=r);return n}function ni(e,t={},n,i){const r={};return i||ne(()=>r.children=Vt(e,t.children,r.children)),ne(()=>typeof t.ref=="function"&&Je(t.ref,e)),ne(()=>da(e,t,n,!0,r,!0)),r}function Je(e,t,n){return ye(()=>e(t,n))}function y(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return Vt(e,t,i,n);ne(r=>Vt(e,t(),r,n),i)}function da(e,t,n,i,r={},o=!1){t||(t={});for(const a in r)if(!(a in t)){if(a==="children")continue;r[a]=bi(e,a,null,r[a],n,o,t)}for(const a in t){if(a==="children")continue;const l=t[a];r[a]=bi(e,a,l,r[a],n,o,t)}}function ua(e){let t,n;return!_t()||!(t=ie.registry.get(n=ha()))?e():(ie.completed&&ie.completed.add(t),ie.registry.delete(n),t)}function _t(e){return!!ie.context&&!ie.done&&(!e||e.isConnected)}function fa(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function pi(e,t,n){const i=t.trim().split(/\s+/);for(let r=0,o=i.length;r<o;r++)e.classList.toggle(i[r],n)}function bi(e,t,n,i,r,o,a){let l,s,c,f,d;if(t==="style")return ca(e,n,i);if(t==="classList")return sa(e,n,i);if(n===i)return i;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);i&&e.removeEventListener(h,i,typeof i!="function"&&i),n&&e.addEventListener(h,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);i&&e.removeEventListener(h,i,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),m=ta.has(h);if(!m&&i){const $=Array.isArray(i)?i[0]:i;e.removeEventListener(h,$)}(m||n)&&(Ne(e,h,n,m),m&&Pe([h]))}else if(t.slice(0,5)==="attr:")re(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")la(e,t.slice(5),n);else if((d=t.slice(0,5)==="prop:")||(c=Zo.has(t))||!r&&((f=ea(t,e.tagName))||(s=Ho.has(t)))||(l=e.nodeName.includes("-")||"is"in a)){if(d)t=t.slice(5),s=!0;else if(_t(e))return n;t==="class"||t==="className"?he(e,n):l&&!s&&!c?e[fa(t)]=n:e[f||t]=n}else{const h=r&&t.indexOf(":")>-1&&ia[t.split(":")[0]];h?aa(e,h,t,n):re(e,Ko[t]||t,n)}return n}function ga(e){if(ie.registry&&ie.events&&ie.events.find(([s,c])=>c===e))return;let t=e.target;const n=`$$${e.type}`,i=e.target,r=e.currentTarget,o=s=>Object.defineProperty(e,"target",{configurable:!0,value:s}),a=()=>{const s=t[n];if(s&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?s.call(t,c,e):s.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},l=()=>{for(;a()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),ie.registry&&!ie.done&&(ie.done=_$HY.done=!0),e.composedPath){const s=e.composedPath();o(s[0]);for(let c=0;c<s.length-2&&(t=s[c],!!a());c++){if(t._$host){t=t._$host,l();break}if(t.parentNode===r)break}}else l();o(i)}function Vt(e,t,n,i,r){const o=_t(e);if(o){!n&&(n=[...e.childNodes]);let s=[];for(let c=0;c<n.length;c++){const f=n[c];f.nodeType===8&&f.data.slice(0,2)==="!$"?f.remove():s.push(f)}n=s}for(;typeof n=="function";)n=n();if(t===n)return n;const a=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,a==="string"||a==="number"){if(o||a==="number"&&(t=t.toString(),t===n))return n;if(l){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=St(e,n,i,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||a==="boolean"){if(o)return n;n=St(e,n,i)}else{if(a==="function")return ne(()=>{let s=t();for(;typeof s=="function";)s=s();n=Vt(e,s,n,i)}),()=>n;if(Array.isArray(t)){const s=[],c=n&&Array.isArray(n);if(Un(s,t,n,r))return ne(()=>n=Vt(e,s,n,i,!0)),()=>n;if(o){if(!s.length)return n;if(i===void 0)return n=[...e.childNodes];let f=s[0];if(f.parentNode!==e)return n;const d=[f];for(;(f=f.nextSibling)!==i;)d.push(f);return n=d}if(s.length===0){if(n=St(e,n,i),l)return n}else c?n.length===0?yi(e,s,i):ra(e,n,s):(n&&St(e),yi(e,s));n=s}else if(t.nodeType){if(o&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=St(e,n,i,t);St(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Un(e,t,n,i){let r=!1;for(let o=0,a=t.length;o<a;o++){let l=t[o],s=n&&n[e.length],c;if(!(l==null||l===!0||l===!1))if((c=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))r=Un(e,l,s)||r;else if(c==="function")if(i){for(;typeof l=="function";)l=l();r=Un(e,Array.isArray(l)?l:[l],Array.isArray(s)?s:[s])||r}else e.push(l),r=!0;else{const f=String(l);s&&s.nodeType===3&&s.data===f?e.push(s):e.push(document.createTextNode(f))}}return r}function yi(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function St(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let o=!1;for(let a=t.length-1;a>=0;a--){const l=t[a];if(r!==l){const s=l.parentNode===e;!o&&!a?s?e.replaceChild(r,l):e.insertBefore(r,n):s&&l.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}function ha(){return ie.getNextContextId()}const ma=!1,pa="http://www.w3.org/2000/svg";function ba(e,t=!1){return t?document.createElementNS(pa,e):document.createElement(e)}function ya(e,t){const n=oe(e);return oe(()=>{const i=n();switch(typeof i){case"function":return ye(()=>i(t));case"string":const r=na.has(i),o=ie.context?ua():ba(i,r);return ni(o,t,r),o}})}function va(e){const[,t]=Gt(e,["component"]);return ya(()=>e.component,t)}function ar(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function i(r,o){if(n)return!(n=!1);const a={to:r,options:o,defaultPrevented:!1,preventDefault:()=>a.defaultPrevented=!0};for(const l of e)l.listener({...a,from:l.location,retry:s=>{s&&(n=!0),l.navigate(r,{...o,resolve:!1})}});return!a.defaultPrevented}return{subscribe:t,confirm:i}}let jn;function ii(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),jn=window.history.state._depth}ii();function Oa(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function wa(e,t){let n=!1;return()=>{const i=jn;ii();const r=i==null?null:jn-i;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const _a=/^(?:[a-z0-9]+:)?\/\//i,$a=/^\/+|(\/)\/+$/g,lr="http://sr";function Ut(e,t=!1){const n=e.replace($a,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function nn(e,t,n){if(_a.test(t))return;const i=Ut(e),r=n&&Ut(n);let o="";return!r||t.startsWith("/")?o=i:r.toLowerCase().indexOf(i.toLowerCase())!==0?o=i+r:o=r,(o||"/")+Ut(t,!o)}function Sa(e,t){if(e==null)throw new Error(t);return e}function xa(e,t){return Ut(e).replace(/\/*(\*.*)?$/g,"")+Ut(t)}function sr(e){const t={};return e.searchParams.forEach((n,i)=>{i in t?Array.isArray(t[i])?t[i].push(n):t[i]=[t[i],n]:t[i]=n}),t}function Ca(e,t,n){const[i,r]=e.split("/*",2),o=i.split("/").filter(Boolean),a=o.length;return l=>{const s=l.split("/").filter(Boolean),c=s.length-a;if(c<0||c>0&&r===void 0&&!t)return null;const f={path:a?"":"/",params:{}},d=h=>n===void 0?void 0:n[h];for(let h=0;h<a;h++){const m=o[h],$=m[0]===":",w=$?s[h]:s[h].toLowerCase(),A=$?m.slice(1):m.toLowerCase();if($&&kn(w,d(A)))f.params[A]=w;else if($||!kn(w,A))return null;f.path+=`/${w}`}if(r){const h=c?s.slice(-c).join("/"):"";if(kn(h,d(r)))f.params[r]=h;else return null}return f}}function kn(e,t){const n=i=>i===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Pa(e){const[t,n]=e.pattern.split("/*",2),i=t.split("/").filter(Boolean);return i.reduce((r,o)=>r+(o.startsWith(":")?2:3),i.length-(n===void 0?0:1))}function cr(e){const t=new Map,n=er();return new Proxy({},{get(i,r){return t.has(r)||Jn(n,()=>t.set(r,oe(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function dr(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),i=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(i);)r.push(n+=t[1]),i=i.slice(t[0].length);return dr(i).reduce((o,a)=>[...o,...r.map(l=>l+a)],[])}const Ea=100,ur=kt(),fr=kt(),gr=()=>Sa(zt(ur),"<A> and 'use' router primitives can be only used inside a Route."),hr=()=>gr().navigatorFactory(),gu=()=>gr().params;function ka(e,t=""){const{component:n,preload:i,load:r,children:o,info:a}=e,l=!o||Array.isArray(o)&&!o.length,s={key:e,component:n,preload:i||r,info:a};return mr(e.path).reduce((c,f)=>{for(const d of dr(f)){const h=xa(t,d);let m=l?h:h.split("/*",1)[0];m=m.split("/").map($=>$.startsWith(":")||$.startsWith("*")?$:encodeURIComponent($)).join("/"),c.push({...s,originalPath:f,pattern:m,matcher:Ca(m,!l,e.matchFilters)})}return c},[])}function za(e,t=0){return{routes:e,score:Pa(e[e.length-1])*1e4-t,matcher(n){const i=[];for(let r=e.length-1;r>=0;r--){const o=e[r],a=o.matcher(n);if(!a)return null;i.unshift({...a,route:o})}return i}}}function mr(e){return Array.isArray(e)?e:[e]}function pr(e,t="",n=[],i=[]){const r=mr(e);for(let o=0,a=r.length;o<a;o++){const l=r[o];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const s=ka(l,t);for(const c of s){n.push(c);const f=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!f)pr(l.children,c.pattern,n,i);else{const d=za([...n],i.length);i.push(d)}n.pop()}}}return n.length?i:i.sort((o,a)=>a.score-o.score)}function zn(e,t){for(let n=0,i=e.length;n<i;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Ra(e,t,n){const i=new URL(lr),r=oe(f=>{const d=e();try{return new URL(d,i)}catch{return console.error(`Invalid path ${d}`),f}},i,{equals:(f,d)=>f.href===d.href}),o=oe(()=>r().pathname),a=oe(()=>r().search,!0),l=oe(()=>r().hash),s=()=>"",c=Ye(a,()=>sr(r()));return{get pathname(){return o()},get search(){return a()},get hash(){return l()},get state(){return t()},get key(){return s()},query:n?n(c):cr(c)}}let vt;function Ta(){return vt}function Aa(e,t,n,i={}){const{signal:[r,o],utils:a={}}=e,l=a.parsePath||(u=>u),s=a.renderPath||(u=>u),c=a.beforeLeave||ar(),f=nn("",i.base||"");if(f===void 0)throw new Error(`${f} is not a valid base path`);f&&!r().value&&o({value:f,replace:!0,scroll:!1});const[d,h]=U(!1);let m;const $=(u,g)=>{g.value===w()&&g.state===p()||(m===void 0&&h(!0),vt=u,m=g,No(()=>{m===g&&(A(m.value),v(m.state),S[1](O=>O.filter(E=>E.pending)))}).finally(()=>{m===g&&ke(()=>{vt=void 0,u==="navigate"&&R(m),h(!1),m=void 0})}))},[w,A]=U(r().value),[p,v]=U(r().state),P=Ra(w,p,a.queryWrapper),k=[],S=U([]),F=oe(()=>typeof i.transformUrl=="function"?zn(t(),i.transformUrl(P.pathname)):zn(t(),P.pathname)),T=()=>{const u=F(),g={};for(let O=0;O<u.length;O++)Object.assign(g,u[O].params);return g},I=a.paramsWrapper?a.paramsWrapper(T,t):cr(T),_={pattern:f,path:()=>f,outlet:()=>null,resolvePath(u){return nn(f,u)}};return ne(Ye(r,u=>$("native",u),{defer:!0})),{base:_,location:P,params:I,isRouting:d,renderPath:s,parsePath:l,navigatorFactory:Q,matches:F,beforeLeave:c,preloadRoute:V,singleFlight:i.singleFlight===void 0?!0:i.singleFlight,submissions:S};function C(u,g,O){ye(()=>{if(typeof g=="number"){g&&(a.go?a.go(g):console.warn("Router integration does not support relative routing"));return}const E=!g||g[0]==="?",{replace:x,resolve:L,scroll:X,state:D}={replace:!1,resolve:!E,scroll:!0,...O},M=L?u.resolvePath(g):nn(E&&P.pathname||"",g);if(M===void 0)throw new Error(`Path '${g}' is not a routable path`);if(k.length>=Ea)throw new Error("Too many redirects");const Z=w();(M!==Z||D!==p())&&(ma||c.confirm(M,O)&&(k.push({value:Z,replace:x,scroll:X,state:p()}),$("navigate",{value:M,state:D})))})}function Q(u){return u=u||zt(fr)||_,(g,O)=>C(u,g,O)}function R(u){const g=k[0];g&&(o({...u,replace:g.replace,scroll:g.scroll}),k.length=0)}function V(u,g){const O=zn(t(),u.pathname),E=vt;vt="preload";for(let x in O){const{route:L,params:X}=O[x];L.component&&L.component.preload&&L.component.preload();const{preload:D}=L;g&&D&&Jn(n(),()=>D({params:X,location:{pathname:u.pathname,search:u.search,hash:u.hash,query:sr(u),state:null,key:""},intent:"preload"}))}vt=E}}function Da(e,t,n,i){const{base:r,location:o,params:a}=e,{pattern:l,component:s,preload:c}=i().route,f=oe(()=>i().path);s&&s.preload&&s.preload();const d=c?c({params:a,location:o,intent:vt||"initial"}):void 0;return{parent:t,pattern:l,path:f,outlet:()=>s?b(s,{params:a,location:o,data:d,get children(){return n()}}):n(),resolvePath(m){return nn(r.path(),m,f())}}}const Qa=e=>t=>{const{base:n}=t,i=wn(()=>t.children),r=oe(()=>pr(i(),t.base||""));let o;const a=Aa(e,r,()=>o,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(a),b(ur.Provider,{value:a,get children(){return b(Ia,{routerState:a,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[ze(()=>(o=er())&&null),b(Fa,{routerState:a,get branches(){return r()}})]}})}})};function Ia(e){const t=e.routerState.location,n=e.routerState.params,i=oe(()=>e.preload&&ye(()=>{e.preload({params:n,location:t,intent:Ta()||"initial"})}));return b(G,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>b(r,{params:n,location:t,get data(){return i()},get children(){return e.children}})})}function Fa(e){const t=[];let n;const i=oe(Ye(e.routerState.matches,(r,o,a)=>{let l=o&&r.length===o.length;const s=[];for(let c=0,f=r.length;c<f;c++){const d=o&&o[c],h=r[c];a&&d&&h.route.key===d.route.key?s[c]=a[c]:(l=!1,t[c]&&t[c](),Mt(m=>{t[c]=m,s[c]=Da(e.routerState,s[c-1]||e.routerState.base,vi(()=>i()[c+1]),()=>e.routerState.matches()[c])}))}return t.splice(r.length).forEach(c=>c()),a&&l?a:(n=s[0],s)}));return vi(()=>i()&&n)()}const vi=e=>()=>b(G,{get when(){return e()},keyed:!0,children:t=>b(fr.Provider,{value:t,get children(){return t.outlet()}})}),qt=e=>{const t=wn(()=>e.children);return ut(e,{get children(){return t()}})};function La([e,t],n,i){return[e,i?r=>t(i(r)):t]}function Na(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,i=La(U(n(e.get()),{equals:(r,o)=>r.value===o.value&&r.state===o.state}),void 0,r=>(!t&&e.set(r),ie.registry&&!ie.done&&(ie.done=!0),r));return e.init&&Fe(e.init((r=e.get())=>{t=!0,i[1](n(r)),t=!1})),Qa({signal:i,create:e.create,utils:e.utils})}function Ma(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Ua(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const ja=new Map;function Va(e=!0,t=!1,n="/_server",i){return r=>{const o=r.base.path(),a=r.navigatorFactory(r.base);let l,s;function c(w){return w.namespaceURI==="http://www.w3.org/2000/svg"}function f(w){if(w.defaultPrevented||w.button!==0||w.metaKey||w.altKey||w.ctrlKey||w.shiftKey)return;const A=w.composedPath().find(F=>F instanceof Node&&F.nodeName.toUpperCase()==="A");if(!A||t&&!A.hasAttribute("link"))return;const p=c(A),v=p?A.href.baseVal:A.href;if((p?A.target.baseVal:A.target)||!v&&!A.hasAttribute("state"))return;const k=(A.getAttribute("rel")||"").split(/\s+/);if(A.hasAttribute("download")||k&&k.includes("external"))return;const S=p?new URL(v,document.baseURI):new URL(v);if(!(S.origin!==window.location.origin||o&&S.pathname&&!S.pathname.toLowerCase().startsWith(o.toLowerCase())))return[A,S]}function d(w){const A=f(w);if(!A)return;const[p,v]=A,P=r.parsePath(v.pathname+v.search+v.hash),k=p.getAttribute("state");w.preventDefault(),a(P,{resolve:!1,replace:p.hasAttribute("replace"),scroll:!p.hasAttribute("noscroll"),state:k?JSON.parse(k):void 0})}function h(w){const A=f(w);if(!A)return;const[p,v]=A;r.preloadRoute(v,p.getAttribute("preload")!=="false")}function m(w){clearTimeout(l);const A=f(w);if(!A)return s=null;const[p,v]=A;s!==p&&(l=setTimeout(()=>{r.preloadRoute(v,p.getAttribute("preload")!=="false"),s=p},20))}function $(w){if(w.defaultPrevented)return;let A=w.submitter&&w.submitter.hasAttribute("formaction")?w.submitter.getAttribute("formaction"):w.target.getAttribute("action");if(!A)return;if(!A.startsWith("https://action/")){const v=new URL(A,lr);if(A=r.parsePath(v.pathname+v.search),!A.startsWith(n))return}if(w.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const p=ja.get(A);if(p){w.preventDefault();const v=new FormData(w.target,w.submitter);p.call({r,f:w.target},w.target.enctype==="multipart/form-data"?v:new URLSearchParams(v))}}Pe(["click","submit"]),document.addEventListener("click",d),e&&(document.addEventListener("mousemove",m,{passive:!0}),document.addEventListener("focusin",h,{passive:!0}),document.addEventListener("touchstart",h,{passive:!0})),document.addEventListener("submit",$),Fe(()=>{document.removeEventListener("click",d),e&&(document.removeEventListener("mousemove",m),document.removeEventListener("focusin",h),document.removeEventListener("touchstart",h)),document.removeEventListener("submit",$)})}}function Wa(e){const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}function Xa(e){const t=()=>window.location.hash.slice(1),n=ar();return Na({get:t,set({value:i,replace:r,scroll:o,state:a}){r?window.history.replaceState(Oa(a),"","#"+i):window.history.pushState(a,"","#"+i);const l=i.indexOf("#"),s=l>=0?i.slice(l+1):"";Ua(s,o),ii()},init:i=>Ma(window,"hashchange",wa(i,r=>!n.confirm(r&&r<0?r:t()))),create:Va(e.preload,e.explicitLinks,e.actionBase),utils:{go:i=>window.history.go(i),renderPath:i=>`#${i}`,parsePath:Wa,beforeLeave:n}})(e)}const Ga="/dev/editor/assets/logo-Db7mqqtV.png";var Ba=z('<img alt="Althread logo">');const Ya=e=>(()=>{var t=Ba();return t.style.setProperty("height","42px"),re(t,"src",Ga),ni(t,e,!1,!1),t})();var qa=z('<div class=confirmation-dialog-overlay role=button tabindex=-1><div class=confirmation-dialog role=dialog aria-modal=true><div class=confirmation-dialog-header><i class="codicon codicon-warning"></i></div><div class=confirmation-dialog-body><br><span class=confirmation-dialog-file-name></span></div><div class=confirmation-dialog-actions><button type=button class=button-secondary><i class="codicon codicon-close"></i>Cancel</button><button type=button class=button-primary><i class="codicon codicon-check"></i>Replace'),Ha=z("<span class=confirmation-dialog-file-name>"),Oi=z("<br>"),Za=z("<div style=max-height:120px;overflow-y:auto;font-size:12px;color:#999;>"),Ka=z('<div class=confirmation-dialog-overlay role=button tabindex=-1><div class=confirmation-dialog role=dialog aria-modal=true><div class=confirmation-dialog-header><i class="codicon codicon-trash"></i>Delete </div><div class=confirmation-dialog-body></div><div class=confirmation-dialog-actions><button type=button class=button-secondary><i class="codicon codicon-close"></i>Cancel</button><button type=button class=button-destructive><i class="codicon codicon-trash"></i>Delete'),Ja=z("<div>• <span class=confirmation-dialog-file-name>");const el=e=>(ge(()=>{if(e.isOpen){const t=n=>{n.key==="Escape"&&e.onCancel()};window.addEventListener("keydown",t),Fe(()=>window.removeEventListener("keydown",t))}}),b(G,{get when(){return e.isOpen},get children(){var t=qa(),n=t.firstChild,i=n.firstChild;i.firstChild;var r=i.nextSibling,o=r.firstChild,a=o.nextSibling,l=r.nextSibling,s=l.firstChild,c=s.nextSibling;return t.$$keydown=f=>{f.key==="Escape"&&e.onCancel()},t.$$click=f=>{f.target===f.currentTarget&&e.onCancel()},y(i,()=>e.title,null),y(r,()=>e.message,o),y(a,()=>e.fileName),Ne(s,"click",e.onCancel,!0),Ne(c,"click",e.onConfirm,!0),t}})),tl=e=>{ge(()=>{if(e.isOpen){const n=i=>{i.key==="Escape"&&e.onCancel()};window.addEventListener("keydown",n),Fe(()=>window.removeEventListener("keydown",n))}});const t=()=>{const n=e.paths.length;return n===1?["Are you sure you want to delete"," ",(()=>{var i=Ha();return y(i,()=>e.paths[0]),i})(),"?"]:`Are you sure you want to delete ${n} items?`};return b(G,{get when(){return e.isOpen},get children(){var n=Ka(),i=n.firstChild,r=i.firstChild,o=r.firstChild;o.nextSibling;var a=r.nextSibling,l=a.nextSibling,s=l.firstChild,c=s.nextSibling;return n.$$keydown=f=>{f.key==="Escape"&&e.onCancel()},n.$$click=f=>{f.target===f.currentTarget&&e.onCancel()},y(r,()=>e.paths.length===1?"Item":"Items",null),y(a,t,null),y(a,b(G,{get when(){return e.paths.length>1},get children(){return[Oi(),Oi(),(()=>{var f=Za();return y(f,b(_e,{get each(){return e.paths},children:d=>(()=>{var h=Ja(),m=h.firstChild,$=m.nextSibling;return y($,d),h})()})),f})()]}}),null),Ne(s,"click",e.onCancel,!0),Ne(c,"click",e.onConfirm,!0),n}})};Pe(["click","keydown"]);var nl=z('<div class=confirmation-dialog-overlay role=button tabindex=-1><div class=confirmation-dialog role=dialog aria-modal=true><div class=confirmation-dialog-header><i class="codicon codicon-file-code"></i></div><div class=confirmation-dialog-body><br><br><div style=font-size:12px;color:#858585;></div></div><div class=confirmation-dialog-actions><button type=button class=button-secondary><i class="codicon codicon-close"></i>Cancel</button><button type=button class=button-secondary><i class="codicon codicon-file"></i></button><button type=button class=button-primary><i class="codicon codicon-new-file">');const wi=e=>(ge(()=>{if(e.isOpen){const t=n=>{n.key==="Escape"&&e.onCancel()};window.addEventListener("keydown",t),Fe(()=>window.removeEventListener("keydown",t))}}),b(G,{get when(){return e.isOpen},get children(){var t=nl(),n=t.firstChild,i=n.firstChild;i.firstChild;var r=i.nextSibling,o=r.firstChild,a=o.nextSibling,l=a.nextSibling,s=r.nextSibling,c=s.firstChild,f=c.nextSibling;f.firstChild;var d=f.nextSibling;return d.firstChild,t.$$keydown=h=>{h.key==="Escape"&&e.onCancel()},t.$$click=h=>{h.target===h.currentTarget&&e.onCancel()},y(i,()=>e.title||"Load Example",null),y(r,()=>e.message||"Where would you like to load the example code?",o),y(l,()=>e.detail||"Choose to replace the current file content or create a new file tab."),Ne(c,"click",e.onCancel,!0),Ne(f,"click",e.onLoadInCurrent,!0),y(f,()=>e.currentLabel||"Current File",null),Ne(d,"click",e.onLoadInNew,!0),y(d,()=>e.newLabel||"New File",null),t}}));Pe(["click","keydown"]);function il(e,t){const n=new It,i=o=>{t()?.dispatch({effects:n.reconfigure(o)})};return ge(Ye([t,typeof e=="function"?e:()=>e],([o,a])=>{o&&a&&(n.get(o.state)?i(a):o.dispatch({effects:Xt.appendConfig.of(n.of(a))}))},{defer:!0})),i}function rl(e){const[t,n]=U(),[i,r]=U();function o(l){return il(l,i)}const a=wt.updateListener.of(l=>e?.onModelViewUpdate?.(l));return o(a),ge(Ye(t,l=>{const s=Hn.create({doc:e?.value??""}),c=new wt({state:s,parent:l,dispatch:(f,d)=>{if(e?.onTransactionDispatched&&e.onTransactionDispatched(f,d),c.update([f]),f.docChanged){const m=f.state.doc.toString();e?.onValueChange?.(m)}}});Et(()=>r(c)),Fe(()=>{i()?.destroy(),r(void 0)})})),ge(Ye(i,l=>{const s=l?.state.doc.toString();s!==e?.value&&l&&l.dispatch({changes:{from:0,to:s?.length,insert:e?.value??""}})},{defer:!0})),{editorView:i,ref:n,createExtension:o}}const ol={dark:{text:"#abb2bf",keyword:"#c678dd",string:"#98c379",number:"#d19a66",comment:"#5c6370",typeName:"#e5c07b",functionName:"#61afef",property:"#e06c75",namespace:"#61afef"},light:{text:"#2f3441",keyword:"#8b38c9",string:"#2f7d32",number:"#b65c1b",comment:"#8b94a7",typeName:"#9f6a00",functionName:"#0f6bbd",property:"#bc4b63",namespace:"#0f6bbd"}},al=e=>{const t=ol[e];return Vr.define([{tag:j.content,color:t.text},{tag:[j.keyword,j.controlKeyword,j.definitionKeyword,j.operatorKeyword,j.modifier],color:t.keyword},{tag:[j.moduleKeyword],color:t.keyword,fontWeight:"bold"},{tag:[j.special(j.keyword)],color:t.keyword,fontStyle:"italic"},{tag:[j.string,j.special(j.string)],color:t.string},{tag:[j.number,j.bool,j.null],color:t.number},{tag:j.lineComment,color:t.comment,fontStyle:"italic"},{tag:j.blockComment,color:t.comment,fontStyle:"italic"},{tag:[j.className,j.typeName],color:t.typeName},{tag:j.variableName,color:t.text},{tag:j.function(j.variableName),color:t.functionName},{tag:j.propertyName,color:t.property},{tag:j.namespace,color:t.namespace},{tag:[j.separator,j.punctuation],color:t.text},{tag:j.derefOperator,color:t.text}])},Vn=e=>jr(al(e),{fallback:!0});Vn("dark");const ll=Wr({"AtomicStatement/atomic AtomicStatement/@":j.modifier,"WhileStatement/while WaitStatement/await IfStatement/if IfStatement/else ReceiveExpression/receive SendExpression/send RunExpression/run ForStatement/for LoopStatement/loop ForStatement/in ReturnStatement/return BreakLoopStatement/break BreakLoopStatement/continue UnaryExpression/void":j.controlKeyword,"ImportItem/as":j.operatorKeyword,"VariableDeclaration/let VariableDeclaration/const SharedDeclaration/let SharedDeclaration/const ChannelDeclarationStatement/channel":j.definitionKeyword,"LtlUnaryExpression/eventually LtlUnaryExpression/always LtlBinaryExpression/until":j.special(j.keyword),"LtlIfExpression/if LtlIfExpression/else LtlForExpression/for LtlForExpression/in":j.special(j.keyword),"MainBlock/main ProgramBlock/program GlobalBlock/shared ImportBlock/import FunctionBlock/fn ConditionBlock/Condition/always ConditionBlock/Condition/check":j.moduleKeyword,PrivateDirective:j.moduleKeyword,"PrivateDirective/private":j.moduleKeyword,"FunctionBlock/FnName":j.function(j.definition(j.variableName)),"CallExpression/FnName":j.function(j.variableName),FnName:j.function(j.variableName),"RunExpression/ProgName":j.function(j.variableName),ProgName:j.function(j.variableName),"MemberExpression > identifier:first-child":j.namespace,"CallExpression/MemberExpression > identifier:last-child":j.function(j.variableName),"MemberExpression > identifier:last-child":j.propertyName,"MemberExpression/object":j.namespace,"CallExpression/MemberExpression/property":j.function(j.variableName),"MemberExpression/property":j.propertyName,"ImportBlock/as":j.operatorKeyword,"ImportBlock/ImportList/ImportItem/ImportPath":j.namespace,"ImportBlock/ImportList/ImportItem/ImportAlias":j.namespace,ImportPath:j.namespace,ImportAlias:j.namespace,ImportSlash:j.separator,TemplateString:j.special(j.string),super:j.atom,BooleanLiteral:j.bool,this:j.self,null:j.null,Star:j.modifier,TypeToken:j.typeName,"Variable/self":j.self,LocalVariableName:j.variableName,SharedVariableName:j.propertyName,ProgName:j.className,UpdateOp:j.updateOperator,LineComment:j.lineComment,BlockComment:j.blockComment,Number:j.number,String:j.string,ArithOp:j.arithmeticOperator,LogicOp:j.logicOperator,BitOp:j.bitwiseOperator,CompareOp:j.compareOperator,RegExp:j.regexp,Equals:j.definitionOperator,Arrow:j.function(j.punctuation),"( )":j.paren,"[ ]":j.squareBracket,"{ }":j.brace,"InterpolationStart InterpolationEnd":j.special(j.brace),".":j.derefOperator,", ;":j.separator}),sl={__proto__:null,shared:10,let:16,const:18,self:44,true:46,false:46,null:48,void:54,typeof:56,delete:58,private:96,main:98,channel:106,while:110,for:114,in:116,if:124,else:126,run:132,loop:138,atomic:142,send:150,await:154,seq:158,first:160,receive:166,return:182,break:186,continue:188,program:192,always:198,check:200,until:210,eventually:214,fn:224,import:230,as:242},cl=Xr.deserialize({version:14,states:"HhQ`QPOOPzOPOOO!PQPO'#EaOOQO'#Fa'#FaOOQO'#E}'#E}Q`QPOOO!UQPO'#C`O!ZQPO'#D]O!`QPO'#D[O!eQPO'#D[O!pQPO'#E_OOQO'#Eb'#EbO!pQPO'#EoO!xQPO'#ErP!}O`O'#C^POOO)CAO)CAOO$dQPO'#EeOOQO,5:{,5:{OOQO-E8{-E8{O$kQPO,58zOOQO,59w,59wO&WQQO'#D`OOQO,59v,59vO!`QPO,59vO!pQPO,5:yO!pQPO,5;ZOOQO'#Ff'#FfOOQO'#Dq'#DqO&_QPO,5:yOOQO'#DT'#DTO&dQPO,5;ZO!pQPO,5;^POOO'#E|'#E|P&iO`O,58xPOOO,58x,58xO&tQQO'#CfO'xQQO'#CqOOQO'#Cp'#CpO#YQPO'#CvO(|QPO'#CvO#YQPO'#C|O*fQQO'#EfO*sQPO'#DTO+|QQO'#FeO*{QQO'#FeO,TQPO'#DSOOQO'#Fe'#FeO,YQPO'#FUOOQO'#Ef'#EfO,eQPO,5;POOQO,5;P,5;PO#YQPO'#EjO#YQPO'#ElO,lQPO'#EmOOQO'#FO'#FOO,qQPO1G.fO,|QPO'#CcOOQO1G.f1G.fO-RQSO'#CfO-^QSO'#CqO(|QPO'#C|O-iQPO'#DSO-lQPO'#DUO-qQPO'#DnO$vQQO'#DtO-vQPO'#DwO-{QPO'#EUO.QQSO'#EWOOQO'#Fi'#FiOOQO'#FR'#FRO.VQQO,59zOOQO,59z,59zO,lQPO'#DaO.^QPO'#DbO(|QPO'#DdO,lQPO'#DfO(|QPO'#DkO.iQPO'#DoO$vQQO'#DrO.^QPO'#DxO.tQPO'#DzO/RQPO'#EVO/WQPO'#EYO/_QPO'#E[OOQO1G/b1G/bO/jQPO1G0eO/oQPO1G0uO/tQSO1G0eO/tQSO1G0uO/|QPO'#EwO0[QPO'#EvO0gQPO'#EuO0oQPO1G0xPOOO-E8z-E8zPOOO1G.d1G.dOOQO,59b,59bOOQO,5;U,5;UO)zQQO,59hO0tQPO,5;YO(|QPO,59iO(|QPO,59iO(|QPO,59iO!pQPO,59pO1PQWO'#DWOOQO,59n,59nO#YQPO,5;ROOQO,5;p,5;pOOQO-E9S-E9SOOQO1G0k1G0kO1ZQPO,5;WOOQO'#Cq'#CqO1fQPO,5;XOOQO-E8|-E8|OOQO7+$Q7+$QOOQO'#Cf'#CfO1kQPO,58}O2XQQO,59hOOQO,5:Y,5:YOOQO,5:`,5:`OOQO,5:c,5:cOOQO,5:p,5:pO(|QPO,5:rOOQO-E9P-E9POOQO1G/f1G/fO2`QPO,59{O2kQPO'#FjO2yQPO,59|O3RQQO,5:OO3YQPO,5:QO3RQQO,5:VO-iQPO,5:ZO3_QPO'#DqO,TQPO,5:ZOOQO,5:^,5:^O,TQPO,5:dO3gQQO'#EPO3qQQO'#EPO3yQPO'#EQO4XQPO'#D|OOQO,5:f,5:fOOQO,5:q,5:qO4^QQO,5:tOOQO,5:t,5:tOOQO,5:v,5:vO4eQPO,5:vO/tQSO7+&PO/tQSO7+&aO4jQPO'#FdO4rQPO'#ChO5WQPO7+&PO5]QPO7+&aO!pQPO'#FVO5bQPO,5;cO!pQPO,5;bO5pQPO,5;aO5{QPO,5;aOOQO7+&d7+&dOOQO1G/S1G/SOOQO1G0t1G0tOOQO1G/T1G/TO7OQQO1G/TO7VQQO1G/TOOQO1G/[1G/[O7^QQO'#FgO(|QPO'#FgO7hQPO,59rOOQO1G0m1G0mO#YQPO1G0rO(|QPO1G0sOOQO1G.i1G.iO(|QPO1G.iO7mQSO1G.iO7rQQO1G0^OOQO1G/g1G/gO(|QPO1G/gO7mQSO1G/gO.^QPO,5<UO/tQSO1G/hO7yQPO1G/hOOQO1G/j1G/jO(|QPO1G/lO8dQQO1G/qOOQO1G/u1G/uOOQO1G0O1G0OOOQO,5:k,5:kO$vQQO,5:kO9pQPO'#FnO9{QQO,5:lO:TQPO,5:lO:YQPO,5:hOOQO1G0`1G0`OOQO1G0b1G0bO:dQPO<<IkO:iQPO<<I{O7mQSO'#FPO:nQPO,5<OO/tQSO,59SO!`QPO<<IkO:vQSO<<I{OOQO,5;q,5;qOOQO-E9T-E9TOOQO'#Ez'#EzOOQO1G0|1G0|OOQO,5;r,5;rO:{QPO1G0{OOQO-E9U-E9UO;WQWO'#FQO;_QPO,5<RO;gQQO,5<ROOQO1G/^1G/^O;qQPO7+&^O;|QQO'#DjOOQO'#Di'#DiO<TQPO7+&_O<YQQO7+$TO<aQPO7+$TO<iQQO7+%RO<pQPO7+%ROOQO1G1p1G1pO<xQPO7+%SO/tQSO7+%SO!`QPO7+%WO!`QPO7+%]OOQO1G0V1G0VOOQO'#ES'#ESOOQO'#Fo'#FoO<}QPO,5<YO$vQQO1G0WO=VQQO1G0WOOQO'#FS'#FSO=_QPO1G0SOOQO1G0S1G0SO!`QPOAN?VO:vQSOAN?gOOQO,5;k,5;kOOQO-E8}-E8}O=iQPO1G.nOOQOAN?VAN?VO7mQSO'#EqO!`QPOAN?gP!pQPO'#FWO=nQQO,5;lO(|QPO,5;lOOQO-E9O-E9OO=xQPO1G1mO>QQPO<<IxO(|QPO,5:UO#YQPO<<IyOOQO<<Go<<GoO(|QPO<<GoOOQO<<Hm<<HmO(|QPO<<HmO>iQPO<<HnO>wQPO<<HnOOQO<<Hr<<HrOOQO<<Hw<<HwO9pQPO'#FTO>|QPO1G1tOOQO1G1t1G1tOOQO7+%r7+%rO$vQQO7+%rOOQO-E9Q-E9QOOQO7+%n7+%nOOQOG24qG24qO!`QPOG25ROOQO7+$Y7+$YOOQO,5;],5;]OOQOG25RG25RO?UQQO1G1WO?`QPOAN?dO?eQQO1G/pO?lQPOAN?eO?wQQOAN=ZO@OQQOAN>XO@VQPOAN>YO.^QPOAN>YO@[QPOAN>YOOQO,5;o,5;oOOQO-E9R-E9ROOQO7+'`7+'`OOQO<<I^<<I^OOQOLD*mLD*mO#YQPOG25OOOQOG25PG25POOQOG22uG22uOOQOG23sG23sOOQOG23tG23tO@jQPOG23tO.^QPOG23tO@oQPOLD*jOOQOLD)`LD)`O@zQPOLD)`OAPQPO1G/qOOQO!$'NU!$'NUOOQO!$'Lz!$'LzO3RQQO,5:VO(|QPO'#DkOAvQQO'#DrOAvQQO'#DtOAvQQO,5:kOCWQQO'#EPOCbQQO'#EPO.tQPO'#Dz",stateData:"Cs~O#}OS$OOSPOS$PPQ~OTUO!RWO#SYO#VZO#WZO#d[O#g]O$[VO~O$P^O~OU`O~OUcO~O!QdO~OUeO~O!RgO#ShO#diO~O$UjO$VjO~O#hoO~O$QpO$RpO$SrO~O^xOb!OOc!OOfuOg!OOh!OOi!OOkwOlwOmwOnvOowO!Z!VO!`!UO#V!TO#_!TO$UtO$VsO~O}!SO~P#YOW!YOX!YO}!ZO~OUeOW!jOX!jO^!^OfuO!V!kO!X!lO!Z!mO!`!nO!d!oO!g!pO!i!bO!j!bO!m!qO!o!rO!}!tO#P!uO#Q!uO$U!]O$V![O~O}!iO~P$vO^!yO~O^!zO~O$QpO$RpO$S#QO~O^$YXoYXrYXsYXtYXuYXy$YX|YX#[YX#]YX`YXUYX!wYX_YX}YX$aYX~O^$YXoeXreXseXteXueXy$YX|eX#[eX#]eX`eXUeX!weX_eX}eX$aeX~O^!^Ob!OOc!OOfuOg!OOh!OOi!OOkwOlwOmwOnwOowO$UtO$VsO~Oo#WOr#VOs#VOt#VOu#XO#[#YX#]#YX`#YX~O|#YXU#YX}#YX~P)zOy#YO^wX~Oy#YOo$XXr$XXs$XXt$XXu$XX|$XX#[$XX#]$XX`$XXU$XX!w$XX_$XX}$XX$a$XX~O^#ZO~P*{O^#ZO~O|#^O#[#]O#]#]O~O}#`O~P#YO$U#bO~OW!YOX!YO}#eO~O$V#fO~O^$YXy$YX!{YX~O^$YXy$YX!{eX~O^#ZOy#YO~O|#iO~O|#kO~O|#lO~O!{#mO~O}#oO~P$vOfuO$U#bO$V#fO~O^!^O$UjO$VjO~O!q$OO!r$OO!u#}O~P(|O|$QO~O|$SO~P(|O|$TO$UjO$VjO~O^$VO~O^$WO~O]$YO`$WP~O#l$]O_#kX#m#kX#o#kX~O#m$_O_#jX#o#jX~O_$`O#o#iX~O#o$bO~O`$dO#[#]O#]#]O~O{$jO`$ZP~P(|OU$mO#[#]O#]#]O~O![$nO~OZ$qOa$pO|$oO~Oo#WOr#VOs#VOt#VOu#XO~O`$cO~P1vOZ$uOa$tO|$sO~Oy$vO^$^X$_$^X|$^X~O^$wO$_$xO~OUeO~P1vO![$zO~Oy#YO^!eX~O|%OO!w%PO~P1vO|%OO!w%PO~O^%QOfuO$U#bO$V#fO~OU%TO~O|%UO~P1vO|%VO~O_%YO`$WX~O^%[O_[X`[Xa[X|[XU[X~O`%]O~O`%^O~O#l$]O_#ka#m#ka#o#ka~O$UjO$VjO#o#ia~O_%dO#o#ia~Or#VOs#VOt#VOuqi|qi#[qi#]qi`qiUqi!wqi_qi}qi$aqi~Ooqi~P6TOo#WO~P6TO_%fO`$ZX~P1vO`%iO~O]$YO~O|!zi~P1vO^%tO~O!a%vO^!_if!_i}!_i$U!_i$V!_i~OU!_iW!_iX!_i!V!_i!X!_i!Z!_i!`!_i!d!_i!g!_i!i!_i!j!_i!m!_i!o!_i!}!_i#P!_i#Q!_i|!_i!w!_i~P8OOb%xOc%xO$U#bO~O!w%{O|!ta~O^%QO~O}&PO!u#}O~P(|O`&QO~O`&RO~O_%YO`$Wa~O$d&WO~O$UjO$VjO#o#ii~O{&[O~P(|O_%fO`$Za~O_%fO`$Za~P1vO}&_O#[#]O#]#]O~O$a&`O~P1vOU&aO~O|&bO~P1vOa&cO|&bO~O|&dO~P1vOa&eO|&dO~O`&fO~O_&jO`&lO~O!w&nO|!ti~O}&pO!u#}O~P(|O`&sO~O_#ta`#ta~P1vO_%fO`$Zi~O!a&wO|#`y#[#`y#]#`y`#`yU#`y}#`y~OfuO$U#bO$V#fO$`&}O~O`'OO~O_&jO`'RO~O_#ti`#ti~P1vOU'UO~OU!^i~P1vO}'VO#[#]O#]#]O~O|'WO~P1vO|'XO~P1vO|'YO~OfuO$U#bO$V#fO$`'[O~O|'^O~O}'aO#[#]O#]#]O~O|'bO~Ob!_ic!_ig!_ih!_ii!_ik!_il!_im!_in!_io!_i!u!_i~P8OOUeOW!jOX!jO^!^OfuO!V!kO!X!lO!Z!mO!`'dO!d!oO!g'eO!i'fO!j'fO!m!qO!o'jO!}!tO#P!uO#Q!uO$U!]O$V![O~O|%OO!w'gO~P1vO|%OO!w'gO~ObyP#l$Pi#lr~",goto:"9}$dPP$eP$hPP$lPP$pP%|PPPPPPP&c'pPPPP)WPPPPP)})WPPPP+R,U-]P.cPPP$h.oPP.s/r/rP/rP/rPP0O0U/rPP/r0YP0f/rP/rPP/r0oP/rP0{PP1P1XP)SP/r/r1aP/rP/rPP$hP$h1mPP1q1t2`PP2`P2`2`2`$hP2l$hPP2r2u2}PP3TP3W3^3d3j3p3z4Q4W4^4d4jPPPPPPPP4pPP4t5Z7Q8pP8s9ZPPP9q9wR_PTROTT!Wc!X#^u`evwx!R!T!U!^!b!h!k!l!n!p!q!r!t#V#W#X#Z#]#m#}$j$m$n$p$t$v$z%P%T%f%{&O&[&`&a&c&e&f&n&}'O'U'['d'e'f'g'jR#g!Y^$X!y!z$V$W$w%[%tQ%o$qQ%q$uQ&S%YR&t&W!h!O`vwx!R!T!U!^!l!n!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%T%f&O&[&`&a&c&e'U'd'jd!ee!b!h!p%P%{&n'e'f'ga#q!k!q#}$v&f&}'O'[#^u`evwx!R!T!U!^!b!h!k!l!n!p!q!r!t#V#W#X#Z#]#m#}$j$m$n$p$t$v$z%P%T%f%{&O&[&`&a&c&e&f&n&}'O'U'['d'e'f'g'jQ#c!VQ#p!jQ#t!mT%y%Q&j!i!O`vwx!R!T!U!^!l!n!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%T%f&O&[&`&a&c&e'U'd'j!h|`vwx!R!T!U!^!l!n!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%T%f&O&[&`&a&c&e'U'd'jg!`e!b!h!o!p%P%{&n'e'f'g!h!O`vwx!R!T!U!^!l!n!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%T%f&O&[&`&a&c&e'U'd'je!de!b!h!p%P%{&n'e'f'gQn[!|}`evwx!R!T!U!^!b!h!l!n!p!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%P%T%f%{&O&[&`&a&c&e&n'U'd'e'f'g'jR!xi!h{`vwx!R!T!U!^!l!n!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%T%f&O&[&`&a&c&e'U'd'jd!_e!b!h!p%P%{&n'e'f'gR#v!oU#[{}!_S$|#v#xR$}#zTXOTQfWd!fe!b!h!p%P%{&n'e'f'gQ!vgQ$y#sQ${#uQ&V%]Q&h%uQ&i%vQ&q&QQ&u&XQ'T&rR'`'ce!fe!b!h!p%P%{&n'e'f'gQ%m$nR%u$zT%l$n$ze!ae!b!h!p%P%{&n'e'f'gQlYQ!whR#x!oe!ce!b!h!p%P%{&n'e'f'gT$P!r'jS$P!r'jT%}%T&OQ#|!rV'i%T&O'je!se!b!h!p%P%{&n'e'f'gTQOTRaQS!P`!RS#Sv!TQ#UxQ#a!UQ$l#]Q%j$mQ&y&aR']'Ue!Q`vx!R!T!U#]$m&a'UQ&X%^R&r&RR#OoQ!}oV%c$`%d&YX!|o$`%d&YR%b$_Qq^R#PqQTORbTQ!XcR#d!XQ%Z$XR&T%ZQ%g$iS&]%g&^R&^%hQ!heR#n!hQ&O%TR&o&OQ&k%zR'Q&kQ!R`R#_!RQ$^!{R%`$^Q$a!}R%e$aTSOTQ$Z!yQ$[!zQ%W$VQ%X$WQ%s$wQ&U%[R&g%t`y`!R!T!U#]$m&a'US#RvwQ#TxQ#h!^Q#s!lQ#u!nQ#{!rQ$R!tQ$e#VQ$f#WQ$g#XQ$i#ZQ$r#mQ%h$jS%k$n$zQ%n$pQ%p$tQ&Z%fQ&v&[Q&x&`Q&z&cQ&{&eQ'c'dV'h%T&O'jSkYhSm[i!|z`evwx!R!T!U!^!b!h!l!n!p!r!t#V#W#X#Z#]#m$j$m$n$p$t$z%P%T%f%{&O&[&`&a&c&e&n'U'd'e'f'g'jW!{o$`%d&YQ#w!oQ$U!uQ$h#YQ%_$]R%a$_R$k#ZS!ge!hS#j!b'fS#y!p'eS%w%P'gQ&m%{R'S&nQ#r!kQ#z!qQ%S#}Q%r$vQ&|&fS'Z&}'OR'_'[Q%R#}R%|%SQ%z%QR'P&j",nodeNames:"⚠ LineComment BlockComment Project GlobalBlock shared { SharedDeclaration let const SharedVariableName : Type TypeToken ( , ) = Number String Variable LocalVariableName self BooleanLiteral null RegExp UnaryExpression void typeof delete LogicOp ArithOp ParenthesizedExpression BinaryExpression ArithOp ArithOp ArithOp CompareOp CallExpression FnName MemberExpression . ArgList ... ; } MainBlock PrivateDirective private main CodeBlock VariableDeclaration ChannelDeclarationStatement channel WhileStatement while ForStatement for in ListExpression RangeExpression IfStatement if else RunStatement RunExpression run ProgName LoopStatement loop AtomicStatement atomic LogicOp SendStatement SendExpression send WaitStatement await WaitingBlock seq first WaitingBlockCase ReceiveExpression receive Literal => CallStatement AssignmentStatement AssignmentExpression UpdateOp ReturnStatement return BreakLoopStatement break continue ProgramBlock program ConditionBlock Condition always check FormulaBlock LtlExpression LtlBinaryExpression LogicOp until LtlUnaryExpression eventually LtlIfExpression LtlForExpression ParenthesizedLtlExpression FunctionBlock fn ReturnType ImportBlock import [ ImportList ImportItem ImportPath ImportSlash as ImportAlias ]",maxTerm:158,nodeProps:[["group",-11,18,19,20,23,24,25,26,32,33,38,40,"Expression"]],skippedNodes:[0,1,2,124],repeatNodeCount:11,tokenData:"Ia~R!PXY$UYZ$gZ[$U]^$gpq$Uqr$lrs$yuv&qvw'Owx'Zxy(|yz)Rz{)W{|)`|})h}!O)m!O!P)}!P!Q+m!Q!R1Z!R![2a![!]4x!]!^4}!^!_5S!_!`5Z!`!a5m!b!c5t!c!}5{!}#O6p#P#Q6u#T#U6z#U#V7o#V#Y6z#Y#Z:m#Z#]6z#]#^=l#^#`6z#`#a>a#a#d6z#d#e?y#e#g6z#g#hBW#h#iE}#i#o6z#o#pIP#p#qIU#q#rI[$f$g$U~$ZS#}~XY$UZ[$Upq$U$f$g$U~$lO$O~f$qPnb!_!`$tS$yOuS~%OWc~OY$yZr$yrs%hs#O$y#O#P%m#P;'S$y;'S;=`&k<%lO$y~%mOc~~%pRO;'S$y;'S;=`%y;=`O$y~&OXc~OY$yZr$yrs%hs#O$y#O#P%m#P;'S$y;'S;=`&k;=`<%l$y<%lO$y~&nP;=`<%l$y[&vPsS!_!`&yW'OO!{W~'RPvw'U~'ZO#[~~'`Wc~OY'ZZw'Zwx%hx#O'Z#O#P'x#P;'S'Z;'S;=`(v<%lO'Z~'{RO;'S'Z;'S;=`(U;=`O'Z~(ZXc~OY'ZZw'Zwx%hx#O'Z#O#P'x#P;'S'Z;'S;=`(v;=`<%l'Z<%lO'Z~(yP;=`<%l'Z~)RO^~~)WO`~[)]PtS!_!`&yn)ePof!_!`&y~)mO_~n)rQof!_!`&y!`!a)xW)}O$dW~*SQy^!O!P*Y!Q![*gd*_P$aS!O!P*b`*gO{`~*lSb~!Q![*g!g!h*x#R#S*g#X#Y*x~*{S{|+X}!O+X!Q![+b#R#S+b~+[Q!Q![+b#R#S+b~+gQb~!Q![+b#R#S+b~+t]#lQrSOY,mZz,mz{/[{!P,m!P!Q0O!Q!_,m!_!`0g!`!},m!}#O-v#O#P.u#P;'S,m;'S;=`/U<%lO,mb,rXibOY,mZ!P,m!P!Q-_!Q!},m!}#O-v#O#P.u#P;'S,m;'S;=`/U<%lO,mb-dUib#Z#[-_#]#^-_#a#b-_#g#h-_#i#j-_#m#n-_b-yVOY-vZ#O-v#O#P.`#P#Q,m#Q;'S-v;'S;=`.o<%lO-vb.cSOY-vZ;'S-v;'S;=`.o<%lO-vb.rP;=`<%l-vb.xSOY,mZ;'S,m;'S;=`/U<%lO,mb/XP;=`<%l,m~/cX$P~ibOY,mZ!P,m!P!Q-_!Q!},m!}#O-v#O#P.u#P;'S,m;'S;=`/U<%lO,m~0TSP~OY0OZ;'S0O;'S;=`0a<%lO0O~0dP;=`<%l0Oj0nX!{WibOY,mZ!P,m!P!Q-_!Q!},m!}#O-v#O#P.u#P;'S,m;'S;=`/U<%lO,m~1`Xb~!O!P1{!Q![2a!g!h*x#R#S2a#U#V2}#X#Y*x#b#c2x#c#d3l#l#m4T~2OQ!Q![2U#R#S2U~2ZQb~!g!h*x#X#Y*x~2fUb~!O!P1{!Q![2a!g!h*x#R#S2a#X#Y*x#b#c2x~2}Ob~~3QR!Q!R3Z!R!S3Z#R#S3Z~3`Sb~!Q!R3Z!R!S3Z#R#S3Z#b#c2x~3oQ!Q!Y3u#R#S3u~3zRb~!Q!Y3u#R#S3u#b#c2x~4WS!Q![4d!c!i4d#R#S4d#T#Z4d~4iTb~!Q![4d!c!i4d#R#S4d#T#Z4d#b#c2x~4}OZ~~5SO|~U5ZO$_QuS^5bQaQ!{W!_!`$t!`!a5hS5mO!wSU5tO$`QuSU5{O$[Q!jS~6QW$V~tu5{!Q![5{!c!}5{#R#S5{#T#o5{$g;'S5{;'S;=`6j<%lO5{~6mP;=`<%l5{~6uO#h~~6zO#o~f7PW$Uftu6z!Q![6z!c!}6z#R#S6z#T#o6z$g;'S6z;'S;=`7i<%lO6zf7lP;=`<%l6zn7tY$Uftu6z!Q![6z!c!}6z#R#S6z#T#c6z#c#d8d#d#o6z$g;'S6z;'S;=`7i<%lO6zn8iY$Uftu6z!Q![6z!c!}6z#R#S6z#T#c6z#c#d9X#d#o6z$g;'S6z;'S;=`7i<%lO6zn9^Y$Uftu6z!Q![6z!c!}6z#R#S6z#T#`6z#`#a9|#a#o6z$g;'S6z;'S;=`7i<%lO6zn:TW]W$Uftu6z!Q![6z!c!}6z#R#S6z#T#o6z$g;'S6z;'S;=`7i<%lO6zn:rY$Uftu6z!Q![6z!c!}6z#R#S6z#T#`6z#`#a;b#a#o6z$g;'S6z;'S;=`7i<%lO6zn;gY$Uftu6z!Q![6z!c!}6z#R#S6z#T#c6z#c#d<V#d#o6z$g;'S6z;'S;=`7i<%lO6zn<[X$Uftu6z!Q![6z!c!}6z#R#S6z#T#U<w#U#o6z$g;'S6z;'S;=`7i<%lO6zn<|Y$Uftu6z!Q![6z!c!}6z#R#S6z#T#h6z#h#i9|#i#o6z$g;'S6z;'S;=`7i<%lO6zn=qY$Uftu6z!Q![6z!c!}6z#R#S6z#T#b6z#b#c<w#c#o6z$g;'S6z;'S;=`7i<%lO6zn>fY$Uftu6z!Q![6z!c!}6z#R#S6z#T#]6z#]#^?U#^#o6z$g;'S6z;'S;=`7i<%lO6zn?ZY$Uftu6z!Q![6z!c!}6z#R#S6z#T#g6z#g#h<w#h#o6z$g;'S6z;'S;=`7i<%lO6zn@OY$Uftu6z!Q![6z!c!}6z#R#S6z#T#f6z#f#g@n#g#o6z$g;'S6z;'S;=`7i<%lO6zn@sY$Uftu6z!Q![6z!c!}6z#R#S6z#T#c6z#c#dAc#d#o6z$g;'S6z;'S;=`7i<%lO6znAhY$Uftu6z!Q![6z!c!}6z#R#S6z#T#V6z#V#W9|#W#o6z$g;'S6z;'S;=`7i<%lO6znB]Y$Uftu6z!Q![6z!c!}6z#R#S6z#T#h6z#h#iB{#i#o6z$g;'S6z;'S;=`7i<%lO6znCQY$Uftu6z!Q![6z!c!}6z#R#S6z#T#f6z#f#gCp#g#o6z$g;'S6z;'S;=`7i<%lO6znCuY$Uftu6z!Q![6z!c!}6z#R#S6z#T#]6z#]#^De#^#o6z$g;'S6z;'S;=`7i<%lO6znDjY$Uftu6z!Q![6z!c!}6z#R#S6z#T#b6z#b#cEY#c#o6z$g;'S6z;'S;=`7i<%lO6znE_Y$Uftu6z!Q![6z!c!}6z#R#S6z#T#Z6z#Z#[9|#[#o6z$g;'S6z;'S;=`7i<%lO6znFSY$Uftu6z!Q![6z!c!}6z#R#S6z#T#i6z#i#jFr#j#o6z$g;'S6z;'S;=`7i<%lO6znFwY$Uftu6z!Q![6z!c!}6z#R#S6z#T#d6z#d#eGg#e#o6z$g;'S6z;'S;=`7i<%lO6znGlY$Uftu6z!Q![6z!c!}6z#R#S6z#T#`6z#`#aH[#a#o6z$g;'S6z;'S;=`7i<%lO6znHaY$Uftu6z!Q![6z!c!}6z#R#S6z#T#X6z#X#Y9|#Y#o6z$g;'S6z;'S;=`7i<%lO6z~IUOU~~IXP#p#q'U~IaO}~",tokenizers:[1,2,3,4,new Gr("j~RQYZXz{^~^O$R~~aP!P!Qd~iO$S~~",25,140)],topRules:{Project:[0,3]},specialized:[{term:144,get:e=>sl[e]||-1}],tokenPrec:1590}),Wn=e=>`file:///${e.split("/").map(encodeURIComponent).join("/")}`,Rn=e=>decodeURIComponent(e.replace(/^file:\/\/\//,""));function dl(e,t){const n=e.slice(0,Math.max(0,Math.min(t,e.length)));return{line:n.split(`
`).length-1,character:n.length-n.lastIndexOf(`
`)-1}}function nt(e,t){let n=0;for(let r=0;r<t.line;r++){const o=e.indexOf(`
`,n);if(o<0)return e.length;n=o+1}const i=e.indexOf(`
`,n);return Math.min(n+t.character,i<0?e.length:i)}class ul{worker;nextId=0;pending=new Map;documents=new Map;ready;closed=!1;constructor(){this.worker=new Worker(new URL("/dev/editor/assets/language-server.worker-BVb_oB38.js",import.meta.url),{type:"module"}),this.worker.onmessage=t=>{const{id:n,result:i,error:r}=t.data,o=this.pending.get(n);o&&(clearTimeout(o.timer),this.pending.delete(n),r?o.reject(new Error(r.message)):o.resolve(i))},this.worker.onerror=()=>this.dispose(new Error("Althread language worker failed to start")),this.ready=this.send("initialize",{capabilities:{general:{positionEncodings:["utf-16"]},textDocument:{completion:{completionItem:{snippetSupport:!0}}}},rootUri:null}).then(()=>this.notify({jsonrpc:"2.0",method:"initialized"})),this.ready.catch(()=>{})}notify(t){this.closed||this.worker.postMessage(t)}send(t,n){if(this.closed)return Promise.reject(new Error("Language client closed"));const i=this.nextId++;return new Promise((r,o)=>{const a=setTimeout(()=>{this.pending.delete(i),o(new Error(`Language request timed out: ${t}`))},15e3);this.pending.set(i,{resolve:l=>r(l),reject:o,timer:a}),this.worker.postMessage({jsonrpc:"2.0",id:i,method:t,params:n})})}async request(t,n,i){await this.ready;const r=new Set(Object.keys(i).map(Wn));for(const o of this.documents.keys())r.has(o)||(this.notify({jsonrpc:"2.0",method:"textDocument/didClose",params:{textDocument:{uri:o}}}),this.documents.delete(o));for(const[o,a]of Object.entries(i)){const l=Wn(o),s=this.documents.get(l);if(s?.text===a)continue;const c=(s?.version??0)+1;this.documents.set(l,{text:a,version:c}),s?this.notify({jsonrpc:"2.0",method:"textDocument/didChange",params:{textDocument:{uri:l,version:c},contentChanges:[{text:a}]}}):this.notify({jsonrpc:"2.0",method:"textDocument/didOpen",params:{textDocument:{uri:l,version:c,text:a,languageId:o.endsWith(".alt")?"althread":"plaintext"}}})}return this.send(t,n)}dispose(t=new Error("Language client closed")){if(!this.closed){this.closed=!0,this.worker.terminate();for(const n of this.pending.values())clearTimeout(n.timer),n.reject(t);this.pending.clear()}}}const fl={2:"method",3:"function",6:"variable",7:"class",9:"namespace",14:"keyword",15:"keyword",21:"constant",25:"type"},br=Xt.define(),gl=()=>Zn.define({create:()=>null,update(e,t){(t.docChanged||t.selection)&&(e=null);for(const n of t.effects)n.is(br)&&(e=n.value);return e},provide:e=>Hr.from(e)}),rn=Xt.define(),hl=()=>Zn.define({create:()=>null,update(e,t){t.docChanged&&(e=null);for(const n of t.effects)n.is(rn)&&(e=n.value);return e},provide:e=>Zr.from(e)});function Dt(e,t="cm-lsp-info"){const n=document.createElement("div");return n.className=t,n.textContent=e,n}function ml(e,t){for(const n of[...t].sort((i,r)=>nt(e,r.range.start)-nt(e,i.range.start)))e=e.slice(0,nt(e,n.range.start))+n.newText+e.slice(nt(e,n.range.end));return e}function pl(e){const t=gl(),n=hl();let i,r=!1;const o=Wn(e.filePath),a=p=>({...e.getWorkspace?.(),[e.filePath]:p}),l=(p,v,P)=>r?Promise.reject(new Error("Editor language session closed")):(i??=new ul,i.request(p,v,a(P))),s=(p,v)=>({textDocument:{uri:o},position:dl(p,v)}),c=(p,v)=>!r&&p.state.doc.toString()===v,f=(p,v)=>{if(v.uri===o){const P=nt(p.state.doc.toString(),v.range.start);p.dispatch({selection:Jr.cursor(P),effects:wt.scrollIntoView(P,{y:"center"})}),p.focus()}else e.onNavigate?.(Rn(v.uri),v.range.start)},d=(p,v=p.state.selection.main.head)=>{const P=p.state.doc.toString();return l("textDocument/definition",s(P,v),P).then(k=>{k&&c(p,P)&&f(p,k)}).catch(console.warn),!0},h=p=>{p.dispatch({effects:rn.of(null)}),p.focus()},m=p=>{const v=p.state.doc.toString();return l("textDocument/references",{...s(v,p.state.selection.main.head),context:{includeDeclaration:!0}},v).then(P=>{c(p,v)&&p.dispatch({effects:rn.of(()=>{const k=Dt(`${P.length} reference(s)`,"cm-lsp-panel");for(const F of P){const T=document.createElement("button");T.textContent=`${Rn(F.uri)}:${F.range.start.line+1}:${F.range.start.character+1}`,T.onclick=()=>f(p,F),k.append(T)}const S=document.createElement("button");return S.textContent="Close",S.onclick=()=>h(p),k.append(S),{dom:k,top:!1}})})}).catch(console.warn),!0},$=p=>{if(p.state.readOnly)return!1;const v=p.state.doc.toString(),P=s(v,p.state.selection.main.head);return l("textDocument/prepareRename",P,v).then(k=>{!k||!c(p,v)||p.dispatch({effects:rn.of(()=>{const S=document.createElement("form");S.className="cm-lsp-panel";const F=document.createElement("label");F.textContent="Rename symbol: ";const T=document.createElement("input");T.value=k.placeholder,T.required=!0,T.pattern="[a-zA-Z][a-zA-Z0-9_]*",F.append(T),S.append(F);const I=document.createElement("button");I.type="submit",I.textContent="Rename",S.append(I);const _=document.createElement("button");_.type="button",_.textContent="Cancel",_.onclick=()=>h(p),S.append(_);const C=Dt("");return C.setAttribute("role","status"),S.append(C),S.onkeydown=Q=>{Q.key==="Escape"&&(Q.preventDefault(),h(p))},S.onsubmit=Q=>{Q.preventDefault();const R=a(v);I.disabled=!0,l("textDocument/rename",{...P,newName:T.value},v).then(V=>{if(!c(p,v)||p.state.readOnly)return;if(!V){C.textContent="Cannot rename: invalid name, name conflict, or read-only reference.";return}const u=a(v),g={};for(const[O,E]of Object.entries(V.changes)){const x=Rn(O);if(R[x]===void 0||R[x]!==u[x]){C.textContent="A file changed. Retry the rename.";return}if(O!==o&&!e.onWorkspaceChange){C.textContent="Cross-file rename is unavailable in this editor.";return}g[x]=ml(R[x],E)}e.onWorkspaceChange?.(g),g[e.filePath]!==void 0&&p.dispatch({changes:{from:0,to:p.state.doc.length,insert:g[e.filePath]},userEvent:"input.rename"}),h(p)}).catch(V=>{C.textContent=String(V)}).finally(()=>{I.disabled=!1})},{dom:S,top:!0,mount:()=>{T.focus(),T.select()}}})})}).catch(console.warn),!0},w=async p=>{if(p.state.readOnly)return null;const v=p.matchBefore(/\w*/),P=p.state.sliceDoc(Math.max(0,p.pos-1),p.pos);if(!p.explicit&&!v?.text&&P!==".")return null;const k=p.state.doc.toString();try{const S=await l("textDocument/completion",s(k,p.pos),k);return p.aborted||r?null:{from:v?.from??p.pos,options:S.items.map(F=>({label:F.label,type:fl[F.kind]??"variable",detail:F.detail,info:F.documentation,apply:F.insertTextFormat===2?Kr((F.insertText??F.label).replace(/\$(\d+)/g,(T,I)=>`\${${I==="0"?"99":I}:}`)):F.insertText}))}}catch(S){return r||console.warn("Althread completion unavailable",S),null}},A=Br.fromClass(class{constructor(p){this.view=p}timer;update(p){!p.docChanged&&!p.selectionSet&&!p.focusChanged||(clearTimeout(this.timer),!(!p.view.hasFocus||p.view.state.readOnly)&&(this.timer=setTimeout(()=>this.signature(),150)))}signature(){const p=this.view,v=p.state.doc.toString(),P=p.state.selection.main.head;l("textDocument/signatureHelp",s(v,P),v).then(k=>{if(!c(p,v)||p.state.selection.main.head!==P||!p.hasFocus)return;const S=k?.signatures[k.activeSignature];p.dispatch({effects:br.of(S?{pos:P,above:!0,create:()=>{const F=Dt(S.label),T=S.parameters[k.activeParameter];return T&&F.append(Dt(`Parameter ${k.activeParameter+1}: ${T.label}`)),{dom:F}}}:null)})}).catch(k=>{r||console.warn(k)})}destroy(){r=!0,clearTimeout(this.timer),i?.dispose()}});return{completion:w,extension:[A,t,n,qi(),Yr(async p=>{if(p.state.readOnly)return[];const v=p.state.doc.toString();try{const P=await l("textDocument/diagnostic",{textDocument:{uri:o}},v);return c(p,v)?P.items.map(k=>({from:nt(v,k.range.start),to:nt(v,k.range.end),severity:"error",message:k.message,source:k.source})):[]}catch(P){return r||console.warn("Althread diagnostics unavailable",P),[]}},{delay:450}),qr(async(p,v)=>{const P=p.state.doc.toString();try{const k=await l("textDocument/hover",s(P,v),P);return!k||!c(p,P)?null:{pos:nt(P,k.range.start),end:nt(P,k.range.end),above:!0,create:()=>({dom:Dt(k.contents.value)})}}catch{return null}}),Kn.of([{key:"F12",run:d},{key:"Shift-F12",run:m},{key:"F2",run:$},{key:"Escape",run:p=>p.state.field(n)?(h(p),!0):!1}]),wt.domEventHandlers({mousedown(p,v){if(!(p.metaKey||p.ctrlKey)||p.button!==0)return!1;const P=v.posAtCoords({x:p.clientX,y:p.clientY});return P===null?!1:(p.preventDefault(),d(v,P))}}),wt.baseTheme({".cm-lsp-info":{padding:"6px 10px",fontFamily:"monospace",whiteSpace:"pre-wrap",maxWidth:"600px"},".cm-lsp-panel":{padding:"8px",display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap",maxHeight:"180px",overflow:"auto"},".cm-lsp-panel button, .cm-lsp-panel input":{font:"inherit",color:"inherit",background:"transparent",border:"1px solid #888",borderRadius:"3px",padding:"3px 6px"},".cm-lsp-panel button":{cursor:"pointer"}})]}}const bl=cl.configure({props:[ll,eo.add({Application:e=>e.column(e.node.from)+e.unit}),to.add({Application:no})]}),_i=io.define({parser:bl,languageData:{commentTokens:{line:"//"}}});function $i(e){const t=pl(e);return new ro(_i,[t.extension,_i.data.of({autocomplete:t.completion})])}const yr=e=>e.split(".").pop()?.toLowerCase()??"",Si=e=>yr(e)==="alt",yl=async e=>{const t=yr(e);switch(t){case"js":case"jsx":case"ts":case"tsx":return(await Ge(async()=>{const{javascript:n}=await import("./index-BlqAb9HM.js");return{javascript:n}},__vite__mapDeps([0,1]))).javascript({jsx:t.endsWith("x"),typescript:t.startsWith("ts")});case"css":return(await Ge(async()=>{const{css:n}=await import("./index-DSRLhUMa.js");return{css:n}},__vite__mapDeps([2,1]))).css();case"html":case"htm":return(await Ge(async()=>{const{html:n}=await import("./index-27Oa6cPa.js");return{html:n}},__vite__mapDeps([3,1,2,0]))).html();case"json":return(await Ge(async()=>{const{json:n}=await import("./index-LBiqdFRM.js");return{json:n}},__vite__mapDeps([4,1]))).json();case"md":case"markdown":return(await Ge(async()=>{const{markdown:n}=await import("./index-BYirMQhs.js");return{markdown:n}},__vite__mapDeps([5,1,3,2,0]))).markdown();case"py":return(await Ge(async()=>{const{python:n}=await import("./index-etIPbnKY.js");return{python:n}},__vite__mapDeps([6,1]))).python();case"rs":return(await Ge(async()=>{const{rust:n}=await import("./index-Dj1yPGQn.js");return{rust:n}},__vite__mapDeps([7,1]))).rust();case"cpp":case"cc":case"cxx":case"c":case"h":case"hpp":return(await Ge(async()=>{const{cpp:n}=await import("./index-D-fBKaJZ.js");return{cpp:n}},__vite__mapDeps([8,1]))).cpp();default:return[]}},vr=Xt.define(),Or=Xt.define();class vl extends Eo{constructor(t){super(),this.label=t}toDOM(){const t=document.createElement("span");return t.className="cm-process-badge",t.textContent=this.label,t}}const Ol=Zn.define({create(){return At.none},update(e,t){e=e.map(t.changes);for(const n of t.effects)if(n.is(vr)){const i=n.value,r=[],o=new Map;for(const l of i)o.has(l.line)||o.set(l.line,[]),l.label&&o.get(l.line).push(l.label);const a=Array.from(o.keys()).sort((l,s)=>l-s);for(const l of a)if(l>0&&l<=t.state.doc.lines){const s=t.state.doc.line(l);r.push(At.line({attributes:{style:"background-color: rgba(255, 165, 0, 0.2); border-left: 3px solid orange;"}}).range(s.from));const c=o.get(l);c.length>0&&r.push(At.widget({widget:new vl(c.join(", ")),side:1}).range(s.to))}e=At.set(r.sort((l,s)=>l.from-s.from))}else n.is(Or)&&(e=At.none);return e},provide:e=>wt.decorations.from(e)}),wl=[oo(),ao(),lo(),so(),co(),uo(),fo(),Hn.allowMultipleSelections.of(!0),go(),ho(),mo(),po(),bo(),yo(),vo(),Oo(),Kn.of([...wo,..._o,...$o,...So,...xo,...Co,...Po])],xi=e=>{const t=e==="dark";return wt.theme({"&":{color:t?"#abb2bf":"#2f3441",backgroundColor:t?"#1e1e1e":"#f7f1e7"},".cm-tooltip":{backgroundColor:t?"#252526":"#fffaf2",color:t?"#ddd":"#2f3441",border:`1px solid ${t?"#555":"#c6bda9"}`},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:t?"#094771":"#d9e8f5",color:t?"#fff":"#16324c"},".cm-content":{caretColor:t?"#528bff":"#0f6bbd"},".cm-cursor, .cm-dropCursor":{borderLeft:`2px solid ${t?"#528bff":"#0f6bbd"}`},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground":{backgroundColor:t?"rgba(38, 79, 120, 0.70) !important":"rgba(245, 184, 96, 0.38) !important"},".cm-selectionLayer":{mixBlendMode:"normal"},".cm-selectionLayer .cm-selectionBackground":{mixBlendMode:"normal"},".cm-content ::selection":{backgroundColor:t?"rgba(38, 79, 120, 1.00)":"rgba(245, 184, 96, 0.52)"},".cm-gutters":{backgroundColor:t?"#1e1e1e":"#efe5d6",color:t?"#5c6370":"#8b7f72",borderRight:`1px solid ${t?"#333":"#dccfbf"}`,minWidth:"60px"},".cm-lineNumbers":{minWidth:"40px",paddingRight:"8px",textAlign:"right"},".cm-lineNumbers .cm-gutterElement":{minWidth:"32px",textAlign:"right"},".cm-activeLineGutter":{backgroundColor:t?"#3a3f4b":"#e5d9c5"},".cm-activeLine":{backgroundColor:t?"rgba(58, 63, 75, 0.35)":"rgba(196, 148, 88, 0.10)",boxShadow:t?"inset 0 0 0 1px rgba(255, 255, 255, 0.06)":"inset 0 0 0 1px rgba(163, 118, 63, 0.14)"},".cm-selectionMatch":{backgroundColor:t?"rgba(255, 217, 102, 0.15)":"rgba(209, 136, 38, 0.16)",borderRadius:"2px"},".cm-selectionMatch.cm-selectionMatch-main":{backgroundColor:t?"rgba(38, 79, 120, 0.30)":"rgba(214, 156, 75, 0.22)"},".cm-foldGutter":{width:"16px",paddingLeft:"2px"},".cm-lintGutter":{width:"16px"},".cm-scroller":{fontFamily:"'Menlo', 'Monaco', 'Courier New', monospace",fontSize:"13px",lineHeight:"1.5"},".cm-process-badge":{backgroundColor:t?"orange":"#c96f1a",color:t?"black":"#fffaf2",borderRadius:"4px",padding:"0 4px",fontSize:"10px",fontWeight:"bold",marginLeft:"10px",verticalAlign:"middle",display:"inline-block"}},{dark:t})},_l=({defaultValue:e,onValueChange:t,filePath:n="main.alt",theme:i="dark",getWorkspace:r,onNavigate:o,onWorkspaceChange:a})=>{let l=e??"",s=!1;const c=rl({value:e,onValueChange:T=>{l=T,t?.(T)}});let f=n;const d=new It,h=new It,m=new It,$=new It,w=T=>({filePath:T,getWorkspace:r,onNavigate:o,onWorkspaceChange:a}),A=T=>{f=T;const I=c.editorView();if(!(!I||!d.get(I.state))){if(Si(T)){I.dispatch({effects:d.reconfigure($i(w(T)))});return}I.dispatch({effects:d.reconfigure([])}),yl(T).then(_=>{const C=c.editorView();C&&f===T&&C.dispatch({effects:d.reconfigure(_)})}).catch(_=>console.warn(`Could not load highlighting for ${T}`,_))}};c.createExtension(wl),c.createExtension(Kn.of([ko,{key:"Mod-/",run:zo},{key:"Mod-s",preventDefault:!0,run:()=>!0}])),c.createExtension(m.of(xi(i))),c.createExtension($.of(Vn(i))),c.createExtension(d.of(Si(n)?$i(w(n)):[])),c.createExtension(qi()),c.createExtension(h.of([])),c.createExtension(Ol);const p=()=>{try{return c.editorView&&c.editorView()?c.editorView():null}catch(T){return console.warn("Editor view not ready:",T),null}},v=T=>{l=T;const I=p();if(I)try{const _=I.state.update({changes:{from:0,to:I.state.doc.length,insert:T}});return I.update([_]),!0}catch(_){return console.warn("Failed to update editor content:",_),!1}return!1},P=T=>{s=T;const I=p();if(I)try{const _=T?Hn.readOnly.of(!0):[];return I.dispatch({effects:h.reconfigure(_)}),!0}catch(_){return console.warn("Failed to set read-only mode:",_),!1}return!1};return ge(()=>{c.editorView()&&(v(l),A(f),P(s))}),{...c,updateLanguage:A,updateTheme:T=>{const I=p();if(I)try{return I.dispatch({effects:[m.reconfigure(xi(T)),$.reconfigure(Vn(T))]}),!0}catch(_){return console.warn("Failed to update editor theme:",_),!1}return!1},getCurrentFileName:()=>f,safeEditorView:p,safeUpdateContent:v,setReadOnly:P,highlightLines:T=>{const I=p();if(I)try{const _=T.map(C=>typeof C=="number"?{line:C}:C);return I.dispatch({effects:vr.of(_)}),!0}catch(_){return console.warn("Failed to highlight lines:",_),!1}return!1},clearHighlights:()=>{const T=p();if(T)try{return T.dispatch({effects:Or.of(null)}),!0}catch(I){return console.warn("Failed to clear highlights:",I),!1}return!1}}};var $l=z('<div class=empty-editor><div class=empty-editor-content><div class=empty-editor-icon><i class="codicon codicon-new-file"></i></div><h3>No file is open</h3><p>Create a new file to get started</p><button type=button class="vscode-button primary"><i class="codicon codicon-new-file"></i>New File');const Sl=e=>(()=>{var t=$l(),n=t.firstChild,i=n.firstChild,r=i.nextSibling,o=r.nextSibling,a=o.nextSibling;return Ne(a,"click",e.onNewFile,!0),t})();Pe(["click"]);var xl=z("<div class=file-tabs-container>"),Cl=z('<div class=file-tab role=button tabindex=0><i class="codicon codicon-file"></i><span class=tab-label></span><button type=button class=tab-close-button title=Close><i class="codicon codicon-close">'),Pl=z('<i class="codicon codicon-lock read-only-icon"title="Read-only file">');const El=e=>{let t;ge(Ye(()=>e.activeFile,i=>{i&&t&&requestAnimationFrame(()=>{const r=t?.querySelector(".file-tab.active");r&&r.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})})}));const n=i=>{const r=e.getFilePath(i);return r==="deps"||r.startsWith("deps/")};return(()=>{var i=xl(),r=t;return typeof r=="function"?Je(r,i):t=i,y(i,b(_e,{get each(){return e.openFiles},children:o=>(()=>{var a=Cl(),l=a.firstChild,s=l.nextSibling,c=s.nextSibling;return a.$$keydown=f=>{(f.key==="Enter"||f.key===" ")&&f.currentTarget===f.target&&(f.preventDefault(),e.onTabClick(o))},a.$$click=()=>e.onTabClick(o),y(s,()=>o.name),y(a,(()=>{var f=ze(()=>!!n(o));return()=>f()&&Pl()})(),c),c.$$click=f=>{f.stopPropagation(),e.onTabClose(o)},ne(f=>{var d=e.activeFile!==null&&e.getFilePath(e.activeFile)===e.getFilePath(o),h=!!n(o);return d!==f.e&&a.classList.toggle("active",f.e=d),h!==f.t&&a.classList.toggle("read-only",f.t=h),f},{e:void 0,t:void 0}),a})()})),i})()};Pe(["click","keydown"]);var Ci=z("<pre>"),kl=z("<span>File: <button type=button class=file-link>"),zl=z("<span><button type=button class=file-link></button>:<!>:"),Rl=z("<span>"),Tl=z("<div class=error-display>");function Al(e){const t=()=>{if(!e.error.filePath)return(()=>{var r=Ci();return y(r,()=>e.error.message),r})();const i=e.error.message.split(`
`);return(()=>{var r=Ci();return y(r,()=>i.map((o,a)=>{if(o.startsWith("File: ")){const s=o.substring(6);return(()=>{var c=kl(),f=c.firstChild,d=f.nextSibling;return d.$$click=()=>e.onFileClick?.(s,e.error.line,e.error.col),y(d,s),y(c,()=>a<i.length-1&&`
`,null),ne(()=>re(d,"title",e.error.line?`Click to open ${s} at line ${e.error.line}`:`Click to open ${s}`)),c})()}const l=o.match(/^(\s*at\s+)([^:]+):(\d+):(\d+)$/);if(l){const[,s,c,f,d]=l;return(()=>{var h=zl(),m=h.firstChild,$=m.nextSibling,w=$.nextSibling;return w.nextSibling,y(h,s,m),m.$$click=()=>e.onFileClick?.(c,Number(f),Number(d)),re(m,"title",`Click to open ${c} at line ${f}`),y(m,c),y(h,f,w),y(h,d,null),y(h,()=>a<i.length-1&&`
`,null),h})()}return(()=>{var s=Rl();return y(s,o,null),y(s,()=>a<i.length-1&&`
`,null),s})()})),r})()};return(()=>{var n=Tl();return y(n,t),n})()}Pe(["click"]);const Xn=200;function mn(e){return e==null?JSON.stringify(e):Array.isArray(e)?`[${e.map(t=>mn(t)).join(",")}]`:typeof e=="object"?`{${Object.entries(e).sort(([n],[i])=>n.localeCompare(i)).map(([n,i])=>`${JSON.stringify(n)}:${mn(i)}`).join(",")}}`:JSON.stringify(e)}function Pi(e,t={}){const{mode:n="check",stepLines:i=[],violationPath:r=[]}=t,o=[],a=[],l=new Set(r),s=new Set;for(let c=0;c<r.length-1;c++)s.add(`${r[c]}->${r[c+1]}`);for(let c=0;c<e.length;c++){const f=e[c],d=f.metadata,h=n==="check"&&l.has(c),m=n==="run"?c===e.length-1:(d.successors?.length??0)===0,$=c===0?"initial":h?"violation":m?"final":"normal",w=n==="run"?`Step ${c}`:`State ${c}`,A=[n==="check"?`depth ${d.level}`:null,$==="initial"?"initial state":null,$==="final"?n==="run"?"last state":"no successor":null,h?"on the counterexample":null].filter(Boolean);if(o.push({id:c,label:"",level:d.level,kind:$,title:A.length?`${w} · ${A.join(" · ")}`:w,rawState:{vm:f.vm,stepIndex:n==="run"?c:void 0,nodeIndex:c,level:d.level},isViolationNode:h}),n==="run"){if(c<e.length-1){const p=i[c]||[];a.push({id:`e${c}`,from:c,to:c+1,label:`step ${c+1}`,lines:p,font:{size:0}})}}else if(d.successors){let p=0;for(const v of d.successors){const P=v.name+"#"+v.pid+": "+v.lines.join(","),k=s.has(`${c}->${v.to_index}`);a.push({id:`e${c}-${v.to_index}-${p++}`,from:c,to:v.to_index,label:P,lines:v.lines.map(S=>Number(S)),font:{size:0},isViolationEdge:k})}}}return{nodes:o,edges:a}}var Dl=z("<span class=literal-null>null"),Ql=z("<span class=literal-int>"),Il=z("<span class=literal-float>"),Fl=z('<span class=literal-string>"<!>"'),Ll=z("<span class=literal-bool>"),Nl=z("<span class=literal-list>[<!>]"),Ml=z("<span class=literal-tuple>(<!>)"),Ul=z("<span class=literal-process>Proc(<!>#<!>)");function ft(e){return b(Mn,{get children(){return[b(Ce,{get when(){return e.value.type==="Null"},get children(){return Dl()}}),b(Ce,{get when(){return e.value.type==="Int"},get children(){var t=Ql();return y(t,()=>e.value.value),t}}),b(Ce,{get when(){return e.value.type==="Float"},get children(){var t=Il();return y(t,()=>e.value.value),t}}),b(Ce,{get when(){return e.value.type==="String"},get children(){var t=Fl(),n=t.firstChild,i=n.nextSibling;return i.nextSibling,y(t,()=>e.value.value,i),t}}),b(Ce,{get when(){return e.value.type==="Bool"},get children(){var t=Ll();return y(t,()=>e.value.value?"true":"false"),t}}),b(Ce,{get when(){return e.value.type==="List"},get children(){var t=Nl(),n=t.firstChild,i=n.nextSibling;return i.nextSibling,y(t,b(_e,{get each(){return e.value.value},children:(r,o)=>[ze(()=>o()>0&&", "),b(ft,{value:r})]}),i),t}}),b(Ce,{get when(){return e.value.type==="Tuple"},get children(){var t=Ml(),n=t.firstChild,i=n.nextSibling;return i.nextSibling,y(t,b(_e,{get each(){return e.value.value},children:(r,o)=>[ze(()=>o()>0&&", "),b(ft,{value:r})]}),i),t}}),b(Ce,{get when(){return e.value.type==="Process"},get children(){var t=Ul(),n=t.firstChild,i=n.nextSibling,r=i.nextSibling,o=r.nextSibling;return o.nextSibling,y(t,()=>e.value.value[0],i),y(t,()=>e.value.value[1],o),t}})]}})}var jl=z("<span class=change-indicator>!"),Vl=z("<div class=variables-grid>"),Wl=z('<div><button type=button><i></i><i class="codicon codicon-symbol-variable header-section-icon"></i><span class=section-label>Globals</span><span></span></button><div>'),Xl=z("<div class=empty-state>No globals"),Gl=z("<div class=variable-item><span class=var-name></span> = <span class=var-value>");function Bl(e){const t=`globals-${$n()}`,n=oe(()=>Object.entries(e.globals).sort((r,o)=>r[0].localeCompare(o[0]))),i=()=>!e.collapsed&&!e.canCollapse;return(()=>{var r=Wl(),o=r.firstChild,a=o.firstChild,l=a.nextSibling,s=l.nextSibling,c=s.nextSibling,f=o.nextSibling;return Ne(o,"click",e.onToggle,!0),re(o,"aria-controls",t),y(c,b(G,{get when(){return e.hasChanged},get children(){return jl()}}),null),y(c,()=>n().length,null),re(f,"id",t),y(f,b(G,{get when(){return n().length>0},get fallback(){return Xl()},get children(){var d=Vl();return y(d,b(_e,{get each(){return n()},children:([h,m])=>(()=>{var $=Gl(),w=$.firstChild,A=w.nextSibling,p=A.nextSibling;return y(w,h),y(p,b(ft,{value:m})),$})()})),d}})),ne(d=>{var h=`section${e.collapsed?" section-collapsed":""}`,m=`collapsible-header${i()?" header-locked":""}`,$=i()?-1:0,w=!e.collapsed,A=i()?"Cannot collapse — only section open":e.collapsed?"Expand Globals":"Collapse Globals",p=`codicon ${e.collapsed?"codicon-chevron-left":"codicon-chevron-right"} header-toggle-icon`,v=`header-count${e.hasChanged?" changed":""}`,P=`section-body${e.collapsed?" section-body-hidden":""}`;return h!==d.e&&he(r,d.e=h),m!==d.t&&he(o,d.t=m),$!==d.a&&re(o,"tabindex",d.a=$),w!==d.o&&re(o,"aria-expanded",d.o=w),A!==d.i&&re(o,"title",d.i=A),p!==d.n&&he(a,d.n=p),v!==d.s&&he(c,d.s=v),P!==d.h&&he(f,d.h=P),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),r})()}Pe(["click"]);var Yl=z("<span class=change-indicator>!"),ql=z("<div class=subsection><div class=subsection-title>Pending Delivery</div><div class=message-list>"),Hl=z("<div class=subsection><div class=subsection-title>Waiting (Unconnected)</div><div class=message-list>"),Zl=z('<div><button type=button><i></i><i class="codicon codicon-mail header-section-icon"></i><span class=section-label>In-flight messages</span><span></span></button><div>'),Kl=z("<div class=empty-state>No pending messages"),Jl=z('<div class=message-card><div class=message-route><span class="message-endpoint from">:</span><i class="codicon codicon-arrow-right route-arrow"></i><span class="message-endpoint to">:</span></div><div class=message-payload>'),Ei=z("<div class=payload-item>"),es=z('<div class="message-card waiting"><div class=message-route><span class="message-endpoint from">:</span><i class="codicon codicon-question route-arrow"></i><span class=message-status>No connection</span></div><div class=message-payload>');function ts(e){const t=`messages-${$n()}`,n=()=>e.pendingDeliveries.length>0||e.waitingSend.length>0,i=()=>e.pendingDeliveries.length+e.waitingSend.length,r=()=>!e.collapsed&&!e.canCollapse;return(()=>{var o=Zl(),a=o.firstChild,l=a.firstChild,s=l.nextSibling,c=s.nextSibling,f=c.nextSibling,d=a.nextSibling;return Ne(a,"click",e.onToggle,!0),re(a,"aria-controls",t),y(f,b(G,{get when(){return e.hasChanged},get children(){return Yl()}}),null),y(f,i,null),re(d,"id",t),y(d,b(G,{get when(){return n()},get fallback(){return Kl()},get children(){return[b(G,{get when(){return e.pendingDeliveries.length>0},get children(){var h=ql(),m=h.firstChild,$=m.nextSibling;return y($,b(_e,{get each(){return e.pendingDeliveries},children:w=>(()=>{var A=Jl(),p=A.firstChild,v=p.firstChild,P=v.firstChild,k=v.nextSibling,S=k.nextSibling,F=S.firstChild,T=p.nextSibling;return y(v,()=>w.from_pid,P),y(v,()=>w.from_channel,null),y(S,()=>w.to_pid,F),y(S,()=>w.to_channel,null),y(T,b(_e,{get each(){return w.values},children:I=>(()=>{var _=Ei();return y(_,b(ft,{value:I})),_})()})),A})()})),h}}),b(G,{get when(){return e.waitingSend.length>0},get children(){var h=Hl(),m=h.firstChild,$=m.nextSibling;return y($,b(_e,{get each(){return e.waitingSend},children:w=>(()=>{var A=es(),p=A.firstChild,v=p.firstChild,P=v.firstChild,k=p.nextSibling;return y(v,()=>w.pid,P),y(v,()=>w.name,null),y(k,b(_e,{get each(){return w.values},children:S=>(()=>{var F=Ei();return y(F,b(ft,{value:S})),F})()})),A})()})),h}})]}})),ne(h=>{var m=`section${e.collapsed?" section-collapsed":""}`,$=`collapsible-header${r()?" header-locked":""}`,w=r()?-1:0,A=!e.collapsed,p=r()?"Cannot collapse — only section open":e.collapsed?"Expand Messages":"Collapse Messages",v=`codicon ${e.collapsed?"codicon-chevron-left":"codicon-chevron-right"} header-toggle-icon`,P=`header-count${e.hasChanged?" changed":""}`,k=`section-body${e.collapsed?" section-body-hidden":""}`;return m!==h.e&&he(o,h.e=m),$!==h.t&&he(a,h.t=$),w!==h.a&&re(a,"tabindex",h.a=w),A!==h.o&&re(a,"aria-expanded",h.o=A),p!==h.i&&re(a,"title",h.i=p),v!==h.n&&he(l,h.n=v),P!==h.s&&he(f,h.s=P),k!==h.h&&he(d,h.h=k),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),o})()}Pe(["click"]);var ns=z("<div class=variables-list>"),is=z("<div class=variable-display>"),rs=z("<div class=fallback-memory><div class=memory-label>Raw Memory:</div><div class=stack-container>"),os=z("<div class=memory-item><span class=memory-index>[<!>]</span><span class=memory-value>"),as=z("<div class=variable-row><span class=var-name></span><span class=var-separator>:</span><span class=var-type></span><span class=var-equals>=</span><span class=var-value>");function ki(e){const t=()=>Object.keys(e.variables||{}).length>0,n=oe(()=>Object.entries(e.variables).sort((i,r)=>i[0].localeCompare(r[0])));return(()=>{var i=is();return y(i,b(G,{get when(){return t()},get fallback(){return b(G,{get when(){return e.fallbackMemory&&e.fallbackMemory.length>0},get children(){var r=rs(),o=r.firstChild,a=o.nextSibling;return y(a,b(_e,{get each(){return e.fallbackMemory},children:(l,s)=>(()=>{var c=os(),f=c.firstChild,d=f.firstChild,h=d.nextSibling;h.nextSibling;var m=f.nextSibling;return y(f,s,h),y(m,b(ft,{value:l})),c})()})),r}})},get children(){var r=ns();return y(r,b(_e,{get each(){return n()},children:([o,a])=>(()=>{var l=as(),s=l.firstChild,c=s.nextSibling,f=c.nextSibling,d=f.nextSibling,h=d.nextSibling;return y(s,o),y(f,()=>a.type),y(h,b(ft,{get value(){return a.value}})),ne(()=>re(s,"title",a.type)),l})()})),r}})),i})()}var ls=z("<div class=call-frame-display>"),ss=z("<div class=frame-card><div class=frame-header><span class=frame-title>Stack Memory</span></div><div class=frame-body>"),cs=z('<span class=frame-location title="Source line"><i class="codicon codicon-file-code"></i>Line '),ds=z('<div class=frame-header><span class=frame-title></span><div class=frame-meta><span class=frame-ip title="Instruction pointer">IP: '),us=z("<div class=frame-card><div class=frame-body>"),fs=z("<div class=no-variables>No local variables in scope");function gs(e){return(()=>{var t=ls();return y(t,b(G,{get when(){return e.frames&&e.frames.length>0},get fallback(){return b(G,{get when(){return e.fallbackMemory},get children(){var n=ss(),i=n.firstChild,r=i.nextSibling;return y(r,b(ki,{variables:{},get fallbackMemory(){return e.fallbackMemory}})),n}})},get children(){return b(_e,{get each(){return e.frames},children:(n,i)=>(()=>{var r=us(),o=r.firstChild;return y(r,b(G,{get when(){return i()>0},get children(){var a=ds(),l=a.firstChild,s=l.nextSibling,c=s.firstChild;return c.firstChild,y(l,()=>n.function),y(s,b(G,{get when(){return n.line},get children(){var f=cs(),d=f.firstChild;return d.nextSibling,y(f,()=>n.line,null),f}}),c),y(c,()=>n.instruction_pointer,null),a}}),o),y(o,b(G,{get when(){return ze(()=>!!n.variables)()&&Object.keys(n.variables).length>0},get fallback(){return fs()},get children(){return b(ki,{get variables(){return n.variables||{}},get fallbackMemory(){return i()===0?e.fallbackMemory:void 0}})}})),ne(()=>r.classList.toggle("top-frame",i()===0)),r})()})}})),t})()}var hs=z("<span class=process-line>Line "),ms=z("<div class=channels-row><span class=row-label>Channels</span><div class=channels-container>"),ps=z("<div class=process-card><div class=process-card-header><span class=process-name></span><span class=process-id>PID </span><span class=process-pc>PC </span></div><div class=process-card-body>"),bs=z("<span class=channel-count>[<!>]"),ys=z("<div class=channel-values>"),vs=z("<div class=channel-pill><span class=channel-name>"),Os=z("<div class=channel-value-item>");function ws(e){return(()=>{var t=ps(),n=t.firstChild,i=n.firstChild,r=i.nextSibling;r.firstChild;var o=r.nextSibling;o.firstChild;var a=n.nextSibling;return y(i,()=>e.process.name),y(r,()=>e.process.pid,null),y(o,()=>e.process.instruction_pointer,null),y(n,b(G,{get when(){return e.process.line},get children(){var l=hs();return l.firstChild,y(l,()=>e.process.line,null),l}}),null),y(a,b(gs,{get frames(){return e.process.frames},get fallbackMemory(){return e.process.memory}}),null),y(a,b(G,{get when(){return e.channels.length>0},get children(){var l=ms(),s=l.firstChild,c=s.nextSibling;return y(c,b(_e,{get each(){return e.channels},children:f=>(()=>{var d=vs(),h=d.firstChild;return y(h,()=>f.name),y(d,b(G,{get when(){return f.values.length>0},get children(){return[(()=>{var m=bs(),$=m.firstChild,w=$.nextSibling;return w.nextSibling,y(m,()=>f.values.length,w),m})(),(()=>{var m=ys();return y(m,b(_e,{get each(){return f.values},children:$=>(()=>{var w=Os();return y(w,b(ft,{value:$})),w})()})),m})()]}}),null),d})()})),l}}),null),t})()}var _s=z("<span class=header-subtitle>depth "),$s=z('<div class=vm-state-inspector><div class=inspector-header><div class=header-title><i class="codicon codicon-debug-console"></i><span></span></div><button type=button class=close-btn title="Close Inspector"><i class="codicon codicon-close">'),Ss=z("<div class=inspector-empty-state>Select a node in the graph to inspect its state"),xs=z('<div class=inspector-sections><div><button type=button><i></i><i class="codicon codicon-debug-all header-section-icon"></i><span class=section-label>Processes</span><span class=header-count></span></button><div>'),Cs=z("<div class=empty-state>No processes");const zi=new WeakMap;function Ht(e){let t=zi.get(e);return t||(t={globals:mn(e.globals),messages:mn({p:e.pending_deliveries,w:e.waiting_send})},zi.set(e,t)),t}function Ps(e){const t=`processes-${$n()}`,[n,i]=U(!1),[r,o]=U(!1),[a,l]=U(!1),[s,c]=U(!1),[f,d]=U(!1),h=oe(()=>e.node?.vm??null),m=()=>{const _=e.node;return _?.stepIndex!==void 0?`Step ${_.stepIndex}`:_?.nodeIndex!==void 0?`State ${_.nodeIndex}`:"State Details"},$=_=>{const C=h();return C?C.channels.filter(Q=>Q.pid===_):[]};let w="",A="",p=null,v=!1,P=!1;ge(()=>{const _=h(),C=e.node;if(!_||!C)return;const Q=Object.keys(_.globals).length===0,R=_.pending_deliveries.length===0&&_.waiting_send.length===0;p===null&&(Q&&i(!0),R&&o(!0)),p=C}),ge(()=>{const _=h();if(!_)return;const C=n(),Q=r(),R=Object.keys(_.globals).length===0,V=_.pending_deliveries.length===0&&_.waiting_send.length===0;C?v?R||Ht(_).globals!==w&&c(!0):w=Ht(_).globals:c(!1),Q?P?V||Ht(_).messages!==A&&d(!0):A=Ht(_).messages:d(!1),v=C,P=Q});const k=oe(()=>{let _=0;return n()||_++,r()||_++,a()||_++,_}),S=()=>k()>1,F=()=>{!n()&&!S()||i(_=>!_)},T=()=>{!r()&&!S()||o(_=>!_)},I=()=>{!a()&&!S()||l(_=>!_)};return(()=>{var _=$s(),C=_.firstChild,Q=C.firstChild,R=Q.firstChild,V=R.nextSibling,u=Q.nextSibling;return y(V,m),y(Q,b(G,{get when(){return e.node?.level!==void 0&&e.node?.stepIndex===void 0},get children(){var g=_s();return g.firstChild,y(g,()=>e.node?.level,null),g}}),null),Ne(u,"click",e.onClose,!0),y(_,b(G,{get when(){return h()},get fallback(){return Ss()},children:g=>(()=>{var O=xs(),E=O.firstChild,x=E.firstChild,L=x.firstChild,X=L.nextSibling,D=X.nextSibling,M=D.nextSibling,Z=x.nextSibling;return y(O,b(Bl,{get globals(){return g().globals},get collapsed(){return n()},get canCollapse(){return S()},onToggle:F,get hasChanged(){return s()}}),E),y(O,b(ts,{get pendingDeliveries(){return g().pending_deliveries},get waitingSend(){return g().waiting_send},get collapsed(){return r()},get canCollapse(){return S()},onToggle:T,get hasChanged(){return f()}}),E),x.$$click=I,re(x,"aria-controls",t),y(M,()=>g().locals.length),re(Z,"id",t),y(Z,b(G,{get when(){return g().locals.length>0},get fallback(){return Cs()},get children(){return b(_e,{get each(){return g().locals},children:H=>b(ws,{process:H,get channels(){return $(H.pid)}})})}})),ne(H=>{var Y=`section programs-section${a()?" section-collapsed":""}`,J=`collapsible-header${!a()&&!S()?" header-locked":""}`,te=!a()&&!S()?-1:0,me=!a(),se=!a()&&!S()?"Cannot collapse — only section open":a()?"Expand Processes":"Collapse Processes",ue=`codicon ${a()?"codicon-chevron-left":"codicon-chevron-right"} header-toggle-icon`,ce=`section-body${a()?" section-body-hidden":""}`;return Y!==H.e&&he(E,H.e=Y),J!==H.t&&he(x,H.t=J),te!==H.a&&re(x,"tabindex",H.a=te),me!==H.o&&re(x,"aria-expanded",H.o=me),se!==H.i&&re(x,"title",H.i=se),ue!==H.n&&he(L,H.n=ue),ce!==H.s&&he(Z,H.s=ce),H},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),O})()}),null),_})()}Pe(["click"]);var Ri=z("<code>"),Es=z('<span class=choice-message-op><i class="codicon codicon-arrow-right"></i> '),ks=z("<p class=interactive-hint>Pick the process that executes next. Hover a choice to see its code highlighted in the editor."),zs=z("<ol class=choice-list>"),Rs=z('<section class=interactive-choices aria-label="Next instruction"tabindex=-1><div class=interactive-toolbar><span class=interactive-step-count>Step <strong></strong></span><div class=interactive-toolbar-actions><button type=button class=icon-button title="Undo last step (Backspace)"><i class="codicon codicon-discard"></i><span>Undo</span></button><button type=button class=icon-button title="Restart from the initial state"><i class="codicon codicon-debug-restart"></i><span>Restart</span></button><button type=button class=icon-button title="Leave step-by-step mode"><i class="codicon codicon-debug-stop"></i><span>Stop'),Ts=z("<div class=results-empty><i></i><h4></h4><p>"),As=z('<li><button type=button class=choice-item><span class=choice-key></span><span class=choice-process><span class=choice-pid>#</span></span><span class=choice-code></span><i class="codicon codicon-debug-step-over choice-go">');const Ds=["SEND","RECEIVE","DELIVER"];function Qs(e){const t=r=>{const o=e.getSourceLines(r.lines),a=r.instructions.filter(l=>Ds.some(s=>l.includes(s)));return o.length===0?(()=>{var l=Ri();return y(l,()=>r.instructions.join("; ")),l})():[b(_e,{each:o,children:l=>(()=>{var s=Ri();return y(s,l),s})()}),b(G,{get when(){return a.length>0},get children(){var l=Es(),s=l.firstChild;return s.nextSibling,y(l,()=>a.join(", "),null),l}})]},n=r=>{if(r.ctrlKey||r.metaKey||r.altKey)return;const o=Number.parseInt(r.key,10);o>=1&&o<=9&&o<=e.choices.length?(r.preventDefault(),e.onExecute(o-1)):(r.key==="Backspace"||r.key==="u")&&e.stepCount>0&&(r.preventDefault(),e.onUndo())};let i;return Et(()=>i?.focus({preventScroll:!0})),(()=>{var r=Rs(),o=r.firstChild,a=o.firstChild,l=a.firstChild,s=l.nextSibling,c=a.nextSibling,f=c.firstChild,d=f.nextSibling,h=d.nextSibling;r.$$keydown=n;var m=i;return typeof m=="function"?Je(m,r):i=r,y(s,()=>e.stepCount),f.$$click=()=>e.onUndo(),d.$$click=()=>e.onRestart(),h.$$click=()=>e.onStop(),y(r,b(G,{get when(){return e.choices.length>0},get fallback(){return(()=>{var $=Ts(),w=$.firstChild,A=w.nextSibling,p=A.nextSibling;return y(A,()=>e.deadlock?"Deadlock":"Execution completed"),y(p,()=>e.deadlock?"Every process is blocked. Inspect the States tab to see what each one is waiting for.":"No process can execute any further instruction."),ne(()=>he(w,`codicon ${e.deadlock?"codicon-debug-pause":"codicon-pass"}`)),$})()},get children(){return[ks(),(()=>{var $=zs();return y($,b(_e,{get each(){return e.choices},children:(w,A)=>(()=>{var p=As(),v=p.firstChild,P=v.firstChild,k=P.nextSibling,S=k.firstChild;S.firstChild;var F=k.nextSibling;return v.addEventListener("blur",()=>e.onPreviewLines(null)),v.addEventListener("focus",()=>e.onPreviewLines(w.lines)),v.addEventListener("mouseleave",()=>e.onPreviewLines(null)),v.addEventListener("mouseenter",()=>e.onPreviewLines(w.lines)),v.$$click=()=>e.onExecute(A()),y(P,(()=>{var T=ze(()=>A()<9);return()=>T()?A()+1:""})()),y(k,()=>w.prog_name,S),y(S,()=>w.prog_id,null),y(F,()=>t(w)),ne(()=>re(v,"title",A()<9?`Execute (press ${A()+1})`:"Execute this instruction")),p})()})),$})()]}}),null),ne(()=>f.disabled=e.stepCount===0),r})()}Pe(["keydown","click"]);var on=new Map,ri=(e,t)=>{if(on.has(e))return on.get(e);const n=kt(t);return on.set(e,n),n},oi=e=>{const t=on.get(e);if(t)return zt(t)},Is=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function Fs(e){const t={};let n;for(;n=Is.exec(e);)t[n[1]]=n[2];return t}function ai(e,t){return typeof t=="string"&&(t=Fs(t)),{...e,...t}}var lt=(e,t)=>(e&&(typeof e=="function"?e(t):e[0](e[1],t)),t.defaultPrevented),Ls=(e,t)=>{const n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS?1:n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:0},Ti=e=>typeof e=="function"?e():e,Ns=e=>(...t)=>{for(const n of e)n&&n(...t)},li=(...e)=>Ns(e),Ms=(...e)=>e.some(t=>!!t()),wr=e=>typeof e=="function"&&e.length>0,pn=e=>e?"":void 0,Us=e=>{const[t,n]=Gt(e,["as"]),i=oe(()=>t.as??"div");return oe(()=>{const o=i();switch(typeof o){case"function":return ye(()=>o(n));case"string":return b(va,ut({component:o},n))}})},si=Us,js=e=>{let t,n=!1;return()=>n?t:(n=!0,t=oe(e))},_r=js;function Vs(e){const[t,n]=U(e.initialValue),i=()=>e.value?.()!==void 0,r=()=>i()?e.value?.():t();return[r,a=>ye(()=>{let l;return typeof a=="function"?l=a(r()):l=a,Object.is(l,r())||(i()||n(l),e.onChange?.(l)),l})]}var Ws=Vs,Xs=e=>{const[t,n]=U(0);ge(()=>{const o=Ti(e.element);if(!o)return;r(o);const a=new ResizeObserver(i);a.observe(o),Fe(()=>{a.disconnect()})});const i=([o])=>{r(o.target)},r=o=>{switch(Ti(e.dimension)){case"width":n(o.offsetWidth);break;case"height":n(o.offsetHeight);break}};return t},Gs=Xs,Bs=z("<div data-corvu-resizable-handle-start-intersection>"),Ys=z("<div data-corvu-resizable-handle-end-intersection>"),$r=kt(),qs=e=>e===void 0?$r:ri(`resizable-${e}`),Hs=e=>{if(e===void 0){const n=zt($r);if(!n)throw new Error("[corvu]: Resizable context not found. Make sure to wrap Resizable components in <Resizable.Root>");return n}const t=oi(`resizable-${e}`);if(!t)throw new Error(`[corvu]: Resizable context with id "${e}" not found. Make sure to wrap Resizable components in <Resizable.Root contextId="${e}">`);return t},Sr=kt(),Zs=e=>e===void 0?Sr:ri(`resizable-internal-${e}`),xr=e=>{if(e===void 0){const n=zt(Sr);if(!n)throw new Error("[corvu]: Resizable context not found. Make sure to wrap Resizable components in <Resizable.Root>");return n}const t=oi(`resizable-internal-${e}`);if(!t)throw new Error(`[corvu]: Resizable context with id "${e}" not found. Make sure to wrap Resizable components in <Resizable.Root contextId="${e}">`);return t},fe=(e,t)=>{if(typeof e=="number")return e;if(!e.endsWith("px"))throw new Error(`[corvu] Sizes must be a number or a string ending with 'px'. Got ${e}`);return Qe(parseFloat(e)/t)},Wt=e=>{const t=e.panels.filter(i=>!!(e.focusedElement.compareDocumentPosition(i.data.element)&Node.DOCUMENT_POSITION_PRECEDING)),n=e.panels.filter(i=>!!(e.focusedElement.compareDocumentPosition(i.data.element)&Node.DOCUMENT_POSITION_FOLLOWING));return[t,n]},Ks=6,Qe=e=>parseFloat(e.toFixed(Ks)),Gn=null,ht=null,Ae=0,Js={1:"e-resize",2:"w-resize",3:"ew-resize",4:"s-resize",8:"n-resize",12:"ns-resize",5:"se-resize",9:"ne-resize",6:"sw-resize",10:"nw-resize"},Tn=null,ci=()=>{if(!Gn){ht&&(Tn=null,ht.remove(),ht=null);return}let e=Js[Ae]??null;if(e===null)switch(Gn){case"horizontal":e="col-resize";break;case"vertical":e="row-resize";break;case"both":e="move";break}e!==Tn&&(Tn=e,ht||(ht=document.createElement("style"),document.head.appendChild(ht)),ht.innerHTML=`*{cursor: ${e}!important;}`)},Ai=(e,t)=>{switch(e){case"horizontal":t===1?(Ae|=1,Ae&=-3):t===2?(Ae|=2,Ae&=-2):t===3?Ae|=3:Ae&=-4;break;case"vertical":t===1?(Ae|=4,Ae&=-9):t===2?(Ae|=8,Ae&=-5):t===3?Ae|=12:Ae&=-13;break}ci()},ec=()=>{Ae=0,ci()},Bn=e=>{Gn=e,ci()},Di=e=>{if(Qe(e.distributablePercentage)!==Qe(e.desiredPercentage)){let t=null;e.betweenCollapse===!0?t=3:e.desiredPercentage<e.distributablePercentage&&e.revertConstraints!==!0||e.desiredPercentage>e.distributablePercentage&&e.revertConstraints===!0?t=1:t=2,Ai(e.orientation,t)}else Ai(e.orientation,0)},rt=[],Ot=null,Cr=null,tc=1,Zt=(e,t)=>Math.abs(e-t)<=tc,nc=e=>{rt.push(e);for(const t of rt)for(const n of rt){if(t.orientation===n.orientation||t.element===n.element)continue;const i=t.element.getBoundingClientRect(),r=n.element.getBoundingClientRect();if(t.orientation==="horizontal"&&(i.left>r.right||i.right<r.left)||t.orientation==="vertical"&&(i.top>r.bottom||i.bottom<r.top))continue;const o=t.orientation==="horizontal"?Zt(i.top,r.bottom):Zt(i.left,r.right),a=t.orientation==="horizontal"?Zt(i.bottom,r.top):Zt(i.right,r.left);o&&t.startIntersection.setHandle(n),a&&t.endIntersection.setHandle(n)}return{onDragStart:(t,n)=>rc(e,t,n),onHoveredChange:t=>{Cr=t;const n=!!Ot;let i=null;ke(()=>{switch(t){case"handle":{const r=e.startIntersection.handle(),o=e.endIntersection.handle();n||(e.setActive(!0),r?.setActive(!1),o?.setActive(!1)),r?.setHoveredAsIntersection(!1),o?.setHoveredAsIntersection(!1),i=e.orientation;break}case"startIntersection":{const r=e.startIntersection.handle();n||r?.setActive(!0),r?.setHoveredAsIntersection(!0),i="both";break}case"endIntersection":{const r=e.endIntersection.handle();n||r?.setActive(!0),r?.setHoveredAsIntersection(!0),i="both";break}case null:{const r=e.startIntersection.handle(),o=e.endIntersection.handle();!n&&!e.focused()&&(e.setActive(!1),r?.setActive(!1),o?.setActive(!1)),r?.setHoveredAsIntersection(!1),o?.setHoveredAsIntersection(!1),i=null;break}}!n&&e.handleCursorStyle()&&Bn(i)})}}},ic=e=>{rt.splice(rt.indexOf(e),1)},rc=(e,t,n)=>{Ot={x:t.clientX,y:t.clientY},ke(()=>{e.setDragging(!0),n==="startIntersection"&&e.startIntersection.handle()?.setDragging(!0),n==="endIntersection"&&e.endIntersection.handle()?.setDragging(!0)}),window.addEventListener("pointermove",Pr),window.addEventListener("touchmove",Er),window.addEventListener("pointerup",Pt),window.addEventListener("touchend",Pt),window.addEventListener("contextmenu",Pt)},Pr=e=>kr(e.clientX,e.clientY,e.altKey),Er=e=>{e.touches[0]&&kr(e.touches[0].clientX,e.touches[0].clientY,e.altKey)},Qi=!1,kr=(e,t,n)=>{if(Ot){rt.some(i=>i.dragging()&&i.altKey==="only")&&(n=!0),rt.some(i=>i.dragging()&&i.altKey===!1)&&(n=!1),Qi!==n&&(Ot={x:e,y:t},Qi=n);for(const i of rt)i.dragging()&&i.onDrag(i.orientation==="horizontal"?e-Ot.x:t-Ot.y,n)}},Pt=e=>{ke(()=>{for(const t of rt)t.dragging()?(t.setDragging(!1),t.onDragEnd(e),!t.hovered()&&!t.hoveredAsIntersection()&&t.setActive(!1),!Cr&&t.handleCursorStyle()&&Bn(null)):Ms(t.hovered,t.focused,t.hoveredAsIntersection)&&(t.setActive(!0),t.handleCursorStyle()&&Bn(t.orientation))}),ec(),Ot=null,window.removeEventListener("pointermove",Pr),window.removeEventListener("touchmove",Er),window.removeEventListener("pointerup",Pt),window.removeEventListener("touchend",Pt),window.removeEventListener("contextmenu",Pt)},oc=e=>{const t=ut({startIntersection:!0,endIntersection:!0,altKey:!0},e),[n,i]=Gt(t,["startIntersection","endIntersection","altKey","onHandleDragStart","onHandleDrag","onHandleDragEnd","contextId","ref","style","disabled","children","onMouseEnter","onMouseLeave","onKeyDown","onKeyUp","onFocus","onBlur","onPointerDown"]),[r,o]=U(null),[a,l]=U(!1),[s,c]=U(null),[f,d]=U(!1),[h,m]=U(!1),[$,w]=U(!1),[A,p]=U(null),[v,P]=U(null),k=oe(()=>xr(n.contextId)),S=oe(()=>{const u=r();if(!u)return;const g=k().panels(),[O,E]=Wt({panels:g,focusedElement:u}),x=O[O.length-1]?.data.id,L=E.reduce((M,Z)=>M-fe(Z.data.minSize,k().rootSize()),1),X=O.reduce((M,Z)=>M+fe(Z.data.minSize,k().rootSize()),0),D=O.reduce((M,Z)=>M+fe(Z.size(),k().rootSize()),0);return{ariaControls:x,ariaValueMax:Qe(L),ariaValueMin:Qe(X),ariaValueNow:Qe(D)}});let F=null;return ge(()=>{if(n.disabled===!0)return;const u=r();if(!u)return;const g={element:u,orientation:k().orientation(),handleCursorStyle:k().handleCursorStyle,altKey:n.altKey,startIntersection:{handle:A,setHandle:O=>{n.startIntersection===!0&&p(O)}},endIntersection:{handle:v,setHandle:O=>{n.endIntersection===!0&&P(O)}},hovered:s,focused:f,hoveredAsIntersection:a,setHoveredAsIntersection:l,active:h,setActive:m,dragging:$,setDragging:w,onDrag:(O,E)=>{if(n.onHandleDrag!==void 0){const x=new CustomEvent("drag",{cancelable:!0});if(n.onHandleDrag(x),x.defaultPrevented)return}k().onDrag(u,O,E)},onDragEnd:O=>{n.onHandleDragEnd?.(O),k().onDragEnd()}};F=nc(g),Fe(()=>{ic(g),F=null})}),ge(Ye(s,()=>{F?.onHoveredChange(s())})),b(si,ut({as:"button",ref(u){var g=li(o,n.ref);typeof g=="function"&&g(u)},get style(){return ai({position:"relative",cursor:k().handleCursorStyle()?"inherit":void 0,"touch-action":"none","flex-shrink":0},n.style)},get disabled(){return n.disabled},onBlur:u=>{lt(n.onBlur,u)||(d(!1),!s()&&m(!1))},onFocus:u=>{lt(n.onFocus,u)||s()||(d(!0),m(!0))},onKeyDown:u=>{if(lt(n.onKeyDown,u)||$())return;const g=r();if(!g)return;const O=n.altKey==="only"||n.altKey!==!1&&u.altKey;k().onKeyDown(g,u,O)},onKeyUp:u=>{lt(n.onKeyUp,u)||u.key!=="Tab"||d(!0)},onMouseEnter:u=>{lt(n.onMouseEnter,u)||n.disabled===!0||c("handle")},onMouseLeave:u=>{lt(n.onMouseLeave,u)||c(null)},onPointerDown:u=>{if(lt(n.onPointerDown,u)||lt(n.onHandleDragStart,u))return;const g=u.target;g.setPointerCapture(u.pointerId);let O="handle";g.hasAttribute("data-corvu-resizable-handle-start-intersection")&&(O="startIntersection"),g.hasAttribute("data-corvu-resizable-handle-end-intersection")&&(O="endIntersection"),F?.onDragStart(u,O)},role:"separator",get"aria-controls"(){return S()?.ariaControls},get"aria-orientation"(){return k().orientation()},get"aria-valuemax"(){return S()?.ariaValueMax},get"aria-valuemin"(){return S()?.ariaValueMin},get"aria-valuenow"(){return S()?.ariaValueNow},get"data-active"(){return pn(h())},get"data-dragging"(){return pn($())},get"data-orientation"(){return k().orientation()},"data-corvu-resizable-handle":""},i,{get children(){return[b(G,{get when(){return A()},get children(){var u=Bs();return u.addEventListener("mouseleave",g=>{r()?.contains(g.relatedTarget)===!0?c("handle"):c(null)}),u.addEventListener("mouseenter",()=>c("startIntersection")),u.style.setProperty("position","absolute"),u.style.setProperty("aspect-ratio","1 / 1"),u.style.setProperty("top","0"),u.style.setProperty("left","0"),u.style.setProperty("z-index","1"),ne(g=>{var O=k().orientation()==="horizontal"?void 0:"100%",E=k().orientation()==="horizontal"?"100%":void 0,x=k().orientation()==="horizontal"?"translate3d(0, -100%, 0)":"translate3d(-100%, 0, 0)";return O!==g.e&&((g.e=O)!=null?u.style.setProperty("height",O):u.style.removeProperty("height")),E!==g.t&&((g.t=E)!=null?u.style.setProperty("width",E):u.style.removeProperty("width")),x!==g.a&&((g.a=x)!=null?u.style.setProperty("transform",x):u.style.removeProperty("transform")),g},{e:void 0,t:void 0,a:void 0}),u}}),ze(()=>n.children),b(G,{get when(){return v()},get children(){var u=Ys();return u.addEventListener("mouseleave",g=>{r()?.contains(g.relatedTarget)===!0?c("handle"):c(null)}),u.addEventListener("mouseenter",()=>c("endIntersection")),u.style.setProperty("position","absolute"),u.style.setProperty("aspect-ratio","1 / 1"),u.style.setProperty("bottom","0"),u.style.setProperty("right","0"),u.style.setProperty("z-index","1"),ne(g=>{var O=k().orientation()==="horizontal"?void 0:"100%",E=k().orientation()==="horizontal"?"100%":void 0,x=k().orientation()==="horizontal"?"translate3d(0, 100%, 0)":"translate3d(100%, 0, 0)";return O!==g.e&&((g.e=O)!=null?u.style.setProperty("height",O):u.style.removeProperty("height")),E!==g.t&&((g.t=E)!=null?u.style.setProperty("width",E):u.style.removeProperty("width")),x!==g.a&&((g.a=x)!=null?u.style.setProperty("transform",x):u.style.removeProperty("transform")),g},{e:void 0,t:void 0,a:void 0}),u}})]}}))},ac=oc,zr=kt(),lc=e=>e===void 0?zr:ri(`resizable-panel-${e}`),sc=e=>{if(e===void 0){const n=zt(zr);if(!n)throw new Error("[corvu]: Resizable panel context not found. Make sure to call usePanelContext under <Resizable.Panel>");return n}const t=oi(`resizable-panel-${e}`);if(!t)throw new Error(`[corvu]: Resizable context with id "${e}" not found. Make sure to call usePanelContext under <Resizable.Panel contextId="${e}">`);return t},cc=e=>{const t=ut({initialSize:null,minSize:0,maxSize:1,collapsible:!1,collapsedSize:0,collapseThreshold:.05,panelId:$n()},e),[n,i]=Gt(t,["initialSize","minSize","maxSize","collapsible","collapsedSize","collapseThreshold","onResize","onCollapse","onExpand","contextId","panelId","ref","style","children"]),[r,o]=U(null),a=oe(()=>xr(n.contextId)),[l,s]=U(null);ge(()=>{const v=r();if(!v)return;const P=a(),k=ye(()=>P.registerPanel({id:n.panelId,element:v,initialSize:n.initialSize,minSize:n.minSize,maxSize:n.maxSize,collapsible:n.collapsible,collapsedSize:n.collapsedSize,collapseThreshold:n.collapseThreshold,onResize:n.onResize}));s(k),Fe(()=>{P.unregisterPanel(k.data.id)})});const c=()=>{const v=l();return v?v.size():typeof n.initialSize=="number"?n.initialSize:1},f=oe(v=>{const P=l();if(n.collapsible!==!0)return!1;const k=P?P.size()===fe(n.collapsedSize,a().rootSize()):!1;return P&&v!==k&&(k&&n.onCollapse!==void 0?n.onCollapse(P.size()):!k&&n.onExpand!==void 0&&n.onExpand(P.size())),k}),d=(v,P)=>{const k=l();k&&k.resize(v,P??"both")},h=v=>{const P=l();P&&P.collapse(v??"both")},m=v=>{const P=l();P&&P.expand(v??"both")},$={get size(){return c()},get minSize(){return n.minSize},get maxSize(){return n.maxSize},get collapsible(){return n.collapsible},get collapsedSize(){return n.collapsedSize},get collapseThreshold(){return n.collapseThreshold},get collapsed(){return f()},resize:d,collapse:h,expand:m,get panelId(){return n.panelId}},w=_r(()=>n.children),A=()=>{const v=w()();return wr(v)?v($):v};return oe(()=>{const v=lc(n.contextId);return b(v.Provider,{value:{size:c,minSize:()=>n.minSize,maxSize:()=>n.maxSize,collapsible:()=>n.collapsible,collapsedSize:()=>n.collapsedSize,collapseThreshold:()=>n.collapseThreshold,collapsed:f,resize:d,collapse:h,expand:m,panelId:()=>n.panelId},get children(){return b(si,ut({as:"div",ref(P){var k=li(o,n.ref);typeof k=="function"&&k(P)},get style(){return ai({"flex-basis":c()*100+"%"},n.style)},get id(){return n.panelId},get"data-collapsed"(){return pn(f())},get"data-expanded"(){return pn(n.collapsible===!0&&!f())},get"data-orientation"(){return a().orientation()},"data-corvu-resizable-panel":""},i,{get children(){return ye(()=>A())}}))}})})},dc=cc,bn=e=>{let t=e.desiredPercentage>=0?1/0:-1/0,n=e.initialSizes;for(const i of e.resizeActions){const r=i.negate!==!0?e.desiredPercentage:-e.desiredPercentage;let[o,a,l]=yn({desiredPercentage:r,side:"preceding",panels:i.precedingPanels,initialSizes:n,initialSizesStartIndex:0,collapsible:e.collapsible,rootSize:e.resizableData.rootSize}),[s,c,f]=yn({desiredPercentage:r,side:"following",panels:i.followingPanels,initialSizes:n,initialSizesStartIndex:i.precedingPanels.length,collapsible:e.collapsible,rootSize:e.resizableData.rootSize});i.negate===!0&&(o=-o,s=-s),l&&(s=o),f&&(o=s),e.desiredPercentage>=0?t=Math.min(t,Math.min(o,s)):t=Math.max(t,Math.max(o,s)),n=[...a,...c]}return t},yn=e=>{e.desiredPercentage=Qe(e.desiredPercentage);const t=uc({side:e.side,desiredPercentage:e.desiredPercentage});let n=0;const i=e.initialSizes.slice(e.initialSizesStartIndex,e.initialSizesStartIndex+e.panels.length);for(let m=e.side==="preceding"?e.panels.length-1:0;e.side==="preceding"?m>=0:m<e.panels.length;e.side==="preceding"?m--:m++){const $=e.panels[m],w=e.initialSizes[m+e.initialSizesStartIndex],A=fe($.data.collapsedSize??0,e.rootSize);if($.data.collapsible&&w===A)continue;const p=Qe(e.desiredPercentage-n);if(p===0)break;switch(t){case"precedingDecreasing":{const v=fe($.data.minSize,e.rootSize);i[m]=Math.max(v,w+p),n+=i[m]-w;break}case"followingDecreasing":{const v=fe($.data.minSize,e.rootSize);i[m]=Math.max(v,w-p),n-=i[m]-w;break}case"precedingIncreasing":{const v=fe($.data.maxSize,e.rootSize);i[m]=Math.min(v,w+p),n+=i[m]-w;break}case"followingIncreasing":{const v=fe($.data.maxSize,e.rootSize);i[m]=Math.min(v,w-p),n-=i[m]-w;break}}}if(n=Qe(n),!e.collapsible||n===e.desiredPercentage)return[n,i,!1];const r=e.side==="preceding"?e.panels.length-1:0,o=e.panels[r];if(!o.data.collapsible)return[n,i,!1];const a=Qe(e.desiredPercentage-n);let l=!1;const s=e.initialSizes[r+e.initialSizesStartIndex],c=fe(o.data.minSize,e.rootSize),f=fe(o.data.collapsedSize??0,e.rootSize),d=Math.min(fe(o.data.collapseThreshold??0,e.rootSize),c-f),h=s===f;if(t==="precedingDecreasing"&&!h&&Math.abs(a)>=d)n-=i[r]-s,i[r]=f,n+=i[r]-s,l=!0;else if(t==="precedingIncreasing"&&h&&Math.abs(a)>=d){const m=fe(o.data.minSize,e.rootSize);if(i[r]=m,Math.abs(a)>=m-f){const $=fe(o.data.maxSize,e.rootSize);i[r]=Math.min($,s+a)}else l=!0;n+=i[r]-s}else if(t==="followingDecreasing"&&!h&&Math.abs(a)>=d)n+=i[r]-s,i[r]=f,n-=i[r]-s,l=!0;else if(t==="followingIncreasing"&&h&&Math.abs(a)>=d){const m=fe(o.data.minSize,e.rootSize);if(i[r]=m,Math.abs(a)>=m-f){const $=fe(o.data.maxSize,e.rootSize);i[r]=Math.min($,s-a)}else l=!0;n-=i[r]-s}return[n,i,l]},uc=e=>{switch(e.side){case"preceding":return e.desiredPercentage>=0?"precedingIncreasing":"precedingDecreasing";case"following":return e.desiredPercentage>=0?"followingDecreasing":"followingIncreasing"}},vn=e=>{let t=e.initialSizes;for(const i of e.resizeActions){const[,r]=yn({desiredPercentage:i.deltaPercentage,side:"preceding",panels:i.precedingPanels,initialSizes:t,initialSizesStartIndex:0,collapsible:e.collapsible,rootSize:e.resizableData.rootSize}),[,o]=yn({desiredPercentage:i.deltaPercentage,side:"following",panels:i.followingPanels,initialSizes:t,initialSizesStartIndex:i.precedingPanels.length,collapsible:e.collapsible,rootSize:e.resizableData.rootSize});t=[...r,...o]}t=t.map(Qe);const n=t.reduce((i,r)=>i+r,0);if(n!==1){const r=(n-1)/t.length;t=t.map(o=>o-r)}e.resizableData.setSizes(t.map(Qe))},An=e=>{let[t,n]=Wt({panels:e.panels,focusedElement:e.panel.data.element});const i=e.panels.indexOf(e.panel);if(i===0?e.strategy="following":i===e.panels.length-1&&(e.strategy="preceding"),e.strategy==="both"){const r=[...t,e.panel],o=[e.panel,...n],a=bn({desiredPercentage:e.deltaPercentage/2,initialSizes:e.initialSizes,collapsible:!0,resizeActions:[{precedingPanels:r,followingPanels:n},{precedingPanels:t,followingPanels:o,negate:!0}],resizableData:{rootSize:e.resizableData.rootSize}});vn({initialSizes:e.initialSizes,collapsible:!0,resizeActions:[{precedingPanels:r,followingPanels:n,deltaPercentage:a},{precedingPanels:t,followingPanels:o,deltaPercentage:-a}],resizableData:e.resizableData})}else{t=e.strategy==="preceding"?t:[...t,e.panel],n=e.strategy==="following"?n:[e.panel,...n],e.strategy==="preceding"&&(e.deltaPercentage=-e.deltaPercentage);const r=bn({desiredPercentage:e.deltaPercentage,initialSizes:e.initialSizes,collapsible:e.collapsible,resizeActions:[{precedingPanels:t,followingPanels:n}],resizableData:{rootSize:e.resizableData.rootSize}});vn({initialSizes:e.initialSizes,collapsible:!0,resizeActions:[{precedingPanels:t,followingPanels:n,deltaPercentage:r}],resizableData:e.resizableData})}},Ii=e=>{if(e.altKey&&e.panels.length>2){let t=e.panels.filter(m=>!!(e.handle.compareDocumentPosition(m.data.element)&Node.DOCUMENT_POSITION_PRECEDING)).length-1;const n=t===0;n&&(t++,e.deltaPercentage=-e.deltaPercentage);const i=e.panels[t],r=e.initialSizes[t],o=fe(i.data.minSize,e.resizableData.rootSize)-r,a=fe(i.data.maxSize,e.resizableData.rootSize)-r,l=Math.max(o,Math.min(e.deltaPercentage*2,a))/2,[s,c]=Wt({panels:e.panels,focusedElement:i.data.element}),f=[...s,i],d=[i,...c],h=bn({desiredPercentage:l,initialSizes:e.initialSizes,collapsible:!1,resizeActions:[{precedingPanels:f,followingPanels:c},{precedingPanels:s,followingPanels:d,negate:!0}],resizableData:{rootSize:e.resizableData.rootSize}});e.resizableData.handleCursorStyle===!0&&Di({orientation:e.resizableData.orientation,desiredPercentage:e.deltaPercentage,distributablePercentage:h,revertConstraints:n}),vn({initialSizes:e.initialSizes,collapsible:!1,resizeActions:[{precedingPanels:f,followingPanels:c,deltaPercentage:h},{precedingPanels:s,followingPanels:d,deltaPercentage:-h}],resizableData:e.resizableData})}else{const[t,n]=Wt({panels:e.panels,focusedElement:e.handle}),i=bn({desiredPercentage:e.deltaPercentage,initialSizes:e.initialSizes,collapsible:!0,resizeActions:[{precedingPanels:t,followingPanels:n}],resizableData:{rootSize:e.resizableData.rootSize}});if(vn({initialSizes:e.initialSizes,collapsible:!0,resizeActions:[{precedingPanels:t,followingPanels:n,deltaPercentage:i}],resizableData:e.resizableData}),e.resizableData.handleCursorStyle){const r=Qe(e.deltaPercentage),o=Qe(i);let a=!1;const l=t[t.length-1];if(l.data.collapsible){const c=fe(l.data.collapsedSize??0,e.resizableData.rootSize);(l.size()===c&&r>o||l.size()!==c&&r<o)&&(a=!0)}const s=n[0];if(s.data.collapsible){const c=fe(s.data.collapsedSize??0,e.resizableData.rootSize);(s.size()===c&&r<o||s.size()!==c&&r>o)&&(a=!0)}Di({orientation:e.resizableData.orientation,desiredPercentage:e.deltaPercentage,distributablePercentage:i,betweenCollapse:a})}}},fc=e=>{const t=ut({orientation:"horizontal",initialSizes:[],keyboardDelta:.1,handleCursorStyle:!0},e),[n,i]=Gt(t,["orientation","sizes","onSizesChange","initialSizes","keyboardDelta","handleCursorStyle","contextId","ref","style","children"]),[r,o]=Ws({value:()=>n.sizes,initialValue:[],onChange:n.onSizesChange}),[a,l]=U(null),s=Gs({element:a,dimension:()=>n.orientation==="horizontal"?"width":"height"}),[c,f]=U([]),d=[],h=_=>{const Q=c().filter(E=>!!(_.element.compareDocumentPosition(E.data.element)&Node.DOCUMENT_POSITION_PRECEDING)).length,R=d[Q]===void 0||d[Q]===_.id,V=r()[Q]!==void 0;let u=null;_.initialSize!==null?u=fe(_.initialSize,s()):n.initialSizes[Q]!==void 0&&R&&(u=fe(n.initialSizes[Q],s())),u=u??.5,o(E=>{let x=[...E];const L=x.reduce((X,D)=>X+D,0);if((R&&!V||!R)&&L===1){const X=u/x.length;x=x.map(D=>D-X)}return R?(V||(x[Q]=u),d[Q]=_.id):(x.splice(Q,0,u),d.splice(Q,0,_.id)),x});const g=oe(()=>{const E=d.indexOf(_.id);return r()[E]});ge(()=>_.onResize?.(g()));const O={data:_,size:g,resize:(E,x)=>$(d.indexOf(_.id),E,x),collapse:E=>w(d.indexOf(_.id),E),expand:E=>A(d.indexOf(_.id),E)};return f(E=>{const x=[...E];return x.push(O),x.sort((L,X)=>Ls(L.data.element,X.data.element)),x}),O},m=_=>{f(Q=>Q.filter(R=>R.data.id!==_));const C=d.indexOf(_);d.splice(C,1),o(Q=>{let R=[...Q];R.splice(C,1);const g=(R.reduce((O,E)=>O+E,0)-1)/R.length;return R=R.map(O=>O+g),R})};ge(()=>{n.onSizesChange!==void 0&&n.onSizesChange(r())});const $=(_,C,Q)=>{ye(()=>{const R=c()[_];if(!R)return;const V=fe(R.data.minSize,s()),u=fe(R.data.maxSize,s()),g=fe(C,s()),E=Math.max(V,Math.min(g,u))-r()[_];An({deltaPercentage:E,strategy:Q??"both",panel:R,panels:c(),initialSizes:c().map(x=>x.size()),collapsible:!1,resizableData:{rootSize:s(),orientation:n.orientation,setSizes:o}})})},w=(_,C)=>{ye(()=>{const Q=c()[_];if(!Q)return;const R=r()[_],V=fe(Q.data.collapsedSize??0,s());if(!Q.data.collapsible||R===V)return;const u=V-R;An({deltaPercentage:u,strategy:C??"both",panel:Q,panels:c(),initialSizes:c().map(g=>g.size()),collapsible:!0,resizableData:{rootSize:s(),orientation:n.orientation,setSizes:o}})})},A=(_,C)=>{ye(()=>{const Q=c()[_];if(!Q)return;const R=r()[_],V=fe(Q.data.collapsedSize??0,s());if(!Q.data.collapsible||R!==V)return;const g=fe(Q.data.minSize,s())-R;An({deltaPercentage:g,strategy:C??"both",panel:Q,panels:c(),initialSizes:c().map(O=>O.size()),collapsible:!0,resizableData:{rootSize:s(),orientation:n.orientation,setSizes:o}})})};let p=null,v=!1;const P=(_,C,Q)=>{(p===null||v!==Q)&&(p=c().map(R=>R.size()),v=Q),Ii({deltaPercentage:C/s(),altKey:Q,handle:_,panels:c(),initialSizes:p,resizableData:{rootSize:s(),handleCursorStyle:n.handleCursorStyle,orientation:n.orientation,setSizes:o}})},k=(_,C,Q)=>{if(C.key==="Enter"){const[u,g]=Wt({panels:c(),focusedElement:_});let O=u[u.length-1];if((!O||!O.data.collapsible)&&(O=g[0],!O||!O.data.collapsible))return;const E=O.size(),x=fe(O.data.collapsedSize??0,s());E===x?O.expand("following"):O.collapse("following");return}let R=null;if(n.orientation==="horizontal"&&C.key==="ArrowLeft"||n.orientation==="vertical"&&C.key==="ArrowUp"||C.key==="Home"?C.shiftKey||C.key==="Home"?R=-1:R=-fe(n.keyboardDelta,s()):(n.orientation==="horizontal"&&C.key==="ArrowRight"||n.orientation==="vertical"&&C.key==="ArrowDown"||C.key==="End")&&(C.shiftKey||C.key==="End"?R=1:R=fe(n.keyboardDelta,s())),R===null)return;C.preventDefault();const V=c().map(u=>u.size());Ii({deltaPercentage:R,altKey:Q,handle:_,panels:c(),initialSizes:V,resizableData:{rootSize:s(),handleCursorStyle:!1,orientation:n.orientation,setSizes:o}})},S={get sizes(){return r()},setSizes:o,get orientation(){return n.orientation},get keyboardDelta(){return n.keyboardDelta},get handleCursorStyle(){return n.handleCursorStyle},resize:$,collapse:w,expand:A},F=_r(()=>n.children),T=()=>{const _=F()();return wr(_)?_(S):_};return oe(()=>{const _=qs(n.contextId),C=Zs(n.contextId);return b(_.Provider,{value:{sizes:r,setSizes:o,orientation:()=>n.orientation,keyboardDelta:()=>n.keyboardDelta,handleCursorStyle:()=>n.handleCursorStyle,resize:$,collapse:w,expand:A},get children(){return b(C.Provider,{value:{sizes:r,setSizes:o,orientation:()=>n.orientation,keyboardDelta:()=>n.keyboardDelta,handleCursorStyle:()=>n.handleCursorStyle,rootSize:s,panels:c,registerPanel:h,unregisterPanel:m,onDrag:P,onDragEnd:()=>p=null,onKeyDown:k,resize:$,collapse:w,expand:A},get children(){return b(si,ut({as:"div",ref(Q){var R=li(l,n.ref);typeof R=="function"&&R(Q)},get style(){return ai({display:"flex","flex-direction":n.orientation==="horizontal"?"row":"column"},n.style)},get"data-orientation"(){return n.orientation},"data-corvu-resizable-root":""},i,{get children(){return ye(()=>T())}}))}})}})})},gc=fc,hc=Object.assign(gc,{Panel:dc,Handle:ac,useContext:Hs,usePanelContext:sc}),qe=hc,mc=z("<p>"),pc=z("<div class=results-empty><i></i><h4>"),bc=z('<button type=button class=status-action title="Load the violating execution as a trace you can walk step by step"><i class="codicon codicon-debug-alt"></i>Replay counterexample'),yc=z("<b>Run"),vc=z("<b>Check"),Oc=z("<code>always"),wc=z("<code>eventually"),_c=z("<div class=execution-error-box>"),Kt=z("<div class=console>"),Jt=z("<pre>"),$c=z("<pre class=console-warning>"),Sc=z('<div class=execution-content><div class=tab role=tablist><button type=button class=tab-clear-button title="Clear results"><i class="codicon codicon-clear-all"></i></button></div><div class=tab-content>'),xc=z("<button type=button role=tab class=tab_button><i></i><span>"),Cc=z("<div class=status-detail>"),Pc=z("<div role=status><i></i><div class=status-text><div class=status-title>");const Fi=ti(()=>Ge(()=>import("./Graph-BPy696rq.js"),__vite__mapDeps([9,10,11,1,12]))),Ec=ti(()=>Ge(()=>import("./CommGraph-D3FKQU0H.js"),__vite__mapDeps([13,10,11,1]))),kc=e=>{const t=e;return!!t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.tagName==="SELECT"||t.isContentEditable||!!t.closest?.(".cm-editor"))};function mt(e){return(()=>{var t=pc(),n=t.firstChild,i=n.nextSibling;return y(i,()=>e.title),y(t,b(G,{get when(){return e.children},get children(){var r=mc();return y(r,()=>e.children),r}}),null),ne(()=>he(n,`codicon codicon-${e.icon}`)),t})()}function Li(e){return b(qe,{get id(){return e.id},orientation:"vertical",class:"states-layout",get children(){return[b(qe.Panel,{initialSize:.4,minSize:.15,class:"states-pane",get children(){return b(Ps,{get node(){return e.exec.selectedVM()},onClose:()=>e.exec.setSelectedVM(null)})}}),b(qe.Handle,{class:"Resizable-handle"}),b(qe.Panel,{initialSize:.6,minSize:.15,class:"states-pane",get children(){return e.graph}})]}})}function zc(e){const t=e.exec;let n,i;const r=()=>[...t.mode()==="interactive"?[{id:"step",label:"Step",icon:"debug-step-over"}]:[],{id:"console",label:"Console",icon:"terminal"},{id:"execution",label:"Execution",icon:"output"},{id:"msg_flow",label:"Messages",icon:"send"},{id:"vm_states",label:"States",icon:"type-hierarchy-sub"}],o=(f,d)=>{d?.lines&&e.editor.highlightLines?.(d.lines)};ge(Ye([t.stdout,t.activeTab],()=>{n&&(n.scrollTop=n.scrollHeight)})),ge(Ye([t.executionOutput,t.activeTab],()=>{i&&(i.scrollTop=i.scrollHeight)})),ge(()=>{if(t.activeTab()!=="vm_states"||t.mode()==="check")return;const f=d=>{if(d.key!=="ArrowLeft"&&d.key!=="ArrowRight"||d.ctrlKey||d.metaKey||d.altKey||d.shiftKey||kc(d.target)||t.traceNodes().length===0)return;const h=t.selectedVM()?.stepIndex??-1;t.selectTraceStep(d.key==="ArrowRight"?h+1:h-1),d.preventDefault()};window.addEventListener("keydown",f),Fe(()=>window.removeEventListener("keydown",f))});const a=f=>{const d=e.editor.safeEditorView?.();if(!d||!f?.length)return[];const h=d.state.doc,m=f.filter($=>$>0&&$<=h.lines).map($=>h.line($).text.trim()).filter($=>$!=="");return[...new Set(m)]},l=()=>b(G,{get when(){return ze(()=>t.mode()==="check")()&&t.counterexample().length>0},get children(){var f=bc();return f.$$click=()=>t.replayCounterexample(),f}}),s=()=>b(Mn,{get children(){return[b(Ce,{get when(){return ze(()=>t.mode()==="check")()&&t.busy()==="check"},get children(){return b(mt,{icon:"loading codicon-modifier-spin",title:"Model checking…",children:"Exploring every reachable state of the program."})}}),b(Ce,{get when(){return ze(()=>t.mode()==="check")()&&t.checkStateCount()===0},get children(){return b(mt,{icon:"type-hierarchy-sub",title:"No state graph",children:"The check did not produce any state."})}}),b(Ce,{get when(){return t.mode()==="check"},get children(){return b(Li,{id:"checker-states-layout",exec:t,get graph(){return b(G,{get when(){return t.checkStateCount()<=Xn},get fallback(){return b(mt,{icon:"graph",title:"Graph too large to display",get children(){return[ze(()=>t.checkStateCount().toLocaleString())," states were explored, above the display limit of ",Xn,".",b(G,{get when(){return t.counterexample().length>0},get children(){return[" ","Use “Replay counterexample” to inspect the violating trace."]}})]}})},get children(){return b(Fi,{get nodes(){return t.checkGraph().nodes},get edges(){return t.checkGraph().edges},get theme(){return e.theme},onEdgeClick:o,get onNodeSelect(){return t.setSelectedVM}})}})}})}}),b(Ce,{get when(){return t.traceNodes().length>0},get children(){return b(Li,{id:"vm-states-layout",exec:t,get graph(){return b(Fi,{get nodes(){return t.traceGraph().nodes},get edges(){return t.traceGraph().edges},get theme(){return e.theme},onEdgeClick:o,get onNodeSelect(){return t.setSelectedVM},get selectedNode(){return t.selectedVM()?.stepIndex??null}})}})}}),b(Ce,{when:!0,get children(){return b(mt,{icon:"type-hierarchy-sub",title:"No states yet",get children(){return[yc()," shows the states of one execution; ",vc()," explores all of them and verifies your ",Oc()," /"," ",wc()," properties."]}})}})]}}),c=()=>b(Mn,{get children(){return[b(Ce,{get when(){return ze(()=>t.activeTab()==="step")()&&t.mode()==="interactive"},get children(){return b(Qs,{get choices(){return t.choices()},get finished(){return t.interactiveFinished()},get deadlock(){return t.interactiveDeadlock()},get stepCount(){return t.history().length},getSourceLines:a,get onExecute(){return t.executeStep},get onPreviewLines(){return e.onPreviewLines},get onUndo(){return t.undoStep},get onRestart(){return t.startInteractive},get onStop(){return t.stopInteractive}})}}),b(Ce,{get when(){return t.activeTab()==="execution"},get children(){var f=Kt(),d=i;return typeof d=="function"?Je(d,f):i=f,y(f,b(G,{get when(){return t.executionOutput()||t.structuredError()},get fallback(){return b(mt,{icon:"output",title:"No execution trace",children:"The instructions executed by each process will be listed here."})},get children(){return b(G,{get when(){return t.executionError()},get fallback(){return(()=>{var h=Jt();return y(h,()=>t.executionOutput()),h})()},get children(){var h=_c();return y(h,b(G,{get when(){return t.structuredError()},get fallback(){return(()=>{var m=Jt();return y(m,()=>t.executionOutput()),m})()},children:m=>[b(Al,{get error(){return m()},get onFileClick(){return e.onErrorFileClick}}),b(G,{get when(){return ze(()=>!!t.executionOutput())()&&t.executionOutput()!==m().message},get children(){var $=Jt();return y($,()=>t.executionOutput()),$}})]})),h}})}})),f}}),b(Ce,{get when(){return t.activeTab()==="msg_flow"},get children(){var f=Kt();return y(f,b(G,{get when(){return t.messageFlow().length>0},get fallback(){return b(mt,{icon:"send",title:"No messages",get children(){return t.mode()==="check"?"Message flow is shown for a single execution: use Run, Step or Replay counterexample.":"Messages exchanged through channels will be drawn here."}})},get children(){return b(Ec,{get events(){return t.messageFlow()},get editor(){return e.editor},get theme(){return e.theme}})}})),f}}),b(Ce,{get when(){return t.activeTab()==="vm_states"},get children(){var f=Kt();return y(f,s),f}}),b(Ce,{when:!0,get children(){var f=Kt();return y(f,b(G,{get when(){return t.stdout()||t.stdoutWarning()},get fallback(){return b(mt,{icon:"terminal",title:"No output",get children(){return ze(()=>t.mode()==="check")()?"Model checking does not print. Use Run or Step to see the program output.":t.mode()==="none"?`Press Run (${e.runShortcut}) to execute the program.`:"The program did not print anything."}})},get children(){return[(()=>{var d=Jt(),h=n;return typeof h=="function"?Je(h,d):n=d,y(d,()=>t.stdout()),d})(),b(G,{get when(){return t.stdoutWarning()},children:d=>(()=>{var h=$c();return y(h,d),h})()})]}})),f}})]}});return(()=>{var f=Sc(),d=f.firstChild,h=d.firstChild,m=d.nextSibling;return y(d,b(_e,{get each(){return r()},children:$=>(()=>{var w=xc(),A=w.firstChild,p=A.nextSibling;return w.$$click=()=>t.setActiveTab($.id),y(p,()=>$.label),ne(v=>{var P=t.activeTab()===$.id,k=t.activeTab()===$.id,S=!!($.id==="execution"&&t.executionError()),F=$.id==="step"&&t.activeTab()!=="step",T=$.label,I=`codicon codicon-${$.icon}`;return P!==v.e&&re(w,"aria-selected",v.e=P),k!==v.t&&w.classList.toggle("active",v.t=k),S!==v.a&&w.classList.toggle("execution-error",v.a=S),F!==v.o&&w.classList.toggle("highlighted",v.o=F),T!==v.i&&re(w,"title",v.i=T),I!==v.n&&he(A,v.n=I),v},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),w})()}),h),h.$$click=()=>t.reset(),y(f,b(G,{get when(){return t.status()},children:$=>(()=>{var w=Pc(),A=w.firstChild,p=A.nextSibling,v=p.firstChild;return y(v,()=>$().title),y(p,b(G,{get when(){return $().detail},get children(){var P=Cc();return y(P,()=>$().detail),P}}),null),y(w,l,null),ne(P=>{var k=`status-banner tone-${$().tone}`,S=`codicon codicon-${$().icon}${$().tone==="busy"?" codicon-modifier-spin":""}`;return k!==P.e&&he(w,P.e=k),S!==P.t&&he(A,P.t=S),P},{e:void 0,t:void 0}),w})()}),m),y(m,c),ne(()=>h.disabled=t.mode()==="none"&&!t.status()),f})()}Pe(["click"]);var an=z("<div class=file-entry-error>"),Rc=z('<div class=file-entry-input-wrapper><div class=file-entry-rename-input><i class="codicon codicon-folder"></i><input class=rename-input type=text>'),Rr=z("<div class=file-entry-input-wrapper><div class=file-entry-input><i></i><input type=text>"),Tc=z("<div class=directory-children>"),Ac=z('<div class=context-menu role=menu><button type=button><i class="codicon codicon-copy"></i>Copy</button><button type=button><i class="codicon codicon-clippy"></i>Paste</button><div class=context-menu-separator></div><button type=button><i class="codicon codicon-edit"></i>Rename</button><button type=button><i class="codicon codicon-trash"></i>Delete'),Dc=z('<div class=directory role=group><div class=directory-header role=treeitem tabindex=0><i></i><i class="codicon codicon-folder">'),Ni=z("<span>"),Qc=z('<div class=file-entry-input-wrapper><div class=file-entry-rename-input><i class="codicon codicon-file"></i><input class=rename-input type=text>'),Ic=z('<div class=context-menu role=menu><button type=button><i class="codicon codicon-copy"></i>Copy</button><button type=button><i class="codicon codicon-clippy"></i>Paste</button><div class=context-menu-separator></div><button type=button><i class="codicon codicon-edit"></i>Rename</button><button type=button class=context-menu-delete-btn><i class="codicon codicon-trash"></i>Delete'),Fc=z("<div class=file role=treeitem tabindex=0>"),Lc=z('<i class="codicon codicon-file">'),Nc=z('<section class=file-explorer aria-label="File explorer"><div class=file-explorer-header><h3>Explorer</h3><div class=file-explorer-actions><button type=button class=header-action-btn><i class="codicon codicon-new-file"></i></button><button type=button class=header-action-btn><i class="codicon codicon-new-folder"></i></button><button type=button class=header-action-btn title="Download all files as .zip"><i class="codicon codicon-desktop-download"></i></button></div></div><div class=file-explorer-content role=tree aria-multiselectable=true tabindex=-1>');const Tr=e=>{const t=e.path?`${e.path}/${e.entry.name}`:e.entry.name,[n,i]=U(!1),[r,o]=U(!1),[a,l]=U({x:0,y:0}),[s,c]=U(null),f=()=>e.isContextMenuOpenFor===t,d=u=>{e.setContextMenuOpenFor(u?t:null)},h=()=>e.currentlyRenaming===t;ge(()=>{!h()&&s()&&c(null)});const m=()=>e.selectedFiles.includes(t),$=u=>u==="deps"||u.startsWith("deps/"),w=u=>{if(u.metaKey||u.ctrlKey){const g=m()?e.selectedFiles.filter(O=>O!==t):[...e.selectedFiles,t];e.onSelectionChange(g),m()||e.onFileSelect(t)}else if(u.shiftKey&&e.selectedFiles.length>0){const g=e.selectedFiles[e.selectedFiles.length-1],O=T(g,t);e.onSelectionChange(O),e.onFileSelect(t)}else e.onSelectionChange([t]),e.onFileSelect(t)},A=u=>{u.preventDefault(),u.stopPropagation(),!$(t)&&(m()||e.onSelectionChange([t]),l({x:u.clientX,y:u.clientY}),d(!0))},p=()=>{d(!1),e.onCopy(e.selectedFiles)},v=()=>{d(!1);const u=e.entry.type==="directory"?t:e.path;e.onPaste(u)},P=()=>{d(!1),e.startRename(t)},k=()=>{d(!1),e.selectedFiles.length>1?e.showDeleteConfirmDialog(e.selectedFiles):e.showDeleteConfirmDialog([t])},S=u=>{if(u=u.trim(),u&&u!==e.entry.name){const g=t.split("/");g.pop();const O=g.join("/");if(e.checkNameConflict&&e.checkNameConflict(O,u)){c("A file or folder with this name already exists.");return}c(null),e.onRenameEntry(t,u)}e.startRename("")},F=()=>{e.startRename(""),c(null)};ge(()=>{const u=g=>{g.target.closest(".context-menu")||d(!1)};f()&&(document.addEventListener("click",u,{capture:!0}),Fe(()=>document.removeEventListener("click",u,{capture:!0})))});const T=(u,g)=>{const O=I(),E=O.indexOf(u),x=O.indexOf(g);if(E===-1||x===-1)return[g];const L=Math.min(E,x),X=Math.max(E,x);return O.slice(L,X+1)},I=()=>e.allVisibleFiles,_=u=>{if($(t)){u.preventDefault();return}if(u.dataTransfer.effectAllowed="move",o(!0),m()&&e.selectedFiles.length>1){const g=e.selectedFiles;if(g.some(O=>$(O))){u.preventDefault();return}u.dataTransfer.setData("text/plain",JSON.stringify(g))}else u.dataTransfer.setData("text/plain",JSON.stringify([t])),e.onSelectionChange([t]);u.stopPropagation()},C=()=>{o(!1)},Q=u=>{if(u.preventDefault(),u.stopPropagation(),$(t)){u.dataTransfer.dropEffect="none";return}u.dataTransfer?.files.length?u.dataTransfer.dropEffect="copy":u.dataTransfer.dropEffect="move",i(!0)},R=u=>{const g=u.currentTarget.getBoundingClientRect(),O=u.clientX>=g.left&&u.clientX<=g.right,E=u.clientY>=g.top&&u.clientY<=g.bottom;(!O||!E)&&i(!1)},V=u=>{if(u.preventDefault(),u.stopPropagation(),i(!1),console.log("Drop event on:",t,"with data:",u.dataTransfer?.getData("text/plain")),$(t))return;if(u.dataTransfer?.files.length){e.entry.type==="directory"&&e.onFileUpload(Array.from(u.dataTransfer.files),t);return}const g=u.dataTransfer.getData("text/plain");if(g&&e.entry.type==="directory")try{const O=JSON.parse(g);console.log("Moving paths:",O,"to:",t);for(const E of O){if(E.split("/").slice(0,-1).join("/")===t){console.log("Skipping move - already in destination:",E);continue}const L=E.split("/").pop();if(e.checkNameConflict&&e.checkNameConflict(t,L)){e.showConfirmDialog&&e.showConfirmDialog(O,t,L);return}}O.forEach(E=>{E.split("/").slice(0,-1).join("/")!==t&&e.onMoveEntry(E,t)})}catch{if(console.log("Fallback: moving single item:",g,"to:",t),g.split("/").slice(0,-1).join("/")===t){console.log("Skipping move - already in destination:",g);return}const x=g.split("/").pop();if(e.checkNameConflict&&e.checkNameConflict(t,x)){e.showConfirmDialog&&e.showConfirmDialog([g],t,x);return}e.onMoveEntry(g,t)}};if(e.entry.type==="directory"){const[u,g]=U(!0);ge(()=>{e.creating&&e.creating.parentPath===t&&g(!0)});const O=x=>[...x].sort((L,X)=>L.type!==X.type?L.type==="directory"?-1:1:L.name.toLowerCase().localeCompare(X.name.toLowerCase())),E=x=>{g(!u()),w(x)};return(()=>{var x=Dc(),L=x.firstChild,X=L.firstChild;return X.nextSibling,x.addEventListener("drop",V),x.addEventListener("dragleave",R),x.addEventListener("dragover",Q),L.addEventListener("dragend",C),L.addEventListener("dragstart",_),L.$$contextmenu=A,L.$$keydown=D=>{D.target===D.currentTarget&&(D.key==="Enter"||D.key===" "?(D.preventDefault(),E(D)):D.key==="ArrowRight"&&!u()?(D.preventDefault(),g(!0)):D.key==="ArrowLeft"&&u()&&(D.preventDefault(),g(!1)))},L.$$click=E,y(L,b(G,{get when(){return h()},get fallback(){return(()=>{var D=Ni();return y(D,()=>e.entry.name),D})()},get children(){var D=Rc(),M=D.firstChild,Z=M.firstChild,H=Z.nextSibling;return Je(Y=>{Y&&setTimeout(()=>{Y.focus(),Y.select()},10)},H),H.addEventListener("blur",Y=>S(Y.currentTarget.value)),H.$$keydown=Y=>{Y.key==="Enter"?(Y.preventDefault(),S(Y.currentTarget.value)):Y.key==="Escape"&&(Y.preventDefault(),F())},y(D,b(G,{get when(){return s()},get children(){var Y=an();return y(Y,s),Y}}),null),ne(()=>H.value=e.entry.name),D}}),null),y(x,b(G,{get when(){return u()},get children(){var D=Tc();return y(D,b(_e,{get each(){return O(e.entry.children||[])},children:M=>b(Tr,{entry:M,path:t,get onFileSelect(){return e.onFileSelect},get getFilePath(){return e.getFilePath},get activeFile(){return e.activeFile},get onMoveEntry(){return e.onMoveEntry},get onRenameEntry(){return e.onRenameEntry},get onDeleteEntry(){return e.onDeleteEntry},get onCopy(){return e.onCopy},get onPaste(){return e.onPaste},get isPasteEnabled(){return e.isPasteEnabled},get selectedFiles(){return e.selectedFiles},get onSelectionChange(){return e.onSelectionChange},get onFileUpload(){return e.onFileUpload},get checkNameConflict(){return e.checkNameConflict},get showConfirmDialog(){return e.showConfirmDialog},get showDeleteConfirmDialog(){return e.showDeleteConfirmDialog},get allVisibleFiles(){return e.allVisibleFiles},get creating(){return e.creating},get onCreateCommit(){return e.onCreateCommit},get onCreateCancel(){return e.onCreateCancel},get creationError(){return e.creationError},get setCreationError(){return e.setCreationError},get createCommitInProgress(){return e.createCommitInProgress},get currentlyRenaming(){return e.currentlyRenaming},get startRename(){return e.startRename},get isContextMenuOpenFor(){return e.isContextMenuOpenFor},get setContextMenuOpenFor(){return e.setContextMenuOpenFor}})}),null),y(D,b(G,{get when(){return e.creating&&e.creating.parentPath===t},get children(){var M=Rr(),Z=M.firstChild,H=Z.firstChild,Y=H.nextSibling;return Y.$$input=()=>{e.setCreationError&&e.setCreationError(null)},Y.addEventListener("blur",J=>{if(!e.createCommitInProgress||!e.createCommitInProgress()){const te=J.currentTarget.value.trim();e.onCreateCommit(te)}}),Y.$$keydown=J=>{if(J.key==="Enter"){J.preventDefault();const te=J.currentTarget.value.trim();e.onCreateCommit(te)}else J.key==="Escape"&&(J.preventDefault(),e.onCreateCancel())},Je(J=>{J&&e.creating&&e.creating.parentPath===t&&setTimeout(()=>J.focus(),10)},Y),y(M,b(G,{get when(){return e.creationError},get children(){var J=an();return y(J,()=>e.creationError),J}}),null),ne(()=>he(H,`codicon codicon-${e.creating.type==="file"?"file":"folder"}`)),M}}),null),D}}),null),y(x,b(G,{get when(){return f()},get children(){var D=Ac(),M=D.firstChild,Z=M.nextSibling,H=Z.nextSibling,Y=H.nextSibling,J=Y.nextSibling;return D.$$keydown=te=>{te.stopPropagation(),te.key==="Escape"&&d(!1)},D.$$click=te=>te.stopPropagation(),D.style.setProperty("position","fixed"),D.style.setProperty("z-index","1000"),M.$$click=p,Z.$$click=v,Y.$$click=P,J.$$click=k,ne(te=>{var me=`${a().y}px`,se=`${a().x}px`,ue=!e.isPasteEnabled;return me!==te.e&&((te.e=me)!=null?D.style.setProperty("top",me):D.style.removeProperty("top")),se!==te.t&&((te.t=se)!=null?D.style.setProperty("left",se):D.style.removeProperty("left")),ue!==te.a&&(Z.disabled=te.a=ue),te},{e:void 0,t:void 0,a:void 0}),D}}),null),ne(D=>{var M=!!n(),Z=!!r(),H=!!(m()&&!h()),Y=u(),J=m(),te=!!$(t),me=!$(t),se=`codicon codicon-chevron-${u()?"down":"right"}`;return M!==D.e&&x.classList.toggle("drag-over",D.e=M),Z!==D.t&&x.classList.toggle("dragging",D.t=Z),H!==D.a&&x.classList.toggle("selected",D.a=H),Y!==D.o&&re(L,"aria-expanded",D.o=Y),J!==D.i&&re(L,"aria-selected",D.i=J),te!==D.n&&L.classList.toggle("read-only",D.n=te),me!==D.s&&re(L,"draggable",D.s=me),se!==D.h&&he(X,D.h=se),D},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),x})()}return(()=>{var u=Fc();return u.$$keydown=g=>{g.target===g.currentTarget&&(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),w(g))},u.$$click=w,u.$$contextmenu=A,u.addEventListener("dragend",C),u.addEventListener("dragstart",_),y(u,b(G,{get when(){return h()},get fallback(){return[Lc(),(()=>{var g=Ni();return y(g,()=>e.entry.name),g})()]},get children(){var g=Qc(),O=g.firstChild,E=O.firstChild,x=E.nextSibling;return Je(L=>{L&&setTimeout(()=>{L.focus(),L.select()},10)},x),x.addEventListener("blur",L=>S(L.currentTarget.value)),x.$$keydown=L=>{L.key==="Enter"?(L.preventDefault(),S(L.currentTarget.value)):L.key==="Escape"&&(L.preventDefault(),F())},y(g,b(G,{get when(){return s()},get children(){var L=an();return y(L,s),L}}),null),ne(()=>x.value=e.entry.name),g}}),null),y(u,b(G,{get when(){return f()},get children(){var g=Ic(),O=g.firstChild,E=O.nextSibling,x=E.nextSibling,L=x.nextSibling,X=L.nextSibling;return g.$$keydown=D=>{D.stopPropagation(),D.key==="Escape"&&d(!1)},g.$$click=D=>D.stopPropagation(),g.style.setProperty("position","fixed"),g.style.setProperty("z-index","1000"),O.$$click=p,E.$$click=v,L.$$click=P,X.$$click=k,ne(D=>{var M=`${a().y}px`,Z=`${a().x}px`,H=!e.isPasteEnabled;return M!==D.e&&((D.e=M)!=null?g.style.setProperty("top",M):g.style.removeProperty("top")),Z!==D.t&&((D.t=Z)!=null?g.style.setProperty("left",Z):g.style.removeProperty("left")),H!==D.a&&(E.disabled=D.a=H),D},{e:void 0,t:void 0,a:void 0}),g}}),null),ne(g=>{var O=m(),E=!$(t),x=e.activeFile!==null&&e.getFilePath(e.activeFile)===t,L=!!(m()&&!h()),X=!!r(),D=!!$(t),M=!!f();return O!==g.e&&re(u,"aria-selected",g.e=O),E!==g.t&&re(u,"draggable",g.t=E),x!==g.a&&u.classList.toggle("active",g.a=x),L!==g.o&&u.classList.toggle("selected",g.o=L),X!==g.i&&u.classList.toggle("dragging",g.i=X),D!==g.n&&u.classList.toggle("read-only",g.n=D),M!==g.s&&u.classList.toggle("has-context-menu",g.s=M),g},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),u})()},Mc=e=>{const[t,n]=U(null),i=()=>e.globalFileCreation!==void 0?e.globalFileCreation:t(),r=e.setGlobalFileCreation||n,[o,a]=U(!1),[l,s]=U(null),[c,f]=U(null),[d,h]=U(null),m=()=>{r(null),h(null),e.setCreationError&&e.setCreationError(null)},$=u=>{u===""?h(null):(m(),h(u))},w=(u,g)=>{m(),r({type:u,parentPath:g})},A=u=>u==="deps"||u.startsWith("deps/"),p=u=>{const g=u.filter(O=>!A(O));g.length>0&&s(g)},v=u=>{const g=l();if(g)for(const O of g){const E=O.split("/").pop();let x=E,L=1;const X=E.split("."),M=X.length>1&&X[X.length-1].length>0?`.${X.pop()}`:"",Z=X.join(".");if(e.checkNameConflict)for(;e.checkNameConflict(u,x);)x=`${Z} (${L})${M}`,L++;e.onCopyEntry(O,u,x)}},P=u=>[...u].sort((g,O)=>g.type!==O.type?g.type==="directory"?-1:1:g.name.toLowerCase().localeCompare(O.name.toLowerCase())),k=()=>{const u=[],g=(O,E="")=>{const x=P(O);for(const L of x){const X=E?`${E}/${L.name}`:L.name;u.push(X),L.type==="directory"&&L.children&&g(L.children,X)}};return g(e.files),u};ge(()=>{const u=g=>{if(g.key==="Escape"){const X=g.target;if(X.tagName==="INPUT"||X.tagName==="TEXTAREA"||X.isContentEditable)return;let D=X;for(;D&&D!==document.body;){if(D.classList.contains("cm-editor")||D.classList.contains("cm-content")||D.classList.contains("cm-scroller")||D.closest(".cm-editor"))return;D=D.parentElement}i()||d()?m():e.onSelectionChange([]);return}if(i()||d())return;const O=g.target,E=O.tagName==="INPUT"||O.tagName==="TEXTAREA"||O.isContentEditable;let x=!1,L=O;for(;L&&L!==document.body;){if(L.classList.contains("cm-editor")||L.classList.contains("cm-content")||L.classList.contains("cm-scroller")||L.closest(".cm-editor")){x=!0;break}L=L.parentElement}if(!(E||x)){if((g.metaKey||g.ctrlKey)&&g.key==="a"){g.preventDefault();const X=k();e.onSelectionChange(X)}if((g.metaKey||g.ctrlKey)&&g.key==="c"&&(g.preventDefault(),e.selectedFiles.length>0&&p(e.selectedFiles)),(g.metaKey||g.ctrlKey)&&g.key==="v"&&(g.preventDefault(),l())){let X="";if(e.selectedFiles.length===1){const D=e.selectedFiles[0],M=_(e.files,D);if(M)if(M.type==="directory")X=D;else{const Z=D.split("/");Z.length>1&&(Z.pop(),X=Z.join("/"))}}v(X)}}};return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}});const S=u=>{const g=u==="file"?"New File":"New Folder";if(e.selectedFiles.length===1){const O=e.selectedFiles[0],E=_(e.files,O);if(E&&E.type==="directory")return`${g} in ${O}`;if(E&&E.type==="file"){const x=O.split("/");if(x.length>1){x.pop();const L=x.join("/");return`${g} in ${L}`}else return`${g} in root (same level as ${E.name})`}}return`${g} in root`},[F,T]=U(!1),I=u=>{if(!(!i()||F()))if(u=u.trim(),u){const g=i().parentPath,O=i().type;T(!0),O==="file"?e.onNewFile(u,g):e.onNewFolder(u,g),setTimeout(()=>{e.creationError||m(),T(!1)},50)}else m()},_=(u,g)=>{for(const O of u){if(O.name===g&&O.type==="file"||O.name===g&&O.type==="directory")return O;if(O.type==="directory"&&O.children){const E=g.split("/");if(E[0]===O.name&&E.length>1){const x=E.slice(1).join("/"),L=_(O.children,x);if(L)return L}}}return null},C=()=>{m(),T(!1)},Q=u=>{u.preventDefault(),u.stopPropagation(),u.dataTransfer?.files.length?u.dataTransfer.dropEffect="copy":u.dataTransfer.dropEffect="move",a(!0)},R=()=>{a(!1)},V=u=>{if(u.preventDefault(),a(!1),console.log("Drop event on root explorer with data:",u.dataTransfer?.getData("text/plain")),u.dataTransfer?.files.length){e.onFileUpload(Array.from(u.dataTransfer.files),"");return}const g=u.dataTransfer.getData("text/plain");if(g)try{const O=JSON.parse(g);console.log("Moving paths to root:",O);for(const E of O){if(!E.includes("/")){console.log("Skipping move - already at root:",E);continue}const x=E.split("/").pop();if(e.checkNameConflict&&e.checkNameConflict("",x)){e.showConfirmDialog&&e.showConfirmDialog(O,"",x);return}}O.forEach(E=>{E.includes("/")&&e.onMoveEntry(E,"")})}catch{if(console.log("Fallback: moving single item to root:",g),!g.includes("/")){console.log("Skipping move - already at root:",g);return}const E=g.split("/").pop();if(e.checkNameConflict&&e.checkNameConflict("",E)){e.showConfirmDialog&&e.showConfirmDialog([g],"",E);return}e.onMoveEntry(g,"")}};return(()=>{var u=Nc(),g=u.firstChild,O=g.firstChild,E=O.nextSibling,x=E.firstChild,L=x.nextSibling,X=L.nextSibling,D=g.nextSibling;return u.addEventListener("drop",V),u.addEventListener("dragleave",R),u.addEventListener("dragover",Q),x.$$click=()=>{let M="";if(e.selectedFiles.length===1){const Z=e.selectedFiles[0],H=_(e.files,Z);if(H&&H.type==="directory")M=Z;else if(H&&H.type==="file"){const Y=Z.split("/");Y.length>1&&(Y.pop(),M=Y.join("/"))}}w("file",M)},L.$$click=()=>{let M="";if(e.selectedFiles.length===1){const Z=e.selectedFiles[0],H=_(e.files,Z);if(H&&H.type==="directory")M=Z;else if(H&&H.type==="file"){const Y=Z.split("/");Y.length>1&&(Y.pop(),M=Y.join("/"))}}w("folder",M)},X.$$click=async()=>{const M=await Ge(()=>import("./jszip.min-BiHF8TMC.js").then(se=>se.j),[]),Z=M.default||M,H=new Z,Y=localStorage.getItem("althread-file-system");let J=Y?JSON.parse(Y):[];const te=se=>se.map(ue=>({...ue,id:ue.id||(window.crypto?crypto.randomUUID():Math.random().toString(36).slice(2)),children:ue.children?te(ue.children):void 0}));J=te(J);const me=(se,ue="")=>{for(const ce of se){const xe=ue?`${ue}/${ce.name}`:ce.name;if(ce.type==="file"){const Me=localStorage.getItem("althread-file-content-"+xe)||"";H.file(xe,Me)}else ce.type==="directory"&&ce.children&&me(ce.children,xe)}};me(J),H.generateAsync({type:"blob"}).then(se=>{const ue=URL.createObjectURL(se),ce=document.createElement("a");ce.href=ue,ce.download="althread-files.zip",document.body.appendChild(ce),ce.click(),setTimeout(()=>{document.body.removeChild(ce),URL.revokeObjectURL(ue)},100)})},D.$$click=M=>{M.target===M.currentTarget&&e.onSelectionChange([])},D.$$keydown=M=>{M.key==="Escape"&&e.onSelectionChange([])},y(D,b(_e,{get each(){return P(e.files)},children:M=>b(Tr,{entry:M,path:"",get onFileSelect(){return e.onFileSelect},get activeFile(){return e.activeFile},get getFilePath(){return e.getFilePath},get onMoveEntry(){return e.onMoveEntry},get onRenameEntry(){return e.onRenameEntry},get onDeleteEntry(){return e.onDeleteEntry},onCopy:p,onPaste:v,get isPasteEnabled(){return!!l()},get selectedFiles(){return e.selectedFiles},get onSelectionChange(){return e.onSelectionChange},get onFileUpload(){return e.onFileUpload},get checkNameConflict(){return e.checkNameConflict||(()=>!1)},get showConfirmDialog(){return e.showConfirmDialog||(()=>{})},get showDeleteConfirmDialog(){return e.showDeleteConfirmDialog||(()=>{})},get allVisibleFiles(){return k()},get creating(){return i()},onCreateCommit:I,onCreateCancel:C,get creationError(){return e.creationError||null},get setCreationError(){return e.setCreationError},createCommitInProgress:F,get currentlyRenaming(){return d()},startRename:$,get isContextMenuOpenFor(){return c()},setContextMenuOpenFor:f})}),null),y(D,b(G,{get when(){return ze(()=>!!i())()&&i().parentPath===""},get children(){var M=Rr(),Z=M.firstChild,H=Z.firstChild,Y=H.nextSibling;return Y.$$input=()=>e.setCreationError&&e.setCreationError(null),Y.addEventListener("blur",J=>{if(!F()){const te=J.currentTarget.value.trim();I(te)}}),Y.$$keydown=J=>{if(J.key==="Enter"){J.preventDefault();const te=J.currentTarget.value.trim();I(te)}else J.key==="Escape"&&(J.preventDefault(),C())},Je(J=>{J&&i()&&i().parentPath===""&&setTimeout(()=>J.focus(),10)},Y),y(M,b(G,{get when(){return e.creationError},get children(){var J=an();return y(J,()=>e.creationError),J}}),null),ne(()=>he(H,`codicon codicon-${i().type==="file"?"file":"folder"}`)),M}}),null),ne(M=>{var Z=!!o(),H=S("file"),Y=!!i()||!!d(),J=S("folder"),te=!!i()||!!d();return Z!==M.e&&u.classList.toggle("drag-over",M.e=Z),H!==M.t&&re(x,"title",M.t=H),Y!==M.a&&(x.disabled=M.a=Y),J!==M.o&&re(L,"title",M.o=J),te!==M.i&&(L.disabled=M.i=te),M},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),u})()};Pe(["click","keydown","contextmenu","input"]);var Uc=z('<button type=button class=search-clear><i class="codicon codicon-close">'),jc=z('<div class=search-empty><i class="codicon codicon-search"></i><p>'),Vc=z('<div class=search-empty><i class="codicon codicon-search"></i><p>Start typing to search files...'),Wc=z('<div class=search-no-results><i class="codicon codicon-search-stop"></i><p></p><button type=button class=search-clear-btn>Clear search'),Xc=z('<div class=search-view><div class=search-view-header><h3>Search</h3></div><div class=search-view-content><div class=search-input-container><div class=search-input-wrapper><i class="codicon codicon-search search-icon"></i><input type=text class=search-input></div></div><div class=search-results>'),Gc=z("<i>"),Bc=z("<div class=search-result-subtitle>"),Yc=z("<div class=search-result-description>"),qc=z("<button type=button class=search-result-item><div class=search-result-content><div class=search-result-title>");function Ar(e){const[t,n]=U(""),i=()=>e.searchFields||["title","subtitle","description","content","path"],r=(c,f)=>{const d=c.description||"",h=c.content||"",m=f.trim().toLowerCase();if(!m||!h)return d;const $=h.split(`
`).find(A=>A.toLowerCase().includes(m));if(!$)return d;let w=$.trim();if(w.length>100){const A=w.toLowerCase().indexOf(m),p=Math.max(0,A-30),v=Math.min(w.length,p+100);w=`${p>0?"…":""}${w.substring(p,v)}${v<w.length?"…":""}`}return d?`${d}
${w}`:w},o=c=>c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),a=(c,f)=>{const d=f.trim(),h=d?c.toLowerCase().indexOf(d.toLowerCase()):-1;if(h===-1)return o(c);const m=c.substring(0,h),$=c.substring(h,h+d.length),w=c.substring(h+d.length);return`${o(m)}<span class="search-highlight">${o($)}</span>${o(w)}`},l=oe(()=>{const c=t().toLowerCase().trim();return c?e.items.filter(f=>i().some(d=>{const h=f[d];return h?Array.isArray(h)?h.some(m=>m.toLowerCase().includes(c)):h.toLowerCase().includes(c):!1})):e.showAllByDefault!==!1?e.items:[]}),s=()=>{n("")};return(()=>{var c=Xc(),f=c.firstChild,d=f.nextSibling,h=d.firstChild,m=h.firstChild,$=m.firstChild,w=$.nextSibling,A=h.nextSibling;return w.$$keydown=p=>{p.key==="Escape"&&(s(),p.preventDefault())},w.$$input=p=>n(p.currentTarget.value),y(m,b(G,{get when(){return t()},get children(){var p=Uc();return p.$$click=s,p}}),null),y(A,b(G,{get when(){return e.items.length===0},get children(){var p=jc(),v=p.firstChild,P=v.nextSibling;return y(P,()=>e.emptyMessage||"No items available"),p}}),null),y(A,b(G,{get when(){return e.items.length>0&&!t()&&e.showAllByDefault===!1},get children(){return Vc()}}),null),y(A,b(G,{get when(){return ze(()=>e.items.length>0&&l().length===0)()&&t()},get children(){var p=Wc(),v=p.firstChild,P=v.nextSibling,k=P.nextSibling;return y(P,()=>e.noResultsMessage||"No results found"),k.$$click=s,p}}),null),y(A,b(G,{get when(){return l().length>0},get children(){return b(_e,{get each(){return l()},children:p=>(()=>{var v=qc(),P=v.firstChild,k=P.firstChild;return Ne(v,"click",p.onClick,!0),y(v,b(G,{get when(){return p.icon},get children(){var S=Gc();return ne(()=>he(S,`codicon codicon-${p.icon} search-result-icon`)),S}}),P),y(k,()=>p.title),y(P,b(G,{get when(){return p.subtitle},get children(){var S=Bc();return y(S,()=>p.subtitle==="Root"?"root":p.subtitle),S}}),null),y(P,b(G,{get when(){return r(p,t())},get children(){var S=Yc();return ne(()=>S.innerHTML=a(r(p,t()),t())),S}}),null),v})()})}}),null),ne(()=>re(w,"placeholder",e.placeholder||"Search...")),ne(()=>w.value=t()),c})()}Pe(["input","keydown","click"]);const Hc=()=>{if(typeof navigator>"u")return!1;const e=navigator.userAgentData?.platform??navigator.platform??"";return/mac/i.test(e)||/mac/i.test(navigator.userAgent)},di=Hc(),Ct=di?"Cmd":"Ctrl",De={FILE_SYSTEM:"althread-file-system",FILE_CONTENT_PREFIX:"althread-file-content-",EDITOR_THEME:"althread-editor-theme"},tt=e=>{localStorage.setItem(De.FILE_SYSTEM,JSON.stringify(e))},Zc=()=>{const e=localStorage.getItem(De.FILE_SYSTEM),t=n=>n.map(i=>({...i,id:i.id||crypto.randomUUID(),children:i.children?t(i.children):void 0}));if(e)try{const n=JSON.parse(e);if(Array.isArray(n))return t(n)}catch(n){console.warn("Invalid file system in localStorage, resetting:",n)}return t([{name:"main.alt",type:"file"}])},Be=(e,t)=>{localStorage.setItem(De.FILE_CONTENT_PREFIX+e,t)},ot=e=>{const t=localStorage.getItem(De.FILE_CONTENT_PREFIX+e);if(t!==null)return t;if(e==="main.alt"){const n=`// Althread program

main {
    // write your code here
}
`;return localStorage.setItem(De.FILE_CONTENT_PREFIX+"main.alt",n),n}return`// New file
`},Kc=e=>{switch(e.split(".").pop()?.toLowerCase()){case"js":case"jsx":return`// JavaScript file
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
`}},Jc=e=>{localStorage.setItem(De.EDITOR_THEME,e)},ed=()=>{const e=localStorage.getItem(De.EDITOR_THEME);return e==="light"||e==="dark"?e:window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"},td=[{fileName:"coffee_machine.alt",title:"Coffee Machine",description:"Example program: Coffee Machine",tags:["example","shared","concurrency","programs","loops","conditionals","synchronization","math"],content:`shared {
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
}`}],nd=new Set(["ltl","tp1","tp2","tp3"]),id=e=>e.split(/[-_\s]+/).filter(Boolean).map((t,n)=>{const i=t.toLowerCase();return nd.has(i)?i.toUpperCase():n===0?i.charAt(0).toUpperCase()+i.slice(1):i}).join(" "),rd=(e,t)=>{if(e&&!e.startsWith("Example program:"))return e;const n=[];for(const i of t.split(`
`)){const r=i.trim().match(/^\/\/\s?(.*)$/);if(!r)break;const o=r[1].replace(/^Example\s+\d+\s*:\s*/i,"").trim();o&&n.push(o)}return n.join(" — ")};function od(e){const t=oe(()=>td.map(n=>({id:n.fileName,title:id(n.title),subtitle:n.fileName,description:rd(n.description,n.content),icon:"file-code",content:n.content,tags:n.tags,onClick:()=>{e.onLoadExample(n.content,n.fileName)}})));return b(Ar,{placeholder:"Search examples by name, description, or content...",get items(){return t()},searchFields:["title","subtitle","description","content","tags"],emptyMessage:"No examples available",noResultsMessage:"No examples match your search",showAllByDefault:!0})}var ad=z('<div class=help-links><div class=help-link><div><div class=help-link-title>Intelligent Althread editor</div><div class=help-link-desc>Ctrl+Space: completion · F12 or Ctrl/Cmd+click: definition · Shift+F12: references · F2: rename. Hover a symbol for its type; function signatures appear while typing arguments.</div></div></div><button type=button class=help-link><i class="codicon codicon-file-code"></i><div><div class=help-link-title>Browse Examples</div><div class=help-link-desc>Explore sample programs and code examples</div></div></button><button type=button class=help-link><i class="codicon codicon-book"></i><div><div class=help-link-title>Tutorials</div><div class=help-link-desc>Step-by-step guides</div></div></button><button type=button class=help-link><i class="codicon codicon-repo"></i><div><div class=help-link-title>Documentation</div><div class=help-link-desc>Complete reference</div></div></button><button type=button class=help-link><i class="codicon codicon-issue-opened"></i><div><div class=help-link-title>Report Issue</div><div class=help-link-desc>Found a bug?'),ld=z('<div class=example-search-container><div class=example-search-header><button type=button class=back-button><i class="codicon codicon-arrow-left"></i>Back to Help</button></div><div class=example-search-content>'),sd=z("<div class=help-view><div class=help-view-header><h3>Help & Resources</h3></div><div class=help-view-content>");function cd(e){const t=hr(),[n,i]=U(!1);return(()=>{var r=sd(),o=r.firstChild,a=o.nextSibling;return y(a,b(G,{get when(){return!n()},get children(){var l=ad(),s=l.firstChild,c=s.nextSibling,f=c.nextSibling,d=f.nextSibling,h=d.nextSibling;return c.$$click=()=>i(!0),f.$$click=()=>t("/tutorials"),d.$$click=()=>window.open("https://althread.github.io/en/docs/guide/intro/","_blank"),h.$$click=()=>window.open("https://github.com/althread/althread/issues/new?template=🐞-bug-report.md","_blank"),l}}),null),y(a,b(G,{get when(){return n()},get children(){var l=ld(),s=l.firstChild,c=s.firstChild,f=s.nextSibling;return c.$$click=()=>i(!1),y(f,b(od,{onLoadExample:(d,h)=>{e.onLoadExample?.(d,h)}})),l}}),null),r})()}Pe(["click"]);let B,ve=0,Lt=null;function ln(){return(Lt===null||Lt.byteLength===0)&&(Lt=new Uint8Array(B.memory.buffer)),Lt}const sn=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},dd=typeof sn.encodeInto=="function"?function(e,t){return sn.encodeInto(e,t)}:function(e,t){const n=sn.encode(e);return t.set(n),{read:e.length,written:n.length}};function $e(e,t,n){if(n===void 0){const l=sn.encode(e),s=t(l.length,1)>>>0;return ln().subarray(s,s+l.length).set(l),ve=l.length,s}let i=e.length,r=t(i,1)>>>0;const o=ln();let a=0;for(;a<i;a++){const l=e.charCodeAt(a);if(l>127)break;o[r+a]=l}if(a!==i){a!==0&&(e=e.slice(a)),r=n(r,i,i=a+e.length*3,1)>>>0;const l=ln().subarray(r+a,r+i),s=dd(e,l);a+=s.written,r=n(r,i,a,1)>>>0}return ve=a,r}let bt=null;function Xe(){return(bt===null||bt.buffer.detached===!0||bt.buffer.detached===void 0&&bt.buffer!==B.memory.buffer)&&(bt=new DataView(B.memory.buffer)),bt}function Nt(e){const t=B.__externref_table_alloc();return B.__wbindgen_export_4.set(t,e),t}function pt(e,t){try{return e.apply(this,t)}catch(n){const i=Nt(n);B.__wbindgen_exn_store(i)}}const Dr=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&Dr.decode();function dt(e,t){return e=e>>>0,Dr.decode(ln().subarray(e,e+t))}function Ke(e){return e==null}function Yn(e){const t=typeof e;if(t=="number"||t=="boolean"||e==null)return`${e}`;if(t=="string")return`"${e}"`;if(t=="symbol"){const r=e.description;return r==null?"Symbol":`Symbol(${r})`}if(t=="function"){const r=e.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(e)){const r=e.length;let o="[";r>0&&(o+=Yn(e[0]));for(let a=1;a<r;a++)o+=", "+Yn(e[a]);return o+="]",o}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let i;if(n&&n.length>1)i=n[1];else return toString.call(e);if(i=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:i}function Qr(){B.initialize()}function Ie(e){const t=B.__wbindgen_export_4.get(e);return B.__externref_table_dealloc(e),t}function ud(e,t,n){let i,r;try{const l=$e(e,B.__wbindgen_malloc,B.__wbindgen_realloc),s=ve,c=$e(t,B.__wbindgen_malloc,B.__wbindgen_realloc),f=ve,d=B.compile(l,s,c,f,n);var o=d[0],a=d[1];if(d[3])throw o=0,a=0,Ie(d[2]);return i=o,r=a,dt(o,a)}finally{B.__wbindgen_free(i,r,1)}}function fd(e,t,n){const i=$e(e,B.__wbindgen_malloc,B.__wbindgen_realloc),r=ve,o=$e(t,B.__wbindgen_malloc,B.__wbindgen_realloc),a=ve,l=B.run(i,r,o,a,n);if(l[2])throw Ie(l[1]);return Ie(l[0])}function gd(e,t,n,i){const r=$e(e,B.__wbindgen_malloc,B.__wbindgen_realloc),o=ve,a=$e(t,B.__wbindgen_malloc,B.__wbindgen_realloc),l=ve,s=B.check(r,o,a,l,n,Ke(i)?4294967297:i>>>0);if(s[2])throw Ie(s[1]);return Ie(s[0])}function hd(e,t){let n,i;try{const r=$e(e,B.__wbindgen_malloc,B.__wbindgen_realloc),o=ve,a=$e(t,B.__wbindgen_malloc,B.__wbindgen_realloc),l=ve,s=B.create_alt_toml(r,o,a,l);return n=s[0],i=s[1],dt(s[0],s[1])}finally{B.__wbindgen_free(n,i,1)}}function md(e,t,n){let i,r;try{const l=$e(e,B.__wbindgen_malloc,B.__wbindgen_realloc),s=ve,c=$e(t,B.__wbindgen_malloc,B.__wbindgen_realloc),f=ve,d=$e(n,B.__wbindgen_malloc,B.__wbindgen_realloc),h=ve,m=B.add_dependency_to_toml(l,s,c,f,d,h);var o=m[0],a=m[1];if(m[3])throw o=0,a=0,Ie(m[2]);return i=o,r=a,dt(o,a)}finally{B.__wbindgen_free(i,r,1)}}function pd(e){const t=$e(e,B.__wbindgen_malloc,B.__wbindgen_realloc),n=ve,i=B.parse_dependencies_from_toml(t,n);if(i[2])throw Ie(i[1]);return Ie(i[0])}function bd(e){const t=$e(e,B.__wbindgen_malloc,B.__wbindgen_realloc),n=ve;return B.validate_package_name(t,n)!==0}function qn(e,t,n){const i=$e(e,B.__wbindgen_malloc,B.__wbindgen_realloc),r=ve,o=$e(t,B.__wbindgen_malloc,B.__wbindgen_realloc),a=ve,l=B.start_interactive_session(i,r,o,a,n);if(l[2])throw Ie(l[1]);return Ie(l[0])}function yd(e,t,n,i){const r=$e(e,B.__wbindgen_malloc,B.__wbindgen_realloc),o=ve,a=$e(t,B.__wbindgen_malloc,B.__wbindgen_realloc),l=ve,s=B.get_next_interactive_states(r,o,a,l,n,i);if(s[2])throw Ie(s[1]);return Ie(s[0])}function Ir(e,t,n,i,r){const o=$e(e,B.__wbindgen_malloc,B.__wbindgen_realloc),a=ve,l=$e(t,B.__wbindgen_malloc,B.__wbindgen_realloc),s=ve,c=B.execute_interactive_step(o,a,l,s,n,i,r);if(c[2])throw Ie(c[1]);return Ie(c[0])}async function vd(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(i){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function Fr(){const e={};return e.wbg={},e.wbg.__wbg_String_8f0eb39a4a4c2f66=function(t,n){const i=String(n),r=$e(i,B.__wbindgen_malloc,B.__wbindgen_realloc),o=ve;Xe().setInt32(t+4*1,o,!0),Xe().setInt32(t+4*0,r,!0)},e.wbg.__wbg_buffer_609cc3eee51ed158=function(t){return t.buffer},e.wbg.__wbg_call_672a4d21634d4a24=function(){return pt(function(t,n){return t.call(n)},arguments)},e.wbg.__wbg_call_7cccdd69e0791ae2=function(){return pt(function(t,n,i){return t.call(n,i)},arguments)},e.wbg.__wbg_crypto_ed58b8e10a292839=function(t){return t.crypto},e.wbg.__wbg_done_769e5ede4b31c67b=function(t){return t.done},e.wbg.__wbg_entries_3265d4158b33e5dc=function(t){return Object.entries(t)},e.wbg.__wbg_error_7534b8e9a36f1ab4=function(t,n){let i,r;try{i=t,r=n,console.error(dt(t,n))}finally{B.__wbindgen_free(i,r,1)}},e.wbg.__wbg_getRandomValues_bcb4912f16000dc4=function(){return pt(function(t,n){t.getRandomValues(n)},arguments)},e.wbg.__wbg_get_67b2ba62fc30de12=function(){return pt(function(t,n){return Reflect.get(t,n)},arguments)},e.wbg.__wbg_get_b9b93047fe3cf45b=function(t,n){return t[n>>>0]},e.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc=function(t){let n;try{n=t instanceof ArrayBuffer}catch{n=!1}return n},e.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9=function(t){let n;try{n=t instanceof Uint8Array}catch{n=!1}return n},e.wbg.__wbg_isArray_a1eab7e0d067391b=function(t){return Array.isArray(t)},e.wbg.__wbg_isSafeInteger_343e2beeeece1bb0=function(t){return Number.isSafeInteger(t)},e.wbg.__wbg_iterator_9a24c88df860dc65=function(){return Symbol.iterator},e.wbg.__wbg_length_a446193dc22c12f8=function(t){return t.length},e.wbg.__wbg_length_e2d2a49132c1b256=function(t){return t.length},e.wbg.__wbg_msCrypto_0a36e2ec3a343d26=function(t){return t.msCrypto},e.wbg.__wbg_new_405e22f390576ce2=function(){return new Object},e.wbg.__wbg_new_5e0be73521bc8c17=function(){return new Map},e.wbg.__wbg_new_78feb108b6472713=function(){return new Array},e.wbg.__wbg_new_8a6f238a6ece86ea=function(){return new Error},e.wbg.__wbg_new_a12002a7f91c75be=function(t){return new Uint8Array(t)},e.wbg.__wbg_newnoargs_105ed471475aaf50=function(t,n){return new Function(dt(t,n))},e.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a=function(t,n,i){return new Uint8Array(t,n>>>0,i>>>0)},e.wbg.__wbg_newwithlength_a381634e90c276d4=function(t){return new Uint8Array(t>>>0)},e.wbg.__wbg_next_25feadfc0913fea9=function(t){return t.next},e.wbg.__wbg_next_6574e1a8a62d1055=function(){return pt(function(t){return t.next()},arguments)},e.wbg.__wbg_node_02999533c4ea02e3=function(t){return t.node},e.wbg.__wbg_process_5c1d670bc53614b8=function(t){return t.process},e.wbg.__wbg_randomFillSync_ab2cfe79ebbf2740=function(){return pt(function(t,n){t.randomFillSync(n)},arguments)},e.wbg.__wbg_require_79b1e9274cde3c87=function(){return pt(function(){return module.require},arguments)},e.wbg.__wbg_set_37837023f3d740e8=function(t,n,i){t[n>>>0]=i},e.wbg.__wbg_set_3f1d0b984ed272ed=function(t,n,i){t[n]=i},e.wbg.__wbg_set_65595bdd868b3009=function(t,n,i){t.set(n,i>>>0)},e.wbg.__wbg_set_8fc6bf8a5b1071d1=function(t,n,i){return t.set(n,i)},e.wbg.__wbg_stack_0ed75d68575b0f3c=function(t,n){const i=n.stack,r=$e(i,B.__wbindgen_malloc,B.__wbindgen_realloc),o=ve;Xe().setInt32(t+4*1,o,!0),Xe().setInt32(t+4*0,r,!0)},e.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07=function(){const t=typeof global>"u"?null:global;return Ke(t)?0:Nt(t)},e.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0=function(){const t=typeof globalThis>"u"?null:globalThis;return Ke(t)?0:Nt(t)},e.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819=function(){const t=typeof self>"u"?null:self;return Ke(t)?0:Nt(t)},e.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40=function(){const t=typeof window>"u"?null:window;return Ke(t)?0:Nt(t)},e.wbg.__wbg_subarray_aa9065fa9dc5df96=function(t,n,i){return t.subarray(n>>>0,i>>>0)},e.wbg.__wbg_value_cd1ffa7b1ab794f1=function(t){return t.value},e.wbg.__wbg_versions_c71aa1626a93e0a1=function(t){return t.versions},e.wbg.__wbindgen_as_number=function(t){return+t},e.wbg.__wbindgen_bigint_from_i64=function(t){return t},e.wbg.__wbindgen_bigint_from_u64=function(t){return BigInt.asUintN(64,t)},e.wbg.__wbindgen_bigint_get_as_i64=function(t,n){const i=n,r=typeof i=="bigint"?i:void 0;Xe().setBigInt64(t+8*1,Ke(r)?BigInt(0):r,!0),Xe().setInt32(t+4*0,!Ke(r),!0)},e.wbg.__wbindgen_boolean_get=function(t){const n=t;return typeof n=="boolean"?n?1:0:2},e.wbg.__wbindgen_debug_string=function(t,n){const i=Yn(n),r=$e(i,B.__wbindgen_malloc,B.__wbindgen_realloc),o=ve;Xe().setInt32(t+4*1,o,!0),Xe().setInt32(t+4*0,r,!0)},e.wbg.__wbindgen_error_new=function(t,n){return new Error(dt(t,n))},e.wbg.__wbindgen_init_externref_table=function(){const t=B.__wbindgen_export_4,n=t.grow(4);t.set(0,void 0),t.set(n+0,void 0),t.set(n+1,null),t.set(n+2,!0),t.set(n+3,!1)},e.wbg.__wbindgen_is_bigint=function(t){return typeof t=="bigint"},e.wbg.__wbindgen_is_function=function(t){return typeof t=="function"},e.wbg.__wbindgen_is_object=function(t){const n=t;return typeof n=="object"&&n!==null},e.wbg.__wbindgen_is_string=function(t){return typeof t=="string"},e.wbg.__wbindgen_is_undefined=function(t){return t===void 0},e.wbg.__wbindgen_jsval_eq=function(t,n){return t===n},e.wbg.__wbindgen_jsval_loose_eq=function(t,n){return t==n},e.wbg.__wbindgen_memory=function(){return B.memory},e.wbg.__wbindgen_number_get=function(t,n){const i=n,r=typeof i=="number"?i:void 0;Xe().setFloat64(t+8*1,Ke(r)?0:r,!0),Xe().setInt32(t+4*0,!Ke(r),!0)},e.wbg.__wbindgen_number_new=function(t){return t},e.wbg.__wbindgen_string_get=function(t,n){const i=n,r=typeof i=="string"?i:void 0;var o=Ke(r)?0:$e(r,B.__wbindgen_malloc,B.__wbindgen_realloc),a=ve;Xe().setInt32(t+4*1,a,!0),Xe().setInt32(t+4*0,o,!0)},e.wbg.__wbindgen_string_new=function(t,n){return dt(t,n)},e.wbg.__wbindgen_throw=function(t,n){throw new Error(dt(t,n))},e}function Lr(e,t){return B=e.exports,Sn.__wbindgen_wasm_module=t,bt=null,Lt=null,B.__wbindgen_start(),B}function Od(e){if(B!==void 0)return B;typeof e<"u"&&(Object.getPrototypeOf(e)===Object.prototype?{module:e}=e:console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const t=Fr();e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e));const n=new WebAssembly.Instance(e,t);return Lr(n,e)}async function Sn(e){if(B!==void 0)return B;typeof e<"u"&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof e>"u"&&(e=new URL("/dev/editor/assets/althread_web_bg-CvxhlIGW.wasm",import.meta.url));const t=Fr();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:i}=await vd(await e,t);return Lr(n,i)}const wd=Object.freeze(Object.defineProperty({__proto__:null,add_dependency_to_toml:md,check:gd,compile:ud,create_alt_toml:hd,default:Sn,execute_interactive_step:Ir,get_next_interactive_states:yd,initSync:Od,initialize:Qr,parse_dependencies_from_toml:pd,run:fd,start_interactive_session:qn,validate_package_name:bd},Symbol.toStringTag,{value:"Module"})),yt=(e,t)=>{for(const n of e){if(n.id===t)return n;if(n.children){const i=yt(n.children,t);if(i)return i}}return null},He=(e,t,n="")=>{for(const i of e){const r=n?`${n}/${i.name}`:i.name;if(i.id===t)return r;if(i.children){const o=He(i.children,t,r);if(o)return o}}return null},Ze=(e,t)=>{for(const n of e){if(n.name===t&&n.type==="file")return n;if(n.type==="directory"&&n.children){const i=t.split("/");if(i[0]===n.name&&i.length>1){const r=i.slice(1).join("/"),o=Ze(n.children,r);if(o)return o}}}return null},Mi=(e,t)=>{if(t==="")return e;const n=t.split("/").filter(r=>r!=="");let i=e;for(const r of n){const o=i.find(a=>a.name===r&&a.type==="directory");if(!o||!o.children)return null;i=o.children}return i},st=(e,t)=>{const n=t.split("/").filter(l=>l!=="");if(n.length===0)return null;let i=e;for(let l=0;l<n.length-1;l++){const s=n[l],c=i.find(f=>f.name===s&&f.type==="directory");if(!c||!c.children)return null;i=c.children}const r=n[n.length-1],o=i.findIndex(l=>l.name===r);return o===-1?null:{entry:i[o],parent:i,index:o}},cn=e=>{const t=[];return e.type==="file"?t.push(e.id):e.type==="directory"&&e.children&&e.children.forEach(n=>{t.push(...cn(n))}),t};function Ui(e){const t={};function n(i,r=""){const o=r?`${r}/${i.name}`:i.name;if(i.type==="file"){const a=ot(o);t[o]=a}else if(i.type==="directory"&&i.children)for(const a of i.children)n(a,o)}for(const i of e)n(i);return t}function _d(e,t){return Object.hasOwn(e,t)?(console.log(`File found in virtual FS: ${t}`),e[t]):""}const en=async()=>(await Sn(),wd),Dn="althread-package-cache",$d="althread-package-metadata";class Sd{packageCache=new Map;fileSystem;setFileSystem;constructor(t,n){this.fileSystem=t,this.setFileSystem=n,this.loadPackageCache()}loadPackageCache(){try{const t=localStorage.getItem(Dn);if(t){const n=JSON.parse(t);this.packageCache=new Map(Object.entries(n))}}catch(t){console.error("Failed to load package cache:",t)}}savePackageCache(){try{const t=Object.fromEntries(this.packageCache.entries());localStorage.setItem(Dn,JSON.stringify(t))}catch(t){console.error("Failed to save package cache:",t)}}async initializeProject(t,n="0.1.0"){const r=(await en()).create_alt_toml(t,n);if(Ze(this.fileSystem,"alt.toml")){Be("alt.toml",r);return}const a={id:crypto.randomUUID(),name:"alt.toml",type:"file"},l=[...this.fileSystem,a];this.fileSystem=l,this.setFileSystem(l),Be("alt.toml",r),console.log("✓ Project initialized with alt.toml")}async parseAltToml(){if(console.log("🔍 Parsing alt.toml..."),console.log("Current file system:",this.fileSystem.map(i=>i.name)),!Ze(this.fileSystem,"alt.toml"))return console.log("❌ No alt.toml file found in file system"),null;console.log("✓ Found alt.toml file");const n=ot("alt.toml");if(!n)return console.log("❌ No content loaded from alt.toml"),null;console.log("✓ Loaded alt.toml content:",n.substring(0,100)+"...");try{const r=(await en()).parse_dependencies_from_toml(n);let o={};r instanceof Map?o=Object.fromEntries(r.entries()):typeof r=="object"&&r!==null&&(o=r),console.log("✓ Parsed dependencies:",o);const a=n.match(/\[package\]\s*name\s*=\s*"([^"]+)"\s*version\s*=\s*"([^"]+)"/s);if(!a)throw console.log("❌ Invalid alt.toml format - no package section found"),new Error("Invalid alt.toml format");return console.log("✓ Successfully parsed alt.toml"),{package:{name:a[1],version:a[2]},dependencies:o||{}}}catch(i){return console.error("❌ Failed to parse alt.toml:",i),null}}async addDependency(t,n){if(console.log(`📦 Adding dependency: ${t}@${n}`),!Ze(this.fileSystem,"alt.toml"))return console.error("❌ No alt.toml file found"),!1;try{const r=ot("alt.toml");console.log("📄 Current alt.toml content:",r);const o=await en();let a;try{a=o.add_dependency_to_toml(r,t,n)}catch(l){throw console.error("❌ WASM function failed:",l),new Error(`Failed to update alt.toml: ${l}`)}return console.log("📄 Updated alt.toml content:",a),Be("alt.toml",a),console.log("✅ Dependency added successfully"),!0}catch(r){throw console.error("❌ Failed to add dependency:",r),r}}async installDependencies(){const t=await this.parseAltToml();if(!t)throw new Error("No alt.toml file found or invalid format");const n=Object.entries(t.dependencies).map(([i,r])=>this.installPackage(i,r));await Promise.all(n)}async installPackage(t,n){const i=`${t}`;if(this.packageCache.has(i)){console.log(`Using cached package: ${t}`),await this.loadPackageIntoFileSystem(t,this.packageCache.get(i));return}console.log(`Installing package: ${t}@${n}`);const r=await this.fetchRemotePackage(t,n);if(r)this.packageCache.set(i,r),this.savePackageCache(),await this.loadPackageIntoFileSystem(t,r),console.log(`✓ Successfully installed: ${t}`);else throw new Error(`Failed to install package: ${t}`)}async fetchRemotePackage(t,n){console.log("🚀 fetchRemotePackage called with:",t,n);try{const i=t.replace("github.com/","").split("/");if(console.log("🔍 Debug info:"),console.log("  packageName:",t),console.log("  parts:",i),console.log("  parts.length:",i.length),!t.startsWith("github.com/"))throw new Error("Only GitHub packages are supported currently");const[r,o]=i;if(console.log("  user:",r),console.log("  repo:",o),console.log("  user empty?",!r),console.log("  repo empty?",!o),!r||!o)throw new Error(`Invalid GitHub package format - user: "${r}", repo: "${o}"`);if(console.log(`Fetching package: ${t} (${r}/${o})`),t==="github.com/althread/test-package")return this.createMockPackage(t,n);const a={};return await this.fetchDirectoryContents(r,o,"",a),Object.keys(a).length===0&&(console.warn(`No .alt files found in ${t}, creating minimal package`),a["README.md"]=`# ${t}

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
`}}}async fetchDirectoryContents(t,n,i,r){const o=`https://api.github.com/repos/${t}/${n}/contents/${i}`;console.log(`Fetching directory: ${o}`);try{const a=await fetch(o);if(!a.ok){console.warn(`Failed to fetch directory ${i}: ${a.statusText}`);return}const l=await a.json();if(!Array.isArray(l)){console.warn(`Expected array but got ${typeof l} for ${i}`);return}for(const s of l)if(s.type==="file"&&(s.name.endsWith(".alt")||s.name==="alt.toml")){console.log(`Fetching file: ${s.name}`);try{const c=await fetch(s.download_url);if(c.ok){const f=await c.text(),d=i?`${i}/${s.name}`:s.name;r[d]=f,console.log(`✓ Fetched file: ${d}`)}}catch(c){console.warn(`Failed to fetch file ${s.name}:`,c)}}else if(s.type==="dir"){const c=i?`${i}/${s.name}`:s.name;await this.fetchDirectoryContents(t,n,c,r)}}catch(a){console.error(`Error fetching directory ${i}:`,a)}}async loadPackageIntoFileSystem(t,n){if(!n.files){console.warn(`No files found in package: ${t}`);return}console.log(`Loading package into file system: ${t}`);let i=this.fileSystem.find(a=>a.name==="deps"&&a.type==="directory");i||(i={id:crypto.randomUUID(),name:"deps",type:"directory",children:[]},this.fileSystem.push(i));const r=t.replace(/[^a-zA-Z0-9]/g,"_");let o=i.children?.find(a=>a.name===r);o||(o={id:crypto.randomUUID(),name:r,type:"directory",children:[]},i.children=i.children||[],i.children.push(o)),o.children=[];for(const[a,l]of Object.entries(n.files)){const s=a.split("/");let c=o;for(let m=0;m<s.length-1;m++){const $=s[m];let w=c.children?.find(A=>A.name===$&&A.type==="directory");w||(w={id:crypto.randomUUID(),name:$,type:"directory",children:[]},c.children=c.children||[],c.children.push(w)),c=w}const f=s[s.length-1],d={id:crypto.randomUUID(),name:f,type:"file"};c.children=c.children||[],c.children.push(d);const h=`deps/${r}/${a}`;Be(h,l),console.log(`✓ Added file: ${h}`)}this.fileSystem=[...this.fileSystem],this.setFileSystem(this.fileSystem),console.log(`✓ Package loaded: ${t} (${Object.keys(n.files).length} files)`)}getCachedPackages(){return Array.from(this.packageCache.values())}clearCache(){this.packageCache.clear(),localStorage.removeItem(Dn),localStorage.removeItem($d)}async removePackage(t){const n=Array.from(this.packageCache.keys()).filter(o=>o.startsWith(t));for(const o of n)this.packageCache.delete(o);this.savePackageCache();const i=this.fileSystem.find(o=>o.name==="deps"&&o.type==="directory");if(i&&i.children){const o=t.replace(/[^a-zA-Z0-9]/g,"_");i.children=i.children.filter(a=>a.name!==o),this.setFileSystem([...this.fileSystem])}const r=await this.parseAltToml();if(r&&r.dependencies[t]){delete r.dependencies[t];const o=this.generateAltTomlContent(r);Be("alt.toml",o)}}generateAltTomlContent(t){let n=`[package]
`;n+=`name = "${t.package.name}"
`,n+=`version = "${t.package.version}"

`,n+=`[dependencies]
`;for(const[i,r]of Object.entries(t.dependencies))n+=`"${i}" = "${r}"
`;if(n+=`
[dev-dependencies]
`,t["dev-dependencies"])for(const[i,r]of Object.entries(t["dev-dependencies"]))n+=`"${i}" = "${r}"
`;return n}async validatePackageName(t){try{return(await en()).validate_package_name(t)}catch(n){return console.error("Failed to validate package name:",n),!1}}}var xd=z('<button type=button title="Install all dependencies"class=header-action-btn><i class="codicon codicon-cloud-download"></i><span>Install All'),Cd=z('<div class=loading-spinner><i class="codicon codicon-loading codicon-modifier-spin"></i>Loading...'),Pd=z('<div class=error-message><i class="codicon codicon-error"></i><span></span><button type=button class=close-msg>×'),Ed=z('<div class=success-message><i class="codicon codicon-check"></i><span></span><button type=button class=close-msg>×'),kd=z('<div class=init-project-section><div class=section-icon><i class="codicon codicon-rocket"></i></div><h4>Initialize Project</h4><p>Create an alt.toml file to manage dependencies</p><div class=form-group><label for=init-project-name>Project Name:</label><input id=init-project-name type=text placeholder="e.g., my-project"></div><div class=form-group><label for=init-project-version>Version:</label><input id=init-project-version type=text placeholder=0.1.0></div><div class=dependency-form-actions><span></span><button type=button class="btn btn-add-dependency"><i class="codicon codicon-rocket"></i>Initialize Project'),zd=z('<div class=project-info><div class=project-header><div class=project-icon><i class="codicon codicon-package"></i></div><div class=project-details><div class=project-name></div><div class=project-version>v'),Rd=z('<div class=add-dependency-section><div class=section-header><div class=section-icon><i class="codicon codicon-extensions"></i></div><h4>Add Dependency</h4></div><div class=add-dependency-form><div class=form-group><input type=text placeholder="Package name (e.g., github.com/user/repo)"></div><div class=form-group><input type=text placeholder="Version (e.g., latest, 1.0.0)"></div><div class=dependency-form-actions><button type=button class="btn btn-add-dependency"><i class="codicon codicon-plus"></i>Add Dependency'),Td=z('<div class=dependencies-install-hint><i class="codicon codicon-info"></i><span>Click "Install All" in the header to download and install all dependencies.'),Ad=z("<div class=dependency-list>"),Dd=z('<div class=empty-state><i class="codicon codicon-package"></i><p>No dependencies yet</p><span>Add dependencies above to get started'),Qd=z('<div class=dependencies-section><div class=dependencies-section-header><div class=section-header><div class=section-icon><i class="codicon codicon-package"></i></div><h4>Dependencies (<!>)'),Id=z('<div class=cache-section><div class=section-header><div class=section-icon><i class="codicon codicon-database"></i></div><h4>Package Cache (<!>)</h4></div><div class=cached-packages>'),Fd=z('<div class=package-manager-view><div class=package-manager-header><h3>Packages</h3><div class=package-manager-actions><button type=button title="Refresh packages"class=header-action-btn><i class="codicon codicon-refresh"></i><span>Update</span></button></div></div><div class=package-manager-content>'),Ld=z('<div class=dependency-item><a class=package-link target=_blank rel="noopener noreferrer"><div class=dependency-icon><i class="codicon codicon-package"></i></div><div class=dependency-info><div class=dependency-name></div><div class=dependency-version></div></div></a><button type=button class="btn btn-danger btn-sm btn-remove"title="Remove dependency"><i class="codicon codicon-close">'),Nd=z('<a class="cached-package package-link"target=_blank rel="noopener noreferrer"><div class=package-icon><i class="codicon codicon-package"></i></div><div class=package-info><div class=package-name></div><div class=package-version></div></div><span class=package-type>');function Md(e){const[t,n]=U(null),[i,r]=U(null),[o,a]=U([]),[l,s]=U(!1),[c,f]=U(null),[d,h]=U(null),[m,$]=U(""),[w,A]=U("latest"),[p,v]=U(""),[P,k]=U("0.1.0");Et(()=>{const R=new Sd(e.fileSystem,e.setFileSystem);n(R),S()});const S=async()=>{const R=t();if(R)try{s(!0);const V=await R.parseAltToml();r(V),V&&(v(V.package.name),k(V.package.version)),a(R.getCachedPackages())}catch(V){f(V instanceof Error?V.message:"Failed to load package state")}finally{s(!1)}},F=async()=>{const R=t();if(R)try{if(s(!0),f(null),!p().trim()){f("Project name is required");return}if(!await R.validatePackageName(p())){f("Invalid project name format");return}await R.initializeProject(p(),P()),h("Project initialized successfully!"),await S()}catch(V){f(V instanceof Error?V.message:"Failed to initialize project")}finally{s(!1)}},T=async()=>{const R=t();if(R)try{if(s(!0),f(null),!m().trim()){f("Package name is required");return}if(!await R.validatePackageName(m())){f("Invalid package name format");return}await R.addDependency(m(),w())?(h(`Added dependency: ${m()}@${w()}`),$(""),A("latest"),await S()):f("Failed to add dependency")}catch(V){f(V instanceof Error?V.message:"Failed to add dependency")}finally{s(!1)}},I=async()=>{const R=t();if(R)try{s(!0),f(null),await R.installDependencies(),h("Dependencies installed successfully!"),await S()}catch(V){f(V instanceof Error?V.message:"Failed to install dependencies")}finally{s(!1)}},_=async R=>{const V=t();if(V)try{s(!0),f(null),await V.removePackage(R),h(`Removed package: ${R}`),await S()}catch(u){f(u instanceof Error?u.message:"Failed to remove package")}finally{s(!1)}},C=()=>{f(null),h(null)},Q=R=>/^https?:\/\//.test(R)?R:R.startsWith("github.com/")?`https://${R}`:`https://github.com/${R}`;return(()=>{var R=Fd(),V=R.firstChild,u=V.firstChild,g=u.nextSibling,O=g.firstChild,E=V.nextSibling;return O.$$click=S,y(g,b(G,{get when(){return i()},get children(){var x=xd();return x.$$click=I,ne(()=>x.disabled=l()||Object.keys(i()?.dependencies||{}).length===0),x}}),null),y(E,b(G,{get when(){return l()},get children(){return Cd()}}),null),y(E,b(G,{get when(){return c()},get children(){var x=Pd(),L=x.firstChild,X=L.nextSibling,D=X.nextSibling;return y(X,c),D.$$click=C,x}}),null),y(E,b(G,{get when(){return d()},get children(){var x=Ed(),L=x.firstChild,X=L.nextSibling,D=X.nextSibling;return y(X,d),D.$$click=C,x}}),null),y(E,b(G,{get when(){return!i()},get children(){var x=kd(),L=x.firstChild,X=L.nextSibling,D=X.nextSibling,M=D.nextSibling,Z=M.firstChild,H=Z.nextSibling,Y=M.nextSibling,J=Y.firstChild,te=J.nextSibling,me=Y.nextSibling,se=me.firstChild,ue=se.nextSibling;return H.$$input=ce=>v(ce.target.value),te.$$input=ce=>k(ce.target.value),ue.$$click=F,ne(()=>ue.disabled=l()),ne(()=>H.value=p()),ne(()=>te.value=P()),x}}),null),y(E,b(G,{get when(){return i()},get children(){return[(()=>{var x=zd(),L=x.firstChild,X=L.firstChild,D=X.nextSibling,M=D.firstChild,Z=M.nextSibling;return Z.firstChild,y(M,()=>i()?.package.name),y(Z,()=>i()?.package.version,null),x})(),(()=>{var x=Rd(),L=x.firstChild,X=L.nextSibling,D=X.firstChild,M=D.firstChild,Z=D.nextSibling,H=Z.firstChild,Y=Z.nextSibling,J=Y.firstChild;return M.$$input=te=>$(te.target.value),H.$$input=te=>A(te.target.value),J.$$click=T,ne(()=>J.disabled=l()),ne(()=>M.value=m()),ne(()=>H.value=w()),x})(),(()=>{var x=Qd(),L=x.firstChild,X=L.firstChild,D=X.firstChild,M=D.nextSibling,Z=M.firstChild,H=Z.nextSibling;return H.nextSibling,y(M,()=>Object.keys(i()?.dependencies||{}).length,H),y(x,b(G,{get when(){return Object.keys(i()?.dependencies||{}).length>0},get children(){return[Td(),(()=>{var Y=Ad();return y(Y,b(_e,{get each(){return Object.entries(i()?.dependencies||{})},children:([J,te])=>(()=>{var me=Ld(),se=me.firstChild,ue=se.firstChild,ce=ue.nextSibling,xe=ce.firstChild,Me=xe.nextSibling,Ue=se.nextSibling;return re(se,"title",`Open ${J} in a new tab`),y(xe,J),y(Me,te),Ue.$$click=Se=>{Se.stopPropagation(),_(J)},ne(Se=>{var je=Q(J),Ve=l();return je!==Se.e&&re(se,"href",Se.e=je),Ve!==Se.t&&(Ue.disabled=Se.t=Ve),Se},{e:void 0,t:void 0}),me})()})),Y})()]}}),null),y(x,b(G,{get when(){return Object.keys(i()?.dependencies||{}).length===0},get children(){return Dd()}}),null),x})(),b(G,{get when(){return o().length>0},get children(){var x=Id(),L=x.firstChild,X=L.firstChild,D=X.nextSibling,M=D.firstChild,Z=M.nextSibling;Z.nextSibling;var H=L.nextSibling;return y(D,()=>o().length,Z),y(H,b(_e,{get each(){return o()},children:Y=>(()=>{var J=Nd(),te=J.firstChild,me=te.nextSibling,se=me.firstChild,ue=se.nextSibling,ce=me.nextSibling;return y(se,()=>Y.name),y(ue,()=>Y.version),y(ce,()=>Y.type),ne(xe=>{var Me=Q(Y.name),Ue=`Open ${Y.name} in a new tab`,Se=Y.type;return Me!==xe.e&&re(J,"href",xe.e=Me),Ue!==xe.t&&re(J,"title",xe.t=Ue),Se!==xe.a&&re(ce,"data-type",xe.a=Se),xe},{e:void 0,t:void 0,a:void 0}),J})()})),x}})]}}),null),ne(()=>O.disabled=l()),R})()}Pe(["click","input"]);var Ud=z("<div class=sidebar-content>"),jd=z('<div><div class=sidebar-tabs><button type=button><i class="codicon codicon-files"></i></button><button type=button><i class="codicon codicon-search"></i></button><button type=button><i class="codicon codicon-package"></i></button><button type=button><i class="codicon codicon-question">');function Vd(e){const[t,n]=U("explorer"),i=()=>e.activeView!==void 0?e.activeView:t(),r=l=>{e.onViewChange?e.onViewChange(l):n(l)},o=l=>{e.isCollapsed&&e.onToggleCollapse?(e.onToggleCollapse(),r(l)):i()===l&&e.onToggleCollapse?e.onToggleCollapse():r(l)};ge(()=>{const l=s=>{if((di?s.metaKey:s.ctrlKey)&&s.shiftKey)switch(s.key.toLowerCase()){case"e":s.preventDefault(),o("explorer");break;case"f":s.preventDefault(),o("search");break;case"p":s.preventDefault(),o("packages");break;case"i":s.preventDefault(),o("help");break}};document.addEventListener("keydown",l),Fe(()=>{document.removeEventListener("keydown",l)})});const a=()=>{const l=[],s=(c,f="")=>{const d=f?`${f}/${c.name}`:c.name;if(c.type==="file"){const h=ot(d);l.push({id:c.id,title:c.name,subtitle:f||"Root",description:`File: ${d}`,content:h,path:d,icon:c.name.endsWith(".alt")?"file-code":"file",onClick:()=>e.onFileSelect(d)})}if(c.children)for(const h of c.children)s(h,d)};for(const c of e.files)s(c);return l};return(()=>{var l=jd(),s=l.firstChild,c=s.firstChild,f=c.nextSibling,d=f.nextSibling,h=d.nextSibling;return c.$$click=()=>o("explorer"),re(c,"title",`File Explorer (${Ct}+Shift+E)`),f.$$click=()=>o("search"),re(f,"title",`Search (${Ct}+Shift+F)`),d.$$click=()=>o("packages"),re(d,"title",`Package Manager (${Ct}+Shift+P)`),h.$$click=()=>o("help"),re(h,"title",`Help & Resources (${Ct}+Shift+I)`),y(l,b(G,{get when(){return!e.isCollapsed},get children(){var m=Ud();return y(m,b(G,{get when(){return i()==="explorer"},get children(){return b(Mc,{get files(){return e.files},get onFileSelect(){return e.onFileSelect},get onNewFile(){return e.onNewFile},get onNewFolder(){return e.onNewFolder},get onMoveEntry(){return e.onMoveEntry},get onRenameEntry(){return e.onRenameEntry},get onDeleteEntry(){return e.onDeleteEntry},get onCopyEntry(){return e.onCopyEntry},get onFileUpload(){return e.onFileUpload},get activeFile(){return e.activeFile},get getFilePath(){return e.getFilePath},get selectedFiles(){return e.selectedFiles},get onSelectionChange(){return e.onSelectionChange},get creationError(){return e.creationError},get setCreationError(){return e.setCreationError},get checkNameConflict(){return e.checkNameConflict},get showConfirmDialog(){return e.showConfirmDialog},get showDeleteConfirmDialog(){return e.showDeleteConfirmDialog},get globalFileCreation(){return e.globalFileCreation},get setGlobalFileCreation(){return e.setGlobalFileCreation}})}}),null),y(m,b(G,{get when(){return i()==="search"},get children(){return b(Ar,{placeholder:"Search files...",get items(){return a()},searchFields:["title","subtitle","description","content","path"],emptyMessage:"No files to search",noResultsMessage:"No files match your search",showAllByDefault:!1})}}),null),y(m,b(G,{get when(){return i()==="packages"},get children(){return b(Md,{get fileSystem(){return e.files},get setFileSystem(){return e.setFileSystem}})}}),null),y(m,b(G,{get when(){return i()==="help"},get children(){return b(cd,{get onLoadExample(){return e.onLoadExample}})}}),null),m}}),null),ne(m=>{var $=`sidebar ${e.isCollapsed?"collapsed":""}`,w=`sidebar-tab ${i()==="explorer"?"active":""}`,A=`sidebar-tab ${i()==="search"?"active":""}`,p=`sidebar-tab ${i()==="packages"?"active":""}`,v=`sidebar-tab ${i()==="help"?"active":""}`;return $!==m.e&&he(l,m.e=$),w!==m.t&&he(c,m.t=w),A!==m.a&&he(f,m.a=A),p!==m.o&&he(d,m.o=p),v!==m.i&&he(h,m.i=v),m},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),l})()}Pe(["click"]);const Wd=e=>{const[t,n]=U([]),[i,r]=U(null);return{openFiles:t,setOpenFiles:n,activeFile:i,setActiveFile:r,handleFileSelect:(c,f)=>{console.log("File selected:",c);const d=Ze(f,c);if(d){t().some($=>$.id===d.id)||n([...t(),d]),r(d);const m=c==="deps"||c.startsWith("deps/");if(e&&e.safeUpdateContent){const $=ot(c);e.safeUpdateContent($),e.setReadOnly&&e.setReadOnly(m),e.updateLanguage?.(c)}}},handleFileTabClick:(c,f)=>{if(r(c),e&&e.safeUpdateContent){const d=He(f,c.id)||c.name,h=ot(d);e.safeUpdateContent(h);const m=d==="deps"||d.startsWith("deps/");e.setReadOnly&&e.setReadOnly(m),e.updateLanguage?.(d)}},handleTabClose:(c,f)=>{const d=t().filter(h=>h.id!==c.id);if(n(d),i()&&i().id===c.id){const h=d.length>0?d[d.length-1]:null;if(r(h),h&&e&&e.safeUpdateContent){const m=He(f,h.id)||h.name,$=ot(m);e.safeUpdateContent($),e.updateLanguage?.(m),e.setReadOnly?.(m==="deps"||m.startsWith("deps/"))}}},createNewFileWithContent:(c,f,d,h)=>{c.includes(".")||(c=c+".alt"),d.handleNewFile(c,void 0,f),h||Be(c,f)}}};function Xd(e,t){if(!e)return{message:"Unknown error"};if(typeof e=="string")return{message:`ERROR:
Message: ${e}`};const n=[];let i,r,o;if(e.pos&&(i=e.pos.file_path||"unknown",r=e.pos.line,o=e.pos.col,n.push(`File: ${i||"unknown"}
Line: ${r}, Col: ${o}`),t&&typeof r=="number"&&r>0)){const l=t.split(`
`)[r-1]||"",s=" ".repeat(r.toString().length);n.push(`${s} |`),n.push(`${r} | ${l}`),n.push(`${s} |${" ".repeat(o||0)}^---`),n.push(`${s} |`)}return e.error_type&&n.push(`Type: ${e.error_type}`),n.push(`Message: ${e.message??String(e)}`),e.stack&&Array.isArray(e.stack)&&e.stack.length>0&&(n.push(`
Stack trace:`),e.stack.forEach(a=>{n.push(`  at ${a.file_path||"unknown"}:${a.line}:${a.col}`)})),{message:`ERROR:
`+n.join(`
`),filePath:i,line:r,col:o}}class Gd{worker=null;nextId=0;pendingRequests=new Map;constructor(){if(typeof window<"u"){this.worker=new Worker(new URL("/dev/editor/assets/althread.worker-rxfGVrTB.js",import.meta.url),{type:"module"}),this.worker.onmessage=n=>{const{id:i,result:r,error:o,rawError:a}=n.data,l=this.pendingRequests.get(i);if(l)if(this.pendingRequests.delete(i),o){const s=a||new Error(o);a&&typeof a=="object"&&Object.assign(s,a),l.reject(s)}else l.resolve(r)};const t=n=>{for(const i of this.pendingRequests.values())i.reject(new Error(n));this.pendingRequests.clear()};this.worker.onerror=n=>{t(n.message||"Execution worker crashed")},this.worker.onmessageerror=()=>{t("Failed to decode message from execution worker")}}}sendRequest(t,n){if(!this.worker)return Promise.reject(new Error("Worker not initialized"));const i=this.nextId++;return new Promise((r,o)=>{this.pendingRequests.set(i,{resolve:r,reject:o}),this.worker.postMessage({type:t,payload:n,id:i})})}async run(t,n,i){return this.sendRequest("run",{source:t,filePath:n,virtualFS:i})}async check(t,n,i,r){return this.sendRequest("check",{source:t,filePath:n,virtualFS:i,maxStates:r})}async compile(t,n,i){return this.sendRequest("compile",{source:t,filePath:n,virtualFS:i})}}const ji=new Gd,Vi=1e4,Wi=1e3,Qt={nodes:[],edges:[]},Qn=e=>typeof e?.message=="string"&&e.message.toLowerCase().includes("deadlock"),xt=(e,t)=>{const n=e.trimEnd();return n.length>0?`${n}

${t}`:t},Te=(e,t)=>`${e.toLocaleString()} ${t}${e===1?"":"s"}`,Xi=e=>{const t=typeof e?.message=="string"?e.message:"",n=e?.pos?.line!==void 0?` (${e.pos.file_path?`${e.pos.file_path}:`:"line "}${e.pos.line})`:"";return t?`${t}${n}`:void 0};function Bd(e){const[t,n]=U("none"),[i,r]=U(null),[o,a]=U(null),[l,s]=U("console"),[c,f]=U(""),[d,h]=U(null),[m,$]=U(""),[w,A]=U(!1),[p,v]=U(null),[P,k]=U([]),[S,F]=U([]),[T,I]=U(Qt),[_,C]=U([]),[Q,R]=U(Qt),[V,u]=U(0),[g,O]=U([]),[E,x]=U([]),[L,X]=U(""),[D,M]=U([]),[Z,H]=U([]),[Y,J]=U([]),[te,me]=U(!1),[se,ue]=U(!1);let ce=null;const[xe,Me]=U(null),Ue=(ee,W="")=>{const q=e.getContext(),ae=ee?.pos?.file_path||W;return Xd(ee,q?_d(q.virtualFS,ae):void 0)},Se=(ee,W)=>{F(ee),C(W),I(Pi(ee,{mode:"run",stepLines:W}))},je=()=>{f(""),h(null),$(""),A(!1),v(null),k([]),Me(null),Se([],[])},Ve=()=>{ce=null,H([]),J([]),me(!1),ue(!1)},gt=(ee,W="")=>{const q=Ue(ee,W);ke(()=>{v(q),$(q.message),A(!0),a({tone:"error",icon:"error",title:"Error",detail:Xi(ee)}),s("execution")})},xn=async()=>{const ee=e.getContext();if(!(!ee||i())){ke(()=>{Ve(),je(),n("run"),r("run"),a({tone:"busy",icon:"loading",title:"Running…"})});try{const W=await ji.run(ee.source,ee.filePath,ee.virtualFS),q=Math.max(0,W.nodes.length-1),ae=W.stdout.join(`
`);ke(()=>{$(W.debug),k(W.message_flow_events),Se(W.nodes,W.step_lines||[]),f(ae),h(W.max_steps_reached?`Maximum number of steps reached (${Wi}). Execution was stopped.`:null);const we=W.runtime_error;if(we&&Qn(we)){const Le=Ue(we,ee.filePath);$(xt(W.debug,Le.message)),f(xt(ae,"Deadlock detected.")),a({tone:"warning",icon:"debug-pause",title:"Deadlock",detail:`All processes are blocked after ${Te(q,"step")}.`}),s("console")}else if(we){const Le=Ue(we,ee.filePath);v(Le),$(W.debug),A(!0),a({tone:"error",icon:"error",title:we.error_type==="InvariantError"?"Invariant violated":"Runtime error",detail:Xi(we)}),s("execution")}else W.max_steps_reached?(a({tone:"warning",icon:"watch",title:"Step limit reached",detail:`Stopped after ${Te(Wi,"step")}. The program may not terminate.`}),s("console")):(a({tone:"success",icon:"pass",title:"Program finished",detail:`${Te(q,"step")} executed (one random interleaving).`}),s("console"))})}catch(W){console.error("Execution error:",W),ke(()=>{je(),gt(W)})}finally{r(null)}}},Bt=async()=>{const ee=e.getContext();if(!(!ee||i())){ke(()=>{Ve(),je(),R(Qt),u(0),O([]),x([]),X(""),M([]),n("check"),r("check"),a({tone:"busy",icon:"loading",title:"Exploring the state space…",detail:`Up to ${Te(Vi,"state")}.`}),s("vm_states")});try{const W=await ji.check(ee.source,ee.filePath,ee.virtualFS,Vi),q=W.state_count??W.nodes.length;ke(()=>{if(u(q),O(W.path),x(W.path_stdout??[]),X(W.path_debug??""),M(W.path_message_flow_events??[]),R(q>Xn||W.nodes.length===0?Qt:Pi(W.nodes,{mode:"check",violationPath:W.violation_path})),W.verdict==="violated"){const ae=Math.max(0,W.path.length-1);a({tone:"error",icon:"error",title:"Property violated",detail:W.exhaustive?`Counterexample of ${Te(ae,"step")} found (${Te(q,"state")} explored).`:`Counterexample of ${Te(ae,"step")} found before the exploration completed (${Te(q,"state")} explored).`}),$(W.exhaustive?"Violation found! See the highlighted path in the state graph.":"Violation found before exploration completed. The counterexample is valid, but the explored graph is partial.")}else W.verdict==="verified"?(a({tone:"success",icon:"pass",title:"All properties hold",detail:`Every reachable state was explored (${Te(q,"state")}).`}),$("Verification complete: No property violations found.")):(a({tone:"warning",icon:"warning",title:"Inconclusive",detail:`The exploration stopped at ${Te(q,"state")} before it could complete.`}),$("Verification inconclusive: The state limit was reached."))})}catch(W){console.error("Check error:",W),gt(W)}finally{r(null)}}},Tt=()=>{const ee=g();if(ee.length===0)return;const W=E(),q=L(),ae=D();ke(()=>{je(),n("run"),Se(ee,ee.slice(1).map(we=>we.metadata.lines??[])),f(W.join(`
`)),k(ae),a({tone:"error",icon:"debug-alt",title:"Counterexample replay",detail:`${Te(ee.length-1,"step")} leading to the violation. Use ← / → to walk through it.`}),$(q||"Counter-example replay loaded from the checker path."),s("vm_states")}),Ee(0)},N=(ee,W)=>{const q=Y().length;if(W){const we=Ue(W,ce?.filePath);f(Le=>xt(Le,"Deadlock detected.")),$(Le=>xt(Le,we.message)),H([]),me(!0),ue(!0),a({tone:"warning",icon:"debug-pause",title:"Deadlock",detail:`All processes are blocked after ${Te(q,"step")}.`});return}const ae=ee??[];H(ae),me(ae.length===0),ue(!1),ae.length===0?($(we=>xt(we,"Program execution completed.")),a({tone:"success",icon:"pass",title:"Program finished",detail:`${Te(q,"step")} executed.`})):a({tone:"neutral",icon:"debug-step-over",title:"Step-by-step execution",detail:`${Te(q,"step")} so far · ${Te(ae.length,"possible next instruction")}.`})},K=()=>{const ee=e.getContext();!ee||i()||ke(()=>{Ve(),je(),n("interactive"),s("step"),ce=ee;try{const W=qn(ee.source,ee.filePath,ee.virtualFS);Se([{vm:W.current_state,metadata:{level:0}}],[]),f(W.output?.length?`${W.output.join(`
`)}
`:""),$("Interactive session started. Choose the next instruction to execute."),N(W.next_states),Ee(0)}catch(W){console.error("Interactive mode error:",W),Qn(W)?N(void 0,W):(Ve(),n("none"),gt(W,ee.filePath))}})},le=ee=>{const W=ce;!W||t()!=="interactive"||ke(()=>{try{const q=Ir(W.source,W.filePath,W.virtualFS,Y(),ee),ae=[...Y(),ee];J(ae),q.output?.length&&f($t=>`${$t}${q.output.join(`
`)}
`),k($t=>[...$t,...q.message_flow_events||[]]);const we=q.executed_step,Le=we?`Executed: ${we.prog_name}#${we.prog_id}
${q.debug||""}`:q.debug||"";$($t=>$t?`${$t}

${Le}`:Le);const ui=S();Se([...ui,{vm:q.new_state,metadata:{level:ui.length,lines:q.lines}}],[..._(),q.lines||[]]),q.deadlock?N(void 0,q.deadlock):N(q.next_states),Ee(S().length-1)}catch(q){console.error("Interactive step error:",q),Qn(q)?N(void 0,q):gt(q,W.filePath)}})},pe=()=>{const ee=ce,W=Y();if(!ee||W.length===0)return;const q=W.slice(0,-1);ke(()=>{Ve(),je(),n("interactive"),ce=ee;try{const ae=qn(ee.source,ee.filePath,ee.virtualFS);Se([{vm:ae.current_state,metadata:{level:0}}],[]),f(ae.output?.length?`${ae.output.join(`
`)}
`:""),N(ae.next_states)}catch(ae){gt(ae,ee.filePath);return}for(const ae of q)le(ae);$(ae=>xt(ae,"Last step undone.")),s("step")})},Oe=()=>{ke(()=>{Ve(),n(S().length>0?"run":"none"),a(null),l()==="step"&&s("console")})},Ee=ee=>{const W=S();if(W.length===0)return;const q=Math.max(0,Math.min(ee,W.length-1));Me({vm:W[q].vm,stepIndex:q,nodeIndex:q})};return{mode:t,busy:i,status:o,activeTab:l,setActiveTab:s,stdout:c,stdoutWarning:d,executionOutput:m,executionError:w,structuredError:p,messageFlow:P,traceNodes:S,traceGraph:T,stepLines:_,checkGraph:Q,checkStateCount:V,counterexample:g,choices:Z,history:Y,interactiveFinished:te,interactiveDeadlock:se,selectedVM:xe,setSelectedVM:Me,run:xn,check:Bt,replayCounterexample:Tt,startInteractive:K,executeStep:le,undoStep:pe,stopInteractive:Oe,selectTraceStep:Ee,reset:()=>{ke(()=>{Ve(),je(),R(Qt),u(0),O([]),x([]),X(""),M([]),n("none"),a(null),s("console")})}}}const Yd=(e,t,n,i,r,o,a,l,s,c,f)=>{const d=(S,F,T)=>{const I={id:crypto.randomUUID(),name:S,type:"file"},_=F||"",C=JSON.parse(JSON.stringify(e())),Q=Mi(C,_);if(!Q){n("Target directory not found.");return}if(Q.find(g=>g.name===S)){n("A file or folder with this name already exists.");return}n(null),Q.push(I),t(C),tt(C);const V=_===""?S:`${_}/${S}`,u=T??Kc(S);Be(V,u),r([...i(),I]),a(I),c&&c.safeUpdateContent&&(c.safeUpdateContent(u),c.updateLanguage?.(V),c.setReadOnly?.(V.startsWith("deps/")))},h=(S,F)=>{const T={id:crypto.randomUUID(),name:S,type:"directory",children:[]},I=F||"",_=JSON.parse(JSON.stringify(e())),C=Mi(_,I);if(!C){n("Target directory not found.");return}if(C.find(R=>R.name===S)){n("A file or folder with this name already exists.");return}n(null),C.push(T),t(_),tt(_)},m=(S,F,T)=>{if(S.type==="file"){const I=De.FILE_CONTENT_PREFIX+F,_=De.FILE_CONTENT_PREFIX+T,C=localStorage.getItem(I);C!==null&&(localStorage.setItem(_,C),localStorage.removeItem(I))}else S.type==="directory"&&S.children&&S.children.forEach(I=>{const _=F+"/"+I.name,C=T+"/"+I.name;m(I,_,C)})},$=(S,F)=>{if(console.log(`Moving ${S} to ${F}`),S===F){console.warn("Cannot move into itself");return}if(F.startsWith(S+"/")){console.warn("Cannot move into child directory");return}const T=JSON.parse(JSON.stringify(e())),I=st(T,S);if(!I){console.error("Source not found:",S);return}const[_]=I.parent.splice(I.index,1);if(F==="")T.push(_);else{const u=st(T,F);if(!u||u.entry.type!=="directory"){console.error("Destination not found or is not a directory:",F),I.parent.splice(I.index,0,_);return}u.entry.children||(u.entry.children=[]),u.entry.children.push(_)}const C=F===""?_.name:`${F}/${_.name}`;S!==C&&m(_,S,C),console.log("File system after move:",T),tt(T);const Q=i().map(u=>u.id),R=o()?.id;t(T);const V=Q.map(u=>yt(T,u)).filter(Boolean);if(r(V),R){const u=yt(T,R);if(a(u),u){const g=He(T,u.id)||u.name;c.updateLanguage?.(g),c.setReadOnly?.(g.startsWith("deps/"))}}},w=async(S,F)=>{const T=JSON.parse(JSON.stringify(e()));for(const I of S){const _=new FileReader;_.onload=C=>{const Q=C.target?.result,R={id:crypto.randomUUID(),name:I.name,type:"file"},V=F===""?I.name:`${F}/${I.name}`;Be(V,Q);const g=((O,E)=>{if(E==="")return O;const x=E.split("/");let L=O;for(const X of x){const D=L.find(M=>M.name===X&&M.type==="directory");if(!D||!D.children)return null;L=D.children}return L})(T,F);g&&(g.push(R),t([...T]),tt(T))},_.readAsText(I)}},A=(S,F)=>{console.log(`Renaming ${S} to ${F}`);const T=JSON.parse(JSON.stringify(e())),I=st(T,S);if(!I){console.error("Entry not found for rename:",S);return}I.entry.name=F;const _=S.split("/");_[_.length-1]=F;const C=_.join("/");S!==C&&m(I.entry,S,C),t(T),tt(T);const Q=i().map(u=>u.id),R=o()?.id,V=Q.map(u=>yt(T,u)).filter(Boolean);if(r(V),R){const u=yt(T,R);if(a(u),u){const g=He(T,u.id)||u.name;c.updateLanguage?.(g),c.setReadOnly?.(g.startsWith("deps/"))}}},p=(S,F)=>{if(S.type==="file"){const T=De.FILE_CONTENT_PREFIX+F;localStorage.removeItem(T)}else S.type==="directory"&&S.children&&S.children.forEach(T=>{const I=F+"/"+T.name;p(T,I)})};return{handleNewFile:d,handleNewFolder:h,handleMoveEntry:$,handleFileUpload:w,handleRenameEntry:A,handleDeleteEntry:S=>{console.log(`Deleting ${S}`);const F=JSON.parse(JSON.stringify(e())),T=st(F,S);if(!T){console.error("Entry not found for deletion:",S);return}T.parent.splice(T.index,1),p(T.entry,S),t(F),tt(F);const I=cn(T.entry),_=i().filter(R=>!I.includes(R.id));if(r(_),o()&&I.includes(o().id)){const R=_.length>0?_[_.length-1]:null;if(a(R),R&&c&&c.safeUpdateContent){const V=He(F,R.id)||R.name,u=f(V);c.safeUpdateContent(u),c.updateLanguage?.(V),c.setReadOnly?.(V.startsWith("deps/"))}}const Q=l().filter(R=>R!==S);s(Q)},handleMoveWithReplacement:(S,F,T)=>{if(console.log(`Moving ${S} to ${F} with replacement of ${T}`),S===F){console.warn("Cannot move into itself");return}if(F.startsWith(S+"/")){console.warn("Cannot move into child directory");return}const I=JSON.parse(JSON.stringify(e())),_=st(I,S);if(!_){console.error("Source not found:",S);return}const[C]=_.parent.splice(_.index,1),Q=[];if(F===""){for(let O=I.length-1;O>=0;O--)I[O].name===T&&(Q.push(...cn(I[O])),I.splice(O,1),localStorage.removeItem(De.FILE_CONTENT_PREFIX+T));I.push(C)}else{const O=st(I,F);if(!O||O.entry.type!=="directory"){console.error("Destination not found or is not a directory:",F),_.parent.splice(_.index,0,C);return}O.entry.children||(O.entry.children=[]);for(let E=O.entry.children.length-1;E>=0;E--)if(O.entry.children[E].name===T){Q.push(...cn(O.entry.children[E])),O.entry.children.splice(E,1);const x=`${F}/${T}`;localStorage.removeItem(De.FILE_CONTENT_PREFIX+x)}O.entry.children.push(C)}const R=F===""?C.name:`${F}/${C.name}`;S!==R&&m(C,S,R),console.log("File system after move with replacement:",I),tt(I);const V=i().map(O=>O.id),u=o()?.id;t(I);const g=V.filter(O=>!Q.includes(O)).map(O=>yt(I,O)).filter(Boolean);if(r(g),u)if(Q.includes(u)){const O=g.length>0?g[g.length-1]:null;if(a(O),O&&c&&c.safeUpdateContent){const E=He(I,O.id)||O.name,x=f(E);c.safeUpdateContent(x),c.updateLanguage?.(E),c.setReadOnly?.(E.startsWith("deps/"))}}else{const O=yt(I,u);if(a(O),O){const E=He(I,O.id)||O.name;c.updateLanguage?.(E),c.setReadOnly?.(E.startsWith("deps/"))}}},handleCopyEntry:(S,F,T)=>{console.log(`Copying ${S} to ${F}/${T}`);const I=JSON.parse(JSON.stringify(e())),_=st(I,S);if(!_){console.error("Source not found for copy:",S);return}const C=(u,g)=>({id:crypto.randomUUID(),name:g,type:u.type,children:u.type==="directory"&&u.children?u.children.map(E=>C(E,E.name)):void 0}),Q=C(_.entry,T);if(F==="")I.push(Q);else{const u=st(I,F);if(!u||u.entry.type!=="directory"){console.error("Destination not found or is not a directory:",F);return}u.entry.children||(u.entry.children=[]),u.entry.children.push(Q)}const R=(u,g,O,E)=>{if(u.type==="file"){const x=De.FILE_CONTENT_PREFIX+O,L=De.FILE_CONTENT_PREFIX+E,X=localStorage.getItem(x);X!==null&&localStorage.setItem(L,X)}else if(u.type==="directory"&&u.children&&g.children)for(let x=0;x<u.children.length;x++){const L=u.children[x],X=g.children[x],D=O+"/"+L.name,M=E+"/"+X.name;R(L,X,D,M)}},V=F===""?T:`${F}/${T}`;R(_.entry,Q,S,V),console.log("File system after copy:",I),tt(I),t(I)}}},In="shared-link.alt",Nr=["data"],Mr=["data64","base64"],Ur=["fileName","filename","file"],qd=[...Nr,...Mr,...Ur],Hd=()=>{const e=[new URLSearchParams(window.location.search)],t=window.location.hash.indexOf("?");return t>=0&&e.push(new URLSearchParams(window.location.hash.slice(t))),e},Fn=e=>{for(const t of Hd())for(const n of e){const i=t.get(n);if(i!==null)return i}return null},Zd=e=>{try{const t=e.replace(/-/g,"+").replace(/_/g,"/"),n=(4-t.length%4)%4,i=t+"=".repeat(n),r=atob(i),o=Uint8Array.from(r,a=>a.charCodeAt(0));return new TextDecoder().decode(o)}catch(t){return console.warn("Unable to decode shared editor payload from URL query parameters.",t),null}},Kd=e=>{const n=(e?.trim()||In).split(/[\\/]/).filter(r=>r.length>0).pop()||In,i=Array.from(n,r=>r.charCodeAt(0)<32||'<>:"|?*'.includes(r)?"-":r).join("").trim();return i.length===0?In:i.includes(".")?i:`${i}.alt`},Jd=()=>{if(typeof window>"u")return null;const e=Fn(Mr),t=Fn(Nr),n=Kd(Fn(Ur));if(e!==null){const i=Zd(e);return i===null?null:{fileName:n,content:i}}return t===null?null:{fileName:n,content:t}},Gi=e=>{let t=!1;for(const n of qd)e.has(n)&&(e.delete(n),t=!0);return t},eu=()=>{if(typeof window>"u")return;const e=new URL(window.location.href);let t=Gi(e.searchParams);const n=e.hash.indexOf("?");if(n>=0){const i=e.hash.slice(0,n),r=new URLSearchParams(e.hash.slice(n+1));if(Gi(r)){const a=r.toString();e.hash=a?`${i}?${a}`:i,t=!0}}t&&window.history.replaceState(window.history.state,document.title,`${e.pathname}${e.search}${e.hash}`)};var tu=z("<button type=button class=vscode-button><i></i><span>"),nu=z("<div class=collapsed-sidebar-container>"),iu=z("<div class=editor-instance-wrapper>"),ru=z('<div class=app-shell><header id=header><div class=brand><h3>Althread</h3></div><div class=actions><div class=action-group></div><span class=actions-separator></span><button type=button class="vscode-button icon-only theme-toggle-button"aria-label="Toggle theme"><i class="codicon codicon-color-mode"></i></button></div></header><div class=content-wrapper>'),ou=z("<div>");Sn().then(()=>{Qr()});const au=(e,t)=>{if(!Ze(e,t))return t;const n=t.lastIndexOf("."),i=n>0?t.slice(0,n):t,r=n>0?t.slice(n):"";let o=2;for(;Ze(e,`${i}-${o}${r}`);)o++;return`${i}-${o}${r}`},lu=(e,t,n)=>{let i=e;for(const r of t.split("/").filter(Boolean))if(i=i?.find(o=>o.name===r&&o.type==="directory")?.children,!i)return!1;return i.some(r=>r.name===n)},ct={isOpen:!1,content:"",fileName:""};function su(){const e=Jd(),[t,n]=U(Zc()),[i,r]=U([]),[o,a]=U(null),[l,s]=U(!!e),[c,f]=U(ed()),[d,h]=U(null),[m,$]=U("help"),[w,A]=U(!1);let p=null,v=null;const[P,k]=U(.2),S=48,F=()=>{const N=!w(),K=v,le=document.querySelector(".right-panel"),pe=document.getElementById("content");if(p&&K&&le&&pe){const Oe=pe.getBoundingClientRect().width,Ee=le.getBoundingClientRect().width;if(N){const We=Oe-S,ee=document.querySelector("#content > [data-corvu-resizable-panel]:first-child")?.getBoundingClientRect().width||Oe*.2;k(ee);const W=Ee/We;K([0,1-W,W])}else{const We=Oe+S,ee=P()/We,W=Ee/We;K([ee,1-ee-W,W])}}A(N)},T=N=>{w()&&F(),$(N)},I=N=>He(t(),N.id)||N.name,_=_l({getWorkspace:()=>Ui(t()),onWorkspaceChange:N=>{for(const[K,le]of Object.entries(N))Be(K,le)},onNavigate:(N,K)=>{if(!Ze(t(),N))return;C.handleFileSelect(N,t());const le=_.safeEditorView();if(!le)return;const pe=le.state.doc.line(Math.min(K.line+1,le.state.doc.lines)),Oe=Math.min(pe.from+K.character,pe.to);le.dispatch({selection:{anchor:Oe},scrollIntoView:!0}),le.focus()},defaultValue:`// Welcome to Althread
`,filePath:"untitled.alt",theme:c(),onValueChange:N=>{const K=C.activeFile();K&&Be(I(K),N)}}),C=Wd(_),Q=Yd(t,n,a,C.openFiles,C.setOpenFiles,C.activeFile,C.setActiveFile,i,r,_,ot),R=(N,K)=>{C.createNewFileWithContent(au(t(),N),K,Q,t)},V=()=>C.activeFile()?.name.endsWith(".alt")??!1,g=Bd({getContext:()=>{const N=C.activeFile(),K=_.safeEditorView();if(!N||!V()||!K)return null;const le=t();return{source:K.state.doc.toString(),filePath:He(le,N.id,"")||N.name,virtualFS:Ui(le)}}}),[O,E]=U(null);ge(()=>{const N=O();if(N&&N.length>0){_.highlightLines?.(N);return}const K=g.selectedVM(),le=(K?.vm?.locals??[]).map(pe=>({line:pe.line,label:`${pe.name}#${pe.pid}`})).filter(pe=>typeof pe.line=="number"&&pe.line>0);if(le.length>0){_.highlightLines?.(le);return}if(K?.stepIndex!==void 0&&K.stepIndex>0){const pe=g.stepLines()[K.stepIndex-1];if(pe?.length){_.highlightLines?.(pe);return}}_.clearHighlights?.()}),ge(Ye(()=>C.activeFile()?.id,()=>{E(null),g.mode()==="interactive"&&g.stopInteractive()},{defer:!0}));const x=()=>!!C.activeFile()&&V(),L=(N,K)=>C.activeFile()?V()?K?`${N} (${K})`:N:`${N} — only .alt files can be executed`:`${N} — open a file first`,X=`${Ct}+Enter`,D=`${Ct}+Shift+Enter`;Et(()=>{const N=K=>{!(di?K.metaKey:K.ctrlKey)||K.key!=="Enter"||K.altKey||(K.preventDefault(),K.stopPropagation(),K.shiftKey?g.check():g.run())};window.addEventListener("keydown",N,!0),Fe(()=>window.removeEventListener("keydown",N,!0))}),Et(()=>{if(!e)return;if(eu(),Ze(t(),e.fileName)?.type==="file"){ue({isOpen:!0,content:e.content,fileName:e.fileName});return}R(e.fileName,e.content)}),ge(()=>{if(l()||(s(!0),C.activeFile()))return;const N=t();Ze(N,"main.alt")?.type==="file"?C.handleFileSelect("main.alt",N):N.length===1&&N[0].type==="file"&&C.handleFileSelect(He(N,N[0].id)||N[0].name,N)}),ge(()=>tt(t())),ge(()=>{const N=c();document.documentElement.dataset.theme=N,document.body.dataset.theme=N,_.updateTheme?.(N)}),ge(Ye(w,()=>{setTimeout(()=>{const N=C.activeFile(),K=_.safeEditorView();if(!N||!K)return;const le=ot(I(N));K.dispatch({changes:{from:0,to:K.state.doc.length,insert:le}})},50)}));const[M,Z]=U({isOpen:!1,sourcePaths:[],destPath:"",conflictingName:""}),H=()=>Z({isOpen:!1,sourcePaths:[],destPath:"",conflictingName:""}),[Y,J]=U({isOpen:!1,paths:[]}),[te,me]=U(ct),[se,ue]=U(ct),ce=()=>{const{sourcePaths:N,destPath:K,conflictingName:le}=M();for(const pe of N)Q.handleMoveWithReplacement(pe,K,le);H()},xe=()=>{for(const N of Y().paths)Q.handleDeleteEntry(N);J({isOpen:!1,paths:[]})},Me=()=>{const N=te();me(ct);const K=C.activeFile();if(!K){R(N.fileName,N.content);return}_.safeUpdateContent(N.content),Be(I(K),N.content)},Ue=()=>{const N=te();me(ct),R(N.fileName,N.content)},Se=()=>{const N=se();ue(ct),Be(N.fileName,N.content),C.handleFileSelect(N.fileName,t())},je=()=>{const N=se();ue(ct),R(N.fileName,N.content)},Ve=()=>{ue(ct),C.activeFile()||s(!1)},gt=()=>{T("explorer"),h({type:"file",parentPath:""})},xn=(N,K,le)=>{if(!Ze(t(),N)){console.warn(`File not found: ${N}`);return}C.handleFileSelect(N,t()),T("explorer");const pe=_.safeEditorView();if(pe&&typeof K=="number"&&K>0){const Oe=pe.state.doc.line(Math.min(K,pe.state.doc.lines)),Ee=Math.max(0,(le??1)-1),We=Math.min(Oe.from+Ee,Oe.to);pe.dispatch({selection:{anchor:We},scrollIntoView:!0}),pe.focus()}},Bt=()=>b(Vd,{get files(){return t()},onFileSelect:N=>C.handleFileSelect(N,t()),get onNewFile(){return Q.handleNewFile},get onNewFolder(){return Q.handleNewFolder},get onMoveEntry(){return Q.handleMoveEntry},get onRenameEntry(){return Q.handleRenameEntry},get onDeleteEntry(){return Q.handleDeleteEntry},get onCopyEntry(){return Q.handleCopyEntry},get onFileUpload(){return Q.handleFileUpload},get activeFile(){return C.activeFile()},getFilePath:I,get selectedFiles(){return i()},onSelectionChange:r,get creationError(){return o()},setCreationError:a,checkNameConflict:(N,K)=>lu(t(),N,K),showConfirmDialog:(N,K,le)=>Z({isOpen:!0,sourcePaths:N,destPath:K,conflictingName:le}),showDeleteConfirmDialog:N=>J({isOpen:!0,paths:N}),get globalFileCreation(){return d()},setGlobalFileCreation:h,setFileSystem:n,onLoadExample:(N,K)=>me({isOpen:!0,content:N,fileName:K}),get activeView(){return m()},onViewChange:$,get isCollapsed(){return w()},onToggleCollapse:F}),Tt=N=>(()=>{var K=tu(),le=K.firstChild,pe=le.nextSibling;return K.$$click=()=>N.onClick(),y(pe,()=>N.label),ne(Oe=>{var Ee=!!N.primary,We=N.action==="interactive"&&g.mode()==="interactive",ee=!x()||g.busy()!==null,W=L(N.label,N.shortcut),q=g.busy()===N.action?"codicon codicon-loading codicon-modifier-spin":`codicon codicon-${N.icon}`;return Ee!==Oe.e&&K.classList.toggle("primary",Oe.e=Ee),We!==Oe.t&&K.classList.toggle("active",Oe.t=We),ee!==Oe.a&&(K.disabled=Oe.a=ee),W!==Oe.o&&re(K,"title",Oe.o=W),q!==Oe.i&&he(le,Oe.i=q),Oe},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),K})();return(()=>{var N=ru(),K=N.firstChild,le=K.firstChild,pe=le.firstChild,Oe=le.nextSibling,Ee=Oe.firstChild,We=Ee.nextSibling,ee=We.nextSibling,W=K.nextSibling;return y(le,b(Ya,{}),pe),y(Ee,b(Tt,{action:"run",label:"Run",icon:"play",shortcut:X,primary:!0,get onClick(){return g.run}}),null),y(Ee,b(Tt,{action:"check",label:"Check",icon:"workspace-trusted",shortcut:D,get onClick(){return g.check}}),null),y(Ee,b(Tt,{action:"interactive",label:"Step",icon:"debug-step-over",get onClick(){return g.startInteractive}}),null),ee.$$click=()=>{const q=c()==="dark"?"light":"dark";Jc(q),f(q)},y(N,b(G,{get when(){return w()},get children(){var q=nu();return y(q,b(Bt,{})),q}}),W),y(W,b(qe,{id:"content",as:q=>{const ae=qe.useContext();return p=ae.sizes,v=ae.setSizes,(()=>{var we=ou();return ni(we,q,!1,!1),we})()},get children(){return[b(qe.Panel,{initialSize:.2,minSize:.15,collapsible:!0,collapsedSize:0,onCollapse:()=>A(!0),onExpand:()=>A(!1),style:{overflow:"hidden"},get children(){return b(Bt,{})}}),b(qe.Handle,{class:"Resizable-handle"}),b(qe.Panel,{class:"editor-panel",initialSize:.5,minSize:.2,get children(){return[b(El,{get openFiles(){return C.openFiles()},get activeFile(){return C.activeFile()},getFilePath:I,onTabClick:q=>C.handleFileTabClick(q,t()),onTabClose:q=>C.handleTabClose(q,t())}),b(G,{get when(){return C.activeFile()},get fallback(){return b(Sl,{onNewFile:gt})},get children(){var q=iu(),ae=_.ref;return typeof ae=="function"?Je(ae,q):_.ref=q,q}})]}}),b(qe.Handle,{class:"Resizable-handle"}),b(qe.Panel,{class:"right-panel",initialSize:.3,minSize:.15,get children(){return b(zc,{exec:g,editor:_,get theme(){return c()},runShortcut:X,onErrorFileClick:xn,onPreviewLines:E})}})]}})),y(N,b(el,{get isOpen(){return M().isOpen},title:"Replace Existing Item",message:"An item with this name already exists in the destination folder. Do you want to replace it?",get fileName(){return M().conflictingName},onConfirm:ce,onCancel:H}),null),y(N,b(tl,{get isOpen(){return Y().isOpen},get paths(){return Y().paths},onConfirm:xe,onCancel:()=>J({isOpen:!1,paths:[]})}),null),y(N,b(wi,{get isOpen(){return te().isOpen},get detail(){return`Replace the content of the current file, or open “${te().fileName}” in a new file.`},onLoadInCurrent:Me,onLoadInNew:Ue,onCancel:()=>me(ct)}),null),y(N,b(wi,{get isOpen(){return se().isOpen},onLoadInCurrent:Se,onLoadInNew:je,onCancel:Ve,title:"Shared Link Import",message:"A file with the same name already exists. What should the editor do with the shared content?",get detail(){return`Replace ${se().fileName} or create a new file with a unique name.`},currentLabel:"Replace File",newLabel:"Create Copy"}),null),ne(q=>{var ae=c(),we=`Switch to ${c()==="dark"?"light":"dark"} theme`,Le=!!w();return ae!==q.e&&re(N,"data-theme",q.e=ae),we!==q.t&&re(ee,"title",q.t=we),Le!==q.a&&W.classList.toggle("sidebar-collapsed",q.a=Le),q},{e:void 0,t:void 0,a:void 0}),N})()}Pe(["click"]);const Bi=ti(()=>Ge(()=>import("./Tutorial-Bs0fSI_i.js"),__vite__mapDeps([14,1,15]))),cu=()=>{const e=hr();return Et(()=>{e("/",{replace:!0})}),null},Yi=document.getElementById("app");Yi&&oa(()=>b(Xa,{get children(){return[b(qt,{path:"/tutorials",component:Bi}),b(qt,{path:"/tutorials/:stepName",component:Bi}),b(qt,{path:"/",component:su}),b(qt,{path:"*all",component:cu})]}}),Yi);export{Ne as A,_e as F,Ya as L,Xn as M,G as S,Ge as _,hr as a,ge as b,U as c,Fe as d,_l as e,b as f,qe as g,ne as h,y as i,Je as j,he as k,ed as l,ze as m,Jc as n,Et as o,Mt as p,Xd as q,Pe as r,re as s,z as t,gu as u,Ye as v,ji as w,ca as x,ye as y,ft as z};
