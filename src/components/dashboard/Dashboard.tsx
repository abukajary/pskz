import React, { useState } from "react";
import styled from "styled-components";
import DefaultButton from "../../ui/buttons/DefaultButton";
import Server from "./Server";
import DefaultCard from "../../ui/DefaultCard";

const DashboardContainer = styled.div`
  width: 100%;
  padding: 90px 140px;
  display: grid;
  row-gap: 20px;
  background-color: rgb(237, 239, 244);
  margin-left: 60px;

  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`;

const Dashboard: React.FC = () => {
  const initialServer = <Server key={0} serverNumber={1} />;
  const [servers, setServers] = useState<JSX.Element[]>([initialServer]);
  const addServer = () => {
    const newServer = (
      <Server key={servers.length} serverNumber={servers.length + 1} />
    );
    setServers((prevServers) => [...prevServers, newServer]);
  };

  return (
    <DashboardContainer>
      {servers}
      <DefaultButton type="outline" onClick={addServer}>
        Добавить сервер
      </DefaultButton>
      <DefaultCard title="Блок IP-адресов "></DefaultCard>
    </DashboardContainer>
  );
};

export default Dashboard;
