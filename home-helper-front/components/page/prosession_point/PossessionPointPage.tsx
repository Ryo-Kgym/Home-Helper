import { FC } from "react";
import { PossessionPointContainer } from "@components/container/possession_point/PossessionPointContainer";

type PossessionPointPageProps = {
  data: any;
};

export const Page: FC<PossessionPointPageProps> = (props) => {
  return <PossessionPointContainer />;
};
