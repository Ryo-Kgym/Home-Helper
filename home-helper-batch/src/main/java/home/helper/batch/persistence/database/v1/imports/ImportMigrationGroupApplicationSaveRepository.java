/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationGroupApplicationOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1GroupApplication;
import home.helper.batch.persistence.database.v1.table.DbV1GroupApplicationMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationGroupApplicationSaveRepository implements SaveGateway<ImportMigrationGroupApplicationOutput> {
    private final DbV1GroupApplicationMapper dbV1GroupApplicationMapper;

    @Override
    public void save(ImportMigrationGroupApplicationOutput data) {
        dbV1GroupApplicationMapper.insert(new DbV1GroupApplication() {{
            setGroupApplicationId(data.getGroupApplicationId());
            setGroupId(data.getGroupId());
            setApplicationId(data.getApplicationId());
        }});
    }
}
