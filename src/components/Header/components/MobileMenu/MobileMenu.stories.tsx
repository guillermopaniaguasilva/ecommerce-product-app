import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import MobileMenu from '.';
import HamburgerIcon from '../HamburgerIcon';

const MobileMenuStory = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div style={{ width: '400px', height: '500px' }}>
      <div className="d-flex align-items-center w-100">
        <HamburgerIcon onOpen={handleMenuToggle} />
        <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMenuToggle} />
      </div>
    </div>
  );
};

const meta = {
  title: 'Product Page/Mobile Menu',
  component: MobileMenuStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MobileMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
