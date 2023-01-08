import { FC } from "react";
import { Table, TbodyProps } from "@components/ui/Table";

type Props = {
  tbodyProps: TbodyProps[];
};

const header = ["日付", "ためたポイント", "項目"];

export const ChargedPointHistoryPresenter: FC<Props> = ({ tbodyProps }) => {
  return <Table header={header} tbodyPropsArray={tbodyProps} />;
};
