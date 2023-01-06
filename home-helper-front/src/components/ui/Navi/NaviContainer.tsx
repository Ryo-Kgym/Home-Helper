import { FC, ReactElement } from "react";
import { NaviPresenter } from "@components/ui/Navi/NaviPresenter";

type NaviContainerProps = {
  children: ReactElement;
  hidden?: boolean;
};
export const NaviContainer: FC<NaviContainerProps> = ({ children, hidden }) => {
  const display = hidden ? "none" : "display";
  const width = hidden ? 0 : 300;

  return (
    <NaviPresenter width={width} display={display}>
      {children}
    </NaviPresenter>
  );
};
