/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationUserOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.gateway.migration.MigrationIdGateway;
import home.helper.batch.persistence.database.v1.table.ConvId;
import home.helper.batch.persistence.database.v1.table.ConvIdMapper;
import home.helper.batch.persistence.database.v1.table.DbV1User;
import home.helper.batch.persistence.database.v1.table.DbV1UserMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationUserSaveRepository implements SaveGateway<ImportMigrationUserOutput> {
    private final DbV1UserMapper dbV1UserMapper;
    private final MigrationIdGateway migrationIdGateway;
    private final ConvIdMapper convIdMapper;

    @Override
    public void save(ImportMigrationUserOutput data) {
        dbV1UserMapper.insertSelective(
            new DbV1User() {{
                setUserId(data.userId());
                setUserName(data.userName());
                setDisplayOrder(data.displayOrder());
                setEmail(data.email());
            }}
        );
        var id = migrationIdGateway.generateId();
        convIdMapper.insert(
            new ConvId() {{
                setTableName("user");
                setCurrentId(data.userId());
                setId(id);
            }}
        );
    }
}
