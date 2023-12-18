/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationHelpPointEarnedDetailOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1HelpPointEarnedDetail;
import home.helper.batch.persistence.database.v1.table.DbV1HelpPointEarnedDetailMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationHelpPointEarnedDetailSaveRepository implements SaveGateway<ImportMigrationHelpPointEarnedDetailOutput> {
    private final DbV1HelpPointEarnedDetailMapper dbV1HelpPointEarnedDetailMapper;

    @Override
    public void save(ImportMigrationHelpPointEarnedDetailOutput data) {
        dbV1HelpPointEarnedDetailMapper.insert(new DbV1HelpPointEarnedDetail() {{
            setHelpPointEarnedDetailId(data.helpPointEarnedDetailId());
            setEarnedAchievementId(data.earnedAchievementId());
            setHelpItemId(data.helpItemId());
            setHelpItemCount(data.helpItemCount());
            setHelpItemTotalPoint(data.helpItemTotalPoint());
            setGroupId(data.groupId());
        }});
    }
}
