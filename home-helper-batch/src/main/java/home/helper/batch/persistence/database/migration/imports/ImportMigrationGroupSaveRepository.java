/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.migration.imports;

import org.springframework.stereotype.Repository;

import home.helper.batch.dto.migration.imports.ImportMigrationGroupOutput;
import home.helper.batch.gateway.SaveGateway;

@Repository
public class ImportMigrationGroupSaveRepository implements SaveGateway<ImportMigrationGroupOutput> {
    @Override
    public void save(ImportMigrationGroupOutput data) {
        System.out.println(data);
    }
}
