import { FC } from "react";
import { TopLayout } from "@components/atoms/Layout/TopLayout";
import { SelectGroupContainer } from "@components/organisms/select_group/SelectGroupContainer";

export const Page: FC = () => (
  <TopLayout>
    <SelectGroupContainer />
  </TopLayout>
);
