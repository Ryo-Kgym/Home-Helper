import { FC } from "react";
import { PossessionPointContainer } from "@components/container/possession_point/PossessionPointContainer";

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
