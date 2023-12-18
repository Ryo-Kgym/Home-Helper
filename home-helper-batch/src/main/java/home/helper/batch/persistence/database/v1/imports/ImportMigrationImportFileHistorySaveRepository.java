/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationImportFileHistoryOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1ImportFileHistory;
import home.helper.batch.persistence.database.v1.table.DbV1ImportFileHistoryMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationImportFileHistorySaveRepository implements SaveGateway<ImportMigrationImportFileHistoryOutput> {
    private final DbV1ImportFileHistoryMapper dbV1ImportFileHistoryMapper;

    @Override
    public void save(ImportMigrationImportFileHistoryOutput data) {
        dbV1ImportFileHistoryMapper.insert(new DbV1ImportFileHistory() {{
            setId(data.id());
            setFileName(data.fileName());
            setFileType(data.fileType());
            setImportDatetime(data.importDatetime());
            setImportUserId(data.importUserId());
            setGroupId(data.groupId());
        }});
    }
}
