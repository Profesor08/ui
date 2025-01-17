import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as I}from"./compiler-runtime-DYK0Qyf8.js";import{c as Y}from"./clsx-B-dksMZM.js";import{r as f}from"./index-rE2EVDCa.js";import{u as K,D as P,m as M}from"./Dialog-yoSeC7Ek.js";import"./index-lfFnjxir.js";import"./index-IrikWTKM.js";class Q{constructor(){this.componentControls=new Set}subscribe(e){return this.componentControls.add(e),()=>this.componentControls.delete(e)}start(e,s){this.componentControls.forEach(o=>{o.start(e.nativeEvent||e,s)})}}const W=()=>new Q;function X(){return K(W)}const Z="Sheet_sheet_qqdx4_1",ee="Sheet_header_qqdx4_7",V={sheet:Z,header:ee},L=f.createContext({}),d=a=>{const e=I.c(32);let s,o,c,i,m,r,l;e[0]!==a?({className:o,onClose:c,children:s,duration:r,transition:l,ref:m,...i}=a,e[0]=a,e[1]=s,e[2]=o,e[3]=c,e[4]=i,e[5]=m,e[6]=r,e[7]=l):(s=e[1],o=e[2],c=e[3],i=e[4],m=e[5],r=e[6],l=e[7]);const h=r===void 0?.3:r;let y;e[8]!==h||e[9]!==l?(y=l===void 0?{duration:h,ease:[.25,.1,.25,1]}:l,e[8]=h,e[9]=l,e[10]=y):y=e[10];const E=y,w=f.useRef(null);let v;e[11]===Symbol.for("react.memo_cache_sentinel")?(v=()=>w.current,e[11]=v):v=e[11],f.useImperativeHandle(m,v);let S;e[12]===Symbol.for("react.memo_cache_sentinel")?(S={opacity:0,translateY:"100%"},e[12]=S):S=e[12];const U=S;let C;e[13]===Symbol.for("react.memo_cache_sentinel")?(C={opacity:1,translateY:0},e[13]=C):C=e[13];const z=C;let N;e[14]===Symbol.for("react.memo_cache_sentinel")?(N={opacity:0,translateY:"100%"},e[14]=N):N=e[14];const B=N,u=X();let _;e[15]!==u?(_={controls:u},e[15]=u,e[16]=_):_=e[16];const D=_;let g;e[17]===Symbol.for("react.memo_cache_sentinel")?(g=(re,J)=>{var H;J.velocity.y>150&&((H=w.current)==null||H.context.close())},e[17]=g):g=e[17];const G=g;let p;e[18]!==o?(p=Y(V.sheet,o),e[18]=o,e[19]=p):p=e[19];let b;e[20]===Symbol.for("react.memo_cache_sentinel")?(b={top:0},e[20]=b):b=e[20];let x;e[21]!==s||e[22]!==u||e[23]!==h||e[24]!==c||e[25]!==i||e[26]!==p||e[27]!==E?(x=t.jsx(P,{ref:w,className:p,onClose:c,initial:U,animate:z,exit:B,duration:h,transition:E,drag:"y",dragControls:u,dragListener:!1,dragConstraints:b,dragElastic:.1,dragSnapToOrigin:!0,onDragEnd:G,...i,children:s}),e[21]=s,e[22]=u,e[23]=h,e[24]=c,e[25]=i,e[26]=p,e[27]=E,e[28]=x):x=e[28];let j;return e[29]!==D||e[30]!==x?(j=t.jsx(L.Provider,{value:D,children:x}),e[29]=D,e[30]=x,e[31]=j):j=e[31],j},te=a=>{const e=I.c(11);let s,o;e[0]!==a?({className:s,...o}=a,e[0]=a,e[1]=s,e[2]=o):(s=e[1],o=e[2]);const c=f.use(L);let i;e[3]!==c.controls?(i=h=>{c.controls.start(h)},e[3]=c.controls,e[4]=i):i=e[4];const m=i;let r;e[5]!==s?(r=Y(s,V.header),e[5]=s,e[6]=r):r=e[6];let l;return e[7]!==m||e[8]!==o||e[9]!==r?(l=t.jsx(M.div,{className:r,...o,onPointerDown:m}),e[7]=m,e[8]=o,e[9]=r,e[10]=l):l=e[10],l};d.Context=P.Context;d.Header=te;d.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ className, ...props }",optional:!1,type:null}],returns:null}],displayName:"Sheet",props:{duration:{defaultValue:{value:"0.3",computed:!1},required:!1},transition:{defaultValue:{value:"{ duration, ease: [0.25, 0.1, 0.25, 1] }",computed:!1},required:!1}}};const se="Sheet_sheet_r06pu_1",ne="Sheet_heder_r06pu_23",oe="Sheet_body_r06pu_37",ae="Sheet_footer_r06pu_42",n={sheet:se,heder:ne,"sticky-shadow":"Sheet_sticky-shadow_r06pu_1",body:oe,footer:ae},pe={title:"UI/Sheet",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},k={render:()=>{const[a,e]=f.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>e(!0),children:"Open Sheet"}),a===!0&&t.jsxs(d,{className:n.sheet,onClose:()=>e(!1),children:[t.jsxs(d.Header,{className:n.heder,children:[t.jsx("div",{className:n.title,children:"Example Sheet"}),t.jsx(d.Context.Consumer,{children:s=>t.jsx("div",{className:n.close,onClick:()=>s.close(),children:"x"})})]}),t.jsx("div",{className:n.body,children:t.jsx("div",{className:n.text,children:"This example demonstrates how to use a headless sheet component, based on dialog All you need to do is design a visually appealing block and place it inside the dialog."})}),t.jsx("div",{className:n.footer,children:t.jsx("div",{className:n.text,children:"Sticky Footer Content"})})]})]})}},O={render:()=>{const[a,e]=f.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>e(!0),children:"Open Sheet"}),a===!0&&t.jsxs(d,{className:n.sheet,onClose:()=>e(!1),duration:.5,children:[t.jsxs("div",{className:n.heder,children:[t.jsx("div",{className:n.title,children:"Example Sheet"}),t.jsx(d.Context.Consumer,{children:s=>t.jsx("div",{className:n.close,onClick:()=>s.close(),children:"x"})})]}),t.jsx("div",{className:n.body,children:t.jsx("div",{className:n.text,children:"This example demonstrates how to use a headless sheet component, based on dialog All you need to do is design a visually appealing block and place it inside the dialog."})}),t.jsx("div",{className:n.footer,children:t.jsx("div",{className:n.text,children:"Sticky Footer Content"})})]})]})}};var q,A,F;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <button onClick={() => setOpen(true)}>Open Sheet</button>\r
\r
        {open === true && <Sheet className={styles.sheet} onClose={() => setOpen(false)}>\r
            <Sheet.Header className={styles.heder}>\r
              <div className={styles.title}>Example Sheet</div>\r
              <Sheet.Context.Consumer>\r
                {context => <div className={styles.close} onClick={() => context.close()}>\r
                    x\r
                  </div>}\r
              </Sheet.Context.Consumer>\r
            </Sheet.Header>\r
            <div className={styles.body}>\r
              <div className={styles.text}>\r
                This example demonstrates how to use a headless sheet component,\r
                based on dialog All you need to do is design a visually\r
                appealing block and place it inside the dialog.\r
              </div>\r
            </div>\r
            <div className={styles.footer}>\r
              <div className={styles.text}>Sticky Footer Content</div>\r
            </div>\r
          </Sheet>}\r
      </>;
  }
}`,...(F=(A=k.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var T,R,$;O.parameters={...O.parameters,docs:{...(T=O.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <button onClick={() => setOpen(true)}>Open Sheet</button>\r
\r
        {open === true && <Sheet className={styles.sheet} onClose={() => setOpen(false)} duration={0.5}>\r
            <div className={styles.heder}>\r
              <div className={styles.title}>Example Sheet</div>\r
              <Sheet.Context.Consumer>\r
                {context => <div className={styles.close} onClick={() => context.close()}>\r
                    x\r
                  </div>}\r
              </Sheet.Context.Consumer>\r
            </div>\r
            <div className={styles.body}>\r
              <div className={styles.text}>\r
                This example demonstrates how to use a headless sheet component,\r
                based on dialog All you need to do is design a visually\r
                appealing block and place it inside the dialog.\r
              </div>\r
            </div>\r
            <div className={styles.footer}>\r
              <div className={styles.text}>Sticky Footer Content</div>\r
            </div>\r
          </Sheet>}\r
      </>;
  }
}`,...($=(R=O.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};const xe=["Default","CustomAnimation"];export{O as CustomAnimation,k as Default,xe as __namedExportsOrder,pe as default};
