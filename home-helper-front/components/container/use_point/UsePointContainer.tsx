import { FC, useState } from "react";
import { UsePointPresenter } from "../../presenter/use_point/UsePointPresenter";

type UsePointContainerProps = {
  exchangeItems: any[];
  currentPoint: number;
};

export const UsePointContainer: FC<UsePointContainerProps> = (props) => {
  const [totalUsePoint, setTotalUsePoint] = useState(0);

  const handleCalcTotalUsePoint = (usePoint: number) => {
    setTotalUsePoint(totalUsePoint + usePoint);
  };

  const handleRequest = () => {
    if (props.currentPoint - totalUsePoint < 0) {
      alert("ポイントが不足しているよ！！");
    }
  };

  return (
    <UsePointPresenter
      exchangeItems={props.exchangeItems}
      currentPoint={props.currentPoint}
      totalUsePoint={totalUsePoint}
      handleCalcTotalUsePoint={handleCalcTotalUsePoint}
      handleRequest={handleRequest}
    />
  );
};
