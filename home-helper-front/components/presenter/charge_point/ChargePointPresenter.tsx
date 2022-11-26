import { Center, Flex, Grid, Table } from "@mantine/core";
import { FC } from "react";
import { PopOver } from "../../ui/popOver";
import styles from "./styles.module.scss";
import { Layout } from "../Layout";

type ChargePointPresenterProps = {
  fromDate: string;
  helpItems: any[];
  handleClickCount: any;
  totalPoint: number;
};

export const ChargePointPresenter: FC<ChargePointPresenterProps> = (props) => {
  return (
    <Layout
      main={
        <>
          <DeclareTerm fromDate={props.fromDate} toDate={"今日"} />
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
                <tr key={helpItem.name}>
                  <td>{helpItem.id}</td>
                  <td>{helpItem.name}</td>
                  <td>{helpItem.point}</td>
                  <td
                    onClick={() => {
                      props.handleClickCount(helpItem.point, helpItem.count);
                    }}
                  >
                    {helpItem.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <TotalDeclare total={props.totalPoint} />
        </>
      }
    />
  );
};

const TotalDeclare = (props: { total: number }) => {
  const handleClickDecide = () => {
    alert(props.total.toLocaleString() + "ポイント 獲得！");
  };

  return (
    <Flex
      justify="flex-end"
      align="center"
      direction="row"
      wrap="wrap"
      className={styles.totalPoint}
    >
      <Flex>合計</Flex>
      <Flex justify="flex-end" sx={{ width: "100px" }}>
        {props.total.toLocaleString()}
      </Flex>
      <Flex justify="center" sx={{ width: "100px" }}>
        <PopOver handleClick={handleClickDecide} />
      </Flex>
    </Flex>
  );
};

const DeclareTerm = (props: { fromDate: string; toDate: string }) => {
  return (
    <Grid grow className={styles.declareTerm}>
      <Grid.Col span={5}>
        <Center>{props.fromDate}</Center>
      </Grid.Col>
      <Grid.Col span={"auto"}>
        <Center>〜</Center>
      </Grid.Col>
      <Grid.Col span={5}>
        <Center>{props.toDate}</Center>
      </Grid.Col>
    </Grid>
  );
};
