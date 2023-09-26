import { ReactNode } from "react";
import { TabNavigatorProps } from "@components/atoms/TabNavigator/index";

type CustomTabPresenterProps = {
  tabCount: number;
  tabPropsList: TabNavigatorProps[];
  onClickTab: (_: { url: string; value: string }) => void;
  selectClassName: (_: string) => string;
  children: ReactNode;
};
export const CustomTabPresenter = ({
  tabCount,
  tabPropsList,
  onClickTab,
  selectClassName,
  children,
}: CustomTabPresenterProps) => (
  <div>
    <div className={"grid grid-cols-1"}>
      <div className={`grid grid-cols-${tabCount} mb-2`}>
        {tabPropsList.map(({ value, label, url }, i) => (
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
