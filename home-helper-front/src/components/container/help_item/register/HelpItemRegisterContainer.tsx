import { HelpItemRegisterPresenter } from "@components/presenter/help_item/register/HelpItemRegisterPresenter";
import { useState } from "react";
import { registerHelpItem } from "@hooks/help_item/registerHelpItem";

export const HelpItemRegisterContainer = () => {
  const [itemName, setItemName] = useState<string>("");
  const [point, setPoint] = useState<number>(0);
  const [memo, setMemo] = useState<string>("");

  const register = () => {
    let message = registerHelpItem(itemName, point, memo);
    // TODO ダイアログに置き換える
    alert(message);
  };

  return (
    <HelpItemRegisterPresenter
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
