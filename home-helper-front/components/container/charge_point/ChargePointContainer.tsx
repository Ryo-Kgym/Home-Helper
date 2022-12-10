import { FC, useEffect, useState } from "react";
import { ChargePointPresenter } from "@components/presenter/charge_point/ChargePointPresenter";
import { HelpItem } from "@domain/model/home_helper/HelpItem";
import { toJapanMd } from "@function/DateConverter";
import { fetchUser } from "@hooks/user/fetchUser";
import { fetchHelpItems } from "@hooks/help_item/fetchHelpItems";
import {
  ChargePointForm,
  registerHelpPoint,
} from "@hooks/help_point/registerHelpPoint";

export const ChargePointContainer: FC = () => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [currentPoint, setCurrentPoint] = useState(0);
  const [fromDate, setFromDate] = useState("");
  const [helpItems, setHelpItems] = useState<HelpItem[]>([]);
  const [chargePointForms, setChargePointForms] = useState<ChargePointForm[]>(
    []
  );

  useEffect(() => {
    fetchUser().then((user) => {
      setCurrentPoint(user.currentPoint);
      setFromDate(toJapanMd(user.lastHelp));
    });
    fetchHelpItems().then(setHelpItems);
  });

  const handleCalcTotal = (id: string, point: number, count: number) => {
    setTotalPoint(calcTotalPoint(id, point, count));
  };

  const handleRegisterHelps = () => {
    registerHelpPoint(chargePointForms).then((r) => {});
  };

  const handleRegisterAfterProcess = () => {
    setCurrentPoint(currentPoint + totalPoint);
    setTotalPoint(0);
    setChargePointForms([]);
  };

  const calcTotalPoint = (id: string, point: number, count: number): number => {
    let forms = chargePointForms.filter((f) => f.id !== id);
    if (count > 0) forms.push({ id, point, count });
    setChargePointForms(forms);

    if (forms.length > 0) {
      return forms.map((f) => f.point * f.count).reduce((x1, x2) => x1 + x2);
    }
    return 0;
  };

  return (
    <ChargePointPresenter
      fromDate={fromDate}
      helpItems={helpItems}
      totalPoint={totalPoint}
      currentPoint={currentPoint}
      handleCalcTotal={handleCalcTotal}
      handleRegisterHelps={handleRegisterHelps}
      handleRegisterAfterProcess={handleRegisterAfterProcess}
    />
  );
};
