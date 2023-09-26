/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ReactNode } from "react";
import { Tab } from "@components/atoms/Tab";

const Layout = ({
  genre,
  category,
}: {
  genre: ReactNode;
  category: ReactNode;
}) => (
  <Tab
    defaultSelect={"genre"}
    tabPropsList={[
      {
        value: "genre",
        label: "ジャンル",
        contents: genre,
      },
      {
        value: "category",
        label: "カテゴリー",
        contents: category,
      },
    ]}
  />
);

export default Layout;
