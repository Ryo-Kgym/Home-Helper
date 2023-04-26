import { FC } from "react";
import { MonthlyCategoryPresenter } from "@components/organisms/summary/monthly_category/MonthlyCategoryPresenter";
import { TotalAmountByMonthly } from "@function/monthly/totalAmountByMonthly";
import { ColumnProps, TableProps } from "@components/atoms/Table";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { IocomeType } from "@domain/model/household/IocomeType";

type MonthlyCategoryContainerProps = {
  data: TotalAmountByMonthly<string>[];
};

export const MonthlyCategoryContainer: FC<MonthlyCategoryContainerProps> = ({
  data,
}) => {
  const tablePropsList: TableProps[] = data.map((d) => {
    return {
      keyPrefix: d.key,
      columns: [
        {
          value: d.key as any,
          align: "left",
        },
      ].concat(
        d.monthlyTotal.map((mt) => ({
          value: <FormatPrice iocomeType={IocomeType.Income} price={mt} />,
          align: "right",
        }))
      ) as ColumnProps[],
    };
  });

  return <MonthlyCategoryPresenter tablePropsList={tablePropsList} />;
};
