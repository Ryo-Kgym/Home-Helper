/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationDailyDetailOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1DailyDetail;
import home.helper.batch.persistence.database.v1.table.DbV1DailyDetailMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationDailyDetailSaveRepository implements SaveGateway<ImportMigrationDailyDetailOutput> {
    private final DbV1DailyDetailMapper dbV1DailyDetailMapper;

    @Override
    public void save(ImportMigrationDailyDetailOutput data) {
        dbV1DailyDetailMapper.insert(new DbV1DailyDetail() {{
            setId(data.id());
            setDate(data.date());
            setCategoryId(data.categoryId());
            setAccountId(data.accountId());
            setUserId(data.userId());
            setAmount(data.amount());
            setMemo(data.memo());
            setGroupId(data.groupId());
            setGenreId(data.genreId());
            setIocomeType(data.iocomeType());
        }});
    }
}
