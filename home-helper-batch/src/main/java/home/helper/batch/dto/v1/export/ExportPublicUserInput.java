/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.dto.v1.export;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class ExportPublicUserInput {
    private String id;
    private String name;
    private Integer displayOrder;
    private String email;
}