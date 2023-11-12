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
];
