/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationGroupRoleOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1GroupRole;
import home.helper.batch.persistence.database.v1.table.DbV1GroupRoleMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationGroupRoleSaveRepository implements SaveGateway<ImportMigrationGroupRoleOutput> {
    private final DbV1GroupRoleMapper dbV1GroupRoleMapper;

    @Override
    public void save(ImportMigrationGroupRoleOutput data) {
        dbV1GroupRoleMapper.insert(new DbV1GroupRole() {{
            setGroupRoleId(data.getGroupRoleId());
            setRole(data.getRole());
        }});
    }
}
