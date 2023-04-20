import { FC, ReactNode } from "react";
import { TabNavigatorProps } from "@components/atoms/TabNavigator/index";
import { CustomTabPresenter } from "@components/atoms/TabNavigator/CustomTabPresenter";
import { useRouter } from "next/router";

type CustomTabContainerProps = {
  tabPropsList: TabNavigatorProps[];
  children: ReactNode;
  selectValue: string;
};
export const CustomTabContainer: FC<CustomTabContainerProps> = ({
  tabPropsList,
  children,
  selectValue,
}) => {
  const router = useRouter();
  const tabCount = tabPropsList.length;
  const onClickTab = ({ url }: { url: string; value: string }) => {
    router.push(url);
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
    >
      {children}
    </CustomTabPresenter>
  );
};
