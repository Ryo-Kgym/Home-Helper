/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Button, Flex } from "@mantine/core";
import styles from "../ui.module.scss";

type CounterProps = {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  clearHandler: () => void;
};

export const CounterPresenter = ({
  count,
  handleIncrement,
  handleDecrement,
  clearHandler,
}: CounterProps) => (
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
      <Button className={styles.clearBox} onClick={clearHandler}>
        CLEAR
      </Button>
    </div>
  </Flex>
);

const Increment = ({ handleClick }: { handleClick: () => void }) => (
  <Button className={styles.counterBox} onClick={handleClick}>
    +
  </Button>
);

const Decrement = ({ handleClick }: { handleClick: () => void }) => (
  <Button className={styles.counterBox} onClick={handleClick}>
    -
  </Button>
);
