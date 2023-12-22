/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.export;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class ExportHouseholdCreditCardSummaryInput {
    private String id;
    private String creditCard;
    private LocalDate withdrawalDate;
    private String accountId;
    private BigDecimal totalAmount;
    private int count;
    private String groupId;
}