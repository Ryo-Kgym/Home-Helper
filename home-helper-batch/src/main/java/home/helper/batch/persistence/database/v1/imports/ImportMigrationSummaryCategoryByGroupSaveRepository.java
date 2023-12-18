/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationSummaryCategoryByGroupOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1SummaryCategoryByGroup;
import home.helper.batch.persistence.database.v1.table.DbV1SummaryCategoryByGroupMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationSummaryCategoryByGroupSaveRepository implements SaveGateway<ImportMigrationSummaryCategoryByGroupOutput> {
    private final DbV1SummaryCategoryByGroupMapper dbV1SummaryCategoryByGroupMapper;

    @Override
    public void save(ImportMigrationSummaryCategoryByGroupOutput data) {
        dbV1SummaryCategoryByGroupMapper.insert(new DbV1SummaryCategoryByGroup() {{
            setId(data.getId());
            setCategoryId(data.getCategoryId());
            setDisplayOrder(data.getDisplayOrder());
            setGroupId(data.getGroupId());
        }});
    }
}
