import { CounterPresenter } from "@components/ui/Counter/CounterPresenter";
import { FC, useState } from "react";

type CounterContainerProps = {
  defaultValue: number;
  handleSetCount: (count: number) => void;
  min?: number;
  max?: number;
};
export const CounterContainer: FC<CounterContainerProps> = ({
  defaultValue,
  handleSetCount,
  min = 0,
  max = 9999,
}) => {
  const [count, setCount] = useState(defaultValue);

  const handleIncrement = () => {
    if (count < max) {
      setCount(count + 1);
      handleSetCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      setCount(count - 1);
      handleSetCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(defaultValue);
  };

  return (
    <CounterPresenter
      count={count}
      handleSetCount={handleSetCount}
      min={min}
      max={max}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
    />
  );
};
