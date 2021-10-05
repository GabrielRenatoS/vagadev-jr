import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;  
`;

export const OuterRectangle = styled.div`
  position: absolute;
  width: 565px;
  height: 249px;
  left: 354px;
  top: 111.48px;

  background: #3EC6E0;
  border-radius: 5px;
`;

export const InnerRectangle = styled.div`
  position: absolute;
  width: 565px;
  height: 249px;
  left: 344px;
  top: 101.48px;

  background: #084154;

  border: 2px solid #3EC6E0;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const Indicator = styled.div`
  position: absolute;
  width: 18.37px;
  height: 18.37px;
  left: 399.98px;
  top: 101.99px;

  background: #3EC6E0;
  transform: rotate(135deg);

`;


export const List = styled.div`

`;

export const Title = styled.span`
  position: absolute;
  width: 120px;
  height: 19px;
  left: 573px;
  top: 147px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */


  color: #FFFFFF;

`;

export const Item = styled.span`  
  position: absolute;
  width: 79px;
  height: 124px;
  left: 573px;
  top: 187px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

color: #FFFFFF;
`;

