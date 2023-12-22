/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.export.ExportHouseholdDepositCategoryInput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2DepositCategory;
import home.helper.batch.persistence.database.v2.table.DbV2DepositCategoryMapper;

@Repository
@RequiredArgsConstructor
public class ExportMigrationHouseholdDepositCategorySaveRepository implements SaveGateway<ExportHouseholdDepositCategoryInput> {
    private final DbV2DepositCategoryMapper dbV2DepositCategoryMapper;

    @Override
    public void save(ExportHouseholdDepositCategoryInput data) {
        dbV2DepositCategoryMapper.insert(new DbV2DepositCategory() {{
            setCategoryId(data.getCategoryId());
            setGroupId(data.getGroupId());
        }});
    }
}
