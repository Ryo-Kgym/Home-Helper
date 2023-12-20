/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;
import lombok.Value;

import home.helper.batch.domain.model.id.CurrentId;

@Builder
@Value
public class ImportMigrationApplicationOutput implements CurrentId {
    private String applicationId;
    private String application;
    private boolean validFlag;
    private String topUrl;

    @Override
    public String getCurrentId() {
        return applicationId;
    }
}
