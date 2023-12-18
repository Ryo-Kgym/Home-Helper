/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.Builder;

@Builder
public record ImportMigrationCreditCardDetailOutput(
    String id,
    LocalDate date,
    String categoryId,
    BigDecimal amount,
    String memo,
    String summaryId,
    String userId,
    String groupId,
    String genreId,
    String iocomeType
) {
}
