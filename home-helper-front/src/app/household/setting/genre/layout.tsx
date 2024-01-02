/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { ReactNode } from "react";

const Layout = ({
  children,
  detail,
}: {
  children: ReactNode;
  detail: ReactNode;
}) => (
  <div>
    {children}
    {detail}
  </div>
);

export default Layout;
