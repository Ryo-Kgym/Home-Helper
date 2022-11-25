import { FC } from "react";
import { ChargePointContainer } from "../../container/charge_point/ChargePointContainer";

type ChargePointPageProps = {
  data: {
    fromDate: string;
    helpItems: any[];
  };
};

export const Page: FC<ChargePointPageProps> = (props) => {
  return (
    <ChargePointContainer
      fromDate={props.data.fromDate}
      helpItems={props.data.helpItems}
    />
  );
};
