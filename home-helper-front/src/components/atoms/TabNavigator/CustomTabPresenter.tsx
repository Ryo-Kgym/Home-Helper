import { TabProps } from "@components/atoms/Tab/index";
import { FC } from "react";

type CustomTabPresenterProps = {
  tabCount: number;
  tabPropsList: TabProps[];
  onClickTab: (value: string, contents: JSX.Element) => void;
  contents: JSX.Element;
  selectClassName: (value: string) => string;
};
export const CustomTabPresenter: FC<CustomTabPresenterProps> = ({
  tabCount,
  tabPropsList,
  onClickTab,
  contents,
  selectClassName,
}) => (
  <div>
    <div className={"grid grid-cols-1"}>
      <div className={`grid grid-cols-${tabCount} mb-2`}>
        {tabPropsList.map(({ value, icon, label, contents }, i) => (
          <div
            key={"tab" + i}
            className={`text-xl p-2 text-center 
                    cursor-pointer border-b-2 ${selectClassName(value)}`}
          >
            <div onClick={() => onClickTab(value, contents)}>{label}</div>
          </div>
        ))}
      </div>
      <div>{contents}</div>
    </div>
  </div>
);
