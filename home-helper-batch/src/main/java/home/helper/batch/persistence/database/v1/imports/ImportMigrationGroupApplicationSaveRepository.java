/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;

import home.helper.batch.dto.v1.imports.ImportMigrationGroupApplicationOutput;
import home.helper.batch.gateway.SaveGateway;

@Repository
public class ImportMigrationGroupApplicationSaveRepository implements SaveGateway<ImportMigrationGroupApplicationOutput> {
    @Override
    public void save(ImportMigrationGroupApplicationOutput data) {
        System.out.println(data);
    }
}
