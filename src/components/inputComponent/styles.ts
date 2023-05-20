import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  max-width: 320px;
  height: 30px;
  border-bottom: 1px solid #3b3450;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  
  position: relative;
`;

export const IconeContainer = styled.div` 
  padding: 10px;
  position: absolute; 
  
`;

export const InputText = styled.input`
  border: 0;
  border-radius: 12px;
  height: 44px;
  width: 100%;
  min-width: 150px;

  padding: 0 40px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: start;

  background-color: #ffffff;
  color: #8b8a8a;
`;

export const IconButton = styled.button`
  cursor: pointer;
  position: absolute;
  margin: 0 10px;
  right: 0;
  border:none;
  background-color: transparent;
`;

