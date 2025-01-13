import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as R}from"./compiler-runtime-DYK0Qyf8.js";import{c as T}from"./clsx-B-dksMZM.js";import{r as x}from"./index-rE2EVDCa.js";import{u as G,D as $,m as J}from"./Dialog-BBKz0y5P.js";import"./index-lfFnjxir.js";import"./index-IrikWTKM.js";class K{constructor(){this.componentControls=new Set}subscribe(e){return this.componentControls.add(e),()=>this.componentControls.delete(e)}start(e,s){this.componentControls.forEach(a=>{a.start(e.nativeEvent||e,s)})}}const M=()=>new K;function Q(){return G(M)}const W="Sheet_sheet_qqdx4_1",X="Sheet_header_qqdx4_7",Y={sheet:W,header:X},I=x.createContext({}),i=r=>{const e=R.c(22),{className:s,onClose:a,children:d,duration:m,transition:c}=r,o=m===void 0?.3:m;let l;e[0]!==o||e[1]!==c?(l=c===void 0?{duration:o,ease:[.25,.1,.25,1]}:c,e[0]=o,e[1]=c,e[2]=l):l=e[2];const f=l,P=x.useRef(null);let y;e[3]===Symbol.for("react.memo_cache_sentinel")?(y={opacity:0,translateY:"100%"},e[3]=y):y=e[3];const V=y;let v;e[4]===Symbol.for("react.memo_cache_sentinel")?(v={opacity:1,translateY:0},e[4]=v):v=e[4];const L=v;let C;e[5]===Symbol.for("react.memo_cache_sentinel")?(C={opacity:0,translateY:"100%"},e[5]=C):C=e[5];const U=C,h=Q(),O=x.useRef(null);let S;e[6]!==h?(S={controls:h},e[6]=h,e[7]=S):S=e[7];const k=S;let N;e[8]===Symbol.for("react.memo_cache_sentinel")?(N=(oe,B)=>{var E;B.velocity.y>150&&((E=O.current)==null||E.close())},e[8]=N):N=e[8];const z=N;let u;e[9]!==s?(u=T(Y.sheet,s),e[9]=s,e[10]=u):u=e[10];let g;e[11]===Symbol.for("react.memo_cache_sentinel")?(g={top:0},e[11]=g):g=e[11];let p;e[12]!==d||e[13]!==h||e[14]!==o||e[15]!==a||e[16]!==u||e[17]!==f?(p=t.jsx($,{ref:P,contextRef:O,className:u,onClose:a,initial:V,animate:L,exit:U,duration:o,transition:f,drag:"y",dragControls:h,dragListener:!1,dragConstraints:g,dragElastic:.1,dragSnapToOrigin:!0,onDragEnd:z,children:d}),e[12]=d,e[13]=h,e[14]=o,e[15]=a,e[16]=u,e[17]=f,e[18]=p):p=e[18];let _;return e[19]!==k||e[20]!==p?(_=t.jsx(I.Provider,{value:k,children:p}),e[19]=k,e[20]=p,e[21]=_):_=e[21],_},Z=r=>{const e=R.c(11);let s,a;e[0]!==r?({className:s,...a}=r,e[0]=r,e[1]=s,e[2]=a):(s=e[1],a=e[2]);const d=x.use(I);let m;e[3]!==d.controls?(m=f=>{d.controls.start(f)},e[3]=d.controls,e[4]=m):m=e[4];const c=m;let o;e[5]!==s?(o=T(s,Y.header),e[5]=s,e[6]=o):o=e[6];let l;return e[7]!==c||e[8]!==a||e[9]!==o?(l=t.jsx(J.div,{className:o,...a,onPointerDown:c}),e[7]=c,e[8]=a,e[9]=o,e[10]=l):l=e[10],l};i.Context=$.Context;i.Header=Z;i.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ className, ...props }",optional:!1,type:null}],returns:null}],displayName:"Sheet",props:{duration:{defaultValue:{value:"0.3",computed:!1},required:!1},transition:{defaultValue:{value:"{ duration, ease: [0.25, 0.1, 0.25, 1] }",computed:!1},required:!1}}};const ee="Sheet_sheet_r06pu_1",te="Sheet_heder_r06pu_23",se="Sheet_body_r06pu_37",ne="Sheet_footer_r06pu_42",n={sheet:ee,heder:te,"sticky-shadow":"Sheet_sticky-shadow_r06pu_1",body:se,footer:ne},he={title:"UI/Sheet",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},b={render:()=>{const[r,e]=x.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>e(!0),children:"Open Sheet"}),r===!0&&t.jsxs(i,{className:n.sheet,onClose:()=>e(!1),children:[t.jsxs(i.Header,{className:n.heder,children:[t.jsx("div",{className:n.title,children:"Example Sheet"}),t.jsx(i.Context.Consumer,{children:s=>t.jsx("div",{className:n.close,onClick:()=>s.close(),children:"x"})})]}),t.jsx("div",{className:n.body,children:t.jsx("div",{className:n.text,children:"This example demonstrates how to use a headless sheet component, based on dialog All you need to do is design a visually appealing block and place it inside the dialog."})}),t.jsx("div",{className:n.footer,children:t.jsx("div",{className:n.text,children:"Sticky Footer Content"})})]})]})}},j={render:()=>{const[r,e]=x.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>e(!0),children:"Open Sheet"}),r===!0&&t.jsxs(i,{className:n.sheet,onClose:()=>e(!1),duration:.5,children:[t.jsxs("div",{className:n.heder,children:[t.jsx("div",{className:n.title,children:"Example Sheet"}),t.jsx(i.Context.Consumer,{children:s=>t.jsx("div",{className:n.close,onClick:()=>s.close(),children:"x"})})]}),t.jsx("div",{className:n.body,children:t.jsx("div",{className:n.text,children:"This example demonstrates how to use a headless sheet component, based on dialog All you need to do is design a visually appealing block and place it inside the dialog."})}),t.jsx("div",{className:n.footer,children:t.jsx("div",{className:n.text,children:"Sticky Footer Content"})})]})]})}};var w,D,q;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(q=(D=b.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var A,F,H;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(H=(F=j.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const ue=["Default","CustomAnimation"];export{j as CustomAnimation,b as Default,ue as __namedExportsOrder,he as default};
