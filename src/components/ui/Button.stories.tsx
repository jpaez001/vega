// src/components/ui/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button, FabButton, IconButton } from "./Button";
import { Search, ChevronRight, X, List } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: { type: "select" }, options: ["primary", "secondary", "tertiary"] },
    size: { control: { type: "inline-radio" }, options: ["sm", "md", "lg"] },
    state: { control: { type: "inline-radio" }, options: ["default", "hover", "focused", "pressed", "disabled"] },
    loading: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: "Button label",
    variant: "primary",
    size: "md",
    state: "default",
    startIcon: <Search className="h-5 w-5" />,
    endIcon: <ChevronRight className="h-5 w-5" />,
    loading: false,
  },
};

export const AllStates: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Button {...args} state="default">Primary</Button>
        <Button {...args} state="hover">Hover</Button>
        <Button {...args} state="focused">Focused</Button>
        <Button {...args} state="pressed">Pressed</Button>
        <Button {...args} state="disabled">Disabled</Button>
      </div>

      <div className="flex items-center gap-3">
        <Button {...args} variant="secondary" state="default">Secondary</Button>
        <Button {...args} variant="secondary" state="hover">Hover</Button>
        <Button {...args} variant="secondary" state="focused">Focused</Button>
        <Button {...args} variant="secondary" state="pressed">Pressed</Button>
        <Button {...args} variant="secondary" state="disabled">Disabled</Button>
      </div>

      <div className="flex items-center gap-3">
        <Button {...args} variant="tertiary" state="default">Tertiary</Button>
        <Button {...args} variant="tertiary" state="hover">Hover</Button>
        <Button {...args} variant="tertiary" state="focused">Focused</Button>
        <Button {...args} variant="tertiary" state="pressed">Pressed</Button>
        <Button {...args} variant="tertiary" state="disabled">Disabled</Button>
      </div>
    </div>
  ),
  args: {
    variant: "primary",
    size: "md",
    startIcon: <Search className="h-5 w-5" />,
    endIcon: <ChevronRight className="h-5 w-5" />,
    loading: false,
  },
};

/* ===== FAB & IconButton stories ===== */

export const FAB: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <FabButton icon={List} state="default" />
      <FabButton icon={List} state="focused" />
      <FabButton icon={List} state="pressed" />
      <FabButton icon={List} state="disabled" />
    </div>
  ),
};

export const IconButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <section>
        <h4 className="mb-2 font-semibold">Default</h4>
        <div className="flex gap-3">
          <IconButton variant="default" icon={X} state="default" />
          <IconButton variant="default" icon={X} state="hover" />
          <IconButton variant="default" icon={X} state="focused" />
          <IconButton variant="default" icon={X} state="pressed" />
          <IconButton variant="default" icon={X} state="disabled" />
        </div>
      </section>

      <section>
        <h4 className="mb-2 font-semibold">Outlined</h4>
        <div className="flex gap-3">
          <IconButton variant="outlined" icon={ChevronRight} state="default" />
          <IconButton variant="outlined" icon={ChevronRight} state="hover" />
          <IconButton variant="outlined" icon={ChevronRight} state="focused" />
          <IconButton variant="outlined" icon={ChevronRight} state="pressed" />
          <IconButton variant="outlined" icon={ChevronRight} state="disabled" />
        </div>
      </section>

      <section>
        <h4 className="mb-2 font-semibold">Filled</h4>
        <div className="flex gap-3">
          <IconButton variant="filled" icon={ChevronRight} state="default" />
          <IconButton variant="filled" icon={ChevronRight} state="hover" />
          <IconButton variant="filled" icon={ChevronRight} state="focused" />
          <IconButton variant="filled" icon={ChevronRight} state="pressed" />
          <IconButton variant="filled" icon={ChevronRight} state="disabled" />
        </div>
      </section>
    </div>
  ),
};