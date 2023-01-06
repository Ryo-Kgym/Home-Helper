export { TableContainer as Table } from "./TableContainer";

export type TbodyProps = {
  keyPrefix: string;
  columns: ColumnProps[];
};

export type ColumnProps = {
  value: any;
  align?: "left" | "right" | "center";
  hidden?: boolean;
};
