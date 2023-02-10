/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useEffect, useState } from "react";
import { ExchangePointPresenter } from "./ExchangePointPresenter";
import { ExchangeItem } from "@domain/model/home_helper/ExchangeItem";
import { fetchUser } from "@hooks/user/fetchUser";
import { fetchExchangeItems } from "@hooks/exchange_item/fetchExchangeItems";
import {
  exchangeHelpPoint,
  ExchangePointForm,
} from "@hooks/help_point/exchangeHelpPoint";
import { TbodyProps } from "@components/atoms/Table";
import { Counter } from "@components/atoms/Counter";

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

  const handleRegisterAfterProcess = () => {
    setCurrentPoint(currentPoint - totalUsePoint);
    setTotalUsePoint(0);
    setExchangePointForms([]);
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

  const tbodyProps: TbodyProps[] = exchangeItems.map((exchangeItem) => {
    return {
      keyPrefix: "exchangeItem",
      columns: [
        { value: exchangeItem.name },
        { value: exchangeItem.point.toLocaleString() },
        {
          value: (
            <Counter
              defaultValue={0}
              handleSetCount={(count: number) => {
                handleCalcTotalUsePoint(
                  exchangeItem.id,
                  exchangeItem.point,
                  count
                );
              }}
            />
          ),
        },
      ],
    };
  });

  return (
    <ExchangePointPresenter
      currentPoint={currentPoint}
      totalUsePoint={totalUsePoint}
      handleRequest={handleRequest}
      handleRegisterAfterProcess={handleRegisterAfterProcess}
      tbodyProps={tbodyProps}
    />
  );
};
