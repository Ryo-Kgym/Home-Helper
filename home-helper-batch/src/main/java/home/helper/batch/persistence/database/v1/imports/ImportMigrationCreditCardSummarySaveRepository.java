/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationCreditCardSummaryOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1CreditCardSummary;
import home.helper.batch.persistence.database.v1.table.DbV1CreditCardSummaryMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationCreditCardSummarySaveRepository implements SaveGateway<ImportMigrationCreditCardSummaryOutput> {
    private final DbV1CreditCardSummaryMapper dbV1CreditCardSummaryMapper;

    @Override
    public void save(ImportMigrationCreditCardSummaryOutput data) {
        dbV1CreditCardSummaryMapper.insert(new DbV1CreditCardSummary() {{
            setId(data.id());
            setCreditCard(data.creditCard());
            setWithdrawalDate(data.withdrawalDate());
            setAccountId(data.accountId());
            setTotalAmount(data.totalAmount());
            setCount(data.count());
            setGroupId(data.groupId());
        }});
    }
}
