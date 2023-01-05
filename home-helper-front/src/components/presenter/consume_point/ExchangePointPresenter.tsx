import { Flex, Table } from "@mantine/core";
import { FC } from "react";
import styles from "./styles.module.scss";
import { ExchangeItem } from "@domain/model/home_helper/ExchangeItem";
import { Counter } from "@components/ui/Counter";
import { UpdateNotification } from "@components/ui/UpdateNotification";

type ConsumePointPresenterProps = {
  exchangeItems: ExchangeItem[];
  currentPoint: number;
  totalUsePoint: number;
  handleCalcTotalUsePoint: (id: string, point: number, count: number) => void;
  handleRequest: () => void;
  handleRegisterAfterProcess: () => void;
};

export const ExchangePointPresenter: FC<ConsumePointPresenterProps> = ({
  exchangeItems,
  currentPoint,
  totalUsePoint,
  handleCalcTotalUsePoint,
  handleRequest,
  handleRegisterAfterProcess,
}) => {
  return (
    <>
      <ExchangeTable
        exchangeItems={exchangeItems}
        handleSetValue={handleCalcTotalUsePoint}
      />
      <LeavePointBox
        currentPoint={currentPoint}
        totalUsePoint={totalUsePoint}
        handleRequest={handleRequest}
        handleAfterProcess={handleRegisterAfterProcess}
      />
    </>
  );
};

const ExchangeTable = ({
  exchangeItems,
  handleSetValue,
}: {
  exchangeItems: ExchangeItem[];
  handleSetValue: (id: string, point: number, count: number) => void;
}) => (
  <Table striped highlightOnHover>
    <thead>
      <tr>
        <th>#</th>
        <th>交換品</th>
        <th>ポイント</th>
        <th>交換数</th>
      </tr>
    </thead>
    <tbody>
      {exchangeItems.map((exchangeItem) => (
        <tr key={exchangeItem.name}>
          <td>{exchangeItem.id}</td>
          <td>{exchangeItem.name}</td>
          <td>{exchangeItem.point}</td>
          <td>
            <Counter
              defaultValue={0}
              handleSetCount={(count: number) => {
                handleSetValue(exchangeItem.id, exchangeItem.point, count);
              }}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
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
