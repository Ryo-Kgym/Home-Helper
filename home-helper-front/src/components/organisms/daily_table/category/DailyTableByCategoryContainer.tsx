import { FC } from "react";
import { useGetDailyDetailByDateCategoryIdQuery } from "@graphql/postgraphile/generated/graphql";
import { TableProps } from "@components/atoms/Table";
import { DailyTableByCategoryPresenter } from "./DailyTableByCategoryPresenter";
import { dailyDetailConverter } from "@components/atoms/Table/dailyDetailConverter";

type DailyTableByCategoryContainerProps = {
  fromMonth: Date;
  toMonth: Date;
  categoryId: string;
};
export const DailyTableByCategoryContainer: FC<
  DailyTableByCategoryContainerProps
> = ({ fromMonth, toMonth, categoryId }) => {
  const firstDay = new Date(fromMonth.getFullYear(), fromMonth.getMonth(), 1);
  const lastDay = new Date(toMonth.getFullYear(), toMonth.getMonth() + 1, 0);

  const [{ data }] = useGetDailyDetailByDateCategoryIdQuery({
    variables: {
      fromDate: firstDay,
      toDate: lastDay,
      categoryId: categoryId,
    },
  });

  const tableProps: TableProps[] = dailyDetailConverter(data);

  return (
    <DailyTableByCategoryPresenter
      firstDay={firstDay}
      lastDay={lastDay}
      tableProps={tableProps}
    />
  );
};
