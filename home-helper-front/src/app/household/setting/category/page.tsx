/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { ResponsiveSwitcher } from "../../_layout/ResponsiveSwitcher";
import { CategoryList } from "@components/page/CategoryList";
import { CategoryEdit } from "@components/page/CategoryEdit";

const Page = () => (
  <ResponsiveSwitcher first={<CategoryList />} second={<CategoryEdit />} />
);

export default Page;
