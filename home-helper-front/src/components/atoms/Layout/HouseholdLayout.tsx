import { ReactElement, ReactNode } from "react";
import { index as AppShell } from "./";
import { HouseholdHeader } from "@components/atoms/Layout/HouseholdHeader";
import { HouseholdMenu } from "@components/molecules";

type HouseHoldLayoutProps = {
  children: ReactElement | ReactNode;
  navHidden?: boolean;
};
export const HouseholdLayout = ({
  children,
  navHidden,
}: HouseHoldLayoutProps) => {
  const nav = (
    <div className={"max-sm:hidden mt-12"}>
      <HouseholdMenu hidden={navHidden} />
    </div>
  );

  return (
    <AppShell header={<HouseholdHeader />} nav={nav}>
      {children}
    </AppShell>
  );
};
