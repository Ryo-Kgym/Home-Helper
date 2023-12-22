/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.export;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class ExportHouseholdCategoryInput {
    private String id;
    private String name;
    private String genreId;
    private boolean validFlag;
    private int displayOrder;
    private String groupId;
}