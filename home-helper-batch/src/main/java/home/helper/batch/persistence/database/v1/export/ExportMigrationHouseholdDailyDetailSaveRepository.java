/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.export.ExportHouseholdDailyDetailInput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2DailyDetail;
import home.helper.batch.persistence.database.v2.table.DbV2DailyDetailMapper;

@Repository
@RequiredArgsConstructor
public class ExportMigrationHouseholdDailyDetailSaveRepository implements SaveGateway<ExportHouseholdDailyDetailInput> {
    private final DbV2DailyDetailMapper dbV2DailyDetailMapper;

    @Override
    public void save(ExportHouseholdDailyDetailInput data) {
        dbV2DailyDetailMapper.insert(new DbV2DailyDetail() {{
            setId(data.getId());
            setDate(data.getDate());
            setGenreId(data.getGenreId());
            setIocomeType(data.getIocomeType());
            setCategoryId(data.getCategoryId());
            setAccountId(data.getAccountId());
            setUserId(data.getUserId());
            setAmount(data.getAmount());
            setMemo(data.getMemo());
            setGroupId(data.getGroupId());
        }});
    }
}
