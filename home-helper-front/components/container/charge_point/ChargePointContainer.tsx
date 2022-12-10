import { FC, useEffect, useState } from "react";
import { ChargePointPresenter } from "@components/presenter/charge_point/ChargePointPresenter";
import { loadUserId } from "@hooks/loadUserId";
import { HelpItem } from "@domain/model/home_helper/HelpItem";
import { toJapanMd } from "@function/DateConverter";
import { fetchUser } from "@hooks/user/fetchUser";
import { fetchHelpItems } from "@hooks/help_item/fetchHelpItems";

type PointForm = {
  id: string;
  point: number;
  count: number;
};

export const ChargePointContainer: FC = () => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [currentPoint, setCurrentPoint] = useState(0);
  const [fromDate, setFromDate] = useState("");
  const [helpItems, setHelpItems] = useState<HelpItem[]>([]);
  const [pointForms, setPointForms] = useState<PointForm[]>([]);

  useEffect(() => {
    fetchUser(loadUserId()).then((user) => {
      setCurrentPoint(user.currentPoint);
      setFromDate(toJapanMd(user.lastHelp));
    });
    fetchHelpItems().then(setHelpItems);
  }, []);

  const handleCalcTotal = (id: string, point: number, count: number) => {
    setTotalPoint(currentPoint + calcTotalPoint(id, point, count));
  };

  const handleRegisterHelps = () => {
    console.log(totalPoint + "ポイントの申請をします。");
  };

  const handleReset = () => {
    setTotalPoint(0);
  };

  const calcTotalPoint = (id: string, point: number, count: number): number => {
    let forms = pointForms;
    forms = forms.filter((f) => f.id !== id);
    if (count > 0) forms.push({ id, point, count });
    setPointForms(forms);

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
      handleCalcTotal={handleCalcTotal}
      handleRegisterHelps={handleRegisterHelps}
      handleReset={handleReset}
    />
  );
};
