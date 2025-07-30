import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta = {
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Click Me',
    onClick: () => alert('Button clicked!'),
  },
};

export const Red: Story = {
  args: {
    label: 'Click Me',
    color: 'red',
    onClick: () => alert('Button clicked!'),
  },
};
