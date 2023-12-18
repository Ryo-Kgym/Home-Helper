/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import java.time.LocalDateTime;

import lombok.Builder;

@Builder
public record ImportMigrationHelpPointEarnedAchievementOutput(
    String helpPointEarnedAchievementId,
    String helperKidId,
    LocalDateTime earnedDatetime,
    Integer earnedPoint,
    String groupId
) {}