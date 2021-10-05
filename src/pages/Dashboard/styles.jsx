import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Header = styled.div`
  
`;

export const Banner = styled.div`
  /*old
  width: 100vw;
  position: relative;
  top: 0;
  left: 0;*/
  
  /* Figma
  position: absolute;
  width: 1920px;
  height: 840px;
  left: 0px;
  top: 0px;*/

  //New
  position: absolute;
  width: 100vw;  
  left: 0px;
  top: 0px;
`;

export const BannerInfo = styled.div`
  /*Old
  position: absolute;
  top: 20%;
  left: 55%;
  width: 40%;
  display: inline-block;*/

  /*Figma
  position: absolute;
  width: 420px;
  height: 327px;
  left: 1015px;
  top: 209px;*/

  position: absolute;
  top: 20%;
  left: 55%;
  width: 40%;
  height: 32%;
  display: inline-block;

`;

export const BannerTitle = styled.text`
  //position: absolute;
  
  /*old
  top: 0;
  color: white;
  font-size: 2.8rem;*/

  /*Figma
  position: absolute;
  width: 384px;
  height: 54px;
  left: 1051px;
  top: 209px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 46px;
  line-height: 54px;
  /* identical to box height 
  color: #FFFFFF;*/

  position: absolute;
  top: 0;
  color: #FFFFFF;
  font-size: 46px;
  line-height: 54px;  
`;

export const BannerPrice1 = styled.text`
  position: absolute;
  top: 20%;
  left: 20%;
  color: lightblue;
  font-size: 70px;
`;

export const BannerPrice2 = styled.text`
  //position: absolute;  
  color: #3EC6E0;
  font-size: 28px;
  line-height: 33px;
`;

export const BannerParagraph = styled.span`
  position: absolute;
  width: 420px;
  height: 163px;
  //left: 1015px;
  top: 70%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;
  /* or 25px */

  text-align: right;

  color: #FFFFFF;
`;

export const DisplayedProducts = styled.div`
  position: absolute;
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
  background: #3EC6E0;
  border-radius: 5px;
`;