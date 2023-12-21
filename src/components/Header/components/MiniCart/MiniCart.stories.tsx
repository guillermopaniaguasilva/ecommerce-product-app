import type { Meta, StoryObj } from '@storybook/react';
import MiniCart from '.';

const meta = {
  title: 'Product Page/Mini Cart',
  component: MiniCart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MiniCart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
