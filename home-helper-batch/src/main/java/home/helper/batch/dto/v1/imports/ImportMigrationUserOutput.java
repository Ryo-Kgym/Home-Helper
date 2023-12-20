/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;

import home.helper.batch.domain.model.id.CurrentId;

@Builder
public record ImportMigrationUserOutput(
    String userId,
    String userName,
    int displayOrder,
    String email
) implements CurrentId {
    @Override
    public String getCurrentId() {
        return userId;
    }
}
