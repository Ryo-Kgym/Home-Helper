import { ReactNode } from "react";
import { ResponsiveSwitcher } from "@components/page/ResponsiveSwitcher";

const DailyLayout = ({
  calendar,
  detail,
}: {
  calendar: ReactNode;
  detail: ReactNode;
}) => <ResponsiveSwitcher first={calendar} second={detail} />;

export default DailyLayout;
