/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ReactNode } from "react";
import { Navi } from "@app/_layout/navi";
import { NavbarSection } from "@app/_layout/NavbarSection";

export const HelperKidsLayout = ({ children }: { children: ReactNode }) => (
  <NavbarSection header={"お手伝いアプリ"} navis={helperKidsNavis}>
    <div className={"flex flex-col items-center justify-center"}>
      {children}
    </div>
  </NavbarSection>
);

const helperKidsNavis: Navi[] = [
  {
    label: "戻る",
    url: "/top",
  },
  {
    label: "キッズ",
    url: "/helperKids/kid",
  },
  {
    label: "ためる",
    url: "/helperKids/chargePoint",
  },
  {
    label: "つかう",
    url: "/helperKids/exchangePoint",
  },
  {
    label: "履歴",
    url: "/helperKids/pointHistory",
  },
  // {
  // label: "お手伝い項目",
  // url: "/helperKids/helpItem/register",
  // },
  // {
  // label: "交換品",
  // url: "/helperKids/exchangeItem/register",
  // },
];
