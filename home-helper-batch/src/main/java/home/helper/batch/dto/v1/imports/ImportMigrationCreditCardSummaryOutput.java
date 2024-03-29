/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.Builder;

import home.helper.batch.domain.model.id.CurrentId;

@Builder
public record ImportMigrationCreditCardSummaryOutput(
    String id,
    String creditCard,
    LocalDate withdrawalDate,
    String accountId,
    BigDecimal totalAmount,
    Integer count,
    String groupId
) implements CurrentId {
    @Override
    public String getCurrentId() {
        return id;
    }
}
