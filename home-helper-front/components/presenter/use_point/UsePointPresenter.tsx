import { Box, Button, Flex, Table } from "@mantine/core";
import { FC } from "react";
import styles from "./styles.module.scss";
import { Layout } from "@components/presenter/Layout";

type UsePointPresenterProps = {
  exchangeItems: any[];
  currentPoint: number;
  totalUsePoint: number;
  handleCalcTotalUsePoint: any;
  handleRequest: any;
};

export const UsePointPresenter: FC<UsePointPresenterProps> = (props) => {
  return (
    <Layout
      main={
        <>
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
              {props.exchangeItems.map((exchangeItem) => (
                <tr key={exchangeItem.name}>
                  <td>{exchangeItem.id}</td>
                  <td>{exchangeItem.name}</td>
                  <td>{exchangeItem.point}</td>
                  <td
                    onClick={() => {
                      props.handleCalcTotalUsePoint(exchangeItem.point);
                    }}
                  >
                    {exchangeItem.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Flex className={styles.formula}>
            <FormulaFlex label={"今のポイント"} point={props.currentPoint} />
            <Flex>-</Flex>
            <FormulaFlex
              label={"交換したいポイント"}
              point={props.totalUsePoint}
            />
            <Flex>=</Flex>
            <FormulaFlex
              label={"残りのポイント"}
              point={props.currentPoint - props.totalUsePoint}
            />
          </Flex>

          <Flex justify={"flex-end"}>
            <Button onClick={props.handleRequest}>申請</Button>
          </Flex>
        </>
      }
    />
  );
};

const FormulaFlex = ({ label, point }: { label: string; point: number }) => (
  <Flex wrap="wrap" className={styles.formulaSub}>
    <Flex className={styles.rubi}>{label}</Flex>
    <Flex className={styles.point}>{point.toLocaleString()}</Flex>
  </Flex>
);
