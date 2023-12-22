import styled from 'styled-components';

export const Badge = styled.span`
  border-radius: 6.5px;
  background: #ff7e1b;
  min-width: 19px;
  height: 13px;
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Container = styled.div`
  width: calc(100vw - 16px);
  max-width: 360px;
  height: 256px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5);
  position: absolute;
  right: -62px;
  top: 60px;
  z-index: 10;
`;

export const Heading = styled.h4`
  color: #1d2026;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 24px 0 27px 24px;
`;

export const EmptyMessage = styled.h4`
  margin: 0;
  color: #69707d;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
  margin-top: 77px;
`;

export const ProductsContainer = styled.div`
  padding: 24px 24px 32px 24px;
`;
