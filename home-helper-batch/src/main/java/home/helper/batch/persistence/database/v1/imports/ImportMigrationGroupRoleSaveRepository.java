/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;

import home.helper.batch.dto.v1.imports.ImportMigrationGroupRoleOutput;
import home.helper.batch.gateway.SaveGateway;

@Repository
public class ImportMigrationGroupRoleSaveRepository implements SaveGateway<ImportMigrationGroupRoleOutput> {
    @Override
    public void save(ImportMigrationGroupRoleOutput data) {
        System.out.println(data);
    }
}
