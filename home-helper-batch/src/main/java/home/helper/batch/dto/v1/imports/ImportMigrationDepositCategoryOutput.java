/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;

@Builder
public record ImportMigrationDepositCategoryOutput(
    String categoryId,
    String groupId
) {
}
