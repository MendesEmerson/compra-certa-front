import { Container, Text, TextTitle, Wrapper } from "./styles";

interface CardProps {
    title: string
    descricao: string
    qntItens: number
    onClick: () => void
}

function CardComponent({ title, descricao, qntItens, onClick }: CardProps) {
    return (
        <Container onClick={onClick}>
            <TextTitle>{title}</TextTitle>
            <Wrapper>
                <Text>
                    Itens na Lista: <span>{qntItens}</span>
                </Text>
                <Text>
                    Descrição: <span>{descricao}</span>
                </Text>
            </Wrapper>
        </Container>
    );
}

export default CardComponent;
