/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import java.time.LocalDateTime;

import lombok.Builder;

@Builder
public record ImportMigrationHelperKidPointOutput(
    String helperKidId,
    Integer point,
    LocalDateTime lastHelpDatetime
) {}