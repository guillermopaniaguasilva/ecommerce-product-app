import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import HamburgerMenuIcon from '.';

const HamburgerMenuIconStory = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HamburgerMenuIcon
      isMobileMenuOpen={isOpen}
      setIsMobileMenuOpen={() => setIsOpen(!isOpen)}
    />
  );
};

const meta = {
  title: 'UI Library/Hamburger Menu Icon',
  component: HamburgerMenuIconStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HamburgerMenuIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
