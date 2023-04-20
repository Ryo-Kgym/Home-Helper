import { FC, useState } from "react";
import { TabProps } from "@components/atoms/Tab/index";
import { CustomTabPresenter } from "@components/atoms/Tab/CustomTabPresenter";

type CustomTabContainerProps = {
  defaultSelect: string;
  tabPropsList: TabProps[];
};
export const CustomTabContainer: FC<CustomTabContainerProps> = ({
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
  const selectClassName = (value: string) => {
    if (value === selectValue) {
      return "border-b-2 border-blue-500";
    } else {
      return "";
    }
  };

  return (
    <CustomTabPresenter
      tabCount={tabCount}
      tabPropsList={tabPropsList}
      onClickTab={onClickTab}
      contents={contents}
      selectClassName={selectClassName}
    />
  );
};
