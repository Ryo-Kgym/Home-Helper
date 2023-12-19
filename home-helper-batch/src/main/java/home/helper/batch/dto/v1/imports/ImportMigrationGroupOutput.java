/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;
import lombok.Value;

import home.helper.batch.domain.model.id.CurrentId;

@Builder
@Value
public class ImportMigrationGroupOutput implements CurrentId {
    private String groupId;
    private String groupName;

    @Override
    public String getCurrentId() {
        return groupId;
    }
}
