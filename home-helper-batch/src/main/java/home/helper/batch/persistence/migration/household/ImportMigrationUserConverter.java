/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.migration.household;

import home.helper.batch.dto.migration.imports.ImportMigrationUserInputData;

import java.util.function.Function;

public class ImportMigrationUserConverter implements Function<DbMigrationUser, ImportMigrationUserInputData> {
    @Override
    public ImportMigrationUserInputData apply(DbMigrationUser dbMigrationUser) {
        return ImportMigrationUserInputData.builder()
            .userId(dbMigrationUser.getUserId())
            .userName(dbMigrationUser.getUserName())
            .displayOrder(dbMigrationUser.getDisplayOrder())
            .email(dbMigrationUser.getEmail())
            .build();
    }
}
