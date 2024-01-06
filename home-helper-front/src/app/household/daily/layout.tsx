/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ReactNode } from "react";
import { ResponsiveSwitcher } from "@app/household/_layout/ResponsiveSwitcher";

const DailyLayout = ({
  calendar,
  detail,
}: {
  calendar: ReactNode;
  detail: ReactNode;
}) => <ResponsiveSwitcher first={calendar} second={detail} />;

export default DailyLayout;
