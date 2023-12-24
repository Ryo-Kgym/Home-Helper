/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ReactNode } from "react";
import { TabNavigator } from "@components/atoms/TabNavigator";

const Layout = ({ children }: { children: ReactNode }) => (
  <TabNavigator
    selectValue={"genre"}
    tabPropsList={[
      {
        value: "genre",
        label: "ジャンル",
        url: "/household/setting/genre",
      },
      {
        value: "category",
        label: "カテゴリー",
        url: "/household/setting/category",
      },
    ]}
  >
    {children}
  </TabNavigator>
);

export default Layout;
