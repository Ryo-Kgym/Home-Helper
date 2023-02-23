import { FC } from "react";

type DayPresenterProps = {
  day: string;
};
export const DayPresenter: FC<DayPresenterProps> = ({ day }) => {
  return (
    <div className={"h-32 border-r-2 border-b-2"}>
      <div className={"p-2"}>{day}</div>
    </div>
  );
};
