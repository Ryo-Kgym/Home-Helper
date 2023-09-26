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
      sx={{ height: height }}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      viewportRef={viewport}
      onMouseOver={onMouseMoveHandler}
      onMouseOut={onMouseOutHandler}
    >
      <Table
        striped
        highlightOnHover
        horizontalSpacing={horizontalSpacing}
        verticalSpacing={verticalSpacing}
        fontSize={fontSize}
        withColumnBorders
        className={"bg-slate-100 sm:table-fixed"}
      >
        {headerTr && (
          <thead
            className={cx(classes.header, {
              [classes.scrolled]: scrolled,
            })}
          >
            {headerTr}
          </thead>
        )}
        <tbody>{tbody}</tbody>
        {tfoot && (
          <tfoot
            className={cx(classes.footer, { [classes.scrolled]: scrolled })}
          >
            {tfoot}
          </tfoot>
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
