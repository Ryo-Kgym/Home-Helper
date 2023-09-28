/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { HouseholdLayout } from "./_layout/HouseholdLayout";
import { PropsWithChildren } from "react";
import { RegisterDailyButton } from "@components/molecules";

const Layout = ({ children }: PropsWithChildren) => (
  <HouseholdLayout>
    {children}
    <RegisterDailyButton />
  </HouseholdLayout>
);

export default Layout;
