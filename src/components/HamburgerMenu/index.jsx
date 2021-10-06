import {
  Container, 
  OuterRectangle, InnerRectangle, Indicator,
  ListContainer, List, Title, Item,
} from './styles';

export default function HamburgerMenu() {

  return(
    <Container>
      <Indicator />
      <OuterRectangle />
      <InnerRectangle />
      <ListContainer>
        <List>
          <Title>Luta</Title>
          <Item>Mortal Kombat</Item>
          <Item>Smash Bros</Item>
          <Item>Killer Instinct</Item>
          <Item>DBZ Kakarot</Item>
        </List>
        <List>
          <Title>Ação/Aventura</Title>
          <Item>GTA V</Item>
          <Item>Tomb Raider</Item>
          <Item>Halo</Item>
          <Item>Call of Duty</Item>
        </List>
        <List>    
          <Title>Corrida</Title>
          <Item>Need for Speed</Item>
          <Item>Forza Horizon</Item>
        </List>
      </ListContainer>
    </Container>
  )
}