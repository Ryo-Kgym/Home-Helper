/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationCategoryOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1Category;
import home.helper.batch.persistence.database.v1.table.DbV1CategoryMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationCategorySaveRepository implements SaveGateway<ImportMigrationCategoryOutput> {
    private final DbV1CategoryMapper dbV1CategoryMapper;

    @Override
    public void save(ImportMigrationCategoryOutput data) {
        dbV1CategoryMapper.insert(new DbV1Category() {{
            setCategoryId(data.getCategoryId());
            setCategoryName(data.getCategoryName());
            setGenreId(data.getGenreId());
            setValidFlag(data.isValidFlag());
            setDisplayOrder(data.getDisplayOrder());
            setGroupId(data.getGroupId());
        }});
    }
}
