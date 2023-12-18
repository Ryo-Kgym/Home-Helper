/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import java.time.LocalDateTime;

import lombok.Builder;

@Builder
public record ImportMigrationExchangedPointEarnedAchievementOutput(
    String helpPointExchangedAchievementId,
    String helperKidId,
    String exchangeItemId,
    Integer exchangeCount,
    Integer exchangeTotalPoint,
    LocalDateTime exchangedDatetime,
    String groupId
) {}