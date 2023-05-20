import styled, { css } from "styled-components";

interface ButtonProps {
    variant: "primary" | "secondary" | "secondaryVariant";

}

export const StyledButton = styled.button<ButtonProps>`
  background: #452479;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-around;

  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  border: none;
  border-radius: 12px;

  height: 28px;
  width: 75px;
  padding: 5px;
  margin: 5px;

  &:hover {
    opacity: 0.75;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    min-width: 100px;
  }

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      margin: 0;
      width: 100%;
      height: 35px;
      background: #007bff;
    `}

  ${({ variant }) =>
    variant === "secondaryVariant" &&
    css`
    margin: 0;
    width: 50%;
    height: 35px;
    background: #007bff;

    @media (min-width: 615px) {
      width: 30%;
    }

    @media (min-width: 950px) {
      width: 25%;
    }
    `}
`;

export const StyledIconButton = styled.button`
  background: transparent;
  color: #000000;

  font-weight: 400;
  font-size: 25px;
  line-height: 19px;

  border: none;
  border-radius: 12px;

  
  padding: 5px;
  margin: 5px;

  &:hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;
