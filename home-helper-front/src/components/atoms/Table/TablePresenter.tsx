import { FC, ReactElement, useState } from "react";
import { createStyles, ScrollArea, Table } from "@mantine/core";

type TablePresenterProps = {
  headerTr: ReactElement;
  tbody: ReactElement;
  height: string;
};
export const TablePresenter: FC<TablePresenterProps> = ({
  headerTr,
  tbody,
  height,
}) => {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  return (
    <ScrollArea
      sx={{ height: height }}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table
        striped
        highlightOnHover
        horizontalSpacing={50}
        verticalSpacing="xl"
        fontSize={28}
        withColumnBorders
        className={"bg-slate-100 table-fixed"}
      >
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          {headerTr}
        </thead>
        {tbody}
      </Table>
    </ScrollArea>
  );
};

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

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
