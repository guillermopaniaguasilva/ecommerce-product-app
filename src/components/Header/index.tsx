import logo from 'assets/images/logo.svg';
import Avatar from './components/Avatar';
import MiniCart from './components/MiniCart';
import MobileMenu from './components/MobileMenu';
import { Logo } from './styles';

export default function Header() {
  const style = {
    padding: '20px 0 28px 0',
  };

  return (
    <header
      style={style}
      className="d-flex align-items-center justify-content-between w-100"
    >
      <div className="d-flex align-items-center">
        <MobileMenu />
        <Logo src={logo} />
      </div>
      <div>
        <MiniCart />
        <Avatar />
      </div>
    </header>
  );
}
