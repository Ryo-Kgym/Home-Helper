/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { getIncomeList } from "@gateway/side_job/income/useGetIncomeList";
import Client from "./client";

const Page = async () => {
  const { data } = await getIncomeList();

  return <Client data={data.incomeDetails} />;
};

export default Page;
