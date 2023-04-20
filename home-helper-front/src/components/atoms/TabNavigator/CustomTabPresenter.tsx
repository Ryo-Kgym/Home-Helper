import { FC, ReactNode } from "react";
import { TabNavigatorProps } from "@components/atoms/TabNavigator/index";

type CustomTabPresenterProps = {
  tabCount: number;
  tabPropsList: TabNavigatorProps[];
  onClickTab: (args: { url: string; value: string }) => void;
  selectClassName: (value: string) => string;
  children: ReactNode;
};
export const CustomTabPresenter: FC<CustomTabPresenterProps> = ({
  tabCount,
  tabPropsList,
  onClickTab,
  selectClassName,
  children,
}) => (
  <div>
    <div className={"grid grid-cols-1"}>
      <div className={`grid grid-cols-${tabCount} mb-2`}>
        {tabPropsList.map(({ value, icon, label, url }, i) => (
          <div
            key={"tab" + i}
            className={`text-xl p-2 text-center 
                    cursor-pointer border-b-2 ${selectClassName(value)}`}
          >
            <div onClick={() => onClickTab({ url, value })}>{label}</div>
          </div>
        ))}
      </div>
      <div>{children}</div>
    </div>
  </div>
);
