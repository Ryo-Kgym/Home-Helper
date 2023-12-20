/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import java.time.LocalDateTime;

import lombok.Builder;

import home.helper.batch.domain.model.id.CurrentId;

@Builder
public record ImportMigrationImportFileHistoryOutput(
    String id,
    String fileName,
    String fileType,
    LocalDateTime importDatetime,
    String importUserId,
    String groupId
) implements CurrentId {
    @Override
    public String getCurrentId() {
        return id;
    }
}
