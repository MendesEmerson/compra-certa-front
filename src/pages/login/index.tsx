import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ContainerInput,
  ContainerImage,
  LineSpace,
  Wrapper,
} from "./styles";
import Logo from "../../assets/LogoVertical.svg";
import { MdLock, MdPerson } from "react-icons/md";
import axios from "../../axiosConfig";
import { InputComponent, InputPasswordComponent } from "../../components/inputComponent";
import { ButtonComponent } from "../../components/buttonComponent";
import { BoxErrorComponent } from "../../components/boxErrorComponent";
import { useAuth } from "../../context/authContext";

function LoginPage() {
  const navigate = useNavigate();

  const { login } = useAuth()

  const handleOnClickNavigateUserHome = () => {
    navigate("/userhome");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");

  const [messageError, setMessageError] = useState("");
  const [errorOn, setErrorOn] = useState(false);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login/users", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        const authorizationHeader = response.data;
        login(authorizationHeader)
        handleOnClickNavigateUserHome();
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;
        setMessageError(errorMessage);
        setErrorOn(true);
        console.log(errorMessage);
      } else if (error.response && error.response.status === 401) {
        const errorMessage = error.response.data.message;
        setMessageError(errorMessage);
        setErrorOn(true);
        console.log(errorMessage);
      } else if (error.response && error.response.status === 409) {
        const errorMessage = error.response.data.message;
        setMessageError(errorMessage);
        setErrorOn(true);
        console.log(errorMessage);
      } else {
        console.error(error);
      }
    }
  };

  // useEffect(() => {
  //   // Redirecionar para a página inicial se já estiver logado
  //   if (token) {
  //     navigate("/userhome");
  //   }
  // }, []);
  return (
    <Container>
      <ContainerImage>
        <img src={Logo} alt="logo" />
      </ContainerImage>
      <ContainerInput>
        <LineSpace />
        <Wrapper>
          <form onSubmit={handleFormSubmit}>
            <InputComponent
              leftIcon={<MdPerson />}
              placeholder={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputPasswordComponent
              leftIcon={<MdLock />}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorOn ? <BoxErrorComponent text={messageError} />
              : null}
            <ButtonComponent
              type="submit"
              title={"Entrar"}
              variant="secondary"
              onClick={() => setErrorOn(false)}
            />
          </form>
        </Wrapper>
        <LineSpace />
      </ContainerInput>
    </Container>
  );
}

export default LoginPage;
