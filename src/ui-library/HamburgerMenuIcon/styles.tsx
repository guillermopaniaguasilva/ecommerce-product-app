import styled from 'styled-components';

export const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 18px;
  width: 21px;
  z-index: 1;
`;

export const Line = styled.div`
  width: 21px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.darkGrayishBlue};
  transition: transform 0.3s ease;
`;
