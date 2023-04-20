import { FC, ReactNode, useState } from "react";
import { TabNavigatorProps } from "@components/atoms/TabNavigator/index";
import { CustomTabPresenter } from "@components/atoms/TabNavigator/CustomTabPresenter";
import { useRouter } from "next/router";

type CustomTabContainerProps = {
  defaultSelect: string;
  tabPropsList: TabNavigatorProps[];
  children: ReactNode;
};
export const CustomTabContainer: FC<CustomTabContainerProps> = ({
  defaultSelect,
  tabPropsList,
  children,
}) => {
  const router = useRouter();
  const tabCount = tabPropsList.length;
  const [selectValue, setSelectValue] = useState<string>(defaultSelect);
  const onClickTab = ({ url, value }: { url: string; value: string }) => {
    router.push(url);
    setSelectValue(value);
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
      selectClassName={selectClassName}
      children={children}
    />
  );
};
