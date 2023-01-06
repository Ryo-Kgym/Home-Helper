import { FC, ReactElement } from "react";
import { GridPresenter } from "@components/ui/Grid/GridPresenter";

type Props = {
  children: ReactElement;
};
export const GridContainer: FC<Props> = ({ children }) => {
  return <GridPresenter>{children}</GridPresenter>;
};
