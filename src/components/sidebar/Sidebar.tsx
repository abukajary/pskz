import React, { useState } from "react";
import styled from "styled-components";

interface SidebarProps {
  isOpen: boolean;
}

const SidebarContainer = styled.div<SidebarProps>`
  z-index: 999;
  width: ${({ isOpen }) => (isOpen ? "360px" : "60px")};
  transition: width 0.3s ease;
  background-color: #333;
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const ToggleButton = styled.button`
  margin: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  border-radius: 5px;
`;

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <SidebarContainer isOpen={isOpen}>
      <ToggleButton onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"}
      </ToggleButton>
    </SidebarContainer>
  );
};

export default Sidebar;
