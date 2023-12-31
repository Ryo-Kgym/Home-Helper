/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { UpdateCreditCardDetail } from "@components/organisms/update_credit_card_detail";
import { BackModal } from "@components/ui";
import { redirect } from "next/navigation";

const Page = ({
  params: { summaryId, id },
}: {
  params: { summaryId: string; id: string };
}) => {
  if (id === "add") {
    return redirect(`/household/creditCard/${summaryId}/add`);
  }

  return (
    <BackModal>
      <UpdateCreditCardDetail id={id} />
    </BackModal>
  );
};

export default Page;
