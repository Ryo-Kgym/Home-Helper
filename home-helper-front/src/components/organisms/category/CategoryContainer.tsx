import { TableProps } from "@components/atoms/Table";
import { CategoryPresenter } from "@components/organisms/category/CategoryPresenter";
import { getLabel, IocomeType } from "@domain/model/household/IocomeType";
import { useGetCategoryTotalByMonth } from "@hooks/household/category/useGetCategoryTotalByMonth";
import { FC, useState } from "react";

export const CategoryContainer: FC = () => {
  const [date] = useState(new Date());

  const [{ data }] = useGetCategoryTotalByMonth(date);

  const tableProps: TableProps[] =
    data?.categoryTotalByMonthList?.map((category) => {
      return {
        keyPrefix: "category",
        columns: [
          {
            value: getLabel(category?.iocomeType as IocomeType),
            align: "center",
          },
          { value: category?.genreName, align: "left" },
          { value: category?.categoryName, align: "left" },
          { value: Number(category?.total).toLocaleString(), align: "right" },
        ],
      };
    }) ?? [];

  return <CategoryPresenter tableProps={tableProps} />;
};
