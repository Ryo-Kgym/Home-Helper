import { ReactElement } from "react";

export { GridTablePresenter as GridTable } from "@components/molecules/GridTable/GridTablePresenter";

export type GridProps = {
  label: string;
  components: ReactElement | ReactElement[] | string;
};
