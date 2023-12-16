import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.div<{
  $isOpen: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
`;

export const Content = styled.div<{
  $isOpen: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  background: #fff;
  padding: 20px;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.5s ease-in-out;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const MenuOption = styled.a`
  color: #1d2026;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  text-decoration: none;
  color: inherit;
  padding: 0;
  margin: 0;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
