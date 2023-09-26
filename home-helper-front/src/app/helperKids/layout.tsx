/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ReactNode } from "react";
import { HelperKidsLayout } from "./_layout/HelperKidsLayout";

const Layout = ({ children }: { children: ReactNode }) => (
  <HelperKidsLayout>{children}</HelperKidsLayout>
);

export default Layout;
