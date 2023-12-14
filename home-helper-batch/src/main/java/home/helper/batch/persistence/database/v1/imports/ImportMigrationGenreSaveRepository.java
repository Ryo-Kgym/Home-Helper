/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;

import home.helper.batch.dto.v1.imports.ImportMigrationGenreOutput;
import home.helper.batch.gateway.SaveGateway;

@Repository
public class ImportMigrationGenreSaveRepository implements SaveGateway<ImportMigrationGenreOutput> {
    @Override
    public void save(ImportMigrationGenreOutput data) {
        System.out.println(data);
    }
}
