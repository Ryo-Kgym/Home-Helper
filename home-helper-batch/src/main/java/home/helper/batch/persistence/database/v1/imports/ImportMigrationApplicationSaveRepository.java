/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;

import home.helper.batch.dto.v1.imports.ImportMigrationApplicationOutput;
import home.helper.batch.gateway.SaveGateway;

@Repository
public class ImportMigrationApplicationSaveRepository implements SaveGateway<ImportMigrationApplicationOutput> {
    @Override
    public void save(ImportMigrationApplicationOutput data) {
        System.out.println(data);
    }
}
