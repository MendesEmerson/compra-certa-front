import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerFooter = styled.div`
  margin-top: auto;
`;

export const ContainerList = styled.ul`
  width: 90%;
  display: grid;
  text-align: start;
  grid-template-columns: 1fr;
  align-items: flex-start;

  background-color: #e0e0e0;

  border-radius:12px;
  border: 2px solid;

  margin: 10px;
  padding: 10px;

  @media (min-width: 635px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(70px, auto);
  }
  @media (min-width: 978px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ContainerBackButton = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 5%;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  padding: 10px;

`

export const TextName = styled.h4`
  font-size: 28px;
  font-weight: 700;
  font-style: normal;

  margin: 5px;
  padding: 2px;

  @media (min-width: 650px) {
    font-size: 32px;
  }
`;
