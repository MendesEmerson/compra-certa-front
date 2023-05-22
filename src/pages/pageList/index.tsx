import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../axiosConfig";
import { Container, ContainerList, Row } from "./styles";
import CategoriaListComponent from "../../components/categoriaItemComponent";
import { confirmAlert } from "react-confirm-alert";
import { ButtonComponent, IconButtonComponent } from "../../components/buttonComponent";
import { MdDelete } from "react-icons/md"

interface Item {
    itens_id: string;
    name: string;
    sub_category: string;
    quantity: number;
    check: boolean;
}

export function ListPage() {
    const { id } = useParams<{ id: string }>();

    const navigate = useNavigate()

    const handleNavigateToUserHome = () => {
        navigate("/userhome")
    }

    const defautList = {
        "Frutas e Vegetais": [],
        "Carnes e Peixes": [],
        "Produtos Lacteos": [],
        "Padaria": [],
        "Congelados": [],
        "Bebidas": [],
        "Alimentos Enlatados": [],
        "Produtos de Limpeza": [],
        "Produtos de Higiene Pessoal": [],
    }
    const [listas, setListas] = useState<{ [key: string]: Item[] }>({});
    const [formContent, setFormContent] = useState<JSX.Element | null>(null);


    useEffect(() => {
        const fetchListas = async () => {
            try {
                const response = await axios.get(`/itens/${id}`);
                const data = response.data;

                let updatedListas: { [key: string]: Item[] } = defautList

                data.forEach((item: Item) => {
                    const { sub_category } = item;

                    if (sub_category in updatedListas) {
                        updatedListas = {
                            ...updatedListas,
                            [sub_category]: [...updatedListas[sub_category], item],
                        };
                    } else {
                        updatedListas = {
                            ...updatedListas,
                            [sub_category]: [item],
                        };
                    }
                });

                setListas(updatedListas);
            } catch (error) {
                console.log(error);
            }
        };

        fetchListas();
    }, [id, listas]);


    function renderForm() {
        return (
            <div>
                <div>
                    <label>Nome do item:</label>
                    <input type="text" id="nome-item" />
                </div>
                <div>
                    <label>Quantidade:</label>
                    <input type="number" id="quantidade-item" />
                </div>
                <div>
                    <label>Categoria:</label>
                    <select id="categoria-item">
                        <option value="Frutas e Vegetais">Frutas e vegetais</option>
                        <option value="Carnes e Peixes">Carnes e peixes</option>
                        <option value="Produtos Lacteos">Produtos lácteos</option>
                        <option value="Padaria">Padaria</option>
                        <option value="Congelados">Congelados</option>
                        <option value="Bebidas">Bebidas</option>
                        <option value="Alimentos Enlatados">Alimentos enlatados</option>
                        <option value="Produtos de Limpeza">Produtos de limpeza</option>
                        <option value="Produtos de Higiene Pessoal">
                            Produtos de higiene pessoal
                        </option>

                    </select>
                </div>
            </div>
        );
    }

    function handleAddItem() {
        setFormContent(renderForm());
        confirmAlert({
            title: "Adicionar novo item",
            message: renderForm(),
            buttons: [
                {
                    label: "Adicionar",
                    onClick: () => {
                        const valores = processarForm();
                        const { nomeItem, quantidadeItem, categoriaItem } = valores;
                        const idItem = ""
                        const novoItem: Item = {
                            itens_id: idItem,
                            name: nomeItem,
                            quantity: quantidadeItem,
                            sub_category: categoriaItem,
                            check: false,
                        };
                        // Chamar a API para salvar o novo item
                        salvarItem(novoItem);
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
        const nomeItem = (document.getElementById("nome-item") as HTMLInputElement).value;
        const quantidadeItem = parseInt((document.getElementById("quantidade-item") as HTMLInputElement).value);
        const categoriaItem = (document.getElementById("categoria-item") as HTMLSelectElement).value;
        return { nomeItem, quantidadeItem, categoriaItem };
    }

    async function salvarItem(item: Item) {
        try {

            await axios.post(`/item/${id}`, item);
            // Atualizar a lista após a criação do item
        } catch (error) {
            console.log(error);
        }
    }


    function confirmDelete() {
        confirmAlert({
            title: "Atenção",
            message: `Deseja excluir sua lista? é opção irreversivel, todos os dados dentro dela seram deletados!`,
            buttons: [
                {
                    label: "Sim",
                    onClick: async () => {
                        try {
                            const response = await axios.delete(`/list/${id}`);
                            if (response.status === 204) {
                                handleNavigateToUserHome()
                            } else {
                                if (response.status === 404) {
                                    const errorMessage = response.data.message;

                                    console.log(errorMessage)
                                }
                            }
                        } catch (error) {
                            // Lógica para lidar com erros ou exibir mensagens de erro
                        }
                    },

                },
                {
                    label: "Não",
                    onClick: () => {
                        null
                    },
                },
            ],
        });
    }

    return (
        <Container>
            <Row>
                <ButtonComponent onClick={handleAddItem} title="Novo Item" />
                <IconButtonComponent icon={<MdDelete />} onClick={confirmDelete} />
            </Row>
            <ContainerList>
                {Object.keys(listas).map((categoria) => (
                    <CategoriaListComponent
                        key={categoria}
                        categoriaLista={categoria}
                        nome={categoria}
                        lista={listas[categoria]}
                    />
                ))}
            </ContainerList>
        </Container>
    );
}
