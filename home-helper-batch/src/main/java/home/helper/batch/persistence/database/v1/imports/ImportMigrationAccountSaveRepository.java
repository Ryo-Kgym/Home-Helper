/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationAccountOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1Account;
import home.helper.batch.persistence.database.v1.table.DbV1AccountMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationAccountSaveRepository implements SaveGateway<ImportMigrationAccountOutput> {
    private final DbV1AccountMapper dbV1AccountMapper;

    @Override
    public void save(ImportMigrationAccountOutput data) {
        dbV1AccountMapper.insert(new DbV1Account() {{
            setAccountId(data.getAccountId());
            setAccountName(data.getAccountName());
            setValidFlag(data.isValidFlag());
            setDisplayOrder(data.getDisplayOrder());
            setGroupId(data.getGroupId());
        }});
    }
}
