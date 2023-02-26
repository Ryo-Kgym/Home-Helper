import { FC } from "react";

type DayPresenterProps = {
  displayDay: string;
  income: number;
  outcome: number;
};
export const DayPresenter: FC<DayPresenterProps> = ({
  displayDay,
  income,
  outcome,
}) => {
  return (
    <div className={"h-32 border-r-2 border-b-2"}>
      <div className={"p-2"}>{displayDay}</div>

      <div className={"grid grid-cols-1"}>
        <Line price={income} backgroundColor={"bg-green-500"} />
        <Line price={outcome} backgroundColor={"bg-red-500"} />
        <Line price={income - outcome} backgroundColor={"bg-yellow-500"} />
      </div>
    </div>
  );
};

const Line = ({
  price,
  backgroundColor,
}: {
  price: number;
  backgroundColor: string;
}) => {
  return (
    <div className={`m-0.5 pr-1 rounded-md ${backgroundColor} text-right`}>
      {price.toLocaleString()}
    </div>
  );
};
