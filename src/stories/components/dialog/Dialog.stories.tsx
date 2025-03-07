import { Dialog } from "@/components/dialog/Dialog";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import styles from "./Dialog.module.css";

const meta = {
  title: "UI/Dialog",

  component: Dialog,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    dismiss: {
      control: "boolean",
      description:
        "Determines if the dialog can be closed by pressing the Escape key. Default: true.",
    },

    duration: {
      control: {
        type: "number",
        min: 0,
        step: 0.01,
      },
      description: "Specifies the animation duration in seconds. Default: 0.3.",
    },
  },

  args: {
    dismiss: true,
    duration: 0.3,
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ dismiss, duration }) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Dialog</button>

        {open === true && (
          <Dialog
            className={styles.dialog}
            dismiss={dismiss}
            duration={duration}
            onClose={() => setOpen(false)}
          >
            <div className={styles.heder}>
              <div className={styles.title}>Example Dialog</div>
              <Dialog.Context.Consumer>
                {(context) => (
                  <div className={styles.close} onClick={() => context.close()}>
                    x
                  </div>
                )}
              </Dialog.Context.Consumer>
            </div>
            <div className={styles.body}>
              <div className={styles.text}>
                This example demonstrates how to use a headless dialog
                component. All you need to do is design a visually appealing
                block and place it inside the dialog.
              </div>
              <div className={styles.text}>
                This example demonstrates how to use a headless dialog
                component. All you need to do is design a visually appealing
                block and place it inside the dialog.
              </div>
              <div className={styles.text}>
                This example demonstrates how to use a headless dialog
                component. All you need to do is design a visually appealing
                block and place it inside the dialog.
              </div>
            </div>
            <div className={styles.footer}>
              <div className={styles.text}>Sticky Footer Content</div>
            </div>
          </Dialog>
        )}
      </>
    );
  },
};

export const CustomAnimation: Story = {
  render: ({ dismiss, duration }) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Dialog</button>

        {open === true && (
          <Dialog
            className={styles.dialog}
            dismiss={dismiss}
            duration={duration}
            onClose={() => setOpen(false)}
            initial={{ opacity: 0, translateY: "1rem", scale: 0.5 }}
            animate={{ opacity: 1, translateY: 0, scale: 1 }}
            exit={{ opacity: 0, translateY: "-1rem", scale: 1.5 }}
            transition={{ ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            <div className={styles.heder}>
              <div className={styles.title}>Example Dialog</div>
              <Dialog.Context.Consumer>
                {(context) => (
                  <div className={styles.close} onClick={() => context.close()}>
                    x
                  </div>
                )}
              </Dialog.Context.Consumer>
            </div>
            <div className={styles.body}>
              <div className={styles.text}>
                This example demonstrates how to use a headless dialog
                component. All you need to do is design a visually appealing
                block and place it inside the dialog.
              </div>
            </div>
            <div className={styles.footer}>
              <div className={styles.text}>Sticky Footer Content</div>
            </div>
          </Dialog>
        )}
      </>
    );
  },
};
