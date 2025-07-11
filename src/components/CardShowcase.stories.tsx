import type { Meta, StoryObj } from '@storybook/react';
import { CardShowcase } from './CardShowcase';

const meta: Meta<typeof CardShowcase> = {
  title: 'Showcases/Card Demo',
  component: CardShowcase,
};

export default meta;
type Story = StoryObj<typeof CardShowcase>;

export const Default: Story = {};