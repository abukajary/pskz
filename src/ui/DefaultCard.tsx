import React from "react";
import styled from "styled-components";

interface DefaultCardProps {
  title?: string;
  children?: React.ReactNode; // Explicitly declaring children prop
}

const CardContainer = styled.div`
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, x0.1);
  display: grid;
  row-gap: 20px;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  color: #22232b;
  font-weight: 700;
  font-family: "Open Sans";
  margin: 0;
`;

const DefaultCard: React.FC<DefaultCardProps> = ({ title, children }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      {children}
    </CardContainer>
  );
};

export default DefaultCard;
