import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 2rem;
  top: 44px;
  color: #FFF;
  
  @media (max-width: 375px) {
    top: 22px;
  }
`;

export const Hamburger = styled.span`
  z-index: 2;
  flex: 1;
  margin-left: 15vw;
  filter: invert(100%);

  @media (max-width: 375px) {
    margin-left: 5vw;
  }
`;

export const Titulo = styled.span`
  z-index: 2;
  flex: 5;
  margin-left: -5vw;

  > img {
    width: 163px;
    height: 35px;
  }
  
  @media (max-width: 375px) {
    flex: 4;
    margin-left: 5vw;

    > img {
      width: 107px;
      height: 23px;
    }
  }
`;

export const Contato = styled.span`
  z-index: 2;
  flex: 1;

  > img {
    position: relative;
    left: -10%;
    right: 0%;
    top: 0%;
    bottom: 0%;
      
    filter: invert(100%);
  }

  @media (max-width: 375px) {
    > span {
      display: none;
    }
  }
`;

export const Buscar = styled.span`
  z-index: 2;
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

  @media (max-width: 375px) {
    > span {
      display: none;
    }
  }
`;

export const SacolaDeCompras = styled.span`
  z-index: 2;
  flex: 1;

  > img {
    filter: invert(100%);
  }
`;
