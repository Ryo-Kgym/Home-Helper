/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.migration.household;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

import home.helper.batch.dto.migration.imports.ImportMigrationUserInput;
import home.helper.batch.persistence.database.migration.imports.DbImportMigrationUser;
import home.helper.batch.persistence.database.migration.imports.ImportMigrationUserConverter;

@ExtendWith(MockitoExtension.class)
class ImportMigrationUserConverterTest {
    @InjectMocks
    private ImportMigrationUserConverter testTarget;

    @Test
    public void testApply() {
        var dbMigrationUser = DbImportMigrationUser.builder()
            .userId("TestUser1")
            .userName("Test User 1")
            .displayOrder(1)
            .email("testuser1@example.com")
            .build();

        var actual = testTarget.apply(dbMigrationUser);
        var expected = ImportMigrationUserInput.builder()
            .userId("TestUser1")
            .userName("Test User 1")
            .displayOrder(1)
            .email("testuser1@example.com")
            .build();

        assertThat(actual, is(expected));
    }
}