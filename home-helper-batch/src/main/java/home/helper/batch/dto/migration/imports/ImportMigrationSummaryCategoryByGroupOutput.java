/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.migration.imports;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class ImportMigrationSummaryCategoryByGroupOutput {
    private String id;
    private String categoryId;
    private int displayOrder;
    private String groupId;
}
