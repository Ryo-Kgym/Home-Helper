/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;

@Builder
public record ImportMigrationHelpPointEarnedDetailOutput(
    String helpPointEarnedDetailId,
    String earnedAchievementId,
    String helpItemId,
    Integer helpItemCount,
    Integer helpItemTotalPoint,
    String groupId
) {}