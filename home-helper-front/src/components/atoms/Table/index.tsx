export { TableContainer as Table } from "./TableContainer";

export type TableProps = {
  keyPrefix: string;
  columns: ColumnProps[];
  onClick?: () => void;
};

export type ColumnProps = {
  value: any;
  align?: "left" | "right" | "center";
  hidden?: boolean;
};
