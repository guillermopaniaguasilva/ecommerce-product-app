import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  /* width: calc(100% - 32px); */
  width: 100vw;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 228px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 540px;
    margin: auto;
    padding: 0 48px;
  }
`;

export default Wrapper;
