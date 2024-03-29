/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.export.ExportPublicUserInput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2User;
import home.helper.batch.persistence.database.v2.table.DbV2UserMapper;

@Repository
@RequiredArgsConstructor
public class ExportMigrationPublicUserSaveRepository implements SaveGateway<ExportPublicUserInput> {
    private final DbV2UserMapper dbV2UserMapper;

    @Override
    public void save(ExportPublicUserInput data) {
        dbV2UserMapper.insert(new DbV2User() {{
            setId(data.getId());
            setName(data.getName());
            setDisplayOrder(data.getDisplayOrder());
            setEmail(data.getEmail());
        }});
    }
}
