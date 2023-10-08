/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ReactElement, ReactNode } from "react";

export { MantineTabs as Tab } from "./MantineTabs";

export type TabsProps = {
  defaultSelect: string;
  tabPropsList: TabProps[];
};

export type TabProps = {
  value: string;
  label: string;
  icon?: ReactNode;
  contents: ReactElement | ReactNode;
};
