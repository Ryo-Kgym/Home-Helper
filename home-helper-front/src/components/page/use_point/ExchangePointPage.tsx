import { FC } from "react";
import { ExchangePointContainer } from "@components/container/consume_point/ExchangePointContainer";
import { AppShell } from "@components/ui/AppShell";

export const Page: FC = () => <AppShell body={<ExchangePointContainer />} />;
