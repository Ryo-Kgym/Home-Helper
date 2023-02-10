import { FC } from "react";
import { TopContainer } from "@components/presenter/top/TopContainer";
import { TopLayout } from "@components/ui/Layout/TopLayout";

export const Page: FC = () => (
  <TopLayout>
    <TopContainer />
  </TopLayout>
);
