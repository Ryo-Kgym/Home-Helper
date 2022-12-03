import { FC, useEffect, useState } from "react";
import { ChargePointPresenter } from "@components/presenter/charge_point/ChargePointPresenter";
import { loadUserId } from "@hooks/loadUserId";
import { HelpItem } from "@domain/model/home_helper/HelpItem";
import { toJapanMd } from "@function/DateConverter";
import { fetchUser } from "@hooks/user/fetchUser";
import { fetchHelpItems } from "@hooks/help_item/fetchHelpItems";

export const ChargePointContainer: FC = () => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [fromDate, setFromDate] = useState("");
  const [helpItems, setHelpItems] = useState<HelpItem[]>([]);

  useEffect(() => {
    fetchUser(loadUserId()).then((user) => {
      setTotalPoint(user.currentPoint);
      setFromDate(toJapanMd(user.lastHelp));
    });
    fetchHelpItems().then(setHelpItems);
  }, []);

  const handleCalcTotal = (point: number) => {
    setTotalPoint(totalPoint + point);
  };

  const handleRegisterHelps = () => {
    console.log(totalPoint + "ポイントの申請をします。");
  };

  const handleReset = () => {
    setTotalPoint(0);
  };

  return (
    <ChargePointPresenter
      fromDate={fromDate}
      helpItems={helpItems}
      totalPoint={totalPoint}
      handleCalcTotal={handleCalcTotal}
      handleRegisterHelps={handleRegisterHelps}
      handleReset={handleReset}
    />
  );
};
