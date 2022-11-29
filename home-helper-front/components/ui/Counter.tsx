import { FC, useState } from "react";
import { Button, Flex } from "@mantine/core";
import styles from "./ui.module.scss";

type CounterProps = {
  defaultValue: number;
  value: number;
  handleSetValue: (point: number) => void;
  min?: number;
  max?: number;
};

export const Counter: FC<CounterProps> = ({
  defaultValue,
  value,
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
      handleSetValue(value);
    }
  };

  const handleDecrement = () => {
    if (count > countMin) {
      setCount(count - 1);
      handleSetValue(-value);
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
          value={value}
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
  value,
  count,
}: {
  handleReset: () => void;
  handleSetValue: (point: number) => void;
  value: number;
  count: number;
}) => {
  return (
    <Button
      className={styles.clearBox}
      onClick={() => {
        if (count > 0) {
          handleReset();
          handleSetValue(-value * count);
        }
      }}
    >
      CLEAR
    </Button>
  );
};
