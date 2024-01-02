/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { CreditCardDetailTable } from "@components/page/CreditCardDetails";

const Page = ({ params: { summaryId } }: { params: { summaryId: string } }) => (
  <CreditCardDetailTable creditCardSummaryId={summaryId} />
);

export default Page;
