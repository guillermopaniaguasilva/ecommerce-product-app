import close from 'assets/images/icon-close.svg';
import menu from 'assets/images/icon-menu.svg';
import { useState } from 'react';
import { HamburgerIcon } from './styles';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <HamburgerIcon
        src={isOpen ? close : menu}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
}
