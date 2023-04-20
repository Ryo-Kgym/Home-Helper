import { Tabs } from "@mantine/core";
import { StyledTabs } from "@components/atoms/Tab/StyledTabs";
import { FC } from "react";
import { TabProps } from "@components/atoms/Tab/index";

type MantineTabPresenterProps = {
  defaultSelect: string;
  tabPropsList: TabProps[];
};

export const TabPresenter: FC<MantineTabPresenterProps> = ({
  defaultSelect,
  tabPropsList,
}) => {
  return (
    <StyledTabs
      defaultValue={defaultSelect}
      className={"w-full justify-center"}
    >
      <Tabs.List grow>
        {tabPropsList.map(({ value, icon, label }, i) => {
          return (
            <Tabs.Tab value={value} icon={icon} key={"tab" + i}>
              {label}
            </Tabs.Tab>
          );
        })}
      </Tabs.List>

      {tabPropsList.map(({ value, contents }, i) => {
        return (
          <Tabs.Panel value={value} pt="lg" pb="lg" key={"panel" + i}>
            {contents}
          </Tabs.Panel>
        );
      })}
    </StyledTabs>
  );
};
