import { FC } from "react";
import { PossessionPointContainer } from "@components/container/possession_point/PossessionPointContainer";
import { AppShell } from "@components/ui/AppShell";

export const Page: FC = () => {
  return <AppShell body={<PossessionPointContainer />} />;
};
