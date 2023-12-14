/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.migration.imports;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class ImportMigrationGenreOutput {
    private String genreId;
    private String genreName;
    private String genreType;
    private String iocomeType;
    private boolean validFlag;
    private int displayOrder;
    private String groupId;
}
