import axios from "../../axiosConfig";
import { MdPerson, MdLock, MdEmail } from "react-icons/md";
import {
    BigText,
    Container,
    ContainerInput,
    LineSpace,
    Wrapper,
    MessageErrorContainer,
} from "./styles";
import { useState } from 'react';
import { InputComponent, InputPasswordComponent } from '../../components/inputComponent';
import { ButtonComponent } from '../../components/buttonComponent';
import { useNavigate } from "react-router-dom";
import { BoxErrorComponent } from "../../components/boxErrorComponent";



function CadastroPage() {

    const navigate = useNavigate();

    const handleOnClickNavigateLogin = () => {
        navigate("/login");
    };

    const [nome, setNome] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const [confirmarSenha, setConfirmarSenha] = useState<string>();
    const [error, setError] = useState(false)

    const handleCadastro = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem");
            return;
        }

        try {
            const response = await axios.post("/users", {
                name: nome,
                email: email,
                password: senha,
            });

            if (response.status === 201) {
                handleOnClickNavigateLogin()
            }
        } catch (error: any) {
            if (error.response && error.response.status === 409) {
                setError(true);
            } else {
                console.error(error);
                alert("Ocorreu um erro ao cadastrar o usuário");
            }
        }
    };


    return (
        <Container>
            <Wrapper>
                <BigText>
                    Bem-vindo(a) ao <a href="/">CompraCerta</a>! Sua nova ferramenta para listas de compras inteligentes.
                </BigText>
            </Wrapper>
            <ContainerInput>
                <LineSpace />
                <Wrapper>
                    <form onSubmit={handleCadastro}>
                        <InputComponent
                            leftIcon={<MdPerson />}
                            placeholder={"Nome"}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />

                        <InputComponent
                            leftIcon={<MdEmail />}
                            placeholder={"Email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputPasswordComponent
                            leftIcon={<MdLock />}
                            placeholder={"Senha"}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} />
                        <InputPasswordComponent
                            leftIcon={<MdLock />}
                            placeholder={"Confirme a Senha"}
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                        />


                        {error ? <BoxErrorComponent text="Email em uso!" /> : ""}


                        <ButtonComponent type="submit" title={"Cadastrar"} variant="secondary" onClick={() => setError(false)} />
                    </form>
                </Wrapper>
                <LineSpace />
            </ContainerInput>
        </Container>
    )
}

export default CadastroPage;
