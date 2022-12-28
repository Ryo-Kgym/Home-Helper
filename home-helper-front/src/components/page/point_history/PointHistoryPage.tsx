import { FC } from "react";
import { PointHistoryContainer } from "@components/container/point_history/PointHistoryContainer";
import { AppShell } from "@components/ui/AppShell";

export const Page: FC = () => <AppShell body={<PointHistoryContainer />} />;
