/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationDepositCategoryOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1DepositCategory;
import home.helper.batch.persistence.database.v1.table.DbV1DepositCategoryMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationDepositCategorySaveRepository implements SaveGateway<ImportMigrationDepositCategoryOutput> {
    private final DbV1DepositCategoryMapper dbV1DepositCategoryMapper;

    @Override
    public void save(ImportMigrationDepositCategoryOutput data) {
        dbV1DepositCategoryMapper.insert(new DbV1DepositCategory() {{
            setCategoryId(data.categoryId());
            setGroupId(data.groupId());
        }});
    }
}
