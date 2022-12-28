import { FC } from "react";
import { HomeHelperContainer } from "@components/container/home_helper/HomeHelperContainer";
import { AppShell } from "@components/ui/AppShell";

export const Page: FC = () => <AppShell body={<HomeHelperContainer />} />;
