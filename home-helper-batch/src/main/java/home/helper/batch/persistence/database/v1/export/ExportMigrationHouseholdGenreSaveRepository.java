/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.export.ExportHouseholdGenreInput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2Genre;
import home.helper.batch.persistence.database.v2.table.DbV2GenreMapper;

@Repository
@RequiredArgsConstructor
public class ExportMigrationHouseholdGenreSaveRepository implements SaveGateway<ExportHouseholdGenreInput> {
    private final DbV2GenreMapper dbV2GenreMapper;

    @Override
    public void save(ExportHouseholdGenreInput data) {
        dbV2GenreMapper.insert(new DbV2Genre() {{
            setId(data.getId());
            setName(data.getName());
            setGenreType(data.getGenreType());
            setIocomeType(data.getIocomeType());
            setValidFlag(data.isValidFlag());
            setDisplayOrder(data.getDisplayOrder());
            setGroupId(data.getGroupId());
        }});
    }
}
