import { FC, ReactElement } from "react";
import { NaviPresenter } from "@components/ui/Navi/NaviPresenter";

type NaviContainerProps = {
  body: ReactElement;
  hidden?: boolean;
};
export const NaviContainer: FC<NaviContainerProps> = ({ body, hidden }) => {
  const display = hidden ? "none" : "display";
  const width = hidden ? 0 : 300;

  return <NaviPresenter body={body} width={width} display={display} />;
};
