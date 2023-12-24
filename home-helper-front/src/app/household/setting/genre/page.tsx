/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ResponsiveSwitcher } from "../../_layout/ResponsiveSwitcher";
import { GenreTable } from "./GenreTable";
import { GenreDetail } from "./GenreDetail";

const Page = () => (
  <ResponsiveSwitcher first={<GenreTable />} second={<GenreDetail />} />
);

export default Page;
