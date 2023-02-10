/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { FC, useEffect, useState } from "react";
import { ChargePointPresenter } from "./ChargePointPresenter";
import { HelpItem } from "@domain/model/home_helper/HelpItem";
import { toJapanMd } from "@function/DateConverter";
import { fetchUser } from "@hooks/user/fetchUser";
import { fetchHelpItems } from "@hooks/help_item/fetchHelpItems";
import {
  ChargePointForm,
  registerHelpPoint,
} from "@hooks/help_point/registerHelpPoint";
import { TbodyProps } from "@components/atoms/Table";
import { Counter } from "@components/atoms/Counter";

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
  }, []);

  const handleCalcTotal = (id: string, point: number, count: number) => {
    setTotalPoint(calcTotalPoint(id, point, count));
  };

  const handleRegisterHelps = () => {
    if (chargePointForms.length === 0) return;

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

  const tbodyProps: TbodyProps[] = helpItems.map((helpItem) => {
    return {
      keyPrefix: "helpItem",
      columns: [
        { value: helpItem.name },
        { value: helpItem.point.toLocaleString() },
        {
          value: (
            <Counter
              defaultValue={0}
              handleSetCount={(count: number) => {
                handleCalcTotal(helpItem.id.toString(), helpItem.point, count);
              }}
            />
          ),
        },
      ],
    };
  });

  return (
    <ChargePointPresenter
      fromDate={fromDate}
      totalPoint={totalPoint}
      currentPoint={currentPoint}
      handleRegisterHelps={handleRegisterHelps}
      handleRegisterAfterProcess={handleRegisterAfterProcess}
      tbodyProps={tbodyProps}
    />
  );
};
