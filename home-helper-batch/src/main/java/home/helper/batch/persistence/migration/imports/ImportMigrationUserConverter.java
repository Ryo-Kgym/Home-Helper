/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.migration.imports;

import home.helper.batch.dto.migration.imports.ImportMigrationUserInput;

import java.util.function.Function;

public class ImportMigrationUserConverter implements Function<DbImportMigrationUser, ImportMigrationUserInput> {
    @Override
    public ImportMigrationUserInput apply(DbImportMigrationUser dbImportMigrationUser) {
        return ImportMigrationUserInput.builder()
            .userId(dbImportMigrationUser.getUserId())
            .userName(dbImportMigrationUser.getUserName())
            .displayOrder(dbImportMigrationUser.getDisplayOrder())
            .email(dbImportMigrationUser.getEmail())
            .build();
    }
}
