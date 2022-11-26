import { Flex, Table } from "@mantine/core";
import { FC } from "react";
import { PopOver } from "../../ui/popOver";
import styles from "./styles.module.scss";
import { Layout } from "../Layout";
import { BackCardLinkList } from "@components/ui/Card";
import { Counter } from "@components/ui/Counter";

type ChargePointPresenterProps = {
  fromDate: string;
  helpItems: any[];
  handleClickCount: (point: number, count: number) => void;
  totalPoint: number;
};

export const ChargePointPresenter: FC<ChargePointPresenterProps> = (props) => {
  return (
    <Layout
      main={
        <>
          <Title fromDate={props.fromDate} />
          <HelpItemTable
            helpItems={props.helpItems}
            handleClickCount={props.handleClickCount}
          />
          <Total total={props.totalPoint} />
          <BackCardLinkList href={"../homeHelper/possessionPoint"} />
        </>
      }
    />
  );
};

const HelpItemTable = (props: {
  helpItems: any[];
  handleClickCount: (point: number, count: number) => void;
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
        <tr
          key={helpItem.name}
          onClick={() => {
            props.handleClickCount(helpItem.point, helpItem.count);
          }}
        >
          <td>{helpItem.id}</td>
          <td>{helpItem.name}</td>
          <td>{helpItem.point}</td>
          <td>
            <Counter defaultValue={helpItem.count} />
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

const Total = (props: { total: number }) => {
  const handleClickDecide = () => {
    alert(props.total.toLocaleString() + "ポイント 獲得！");
  };

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
      <Flex>
        <PopOver handleClick={handleClickDecide} />
      </Flex>
    </Flex>
  );
};
