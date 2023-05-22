import { Container, Column, Linha, Row, TextName, Wrapper } from "./styles";
import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { IconButtonComponent } from "../buttonComponent";
import ItemListComponent from "../itemListComponent";

interface Item {
  itens_id: string;
  name: string;
  sub_category: string
  quantity: number;
  check: boolean;
}

interface ListProps {
  nome: string;
  categoriaLista: string;
  lista: Item[];
}

function CategoriaListComponent({
  nome,
  categoriaLista,
  lista,
}: ListProps) {
  const [exibirCategoria, setExibirCategoria] = useState<{ [key: string]: boolean }>({
    [categoriaLista]: false,
  });



  return (
    <Container>
      <Row>
        <TextName>{nome}</TextName>
        <IconButtonComponent
          onClick={() =>
            setExibirCategoria({
              ...exibirCategoria,
              [categoriaLista]: !exibirCategoria[categoriaLista],
            })
          }
          icon={
            exibirCategoria[categoriaLista] ? <MdExpandLess /> : <MdExpandMore />
          }
        />
      </Row>

      <Column>
        {exibirCategoria[categoriaLista] &&
          lista.map((item: Item) => (
            item.sub_category === categoriaLista ? (
              <ItemListComponent
                key={item.itens_id}
                itemId={item.itens_id}
                itemName={item.name}
                itemQuantidade={item.quantity}
                itemCheck={item.check}
              />) : null

          ))}
      </Column>
      <Wrapper>
        <Linha />
      </Wrapper>
    </Container>
  );
}

export default CategoriaListComponent;
