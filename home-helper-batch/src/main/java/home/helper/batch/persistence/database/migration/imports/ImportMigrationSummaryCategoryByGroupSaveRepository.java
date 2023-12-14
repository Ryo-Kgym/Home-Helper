/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.migration.imports;

import org.springframework.stereotype.Repository;

import home.helper.batch.dto.migration.imports.ImportMigrationSummaryCategoryByGroupOutput;
import home.helper.batch.gateway.SaveGateway;

@Repository
public class ImportMigrationSummaryCategoryByGroupSaveRepository implements SaveGateway<ImportMigrationSummaryCategoryByGroupOutput> {
    @Override
    public void save(ImportMigrationSummaryCategoryByGroupOutput data) {
        System.out.println(data);
    }
}
