import { ReactElement } from "react";
import { Navbar, ScrollArea } from "@mantine/core";

export const Navi = ({
  nav,
  navHidden,
}: {
  nav: ReactElement;
  navHidden?: boolean;
}) => {
  const navDisplay = navHidden ? "none" : "display";
  const navWidth = navHidden ? 0 : 300;

  return (
    <Navbar height={800} p="xs" width={{ base: navWidth }} display={navDisplay}>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {nav}
      </Navbar.Section>
    </Navbar>
  );
};
