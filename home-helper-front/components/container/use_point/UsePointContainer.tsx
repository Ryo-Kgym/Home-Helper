import { useEffect, useState } from "react";
import { UsePointPresenter } from "@components/presenter/use_point/UsePointPresenter";
import { ExchangeItem } from "@domain/model/home_helper/ExchangeItem";
import { loadUserId } from "@hooks/loadUserId";
import { fetchUser } from "@hooks/user/fetchUser";
import { fetchExchangeItems } from "@hooks/exchange_item/fetchExchangeItems";

export const UsePointContainer = () => {
  const [exchangeItems, setExchangeItems] = useState<ExchangeItem[]>([]);
  const [currentPoint, setCurrentPoint] = useState(0);
  const [totalUsePoint, setTotalUsePoint] = useState(0);

  useEffect(() => {
    const userId = loadUserId();
    fetchExchangeItems().then(setExchangeItems);
    fetchUser(userId).then((user) => setCurrentPoint(user.currentPoint));
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
