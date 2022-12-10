import { FC, useState } from "react";
import { Button, Flex } from "@mantine/core";
import styles from "./ui.module.scss";

type CounterProps = {
  defaultValue: number;
  handleSetValue: (count: number) => void;
  min?: number;
  max?: number;
};

export const Counter: FC<CounterProps> = ({
  defaultValue,
  handleSetValue,
  min,
  max,
}) => {
  const [count, setCount] = useState(defaultValue);
  const countMin = min ?? 0;
  const countMax = max ?? 9999;

  const handleIncrement = () => {
    if (count < countMax) {
      setCount(count + 1);
      handleSetValue(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > countMin) {
      setCount(count - 1);
      handleSetValue(count - 1);
    }
  };

  const handleReset = () => {
    setCount(defaultValue);
  };

  return (
    <Flex direction={"row"} align={"center"} className={styles.counter}>
      <Flex>
        <Decrement handleClick={handleDecrement} />
      </Flex>
      <Flex className={styles.count}>{count}</Flex>
      <Flex>
        <Increment handleClick={handleIncrement} />
      </Flex>
      <Flex className={styles.blank} />
      <Flex>
        <Reset
          handleSetValue={handleSetValue}
          handleReset={handleReset}
          count={count}
        />
      </Flex>
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
