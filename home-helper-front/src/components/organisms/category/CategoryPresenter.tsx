import { FC } from "react";
import { Table, TbodyProps } from "@components/atoms/Table";

type CategoryPresenterProps = {
  tbodyProps: TbodyProps[];
};
export const CategoryPresenter: FC<CategoryPresenterProps> = ({
  tbodyProps,
}) => {
  return (
    <>
      <Table
        header={["収入", "ジャンル", "カテゴリ", "金額"]}
        tbodyPropsArray={tbodyProps}
      />
    </>
  );
};
