import styled from "styled-components";

export const Container = styled.div`
  height: 55px;

  background-color: #acacac;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 650px) {
  }
  
`;

export const ContainerButton = styled.div`
  
  width: 10%;
 
`

export const SvgImage = styled.img`
  height: 45px;
  margin: 5px;

  @media (min-width: 768px) {
    width: 355px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;

  background-color: #acacac;

  @media (min-width: 768px) {
    padding-right: 55px;
  }
`;
