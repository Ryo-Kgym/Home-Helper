/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { CreditCardDetailEdit } from "components/page/CreditCardDetailEdit";
import { BackModal } from "@components/ui";
import { CreditCardDetailAdd } from "components/page/CreditCardDetailAdd";

const Page = ({
  params: { summaryId, id },
}: {
  params: { summaryId: string; id: string };
}) => {
  if (id === "add") {
    return (
      <BackModal>
        <CreditCardDetailAdd summaryId={summaryId} />
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
