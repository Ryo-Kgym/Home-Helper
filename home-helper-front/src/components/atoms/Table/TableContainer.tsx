import { FC } from "react";
import { TablePresenter } from "@components/atoms/Table/TablePresenter";
import { ColumnProps, TableProps } from "@components/atoms/Table/index";

type Props = {
  header: string[];
  tablePropsList: TableProps[];
  height?: string;
};
export const TableContainer: FC<Props> = ({
  header,
  tablePropsList,
  height = "80vh",
}) => {
  const thead = (
    <tr>
      {header.map((title, i) => {
        return <th key={"th" + i}>{title}</th>;
      })}
    </tr>
  );

  const generateRow = (tbodyProps: TableProps, i: number) => {
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

  const tbody = <tbody>{tablePropsList.map(generateRow)}</tbody>;

  return (
    <TablePresenter
      headerTr={thead}
      tbody={tbody}
      height={height}
    ></TablePresenter>
  );
};
