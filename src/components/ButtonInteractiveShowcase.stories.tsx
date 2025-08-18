import type { Meta, StoryObj } from "@storybook/react";
import ButtonInteractiveShowcase from "./ButtonInteractiveShowcase";

const meta: Meta<typeof ButtonInteractiveShowcase> = {
  title: "Showcases/Button – Interactive States",
  component: ButtonInteractiveShowcase,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ButtonInteractiveShowcase>;

/** Single story; all UI/controls live inside the showcase component itself. */
export const Default: Story = {};