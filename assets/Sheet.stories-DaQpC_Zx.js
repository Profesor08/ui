import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{D as x,c as f}from"./Dialog-CkDKcXsY.js";import{r as y}from"./index-DRjF_FHU.js";import"./index-rX-Bn4lm.js";const j="Sheet_sheet_j06am_1",g={sheet:j},n=({className:a,onClose:t,children:o,duration:i=.3,transition:v={duration:i,ease:[.25,.1,.25,1]}})=>{const C={opacity:0,translateY:"100%"},S={opacity:1,translateY:0},N={opacity:0,translateY:"100%"};return e.jsx(x,{className:f(g.sheet,a),onClose:t,initial:C,animate:S,exit:N,duration:i,transition:v,children:o})};n.Context=x.Context;n.__docgenInfo={description:"",methods:[],displayName:"Sheet",props:{duration:{defaultValue:{value:"0.3",computed:!1},required:!1},transition:{defaultValue:{value:"{ duration, ease: [0.25, 0.1, 0.25, 1] }",computed:!1},required:!1}}};const _="Sheet_sheet_1974y_1",b="Sheet_heder_1974y_18",k="Sheet_body_1974y_32",O="Sheet_footer_1974y_37",s={sheet:_,heder:b,"sticky-shadow":"Sheet_sticky-shadow_1974y_1",body:k,footer:O},T={title:"UI/Sheet",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},r={render:()=>{const[a,t]=y.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>t(!0),children:"Open Sheet"}),a===!0&&e.jsxs(n,{className:s.sheet,onClose:()=>t(!1),children:[e.jsxs("div",{className:s.heder,children:[e.jsx("div",{className:s.title,children:"Example Sheet"}),e.jsx(n.Context.Consumer,{children:({onClose:o})=>e.jsx("div",{className:s.close,onClick:o,children:"x"})})]}),e.jsx("div",{className:s.body,children:e.jsx("div",{className:s.text,children:"This example demonstrates how to use a headless sheet component, based on dialog All you need to do is design a visually appealing block and place it inside the dialog."})}),e.jsx("div",{className:s.footer,children:e.jsx("div",{className:s.text,children:"Sticky Footer Content"})})]})]})}},l={render:()=>{const[a,t]=y.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>t(!0),children:"Open Sheet"}),a===!0&&e.jsxs(n,{className:s.sheet,onClose:()=>t(!1),duration:.5,children:[e.jsxs("div",{className:s.heder,children:[e.jsx("div",{className:s.title,children:"Example Sheet"}),e.jsx(n.Context.Consumer,{children:({onClose:o})=>e.jsx("div",{className:s.close,onClick:o,children:"x"})})]}),e.jsx("div",{className:s.body,children:e.jsx("div",{className:s.text,children:"This example demonstrates how to use a headless sheet component, based on dialog All you need to do is design a visually appealing block and place it inside the dialog."})}),e.jsx("div",{className:s.footer,children:e.jsx("div",{className:s.text,children:"Sticky Footer Content"})})]})]})}};var d,c,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var m,p,u;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=l.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const D=["Default","CustomAnimation"];export{l as CustomAnimation,r as Default,D as __namedExportsOrder,T as default};
