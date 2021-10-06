import styled from 'styled-components';

export const Container = styled.div`
  /*position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;  
  height: 2.5rem;*/  
  
  /*Figma
  position: absolute;
  width: 1189px;
  height: 35px;
  left: 373px;
  top: 44px;*/

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 2rem;
  //left: 10vw;
  top: 44px;
  color: #FFF;
  
`;

export const Hamburger = styled.span`
  flex: 1;
  margin-left: 15vw;
  filter: invert(100%);
`;

export const Titulo = styled.span`
  flex: 5;
  margin-left: -5vw;

  > img {
    width: 163px;
    height: 35px;
  }
  
`;

export const Contato = styled.span`
  flex: 1;

  > img {
    position: relative;
    left: -10%;
    right: 0%;
    top: 0%;
    bottom: 0%;
      
    filter: invert(100%);
  }
`;

export const Buscar = styled.span`
  flex: 1;

  > img {
    position: relative;
    left: -10%;
    right: 18.48%;
    top: 31.95%;
    bottom: -4.84%;
    filter: invert(100%);
    transform: rotate(-21deg);
  }
`;

export const SacolaDeCompras = styled.span`
  flex: 1;

  > img {
    filter: invert(100%);
  }
`;
