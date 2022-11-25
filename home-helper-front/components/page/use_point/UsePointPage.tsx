import { FC } from "react";
import { UsePointContainer } from "../../container/use_point/UsePointContainer";

type UsePointPageProps = {
  data: {
    exchangeItems: any[];
    currentPoint: number;
  };
};

export const Page: FC<UsePointPageProps> = (props) => {
  return (
    <UsePointContainer
      exchangeItems={props.data.exchangeItems}
      currentPoint={props.data.currentPoint}
    />
  );
};
