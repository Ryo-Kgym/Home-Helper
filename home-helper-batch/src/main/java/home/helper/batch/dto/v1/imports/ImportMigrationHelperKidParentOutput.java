/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;

@Builder
public record ImportMigrationHelperKidParentOutput(
    String helperKidParentId,
    String helperKidId,
    String parentUserId
) {}