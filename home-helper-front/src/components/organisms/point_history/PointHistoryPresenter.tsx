import { FC } from "react";
import { Tab } from "@components/atoms/Tab";
// import { ChargedPointHistoryContainer as ChargedPointHistory } from "@components/organisms/charged_point_history/ChargedPointHistoryContainer";
// import { UsedPointHistoryContainer as UsedPointHistory } from "@components/organisms/used_point_history/UsedPointHistoryContainer";

type Props = {};

export const PointHistoryPresenter: FC<Props> = ({}) => (
  <Tab
    defaultSelect={"charged"}
    tabPropsList={[
      {
        value: "charged",
        label: "ためた",
        contents: <div />,
      },
      {
        value: "used",
        label: "つかった",
        contents: <div />,
      },
    ]}
  />
);
