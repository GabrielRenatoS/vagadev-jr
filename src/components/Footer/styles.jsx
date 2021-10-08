import styled from 'styled-components';

export const Container = styled.footer`
  position: relative;
  width: 100vw;
  height: 50px;
  left: 0;
  bottom: 0;

  display: flex;

  background: #084154;
`;

export const Logo = styled.div`
  position: relative;
  flex: 1;

  > img {
    position: absolute;
    height: 80%;
    right: 10%;
    top: 15%;
  }
`;

export const FooterText = styled.div`
  position: relative;
  flex: 3;
  height: 100%;
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
