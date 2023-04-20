import { Tabs } from "@mantine/core";
import { StyledTabs } from "@components/atoms/Tab/StyledTabs";
import { FC, useState } from "react";
import { TabProps } from "@components/atoms/Tab/index";

type Props = {
  defaultSelect: string;
  tabPropsList: TabProps[];
};
export const TabPresenter: FC<Props> = ({ defaultSelect, tabPropsList }) => {
  return (
    <>
      <MantineTabPresenter
        defaultSelect={defaultSelect}
        tabPropsList={tabPropsList}
      />
      <CustomTabPresenter
        defaultSelect={defaultSelect}
        tabPropsList={tabPropsList}
      />
    </>
  );
};

export const MantineTabPresenter: FC<Props> = ({
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

export const CustomTabPresenter: FC<Props> = ({
  defaultSelect,
  tabPropsList,
}) => {
  const [contents, setContents] = useState<JSX.Element>(<></>);
  const tabCount = tabPropsList.length;
  const [selectValue, setSelectValue] = useState<string>(defaultSelect);
  const onClickTab = (value: string, contents: JSX.Element) => {
    setSelectValue(value);
    setContents(contents);
  };

  return (
    <div>
      <div className={"grid grid-cols-1"}>
        <div className={`grid grid-cols-${tabCount} mb-2`}>
          {tabPropsList.map(({ value, icon, label, contents }, i) => {
            const selectedClassName =
              selectValue === value ? "border-b-indigo-500" : "";
            return (
              <div
                key={"tab" + i}
                className={`text-xl p-2 text-center 
                cursor-pointer border-b-2 ${selectedClassName}`}
              >
                <div onClick={() => onClickTab(value, contents)}>{label}</div>
              </div>
            );
          })}
        </div>
        <div>{contents}</div>
      </div>
    </div>
  );
};
