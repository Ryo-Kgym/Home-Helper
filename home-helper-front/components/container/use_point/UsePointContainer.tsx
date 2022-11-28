import { FC, useEffect, useState } from "react";
import { UsePointPresenter } from "@components/presenter/use_point/UsePointPresenter";
import { useUsePoint } from "@hooks/useUsePoint";
import { ExchangeItem } from "@domain/model/home_helper/ExchangeItem";

export const UsePointContainer = () => {
  const [exchangeItems, setExchangeItems] = useState<ExchangeItem[]>([]);
  const [currentPoint, setCurrentPoint] = useState(0);
  const [totalUsePoint, setTotalUsePoint] = useState(0);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId") ?? "0";
    useUsePoint(userId).then((r) => {
      setExchangeItems(r.exchangeItems);
      setCurrentPoint(r.user.currentPoint);
    });
  }, []);

  const handleCalcTotalUsePoint = (usePoint: number) => {
    setTotalUsePoint(totalUsePoint + usePoint);
  };

  const handleRequest = () => {
    if (currentPoint - totalUsePoint < 0) {
      alert("ポイントが不足しているよ！！");
    }
  };

  return (
    <UsePointPresenter
      exchangeItems={exchangeItems}
      currentPoint={currentPoint}
      totalUsePoint={totalUsePoint}
      handleCalcTotalUsePoint={handleCalcTotalUsePoint}
      handleRequest={handleRequest}
    />
  );
};
