import { IconContainer, Line } from './styles';

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (_: boolean) => void;
};

export default function HamburgerMenuIcon({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileMenuProps) {
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="d-flex flex-column">
      <IconContainer onClick={toggleMenu}>
        <Line
          style={{
            transform: isMobileMenuOpen
              ? 'rotate(-45deg) translate(-8px, 6px)'
              : 'none',
          }}
        />
        <Line style={{ opacity: isMobileMenuOpen ? 0 : 1 }} />
        <Line
          style={{
            transform: isMobileMenuOpen
              ? 'rotate(45deg) translate(-5px, -2.5px)'
              : 'none',
          }}
        />
      </IconContainer>
    </div>
  );
}
