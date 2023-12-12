/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.migration.household;

import home.helper.batch.dto.migration.imports.ImportMigrationUserInput;

import java.util.function.Function;

public class ImportMigrationUserConverter implements Function<DbMigrationUser, ImportMigrationUserInput> {
    @Override
    public ImportMigrationUserInput apply(DbMigrationUser dbMigrationUser) {
        return ImportMigrationUserInput.builder()
            .userId(dbMigrationUser.getUserId())
            .userName(dbMigrationUser.getUserName())
            .displayOrder(dbMigrationUser.getDisplayOrder())
            .email(dbMigrationUser.getEmail())
            .build();
    }
}
