/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { ReactNode } from "react";
import { RoutingTabs } from "@components/ui";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <RoutingTabs
      defaultValue={"genre"}
      tabs={[
        {
          value: "genre",
          label: "ジャンル",
          url: "/household/setting/genre",
        },
        {
          value: "category",
          label: "カテゴリ",
          url: "/household/setting/category",
        },
        {
          value: "categoryAdd",
          label: "カテゴリ登録",
          url: "/household/setting/category/add",
        },
      ]}
    />
    {children}
  </>
);

export default Layout;
