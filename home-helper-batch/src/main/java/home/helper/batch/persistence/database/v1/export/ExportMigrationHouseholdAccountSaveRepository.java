/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.export.ExportHouseholdAccountInput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2Account;
import home.helper.batch.persistence.database.v2.table.DbV2AccountMapper;

@Repository
@RequiredArgsConstructor
public class ExportMigrationHouseholdAccountSaveRepository implements SaveGateway<ExportHouseholdAccountInput> {
    private final DbV2AccountMapper dbV2AccountMapper;

    @Override
    public void save(ExportHouseholdAccountInput data) {
        dbV2AccountMapper.insert(new DbV2Account() {{
            setId(data.getId());
            setName(data.getName());
            setValidFlag(data.isValidFlag());
            setDisplayOrder(data.getDisplayOrder());
            setGroupId(data.getGroupId());
        }});
    }
}
