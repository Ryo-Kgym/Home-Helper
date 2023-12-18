/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationHelpPointEarnedAchievementOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1HelpPointEarnedAchievement;
import home.helper.batch.persistence.database.v1.table.DbV1HelpPointEarnedAchievementMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationHelpPointEarnedAchievementSaveRepository implements SaveGateway<ImportMigrationHelpPointEarnedAchievementOutput> {
    private final DbV1HelpPointEarnedAchievementMapper dbV1HelpPointEarnedAchievementMapper;

    @Override
    public void save(ImportMigrationHelpPointEarnedAchievementOutput data) {
        dbV1HelpPointEarnedAchievementMapper.insert(new DbV1HelpPointEarnedAchievement() {{
            setHelpPointEarnedAchievementId(data.helpPointEarnedAchievementId());
            setHelperKidId(data.helperKidId());
            setEarnedDatetime(data.earnedDatetime());
            setEarnedPoint(data.earnedPoint());
            setGroupId(data.groupId());
        }});
    }
}
