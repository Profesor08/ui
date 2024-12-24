import { Sheet } from "@/components/sheet/Sheet";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import styles from "./Sheet.module.css";

const meta = {
  title: "UI/Sheet",

  component: Sheet,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Sheet</button>

        {open === true && (
          <Sheet className={styles.sheet} onClose={() => setOpen(false)}>
            <div className={styles.heder}>
              <div className={styles.title}>Example Sheet</div>
              <Sheet.Context.Consumer>
                {({ onClose }) => (
                  <div className={styles.close} onClick={onClose}>
                    x
                  </div>
                )}
              </Sheet.Context.Consumer>
            </div>
            <div className={styles.body}>
              <div className={styles.text}>
                This example demonstrates how to use a headless sheet component,
                based on dialog All you need to do is design a visually
                appealing block and place it inside the dialog.
              </div>
            </div>
            <div className={styles.footer}>
              <div className={styles.text}>Sticky Footer Content</div>
            </div>
          </Sheet>
        )}
      </>
    );
  },
};

export const CustomAnimation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Sheet</button>

        {open === true && (
          <Sheet
            className={styles.sheet}
            onClose={() => setOpen(false)}
            duration={0.5}
          >
            <div className={styles.heder}>
              <div className={styles.title}>Example Sheet</div>
              <Sheet.Context.Consumer>
                {({ onClose }) => (
                  <div className={styles.close} onClick={onClose}>
                    x
                  </div>
                )}
              </Sheet.Context.Consumer>
            </div>
            <div className={styles.body}>
              <div className={styles.text}>
                This example demonstrates how to use a headless sheet component,
                based on dialog All you need to do is design a visually
                appealing block and place it inside the dialog.
              </div>
            </div>
            <div className={styles.footer}>
              <div className={styles.text}>Sticky Footer Content</div>
            </div>
          </Sheet>
        )}
      </>
    );
  },
};
