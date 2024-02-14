import React from "react";
import styled from "styled-components";

const Tag = styled.span`
  font-size: 24px;
  line-height: 24px;
  color: #22232b;
  font-weight: 700;
  font-family: "Open Sans";
`;

const TagBlock = styled.div`
  display: inline-block;
`;

interface PriceTagProps {
  amount: number;
}

const PriceTag: React.FC<PriceTagProps> = ({ amount }) => {
  const formattedAmount = amount.toLocaleString("ru-KZ", {
    maximumFractionDigits: 0,
  });

  return (
    <TagBlock>
      <Tag>{formattedAmount}</Tag> тг/мес
    </TagBlock>
  );
};

export default PriceTag;
