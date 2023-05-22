import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 415px) {
    align-items: flex-start;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin: 5px 0;
`;

export const TextName = styled.h4`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;

  margin: 5px;
  padding: 2px;
`;

export const Linha = styled.hr`
  width: 70%;
`;
