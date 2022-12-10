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
  totalPoint: number;
  handleCalcTotal: (id: string, point: number, count: number) => void;
  handleRegisterHelps: () => void;
  handleReset: () => void;
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
            handleRegisterHelps={props.handleRegisterHelps}
            handleReset={props.handleReset}
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
  <Table striped highlightOnHover id={"chargePointTable"}>
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

const Total = ({
  total,
  handleRegisterHelps,
  handleReset,
}: {
  total: number;
  handleRegisterHelps: () => void;
  handleReset: () => void;
}) => {
  const message = total.toLocaleString() + "ポイント 獲得！";

  return (
    <Flex
      direction="row"
      wrap="wrap"
      className={styles.totalPoint}
      align={"center"}
    >
      <Flex>合計</Flex>
      <Flex className={styles.point}>{total.toLocaleString()}</Flex>
      <Flex className={styles.unit}>pt</Flex>
      <Flex>
        <UpdateNotification
          label={"お手伝い申請"}
          showTitle={"お手伝いを申請中だよ！"}
          showMessage={""}
          updateTitle={"お手伝いの申請が完了したよ！"}
          updateMessage={""}
          handleClick={handleRegisterHelps}
          handleAfterProcess={handleReset}
        />
      </Flex>
    </Flex>
  );
};
