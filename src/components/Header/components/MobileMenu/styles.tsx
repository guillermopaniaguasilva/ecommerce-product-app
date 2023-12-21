import styled from 'styled-components';

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
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 250ms ease-in-out, visibility 1s ease-in-out;
  z-index: 1;
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

  &.content-enter {
    transform: translateX(-100%);
  }
  &.content-enter-active {
    transform: translateX(0);
    transition: transform 250ms ease-in-out;
  }
  &.content-exit {
    transform: translateX(0);
  }
  &.content-exit-active {
    transform: translateX(-100%);
    transition: transform 250ms ease-in-out;
  }
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
