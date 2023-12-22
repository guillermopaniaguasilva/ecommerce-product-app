import styled from 'styled-components';

export const StyledMain = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: calc(100vw - 48px);
  padding-top: 24px;
`;

export const CompanyHeading = styled.h4`
  color: #ff7e1b;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.846px;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  color: #1d2026;
  font-family: Kumbh Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 114.286% */
  margin-top: 19px;
`;

export const Description = styled.p`
  color: #69707d;
  font-family: Kumbh Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  margin-top: 15px;
`;

export const UnitPrice = styled.span`
  color: #1d2026;
  font-family: Kumbh Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const DiscountPill = styled.div`
  border-radius: 6px;
  background: #ffeee2;
  width: 51px;
  height: 27px;
  margin-left: 16px;
`;

export const DiscountValue = styled.div`
  color: #ff7e1b;
  font-family: Kumbh Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FullPrice = styled.span`
  color: #b6bcc8;
  font-family: Kumbh Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
  text-decoration: line-through;
`;
