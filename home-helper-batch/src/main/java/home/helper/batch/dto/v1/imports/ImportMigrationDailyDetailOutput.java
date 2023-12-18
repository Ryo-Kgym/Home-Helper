/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.Builder;

@Builder
public record ImportMigrationDailyDetailOutput(
    String id,
    LocalDate date,
    String categoryId,
    String accountId,
    String userId,
    BigDecimal amount,
    String memo,
    String groupId,
    String genreId,
    String iocomeType
) {
}
