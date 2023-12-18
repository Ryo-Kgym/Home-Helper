/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationHelpPointExchangedAchievementOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1HelpPointExchangedAchievement;
import home.helper.batch.persistence.database.v1.table.DbV1HelpPointExchangedAchievementMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationHelpPointExchangedAchievementSaveRepository implements SaveGateway<ImportMigrationHelpPointExchangedAchievementOutput> {
    private final DbV1HelpPointExchangedAchievementMapper dbV1HelpPointExchangedAchievementMapper;

    @Override
    public void save(ImportMigrationHelpPointExchangedAchievementOutput data) {
        dbV1HelpPointExchangedAchievementMapper.insert(new DbV1HelpPointExchangedAchievement() {{
            setHelpPointExchangedAchievementId(data.helpPointExchangedAchievementId());
            setHelperKidId(data.helperKidId());
            setExchangeItemId(data.exchangeItemId());
            setExchangeCount(data.exchangeCount());
            setExchangeTotalPoint(data.exchangeTotalPoint());
            setExchangedDatetime(data.exchangedDatetime());
            setGroupId(data.groupId());
        }});
    }
}
