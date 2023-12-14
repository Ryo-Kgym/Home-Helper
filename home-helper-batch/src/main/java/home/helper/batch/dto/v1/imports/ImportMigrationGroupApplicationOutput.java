/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class ImportMigrationGroupApplicationOutput {
    private String groupApplicationId;
    private String groupId;
    private String applicationId;
}
