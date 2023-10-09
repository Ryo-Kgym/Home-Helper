/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { PropsWithChildren } from "react";
import { NavbarSection } from "@app/_layout/NavbarSection";
import { Navi } from "@app/_layout/navi";
import { RegisterDailyButton } from "@components/molecules";

export const HouseholdLayout = ({ children }: PropsWithChildren) => (
  <NavbarSection header={"家計簿アプリ"} navis={householdNavis}>
    {children}
    <div className={"z-100 absolute right-5 bottom-16"}>
      <RegisterDailyButton />
    </div>
  </NavbarSection>
);

const householdNavis: Navi[] = [
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
