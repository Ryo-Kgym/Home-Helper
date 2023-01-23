import { HelpItemRegisterPresenter } from "@components/presenter/help_item/register/HelpItemRegisterPresenter";
import { useState } from "react";

export const HelpItemRegisterContainer = () => {
  const [itemName, setItemName] = useState<string>("");
  const [point, setPoint] = useState<number>(0);
  const [memo, setMemo] = useState<string>("");

  return (
    <HelpItemRegisterPresenter
      itemName={itemName}
      setItemName={setItemName}
      point={point}
      setPoint={setPoint}
      memo={memo}
      setMemo={setMemo}
    />
  );
};
