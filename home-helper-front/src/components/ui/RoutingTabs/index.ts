/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

export { MantineRoutingTabs as RoutingTabs } from "./MantineRoutingTabs";

export type RoutingTabsProps = {
  defaultValue: string;
  tabs: {
    label: string;
    value: string;
    url: string;
  }[];
};
