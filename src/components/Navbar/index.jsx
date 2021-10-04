import HamburgerIcon from '../../resources/svgs/icon_hamburguer.svg';
import PaperPlaneIcon from '../../resources/svgs/paper-plane.svg';
import SearchIcon from '../../resources/svgs/search-solid.svg';
import ShoppingBagIcon from '../../resources/svgs/shopping-bag-solid.svg';

import { Container, Hamburger, Titulo, Contato, Buscar, SacolaDeCompras } from './styles';

export default function Navbar() {
  //<HamburgerMenu />

  return(
    <Container>
      <Hamburger>
        <img src={HamburgerIcon} alt="Hamburger Menu" />
      </Hamburger>
      <Titulo>
        N1
      </Titulo>
      <Contato>
        <img src={PaperPlaneIcon} alt="Avião de Papel" />
        Contato |
      </Contato>
      <Buscar>
        <img src={SearchIcon} alt="Lupa" />
        Buscar |
      </Buscar>
      <SacolaDeCompras>
        <img src={ShoppingBagIcon} alt="Sacola de Compras" />
      </SacolaDeCompras>
    </Container>
  );
}