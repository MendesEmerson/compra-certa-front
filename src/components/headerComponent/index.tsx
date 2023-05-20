import { useNavigate } from "react-router-dom";
import { Container, Row, SvgImage } from "./styles";
import Logo from "../../assets/LogoHorizontal.svg";
import { MdArrowBack } from "react-icons/md";
import { useMediaQuery } from "@mui/material";
import { ButtonComponent, IconButtonComponent } from "../buttonComponent";

function HeaderComponent({ isLogin = false, backButton = true }) {

    const isWideScreen = useMediaQuery("(min-width: 650px)");

    const navigate = useNavigate();

    const handleOnClickNavigateLogin = () => {
        navigate("/login");
    };
    const handleOnClickNavigateCadastro = () => {
        navigate("/cadastro");
    };
    const handleOnClickBack = () => {
        navigate(-1);
    };

    return (
        <Container>
            {!isLogin ? (
                <>
                    <Row >
                        <SvgImage src={Logo} alt="Logo" />
                    </Row>
                    <Row >
                        <ButtonComponent
                            onClick={handleOnClickNavigateLogin}
                            title={"Login"}
                        />
                        <ButtonComponent
                            onClick={handleOnClickNavigateCadastro}
                            title={"Cadastrar"}
                        />
                    </Row>
                </>
            ) : (
                <>
                    <Row>
                        {backButton ? (
                            !isWideScreen ? (
                                <IconButtonComponent
                                    onClick={() => handleOnClickBack}
                                    icon={<MdArrowBack />}
                                />
                            ) : (
                                <ButtonComponent
                                    icon={<MdArrowBack />}
                                    title={"Voltar"}
                                    onClick={handleOnClickBack}
                                />
                            )
                        ) : null}
                    </Row>
                    <Row >
                        <SvgImage src={Logo} alt="Logo" />
                    </Row>
                    <Row></Row>
                </>
            )}
        </Container>
    );
}

export default HeaderComponent;
