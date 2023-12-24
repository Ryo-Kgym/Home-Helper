/*
 * Copyright (c) 2023 Ryo-Kgym.
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
          label: "カテゴリー",
          url: "/household/setting/category",
        },
      ]}
    />
    {children}
  </>
);

export default Layout;
