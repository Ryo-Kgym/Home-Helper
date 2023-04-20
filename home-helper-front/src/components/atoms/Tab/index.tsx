import { ReactElement, ReactNode } from "react";

export { MantineTabContainer as Tab } from "./MantineTabContainer";

export type TabProps = {
  value: string;
  label: string;
  icon?: ReactNode;
  contents: ReactElement;
};
