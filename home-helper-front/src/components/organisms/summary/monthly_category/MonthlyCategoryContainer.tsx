import { FC } from "react";
import { MonthlyCategoryPresenter } from "@components/organisms/summary/monthly_category/MonthlyCategoryPresenter";
import { TotalAmountByMonthly } from "@function/monthly/totalAmountByMonthly";
import { ColumnProps, TableProps } from "@components/atoms/Table";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { MonthlyCategoryKey } from "@hooks/household/summary_category/useFetchSummaryCategoryAmountByUser";

type MonthlyCategoryContainerProps = {
  data: TotalAmountByMonthly<MonthlyCategoryKey>[];
};

export const MonthlyCategoryContainer: FC<MonthlyCategoryContainerProps> = ({
  data,
}) => {
  const tablePropsList: TableProps[] = data.map((d) => {
    return {
      keyPrefix: d.key.categoryName,
      columns: [
        {
          value: d.key.categoryName as any,
          align: "left",
        },
      ]
        .concat(
          d.monthlyTotal.map((mt) => ({
            value: <FormatPrice iocomeType={d.key.iocomeType} price={mt} />,
            align: "right",
          }))
        )
        .concat([
          {
            value: (
              <div className={"font-bold"}>
                <FormatPrice iocomeType={d.key.iocomeType} price={d.total} />
              </div>
            ),
            align: "right",
          },
        ]) as ColumnProps[],
    };
  });

  return <MonthlyCategoryPresenter tablePropsList={tablePropsList} />;
};
