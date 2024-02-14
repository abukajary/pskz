import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../ui/svg/inputArrow.svg";

const SelectContainer = styled.div`
  position: relative;
`;

const SelectButton = styled.button`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: #fff;
  border-radius: 5px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Options = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  background: white;
  z-index: 10;
  border-top: none;
`;

const Option = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #eee;
  background: white;
  text-align: left;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Label = styled.div`
  position: absolute;
  top: -10px;
  left: 18px;
  background: white;
  padding: 0 10px;
  color: rgb(0, 0, 0);
  line-height: 18px;
  color: #22232b;
  font-weight: 400;
  font-family: "Open Sans";
  font-size: 11px;
`;

const DefaultOptions: React.FC<{
  label: string;
  options: { id: number; name: string }[];
}> = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: { id: number; name: string }) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <Label>{label}</Label>
      <SelectButton onClick={toggleOpen} aria-expanded={isOpen}>
        {selectedOption.name}
        <ArrowIcon
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
        />
      </SelectButton>
      <Options isOpen={isOpen}>
        {options.map((option) => (
          <Option key={option.id} onClick={() => handleOptionClick(option)}>
            {option.name}
          </Option>
        ))}
      </Options>
    </SelectContainer>
  );
};

export default DefaultOptions;
