import React from 'react';
import OutridersImg from '../../resources/img/outriders_banner.jpg';
import CyberpunkImg from '../../resources/img/cyberpunk_banner.jpg';
import DonkeyKongImg from '../../resources/img/donkey_kong_banner.jpg';

import Product from '../Product';

import {
  Container, Title, List
} from './styles';

export default function FeaturedProducts() {

  return(
    <Container>
      <Title>Produtos em destaque</Title>
      <List>
        <Product imgSrc={OutridersImg} title="Sekiro" price="R$200,00" />
        <Product imgSrc={CyberpunkImg} title="Cyberpunk 2077" price="R$200,00" />
        <Product imgSrc={DonkeyKongImg} title="Donkey Kong Country Tropical Freeze" price="R$200,00" />
      </List>
    </ Container>
  );
}