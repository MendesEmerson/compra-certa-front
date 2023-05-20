import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItens = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

  @media (min-width: 415px) {
    margin-left: 35px;
  }
`;

export const TextItemName = styled.p`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 5px;
  width: 12vh;
  height: 30px;
  color: #000000;

  &.check {
    font-weight: 100;
    text-decoration-line: line-through;
    text-decoration-thickness: 2px;
    color: #11ff25;
    text-decoration-color: #000000;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxQuantidade = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: transparent;
  color: #000000;

  @media (min-width: 635px) {
    margin: 0 5px;
  }
`;

export const CheckBox = styled.input`
  width: 32px;
  height: 32px;
  padding: 5px;
  margin-right: 15px;

`;
