import { FC } from "react";
import { IconPlayerTrackNext } from "@tabler/icons";
import { Icon } from "@components/atoms/Icon";

type NextIconPresenterProps = {
  onClickHandler: () => void;
  iconSize?: number;
};
export const NextIconPresenter: FC<NextIconPresenterProps> = ({
  onClickHandler,
  iconSize = 36,
}) => (
  <Icon onClickHandler={onClickHandler}>
    <IconPlayerTrackNext size={iconSize} />
  </Icon>
);
