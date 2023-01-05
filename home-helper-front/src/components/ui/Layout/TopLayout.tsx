import { FC, ReactElement } from "react";
import { index as AppShell } from "./";

type TopLayoutProps = {
  children: ReactElement;
};
export const TopLayout: FC<TopLayoutProps> = ({ children }) => {
  return (
    <AppShell headerHidden navHidden>
      {children}
    </AppShell>
  );
};
