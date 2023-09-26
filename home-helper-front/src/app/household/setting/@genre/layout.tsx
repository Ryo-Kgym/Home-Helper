/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ReactNode } from "react";
import { Split } from "@components/atoms/Split";

const Layout = ({ table, detail }: { table: ReactNode; detail: ReactNode }) => (
  <Split first={table} second={detail} />
);

export default Layout;
