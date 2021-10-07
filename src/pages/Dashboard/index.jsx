import React from 'react';

import BannerPrincipal from '../../resources/img/principal_banner_desktop.jpg';
import BannerPrincipalMobile from '../../resources/img/principal_banner_mobile.jpg';
import BannerZelda from '../../resources/img/zelda_banner.jpg';
import BannerSekiro from '../../resources/img/sekiro_banner.jpg';

import Navbar from '../../components/Navbar';
import FeaturedProducts from '../../components/FeaturedProducts';
import Footer from '../../components/Footer';

import { 
  Container, Header, 
  Banner, BannerInfo, BannerTitle, BannerPrice1, BannerPrice2, BannerParagraph,
  DisplayedProducts, ProductBanner, ProductBannerTitle
} from './styles';

export function Dashboard() {

   return (
    <Container>
      <Header>
        <Banner>
          <picture>
            <source media="(max-width: 405px)" srcSet={BannerPrincipalMobile} />
            <source media="(min-width: 406px)" srcSet={BannerPrincipal} />
            <img src={BannerPrincipal} alt="Banner" />
          </picture>
          <BannerInfo>
            <BannerTitle>MORTAL KOMBAT</BannerTitle>
            <BannerPrice1>R$299<BannerPrice2>,99</BannerPrice2></BannerPrice1>
            <BannerParagraph>Mortal Kombat X combina uma apresentação cinemática 
              única com uma jogabilidade totalmente nova. Os jogadores podem escolher 
              pela primeira vez diversas variantes de cada personagem, afetando 
              tanto a estratégia como o estilo de luta.
            </BannerParagraph>
          </BannerInfo>
        </Banner>
      </Header>
      <Navbar />
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