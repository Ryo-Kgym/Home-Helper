import { FC, ReactElement } from "react";
import { index as AppShell } from "./";

type TopLayoutProps = {
  body: ReactElement;
};
export const TopLayout: FC<TopLayoutProps> = ({ body }) => {
  return <AppShell body={body} headerHidden navHidden />;
};
