/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationExchangeItemOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1ExchangeItem;
import home.helper.batch.persistence.database.v1.table.DbV1ExchangeItemMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationExchangeItemSaveRepository implements SaveGateway<ImportMigrationExchangeItemOutput> {
    private final DbV1ExchangeItemMapper dbV1ExchangeItemMapper;

    @Override
    public void save(ImportMigrationExchangeItemOutput data) {
        dbV1ExchangeItemMapper.insert(new DbV1ExchangeItem() {{
            setExchangeItemId(data.exchangeItemId());
            setName(data.name());
            setPoint(data.point());
            setMemo(data.memo());
            setGroupId(data.groupId());
        }});
    }
}
