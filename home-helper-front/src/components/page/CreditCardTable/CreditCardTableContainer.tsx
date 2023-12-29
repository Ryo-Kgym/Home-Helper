/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { TableProps } from "@components/atoms/Table";
import { ResponsiveSwitcher } from "@app/household/_layout/ResponsiveSwitcher";
import { useGetCreditCardListQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";
import { useState } from "react";
import { CreditCardDetailTable } from "../CreditCardDetails";
import { creditCardListConverter } from "./creditCardListConverter";
import { CreditCardTablePresenter } from "./CreditCardTablePresenter";

export const CreditCardTableContainer = () => {
  const { groupId } = useGroup();
  const [creditCardSummaryId, setCreditCardSummaryId] = useState<string>("");

  const [{ data }] = useGetCreditCardListQuery({ variables: { groupId } });

  const tableProps: TableProps[] = creditCardListConverter({
    data,
    setCreditCardSummaryId,
  });

  return (
    <ResponsiveSwitcher
      first={<CreditCardTablePresenter tableProps={tableProps} />}
      second={
        <CreditCardDetailTable creditCardSummaryId={creditCardSummaryId} />
      }
    />
  );
};
