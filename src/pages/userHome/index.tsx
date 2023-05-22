import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";

import {
    Container,
    ContainerInput,
    ContainerText,
    GridList,
    LineSpace,
    Row,
    TextHome,
} from "./styles";
import { MdSearch } from "react-icons/md";
import { ButtonComponent } from "../../components/buttonComponent";
import { InputComponent } from "../../components/inputComponent";
import CardComponent from "../../components/cardDetailsComponent";
import { useAuth } from "../../context/authContext";
import { confirmAlert } from "react-confirm-alert";

interface ListProps {
    list_id: string
    describle: string
    itens_quantity: number
    name: string
    onClick?: () => void
}

function UserHome() {

    const [listas, setListas] = useState<ListProps[]>();
    const { token } = useAuth()

    const [formContent, setFormContent] = useState<JSX.Element | null>(null);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/lists", {
                    headers: {
                        Authorization: token
                    },
                });
                setListas(response.data);
            } catch (error: any) {
                if (error.response && error.response.status === 404) {
                    const errorMessage = error.response.data.message;
                    console.log(errorMessage)
                }
                console.error(error);
            }
        };

        fetchData();
    }, [token,listas]);

    const navigate = useNavigate();
    const handleOnClickNavigateList = (id: string) => {
        navigate(`/listpage/${id}`);
    };

    function renderForm() {
        return (
            <div>
                <div>
                    <label>Nome da lista:</label>
                    <input type="text" id="nome-lista" />
                </div>
                <div>
                    <label>descrição:</label>
                    <input type="text" id="descricao-lista" />
                </div>
                <div>
                    <label>Categoria:</label>
                    <select id="categoria-lista">
                        <option value="Compras">Compras</option>
                    </select>
                </div>
            </div>
        );
    }

    function handleAddList() {
        setFormContent(renderForm());
        confirmAlert({
            title: "Adicionar novo item",
            message: renderForm(),
            buttons: [
                {
                    label: "Adicionar",
                    onClick: () => {
                        const valores = processarForm();
                        const { nomeLista, describle } = valores;
                        const idItem = ""
                        const novaLista: ListProps = {
                            list_id: idItem,
                            name: nomeLista,
                            describle: describle,
                            itens_quantity: 0
                            
                        };
                        // Chamar a API para salvar o novo item
                        salvarLista(novaLista);
                        setFormContent(null); // Limpar o conteúdo do formulário após a submissão
                    },
                },
                {
                    label: "Cancelar",
                    onClick: () => {
                        setFormContent(null); // Limpar o conteúdo do formulário ao cancelar
                    },
                },
            ],
            closeOnClickOutside: false,
            overlayClassName: "overlay-custom", // Classe CSS personalizada para o overlay
        });
    }

    function processarForm() {
        const nomeLista = (document.getElementById("nome-lista") as HTMLInputElement).value;
        const describle = (document.getElementById("descricao-lista") as HTMLInputElement).value;
        return { nomeLista, describle };
    }

    async function salvarLista(lista: ListProps) {
        try {

            await axios.post(`/list/`, lista);
            // Atualizar a lista após a criação do item
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <ContainerText>
                <TextHome>Bem vindo(a)</TextHome>
                <ButtonComponent title="Nova lista" onClick={handleAddList} />
            </ContainerText>
            <Row>
                <LineSpace />
            </Row>

            <ContainerInput>
                <InputComponent onChange={() => null} placeholder="Buscar lista" value="" leftIcon={<MdSearch />} />
            </ContainerInput>

            <GridList>
                {listas && listas.map((lista) => (
                    <CardComponent
                        key={lista.list_id}
                        descricao={lista.describle}
                        qntItens={lista.itens_quantity}
                        title={lista.name}
                        onClick={() => handleOnClickNavigateList(lista.list_id)}
                    />
                ))}
            </GridList>

        </Container>

    );
}

export default UserHome;
