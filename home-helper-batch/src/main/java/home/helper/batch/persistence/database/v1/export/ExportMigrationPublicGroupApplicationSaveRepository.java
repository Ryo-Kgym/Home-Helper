/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.export.ExportPublicGroupApplicationInput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2GroupApplication;
import home.helper.batch.persistence.database.v2.table.DbV2GroupApplicationMapper;

@Repository
@RequiredArgsConstructor
public class ExportMigrationPublicGroupApplicationSaveRepository implements SaveGateway<ExportPublicGroupApplicationInput> {
    private final DbV2GroupApplicationMapper dbV2GroupApplicationMapper;

    @Override
    public void save(ExportPublicGroupApplicationInput data) {
        dbV2GroupApplicationMapper.insert(new DbV2GroupApplication() {{
            setId(data.getId());
            setGroupId(data.getGroupId());
            setApplicationId(data.getApplicationId());
        }});
    }
}
