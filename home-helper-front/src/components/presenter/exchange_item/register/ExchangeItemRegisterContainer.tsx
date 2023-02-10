/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useState } from "react";
import { showNotification } from "@hooks/notification/showNotification";
import { ExchangeItemRegisterPresenter } from "./ExchangeItemRegisterPresenter";
import { registerExchangeItem } from "@hooks/exchange_item/registerExchangeItem";

export const ExchangeItemRegisterContainer = () => {
  const [itemName, setItemName] = useState<string>("");
  const [point, setPoint] = useState<number>(0);

  const register = () => {
    if (itemName.length < 1) {
      return;
    }
    registerExchangeItem(itemName, point).then((r) => {
      showNotification({
        title: "登録完了",
        message: r[0],
      });
    });
  };

  return (
    <ExchangeItemRegisterPresenter
      itemName={itemName}
      setItemName={setItemName}
      point={point}
      setPoint={setPoint}
      registerOnClick={register}
    />
  );
};
