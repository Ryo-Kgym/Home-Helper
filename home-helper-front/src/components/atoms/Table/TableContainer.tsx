import { FC, useState } from "react";
import { TablePresenter } from "@components/atoms/Table/TablePresenter";
import { ColumnProps, TableProps } from "@components/atoms/Table/index";
import { createStyles } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
  header: string[];
  tablePropsList: TableProps[];
  height?: string;
  fontSize?: number;
  size?: MantineSize;
};
export const TableContainer: FC<Props> = ({
  header,
  tablePropsList,
  height = "80vh",
  size = "xl",
}) => {
  const [scrolled, setScrolled] = useState(false);
  const { classes, cx } = useStyles();

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
      scrolled={scrolled}
      setScrolled={setScrolled}
      classes={classes}
      cx={cx}
      fontSize={paddingMap.get(size)!.fontSize}
      horizontalSpacing={paddingMap.get(size)!.horizontalSpacing}
      verticalSpacing={paddingMap.get(size)!.verticalSpacing}
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
