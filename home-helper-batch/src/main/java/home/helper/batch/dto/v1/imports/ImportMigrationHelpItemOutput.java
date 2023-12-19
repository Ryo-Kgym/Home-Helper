/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;

import home.helper.batch.domain.model.id.CurrentId;

@Builder
public record ImportMigrationHelpItemOutput(
    String helpItemId,
    String name,
    Integer point,
    String memo,
    String groupId
) implements CurrentId {
    @Override
    public String getCurrentId() {
        return helpItemId;
    }
}