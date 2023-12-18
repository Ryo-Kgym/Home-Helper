/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationTransferCategoryOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1TransferCategory;
import home.helper.batch.persistence.database.v1.table.DbV1TransferCategoryMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationTransferCategorySaveRepository implements SaveGateway<ImportMigrationTransferCategoryOutput> {
    private final DbV1TransferCategoryMapper dbV1TransferCategoryMapper;

    @Override
    public void save(ImportMigrationTransferCategoryOutput data) {
        dbV1TransferCategoryMapper.insert(new DbV1TransferCategory() {{
            setGroupId(data.getGroupId());
            setIncomeCategoryId(data.getIncomeCategoryId());
            setOutcomeCategoryId(data.getOutcomeCategoryId());
        }});
    }
}
