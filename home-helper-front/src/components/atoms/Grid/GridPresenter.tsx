import { FC, ReactElement } from "react";
import { Grid as MtGrid } from "@mantine/core";

type Props = {
  children: ReactElement;
};
export const GridPresenter: FC<Props> = ({ children }) => {
  return <MtGrid>{children}</MtGrid>;
};
