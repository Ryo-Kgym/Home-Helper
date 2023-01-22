import { FC } from "react";
import { Table, TbodyProps } from "@components/ui/Table";

type Props = {
  tbodyProps: TbodyProps[];
};

const header = ["日付", "項目", "つかったポイント"];

export const UsedPointHistoryPresenter: FC<Props> = ({ tbodyProps }) => {
  return <Table header={header} tbodyPropsArray={tbodyProps} />;
};
