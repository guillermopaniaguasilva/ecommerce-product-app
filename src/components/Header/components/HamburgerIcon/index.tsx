import menu from 'assets/images/icon-menu.svg';
import { Icon } from './styles';

type HamburgerIconProps = {
  onOpen: () => void;
};

export default function HamburgerIcon({ onOpen }: HamburgerIconProps) {
  return <Icon src={menu} onClick={onOpen} />;
}
