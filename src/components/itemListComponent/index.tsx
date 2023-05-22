import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { MdRemove, MdAdd, MdDelete } from "react-icons/md";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
    BoxQuantidade,
    CheckBox,
    Container,
    ContainerButtons,
    ListItens,
    TextItemName,
} from "./styles";
import { IconButtonComponent } from "../buttonComponent";
import axios from '../../axiosConfig';

interface ItemListProps {
    itemId: string;
    itemName: string;
    itemQuantidade: number;
    itemCheck: boolean;
}

function ItemListComponent({
    itemId,
    itemName,
    itemQuantidade,
    itemCheck,

}: ItemListProps) {

    const [qtd, setQtd] = useState<number>(itemQuantidade);
    const [check, setCheck] = useState<boolean>(itemCheck);

    const aumentarQtd = async () => {
        if (qtd >= 1) {
            try {
                const response = await axios.put(`/item/${itemId}`, {
                    quantity: itemQuantidade + 1
                })
                if (response.status === 200) {
                    const newQuantidade = response.data.quantity;
                    setQtd(newQuantidade);
                } else {
                    // Lógica para lidar com erros ou exibir mensagens de erro
                }
            } catch (error) {
                // Lógica para lidar com erros ou exibir mensagens de erro
            }
        }
    };

    const diminuitQtd = async () => {
        if (qtd > 1) {
            try {
                const response = await axios.put(`/item/${itemId}`, {
                    quantity: itemQuantidade - 1
                });
                if (response.status === 200) {
                    const newQuantidade = response.data.quantity;
                    setQtd(newQuantidade);
                } else {
                    // Lógica para lidar com erros ou exibir mensagens de erro
                }
            } catch (error) {
                // Lógica para lidar com erros ou exibir mensagens de erro
            }
        }
    };


    function confirmDelete() {
        confirmAlert({
            title: "Atenção",
            message: `Deseja excluir o ${itemName} da sua lista?`,
            buttons: [
                {
                    label: "Sim",
                    onClick: async () => {
                        try {
                            const response = await axios.delete(`/item/${itemId}`);
                            if (response.status === 200) {
                                //
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

    const marcarItem = async () => {
        setCheck(!check);
        try {
            const response = await axios.put(`/item/${itemId}`, {
                check: !itemCheck
            });
            if (response.status === 200) {
                const checkUpdate = response.data.check
                console.log(checkUpdate)
                setCheck(checkUpdate)
            }
        } catch (error) {
            // 
        }
    };

    return (
        <Container>
            <ListItens>
                <TextItemName className={check ? "check" : ""}>{itemName}</TextItemName>
                <ContainerButtons>
                    <IconButtonComponent
                        icon={<MdRemove />}
                        onClick={diminuitQtd}
                        disabled={check}
                    />
                    <BoxQuantidade>{qtd}</BoxQuantidade>
                    <IconButtonComponent
                        icon={<MdAdd />}
                        onClick={aumentarQtd}
                        disabled={check}
                    />
                </ContainerButtons>
                <CheckBox type="checkbox" checked={check} onChange={marcarItem} />
                <IconButtonComponent
                    icon={<MdDelete />}
                    onClick={confirmDelete}
                    disabled={check}
                />
            </ListItens>
        </Container>
    );
}

export default ItemListComponent;
