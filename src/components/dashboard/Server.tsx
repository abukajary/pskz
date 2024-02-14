import React from "react";
import styled from "styled-components";
import DefaultCard from "../../ui/DefaultCard";
import DefaultOptions from "../../ui/DefaultOptions";
import PriceTag from "../../ui/PriceTag";
import cpuData from "../../data/cpu.json";
import { ReactComponent as CpuIcon } from "../../ui/svg/cpu.svg";
import { ReactComponent as Disc } from "../../ui/svg/disc.svg";
import { ReactComponent as Ethernet } from "../../ui/svg/ethernet.svg";
import { ReactComponent as Ram } from "../../ui/svg/ram.svg";

interface ServerProps {
  serverNumber: number;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; // Default layout for larger screens
  grid-template-areas:
    "bigLabel bigLabel sideLabel"
    "firstLabel secondLabel sideLabel"
    "firstLabel secondLabel sideLabel";
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "bigLabel"
      "firstLabel"
      "secondLabel"
      "sideLabel";
  }
`;

const BigLabel = styled.div`
  grid-area: bigLabel;
`;

const SideLabel = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: 20px;
  grid-area: sideLabel;
`;

const SelectWrapper = styled.div`
  display: grid;
  grid-template-columns: 36px 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  :nth-child(4) {
    width: max-content;
    border-bottom: 1px dashed #22232b;
    height: fit-content;
  }
`;
const Kostyl = styled.div`
  display: block;
`;

const Link = styled.div`
  font-size: 13px;
  line-height: 18px;
  color: #20a8d8;
  font-weight: 400;
  border-bottom: #20a8d8;
  cursor: pointer;
  font-family: "Open Sans";
`;

const Server: React.FC<ServerProps> = ({ serverNumber }) => {
  return (
    <DefaultCard title={`Сервер ${serverNumber}`}>
      <GridContainer>
        <BigLabel>
          <SelectWrapper>
            <CpuIcon />
            <DefaultOptions
              label="Процессор"
              options={cpuData.map(({ ID, name }) => ({ id: ID, name }))}
            />
            <Kostyl />
            <PriceTag amount={19000}></PriceTag>
          </SelectWrapper>
        </BigLabel>
        <SelectWrapper>
          <Disc />
          <DefaultOptions
            label="Системный диск 1"
            options={cpuData.map(({ ID, name }) => ({ id: ID, name }))}
          />
          <Kostyl />
          <PriceTag amount={19000}></PriceTag>
        </SelectWrapper>
        <SelectWrapper>
          <Disc />
          <DefaultOptions
            label="Диск 2 "
            options={cpuData.map(({ ID, name }) => ({ id: ID, name }))}
          />
          <Kostyl />
          <PriceTag amount={19000}></PriceTag>
        </SelectWrapper>

        <SideLabel>
          <SelectWrapper>
            <Ethernet />
            <DefaultOptions
              label="Сетевой порт 1"
              options={cpuData.map(({ ID, name }) => ({ id: ID, name }))}
            />
            <Kostyl />
            <PriceTag amount={19000}></PriceTag>
          </SelectWrapper>
          <SelectWrapper>
            <CpuIcon />
            <DefaultOptions
              label="Сетевой порт 2"
              options={cpuData.map(({ ID, name }) => ({ id: ID, name }))}
            />
            <Kostyl />
            <PriceTag amount={19000}></PriceTag>
          </SelectWrapper>
        </SideLabel>
      </GridContainer>

      <Link>Добавить еще дисков</Link>

      <GridContainer>
        <SelectWrapper>
          <CpuIcon />
          <DefaultOptions
            label="Процессор"
            options={cpuData.map(({ ID, name }) => ({ id: ID, name }))}
          />
          <Kostyl />
          <PriceTag amount={19000}></PriceTag>
        </SelectWrapper>
        <SelectWrapper>
          <CpuIcon />
          <DefaultOptions
            label="Процессор"
            options={cpuData.map(({ ID, name }) => ({ id: ID, name }))}
          />
          <Kostyl />
          <PriceTag amount={19000}></PriceTag>
        </SelectWrapper>

        <SideLabel>
          <SelectWrapper>
            <CpuIcon />
            <DefaultOptions
              label="Процессор"
              options={cpuData.map(({ ID, name }) => ({ id: ID, name }))}
            />
            <Kostyl />
            <PriceTag amount={19000}></PriceTag>
          </SelectWrapper>
        </SideLabel>
      </GridContainer>
    </DefaultCard>
  );
};

export default Server;
