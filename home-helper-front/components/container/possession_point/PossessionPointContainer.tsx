import { FC } from "react";
import { PossessionPointPresenter } from "@components/presenter/possession_point/PossessionPointPresenter";

type PossessionPointContainerProps = {
  id: number;
  name: string;
  point: number;
};
export const PossessionPointContainer: FC<PossessionPointContainerProps> = (
  props
) => {
  return (
    <PossessionPointPresenter
      id={props.id}
      name={props.name}
      point={props.point}
    />
  );
};
