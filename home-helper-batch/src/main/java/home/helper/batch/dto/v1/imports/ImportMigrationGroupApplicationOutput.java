/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;
import lombok.Value;

import home.helper.batch.domain.model.id.CurrentId;

@Builder
@Value
public class ImportMigrationGroupApplicationOutput implements CurrentId {
    private String groupApplicationId;
    private String groupId;
    private String applicationId;

    @Override
    public String getCurrentId() {
        return groupApplicationId;
    }
}
