/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { UpdateCreditCardDetail } from "@components/organisms/update_credit_card_detail";
import { BackModal } from "@components/ui";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <BackModal>
    <UpdateCreditCardDetail id={id} />
  </BackModal>
);

export default Page;
