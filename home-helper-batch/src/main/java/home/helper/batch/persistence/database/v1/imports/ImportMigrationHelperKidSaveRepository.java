/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationHelperKidOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1HelperKid;
import home.helper.batch.persistence.database.v1.table.DbV1HelperKidMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationHelperKidSaveRepository implements SaveGateway<ImportMigrationHelperKidOutput> {
    private final DbV1HelperKidMapper dbV1HelperKidMapper;

    @Override
    public void save(ImportMigrationHelperKidOutput data) {
        dbV1HelperKidMapper.insert(new DbV1HelperKid() {{
            setHelperKidId(data.helperKidId());
            setName(data.name());
            setNameSuffix(data.nameSuffix());
            setGroupId(data.groupId());
        }});
    }
}
