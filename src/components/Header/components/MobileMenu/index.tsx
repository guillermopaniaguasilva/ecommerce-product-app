import close from 'assets/images/icon-close.svg';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Content, Icon, MenuOption, Overlay } from './styles';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const menuOptions = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  return (
    <Overlay $isOpen={isOpen}>
      <CSSTransition
        in={isOpen}
        nodeRef={contentRef}
        timeout={800}
        classNames="content"
        mountOnEnter
        unmountOnExit
      >
        <Content
          ref={contentRef}
          $isOpen={isOpen}
          onClick={(e) => e.stopPropagation()}
        >
          <Icon src={close} onClick={onClose} />
          <ul style={{ marginTop: '54px' }} className="mb-0 p-0">
            {menuOptions.map((option) => (
              <MenuOption className="d-block" key={option} href="#">
                {option}
              </MenuOption>
            ))}
          </ul>
        </Content>
      </CSSTransition>
    </Overlay>
  );
}
