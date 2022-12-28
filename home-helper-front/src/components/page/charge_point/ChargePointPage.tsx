import { FC } from "react";
import { ChargePointContainer } from "@components/container/charge_point/ChargePointContainer";
import { AppShell } from "@components/ui/AppShell";

export const Page: FC = () => <AppShell body={<ChargePointContainer />} />;
