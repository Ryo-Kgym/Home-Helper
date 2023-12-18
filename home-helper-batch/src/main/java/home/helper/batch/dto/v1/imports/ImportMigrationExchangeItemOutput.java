/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;

@Builder
public record ImportMigrationExchangeItemOutput(
    String exchangeItemId,
    String name,
    Integer point,
    String memo,
    String groupId
) {}