import { FC } from "react";
import { HomeHelperLayout } from "@components/atoms/Layout/HomeHelperLayout";
import { HelpItemRegisterContainer } from "@components/organisms/help_item/register/HelpItemRegisterContainer";

export const Page: FC = () => (
  <HomeHelperLayout>
    <HelpItemRegisterContainer />
  </HomeHelperLayout>
);
