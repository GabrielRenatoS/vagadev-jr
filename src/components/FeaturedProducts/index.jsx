import React from 'react';
import SekiroImg from '../../resources/img/sekiro_banner.jpg';

import Product from '../Product';

import {
  Container, Title, List
} from './styles';

export default function FeaturedProducts() {

  return(
    <Container>
      <Title>Produtos em destaque</Title>
      <List>
        <Product imgSrc={SekiroImg} title="Sekiro" price="R$299,99" />
        <Product imgSrc={SekiroImg} title="Sekiro" price="R$299,99" />
        <Product imgSrc={SekiroImg} title="Sekiro" price="R$299,99" />
      </List>
    </ Container>
  );
}