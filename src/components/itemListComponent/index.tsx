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

interface ItemListProps {
    itemId: string
    itemName: string
    itemQuantidade: number
    itemCheck: boolean
    removeComponent: () => void
    updateQuantidade: (itemId: string, setQuantidade: number) => void
    updateCheckbox: (itemID: string, itemCheck: boolean) => void

}

function ItemListComponent({
    itemId,
    itemName,
    itemQuantidade,
    itemCheck,
    removeComponent,
    updateQuantidade,
    updateCheckbox,
}: ItemListProps) {
    const [qtd, setQtd] = useState<number>(itemQuantidade);
    const [check, setCheck] = useState<boolean>(itemCheck);

    const aumentarQtd = () => {
        setQtd((prevQtd) => prevQtd + 1);
        updateQuantidade(itemId, qtd + 1);
    };

    const diminuitQtd = () => {
        if (qtd > 1) {
            setQtd((prevQtd) => prevQtd - 1);
            updateQuantidade(itemId, qtd - 1);
        }
    };

    function confirmDelete() {
        confirmAlert({
            title: "Atenção",
            message: `Deseja excluir o ${itemName} da sua lista?`,
            buttons: [
                {
                    label: "Sim",
                    onClick: () => {
                        removeComponent();
                    },
                },
                {
                    label: "Não",
                    onClick: () => {
                        setQtd(qtd + 1);
                        updateQuantidade(itemId, qtd + 1);
                    },
                },
            ],
        });
    }

    const marcarItem = () => {
        setCheck(!check);
        updateCheckbox(itemId, !check);
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
