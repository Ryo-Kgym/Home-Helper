import { FC } from "react";
import { Flex } from "@mantine/core";
import styles from "./styles.module.scss";
import { UpdateNotification } from "@components/atoms/UpdateNotification";
import { Table, TbodyProps } from "@components/atoms/Table";

type ChargePointPresenterProps = {
  fromDate: string;
  currentPoint: number;
  totalPoint: number;
  handleRegisterHelps: () => void;
  handleRegisterAfterProcess: () => void;
  tbodyProps: TbodyProps[];
};

export const ChargePointPresenter: FC<ChargePointPresenterProps> = ({
  fromDate,
  currentPoint,
  totalPoint,
  handleRegisterHelps,
  handleRegisterAfterProcess,
  tbodyProps,
}) => {
  return (
    <>
      <Title fromDate={fromDate} />
      <HelpItemTable tbodyProps={tbodyProps} />
      <TotalPointBox
        currentPoint={currentPoint}
        totalUsePoint={totalPoint}
        handleRegisterHelps={handleRegisterHelps}
        handleAfterProcess={handleRegisterAfterProcess}
      />
    </>
  );
};

const header = ["お手伝い", "ポイント", "回数"];

const HelpItemTable = ({ tbodyProps }: { tbodyProps: TbodyProps[] }) => (
  <Table header={header} tbodyPropsArray={tbodyProps} height={"40vh"} />
);

const Title = ({ fromDate }: { fromDate: string }) => {
  return (
    <>
      <Flex direction="row" wrap="wrap" className={styles.title} align={"end"}>
        <Flex>{fromDate}</Flex>
        <Flex>{"　〜　"}</Flex>
        <Flex>今日</Flex>
        <Flex className={styles.message}>の登録をするよ</Flex>
      </Flex>
    </>
  );
};

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
