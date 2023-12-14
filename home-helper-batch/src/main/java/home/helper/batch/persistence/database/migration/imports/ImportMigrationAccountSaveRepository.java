/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.migration.imports;

import org.springframework.stereotype.Repository;

import home.helper.batch.dto.migration.imports.ImportMigrationAccountInput;
import home.helper.batch.gateway.SaveGateway;

@Repository
public class ImportMigrationAccountSaveRepository implements SaveGateway<ImportMigrationAccountInput> {
    @Override
    public void save(ImportMigrationAccountInput data) {
        System.out.println(data);
    }
}
