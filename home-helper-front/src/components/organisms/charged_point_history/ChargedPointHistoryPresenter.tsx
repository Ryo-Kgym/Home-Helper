import { FC } from "react";
import { Table, TbodyProps } from "@components/atoms/Table";

type Props = {
  tbodyProps: TbodyProps[];
};

const header = ["日付", "項目", "ためたポイント"];

export const ChargedPointHistoryPresenter: FC<Props> = ({ tbodyProps }) => {
  return <Table header={header} tbodyPropsArray={tbodyProps} />;
};
