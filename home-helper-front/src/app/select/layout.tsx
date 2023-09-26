/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { LoginStatus } from "@components/molecules/LoginStatus/index";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <LoginStatus />
    {children}
  </div>
);

export default Layout;
