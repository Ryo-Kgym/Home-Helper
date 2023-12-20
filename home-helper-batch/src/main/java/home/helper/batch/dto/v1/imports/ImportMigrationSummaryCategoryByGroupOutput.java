/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;
import lombok.Value;

import home.helper.batch.domain.model.id.CurrentId;

@Builder
@Value
public class ImportMigrationSummaryCategoryByGroupOutput implements CurrentId {
    private String id;
    private String categoryId;
    private int displayOrder;
    private String groupId;

    @Override
    public String getCurrentId() {
        return id;
    }
}
