import { Masonry } from "@/components/masonry/Masonry";
import { data } from "@/stories/data/cities";
import type { Meta, StoryObj } from "@storybook/react";
import styles from "./Masonry.module.scss";

const meta = {
  title: "UI/Masonry",

  component: Masonry,

  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Masonry>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    className: styles.masonry,

    children: data.map((item, index) => (
      <div key={index} className={styles.item}>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </div>
    )),
  },
};
