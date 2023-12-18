/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationAffiliationOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1Affiliation;
import home.helper.batch.persistence.database.v1.table.DbV1AffiliationMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationAffiliationSaveRepository implements SaveGateway<ImportMigrationAffiliationOutput> {
    private final DbV1AffiliationMapper dbV1AffiliationMapper;

    @Override
    public void save(ImportMigrationAffiliationOutput data) {
        dbV1AffiliationMapper.insert(new DbV1Affiliation() {{
            setAffiliationId(data.getAffiliationId());
            setGroupId(data.getGroupId());
            setUserId(data.getUserId());
            setGroupRoleId(data.getGroupRoleId());
        }});
    }
}
