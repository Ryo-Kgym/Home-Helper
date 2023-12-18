/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationHelpItemOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1HelpItem;
import home.helper.batch.persistence.database.v1.table.DbV1HelpItemMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationHelpItemSaveRepository implements SaveGateway<ImportMigrationHelpItemOutput> {
    private final DbV1HelpItemMapper dbV1HelpItemMapper;

    @Override
    public void save(ImportMigrationHelpItemOutput data) {
        dbV1HelpItemMapper.insert(new DbV1HelpItem() {{
            setHelpItemId(data.helpItemId());
            setName(data.name());
            setPoint(data.point());
            setMemo(data.memo());
            setGroupId(data.groupId());
        }});
    }
}
