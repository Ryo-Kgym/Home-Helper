import { useState } from "react";
import { registerHelpItem } from "@hooks/help_item/registerHelpItem";
import { showNotification } from "@hooks/notification/showNotification";
import { ExchangeItemRegisterPresenter } from "@components/presenter/exchange_item/register/ExchangeItemRegisterPresenter";

export const ExchangeItemRegisterContainer = () => {
  const [itemName, setItemName] = useState<string>("");
  const [point, setPoint] = useState<number>(0);
  const [memo, setMemo] = useState<string>("");

  const register = () => {
    if (itemName.length < 1) {
      return;
    }
    registerHelpItem(itemName, point, memo).then((r) => {
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
      memo={memo}
      setMemo={setMemo}
      registerOnClick={register}
    />
  );
};
