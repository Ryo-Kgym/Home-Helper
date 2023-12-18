/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationApplicationOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1Application;
import home.helper.batch.persistence.database.v1.table.DbV1ApplicationMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationApplicationSaveRepository implements SaveGateway<ImportMigrationApplicationOutput> {
    private final DbV1ApplicationMapper dbV1ApplicationMapper;

    @Override
    public void save(ImportMigrationApplicationOutput data) {
        dbV1ApplicationMapper.insert(new DbV1Application() {{
            setApplicationId(data.getApplicationId());
            setApplication(data.getApplication());
            setValidFlag(data.isValidFlag());
            setTopUrl(data.getTopUrl());
        }});
    }
}
