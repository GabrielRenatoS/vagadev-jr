import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Header = styled.div`
  position: relative;
`;

export const Banner = styled.div`
  width: 100vw;
  position: relative;
  top: 0;
  left: 0;
`;

export const BannerText = styled.div`
  position: absolute;
  top: 20%;
  left: 55%;
  width: 40%;
  display: inline-block;
`;

export const BannerTitle = styled.text`
  //position: absolute;
  top: 0;
  color: white;
  font-size: 2.8rem;
`;

export const BannerPrice1 = styled.text`
  position: absolute;
  top: 6%;
  left: 40%;
  color: lightblue;
  font-size: 3.2rem;
`;

export const BannerPrice2 = styled.text`
  //position: absolute;
  color: lightblue;  
  font-size: 1.5rem;
`;

export const DisplayedProducts = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  margin-top: -10%;
  margin-left: 10%;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProductBanner = styled.div`
  width: 80%;

  > img {    
    width: 80%;
  }
`;

export const ProductBannerTitle = styled.div`
  position: relative;
  width: 75%;
  height: 3rem;
  margin-top: -8.5%;
  margin-left: 5%;
  background-color: lightblue;
`;