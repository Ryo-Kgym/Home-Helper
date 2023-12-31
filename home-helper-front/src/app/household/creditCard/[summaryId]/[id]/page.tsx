/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { redirect } from "next/navigation";

const Page = ({
  params: { summaryId },
}: {
  params: { summaryId: string; id: string };
}) => redirect(`/household/creditCard/${summaryId}`);

export default Page;
