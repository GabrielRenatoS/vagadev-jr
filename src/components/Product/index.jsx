import { useState } from 'react';
import MarioIcon from '../../resources/svgs/mario_icon.svg';

import {
  Container, ProductBanner, Title, Price, BuyButton
} from './styles'

export default function Product(props) {
  const imgSrc = props.imgSrc;
  const title = props.title;
  const price = props.price;

  const [buy, setBuy] = useState(false);

  function handleBuy() {
    setBuy(true);
  }

  return(
    <Container>
      <ProductBanner>
        <img src={imgSrc} alt={title} />
        <hr />
      </ProductBanner>
      <Title>{title}</Title>
      <Price>{price}</Price>
      <BuyButton onClick={handleBuy} bought={buy}>
        {buy ? ("Comprado") : ("Comprar")}        
        <img src={MarioIcon} alt="Mario Icon" />
      </BuyButton>
    </Container>
  )
}