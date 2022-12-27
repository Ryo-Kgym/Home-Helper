import { useEffect, useState } from "react";
import { ConsumePointPresenter } from "@components/presenter/consume_point/ConsumePointPresenter";
import { ExchangeItem } from "@domain/model/home_helper/ExchangeItem";
import { fetchUser } from "@hooks/user/fetchUser";
import { fetchExchangeItems } from "@hooks/exchange_item/fetchExchangeItems";
import {
  consumeHelpPoint,
  ConsumePointForm,
} from "@hooks/help_point/consumeHelpPoint";

export const ConsumePointContainer = () => {
  const [exchangeItems, setExchangeItems] = useState<ExchangeItem[]>([]);
  const [currentPoint, setCurrentPoint] = useState(0);
  const [totalUsePoint, setTotalUsePoint] = useState(0);
  const [consumePointForms, setConsumePointForms] = useState<
    ConsumePointForm[]
  >([]);

  useEffect(() => {
    fetchExchangeItems().then(setExchangeItems);
    fetchUser().then((user) => setCurrentPoint(user.currentPoint));
  });

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

    consumeHelpPoint(consumePointForms).then((r) => {});
  };

  const calcTotalPoint = (id: string, point: number, count: number): number => {
    let forms = consumePointForms.filter((f) => f.id != id);
    forms.push({ id, point, count });
    setConsumePointForms(forms);

    if (forms.length > 0) {
      return forms.map((f) => f.point * f.count).reduce((x1, x2) => x1 + x2);
    }
    return 0;
  };

  return (
    <ConsumePointPresenter
      exchangeItems={exchangeItems}
      currentPoint={currentPoint}
      totalUsePoint={totalUsePoint}
      handleCalcTotalUsePoint={handleCalcTotalUsePoint}
      handleRequest={handleRequest}
    />
  );
};
