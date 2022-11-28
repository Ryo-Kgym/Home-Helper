import { FC, useEffect, useState } from "react";
import { ChargePointPresenter } from "@components/presenter/charge_point/ChargePointPresenter";
import { loadUserId } from "@hooks/loadUserId";
import { useChargePoint } from "@hooks/useChargePoint";
import { HelpItem } from "@domain/model/home_helper/HelpItem";
import { toJapanMd } from "@function/DateConverter";

export const ChargePointContainer: FC = () => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [fromDate, setFromDate] = useState("");
  const [helpItems, setHelpItems] = useState<HelpItem[]>([]);

  useEffect(() => {
    const d = new Date();
    d.toLocaleDateString();
    useChargePoint(loadUserId()).then((r) => {
      setHelpItems(r.helpItems);
      setFromDate(toJapanMd(r.user.lastHelp));
    });
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
