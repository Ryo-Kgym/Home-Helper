/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import java.time.LocalDateTime;

import lombok.Builder;

import home.helper.batch.domain.model.id.CurrentId;

@Builder
public record ImportMigrationHelpPointEarnedAchievementOutput(
    String helpPointEarnedAchievementId,
    String helperKidId,
    LocalDateTime earnedDatetime,
    Integer earnedPoint,
    String groupId
) implements CurrentId {
    @Override
    public String getCurrentId() {
        return helpPointEarnedAchievementId;
    }
}