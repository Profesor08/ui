import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as a}from"./Dialog-Bk4DpU3L.js";import{r as x}from"./index-rE2EVDCa.js";import"./compiler-runtime-DYK0Qyf8.js";import"./index-lfFnjxir.js";import"./index-IrikWTKM.js";const y="Dialog_dialog_1pgc4_1",v="Dialog_heder_1pgc4_24",N="Dialog_body_1pgc4_38",C="Dialog_footer_1pgc4_45",s={dialog:y,heder:v,"sticky-shadow":"Dialog_sticky-shadow_1pgc4_1",body:N,footer:C},O={title:"UI/Dialog",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{dismiss:{control:"boolean",description:"Determines if the dialog can be closed by pressing the Escape key. Default: true."},duration:{control:{type:"number",min:0,step:.01},description:"Specifies the animation duration in seconds. Default: 0.3."}},args:{dismiss:!0,duration:.3}},t={render:({dismiss:i,duration:l})=>{const[r,n]=x.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),children:"Open Dialog"}),r===!0&&e.jsxs(a,{className:s.dialog,dismiss:i,duration:l,onClose:()=>n(!1),children:[e.jsxs("div",{className:s.heder,children:[e.jsx("div",{className:s.title,children:"Example Dialog"}),e.jsx(a.Context.Consumer,{children:({onClose:d})=>e.jsx("div",{className:s.close,onClick:d,children:"x"})})]}),e.jsxs("div",{className:s.body,children:[e.jsx("div",{className:s.text,children:"This example demonstrates how to use a headless dialog component. All you need to do is design a visually appealing block and place it inside the dialog."}),e.jsx("div",{className:s.text,children:"This example demonstrates how to use a headless dialog component. All you need to do is design a visually appealing block and place it inside the dialog."}),e.jsx("div",{className:s.text,children:"This example demonstrates how to use a headless dialog component. All you need to do is design a visually appealing block and place it inside the dialog."})]}),e.jsx("div",{className:s.footer,children:e.jsx("div",{className:s.text,children:"Sticky Footer Content"})})]})]})}},o={render:({dismiss:i,duration:l})=>{const[r,n]=x.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),children:"Open Dialog"}),r===!0&&e.jsxs(a,{className:s.dialog,dismiss:i,duration:l,onClose:()=>n(!1),initial:{opacity:0,translateY:"1rem",scale:.5},animate:{opacity:1,translateY:0,scale:1},exit:{opacity:0,translateY:"-1rem",scale:1.5},transition:{ease:[.175,.885,.32,1.275]},children:[e.jsxs("div",{className:s.heder,children:[e.jsx("div",{className:s.title,children:"Example Dialog"}),e.jsx(a.Context.Consumer,{children:({onClose:d})=>e.jsx("div",{className:s.close,onClick:d,children:"x"})})]}),e.jsx("div",{className:s.body,children:e.jsx("div",{className:s.text,children:"This example demonstrates how to use a headless dialog component. All you need to do is design a visually appealing block and place it inside the dialog."})}),e.jsx("div",{className:s.footer,children:e.jsx("div",{className:s.text,children:"Sticky Footer Content"})})]})]})}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    dismiss,
    duration
  }) => {
    const [open, setOpen] = useState(false);
    return <>\r
        <button onClick={() => setOpen(true)}>Open Dialog</button>\r
\r
        {open === true && <Dialog className={styles.dialog} dismiss={dismiss} duration={duration} onClose={() => setOpen(false)}>\r
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
              <div className={styles.text}>\r
                This example demonstrates how to use a headless dialog\r
                component. All you need to do is design a visually appealing\r
                block and place it inside the dialog.\r
              </div>\r
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    dismiss,
    duration
  }) => {
    const [open, setOpen] = useState(false);
    return <>\r
        <button onClick={() => setOpen(true)}>Open Dialog</button>\r
\r
        {open === true && <Dialog className={styles.dialog} dismiss={dismiss} duration={duration} onClose={() => setOpen(false)} initial={{
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
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const S=["Default","CustomAnimation"];export{o as CustomAnimation,t as Default,S as __namedExportsOrder,O as default};
