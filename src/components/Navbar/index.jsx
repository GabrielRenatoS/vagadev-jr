import React, { useState } from 'react';

import HamburgerIcon from '../../resources/svgs/icon_hamburguer.svg';
import N1RushIcon from '../../resources/img/n1_rush_logo.jpg';
import PaperPlaneIcon from '../../resources/svgs/paper-plane.svg';
import SearchIcon from '../../resources/svgs/search-solid.svg';
import ShoppingBagIcon from '../../resources/svgs/shopping-bag-solid.svg';

import HamburgerMenu from '../HamburgerMenu';

import { 
  Container, Hamburger, Titulo, Contato, Buscar, SacolaDeCompras 
} from './styles';

export default function Navbar() {
  const [menuCalled, setMenuCalled] = useState(false);

  function handleCallMenu() {    
    //setMenuCalled(!menuCalled);
    if (menuCalled === true) {
      console.log("To False");
      setMenuCalled(false);
    } else if (menuCalled ===false) {
      console.log("To True");
      setMenuCalled(true);
    }
  }

  return(
    <Container>
      {menuCalled ?
        (<HamburgerMenu />)
        : null
      }
      <Hamburger onClick={handleCallMenu}>
        <img src={HamburgerIcon} alt="Hamburger Menu" />
      </Hamburger>
      <Titulo>
        <img src={N1RushIcon} alt="N1 Rush Logo" />
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