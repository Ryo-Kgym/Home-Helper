import { HouseholdLayout } from "@components/atoms/Layout/HouseholdLayout";
import { PropsWithChildren } from "react";
import { RegisterDailyButton } from "@components/molecules";

const Layout = ({ children }: PropsWithChildren) => (
  <HouseholdLayout>
    {children}
    <RegisterDailyButton />
  </HouseholdLayout>
);

export default Layout;
