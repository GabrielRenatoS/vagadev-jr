import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Header = styled.div`
  
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
  left: 55%;
  width: 40%;
  height: 32%;
  //display: inline-block;
  display: flex;
  flex-direction: column;

  @media (max-width: 375px) {
    /*width: 100vw;
    height: 20vw;
    left: 0px;
    top: 20%;*/
    width: 375px;
    height: 214px;
    left: 0px;
    top: 222px;

    background: rgba(0, 0, 0, 0.65);
  }

`;

export const BannerTitle = styled.text`
  position: absolute;
  top: 0;
  color: #FFFFFF;
  font-weight: 900;
  font-size: 46px;
  line-height: 54px;

  @media (max-width: 375px) {
    //width: 217px;
    width: 100%;
    //height: 27px;
    //left: 129px;
    left: 25%;    
    //top: 236px;
    top: 5%;
    font-size: 26px;
    line-height: 30px;
  }
`;

export const BannerPrice1 = styled.text`
  position: absolute;
  top: 20%;
  left: 20%;
  color: lightblue;
  font-size: 70px;
  
  @media (max-width: 375px) {
    //width: 155px;
    width: 100%;
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

export const BannerPrice2 = styled.text`
  position: absolute;  
  color: #3EC6E0;
  font-size: 28px;
  line-height: 33px;
`;

export const BannerParagraph = styled.span`
  position: absolute;
  width: 420px;
  height: 163px;
  top: 70%;

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

export const DisplayedProducts = styled.div`
  position: relative;
  width: 90%;
  height: 80%;
  display: flex;
  margin-top: -10%;
  margin-left: 10%;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 375px) {
    flex-direction: column;
  }
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