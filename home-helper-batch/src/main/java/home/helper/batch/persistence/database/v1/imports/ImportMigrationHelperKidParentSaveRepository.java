/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationHelperKidParentOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1HelperKidParent;
import home.helper.batch.persistence.database.v1.table.DbV1HelperKidParentMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationHelperKidParentSaveRepository implements SaveGateway<ImportMigrationHelperKidParentOutput> {
    private final DbV1HelperKidParentMapper dbV1HelperKidParentMapper;

    @Override
    public void save(ImportMigrationHelperKidParentOutput data) {
        dbV1HelperKidParentMapper.insert(new DbV1HelperKidParent() {{
            setHelperKidParentId(data.helperKidParentId());
            setHelperKidId(data.helperKidId());
            setParentUserId(data.parentUserId());
        }});
    }
}
