import React from 'react';

import BannerImage from '../../resources/img/principal_banner_desktop.jpg';
import BannerZelda from '../../resources/img/zelda_banner.jpg';
import BannerSekiro from '../../resources/img/sekiro_banner.jpg';

import Navbar from '../../components/Navbar';
import FeaturedProducts from '../../components/FeaturedProducts';
import Footer from '../../components/Footer';

import { 
  Container, Header, 
  Banner, BannerText, BannerTitle, BannerPrice1, BannerPrice2, 
  DisplayedProducts, ProductBanner, ProductBannerTitle
} from './styles';

export function Dashboard() {


  return (
    <Container>
      <Header>
        <Navbar />
        <Banner>
          <img src={BannerImage} alt="Banner" />
          <BannerText>
            <BannerTitle>MORTAL KOMBAT</BannerTitle>
            <BannerPrice1>R$299<BannerPrice2>,99</BannerPrice2></BannerPrice1>
          </BannerText>
        </Banner>
      </Header>
      <DisplayedProducts>
        <ProductBanner>
          <img src={BannerZelda} alt="Banner Zelda" />
          <ProductBannerTitle>Legend of Zelda</ProductBannerTitle>
        </ProductBanner>
        <ProductBanner>          
          <img src={BannerSekiro} alt="Banner Sekiro" />
          <ProductBannerTitle>Sekiro</ProductBannerTitle>
        </ProductBanner>
      </DisplayedProducts>
      <FeaturedProducts />
      <Footer />
    </Container>
  );
}