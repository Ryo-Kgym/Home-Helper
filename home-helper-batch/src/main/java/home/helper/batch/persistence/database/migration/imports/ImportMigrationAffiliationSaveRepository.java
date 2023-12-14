/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.migration.imports;

import org.springframework.stereotype.Repository;

import home.helper.batch.dto.migration.imports.ImportMigrationAffiliationOutput;
import home.helper.batch.gateway.SaveGateway;

@Repository
public class ImportMigrationAffiliationSaveRepository implements SaveGateway<ImportMigrationAffiliationOutput> {
    @Override
    public void save(ImportMigrationAffiliationOutput data) {
        System.out.println(data);
    }
}
