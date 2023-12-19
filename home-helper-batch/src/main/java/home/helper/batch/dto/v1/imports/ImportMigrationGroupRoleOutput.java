/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;
import lombok.Value;

import home.helper.batch.domain.model.id.CurrentId;

@Builder
@Value
public class ImportMigrationGroupRoleOutput implements CurrentId {
    private String groupRoleId;
    private String role;

    @Override
    public String getCurrentId() {
        return groupRoleId;
    }
}
