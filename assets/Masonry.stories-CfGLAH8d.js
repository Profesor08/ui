var wt=Object.defineProperty;var kt=(r,t,n)=>t in r?wt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;var g=(r,t,n)=>kt(r,typeof t!="symbol"?t+"":t,n);import{j as _}from"./jsx-runtime-D_zvdyIk.js";import{c as St}from"./compiler-runtime-DYK0Qyf8.js";import{c as k,g as _t,r as J}from"./index-rE2EVDCa.js";var q,X;function W(){if(X)return q;X=1;function r(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}return q=r,q}var E,Y;function jt(){if(Y)return E;Y=1;var r=typeof k=="object"&&k&&k.Object===Object&&k;return E=r,E}var I,Q;function ht(){if(Q)return I;Q=1;var r=jt(),t=typeof self=="object"&&self&&self.Object===Object&&self,n=r||t||Function("return this")();return I=n,I}var A,Z;function Ot(){if(Z)return A;Z=1;var r=ht(),t=function(){return r.Date.now()};return A=t,A}var N,tt;function Rt(){if(tt)return N;tt=1;var r=/\s/;function t(n){for(var i=n.length;i--&&r.test(n.charAt(i)););return i}return N=t,N}var B,et;function qt(){if(et)return B;et=1;var r=Rt(),t=/^\s+/;function n(i){return i&&i.slice(0,r(i)+1).replace(t,"")}return B=n,B}var C,rt;function pt(){if(rt)return C;rt=1;var r=ht(),t=r.Symbol;return C=t,C}var M,nt;function Et(){if(nt)return M;nt=1;var r=pt(),t=Object.prototype,n=t.hasOwnProperty,i=t.toString,e=r?r.toStringTag:void 0;function s(o){var l=n.call(o,e),u=o[e];try{o[e]=void 0;var a=!0}catch{}var d=i.call(o);return a&&(l?o[e]=u:delete o[e]),d}return M=s,M}var G,it;function It(){if(it)return G;it=1;var r=Object.prototype,t=r.toString;function n(i){return t.call(i)}return G=n,G}var L,at;function At(){if(at)return L;at=1;var r=pt(),t=Et(),n=It(),i="[object Null]",e="[object Undefined]",s=r?r.toStringTag:void 0;function o(l){return l==null?l===void 0?e:i:s&&s in Object(l)?t(l):n(l)}return L=o,L}var P,ot;function Nt(){if(ot)return P;ot=1;function r(t){return t!=null&&typeof t=="object"}return P=r,P}var $,st;function Bt(){if(st)return $;st=1;var r=At(),t=Nt(),n="[object Symbol]";function i(e){return typeof e=="symbol"||t(e)&&r(e)==n}return $=i,$}var F,lt;function Ct(){if(lt)return F;lt=1;var r=qt(),t=W(),n=Bt(),i=NaN,e=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,o=/^0o[0-7]+$/i,l=parseInt;function u(a){if(typeof a=="number")return a;if(n(a))return i;if(t(a)){var d=typeof a.valueOf=="function"?a.valueOf():a;a=t(d)?d+"":d}if(typeof a!="string")return a===0?a:+a;a=r(a);var m=s.test(a);return m||o.test(a)?l(a.slice(2),m?2:8):e.test(a)?i:+a}return F=u,F}var z,ut;function Mt(){if(ut)return z;ut=1;var r=W(),t=Ot(),n=Ct(),i="Expected a function",e=Math.max,s=Math.min;function o(l,u,a){var d,m,T,b,f,p,y=0,U=!1,v=!1,j=!0;if(typeof l!="function")throw new TypeError(i);u=n(u)||0,r(a)&&(U=!!a.leading,v="maxWait"in a,T=v?e(n(a.maxWait)||0,u):T,j="trailing"in a?!!a.trailing:j);function O(c){var h=d,x=m;return d=m=void 0,y=c,b=l.apply(x,h),b}function yt(c){return y=c,f=setTimeout(w,u),U?O(c):b}function vt(c){var h=c-p,x=c-y,K=u-h;return v?s(K,T-x):K}function V(c){var h=c-p,x=c-y;return p===void 0||h>=u||h<0||v&&x>=T}function w(){var c=t();if(V(c))return H(c);f=setTimeout(w,vt(c))}function H(c){return f=void 0,j&&d?O(c):(d=m=void 0,b)}function xt(){f!==void 0&&clearTimeout(f),y=0,d=p=m=f=void 0}function Tt(){return f===void 0?b:H(t())}function R(){var c=t(),h=V(c);if(d=arguments,m=this,p=c,h){if(f===void 0)return yt(p);if(v)return clearTimeout(f),f=setTimeout(w,u),O(p)}return f===void 0&&(f=setTimeout(w,u)),b}return R.cancel=xt,R.flush=Tt,R}return z=o,z}var D,ct;function Gt(){if(ct)return D;ct=1;var r=Mt(),t=W(),n="Expected a function";function i(e,s,o){var l=!0,u=!0;if(typeof e!="function")throw new TypeError(n);return t(o)&&(l="leading"in o?!!o.leading:l,u="trailing"in o?!!o.trailing:u),r(e,s,{leading:l,maxWait:s,trailing:u})}return D=i,D}var Lt=Gt();const Pt=_t(Lt);let $t=class{constructor(t){g(this,"grid");g(this,"resizeObserver");g(this,"mutationObserver");g(this,"items",[]);g(this,"update",Pt(()=>{const t=window.getComputedStyle(this.grid);if(t.getPropertyValue("display").includes("grid")===!1){this.clean();return}const{columns:n}=Ft(this.grid);if(n.length<=1){this.clean();return}const i=parseFloat(t.getPropertyValue("row-gap").trim())||0;for(let e=0;e<n.length;e++){const s=this.items[e];s==null||s.style.removeProperty("margin-top")}for(let e=0;e<this.items.length;e++){const s=this.items[e-n.length],o=this.items[e];if(s!==void 0&&o!==void 0){const l=s.getBoundingClientRect().bottom;o.style.removeProperty("margin-top");const u=o.getBoundingClientRect().top;if(u-i!==l){const a=Math.round((l-(u-i)+Number.EPSILON)*100)/100;o.style.setProperty("margin-top",`${a}px`)}}}},32));g(this,"create",()=>{var t;this.destroy(),(t=this.mutationObserver)==null||t.observe(this.grid,{childList:!0}),this.items=Array.from(this.grid.children),this.items.forEach(n=>{var i;(i=this.resizeObserver)==null||i.observe(n)})});g(this,"destroy",()=>{var t,n;(t=this.resizeObserver)==null||t.disconnect(),(n=this.mutationObserver)==null||n.disconnect(),this.clean(),this.items=[]});g(this,"clean",()=>{this.items.forEach(t=>{t.style.removeProperty("margin-top")})});this.grid=t,CSS.supports("grid-template-rows","masonry")===!1&&(this.resizeObserver=new ResizeObserver(this.update),this.mutationObserver=new MutationObserver(this.update),this.create())}};function Ft(r){const n=window.getComputedStyle(r).getPropertyValue("grid-template-columns").trim();return n==="none"?{type:"none",columns:[]}:{type:"track-list",columns:n.split(/\s(?=(?:[^()]*\([^()]*\))*[^()]*$)/).map(e=>/^\[.*\]$/.test(e)?{type:"line-name",value:e}:/^repeat\(.+\)$/.test(e)?{type:"repeat",value:e}:/^minmax\(.+\)$/.test(e)?{type:"minmax",value:e}:/^fit-content\(.+\)$/.test(e)?{type:"fit-content",value:e}:e==="auto"||e==="max-content"||e==="min-content"?{type:"keyword",value:e}:/^\d+(px|em|rem|%)$/.test(e)||/^\d*\.?\d+fr$/.test(e)?{type:"dimension",value:e}:e==="subgrid"||e==="masonry"?{type:"special",value:e}:{type:"global",value:e})}}const bt=r=>{const t=St.c(4),n=J.useRef(null);let i,e;t[0]===Symbol.for("react.memo_cache_sentinel")?(i=()=>{if(n.current!==null){const o=new $t(n.current);return()=>{o==null||o.destroy()}}return zt},e=[],t[0]=i,t[1]=e):(i=t[0],e=t[1]),J.useLayoutEffect(i,e);let s;return t[2]!==r?(s=_.jsx("div",{ref:n,...r}),t[2]=r,t[3]=s):s=t[3],s};bt.__docgenInfo={description:"",methods:[],displayName:"Masonry"};function zt(){}const Dt=[{title:"New York City",text:"The bustling metropolis known for its iconic skyline, Broadway, and vibrant culture."},{title:"Paris",text:"The romantic city famous for its art, fashion, and the Eiffel Tower."},{title:"Tokyo",text:"A modern city blending traditional culture with cutting-edge technology."},{title:"London",text:"A historic city known for landmarks like Big Ben and the Tower of London."},{title:"Sydney",text:"Famous for its Opera House, stunning harbor, and vibrant beach life."},{title:"Dubai",text:"A city known for luxury shopping, ultramodern architecture, and a lively nightlife scene."},{title:"Rome",text:"The historic capital of Italy, known for its ancient ruins and Renaissance art."},{title:"Barcelona",text:"Known for its art and architecture, including Gaudí's unique structures."},{title:"San Francisco",text:"Famous for the Golden Gate Bridge, Alcatraz Island, and steep streets."},{title:"Amsterdam",text:"Renowned for its canals, artistic heritage, and cycling culture."},{title:"Berlin",text:"A city rich in history, known for its art scene and modern landmarks."},{title:"Beijing",text:"China's capital, known for its ancient history and modern architecture."},{title:"Bangkok",text:"Thailand's vibrant capital known for its street life and cultural landmarks."},{title:"Moscow",text:"Russia's cosmopolitan capital, known for the Kremlin and Red Square."},{title:"Rio de Janeiro",text:"A vibrant city known for its Carnival, Christ the Redeemer, and beaches."},{title:"Buenos Aires",text:"Argentina's bustling capital, known for its European-style architecture and tango."},{title:"Cairo",text:"A sprawling city in Egypt, known for its ancient pyramids and the Sphinx."},{title:"Cape Town",text:"South Africa's coastal city, known for Table Mountain and its harbor."},{title:"Hong Kong",text:"A bustling metropolis known for its skyscraper-studded skyline."},{title:"Mumbai",text:"India's financial powerhouse, known for Bollywood and its vibrant culture."},{title:"Istanbul",text:"A city that straddles Europe and Asia, known for its historic sites and bustling markets."},{title:"Singapore",text:"A global financial hub with a tropical climate and multicultural population."},{title:"Vienna",text:"Austria's capital, known for its artistic and intellectual legacy."},{title:"Seoul",text:"A bustling city where modern skyscrapers, high-tech subways, and pop culture meet Buddhist temples, palaces, and street markets."},{title:"Lagos",text:"Nigeria's sprawling city, known for its beach resorts, boutiques, and nightlife."},{title:"Athens",text:"The heart of Ancient Greece, renowned for its archaeological sites and historic importance."},{title:"Jakarta",text:"Indonesia's massive capital, known for its bustling streets and diverse cultural heritage."},{title:"Bangkok",text:"Thailand’s capital, renowned for its vibrant street life and cultural landmarks."},{title:"Lisbon",text:"Portugal’s hilly, coastal capital city, known for its cafe culture and soulful Fado music."},{title:"Istanbul",text:"A transcontinental city straddling Europe and Asia, famous for its historic sites."},{title:"Toronto",text:"A dynamic city in Canada, known for its towering skyline and cultural diversity."},{title:"Mexico City",text:"A sprawling capital known for its Templo Mayor, vibrant culture, and bustling nightlife."},{title:"São Paulo",text:"Brazil’s financial center, known for its cultural institutions and vibrant nightlife."}],Wt="Masonry_masonry_19o4h_1",Ut="Masonry_item_19o4h_9",dt={masonry:Wt,item:Ut},Yt={title:"UI/Masonry",component:bt,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{}},S={args:{className:dt.masonry,children:Dt.map((r,t)=>_.jsxs("div",{className:dt.item,children:[_.jsx("h2",{children:r.title}),_.jsx("p",{children:r.text})]},t))}};var ft,mt,gt;S.parameters={...S.parameters,docs:{...(ft=S.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    className: styles.masonry,
    children: data.map((item, index) => <div key={index} className={styles.item}>\r
        <h2>{item.title}</h2>\r
        <p>{item.text}</p>\r
      </div>)
  }
}`,...(gt=(mt=S.parameters)==null?void 0:mt.docs)==null?void 0:gt.source}}};const Qt=["Default"];export{S as Default,Qt as __namedExportsOrder,Yt as default};
