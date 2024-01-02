/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { CreditCardDetailEdit } from "components/page/CreditCardDetailEdit";
import { BackModal } from "@components/ui";
import { AddCreditCardDetail } from "@components/page/AddCreditCardDetail";

const Page = ({
  params: { summaryId, id },
}: {
  params: { summaryId: string; id: string };
}) => {
  if (id === "add") {
    return (
      <BackModal>
        <AddCreditCardDetail summaryId={summaryId} />
      </BackModal>
    );
  }

  return (
    <BackModal>
      <CreditCardDetailEdit id={id} />
    </BackModal>
  );
};

export default Page;
