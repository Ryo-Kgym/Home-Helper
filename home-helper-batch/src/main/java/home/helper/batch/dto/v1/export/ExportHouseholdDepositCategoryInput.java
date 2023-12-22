/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.export;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class ExportHouseholdDepositCategoryInput {
    private String categoryId;
    private String groupId;
}