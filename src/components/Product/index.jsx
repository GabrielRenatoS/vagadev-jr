import {
  Container, ProductBanner, Title, Price, BuyButton
} from './styles'

export default function Product(props) {
  const imgSrc = props.imgSrc;
  const title = props.title;
  const price = props.price;

  return(
    <Container>
      <ProductBanner><img src={imgSrc} alt={title} /></ProductBanner>
      <Title>{title}</Title>
      <Price>{price}</Price>
      <BuyButton>Comprar</BuyButton>
    </Container>
  )
}