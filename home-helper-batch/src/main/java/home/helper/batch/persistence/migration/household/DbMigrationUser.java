/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.migration.household;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.Value;

@Builder
@Value
@NoArgsConstructor(force = true)
@AllArgsConstructor
public class DbMigrationUser {
    private String userId;
    private String userName;
    private int displayOrder;
    private String email;

}
