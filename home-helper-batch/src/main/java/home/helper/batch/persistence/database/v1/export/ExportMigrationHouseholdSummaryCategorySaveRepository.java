/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.export.ExportHouseholdSummaryCategoryInput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2SummaryCategory;
import home.helper.batch.persistence.database.v2.table.DbV2SummaryCategoryMapper;

@Repository
@RequiredArgsConstructor
public class ExportMigrationHouseholdSummaryCategorySaveRepository implements SaveGateway<ExportHouseholdSummaryCategoryInput> {
    private final DbV2SummaryCategoryMapper dbV2SummaryCategoryMapper;

    @Override
    public void save(ExportHouseholdSummaryCategoryInput data) {
        dbV2SummaryCategoryMapper.insert(new DbV2SummaryCategory() {{
            setId(data.getId());
            setCategoryId(data.getCategoryId());
            setDisplayOrder(data.getDisplayOrder());
            setGroupId(data.getGroupId());
        }});
    }
}
