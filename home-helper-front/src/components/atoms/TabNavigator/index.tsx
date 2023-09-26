import { ReactNode } from "react";

export { CustomTabContainer as TabNavigator } from "./CustomTabContainer";

export type TabNavigatorProps = {
  value: string;
  label: string;
  icon?: ReactNode;
  url: string;
};
