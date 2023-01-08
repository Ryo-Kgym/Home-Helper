import { FC } from "react";
import { Table, TbodyProps } from "@components/ui/Table";

type Props = {
  tbodyProps: TbodyProps[];
};

const header = ["日付", "ポイント", "項目"];

export const PointHistoryPresenter: FC<Props> = ({ tbodyProps }) => (
  <Table header={header} tbodyPropsArray={tbodyProps} />
);
