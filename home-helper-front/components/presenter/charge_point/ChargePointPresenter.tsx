import { FC } from "react";
import { Flex, Table } from "@mantine/core";
import styles from "./styles.module.scss";
import { Layout } from "@components/presenter/Layout";
import { BackCardLinkList } from "@components/ui/Card";
import { Counter } from "@components/ui/Counter";
import { UpdateNotification } from "@components/ui/UpdateNotification";

type ChargePointPresenterProps = {
  fromDate: string;
  helpItems: any[];
  currentPoint: number;
  totalPoint: number;
  handleCalcTotal: (id: string, point: number, count: number) => void;
  handleRegisterHelps: () => void;
  handleRegisterAfterProcess: () => void;
};

export const ChargePointPresenter: FC<ChargePointPresenterProps> = ({
  fromDate,
  helpItems,
  currentPoint,
  totalPoint,
  handleCalcTotal,
  handleRegisterHelps,
  handleRegisterAfterProcess,
}) => {
  return (
    <Layout
      main={
        <>
          <Title fromDate={fromDate} />
          <HelpItemTable
            helpItems={helpItems}
            handleSetValue={handleCalcTotal}
          />
          <TotalPointBox
            currentPoint={currentPoint}
            totalUsePoint={totalPoint}
            handleRegisterHelps={handleRegisterHelps}
            handleAfterProcess={handleRegisterAfterProcess}
          />
          <BackCardLinkList href={"../homeHelper/possessionPoint"} />
        </>
      }
    />
  );
};

const HelpItemTable = ({
  helpItems,
  handleSetValue,
}: {
  helpItems: any[];
  handleSetValue: (id: string, point: number, count: number) => void;
}) => (
  <Table striped highlightOnHover>
    <thead>
      <tr>
        <th>#</th>
        <th>お手伝い</th>
        <th>ポイント</th>
        <th>回数</th>
      </tr>
    </thead>
    <tbody>
      {helpItems.map((helpItem, index) => (
        <tr key={helpItem.id}>
          <td>{index + 1}</td>
          <td>{helpItem.name}</td>
          <td>{helpItem.point}</td>
          <td>
            <Counter
              defaultValue={0}
              handleSetCount={(count: number) => {
                handleSetValue(helpItem.id, helpItem.point, count);
              }}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
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
