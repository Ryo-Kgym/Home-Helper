/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { UpdateCreditCardDetail } from "@components/organisms/update_credit_card_detail";
import { useRouter } from "next/navigation";

const Page = ({ params: { id } }: { params: { id: string } }) => {
  const { back } = useRouter();
  return <UpdateCreditCardDetail id={id} onClose={back} />;
};

export default Page;
