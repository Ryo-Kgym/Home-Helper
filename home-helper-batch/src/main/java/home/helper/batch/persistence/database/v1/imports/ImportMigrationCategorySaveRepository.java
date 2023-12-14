/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;

import home.helper.batch.dto.v1.imports.ImportMigrationCategoryOutput;
import home.helper.batch.gateway.SaveGateway;

@Repository
public class ImportMigrationCategorySaveRepository implements SaveGateway<ImportMigrationCategoryOutput> {
    @Override
    public void save(ImportMigrationCategoryOutput data) {
        System.out.println(data);
    }
}
