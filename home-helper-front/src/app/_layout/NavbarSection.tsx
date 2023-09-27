/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, ScrollArea } from "@mantine/core";
import { ReactNode } from "react";
import { Menu } from "@app/_layout/menu";
import Link from "next/link";

export const NavbarSection = ({
  header,
  menus,
  children,
}: {
  header: string;
  menus: Menu[];
  children: ReactNode;
}) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 200, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <div className={"font-bold text-2xl"}>{header}</div>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section grow component={ScrollArea}>
          {menus.map((menu, index) => (
            <Link key={`menu-${index}`} href={menu.url}>
              <div className={"py-3 my-1 hover:font-bold hover:bg-gray-50"}>
                {menu.icon && <div>{menu.icon}</div>}
                <div>{menu.label}</div>
              </div>
            </Link>
          ))}
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
