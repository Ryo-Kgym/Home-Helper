import { FC } from "react";
import { Button, Flex } from "@mantine/core";
import styles from "../ui.module.scss";

type CounterProps = {
  count: number;
  handleSetCount: (count: number) => void;
  min: number;
  max: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleReset: () => void;
};

export const CounterPresenter: FC<CounterProps> = ({
  count,
  handleSetCount,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <Flex direction={"row"} align={"center"} className={styles.counter}>
      <div className={"flex"}>
        <Decrement handleClick={handleDecrement} />
      </div>
      <Flex className={styles.count}>{count}</Flex>
      <div className={"flex"}>
        <Increment handleClick={handleIncrement} />
      </div>
      <Flex className={styles.blank} />
      <div className={"flex"}>
        <Reset
          handleSetValue={handleSetCount}
          handleReset={handleReset}
          count={count}
        />
      </div>
    </Flex>
  );
};

const Increment = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <Button className={styles.counterBox} onClick={handleClick}>
      +
    </Button>
  );
};

const Decrement = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <Button className={styles.counterBox} onClick={handleClick}>
      -
    </Button>
  );
};

const Reset = ({
  handleReset,
  handleSetValue,
  count,
}: {
  handleReset: () => void;
  handleSetValue: (count: number) => void;
  count: number;
}) => {
  return (
    <Button
      className={styles.clearBox}
      onClick={() => {
        if (count > 0) {
          handleReset();
          handleSetValue(0);
        }
      }}
    >
      CLEAR
    </Button>
  );
};
