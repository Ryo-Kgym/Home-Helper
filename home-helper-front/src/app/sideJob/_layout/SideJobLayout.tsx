/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { PropsWithChildren } from "react";
import { NavbarSection } from "@app/_layout/NavbarSection";
import { Navi } from "@app/_layout/navi";

export const SideJobLayout = ({ children }: PropsWithChildren) => (
  <NavbarSection header={"副業管理アプリ"} navis={navigations}>
    {children}
  </NavbarSection>
);

const navigations: Navi[] = [
  {
    label: "戻る",
    url: "/top",
  },
  {
    label: "ダッシュボード",
    url: "/sideJob/dashboard",
  },
  {
    label: "収入",
    url: "/sideJob/income/dashboard",
    visible: false,
  },
  {
    label: "|- 収入登録",
    url: "/sideJob/income/registration",
    visible: false,
  },
  {
    label: "経費",
    url: "/sideJob/expense/dashboard",
    visible: false,
  },
  {
    label: "|- 経費登録",
    url: "/sideJob/expense/registration",
    visible: false,
  },
  {
    label: "チャート",
    url: "/sideJob/chart",
    visible: false,
  },
  {
    label: "設定",
    url: "/sideJob/setting",
    visible: false,
  },
];
