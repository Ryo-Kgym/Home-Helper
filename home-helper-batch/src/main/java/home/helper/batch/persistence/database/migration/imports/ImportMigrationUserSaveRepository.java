/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.migration.imports;

import org.springframework.stereotype.Repository;

import home.helper.batch.dto.migration.imports.ImportMigrationUserInput;
import home.helper.batch.gateway.SaveGateway;

@Repository
public class ImportMigrationUserSaveRepository implements SaveGateway<ImportMigrationUserInput> {
    @Override
    public void save(ImportMigrationUserInput data) {
        System.out.println(data);
    }
}
