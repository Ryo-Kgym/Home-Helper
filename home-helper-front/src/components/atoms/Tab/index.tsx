/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ReactElement, ReactNode } from "react";

export { MantineTab as Tab } from "./MantineTab";

export type TabProps = {
  value: string;
  label: string;
  icon?: ReactNode;
  contents: ReactElement | ReactNode;
};
