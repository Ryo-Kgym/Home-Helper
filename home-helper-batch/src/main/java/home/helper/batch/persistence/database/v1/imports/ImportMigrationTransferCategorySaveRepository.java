/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;

import home.helper.batch.dto.v1.imports.ImportMigrationTransferCategoryOutput;
import home.helper.batch.gateway.SaveGateway;

@Repository
public class ImportMigrationTransferCategorySaveRepository implements SaveGateway<ImportMigrationTransferCategoryOutput> {
    @Override
    public void save(ImportMigrationTransferCategoryOutput data) {
        System.out.println(data);
    }
}
