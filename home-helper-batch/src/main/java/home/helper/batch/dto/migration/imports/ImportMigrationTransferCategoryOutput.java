/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.migration.imports;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class ImportMigrationTransferCategoryOutput {
    private String groupId;
    private String incomeCategoryId;
    private String outcomeCategoryId;
}
