import { FC } from "react";
import { MonthlyCategoryPresenter } from "@components/organisms/summary/monthly_category/MonthlyCategoryPresenter";

type MonthlyCategoryContainerProps = {};

export const MonthlyCategoryContainer: FC<
  MonthlyCategoryContainerProps
> = () => {
  return <MonthlyCategoryPresenter />;
};
