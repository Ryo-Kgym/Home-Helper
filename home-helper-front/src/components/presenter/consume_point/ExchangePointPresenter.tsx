import { Flex } from "@mantine/core";
import { FC } from "react";
import styles from "./styles.module.scss";
import { UpdateNotification } from "@components/ui/UpdateNotification";
import { Table, TbodyProps } from "@components/ui/Table";

type ConsumePointPresenterProps = {
  currentPoint: number;
  totalUsePoint: number;
  handleRequest: () => void;
  handleRegisterAfterProcess: () => void;
  tbodyProps: TbodyProps[];
};

export const ExchangePointPresenter: FC<ConsumePointPresenterProps> = ({
  currentPoint,
  totalUsePoint,
  handleRequest,
  handleRegisterAfterProcess,
  tbodyProps,
}) => {
  return (
    <>
      <ExchangeTable tbodyProps={tbodyProps} />
      <LeavePointBox
        currentPoint={currentPoint}
        totalUsePoint={totalUsePoint}
        handleRequest={handleRequest}
        handleAfterProcess={handleRegisterAfterProcess}
      />
    </>
  );
};

const header = ["交換品", "ポイント", "交換数"];
const ExchangeTable = ({ tbodyProps }: { tbodyProps: TbodyProps[] }) => (
  <Table header={header} tbodyPropsArray={tbodyProps} height={"40vh"} />
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
