/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.migration.imports;

import org.springframework.stereotype.Repository;

import home.helper.batch.dto.migration.imports.ImportMigrationAccountOutput;
import home.helper.batch.gateway.SaveGateway;

@Repository
public class ImportMigrationAccountSaveRepository implements SaveGateway<ImportMigrationAccountOutput> {
    @Override
    public void save(ImportMigrationAccountOutput data) {
        System.out.println(data);
    }
}
