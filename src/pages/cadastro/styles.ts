import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  
  margin-top: 35px;
  

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
  }
`;

export const ContainerFooter = styled.div`
  margin-top: auto;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BigText = styled.h3`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  line-height: 33px;

  color: #000000;

  a {
    style: none;
    color: #ff0000;
  }
`;

export const Wrapper = styled.div`
  max-width: 450px;
  margin: 0 45px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LineSpace = styled.hr`
  width: 70%;
  margin: 35px 0;

  border: 0.5px solid #353535;
`

export const MessageErrorContainer = styled.div`
  width: 100%;
  font-size: 12px;
  color: red;
`