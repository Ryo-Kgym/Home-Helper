/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.migration.imports;

import lombok.Builder;

@Builder
public record ImportMigrationUserInput(
    String userId,
    String userName,
    int displayOrder,
    String email
) {
}
