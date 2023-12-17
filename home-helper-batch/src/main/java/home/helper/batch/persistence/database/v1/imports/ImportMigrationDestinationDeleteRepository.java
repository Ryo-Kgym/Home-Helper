/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.gateway.NoArgsSaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1AccountExample;
import home.helper.batch.persistence.database.v1.table.DbV1AccountMapper;
import home.helper.batch.persistence.database.v1.table.DbV1GroupExample;
import home.helper.batch.persistence.database.v1.table.DbV1GroupMapper;
import home.helper.batch.persistence.database.v1.table.DbV1UserExample;
import home.helper.batch.persistence.database.v1.table.DbV1UserMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationDestinationDeleteRepository implements NoArgsSaveGateway {
    private final DbV1AccountMapper dbV1AccountMapper;
    private final DbV1UserMapper dbV1UserMapper;
    private final DbV1GroupMapper dbV1GroupMapper;

    @Override
    public void save() {
        dbV1AccountMapper.deleteByExample(new DbV1AccountExample());
        dbV1UserMapper.deleteByExample(new DbV1UserExample());
        dbV1GroupMapper.deleteByExample(new DbV1GroupExample());
    }
}
