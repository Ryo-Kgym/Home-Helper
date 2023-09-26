/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Table, TableProps } from "@components/atoms/Table/index";
import { UpdateNotification } from "@components/atoms/UpdateNotification";
import { Flex } from "@mantine/core";
import styles from "./styles.module.scss";

type ChargePointPresenterProps = {
  fromDate: string;
  currentPoint: number;
  totalPoint: number;
  handleRegisterHelps: () => void;
  handleRegisterAfterProcess: () => void;
  tableProps: TableProps[];
};

export const ChargePointPresenter = ({
  fromDate,
  currentPoint,
  totalPoint,
  handleRegisterHelps,
  handleRegisterAfterProcess,
  tableProps,
}: ChargePointPresenterProps) => (
  <>
    <Title fromDate={fromDate} />
    <HelpItemTable tbodyProps={tableProps} />
    <TotalPointBox
      currentPoint={currentPoint}
      totalUsePoint={totalPoint}
      handleRegisterHelps={handleRegisterHelps}
      handleAfterProcess={handleRegisterAfterProcess}
    />
  </>
);

const header = ["お手伝い", "ポイント", "回数"];

const HelpItemTable = ({ tbodyProps }: { tbodyProps: TableProps[] }) => (
  <Table
    header={header}
    tablePropsList={tbodyProps}
    height={"80vh"}
    size={"sm"}
  />
);

const Title = ({ fromDate }: { fromDate: string }) => (
  <div className={"flex text-4xl"}>
    <div>
      {fromDate}
      {"　〜　"}今日
    </div>
    <div className={"text-2xl pt-2"}>の登録をするよ</div>
  </div>
);

const FormulaFlex = ({ label, point }: { label: string; point: number }) => (
  <Flex wrap="wrap" className={styles.formulaSub}>
    <Flex className={styles.rubi}>{label}</Flex>
    <Flex className={styles.point}>{point.toLocaleString()}</Flex>
  </Flex>
);

const TotalPointBox = ({
  currentPoint,
  totalUsePoint,
  handleRegisterHelps,
  handleAfterProcess,
}: {
  currentPoint: number;
  totalUsePoint: number;
  handleRegisterHelps: () => void;
  handleAfterProcess: () => void;
}) => (
  <Flex className={styles.formula}>
    <FormulaFlex label={"今のポイント"} point={currentPoint} />
    <Flex>+</Flex>
    <FormulaFlex label={"お手伝いしたポイント"} point={totalUsePoint} />
    <Flex>=</Flex>
    <FormulaFlex
      label={"合計のポイント"}
      point={currentPoint + totalUsePoint}
    />
    <Flex style={{ marginLeft: "50px" }}>
      <UpdateNotification
        label={"お手伝い申請"}
        showTitle={"お手伝いを申請中だよ！"}
        showMessage={""}
        updateTitle={"お手伝いの申請が完了したよ！"}
        updateMessage={""}
        handleClick={handleRegisterHelps}
        handleAfterProcess={handleAfterProcess}
      />
    </Flex>
  </Flex>
);
