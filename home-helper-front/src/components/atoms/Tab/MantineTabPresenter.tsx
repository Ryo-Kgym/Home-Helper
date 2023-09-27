/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { Tabs } from "@mantine/core";
import { TabProps } from "@components/atoms/Tab/index";

type MantineTabPresenterProps = {
  defaultSelect: string;
  tabPropsList: TabProps[];
};

export const MantineTabPresenter = ({
  defaultSelect,
  tabPropsList,
}: MantineTabPresenterProps) => {
  const normalClassName = "";
  const mobileClassName: string = "max-sm:text-sm max-sm:h-5 max-sm:p-0";

  return (
    <Tabs defaultValue={defaultSelect} className={"w-full justify-center"}>
      <Tabs.List grow>
        {tabPropsList.map((tab, i) => (
          <Tabs.Tab
            value={tab.value}
            leftSection={tab.icon}
            key={"tab" + i}
            className={`${normalClassName} ${mobileClassName}`}
          >
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {tabPropsList.map(({ value, contents }, i) => (
        <Tabs.Panel value={value} pt="lg" pb="lg" key={"panel" + i}>
          {contents}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};
