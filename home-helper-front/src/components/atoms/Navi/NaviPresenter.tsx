import { FC, ReactElement } from "react";
import { Navbar, ScrollArea } from "@mantine/core";

type NaviPresenterProps = {
  children: ReactElement;
  width: number;
  display: string;
};
export const NaviPresenter: FC<NaviPresenterProps> = ({
  children,
  width,
  display,
}) => {
  return (
    <Navbar height={800} p="xs" width={{ base: width }} display={display}>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {children}
      </Navbar.Section>
    </Navbar>
  );
};
