import logo from 'assets/images/logo.svg';
import { useState } from 'react';
import Avatar from './components/Avatar';
import HamburgerIcon from './components/HamburgerIcon';
import MiniCart from './components/MiniCart';
import MobileMenu from './components/MobileMenu';
import { Logo } from './styles';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const style = {
    padding: '20px 0 28px 0',
  };

  return (
    <header
      style={style}
      className="d-flex align-items-center justify-content-between w-100"
    >
      <div className="d-flex align-items-center">
        <HamburgerIcon onOpen={handleMenuToggle} />
        <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMenuToggle} />
        <Logo src={logo} />
      </div>
      <div>
        <MiniCart />
        <Avatar />
      </div>
    </header>
  );
}
