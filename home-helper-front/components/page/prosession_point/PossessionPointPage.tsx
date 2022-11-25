import { PossessionPointContainer } from "../../container/possession_point/PossessionPointContainer";
import { FC } from "react";

type PossessionPointPageProps = {
  data: {
    id: number;
    name: string;
    point: number;
  };
};

export const Page: FC<PossessionPointPageProps> = (props) => {
  return (
    <PossessionPointContainer
      id={props.data.id}
      name={props.data.name}
      point={props.data.point}
    />
  );
};
