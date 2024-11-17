import { Masonry } from "@/components/masonry/Masonry";
import type { Meta, StoryObj } from "@storybook/react";
import { data } from "../data/cities";

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
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, auto))",
      alignItems: "start",
      gap: "0.8rem",
      padding: "2rem",
    },

    children: data.map((item, index) => (
      <div
        key={index}
        style={{
          background: "white",
          border: "1px solid grey",
          borderRadius: "0.5rem",
          padding: "0 1rem",
        }}
      >
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </div>
    )),
  },
};
