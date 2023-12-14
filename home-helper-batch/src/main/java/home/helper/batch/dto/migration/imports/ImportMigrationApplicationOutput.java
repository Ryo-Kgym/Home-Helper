/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.migration.imports;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class ImportMigrationApplicationOutput {
    private String applicationId;
    private String application;
    private boolean validFlag;
    private String topUrl;

}
