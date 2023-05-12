import { FC, ReactElement, RefObject } from "react";
import { ActionIcon, ScrollArea, Table } from "@mantine/core";
import { IconArrowBarToDown } from "@tabler/icons-react";

type TablePresenterProps = {
  headerTr: ReactElement;
  tbody: ReactElement;
  tfoot?: ReactElement;
  height: string;
  scrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
  classes: Record<"header" | "footer" | "scrolled", string>;
  cx: (a: string, b?: Record<string, boolean>) => string;
  fontSize: number;
  horizontalSpacing: number;
  verticalSpacing: number;
  viewport: RefObject<HTMLDivElement>;
  scrollToBottom?: () => void;
};
export const TablePresenter: FC<TablePresenterProps> = ({
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
}) => (
  <>
    <ScrollArea
      sx={{ height: height }}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      viewportRef={viewport}
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
        {tfoot && (
          <tfoot
            className={cx(classes.footer, { [classes.scrolled]: scrolled })}
          >
            {tfoot}
          </tfoot>
        )}
      </Table>
      <JumpToBottom scrollToBottom={scrollToBottom} />
    </ScrollArea>
  </>
);

const JumpToBottom: FC<{ scrollToBottom: (() => void) | undefined }> = ({
  scrollToBottom,
}) =>
  scrollToBottom ? (
    <div
      className={"z-10 absolute bottom-20 right-10 border-0"}
      onClick={scrollToBottom}
    >
      <ActionIcon variant="default" size={"3em"}>
        <IconArrowBarToDown size="3em" className={"text-slate-400"} />
      </ActionIcon>
    </div>
  ) : (
    <></>
  );
