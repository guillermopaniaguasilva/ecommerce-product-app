import styled from 'styled-components';

export const StyledButton = styled.button<{
  $withShadow: boolean;
  $width: number | undefined;
}>`
  border: none;
  margin: 0;
  padding: 0;
  background: none;
  cursor: pointer;

  width: ${({ $width }) => ($width ? $width + 'px' : '100%')};
  height: 56px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme, $withShadow }) =>
    $withShadow && '0px 20px 50px -20px ' + theme.colors.orange};
`;
