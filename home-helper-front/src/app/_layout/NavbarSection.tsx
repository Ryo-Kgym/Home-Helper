/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, ScrollArea } from "@mantine/core";
import { ReactNode } from "react";
import { Navi } from "@app/_layout/navi";
import Link from "next/link";

export const NavbarSection = ({
  header,
  navis,
  children,
}: {
  header: string;
  navis: Navi[];
  children: ReactNode;
}) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 150,
        breakpoint: "sm",
        collapsed: { desktop: !opened, mobile: !opened },
      }}
    >
      <AppShell.Header className={"bg-blue-500"}>
        <Group h="100%" px="md">
          <div className={"font-bold text-2xl text-white"}>{header}</div>
          <Burger opened={opened} onClick={toggle} size="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar className={"bg-yellow-300"}>
        <AppShell.Section component={ScrollArea}>
          {navis.map((menu, index) => (
            <Link key={`menu-${index}`} href={menu.url}>
              <div
                className={"p-3 my-1 hover:font-bold max-sm:text-center"}
                onClick={() => {
                  // widthがsm以下の場合は、メニューを閉じる
                  if (window.innerWidth < 640) toggle();
                }}
              >
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
