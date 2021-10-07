import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  //margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;  
`;

export const Title = styled.h3`
  position: absolute;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  left: 10%;  
  
  color: #084154;

  @media (max-width: 375px) {
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
  }
`;

export const List = styled.div`
  //display: inline-flex;
  position: relative;
  //margin-top: 10%;
  top: 10%;
  display: flex;

  > div {    
    height: 40vh;
  }

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;