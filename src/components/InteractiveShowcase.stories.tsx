import type { Meta, StoryObj } from '@storybook/react';
import { InteractiveShowcase } from './InteractiveShowcase';

const meta: Meta<typeof InteractiveShowcase> = {
  title: 'Showcases/Interactive Demo',
  component: InteractiveShowcase,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};