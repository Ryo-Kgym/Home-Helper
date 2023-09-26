import { FC } from "react";
import { PrevIcon } from "@components/atoms/Icon/PrevIcon";
import { NextIcon } from "@components/atoms/Icon/NextIcon";

type ChangeMonthPresenterProps = {
  displayYearMonth: string;
  prevClickHandler: () => void;
  nextClickHandler: () => void;
};
export const ChangeMonthPresenter: FC<ChangeMonthPresenterProps> = ({
  displayYearMonth,
  prevClickHandler,
  nextClickHandler,
}) => (
  <div className={"grid grid-cols-3 text-3xl p-2"}>
    <div className={"justify-center flex"}>
      <PrevIcon onClickHandler={prevClickHandler} />
    </div>
    <div className={"text-center"}>
      <div>{displayYearMonth}</div>
    </div>
    <div className={"justify-center flex"}>
      <NextIcon onClickHandler={nextClickHandler} />
    </div>
  </div>
);
