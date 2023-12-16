import close from 'assets/images/icon-close.svg';
import { Content, Icon, MenuOption, Overlay } from './styles';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const menuOptions = ['Collections', 'Men', 'Women', 'About', 'Contact'];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <Overlay $isOpen={isOpen} onClick={onClose}>
      <Content $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <Icon src={close} onClick={onClose} />
        <ul style={{ marginTop: '54px' }} className="mb-0 p-0">
          {menuOptions.map((option) => (
            <MenuOption className="d-block" key={option} href="#">
              {option}
            </MenuOption>
          ))}
        </ul>
      </Content>
    </Overlay>
  );
}
