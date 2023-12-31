/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { CreditCardDetailTable } from "@components/page/CreditCardDetails";

const Page = ({ params: { summaryId } }: { params: { summaryId: string } }) => {
  return <CreditCardDetailTable creditCardSummaryId={summaryId} />;
};

export default Page;
