import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;

// A story that shows how the switch works interactively
export const Default: StoryObj<typeof Switch> = {
  render: (args) => {
    // We use React's useState to make the switch interactive in Storybook
    const [isChecked, setIsChecked] = useState(args.checked || false);

    return <Switch checked={isChecked} onChange={setIsChecked} />;
  },
  args: {
    checked: false,
  },
};

export const Checked: StoryObj<typeof Switch> = {
  ...Default,
  args: {
    checked: true,
  },
};