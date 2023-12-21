/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.export.ExportPublicApplicationInput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2Application;
import home.helper.batch.persistence.database.v2.table.DbV2ApplicationMapper;

@Repository
@RequiredArgsConstructor
public class ExportMigrationPublicApplicationSaveRepository implements SaveGateway<ExportPublicApplicationInput> {
    private final DbV2ApplicationMapper dbV2ApplicationMapper;

    @Override
    public void save(ExportPublicApplicationInput data) {
        dbV2ApplicationMapper.insert(new DbV2Application() {{
            setId(data.getId());
            setName(data.getName());
            setValidFlag(data.isValidFlag());
            setTopUrl(data.getTopUrl());
        }});
    }
}
