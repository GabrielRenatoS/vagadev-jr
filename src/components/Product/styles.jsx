import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ProductBanner = styled.div`

`;

export const Title = styled.text`
  position: relative;
  width: 58px;
  height: 16px;
  top: 40%;
  left: 20%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #084154;
`;

export const Price = styled.text`
  position: relative;
  width: 84px;
  height: 21px;
  top: 50%;
  left: 20%;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;

  color: #084154;
`;

export const BuyButton = styled.button`
  position: absolute;
  top: 180%;
  width: 240px;
  height: 52px;
  align-self: center;
  
  background: #3EC6E0;
  border-radius: 5px;

  color: #FFFFFF;
`;