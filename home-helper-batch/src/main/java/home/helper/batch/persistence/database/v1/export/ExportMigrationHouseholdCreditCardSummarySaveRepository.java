/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.export.ExportHouseholdCreditCardSummaryInput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2CreditCardSummary;
import home.helper.batch.persistence.database.v2.table.DbV2CreditCardSummaryMapper;

@Repository
@RequiredArgsConstructor
public class ExportMigrationHouseholdCreditCardSummarySaveRepository implements SaveGateway<ExportHouseholdCreditCardSummaryInput> {
    private final DbV2CreditCardSummaryMapper dbV2CreditCardSummaryMapper;

    @Override
    public void save(ExportHouseholdCreditCardSummaryInput data) {
        dbV2CreditCardSummaryMapper.insert(new DbV2CreditCardSummary() {{
            setId(data.getId());
            setCreditCard(data.getCreditCard());
            setWithdrawalDate(data.getWithdrawalDate());
            setAccountId(data.getAccountId());
            setTotalAmount(data.getTotalAmount());
            setCount(data.getCount());
            setGroupId(data.getGroupId());
        }});
    }
}
