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
public class ExportHouseholdDailyDetailInput {
    private String id;
    private LocalDate date;
    private String genreId;
    private String iocomeType;
    private String categoryId;
    private String accountId;
    private String userId;
    private BigDecimal amount;
    private String memo;
    private String groupId;
}