/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.export.ExportHouseholdImportFileHistoryInput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2ImportFileHistory;
import home.helper.batch.persistence.database.v2.table.DbV2ImportFileHistoryMapper;

@Repository
@RequiredArgsConstructor
public class ExportMigrationHouseholdImportFileHistorySaveRepository implements SaveGateway<ExportHouseholdImportFileHistoryInput> {
    private final DbV2ImportFileHistoryMapper dbV2ImportFileHistoryMapper;

    @Override
    public void save(ExportHouseholdImportFileHistoryInput data) {
        dbV2ImportFileHistoryMapper.insert(new DbV2ImportFileHistory() {{
            setId(data.getId());
            setFileName(data.getFileName());
            setFileType(data.getFileType());
            setImportDatetime(data.getImportDatetime());
            setImportUserId(data.getImportUserId());
            setGroupId(data.getGroupId());
        }});
    }
}
