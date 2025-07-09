import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// You will need to import one of your icons here!
// Find an icon from 'src/assets/icons' and import it.
// Example: import { Svg3Mjex1N7Am } from '../../../assets/icons/svg-3mjex1n7am';

// Temporary placeholder icon if you don't have one ready
const PlaceholderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const meta: Meta<typeof Button> = {
  title: 'UI/Button', // This will show up as "UI/Button" in the Storybook sidebar
  component: Button,
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium'],
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// A story for the default Primary button
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Button Label',
    disabled: false,
  },
};

// A story for the button with an icon
export const WithIcon: Story = {
  args: {
    ...Primary.args, // Inherits args from the Primary story
    label: 'Search',
    // Replace PlaceholderIcon with your real icon component
    icon: <PlaceholderIcon />, 
  },
};

// A story specifically for the Disabled state
export const Disabled: Story = {
  args: {
    ...Primary.args,
    label: 'Disabled',
    disabled: true,
  },
};
// Add this new story to the bottom of your Button.stories.tsx file