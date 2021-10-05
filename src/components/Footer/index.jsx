import AgenciaN1Logo from '../../resources/img/agencia_n1_logo.jpg';

import {
  Container, Logo, FooterText,
} from './styles'

export default function Footer() {

  return (
    <Container>
      <Logo>
        <img src={AgenciaN1Logo} alt="N1 Logo" />
      </Logo>
      <FooterText>
        <p>Agência N1 - Todos os direitos reservados</p>
      </FooterText>
    </Container>
  );
}