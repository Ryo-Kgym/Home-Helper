/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.migration.imports;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class DbImportMigrationUser {
    private String userId;
    private String userName;
    private int displayOrder;
    private String email;

}
