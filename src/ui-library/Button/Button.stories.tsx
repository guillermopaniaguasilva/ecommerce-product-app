import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from '.';
import MiniCartIcon from '../../assets/icons/MiniCartIcon';

const meta = {
  title: 'UI Library/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithOutIcon: Story = {
  args: {
    width: 327,
    children: 'Button',
  },
};

export const WithIcon: Story = (args) => <Button {...args} />;
WithIcon.args = {
  width: 327,
  icon: <MiniCartIcon color="#FFFFFF" />,
  children: 'Button',
};

export const WithShadow: Story = {
  args: {
    width: 327,
    children: 'Button',
    withShadow: true,
  },
};
