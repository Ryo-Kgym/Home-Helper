import { FC } from "react";
import { useGetDailyDetailByDateCategoryIdQuery } from "@graphql/postgraphile/generated/graphql";
import { TableProps } from "@components/atoms/Table";
import { DailyTableByCategoryPresenter } from "./DailyTableByCategoryPresenter";
import { dailyDetailConverter } from "@components/atoms/Table/dailyDetailConverter";

type DailyTableByCategoryContainerProps = {
  date: Date;
  categoryId: string;
};
export const DailyTableByCategoryContainer: FC<
  DailyTableByCategoryContainerProps
> = ({ date, categoryId }) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const [{ data }] = useGetDailyDetailByDateCategoryIdQuery({
    variables: {
      fromDate: firstDay,
      toDate: lastDay,
      categoryId: categoryId,
    },
  });

  const tableProps: TableProps[] = dailyDetailConverter(data);

  return <DailyTableByCategoryPresenter tableProps={tableProps} />;
};
