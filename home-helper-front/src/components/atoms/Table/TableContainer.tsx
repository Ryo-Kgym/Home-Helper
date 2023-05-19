import { FC, useRef, useState } from "react";
import { TablePresenter } from "@components/atoms/Table/TablePresenter";
import { ColumnProps, TableProps } from "@components/atoms/Table/index";
import { createStyles } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
  header: string[];
  tablePropsList: TableProps[];
  footer?: ColumnProps[][];
  height?: string;
  fontSize?: number;
  size?: MantineSize;
  toBottom?: boolean;
};
export const TableContainer: FC<Props> = ({
  header,
  tablePropsList,
  footer,
  height = "80vh",
  size = "xl",
  toBottom = false,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [toButtonOpen, setToButtonOpen] = useState(false);
  const { classes, cx } = useStyles();

  const thead = (
    <tr>
      {header.map((title, i) => {
        return <th key={"th" + i}>{title}</th>;
      })}
    </tr>
  );

  const generateRow = (
    { keyPrefix, onClick, columns }: TableProps,
    i: number
  ) => (
    <tr
      key={keyPrefix + i}
      onClick={onClick ?? (() => {})}
      className={onClick ? "cursor-pointer" : ""}
    >
      {columns.map(generateColumn)}
    </tr>
  );

  const generateColumn = (columnProps: ColumnProps, j: number) => (
    <td
      key={"td" + j}
      align={columnProps.align ?? "left"}
      hidden={columnProps.hidden ?? false}
    >
      {columnProps.value}
    </td>
  );

  const generateFooterRow = (row: ColumnProps[], i: number) => (
    <tr key={"tfoot" + i}>
      {row.map((columnProps: ColumnProps, j: number) => (
        <td
          key={"td" + j}
          align={columnProps.align ?? "left"}
          hidden={columnProps.hidden ?? false}
          className={"p-2 border-2 font-bold bg-white"}
        >
          {columnProps.value}
        </td>
      ))}
    </tr>
  );

  const tbody = <>{tablePropsList.map(generateRow)}</>;

  const tfoot = footer ? <>{footer.map(generateFooterRow)}</> : undefined;

  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = toBottom
    ? () =>
        viewport?.current?.scrollTo({
          top: viewport.current.scrollHeight,
          behavior: "smooth",
        })
    : undefined;

  const onMouseMoveHandler = () => {
    setToButtonOpen(true);
    setTimeout(() => {
      setToButtonOpen(false);
    }, 2000);
  };

  return (
    <TablePresenter
      headerTr={thead}
      tbody={tbody}
      tfoot={tfoot}
      height={height}
      scrolled={scrolled}
      setScrolled={setScrolled}
      classes={classes}
      cx={cx}
      fontSize={paddingMap.get(size)!.fontSize}
      horizontalSpacing={paddingMap.get(size)!.horizontalSpacing}
      verticalSpacing={paddingMap.get(size)!.verticalSpacing}
      viewport={viewport}
      scrollToBottom={scrollToBottom}
      toButtonOpen={toButtonOpen}
      onMouseMoveHandler={onMouseMoveHandler}
      onMouseOutHandler={() => {
        setToButtonOpen(false);
      }}
    />
  );
};

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",
    zIndex: 5,

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },
  footer: {
    position: "sticky",
    bottom: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",
    zIndex: 5,

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

const paddingMap = new Map<
  MantineSize,
  { fontSize: number; horizontalSpacing: number; verticalSpacing: number }
>([
  ["xs", { fontSize: 14, horizontalSpacing: 10, verticalSpacing: 10 }],
  ["sm", { fontSize: 18, horizontalSpacing: 15, verticalSpacing: 15 }],
  ["md", { fontSize: 20, horizontalSpacing: 20, verticalSpacing: 20 }],
  ["lg", { fontSize: 23, horizontalSpacing: 25, verticalSpacing: 25 }],
  ["xl", { fontSize: 28, horizontalSpacing: 30, verticalSpacing: 30 }],
]);
