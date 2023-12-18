/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;

@Builder
public record ImportMigrationHelpItemOutput(
    String helpItemId,
    String name,
    Integer point,
    String memo,
    String groupId
) {}