import { FC } from "react";
import { MonthlyCategoryPresenter } from "@components/organisms/summary/monthly_category/MonthlyCategoryPresenter";
import { TotalAmountByMonthly } from "@function/monthly/totalAmountByMonthly";
import { ColumnProps, TableProps } from "@components/atoms/Table";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { MonthlyCategoryKey } from "@hooks/household/summary_category/useFetchSummaryCategoryAmountByUser";
import { IocomeType } from "@domain/model/household/IocomeType";

type MonthlyCategoryContainerProps = {
  data: TotalAmountByMonthly<MonthlyCategoryKey>[];
  incomeTotal: TotalAmountByMonthly<MonthlyCategoryKey>;
  outcomeTotal: TotalAmountByMonthly<MonthlyCategoryKey>;
  monthNames: string[];
};

export const MonthlyCategoryContainer: FC<MonthlyCategoryContainerProps> = ({
  data,
  incomeTotal,
  outcomeTotal,
  monthNames,
}) => {
  const tablePropsList: TableProps[] = data.map((d) => ({
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
  }));

  const incomeFooter = createFooter(incomeTotal, IocomeType.Income);
  const outcomeFooter = createFooter(outcomeTotal, IocomeType.Outcome);

  return (
    <MonthlyCategoryPresenter
      tablePropsList={tablePropsList}
      footer={[incomeFooter, outcomeFooter]}
      monthNames={monthNames}
    />
  );
};

const createFooter = (
  outcomeTotal: TotalAmountByMonthly<MonthlyCategoryKey>,
  iocomeType: IocomeType
): ColumnProps[] => {
  const ioMap = new Map([
    [IocomeType.Income, "収入"],
    [IocomeType.Outcome, "支出"],
  ]);
  const { monthlyTotal, total } = outcomeTotal;

  const dataColumns: ColumnProps[] = monthlyTotal.map((mt) => {
    return {
      value: <FormatPrice iocomeType={iocomeType} price={mt} />,
      align: "right",
    };
  });

  return [
    { value: ioMap.get(iocomeType) + "合計", align: "center" },
    ...dataColumns,
    {
      value: <FormatPrice iocomeType={iocomeType} price={total} />,
      align: "right",
    },
  ];
};
