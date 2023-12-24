/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ResponsiveSwitcher } from "../../_layout/ResponsiveSwitcher";
import { CategoryTable } from "./CategoryTable";
import { CategoryDetail } from "./CategoryDetail";

const Page = () => (
  <ResponsiveSwitcher first={<CategoryTable />} second={<CategoryDetail />} />
);

export default Page;
