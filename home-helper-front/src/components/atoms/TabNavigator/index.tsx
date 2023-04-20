import { ReactElement, ReactNode } from "react";

export { CustomTabContainer as TabNavigator } from "./CustomTabContainer";

export type TabProps = {
  value: string;
  label: string;
  icon?: ReactNode;
  contents: ReactElement;
};
