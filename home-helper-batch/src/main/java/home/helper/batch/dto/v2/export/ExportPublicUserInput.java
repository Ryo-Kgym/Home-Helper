/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v2.export;

import lombok.Builder;

@Builder
public record ExportPublicUserInput(
    String userId,
    String userName,
    Integer displayOrder,
    String email
) {}