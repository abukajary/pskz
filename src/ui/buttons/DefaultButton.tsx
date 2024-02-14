import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button<{ type: "filled" | "outline" }>`
  max-width: 333px;
  height: fit-content;
  padding: 10px 20px;
  border: 2px solid #007bff;
  background-color: ${({ type }) =>
    type === "filled" ? "#007bff" : "transparent"};
  color: ${({ type }) => (type === "filled" ? "#ffffff" : "#007bff")};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  ${({ type }) =>
    type === "outline" &&
    css`
      &:hover {
        background-color: rgb(31, 167, 215);
        color: #ffffff;
      }
    `}
`;

const DefaultButton: React.FC<{
  type: "filled" | "outline";
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ type, children, onClick }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default DefaultButton;
