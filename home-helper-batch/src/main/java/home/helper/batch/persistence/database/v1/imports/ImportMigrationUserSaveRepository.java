/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;

import home.helper.batch.dto.v1.imports.ImportMigrationUserOutput;
import home.helper.batch.gateway.SaveGateway;

@Repository
public class ImportMigrationUserSaveRepository implements SaveGateway<ImportMigrationUserOutput> {
    @Override
    public void save(ImportMigrationUserOutput data) {
        System.out.println(data);
    }
}