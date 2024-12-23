import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{D as a}from"./Dialog-CkDKcXsY.js";import{r as x}from"./index-DRjF_FHU.js";import"./index-rX-Bn4lm.js";const g="Dialog_dialog_1n2if_1",h="Dialog_heder_1n2if_22",v="Dialog_body_1n2if_36",y="Dialog_footer_1n2if_41",s={dialog:g,heder:h,"sticky-shadow":"Dialog_sticky-shadow_1n2if_1",body:v,footer:y},j={title:"UI/Dialog",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},t={render:()=>{const[l,n]=x.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),children:"Open Dialog"}),l===!0&&e.jsxs(a,{className:s.dialog,onClose:()=>n(!1),children:[e.jsxs("div",{className:s.heder,children:[e.jsx("div",{className:s.title,children:"Example Dialog"}),e.jsx(a.Context.Consumer,{children:({onClose:i})=>e.jsx("div",{className:s.close,onClick:i,children:"x"})})]}),e.jsx("div",{className:s.body,children:e.jsx("div",{className:s.text,children:"This example demonstrates how to use a headless dialog component. All you need to do is design a visually appealing block and place it inside the dialog."})}),e.jsx("div",{className:s.footer,children:e.jsx("div",{className:s.text,children:"Sticky Footer Content"})})]})]})}},o={render:()=>{const[l,n]=x.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),children:"Open Dialog"}),l===!0&&e.jsxs(a,{className:s.dialog,onClose:()=>n(!1),duration:.3,initial:{opacity:0,translateY:"1rem",scale:.5},animate:{opacity:1,translateY:0,scale:1},exit:{opacity:0,translateY:"-1rem",scale:1.5},transition:{ease:[.175,.885,.32,1.275]},children:[e.jsxs("div",{className:s.heder,children:[e.jsx("div",{className:s.title,children:"Example Dialog"}),e.jsx(a.Context.Consumer,{children:({onClose:i})=>e.jsx("div",{className:s.close,onClick:i,children:"x"})})]}),e.jsx("div",{className:s.body,children:e.jsx("div",{className:s.text,children:"This example demonstrates how to use a headless dialog component. All you need to do is design a visually appealing block and place it inside the dialog."})}),e.jsx("div",{className:s.footer,children:e.jsx("div",{className:s.text,children:"Sticky Footer Content"})})]})]})}};var r,d,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <button onClick={() => setOpen(true)}>Open Dialog</button>\r
\r
        {open === true && <Dialog className={styles.dialog} onClose={() => setOpen(false)}>\r
            <div className={styles.heder}>\r
              <div className={styles.title}>Example Dialog</div>\r
              <Dialog.Context.Consumer>\r
                {({
              onClose
            }) => <div className={styles.close} onClick={onClose}>\r
                    x\r
                  </div>}\r
              </Dialog.Context.Consumer>\r
            </div>\r
            <div className={styles.body}>\r
              <div className={styles.text}>\r
                This example demonstrates how to use a headless dialog\r
                component. All you need to do is design a visually appealing\r
                block and place it inside the dialog.\r
              </div>\r
            </div>\r
            <div className={styles.footer}>\r
              <div className={styles.text}>Sticky Footer Content</div>\r
            </div>\r
          </Dialog>}\r
      </>;
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <button onClick={() => setOpen(true)}>Open Dialog</button>\r
\r
        {open === true && <Dialog className={styles.dialog} onClose={() => setOpen(false)} duration={0.3} initial={{
        opacity: 0,
        translateY: "1rem",
        scale: 0.5
      }} animate={{
        opacity: 1,
        translateY: 0,
        scale: 1
      }} exit={{
        opacity: 0,
        translateY: "-1rem",
        scale: 1.5
      }} transition={{
        ease: [0.175, 0.885, 0.32, 1.275]
      }}>\r
            <div className={styles.heder}>\r
              <div className={styles.title}>Example Dialog</div>\r
              <Dialog.Context.Consumer>\r
                {({
              onClose
            }) => <div className={styles.close} onClick={onClose}>\r
                    x\r
                  </div>}\r
              </Dialog.Context.Consumer>\r
            </div>\r
            <div className={styles.body}>\r
              <div className={styles.text}>\r
                This example demonstrates how to use a headless dialog\r
                component. All you need to do is design a visually appealing\r
                block and place it inside the dialog.\r
              </div>\r
            </div>\r
            <div className={styles.footer}>\r
              <div className={styles.text}>Sticky Footer Content</div>\r
            </div>\r
          </Dialog>}\r
      </>;
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const k=["Default","CustomAnimation"];export{o as CustomAnimation,t as Default,k as __namedExportsOrder,j as default};
