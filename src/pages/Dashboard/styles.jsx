import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Header = styled.div`
  position: relative;  
`;

export const Banner = styled.div`
  position: absolute;
  width: 100vw;  
  left: 0px;
  top: 0px;

  @media (max-width: 375px) {
    width: 375px;
    height: 436px;
  }
`;

export const BannerInfo = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 45%;
  height: 32%;
  display: flex;
  flex-direction: column;

  @media (max-width: 375px) {
    width: 375px;
    height: 214px;
    left: 0px;
    top: 222px;

    background: rgba(0, 0, 0, 0.65);
  }

`;

export const BannerTitle = styled.span`
  position: absolute;
  top: 0;
  color: #FFFFFF;
  font-weight: 900;
  font-size: 46px;
  line-height: 54px;

  @media (max-width: 375px) {
    width: 70%;
    left: 25%;    
    top: 5%;
    font-size: 26px;
    line-height: 30px;
  }
`;

export const BannerPrice1 = styled.span`
  position: absolute;
  top: 20%;
  left: 20%;
  color: lightblue;
  font-size: 70px;
  
  @media (max-width: 375px) {
    //width: 155px;
    width: 60%;
    height: 50.21px;
    //left: 148px;
    left: 37%;
    //top: 273.66px;
    top: 15%;


    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 56px;
  }
`;

export const BannerPrice2 = styled.span`
  position: absolute;  
  color: #3EC6E0;
  font-size: 28px;
  line-height: 33px;
`;

export const BannerParagraph = styled.span`
  position: absolute;
  width: 420px;
  height: 163px;
  top: 60%;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155%;

  text-align: right;

  color: #FFFFFF;

  @media (max-width: 375px) {
    position: absolute;
    //width: 317px;
    width: 90%;
    height: 99px;    
    //left: 29px;
    left: 5%;
    //top: 324px;
    top: 50%; 

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 155%;    

    text-align: right;
  }
`;

export const Body = styled.div`
  position: relative;
  margin-bottom: 100vh;

  @media (max-width: 375px) {
    margin-bottom: 400%;
  }
`;

export const DisplayedProducts = styled.div`
  position: relative;
  width: 90%;
  height: 80%;
  display: flex;
  margin-top: -10%;
  margin-left: 5%;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 375px) {
    flex-direction: column;
    margin-top: -30%;
    height: 70%;
    width: 100%;
    margin-left: 0;
  }
`;

export const ProductBanner = styled.div`
  width: 80%;

`;

export const ProductBannerTitle = styled.div`
  position: relative;
  width: 75%;
  height: 3rem;
  margin-top: -8.5%;
  margin-left: 5%;
  background: #3EC6E0;
  border-radius: 5px;

  @media (max-width: 375px) {    
    font-size: 0.7rem;
    line-height: -50%;
    height: 1.2rem;
    margin-left: 1%;
    width: 79%;
  }
`;
