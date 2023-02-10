import { FC } from "react";
import { HomeHelperContainer } from "@components/presenter/home_helper/HomeHelperContainer";
import { HomeHelperLayout } from "@components/atoms/Layout/HomeHelperLayout";

export const Page: FC = () => (
  <HomeHelperLayout navHidden>
    <HomeHelperContainer />
  </HomeHelperLayout>
);
