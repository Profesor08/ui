import { InputType } from "storybook/internal/types";

export const args = {
  getWidth: (): InputType => ({
    table: {
      type: {
        summary: undefined,
      },
    },
    control: "select",
    options: [300, "auto", "fit", "fill"],
    description: [
      "`number` - set fixed menu width",
      "`auto` - width is set by the content, same as if not set",
      "`fit` - set fixed width same as toggle width",
      "`fill` - set min width same as toggle width and allow to expand",
    ].join("\n\n"),
  }),

  getPlacement: (): InputType => ({
    type: "string",
    control: "select",
    options: [
      "top",
      "right",
      "bottom",
      "left",
      "top-start",
      "top-end",
      "right-start",
      "right-end",
      "bottom-start",
      "bottom-end",
      "left-start",
      "left-end",
    ],
    description: "Menu placement",
  }),

  getPadding: (): InputType => ({
    type: "number",
    control: { type: "number", min: -Infinity, max: Infinity, step: 1 },
    description: "Distance between menu and toggle",
  }),
} as const;
