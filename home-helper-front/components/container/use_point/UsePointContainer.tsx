import { useEffect, useState } from "react";
import { UsePointPresenter } from "@components/presenter/use_point/UsePointPresenter";
import { ExchangeItem } from "@domain/model/home_helper/ExchangeItem";
import { loadUserId } from "@hooks/loadUserId";
import { fetchUser } from "@hooks/user/fetchUser";
import { fetchExchangeItems } from "@hooks/exchange_item/fetchExchangeItems";

type PointForm = {
  id: string;
  point: number;
  count: number;
};

export const UsePointContainer = () => {
  const [exchangeItems, setExchangeItems] = useState<ExchangeItem[]>([]);
  const [currentPoint, setCurrentPoint] = useState(0);
  const [totalUsePoint, setTotalUsePoint] = useState(0);
  const [pointForms, setPointForms] = useState<PointForm[]>([]);

  useEffect(() => {
    const userId = loadUserId();
    fetchExchangeItems().then(setExchangeItems);
    fetchUser(userId).then((user) => setCurrentPoint(user.currentPoint));
  }, []);

  const handleCalcTotalUsePoint = (
    id: string,
    point: number,
    count: number
  ) => {
    setTotalUsePoint(calcTotalPoint(id, point, count));
  };

  const handleRequest = () => {
    if (currentPoint - totalUsePoint < 0) {
      alert("ポイントが不足しているよ！！");
    }
  };

  const calcTotalPoint = (id: string, point: number, count: number): number => {
    let forms = pointForms.filter((f) => f.id != id);
    forms.push({ id, point, count });
    setPointForms(forms);

    if (forms.length > 0) {
      return forms.map((f) => f.point * f.count).reduce((x1, x2) => x1 + x2);
    }
    return 0;
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
