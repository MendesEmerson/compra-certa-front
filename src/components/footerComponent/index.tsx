import {FooterLink, FooterText, FooterWrapper} from "./styles"

const FooterComponent = () => {
    return (
      <FooterWrapper>
        <FooterText>
          © {new Date().getFullYear()} CompraCerta. Todos os direitos reservados.{' '}
          <FooterLink href="#">Política de Privacidade</FooterLink> |{' '}
          <FooterLink href="#">Termos de Uso</FooterLink>
        </FooterText>
      </FooterWrapper>
    );
  };
  
  export default FooterComponent;