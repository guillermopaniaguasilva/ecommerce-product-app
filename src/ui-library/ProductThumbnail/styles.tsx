import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin-right: 16px;
`;

export const TrashIcon = styled.img`
  width: 14px;
  height: 16px;
  margin-left: auto;
  cursor: pointer;
`;

export const Title = styled.p`
  margin: 0;
  color: #69707d;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
`;

export const UnitPrice = styled.span`
  color: #69707d;

  font-family: Kumbh Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;

export const Total = styled.span`
  color: #1d2026;

  font-family: Kumbh Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
`;
