import { Dropdown } from "@/components/dropdown/Dropdown";
import { args } from "@/stories/utils/argTypes";
import type { Meta, StoryObj } from "@storybook/react";
import clsx from "clsx";
import styles from "./Dropdown.module.css";

const meta = {
  title: "UI/Dropdown",

  component: Dropdown,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    width: args.getWidth(),
    placement: args.getPlacement(),
    padding: args.getPadding(),
  },

  args: {
    width: "fit",
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: ({ width, placement, padding }) => {
    return (
      <Dropdown placement={placement} width={width} padding={padding}>
        <Dropdown.Toggle>
          <Dropdown.Context.Consumer>
            {(context) => (
              <button
                className={clsx(styles.toggle, context.open && styles.open)}
              >
                Dropdown
              </button>
            )}
          </Dropdown.Context.Consumer>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <div className={styles.menu}>
            <div className={styles.menuGroup}>
              <div className={styles.menuItem}>Profile</div>
              <div className={styles.menuItem}>GitHub</div>
              <div className={styles.menuItem}>Support</div>
            </div>
            <div className={styles.menuSeparator} />
            <div className={styles.menuGroup}>
              <div className={styles.menuItem}>Log out</div>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    );
  },
};
