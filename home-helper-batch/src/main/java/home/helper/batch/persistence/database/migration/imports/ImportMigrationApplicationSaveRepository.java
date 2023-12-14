/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.migration.imports;

import org.springframework.stereotype.Repository;

import home.helper.batch.dto.migration.imports.ImportMigrationApplicationOutput;
import home.helper.batch.gateway.SaveGateway;

@Repository
public class ImportMigrationApplicationSaveRepository implements SaveGateway<ImportMigrationApplicationOutput> {
    @Override
    public void save(ImportMigrationApplicationOutput data) {
        System.out.println(data);
    }
}
