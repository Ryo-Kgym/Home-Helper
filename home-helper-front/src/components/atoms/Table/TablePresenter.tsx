/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ReactElement, RefObject } from "react";
import { ActionIcon, ScrollArea, Table } from "@mantine/core";
import { IconArrowBarToDown } from "@tabler/icons-react";

type TablePresenterProps = {
  headerTr: ReactElement | undefined;
  tbody: ReactElement;
  tfoot?: ReactElement;
  height: string;
  scrolled: boolean;
  setScrolled: (_: boolean) => void;
  classes: Record<"header" | "footer" | "scrolled", string>;
  cx: (_1: string, _2?: Record<string, boolean>) => string;
  fontSize: number;
  horizontalSpacing: number;
  verticalSpacing: number;
  viewport: RefObject<HTMLDivElement>;
  scrollToBottom?: () => void;
  toButtonOpen: boolean;
  onMouseMoveHandler: () => void;
  onMouseOutHandler: () => void;
};
export const TablePresenter = ({
  headerTr,
  tbody,
  tfoot,
  height,
  scrolled,
  setScrolled,
  classes,
  cx,
  fontSize,
  horizontalSpacing,
  verticalSpacing,
  scrollToBottom,
  viewport,
  toButtonOpen,
  onMouseMoveHandler,
  onMouseOutHandler,
}: TablePresenterProps) => (
  <>
    <ScrollArea
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      viewportRef={viewport}
      onMouseOver={onMouseMoveHandler}
      onMouseOut={onMouseOutHandler}
      h={height}
    >
      <Table
        striped
        highlightOnHover
        horizontalSpacing={horizontalSpacing}
        verticalSpacing={verticalSpacing}
        withColumnBorders
        className={`bg-slate-100 sm:table-fixed text-[${fontSize}px]`}
      >
        {headerTr && (
          <Table.Thead
            className={cx(classes.header, {
              [classes.scrolled]: scrolled,
            })}
          >
            {headerTr}
          </Table.Thead>
        )}
        <Table.Tbody>{tbody}</Table.Tbody>
        {tfoot && (
          <Table.Tfoot
            className={cx(classes.footer, { [classes.scrolled]: scrolled })}
          >
            {tfoot}
          </Table.Tfoot>
        )}
      </Table>
      {toButtonOpen && <JumpToBottom scrollToBottom={scrollToBottom} />}
    </ScrollArea>
  </>
);

const JumpToBottom = ({
  scrollToBottom,
}: {
  scrollToBottom: (() => void) | undefined;
}) =>
  scrollToBottom ? (
    <div
      className={
        "z-10 absolute bottom-10 right-10 border-0 max-sm:button-1 max-sm:right-3"
      }
      onClick={scrollToBottom}
    >
      <ActionIcon variant="default" size={"3em"}>
        <IconArrowBarToDown size="3em" className={"text-slate-400"} />
      </ActionIcon>
    </div>
  ) : (
    <></>
  );
