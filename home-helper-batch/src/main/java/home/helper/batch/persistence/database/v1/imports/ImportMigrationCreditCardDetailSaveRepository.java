/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationCreditCardDetailOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1CreditCardDetail;
import home.helper.batch.persistence.database.v1.table.DbV1CreditCardDetailMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationCreditCardDetailSaveRepository implements SaveGateway<ImportMigrationCreditCardDetailOutput> {
    private final DbV1CreditCardDetailMapper dbV1CreditCardDetailMapper;

    @Override
    public void save(ImportMigrationCreditCardDetailOutput data) {
        dbV1CreditCardDetailMapper.insert(new DbV1CreditCardDetail() {{
            setId(data.id());
            setDate(data.date());
            setCategoryId(data.categoryId());
            setAmount(data.amount());
            setMemo(data.memo());
            setSummaryId(data.summaryId());
            setUserId(data.userId());
            setGroupId(data.groupId());
            setGenreId(data.genreId());
            setIocomeType(data.iocomeType());
        }});
    }
}
