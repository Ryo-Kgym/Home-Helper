import { FC, useState } from "react";
import { Button, Flex } from "@mantine/core";
import styles from "./ui.module.scss";

type CounterProps = {
  defaultValue: number;
  min?: number;
  max?: number;
};

export const Counter: FC<CounterProps> = (props) => {
  const [value, setValue] = useState(props.defaultValue);
  const min = props.min ?? 0;
  const max = props.max ?? 9999;

  const handleIncrement = () => {
    if (value < max) setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > min) setValue(value - 1);
  };

  return (
    <Flex>
      <Flex>
        <Decrement handleClick={handleDecrement} />
      </Flex>
      <Flex align={"center"} style={{ width: "50px" }} justify={"center"}>
        {value}
      </Flex>
      <Flex>
        <Increment handleClick={handleIncrement} />
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
