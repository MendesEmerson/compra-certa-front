import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90%;
  max-width: 315px;
  height: 150px;

  margin: 15px 10px;
  padding: 10px;

  border-radius: 12px;
  border: 2px solid #000000;

  background-color: #e0e0e0;
  color: #000000;

  &:hover {
    border-color: #ff0000;
    cursor: pointer
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const TextTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 25px;
  text-align: center;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: start;

  margin: 5px;

  span {
    font-weight: 400;
  }
`;
