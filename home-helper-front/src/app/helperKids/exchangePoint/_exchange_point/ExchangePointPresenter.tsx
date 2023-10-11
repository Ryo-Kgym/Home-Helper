/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Table, TableProps } from "@components/atoms/Table/index";
import { UpdateNotification } from "@components/atoms/UpdateNotification";
import { Flex } from "@mantine/core";
import styles from "./styles.module.scss";

type ConsumePointPresenterProps = {
  currentPoint: number;
  totalUsePoint: number;
  handleRequest: () => void;
  handleRegisterAfterProcess: () => void;
  tableProps: TableProps[];
};

export const ExchangePointPresenter = ({
  currentPoint,
  totalUsePoint,
  handleRequest,
  handleRegisterAfterProcess,
  tableProps,
}: ConsumePointPresenterProps) => (
  <>
    <Title />
    <ExchangeTable tableProps={tableProps} />
    <LeavePointBox
      currentPoint={currentPoint}
      totalUsePoint={totalUsePoint}
      handleRequest={handleRequest}
      handleAfterProcess={handleRegisterAfterProcess}
    />
  </>
);

const Title = () => (
  <div className={"flex text-4xl"}>
    <div>ポイントを交換するよ</div>
  </div>
);

const header = ["交換品", "ポイント", "交換数"];
const ExchangeTable = ({ tableProps }: { tableProps: TableProps[] }) => (
  <Table
    header={header}
    tablePropsList={tableProps}
    height={"70vh"}
    size={"sm"}
  />
);

const FormulaFlex = ({ label, point }: { label: string; point: number }) => (
  <Flex wrap="wrap" className={styles.formulaSub}>
    <Flex className={styles.rubi}>{label}</Flex>
    <Flex className={styles.point}>{point.toLocaleString()}</Flex>
  </Flex>
);

const LeavePointBox = ({
  currentPoint,
  totalUsePoint,
  handleRequest,
  handleAfterProcess,
}: {
  currentPoint: number;
  totalUsePoint: number;
  handleRequest: () => void;
  handleAfterProcess: () => void;
}) => (
  <Flex className={styles.formula}>
    <FormulaFlex label={"今のポイント"} point={currentPoint} />
    <Flex>-</Flex>
    <FormulaFlex label={"交換したいポイント"} point={totalUsePoint} />
    <Flex>=</Flex>
    <FormulaFlex
      label={"残りのポイント"}
      point={currentPoint - totalUsePoint}
    />
    <Flex style={{ marginLeft: "50px" }}>
      <UpdateNotification
        label={"交換申請"}
        showTitle={"ポイント交換"}
        showMessage={"ポイントと交換中です。"}
        updateTitle={"ポイント交換完了"}
        updateMessage={"ポイントを交換したよ"}
        handleClick={handleRequest}
        handleAfterProcess={handleAfterProcess}
      />
    </Flex>
  </Flex>
);
