import {
    BigText,
    Container,
    ContainerImage,
    SmallText,
    Wrapper,
} from "./styles";
import Logo from "../../assets/LogoVertical.svg";
import { useAuth } from "../../context/authContext";

const HomePage = () => {

    const {token} = useAuth()
    console.log(token)

    return (

        <Container>
            <ContainerImage>
                <img src={Logo} alt="Logo" />
            </ContainerImage>

            <Wrapper>
                <BigText>
                    Não importa o tamanho da sua lista de compras,{" "}
                    <span>CompraCerta</span> garante que você nunca mais se esqueça dos
                    itens essenciais - tornando suas idas ao supermercado mais rápidas,
                    simples e sem estresse.
                </BigText>
                <SmallText>
                    Comece a se organizar <a href="/cadastro">Agora</a>!
                </SmallText>
            </Wrapper>
        </Container>
    );
};

export default HomePage;
