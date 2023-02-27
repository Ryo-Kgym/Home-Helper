import { FC, ReactNode } from "react";
import { ActionIcon } from "@mantine/core";

type IconPresenterProps = {
  onClickHandler: () => void;
  iconSize?: number;
  children: ReactNode;
};
export const IconPresenter: FC<IconPresenterProps> = ({
  onClickHandler,
  children,
}) => (
  <ActionIcon onClick={onClickHandler} variant="subtle" size="lg">
    {children}
  </ActionIcon>
);
