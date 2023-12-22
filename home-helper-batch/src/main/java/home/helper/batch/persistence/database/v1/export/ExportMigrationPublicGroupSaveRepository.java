/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.export.ExportPublicGroupInput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2Group;
import home.helper.batch.persistence.database.v2.table.DbV2GroupMapper;

@Repository
@RequiredArgsConstructor
public class ExportMigrationPublicGroupSaveRepository implements SaveGateway<ExportPublicGroupInput> {
    private final DbV2GroupMapper dbV2GroupMapper;

    @Override
    public void save(ExportPublicGroupInput data) {
        dbV2GroupMapper.insert(new DbV2Group() {{
            setId(data.getId());
            setName(data.getName());
        }});
    }
}
