/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.export.ExportHouseholdCreditCardDetailInput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2CreditCardDetail;
import home.helper.batch.persistence.database.v2.table.DbV2CreditCardDetailMapper;

@Repository
@RequiredArgsConstructor
public class ExportMigrationHouseholdCreditCardDetailSaveRepository implements SaveGateway<ExportHouseholdCreditCardDetailInput> {
    private final DbV2CreditCardDetailMapper dbV2CreditCardDetailMapper;

    @Override
    public void save(ExportHouseholdCreditCardDetailInput data) {
        dbV2CreditCardDetailMapper.insert(new DbV2CreditCardDetail() {{
            setId(data.getId());
            setDate(data.getDate());
            setGenreId(data.getGenreId());
            setIocomeType(data.getIocomeType());
            setCategoryId(data.getCategoryId());
            setAmount(data.getAmount());
            setMemo(data.getMemo());
            setSummaryId(data.getSummaryId());
            setUserId(data.getUserId());
            setGroupId(data.getGroupId());
        }});
    }
}
