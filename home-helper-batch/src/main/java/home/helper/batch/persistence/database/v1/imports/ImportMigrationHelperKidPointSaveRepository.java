/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationHelperKidPointOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1HelperKidPoint;
import home.helper.batch.persistence.database.v1.table.DbV1HelperKidPointMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationHelperKidPointSaveRepository implements SaveGateway<ImportMigrationHelperKidPointOutput> {
    private final DbV1HelperKidPointMapper dbV1HelperKidPointMapper;

    @Override
    public void save(ImportMigrationHelperKidPointOutput data) {
        dbV1HelperKidPointMapper.insert(new DbV1HelperKidPoint() {{
            setHelperKidId(data.helperKidId());
            setPoint(data.point());
            setLastHelpDatetime(data.lastHelpDatetime());
        }});
    }
}
