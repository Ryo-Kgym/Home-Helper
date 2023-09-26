import { IocomeTotalPresenter } from "@components/molecules/Total/IocomeTotalPresenter";
import { FC } from "react";

type IocomeTotalContainerProps = {
  income: number | undefined;
  outcome: number | undefined;
};

export const IocomeTotalContainer: FC<IocomeTotalContainerProps> = ({
  income = 0,
  outcome = 0,
}) => {
  const hidden = income === 0 && outcome === 0;

  return (
    <IocomeTotalPresenter income={income} outcome={outcome} hidden={hidden} />
  );
};
