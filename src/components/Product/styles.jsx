import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 375px) {
    margin-bottom: 80%;
  }
`;

export const ProductBanner = styled.div`

`;

export const Title = styled.span`
  position: relative;
  //width: 58px;
  width: 50%;
  //height: 16px;
  height: 10%;
  top: 40%;
  left: 20%;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #084154;

  @media (max-width: 375px) {
    top: 10%;    
  }
`;

export const Price = styled.span`
  position: relative;
  width: 84px;
  height: 21px;
  top: 50%;
  left: 20%;

  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;

  color: #084154;

  @media (max-width: 375px) {
    top: 20%;
  }
`;

export const BuyButton = styled.button`
  position: absolute;
  top: 180%;
  width: 240px;
  height: 52px;
  align-self: center;
  
  font-style: normal;
  font-weight: 900;
  font-size: 1.2rem;

  background: #3EC6E0;
  border-radius: 5px;
  border-width: 0px;

  color: #FFFFFF;

  > img {
    display: none;
  }

  ${(props) => props.bought && css`
    background: #084154;

    > img {
      position: absolute;
      display: block;
      height: 150%;
      right: 0;
      bottom: 0;
    }
  `}

  @media (max-width: 375px) {    
    top: 150%;
  }
`;