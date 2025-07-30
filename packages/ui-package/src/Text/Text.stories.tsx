import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from '.';

const meta = {
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <>Text</>,
  },
};

export const Red: Story = {
  args: {
    children: <>Text</>,
    color: 'red',
  },
};
