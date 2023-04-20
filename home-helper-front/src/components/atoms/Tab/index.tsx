import { ReactElement, ReactNode } from "react";

// export { TabContainer as Tab } from "./TabContainer";
export { CustomTabContainer as Tab } from "./CustomTabContainer";

export type TabProps = {
  value: string;
  label: string;
  icon?: ReactNode;
  contents: ReactElement;
};
