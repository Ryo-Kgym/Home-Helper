import { FC } from "react";
import { Table, TbodyProps } from "@components/ui/Table";

type Props = {
  tbodyProps: TbodyProps[];
};

const header = ["日付", "つかったポイント", "項目"];

export const UsedPointHistoryPresenter: FC<Props> = ({ tbodyProps }) => {
  return <Table header={header} tbodyPropsArray={tbodyProps} />;
};
