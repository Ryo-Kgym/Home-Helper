/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { Tabs } from "@mantine/core";
import { useRouter } from "next/navigation";
import { RoutingTabsProps } from "../RoutingTabs";

export const MantineRoutingTabs = ({
  defaultValue,
  tabs,
}: RoutingTabsProps) => {
  const { push } = useRouter();

  return (
    <Tabs>
      <Tabs.List defaultValue={defaultValue}>
        {tabs.map((tab) => (
          <Tabs.Tab
            key={tab.value}
            value={tab.value}
            onClick={() => {
              push(tab.url);
            }}
          >
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
};
