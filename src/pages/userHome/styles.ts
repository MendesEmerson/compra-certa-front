import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  margin-top: 35px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin: 0 auto;
  }

  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    
  }
`;

export const ContainerFooter = styled.div`
  margin-top: auto;
`;

export const ContainerInput = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  margin: 10px;
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80%;

  margin: 10px;


`

export const LineSpace = styled.hr`
  width: 70%;
  margin: 15px 0;
  border: 0.5px solid #353535;
`;

export const TextHome = styled.h2`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  line-height: 33px;

  color: #000000;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`