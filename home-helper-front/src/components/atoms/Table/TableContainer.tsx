/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ColumnProps, TableProps } from "@components/atoms/Table/index";
import { MantineSize } from "@mantine/styles";
import { Table } from "@mantine/core";

type Props = {
  header: string[];
  tablePropsList: TableProps[];
  footer?: ColumnProps[][];
  height?: string;
  fontSize?: number;
  size?: MantineSize;
  toBottom?: boolean;
};
export const TableContainer = ({ header, tablePropsList, footer }: Props) => {
  const thead = (
    <Table.Tr>
      {header.map((title, i) => (
        <Table.Th key={"th" + i}>{title}</Table.Th>
      ))}
    </Table.Tr>
  );

  const generateRow = (
    { keyPrefix, onClick, columns }: TableProps,
    i: number,
  ) => (
    <Table.Tr
      key={keyPrefix + i}
      onClick={onClick ?? (() => {})}
      className={onClick ? "cursor-pointer" : ""}
    >
      {columns.map(generateColumn)}
    </Table.Tr>
  );

  const generateColumn = (columnProps: ColumnProps, j: number) => (
    <Table.Td
      key={"td" + j}
      align={columnProps.align ?? "left"}
      hidden={columnProps.hidden ?? false}
    >
      {columnProps.value}
    </Table.Td>
  );

  const generateFooterRow = (row: ColumnProps[], i: number) => (
    <Table.Tr key={"tfoot" + i}>
      {row.map((columnProps: ColumnProps, j: number) => (
        <Table.Td
          key={"td" + j}
          align={columnProps.align ?? "left"}
          hidden={columnProps.hidden ?? false}
          className={"p-2 border-2 font-bold bg-white"}
        >
          {columnProps.value}
        </Table.Td>
      ))}
    </Table.Tr>
  );

  const tbody = <>{tablePropsList.map(generateRow)}</>;
  const tfoot = footer ? <>{footer.map(generateFooterRow)}</> : undefined;

  return (
    <Table.ScrollContainer minWidth={"100%"} type={"native"}>
      <Table striped highlightOnHover withColumnBorders withTableBorder>
        {thead && <Table.Thead>{thead}</Table.Thead>}
        <Table.Tbody>{tbody}</Table.Tbody>
        {tfoot && <Table.Tfoot>{tfoot}</Table.Tfoot>}
      </Table>
    </Table.ScrollContainer>
  );
};
