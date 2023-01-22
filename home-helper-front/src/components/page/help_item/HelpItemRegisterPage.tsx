import { FC } from "react";
import { HomeHelperLayout } from "@components/ui/Layout/HomeHelperLayout";
import { HelpItemRegisterContainer } from "@components/container/help_item/register/HelpItemRegisterContainer";

export const Page: FC = () => (
  <HomeHelperLayout>
    <HelpItemRegisterContainer />
  </HomeHelperLayout>
);
