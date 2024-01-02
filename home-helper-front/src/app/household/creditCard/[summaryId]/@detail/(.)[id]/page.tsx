/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { EditCreditCardDetail } from "components/EditCreditCardDetail";
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
      <EditCreditCardDetail id={id} />
    </BackModal>
  );
};

export default Page;
