/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.export.ExportPublicAffiliationInput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2Affiliation;
import home.helper.batch.persistence.database.v2.table.DbV2AffiliationMapper;

@Repository
@RequiredArgsConstructor
public class ExportMigrationPublicAffiliationSaveRepository implements SaveGateway<ExportPublicAffiliationInput> {
    private final DbV2AffiliationMapper dbV2AffiliationMapper;

    @Override
    public void save(ExportPublicAffiliationInput data) {
        dbV2AffiliationMapper.insert(new DbV2Affiliation() {{
            setId(data.getId());
            setUserId(data.getUserId());
            setGroupId(data.getGroupId());
            setGroupRole(data.getGroupRole());
        }});
    }
}
