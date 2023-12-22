/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.export.ExportHouseholdCategoryInput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2Category;
import home.helper.batch.persistence.database.v2.table.DbV2CategoryMapper;

@Repository
@RequiredArgsConstructor
public class ExportMigrationHouseholdCategorySaveRepository implements SaveGateway<ExportHouseholdCategoryInput> {
    private final DbV2CategoryMapper dbV2CategoryMapper;

    @Override
    public void save(ExportHouseholdCategoryInput data) {
        dbV2CategoryMapper.insert(new DbV2Category() {{
            setId(data.getId());
            setName(data.getName());
            setGenreId(data.getGenreId());
            setValidFlag(data.isValidFlag());
            setDisplayOrder(data.getDisplayOrder());
            setGroupId(data.getGroupId());
        }});
    }
}
