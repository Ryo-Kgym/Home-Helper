import { FC, useState } from "react";
import { TablePresenter } from "@components/atoms/Table/TablePresenter";
import { ColumnProps, TbodyProps } from "@components/atoms/Table/index";
import { createStyles, ScrollArea } from "@mantine/core";

type Props = {
  header: string[];
  tbodyPropsArray: TbodyProps[];
  height?: string;
};
export const TableContainer: FC<Props> = ({
  header,
  tbodyPropsArray,
  height = "80vh",
}) => {
  const thead = (
    <tr>
      {header.map((title, i) => {
        return <th key={"th" + i}>{title}</th>;
      })}
    </tr>
  );

  const generateRow = (tbodyProps: TbodyProps, i: number) => {
    return (
      <tr key={tbodyProps.keyPrefix + i}>
        {tbodyProps.columns.map(generateColumn)}
      </tr>
    );
  };

  const generateColumn = (columnProps: ColumnProps, j: number) => {
    return (
      <td
        key={"td" + j}
        align={columnProps.align ?? "left"}
        hidden={columnProps.hidden ?? false}
      >
        {columnProps.value}
      </td>
    );
  };

  const tbody = <tbody>{tbodyPropsArray.map(generateRow)}</tbody>;

  return (
    <TablePresenter
      headerTr={thead}
      tbody={tbody}
      height={height}
    ></TablePresenter>
  );
};
