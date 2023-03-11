import { FC, ReactElement, useState } from "react";
import { createStyles, ScrollArea, Table } from "@mantine/core";

type TablePresenterProps = {
  headerTr: ReactElement;
  tbody: ReactElement;
  height: string;
  scrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
  classes: Record<"header" | "scrolled", string>;
  cx: (a: string, b?: Record<string, boolean>) => string;
  fontSize: number;
  horizontalSpacing: number;
  verticalSpacing: number;
};
export const TablePresenter: FC<TablePresenterProps> = ({
  headerTr,
  tbody,
  height,
  scrolled,
  setScrolled,
  classes,
  cx,
  fontSize,
  horizontalSpacing,
  verticalSpacing,
}) => {
  return (
    <ScrollArea
      sx={{ height: height }}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table
        striped
        highlightOnHover
        horizontalSpacing={horizontalSpacing}
        verticalSpacing={verticalSpacing}
        fontSize={fontSize}
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
