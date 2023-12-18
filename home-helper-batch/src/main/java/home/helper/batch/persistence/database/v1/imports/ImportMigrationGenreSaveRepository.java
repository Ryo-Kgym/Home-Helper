/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.dto.v1.imports.ImportMigrationGenreOutput;
import home.helper.batch.gateway.SaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1Genre;
import home.helper.batch.persistence.database.v1.table.DbV1GenreMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationGenreSaveRepository implements SaveGateway<ImportMigrationGenreOutput> {
    private final DbV1GenreMapper dbV1GenreMapper;

    @Override
    public void save(ImportMigrationGenreOutput data) {
        dbV1GenreMapper.insert(new DbV1Genre() {{
            setGenreId(data.getGenreId());
            setGenreName(data.getGenreName());
            setGenreType(data.getGenreType());
            setIocomeType(data.getIocomeType());
            setValidFlag(data.isValidFlag());
            setDisplayOrder(data.getDisplayOrder());
            setGroupId(data.getGroupId());
        }});
    }
}
