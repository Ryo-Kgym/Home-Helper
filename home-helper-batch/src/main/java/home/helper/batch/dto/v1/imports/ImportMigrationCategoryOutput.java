/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class ImportMigrationCategoryOutput {
    private String categoryId;
    private String categoryName;
    private String genreId;
    private boolean validFlag;
    private int displayOrder;
    private String groupId;
}
