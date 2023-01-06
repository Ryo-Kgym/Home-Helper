import { FC, ReactElement } from "react";
import { Table } from "@mantine/core";

type Props = {
  thead: ReactElement;
  tbody: ReactElement;
};
export const TablePresenter: FC<Props> = ({ thead, tbody }) => {
  return (
    <Table
      striped
      highlightOnHover
      horizontalSpacing={50}
      verticalSpacing="xl"
      fontSize={28}
      withColumnBorders
      className={"bg-slate-100"}
    >
      {thead}
      {tbody}
    </Table>
  );
};
