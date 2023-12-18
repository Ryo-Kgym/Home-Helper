/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;

@Builder
public record ImportMigrationHelperKidOutput(
    String helperKidId,
    String name,
    String nameSuffix,
    String groupId
) {}