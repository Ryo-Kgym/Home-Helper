/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationGroupOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1Group;
import home.helper.batch.persistence.database.v1.table.DbV1GroupMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationGroupSaveRepository implements SaveGateway<ImportMigrationGroupOutput> {
    private final DbV1GroupMapper dbV1GroupMapper;

    @Override
    public void save(ImportMigrationGroupOutput data) {
        dbV1GroupMapper.insert(new DbV1Group() {{
            setGroupId(data.getGroupId());
            setGroupName(data.getGroupName());
        }});
        System.out.println(data);
    }
}
