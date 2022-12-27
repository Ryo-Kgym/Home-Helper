import { useEffect, useState } from "react";
import { ExchangePointPresenter } from "@components/presenter/consume_point/ExchangePointPresenter";
import { ExchangeItem } from "@domain/model/home_helper/ExchangeItem";
import { fetchUser } from "@hooks/user/fetchUser";
import { fetchExchangeItems } from "@hooks/exchange_item/fetchExchangeItems";
import {
  exchangeHelpPoint,
  ExchangePointForm,
} from "@hooks/help_point/exchangeHelpPoint";

export const ExchangePointContainer = () => {
  const [exchangeItems, setExchangeItems] = useState<ExchangeItem[]>([]);
  const [currentPoint, setCurrentPoint] = useState(0);
  const [totalUsePoint, setTotalUsePoint] = useState(0);
  const [exchangePointForms, setExchangePointForms] = useState<
    ExchangePointForm[]
  >([]);

  useEffect(() => {
    fetchExchangeItems().then(setExchangeItems);
    fetchUser().then((user) => setCurrentPoint(user.currentPoint));
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

    exchangeHelpPoint(exchangePointForms).then((r) => {});
  };

  const calcTotalPoint = (id: string, point: number, count: number): number => {
    let forms = exchangePointForms.filter((f) => f.id != id);
    forms.push({ id, point, count });
    setExchangePointForms(forms);

    if (forms.length > 0) {
      return forms.map((f) => f.point * f.count).reduce((x1, x2) => x1 + x2);
    }
    return 0;
  };

  return (
    <ExchangePointPresenter
      exchangeItems={exchangeItems}
      currentPoint={currentPoint}
      totalUsePoint={totalUsePoint}
      handleCalcTotalUsePoint={handleCalcTotalUsePoint}
      handleRequest={handleRequest}
    />
  );
};
