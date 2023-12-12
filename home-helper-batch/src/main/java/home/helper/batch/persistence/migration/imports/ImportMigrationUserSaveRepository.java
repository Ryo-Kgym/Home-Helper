/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.migration.imports;

import home.helper.batch.dto.migration.imports.ImportMigrationUserInput;
import home.helper.batch.gateway.SaveGateway;
import org.springframework.stereotype.Repository;

@Repository
public class ImportMigrationUserSaveRepository implements SaveGateway<ImportMigrationUserInput> {
    @Override
    public void save(ImportMigrationUserInput data) {
        System.out.println(data);
    }
}
