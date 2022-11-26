import { FC } from "react";
import { Flex, Table } from "@mantine/core";
import styles from "./styles.module.scss";
import { Layout } from "@components/presenter/Layout";
import { BackCardLinkList } from "@components/ui/Card";
import { Counter } from "@components/ui/Counter";

type ChargePointPresenterProps = {
  fromDate: string;
  helpItems: any[];
  totalPoint: number;
  handleCalcTotal: (point: number) => void;
  handleRegisterHelpItems: () => void;
};

export const ChargePointPresenter: FC<ChargePointPresenterProps> = (props) => {
  return (
    <Layout
      main={
        <>
          <Title fromDate={props.fromDate} />
          <HelpItemTable
            helpItems={props.helpItems}
            handleSetValue={props.handleCalcTotal}
          />
          <Total
            total={props.totalPoint}
            handleRegisterHelpItems={props.handleRegisterHelpItems}
          />
          <BackCardLinkList href={"../homeHelper/possessionPoint"} />
        </>
      }
    />
  );
};

const HelpItemTable = (props: {
  helpItems: any[];
  handleSetValue: (point: number) => void;
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
      {props.helpItems.map((helpItem) => (
        <tr key={helpItem.id}>
          <td>{helpItem.id}</td>
          <td>{helpItem.name}</td>
          <td>{helpItem.point}</td>
          <td>
            <Counter
              defaultValue={0}
              value={helpItem.point}
              handleSetValue={props.handleSetValue}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const Title = (props: { fromDate: string }) => {
  return (
    <>
      <Flex direction="row" wrap="wrap" className={styles.title} align={"end"}>
        <Flex>{props.fromDate}</Flex>
        <Flex>{"　〜　"}</Flex>
        <Flex>今日</Flex>
        <Flex className={styles.message}>の登録をするよ</Flex>
      </Flex>
    </>
  );
};

const Total = (props: {
  total: number;
  handleRegisterHelpItems: () => void;
}) => {
  const message = props.total.toLocaleString() + "ポイント 獲得！";

  return (
    <Flex
      direction="row"
      wrap="wrap"
      className={styles.totalPoint}
      align={"center"}
    >
      <Flex>合計</Flex>
      <Flex className={styles.point}>{props.total.toLocaleString()}</Flex>
      <Flex className={styles.unit}>pt</Flex>
      <Flex></Flex>
    </Flex>
  );
};
