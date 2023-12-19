/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;

import home.helper.batch.domain.model.id.CurrentId;

@Builder
public record ImportMigrationHelpPointEarnedDetailOutput(
    String helpPointEarnedDetailId,
    String earnedAchievementId,
    String helpItemId,
    Integer helpItemCount,
    Integer helpItemTotalPoint,
    String groupId
) implements CurrentId {
    @Override
    public String getCurrentId() {
        return helpPointEarnedDetailId;
    }
}