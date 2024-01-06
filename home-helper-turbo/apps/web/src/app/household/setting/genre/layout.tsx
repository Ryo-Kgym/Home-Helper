/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { ReactNode } from "react";

const Layout = ({
  children,
  modify,
}: {
  children: ReactNode;
  modify: ReactNode;
}) => (
  <div>
    {children}
    {modify}
  </div>
);

export default Layout;
