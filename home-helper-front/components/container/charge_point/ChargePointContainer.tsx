import { FC, useState } from "react";
import { ChargePointPresenter } from "@components/presenter/charge_point/ChargePointPresenter";

type ChargePointContainerProps = {
  fromDate: string;
  helpItems: any[];
};

export const ChargePointContainer: FC<ChargePointContainerProps> = (props) => {
  const [totalPoint, setTotalPoint] = useState(0);

  const handleCalcTotal = (point: number) => {
    setTotalPoint(totalPoint + point);
  };

  const handleRegisterHelps = () => {
    console.log(totalPoint + "を登録します。");
  };

  const handleReset = () => {
    console.log("リセットするよ");
  };

  return (
    <ChargePointPresenter
      fromDate={props.fromDate}
      helpItems={props.helpItems}
      totalPoint={totalPoint}
      handleCalcTotal={handleCalcTotal}
      handleRegisterHelps={handleRegisterHelps}
      handleReset={handleReset}
    />
  );
};
