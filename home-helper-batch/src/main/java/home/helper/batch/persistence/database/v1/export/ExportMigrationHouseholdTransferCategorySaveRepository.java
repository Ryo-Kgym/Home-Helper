/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.export.ExportHouseholdTransferCategoryInput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2TransferCategory;
import home.helper.batch.persistence.database.v2.table.DbV2TransferCategoryMapper;

@Repository
@RequiredArgsConstructor
public class ExportMigrationHouseholdTransferCategorySaveRepository implements SaveGateway<ExportHouseholdTransferCategoryInput> {
    private final DbV2TransferCategoryMapper dbV2TransferCategoryMapper;

    @Override
    public void save(ExportHouseholdTransferCategoryInput data) {
        dbV2TransferCategoryMapper.insert(new DbV2TransferCategory() {{
            setGroupId(data.getGroupId());
            setIncomeCategoryId(data.getIncomeCategoryId());
            setOutcomeCategoryId(data.getOutcomeCategoryId());
        }});
    }
}
