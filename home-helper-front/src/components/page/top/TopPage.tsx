import { FC } from "react";
import { TopContainer } from "@components/container/top/TopContainer";
import { AppShell } from "@components/ui/AppShell";

export const Page: FC = () => (
  <AppShell body={<TopContainer />} navHidden={true} />
);
