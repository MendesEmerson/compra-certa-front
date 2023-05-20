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

export const Wrapper = styled.div`
  max-width: 300px;
  margin: 0 45px;
  padding: 15px;
`;

export const BigText = styled.h3`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  line-height: 33px;

  color: #000000;

  span {
    color: #ff0000;
  }
`;

export const SmallText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;

  margin-top: 25px;

  color: #000000;
  
  
  

  a {
    color: #ff0000;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;

  img {
    width: 80%;
  }
`;
