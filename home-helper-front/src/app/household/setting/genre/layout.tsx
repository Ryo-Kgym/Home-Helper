/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { ReactNode } from "react";

const Layout = ({
  children,
  edit,
}: {
  children: ReactNode;
  edit: ReactNode;
}) => (
  <div>
    {children}
    {edit}
  </div>
);

export default Layout;
