import { FC } from "react";
import { TablePresenter } from "@components/ui/Table/TablePresenter";
import { ColumnProps, TbodyProps } from "@components/ui/Table/index";

type Props = {
  header: string[];
  tbodyPropsArray: TbodyProps[];
};
export const TableContainer: FC<Props> = ({ header, tbodyPropsArray }) => {
  const thead = (
    <thead>
      <tr>
        {header.map((title, i) => {
          return <th key={"th" + i}>{title}</th>;
        })}
      </tr>
    </thead>
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

  return <TablePresenter thead={thead} tbody={tbody}></TablePresenter>;
};
