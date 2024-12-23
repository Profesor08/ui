import { Dropdown } from "@/components/dropdown/Dropdown";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/Dropdown",

  component: Dropdown,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: () => {
    return (
      <Dropdown>
        <Dropdown.Toggle>
          <div>Dropdown</div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <div>Dropdown Menu</div>
          <div>Dropdown Menu</div>
          <div>Dropdown Menu</div>
          <div>Dropdown Menu</div>
          <div>Dropdown Menu</div>
          <div>Dropdown Menu</div>
          <div>Dropdown Menu</div>
          <div>Dropdown Menu</div>
        </Dropdown.Menu>
      </Dropdown>
    );
  },
};
