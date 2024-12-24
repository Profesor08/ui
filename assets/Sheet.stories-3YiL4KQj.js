import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as F}from"./compiler-runtime-DYK0Qyf8.js";import{D as k,c as T}from"./Dialog-B5ocKU23.js";import{r as O}from"./index-rE2EVDCa.js";import"./index-lfFnjxir.js";import"./index-IrikWTKM.js";const D="Sheet_sheet_x75gb_1",Y={sheet:D},o=r=>{const e=F.c(14),{className:n,onClose:v,children:y,duration:S,transition:i}=r,a=S===void 0?.3:S;let d;e[0]!==a||e[1]!==i?(d=i===void 0?{duration:a,ease:[.25,.1,.25,1]}:i,e[0]=a,e[1]=i,e[2]=d):d=e[2];const f=d;let c;e[3]===Symbol.for("react.memo_cache_sentinel")?(c={opacity:0,translateY:"100%"},e[3]=c):c=e[3];const E=c;let m;e[4]===Symbol.for("react.memo_cache_sentinel")?(m={opacity:1,translateY:0},e[4]=m):m=e[4];const w=m;let h;e[5]===Symbol.for("react.memo_cache_sentinel")?(h={opacity:0,translateY:"100%"},e[5]=h):h=e[5];const A=h;let l;e[6]!==n?(l=T(Y.sheet,n),e[6]=n,e[7]=l):l=e[7];let p;return e[8]!==y||e[9]!==a||e[10]!==v||e[11]!==l||e[12]!==f?(p=s.jsx(k,{className:l,onClose:v,initial:E,animate:w,exit:A,duration:a,transition:f,children:y}),e[8]=y,e[9]=a,e[10]=v,e[11]=l,e[12]=f,e[13]=p):p=e[13],p};o.Context=k.Context;o.__docgenInfo={description:"",methods:[],displayName:"Sheet",props:{duration:{defaultValue:{value:"0.3",computed:!1},required:!1},transition:{defaultValue:{value:"{ duration, ease: [0.25, 0.1, 0.25, 1] }",computed:!1},required:!1}}};const $="Sheet_sheet_10121_1",q="Sheet_heder_10121_20",I="Sheet_body_10121_34",R="Sheet_footer_10121_39",t={sheet:$,heder:q,"sticky-shadow":"Sheet_sticky-shadow_10121_1",body:I,footer:R},J={title:"UI/Sheet",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},u={render:()=>{const[r,e]=O.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>e(!0),children:"Open Sheet"}),r===!0&&s.jsxs(o,{className:t.sheet,onClose:()=>e(!1),children:[s.jsxs("div",{className:t.heder,children:[s.jsx("div",{className:t.title,children:"Example Sheet"}),s.jsx(o.Context.Consumer,{children:({onClose:n})=>s.jsx("div",{className:t.close,onClick:n,children:"x"})})]}),s.jsx("div",{className:t.body,children:s.jsx("div",{className:t.text,children:"This example demonstrates how to use a headless sheet component, based on dialog All you need to do is design a visually appealing block and place it inside the dialog."})}),s.jsx("div",{className:t.footer,children:s.jsx("div",{className:t.text,children:"Sticky Footer Content"})})]})]})}},x={render:()=>{const[r,e]=O.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>e(!0),children:"Open Sheet"}),r===!0&&s.jsxs(o,{className:t.sheet,onClose:()=>e(!1),duration:.5,children:[s.jsxs("div",{className:t.heder,children:[s.jsx("div",{className:t.title,children:"Example Sheet"}),s.jsx(o.Context.Consumer,{children:({onClose:n})=>s.jsx("div",{className:t.close,onClick:n,children:"x"})})]}),s.jsx("div",{className:t.body,children:s.jsx("div",{className:t.text,children:"This example demonstrates how to use a headless sheet component, based on dialog All you need to do is design a visually appealing block and place it inside the dialog."})}),s.jsx("div",{className:t.footer,children:s.jsx("div",{className:t.text,children:"Sticky Footer Content"})})]})]})}};var C,N,_;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <button onClick={() => setOpen(true)}>Open Sheet</button>\r
\r
        {open === true && <Sheet className={styles.sheet} onClose={() => setOpen(false)}>\r
            <div className={styles.heder}>\r
              <div className={styles.title}>Example Sheet</div>\r
              <Sheet.Context.Consumer>\r
                {({
              onClose
            }) => <div className={styles.close} onClick={onClose}>\r
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
}`,...(_=(N=u.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var b,g,j;x.parameters={...x.parameters,docs:{...(b=x.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <button onClick={() => setOpen(true)}>Open Sheet</button>\r
\r
        {open === true && <Sheet className={styles.sheet} onClose={() => setOpen(false)} duration={0.5}>\r
            <div className={styles.heder}>\r
              <div className={styles.title}>Example Sheet</div>\r
              <Sheet.Context.Consumer>\r
                {({
              onClose
            }) => <div className={styles.close} onClick={onClose}>\r
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
}`,...(j=(g=x.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};const K=["Default","CustomAnimation"];export{x as CustomAnimation,u as Default,K as __namedExportsOrder,J as default};
