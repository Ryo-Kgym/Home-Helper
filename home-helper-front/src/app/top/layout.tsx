/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ReactNode } from "react";
import { SelectPageLayout } from "@app/_layout/SelectPageLayout";

const Layout = ({ children }: { children: ReactNode }) => (
  <SelectPageLayout title={"アプリを選択してださい"}>
    {children}
  </SelectPageLayout>
);

export default Layout;
