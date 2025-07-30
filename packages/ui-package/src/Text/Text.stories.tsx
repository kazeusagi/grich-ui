import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '..';
import { Text } from '.';

const meta = {
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <>aa</>,
  },
};

export const Children: Story = {
  args: {
    children: <Button label="aa"></Button>,
  },
};
