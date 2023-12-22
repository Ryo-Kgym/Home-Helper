/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.export;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class ExportHouseholdAccountInput {
    private String id;
    private String name;
    private boolean validFlag;
    private int displayOrder;
    private String groupId;
}