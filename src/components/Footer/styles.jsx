import styled from 'styled-components';

export const Container = styled.footer`
  position: relative;
  //position: fixed;
  width: 100vw;
  height: 50px;
  left: 0;
  //top: 250%;
  bottom: 0;

  display: flex;

  background: #084154;

  @media (max-width: 375px) {
    //position: absolute;
    //bottom: 0px;
  }
`;

export const Logo = styled.div`
  position: relative;
  flex: 1;

  > img {
    position: absolute;
    height: 80%;
    left: 80%;
    top: 15%;
  }
`;

export const FooterText = styled.div`
  position: relative;
  flex: 3;
  //width: 70%;
  height: 100%;
  //left: 50%;
  //top: 2111px;
  background: #3EC6E0;

  > p {
    position: absolute;
    left: 5%;
    top: 40%;
    
  
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: left; 
  
    color: #FFFFFF;

  }
`;
