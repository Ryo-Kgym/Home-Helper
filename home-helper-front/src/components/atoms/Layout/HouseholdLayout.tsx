/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { PropsWithChildren } from "react";
import { NavbarSection } from "@app/_layout/NavbarSection";
import { Menu } from "@app/_layout/menu";

export const HouseholdLayout = ({ children }: PropsWithChildren) => (
  <NavbarSection header={"家計簿アプリ"} menus={householdMenu}>
    {children}
  </NavbarSection>
);

const householdMenu: Menu[] = [
  {
    label: "戻る",
    url: "/top",
  },
  {
    label: "アカウント",
    url: "/household/account",
  },
  {
    label: "カレンダー",
    url: "/household/daily",
  },
  {
    label: "ジャンル",
    url: "/household/genre",
  },
  {
    label: "カテゴリ",
    url: "/household/category",
  },
  {
    label: "サマリ",
    url: "/household/summary",
  },
  {
    label: "クレカ履歴",
    url: "/household/creditCard",
  },
  {
    label: "ファイル取込",
    url: "/household/fileImport",
  },
  {
    label: "設定",
    url: "/household/setting",
  },
];
