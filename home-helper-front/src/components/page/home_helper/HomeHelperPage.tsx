import { FC } from "react";
import { HomeHelperContainer } from "@components/container/home_helper/HomeHelperContainer";
import { HomeHelperLayout } from "@components/ui/Layout/HomeHelperLayout";

export const Page: FC = () => (
  <HomeHelperLayout body={<HomeHelperContainer />} navHidden />
);
