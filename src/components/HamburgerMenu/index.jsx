import {
  Container, 
  OuterRectangle, InnerRectangle, Indicator,
  List, Title, Item,
} from './styles';

export default function HamburgerMenu() {

  return(
    <Container>
      <Indicator />
      <OuterRectangle />
      <InnerRectangle />
      <List>
        <Title></Title>
        <Item></Item>
      </List>
    </Container>
  )
}