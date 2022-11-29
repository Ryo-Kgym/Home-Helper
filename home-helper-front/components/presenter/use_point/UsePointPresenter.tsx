import { Box, Button, Flex, Table } from "@mantine/core";
import { FC } from "react";
import styles from "./styles.module.scss";
import { Layout } from "@components/presenter/Layout";
import { ExchangeItem } from "@domain/model/home_helper/ExchangeItem";
import { BackCardLinkList } from "@components/ui/Card";
import { Counter } from "@components/ui/Counter";
import { UpdateNotification } from "@components/ui/UpdateNotification";

type UsePointPresenterProps = {
  exchangeItems: ExchangeItem[];
  currentPoint: number;
  totalUsePoint: number;
  handleCalcTotalUsePoint: (userPoint: number) => void;
  handleRequest: () => void;
};

export const UsePointPresenter: FC<UsePointPresenterProps> = ({
  exchangeItems,
  currentPoint,
  totalUsePoint,
  handleCalcTotalUsePoint,
  handleRequest,
}) => {
  return (
    <Layout
      main={
        <>
          <ExchangeTable
            exchangeItems={exchangeItems}
            handleSetValue={handleCalcTotalUsePoint}
          />
          <LeavePointBox
            currentPoint={currentPoint}
            totalUsePoint={totalUsePoint}
            handleRequest={handleRequest}
          />
          <BackCardLinkList href={"../homeHelper/possessionPoint"} />
        </>
      }
    />
  );
};

const ExchangeTable = ({
  exchangeItems,
  handleSetValue,
}: {
  exchangeItems: ExchangeItem[];
  handleSetValue: (usePoint: number) => void;
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
              value={exchangeItem.point}
              handleSetValue={handleSetValue}
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
}: {
  currentPoint: number;
  totalUsePoint: number;
  handleRequest: () => void;
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
        label={"申請"}
        showTitle={"ポイント交換"}
        showMessage={"ポイントと交換中です。"}
        updateTitle={"ポイント交換完了"}
        updateMessage={"ポイントを交換したよ"}
        handleClick={handleRequest}
        handleAfterProcess={() => {}}
      />
    </Flex>
  </Flex>
);
