/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.export;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class ExportHouseholdGenreInput {
    private String id;
    private String name;
    private String genreType;
    private String iocomeType;
    private boolean validFlag;
    private Integer displayOrder;
    private String groupId;
}