/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.imports;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class ImportMigrationAccountOutput {
    private String accountId;
    private String accountName;
    private boolean validFlag;
    private int displayOrder;
    private String groupId;

}
