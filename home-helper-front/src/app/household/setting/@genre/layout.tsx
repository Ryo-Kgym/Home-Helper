/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ReactNode } from "react";
import { ResponsiveSwitcher } from "@app/household/_layout/ResponsiveSwitcher";

const Layout = ({ table, detail }: { table: ReactNode; detail: ReactNode }) => (
  <ResponsiveSwitcher first={table} second={detail} />
);

export default Layout;
