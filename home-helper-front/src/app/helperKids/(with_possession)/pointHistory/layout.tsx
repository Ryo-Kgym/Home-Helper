/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { Tab } from "@components/ui/Tabs/index";
import { ReactNode } from "react";

const Layout = ({
  charged,
  exchanged,
}: {
  charged: ReactNode;
  exchanged: ReactNode;
}) => (
  <>
    <Tab
      defaultSelect={"charged"}
      tabPropsList={[
        {
          value: "charged",
          label: "ためた",
          contents: charged,
        },
        {
          value: "used",
          label: "つかった",
          contents: exchanged,
        },
      ]}
    />
  </>
);

export default Layout;
