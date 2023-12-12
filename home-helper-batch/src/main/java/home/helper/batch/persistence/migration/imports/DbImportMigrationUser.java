/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.migration.imports;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.Value;

@Builder
@Value
@NoArgsConstructor(force = true)
@AllArgsConstructor
public class DbImportMigrationUser {
    private String userId;
    private String userName;
    private int displayOrder;
    private String email;

}
