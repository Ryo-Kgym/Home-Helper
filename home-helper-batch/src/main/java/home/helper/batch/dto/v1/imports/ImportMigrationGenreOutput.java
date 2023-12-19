/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;
import lombok.Value;

import home.helper.batch.domain.model.id.CurrentId;

@Builder
@Value
public class ImportMigrationGenreOutput implements CurrentId {
    private String genreId;
    private String genreName;
    private String genreType;
    private String iocomeType;
    private boolean validFlag;
    private int displayOrder;
    private String groupId;

    @Override
    public String getCurrentId() {
        return genreId;
    }
}